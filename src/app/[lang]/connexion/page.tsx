"use client";

import Image from "next/image";
import { useState } from "react";
import { GoogleIcon, GithubIcon, AppleIcon } from "@/components/icons";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";
import { homeByRole, useSession } from "@/lib/session";
import { accounts, authenticate, type LoginRole } from "@/lib/accounts";

export default function ConnexionPage() {
  const t = useT();
  const router = useLocaleRouter();
  const { setRole } = useSession();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const roleLabel: Record<LoginRole, string> = {
    etudiant: t.roles.etudiant,
    formateur: t.roles.formateur,
    admin: t.roles.admin,
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const account = authenticate(identifier, password);
    if (!account) {
      setError(true);
      return;
    }
    setRole(account.role);
    router.push(homeByRole[account.role]);
  }

  function prefill(email: string, pw: string) {
    setIdentifier(email);
    setPassword(pw);
    setError(false);
  }

  return (
    <div className="grid min-h-[calc(100vh-68px)] lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12">
        <form onSubmit={submit} className="w-full max-w-sm">
          <h1 className="text-3xl font-extrabold tracking-tight">
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
            className="mt-6 w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
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

          {/* Comptes de démonstration (local) */}
          <div className="mt-6 rounded-2xl border border-line bg-surface p-4">
            <p className="text-sm font-semibold">{t.auth.demoTitle}</p>
            <p className="mt-0.5 text-xs text-muted">{t.auth.demoHint}</p>
            <div className="mt-3 space-y-1.5">
              {accounts.map((a) => (
                <button
                  key={a.email}
                  type="button"
                  onClick={() => prefill(a.email, a.password)}
                  className="flex w-full items-center justify-between rounded-lg bg-bg px-3 py-2 text-start text-xs transition hover:ring-1 hover:ring-primary"
                >
                  <span className="font-medium">{roleLabel[a.role]}</span>
                  <span className="text-muted-soft">{a.email}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-muted">{t.auth.orContinue}</p>
          <div className="mt-3 flex gap-3">
            {[GoogleIcon, GithubIcon, AppleIcon].map((Icon, i) => (
              <button
                key={i}
                type="button"
                className="grid h-12 flex-1 place-items-center rounded-xl border border-line bg-bg transition hover:border-primary hover:bg-surface"
              >
                <Icon width={22} height={22} />
              </button>
            ))}
          </div>
        </form>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80"
          alt={t.auth.loginImageAlt}
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </div>
    </div>
  );
}
