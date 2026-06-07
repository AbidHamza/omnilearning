"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { Role, User } from "./types";
import { adminUser, instructorUser, studentUser } from "./data";
import { localePath } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";

const userByRole: Record<Role, User | null> = {
  visiteur: null,
  etudiant: studentUser,
  formateur: instructorUser,
  admin: adminUser,
};

export const homeByRole: Record<Role, string> = {
  visiteur: "/",
  etudiant: "/tableau-de-bord",
  formateur: "/formateur",
  admin: "/admin",
};

export const roleLabels: Record<Role, string> = {
  visiteur: "Visiteur",
  etudiant: "Apprenant",
  formateur: "Formateur",
  admin: "Administrateur",
};

interface SessionValue {
  role: Role;
  setRole: (role: Role) => void;
  user: User | null;
  // false tant que l'hydratation n'est pas terminée : les gardes de route
  // attendent ce flag pour ne pas rediriger sur le rôle par défaut du serveur.
  ready: boolean;
}

const SessionContext = createContext<SessionValue | null>(null);

const STORAGE_KEY = "got-role";
const DEFAULT_ROLE: Role = "etudiant";

// Le rôle est un store externe (localStorage) lu via useSyncExternalStore :
// pas de setState dans un effet, et le serveur rend toujours DEFAULT_ROLE.
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function readRole(): Role {
  const saved = localStorage.getItem(STORAGE_KEY) as Role | null;
  return saved && saved in userByRole ? saved : DEFAULT_ROLE;
}

function writeRole(next: Role) {
  localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((cb) => cb());
}

const noopSubscribe = () => () => {};

export function SessionProvider({ children }: { children: ReactNode }) {
  const role = useSyncExternalStore(subscribe, readRole, () => DEFAULT_ROLE);
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const setRole = useCallback((next: Role) => writeRole(next), []);

  return (
    <SessionContext.Provider value={{ role, setRole, user: userByRole[role], ready }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionValue {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession doit être utilisé dans un SessionProvider");
  return ctx;
}

/**
 * Protège une page réservée à certains rôles. Renvoie `true` quand le rendu
 * est autorisé ; sinon redirige (vers /connexion pour un visiteur, vers son
 * espace pour un autre rôle) dès que la session est prête.
 */
export function useRequireRole(allowed: Role[]): boolean {
  const { role, ready } = useSession();
  const router = useRouter();
  const { locale } = useI18n();
  const ok = allowed.includes(role);

  useEffect(() => {
    if (!ready || ok) return;
    const target = role === "visiteur" ? "/connexion" : homeByRole[role];
    router.replace(localePath(locale, target));
  }, [ready, ok, role, router, locale]);

  return ready && ok;
}
