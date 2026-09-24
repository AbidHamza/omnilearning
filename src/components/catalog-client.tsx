"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { Category, Course } from "@/lib/types";
import CourseCard from "./course-card";
import { SearchIcon } from "./icons";
import { useI18n } from "@/i18n/provider";
import { categoryName } from "@/i18n/category-name";
import { topicPhoto } from "@/lib/topic-images";

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

  const knownCat = categories.some((c) => c.label === initialCat) ? initialCat : "";
  const [q, setQ] = useState(initialQ);
  const [cat, setCat] = useState(knownCat);
  const [selLevels, setSelLevels] = useState<string[]>([]);
  const [selDur, setSelDur] = useState<string[]>([]);
  const [selPrice, setSelPrice] = useState<string[]>([]);

  // Keep the address shareable: the topic and the query live in the URL.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (cat) url.searchParams.set("cat", cat);
    else url.searchParams.delete("cat");
    if (q.trim()) url.searchParams.set("q", q.trim());
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }, [cat, q]);

  const toggle = (arr: string[], set: (v: string[]) => void, value: string) =>
    set(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);

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
      const matchPrice = !selPrice.length || selPrice.includes(isPaid ? "paid" : "free");
      const matchCat = !cat || c.category === cat;
      const matchDur =
        !selDur.length ||
        selDur.some((id) => {
          const d = durationDefs.find((x) => x.id === id)!;
          const min = "min" in d ? d.min : undefined;
          const max = "max" in d ? d.max : undefined;
          return (min === undefined || c.hours >= min) && (max === undefined || c.hours < max);
        });
      return matchQ && matchLevel && matchCat && matchDur && matchPrice;
    });
  }, [courses, q, selLevels, selDur, cat, selPrice]);

  const inTopic = cat ? courses.filter((c) => c.category === cat).length : 0;
  const filtersOn = selLevels.length + selDur.length + selPrice.length > 0 || q.trim() !== "";
  const clearAll = () => {
    setQ("");
    setSelLevels([]);
    setSelDur([]);
    setSelPrice([]);
  };

  const topicChips = (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div className="flex w-max gap-2 pb-1 sm:w-auto sm:flex-wrap">
        <button type="button" className="chip" aria-pressed={!cat} onClick={() => setCat("")}>
          {tc.filterAll}
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="chip"
            aria-pressed={cat === c.label}
            onClick={() => setCat(cat === c.label ? "" : c.label)}
          >
            {categoryName(t, c.label)}
          </button>
        ))}
      </div>
    </div>
  );

  // An empty topic, or an empty catalog: no apology, just the topics to browse.
  if (courses.length === 0 || (cat && inTopic === 0)) {
    const others = categories.filter((c) => c.label !== cat);
    return (
      <div className="container-page pb-20 pt-8 lg:pb-28 lg:pt-12">
        <h1 className="text-[2.2rem] leading-[1.05] text-ink sm:text-5xl">{t.nav.formations}</h1>
        <div className="mt-6">{topicChips}</div>

        {others.length > 0 && (
          <section className="mt-10">
            <div className="wall columns-2 sm:columns-3 lg:columns-5">
              {others.map((c, i) => {
                const ph = topicPhoto(c.label);
                return (
                  <button key={c.id} type="button" onClick={() => setCat(c.label)} className="group block w-full text-start">
                    <span
                      className="block overflow-hidden rounded-[16px] bg-surface-2"
                      style={{ aspectRatio: i % 3 === 1 ? "4/5" : i % 3 === 2 ? "1/1" : "3/4" }}
                    >
                      <Image
                        src={ph.src}
                        width={ph.w}
                        height={ph.h}
                        alt=""
                        sizes="(min-width:1024px) 240px, (min-width:640px) 33vw, 50vw"
                        className="tile-img h-full w-full object-cover"
                      />
                    </span>
                    <span className="block px-1 pb-1 pt-2 font-display text-[15px] text-ink">
                      {categoryName(t, c.label)}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </div>
    );
  }

  const label = q.trim() || (cat ? categoryName(t, cat) : tc.defaultLabel);

  return (
    <div className="container-page pb-20 pt-8 lg:pb-28 lg:pt-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h1 className="text-[2.2rem] leading-[1.05] text-ink sm:text-5xl">{t.nav.formations}</h1>
        <div role="search" className="search-pill w-full max-w-md">
          <SearchIcon width={18} height={18} className="shrink-0 text-muted" aria-hidden="true" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={tc.searchPlaceholder}
            aria-label={tc.searchPlaceholder}
          />
        </div>
      </div>

      <div className="mt-6">{topicChips}</div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {levelValues.map((l) => (
          <button
            key={l}
            type="button"
            className="chip"
            aria-pressed={selLevels.includes(l)}
            onClick={() => toggle(selLevels, setSelLevels, l)}
          >
            {levelLabels[l]}
          </button>
        ))}
        <span aria-hidden="true" className="mx-1 h-5 w-px bg-line" />
        {["free", "paid"].map((p) => (
          <button
            key={p}
            type="button"
            className="chip"
            aria-pressed={selPrice.includes(p)}
            onClick={() => toggle(selPrice, setSelPrice, p)}
          >
            {priceLabels[p]}
          </button>
        ))}
        <span aria-hidden="true" className="mx-1 h-5 w-px bg-line" />
        {durationDefs.map((d) => (
          <button
            key={d.id}
            type="button"
            className="chip"
            aria-pressed={selDur.includes(d.id)}
            onClick={() => toggle(selDur, setSelDur, d.id)}
          >
            {durationLabels[d.id]}
          </button>
        ))}
        {filtersOn && (
          <button type="button" onClick={clearAll} className="ms-1 text-sm text-muted underline underline-offset-4 hover:text-ink">
            {tc.clearFilters}
          </button>
        )}
      </div>

      <p className="mt-8 text-sm text-muted">
        {filtered.length} {tc.resultsFor} «&nbsp;{label}&nbsp;»
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-[24px] bg-surface-2 px-6 py-14 text-center">
          <p className="text-[16px] text-ink">{tc.empty}</p>
          <button type="button" onClick={clearAll} className="btn-soft mt-5">
            {tc.clearFilters}
          </button>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-4 gap-y-10">
          {filtered.map((c) => (
            <CourseCard
              key={c.slug}
              course={{ ...c, category: categoryName(t, c.category) }}
              labels={t.card}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  );
}
