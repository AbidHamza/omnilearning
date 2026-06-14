"use client";

import { useState } from "react";
import { GoogleIcon, GithubIcon, AppleIcon, GraduationIcon } from "@/components/icons";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";
import { homeByRole } from "@/lib/session";
import { loginAction } from "@/lib/actions/auth";
import { oauthSignIn } from "@/lib/actions/oauth";

export default function ConnexionPage() {
  const t = useT();
  const router = useLocaleRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(false);
    const fd = new FormData();
    fd.set("email", identifier);
    fd.set("password", password);
    const res = await loginAction(fd);
    setPending(false);
    if (!res.ok) {
      setError(true);
      return;
    }
    // Le rôle réel vient de la session : on navigue vers l'espace correspondant.
    router.push(homeByRole[res.role]);
    router.refresh();
  }

  return (
    <div className="grid min-h-[calc(100vh-68px)] lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12">
        <form onSubmit={submit} className="w-full max-w-sm">
          <span className="rule-accent mb-4" />
          <h1 className="text-[2.4rem] font-semibold leading-tight">
            {t.auth.loginTitle}
          </h1>

          <label className="mt-8 block text-sm font-medium">
            {t.auth.identifier}
          </label>
          <input
            type="text"
            required
            autoComplete="username"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              setError(false);
            }}
            placeholder={t.auth.identifierPlaceholder}
            className="field mt-2"
          />

          <label className="mt-5 block text-sm font-medium">
            {t.auth.password}
          </label>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="••••••••"
            className="field mt-2"
          />

          {error && (
            <p className="mt-3 text-sm font-medium text-danger">
              {t.auth.invalid}
            </p>
          )}

          <label className="mt-4 flex items-center gap-2.5 text-sm text-muted">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-line accent-primary"
            />
            {t.auth.remember}
          </label>

          <button
            type="submit"
            disabled={pending}
            className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-[3px] border border-primary/40 bg-brand-soft py-3 font-mono text-sm font-semibold text-primary transition hover:bg-primary hover:text-[#04130a] disabled:opacity-60"
          >
            <span className="opacity-70">$</span>
            {t.auth.loginTitle}
          </button>

          <LocaleLink
            href="/mot-de-passe-oublie"
            className="mt-4 block text-sm text-primary-dark underline-offset-4 hover:underline"
          >
            {t.auth.forgot}
          </LocaleLink>

          <p className="mt-3 border-b border-line pb-6 text-sm text-muted">
            {t.auth.noAccount}{" "}
            <LocaleLink
              href="/creer-compte"
              className="font-semibold text-primary-dark hover:underline"
            >
              {t.common.signUp}
            </LocaleLink>
          </p>

          <p className="mt-8 text-sm text-muted">{t.auth.orContinue}</p>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={() => oauthSignIn("google", "/tableau-de-bord")}
              aria-label="Google"
              className="grid h-12 flex-1 place-items-center rounded-[3px] border border-line bg-surface text-ink transition hover:border-primary hover:bg-surface-2"
            >
              <GoogleIcon width={22} height={22} />
            </button>
            <button
              type="button"
              onClick={() => oauthSignIn("github", "/tableau-de-bord")}
              aria-label="GitHub"
              className="grid h-12 flex-1 place-items-center rounded-[3px] border border-line bg-surface text-ink transition hover:border-primary hover:bg-surface-2"
            >
              <GithubIcon width={22} height={22} />
            </button>
            <button
              type="button"
              aria-label="Apple"
              className="grid h-12 flex-1 place-items-center rounded-[3px] border border-line bg-surface text-ink transition hover:border-primary hover:bg-surface-2"
            >
              <AppleIcon width={22} height={22} />
            </button>
          </div>
        </form>
      </div>

      {/* Panneau de marque terminal (pas de photo stock générique). */}
      <div className="section-dark relative hidden overflow-hidden border-s border-line lg:flex lg:flex-col lg:justify-between lg:p-14">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" />
        <div className="pointer-events-none absolute -top-24 end-0 h-72 w-72 rounded-full bg-brand-soft blur-3xl" />

        <div className="relative flex items-center gap-2.5 text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-[3px] border border-line bg-bg text-primary">
            <GraduationIcon width={18} height={18} />
          </span>
          <span className="font-display text-base font-extrabold tracking-tight">
            <span className="text-primary">$</span> omni<span className="text-primary">learn</span>
          </span>
        </div>

        <div className="relative">
          <p className="font-mono text-xs text-muted-soft"># apprendre.sh</p>
          <p className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
            Apprendre ne devrait jamais avoir de{" "}
            <span className="text-primary">prix</span>.
            <span className="term-cursor" aria-hidden />
          </p>
          <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-muted">
            {t.home.heroSubtitle}
          </p>
        </div>

        <p className="relative font-mono text-xs uppercase tracking-[0.14em] text-muted-soft">
          {t.footer.motto}
        </p>
      </div>
    </div>
  );
}
