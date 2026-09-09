"use client";

import { useState } from "react";
import { categories } from "@/lib/data";
import { UploadIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { useLocaleRouter } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";
import { saveDraftAction } from "@/lib/actions/draft";
import { DEFAULT_REVENUE_SHARE_PCT } from "@/lib/pricing";

interface Upload {
  field: string;
  url: string;
  name: string;
}

const labelCls = "block text-sm font-semibold";
const inputCls =
  "mt-2 w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm outline-none transition focus:border-primary";
const areaCls = `${inputCls} min-h-28 resize-y`;

interface Activity {
  id: number;
  type: string;
  instruction: string;
}

let uid = 1;

export default function CreerFormationClient() {
  const c = useT().create;
  const steps = c.steps;
  const router = useLocaleRouter();
  const [step, setStep] = useState(0);

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [skills, setSkills] = useState("");
  const [prereq, setPrereq] = useState("");
  // Le formateur saisit des euros, la base stocke des centimes. La conversion
  // se fait une seule fois, ici, au moment de l'envoi.
  const [priceEuros, setPriceEuros] = useState("");

  const [structure, setStructure] = useState("");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function addUpload(u: Upload) {
    // Un seul fichier par champ (image/vidéo) ; ressources cumulables.
    setUploads((arr) =>
      u.field === "resources" ? [...arr, u] : [...arr.filter((x) => x.field !== u.field), u],
    );
  }

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function prev() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitDraft() {
    setSubmitting(true);
    setError(null);
    const res = await saveDraftAction({
      category,
      name,
      description,
      level,
      skills,
      prerequisites: prereq,
      structure,
      activities: activities.map((a) => ({ type: a.type, instruction: a.instruction })),
      uploads,
      priceCents: Math.round((Number(priceEuros.replace(",", ".")) || 0) * 100),
      submit: true,
    });
    setSubmitting(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    router.push("/tableau-de-bord");
    router.refresh();
  }

  return (
    <div className="container-page grid gap-12 py-12 lg:grid-cols-[260px_1fr]">
      {/* Stepper */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <ol className="space-y-6">
          {steps.map((s, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <li key={s} className="flex items-start gap-3">
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-bold transition ${
                    active
                      ? "bg-primary text-[#04130a]"
                      : done
                        ? "bg-brand text-ink"
                        : "bg-surface text-muted"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`pt-0.5 text-sm ${
                    active ? "font-bold text-ink" : "text-muted"
                  }`}
                >
                  {s}
                </span>
              </li>
            );
          })}
        </ol>
      </aside>

      {/* Contenu */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {c.title}
        </h1>

        {step === 0 && (
          <div className="mt-8 space-y-8">
            <section className="space-y-5">
              <h2 className="font-display text-lg font-bold">
                {c.generalTitle}
              </h2>
              <div>
                <label className={labelCls}>{c.categoryLabel}</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputCls}
                >
                  <option value="">{c.categoryPlaceholder}</option>
                  {categories.map((cat) => (
                    <option key={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>{c.nameLabel}</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>{c.descLabel}</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={c.descPlaceholder}
                  className={areaCls}
                />
              </div>
              <div>
                <label className={labelCls}>{c.levelLabel}</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className={inputCls}
                >
                  <option value="">{c.levelPlaceholder}</option>
                  <option>{c.levelBeginner}</option>
                  <option>{c.levelIntermediate}</option>
                  <option>{c.levelAdvanced}</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>{c.priceLabel}</label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  inputMode="decimal"
                  value={priceEuros}
                  onChange={(e) => setPriceEuros(e.target.value)}
                  placeholder={c.pricePlaceholder}
                  className={inputCls}
                />
                <p className="mt-1.5 text-xs text-muted">
                  {c.priceHint.replace("{pct}", String(DEFAULT_REVENUE_SHARE_PCT))}
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="font-display text-lg font-bold">
                {c.objectivesTitle}
              </h2>
              <div>
                <label className={labelCls}>{c.skillsLabel}</label>
                <textarea
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder={c.skillsPlaceholder}
                  className={areaCls}
                />
              </div>
              <div>
                <label className={labelCls}>{c.prereqLabel}</label>
                <textarea
                  value={prereq}
                  onChange={(e) => setPrereq(e.target.value)}
                  placeholder={c.prereqPlaceholder}
                  className={areaCls}
                />
              </div>
            </section>
          </div>
        )}

        {step === 1 && (
          <div className="mt-8 space-y-8">
            <section className="space-y-5">
              <h2 className="font-display text-lg font-bold">
                {c.contentTitle}
              </h2>
              <div>
                <label className={labelCls}>{c.structureLabel}</label>
                <textarea
                  value={structure}
                  onChange={(e) => setStructure(e.target.value)}
                  placeholder={c.structurePlaceholder}
                  className={areaCls}
                />
              </div>
              <div>
                <label className={labelCls}>{c.resourcesLabel}</label>
                <UploadZone
                  field="resources"
                  hint={c.resourcesHint}
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
              <div>
                <label className={labelCls}>{c.activitiesLabel}</label>
                {activities.map((a) => (
                  <div
                    key={a.id}
                    className="mt-3 space-y-3 rounded-xl border border-line p-4"
                  >
                    <div className="flex items-center gap-2">
                      <select
                        value={a.type}
                        onChange={(e) =>
                          setActivities((arr) =>
                            arr.map((x) =>
                              x.id === a.id ? { ...x, type: e.target.value } : x
                            )
                          )
                        }
                        className="flex-1 rounded-lg border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-primary"
                      >
                        <option value="">{c.activityTypePlaceholder}</option>
                        <option>{c.activityQuiz}</option>
                        <option>{c.activityExercise}</option>
                        <option>{c.activityCase}</option>
                      </select>
                      <button
                        type="button"
                        onClick={() =>
                          setActivities((arr) => arr.filter((x) => x.id !== a.id))
                        }
                        className="grid h-9 w-9 place-items-center rounded-lg text-muted transition hover:bg-surface hover:text-danger"
                        aria-label={c.removeActivity}
                      >
                        <TrashIcon width={16} height={16} />
                      </button>
                    </div>
                    <textarea
                      value={a.instruction}
                      onChange={(e) =>
                        setActivities((arr) =>
                          arr.map((x) =>
                            x.id === a.id
                              ? { ...x, instruction: e.target.value }
                              : x
                          )
                        )
                      }
                      placeholder={c.activityInstructionPlaceholder}
                      className="w-full resize-y rounded-lg border border-line bg-bg px-3 py-2 text-sm outline-none focus:border-primary"
                      rows={3}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setActivities((arr) => [
                      ...arr,
                      { id: uid++, type: "", instruction: "" },
                    ])
                  }
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary-dark"
                >
                  <PlusIcon width={15} height={15} />
                  {c.addActivity}
                </button>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="font-display text-lg font-bold">
                {c.visualTitle}
              </h2>
              <div>
                <label className={labelCls}>{c.coverLabel}</label>
                <UploadZone
                  field="cover"
                  title={c.uploadImage}
                  hint={c.imageHint}
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
              <div>
                <label className={labelCls}>{c.videoLabel}</label>
                <UploadZone
                  field="video"
                  title={c.uploadVideo}
                  hint={c.videoHint}
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
            </section>
          </div>
        )}

        {step === 2 && (
          <div className="mt-8 space-y-6">
            <h2 className="font-display text-lg font-bold">{c.recapTitle}</h2>
            <dl className="divide-y divide-line rounded-[var(--radius-card)] border border-line">
              <Recap label={c.recapCategory} value={category} />
              <Recap label={c.recapName} value={name} />
              <Recap label={c.recapLevel} value={level} />
              <Recap
                label={c.recapPrice}
                value={
                  Number(priceEuros.replace(",", ".")) > 0
                    ? `${priceEuros} EUR`
                    : c.priceFree
                }
              />
              <Recap label={c.recapDesc} value={description} />
              <Recap label={c.recapSkills} value={skills} />
              <Recap label={c.recapPrereq} value={prereq} />
              <Recap label={c.recapStructure} value={structure} />
              <Recap
                label={c.recapActivities}
                value={
                  activities.length
                    ? c.activitiesCount.replace("{n}", String(activities.length))
                    : ""
                }
              />
            </dl>
            <p className="rounded-xl bg-brand-band/60 p-4 text-sm text-muted">
              {c.validationNote}
            </p>
            {error && <p className="text-sm font-medium text-danger">{error}</p>}
          </div>
        )}

        {/* Actions */}
        <div className="mt-10 flex items-center justify-end gap-3">
          {step === 0 ? (
            <button
              type="button"
              onClick={() => router.push("/tableau-de-bord")}
              className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface hover:text-danger"
            >
              {c.delete}
            </button>
          ) : (
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface"
            >
              {c.prevStep}
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep"
            >
              {c.nextStep}
            </button>
          ) : (
            <button
              type="button"
              onClick={submitDraft}
              disabled={submitting}
              className="rounded-[3px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#04130a] transition hover:bg-primary-deep disabled:opacity-60"
            >
              {c.submit}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function UploadZone({
  field,
  title,
  hint,
  uploads,
  onUploaded,
}: {
  field: string;
  title?: string;
  hint: string;
  uploads: Upload[];
  onUploaded: (u: Upload) => void;
}) {
  const c = useT().create;
  const zoneTitle = title ?? c.dropHint;
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const mine = uploads.filter((u) => u.field === field);

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr(null);
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? c.uploadError);
      } else {
        onUploaded({ field, url: data.url, name: data.name });
      }
    } catch {
      setErr(c.uploadError);
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  return (
    <div className="mt-2">
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line bg-surface/50 px-4 py-8 text-center transition hover:border-primary">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft text-primary-dark">
          <UploadIcon width={20} height={20} />
        </span>
        <span className="text-sm font-semibold">{busy ? c.uploading : zoneTitle}</span>
        <span className="text-xs text-muted-soft">{hint}</span>
        <input type="file" className="hidden" onChange={onChange} disabled={busy} />
      </label>
      {err && <p className="mt-2 text-xs text-danger">{err}</p>}
      {mine.length > 0 && (
        <ul className="mt-2 space-y-1 text-xs text-muted">
          {mine.map((u) => (
            <li key={u.url} className="truncate">
              ✓ {u.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Recap({ label, value }: { label: string; value: string }) {
  const c = useT().create;
  return (
    <div className="flex gap-4 px-5 py-4">
      <dt className="w-40 shrink-0 text-sm font-semibold text-muted">{label}</dt>
      <dd className="flex-1 text-sm">
        {value ? value : <span className="text-muted-soft">{c.notProvided}</span>}
      </dd>
    </div>
  );
}
