"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { awardXp } from "@/lib/gamification";
import { QUIZ_PASS_RATIO } from "@/lib/curriculum";

// Persiste la progression (inscriptions, leçons terminées, tentatives de quiz)
// liée à l'utilisateur connecté. No-op silencieux si non connecté (mode démo).

async function currentUserId(): Promise<string | null> {
  const session = await auth();
  return session?.user?.id ?? null;
}

/** Garantit une inscription (enrollment) pour (user, course). Renvoie son id. */
async function ensureEnrollment(userId: string, courseId: string) {
  return prisma.enrollment.upsert({
    where: { userId_courseId: { userId, courseId } },
    update: { lastAccessedAt: new Date() },
    create: { userId, courseId, lastAccessedAt: new Date() },
  });
}

/** Recalcule le % de progression d'une inscription à partir des leçons terminées. */
async function recomputeProgress(enrollmentId: string, courseId: string) {
  const totalLessons = await prisma.lesson.count({
    where: { part: { courseId } },
  });
  const done = await prisma.lessonProgress.count({
    where: { enrollmentId, isCompleted: true },
  });
  const progress = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0;
  await prisma.enrollment.update({
    where: { id: enrollmentId },
    data: {
      progress,
      completedAt: progress >= 100 ? new Date() : null,
    },
  });
  return progress;
}

/** S'inscrire à un cours (bouton "Commencer"). */
export async function enrollAction(courseSlug: string) {
  const userId = await currentUserId();
  if (!userId) return { ok: false as const };
  const course = await prisma.course.findUnique({ where: { slug: courseSlug } });
  if (!course) return { ok: false as const };
  await ensureEnrollment(userId, course.id);
  return { ok: true as const };
}

/**
 * Ouverture d'une leçon par un utilisateur connecté : crée l'inscription si
 * besoin (auto-enrollment) et mémorise la KEY de la leçon comme point de
 * reprise (`lastLesson`), sans la marquer terminée.
 */
export async function openLessonAction(courseSlug: string, lessonKey: string) {
  const userId = await currentUserId();
  if (!userId) return { ok: false as const };

  const course = await prisma.course.findUnique({ where: { slug: courseSlug } });
  if (!course) return { ok: false as const };
  const lesson = await prisma.lesson.findFirst({
    where: { key: lessonKey, part: { courseId: course.id } },
    select: { key: true },
  });
  if (!lesson) return { ok: false as const };

  const enrollment = await ensureEnrollment(userId, course.id);
  await prisma.enrollment.update({
    where: { id: enrollment.id },
    data: { lastLesson: lesson.key, lastAccessedAt: new Date() },
  });
  return { ok: true as const };
}

/** Marque une leçon comme terminée (vidéo/texte vue, ou quiz réussi). */
export async function markLessonCompleteAction(courseSlug: string, lessonKey: string) {
  const userId = await currentUserId();
  if (!userId) return { ok: false as const };

  const course = await prisma.course.findUnique({ where: { slug: courseSlug } });
  if (!course) return { ok: false as const };

  const lesson = await prisma.lesson.findFirst({
    where: { key: lessonKey, part: { courseId: course.id } },
  });
  if (!lesson) return { ok: false as const };

  const enrollment = await ensureEnrollment(userId, course.id);

  await prisma.lessonProgress.upsert({
    where: { enrollmentId_lessonId: { enrollmentId: enrollment.id, lessonId: lesson.id } },
    update: { isCompleted: true, completedAt: new Date() },
    create: {
      enrollmentId: enrollment.id,
      lessonId: lesson.id,
      isCompleted: true,
      completedAt: new Date(),
    },
  });

  // `lastLesson` stocke la KEY stable de la leçon (ex. "l7"), pas son titre :
  // c'est elle qui permet de reconstruire l'URL de reprise.
  await prisma.enrollment.update({
    where: { id: enrollment.id },
    data: { lastLesson: lesson.key, lastAccessedAt: new Date() },
  });

  const progress = await recomputeProgress(enrollment.id, course.id);

  // Gamification : XP pour la leçon (les quiz sont crédités par leur propre
  // action, on évite le double). Bonus si le cours vient d'être bouclé.
  let reward = null;
  if (lesson.type !== "quiz") {
    reward = await awardXp(userId, "lesson_complete", lesson.id);
  }
  if (progress >= 100) {
    await awardXp(userId, "course_completed", course.id);
  }

  return { ok: true as const, progress, reward };
}

