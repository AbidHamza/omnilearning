"use client";

import { useRef, useState, useTransition } from "react";
import type { PublicQuizQuestion, QuizVerdict } from "@/lib/types";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, XIcon } from "./icons";
import { useT } from "@/i18n/provider";
import { recordQuizAttemptAction } from "@/lib/actions/progress";
import { checkQuizAnswerAction } from "@/lib/actions/quiz";
import { QUIZ_PASS_RATIO } from "@/lib/curriculum";

/**
 * Quiz d'une leçon.
 *
 * Le composant ne connaît PAS les bonnes réponses : il reçoit des questions
 * publiques (énoncé + propositions) et demande le verdict au serveur quand
 * l'apprenant valide. Auparavant, `correctIndex` et l'explication voyageaient
 * dans le HTML : 346 réponses lisibles en clair sur la page catalogue.
 */
export default function Quiz({
  questions,
  onFinished,
  courseSlug,
  lessonKey,
}: {
  questions: PublicQuizQuestion[];
  onFinished?: () => void;
  // Requis pour la correction serveur ; sert aussi à persister la tentative.
  courseSlug: string;
  lessonKey: string;
}) {
  const t = useT();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [verdict, setVerdict] = useState<QuizVerdict | null>(null);
  const [failedCheck, setFailedCheck] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();
  const answers = useRef<number[]>([]);

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const checked = verdict !== null;

  function check() {
    if (selected === null || pending) return;
    setFailedCheck(false);
    const chosen = selected;
    startTransition(async () => {
      const result = await checkQuizAnswerAction({
        courseSlug,
        lessonKey,
        questionId: question.id,
        selected: chosen,
      });
      if (!result) {
        setFailedCheck(true);
        return;
      }
      answers.current[index] = chosen;
      setVerdict(result);
      if (result.correct) setScore((s) => s + 1);
    });
  }

  function next() {
    if (isLast) {
      setDone(true);
      onFinished?.();
      // Persiste la tentative (no-op serveur si non connecté).
      void recordQuizAttemptAction({
        courseSlug,
        lessonKey,
        answers: answers.current,
        score,
        maxScore: questions.length,
      });
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setVerdict(null);
    setFailedCheck(false);
  }

  function prev() {
    if (index === 0) return;
    setIndex((i) => i - 1);
    setSelected(null);
    setVerdict(null);
    setFailedCheck(false);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setVerdict(null);
    setFailedCheck(false);
    setScore(0);
    setDone(false);
    answers.current = [];
  }

  if (done) {
    const ratio = Math.round((score / questions.length) * 100);
    const pass = score / questions.length >= QUIZ_PASS_RATIO;
    return (
      <div className="rounded-[var(--radius-card)] border border-line bg-bg p-8 text-center">
        <div
          className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${
            pass ? "bg-success-soft text-success" : "bg-danger-soft text-danger"
          }`}
        >
          {pass ? <CheckIcon width={32} height={32} /> : <XIcon width={32} height={32} />}
        </div>
        <h3 className="mt-5 text-2xl font-bold">
          {pass ? t.quiz.passed : t.quiz.failed}
        </h3>
        <p className="mt-2 text-muted">
          {t.quiz.scoreLine} : {score}/{questions.length} ({ratio}%)
        </p>
        <button
          onClick={restart}
          className="mt-6 rounded-[3px] border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface"
        >
          {t.quiz.restart}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold">
          {t.quiz.questionOf} {index + 1} {t.quiz.questionSep} {questions.length}
        </h3>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label={t.quiz.prev}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary-dark disabled:opacity-40"
          >
            <ArrowLeftIcon width={16} height={16} className="rtl:rotate-180" />
          </button>
          <button
            onClick={next}
            disabled={!checked}
            aria-label={t.quiz.next}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary-dark disabled:opacity-40"
          >
            <ArrowRightIcon width={16} height={16} className="rtl:rotate-180" />
          </button>
        </div>
      </div>

      <p className="mt-4 text-[15px] font-semibold leading-snug">{question.prompt}</p>

      <div className="mt-5 space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = verdict !== null && i === verdict.correctIndex;
          let ring = "border-line";
          if (checked) {
            if (isCorrect) ring = "border-success bg-success-soft";
            else if (isSelected) ring = "border-danger bg-danger-soft";
            else ring = "border-line opacity-60";
          } else if (isSelected) {
            ring = "border-primary bg-primary-soft";
          }
          return (
            <button
              key={i}
              disabled={checked || pending}
              onClick={() => setSelected(i)}
              className={`flex w-full items-center gap-3 rounded-[3px] border p-3.5 text-start text-sm transition ${ring} ${
                !checked ? "hover:border-primary" : ""
              }`}
            >
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                  checked && isCorrect
                    ? "border-success"
                    : checked && isSelected
                      ? "border-danger"
                      : isSelected
                        ? "border-primary"
                        : "border-muted-soft"
                }`}
              >
                {isSelected && (
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      checked && !isCorrect ? "bg-danger" : "bg-primary"
                    }`}
                  />
                )}
                {checked && isCorrect && !isSelected && (
                  <span className="h-2.5 w-2.5 rounded-[3px] bg-success" />
                )}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          );
        })}
      </div>

      {verdict?.explanation && (
        <p className="mt-4 rounded-[3px] bg-surface p-4 text-sm text-muted">
          {verdict.explanation}
        </p>
      )}

      {failedCheck && (
        <p role="alert" className="mt-4 text-sm text-danger">
          {t.quiz.checkFailed}
        </p>
      )}

      <div className="mt-7 flex justify-center">
        {!checked ? (
          <button
            onClick={check}
            disabled={selected === null || pending}
            aria-busy={pending}
            className="rounded-[3px] bg-primary px-10 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? t.quiz.checking : t.quiz.validate}
          </button>
        ) : (
          <button
            onClick={next}
            className="rounded-[3px] bg-primary px-10 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
          >
            {isLast ? t.quiz.showResult : t.quiz.next}
          </button>
        )}
      </div>
    </div>
  );
}
