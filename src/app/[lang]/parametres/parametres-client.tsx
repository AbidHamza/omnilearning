"use client";

import { useState } from "react";
import Link from "next/link";
import type { CourseStatus, Role, User } from "@/lib/types";
import BillingPortalButton from "@/components/billing-portal-button";
import {
  AwardIcon,
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

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

const statusMeta: Record<CourseStatus, { label: string; cls: string }> = {
  online: { label: "En ligne", cls: "bg-success-soft text-success" },
  pending: { label: "En attente de validation", cls: "bg-warning/15 text-warning" },
  draft: { label: "En cours de création", cls: "bg-surface-2 text-muted" },
};

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
  const tabs =
    role === "formateur"
      ? ["Informations personnelles", "Formations créés", "Statistiques des formations"]
      : role === "admin"
        ? ["Informations personnelles"]
        : ["Informations personnelles", "Rappels", "Suivi d'apprentissage", "Certifications"];

  const [tab, setTab] = useState(tabs[0]);

  if (!user) return null;

  return (
    <div className="container-page py-10">
      <span className="rule-accent mb-3" />
      <h1 className="text-4xl font-semibold">Paramètres</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
        <nav className="flex gap-2 overflow-x-auto border-line lg:flex-col lg:overflow-visible lg:border-r lg:pr-6">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-left text-sm transition ${
                tab === t
                  ? "bg-primary-soft font-bold text-primary-dark"
                  : "text-muted hover:bg-surface"
              }`}
            >
              {t}
            </button>
          ))}
        </nav>

        <div className="max-w-xl">
          {tab === "Informations personnelles" && (
            <ProfileTab user={user} billing={billing} />
          )}
          {tab === "Rappels" && <RappelsTab />}
          {tab === "Suivi d'apprentissage" && (
            <SuiviTab user={user} courseTitles={courseTitles} />
          )}
          {tab === "Certifications" && <CertifsTab user={user} />}
          {tab === "Formations créés" && <FormationsCreesTab user={user} />}
          {tab === "Statistiques des formations" && <StatsTab user={user} />}
        </div>
      </div>
    </div>
  );
}

function ProfileTab({ user, billing }: { user: User; billing: BillingState }) {
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
        <UserIcon width={20} height={20} /> Profil
      </h2>

      <p className="mt-6 text-sm font-semibold">Photo de profil</p>
      <div className="mt-2 flex items-center gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-lg font-bold text-primary-dark">
          {user.initials}
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold transition hover:border-primary"
        >
          <PencilIcon width={14} height={14} />
          Changer de photo
        </button>
      </div>

      <label className="mt-6 block text-sm font-semibold">Nom</label>
      <input defaultValue={user.name} className={inputCls} />

      <label className="mt-5 block text-sm font-semibold">Mail</label>
      <input type="email" defaultValue={user.email} className={inputCls} />

      <h2 className="mt-10 flex items-center gap-2 font-display text-lg font-bold">
        <ShieldIcon width={19} height={19} /> Changer de mot de passe
      </h2>
      <label className="mt-5 block text-sm font-semibold">Mot de passe actuel</label>
      <input type="password" placeholder="••••••••" className={inputCls} />
      <label className="mt-5 block text-sm font-semibold">Nouveau mot de passe</label>
      <input type="password" placeholder="••••••••" className={inputCls} />

      <div className="mt-7 flex items-center gap-3">
        <button
          type="submit"
          className="rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
        >
          Changer mot de passe
        </button>
        {saved && <span className="text-sm text-success">Enregistré ✓</span>}
      </div>

      {billing.stripeEnabled && <BillingPortalButton hasCustomer={billing.hasCustomer} />}
    </form>
  );
}

function FormationsCreesTab({ user }: { user: User }) {
  const created = user.created ?? [];
  return (
    <div>
      <h2 className="font-display text-lg font-bold">Formations créés</h2>
      <p className="mt-1 text-sm text-muted">Listes de formations</p>

      <div className="mt-5 space-y-3">
        {created.length === 0 ? (
          <p className="rounded-xl bg-surface px-4 py-3.5 text-sm text-muted">
            Vous n&apos;avez pas encore créé de formation.
          </p>
        ) : (
          created.map((c) => (
            <div
              key={c.title}
              className="flex flex-wrap items-center gap-3 rounded-xl bg-surface px-4 py-3.5"
            >
              <span className="font-semibold">{c.title}</span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusMeta[c.status].cls}`}
              >
                {statusMeta[c.status].label}
              </span>
              <div className="ml-auto flex gap-2">
                {c.status === "online" && <Pill href="/creer">Modifier</Pill>}
                {c.status === "draft" && <Pill href="/creer">Reprendre</Pill>}
                <Pill href="/formations/cybersecurite" icon>
                  Voir
                </Pill>
                {c.status !== "pending" && (
                  <button className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-xs font-semibold text-muted transition hover:border-danger hover:text-danger">
                    Supprimer
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
  const stats = user.stats;
  const created = user.created ?? [];
  if (!stats) return null;
  const tiles = [
    { icon: LayersIcon, value: stats.started, label: "Commencées" },
    { icon: ClockIcon, value: stats.finished, label: "Finies" },
    {
      icon: StarIcon,
      value: stats.rating.toFixed(1).replace(".0", ""),
      label: "Note moyenne",
    },
  ];
  return (
    <div>
      <h2 className="font-display text-lg font-bold">Statistiques des formations</h2>

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
              <th className="pb-3 pr-4 font-semibold">Formation</th>
              <th className="pb-3 pr-4 font-semibold">Commencé</th>
              <th className="pb-3 font-semibold">Fini</th>
            </tr>
          </thead>
          <tbody>
            {created.map((c) => (
              <tr key={c.title} className="border-t border-line">
                <td className="py-3 pr-4 font-medium">{c.title}</td>
                <td className="py-3 pr-4">{c.started}</td>
                <td className="py-3">{c.status === "online" ? c.finished : "—"}</td>
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
      <h2 className="font-display text-lg font-bold">Notifications</h2>

      <div className="mt-5 space-y-5">
        <NotifRow
          title="Rappels d'apprentissage"
          desc="Nous vous rappelons de continuer les leçons, de rendre les devoirs dans les délais."
          email
          sms
        />
        <NotifRow
          title="Mise à jour de contenu"
          desc="Nous vous alertons pour l'ajout de nouvelles leçons, vidéos ou autre contenu."
          sms
        />
      </div>

      <h2 className="mt-10 font-display text-lg font-bold">
        Objectif de rappel d&apos;apprentissage
      </h2>
      <p className="mt-1 text-sm text-muted">
        Les jours d&apos;apprentissage choisis pour lesquels vous recevrez une
        alerte si vous ne continuez pas votre apprentissage.
      </p>

      <label className="mt-5 flex items-center gap-3 text-sm font-semibold">
        <CheckBox checked={all} onChange={toggleAll} />
        Tout sélectionner
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
        Enregistrer
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
  const [e, setE] = useState(!!email);
  const [s, setS] = useState(!!sms);
  return (
    <div className="flex items-start justify-between gap-6 border-b border-line pb-5">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 max-w-sm text-sm text-muted">{desc}</p>
      </div>
      <div className="flex shrink-0 gap-6 pt-1">
        <label className="flex flex-col items-center gap-1.5 text-xs text-muted">
          Email
          <CheckBox checked={e} onChange={() => setE((v) => !v)} round />
        </label>
        <label className="flex flex-col items-center gap-1.5 text-xs text-muted">
          SMS
          <CheckBox checked={s} onChange={() => setS((v) => !v)} round />
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
  const enrolled = user.enrolled.map((e) => ({
    ...e,
    title: courseTitles[e.slug] ?? e.slug,
  }));
  return (
    <div>
      <h2 className="font-display text-lg font-bold">Suivi d&apos;apprentissage</h2>
      <div className="mt-5 space-y-4">
        {enrolled.length === 0 ? (
          <p className="rounded-xl border border-line p-4 text-sm text-muted">
            Vous ne suivez aucune formation pour le moment.
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
              <p className="mt-2 text-sm text-muted">Dernière leçon : {e.lastLesson}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function CertifsTab({ user }: { user: User }) {
  return (
    <div>
      <h2 className="font-display text-lg font-bold">Certifications</h2>
      <div className="mt-5 space-y-4">
        {user.certificates.map((c) => (
          <div key={c.course} className="flex items-center gap-4 rounded-xl border border-line p-4">
            <span className="grid h-11 w-11 place-items-center rounded-[3px] bg-success-soft text-success">
              <AwardIcon />
            </span>
            <div className="flex-1">
              <div className="font-semibold">{c.course}</div>
              <div className="text-sm text-muted">Obtenu le {c.date}</div>
            </div>
            <button className="rounded-full border border-line px-4 py-2 text-sm font-semibold transition hover:border-primary">
              Télécharger
            </button>
          </div>
        ))}
        <p className="text-sm text-muted">
          Terminez vos formations en cours pour débloquer de nouveaux certificats.
        </p>
      </div>
    </div>
  );
}
