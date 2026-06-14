"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { CreatedCourse, CourseStatus, InstructorStats } from "@/lib/types";
import { ClockIcon, LayersIcon, StarIcon } from "@/components/icons";
import ProgressChart from "@/components/progress-chart";

const statusMeta: Record<CourseStatus, { label: string; cls: string }> = {
  online: { label: "En ligne", cls: "bg-success-soft text-success" },
  pending: { label: "En attente de validation", cls: "bg-warning/15 text-warning" },
  draft: { label: "En cours de création", cls: "bg-surface-2 text-muted" },
};

export default function FormateurClient({
  name,
  created,
  stats,
}: {
  name: string;
  created: CreatedCourse[];
  stats: InstructorStats;
}) {
  const router = useRouter();

  const firstName = name.split(" ")[0];
  const actions = created.filter((c) => c.status !== "online");

  return (
    <div className="container-page py-10">
      <p className="font-mono text-xs text-muted-soft">
        <span className="text-primary">$</span> sudo -u {firstName} omnilearn
      </p>
      <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight">
        Espace <span className="text-primary">formateur</span>
      </h1>

      {/* Vos actions en cours */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-surface p-6 sm:p-7">
        <h2 className="text-sm font-semibold text-muted">Vos actions en cours</h2>
        {actions.length === 0 ? (
          <p className="mt-4 rounded-xl bg-bg px-4 py-3.5 text-sm text-muted">
            Aucune action en cours. Toutes vos formations sont à jour.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {actions.map((c) => (
              <li
                key={c.title}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-bg px-4 py-3.5"
              >
                <span className="font-display font-bold">{c.title}</span>
                {c.status === "draft" ? (
                  <Link
                    href="/creer"
                    className="rounded-[3px] bg-primary px-4 py-2 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
                  >
                    Continuer à créer votre formation
                  </Link>
                ) : (
                  <span className="text-sm text-muted">
                    En attente de validation de la part de l&apos;administrateur
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Tableau des formations */}
      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6 sm:p-7">
        <h2 className="text-sm font-semibold text-muted">Tableau des formations</h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="text-left align-top text-xs font-semibold text-muted">
                <th className="pb-3 pr-4 font-semibold">Nom</th>
                <th className="pb-3 pr-4 font-semibold">Statut</th>
                <th className="pb-3 pr-4 font-semibold">
                  Nb de personnes ayant
                  <br />
                  commencé la formation
                </th>
                <th className="pb-3 pr-4 font-semibold">
                  Nb de personnes ayant
                  <br />
                  fini la formation
                </th>
                <th className="pb-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {created.length === 0 ? (
                <tr className="border-t border-line">
                  <td colSpan={5} className="py-6 text-center text-sm text-muted">
                    Vous n&apos;avez pas encore créé de formation.
                  </td>
                </tr>
              ) : (
                created.map((c) => (
                  <tr key={c.title} className="border-t border-line align-middle">
                    <td className="py-4 pr-4 font-semibold">{c.title}</td>
                    <td className="py-4 pr-4">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${statusMeta[c.status].cls}`}
                      >
                        {statusMeta[c.status].label}
                      </span>
                    </td>
                    <td className="py-4 pr-4 font-semibold">{c.started}</td>
                    <td className="py-4 pr-4">
                      {c.status === "online" ? c.finished : "—"}
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        {c.status === "draft" ? (
                          <RowBtn href="/creer">Continuer</RowBtn>
                        ) : (
                          <RowBtn href="/creer">Modifier</RowBtn>
                        )}
                        {c.status === "online" && (
                          <RowBtn href="/formations/cybersecurite">Voir +</RowBtn>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => router.push("/creer")}
            className="rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
          >
            Créer une nouvelle formation
          </button>
        </div>
      </section>

      {/* Statistiques */}
      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">Statistiques</h2>
          <button className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm font-semibold transition hover:border-primary">
            Voir le détail
          </button>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[300px_1fr]">
          <div className="rounded-xl bg-bg p-5">
            <p className="text-sm font-semibold text-muted">Total</p>
            <ul className="mt-4 space-y-4">
              <StatRow icon={<LayersIcon width={18} height={18} />} value={stats.started}>
                Formations ont été commencées
              </StatRow>
              <StatRow icon={<ClockIcon width={18} height={18} />} value={stats.finished}>
                Formations ont été finies
              </StatRow>
              <StatRow
                icon={<StarIcon width={18} height={18} />}
                value={stats.rating.toFixed(1).replace(".0", "")}
              >
                Note moyenne donnée à vos cours
              </StatRow>
            </ul>
          </div>

          <ProgressChart title="Nombre de vues sur vos formations" />
        </div>
      </section>
    </div>
  );
}

function RowBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-xs font-semibold transition hover:border-primary hover:text-primary-dark"
    >
      {children}
    </Link>
  );
}

function StatRow({
  icon,
  value,
  children,
}: {
  icon: React.ReactNode;
  value: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-primary-dark">
        {icon}
      </span>
      <span>
        <span className="font-display text-lg font-bold">{value}</span>{" "}
        <span className="text-sm text-muted">{children}</span>
      </span>
    </li>
  );
}
