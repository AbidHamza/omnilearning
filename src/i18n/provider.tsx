"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { Dict } from "./dictionaries/fr";

interface I18nValue {
  locale: Locale;
  dict: Dict;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  dict,
  dir,
  children,
}: I18nValue & { children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ locale, dict, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n doit être utilisé dans un I18nProvider");
  return ctx;
}

/** Raccourci pour accéder au dictionnaire dans un composant client. */
export function useT(): Dict {
  return useI18n().dict;
}
