import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// Prisma 7 lit la configuration ici (et plus depuis le bloc datasource pour les
// commandes CLI). On charge .env via dotenv puis on expose DATABASE_URL.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
