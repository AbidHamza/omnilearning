"use client";

import { useState } from "react";
import { openBillingPortalAction } from "@/lib/actions/stripe";
import { useT } from "@/i18n/provider";

// Bouton "Gérer mon abonnement" : ouvre le portail client Stripe (redirige côté
// serveur). N'affiche qu'un message non bloquant si le portail est indisponible.
export default function BillingPortalButton({
  hasCustomer,
}: {
  hasCustomer: boolean;
}) {
  const { billing } = useT();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onClick() {
    setPending(true);
    setError(null);
    // En cas de succès l'action redirige (pas de retour) ; on ne reçoit une
    // valeur qu'en cas d'erreur.
    const res = await openBillingPortalAction();
    setPending(false);
    if (res && !res.ok) setError(res.error);
  }

  return (
    <div>
      <h2 className="mt-10 font-display text-lg font-semibold">{billing.heading}</h2>
      <p className="mt-1 text-sm text-muted">
        {hasCustomer ? billing.descActive : billing.descInactive}
      </p>
      <button
        type="button"
        onClick={onClick}
        disabled={pending}
        className="mt-4 inline-flex items-center gap-2 rounded-[3px] border border-line px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary-dark disabled:opacity-60"
      >
        {pending ? billing.opening : billing.manage}
      </button>
      {error && <p className="mt-2 text-sm text-danger">{error}</p>}
    </div>
  );
}
