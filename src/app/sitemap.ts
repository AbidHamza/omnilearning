import type { MetadataRoute } from "next";
import { courses } from "@/lib/data";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

// Chemins publics indexables (hors espaces privés : admin, tableau de bord, paramètres…).
const publicPaths = ["", "/formations", "/soutenir", "/connexion", "/creer-compte"];

function languagesFor(path: string): Record<string, string> {
  return Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of publicPaths) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  for (const course of courses) {
    const path = `/formations/${course.slug}`;
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  return entries;
}
