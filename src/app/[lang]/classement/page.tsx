import Link from "next/link";
import { isLocale, defaultLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { requireRole } from "@/lib/dal";
import { auth } from "@/lib/auth";
import { getLeaderboard } from "@/lib/gamification";
import { formatNumber } from "@/lib/intl";
import type { Metadata } from "next";

// Écran privé : derrière une session, sans contenu public. Il n'a rien à faire
// dans un index, et une canonique n'aurait aucun sens sur une page dont le
// contenu change avec le compte connecté.
export const metadata: Metadata = { robots: { index: false, follow: false } };


const medal = ["🥇", "🥈", "🥉"];

export default async function LeaderboardPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const t = (await getDictionary(locale)).leaderboard;

  await requireRole(locale, ["etudiant", "formateur", "admin"]);
  const session = await auth();
  const userId = session?.user?.id ?? null;
  const rows = await getLeaderboard(userId, 25);

  return (
    <div className="container-page py-10">
      <p className="text-sm font-medium text-primary">{t.kicker}</p>
      <h1 className="mt-1 font-display text-4xl tracking-tight">
        {t.titleLead} <span className="text-primary">{t.titleAccent}</span>
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted">{t.intro}</p>

      <section className="mt-8 overflow-hidden rounded-[var(--radius-card)] bg-surface">
        {rows.length === 0 ? (
          <p className="p-6 text-sm text-muted">
            {t.emptyText}{" "}
            <Link
              href={localePath(locale, "/formations")}
              className="font-semibold text-primary hover:underline"
            >
              {t.emptyLink}
            </Link>
            .
          </p>
        ) : (
          <ul className="divide-y divide-line">
            {rows.map((r) => (
              <li
                key={r.rank}
                className={`flex items-center gap-4 px-5 py-3.5 ${
                  r.isCurrentUser ? "bg-primary-soft" : ""
                }`}
              >
                <span className="w-8 shrink-0 text-center font-display text-lg font-semibold text-muted">
                  {r.rank <= 3 ? medal[r.rank - 1] : r.rank}
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-primary-dark">
                  {r.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">
                    {r.name}
                    {r.isCurrentUser && (
                      <span className="ms-2 text-xs font-normal text-primary">
                        {t.you}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted">
                    {t.levelPrefix} {r.level}
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-semibold text-primary">
                  {formatNumber(r.xp, locale)}
                  <span className="ms-1 text-xs font-normal text-muted">XP</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-6">
        <Link
          href={localePath(locale, "/tableau-de-bord")}
          className="text-sm font-semibold text-primary hover:underline"
        >
          ← {t.back}
        </Link>
      </div>
    </div>
  );
}
