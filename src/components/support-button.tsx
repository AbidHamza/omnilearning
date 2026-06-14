"use client";

import { useState } from "react";
import { createCheckoutAction } from "@/lib/actions/stripe";
import type { SupportTier } from "@/lib/stripe";

// Bouton d'un palier de soutien : lance le Checkout Stripe (redirige côté serveur).
// Si Stripe n'est pas configuré, affiche un message non bloquant.
export default function SupportButton({
  tier,
  label,
  featured,
}: {
  tier: SupportTier;
  label: string;
  featured?: boolean;
}) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onClick() {
    setPending(true);
    setError(null);
    // En cas de succès, l'action redirige (pas de retour). On ne reçoit une
    // valeur que si une erreur a été renvoyée.
    const res = await createCheckoutAction(tier);
    setPending(false);
    if (res && !res.ok) setError(res.error);
  }

  return (
    <div className="mt-6">
      <button
        onClick={onClick}
        disabled={pending}
        className={`w-full rounded-full py-2.5 text-sm font-semibold disabled:opacity-60 ${
          featured
            ? "bg-primary text-[#04130a] hover:bg-primary-deep"
            : "border border-line hover:bg-surface"
        }`}
      >
        {label}
      </button>
      {error && <p className="mt-2 text-center text-xs text-danger">{error}</p>}
    </div>
  );
}
