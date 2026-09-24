import type { MetadataRoute } from "next";
import { prisma } from "@/lib/db";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

// Chemins publics indexables (hors espaces privés : admin, tableau de bord, paramètres…).
// Pages a indexer. Connexion/inscription en sont volontairement absentes :
// ce sont des formulaires, pas des pages de destination.
const publicPaths = [
  "",
  "/formations",
  "/soutenir",
  "/devenir-formateur",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/cgu",
  "/confidentialite",
  "/conditions-formateurs",
];

function languagesFor(path: string): Record<string, string> {
  return Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`]));
}

// Lu à chaque requête : un cours publié ou retiré apparaît ici sans rebuild.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = await prisma.course.findMany({
    where: { status: "PUBLISHED" },
    select: { slug: true, updatedAt: true },
  });

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
        lastModified: course.updatedAt,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: languagesFor(path) },
      });
    }
  }

  return entries;
}
