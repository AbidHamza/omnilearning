#!/usr/bin/env bash
set -euo pipefail
APP=/opt/omnilearning
cd "$APP"

echo "===> 7. prisma db push (Prisma 7, no --skip-generate)"
npx prisma db push --accept-data-loss

echo "===> 7b. prisma generate"
npx prisma generate

echo "===> 8. seed"
npx tsx -r dotenv/config prisma/seed.ts

echo "===> 9. build (standalone, capped heap)"
NODE_OPTIONS="--max-old-space-size=2048" npm run build

echo "===> DONE resume_setup"
