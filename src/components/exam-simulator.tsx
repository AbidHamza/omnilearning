"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import type { PublicQuizQuestion, QuizVerdict } from "@/lib/types";
import type { ExamReviewItem } from "@/lib/actions/exam";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, ClockIcon, XIcon } from "./icons";
import { useT } from "@/i18n/provider";
import { checkQuizAnswerAction } from "@/lib/actions/quiz";
import { submitExamAttemptAction } from "@/lib/actions/exam";

// Simulateur d'examen AZ-900 : deux modes indépendants sur le même pool de
// questions publiques (id + énoncé + propositions + domaine, jamais la bonne
// réponse — voir `PublicQuizQuestion`).
//
// - Entraînement : correction immédiate question par question, via
//   `checkQuizAnswerAction` (même action que le quiz d'une leçon classique).
//   Rien n'est persisté : c'est un outil de révision, pas une tentative notée.
// - Examen blanc : tirage de 50 questions proportionné aux domaines officiels,
//   45 minutes, aucune correction avant la fin, notation server-side par
//   `submitExamAttemptAction` (le navigateur ne voit jamais les bonnes
//   réponses avant la soumission).

const EXAM_QUESTION_COUNT = 50;
const EXAM_DURATION_SEC = 45 * 60;
// Répartition cible sur 50 questions : domaine 1 28% (25-30%), domaine 2 38%
// (35-40%), domaine 3 34% (30-35%) — au centre des fourchettes officielles.
const DOMAIN_TARGET: Record<number, number> = { 1: 14, 2: 19, 3: 17 };
const ANNOUNCE_MARKS = [1200, 900, 600, 300, 60, 0]; // secondes restantes à annoncer

