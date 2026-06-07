"use client";

import { useState } from "react";

const series = {
  Mois: {
    labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aou", "Sept", "Oct", "Nov", "Dec"],
    values: [6, 9, 16, 12, 10, 11, 18, 14, 9, 7, 8, 6],
  },
  Semaine: {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    values: [4, 8, 6, 11, 9, 13, 5],
  },
};

const W = 560;
const H = 200;
const PAD = 28;
const MAX = 20;

function buildPath(values: number[]) {
  const n = values.length;
  const stepX = (W - PAD * 2) / (n - 1);
  const pts = values.map((v, i) => {
    const x = PAD + i * stepX;
    const y = H - PAD - (v / MAX) * (H - PAD * 2);
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

export default function ProgressChart({ title }: { title?: string }) {
  const [tab, setTab] = useState<"Mois" | "Semaine">("Mois");
  const { labels, values } = series[tab];
  const { d, pts } = buildPath(values);
  const area = `${d} L ${pts[pts.length - 1][0]} ${H - PAD} L ${pts[0][0]} ${H - PAD} Z`;

  return (
    <div className="rounded-xl bg-bg p-5">
      {title && <p className="mb-3 text-sm font-semibold">{title}</p>}
      <div className="flex items-center gap-5 text-sm">
        {(["Mois", "Semaine"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-1 transition ${
              tab === t
                ? "border-b-2 border-ink font-semibold text-ink"
                : "text-muted-soft hover:text-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label={`Progression par ${tab}`}>
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 5, 10, 15, 20].map((g) => {
          const y = H - PAD - (g / MAX) * (H - PAD * 2);
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
        {pts.map((p, i) => (
          <text key={i} x={p[0]} y={H - 8} textAnchor="middle" className="fill-muted-soft text-[9px]">
            {labels[i]}
          </text>
        ))}
      </svg>
    </div>
  );
}
