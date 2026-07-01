import Link from "next/link";
import { isLocale, defaultLocale, localePath } from "@/i18n/config";
import { requireRole } from "@/lib/dal";
import { auth } from "@/lib/auth";
import { getLeaderboard } from "@/lib/gamification";

const medal = ["🥇", "🥈", "🥉"];

export default async function LeaderboardPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  await requireRole(locale, ["etudiant", "formateur", "admin"]);
  const session = await auth();
  const userId = session?.user?.id ?? null;
  const rows = await getLeaderboard(userId, 25);

  return (
    <div className="container-page py-10">
      <p className="font-mono text-xs text-muted-soft">
        <span className="text-primary">$</span> top — apprenants
      </p>
      <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight">
        Le <span className="text-primary">classement</span>
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        On met en avant l&apos;effort, pas la performance brute. Chaque leçon
        terminée et chaque quiz réussi rapporte de l&apos;XP. Revenez chaque jour
        pour entretenir votre série.
      </p>

      <section className="mt-8 overflow-hidden rounded-[var(--radius-card)] bg-surface">
        {rows.length === 0 ? (
          <p className="p-6 text-sm text-muted">
            Personne n&apos;a encore gagné d&apos;XP. Soyez le premier :{" "}
            <Link
              href={localePath(locale, "/formations")}
              className="font-semibold text-primary hover:underline"
            >
              choisissez une formation
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
                <span className="w-8 shrink-0 text-center font-display text-lg font-bold text-muted">
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
                        vous
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted">Niveau {r.level}</p>
                </div>
                <span className="shrink-0 font-display text-lg font-bold text-primary">
                  {r.xp.toLocaleString("fr-FR")}
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
          ← Retour au tableau de bord
        </Link>
      </div>
    </div>
  );
}
