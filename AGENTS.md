<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Migrations Prisma : deux historiques, un seul valide en prod

Le dev local tourne sur SQLite (`prisma/dev.db`), la prod sur Postgres
(conteneur `omnipost-postgres`, partagé avec OmniPost). Un seul
`migration_lock.toml` ne peut pas pointer les deux dialectes en même temps :
Prisma refuse de rejouer une migration SQLite contre Postgres et inversement.

## Ce qui existe

- `prisma/migrations/` : historique **SQLite**, utilisé par `npm run db:migrate`
  (`prisma migrate dev`) en local. Ne change rien à l'habitude de dev.
- `prisma/migrations-postgres/` : historique **Postgres**, versionné,
  contient `0_init` (généré le 2026-09-25 via `prisma migrate diff --from-empty
  --to-schema prisma/schema.prisma` avec le provider forcé à `postgresql`,
  541 lignes, 20 `CREATE TABLE`). C'est la seule source de vérité pour la prod.

## Ce que fait `deploy/remote_setup.sh`

À chaque déploiement, après avoir patché `schema.prisma` en `postgresql` :

```
rm -rf prisma/migrations
mv prisma/migrations-postgres prisma/migrations
npx prisma migrate deploy
```

`migrate deploy` ne rejoue que ce qui n'est pas déjà marqué appliqué dans la
table `_prisma_migrations` de la base cible. La prod a été baselinée une
fois, à la main, le 2026-09-25 : `npx prisma migrate resolve --applied
0_init` (le schéma de la base au moment du baseline correspondait déjà
exactement à `0_init`, vérifié par un `prisma migrate diff` calibré avant
et après). Aucune table n'a été recréée ni vidée pour ce baseline.

Toute nouvelle migration Postgres se génère et se commit dans
`prisma/migrations-postgres/`, jamais dans `prisma/migrations/` (qui est
l'historique SQLite du dev et sera écrasé au prochain déploiement).

## Pourquoi pas un seul provider partout

Basculer le dev sur un Postgres local (Docker) aurait évité la duplication,
mais change l'habitude de travail existante (`db:push`, `db:migrate`,
`dev.db` versionnable/jetable) sans bénéfice pour ce correctif précis. Le
schéma applicatif (`prisma/schema.prisma`) reste unique et partagé ; seul le
provider et l'historique de migrations diffèrent entre les deux
environnements, exactement comme le fait déjà `remote_setup.sh` pour
`src/lib/db.ts` et l'adaptateur Prisma.

## Le seed (`prisma/seed.ts`)

Tourne après `migrate deploy` à chaque déploiement. Sans `SEED_DEMO=1`
(absent du `.env` de prod, vérifié le 2026-09-25) :
- Catégories et badges : upsert par slug stable, sans effet de bord.
- Comptes `@omnilearn.tech` / `@learners.omnilearn.tech` et le bloc de cours
  de démo : purgés s'ils existent, jamais créés.
- Avis : seule la suppression des avis sans `userId` (bootstrap fictif)
  s'exécute ; un avis rattaché à un compte réel n'est jamais touché.

Ne pas mettre `SEED_DEMO=1` en prod : ce chemin recrée à chaque run les
`CoursePart`/`Lesson` des cours de démo (delete + recreate) et n'est prévu
que pour un environnement de démonstration jetable.
