import { isLocale, defaultLocale } from "@/i18n/config";
import { requireRole } from "@/lib/dal";
import CreerFormationClient from "./creer-client";
import type { Metadata } from "next";

// Écran privé : derrière une session, sans contenu public. Il n'a rien à faire
// dans un index, et une canonique n'aurait aucun sens sur une page dont le
// contenu change avec le compte connecté.
export const metadata: Metadata = { robots: { index: false, follow: false } };


export default async function CreerFormationPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  // Garde serveur : création de formation réservée aux formateurs/admin.
  await requireRole(locale, ["formateur", "admin"]);

  return <CreerFormationClient />;
}
