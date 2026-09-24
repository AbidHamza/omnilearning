"use client";

import { useState, useTransition } from "react";
import { categories } from "@/lib/data";
import { UploadIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { useLocaleRouter } from "@/i18n/navigation";
import { useT } from "@/i18n/provider";
import { deleteDraftAction, saveDraftAction } from "@/lib/actions/draft";
import type { DraftForEdit } from "@/lib/dal";
import {
  MAX_LESSONS_PER_MODULE,
  MAX_MODULES,
  MAX_QUESTIONS,
  type DraftLesson,
  type DraftLessonType,
  type DraftModule,
  type DraftQuestion,
} from "@/lib/curriculum";
import { DEFAULT_REVENUE_SHARE_PCT } from "@/lib/pricing";

interface Upload {
  field: string;
  url: string;
  name: string;
}

const labelCls = "block text-sm font-semibold";
const inputCls =
  "mt-2 w-full rounded-[16px] border border-line bg-bg px-3.5 py-2.5 text-sm outline-none transition focus:border-primary";
const areaCls = `${inputCls} min-h-28 resize-y`;
const smallInput = `${inputCls} mt-0`;
const addBtn =
  "inline-flex items-center gap-2 rounded-[16px] border border-line px-3.5 py-2 text-sm font-semibold transition hover:border-primary";
const iconBtn =
  "grid h-8 w-8 shrink-0 place-items-center border border-line text-muted hover:border-danger hover:text-danger";
const primaryBtn =
  "rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary transition hover:bg-primary-deep disabled:opacity-50";
const ghostBtn =
  "rounded-[16px] border border-line px-5 py-2.5 text-sm font-semibold transition hover:border-primary disabled:opacity-50";

interface Activity {
  id: number;
  type: string;
  instruction: string;
}

let uid = 1;

function emptyLesson(): DraftLesson {
  return { title: "", type: "text", durationMin: 0, body: "" };
}

function emptyQuestion(): DraftQuestion {
  return { prompt: "", options: ["", ""], correctIndex: 0 };
}

export default function CreerFormationClient({
  initial,
}: {
  initial?: DraftForEdit | null;
}) {
  const t = useT();
  const c = t.create;
  const steps = c.steps;
  const router = useLocaleRouter();
  const [step, setStep] = useState(0);

  const [draftId, setDraftId] = useState<string | null>(initial?.id ?? null);
  const [category, setCategory] = useState(initial?.category ?? "");
  const [name, setName] = useState(initial?.name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [level, setLevel] = useState(initial?.level ?? "");
  const [skills, setSkills] = useState(initial?.skills ?? "");
  const [prereq, setPrereq] = useState(initial?.prerequisites ?? "");
  // Le formateur saisit des euros, la base stocke des centimes. La conversion
  // se fait une seule fois, ici, au moment de l'envoi.
  const [priceEuros, setPriceEuros] = useState(
    initial && initial.priceCents > 0 ? String(initial.priceCents / 100) : "",
  );

  const [structure, setStructure] = useState(initial?.structure ?? "");
  const [modules, setModules] = useState<DraftModule[]>(initial?.curriculum ?? []);
  const [activities, setActivities] = useState<Activity[]>(
    (initial?.activities ?? []).map((a) => ({ id: uid++, ...a })),
  );
  const [uploads, setUploads] = useState<Upload[]>(initial?.uploads ?? []);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [detail, setDetail] = useState<string[]>([]);
  const [notice, setNotice] = useState<string | null>(null);

  function addUpload(u: Upload) {
    // Un seul fichier par champ (image/vidéo) ; ressources cumulables.
    setUploads((arr) =>
      u.field === "resources" ? [...arr, u] : [...arr.filter((x) => x.field !== u.field), u],
    );
  }

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function addActivity() {
    setActivities((a) => [...a, { id: uid++, type: "", instruction: "" }]);
  }
  function updateActivity(id: number, patch: Partial<Activity>) {
    setActivities((a) => a.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }
  function removeActivity(id: number) {
    setActivities((a) => a.filter((x) => x.id !== id));
  }

  function payload(submit: boolean) {
    const euros = Number(priceEuros.replace(",", "."));
    return {
      id: draftId ?? undefined,
      category,
      name,
      description,
      level,
      skills,
      prerequisites: prereq,
      structure,
      curriculum: modules,
      activities: activities.map(({ type, instruction }) => ({ type, instruction })),
      uploads,
      priceCents: Number.isFinite(euros) && euros > 0 ? Math.round(euros * 100) : 0,
      submit,
    };
  }

  function describeProblem(code: string): string {
    const [kind, where] = code.split(":");
    const tpl = c.problem[kind as keyof typeof c.problem] ?? code;
    return tpl.replace("{where}", where ?? "");
  }

  function save(submit: boolean) {
    setError(null);
    setDetail([]);
    setNotice(null);
    startTransition(async () => {
      const res = await saveDraftAction(payload(submit));
      if (!res.ok) {
        setError(c.errors[res.error]);
        setDetail((res.detail ?? []).map(describeProblem));
        return;
      }
      setDraftId(res.id);
      if (submit) {
        router.push("/formateur");
        router.refresh();
      } else {
        setNotice(c.saved);
      }
    });
  }

  function discard() {
    startTransition(async () => {
      if (draftId) {
        const res = await deleteDraftAction(draftId);
        if (!res.ok) {
          setError(c.errors[res.error]);
          return;
        }
      }
      router.push("/formateur");
      router.refresh();
    });
  }

  const levelLabel: Record<string, string> = {
    Débutant: c.levelBeginner,
    Intermédiaire: c.levelIntermediate,
    Avancé: c.levelAdvanced,
  };
  const euros = Number(priceEuros.replace(",", "."));
  const priceRecap =
    Number.isFinite(euros) && euros > 0 ? `${euros.toFixed(2)} €` : c.priceFree;
  const lessonCount = modules.reduce((n, m) => n + m.lessons.length, 0);

  return (
    <div className="container-page py-10">
      <span className="rule-accent mb-3" />
      <h1 className="text-4xl font-semibold">{c.title}</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ol className="flex gap-4 overflow-x-auto lg:flex-col lg:gap-5">
            {steps.map((label, i) => (
              <li key={label} className="flex shrink-0 items-center gap-3">
                <span
                  className={`grid h-8 w-8 place-items-center rounded-full text-sm font-bold ${
                    i === step
                      ? "bg-primary text-on-primary"
                      : i < step
                        ? "bg-brand text-ink"
                        : "bg-surface text-muted"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={`text-sm ${i === step ? "font-bold" : "text-muted"}`}>
                  {label}
                </span>
              </li>
            ))}
          </ol>
          {draftId && (
            <p className="mt-6 text-xs text-muted">
              {t.status.draft} · {lessonCount} {t.course.lessonsCount}
            </p>
          )}
        </aside>

        {step === 0 && (
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-xl font-semibold">{c.generalTitle}</h2>
              <div className="mt-5 space-y-5">
                <div>
                  <label className={labelCls}>{c.categoryLabel}</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">{c.categoryPlaceholder}</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.label}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{c.nameLabel}</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={200}
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
                    {Object.entries(levelLabel).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{c.priceLabel}</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step="0.01"
                    value={priceEuros}
                    onChange={(e) => setPriceEuros(e.target.value)}
                    placeholder={c.pricePlaceholder}
                    className={inputCls}
                  />
                  <p className="mt-2 text-xs text-muted">
                    {c.priceHint.replace("{pct}", String(DEFAULT_REVENUE_SHARE_PCT))}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold">{c.objectivesTitle}</h2>
              <div className="mt-5 space-y-5">
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
              </div>
            </section>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-xl font-semibold">{c.contentTitle}</h2>
              <p className="mt-2 text-sm text-muted">{c.builderIntro}</p>
              <CurriculumBuilder modules={modules} onChange={setModules} />
              <div className="mt-8">
                <label className={labelCls}>{c.structureLabel}</label>
                <textarea
                  value={structure}
                  onChange={(e) => setStructure(e.target.value)}
                  placeholder={c.structurePlaceholder}
                  className={areaCls}
                />
              </div>
              <div className="mt-6">
                <label className={labelCls}>{c.resourcesLabel}</label>
                <UploadZone
                  field="resources"
                  hint={c.resourcesHint}
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
              <div className="mt-6">
                <label className={labelCls}>{c.activitiesLabel}</label>
                {activities.map((a) => (
                  <div key={a.id} className="mt-3 space-y-3 border-s-2 border-line ps-4">
                    <div className="flex items-center gap-3">
                      <select
                        value={a.type}
                        onChange={(e) => updateActivity(a.id, { type: e.target.value })}
                        className={smallInput}
                      >
                        <option value="">{c.activityTypePlaceholder}</option>
                        <option value="quiz">{c.activityQuiz}</option>
                        <option value="exercise">{c.activityExercise}</option>
                        <option value="case">{c.activityCase}</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => removeActivity(a.id)}
                        aria-label={c.removeActivity}
                        className={iconBtn}
                      >
                        <TrashIcon width={14} height={14} />
                      </button>
                    </div>
                    <textarea
                      value={a.instruction}
                      onChange={(e) => updateActivity(a.id, { instruction: e.target.value })}
                      placeholder={c.activityInstructionPlaceholder}
                      className={`${areaCls} mt-0 min-h-20`}
                    />
                  </div>
                ))}
                <button type="button" onClick={addActivity} className={`${addBtn} mt-3`}>
                  <PlusIcon width={14} height={14} />
                  {c.addActivity}
                </button>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold">{c.visualTitle}</h2>
              <div className="mt-5">
                <label className={labelCls}>{c.coverLabel}</label>
                <UploadZone
                  field="cover"
                  title={c.uploadImage}
                  hint={c.imageHint}
                  accept="image/*"
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
              <div className="mt-6">
                <label className={labelCls}>{c.videoLabel}</label>
                <UploadZone
                  field="video"
                  title={c.uploadVideo}
                  hint={c.videoHint}
                  accept="video/*"
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
            </section>
          </div>
        )}

        {step === 2 && (
          <section>
            <h2 className="font-display text-xl font-semibold">{c.recapTitle}</h2>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              <Recap label={c.recapCategory} value={category} />
              <Recap label={c.recapName} value={name} />
              <Recap label={c.recapLevel} value={levelLabel[level] ?? level} />
              <Recap label={c.recapPrice} value={priceRecap} />
              <Recap label={c.recapDesc} value={description} />
              <Recap label={c.recapSkills} value={skills} />
              <Recap label={c.recapPrereq} value={prereq} />
              <Recap
                label={c.recapModules}
                value={modules
                  .map((m, i) => `${i + 1}. ${m.title || c.builder.moduleLabel} (${m.lessons.length})`)
                  .join("\n")}
              />
              <Recap label={c.recapStructure} value={structure} />
              <Recap
                label={c.recapActivities}
                value={
                  activities.length ? c.activitiesCount.replace("{n}", String(activities.length)) : ""
                }
              />
            </dl>
            <p className="mt-5 text-sm text-muted">{c.validationNote}</p>
          </section>
        )}
      </div>

      {(error || detail.length > 0 || notice) && (
        <div className="mt-8 text-sm" role="status">
          {notice && <p className="text-success">{notice}</p>}
          {error && <p className="font-semibold text-danger">{error}</p>}
          {detail.length > 0 && (
            <ul className="mt-2 list-disc ps-5 text-danger">
              {detail.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-6">
        {step === 0 ? (
          <button type="button" onClick={discard} disabled={pending} className={`${ghostBtn} text-danger`}>
            {c.delete}
          </button>
        ) : (
          <button type="button" onClick={prev} disabled={pending} className={ghostBtn}>
            {c.prevStep}
          </button>
        )}
        <button type="button" onClick={() => save(false)} disabled={pending} className={ghostBtn}>
          {c.saveDraft}
        </button>
        <span className="flex-1" />
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className={primaryBtn}>
            {c.nextStep}
          </button>
        ) : (
          <button type="button" onClick={() => save(true)} disabled={pending} className={primaryBtn}>
            {c.submit}
          </button>
        )}
      </div>
    </div>
  );
}

function CurriculumBuilder({
  modules,
  onChange,
}: {
  modules: DraftModule[];
  onChange: (m: DraftModule[]) => void;
}) {
  const b = useT().create.builder;

  function patchModule(mi: number, patch: Partial<DraftModule>) {
    onChange(modules.map((m, i) => (i === mi ? { ...m, ...patch } : m)));
  }
  function patchLesson(mi: number, li: number, patch: Partial<DraftLesson>) {
    patchModule(mi, {
      lessons: modules[mi].lessons.map((l, i) => (i === li ? { ...l, ...patch } : l)),
    });
  }
  function addModule() {
    if (modules.length >= MAX_MODULES) return;
    onChange([...modules, { title: "", lessons: [emptyLesson()] }]);
  }
  function removeModule(mi: number) {
    onChange(modules.filter((_, i) => i !== mi));
  }
  function addLesson(mi: number) {
    if (modules[mi].lessons.length >= MAX_LESSONS_PER_MODULE) return;
    patchModule(mi, { lessons: [...modules[mi].lessons, emptyLesson()] });
  }
  function removeLesson(mi: number, li: number) {
    patchModule(mi, { lessons: modules[mi].lessons.filter((_, i) => i !== li) });
  }

  return (
    <div className="mt-5">
      {modules.map((m, mi) => (
        <div key={mi} className="mt-4 border border-line">
          <div className="flex items-center gap-3 bg-surface px-4 py-3">
            <span className="shrink-0 text-xs font-bold uppercase text-muted">
              {b.moduleLabel} {mi + 1}
            </span>
            <input
              value={m.title}
              onChange={(e) => patchModule(mi, { title: e.target.value })}
              placeholder={b.modulePlaceholder}
              maxLength={200}
              className={`${smallInput} bg-bg`}
            />
            <button
              type="button"
              onClick={() => removeModule(mi)}
              aria-label={b.removeModule}
              className={iconBtn}
            >
              <TrashIcon width={14} height={14} />
            </button>
          </div>
          <div className="divide-y divide-line">
            {m.lessons.map((l, li) => (
              <LessonEditor
                key={li}
                index={`${mi + 1}.${li + 1}`}
                lesson={l}
                onChange={(patch) => patchLesson(mi, li, patch)}
                onRemove={() => removeLesson(mi, li)}
              />
            ))}
          </div>
          <div className="px-4 py-3">
            <button
              type="button"
              onClick={() => addLesson(mi)}
              disabled={m.lessons.length >= MAX_LESSONS_PER_MODULE}
              className={addBtn}
            >
              <PlusIcon width={14} height={14} />
              {b.addLesson}
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addModule}
        disabled={modules.length >= MAX_MODULES}
        className={`${addBtn} mt-4`}
      >
        <PlusIcon width={14} height={14} />
        {b.addModule}
      </button>
    </div>
  );
}

function LessonEditor({
  index,
  lesson,
  onChange,
  onRemove,
}: {
  index: string;
  lesson: DraftLesson;
  onChange: (patch: Partial<DraftLesson>) => void;
  onRemove: () => void;
}) {
  const c = useT().create;
  const b = c.builder;
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onVideo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr(null);
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) setErr(data.error ?? c.uploadError);
      else onChange({ videoUrl: data.url, videoName: data.name });
    } catch {
      setErr(c.uploadError);
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  const questions = lesson.questions ?? [];
  function patchQuestion(qi: number, patch: Partial<DraftQuestion>) {
    onChange({ questions: questions.map((q, i) => (i === qi ? { ...q, ...patch } : q)) });
  }

  return (
    <div className="px-4 py-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="w-8 shrink-0 text-xs text-muted">{index}</span>
        <input
          value={lesson.title}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder={b.lessonPlaceholder}
          maxLength={200}
          className={`${smallInput} min-w-40 flex-1`}
        />
        <select
          value={lesson.type}
          onChange={(e) => onChange({ type: e.target.value as DraftLessonType })}
          className={`${smallInput} w-auto`}
        >
          <option value="video">{b.typeVideo}</option>
          <option value="text">{b.typeText}</option>
          <option value="quiz">{b.typeQuiz}</option>
        </select>
        <label className="flex items-center gap-2 text-xs text-muted">
          {b.durationLabel}
          <input
            type="number"
            min={0}
            max={600}
            value={lesson.durationMin || ""}
            onChange={(e) => onChange({ durationMin: Number(e.target.value) || 0 })}
            className={`${smallInput} w-20`}
          />
        </label>
        <button type="button" onClick={onRemove} aria-label={b.removeLesson} className={iconBtn}>
          <TrashIcon width={14} height={14} />
        </button>
      </div>

      {lesson.type === "video" && (
        <div className="mt-3 ps-11">
          <label className="inline-flex cursor-pointer items-center gap-2 border border-dashed border-line px-3 py-2 text-xs font-semibold hover:border-primary">
            <UploadIcon width={14} height={14} />
            {busy ? c.uploading : lesson.videoName ?? b.videoUpload}
            <input type="file" accept="video/*" className="hidden" onChange={onVideo} disabled={busy} />
          </label>
          {err && <p className="mt-1 text-xs text-danger">{err}</p>}
        </div>
      )}

      {lesson.type !== "quiz" && (
        <div className="mt-3 ps-11">
          <textarea
            value={lesson.body ?? ""}
            onChange={(e) => onChange({ body: e.target.value })}
            placeholder={b.bodyPlaceholder}
            className={`${areaCls} mt-0 min-h-24`}
          />
        </div>
      )}

      {lesson.type === "quiz" && (
        <div className="mt-3 space-y-4 ps-11">
          {questions.map((q, qi) => (
            <div key={qi} className="border-s-2 border-line ps-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-muted">
                  {b.questionLabel} {qi + 1}
                </span>
                <button
                  type="button"
                  onClick={() => onChange({ questions: questions.filter((_, i) => i !== qi) })}
                  aria-label={b.removeQuestion}
                  className={iconBtn}
                >
                  <TrashIcon width={14} height={14} />
                </button>
              </div>
              <input
                value={q.prompt}
                onChange={(e) => patchQuestion(qi, { prompt: e.target.value })}
                placeholder={b.questionPlaceholder}
                maxLength={500}
                className={`${smallInput} mt-2`}
              />
              <ul className="mt-2 space-y-2">
                {q.options.map((opt, oi) => (
                  <li key={oi} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`correct-${index}-${qi}`}
                      checked={q.correctIndex === oi}
                      onChange={() => patchQuestion(qi, { correctIndex: oi })}
                      aria-label={b.correctAnswer}
                    />
                    <input
                      value={opt}
                      onChange={(e) =>
                        patchQuestion(qi, {
                          options: q.options.map((o, i) => (i === oi ? e.target.value : o)),
                        })
                      }
                      placeholder={`${b.optionLabel} ${oi + 1}`}
                      maxLength={300}
                      className={`${smallInput} flex-1`}
                    />
                    {q.options.length > 2 && (
                      <button
                        type="button"
                        onClick={() =>
                          patchQuestion(qi, {
                            options: q.options.filter((_, i) => i !== oi),
                            correctIndex: q.correctIndex >= oi && q.correctIndex > 0 ? q.correctIndex - 1 : q.correctIndex,
                          })
                        }
                        aria-label={b.removeOption}
                        className={iconBtn}
                      >
                        <TrashIcon width={12} height={12} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {q.options.length < 6 && (
                <button
                  type="button"
                  onClick={() => patchQuestion(qi, { options: [...q.options, ""] })}
                  className="mt-2 text-xs font-semibold text-primary-dark hover:underline"
                >
                  {b.addOption}
                </button>
              )}
              <input
                value={q.explanation ?? ""}
                onChange={(e) => patchQuestion(qi, { explanation: e.target.value })}
                placeholder={b.explanationLabel}
                maxLength={1000}
                className={`${smallInput} mt-2`}
              />
            </div>
          ))}
          {questions.length < MAX_QUESTIONS && (
            <button
              type="button"
              onClick={() => onChange({ questions: [...questions, emptyQuestion()] })}
              className={addBtn}
            >
              <PlusIcon width={14} height={14} />
              {b.addQuestion}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function UploadZone({
  field,
  title,
  hint,
  accept,
  uploads,
  onUploaded,
}: {
  field: string;
  title?: string;
  hint: string;
  accept?: string;
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
      <label className="flex cursor-pointer items-center gap-4 border border-dashed border-line px-4 py-5 hover:border-primary">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-soft text-primary-dark">
          <UploadIcon width={18} height={18} />
        </span>
        <span>
          <span className="block text-sm font-semibold">{busy ? c.uploading : zoneTitle}</span>
          <span className="block text-xs text-muted-soft">{hint}</span>
        </span>
        <input type="file" accept={accept} className="hidden" onChange={onChange} disabled={busy} />
      </label>
      {err && <p className="mt-2 text-xs text-danger">{err}</p>}
      {mine.length > 0 && (
        <ul className="mt-2 space-y-1 text-xs text-muted">
          {mine.map((u) => (
            <li key={u.url} className="truncate">
              {u.name}
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
    <div className="flex gap-4 py-4">
      <dt className="w-40 shrink-0 text-sm font-semibold text-muted">{label}</dt>
      <dd className="flex-1 whitespace-pre-line text-sm">
        {value ? value : <span className="text-muted-soft">{c.notProvided}</span>}
      </dd>
    </div>
  );
}
