"use server";

import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import { awardXp } from "@/lib/gamification";
import { getLessonQuestions } from "@/lib/courses";
import { canUseLesson } from "@/lib/entitlements";
import { markLessonCompleteAction } from "@/lib/actions/progress";

// Simulateur d'examen : mode "examen blanc" chronométré. La leçon "exam"
// porte tout le pool de questions (avec leur domaine) dans sa colonne
// `questions`, exactement comme un quiz — seule la correction change : on
// note ici un tirage soumis par le navigateur, jamais la totalité du pool.
//
// Le score brut n'a aucune valeur probante tant qu'il n'est pas recalculé
// contre les bonnes réponses en base (même principe que
// `recordQuizAttemptAction` pour les quiz) : le client choisit le tirage,
// le serveur seul décide qui a juste.

const EXAM_PASS_SCORE = 700; // sur 1000, seuil officiel AZ-900

export interface ExamReviewItem {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  /** null = question laissée sans réponse (comptée comme fausse). */
  selected: number | null;
  correct: boolean;
}

async function currentUserId(): Promise<string | null> {
  const session = await auth();
  return session?.user?.id ?? null;
}

/**
 * Note une tentative d'examen blanc : `answers` est le tirage soumis par le
 * navigateur ({questionId, selected}[]), pas tout le pool. Rescale le score
 * sur 1000, seuil de réussite à 700, persiste la tentative et crédite l'XP
 * "exam_passed" + complète la leçon si réussi (même schéma que le quiz).
 */
export async function submitExamAttemptAction(input: {
  courseSlug: string;
  lessonKey: string;
  // Le client envoie TOUT le tirage soumis (une entrée par question tirée),
  // `selected: null` pour une question laissée sans réponse — sinon le
  // dénominateur du score ne compterait que les questions traitées et
  // sauter des questions ne coûterait plus rien.
  answers: { questionId: string; selected: number | null }[];
  elapsedSec?: number;
}) {
  const userId = await currentUserId();
  if (!userId) return { ok: false as const };

  const course = await prisma.course.findUnique({ where: { slug: input.courseSlug } });
  if (!course) return { ok: false as const };
  const lesson = await prisma.lesson.findFirst({
    where: { key: input.lessonKey, part: { courseId: course.id } },
  });
  if (!lesson || lesson.type !== "exam") return { ok: false as const };
  if (!(await canUseLesson(userId, input.courseSlug, lesson.isFree))) {
    return { ok: false as const };
  }

  const pool = await getLessonQuestions(input.courseSlug, input.lessonKey);
  const poolById = new Map(pool.map((q) => [q.id, q]));

  const submitted = Array.isArray(input.answers) ? input.answers : [];
  const review: ExamReviewItem[] = [];
  let correctCount = 0;

  for (const a of submitted) {
    const q = poolById.get(a.questionId);
    if (!q) continue; // id inconnu du pool : ignoré, pas de triche possible sur le score
    const correct = a.selected !== null && a.selected === q.correctIndex;
    if (correct) correctCount++;
    review.push({
      id: q.id,
      prompt: q.prompt,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      selected: a.selected,
      correct,
    });
  }

  const totalCount = review.length;
  const score = totalCount > 0 ? Math.round((correctCount / totalCount) * 1000) : 0;
  const isPassed = score >= EXAM_PASS_SCORE;

  await prisma.quizAttempt.create({
    data: {
      userId,
      lessonId: lesson.id,
      answers: JSON.stringify(submitted),
      score,
      maxScore: 1000,
      isPassed,
    },
  });

  let reward = null;
  if (isPassed) {
    await markLessonCompleteAction(input.courseSlug, input.lessonKey);
    reward = await awardXp(userId, "exam_passed", lesson.id);
  }

  return {
    ok: true as const,
    score,
    maxScore: 1000,
    passScore: EXAM_PASS_SCORE,
    isPassed,
    correctCount,
    totalCount,
    review,
    reward,
  };
}
