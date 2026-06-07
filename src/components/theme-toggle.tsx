"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import { useT } from "@/i18n/provider";

type Theme = "light" | "dark";

/**
 * Bascule clair / sombre.
 *
 * Le thème réel est porté par la classe `dark` sur <html>, posée AVANT le
 * premier rendu par un petit script inline (cf. note dans layout). Ce composant
 * se contente de lire l'état réel au montage puis de le faire basculer, ce qui
 * évite tout flash : le serveur ne décide pas du thème, c'est le DOM déjà peint.
 */
export default function ThemeToggle() {
  const t = useT();
  const [theme, setTheme] = useState<Theme | null>(null);

  // Synchronise l'état React avec le thème réel.
  // Si le script inline du layout a déjà posé la classe, on la lit telle quelle.
  // Sinon (layout non encore patché), on la reconstitue depuis localStorage /
  // prefers-color-scheme — au prix d'un éventuel flash au tout premier rendu.
  useEffect(() => {
    const root = document.documentElement;
    let resolved: Theme;
    if (root.classList.contains("dark")) {
      resolved = "dark";
    } else {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {
        stored = null;
      }
      const prefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
      resolved = stored === "dark" || (stored === null && prefersDark) ? "dark" : "light";
      root.classList.toggle("dark", resolved === "dark");
    }
    setTheme(resolved);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    // Active les transitions de couleur le temps du switch (puis on les laisse).
    root.classList.add("theme-transition");
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Mode privé / stockage indisponible : on bascule quand même visuellement.
    }
    setTheme(next);
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
      {/* Avant l'hydratation, theme === null : on affiche les deux icônes
          masquées pour réserver la place et éviter tout saut de mise en page. */}
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