function shuffle<T>(items: T[]): T[] {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function drawExamQuestions(pool: PublicQuizQuestion[]): PublicQuizQuestion[] {
  const byDomain = new Map<number, PublicQuizQuestion[]>();
  let anyMissingDomain = false;
  for (const q of pool) {
    if (typeof q.domain === "number") {
      const arr = byDomain.get(q.domain) ?? [];
      arr.push(q);
      byDomain.set(q.domain, arr);
    } else {
      anyMissingDomain = true;
    }
  }

  const drawn: PublicQuizQuestion[] = [];
  if (!anyMissingDomain && byDomain.size > 0) {
    for (const [domain, count] of Object.entries(DOMAIN_TARGET)) {
      const bucket = byDomain.get(Number(domain)) ?? [];
      drawn.push(...shuffle(bucket).slice(0, count));
    }
  }
  if (drawn.length < EXAM_QUESTION_COUNT) {
    const already = new Set(drawn.map((q) => q.id));
    const rest = shuffle(pool.filter((q) => !already.has(q.id)));
    drawn.push(...rest.slice(0, EXAM_QUESTION_COUNT - drawn.length));
  }
  return shuffle(drawn).slice(0, Math.min(EXAM_QUESTION_COUNT, drawn.length));
}

function formatClock(totalSec: number): string {
  const m = Math.max(0, Math.floor(totalSec / 60));
  const s = Math.max(0, totalSec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

type Mode = "menu" | "practice" | "exam" | "exam-result";

export default function ExamSimulator({
  questions,
  courseSlug,
  lessonKey,
}: {
  questions: PublicQuizQuestion[];
  courseSlug: string;
  lessonKey: string;
}) {
  const t = useT();
  const [mode, setMode] = useState<Mode>("menu");
  const domains = useMemo(() => {
    const set = new Set<number>();
    for (const q of questions) if (typeof q.domain === "number") set.add(q.domain);
    return [...set].sort((a, b) => a - b);
  }, [questions]);

  const domainLabel = (d: number) => {
    if (d === 1) return t.exam.domain1;
    if (d === 2) return t.exam.domain2;
    if (d === 3) return t.exam.domain3;
    return `${t.exam.domainLabel} ${d}`;
  };

  const [practiceDomain, setPracticeDomain] = useState<number | "all">("all");

  if (mode === "menu") {
    return (
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col rounded-[var(--radius-card)] border border-line bg-bg p-6">
          <h3 className="font-display text-lg font-semibold">{t.exam.modeTraining}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{t.exam.modeTrainingDesc}</p>
          {domains.length > 0 && (
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-medium text-ink/80">
                {t.exam.domainLabel}
              </span>
              <select
                value={practiceDomain}
                onChange={(e) =>
                  setPracticeDomain(e.target.value === "all" ? "all" : Number(e.target.value))
                }
                className="w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm"
              >
                <option value="all">{t.exam.allDomains}</option>
                {domains.map((d) => (
                  <option key={d} value={d}>
                    {domainLabel(d)}
                  </option>
                ))}
              </select>
            </label>
          )}
          <button
            onClick={() => setMode("practice")}
            className="mt-5 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
          >
            {t.exam.start}
          </button>
        </div>

        <div className="flex flex-col rounded-[var(--radius-card)] border border-line bg-bg p-6">
          <h3 className="font-display text-lg font-semibold">{t.exam.modeExam}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{t.exam.modeExamDesc}</p>
          <button
            onClick={() => setMode("exam")}
            className="mt-5 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
          >
            {t.exam.startExam}
          </button>
        </div>
      </div>
    );
  }

  if (mode === "practice") {
    const pool =
      practiceDomain === "all" ? questions : questions.filter((q) => q.domain === practiceDomain);
    return (
      <PracticeRun
        questions={pool}
        courseSlug={courseSlug}
        lessonKey={lessonKey}
        onExit={() => setMode("menu")}
      />
    );
  }

  return (
    <ExamRun
      allQuestions={questions}
      courseSlug={courseSlug}
      lessonKey={lessonKey}
      onExit={() => setMode("menu")}
    />
  );
}

function PracticeRun({
  questions,
  courseSlug,
  lessonKey,
  onExit,
}: {
  questions: PublicQuizQuestion[];
  courseSlug: string;
  lessonKey: string;
  onExit: () => void;
}) {
  const t = useT();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [verdict, setVerdict] = useState<QuizVerdict | null>(null);
  const [failedCheck, setFailedCheck] = useState(false);
  const [pending, startTransition] = useTransition();

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const checked = verdict !== null;

  if (!question) {
    return (
      <div className="rounded-[var(--radius-card)] border border-line bg-bg p-6 text-center text-sm text-muted">
        {t.exam.noQuestions}
        <div className="mt-4">
          <button
            onClick={onExit}
            className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface"
          >
            {t.exam.backToCourse}
          </button>
        </div>
      </div>
    );
  }

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
      setVerdict(result);
    });
  }

  function next() {
    if (isLast) {
      onExit();
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

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold">
          {t.exam.questionOf} {index + 1} {t.exam.questionSep} {questions.length}
        </h3>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label={t.exam.prev}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary-dark disabled:opacity-40"
          >
            <ArrowLeftIcon width={16} height={16} className="rtl:rotate-180" />
          </button>
          <button
            onClick={next}
            disabled={!checked}
            aria-label={t.exam.next}
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
              className={`flex w-full items-center gap-3 rounded-lg border p-3.5 text-start text-sm transition ${ring} ${
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
                  <span className="h-2.5 w-2.5 rounded-lg bg-success" />
                )}
              </span>
              <span className="flex-1">{opt}</span>
            </button>
          );
        })}
      </div>

      {verdict?.explanation && (
        <p className="mt-4 rounded-lg bg-surface p-4 text-sm text-muted">
          {verdict.explanation}
        </p>
      )}

      {failedCheck && (
        <p role="alert" className="mt-4 text-sm text-danger">
          {t.exam.checkFailed}
        </p>
      )}

      <div className="mt-7 flex justify-center gap-3">
        <button
          onClick={onExit}
          className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface"
        >
          {t.exam.backToCourse}
        </button>
        {!checked ? (
          <button
            onClick={check}
            disabled={selected === null || pending}
            aria-busy={pending}
            className="rounded-full bg-primary px-10 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? t.exam.checking : t.exam.validate}
          </button>
        ) : (
          <button
            onClick={next}
            className="rounded-full bg-primary px-10 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
          >
            {t.exam.next}
          </button>
        )}
      </div>
    </div>
  );
}

function ExamRun({
  allQuestions,
  courseSlug,
  lessonKey,
  onExit,
}: {
  allQuestions: PublicQuizQuestion[];
  courseSlug: string;
  lessonKey: string;
  onExit: () => void;
}) {
  const t = useT();
  // Tirage figé une seule fois au montage (pas de re-tirage à chaque rendu) :
  // useState avec initialiseur paresseux, jamais son setter — pas un ref lu
  // pendant le rendu, que la règle react-hooks/refs interdit à raison.
  const [questions] = useState<PublicQuizQuestion[]>(() => drawExamQuestions(allQuestions));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [remaining, setRemaining] = useState(EXAM_DURATION_SEC);
  const [pending, startTransition] = useTransition();
  const [failed, setFailed] = useState(false);
  const [result, setResult] = useState<Awaited<ReturnType<typeof submitExamAttemptAction>> | null>(
    null,
  );
  const submittedRef = useRef(false);

  const question = questions[index];

  function doSubmit() {
    if (submittedRef.current || pending) return;
    submittedRef.current = true;
    // Tout le tirage, y compris les questions sans réponse (selected: null) :
    // sinon sauter une question ne coûterait rien au score.
    const payload = questions.map((q) => ({
      questionId: q.id,
      selected: answers[q.id] ?? null,
    }));
    startTransition(async () => {
      const r = await submitExamAttemptAction({ courseSlug, lessonKey, answers: payload });
      if (!r?.ok) {
        setFailed(true);
        submittedRef.current = false;
        return;
      }
      setResult(r);
    });
  }

  useEffect(() => {
    if (result) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        const next = r - 1;
        if (next <= 0) {
          clearInterval(id);
          doSubmit();
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  // Dérivé directement du rendu (pas de useState+useEffect) : le texte n'est
  // non vide qu'à l'instant précis où `remaining` touche un palier, la zone
  // aria-live change de contenu à ce tick et se tait au suivant.
  const announce = ANNOUNCE_MARKS.includes(remaining)
    ? remaining === 0
      ? t.exam.autoSubmitted
      : `${Math.floor(remaining / 60)} min`
    : "";

  if (result) {
    return <ExamResult result={result} onExit={onExit} />;
  }

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-display text-xl font-semibold">
          {t.exam.questionOf} {index + 1} {t.exam.questionSep} {questions.length}
        </h3>
        <div
          role="timer"
          aria-hidden="true"
          className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold tabular-nums ${
            remaining <= 60 ? "border-danger text-danger" : "border-line text-ink/80"
          }`}
        >
          <ClockIcon width={16} height={16} />
          {t.exam.timeRemaining} : {formatClock(remaining)}
        </div>
        <p className="sr-only" aria-live="assertive">
          {announce}
        </p>
      </div>

      {question && (
        <>
          <p className="mt-5 text-[15px] font-semibold leading-snug">{question.prompt}</p>
          <div className="mt-5 space-y-3">
            {question.options.map((opt, i) => {
              const isSelected = answers[question.id] === i;
              return (
                <button
                  key={i}
                  onClick={() => setAnswers((a) => ({ ...a, [question.id]: i }))}
                  className={`flex w-full items-center gap-3 rounded-lg border p-3.5 text-start text-sm transition hover:border-primary ${
                    isSelected ? "border-primary bg-primary-soft" : "border-line"
                  }`}
                >
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                      isSelected ? "border-primary" : "border-muted-soft"
                    }`}
                  >
                    {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
                  </span>
                  <span className="flex-1">{opt}</span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {failed && (
        <p role="alert" className="mt-4 text-sm text-danger">
          {t.exam.submitFailed}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            aria-label={t.exam.prev}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary-dark disabled:opacity-40"
          >
            <ArrowLeftIcon width={16} height={16} className="rtl:rotate-180" />
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
            disabled={index === questions.length - 1}
            aria-label={t.exam.next}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-primary hover:text-primary-dark disabled:opacity-40"
          >
            <ArrowRightIcon width={16} height={16} className="rtl:rotate-180" />
          </button>
          <span className="self-center text-xs text-muted">
            {answeredCount}/{questions.length}
          </span>
        </div>
        <button
          onClick={() => {
            if (window.confirm(t.exam.confirmSubmit)) doSubmit();
          }}
          disabled={pending}
          aria-busy={pending}
          className="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? t.exam.submitting : t.exam.submit}
        </button>
      </div>
    </div>
  );
}

function ExamResult({
  result,
  onExit,
}: {
  result: NonNullable<Awaited<ReturnType<typeof submitExamAttemptAction>>>;
  onExit: () => void;
}) {
  const t = useT();
  if (!result.ok) return null;
  const { score, maxScore, passScore, isPassed, correctCount, totalCount, review } = result;

  return (
    <div className="space-y-6">
      <div className="rounded-[var(--radius-card)] border border-line bg-bg p-8 text-center">
        <div
          className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${
            isPassed ? "bg-success-soft text-success" : "bg-danger-soft text-danger"
          }`}
        >
          {isPassed ? <CheckIcon width={32} height={32} /> : <XIcon width={32} height={32} />}
        </div>
        <h3 className="mt-5 text-2xl font-bold">{isPassed ? t.exam.passed : t.exam.failed}</h3>
        <p className="mt-2 text-muted">
          {t.exam.scoreLine} : {score} {t.exam.outOf} {maxScore} ({t.exam.passThreshold}{" "}
          {passScore})
        </p>
        <p className="mt-1 text-sm text-muted">
          {t.exam.correctAnswers} : {correctCount}/{totalCount}
        </p>
        <button
          onClick={onExit}
          className="mt-6 rounded-lg border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface"
        >
          {t.exam.restart}
        </button>
      </div>

      <div className="rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-8">
        <h4 className="font-display text-lg font-semibold">{t.exam.reviewTitle}</h4>
        <ol className="mt-4 space-y-5">
          {review.map((item: ExamReviewItem, i) => (
            <li key={item.id} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
              <p className="text-sm font-semibold">
                {i + 1}. {item.prompt}
              </p>
              <ul className="mt-3 space-y-2">
                {item.options.map((opt, oi) => {
                  const isCorrectOpt = oi === item.correctIndex;
                  const isChosen = oi === item.selected;
                  let cls = "border-line";
                  if (isCorrectOpt) cls = "border-success bg-success-soft";
                  else if (isChosen) cls = "border-danger bg-danger-soft";
                  return (
                    <li
                      key={oi}
                      className={`rounded-[12px] border p-2.5 text-sm ${cls} ${
                        !isCorrectOpt && !isChosen ? "opacity-60" : ""
                      }`}
                    >
                      {opt}
                    </li>
                  );
                })}
              </ul>
              {item.selected === null && (
                <p className="mt-2 text-xs text-muted">{t.exam.unanswered}</p>
              )}
              {item.explanation && (
                <p className="mt-2 rounded-[12px] bg-surface p-3 text-xs text-muted">
                  {item.explanation}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
