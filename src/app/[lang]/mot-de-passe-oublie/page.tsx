"use client";

import Link from "next/link";
import { useState } from "react";
import { MailIcon } from "@/components/icons";
import { useT } from "@/i18n/provider";

export default function MotDePasseOubliePage() {
  const f = useT().forgotPassword;
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
            <h1 className="mt-5 font-display text-2xl">
              {f.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.desc}</p>

            <label className="mt-7 block text-left text-sm font-medium">
              {f.emailLabel}
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
              className="mt-6 w-full rounded-[3px] bg-primary py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-deep"
            >
              {f.send}
            </button>

            <Link
              href="/connexion"
              className="mt-5 block text-sm text-primary-dark underline-offset-4 hover:underline"
            >
              {f.backToLogin}
            </Link>
          </form>
        ) : (
          <div>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-[3px] bg-success-soft text-success">
              <MailIcon width={26} height={26} />
            </span>
            <h1 className="mt-5 font-display text-2xl">
              {f.sentTitle}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {f.sentDesc}
              <br />
              <span className="font-semibold text-ink">{email}</span>
            </p>
            <p className="mt-6 text-sm text-muted">
              {f.notReceived}{" "}
              <button
                onClick={() => setSent(false)}
                className="font-semibold text-primary-dark hover:underline"
              >
                {f.resend}
              </button>
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-1 text-sm text-muted underline-offset-4 hover:underline"
            >
              {f.wrongAddress}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
