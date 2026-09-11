"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  GraduationIcon,
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
      <div className="container-page flex h-[68px] items-center gap-4">
        <LocaleLink href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-[3px] border border-line bg-surface text-primary transition group-hover:border-primary">
            <GraduationIcon width={18} height={18} />
          </span>
          <span className="hidden font-display text-[16px] font-extrabold tracking-tight sm:block">
            <span className="text-primary">$</span> omni<span className="text-primary">learn</span>
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
                className="h-10 w-full rounded-[3px] border border-line bg-surface ps-11 pe-4 text-sm outline-none transition placeholder:text-muted-soft focus:border-primary focus:bg-bg"
              />
            </form>

            <nav className="ms-auto hidden items-center gap-7 lg:flex">
              {links.map((l) => (
                <LocaleLink
                  key={l.href}
                  href={l.href}
                  className={`group flex items-center gap-1 text-sm transition-colors hover:text-ink ${
                    isActive(l.href) ? "font-semibold text-ink" : "text-muted"
                  }`}
                >
                  <span
                    className={`text-primary transition-opacity ${
                      isActive(l.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    aria-hidden
                  >
                    &gt;
                  </span>
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
                    className="rounded-[3px] border border-transparent px-3.5 py-2 text-sm font-medium text-muted transition hover:border-line hover:text-ink"
                  >
                    {t.common.signIn}
                  </LocaleLink>
                  <LocaleLink
                    href="/creer-compte"
                    className="rounded-[3px] border border-primary/40 bg-brand-soft px-3.5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-[#04130a]"
                  >
                    {t.common.signUp}
                  </LocaleLink>
                </div>
              )}

              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-[3px] text-ink lg:hidden"
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
                className="h-10 w-full rounded-[3px] border border-line bg-surface ps-11 pe-4 text-sm outline-none focus:border-primary"
              />
            </form>
            {links.map((l) => (
              <LocaleLink
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-[3px] px-3 py-2 text-sm font-medium hover:bg-surface"
              >
                {l.label}
              </LocaleLink>
            ))}
            {user ? (
              <>
                <LocaleLink
                  href={"/parametres"}
                  onClick={() => setOpen(false)}
                  className="block rounded-[3px] px-3 py-2 text-sm font-medium hover:bg-surface"
                >
                  {t.nav.myAccount} · {user.name}
                </LocaleLink>
                <button
                  onClick={logout}
                  className="block w-full rounded-[3px] px-3 py-2 text-start text-sm font-medium text-danger hover:bg-surface"
                >
                  {t.auth.logout}
                </button>
              </>
            ) : (
              <div className="flex gap-2 pt-1">
                <LocaleLink
                  href="/connexion"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-[3px] border border-line py-2 text-center text-sm font-semibold"
                >
                  {t.common.signIn}
                </LocaleLink>
                <LocaleLink
                  href="/creer-compte"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-[3px] border border-primary/40 bg-brand-soft py-2 text-center text-sm font-semibold text-primary"
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
        className="flex items-center gap-1.5 rounded-[3px] border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-primary hover:text-ink"
        aria-label={t.nav.language}
      >
        <GlobeIcon width={15} height={15} />
        <span className="uppercase">{locale}</span>
        <ChevronDown width={13} height={13} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute inset-inline-end-0 z-20 mt-2 w-40 rounded-[3px] border border-line bg-bg p-1.5 shadow-[0_18px_40px_-20px_rgba(10,21,29,0.4)]">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => choose(l)}
                className={`flex w-full items-center justify-between rounded-[3px] px-2.5 py-2 text-start text-sm transition ${
                  l === locale
                    ? "bg-primary-soft font-semibold text-primary-dark"
                    : "hover:bg-surface"
                }`}
              >
                {localeNames[l]}
                {l === locale && (
                  <span className="h-2 w-2 rounded-[3px] bg-primary" />
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
        className="flex items-center gap-2.5 rounded-[3px] py-1 ps-1 pe-2.5 transition hover:bg-surface"
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
            className="absolute inset-inline-end-0 z-20 mt-2 w-60 rounded-[3px] border border-line bg-bg p-1.5 shadow-[0_18px_40px_-20px_rgba(10,21,29,0.4)]"
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
              <span className="inline-flex items-center gap-1.5 rounded-[3px] bg-primary-soft px-2.5 py-1 text-[11px] font-bold text-primary-dark">
                <span className="h-1.5 w-1.5 rounded-[3px] bg-primary" />
                {roleLabel}
              </span>
            </div>
            <LocaleLink
              href={settingsHref}
              onClick={() => setOpen(false)}
              className="block rounded-[3px] px-2.5 py-2 text-sm font-medium transition hover:bg-surface"
              role="menuitem"
            >
              {settingsLabel}
            </LocaleLink>
            <button
              onClick={onLogout}
              className="mt-1 flex w-full items-center rounded-[3px] border-t border-line px-2.5 py-2 text-start text-sm font-medium text-danger transition hover:bg-surface"
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
