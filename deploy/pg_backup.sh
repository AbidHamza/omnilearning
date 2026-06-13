#!/usr/bin/env bash
# Backup quotidien de la DB Postgres omnilearning (dans le conteneur omnipost-postgres).
# Garde les 7 derniers. Installé en cron par Hamza/agent.
set -uo pipefail
BDIR=/opt/omnilearning/backups
mkdir -p "$BDIR"
STAMP=$(date +%Y%m%d-%H%M%S)
OUT="$BDIR/omnilearning_${STAMP}.sql.gz"

docker exec omnipost-postgres pg_dump -U omnilearning -d omnilearning 2>>"$BDIR/backup.err" | gzip > "$OUT"

if [ -s "$OUT" ]; then
  echo "$(date -Is) OK $OUT ($(du -h "$OUT" | cut -f1))" >> "$BDIR/backup.log"
else
  echo "$(date -Is) FAIL empty dump $OUT" >> "$BDIR/backup.log"
  rm -f "$OUT"
fi

# Rétention : 7 derniers .sql.gz
ls -1t "$BDIR"/omnilearning_*.sql.gz 2>/dev/null | tail -n +8 | xargs -r rm -f
