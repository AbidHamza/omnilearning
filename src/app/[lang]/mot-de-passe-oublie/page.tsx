"use client";

import Link from "next/link";
import { useState } from "react";
import { MailIcon } from "@/components/icons";

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSent(true);
  }

  return (
    <div className="container-page grid min-h-[calc(100vh-68px)] place-items-center py-12">
      <div className="w-full max-w-md text-center">
        {!sent ? (
          <form onSubmit={submit}>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-primary-dark">
              <MailIcon width={26} height={26} />
            </span>
            <h1 className="mt-5 text-2xl font-extrabold tracking-tight">
              Réinitialiser votre mot de passe
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Un mail de réinitialisation de mot de passe vous sera envoyé à
              l&apos;adresse que vous saisissez.
            </p>

            <label className="mt-7 block text-left text-sm font-medium">
              Votre mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@email.com"
              className="field mt-2"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Envoyer un mail
            </button>

            <Link
              href="/connexion"
              className="mt-5 block text-sm text-primary-dark underline-offset-4 hover:underline"
            >
              Retourner à la page de connexion
            </Link>
          </form>
        ) : (
          <div>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success-soft text-success">
              <MailIcon width={26} height={26} />
            </span>
            <h1 className="mt-5 text-2xl font-extrabold tracking-tight">
              Le mail a été envoyé
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Un mail de réinitialisation de mot de passe vous a été envoyé à
              l&apos;adresse suivante :
              <br />
              <span className="font-semibold text-ink">{email}</span>
            </p>
            <p className="mt-6 text-sm text-muted">
              Vous n&apos;avez pas reçu le mail ?{" "}
              <button
                onClick={() => setSent(false)}
                className="font-semibold text-primary-dark hover:underline"
              >
                Renvoyer
              </button>
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-1 text-sm text-muted underline-offset-4 hover:underline"
            >
              Ce n&apos;est pas la bonne adresse ? Modifier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
