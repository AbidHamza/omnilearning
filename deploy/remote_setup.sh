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

echo "===> 5. Drop SQLite migrations (db push utilisé pour Postgres)"
rm -rf prisma/migrations

echo "===> 6. npm install + adapter-pg"
npm install --no-audit --no-fund @prisma/adapter-pg pg >/dev/null 2>&1 || npm install @prisma/adapter-pg pg
npm ci --no-audit --no-fund 2>/dev/null || npm install --no-audit --no-fund

echo "===> 7. prisma db push + generate"
# Prisma 7 : `db push` ne prend plus --skip-generate ; generate est appelé juste après.
npx prisma db push
npx prisma generate

echo "===> 8. seed"
npx tsx -r dotenv/config prisma/seed.ts || npx tsx prisma/seed.ts

echo "===> 9. build (standalone)"
NODE_OPTIONS="--max-old-space-size=2048" npm run build

echo "===> DONE remote_setup"
