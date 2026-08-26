import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// Prisma 7 : le runtime ne lit plus l'URL depuis schema.prisma, on passe un
// "driver adapter" au constructeur. En dev = SQLite (better-sqlite3, zéro setup).
//
// PASSAGE EN PROD (Postgres) : installer `@prisma/adapter-pg` + `pg`, passer
// provider="postgresql" dans schema.prisma, puis remplacer l'adapter ci-dessous
// par `new PrismaPg({ connectionString: process.env.DATABASE_URL })`.

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";

function createPrisma(): PrismaClient {
  const adapter = new PrismaBetterSqlite3({ url: databaseUrl });
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
