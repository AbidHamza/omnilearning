"use client";

import { useState } from "react";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";
import { signupAction } from "@/lib/actions/auth";
import { CheckIcon } from "@/components/icons";
import Logo from "@/components/logo";

// Cible de retour passée par une page verrouillée (?next=/formations/...).
// Lue au moment du submit (pas de useSearchParams → pas de Suspense imposée).
// Chemin interne SANS préfixe de locale ; tout le reste est rejeté.
function nextFromLocation(): string | null {
  if (typeof window === "undefined") return null;
  const raw = new URLSearchParams(window.location.search).get("next");
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return null;
  return raw;
}

export default function CreerComptePage() {
  const t = useT();
  const s = t.signup;
  const router = useLocaleRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const password = fd.get("password") as string;
    const confirm = fd.get("confirmPassword") as string;
    if (password !== confirm) {
      setError(s.mismatch);
      return;
    }
    setPending(true);
    // Tout nouveau compte est créé en tant qu'étudiant (USER). Le statut
    // formateur/admin est attribué en base par un administrateur, jamais ici.
    const res = await signupAction(fd);
    setPending(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    // Si l'inscription part d'une leçon verrouillée, on y renvoie directement.
    router.push(nextFromLocation() ?? "/tableau-de-bord");
    router.refresh();
  }

  return (
    <div className="grid min-h-[calc(100vh-68px)] lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12">
        <form onSubmit={submit} className="w-full max-w-sm">
          <span className="rule-accent mb-4" />
          <h1 className="text-[2.4rem] font-semibold leading-tight">
            {s.title}
          </h1>
          <p className="mt-2 text-sm text-muted">{s.subtitle}</p>

          <label className="mt-6 block text-sm font-medium">
            {t.settings.emailLabel}
          </label>
          <input type="email" name="email" required placeholder={s.emailPlaceholder} className="field mt-2" />

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">{s.firstName}</label>
              <input type="text" name="firstName" required className="field mt-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">{s.lastName}</label>
              <input type="text" name="lastName" required className="field mt-2" />
            </div>
          </div>

          <label className="mt-5 block text-sm font-medium">{t.auth.password}</label>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            placeholder="••••••••"
            className="field mt-2"
          />

          <label className="mt-5 block text-sm font-medium">
            {s.confirmPassword}
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            minLength={8}
            placeholder="••••••••"
            className="field mt-2"
          />

          {error && <p className="mt-3 text-sm font-medium text-danger">{error}</p>}

          <button
            type="submit"
            disabled={pending}
            className="mt-7 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-dark disabled:opacity-60"
          >
            {s.submit}
          </button>

          <p className="mt-4 text-sm text-muted">
            {s.haveAccount}{" "}
            <LocaleLink href="/connexion" className="font-semibold text-primary hover:underline">
              {t.common.signIn}
            </LocaleLink>
          </p>
        </form>
      </div>

      <div className="section-dark hidden border-s border-line lg:flex lg:flex-col lg:justify-between lg:p-14">
        <Logo />

        <div>
          <p className="font-display text-[2rem] leading-tight text-ink">
            {s.panelTitleLead} <em>{s.panelTitleAccent}</em>.
          </p>
          <ul className="mt-7 space-y-3">
            {s.panelBenefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-muted">
                <CheckIcon width={15} height={15} className="mt-1 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-muted-soft">
          {t.footer.motto}
        </p>
      </div>
    </div>
  );
}
