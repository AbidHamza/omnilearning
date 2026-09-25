import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/course-card";
import { getCategories, getCourses } from "@/lib/courses";
import { ChevronDown, SearchIcon } from "@/components/icons";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";
import { intlTag } from "@/lib/intl";
import { categoryName } from "@/i18n/category-name";
import { alternatesFor, pageUrl, shareCard, siteName, siteUrl } from "@/lib/site";
import { scenePhotos, topicPhoto, topicPhotos, type Photo } from "@/lib/topic-images";
import { notFound } from "next/navigation";

/**
 * Counted from the published catalog at render time. With nothing published
 * the ledger says so in words instead of printing a row of zeros.
 */
function catalogCounts(courses: { parts: { lessons: { isFree?: boolean }[] }[] }[]) {
  let lessons = 0;
  let open = 0;
  for (const c of courses) {
    for (const p of c.parts) {
      lessons += p.lessons.length;
      open += p.lessons.filter((l) => l.isFree).length;
    }
  }
  return { courses: courses.length, lessons, open };
}

const ORG_ID = `${siteUrl}/#organization`;

/**
 * Éditeur du site et moteur de recherche du catalogue. Rien ici n'est
 * décoratif : chaque valeur se retrouve dans les mentions légales ou dans
 * une route servie. Pas de `sameAs` : aucun profil social n'est vérifié.
 */
