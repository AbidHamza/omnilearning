#!/usr/bin/env bash
# Test login réel contre la nouvelle DB Postgres (compte seedé). Exécuté SUR le VPS.
set -uo pipefail
BASE="http://127.0.0.1:3003"
JAR=$(mktemp)
HDR='-H Host:omnilearning.tech -H X-Forwarded-Proto:https'

# 1. CSRF token
CSRF_JSON=$(curl -s $HDR -c "$JAR" "$BASE/api/auth/csrf")
echo "csrf raw: $CSRF_JSON"
CSRF=$(echo "$CSRF_JSON" | sed -E 's/.*"csrfToken":"([^"]+)".*/\1/')
echo "csrf token: ${CSRF:0:16}..."

# 2. POST credentials callback
echo "=== POST signin ==="
curl -s -i $HDR -b "$JAR" -c "$JAR" \
  -X POST "$BASE/api/auth/callback/credentials" \
  --data-urlencode "csrfToken=$CSRF" \
  --data-urlencode "email=admin@omnilearn.tech" \
  --data-urlencode "password=omni1234" \
  --data-urlencode "callbackUrl=$BASE/fr/tableau-de-bord" \
  | grep -iE "^HTTP|^location|set-cookie" | head -15

# 3. Session check
echo "=== session ==="
curl -s $HDR -b "$JAR" "$BASE/api/auth/session"
echo
echo "=== cookies in jar ==="
grep -iE "session-token|authjs" "$JAR" | awk '{print $6}'
rm -f "$JAR"
