"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getLessonQuestions } from "@/lib/courses";
import { canUseLesson } from "@/lib/entitlements";
import type { QuizVerdict } from "@/lib/types";

/**
 * Corrige UNE réponse, côté serveur.
 *
 * Le navigateur ne reçoit que l'énoncé et les propositions ; il envoie l'indice
 * choisi et reçoit en retour le verdict, la bonne réponse et l'explication.
 * Tant que la question n'a pas été soumise, rien dans la page ne dit laquelle
 * des propositions est la bonne, ce qui n'était pas le cas quand les quiz
 * partaient entiers dans le HTML.
 *
 * Sans compte, seuls les quiz des leçons offertes se corrigent. Ceux d'une
 * leçon payante exigent l'accès au cours : sans cette garde, un script qui
 * soumettait chaque indice récupérait tout l'examen blanc. Le score qui compte
 * pour l'XP est recalculé ailleurs (`recordQuizAttemptAction`), depuis la base.
 */
export async function checkQuizAnswerAction(input: {
  courseSlug: string;
  lessonKey: string;
  questionId: string;
  selected: number;
  /** Langue affichée : l'explication revient dans la même langue que l'énoncé. */
  locale?: string;
}): Promise<QuizVerdict | null> {
  const { courseSlug, lessonKey, questionId, selected, locale } = input;
  if (!courseSlug || !lessonKey || !questionId) return null;

  const lesson = await prisma.lesson.findFirst({
    where: { key: lessonKey, part: { course: { slug: courseSlug } } },
    select: { isFree: true },
  });
  if (!lesson) return null;
  const session = await auth();
  if (!(await canUseLesson(session?.user?.id ?? null, courseSlug, lesson.isFree))) return null;

  const questions = await getLessonQuestions(courseSlug, lessonKey, locale);
  const question = questions.find((q) => q.id === questionId);
  if (!question) return null;

  return {
    correct: selected === question.correctIndex,
    correctIndex: question.correctIndex,
    explanation: question.explanation,
  };
}
