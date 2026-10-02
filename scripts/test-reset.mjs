// Recrée une base SQLite jetable pour les tests : schéma courant (db push), puis seed
// avec les comptes de démo. Ne touche jamais à dev.db.
// node scripts/test-reset.mjs   (ou npm run test:reset)
import { rmSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
export const TEST_DB = join(root, ".test", "test.db").replaceAll("\\", "/");
export const TEST_DB_URL = `file:${TEST_DB}`;

mkdirSync(join(root, ".test"), { recursive: true });
for (const suffix of ["", "-journal", "-wal", "-shm"]) rmSync(TEST_DB + suffix, { force: true });

const env = { ...process.env, DATABASE_URL: TEST_DB_URL, SEED_DEMO: "1" };
const run = (cmd) => execSync(cmd, { cwd: root, env, stdio: "inherit" });
// db push : l'historique prisma/migrations SQLite est en retard sur le schéma (Purchase, accessType...).
run("npx prisma db push");
run("npx tsx prisma/seed.ts");
console.log(`Base de test prête : ${TEST_DB}`);
