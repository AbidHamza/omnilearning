import type { Role } from "./types";
import type { AppRole } from "./auth";

// L'UI utilise des rôles FR (etudiant/formateur/admin/visiteur) ; la DB/auth
// utilise USER/INSTRUCTOR/ADMIN. Ce module fait le pont entre les deux.

export function toUiRole(appRole: AppRole | string | null | undefined): Role {
  switch (appRole) {
    case "INSTRUCTOR":
      return "formateur";
    case "ADMIN":
      return "admin";
    case "USER":
      return "etudiant";
    default:
      return "visiteur";
  }
}

export function toAppRole(uiRole: Role): AppRole {
  switch (uiRole) {
    case "formateur":
      return "INSTRUCTOR";
    case "admin":
      return "ADMIN";
    default:
      return "USER";
  }
}
