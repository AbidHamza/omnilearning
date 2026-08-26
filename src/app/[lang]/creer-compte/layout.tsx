import type { Metadata } from "next";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { alternatesFor, pageUrl, siteName } from "@/lib/site";

// Page cliente : les métadonnées ne peuvent venir que d'ici. Voir le layout de
// /connexion pour la raison.
export async function generateMetadata(
  props: LayoutProps<"/[lang]/creer-compte">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);
  const title = dict.signup.title;
  const description = dict.signup.subtitle;

  return {
    title,
    description,
    alternates: alternatesFor(locale, "/creer-compte"),
    openGraph: {
      type: "website",
      siteName,
      title: `${title} · ${siteName}`,
      description,
      url: pageUrl(locale, "/creer-compte"),
      locale,
    },
  };
}

export default function CreerCompteLayout({
  children,
}: LayoutProps<"/[lang]/creer-compte">) {
  return children;
}
