"use client";

import { useState, useTransition } from "react";
import type { CourseStatus, Role, User } from "@/lib/types";
import type { PurchaseRow } from "@/lib/dal";
import BillingPortalButton from "@/components/billing-portal-button";
import { useI18n } from "@/i18n/provider";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { formatPrice } from "@/lib/pricing";
import {
  changePasswordAction,
  updateProfileAction,
  type ProfileError,
} from "@/lib/actions/profile";
import { deleteDraftAction } from "@/lib/actions/draft";
import {
  ClockIcon,
  LayersIcon,
  ShieldIcon,
  StarIcon,
  TrashIcon,
  UserIcon,
} from "@/components/icons";

const inputCls =
  "mt-2 w-full rounded-[3px] border border-line bg-bg px-3.5 py-2.5 text-sm outline-none transition focus:border-primary";
const panelCls = "border-t border-line py-4 text-sm";
const primaryBtn =
  "rounded-[3px] bg-primary px-5 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep disabled:opacity-50";
const ghostBtn =
  "rounded-[3px] border border-line px-4 py-2 text-sm font-semibold transition hover:border-primary disabled:opacity-50";
const rowLink =
  "rounded-[3px] border border-line px-3 py-1.5 text-xs font-semibold transition hover:border-primary hover:text-primary-dark";
const thCls = "pb-3 pe-4 text-start text-xs font-semibold text-muted";
const tdCls = "py-3 pe-4";

const statusCls: Record<CourseStatus, string> = {
  online: "bg-success-soft text-success",
  pending: "bg-warning/15 text-warning",
  draft: "bg-surface-2 text-muted",
};

// Deux onglets ont existé ici sans rien derrière : « Certifications » (aucun
// modèle en base) et « Rappels » (aucun champ de notification, aucun envoi).
// Un formulaire qui n'enregistre rien trompe l'utilisateur : ils reviendront
// avec leur backend.
type TabId = "profile" | "tracking" | "purchases" | "created" | "stats";

export interface BillingState {
  stripeEnabled: boolean;
  hasCustomer: boolean;
}

export default function ParametresClient({
  role,
  user,
  courseTitles,
  billing,
  purchases,
}: {
  role: Role;
  user: User;
  // slug -> titre, pour résoudre les cours suivis sans dépendre des données démo.
  courseTitles: Record<string, string>;
  billing: BillingState;
  purchases: PurchaseRow[];
}) {
  const { dict: t } = useI18n();
  const s = t.settings;

  const labels: Record<TabId, string> = {
    profile: s.tabProfile,
    tracking: s.tabTracking,
    purchases: s.tabPurchases,
    created: s.tabCreated,
    stats: s.tabStats,
  };

  const tabIds: TabId[] =
    role === "formateur"
      ? ["profile", "created", "stats"]
      : role === "admin"
        ? ["profile"]
        : ["profile", "tracking", "purchases"];

  const [tab, setTab] = useState<TabId>(tabIds[0]);

  if (!user) return null;

  return (
    <div className="container-page py-10">
      <span className="rule-accent mb-3" />
      <h1 className="text-4xl font-semibold">{t.nav.settings}</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
        <nav className="flex gap-2 overflow-x-auto border-line lg:flex-col lg:overflow-visible lg:border-e lg:pe-6">
          {tabIds.map((id) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`shrink-0 rounded-[3px] px-4 py-2.5 text-start text-sm ${
                tab === id ? "bg-primary-soft font-bold text-primary-dark" : "text-muted hover:bg-surface"
              }`}
            >
              {labels[id]}
            </button>
          ))}
        </nav>

        <div className="max-w-xl">
          {tab === "profile" && <ProfileTab user={user} billing={billing} />}
          {tab === "tracking" && <SuiviTab user={user} courseTitles={courseTitles} />}
          {tab === "purchases" && <PurchasesTab purchases={purchases} />}
          {tab === "created" && <FormationsCreesTab user={user} />}
          {tab === "stats" && <StatsTab user={user} />}
        </div>
      </div>
    </div>
  );
}

