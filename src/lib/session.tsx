"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Role, User } from "./types";

// Le rôle provient EXCLUSIVEMENT de la session authentifiée (NextAuth -> User.role
// en DB), passée par le layout serveur. Aucun sélecteur de rôle côté client : un
// visiteur non connecté est "visiteur" et ne peut rien "choisir". Les privilèges
// réels sont garantis côté serveur (voir lib/dal.ts requireRole + les gardes de page).

export { homeByRole } from "./routes";

interface SessionValue {
  role: Role;
  user: User | null;
}

const SessionContext = createContext<SessionValue | null>(null);

export function SessionProvider({
  children,
  serverRole,
  serverUser,
}: {
  children: ReactNode;
  // Session serveur réelle (NextAuth). Absente = visiteur non connecté.
  serverRole?: Role;
  serverUser?: User | null;
}) {
  const role: Role = serverRole ?? "visiteur";
  const user = serverUser ?? null;

  return (
    <SessionContext.Provider value={{ role, user }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionValue {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession doit être utilisé dans un SessionProvider");
  return ctx;
}
