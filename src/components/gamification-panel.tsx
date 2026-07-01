import Link from "next/link";
import type { GamificationView } from "@/lib/gamification";

// Icônes de badge : jeu de pictos simples et universels (rendus partout).
const badgeIcon: Record<string, string> = {
  flame: "🔥",
  trophy: "🏆",
  target: "🎯",
  medal: "🥇",
  rocket: "🚀",
  book: "📚",
  brain: "🧠",
  star: "⭐",
  bolt: "⚡",
  shield: "🛡️",
  compass: "🧭",
  seedling: "🌱",
};

const tierRing: Record<string, string> = {
  bronze: "ring-amber-700/30 bg-amber-50",
  argent: "ring-slate-400/40 bg-slate-50",
  or: "ring-yellow-500/40 bg-yellow-50",
};

export default function GamificationPanel({
  data,
  leaderboardHref,
}: {
  data: GamificationView;
  leaderboardHref: string;
}) {
  const { level, currentStreak, longestStreak, badges, lockedBadges } = data;

  return (
    <section className="rounded-[var(--radius-card)] bg-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm text-muted">Votre progression</h2>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-3xl font-extrabold text-primary">
              Niveau {level.level}
            </span>
            <span className="text-sm text-muted">· {data.xp} XP</span>
          </div>
        </div>
        <div className="text-end">
          <div className="font-display text-2xl font-bold">
            {currentStreak} <span className="text-base">🔥</span>
          </div>
          <p className="text-xs text-muted">
            {currentStreak <= 1 ? "jour d'affilée" : "jours d'affilée"}
          </p>
        </div>
      </div>

      {/* Barre de niveau */}
      <div className="mt-4">
        <div className="h-2.5 overflow-hidden rounded-full bg-bg">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${level.pct}%` }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-xs text-muted">
          <span>{level.intoLevel} / {level.levelSpan} XP</span>
          <span>
            Plus que {Math.max(0, level.levelCeil - data.xp)} XP pour le niveau{" "}
            {level.level + 1}
          </span>
        </div>
      </div>

      {/* Badges obtenus */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">
            Badges {badges.length > 0 && <span className="text-muted">· {badges.length}</span>}
          </h3>
          <Link
            href={leaderboardHref}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Voir le classement
          </Link>
        </div>

        {badges.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            Terminez une leçon ou réussissez un quiz pour décrocher votre premier badge.
          </p>
        ) : (
          <div className="mt-3 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <div
                key={b.slug}
                title={b.description}
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ring-1 ${
                  tierRing[b.tier] ?? tierRing.bronze
                }`}
              >
                <span className="text-base">{badgeIcon[b.icon] ?? "⭐"}</span>
                <span className="font-medium text-ink">{b.label}</span>
              </div>
            ))}
          </div>
        )}

        {lockedBadges.length > 0 && (
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-muted-soft">À débloquer</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {lockedBadges.slice(0, 6).map((b) => (
                <div
                  key={b.slug}
                  title={b.description}
                  className="flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1.5 text-sm opacity-60"
                >
                  <span className="text-base grayscale">{badgeIcon[b.icon] ?? "⭐"}</span>
                  <span className="text-muted">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {longestStreak > currentStreak && (
        <p className="mt-4 text-xs text-muted">
          Meilleure série : {longestStreak} jours.
        </p>
      )}
    </section>
  );
}
