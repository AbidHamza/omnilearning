import type { Dict } from "@/i18n/dictionaries/fr";

/** Nom affiché d'une catégorie dans la langue de la page. */
export function categoryName(dict: Dict, label: string): string {
  return (dict.categoryNames as Record<string, string>)[label] ?? label;
}
