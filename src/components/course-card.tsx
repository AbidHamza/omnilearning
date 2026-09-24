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

/**
 * Carte en épingle : l'image porte la carte, le texte vit dessous sans cadre.
 * La variante "catalog" ajoute niveau et durée ; "compact" s'en tient au titre
 * et au prix.
 */
export default function CourseCard({
  course,
  labels,
  locale = defaultLocale,
  variant = "catalog",
  className = "",
}: {
  course: Course;
  // Requis pour la variante "catalog" (libellés niveau/heures).
  // Pour la variante "compact", seul `free` sert : sans labels, pas de prix.
  labels?: CardLabels;
  locale?: Locale;
  variant?: "catalog" | "compact";
  className?: string;
}) {
  const href = `/formations/${course.slug}`;
  const isFree = course.accessType !== "PAID" || !course.priceCents;
  const price = labels ? priceLabel(course, locale, labels.free) : null;
  const compact = variant === "compact";

  return (
    <Link href={href} className={`group block ${className}`}>
      <div className={`relative overflow-hidden rounded-[16px] bg-surface-2 ${compact ? "aspect-[4/5]" : "aspect-[5/4]"}`}>
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes={compact ? "(min-width:1024px) 300px, 50vw" : "(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw"}
          className="tile-img object-cover"
        />
        {price && (
          <span
            className={`absolute bottom-3 start-3 rounded-full px-3 py-1 text-[13px] font-semibold ${
              isFree ? "bg-surface text-ink" : "bg-ink text-bg"
            }`}
          >
            {price}
          </span>
        )}
      </div>
      <div className="px-1 pt-2.5">
        <p className="text-xs text-muted">{course.category}</p>
        <h3 className="mt-0.5 font-display text-[15px] leading-snug text-ink group-hover:underline group-hover:decoration-line group-hover:underline-offset-4 sm:text-base">
          {course.title}
        </h3>
        {!compact && (
          <>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{course.tagline}</p>
            {labels && (
              <p className="mt-2 text-xs text-muted">
                {labels.levelPrefix} {course.level} · {course.hours} {labels.hoursUnit}
              </p>
            )}
            {/* Formateur : n'existe que pour les cours signés par une personne
                réelle ; un cours produit par la LLC n'affiche rien ici. */}
            {course.instructor && (
              <p className="mt-0.5 text-xs text-muted-soft">{course.instructor}</p>
            )}
          </>
        )}
      </div>
    </Link>
  );
}
