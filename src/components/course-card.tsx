import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/types";

type CardLabels = {
  levelPrefix: string;
  hoursUnit: string;
  access: string;
};

export default function CourseCard({
  course,
  labels,
  variant = "catalog",
  className = "",
}: {
  course: Course;
  // Requis pour la variante "catalog" (libellés niveau/heures/CTA).
  // Inutile pour la variante "compact" qui n'affiche que titre + accroche.
  labels?: CardLabels;
  variant?: "catalog" | "compact";
  className?: string;
}) {
  const href = `/formations/${course.slug}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={`group flex flex-col overflow-hidden rounded-2xl bg-bg ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(10,21,29,0.25)] ${className}`}
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
          <h3 className="font-display text-sm font-bold leading-snug">
            {course.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
            {course.tagline}
          </p>
        </div>
      </Link>
    );
  }

  const cardLabels: CardLabels = labels ?? {
    levelPrefix: "",
    hoursUnit: "",
    access: "",
  };

  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-bg ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(17,34,28,0.4)] ${className}`}
    >
      {/* Filet d'accent ocre qui se révèle au survol, en haut de la carte. */}
      <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width:1024px) 360px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.07]"
        />
        <span className="absolute start-3 top-3 rounded-full bg-bg/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-dark shadow-sm backdrop-blur">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold leading-tight transition-colors group-hover:text-primary">
          {course.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {course.tagline}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted">
          <span>
            {cardLabels.levelPrefix} {course.level}
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-soft" />
          <span>
            {course.hours} {cardLabels.hoursUnit}
          </span>
        </div>
        <span className="mt-5 inline-flex items-center justify-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
          {cardLabels.access}
        </span>
      </div>
    </Link>
  );
}
