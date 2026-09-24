import type { Metadata } from "next";
import Link from "next/link";
import CourseCard from "@/components/course-card";
import { getCategories, getCourses } from "@/lib/courses";
import { ChevronDown } from "@/components/icons";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";
import { intlTag } from "@/lib/intl";
import { categoryName } from "@/i18n/category-name";
import { alternatesFor, pageUrl, shareCard, siteName, siteUrl } from "@/lib/site";
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

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const h = t.home;
  const lp = (path: string) => localePath(lang, path);

  const [courses, categories] = await Promise.all([getCourses(), getCategories()]);
  const n = catalogCounts(courses);
  const nf = new Intl.NumberFormat(intlTag(lang));
  // getCourses() is oldest first; the home page shows what arrived last.
  const latest = courses.slice(-6).reverse();
  const hasCatalog = courses.length > 0;

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

      <section className="container-page grid gap-12 pb-14 pt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:pb-20 lg:pt-20">
        <div className="rise max-w-2xl">
          <h1 className="text-[2.3rem] leading-[1.06] text-ink sm:text-5xl lg:text-[3.35rem]">
            {h.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            {h.heroSubtitle}
          </p>
          <Link
            href={hasCatalog ? lp("/formations") : lp("/devenir-formateur")}
            className="mt-9 inline-block rounded-[3px] bg-primary px-5 py-3 text-[15px] font-semibold text-on-primary transition hover:bg-primary-dark"
          >
            {hasCatalog ? h.ctaBrowse : h.ctaTeach}
          </Link>
        </div>

        <aside className="self-end border-t-2 border-ink pt-4 lg:mb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {h.ledgerTitle}
          </p>
          {hasCatalog ? (
            <dl className="mt-3 divide-y divide-line">
              {ledger.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-6 py-3">
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="font-display text-2xl tabular-nums text-ink">
                    {nf.format(row.value)}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-3 font-display text-lg leading-snug text-ink">{h.ledgerEmpty}</p>
          )}
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-14 lg:py-16">
          <h2 className="text-3xl text-ink sm:text-[2.1rem]">{h.howTitle}</h2>
          <ol className="mt-10 grid gap-x-14 gap-y-9 md:grid-cols-2">
            {h.how.map((step, i) => (
              <li key={step.t} className="flex gap-5">
                <span className="font-display text-3xl italic leading-none text-primary tabular-nums">
                  {nf.format(i + 1)}
                </span>
                <div>
                  <h3 className="text-lg text-ink">{step.t}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {hasCatalog && (
        <section className="border-t border-line">
          <div className="container-page py-14">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-3xl text-ink">{h.latestTitle}</h2>
              <Link
                href={lp("/formations")}
                className="shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {t.common.viewAll}
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {latest.map((c) => (
                <CourseCard key={c.slug} course={{ ...c, category: categoryName(t, c.category) }} labels={t.card} locale={lang} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-dark border-y border-line">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-16">
          <div>
            <h2 className="text-3xl leading-tight text-ink sm:text-[2.1rem]">{h.teachTitle}</h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">{h.teachBody}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={lp("/devenir-formateur")}
                className="inline-block rounded-[3px] bg-primary px-5 py-3 text-[15px] font-semibold text-on-primary transition hover:bg-primary-dark"
              >
                {h.teachCta}
              </Link>
              <Link
                href={lp("/conditions-formateurs")}
                className="text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-primary"
              >
                {h.teachTerms}
              </Link>
            </div>
          </div>
          {categories.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {h.teachTopics}
              </p>
              <ul className="mt-4 columns-2 gap-8 text-[15px] leading-8 text-ink">
                {categories.map((cat) => (
                  <li key={cat.id} className="break-inside-avoid">
                    {categoryName(t, cat.label)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="container-page py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          <h2 className="text-3xl text-ink">{h.faqTitle}</h2>
          <div className="divide-y divide-line border-y border-line">
            {h.faq.map((item) => (
              <details key={item.q} className="group">
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
