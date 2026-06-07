"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreerComptePage() {
  const router = useRouter();
  const [role, setRole] = useState<"apprenant" | "formateur">("apprenant");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push(role === "formateur" ? "/parametres" : "/tableau-de-bord");
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
          <input type="email" required placeholder="vous@email.com" className="field mt-2" />

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Prénom</label>
              <input type="text" required className="field mt-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Nom</label>
              <input type="text" required className="field mt-2" />
            </div>
          </div>

          <label className="mt-5 block text-sm font-medium">Mot de passe</label>
          <input type="password" required placeholder="••••••••" className="field mt-2" />

          <label className="mt-5 block text-sm font-medium">
            Confirmation du mot de passe
          </label>
          <input type="password" required placeholder="••••••••" className="field mt-2" />

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Créer mon compte
          </button>

          <p className="mt-4 text-sm text-muted">
            Vous avez déjà un compte ?{" "}
            <Link href="/connexion" className="font-semibold text-primary-dark hover:underline">
              Se connecter
            </Link>
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