function ProfileTab({ user, billing }: { user: User; billing: BillingState }) {
  const s = useI18n().dict.settings;
  const router = useLocaleRouter();
  const [name, setName] = useState(user.name);
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [profileMsg, setProfileMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pwMsg, setPwMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [savingProfile, startProfile] = useTransition();
  const [savingPw, startPw] = useTransition();

  const errorText = (code: ProfileError) => s.profileErrors[code];

  function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    setProfileMsg(null);
    startProfile(async () => {
      const res = await updateProfileAction(name);
      if (res.ok) {
        setProfileMsg({ ok: true, text: s.profileSaved });
        router.refresh();
      } else {
        setProfileMsg({ ok: false, text: errorText(res.error) });
      }
    });
  }

  function savePassword(e: React.FormEvent) {
    e.preventDefault();
    setPwMsg(null);
    startPw(async () => {
      const res = await changePasswordAction(current, next);
      if (res.ok) {
        setPwMsg({ ok: true, text: s.passwordSaved });
        setCurrent("");
        setNext("");
      } else {
        setPwMsg({ ok: false, text: errorText(res.error) });
      }
    });
  }

  return (
    <div className="space-y-10">
      <form onSubmit={saveProfile}>
        <h2 className="flex items-center gap-2 font-display text-lg font-bold">
          <UserIcon width={18} height={18} />
          {s.profileHeading}
        </h2>
        <label className="mt-5 block text-sm font-semibold">
          {s.nameLabel}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            required
            className={inputCls}
          />
        </label>
        <label className="mt-4 block text-sm font-semibold">
          {s.emailLabel}
          <input value={user.email} readOnly className={`${inputCls} bg-surface text-muted`} />
        </label>
        <div className="mt-5 flex items-center gap-4">
          <button type="submit" disabled={savingProfile} className={primaryBtn}>
            {s.saveProfile}
          </button>
          {profileMsg && <Feedback ok={profileMsg.ok}>{profileMsg.text}</Feedback>}
        </div>
      </form>

      <form onSubmit={savePassword}>
        <h2 className="flex items-center gap-2 font-display text-lg font-bold">
          <ShieldIcon width={18} height={18} />
          {s.changePwHeading}
        </h2>
        <label className="mt-5 block text-sm font-semibold">
          {s.currentPw}
          <input
            type="password"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            autoComplete="current-password"
            required
            className={inputCls}
          />
        </label>
        <label className="mt-4 block text-sm font-semibold">
          {s.newPw}
          <input
            type="password"
            value={next}
            onChange={(e) => setNext(e.target.value)}
            autoComplete="new-password"
            minLength={8}
            required
            className={inputCls}
          />
        </label>
        <div className="mt-5 flex items-center gap-4">
          <button type="submit" disabled={savingPw} className={ghostBtn}>
            {s.changePwBtn}
          </button>
          {pwMsg && <Feedback ok={pwMsg.ok}>{pwMsg.text}</Feedback>}
        </div>
      </form>

      {billing.stripeEnabled && <BillingPortalButton hasCustomer={billing.hasCustomer} />}
    </div>
  );
}

function Feedback({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <span role="status" className={`text-sm ${ok ? "text-success" : "text-danger"}`}>
      {children}
    </span>
  );
}

