import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { toUiRole } from "@/lib/roles";
import { homeByRole } from "@/lib/routes";
import { localePath, type Locale } from "@/i18n/config";
import type {
  CreatedCourse,
  CourseStatus,
  InstructorStats,
  PendingCourse,
  PlatformUser,
  Role,
  User,
} from "@/lib/types";

function initials(name: string | null | undefined, email: string): string {
  const src = (name ?? email).trim();
  const parts = src.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}

/**
 * Session vérifiée + utilisateur en forme UI (avec inscriptions/progression DB).
 * Mémoïsé par render React. Renvoie null si non connecté.
 */
export const getCurrentUser = cache(
  async (): Promise<{ role: Role; user: User } | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null;

    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        enrollments: { include: { course: { select: { slug: true } } } },
      },
    });
    if (!dbUser) return null;

    const role = toUiRole(dbUser.role);
    const user: User = {
      name: dbUser.name ?? dbUser.email,
      email: dbUser.email,
      initials: initials(dbUser.name, dbUser.email),
      role,
      enrolled: dbUser.enrollments.map((e) => ({
        slug: e.course.slug,
        progress: e.progress,
        lastLesson: e.lastLesson ?? "",
      })),
      certificates: [],
    };

    return { role, user };
  },
);

/**
 * Garde SERVEUR autoritaire pour une page réservée. Vérifie le rôle RÉEL de la
 * session (DB via JWT). Comportement :
 *  - non connecté            -> redirect /<locale>/connexion
 *  - connecté mais mauvais rôle -> redirect vers SON espace (homeByRole)
 *  - autorisé                -> renvoie { role, user } (jamais null)
 *
 * Aucune donnée de démo n'est jamais rendue à un visiteur : la seule façon
 * d'accéder à /admin est d'être ADMIN en base, etc.
 */
export async function requireRole(
  locale: Locale,
  allowed: Role[],
): Promise<{ role: Role; user: User }> {
  const session = await getCurrentUser();
  if (!session) {
    redirect(localePath(locale, "/connexion"));
  }
  if (!allowed.includes(session.role)) {
    redirect(localePath(locale, homeByRole[session.role]));
  }
  return session;
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const draftStatusToUi: Record<string, CourseStatus> = {
  DRAFT: "draft",
  SUBMITTED: "pending",
};

const courseStatusToUi: Record<string, CourseStatus> = {
  PUBLISHED: "online",
  DRAFT: "draft",
  ARCHIVED: "online",
};

export interface InstructorDashboard {
  name: string;
  created: CreatedCourse[];
  stats: InstructorStats;
}

/**
 * Données réelles de l'espace formateur : cours publiés (Course liés à
 * l'instructeur) + brouillons/soumissions (CourseDraft), avec compteurs
 * d'inscriptions et de complétions tirés de la DB. Renvoie null si non connecté
 * ou si l'utilisateur n'est pas formateur/admin.
 */
export const getInstructorDashboard = cache(
  async (): Promise<InstructorDashboard | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    const role = session?.user?.role;
    if (!userId) return null;
    if (role !== "INSTRUCTOR" && role !== "ADMIN") return null;

    const dbUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!dbUser) return null;

    const [publishedCourses, drafts] = await Promise.all([
      prisma.course.findMany({
        where: { instructorId: userId },
        include: {
          _count: { select: { enrollments: true } },
          enrollments: { where: { completedAt: { not: null } }, select: { id: true } },
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.courseDraft.findMany({
        where: { authorId: userId },
        orderBy: { updatedAt: "desc" },
      }),
    ]);

    const fromCourses: CreatedCourse[] = publishedCourses.map((c) => ({
      title: c.title,
      status: courseStatusToUi[c.status] ?? "online",
      started: c._count.enrollments,
      finished: c.enrollments.length,
    }));

    const fromDrafts: CreatedCourse[] = drafts.map((d) => ({
      title: d.name?.trim() || "Formation sans titre",
      status: draftStatusToUi[d.status] ?? "draft",
      started: 0,
      finished: 0,
    }));

    const created = [...fromCourses, ...fromDrafts];

    const started = fromCourses.reduce((s, c) => s + c.started, 0);
    const finished = fromCourses.reduce((s, c) => s + c.finished, 0);
    const ratings = publishedCourses.map((c) => c.rating).filter((r) => r > 0);
    const rating = ratings.length
      ? ratings.reduce((s, r) => s + r, 0) / ratings.length
      : 0;

    return {
      name: dbUser.name ?? dbUser.email,
      created,
      stats: { started, finished, rating },
    };
  },
);

export type PendingDraft = PendingCourse & { id: string };

export interface AdminDashboard {
  pending: PendingDraft[];
  stats: { online: number; pending: number; instructors: number; learners: number };
  recentUsers: PlatformUser[];
}

function initialsOf(name: string | null, email: string): string {
  const src = (name ?? email).trim();
  const parts = src.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return src.slice(0, 2).toUpperCase();
}

const uiRoleLabel: Record<string, string> = {
  INSTRUCTOR: "Formateur",
  ADMIN: "Administrateur",
  USER: "Apprenant",
};

/**
 * Données réelles de l'espace admin : file des brouillons soumis (à modérer),
 * statistiques plateforme et derniers inscrits, le tout depuis la DB. Renvoie
 * null si non connecté ou si l'utilisateur n'est pas admin.
 */
export const getAdminDashboard = cache(
  async (): Promise<AdminDashboard | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId || session?.user?.role !== "ADMIN") return null;

    const [submitted, onlineCount, instructorCount, learnerCount, recent] =
      await Promise.all([
        prisma.courseDraft.findMany({
          where: { status: "SUBMITTED" },
          include: { author: { select: { name: true, email: true } } },
          orderBy: { updatedAt: "desc" },
        }),
        prisma.course.count({ where: { status: "PUBLISHED" } }),
        prisma.user.count({ where: { role: "INSTRUCTOR" } }),
        prisma.user.count({ where: { role: "USER" } }),
        prisma.user.findMany({
          orderBy: { createdAt: "desc" },
          take: 6,
          select: { name: true, email: true, role: true, createdAt: true },
        }),
      ]);

    const pending: PendingDraft[] = submitted.map((d) => ({
      id: d.id,
      title: d.name?.trim() || "Formation sans titre",
      instructor: d.author.name ?? d.author.email,
      category: d.category ?? "—",
      level: d.level ?? "—",
      submitted: fmtDate(d.updatedAt),
    }));

    const recentUsers: PlatformUser[] = recent.map((u) => ({
      name: u.name ?? u.email,
      initials: initialsOf(u.name, u.email),
      role: uiRoleLabel[u.role] ?? "Apprenant",
      joined: fmtDate(u.createdAt),
    }));

    return {
      pending,
      stats: {
        online: onlineCount,
        pending: pending.length,
        instructors: instructorCount,
        learners: learnerCount,
      },
      recentUsers,
    };
  },
);

/**
 * Indique si l'utilisateur connecté possède un client Stripe (donc un bouton
 * "gérer mon abonnement" pertinent) et si Stripe est configuré côté serveur.
 */
export const getBillingState = cache(
  async (): Promise<{ stripeEnabled: boolean; hasCustomer: boolean }> => {
    const stripeEnabled = Boolean(process.env.STRIPE_SECRET_KEY);
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return { stripeEnabled, hasCustomer: false };
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { stripeCustomerId: true },
    });
    return { stripeEnabled, hasCustomer: Boolean(user?.stripeCustomerId) };
  },
);
