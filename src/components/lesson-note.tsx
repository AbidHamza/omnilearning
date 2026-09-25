"use client";

import { useState, useTransition, type FormEvent } from "react";
import { saveNoteAction, type LessonSocialError } from "@/lib/actions/lesson-social";
import { useI18n } from "@/i18n/provider";

/** Note privée d'un apprenant sur un chapitre : une seule, écrasée à chaque enregistrement. */
export default function LessonNote({
  slug,
  lessonKey,
  initial,
}: {
  slug: string;
  lessonKey: string;
  initial: string;
}) {
  const { dict } = useI18n();
  const s = dict.lessonSocial;
  const [body, setBody] = useState(initial);
  const [saved, setSaved] = useState(initial);
  const [status, setStatus] = useState<"saved" | "cleared" | null>(null);
  const [error, setError] = useState<LessonSocialError | null>(null);
  const [pending, startTransition] = useTransition();

  function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setStatus(null);
    startTransition(async () => {
      const res = await saveNoteAction(slug, lessonKey, body);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      const text = body.trim();
      setSaved(text);
      setBody(text);
      setStatus(text ? "saved" : "cleared");
    });
  }

  return (
    <form onSubmit={submit} className="mt-10 border-t border-line pt-6">
      <label htmlFor="lesson-note" className="font-display text-lg font-semibold">
        {s.notesTitle}
      </label>
      <p className="mt-1 text-sm text-muted">{s.notesHint}</p>
      <textarea
        id="lesson-note"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          setStatus(null);
        }}
        rows={5}
        maxLength={10000}
        className="mt-3 w-full rounded-[16px] border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={pending || body.trim() === saved}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep disabled:opacity-60"
        >
          {s.notesSave}
        </button>
        {status && (
          <span role="status" className="text-sm text-success">
            {status === "saved" ? s.notesSaved : s.notesCleared}
          </span>
        )}
      </div>
      {error && (
        <p role="alert" className="mt-3 text-sm text-danger">
          {s.errors[error]}
        </p>
      )}
    </form>
  );
}
