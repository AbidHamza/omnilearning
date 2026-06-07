import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Espaces privés ou sans valeur SEO (toutes langues via le joker).
      disallow: [
        "/*/admin",
        "/*/tableau-de-bord",
        "/*/parametres",
        "/*/formateur",
        "/*/creer",
        "/*/mot-de-passe-oublie",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
