import "server-only";
import type { Locale } from "./config";
import type { Dict } from "./dictionaries/fr";

const dictionaries: Record<Locale, () => Promise<Dict>> = {
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  ar: () => import("./dictionaries/ar").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dict> =>
  dictionaries[locale]();
