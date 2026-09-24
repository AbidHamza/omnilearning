import type { ReviewSummary } from "@/lib/courses";
import { formatDate, formatNumber } from "@/lib/intl";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  // Étoiles pleines/vides, arrondi au demi près pour l'affichage agrégé.
  const full = Math.round(rating);
  return (
    <span className={`inline-flex text-amber-500 ${className}`} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < full ? "★" : "☆"}</span>
      ))}
    </span>
  );
}

const barLabels = [5, 4, 3, 2, 1];

export default function CourseReviews({
  summary,
  title,
  countLabel,
  locale,
}: {
  summary: ReviewSummary;
  title: string;
  countLabel: string;
  locale: string;
}) {
  if (summary.count === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="mt-5 grid gap-8 sm:grid-cols-[220px_1fr]">
        {/* Bloc agrégé */}
        <div className="rounded-[var(--radius-card)] bg-surface p-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl">
              {formatNumber(summary.average, locale)}
            </span>
            <span className="text-sm text-muted">/ 5</span>
          </div>
          <Stars rating={summary.average} className="mt-1 text-lg" />
          <p className="mt-1 text-xs text-muted">
            {formatNumber(summary.count, locale)} {countLabel}
          </p>

          <div className="mt-4 space-y-1.5">
            {barLabels.map((n) => {
              const c = summary.distribution[n] ?? 0;
              const pct = summary.count > 0 ? (c / summary.count) * 100 : 0;
              return (
                <div key={n} className="flex items-center gap-2 text-xs">
                  <span className="w-3 text-muted">{n}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-6 text-end text-muted-soft">{c}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Liste d'avis */}
        <ul className="space-y-5">
          {summary.reviews.map((r) => (
            <li
              key={r.id}
              className="rounded-[var(--radius-card)] border border-line p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-primary-dark">
                  {r.authorInitials}
                </span>
                <div>
                  <p className="font-semibold">{r.authorName}</p>
                  <Stars rating={r.rating} className="text-sm" />
                </div>
                <span className="ms-auto shrink-0 text-xs text-muted-soft">
                  {formatDate(r.createdAt, locale)}
                </span>
              </div>
              {r.title && (
                <p className="mt-3 font-display font-semibold">{r.title}</p>
              )}
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {r.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
