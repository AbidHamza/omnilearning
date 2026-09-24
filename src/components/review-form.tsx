"use client";

import { useState, useTransition, type FormEvent } from "react";
import { submitReviewAction, type ReviewError } from "@/lib/actions/review";
import { useI18n } from "@/i18n/provider";
import { useLocaleRouter } from "@/i18n/navigation";

const fieldCls =
  "mt-1 w-full rounded-[3px] border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-primary";
const stars = [1, 2, 3, 4, 5];

/**
 * Dépôt d'un avis par un inscrit. L'action serveur refuse les doublons et les
 * comptes non inscrits ; le message d'erreur est celui du dictionnaire.
 */
export default function ReviewForm({ slug }: { slug: string }) {
  const { locale, dict } = useI18n();
  const r = dict.reviews;
  const router = useLocaleRouter();
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<ReviewError | null>(null);
  const [sent, setSent] = useState(false);
  const [pending, startTransition] = useTransition();

  function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await submitReviewAction(slug, rating, title, body, locale);
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setSent(true);
      router.refresh();
    });
  }

  if (sent) {
    return <p className="mt-8 text-sm font-semibold text-success">{r.sent}</p>;
  }

  return (
    <form onSubmit={submit} className="mt-8 max-w-xl border-t border-line pt-6">
      <h3 className="font-display text-lg font-semibold">{r.formTitle}</h3>

      <fieldset className="mt-4">
        <legend className="text-sm font-semibold">{r.ratingLabel}</legend>
        <div className="mt-1 flex gap-1" role="radiogroup">
          {stars.map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={String(n)}
              onClick={() => setRating(n)}
              className={`text-2xl leading-none ${n <= rating ? "text-amber-500" : "text-muted-soft"}`}
            >
              ★
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-4 block text-sm font-semibold">
        {r.titleLabel}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={120}
          className={fieldCls}
        />
      </label>

      <label className="mt-4 block text-sm font-semibold">
        {r.bodyLabel}
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          required
          minLength={20}
          maxLength={2000}
          className={fieldCls}
        />
      </label>

      {error && (
        <p role="alert" className="mt-3 text-sm text-danger">
          {r.errors[error]}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-4 rounded-[3px] bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep disabled:opacity-60"
      >
        {pending ? dict.common.loading : r.submit}
      </button>
    </form>
  );
}
