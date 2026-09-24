import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allLessons, getCourseOutline, getReviews } from "@/lib/courses";
import { getCourseViewerState } from "@/lib/dal";
import { getCourseAccess } from "@/lib/entitlements";
import { formatPrice } from "@/lib/pricing";
import BuyCourseButton from "@/components/buy-course-button";
import CourseReviews from "@/components/course-reviews";
import ReviewForm from "@/components/review-form";
import Curriculum from "@/components/curriculum";
import { CheckIcon, LockIcon, UserIcon } from "@/components/icons";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { alternatesFor, pageUrl, shareCard, siteName, siteUrl } from "@/lib/site";

// Rendu à chaque requête : la fiche lit la session (accès, avis) et un cours
// retiré ne doit pas survivre en page statique jusqu'au build suivant.
export const dynamic = "force-dynamic";

export async function generateMetadata(
  props: PageProps<"/[lang]/formations/[slug]">,
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const course = await getCourseOutline(slug);
  if (!course) return {};

  const path = `/formations/${course.slug}`;
  return {
    title: course.title,
    description: course.tagline || course.description.slice(0, 160),
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: "article",
      siteName,
      title: `${course.title} · ${siteName}`,
      description: course.tagline || course.description.slice(0, 160),
      url: pageUrl(locale, path),
      locale,
      images: [shareCard(locale)],
    },
  };
}