function donneesStructurees(locale: Locale) {
  const rechercheUrl = `${pageUrl(locale, "/formations")}?q={search_term_string}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": ORG_ID,
        name: siteName,
        legalName: "OmniLearnConsultingCommerce LLC",
        url: siteUrl,
        email: "info@omnilearn.org",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-512.png`,
          width: 512,
          height: 512,
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "WY",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@omnilearn.org",
          availableLanguage: ["fr", "en", "ar"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: pageUrl(locale),
        inLanguage: locale,
        publisher: { "@id": ORG_ID },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: rechercheUrl,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export async function generateMetadata(
  props: PageProps<"/[lang]">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  // Titre et description viennent du layout. `openGraph` en revanche remplace
  // celui du layout au lieu de le compléter : sans `type` ni `siteName` ici,
  // l'accueil sortait sans og:type et sans og:site_name.
  return {
    alternates: alternatesFor(locale),
    openGraph: {
      type: "website",
      siteName,
      url: pageUrl(locale),
      images: [shareCard(locale)],
    },
  };
}

// The topic photos are all 3:4; cropping some shorter is what staggers the
// wall. The pattern repeats if a tenth topic is added.
const tileRatios = ["3/4", "4/5", "2/3", "1/1", "3/4", "5/6", "2/3", "4/5", "3/4"];

// Hero collage: uneven columns, the middle one pushed down.
const collage: { photos: Photo[]; offset: string }[] = [
  { photos: [scenePhotos.learner, topicPhotos["Design UX"]], offset: "" },
  { photos: [scenePhotos.typing, topicPhotos["Intelligence Artificielle"]], offset: "mt-10 lg:mt-16" },
  { photos: [scenePhotos.desk, topicPhotos["Cybersécurité"]], offset: "mt-4 lg:mt-7" },
];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const h = t.home;
  const lp = (path: string) => localePath(lang, path);
  const topicHref = (label: string) => `${lp("/formations")}?cat=${encodeURIComponent(label)}`;

  const [courses, categories] = await Promise.all([getCourses(lang), getCategories()]);
  const n = catalogCounts(courses);
  const nf = new Intl.NumberFormat(intlTag(lang));
  // getCourses() is oldest first; the home page shows what arrived last.
  const latest = courses.slice(-8).reverse();
  const hasCatalog = courses.length > 0;

  const perTopic = new Map<string, number>();
  for (const c of courses) perTopic.set(c.category, (perTopic.get(c.category) ?? 0) + 1);

  const ledger = [
    { value: n.courses, label: h.ledgerCourses },
    { value: n.lessons, label: h.ledgerLessons },
    { value: n.open, label: h.ledgerOpen },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees(lang)) }}
      />

      <section className="container-page grid items-center gap-10 pb-12 pt-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-20 lg:pt-12">
        <div className="rise">
          <h1 className="max-w-[16ch] text-[2.55rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4rem]">
            {h.heroTitle}
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">{h.heroSubtitle}</p>

          <form action={lp("/formations")} method="get" role="search" className="search-pill mt-8 max-w-xl">
            <SearchIcon width={18} height={18} className="shrink-0 text-muted" aria-hidden="true" />
            <input type="search" name="q" placeholder={h.searchLabel} aria-label={t.catalog.searchPlaceholder} />
            <button type="submit" className="btn-red">
              {h.searchSubmit}
            </button>
          </form>

          {categories.length > 0 && (
            <nav aria-label={h.topicsLabel} className="mt-5 flex max-w-xl flex-wrap gap-2">
              {categories.map((cat) => (
                <Link key={cat.id} href={topicHref(cat.label)} className="chip">
                  {categoryName(t, cat.label)}
                </Link>
              ))}
            </nav>
          )}

          {hasCatalog && (
          <div className="mt-8 max-w-xl border-t border-line pt-4">
              <dl className="flex flex-wrap gap-x-8 gap-y-2">
                {ledger.map((row) => (
                  <div key={row.label} className="flex flex-row-reverse items-baseline justify-end gap-2">
                    <dt className="text-sm text-muted">{row.label}</dt>
                    <dd className="font-display text-xl tabular-nums text-ink">{nf.format(row.value)}</dd>
                  </div>
                ))}
              </dl>
          </div>
          )}
        </div>

        <div aria-hidden="true" className="h-[300px] overflow-hidden sm:h-[440px] lg:h-[600px]">
          <div className="grid grid-cols-[1fr_1.12fr_0.92fr] gap-2 sm:gap-3">
            {collage.map((col, i) => (
              <div key={i} className={`space-y-2 sm:space-y-3 ${col.offset}`}>
                {col.photos.map((ph) => (
                  <Image
                    key={ph.src}
                    src={ph.src}
                    width={ph.w}
                    height={ph.h}
                    alt=""
                    priority={i < 2}
                    sizes="(min-width:1024px) 210px, 33vw"
                    className="aspect-[3/4] w-full rounded-[16px] object-cover"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {categories.length > 0 && (
        <section id="domaines" className="container-page scroll-mt-24 pb-16 lg:pb-[5.5rem]">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
            <h2 className="max-w-xl text-3xl text-ink sm:text-[2.5rem]">{h.topicsTitle}</h2>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">{h.topicsBody}</p>
          </div>
          <div className="wall mt-9 columns-2 md:columns-3 lg:columns-4">
            {categories.map((cat, i) => {
              const ph = topicPhoto(cat.label);
              const count = perTopic.get(cat.label) ?? 0;
              return (
                <Link key={cat.id} href={topicHref(cat.label)} className="group block">
                  <div
                    className="overflow-hidden rounded-[16px] bg-surface-2"
                    style={{ aspectRatio: tileRatios[i % tileRatios.length] }}
                  >
                    <Image
                      src={ph.src}
                      width={ph.w}
                      height={ph.h}
                      alt=""
                      sizes="(min-width:1024px) 300px, (min-width:768px) 33vw, 50vw"
                      className="tile-img h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-3 px-1 pb-1 pt-2.5">
                    <span className="font-display text-[15px] leading-snug text-ink sm:text-base">
                      {categoryName(t, cat.label)}
                    </span>
                    {count > 0 && (
                      <span className="shrink-0 text-xs tabular-nums text-muted">
                        {nf.format(count)} {count === 1 ? h.topicCountOne : h.topicCountMany}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {hasCatalog && (
        <section className="container-page pb-16 lg:pb-[5.5rem]">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-3xl text-ink sm:text-[2.5rem]">{h.latestTitle}</h2>
            <Link href={lp("/formations")} className="btn-soft shrink-0">
              {t.common.viewAll}
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-x-4">
            {latest.map((c) => (
              <CourseCard
                key={c.slug}
                course={{ ...c, category: categoryName(t, c.category) }}
                labels={t.card}
                locale={lang}
                variant="compact"
              />
            ))}
          </div>
        </section>
      )}

      <section className="bg-surface-2">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-[5.5rem]">
          <Image
            src={scenePhotos.reader.src}
            width={scenePhotos.reader.w}
            height={scenePhotos.reader.h}
            alt=""
            sizes="(min-width:1024px) 470px, 100vw"
            className="aspect-[4/3] w-full rounded-[32px] object-cover lg:aspect-[4/5]"
          />
          <div>
            <h2 className="max-w-md text-3xl text-ink sm:text-[2.5rem]">{h.howTitle}</h2>
            <ol className="mt-9 space-y-7">
              {h.how.map((step, i) => (
                <li key={step.t} className="grid grid-cols-[2.75rem_1fr] gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-surface font-display text-lg tabular-nums text-ink">
                    {nf.format(i + 1)}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-lg text-ink">{step.t}</h3>
                    <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-muted">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 lg:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          <h2 className="text-3xl text-ink sm:text-[2.5rem]">{h.faqTitle}</h2>
          <div className="space-y-2">
            {h.faq.map((item) => (
              <details key={item.q} className="rounded-[16px] bg-surface-2 px-5 open:bg-surface open:ring-1 open:ring-line">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-start text-[16px] font-semibold text-ink">
                  {item.q}
                  <ChevronDown width={18} height={18} className="faq-chevron shrink-0 text-muted" />
                </summary>
                <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
