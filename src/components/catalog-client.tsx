"use client";

import { useMemo, useState } from "react";
import type { Category, Course } from "@/lib/types";
import CourseCard from "./course-card";
import { ChevronUp, SearchIcon } from "./icons";

const levels = ["Débutant", "Intermédiaire", "Avancé"];
const durations = [
  { id: "lt1", label: "Moins de 1 heure", max: 1 },
  { id: "1-3", label: "Entre 1 heure et 3 heures", min: 1, max: 3 },
  { id: "3-6", label: "Entre 3 heures et 6 heures", min: 3, max: 6 },
  { id: "gt6", label: "Plus de 6 heures", min: 6 },
];

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
  const [q, setQ] = useState(initialQ);
  const [selLevels, setSelLevels] = useState<string[]>([]);
  const [selDur, setSelDur] = useState<string[]>([]);
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
      const matchCat = !selCats.length || selCats.includes(c.category);
      const matchDur =
        !selDur.length ||
        selDur.some((id) => {
          const d = durations.find((x) => x.id === id)!;
          return (
            (d.min === undefined || c.hours >= d.min) &&
            (d.max === undefined || c.hours < d.max)
          );
        });
      return matchQ && matchLevel && matchCat && matchDur;
    });
  }, [courses, q, selLevels, selDur, selCats]);

  const label = q || initialCat || "toutes les formations";

  return (
    <div className="container-page grid gap-10 py-10 lg:grid-cols-[240px_1fr]">
      {/* Sidebar filters */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="relative mb-7 lg:hidden">
          <SearchIcon
            width={17}
            height={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-soft"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Chercher une formation"
            className="h-11 w-full rounded-full border border-line bg-surface pl-11 pr-4 text-sm outline-none focus:border-primary focus:bg-bg"
          />
        </div>

        <FilterGroup title="Niveau de difficulté">
          {levels.map((l) => (
            <Check
              key={l}
              label={l}
              checked={selLevels.includes(l)}
              onChange={() => toggle(selLevels, setSelLevels, l)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Durée de vidéo">
          {durations.map((d) => (
            <Check
              key={d.id}
              label={d.label}
              checked={selDur.includes(d.id)}
              onChange={() => toggle(selDur, setSelDur, d.id)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Catégorie">
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
        <h1 className="text-2xl font-bold tracking-tight">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""} pour{" "}
          <span className="text-primary-dark">«&nbsp;{label}&nbsp;»</span>
        </h1>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-line p-12 text-center text-muted">
            Aucune formation ne correspond à vos filtres.
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((c) => (
              <CourseCard key={c.slug} course={c} />
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
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border border-line bg-bg transition peer-checked:border-primary peer-checked:bg-primary">
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6 9 17l-5-5"
              stroke="white"
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
