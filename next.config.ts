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
//
// Les trois origines Facebook servent le pixel Meta, qui ne se charge
// qu'après un consentement explicite : `connect.facebook.net` pour le
// script, `www.facebook.com` pour le hit `/tr` et l'image du `noscript`.
// Sans elles le CSP coupait le script et le pixel ne remontait rien,
// alors que la requête partait bien du navigateur.
// En dev, Turbopack/React ont besoin d'eval() (stack traces, refresh) et le
// HMR passe par un websocket sur le même hôte : la politique stricte
// ci-dessous ne s'applique qu'en production, sans quoi le clic sur un
// formulaire plante en silence avant même l'appel réseau.
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://connect.facebook.net`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com https://www.facebook.com",
  "media-src 'self' blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws://localhost:* ws://127.0.0.1:*" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://connect.facebook.net https://www.facebook.com`,
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
  // `unzipper` charge en interne un require() optionnel vers @aws-sdk/client-s3
  // (jamais utilisé ici, on ne dézippe que depuis un buffer local) : le laisser
  // en dépendance native évite au bundler de vouloir résoudre ce package absent.
  serverExternalPackages: [
    "@prisma/client",
    ".prisma/client",
    "@prisma/adapter-better-sqlite3",
    "better-sqlite3",
    "unzipper",
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
