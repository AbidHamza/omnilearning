import Link from "next/link";
import type { ReactElement, SVGProps } from "react";
import type { GamificationView } from "@/lib/gamification";
import type { Dict } from "@/i18n/dictionaries/fr";
import {
  FlameIcon,
  TrophyIcon,
  TargetIcon,
  AwardIcon,
  RocketIcon,
  DocIcon,
  BrainIcon,
  StarIcon,
  BoltIcon,
  ShieldIcon,
  CompassIcon,
  SeedlingIcon,
} from "./icons";

// Icônes de badge : jeu de pictos SVG maison (pas d'emoji, rendu identique partout).
const badgeIcon: Record<string, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
  flame: FlameIcon,
  trophy: TrophyIcon,
  target: TargetIcon,
  medal: AwardIcon,
  rocket: RocketIcon,
  book: DocIcon,
  brain: BrainIcon,
  star: StarIcon,
  bolt: BoltIcon,
  shield: ShieldIcon,
  compass: CompassIcon,
  seedling: SeedlingIcon,
};

const tierRing: Record<string, string> = {
  bronze: "ring-amber-700/30 bg-amber-50",
  argent: "ring-slate-400/40 bg-slate-50",
  or: "ring-yellow-500/40 bg-yellow-50",
};

export default function GamificationPanel({
  data,
  leaderboardHref,
  dict,
}: {
  data: GamificationView;
  leaderboardHref: string;
  dict: Dict;
}) {
  const { level, currentStreak, longestStreak, badges, lockedBadges } = data;
  const g = dict.gamification;

  return (
    <section className="rounded-[var(--radius-card)] bg-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm text-muted">{dict.dashboard.progressTitle}</h2>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-3xl text-primary">
              {dict.course.levelLabel} {level.level}
            </span>
            <span className="text-sm text-muted">· {data.xp} XP</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-end">
          <FlameIcon className="h-5 w-5 text-primary" />
          <div>
            <div className="font-display text-2xl font-semibold leading-none">
              {currentStreak}
            </div>
            <p className="text-xs text-muted">
              {currentStreak <= 1 ? g.dayStreak : g.daysStreak}
            </p>
          </div>
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
            {g.xpToNext
              .replace("{xp}", String(Math.max(0, level.levelCeil - data.xp)))
              .replace("{level}", String(level.level + 1))}
          </span>
        </div>
      </div>

      {/* Badges obtenus */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">
            {g.badges}{" "}
            {badges.length > 0 && <span className="text-muted">· {badges.length}</span>}
          </h3>
          <Link
            href={leaderboardHref}
            className="text-xs font-semibold text-primary hover:underline"
          >
            {g.seeLeaderboard}
          </Link>
        </div>

        {badges.length === 0 ? (
          <p className="mt-3 text-sm text-muted">{g.noBadges}</p>
        ) : (
          <div className="mt-3 flex flex-wrap gap-2.5">
            {badges.map((b) => {
              const Icon = badgeIcon[b.icon] ?? StarIcon;
              return (
                <div
                  key={b.slug}
                  title={b.description}
                  className={`flex items-center gap-2 rounded-[16px] px-3 py-1.5 text-sm ring-1 ${
                    tierRing[b.tier] ?? tierRing.bronze
                  }`}
                >
                  <Icon className="h-4 w-4 text-ink" />
                  <span className="font-medium text-ink">{b.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {lockedBadges.length > 0 && (
          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-muted-soft">{g.toUnlock}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {lockedBadges.slice(0, 6).map((b) => {
                const Icon = badgeIcon[b.icon] ?? StarIcon;
                return (
                  <div
                    key={b.slug}
                    title={b.description}
                    className="flex items-center gap-2 rounded-[16px] border border-line bg-bg px-3 py-1.5 text-sm opacity-60"
                  >
                    <Icon className="h-4 w-4 text-muted" />
                    <span className="text-muted">{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {longestStreak > currentStreak && (
        <p className="mt-4 text-xs text-muted">
          {g.bestStreak.replace("{n}", String(longestStreak))}
        </p>
      )}
    </section>
  );
}
