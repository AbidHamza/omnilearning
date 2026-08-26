"use server";

import { getLessonQuestions } from "@/lib/courses";
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
 * Volontairement sans garde d'authentification : les leçons en accès libre ont
 * des quiz, et cette action ne divulgue une réponse qu'une question à la fois,
 * après une tentative. Le score qui compte pour l'XP est recalculé ailleurs
 * (`recordQuizAttemptAction`), à partir de la base.
 */
export async function checkQuizAnswerAction(input: {
  courseSlug: string;
  lessonKey: string;
  questionId: string;
  selected: number;
}): Promise<QuizVerdict | null> {
  const { courseSlug, lessonKey, questionId, selected } = input;
  if (!courseSlug || !lessonKey || !questionId) return null;

  const questions = await getLessonQuestions(courseSlug, lessonKey);
  const question = questions.find((q) => q.id === questionId);
  if (!question) return null;

  return {
    correct: selected === question.correctIndex,
    correctIndex: question.correctIndex,
    explanation: question.explanation,
  };
}
