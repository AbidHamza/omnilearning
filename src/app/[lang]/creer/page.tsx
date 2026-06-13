"use client";

import { useState } from "react";
import { categories } from "@/lib/data";
import { UploadIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { useLocaleRouter } from "@/i18n/navigation";
import { saveDraftAction } from "@/lib/actions/draft";

interface Upload {
  field: string;
  url: string;
  name: string;
}

const steps = [
  "Présentation de la formation",
  "Contenu de la formation",
  "Récapitulatif",
];

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

export default function CreerFormationPage() {
  const router = useLocaleRouter();
  const [step, setStep] = useState(0);

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [skills, setSkills] = useState("");
  const [prereq, setPrereq] = useState("");

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
                      ? "bg-primary text-white"
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
          Créer une formation
        </h1>

        {step === 0 && (
          <div className="mt-8 space-y-8">
            <section className="space-y-5">
              <h2 className="font-display text-lg font-bold">
                Information générale de la formation
              </h2>
              <div>
                <label className={labelCls}>Catégorie / Domaine</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputCls}
                >
                  <option value="">Choisissez une catégorie</option>
                  {categories.map((c) => (
                    <option key={c.id}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Nom de la formation</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Description de la formation</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez les objectifs, les contenus…"
                  className={areaCls}
                />
              </div>
              <div>
                <label className={labelCls}>Niveau de difficulté</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className={inputCls}
                >
                  <option value="">Choisissez un niveau</option>
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="font-display text-lg font-bold">
                Objectifs pédagogiques
              </h2>
              <div>
                <label className={labelCls}>Compétences visées</label>
                <textarea
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="Décrivez les compétences que les apprenants vont développer avec cette formation."
                  className={areaCls}
                />
              </div>
              <div>
                <label className={labelCls}>Compétences prérequis</label>
                <textarea
                  value={prereq}
                  onChange={(e) => setPrereq(e.target.value)}
                  placeholder="Décrivez les connaissances ou compétences nécessaires avant de commencer."
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
                Organisation et contenu
              </h2>
              <div>
                <label className={labelCls}>Structure du cours</label>
                <textarea
                  value={structure}
                  onChange={(e) => setStructure(e.target.value)}
                  placeholder="Décrivez les chapitres, modules, leçons…"
                  className={areaCls}
                />
              </div>
              <div>
                <label className={labelCls}>Ressources à importer</label>
                <UploadZone
                  field="resources"
                  hint="Téléchargez les vidéos, PDF, quiz, exercices interactifs, cas pratiques"
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
              <div>
                <label className={labelCls}>Activités interactives</label>
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
                        <option value="">Choisissez un type d&apos;activité</option>
                        <option>Quiz</option>
                        <option>Exercice pratique</option>
                        <option>Étude de cas</option>
                      </select>
                      <button
                        type="button"
                        onClick={() =>
                          setActivities((arr) => arr.filter((x) => x.id !== a.id))
                        }
                        className="grid h-9 w-9 place-items-center rounded-lg text-muted transition hover:bg-surface hover:text-danger"
                        aria-label="Supprimer l'activité"
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
                      placeholder="Décrivez en détail les instructions pour l'activité."
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
                  Ajouter une activité
                </button>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="font-display text-lg font-bold">
                Présentation visuelle
              </h2>
              <div>
                <label className={labelCls}>Image de couverture / vignette</label>
                <UploadZone
                  field="cover"
                  title="Téléchargez l'image"
                  hint="Format accepté : SVG, PNG, JPG/JPEG"
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
              <div>
                <label className={labelCls}>
                  Vidéo de présentation (optionnel)
                </label>
                <UploadZone
                  field="video"
                  title="Téléchargez la vidéo"
                  hint="Format accepté : MP4, MOV, WEBM"
                  uploads={uploads}
                  onUploaded={addUpload}
                />
              </div>
            </section>
          </div>
        )}

        {step === 2 && (
          <div className="mt-8 space-y-6">
            <h2 className="font-display text-lg font-bold">Récapitulatif</h2>
            <dl className="divide-y divide-line rounded-[var(--radius-card)] border border-line">
              <Recap label="Catégorie" value={category} />
              <Recap label="Nom de la formation" value={name} />
              <Recap label="Niveau" value={level} />
              <Recap label="Description" value={description} />
              <Recap label="Compétences visées" value={skills} />
              <Recap label="Prérequis" value={prereq} />
              <Recap label="Structure du cours" value={structure} />
              <Recap
                label="Activités interactives"
                value={
                  activities.length
                    ? `${activities.length} activité(s)`
                    : ""
                }
              />
            </dl>
            <p className="rounded-xl bg-brand-band/60 p-4 text-sm text-muted">
              Votre formation sera soumise à validation par un administrateur
              avant publication.
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
              Supprimer
            </button>
          ) : (
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:bg-surface"
            >
              Étape précédente
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Étape suivante
            </button>
          ) : (
            <button
              type="button"
              onClick={submitDraft}
              disabled={submitting}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
            >
              Envoyer la demande de création
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function UploadZone({
  field,
  title = "Glissez vos fichiers ici",
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
        setErr(data.error ?? "Échec de l'upload.");
      } else {
        onUploaded({ field, url: data.url, name: data.name });
      }
    } catch {
      setErr("Échec de l'upload.");
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
        <span className="text-sm font-semibold">{busy ? "Envoi en cours…" : title}</span>
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
  return (
    <div className="flex gap-4 px-5 py-4">
      <dt className="w-40 shrink-0 text-sm font-semibold text-muted">{label}</dt>
      <dd className="flex-1 text-sm">
        {value ? value : <span className="text-muted-soft">Non renseigné</span>}
      </dd>
    </div>
  );
}
