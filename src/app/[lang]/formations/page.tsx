import type { Metadata } from "next";
import CatalogClient from "@/components/catalog-client";
import { getCategories, getCourses } from "@/lib/courses";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { alternatesFor, pageUrl, shareCard, siteName } from "@/lib/site";

export async function generateMetadata(
  props: PageProps<"/[lang]/formations">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const t = await getDictionary(locale);
  const title = t.nav.formations;
  const description = t.catalog.metaDescription;

  return {
    title,
    description,
    alternates: alternatesFor(locale, "/formations"),
    openGraph: {
      type: "website",
      siteName,
      title: `${title} · ${siteName}`,
      description,
      url: pageUrl(locale, "/formations"),
      locale,
      images: [shareCard(locale)],
    },
  };
}

export default async function FormationsPage(
  props: PageProps<"/[lang]/formations">,
) {
  const [{ lang }, { q, cat }] = await Promise.all([props.params, props.searchParams]);
  const locale = isLocale(lang) ? lang : defaultLocale;
  // getCourses() ne renvoie que le sommaire : aucun corps de lecon, aucun quiz
  // ne transite par cette page (elle n'affiche que des cartes).
  const [courses, categories] = await Promise.all([getCourses(locale), getCategories()]);
  return (
    <CatalogClient
      courses={courses}
      categories={categories}
      initialQ={typeof q === "string" ? q : ""}
      initialCat={typeof cat === "string" ? cat : ""}
    />
  );
}
