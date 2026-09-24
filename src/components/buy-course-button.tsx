"use client";

import { useState } from "react";
import {
  createCoursePurchaseAction,
  type PurchaseError,
} from "@/lib/actions/purchase";
import { useI18n } from "@/i18n/provider";

/**
 * Bouton d'achat d'une formation. L'action serveur redirige vers Stripe en cas
 * de succès : on ne reçoit une valeur de retour que si quelque chose a bloqué,
 * et la phrase affichée vient du dictionnaire de la page.
 */
export default function BuyCourseButton({
  slug,
  label,
  className,
}: {
  slug: string;
  label: string;
  className?: string;
}) {
  const { locale, dict } = useI18n();
  const [error, setError] = useState<PurchaseError | null>(null);
  const [pending, setPending] = useState(false);

  async function onClick() {
    setPending(true);
    setError(null);
    const res = await createCoursePurchaseAction(slug, locale);
    setPending(false);
    if (res && !res.ok) setError(res.error);
  }

  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        disabled={pending}
        className={
          className ??
          "inline-flex items-center gap-2 rounded-[3px] bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary hover:bg-primary-deep disabled:opacity-60"
        }
      >
        {pending ? dict.course.buyPending : label}
      </button>
      {error && (
        <p role="alert" className="mt-2 text-xs text-danger">
          {dict.course.buyErrors[error]}
        </p>
      )}
    </div>
  );
}
