"use client";

import { Fragment, useState, useTransition } from "react";
import { useI18n } from "@/i18n/provider";
import { formatNumber } from "@/lib/intl";
import { moderateDraftAction } from "@/lib/actions/moderation";
import { reviewInstructorApplicationAction } from "@/lib/actions/instructor-application";
import { DEFAULT_REVENUE_SHARE_PCT } from "@/lib/pricing";
import type { PendingDraft, PendingInstructor } from "@/lib/dal";
import type { PlatformUser } from "@/lib/types";
import {
  CheckIcon,
  XIcon,
} from "@/components/icons";

export default function AdminClient({
  pending,
  stats: platformStats,
  recentUsers,
  applicants,
}: {
  pending: PendingDraft[];
  stats: { online: number; pending: number; instructors: number; learners: number };
  recentUsers: PlatformUser[];
  applicants: PendingInstructor[];
}) {
  const { dict: t, locale } = useI18n();
  const m = t.moderation;
  const [queue, setQueue] = useState(pending);
  const [applyQueue, setApplyQueue] = useState(applicants);
  const [share, setShare] = useState(DEFAULT_REVENUE_SHARE_PCT);
  // Le formateur propose un prix, l'admin tranche. La saisie reste en centimes,
  // comme en base : aucune conversion ne se glisse entre la file et la ligne
  // publiée.
  const [prices, setPrices] = useState<Record<string, string>>(() =>
    Object.fromEntries(pending.map((d) => [d.id, String(d.priceCents)])),
  );
  const [flash, setFlash] = useState<string | null>(null);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [isPending, startTransition] = useTransition();

  function decide(item: PendingDraft, approved: boolean) {
    // Un champ vidé à la main ne vaut pas « gratuit » : il laisse passer le
    // prix proposé par le formateur.
    const typed = prices[item.id];
    const override =
      typed === undefined || typed.trim() === "" ? Number.NaN : Number(typed);
    // Optimiste : on retire de la file tout de suite.
    setQueue((q) => q.filter((c) => c.id !== item.id));
    const tpl = approved ? m.flashApproved : m.flashRefused;
    setFlash(tpl.replace("{title}", item.title));
    startTransition(async () => {
      const res = await moderateDraftAction(
        item.id,
        approved,
        Number.isFinite(override) ? override : undefined,
      );
      if (!res.ok) {
        // Restaure en cas d'échec serveur.
        setQueue((q) => [item, ...q]);
        setFlash(res.error);
      }
    });
  }

  // Candidature formateur : l'approbation bascule aussi le rôle du compte en
  // INSTRUCTOR, donc rien n'est optimiste tant que le serveur n'a pas répondu.
  function decideApplication(item: PendingInstructor, approved: boolean) {
    setApplyQueue((q) => q.filter((a) => a.id !== item.id));
    const tpl = approved ? m.applyApproved : m.applyRefused;
    setFlash(tpl.replace("{name}", item.name));
    startTransition(async () => {
      const res = await reviewInstructorApplicationAction(
        item.id,
        approved,
        approved ? share : undefined,
      );
      if (!res.ok) {
        setApplyQueue((q) => [item, ...q]);
        setFlash(res.error);
      }
    });
  }

  const stats = [
    { label: m.statPending, value: String(queue.length), highlight: queue.length > 0 },
    { label: m.statOnline, value: formatNumber(platformStats.online, locale) },
    { label: m.statInstructors, value: formatNumber(platformStats.instructors, locale) },
    { label: m.statLearners, value: formatNumber(platformStats.learners, locale) },
  ];

  return (
    <div className="container-page py-10">
      <span className="rule-accent mb-3" />
      <p className="text-sm text-muted">{m.welcome}</p>
      <h1 className="mt-1 text-4xl font-semibold">{m.title}</h1>

      <dl className="mt-8 max-w-xl border-t border-line">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`flex items-baseline justify-between gap-6 border-b border-line py-3 ${s.highlight ? "text-primary-dark" : ""}`}
          >
            <dt className="text-sm text-muted">{s.label}</dt>
            <dd className="font-display text-2xl">{s.value}</dd>
          </div>
        ))}
      </dl>

      {flash && (
        <div className="mt-6 flex items-center gap-2 rounded-[3px] bg-success-soft px-4 py-3 text-sm font-medium text-success">
          <CheckIcon width={16} height={16} />
          {flash}
        </div>
      )}

      {/* File de validation */}
      <section className="mt-6 rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold">
            {m.queueTitle}
          </h2>
          <span className="rounded-[3px] bg-surface px-3 py-1 text-xs font-semibold text-muted">
            {m.queueCount.replace("{n}", String(queue.length))}
          </span>
        </div>

        {queue.length === 0 ? (
          <p className="mt-6 rounded-[3px] bg-surface p-6 text-center text-sm text-muted">
            {m.queueEmpty}
          </p>
        ) : (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-sm">
              <thead>
                <tr className="text-start text-xs font-semibold text-muted">
                  <th className="pb-3 pe-4 font-semibold">{m.colFormation}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.colInstructor}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.colCategory}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.colLevel}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.colPrice}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.colSubmitted}</th>
                  <th className="pb-3 font-semibold">{m.colActions}</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((c) => (
                  <Fragment key={c.id}>
                  <tr className="border-t border-line align-middle">
                    <td className="py-4 pe-4 font-semibold">{c.title}</td>
                    <td className="py-4 pe-4 text-muted">{c.instructor}</td>
                    <td className="py-4 pe-4 text-muted">{c.category}</td>
                    <td className="py-4 pe-4 text-muted">{c.level}</td>
                    <td className="py-4 pe-4">
                      <span className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={prices[c.id] ?? String(c.priceCents)}
                          onChange={(e) =>
                            setPrices((prev) => ({ ...prev, [c.id]: e.target.value }))
                          }
                          disabled={isPending}
                          className="w-24 rounded-[3px] border border-line bg-surface px-2 py-1 text-xs outline-none focus:border-primary disabled:opacity-50"
                        />
                        {Number(prices[c.id] ?? c.priceCents) > 0 ? null : (
                          <span className="text-xs text-muted">{m.priceFree}</span>
                        )}
                      </span>
                    </td>
                    <td className="py-4 pe-4 text-muted">{c.submitted}</td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => decide(c, true)}
                          disabled={isPending}
                          className="inline-flex items-center gap-1.5 rounded-[3px] bg-success px-3.5 py-1.5 text-xs font-semibold text-on-primary transition hover:opacity-90 disabled:opacity-50"
                        >
                          <CheckIcon width={14} height={14} />
                          {m.approve}
                        </button>
                        <button
                          onClick={() => decide(c, false)}
                          disabled={isPending}
                          className="inline-flex items-center gap-1.5 rounded-[3px] border border-danger/40 px-3.5 py-1.5 text-xs font-semibold text-danger transition hover:bg-danger-soft disabled:opacity-50"
                        >
                          <XIcon width={14} height={14} />
                          {m.refuse}
                        </button>
                        <button
                          type="button"
                          onClick={() => setOpen((o) => ({ ...o, [c.id]: !o[c.id] }))}
                          aria-expanded={!!open[c.id]}
                          className="inline-flex items-center gap-1.5 rounded-[3px] border border-line px-3.5 py-1.5 text-xs font-semibold transition hover:border-primary"
                        >
                          {open[c.id] ? m.previewClose : m.preview}
                        </button>
                      </div>
                    </td>
                  </tr>
                  {open[c.id] && (
                    <tr className="bg-surface">
                      <td colSpan={7} className="px-4 py-5 text-sm">
                        <DraftPreview draft={c} />
                      </td>
                    </tr>
                  )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Candidatures formateur */}
      <section className="mt-6 rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold">{m.applyTitle}</h2>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs font-semibold text-muted">
              {m.applyShareLabel}
              <input
                type="number"
                min={30}
                max={95}
                value={share}
                onChange={(e) => setShare(Number(e.target.value))}
                className="w-20 rounded-[3px] border border-line bg-surface px-3 py-1 text-center text-xs font-semibold outline-none focus:border-primary"
              />
              %
            </label>
            <span className="rounded-[3px] bg-surface px-3 py-1 text-xs font-semibold text-muted">
              {m.applyCount.replace("{n}", String(applyQueue.length))}
            </span>
          </div>
        </div>

        {applyQueue.length === 0 ? (
          <p className="mt-6 rounded-[3px] bg-surface p-6 text-center text-sm text-muted">
            {m.applyEmpty}
          </p>
        ) : (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="text-start text-xs font-semibold text-muted">
                  <th className="pb-3 pe-4 font-semibold">{m.applyColName}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.applyColHeadline}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.applyColExpertise}</th>
                  <th className="pb-3 pe-4 font-semibold">{m.applyColDate}</th>
                  <th className="pb-3 font-semibold">{m.colActions}</th>
                </tr>
              </thead>
              <tbody>
                {applyQueue.map((a) => (
                  <tr key={a.id} className="border-t border-line align-top">
                    <td className="py-4 pe-4">
                      <div className="font-semibold">{a.name}</div>
                      <div className="text-xs text-muted">{a.email}</div>
                      <div className="text-xs text-muted">{a.country}</div>
                    </td>
                    <td className="py-4 pe-4 text-muted">
                      <div>{a.headline}</div>
                      {a.bio && (
                        <p className="mt-1 max-w-md text-xs leading-relaxed">
                          {a.bio}
                        </p>
                      )}
                      {a.website && (
                        <a
                          href={a.website}
                          target="_blank"
                          rel="noreferrer nofollow"
                          className="mt-1 inline-block text-xs font-semibold text-primary hover:underline"
                        >
                          {a.website}
                        </a>
                      )}
                    </td>
                    <td className="py-4 pe-4 text-muted">{a.expertise}</td>
                    <td className="py-4 pe-4 text-muted">{a.applied}</td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => decideApplication(a, true)}
                          disabled={isPending}
                          className="inline-flex items-center gap-1.5 rounded-[3px] bg-success px-3.5 py-1.5 text-xs font-semibold text-on-primary transition hover:opacity-90 disabled:opacity-50"
                        >
                          <CheckIcon width={14} height={14} />
                          {m.approve}
                        </button>
                        <button
                          onClick={() => decideApplication(a, false)}
                          disabled={isPending}
                          className="inline-flex items-center gap-1.5 rounded-[3px] border border-danger/40 px-3.5 py-1.5 text-xs font-semibold text-danger transition hover:bg-danger-soft disabled:opacity-50"
                        >
                          <XIcon width={14} height={14} />
                          {m.refuse}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Derniers inscrits */}
      <section className="mt-6 rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-7">
        <h2 className="font-display text-xl font-semibold">{m.recentTitle}</h2>
        <ul className="mt-5 divide-y divide-line">
          {recentUsers.map((u) => (
            <li key={`${u.name}-${u.joined}`} className="flex items-center gap-4 py-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-bold text-primary-dark">
                {u.initials}
              </span>
              <span className="flex-1 font-semibold">{u.name}</span>
              <span
                className={`rounded-[3px] px-2.5 py-1 text-xs font-semibold ${
                  u.role === "Formateur"
                    ? "bg-primary-soft text-primary-dark"
                    : "bg-surface text-muted"
                }`}
              >
                {u.role}
              </span>
              <span className="hidden w-28 text-end text-sm text-muted sm:block">
                {u.joined}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function DraftPreview({ draft }: { draft: PendingDraft }) {
  const { dict: t } = useI18n();
  const m = t.moderation;
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div>
        <p className="whitespace-pre-line">{draft.description || m.previewNoDesc}</p>
        {draft.skills && (
          <p className="mt-3 text-muted">
            <span className="font-semibold text-ink">{t.create.recapSkills} : </span>
            {draft.skills}
          </p>
        )}
        {draft.prerequisites && (
          <p className="mt-1 text-muted">
            <span className="font-semibold text-ink">{t.create.recapPrereq} : </span>
            {draft.prerequisites}
          </p>
        )}
        <h3 className="mt-5 text-xs font-bold uppercase text-muted">{m.previewModules}</h3>
        <ol className="mt-2 space-y-2">
          {draft.curriculum.map((mod, mi) => (
            <li key={mi}>
              <span className="font-semibold">{mi + 1}. {mod.title}</span>
              <ul className="mt-1 ps-5 text-muted">
                {mod.lessons.map((l, li) => (
                  <li key={li}>
                    {mi + 1}.{li + 1} {l.title} · {l.type}
                    {l.durationMin > 0 ? ` · ${l.durationMin} min` : ""}
                    {l.type === "quiz" ? ` · ${(l.questions ?? []).length} Q` : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <div className="border-s border-line ps-5">
        <p className="text-xs text-muted">{draft.instructor}</p>
        <a href={`mailto:${draft.instructorEmail}`} className="text-xs font-semibold text-primary-dark hover:underline">
          {draft.instructorEmail}
        </a>
        <h3 className="mt-5 text-xs font-bold uppercase text-muted">{m.previewFiles}</h3>
        {draft.uploads.length === 0 ? (
          <p className="mt-2 text-xs text-muted">{t.create.notProvided}</p>
        ) : (
          <ul className="mt-2 space-y-1 text-xs">
            {draft.uploads.map((u) => (
              <li key={u.url}>
                <a href={u.url} target="_blank" rel="noreferrer" className="font-semibold text-primary-dark hover:underline">
                  {u.name}
                </a>{" "}
                <span className="text-muted">({u.field})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
