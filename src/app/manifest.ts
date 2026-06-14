import type { MetadataRoute } from "next";
import { siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Formations tech gratuites`,
    short_name: siteName,
    description:
      "Des formations tech gratuites et de qualité : développement, cybersécurité, data, design et plus.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#07090c",
    theme_color: "#07090c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
