"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "./icons";
import ThemeToggle from "./theme-toggle";
import { useSession } from "@/lib/session";
import { logoutAction } from "@/lib/actions/auth";
import type { Role, User } from "@/lib/types";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { useI18n, useT } from "@/i18n/provider";
import {
  locales,
  localeNames,
  localePath,
  setLocaleCookie,
  stripLocale,
  type Locale,
} from "@/i18n/config";
import Logo from "./logo";

type NavLink = { href: string; label: string };

export default function Navbar() {
  const pathname = usePathname();
  const path = stripLocale(pathname);
  const localeRouter = useLocaleRouter();
  const t = useT();
  const { role, user } = useSession();
  const [open, setOpen] = useState(false);
  const [acctMenu, setAcctMenu] = useState(false);
  const [q, setQ] = useState("");

  // Les pages d'authentification affichent un en-tête épuré.
  const bare = ["/connexion", "/creer-compte", "/mot-de-passe-oublie"].includes(
    path,
  );

  const linksByRole: Record<Role, NavLink[]> = {
    visiteur: [
      { href: "/formations", label: t.nav.formations },
    ],
    etudiant: [
      { href: "/formations", label: t.nav.formations },
      { href: "/tableau-de-bord", label: t.nav.dashboard },
    ],
    formateur: [
      { href: "/formations", label: t.nav.formations },
      { href: "/formateur", label: t.nav.dashboard },
    ],
    admin: [
      { href: "/admin", label: t.nav.moderation },
      { href: "/formations", label: t.nav.formations },
    ],
  };

  const roleLabels = {
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

  async function logout() {
    setAcctMenu(false);
    setOpen(false);
    await logoutAction();
    localeRouter.push("/");
    localeRouter.refresh();
  }

  const isActive = (href: string) =>
    path === href || path.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="container-page flex h-16 items-center gap-4">
        <LocaleLink href="/" className="group flex shrink-0 items-center gap-2.5">
          <Logo />
        </LocaleLink>

        {!bare && (
          <>
            <form onSubmit={submit} role="search" className="search-pill hidden max-w-sm flex-1 md:flex">
              <SearchIcon
                width={17}
                height={17}
                className="shrink-0 text-muted" aria-hidden="true"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                type="search"
                placeholder={t.common.search}
                aria-label={t.common.search}
              />
            </form>

            <nav className="ms-auto hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <LocaleLink
                  key={l.href}
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="chip border-transparent font-semibold"
                >
                  {l.label}
                </LocaleLink>
              ))}
            </nav>

            <div className="ms-auto flex items-center gap-2 lg:ms-0">
              <ThemeToggle />
              <LanguageSwitcher />

              {user ? (
                <>
                  <AccountMenu
                    user={user}
                    roleLabel={roleLabels[role]}
                    open={acctMenu}
                    setOpen={setAcctMenu}
                    settingsHref={"/parametres"}
                    settingsLabel={t.nav.settings}
                    logoutLabel={t.auth.logout}
                    onLogout={logout}
                  />
                </>
              ) : (
                <div className="hidden items-center gap-2 md:flex">
                  <LocaleLink
                    href="/connexion"
                    className="btn-soft px-4"
                  >
                    {t.common.signIn}
                  </LocaleLink>
                  <LocaleLink
                    href="/creer-compte"
                    className="btn-red h-10 px-4 text-sm"
                  >
                    {t.common.signUp}
                  </LocaleLink>
                </div>
              )}

              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-surface-2 lg:hidden"
              >
                {open ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </>
        )}

        {bare && (
          <div className="ms-auto flex items-center gap-3">
            <ThemeToggle />
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
            <form onSubmit={submit} role="search" className="search-pill">
              <SearchIcon
                width={17}
                height={17}
                className="shrink-0 text-muted" aria-hidden="true"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                type="search"
                placeholder={t.common.search}
                aria-label={t.common.search}
              />
            </form>
            {links.map((l) => (
              <LocaleLink
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-full px-4 py-2.5 text-[15px] font-medium hover:bg-surface-2"
              >
                {l.label}
              </LocaleLink>
            ))}
            {user ? (
              <>
                <LocaleLink
                  href={"/parametres"}
                  onClick={() => setOpen(false)}
                  className="block rounded-full px-4 py-2.5 text-[15px] font-medium hover:bg-surface-2"
                >
                  {t.nav.myAccount} · {user.name}
                </LocaleLink>
                <button
                  onClick={logout}
                  className="block w-full rounded-full px-4 py-2.5 text-start text-[15px] font-medium text-danger hover:bg-surface-2"
                >
                  {t.auth.logout}
                </button>
              </>
            ) : (
              <div className="flex gap-2 pt-1">
                <LocaleLink
                  href="/connexion"
                  onClick={() => setOpen(false)}
                  className="btn-soft flex-1"
                >
                  {t.common.signIn}
                </LocaleLink>
                <LocaleLink
                  href="/creer-compte"
                  onClick={() => setOpen(false)}
                  className="btn-red flex-1"
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
    setLocaleCookie(next);
    router.push(localePath(next, stripLocale(pathname)));
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="btn-soft h-10 gap-1.5 px-3 text-xs"
        aria-label={t.nav.language}
      >
        <GlobeIcon width={15} height={15} />
        <span className="uppercase">{locale}</span>
        <ChevronDown width={13} height={13} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute inset-inline-end-0 z-20 mt-2 w-40 menu-panel">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => choose(l)}
                className={`flex w-full items-center justify-between rounded-[10px] px-2.5 py-2 text-start text-sm transition ${
                  l === locale
                    ? "bg-surface-2 font-semibold text-ink"
                    : "hover:bg-surface-2"
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

// Menu de compte réel : avatar + nom, badge du rôle (lecture seule, vient de la
// session DB), lien paramètres et déconnexion. Aucun moyen de "changer" de rôle.
function AccountMenu({
  user,
  roleLabel,
  open,
  setOpen,
  settingsHref,
  settingsLabel,
  logoutLabel,
  onLogout,
}: {
  user: User;
  roleLabel: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  settingsHref: string;
  settingsLabel: string;
  logoutLabel: string;
  onLogout: () => void;
}) {
  return (
    <div className="relative hidden md:block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 rounded-full py-1 ps-1 pe-2.5 transition hover:bg-surface-2"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-soft text-xs font-bold text-primary-dark">
          {user.initials}
        </span>
        <span className="hidden text-sm font-semibold lg:block">{user.name}</span>
        <ChevronDown width={14} height={14} className="text-muted" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div
            role="menu"
            className="absolute inset-inline-end-0 z-20 mt-2 w-60 menu-panel"
          >
            <div className="flex items-center gap-3 px-2.5 py-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-sm font-bold text-primary-dark">
                {user.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{user.name}</p>
                <p className="truncate text-xs text-muted">{user.email}</p>
              </div>
            </div>
            <div className="mx-2.5 mb-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-bold text-primary-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {roleLabel}
              </span>
            </div>
            <LocaleLink
              href={settingsHref}
              onClick={() => setOpen(false)}
              className="block rounded-[10px] px-2.5 py-2 text-sm font-medium transition hover:bg-surface-2"
              role="menuitem"
            >
              {settingsLabel}
            </LocaleLink>
            <button
              onClick={onLogout}
              className="mt-1 flex w-full items-center rounded-[10px] px-2.5 py-2 text-start text-sm font-medium text-danger hover:bg-surface-2"
              role="menuitem"
            >
              {logoutLabel}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
