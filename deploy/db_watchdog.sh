#!/usr/bin/env bash
# Toutes les 5 min : si /api/health ne voit plus la base, relance le conteneur
# Postgres. Il vit dans le projet compose d'OmniPost (/opt/omnipost) : l'arrêt
# d'OmniPost le 2026-09-21 l'a arrêté avec, et omnilearn.org est resté trois
# jours sans base sans que rien ne le signale.
set -uo pipefail
LOG=/var/log/omnilearning-watchdog.log
body=$(curl -s -m 10 http://127.0.0.1:3003/api/health || true)
echo "$body" | grep -q '"database":"ok"' && exit 0
echo "$(date -Is) health KO: ${body:-no answer}" >> "$LOG"
if [ "$(docker inspect -f '{{.State.Running}}' omnipost-postgres 2>/dev/null)" != "true" ]; then
  docker start omnipost-postgres >> "$LOG" 2>&1 && echo "$(date -Is) omnipost-postgres restarted" >> "$LOG"
fi
