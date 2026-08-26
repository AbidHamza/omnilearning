"use client";

import { useState, useTransition } from "react";
import { LocaleLink } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";
import { moderateDraftAction } from "@/lib/actions/moderation";
import type { PendingDraft } from "@/lib/dal";
import type { PlatformUser } from "@/lib/types";
import {
  CheckIcon,
  ClockIcon,
  EyeIcon,
  LayersIcon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "@/components/icons";

export default function AdminClient({
  pending,
  stats: platformStats,
  recentUsers,
}: {
  pending: PendingDraft[];
  stats: { online: number; pending: number; instructors: number; learners: number };
  recentUsers: PlatformUser[];
}) {
  const t = useT();
  const m = t.moderation;
  const [queue, setQueue] = useState(pending);
  const [flash, setFlash] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function decide(item: PendingDraft, approved: boolean) {
    // Optimiste : on retire de la file tout de suite.
    setQueue((q) => q.filter((c) => c.id !== item.id));
    const tpl = approved ? m.flashApproved : m.flashRefused;
    setFlash(tpl.replace("{title}", item.title));
    startTransition(async () => {
      const res = await moderateDraftAction(item.id, approved);
      if (!res.ok) {
        // Restaure en cas d'échec serveur.
        setQueue((q) => [item, ...q]);
        setFlash(res.error);
      }
    });
  }

  const stats = [
    { label: m.statOnline, value: platformStats.online, icon: LayersIcon },
    {
      label: m.statPending,
      value: queue.length,
      icon: ClockIcon,
      highlight: true,
    },
    { label: m.statInstructors, value: platformStats.instructors, icon: UserIcon },
    {
      label: m.statLearners,
      value: platformStats.learners.toLocaleString("fr-FR"),
      icon: UsersIcon,
    },
  ];

  return (
    <div className="container-page py-10">
      <span className="rule-accent mb-3" />
      <p className="text-sm text-muted">{m.welcome}</p>
      <h1 className="mt-1 text-4xl font-semibold">{m.title}</h1>

      {/* Statistiques plateforme */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`rounded-[var(--radius-card)] border p-5 ${
              s.highlight
                ? "border-primary/40 bg-primary-soft"
                : "border-line bg-bg"
            }`}
          >
            <span
              className={`grid h-10 w-10 place-items-center rounded-xl ${
                s.highlight
                  ? "bg-primary text-[#04130a]"
                  : "bg-brand-soft text-primary-dark"
              }`}
            >
              <s.icon width={20} height={20} />
            </span>
            <div className="mt-4 font-display text-3xl font-extrabold">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      {flash && (
        <div className="mt-6 flex items-center gap-2 rounded-xl bg-success-soft px-4 py-3 text-sm font-medium text-success">
          <CheckIcon width={16} height={16} />
          {flash}
        </div>
      )}

      {/* File de validation */}
      <section className="mt-6 rounded-[var(--radius-card)] border border-line bg-bg p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">
            {m.queueTitle}
          </h2>
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted">
            {m.queueCount.replace("{n}", String(queue.length))}
          </span>
        </div>

        {queue.length === 0 ? (
          <p className="mt-6 rounded-xl bg-surface p-6 text-center text-sm text-muted">
            {m.queueEmpty}
          </p>
        ) : (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold text-muted">
                  <th className="pb-3 pr-4 font-semibold">{m.colFormation}</th>
                  <th className="pb-3 pr-4 font-semibold">{m.colInstructor}</th>
                  <th className="pb-3 pr-4 font-semibold">{m.colCategory}</th>
                  <th className="pb-3 pr-4 font-semibold">{m.colLevel}</th>
                  <th className="pb-3 pr-4 font-semibold">{m.colSubmitted}</th>
                  <th className="pb-3 font-semibold">{m.colActions}</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((c) => (
                  <tr key={c.id} className="border-t border-line align-middle">
                    <td className="py-4 pr-4 font-semibold">{c.title}</td>
                    <td className="py-4 pr-4 text-muted">{c.instructor}</td>
                    <td className="py-4 pr-4 text-muted">{c.category}</td>
                    <td className="py-4 pr-4 text-muted">{c.level}</td>
                    <td className="py-4 pr-4 text-muted">{c.submitted}</td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => decide(c, true)}
                          disabled={isPending}
                          className="inline-flex items-center gap-1.5 rounded-[3px] bg-success px-3.5 py-1.5 text-xs font-semibold text-[#04130a] transition hover:opacity-90 disabled:opacity-50"
                        >
                          <CheckIcon width={14} height={14} />
                          {m.approve}
                        </button>
                        <button
                          onClick={() => decide(c, false)}
                          disabled={isPending}
                          className="inline-flex items-center gap-1.5 rounded-full border border-danger/40 px-3.5 py-1.5 text-xs font-semibold text-danger transition hover:bg-danger-soft disabled:opacity-50"
                        >
                          <XIcon width={14} height={14} />
                          {m.refuse}
                        </button>
                        <LocaleLink
                          href={`/formations?q=${encodeURIComponent(c.title)}`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold transition hover:border-primary"
                        >
                          <EyeIcon width={14} height={14} />
                          {t.actions.view}
                        </LocaleLink>
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
        <h2 className="font-display text-xl font-bold">{m.recentTitle}</h2>
        <ul className="mt-5 divide-y divide-line">
          {recentUsers.map((u) => (
            <li key={u.name} className="flex items-center gap-4 py-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-bold text-primary-dark">
                {u.initials}
              </span>
              <span className="flex-1 font-semibold">{u.name}</span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  u.role === "Formateur"
                    ? "bg-primary-soft text-primary-dark"
                    : "bg-surface text-muted"
                }`}
              >
                {u.role}
              </span>
              <span className="hidden w-28 text-right text-sm text-muted sm:block">
                {u.joined}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
