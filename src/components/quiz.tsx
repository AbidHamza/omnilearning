"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/types";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, XIcon } from "./icons";

export default function Quiz({
  questions,
  onFinished,
}: {
  questions: QuizQuestion[];
  onFinished?: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = questions[index];
  const isLast = index === questions.length - 1;

  function check() {
    if (selected === null) return;
    setChecked(true);
    if (selected === question.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (isLast) {
      setDone(true);
      onFinished?.();
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setChecked(false);
  }

  function prev() {
    if (index === 0) return;
    setIndex((i) => i - 1);
    setSelected(null);
    setChecked(false);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const ratio = Math.round((score / questions.length) * 100);
    const pass = ratio >= 60;
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
          {pass ? "Quiz réussi !" : "Continuez vos efforts"}
        </h3>
        <p className="mt-2 text-muted">
          Vous avez obtenu {score} bonne{score > 1 ? "s" : ""} réponse
          {score > 1 ? "s" : ""} sur {questions.length} ({ratio}%).
        </p>
        <button
          onClick={restart}
          className="mt-6 rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface"
        >
          Recommencer le quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold">
          Question {index + 1} sur {questions.length}
        </h3>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Question précédente"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary-dark disabled:opacity-40"
          >
            <ArrowLeftIcon width={16} height={16} />
          </button>
          <button
            onClick={next}
            disabled={!checked}
            aria-label="Question suivante"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary-dark disabled:opacity-40"
          >
            <ArrowRightIcon width={16} height={16} />
          </button>
        </div>
      </div>

      <p className="mt-4 text-[15px] font-semibold leading-snug">{question.prompt}</p>

      <div className="mt-5 space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === question.correctIndex;
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
              disabled={checked}
              onClick={() => setSelected(i)}
              className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left text-sm transition ${ring} ${
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
                  <span className="h-2.5 w-2.5 rounded-full bg-success" />
                )}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          );
        })}
      </div>

      {checked && question.explanation && (
        <p className="mt-4 rounded-xl bg-surface p-4 text-sm text-muted">
          {question.explanation}
        </p>
      )}

      <div className="mt-7 flex justify-center">
        {!checked ? (
          <button
            onClick={check}
            disabled={selected === null}
            className="rounded-full bg-primary px-10 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            Valider
          </button>
        ) : (
          <button
            onClick={next}
            className="rounded-full bg-primary px-10 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            {isLast ? "Voir le résultat" : "Question suivante"}
          </button>
        )}
      </div>
    </div>
  );
}
