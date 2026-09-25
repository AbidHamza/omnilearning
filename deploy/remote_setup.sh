#!/usr/bin/env bash
# Exécuté SUR le VPS, dans /opt/omnilearning. Idempotent autant que possible.
set -euo pipefail
APP=/opt/omnilearning
cd "$APP"

echo "===> 1. Schema provider -> postgresql"
# datasource db { provider = "sqlite" }  ->  "postgresql"
sed -i 's/provider = "sqlite"/provider = "postgresql"/' prisma/schema.prisma
grep -n 'provider = "postgresql"' prisma/schema.prisma

echo "===> 2. Swap src/lib/db.ts (PrismaPg)"
cp deploy/db.prod.ts src/lib/db.ts

echo "===> 3. Patch prisma/seed.ts (PrismaPg)"
sed -i 's#import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";#import { PrismaPg } from "@prisma/adapter-pg";#' prisma/seed.ts
# Remplace le bloc adapter better-sqlite3 par PrismaPg (multi-ligne)
perl -0pi -e 's/const adapter = new PrismaBetterSqlite3\(\{\s*url: process\.env\.DATABASE_URL \?\? "file:\.\/dev\.db",\s*\}\);/const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });/s' prisma/seed.ts
grep -n "PrismaPg\|adapter" prisma/seed.ts | head

echo "===> 4. next.config.ts -> standalone + externalize adapter-pg"
# output standalone
if ! grep -q 'output:' next.config.ts; then
  sed -i 's/const nextConfig: NextConfig = {/const nextConfig: NextConfig = {\n  output: "standalone",/' next.config.ts
fi
# externalize pg adapter instead of better-sqlite3
sed -i 's#"@prisma/adapter-better-sqlite3",#"@prisma/adapter-pg",#' next.config.ts
sed -i '/"better-sqlite3",/d' next.config.ts
grep -n 'output\|adapter-pg\|standalone' next.config.ts

echo "===> 5. Historique de migrations Postgres (remplace l'historique dev SQLite)"
# prisma/migrations = historique SQLite (dev). prisma/migrations-postgres = historique
# versionne Postgres, seul valide en prod. Prod est baseline sur 0_init (voir AGENTS.md) ;
# ce swap ne rejoue jamais le DDL de 0_init, il rend juste l'historique visible pour
# `migrate deploy`, qui saute tout ce qui est deja marque applique dans _prisma_migrations.
rm -rf prisma/migrations
mv prisma/migrations-postgres prisma/migrations

echo "===> 6. npm install + adapter-pg"
npm install --no-audit --no-fund @prisma/adapter-pg pg >/dev/null 2>&1 || npm install @prisma/adapter-pg pg
npm ci --no-audit --no-fund 2>/dev/null || npm install --no-audit --no-fund

echo "===> 7. prisma migrate deploy + generate"
# db push (schema-sync, sans historique) remplacé par migrate deploy (versionné,
# rejoue uniquement les migrations non encore marquées dans _prisma_migrations).
npx prisma migrate deploy
npx prisma generate

echo "===> 8. seed"
npx tsx -r dotenv/config prisma/seed.ts || npx tsx prisma/seed.ts

echo "===> 9. build (standalone)"
rm -rf .next/cache  # cache Turbopack perime : casse la resolution next/font (vu 2026-09-24)
NODE_OPTIONS="--max-old-space-size=2048" npm run build

echo "===> DONE remote_setup"
