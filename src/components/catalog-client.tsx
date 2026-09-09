"use client";

import { useMemo, useState } from "react";
import type { Category, Course } from "@/lib/types";
import CourseCard from "./course-card";
import { ChevronUp, SearchIcon } from "./icons";
import { useI18n } from "@/i18n/provider";

// Les valeurs des niveaux correspondent aux données (fr) ; seul l'affichage est traduit.
const levelValues = ["Débutant", "Intermédiaire", "Avancé"] as const;
const durationDefs = [
  { id: "lt1", max: 1 },
  { id: "1-3", min: 1, max: 3 },
  { id: "3-6", min: 3, max: 6 },
  { id: "gt6", min: 6 },
] as const;

export default function CatalogClient({
  courses,
  categories,
  initialQ,
  initialCat,
}: {
  courses: Course[];
  categories: Category[];
  initialQ: string;
  initialCat: string;
}) {
  const { locale, dict: t } = useI18n();
  const tc = t.catalog;

  const levelLabels: Record<string, string> = {
    Débutant: tc.levelBeginner,
    Intermédiaire: tc.levelIntermediate,
    Avancé: tc.levelAdvanced,
  };
  // Gratuit / payant : le filtre le plus demandé d'un catalogue mixte, et le
  // seul qui se lise directement sur la fiche cours (accessType).
  const priceLabels: Record<string, string> = {
    free: tc.priceFree,
    paid: tc.pricePaid,
  };
  const durationLabels: Record<string, string> = {
    lt1: tc.durLt1,
    "1-3": tc.dur13,
    "3-6": tc.dur36,
    gt6: tc.durGt6,
  };

  const [q, setQ] = useState(initialQ);
  const [selLevels, setSelLevels] = useState<string[]>([]);
  const [selDur, setSelDur] = useState<string[]>([]);
  const [selPrice, setSelPrice] = useState<string[]>([]);
  const [selCats, setSelCats] = useState<string[]>(
    initialCat ? [initialCat] : []
  );

  const toggle = (
    arr: string[],
    set: (v: string[]) => void,
    value: string
  ) => set(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return courses.filter((c) => {
      const matchQ =
        !needle ||
        c.title.toLowerCase().includes(needle) ||
        c.tagline.toLowerCase().includes(needle) ||
        c.category.toLowerCase().includes(needle);
      const matchLevel = !selLevels.length || selLevels.includes(c.level);
      const isPaid = c.accessType === "PAID" && (c.priceCents ?? 0) > 0;
      const matchPrice =
        !selPrice.length || selPrice.includes(isPaid ? "paid" : "free");
      const matchCat = !selCats.length || selCats.includes(c.category);
      const matchDur =
        !selDur.length ||
        selDur.some((id) => {
          const d = durationDefs.find((x) => x.id === id)!;
          const min = "min" in d ? d.min : undefined;
          const max = "max" in d ? d.max : undefined;
          return (
            (min === undefined || c.hours >= min) &&
            (max === undefined || c.hours < max)
          );
        });
      return matchQ && matchLevel && matchCat && matchDur && matchPrice;
    });
  }, [courses, q, selLevels, selDur, selCats, selPrice]);

  const label = q || initialCat || tc.defaultLabel;

  return (
    <div className="container-page grid gap-10 py-10 lg:grid-cols-[240px_1fr]">
      {/* Sidebar filters */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative mb-7 lg:hidden">
          <SearchIcon
            width={17}
            height={17}
            className="pointer-events-none absolute inset-inline-start-4 top-1/2 -translate-y-1/2 text-muted-soft"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={tc.searchPlaceholder}
            aria-label={tc.searchPlaceholder}
            className="h-11 w-full rounded-[3px] border border-line bg-surface ps-11 pe-4 text-sm outline-none focus:border-primary focus:bg-bg"
          />
        </div>

        <FilterGroup title={tc.filterLevel}>
          {levelValues.map((l) => (
            <Check
              key={l}
              label={levelLabels[l]}
              checked={selLevels.includes(l)}
              onChange={() => toggle(selLevels, setSelLevels, l)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title={tc.filterPrice}>
          {["free", "paid"].map((p) => (
            <Check
              key={p}
              label={priceLabels[p]}
              checked={selPrice.includes(p)}
              onChange={() => toggle(selPrice, setSelPrice, p)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title={tc.filterDuration}>
          {durationDefs.map((d) => (
            <Check
              key={d.id}
              label={durationLabels[d.id]}
              checked={selDur.includes(d.id)}
              onChange={() => toggle(selDur, setSelDur, d.id)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title={tc.filterCategory}>
          {categories.map((c) => (
            <Check
              key={c.id}
              label={c.label}
              checked={selCats.includes(c.label)}
              onChange={() => toggle(selCats, setSelCats, c.label)}
            />
          ))}
        </FilterGroup>
      </aside>

      {/* Results */}
      <div>
        <p className="mb-2 font-mono text-xs text-muted-soft">
          <span className="text-primary">$</span> omnilearn ls -la ./formations
        </p>
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-[2.1rem]">
          {filtered.length} {tc.resultsFor}{" "}
          <span className="text-primary">«&nbsp;{label}&nbsp;»</span>
        </h1>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[6px] border border-dashed border-line p-12 text-center font-mono text-muted">
            {tc.empty}
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((c) => (
              <CourseCard key={c.slug} course={c} labels={t.card} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-line py-5 first:pt-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-display text-[15px] font-bold">{title}</span>
        <ChevronUp
          width={16}
          height={16}
          className={`text-muted transition-transform ${open ? "" : "rotate-180"}`}
        />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-muted">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-[3px] border border-line bg-bg transition peer-checked:border-primary peer-checked:bg-primary">
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6 9 17l-5-5"
              stroke="#04130a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className={checked ? "text-ink" : ""}>{label}</span>
    </label>
  );
}
