"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useI18n } from "@/i18n/provider";
import { formatPrice } from "@/lib/pricing";
import type { InstructorPayouts } from "@/lib/dal";
import {
  startConnectOnboardingAction,
  openConnectDashboardAction,
  refreshConnectStatusAction,
} from "@/lib/actions/connect";
import { CheckIcon, ClockIcon, XIcon } from "@/components/icons";

/**
 * Panneau « revenus et versements » du tableau de bord formateur.
 *
 * Les montants viennent des lignes de vente figées à l'achat, jamais d'un
 * recalcul depuis le pourcentage courant : changer le partage demain ne
 * réécrit pas les ventes d'hier.
 *
 * Le bouton d'ouverture de compte redirige vers Stripe, donc l'action ne rend
 * la main qu'en cas d'échec — un retour sans erreur signifie que la
 * redirection est partie.
 */
export default function PayoutsPanel({
  data,
  justBack,
}: {
  data: InstructorPayouts;
  justBack: boolean;
}) {
  const { locale, dict } = useI18n();
  const p = dict.instructor.payouts;
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const refreshed = useRef(false);

  // Au retour de Stripe, le webhook `account.updated` n'a pas forcément encore
  // atterri : on relit le compte une fois pour ne pas afficher un état périmé.
  useEffect(() => {
    if (!justBack || refreshed.current) return;
    refreshed.current = true;
    startTransition(async () => {
      await refreshConnectStatusAction(locale);
    });
  }, [justBack, locale]);

  type ActionResult = { ok: false; error: string } | { ok: true };
  function run(action: (l: typeof locale) => Promise<ActionResult>) {
    setError(null);
    startTransition(async () => {
      const res = await action(locale);
      if (res.ok === false) {
        const key = res.error as keyof typeof p.errors;
        setError(p.errors[key] ?? res.error);
      }
    });
  }

  const money = (cents: number) => formatPrice(cents, data.currency, locale);

  const stageText: Record<InstructorPayouts["stage"], string> = {
    off: p.stageOff,
    none: p.stageNone,
    pending: p.stagePending,
    rejected: p.stageRejected,
    todo: p.stageTodo,
    incomplete: p.stageIncomplete,
    ready: p.stageReady,
  };

  const cta =
    data.stage === "todo"
      ? { label: p.ctaStart, fn: startConnectOnboardingAction }
      : data.stage === "incomplete"
        ? { label: p.ctaResume, fn: startConnectOnboardingAction }
        : data.stage === "ready"
          ? { label: p.ctaDashboard, fn: openConnectDashboardAction }
          : null;

  return (
    <section className="mt-6 rounded-[var(--radius-card)] bg-surface p-6 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-sm font-semibold text-muted">{p.title}</h2>
        <span className="text-xs text-muted">
          {p.shareLabel} · {data.revenueSharePct} %
        </span>
      </div>

      {justBack && (
        <p className="mt-4 rounded-xl bg-bg px-4 py-3 text-sm text-muted">
          {p.backFromStripe}
        </p>
      )}

      {/* Chiffres */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: p.earned, value: money(data.earnedCents), strong: true },
          { label: p.gross, value: money(data.grossCents) },
          { label: p.platform, value: money(data.platformCents) },
          { label: p.sales, value: String(data.salesCount) },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-bg px-4 py-4">
            <div
              className={`font-display text-2xl font-extrabold ${s.strong ? "text-primary" : ""}`}
            >
              {s.value}
            </div>
            <div className="mt-1 text-xs text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      {data.refundedCount > 0 && (
        <p className="mt-3 text-xs text-muted">
          {p.refunded.replace("{n}", String(data.refundedCount))}
        </p>
      )}

      {/* État du compte de versement */}
      <div className="mt-6 rounded-xl bg-bg px-4 py-4">
        <p className="text-sm">{stageText[data.stage]}</p>

        {data.hasAccount && (
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge on={data.chargesEnabled} on_={p.chargesOn} off={p.chargesOff} />
            <Badge on={data.payoutsEnabled} on_={p.payoutsOn} off={p.payoutsOff} />
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {cta && (
            <button
              onClick={() => run(cta.fn)}
              disabled={isPending}
              className="rounded-[3px] bg-primary px-4 py-2 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep disabled:opacity-50"
            >
              {isPending ? p.pending : cta.label}
            </button>
          )}
          {data.hasAccount && (
            <button
              onClick={() => run(refreshConnectStatusAction)}
              disabled={isPending}
              className="rounded-full border border-line px-4 py-2 text-sm font-semibold transition hover:border-primary disabled:opacity-50"
            >
              {p.ctaRefresh}
            </button>
          )}
        </div>

        {error && (
          <p className="mt-3 flex items-center gap-1.5 text-sm text-danger">
            <XIcon width={14} height={14} />
            {error}
          </p>
        )}

        <p className="mt-4 text-xs text-muted-soft">{p.note}</p>
      </div>

      {/* Dernières ventes */}
      {data.recent.length === 0 ? (
        <p className="mt-6 rounded-xl bg-bg px-4 py-3.5 text-sm text-muted">
          {p.empty}
        </p>
      ) : (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-muted">{p.recentTitle}</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold text-muted">
                  <th className="pb-3 pr-4 font-semibold">{p.colCourse}</th>
                  <th className="pb-3 pr-4 font-semibold">{p.colDate}</th>
                  <th className="pb-3 pr-4 font-semibold">{p.colAmount}</th>
                  <th className="pb-3 font-semibold">{p.colEarned}</th>
                </tr>
              </thead>
              <tbody>
                {data.recent.map((r, idx) => (
                  <tr
                    key={`${r.title}-${r.date}-${idx}`}
                    className="border-t border-line align-middle"
                  >
                    <td className="py-3.5 pr-4 font-semibold">{r.title}</td>
                    <td className="py-3.5 pr-4 text-muted">{r.date}</td>
                    <td className="py-3.5 pr-4">{money(r.amountCents)}</td>
                    <td className="py-3.5 font-semibold text-primary">
                      {money(r.earnedCents)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

function Badge({ on, on_, off }: { on: boolean; on_: string; off: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        on ? "bg-success-soft text-success" : "bg-warning/15 text-warning"
      }`}
    >
      {on ? <CheckIcon width={12} height={12} /> : <ClockIcon width={12} height={12} />}
      {on ? on_ : off}
    </span>
  );
}
