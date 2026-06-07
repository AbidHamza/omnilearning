"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  BellIcon,
  ChevronDown,
  GraduationIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "./icons";
import { homeByRole, roleLabels, useSession } from "@/lib/session";
import type { Role } from "@/lib/types";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { useI18n, useT } from "@/i18n/provider";
import {
  locales,
  localeNames,
  localePath,
  stripLocale,
  type Locale,
} from "@/i18n/config";

type NavLink = { href: string; label: string };

const switchOrder: Role[] = ["visiteur", "etudiant", "formateur", "admin"];

export default function Navbar() {
  const pathname = usePathname();
  const path = stripLocale(pathname);
  const localeRouter = useLocaleRouter();
  const t = useT();
  const { role, setRole, user } = useSession();
  const [open, setOpen] = useState(false);
  const [roleMenu, setRoleMenu] = useState(false);
  const [q, setQ] = useState("");

  // Les pages d'authentification affichent un en-tête épuré.
  const bare = ["/connexion", "/creer-compte", "/mot-de-passe-oublie"].includes(
    path,
  );

  const linksByRole: Record<Role, NavLink[]> = {
    visiteur: [
      { href: "/formations", label: t.nav.formations },
      { href: "/soutenir", label: t.nav.support },
    ],
    etudiant: [
      { href: "/formations", label: t.nav.formations },
      { href: "/tableau-de-bord", label: t.nav.dashboard },
      { href: "/soutenir", label: t.nav.support },
    ],
    formateur: [
      { href: "/formations", label: t.nav.formations },
      { href: "/formateur", label: t.nav.dashboard },
      { href: "/soutenir", label: t.nav.support },
    ],
    admin: [
      { href: "/admin", label: t.nav.moderation },
      { href: "/formations", label: t.nav.formations },
    ],
  };

  const labels = {
    visiteur: t.roles.visiteur,
    etudiant: t.roles.etudiant,
    formateur: t.roles.formateur,
    admin: t.roles.admin,
  } satisfies Record<Role, string>;

  const links = linksByRole[role];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    localeRouter.push(`/formations${q ? `?q=${encodeURIComponent(q)}` : ""}`);
    setOpen(false);
  }

  function switchRole(next: Role) {
    setRole(next);
    setRoleMenu(false);
    setOpen(false);
    localeRouter.push(homeByRole[next]);
  }

  const isActive = (href: string) =>
    path === href || path.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="container-page flex h-[68px] items-center gap-4">
        <LocaleLink href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-brand">
            <GraduationIcon width={19} height={19} />
          </span>
          <span className="hidden font-display text-[17px] font-extrabold tracking-tight sm:block">
            Omni<span className="text-primary">Learn</span>
          </span>
        </LocaleLink>

        {!bare && (
          <>
            <form
              onSubmit={submit}
              className="relative hidden flex-1 max-w-sm md:block"
            >
              <SearchIcon
                width={17}
                height={17}
                className="pointer-events-none absolute inset-inline-start-4 top-1/2 -translate-y-1/2 text-muted-soft"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.common.search}
                className="h-10 w-full rounded-full border border-line bg-surface ps-11 pe-4 text-sm outline-none transition placeholder:text-muted-soft focus:border-primary focus:bg-bg"
              />
            </form>

            <nav className="ms-auto hidden items-center gap-7 lg:flex">
              {links.map((l) => (
                <LocaleLink
                  key={l.href}
                  href={l.href}
                  className={`text-sm transition-colors hover:text-ink ${
                    isActive(l.href) ? "font-semibold text-ink" : "text-muted"
                  }`}
                >
                  {l.label}
                </LocaleLink>
              ))}
            </nav>

            <div className="ms-auto flex items-center gap-2 lg:ms-0">
              <LanguageSwitcher />

              <RoleSwitcher
                role={role}
                labels={labels}
                open={roleMenu}
                setOpen={setRoleMenu}
                onSwitch={switchRole}
                switchLabel={t.roles.switchLabel}
                switchAria={t.roles.switchAria}
              />

              {user ? (
                <>
                  <button
                    aria-label={t.nav.notifications}
                    className="relative hidden h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface md:grid"
                  >
                    <BellIcon width={19} height={19} />
                    <span className="absolute inset-inline-end-2 top-2 h-2 w-2 rounded-full bg-danger ring-2 ring-bg" />
                  </button>
                  <LocaleLink
                    href={role === "admin" ? "/admin" : "/parametres"}
                    className="hidden items-center gap-2.5 rounded-full py-1 ps-1 pe-3 transition hover:bg-surface md:flex"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-soft text-xs font-bold text-primary-dark">
                      {user.initials}
                    </span>
                    <span className="text-sm font-semibold">{user.name}</span>
                  </LocaleLink>
                </>
              ) : (
                <div className="hidden items-center gap-2 md:flex">
                  <LocaleLink
                    href="/connexion"
                    className="rounded-full px-4 py-2 text-sm font-semibold text-primary-dark transition hover:bg-surface"
                  >
                    {t.common.signIn}
                  </LocaleLink>
                  <LocaleLink
                    href="/creer-compte"
                    className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    {t.common.signUp}
                  </LocaleLink>
                </div>
              )}

              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-lg text-ink lg:hidden"
              >
                {open ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </>
        )}

        {bare && (
          <div className="ms-auto flex items-center gap-3">
            <LanguageSwitcher />
            <LocaleLink
              href="/connexion"
              className="text-sm font-semibold text-primary-dark hover:underline"
            >
              {t.common.signIn}
            </LocaleLink>
          </div>
        )}
      </div>

      {open && !bare && (
        <div className="border-t border-line bg-bg lg:hidden">
          <div className="container-page space-y-2 py-4">
            <form onSubmit={submit} className="relative">
              <SearchIcon
                width={17}
                height={17}
                className="pointer-events-none absolute inset-inline-start-4 top-1/2 -translate-y-1/2 text-muted-soft"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.common.search}
                className="h-10 w-full rounded-full border border-line bg-surface ps-11 pe-4 text-sm outline-none focus:border-primary"
              />
            </form>
            {links.map((l) => (
              <LocaleLink
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-surface"
              >
                {l.label}
              </LocaleLink>
            ))}
            {user ? (
              <LocaleLink
                href={role === "admin" ? "/admin" : "/parametres"}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-surface"
              >
                {t.nav.myAccount} · {user.name}
              </LocaleLink>
            ) : (
              <div className="flex gap-2 pt-1">
                <LocaleLink
                  href="/connexion"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full border border-line py-2 text-center text-sm font-semibold"
                >
                  {t.common.signIn}
                </LocaleLink>
                <LocaleLink
                  href="/creer-compte"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-primary py-2 text-center text-sm font-semibold text-white"
                >
                  {t.common.signUp}
                </LocaleLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useI18n();
  const t = useT();
  const [open, setOpen] = useState(false);

  function choose(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=${60 * 60 * 24 * 365}`;
    router.push(localePath(next, stripLocale(pathname)));
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-primary hover:text-ink"
        aria-label={t.nav.language}
      >
        <GlobeIcon width={15} height={15} />
        <span className="uppercase">{locale}</span>
        <ChevronDown width={13} height={13} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute inset-inline-end-0 z-20 mt-2 w-40 rounded-xl border border-line bg-bg p-1.5 shadow-[0_18px_40px_-20px_rgba(10,21,29,0.4)]">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => choose(l)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-start text-sm transition ${
                  l === locale
                    ? "bg-primary-soft font-semibold text-primary-dark"
                    : "hover:bg-surface"
                }`}
              >
                {localeNames[l]}
                {l === locale && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function RoleSwitcher({
  role,
  labels,
  open,
  setOpen,
  onSwitch,
  switchLabel,
  switchAria,
}: {
  role: Role;
  labels: Record<Role, string>;
  open: boolean;
  setOpen: (v: boolean) => void;
  onSwitch: (r: Role) => void;
  switchLabel: string;
  switchAria: string;
}) {
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-primary hover:text-ink"
        aria-label={switchAria}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {labels[role]}
        <ChevronDown width={13} height={13} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute inset-inline-end-0 z-20 mt-2 w-52 rounded-xl border border-line bg-bg p-1.5 shadow-[0_18px_40px_-20px_rgba(10,21,29,0.4)]">
            <p className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-soft">
              {switchLabel}
            </p>
            {switchOrder.map((r) => (
              <button
                key={r}
                onClick={() => onSwitch(r)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-start text-sm transition ${
                  r === role
                    ? "bg-primary-soft font-semibold text-primary-dark"
                    : "hover:bg-surface"
                }`}
              >
                {labels[r]}
                {r === role && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