export default async function CoursePage(
  props: PageProps<"/[lang]/formations/[slug]">,
) {
  const { lang, slug } = await props.params;
  const sp = await props.searchParams;
  const achat = typeof sp.achat === "string" ? sp.achat : undefined;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const lp = (path: string) => localePath(lang, path);
  // Sommaire seul : cette page n'affiche aucun corps de lecon ni quiz.
  const course = await getCourseOutline(slug);
  if (!course) notFound();

  const lessons = allLessons(course);
  const firstLesson = lessons[0];
  const reviews = await getReviews(course.slug, lang);
  const viewer = await getCourseViewerState(course.slug);
  const access = await getCourseAccess(course.slug);
  const canReview =
    access.isAuthenticated &&
    !access.isOwner &&
    (access.hasPurchase || viewer.isEnrolled) &&
    !viewer.hasReviewed;
  const needsPurchase =
    access.accessType === "PAID" && !access.hasPurchase && !access.isOwner;
  const price = formatPrice(access.priceCents, access.currency, lang);
  const reviewsTitle = t.reviews.title;

  const c = t.course;

  // Données structurées : Course + fil d'Ariane. L'aggregateRating reprend
  // EXACTEMENT les avis affichés plus bas sur la page (CourseReviews).
  const courseUrl = `${siteUrl}${localePath(lang, `/formations/${course.slug}`)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${courseUrl}#course`,
        name: course.title,
        description: course.description,
        url: courseUrl,
        inLanguage: lang,
        provider: { "@type": "Organization", name: siteName, url: siteUrl },
        // L'offre déclarée à Google doit être celle qui est réellement
        // pratiquée : annoncer « 0 » sur un cours payant est un prix faux dans
        // les résultats de recherche, et Merchant/Rich Results le sanctionne.
        offers: {
          "@type": "Offer",
          price: (access.priceCents / 100).toFixed(2),
          priceCurrency: access.currency.toUpperCase(),
          category: access.accessType === "PAID" ? "Paid" : "Free",
          availability: "https://schema.org/InStock",
          url: courseUrl,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: `PT${course.hours}H`,
          // `instructor` n'est émis que si une personne réelle signe le cours.
          // Les cours produits par la LLC n'en portent pas : `provider` dit
          // déjà qui les publie, et déclarer une Person inexistante à Google
          // est une affirmation fausse pour un champ facultatif.
          ...(course.instructor
            ? { instructor: { "@type": "Person", name: course.instructor } }
            : {}),
        },
        ...(reviews.count > 0
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: Number(reviews.average.toFixed(1)),
                reviewCount: reviews.count,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.footer.home,
            item: `${siteUrl}/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t.nav.formations,
            item: `${siteUrl}${localePath(lang, "/formations")}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: course.title,
            item: courseUrl,
          },
        ],
      },
    ],
  };
  const meta = [
    `${c.durationLabel} : ${course.hours} ${c.hoursUnit}`,
    course.language && `${c.languageLabel} : ${course.language}`,
    `${c.levelLabel} : ${course.level}`,
    course.software && `${c.softwareLabel} : ${course.software}`,
  ].filter(Boolean) as string[];

  return (
    <div className="container-page py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href={lp("/formations")}
        className="text-sm text-muted transition hover:text-primary"
      >
        ← {c.backToAll}
      </Link>

      <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-[2.6rem]">
        {course.title}
      </h1>

      {/* Méta */}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        {meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* Prérequis */}
      {course.prerequisites && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted">{c.prerequisites}</span>
          {course.prerequisites.map((p) => (
            <span
              key={p}
              className="rounded-[16px] border border-line bg-surface px-2.5 py-1 text-xs text-muted"
            >
              {p}
            </span>
          ))}
        </div>
      )}

      {/* Prix et accès */}
      <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface px-5 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="font-display text-3xl tabular-nums">
            {access.accessType === "PAID" ? price : c.priceFree}
          </p>
          <p className="mt-1 text-sm text-muted">
            {access.accessType === "PAID"
              ? `${c.lifetimeAccess} · ${c.securePayment}`
              : c.freeTeaser}
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          {access.hasPurchase || access.isOwner ? (
            <p className="inline-flex items-center gap-2 rounded-[16px] border border-success/40 bg-success/10 px-4 py-2.5 text-sm font-semibold text-success">
              <CheckIcon width={16} height={16} />
              {c.owned}
            </p>
          ) : needsPurchase && access.isAuthenticated ? (
            <BuyCourseButton slug={course.slug} label={`${c.buyCta} · ${price}`} />
          ) : needsPurchase ? (
            <Link
              href={lp(`/creer-compte?next=${encodeURIComponent(`/formations/${course.slug}`)}`)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep"
            >
              <LockIcon width={16} height={16} />
              {c.lockedCreate}
            </Link>
          ) : null}
        </div>
      </div>
      {needsPurchase && (
        <p className="mt-2 text-xs text-muted">{c.refundNote}</p>
      )}
        {(achat === "ok" || achat === "annule") && (
          <p
            role="status"
            className={`mt-4 rounded-[16px] px-4 py-3 text-sm font-semibold ${achat === "ok" ? "bg-success-soft text-success" : "bg-warning/15 text-warning"}`}
          >
            {achat === "ok" ? c.purchaseSuccess : c.purchaseCancelled}
          </p>
        )}

      <div className="mt-10 max-w-2xl">
        <h2 className="text-xl font-bold">{c.description}</h2>
        <p className="mt-3 leading-relaxed text-muted">{course.description}</p>
      </div>

      {/* Programme détaillé (accordéon, cadenas pour les visiteurs, coches
          de complétion pour les membres) */}
      {course.parts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">{c.programLabel}</h2>
          <div className="mt-5">
            <Curriculum
              course={course}
              locale={lang}
              hasFullAccess={access.canAccessFullCourse}
              completedKeys={viewer.completedKeys}
            />
          </div>
        </section>
      )}

      {/* Objectifs */}
      {course.objectives && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">{c.objectives}</h2>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] text-muted marker:text-brand">
            {course.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Compétences */}
      {course.skills && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">{c.skills}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {course.skills.map((s) => (
              <span
                key={s}
                className="rounded-[16px] bg-surface px-4 py-2 text-sm font-medium text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Type de contenu */}
      {course.contentTypes && (
        <section className="mt-10">
          <h2 className="text-xl font-bold">{c.contentType}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {course.contentTypes.map((ct) => (
              <span
                key={ct}
                className="rounded-[16px] border border-line px-4 py-2 text-sm"
              >
                {ct}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Formateur : affiché seulement quand une personne signe le cours. */}
      {course.instructor && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">{c.instructorTitle}</h2>
          <div className="mt-5 flex gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-soft text-primary-dark">
              <UserIcon width={26} height={26} />
            </span>
            <div>
              <div className="font-display font-semibold">{course.instructor}</div>
              {course.instructorBio && (
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">
                  {course.instructorBio}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Avis */}
      <CourseReviews
        summary={reviews}
        title={reviewsTitle}
        countLabel={t.reviews.count}
        locale={lang}
      />
      {canReview && <ReviewForm slug={course.slug} />}
      {!canReview && access.isAuthenticated && viewer.hasReviewed && (
        <p className="mt-8 text-sm font-semibold text-success">{t.reviews.errors.alreadyReviewed}</p>
      )}

      {/* CTA de fin de page. Sur un cours payant non acheté, il n'y a rien à
          « commencer » : le bouton mène au paiement, pas à un mur. */}
      {firstLesson && (
        <div className="mt-14 flex justify-center">
          {needsPurchase && access.isAuthenticated ? (
            <BuyCourseButton
              slug={course.slug}
              label={`${c.buyCta} · ${price}`}
              className="rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep disabled:opacity-60"
            />
          ) : (
            <Link
              href={lp(`/formations/${course.slug}/${firstLesson.id}`)}
              className="rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
            >
              {c.start}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
