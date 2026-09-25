"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { canUseLesson } from "@/lib/entitlements";
import { locales, isLocale, defaultLocale } from "@/i18n/config";

/** Codes traduits côté écran (dictionnaire `lessonSocial.errors`). */
export type LessonSocialError =
  | "auth"
  | "lessonMissing"
  | "locked"
  | "tooShort"
  | "tooLong"
  | "tooFast"
  | "forbidden";

export type LessonSocialResult = { ok: true } | { ok: false; error: LessonSocialError };

const COMMENT_MIN = 2;
const COMMENT_MAX = 2000;
const NOTE_MAX = 10000;
// Un compte ne poste pas deux commentaires en moins de 20 s : de quoi arrêter
// un double clic ou un script, sans gêner quelqu'un qui répond à un autre.
const COMMENT_COOLDOWN_MS = 20_000;

async function resolveLesson(slug: string, lessonKey: string) {
  return prisma.lesson.findFirst({
    where: { key: lessonKey, part: { course: { slug, status: "PUBLISHED" } } },
    select: { id: true, isFree: true },
  });
}

function refreshLesson(slug: string, lessonKey: string) {
  for (const l of locales) revalidatePath(`/${l}/formations/${slug}/${lessonKey}`);
}

/**
 * Le fil de discussion suit le même verrou que la leçon : qui ne peut pas la
 * lire ne peut pas la commenter. Sans ça, un cours payant se ferait résumer
 * dans ses propres commentaires par qui ne l'a pas acheté.
 */
export async function addCommentAction(
  slug: string,
  lessonKey: string,
  body: string,
  locale: string,
): Promise<LessonSocialResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "auth" };

  const text = body.trim();
  if (text.length < COMMENT_MIN) return { ok: false, error: "tooShort" };
  if (text.length > COMMENT_MAX) return { ok: false, error: "tooLong" };

  const lesson = await resolveLesson(slug, lessonKey);
  if (!lesson) return { ok: false, error: "lessonMissing" };
  if (!(await canUseLesson(userId, slug, lesson.isFree))) {
    return { ok: false, error: "locked" };
  }

  const last = await prisma.lessonComment.findFirst({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true },
  });
  if (last && Date.now() - last.createdAt.getTime() < COMMENT_COOLDOWN_MS) {
    return { ok: false, error: "tooFast" };
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true, email: true },
  });
  const authorName = user?.name?.trim() || user?.email?.split("@")[0] || "Membre";

  await prisma.lessonComment.create({
    data: {
      lessonId: lesson.id,
      userId,
      authorName,
      body: text,
      locale: isLocale(locale) ? locale : defaultLocale,
    },
  });
  refreshLesson(slug, lessonKey);
  return { ok: true };
}

/** L'auteur retire son propre message ; un administrateur retire n'importe lequel. */
export async function deleteCommentAction(commentId: string): Promise<LessonSocialResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "auth" };

  const comment = await prisma.lessonComment.findUnique({
    where: { id: commentId },
    select: {
      userId: true,
      lesson: { select: { key: true, part: { select: { course: { select: { slug: true } } } } } },
    },
  });
  if (!comment) return { ok: false, error: "lessonMissing" };
  if (comment.userId !== userId && session?.user?.role !== "ADMIN") {
    return { ok: false, error: "forbidden" };
  }

  await prisma.lessonComment.delete({ where: { id: commentId } });
  refreshLesson(comment.lesson.part.course.slug, comment.lesson.key);
  for (const l of locales) revalidatePath(`/${l}/admin`);
  return { ok: true };
}

/**
 * Masquer plutôt que supprimer : le message disparaît de la leçon mais reste
 * lisible en administration, ce qui permet de revenir sur une décision.
 */
export async function setCommentHiddenAction(
  commentId: string,
  hidden: boolean,
): Promise<LessonSocialResult> {
  const session = await auth();
  if (session?.user?.role !== "ADMIN") return { ok: false, error: "forbidden" };

  const comment = await prisma.lessonComment.update({
    where: { id: commentId },
    data: { hidden },
    select: {
      lesson: { select: { key: true, part: { select: { course: { select: { slug: true } } } } } },
    },
  });
  refreshLesson(comment.lesson.part.course.slug, comment.lesson.key);
  for (const l of locales) revalidatePath(`/${l}/admin`);
  return { ok: true };
}

/** Une note par compte et par leçon. Un texte vidé supprime la note. */
export async function saveNoteAction(
  slug: string,
  lessonKey: string,
  body: string,
): Promise<LessonSocialResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: "auth" };

  const text = body.trim();
  if (text.length > NOTE_MAX) return { ok: false, error: "tooLong" };

  const lesson = await resolveLesson(slug, lessonKey);
  if (!lesson) return { ok: false, error: "lessonMissing" };
  if (!(await canUseLesson(userId, slug, lesson.isFree))) {
    return { ok: false, error: "locked" };
  }

  if (!text) {
    await prisma.lessonNote.deleteMany({ where: { userId, lessonId: lesson.id } });
  } else {
    await prisma.lessonNote.upsert({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
      create: { userId, lessonId: lesson.id, body: text },
      update: { body: text },
    });
  }
  return { ok: true };
}
