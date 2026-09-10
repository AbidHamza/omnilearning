import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { toUiRole } from "@/lib/roles";
import { homeByRole } from "@/lib/routes";
import { localePath, type Locale } from "@/i18n/config";
import { formatDate } from "@/lib/intl";
import { parseCurriculum, type DraftModule } from "@/lib/curriculum";
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
        enrollments: {
          include: {
            course: { select: { slug: true } },
            _count: {
              select: { lessonProgress: { where: { isCompleted: true } } },
            },
          },
        },
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
        completedLessons: e._count.lessonProgress,
      })),
      // Toujours vide, et ce n'est pas un oubli : aucun certificat n'existe
      // côté base ni côté génération. Le champ survit dans le type le temps que
      // la fonctionnalité soit construite. Ne rien afficher à partir de lui :
      // l'interface promettait un certificat que personne ne recevait jamais.
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

const fmtDate = formatDate;

export type UploadRef = { field: string; url: string; name: string };

export function parseUploads(raw: string | null | undefined): UploadRef[] {
  if (!raw) return [];
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v)
      ? v.filter(
          (u): u is UploadRef =>
            !!u && typeof u.url === "string" && typeof u.field === "string",
        )
      : [];
  } catch {
    return [];
  }
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
      id: c.id,
      slug: c.slug,
      title: c.title,
      status: courseStatusToUi[c.status] ?? "online",
      started: c._count.enrollments,
      finished: c.enrollments.length,
    }));

    const fromDrafts: CreatedCourse[] = drafts.map((d) => ({
      id: d.id,
      draftId: d.id,
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

export type PendingDraft = PendingCourse & {
  id: string;
  /** Prix proposé par le formateur. L'admin le confirme ou le change. */
  priceCents: number;
  currency: string;
  instructorEmail: string;
  description: string;
  skills: string;
  prerequisites: string;
  uploads: UploadRef[];
  curriculum: DraftModule[];
};

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
  async (locale: string = "fr"): Promise<AdminDashboard | null> => {
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
      category: d.category ?? "--",
      level: d.level ?? "--",
      priceCents: d.priceCents,
      currency: d.currency,
      instructorEmail: d.author.email,
      description: d.description ?? "",
      skills: d.skills ?? "",
      prerequisites: d.prerequisites ?? "",
      uploads: parseUploads(d.uploads),
      curriculum: parseCurriculum(d.curriculum),
      submitted: fmtDate(d.updatedAt, locale),
    }));

    const recentUsers: PlatformUser[] = recent.map((u) => ({
      name: u.name ?? u.email,
      initials: initialsOf(u.name, u.email),
      role: uiRoleLabel[u.role] ?? "Apprenant",
      joined: fmtDate(u.createdAt, locale),
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
 * État "visiteur vs membre" pour une fiche cours / page leçon : authentifié ?
 * et, si oui, quelles leçons de CE cours sont déjà terminées (keys). Sert au
 * gating freemium et aux coches de complétion. Mémoïsé par render.
 */
export const getCourseViewerState = cache(
  async (
    courseSlug: string,
  ): Promise<{
    isAuthenticated: boolean;
    isEnrolled: boolean;
    hasReviewed: boolean;
    completedKeys: string[];
  }> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return { isAuthenticated: false, isEnrolled: false, hasReviewed: false, completedKeys: [] };
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: { userId, course: { slug: courseSlug } },
      select: {
        lessonProgress: {
          where: { isCompleted: true },
          select: { lesson: { select: { key: true } } },
        },
      },
    });
    const review = await prisma.review.findFirst({
      where: { userId, course: { slug: courseSlug } },
      select: { id: true },
    });
    return {
      isAuthenticated: true,
      isEnrolled: Boolean(enrollment),
      hasReviewed: Boolean(review),
      completedKeys: enrollment?.lessonProgress.map((p) => p.lesson.key) ?? [],
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

export type ConnectStage =
  | "off" // Stripe non configuré côté serveur
  | "none" // aucune fiche formateur
  | "pending" // candidature déposée, pas encore tranchée
  | "rejected"
  | "todo" // approuvé, compte Stripe pas encore ouvert
  | "incomplete" // compte ouvert, dossier Stripe inachevé
  | "ready"; // encaissement et versements actifs

export interface InstructorPayouts {
  stage: ConnectStage;
  revenueSharePct: number;
  chargesEnabled: boolean;
  payoutsEnabled: boolean;
  detailsSubmitted: boolean;
  hasAccount: boolean;
  currency: string;
  salesCount: number;
  grossCents: number;
  earnedCents: number;
  platformCents: number;
  refundedCount: number;
  recent: { title: string; date: string; amountCents: number; earnedCents: number }[];
}

/**
 * Revenus réels du formateur connecté et état de son compte Stripe Connect.
 *
 * Les montants ne se recalculent pas depuis le barème courant : ils se lisent
 * dans les lignes Purchase, où le découpage a été figé à la vente. Changer le
 * pourcentage demain ne doit pas réécrire ce qui a déjà été encaissé.
 */
export const getInstructorPayouts = cache(
  async (locale: string = "fr"): Promise<InstructorPayouts | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    const role = session?.user?.role;
    if (!userId) return null;
    if (role !== "INSTRUCTOR" && role !== "ADMIN") return null;

    const [profile, paid, refundedCount] = await Promise.all([
      prisma.instructorProfile.findUnique({
        where: { userId },
        select: {
          applicationStatus: true,
          revenueSharePct: true,
          stripeAccountId: true,
          chargesEnabled: true,
          payoutsEnabled: true,
          detailsSubmitted: true,
        },
      }),
      prisma.purchase.findMany({
        where: { status: "paid", course: { instructorId: userId } },
        select: {
          amountCents: true,
          currency: true,
          instructorAmountCents: true,
          platformFeeCents: true,
          paidAt: true,
          createdAt: true,
          course: { select: { title: true } },
        },
        orderBy: { paidAt: "desc" },
        take: 200,
      }),
      prisma.purchase.count({
        where: { status: "refunded", course: { instructorId: userId } },
      }),
    ]);

    const stripeOn = Boolean(process.env.STRIPE_SECRET_KEY);
    const hasAccount = Boolean(profile?.stripeAccountId);
    let stage: ConnectStage;
    if (!stripeOn) stage = "off";
    else if (!profile) stage = "none";
    else if (profile.applicationStatus === "PENDING") stage = "pending";
    else if (profile.applicationStatus === "REJECTED") stage = "rejected";
    else if (!hasAccount) stage = "todo";
    else if (profile.chargesEnabled && profile.payoutsEnabled) stage = "ready";
    else stage = "incomplete";

    const grossCents = paid.reduce((s, p) => s + p.amountCents, 0);
    const earnedCents = paid.reduce((s, p) => s + p.instructorAmountCents, 0);
    const platformCents = paid.reduce((s, p) => s + p.platformFeeCents, 0);

    return {
      stage,
      revenueSharePct: profile?.revenueSharePct ?? 70,
      chargesEnabled: profile?.chargesEnabled ?? false,
      payoutsEnabled: profile?.payoutsEnabled ?? false,
      detailsSubmitted: profile?.detailsSubmitted ?? false,
      hasAccount,
      currency: paid[0]?.currency ?? "eur",
      salesCount: paid.length,
      grossCents,
      earnedCents,
      platformCents,
      refundedCount,
      recent: paid.slice(0, 8).map((p) => ({
        title: p.course.title,
        date: fmtDate(p.paidAt ?? p.createdAt, locale),
        amountCents: p.amountCents,
        earnedCents: p.instructorAmountCents,
      })),
    };
  },
);

export interface PendingInstructor {
  id: string;
  name: string;
  email: string;
  headline: string;
  bio: string;
  expertise: string;
  website: string;
  country: string;
  applied: string;
}

/** File des candidatures formateur en attente, pour l'espace admin. */
export const getPendingInstructors = cache(
  async (locale: string = "fr"): Promise<PendingInstructor[]> => {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return [];

    const rows = await prisma.instructorProfile.findMany({
      where: { applicationStatus: "PENDING" },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        displayName: true,
        headline: true,
        bio: true,
        expertise: true,
        website: true,
        country: true,
        createdAt: true,
        user: { select: { email: true } },
      },
    });

    return rows.map((r) => ({
      id: r.id,
      name: r.displayName,
      email: r.user.email,
      headline: r.headline ?? "",
      bio: r.bio ?? "",
      expertise: r.expertise ?? "",
      website: r.website ?? "",
      country: r.country,
      applied: fmtDate(r.createdAt, locale),
    }));
  },
);

/**
 * État de la candidature formateur du compte connecté, pour la page publique
 * « devenir formateur ». Volontairement plus permissif que
 * `getInstructorPayouts` : un candidat est encore un simple apprenant, il n'a
 * aucun rôle à faire valoir ici.
 *
 * `null` = personne de connecté. `"none"` = connecté, aucune candidature.
 */
export type ApplicationState = "none" | "PENDING" | "APPROVED" | "REJECTED";

export const getMyApplicationState = cache(
  async (): Promise<{ state: ApplicationState; name: string } | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null;

    const row = await prisma.instructorProfile.findUnique({
      where: { userId },
      select: { applicationStatus: true, displayName: true },
    });

    const fallbackName = session.user?.name ?? "";
    if (!row) return { state: "none", name: fallbackName };

    const raw = row.applicationStatus;
    const state: ApplicationState =
      raw === "PENDING" || raw === "APPROVED" || raw === "REJECTED"
        ? raw
        : "none";
    return { state, name: row.displayName || fallbackName };
  },
);

export interface DraftForEdit {
  id: string;
  status: string;
  category: string;
  name: string;
  description: string;
  level: string;
  skills: string;
  prerequisites: string;
  structure: string;
  priceCents: number;
  activities: { type: string; instruction: string }[];
  uploads: UploadRef[];
  curriculum: DraftModule[];
}

/**
 * Brouillon à reprendre dans l'assistant de création. Seul l'auteur le lit :
 * un id deviné par un autre formateur renvoie null, comme un id inexistant.
 */
export const getDraftForEdit = cache(
  async (draftId: string): Promise<DraftForEdit | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null;
    const d = await prisma.courseDraft.findFirst({
      where: { id: draftId, authorId: userId },
    });
    if (!d) return null;
    let activities: { type: string; instruction: string }[] = [];
    try {
      const v = d.activities ? JSON.parse(d.activities) : [];
      if (Array.isArray(v)) {
        activities = v.filter(
          (a): a is { type: string; instruction: string } =>
            !!a && typeof a.type === "string" && typeof a.instruction === "string",
        );
      }
    } catch {
      activities = [];
    }
    return {
      id: d.id,
      status: d.status,
      category: d.category ?? "",
      name: d.name ?? "",
      description: d.description ?? "",
      level: d.level ?? "",
      skills: d.skills ?? "",
      prerequisites: d.prerequisites ?? "",
      structure: d.structure ?? "",
      priceCents: d.priceCents,
      activities,
      uploads: parseUploads(d.uploads),
      curriculum: parseCurriculum(d.curriculum),
    };
  },
);

