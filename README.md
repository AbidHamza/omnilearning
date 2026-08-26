# OmniLearning

Plateforme e-learning de **OmniLearnConsultingCommerce LLC**, formations tech gratuites
(développement, cybersécurité, data, design…), espace apprenant/formateur/admin,
abonnements de soutien et internationalisation (fr / en / ar).

LIVE : **https://omnilearning.tech**

## Stack

| Domaine        | Techno                                                            |
| -------------- | ----------------------------------------------------------------- |
| Framework      | Next.js 16 (App Router, React 19, Server Components + Actions)    |
| Langage        | TypeScript (strict)                                               |
| Style          | Tailwind CSS v4, thème clair/sombre                               |
| Base de données| Prisma 7, **SQLite** en dev (driver adapter), **Postgres** en prod |
| Auth           | Auth.js / NextAuth v5 (credentials bcrypt + OAuth Google/GitHub, sessions JWT, rôles) |
| Paiements      | Stripe (abonnements Checkout + portail client + webhook)          |
| i18n           | Routing `/[lang]` (fr par défaut, en, ar RTL)                     |
| Uploads        | Disque local (`public/uploads`) par défaut, S3 optionnel          |

> Ce dépôt suit une version de Next.js avec des breaking changes (voir `AGENTS.md`
> et les guides dans `node_modules/next/dist/docs/`).

## Architecture

- `src/app/[lang]/` : pages localisées (landing, formations, tableau de bord,
  espaces `formateur`/`admin`/`parametres`, `soutenir`, auth).
- `src/app/api/` : routes : `auth/[...nextauth]`, `stripe/webhook`, `upload`.
- `src/lib/`
  - `db.ts` : client Prisma (adapter SQLite dev / Postgres prod).
  - `auth.ts` : config NextAuth (providers OAuth env-gated, callbacks rôle).
  - `dal.ts` : **Data Access Layer** server-only : session courante, dashboards
    formateur/admin, état facturation (lecture DB en forme UI).
  - `courses.ts` : catalogue depuis la DB.
  - `actions/` : Server Actions : `auth`, `draft`, `progress`, `stripe`
    (checkout + portail), `moderation` (validation des cours par l'admin).
  - `data.ts` : données de démo (seed + repli pour le mode visiteur).
- `prisma/schema.prisma` + `prisma/seed.ts` : schéma et données initiales.

### Rôles

`USER` (apprenant) · `INSTRUCTOR` (formateur) · `ADMIN`. Les pages d'espace lisent
les vraies données DB quand l'utilisateur est connecté, et retombent sur des
données de démo pour le visiteur non authentifié (sélecteur de rôle de démo).

## Démarrage local

```bash
npm install
cp .env.example .env          # remplir AUTH_SECRET au minimum
npm run db:push               # crée le schéma SQLite (dev.db)
npm run db:seed               # comptes démo + catalogue
npm run dev                   # http://localhost:3005
```

Comptes de démo (dev uniquement) : `etudiant` / `formateur` / `admin`
`@omnilearn.tech`.

## Scripts

| Script              | Rôle                                            |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Serveur de dev (port 3005)                      |
| `npm run build`     | `prisma generate` + `next build`                |
| `npm run start`     | Serveur de prod (port 3005)                     |
| `npm run lint`      | ESLint                                          |
| `npm run db:push`   | Applique le schéma sans migration               |
| `npm run db:seed`   | Seed (comptes + catalogue)                      |
| `npm run db:studio` | Prisma Studio                                   |

## Variables d'environnement

Voir `.env.example` pour la liste complète et commentée. Essentiel :

- **DB** : `DATABASE_URL` (SQLite `file:./dev.db` en dev ; `postgresql://…` en prod
  Passer aussi `provider="postgresql"` dans `prisma/schema.prisma` et utiliser
  l'adapter Postgres dans `src/lib/db.ts`).
- **Auth** : `AUTH_SECRET` (obligatoire), `AUTH_URL` (prod), `AUTH_GOOGLE_ID/SECRET`,
  `AUTH_GITHUB_ID/SECRET` (OAuth optionnel, activés seulement si présents).
- **Stripe** : `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`,
  `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_{SOUTIEN,MECENE,PARTENAIRE}`.
- **Uploads** : `UPLOAD_PROVIDER` (`local` par défaut, `s3` + clés AWS sinon).
- **Divers** : `NEXT_PUBLIC_APP_URL`.

## Déploiement (prod : VPS + PM2)

L'app tourne en build **standalone** derrière nginx, gérée par PM2.

1. `rsync` de la source vers le VPS (exclure `node_modules`, `.next`, `.git`, `.env`).
2. `npm ci` si les dépendances ont changé.
3. **Sauvegarder** `/opt/omnilearning/.env`.
4. `npm run build` (régénère `.next/standalone/`).
5. ⚠️ **Recopier** `/opt/omnilearning/.env` → `/opt/omnilearning/.next/standalone/.env`
   (un `next build` efface le `.env` du standalone, qui contient DB + Auth + Stripe + OAuth).
6. `pm2 restart omnilearning --update-env && pm2 save`.

Scripts de déploiement réutilisables dans `deploy/` (setup, start PM2, backup pg,
tests auth). Base Postgres sauvegardée quotidiennement (`deploy/pg_backup.sh`).

## Vérifications post-déploiement

- `curl -I https://omnilearning.tech` → 200.
- `curl -s https://omnilearning.tech/api/auth/providers` liste `google` + `credentials`.
- `curl https://omnilearning.tech/api/stripe/webhook` → 400 « signature » (pas 503).
