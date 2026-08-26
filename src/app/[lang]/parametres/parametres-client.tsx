"use client";

import { useState } from "react";
import Link from "next/link";
import type { CourseStatus, Role, User } from "@/lib/types";
import BillingPortalButton from "@/components/billing-portal-button";
import { useT } from "@/i18n/provider";
import {
  ClockIcon,
  EyeIcon,
  LayersIcon,
  PencilIcon,
  ShieldIcon,
  StarIcon,
  UserIcon,
} from "@/components/icons";

const inputCls =
  "mt-2 w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm outline-none transition focus:border-primary";

const statusCls: Record<CourseStatus, string> = {
  online: "bg-success-soft text-success",
  pending: "bg-warning/15 text-warning",
  draft: "bg-surface-2 text-muted",
};

// Un onglet « Certifications » figurait ici. La plateforme ne délivre aucun
// certificat : dal.ts renvoie une liste vide en dur, la base n'a pas de modèle,
// et le bouton de téléchargement n'était relié à rien. L'onglet ne pouvait donc
// qu'afficher son état vide, définitivement. Retiré en attendant que la
// fonctionnalité existe.
type TabId = "profile" | "reminders" | "tracking" | "created" | "stats";

export interface BillingState {
  stripeEnabled: boolean;
  hasCustomer: boolean;
}

