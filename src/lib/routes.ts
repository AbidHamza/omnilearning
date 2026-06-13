import type { Role } from "./types";

// Page d'accueil par défaut de chaque rôle (utilisé par les redirections serveur
// et la navigation client). Module neutre (ni "use client" ni "server-only") pour
// être importable des deux côtés.
export const homeByRole: Record<Role, string> = {
  visiteur: "/",
  etudiant: "/tableau-de-bord",
  formateur: "/formateur",
  admin: "/admin",
};
