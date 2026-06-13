import type { Role } from "./types";

export type LoginRole = Exclude<Role, "visiteur">;

export interface Account {
  email: string;
  password: string;
  role: LoginRole;
}

// Comptes de DÉMONSTRATION uniquement (affichés sur la page de connexion pour
// pré-remplir le formulaire). L'authentification réelle passe désormais par
// Auth.js + DB (voir src/lib/auth.ts). Ces identifiants correspondent aux comptes
// créés par le seed (prisma/seed.ts) ; le mot de passe est hashé en base.
export const accounts: Account[] = [
  { email: "etudiant@omnilearn.tech", password: "omni1234", role: "etudiant" },
  { email: "formateur@omnilearn.tech", password: "omni1234", role: "formateur" },
  { email: "admin@omnilearn.tech", password: "omni1234", role: "admin" },
];
