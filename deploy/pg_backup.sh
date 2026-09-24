#!/usr/bin/env bash
# Backup quotidien de la DB Postgres omnilearning (conteneur omnipost-postgres),
# 7 derniers gardés sur le VPS, 30 jours chiffrés hors serveur.
#
# Du 2026-09-22 au 2026-09-24 ce script a écrit « OK » sur trois dumps vides :
# le conteneur était arrêté, pg_dump échouait, et gzip d'un flux vide donne
# quand même un fichier non vide. Un dump ne compte donc que si pg_dump sort à
# 0 ET si le marqueur de fin de pg_dump figure dans ses dernières lignes
# (depuis pg_dump 17.6, une ligne \unrestrict le suit).
set -uo pipefail
BDIR=/opt/omnilearning/backups
KEY=/root/.omnilearning-backup.key
HOTE="u347972104@72.62.184.232"
SSHO="-P 65002 -i /root/.ssh/olcc_shared -o BatchMode=yes -o ConnectTimeout=30"
DISTANT="backups/omnilearning"
mkdir -p "$BDIR"
STAMP=$(date +%Y%m%d-%H%M%S)
OUT="$BDIR/omnilearning_${STAMP}.sql.gz"
log() { echo "$(date -Is) $*" >> "$BDIR/backup.log"; }

docker exec omnipost-postgres pg_dump -U omnilearning -d omnilearning 2>>"$BDIR/backup.err" | gzip > "$OUT"
rc=("${PIPESTATUS[@]}")
if [ "${rc[0]}" -ne 0 ] || ! zcat "$OUT" | tail -n 10 | grep -q "^-- PostgreSQL database dump complete"; then
  log "FAIL pg_dump rc=${rc[0]} $OUT"
  rm -f "$OUT"
  exit 1
fi
log "OK $OUT ($(du -h "$OUT" | cut -f1))"

# Copie hors serveur, chiffrée. La clé est aussi dans les secrets de Hamza
# (omnilearning-backup-key) : sans elle, la copie distante est illisible.
ENC="$OUT.enc"
if openssl enc -aes-256-cbc -pbkdf2 -salt -pass "file:$KEY" -in "$OUT" -out "$ENC" \
  && ssh -p 65002 -i /root/.ssh/olcc_shared -o BatchMode=yes -o ConnectTimeout=30 "$HOTE" "mkdir -p $DISTANT" \
  && scp -q $SSHO "$ENC" "$HOTE:$DISTANT/" \
  && ssh -p 65002 -i /root/.ssh/olcc_shared -o BatchMode=yes -o ConnectTimeout=30 "$HOTE" \
       "find $DISTANT -name 'omnilearning_*.enc' -mtime +30 -delete; stat -c %s $DISTANT/$(basename "$ENC")" \
       | grep -qx "$(stat -c %s "$ENC")"; then
  log "OK offsite $(basename "$ENC")"
else
  log "FAIL offsite $(basename "$ENC")"
fi
rm -f "$ENC"

ls -1t "$BDIR"/omnilearning_*.sql.gz 2>/dev/null | tail -n +8 | xargs -r rm -f
