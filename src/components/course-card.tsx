import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/types";

export default function CourseCard({
  course,
  variant = "catalog",
  className = "",
}: {
  course: Course;
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

  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden rounded-2xl bg-bg ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(10,21,29,0.3)] ${className}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width:1024px) 360px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-bg/95 px-2.5 py-1 text-xs font-semibold text-primary-dark shadow-sm">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug group-hover:text-primary-dark">
          {course.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {course.tagline}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted">
          <span>Niveau : {course.level}</span>
          <span className="h-1 w-1 rounded-full bg-muted-soft" />
          <span>{course.hours} heures</span>
        </div>
        <span className="mt-5 inline-flex items-center justify-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
          Accéder à la formation
        </span>
      </div>
    </Link>
  );
}
