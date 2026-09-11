"use client";

import type { CreatedCourse, CourseStatus, InstructorStats } from "@/lib/types";
import { ClockIcon, LayersIcon, StarIcon } from "@/components/icons";
import ProgressChart, { type ChartPoint } from "@/components/progress-chart";
import { useT } from "@/i18n/provider";
import { LocaleLink } from "@/i18n/navigation";
import type { InstructorPayouts } from "@/lib/dal";
import PayoutsPanel from "./payouts-panel";

const statusCls: Record<CourseStatus, string> = {
  online: "bg-success-soft text-success",
  pending: "bg-warning/15 text-warning",
  draft: "bg-surface-2 text-muted",
};

export default function FormateurClient({
  name,
  created,
  stats,
  payouts,
  enrollmentsByDay,
  justBack,
}: {
  name: string;
  created: CreatedCourse[];
  stats: InstructorStats;
  payouts: InstructorPayouts | null;
  enrollmentsByDay: ChartPoint[];
  justBack: boolean;
}) {
  const t = useT();
  const i = t.instructor;
  const statusLabel: Record<CourseStatus, string> = {
    online: t.status.online,
    pending: t.status.pending,
    draft: t.status.draft,
  };

  const firstName = name.split(" ")[0];
  const actions = created.filter((c) => c.status !== "online");

  return (
    <div className="container-page py-10">
      <p className="font-mono text-xs text-muted-soft">
        <span className="text-primary">$</span> sudo -u {firstName} omnilearn
      </p>
      <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight">
        {i.titleLead} <span className="text-primary">{i.titleAccent}</span>
      </h1>

      <section className="mt-8 rounded-[var(--radius-card)] bg-surface p-6 sm:p-7">
        <h2 className="text-sm font-semibold text-muted">{i.actionsTitle}</h2>
        {actions.length === 0 ? (
          <p className="mt-4 rounded-[3px] bg-bg px-4 py-3.5 text-sm text-muted">
            {i.noActions}
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {actions.map((c) => (
              <li
                key={c.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[3px] bg-bg px-4 py-3.5"
              >
                <span className="font-display font-bold">{c.title}</span>
                {c.status === "draft" && c.draftId ? (
                  <LocaleLink
                    href={`/creer?draft=${c.draftId}`}
                    className="rounded-[3px] bg-primary px-4 py-2 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
                  >
                    {i.continueCreating}
                  </LocaleLink>
                ) : (
                  <span className="text-sm text-muted">{i.pendingAdmin}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {payouts && <PayoutsPanel data={payouts} justBack={justBack} />}

      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6 sm:p-7">
        <h2 className="text-sm font-semibold text-muted">{i.tableTitle}</h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="text-start align-top text-xs font-semibold text-muted">
                <th className="pb-3 pe-4 font-semibold">{i.colName}</th>
                <th className="pb-3 pe-4 font-semibold">{i.colStatus}</th>
                <th className="pb-3 pe-4 font-semibold">{i.colStarted}</th>
                <th className="pb-3 pe-4 font-semibold">{i.colFinished}</th>
                <th className="pb-3 font-semibold">{i.colActions}</th>
              </tr>
            </thead>
            <tbody>
              {created.length === 0 ? (
                <tr className="border-t border-line">
                  <td colSpan={5} className="py-6 text-center text-sm text-muted">
                    {t.settings.noCreated}
                  </td>
                </tr>
              ) : (
                created.map((c) => (
                  <tr key={c.id} className="border-t border-line align-middle">
                    <td className="py-4 pe-4 font-semibold">{c.title}</td>
                    <td className="py-4 pe-4">
                      <span
                        className={`inline-block rounded-[3px] px-2.5 py-1 text-xs font-semibold ${statusCls[c.status]}`}
                      >
                        {statusLabel[c.status]}
                      </span>
                    </td>
                    <td className="py-4 pe-4 font-semibold">{c.started}</td>
                    <td className="py-4 pe-4">
                      {c.status === "online" ? c.finished : "--"}
                    </td>
                    <td className="py-4">
                      {c.status === "draft" && c.draftId && (
                        <RowBtn href={`/creer?draft=${c.draftId}`}>{t.actions.continue}</RowBtn>
                      )}
                      {c.status === "online" && c.slug && (
                        <RowBtn href={`/formations/${c.slug}`}>{t.actions.view}</RowBtn>
                      )}
                      {c.status === "pending" && (
                        <span className="text-xs text-muted">{i.pendingAdmin}</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-center">
          <LocaleLink
            href="/creer"
            className="rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
          >
            {i.createNew}
          </LocaleLink>
        </div>
      </section>

      <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6 sm:p-7">
        <h2 className="font-display text-xl font-bold">{i.statsTitle}</h2>

        <div className="mt-5 grid gap-5 lg:grid-cols-[300px_1fr]">
          <div className="rounded-[3px] bg-bg p-5">
            <p className="text-sm font-semibold text-muted">{i.total}</p>
            <ul className="mt-4 space-y-4">
              <StatRow icon={<LayersIcon width={18} height={18} />} value={stats.started}>
                {i.statStarted}
              </StatRow>
              <StatRow icon={<ClockIcon width={18} height={18} />} value={stats.finished}>
                {i.statFinished}
              </StatRow>
              <StatRow
                icon={<StarIcon width={18} height={18} />}
                value={stats.rating.toFixed(1).replace(".0", "")}
              >
                {i.statRating}
              </StatRow>
            </ul>
          </div>

          <ProgressChart
            title={i.enrollmentsTitle}
            data={enrollmentsByDay}
            emptyText={i.enrollmentsEmpty}
          />
        </div>
      </section>
    </div>
  );
}

function RowBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <LocaleLink
      href={href}
      className="rounded-[3px] border border-line bg-bg px-3.5 py-1.5 text-xs font-semibold transition hover:border-primary hover:text-primary-dark"
    >
      {children}
    </LocaleLink>
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
