"use client";

import { useState } from "react";
import { GoogleIcon } from "@/components/icons";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { useI18n, useT } from "@/i18n/provider";
import { localePath } from "@/i18n/config";
import { homeByRole } from "@/lib/session";
import { loginAction } from "@/lib/actions/auth";
import { oauthSignIn } from "@/lib/actions/oauth";

// Cible de retour passée par une page verrouillée (?next=/formations/...).
// Lue au moment du clic (pas de useSearchParams → pas de Suspense imposée).
// Chemin interne SANS préfixe de locale ; tout le reste est rejeté.
function nextFromLocation(): string | null {
  if (typeof window === "undefined") return null;
  const raw = new URLSearchParams(window.location.search).get("next");
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return null;
  return raw;
}

export default function ConnexionPage() {
  const t = useT();
  const { locale } = useI18n();
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
    // Retour à la leçon d'origine si on venait d'un contenu verrouillé,
    // sinon vers l'espace correspondant au rôle réel (issu de la session).
    router.push(nextFromLocation() ?? homeByRole[res.role]);
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
            className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-[3px] bg-primary py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-dark disabled:opacity-60"
          >
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
          <button
            type="button"
            onClick={() =>
              oauthSignIn(
                "google",
                localePath(locale, nextFromLocation() ?? "/tableau-de-bord"),
              )
            }
            className="mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-[3px] border border-line bg-surface text-sm font-medium text-ink transition hover:border-ink"
          >
            <GoogleIcon width={20} height={20} aria-hidden="true" />
            Google
          </button>
        </form>
      </div>

      <div className="section-dark hidden border-s border-line lg:flex lg:flex-col lg:justify-between lg:p-14">
        <span className="font-display text-[22px] font-semibold tracking-tight text-ink">
          Omni<span className="italic text-primary">Learn</span>
        </span>

        <div>
          <p className="font-display text-[2rem] leading-tight text-ink">
            {t.auth.resumeLead}{" "}
            <em>{t.auth.resumeAccent}</em>.
          </p>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
            {t.home.heroSubtitle}
          </p>
        </div>

        <p className="text-xs text-muted-soft">
          {t.footer.motto}
        </p>
      </div>
    </div>
  );
}
