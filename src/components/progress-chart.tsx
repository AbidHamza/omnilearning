"use client";

import { useT } from "@/i18n/provider";

// Courbe d'XP par jour. Les données viennent du serveur (journal XpEvent,
// cf. getXpByDay) : rien n'est inventé côté client. Sans données, on affiche
// un état vide honnête plutôt qu'une fausse courbe.

export interface ChartPoint {
  label: string;
  value: number;
}

const W = 560;
const H = 200;
const PAD = 28;

function buildPath(values: number[], max: number) {
  const n = values.length;
  const stepX = n > 1 ? (W - PAD * 2) / (n - 1) : 0;
  const pts = values.map((v, i) => {
    const x = PAD + i * stepX;
    const y = H - PAD - (v / max) * (H - PAD * 2);
    return [x, y] as const;
  });
  // Courbe lissée (Catmull-Rom -> Bézier)
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2[0]} ${p2[1]}`;
  }
  return { d, pts };
}

/** Arrondit le plafond de l'axe à un palier lisible. */
function niceMax(raw: number): number {
  if (raw <= 20) return 20;
  if (raw <= 50) return 50;
  if (raw <= 100) return 100;
  return Math.ceil(raw / 100) * 100;
}

export default function ProgressChart({
  title,
  data,
  emptyText,
}: {
  title?: string;
  data?: ChartPoint[];
  emptyText?: string;
}) {
  const { chart } = useT();
  const empty = emptyText ?? chart.empty;
  const hasData = Boolean(data && data.length >= 2 && data.some((p) => p.value > 0));

  if (!hasData) {
    return (
      <div className="rounded-xl bg-bg p-5">
        {title && <p className="mb-3 text-sm font-semibold">{title}</p>}
        <div className="grid min-h-[180px] place-items-center rounded-[var(--radius-card)] border border-dashed border-line px-6 text-center">
          <div>
            <p className="font-mono text-sm text-muted-soft">
              <span className="text-primary">$</span> xp --last-14-days
            </p>
            <p className="mt-2 text-sm text-muted">{empty}</p>
          </div>
        </div>
      </div>
    );
  }

  const points = data as ChartPoint[];
  const values = points.map((p) => p.value);
  const max = niceMax(Math.max(...values));
  const { d, pts } = buildPath(values, max);
  const area = `${d} L ${pts[pts.length - 1][0]} ${H - PAD} L ${pts[0][0]} ${H - PAD} Z`;
  const gridSteps = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(max * f));
  // Trop de libellés = illisible : on n'en affiche qu'un sur deux au-delà de 8.
  const labelEvery = points.length > 8 ? 2 : 1;

  return (
    <div className="rounded-xl bg-bg p-5">
      {title && <p className="mb-3 text-sm font-semibold">{title}</p>}
      <p className="font-mono text-xs text-muted-soft">
        <span className="text-primary">$</span> xp --last-14-days
      </p>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-3 w-full"
        role="img"
        aria-label={chart.ariaLabel}
      >
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {gridSteps.map((g) => {
          const y = H - PAD - (g / max) * (H - PAD * 2);
          return (
            <g key={g}>
              <line x1={PAD} y1={y} x2={W - PAD} y2={y} stroke="var(--color-line)" strokeWidth="1" />
              <text x={PAD - 8} y={y + 3} textAnchor="end" className="fill-muted-soft text-[9px]">
                {g}
              </text>
            </g>
          );
        })}
        <path d={area} fill="url(#chartFill)" />
        <path d={d} fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
        {pts.map((p, i) =>
          i % labelEvery === 0 ? (
            <text key={i} x={p[0]} y={H - 8} textAnchor="middle" className="fill-muted-soft text-[9px]">
              {points[i].label}
            </text>
          ) : null,
        )}
      </svg>
    </div>
  );
}
