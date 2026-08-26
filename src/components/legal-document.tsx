import type { ReactNode } from "react";
import { legalEmail, type LegalPage } from "@/lib/legal-content";

// Transforme les occurrences de l'adresse de contact en lien mailto cliquable,
// pour que chaque mention de l'e-mail dans le corps du texte soit actionnable.
function withMailto(text: string): ReactNode {
  const parts = text.split(legalEmail);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`mailto:${legalEmail}`}
          className="text-primary underline-offset-2 hover:underline"
        >
          {legalEmail}
        </a>
      )}
    </span>
  ));
}

/**
 * Gabarit commun des pages légales : un seul <h1>, chapeau, puis les sections
 * (<h2> + paragraphes ou listes). Le bloc `children` optionnel permet à une
 * page d'ajouter ses propres appels à l'action après le contenu (mailto,
 * liens vers les formations…).
 */
export default function LegalDocument({
  page,
  children,
}: {
  page: LegalPage;
  children?: ReactNode;
}) {
  return (
    <div className="container-page py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {page.title}
        </h1>
        {page.updated && (
          <p className="mt-3 font-mono text-xs text-muted-soft">{page.updated}</p>
        )}
        <p className="mt-5 text-lg leading-relaxed text-muted">{page.lead}</p>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.blocks.map((block, bi) =>
                  block.type === "p" ? (
                    <p key={bi} className="leading-relaxed text-muted">
                      {withMailto(block.text)}
                    </p>
                  ) : (
                    <ul
                      key={bi}
                      className="list-disc space-y-2 pl-5 text-muted marker:text-primary"
                    >
                      {block.items.map((item, ii) => (
                        <li key={ii} className="leading-relaxed">
                          {withMailto(item)}
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>

        {children && <div className="mt-14 border-t border-line pt-8">{children}</div>}
      </article>
    </div>
  );
}
