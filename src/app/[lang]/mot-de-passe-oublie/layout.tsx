import type { Metadata } from "next";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// Formulaire de réinitialisation : rien à indexer, et une page de ce genre dans
// les résultats n'amène que des visiteurs égarés. On lui donne un titre lisible
// et on la sort de l'index plutôt que de lui poser une canonique.
export async function generateMetadata(
  props: LayoutProps<"/[lang]/mot-de-passe-oublie">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = await getDictionary(locale);

  return {
    title: dict.forgotPassword.title,
    robots: { index: false, follow: true },
  };
}

export default function MotDePasseOublieLayout({
  children,
}: LayoutProps<"/[lang]/mot-de-passe-oublie">) {
  return children;
}
