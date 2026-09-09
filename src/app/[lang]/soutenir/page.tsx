import { LocaleLink } from "@/i18n/navigation";
import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Metadata } from "next";
import { alternatesFor, pageUrl, shareCard, siteName } from "@/lib/site";
import SupportButton from "@/components/support-button";
import type { SupportTier } from "@/lib/stripe";

// Ordre + tarifs = données stables ; noms et avantages viennent du dictionnaire.
const tierMeta: Array<{ tier: SupportTier; price: string; featured?: boolean }> =
  [
    { tier: "soutien", price: "5 €" },
    { tier: "mecene", price: "15 €", featured: true },
    { tier: "partenaire", price: "50 €" },
  ];

export async function generateMetadata(
  props: PageProps<"/[lang]/soutenir">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const title = dict.nav.support;
  const description = dict.support.subtitle.replace("{siteName}", siteName);

  return {
    title,
    description,
    alternates: alternatesFor(locale, "/soutenir"),
    openGraph: {
      type: "website",
      siteName,
      title: `${title} · ${siteName}`,
      description,
      url: pageUrl(locale, "/soutenir"),
      locale,
      images: [shareCard(locale)],
    },
  };
}

export default async function SupportPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const s = dict.support;

  const tiers = tierMeta.map((m, i) => ({ ...m, ...s.tiers[i] }));

  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.nav.support}
        </h1>
        <p className="mt-4 text-lg text-muted">
          {s.subtitle.replace("{siteName}", siteName)}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.tier}
            className={`flex flex-col rounded-[var(--radius-card)] border bg-bg p-6 ${
              t.featured ? "border-primary shadow-sm" : "border-line"
            }`}
          >
            {t.featured && (
              <span className="mb-3 w-fit rounded-[3px] bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                {s.popular}
              </span>
            )}
            <h3 className="font-semibold">{t.name}</h3>
            <div className="mt-2 text-3xl font-bold">
              {t.price}
              <span className="text-base font-normal text-muted"> {s.perMonth}</span>
            </div>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-success">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <SupportButton
              tier={t.tier}
              label={s.choose.replace("{name}", t.name)}
              featured={t.featured}
            />
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        {s.otherWay}{" "}
        <LocaleLink href="/creer" className="font-medium text-primary hover:underline">
          {s.otherWayLink}
        </LocaleLink>
      </p>
    </div>
  );
}
