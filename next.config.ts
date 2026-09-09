import type { NextConfig } from "next";

// Politique de sécurité du contenu. Elle vit ici et non dans nginx pour suivre
// l'application quand elle change d'hôte.
//
// `unsafe-inline` sur les scripts est assumé : le bootstrap Tag Manager et les
// scripts d'hydratation de Next sont inline. La seule alternative propre,
// un nonce recalculé par requête dans le proxy, obligerait à réécrire chaque
// balise script injectée par le framework. Le reste de la politique reste serrée :
// aucune origine de script inconnue, aucun plugin, aucune balise base réécrite,
// et le site ne peut être encadré que par lui-même.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com",
  "media-src 'self' blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
  "frame-src 'self' https://www.googletagmanager.com",
  "form-action 'self' https://checkout.stripe.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Modules natifs / serveur à ne pas bundler (Prisma + driver SQLite).
  serverExternalPackages: [
    "@prisma/client",
    ".prisma/client",
    "@prisma/adapter-better-sqlite3",
    "better-sqlite3",
  ],
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Content-Security-Policy", value: csp }],
      },
    ];
  },
};

export default nextConfig;
