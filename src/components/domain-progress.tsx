import type { Course } from "@/lib/types";
import { COURSE_EXAM_DOMAINS, moduleOfKey } from "@/lib/content/exam-domains";

// Avancement par domaine d'examen (cours de préparation uniquement). Composant
// serveur : compte les leçons terminées dont le module appartient au domaine.
export default function DomainProgress({
  course,
  completedKeys,
  labels,
  title,
  lessonsWord,
}: {
  course: Course;
  completedKeys: string[];
  labels: Record<1 | 2 | 3, string>;
  title: string;
  lessonsWord: string;
}) {
  const domains = COURSE_EXAM_DOMAINS[course.slug];
  if (!domains) return null;
  const done = new Set(completedKeys);
  const keys = course.parts.flatMap((p) => p.lessons.map((l) => l.id));

  const rows = domains.map((d) => {
    const inDomain = keys.filter((k) => {
      const m = moduleOfKey(k);
      return m !== null && d.modules.includes(m);
    });
    const completed = inDomain.filter((k) => done.has(k)).length;
    const pct = inDomain.length ? Math.round((completed / inDomain.length) * 100) : 0;
    return { n: d.n, total: inDomain.length, completed, pct };
  });

  return (
    <section className="mt-10 max-w-2xl" aria-labelledby="domain-progress-title">
      <h2 id="domain-progress-title" className="text-xl font-bold">
        {title}
      </h2>
      <ul className="mt-4 space-y-4">
        {rows.map((r) => (
          <li key={r.n}>
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className="font-semibold">
                {r.n}. {labels[r.n]}
              </span>
              <span className="shrink-0 tabular-nums text-muted">
                {r.completed}/{r.total} {lessonsWord}
              </span>
            </div>
            <div
              className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-surface"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={r.pct}
              aria-label={labels[r.n]}
            >
              <div className="h-full rounded-full bg-primary" style={{ width: `${r.pct}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
