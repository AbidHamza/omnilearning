import type { ReactNode } from "react";

// Rendu Markdown maison, volontairement limité au sous-ensemble utilisé dans les
// cours (titres ##/###, listes, code, citations, gras, code inline, liens).
// Pas de dépendance externe : un composant serveur qui parse ligne par ligne.
// Le contenu vient de la base (rédigé par l'équipe), pas d'une saisie utilisateur
// arbitraire — on n'insère jamais de HTML brut.

type Props = { source: string; className?: string };

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

    // Bloc de code ```lang
    if (/^```/.test(line.trim())) {
      const lang = line.trim().slice(3).trim();
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i++;
      }
      i++; // ferme le ```
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
      !/^[-*]\s+/.test(lines[i])
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