/**
 * Persiste l'état SCORM (cmi complet, sérialisé par scorm-again) à chaque
 * LMSCommit/LMSFinish, et marque la leçon terminée quand le paquet le signale
 * lui-même (cmi.core.lesson_status = "completed"/"passed") — jamais avant.
 */
export async function saveScormProgressAction(input: {
  courseSlug: string;
  lessonKey: string;
  cmiJson: string;
  isCompleted: boolean;
}) {
  const userId = await currentUserId();
  if (!userId) return { ok: false as const };

  const course = await prisma.course.findUnique({ where: { slug: input.courseSlug } });
  if (!course) return { ok: false as const };
  const lesson = await prisma.lesson.findFirst({
    where: { key: input.lessonKey, part: { courseId: course.id } },
  });
  if (!lesson) return { ok: false as const };

  const enrollment = await ensureEnrollment(userId, course.id);

  const existing = await prisma.lessonProgress.findUnique({
    where: { enrollmentId_lessonId: { enrollmentId: enrollment.id, lessonId: lesson.id } },
    select: { isCompleted: true },
  });

  await prisma.lessonProgress.upsert({
    where: { enrollmentId_lessonId: { enrollmentId: enrollment.id, lessonId: lesson.id } },
    update: {
      scormData: input.cmiJson,
      ...(input.isCompleted ? { isCompleted: true, completedAt: new Date() } : null),
    },
    create: {
      enrollmentId: enrollment.id,
      lessonId: lesson.id,
      scormData: input.cmiJson,
      isCompleted: input.isCompleted,
      completedAt: input.isCompleted ? new Date() : null,
    },
  });

  await prisma.enrollment.update({
    where: { id: enrollment.id },
    data: { lastLesson: lesson.key, lastAccessedAt: new Date() },
  });

  const progress = await recomputeProgress(enrollment.id, course.id);

  let reward = null;
  if (input.isCompleted && !existing?.isCompleted) {
    reward = await awardXp(userId, "lesson_complete", lesson.id);
    if (progress >= 100) {
      await awardXp(userId, "course_completed", course.id);
    }
  }

  return { ok: true as const, progress, reward };
}

/** Enregistre une tentative de quiz et marque la leçon terminée si réussie. */
export async function recordQuizAttemptAction(input: {
  courseSlug: string;
  lessonKey: string;
  answers: number[];
  score: number;
  maxScore: number;
}) {
  const userId = await currentUserId();
  if (!userId) return { ok: false as const };

  const course = await prisma.course.findUnique({ where: { slug: input.courseSlug } });
  if (!course) return { ok: false as const };
  const lesson = await prisma.lesson.findFirst({
    where: { key: input.lessonKey, part: { courseId: course.id } },
  });
  if (!lesson) return { ok: false as const };

  const isPassed =
    input.maxScore > 0 && input.score / input.maxScore >= QUIZ_PASS_RATIO;

  await prisma.quizAttempt.create({
    data: {
      userId,
      lessonId: lesson.id,
      answers: JSON.stringify(input.answers),
      score: input.score,
      maxScore: input.maxScore,
      isPassed,
    },
  });

  let reward = null;
  if (isPassed) {
    await markLessonCompleteAction(input.courseSlug, input.lessonKey);
    reward = await awardXp(userId, "quiz_passed", lesson.id);
  }
  return { ok: true as const, isPassed, reward };
}
