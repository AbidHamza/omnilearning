import type { MetadataRoute } from "next";
import { siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    // Le catalogue n'est plus gratuit dans son ensemble : une seule formation
    // l'est encore, les autres s'achètent. Le manifeste doit dire ce qui est vrai.
    name: `${siteName} · Formations tech`,
    short_name: siteName,
    description:
      "Développement, cybersécurité, data et design. Les deux premières leçons de chaque formation sont ouvertes.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#07090c",
    theme_color: "#07090c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
