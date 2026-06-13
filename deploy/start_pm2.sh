#!/usr/bin/env bash
set -euo pipefail
APP=/opt/omnilearning
cd "$APP"

# Next standalone : copier static + public dans le dossier standalone
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public 2>/dev/null || true

# Copier prisma (schema + client généré sont déjà dans node_modules tracés par standalone)
# Le standalone embarque ses node_modules ; s'assurer que @prisma/client + adapter-pg + pg sont présents
for pkg in @prisma/client @prisma/adapter-pg pg .prisma; do
  if [ ! -e ".next/standalone/node_modules/$pkg" ]; then
    mkdir -p ".next/standalone/node_modules/$(dirname "$pkg")"
    cp -r "node_modules/$pkg" ".next/standalone/node_modules/$pkg" 2>/dev/null || true
  fi
done

# Charger .env -> exporter dans l'environnement pm2
set -a
. "$APP/.env"
set +a
export PORT=3003
export HOSTNAME=127.0.0.1

# (Re)lancer via pm2
pm2 delete omnilearning 2>/dev/null || true
PORT=3003 HOSTNAME=127.0.0.1 pm2 start "$APP/.next/standalone/server.js" \
  --name omnilearning \
  --update-env \
  --cwd "$APP/.next/standalone"

pm2 save
echo "===> pm2 started omnilearning on 127.0.0.1:3003"
sleep 3
pm2 list | grep omnilearning
echo "=== local curl test ==="
curl -sI http://127.0.0.1:3003/ | head -5 || echo "curl failed"
