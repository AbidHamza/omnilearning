import type { NextConfig } from "next";

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
};

export default nextConfig;
