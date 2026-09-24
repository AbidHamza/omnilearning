"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LocaleLink } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";

export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useT();
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  // `reset()` seul rejoue le rendu sur la charge deja recue : si l'erreur venait
  // du serveur, elle se reproduit a l'identique. Il faut redemander la page.
  const reessayer = () => {
    router.refresh();
    reset();
  };

  return (
    <div className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <div className="text-6xl font-bold text-primary">500</div>
        <h1 className="mt-4 text-2xl font-bold">{t.serverError.title}</h1>
        <p className="mt-2 text-muted">{t.serverError.text}</p>
        {error.digest && (
          <p className="mt-3 text-xs text-muted">
            {t.serverError.ref} {error.digest}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reessayer}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep"
          >
            {t.serverError.retry}
          </button>
          <LocaleLink href="/" className="text-sm font-semibold text-primary-dark hover:underline">
            {t.serverError.back}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
