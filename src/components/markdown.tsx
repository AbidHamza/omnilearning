import type { ReactNode } from "react";

// Rendu Markdown maison, volontairement limité au sous-ensemble utilisé dans les
// cours (titres ##/###, listes, code, citations, tableaux, images, gras, code
// inline, liens). Pas de dépendance externe : un composant serveur qui parse
// ligne par ligne. Le contenu vient de la base (rédigé par l'équipe), pas d'une
// saisie utilisateur arbitraire. Seule exception au « pas de HTML brut » : les
// blocs ```figure (SVG pédagogiques du seed), injectés après un contrôle strict
// (doit commencer par <svg, aucun script/handler/href ; cf. safeSvg).

type Props = { source: string; className?: string };

// ----- figures SVG (blocs ```figure : 1re ligne JSON méta, puis un <svg>) -----

/**
 * Contrôle défensif du SVG d'une figure. Le contenu est rédigé par l'équipe
 * (seed), mais on refuse quand même tout vecteur de script : le markup doit
 * commencer par `<svg` et ne contenir ni <script>, ni handler on*, ni href,
 * ni <foreignObject>/<image>, ni javascript:.
 */
function safeSvg(markup: string): string | null {
  const svg = markup.trim();
  if (!/^<svg[\s>]/i.test(svg)) return null;
  if (
    /<script|<foreignobject|<image|<iframe|<embed|<object|javascript:|\son\w+\s*=|href\s*=/i.test(
      svg,
    )
  ) {
    return null;
  }
  return svg;
}

function parseFigureMeta(line: string): { caption?: string } | null {
  try {
    const meta = JSON.parse(line) as unknown;
    if (meta && typeof meta === "object") return meta as { caption?: string };
  } catch {
    /* méta illisible -> figure rejetée */
  }
  return null;
}

// ----- inline : gras, code, liens -----

function renderInline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // On découpe successivement sur les motifs, dans l'ordre de priorité.
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyBase}-i${i++}`;
    if (tok.startsWith("**")) {
      nodes.push(<strong key={key}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith("`")) {
      nodes.push(
        <code
          key={key}
          className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-primary"
        >
          {tok.slice(1, -1)}
        </code>,
      );
    } else {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok);
      if (mm) {
        const href = mm[2];
        const external = /^https?:\/\//.test(href);
        nodes.push(
          <a
            key={key}
            href={href}
            className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {mm[1]}
          </a>,
        );
      } else {
        nodes.push(tok);
      }
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

// ----- blocs -----

export default function Markdown({ source, className }: Props) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Bloc de code ```lang (dont le bloc spécial ```figure)
    if (/^```/.test(line.trim())) {
      const lang = line.trim().slice(3).trim();
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i++;
      }
      i++; // ferme le ```

      // ```figure : 1re ligne = méta JSON ({"caption": …}), reste = <svg>.
      if (lang === "figure") {
        const meta = buf.length > 0 ? parseFigureMeta(buf[0]) : null;
        const svg = meta ? safeSvg(buf.slice(1).join("\n")) : null;
        if (meta && svg) {
          blocks.push(
            <figure key={`b${key++}`} className="md-figure">
              <div dangerouslySetInnerHTML={{ __html: svg }} />
              {meta.caption && <figcaption>{meta.caption}</figcaption>}
            </figure>,
          );
        }
        // Figure invalide : on n'affiche rien plutôt que du markup brut.
        continue;
      }

      blocks.push(
        <pre
          key={`b${key++}`}
          className="my-4 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-ink p-4 text-sm leading-relaxed text-white/90"
        >
          <code data-lang={lang} className="font-mono">
            {buf.join("\n")}
          </code>
        </pre>,
      );
      continue;
    }

    // Ligne vide
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Titres
    const h = /^(#{2,3})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      const content = renderInline(h[2], `h${key}`);
      if (level === 2) {
        blocks.push(
          <h2 key={`b${key++}`} className="mt-8 mb-3 text-xl font-bold tracking-tight sm:text-2xl">
            {content}
          </h2>,
        );
      } else {
        blocks.push(
          <h3 key={`b${key++}`} className="mt-6 mb-2 text-lg font-semibold">
            {content}
          </h3>,
        );
      }
      i++;
      continue;
    }

    // Citation / encadré (lignes > consécutives)
    if (/^>\s?/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <blockquote
          key={`b${key++}`}
          className="my-4 rounded-r-[var(--radius-card)] border-s-4 border-primary bg-primary-soft/50 px-4 py-3 text-ink/90"
        >
          {renderInline(buf.join(" "), `q${key}`)}
        </blockquote>,
      );
      continue;
    }

    // Liste ordonnée
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={`b${key++}`} className="my-4 list-decimal space-y-1.5 ps-6 leading-relaxed">
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it, `ol${key}-${idx}`)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    // Image seule sur sa ligne : ![alt](src)
    const img = /^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/.exec(line.trim());
    if (img) {
      blocks.push(
        // eslint-disable-next-line @next/next/no-img-element
        <img key={`b${key++}`} src={img[2]} alt={img[1]} className="md-img" loading="lazy" />,
      );
      i++;
      continue;
    }

    // Tableau pipe simple : ligne d'en-tête | séparateur |---| puis lignes
    if (
      /^\|.*\|\s*$/.test(line.trim()) &&
      i + 1 < lines.length &&
      /^\|?[\s:|-]+\|?\s*$/.test(lines[i + 1].trim()) &&
      lines[i + 1].includes("-")
    ) {
      const splitRow = (row: string) =>
        row
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((cell) => cell.trim());

      const headers = splitRow(line);
      i += 2; // saute en-tête + séparateur
      const rows: string[][] = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i].trim())) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push(
        <div key={`b${key++}`} className="md-table-wrap">
          <table className="md-table">
            <thead>
              <tr>
                {headers.map((h2, idx) => (
                  <th key={idx}>{renderInline(h2, `th${key}-${idx}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((cells, r) => (
                <tr key={r}>
                  {headers.map((_, cIdx) => (
                    <td key={cIdx}>
                      {renderInline(cells[cIdx] ?? "", `td${key}-${r}-${cIdx}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // Liste à puces
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={`b${key++}`} className="my-4 list-disc space-y-1.5 ps-6 leading-relaxed">
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it, `ul${key}-${idx}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // Paragraphe : agrège les lignes jusqu'à une ligne vide / un nouveau bloc
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^```/.test(lines[i].trim()) &&
      !/^(#{2,3})\s+/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^!\[[^\]]*\]\([^)\s]+\)\s*$/.test(lines[i].trim()) &&
      !/^\|.*\|\s*$/.test(lines[i].trim())
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`b${key++}`} className="my-3 leading-relaxed">
        {renderInline(para.join(" "), `p${key}`)}
      </p>,
    );
  }

  return <div className={className}>{blocks}</div>;
}