function dayKey(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

/**
 * Inscriptions par jour sur les cours du formateur connecté, sur les derniers
 * `days` jours. Alimente la courbe de l'espace formateur : une journée sans
 * inscription vaut zéro, elle n'est pas omise.
 */
export const getInstructorEnrollmentsByDay = cache(
  async (days = 14): Promise<{ label: string; value: number }[]> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return [];
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    start.setDate(start.getDate() - (days - 1));

    const rows = await prisma.enrollment.findMany({
      where: { course: { instructorId: userId }, createdAt: { gte: start } },
      select: { createdAt: true },
    });
    const byDay = new Map<string, number>();
    for (const r of rows) {
      const k = dayKey(r.createdAt);
      byDay.set(k, (byDay.get(k) ?? 0) + 1);
    }
    const out: { label: string; value: number }[] = [];
    for (let i = 0; i < days; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      out.push({ label: `${dd}/${mm}`, value: byDay.get(dayKey(d)) ?? 0 });
    }
    return out;
  },
);

export interface PurchaseRow {
  id: string;
  courseTitle: string;
  courseSlug: string;
  status: string;
  amountCents: number;
  currency: string;
  date: string;
}

/** Achats du compte connecté, du plus récent au plus ancien. */
export const getPurchasesForUser = cache(
  async (locale: string = "fr"): Promise<PurchaseRow[]> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return [];
    const rows = await prisma.purchase.findMany({
      where: { userId, status: { in: ["paid", "refunded"] } },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        status: true,
        amountCents: true,
        currency: true,
        paidAt: true,
        refundedAt: true,
        createdAt: true,
        course: { select: { title: true, slug: true } },
      },
    });
    return rows.map((p) => ({
      id: p.id,
      courseTitle: p.course.title,
      courseSlug: p.course.slug,
      status: p.status,
      amountCents: p.amountCents,
      currency: p.currency,
      date: fmtDate(
        p.status === "refunded" ? (p.refundedAt ?? p.createdAt) : (p.paidAt ?? p.createdAt),
        locale,
      ),
    }));
  },
);

/** Une inscription terminée ouvre le certificat. Sinon null. */
export const getCompletedEnrollment = cache(
  async (
    courseSlug: string,
  ): Promise<{ userName: string; courseTitle: string; instructorName: string; completedAt: Date; hours: number } | null> => {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null;
    const e = await prisma.enrollment.findFirst({
      where: { userId, course: { slug: courseSlug }, completedAt: { not: null } },
      select: {
        completedAt: true,
        user: { select: { name: true, email: true } },
        course: { select: { title: true, instructorName: true, hours: true } },
      },
    });
    if (!e || !e.completedAt) return null;
    return {
      userName: e.user.name ?? e.user.email,
      courseTitle: e.course.title,
      instructorName: e.course.instructorName,
      completedAt: e.completedAt,
      hours: e.course.hours,
    };
  },
);
