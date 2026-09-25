"use client";

import { useState, useTransition } from "react";
import { useI18n } from "@/i18n/provider";
import { localePath } from "@/i18n/config";
import { deleteCommentAction, setCommentHiddenAction } from "@/lib/actions/lesson-social";
import type { AdminComment } from "@/lib/dal";

export default function AdminComments({ comments }: { comments: AdminComment[] }) {
  const { dict: t, locale } = useI18n();
  const s = t.lessonSocial;
  const [rows, setRows] = useState(comments);
  const [error, setError] = useState<string | null>(null);
  const [busy, startTransition] = useTransition();

  function toggle(c: AdminComment) {
    setError(null);
    startTransition(async () => {
      const res = await setCommentHiddenAction(c.id, !c.hidden);
      if (!res.ok) return setError(s.errors[res.error]);
      setRows((r) => r.map((x) => (x.id === c.id ? { ...x, hidden: !c.hidden } : x)));
    });
  }

  function remove(c: AdminComment) {
    if (!window.confirm(s.deleteConfirm)) return;
    setError(null);
    startTransition(async () => {
      const res = await deleteCommentAction(c.id);
      if (!res.ok) return setError(s.errors[res.error]);
      setRows((r) => r.filter((x) => x.id !== c.id));
    });
  }

  return (
    <section className="mt-6 rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-7">
      <h2 className="font-display text-xl font-semibold">{s.adminTitle}</h2>
      <p className="mt-1 text-sm text-muted">{s.adminHint}</p>
      {error && <p className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
      {rows.length === 0 ? (
        <p className="mt-5 text-sm text-muted">{s.adminEmpty}</p>
      ) : (
        <ul className="mt-5 divide-y divide-line">
          {rows.map((c) => (
            <li key={c.id} className={`py-4 ${c.hidden ? "opacity-60" : ""}`}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold">{c.authorName}</span>
                <span className="text-muted">{c.email}</span>
                <span className="text-muted">{c.date}</span>
                {c.hidden && (
                  <span className="rounded-[4px] bg-surface px-1.5 py-0.5 text-xs font-semibold text-muted">
                    {s.adminHidden}
                  </span>
                )}
              </div>
              <a
                href={localePath(locale, c.href)}
                className="mt-1 block text-xs font-semibold text-primary-dark hover:underline"
              >
                {c.courseTitle} · {c.lessonTitle}
              </a>
              <p className="mt-2 whitespace-pre-line text-sm">{c.body}</p>
              <div className="mt-3 flex gap-4 text-sm">
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => toggle(c)}
                  className="font-semibold text-primary-dark hover:underline disabled:opacity-50"
                >
                  {c.hidden ? s.adminShow : s.adminHide}
                </button>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => remove(c)}
                  className="font-semibold text-red-700 hover:underline disabled:opacity-50"
                >
                  {s.delete}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
