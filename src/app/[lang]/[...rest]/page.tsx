import { notFound } from "next/navigation";

/**
 * Rattrape toute route inconnue sous /<langue>/.
 *
 * Le layout racine de ce site est [lang]/layout.tsx : il n'existe ni
 * app/layout.tsx ni app/not-found.tsx. Une URL qui ne correspond à aucun
 * segment sort donc de l'arbre traduit, et Next répond par sa propre page 404,
 * en anglais et hors charte. Appeler notFound() depuis un segment de langue
 * garde la requête à l'intérieur : c'est [lang]/not-found.tsx qui répond, dans
 * la langue de l'URL et avec son sens d'écriture.
 */
export default function RouteInconnue() {
  return notFound();
}
