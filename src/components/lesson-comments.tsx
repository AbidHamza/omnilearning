"use client";

import { useState, useTransition, type FormEvent } from "react";
import {
  addCommentAction,
  deleteCommentAction,
  type LessonSocialError,
} from "@/lib/actions/lesson-social";
import { useI18n } from "@/i18n/provider";
import { useLocaleRouter } from "@/i18n/navigation";

export interface LessonCommentView {
  id: string;
  authorName: string;
  body: string;
  date: string;
  mine: boolean;
}

export default function LessonComments({
  slug,
  lessonKey,
  comments,
  canPost,
  canModerate,
  loginHref,
}: {
  slug: string;
  lessonKey: string;
  comments: LessonCommentView[];
  canPost: boolean;
  canModerate: boolean;
  loginHref: string;
}) {
  const { locale, dict } = useI18n();
  const s = dict.lessonSocial;
  const router = useLocaleRouter();
  const [body, setBody] = useState("");
  const [error, setError] = useState<LessonSocialError | null>(null);
  const [pending, startTransition] = useTransition();

  function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await addCommentAction(slug, lessonKey, body, locale);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setBody("");
      router.refresh();
    });
  }

  function remove(id: string) {
    if (!window.confirm(s.deleteConfirm)) return;
    setError(null);
    startTransition(async () => {
      const res = await deleteCommentAction(id);
      if (!res.ok) setError(res.error);
      router.refresh();
    });
  }

  return (
    <section aria-labelledby="lesson-comments" className="mt-10 border-t border-line pt-6">
      <h2 id="lesson-comments" className="font-display text-lg font-semibold">
        {s.commentsTitle}
        {comments.length > 0 && (
          <span className="ms-2 text-sm font-normal text-muted">({comments.length})</span>
        )}
      </h2>

      {comments.length === 0 ? (
        <p className="mt-3 text-sm text-muted">{s.commentsEmpty}</p>
      ) : (
        <ol className="mt-4 space-y-5">
          {comments.map((c) => (
            <li key={c.id} className="border-s-2 border-line ps-4">
              <p className="text-sm">
                <span className="font-semibold">{c.authorName}</span>
                <span className="ms-2 text-muted">{c.date}</span>
              </p>
              <p className="mt-1 whitespace-pre-line break-words text-sm leading-relaxed">
                {c.body}
              </p>
              {(c.mine || canModerate) && (
                <button
                  type="button"
                  onClick={() => remove(c.id)}
                  disabled={pending}
                  className="mt-1 text-xs text-muted underline hover:text-danger"
                >
                  {s.delete}
                </button>
              )}
            </li>
          ))}
        </ol>
      )}

      {canPost ? (
        <form onSubmit={submit} className="mt-6 max-w-2xl">
          <label htmlFor="lesson-comment" className="text-sm font-semibold">
            {s.commentLabel}
          </label>
          <textarea
            id="lesson-comment"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={4}
            maxLength={2000}
            required
            className="mt-1 w-full rounded-[16px] border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={pending || body.trim().length < 2}
            className="mt-3 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep disabled:opacity-60"
          >
            {s.commentSend}
          </button>
        </form>
      ) : (
        <p className="mt-6 text-sm">
          {s.commentLogin}{" "}
          <a href={loginHref} className="font-semibold text-primary underline">
            {s.login}
          </a>
        </p>
      )}
      {error && (
        <p role="alert" className="mt-3 text-sm text-danger">
          {s.errors[error]}
        </p>
      )}
    </section>
  );
}
