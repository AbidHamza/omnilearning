"use client";

import { useState, useTransition } from "react";
import { useI18n } from "@/i18n/provider";
import { useLocaleRouter } from "@/i18n/navigation";
import { applyAsInstructorAction } from "@/lib/actions/instructor-application";

/** Pays où Stripe Connect Express ouvre un compte sans friction particulière. */
const COUNTRIES = [
  "FR", "BE", "CH", "LU", "ES", "DE", "IT", "PT", "NL",
  "GB", "IE", "CA", "US", "AE", "MA", "TN", "SN", "CI",
];

export default function ApplyForm({ defaultName }: { defaultName: string }) {
  const { locale, dict } = useI18n();
  const t = dict.teach;
  const router = useLocaleRouter();
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Noms de pays dans la langue de la page : une liste codée en dur devrait
  // sinon être traduite trois fois et vieillirait mal.
  const names = new Intl.DisplayNames([locale === "ar" ? "ar" : locale], {
    type: "region",
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setError(null);
    startTransition(async () => {
      const res = await applyAsInstructorAction({
        displayName: String(fd.get("displayName") ?? ""),
        headline: String(fd.get("headline") ?? ""),
        bio: String(fd.get("bio") ?? ""),
        expertise: String(fd.get("expertise") ?? ""),
        website: String(fd.get("website") ?? ""),
        country: String(fd.get("country") ?? "FR"),
      });
      if (res.ok) {
        setDone(true);
        router.refresh();
        return;
      }
      const key = res.error as keyof typeof t.errors;
      setError(t.errors[key] ?? res.error);
    });
  }

  if (done) {
    return (
      <div className="rounded-[3px] bg-success-soft px-5 py-6">
        <h3 className="font-display text-lg font-semibold text-success">
          {t.successTitle}
        </h3>
        <p className="mt-2 text-sm text-muted">{t.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label={t.fieldName}>
        <input
          name="displayName"
          defaultValue={defaultName}
          required
          maxLength={80}
          className={inputCls}
        />
      </Field>

      <Field label={t.fieldHeadline}>
        <input name="headline" maxLength={140} className={inputCls} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.fieldExpertise}>
          <input name="expertise" maxLength={160} className={inputCls} />
        </Field>
        <Field label={t.fieldCountry}>
          <select name="country" defaultValue="FR" className={inputCls}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {names.of(c) ?? c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={t.fieldWebsite}>
        <input
          name="website"
          type="url"
          inputMode="url"
          placeholder="https://"
          maxLength={200}
          className={inputCls}
        />
      </Field>

      <Field label={t.fieldBio} hint={t.bioHint}>
        <textarea
          name="bio"
          rows={6}
          minLength={80}
          required
          className={`${inputCls} resize-y`}
        />
      </Field>

      {error && <p className="text-sm text-danger">{error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-[3px] bg-primary px-8 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-deep disabled:opacity-50"
      >
        {isPending ? t.sending : t.submit}
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-[3px] border border-line bg-bg px-4 py-3 text-sm outline-none transition focus:border-primary";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-muted">{hint}</span>}
    </label>
  );
}
