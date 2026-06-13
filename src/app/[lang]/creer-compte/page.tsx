"use client";

import Image from "next/image";
import { useState } from "react";
import { LocaleLink, useLocaleRouter } from "@/i18n/navigation";
import { useSession } from "@/lib/session";
import { signupAction } from "@/lib/actions/auth";

export default function CreerComptePage() {
  const router = useLocaleRouter();
  const { setRole: setSessionRole } = useSession();
  const [role, setRole] = useState<"apprenant" | "formateur">("apprenant");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    fd.set("role", role);
    const res = await signupAction(fd);
    setPending(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setSessionRole(res.role);
    router.push(res.role === "formateur" ? "/parametres" : "/tableau-de-bord");
    router.refresh();
  }

  return (
    <div className="grid min-h-[calc(100vh-68px)] lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12">
        <form onSubmit={submit} className="w-full max-w-sm">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Créer votre compte
          </h1>

          <p className="mt-6 text-sm font-medium">Vous êtes</p>
          <div className="mt-2 grid grid-cols-2 gap-1 rounded-full bg-surface p-1">
            {(["apprenant", "formateur"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`rounded-full py-2 text-sm font-semibold capitalize transition ${
                  role === r
                    ? "bg-bg text-ink shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                {r === "apprenant" ? "Apprenant" : "Formateur"}
              </button>
            ))}
          </div>

          <label className="mt-5 block text-sm font-medium">Mail</label>
          <input type="email" name="email" required placeholder="vous@email.com" className="field mt-2" />

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Prénom</label>
              <input type="text" name="firstName" required className="field mt-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Nom</label>
              <input type="text" name="lastName" required className="field mt-2" />
            </div>
          </div>

          <label className="mt-5 block text-sm font-medium">Mot de passe</label>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            placeholder="••••••••"
            className="field mt-2"
          />

          <label className="mt-5 block text-sm font-medium">
            Confirmation du mot de passe
          </label>
          <input type="password" required placeholder="••••••••" className="field mt-2" />

          {error && <p className="mt-3 text-sm font-medium text-danger">{error}</p>}

          <button
            type="submit"
            disabled={pending}
            className="mt-7 w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
          >
            Créer mon compte
          </button>

          <p className="mt-4 text-sm text-muted">
            Vous avez déjà un compte ?{" "}
            <LocaleLink href="/connexion" className="font-semibold text-primary-dark hover:underline">
              Se connecter
            </LocaleLink>
          </p>
        </form>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1200&q=80"
          alt="Rejoindre la plateforme"
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
