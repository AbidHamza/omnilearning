"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useT } from "@/i18n/provider";

type Theme = "light" | "dark";

/**
 * Bascule sombre / clair.
 *
 * Design system « terminal » = SOMBRE par défaut. L'état réel est porté par la
 * classe `light` sur <html> (mode « paper »), posée AVANT le premier rendu par
 * un petit script inline (cf. note dans layout) uniquement si l'utilisateur a
 * choisi clair. Ce composant lit cet état réel comme un store externe (le DOM)
 * via useSyncExternalStore : pas de setState dans un effet, pas de flash, le
 * serveur ne décide pas du thème : c'est le DOM déjà peint qui fait foi.
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
 * Lit le thème réellement appliqué. Sombre par défaut : on a le mode clair
 * « paper » si et seulement si la classe `light` est présente sur <html>.
 * On réaligne le DOM depuis la préférence stockée si besoin (idempotent).
 */
function readTheme(): Theme {
  const root = document.documentElement;
  if (root.classList.contains("light")) return "light";
  let stored: string | null = null;
  try {
    stored = localStorage.getItem("theme");
  } catch {
    stored = null;
  }
  // Tout sauf "light" => sombre (défaut terminal). Réaligne le DOM si besoin.
  const resolved: Theme = stored === "light" ? "light" : "dark";
  root.classList.toggle("light", resolved === "light");
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
    root.classList.toggle("light", next === "light");
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
      className="grid h-9 w-9 place-items-center rounded-[3px] border border-line bg-surface text-muted transition hover:border-primary hover:text-ink"
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
