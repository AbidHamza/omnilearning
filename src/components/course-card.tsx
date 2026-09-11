import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/types";
import { type Locale, defaultLocale } from "@/i18n/config";
import { formatPrice } from "@/lib/pricing";

type CardLabels = {
  levelPrefix: string;
  hoursUnit: string;
  access: string;
  free: string;
};

/**
 * Étiquette de prix d'une carte. Une place de marché qui garde son prix pour
 * la fiche fait revenir le visiteur en arrière une fois sur deux : il se lit
 * ici, au moment du choix.
 */
function priceLabel(course: Course, locale: Locale, freeLabel: string): string {
  if (course.accessType !== "PAID" || !course.priceCents) return freeLabel;
  return formatPrice(course.priceCents, course.currency ?? "eur", locale);
}

export default function CourseCard({
  course,
  labels,
  locale = defaultLocale,
  variant = "catalog",
  className = "",
}: {
  course: Course;
  // Requis pour la variante "catalog" (libellés niveau/heures/CTA).
  // Pour la variante "compact", seul `free` sert : sans labels, pas de prix.
  labels?: CardLabels;
  locale?: Locale;
  variant?: "catalog" | "compact";
  className?: string;
}) {
  const href = `/formations/${course.slug}`;
  const isFree = course.accessType !== "PAID" || !course.priceCents;

  if (variant === "compact") {
    const price = labels ? priceLabel(course, locale, labels.free) : null;
    return (
      <Link
        href={href}
        className={`group flex flex-col overflow-hidden rounded-[6px] bg-surface ring-1 ring-line transition hover:-translate-y-0.5 hover:ring-primary/50 ${className}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="240px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-3.5">
          <h3 className="font-display text-sm font-bold leading-snug tracking-tight transition-colors group-hover:text-primary">
            {course.title}
          </h3>
          <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-muted">
            {course.tagline}
          </p>
          {price && (
            <span className="mt-2 font-mono text-[11px] font-bold text-primary">
              {price}
            </span>
          )}
        </div>
      </Link>
    );
  }

  const cardLabels: CardLabels = labels ?? {
    levelPrefix: "",
    hoursUnit: "",
    access: "",
    free: "",
  };
  const price = priceLabel(course, locale, cardLabels.free);

  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-[8px] bg-surface ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-primary/50 hover:shadow-card ${className}`}
    >
      {/* Filet d'accent phosphore qui se révèle au survol, en haut de la carte. */}
      <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width:1024px) 360px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.07]"
        />
        <span className="absolute start-3 top-3 rounded-[3px] border border-line bg-bg px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-primary">
          {course.category}
        </span>
        {price && (
          <span
            className={`absolute end-3 top-3 rounded-[3px] border bg-bg px-2.5 py-1 font-mono text-[11px] font-bold ${
              isFree ? "border-line text-muted" : "border-primary/50 text-ink"
            }`}
          >
            {price}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight tracking-tight transition-colors group-hover:text-primary">
          {course.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 font-sans text-sm leading-relaxed text-muted">
          {course.tagline}
        </p>
        <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted">
          <span>
            {cardLabels.levelPrefix} {course.level}
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-soft" />
          <span>
            {course.hours} {cardLabels.hoursUnit}
          </span>
        </div>
        <span className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-[3px] border border-line bg-bg px-4 py-2 font-mono text-sm font-semibold text-ink transition group-hover:border-primary group-hover:bg-primary group-hover:text-[#04130a]">
          <span className="text-primary opacity-70 group-hover:text-[#04130a]">$</span>
          {cardLabels.access}
        </span>
      </div>
    </Link>
  );
}
