"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useT } from "@/i18n/provider";

type Theme = "light" | "dark";

/**
 * Bascule clair / sombre.
 *
 * Le thème réel est porté par la classe `dark` sur <html>, posée AVANT le
 * premier rendu par un petit script inline (cf. note dans layout). Ce composant
 * lit cet état réel comme un store externe (le DOM) via useSyncExternalStore,
 * ce qui évite tout setState dans un effet et tout flash : le serveur ne décide
 * pas du thème, c'est le DOM déjà peint qui fait foi.
 */

// Notifie React quand la classe `dark` de <html> change (depuis ce composant
// ou un autre onglet via l'event `storage`).
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((cb) => cb());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Lit le thème réellement appliqué. Si le script inline du layout a déjà posé
 * la classe `dark`, on la lit telle quelle. Sinon (cas limite), on la
 * reconstitue depuis localStorage / prefers-color-scheme et on la pose, pour
 * que le DOM et l'état React restent cohérents dès le premier accès.
 */
function readTheme(): Theme {
  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  // La classe n'est pas posée : soit le thème est clair, soit le script inline
  // n'a pas tourné. On départage avec la préférence stockée / système.
  let stored: string | null = null;
  try {
    stored = localStorage.getItem("theme");
  } catch {
    stored = null;
  }
  const prefersDark =
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  const resolved: Theme =
    stored === "dark" || (stored === null && prefersDark) ? "dark" : "light";
  // Réaligne le DOM si besoin (idempotent).
  root.classList.toggle("dark", resolved === "dark");
  return resolved;
}

export default function ThemeToggle() {
  const t = useT();
  // Côté serveur et avant hydratation : `null` → on réserve la place sans
  // décider du thème (évite tout mismatch d'hydratation et tout flash).
  const theme = useSyncExternalStore<Theme | null>(
    subscribe,
    readTheme,
    () => null,
  );

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    // Active les transitions de couleur le temps du switch.
    root.classList.add("theme-transition");
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Mode privé / stockage indisponible : on bascule quand même visuellement.
    }
    notify();
  }

  const isDark = theme === "dark";
  const label = isDark ? t.theme.toLight : t.theme.toDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-muted transition hover:border-primary hover:text-ink"
    >
      {/* Avant l'hydratation, theme === null : on réserve la place pour éviter
          tout saut de mise en page. */}
      {theme === null ? (
        <span className="h-[18px] w-[18px]" aria-hidden="true" />
      ) : isDark ? (
        <SunIcon width={18} height={18} aria-hidden="true" />
      ) : (
        <MoonIcon width={18} height={18} aria-hidden="true" />
      )}
    </button>
  );
}