export default function ParametresClient({
  role,
  user,
  courseTitles,
  billing,
}: {
  role: Role;
  user: User;
  // slug -> titre, pour résoudre les cours suivis sans dépendre des données démo.
  courseTitles: Record<string, string>;
  billing: BillingState;
}) {
  const t = useT();
  const s = t.settings;

  const labels: Record<TabId, string> = {
    profile: s.tabProfile,
    reminders: s.tabReminders,
    tracking: s.tabTracking,
    created: s.tabCreated,
    stats: s.tabStats,
  };

  const tabIds: TabId[] =
    role === "formateur"
      ? ["profile", "created", "stats"]
      : role === "admin"
        ? ["profile"]
        : ["profile", "reminders", "tracking"];

  const [tab, setTab] = useState<TabId>(tabIds[0]);

  if (!user) return null;

  return (
    <div className="container-page py-10">
      <span className="rule-accent mb-3" />
      <h1 className="text-4xl font-semibold">{t.nav.settings}</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
        <nav className="flex gap-2 overflow-x-auto border-line lg:flex-col lg:overflow-visible lg:border-r lg:pr-6">
          {tabIds.map((id) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-left text-sm transition ${
                tab === id
                  ? "bg-primary-soft font-bold text-primary-dark"
                  : "text-muted hover:bg-surface"
              }`}
            >
              {labels[id]}
            </button>
          ))}
        </nav>

        <div className="max-w-xl">
          {tab === "profile" && <ProfileTab user={user} billing={billing} />}
          {tab === "reminders" && <RappelsTab />}
          {tab === "tracking" && (
            <SuiviTab user={user} courseTitles={courseTitles} />
          )}
          {tab === "created" && <FormationsCreesTab user={user} />}
          {tab === "stats" && <StatsTab user={user} />}
        </div>
      </div>
    </div>
  );
}

function ProfileTab({ user, billing }: { user: User; billing: BillingState }) {
  const s = useT().settings;
  const [saved, setSaved] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      }}
    >
      <h2 className="flex items-center gap-2 font-display text-lg font-bold">
        <UserIcon width={20} height={20} /> {s.profileHeading}
      </h2>

      <p className="mt-6 text-sm font-semibold">{s.photoLabel}</p>
      <div className="mt-2 flex items-center gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-lg font-bold text-primary-dark">
          {user.initials}
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold transition hover:border-primary"
        >
          <PencilIcon width={14} height={14} />
          {s.changePhoto}
        </button>
      </div>

      <label className="mt-6 block text-sm font-semibold">{s.nameLabel}</label>
      <input defaultValue={user.name} className={inputCls} />

      <label className="mt-5 block text-sm font-semibold">{s.emailLabel}</label>
      <input type="email" defaultValue={user.email} className={inputCls} />

      <h2 className="mt-10 flex items-center gap-2 font-display text-lg font-bold">
        <ShieldIcon width={19} height={19} /> {s.changePwHeading}
      </h2>
      <label className="mt-5 block text-sm font-semibold">{s.currentPw}</label>
      <input type="password" placeholder="••••••••" className={inputCls} />
      <label className="mt-5 block text-sm font-semibold">{s.newPw}</label>
      <input type="password" placeholder="••••••••" className={inputCls} />

      <div className="mt-7 flex items-center gap-3">
        <button
          type="submit"
          className="rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
        >
          {s.changePwBtn}
        </button>
        {saved && <span className="text-sm text-success">{s.saved} ✓</span>}
      </div>

      {billing.stripeEnabled && <BillingPortalButton hasCustomer={billing.hasCustomer} />}
    </form>
  );
}

function FormationsCreesTab({ user }: { user: User }) {
  const t = useT();
  const s = t.settings;
  const statusLabel: Record<CourseStatus, string> = {
    online: t.status.online,
    pending: t.status.pending,
    draft: t.status.draft,
  };
  const created = user.created ?? [];
  return (
    <div>
      <h2 className="font-display text-lg font-bold">{s.createdHeading}</h2>
      <p className="mt-1 text-sm text-muted">{s.createdSubtitle}</p>

      <div className="mt-5 space-y-3">
        {created.length === 0 ? (
          <p className="rounded-xl bg-surface px-4 py-3.5 text-sm text-muted">
            {s.noCreated}
          </p>
        ) : (
          created.map((c) => (
            <div
              key={c.title}
              className="flex flex-wrap items-center gap-3 rounded-xl bg-surface px-4 py-3.5"
            >
              <span className="font-semibold">{c.title}</span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusCls[c.status]}`}
              >
                {statusLabel[c.status]}
              </span>
              <div className="ml-auto flex gap-2">
                {c.status === "online" && <Pill href="/creer">{t.actions.edit}</Pill>}
                {c.status === "draft" && <Pill href="/creer">{t.actions.resume}</Pill>}
                <Pill href="/formations/cybersecurite" icon>
                  {t.actions.view}
                </Pill>
                {c.status !== "pending" && (
                  <button className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-xs font-semibold text-muted transition hover:border-danger hover:text-danger">
                    {t.actions.delete}
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function StatsTab({ user }: { user: User }) {
  const s = useT().settings;
  const stats = user.stats;
  const created = user.created ?? [];
  if (!stats) return null;
  const tiles = [
    { icon: LayersIcon, value: stats.started, label: s.statStarted },
    { icon: ClockIcon, value: stats.finished, label: s.statFinished },
    {
      icon: StarIcon,
      value: stats.rating.toFixed(1).replace(".0", ""),
      label: s.statRating,
    },
  ];
  return (
    <div>
      <h2 className="font-display text-lg font-bold">{s.statsHeading}</h2>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-xl bg-surface p-4 text-center">
            <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-primary-dark">
              <t.icon width={18} height={18} />
            </span>
            <div className="mt-2 font-display text-2xl font-bold">{t.value}</div>
            <div className="text-xs text-muted">{t.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold text-muted">
              <th className="pb-3 pr-4 font-semibold">{s.tableFormation}</th>
              <th className="pb-3 pr-4 font-semibold">{s.tableStarted}</th>
              <th className="pb-3 font-semibold">{s.tableFinished}</th>
            </tr>
          </thead>
          <tbody>
            {created.map((c) => (
              <tr key={c.title} className="border-t border-line">
                <td className="py-3 pr-4 font-medium">{c.title}</td>
                <td className="py-3 pr-4">{c.started}</td>
                <td className="py-3">{c.status === "online" ? c.finished : "--"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Pill({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-3.5 py-1.5 text-xs font-semibold transition hover:border-primary hover:text-primary-dark"
    >
      {icon && <EyeIcon width={13} height={13} />}
      {children}
    </Link>
  );
}

function RappelsTab() {
  const t = useT();
  const s = t.settings;
  const days = s.days;
  const [all, setAll] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);

  function toggleAll() {
    const v = !all;
    setAll(v);
    setPicked(v ? [...days] : []);
  }
  function toggleDay(d: string) {
    setPicked((p) => {
      const nx = p.includes(d) ? p.filter((x) => x !== d) : [...p, d];
      setAll(nx.length === days.length);
      return nx;
    });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2 className="font-display text-lg font-bold">{s.tabReminders}</h2>

      <div className="mt-5 space-y-5">
        <NotifRow
          title={s.reminderLearnTitle}
          desc={s.reminderLearnDesc}
          email
          sms
        />
        <NotifRow
          title={s.reminderContentTitle}
          desc={s.reminderContentDesc}
          sms
        />
      </div>

      <h2 className="mt-10 font-display text-lg font-bold">
        {s.reminderGoalTitle}
      </h2>
      <p className="mt-1 text-sm text-muted">{s.reminderGoalDesc}</p>

      <label className="mt-5 flex items-center gap-3 text-sm font-semibold">
        <CheckBox checked={all} onChange={toggleAll} />
        {s.selectAll}
      </label>
      <div className="mt-3 space-y-3 pl-6">
        {days.map((d) => (
          <label key={d} className="flex items-center gap-3 text-sm text-muted">
            <CheckBox checked={picked.includes(d)} onChange={() => toggleDay(d)} />
            {d}
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="mt-7 rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
      >
        {t.common.save}
      </button>
    </form>
  );
}

function NotifRow({
  title,
  desc,
  email,
  sms,
}: {
  title: string;
  desc: string;
  email?: boolean;
  sms?: boolean;
}) {
  const s = useT().settings;
  const [e, setE] = useState(!!email);
  const [sm, setSm] = useState(!!sms);
  return (
    <div className="flex items-start justify-between gap-6 border-b border-line pb-5">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 max-w-sm text-sm text-muted">{desc}</p>
      </div>
      <div className="flex shrink-0 gap-6 pt-1">
        <label className="flex flex-col items-center gap-1.5 text-xs text-muted">
          {s.email}
          <CheckBox checked={e} onChange={() => setE((v) => !v)} round />
        </label>
        <label className="flex flex-col items-center gap-1.5 text-xs text-muted">
          {s.sms}
          <CheckBox checked={sm} onChange={() => setSm((v) => !v)} round />
        </label>
      </div>
    </div>
  );
}

function CheckBox({
  checked,
  onChange,
  round,
}: {
  checked: boolean;
  onChange: () => void;
  round?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`grid h-5 w-5 place-items-center border transition ${
        round ? "rounded-full" : "rounded-md"
      } ${checked ? "border-primary bg-primary" : "border-line bg-bg"}`}
      aria-pressed={checked}
    >
      {checked && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <path d="M20 6 9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function SuiviTab({
  user,
  courseTitles,
}: {
  user: User;
  courseTitles: Record<string, string>;
}) {
  const s = useT().settings;
  const enrolled = user.enrolled.map((e) => ({
    ...e,
    title: courseTitles[e.slug] ?? e.slug,
  }));
  return (
    <div>
      <h2 className="font-display text-lg font-bold">{s.trackingHeading}</h2>
      <div className="mt-5 space-y-4">
        {enrolled.length === 0 ? (
          <p className="rounded-xl border border-line p-4 text-sm text-muted">
            {s.noTracking}
          </p>
        ) : (
          enrolled.map((e) => (
            <div key={e.slug} className="rounded-xl border border-line p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{e.title}</span>
                <span className="text-sm text-muted">{e.progress}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface">
                <div className="h-full rounded-[3px] bg-primary" style={{ width: `${e.progress}%` }} />
              </div>
              <p className="mt-2 text-sm text-muted">{s.lastLesson} {e.lastLesson}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

