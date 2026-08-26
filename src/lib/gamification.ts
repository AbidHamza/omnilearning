import "server-only";
import { prisma } from "@/lib/db";

// Couche de gamification sobre : l'XP vient uniquement d'un vrai travail
// (leçon terminée, quiz réussi, cours bouclé). Le total d'XP est la somme d'un
// journal append-only (XpEvent) ; UserStats est un cache dérivé recalculé après
// chaque gain. Pas de vies, pas de notif culpabilisante, pas de loot-box.

export const XP = {
  lesson_complete: 20,
  quiz_passed: 30,
  course_completed: 120,
} as const;

export type XpReason = keyof typeof XP | "streak_bonus";

/** XP cumulée nécessaire pour atteindre un niveau (courbe triangulaire douce). */
export function xpToReachLevel(level: number): number {
  return 50 * (level - 1) * level; // L1=0, L2=100, L3=300, L4=600, L5=1000…
}

export function levelForXp(xp: number): number {
  let level = 1;
  while (xpToReachLevel(level + 1) <= xp) level++;
  return level;
}

export interface LevelInfo {
  level: number;
  xp: number;
  levelFloor: number;
  levelCeil: number;
  intoLevel: number;
  levelSpan: number;
  pct: number;
}

export function levelInfo(xp: number): LevelInfo {
  const level = levelForXp(xp);
  const levelFloor = xpToReachLevel(level);
  const levelCeil = xpToReachLevel(level + 1);
  const intoLevel = xp - levelFloor;
  const levelSpan = levelCeil - levelFloor;
  return {
    level,
    xp,
    levelFloor,
    levelCeil,
    intoLevel,
    levelSpan,
    pct: levelSpan > 0 ? Math.round((intoLevel / levelSpan) * 100) : 0,
  };
}

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function daysBetween(a: Date, b: Date): number {
  const da = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const db = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

/**
 * Attribue de l'XP de façon idempotente : un même (userId, reason, refId) ne
 * compte qu'une fois. Recalcule ensuite le niveau, la série et les badges.
 * Renvoie l'état de gamification à jour (ou null si déjà attribué / non connecté).
 */
export async function awardXp(
  userId: string,
  reason: XpReason,
  refId: string | null,
  amountOverride?: number,
): Promise<{ awarded: number; newLevel: boolean; newBadges: string[] } | null> {
  const amount = amountOverride ?? (reason in XP ? XP[reason as keyof typeof XP] : 0);
  if (amount <= 0) return null;

  // Idempotence : si l'évènement existe déjà, on ne fait rien.
  if (refId) {
    const existing = await prisma.xpEvent.findFirst({
      where: { userId, reason, refId },
      select: { id: true },
    });
    if (existing) return null;
  }

  const before = await getOrInitStats(userId);
  const prevLevel = before.level;

  await prisma.xpEvent.create({ data: { userId, amount, reason, refId } });

  const stats = await recomputeStats(userId);
  const newBadges = await checkBadges(userId);

  return {
    awarded: amount,
    newLevel: stats.level > prevLevel,
    newBadges,
  };
}

async function getOrInitStats(userId: string) {
  const existing = await prisma.userStats.findUnique({ where: { userId } });
  if (existing) return existing;
  return prisma.userStats.create({ data: { userId } });
}

/** Somme l'XP, recalcule niveau + série (streak) à partir de l'activité du jour. */
export async function recomputeStats(userId: string) {
  const agg = await prisma.xpEvent.aggregate({
    where: { userId },
    _sum: { amount: true },
  });
  const xp = agg._sum.amount ?? 0;
  const level = levelForXp(xp);

  const current = await getOrInitStats(userId);
  const now = new Date();

  let currentStreak = current.currentStreak;
  let longestStreak = current.longestStreak;
  const last = current.lastActiveDate;

  if (!last) {
    currentStreak = 1;
  } else if (dayKey(last) !== dayKey(now)) {
    const gap = daysBetween(last, now);
    currentStreak = gap === 1 ? currentStreak + 1 : 1;
  }
  if (currentStreak > longestStreak) longestStreak = currentStreak;

  return prisma.userStats.update({
    where: { userId },
    data: { xp, level, currentStreak, longestStreak, lastActiveDate: now },
  });
}

interface BadgeCondition {
  type: "xp" | "streak" | "courses_completed" | "quizzes_passed" | "lessons_completed";
  threshold: number;
}

/** Compteurs dérivés du journal (une seule source de vérité). */
async function userCounters(userId: string) {
  const [stats, byReason, coursesCompleted] = await Promise.all([
    prisma.userStats.findUnique({ where: { userId } }),
    prisma.xpEvent.groupBy({
      by: ["reason"],
      where: { userId },
      _count: { _all: true },
    }),
    prisma.enrollment.count({ where: { userId, completedAt: { not: null } } }),
  ]);
  const count = (r: string) =>
    byReason.find((b) => b.reason === r)?._count._all ?? 0;
  return {
    xp: stats?.xp ?? 0,
    streak: stats?.longestStreak ?? 0,
    courses_completed: coursesCompleted,
    quizzes_passed: count("quiz_passed"),
    lessons_completed: count("lesson_complete"),
  };
}

/** Évalue les conditions de tous les badges, décerne les nouveaux. */
export async function checkBadges(userId: string): Promise<string[]> {
  const [badges, owned, counters] = await Promise.all([
    prisma.badge.findMany(),
    prisma.userBadge.findMany({ where: { userId }, select: { badgeId: true } }),
    userCounters(userId),
  ]);
  const ownedIds = new Set(owned.map((b) => b.badgeId));
  const earned: string[] = [];

  for (const badge of badges) {
    if (ownedIds.has(badge.id)) continue;
    let cond: BadgeCondition;
    try {
      cond = JSON.parse(badge.condition) as BadgeCondition;
    } catch {
      continue;
    }
    const value = counters[cond.type] ?? 0;
    if (value >= cond.threshold) {
      await prisma.userBadge.create({ data: { userId, badgeId: badge.id } });
      earned.push(badge.slug);
    }
  }
  return earned;
}

export interface GamificationView {
  xp: number;
  level: LevelInfo;
  currentStreak: number;
  longestStreak: number;
  badges: {
    slug: string;
    label: string;
    description: string;
    icon: string;
    tier: string;
    earnedAt: Date;
  }[];
  lockedBadges: { slug: string; label: string; description: string; icon: string; tier: string }[];
}

/** Vue complète pour le tableau de bord d'un apprenant. */
export async function getGamification(userId: string): Promise<GamificationView> {
  const [stats, userBadges, allBadges] = await Promise.all([
    prisma.userStats.findUnique({ where: { userId } }),
    prisma.userBadge.findMany({
      where: { userId },
      include: { badge: true },
      orderBy: { earnedAt: "desc" },
    }),
    prisma.badge.findMany(),
  ]);

  const xp = stats?.xp ?? 0;
  const ownedSlugs = new Set(userBadges.map((b) => b.badge.slug));

  return {
    xp,
    level: levelInfo(xp),
    currentStreak: stats?.currentStreak ?? 0,
    longestStreak: stats?.longestStreak ?? 0,
    badges: userBadges.map((ub) => ({
      slug: ub.badge.slug,
      label: ub.badge.label,
      description: ub.badge.description,
      icon: ub.badge.icon,
      tier: ub.badge.tier,
      earnedAt: ub.earnedAt,
    })),
    lockedBadges: allBadges
      .filter((b) => !ownedSlugs.has(b.slug))
      .map((b) => ({
        slug: b.slug,
        label: b.label,
        description: b.description,
        icon: b.icon,
        tier: b.tier,
      })),
  };
}

export interface XpDayPoint {
  /** Libellé court du jour (ex. "12/06"). */
  label: string;
  value: number;
}

/**
 * XP réellement gagnée par jour sur les `days` derniers jours (journal XpEvent),
 * du plus ancien au plus récent. Jours sans activité = 0.
 */
export async function getXpByDay(userId: string, days = 14): Promise<XpDayPoint[]> {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  start.setDate(start.getDate() - (days - 1));

  const events = await prisma.xpEvent.findMany({
    where: { userId, createdAt: { gte: start } },
    select: { amount: true, createdAt: true },
  });

  const byDay = new Map<string, number>();
  for (const e of events) {
    const k = dayKey(e.createdAt);
    byDay.set(k, (byDay.get(k) ?? 0) + e.amount);
  }

  const out: XpDayPoint[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    out.push({ label: `${dd}/${mm}`, value: byDay.get(dayKey(d)) ?? 0 });
  }
  return out;
}

export interface LeaderboardRow {
  rank: number;
  name: string;
  initials: string;
  xp: number;
  level: number;
  isCurrentUser: boolean;
}

/** Classement par XP (top N). Relatif, jamais culpabilisant : on met en avant l'effort. */
export async function getLeaderboard(
  currentUserId: string | null,
  take = 20,
): Promise<LeaderboardRow[]> {
  const rows = await prisma.userStats.findMany({
    orderBy: { xp: "desc" },
    take,
    include: { user: { select: { id: true, name: true, email: true } } },
  });
  return rows.map((r, i) => {
    const name = r.user.name ?? r.user.email;
    const parts = name.trim().split(/\s+/).filter(Boolean);
    const initials =
      parts.length >= 2
        ? (parts[0][0] + parts[1][0]).toUpperCase()
        : name.slice(0, 2).toUpperCase();
    return {
      rank: i + 1,
      name,
      initials,
      xp: r.xp,
      level: r.level,
      isCurrentUser: r.user.id === currentUserId,
    };
  });
}
