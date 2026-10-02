"use client";

import { useState } from "react";
import { useT } from "@/i18n/provider";
import { CheckIcon, XIcon } from "./icons";

// Question d'auto-vérification glissée dans le texte d'une leçon (bloc
// ```check). Aucune XP, rien n'est enregistré : la réponse est dans la page,
// elle reste masquée jusqu'au clic de l'apprenant.
export interface CheckData {
  q: string;
  options: string[];
  answer: number;
  why?: string;
}

export default function CheckBlock({ data }: { data: CheckData }) {
  const t = useT().quiz;
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const shown = revealed || picked !== null;

  return (
    <aside className="md-check my-6 rounded-[var(--radius-card)] border border-line bg-surface/60 p-4 sm:p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-primary">{t.selfCheck}</p>
      <p className="mt-2 font-semibold leading-relaxed">{data.q}</p>
      <ul className="mt-3 space-y-2">
        {data.options.map((opt, idx) => {
          const isAnswer = idx === data.answer;
          const isPicked = idx === picked;
          let tone = "border-line bg-transparent hover:border-primary";
          if (shown && isAnswer) tone = "border-success bg-success-soft text-success";
          else if (shown && isPicked) tone = "border-danger/60 bg-danger-soft";
          return (
            <li key={idx}>
              <button
                type="button"
                disabled={shown}
                onClick={() => setPicked(idx)}
                aria-pressed={isPicked}
                className={`flex w-full items-start gap-2 rounded-xl border px-3 py-2 text-start text-[15px] leading-snug transition ${tone} disabled:cursor-default`}
              >
                <span className="mt-0.5 w-4 shrink-0">
                  {shown && isAnswer && <CheckIcon className="h-4 w-4" />}
                  {shown && isPicked && !isAnswer && <XIcon className="h-4 w-4" />}
                </span>
                <span>{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {!shown && (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-3 text-sm font-medium text-primary underline underline-offset-2 hover:opacity-80"
        >
          {t.selfCheckReveal}
        </button>
      )}
      {shown && (
        <div className="mt-3 text-[15px] leading-relaxed" role="status">
          {picked !== null && (
            <strong>{picked === data.answer ? t.selfCheckRight : t.selfCheckWrong} </strong>
          )}
          {data.why}
          <button
            type="button"
            onClick={() => {
              setPicked(null);
              setRevealed(false);
            }}
            className="ms-2 text-sm font-medium text-primary underline underline-offset-2 hover:opacity-80"
          >
            {t.selfCheckAgain}
          </button>
        </div>
      )}
    </aside>
  );
}
