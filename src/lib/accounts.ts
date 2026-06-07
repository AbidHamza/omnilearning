import type { Role } from "./types";

export type LoginRole = Exclude<Role, "visiteur">;

export interface Account {
  email: string;
  password: string;
  role: LoginRole;
}

// Comptes de démonstration locaux. Aucun appel réseau : la validation se fait
// côté client à partir de cette liste (la session est ensuite stockée localement).
export const accounts: Account[] = [
  { email: "etudiant@omnilearn.tech", password: "omni1234", role: "etudiant" },
  { email: "formateur@omnilearn.tech", password: "omni1234", role: "formateur" },
  { email: "admin@omnilearn.tech", password: "omni1234", role: "admin" },
];

export function authenticate(identifier: string, password: string): Account | null {
  const email = identifier.trim().toLowerCase();
  return accounts.find((a) => a.email === email && a.password === password) ?? null;
}