function SuiviTab({
  user,
  courseTitles,
}: {
  user: User;
  courseTitles: Record<string, string>;
}) {
  const { dict } = useI18n();
  const s = dict.settings;
  const enrolled = user.enrolled.map((e) => ({
    ...e,
    title: courseTitles[e.slug] ?? e.slug,
  }));
  return (
    <div>
      <h2 className="font-display text-lg font-bold">{s.trackingHeading}</h2>
      <ul className="mt-5 border-b border-line">
        {enrolled.length === 0 ? (
          <li className={`${panelCls} text-muted`}>{s.noTracking}</li>
        ) : (
          enrolled.map((e) => (
            <li key={e.slug} className={panelCls}>
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold">{e.title}</span>
                <span className="shrink-0 text-muted">{e.progress}%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden bg-surface">
                <div className="h-full bg-primary" style={{ width: `${e.progress}%` }} />
              </div>
              <div className="mt-3 flex justify-end">
                <LocaleLink
                  href={
                    e.lastLesson
                      ? `/formations/${e.slug}/${e.lastLesson}`
                      : `/formations/${e.slug}`
                  }
                  className={rowLink}
                >
                  {dict.actions.resume}
                </LocaleLink>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

function PurchasesTab({ purchases }: { purchases: PurchaseRow[] }) {
  const { dict, locale } = useI18n();
  const s = dict.settings;
  const statusLabel: Record<string, string> = s.purchaseStatus;
  return (
    <div>
      <h2 className="font-display text-lg font-bold">{s.tabPurchases}</h2>
      {purchases.length === 0 ? (
        <p className={`mt-5 ${panelCls} border-b text-muted`}>{s.noPurchases}</p>
      ) : (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr>
                <th className={thCls}>{s.purchaseDate}</th>
                <th className={thCls}>{s.purchaseCourse}</th>
                <th className={thCls}>{s.purchaseAmount}</th>
                <th className={thCls}>{s.purchaseStatusLabel}</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((p) => (
                <tr key={p.id} className="border-t border-line align-middle">
                  <td className={`${tdCls} text-muted`}>{p.date}</td>
                  <td className={`${tdCls} font-semibold`}>
                    <LocaleLink href={`/formations/${p.courseSlug}`} className="hover:underline">
                      {p.courseTitle}
                    </LocaleLink>
                  </td>
                  <td className={tdCls}>{formatPrice(p.amountCents, p.currency, locale)}</td>
                  <td className={tdCls}>
                    <span className="bg-surface px-2 py-0.5 text-xs font-semibold text-muted">
                      {statusLabel[p.status] ?? p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function FormationsCreesTab({ user }: { user: User }) {
  const { dict } = useI18n();
  const s = dict.settings;
  const router = useLocaleRouter();
  const [deleting, startDelete] = useTransition();
  const [removed, setRemoved] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const created = (user.created ?? []).filter((c) => !removed.has(c.id));
  const statusLabel: Record<CourseStatus, string> = {
    online: dict.status.online,
    pending: dict.status.pending,
    draft: dict.status.draft,
  };

  function remove(id: string, draftId: string) {
    setError(null);
    startDelete(async () => {
      const res = await deleteDraftAction(draftId);
      if (res.ok) {
        setRemoved((prev) => new Set(prev).add(id));
        router.refresh();
      } else {
        setError(dict.create.errors[res.error]);
      }
    });
  }

  return (
    <div>
      <h2 className="font-display text-lg font-bold">{s.createdHeading}</h2>
      <p className="mt-1 text-sm text-muted">{s.createdSubtitle}</p>
      {error && <p className="mt-3 text-sm text-danger">{error}</p>}
      <ul className="mt-5 border-b border-line">
        {created.length === 0 ? (
          <li className={`${panelCls} text-muted`}>{s.noCreated}</li>
        ) : (
          created.map((c) => (
            <li key={c.id} className={`${panelCls} flex flex-wrap items-center justify-between gap-3`}>
              <div className="min-w-0">
                <div className="font-semibold">{c.title}</div>
                <span className={`mt-1 inline-block px-2 py-0.5 text-xs font-semibold ${statusCls[c.status]}`}>
                  {statusLabel[c.status]}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {c.status === "draft" && c.draftId && (
                  <>
                    <LocaleLink href={`/creer?draft=${c.draftId}`} className={rowLink}>
                      {dict.actions.resume}
                    </LocaleLink>
                    <button
                      type="button"
                      onClick={() => remove(c.id, c.draftId!)}
                      disabled={deleting}
                      aria-label={dict.actions.delete}
                      className="grid h-8 w-8 place-items-center border border-line text-muted hover:border-danger hover:text-danger disabled:opacity-50"
                    >
                      <TrashIcon width={14} height={14} />
                    </button>
                  </>
                )}
                {c.status === "online" && c.slug && (
                  <LocaleLink href={`/formations/${c.slug}`} className={rowLink}>
                    {dict.actions.view}
                  </LocaleLink>
                )}
                {c.status === "pending" && (
                  <span className="text-xs text-muted">{dict.instructor.pendingAdmin}</span>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

function StatsTab({ user }: { user: User }) {
  const { dict } = useI18n();
  const s = dict.settings;
  const stats = user.stats ?? { started: 0, finished: 0, rating: 0 };
  const created = user.created ?? [];
  return (
    <div>
      <h2 className="font-display text-lg font-bold">{s.statsHeading}</h2>
      <ul className="mt-5 space-y-3">
        <StatRow icon={<LayersIcon width={18} height={18} />} value={stats.started}>
          {s.statStarted}
        </StatRow>
        <StatRow icon={<ClockIcon width={18} height={18} />} value={stats.finished}>
          {s.statFinished}
        </StatRow>
        <StatRow
          icon={<StarIcon width={18} height={18} />}
          value={stats.rating ? stats.rating.toFixed(1).replace(".0", "") : "--"}
        >
          {s.statRating}
        </StatRow>
      </ul>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr>
              <th className={thCls}>{s.tableFormation}</th>
              <th className={thCls}>{s.tableStarted}</th>
              <th className={thCls}>{s.tableFinished}</th>
            </tr>
          </thead>
          <tbody>
            {created.length === 0 ? (
              <tr className="border-t border-line">
                <td colSpan={3} className="py-4 text-center text-muted">
                  {s.noCreated}
                </td>
              </tr>
            ) : (
              created.map((c) => (
                <tr key={c.id} className="border-t border-line">
                  <td className={`${tdCls} font-semibold`}>{c.title}</td>
                  <td className={tdCls}>{c.started}</td>
                  <td className={tdCls}>{c.status === "online" ? c.finished : "--"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
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
