import type { Metadata } from "next";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { alternatesFor, pageUrl, shareCard, siteName } from "@/lib/site";

// La page elle-même est un composant client : elle ne peut pas exporter
// generateMetadata. Ce layout ne fait que porter les métadonnées, sans quoi la
// page hérite de celles de /[lang] et se déclare doublon de l'accueil.
export async function generateMetadata(
  props: LayoutProps<"/[lang]/connexion">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const title = dict.auth.loginTitle;
  const description = dict.auth.resumeLead;

  return {
    title,
    description,
    alternates: alternatesFor(locale, "/connexion"),
    openGraph: {
      type: "website",
      siteName,
      title: `${title} · ${siteName}`,
      description,
      url: pageUrl(locale, "/connexion"),
      locale,
      images: [shareCard(locale)],
    },
  };
}

export default function ConnexionLayout({
  children,
}: LayoutProps<"/[lang]/connexion">) {
  return children;
}
