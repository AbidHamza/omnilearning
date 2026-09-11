"use client";

import { useState } from "react";
import { createCheckoutAction, type CheckoutError } from "@/lib/actions/stripe";
import type { SupportTier } from "@/lib/stripe";
import { useI18n } from "@/i18n/provider";

// Bouton d'un palier de soutien : lance le Checkout Stripe (redirige cote
// serveur). L'action ne renvoie qu'un code d'erreur ; la phrase affichee vient
// du dictionnaire, donc dans la langue de la page.
export default function SupportButton({
  tier,
  label,
  featured,
}: {
  tier: SupportTier;
  label: string;
  featured?: boolean;
}) {
  const { locale, dict } = useI18n();
  const [error, setError] = useState<CheckoutError | null>(null);
  const [pending, setPending] = useState(false);

  async function onClick() {
    setPending(true);
    setError(null);
    // En cas de succes, l'action redirige (pas de retour). On ne recoit une
    // valeur que si une erreur a ete renvoyee.
    const res = await createCheckoutAction(tier, locale);
    setPending(false);
    if (res && !res.ok) setError(res.error);
  }

  return (
    <div className="mt-6">
      <button
        onClick={onClick}
        disabled={pending}
        className={`w-full rounded-[3px] py-2.5 text-sm font-semibold disabled:opacity-60 ${
          featured
            ? "bg-primary text-[#04130a] hover:bg-primary-deep"
            : "border border-line hover:bg-surface"
        }`}
      >
        {label}
      </button>
      {error && (
        <p role="alert" className="mt-2 text-center text-xs text-danger">
          {dict.support.errors[error]}
        </p>
      )}
    </div>
  );
}
