import { LocaleLink } from "@/i18n/navigation";
import { siteName } from "@/lib/site";

const tiers = [
  { name: "Soutien", price: "5 €", perks: ["Badge de soutien", "Accès anticipé aux nouveautés"] },
  {
    name: "Mécène",
    price: "15 €",
    featured: true,
    perks: ["Tout le palier Soutien", "Sessions live mensuelles", "Vote sur les prochaines formations"],
  },
  { name: "Partenaire", price: "50 €", perks: ["Tout le palier Mécène", "Logo sur la plateforme", "Accompagnement dédié"] },
];

export default function SupportPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Soutenir la plateforme
        </h1>
        <p className="mt-4 text-lg text-muted">
          {siteName} est gratuit pour tous. Votre soutien finance la création
          de nouvelles formations et garde le savoir accessible à chacun.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col rounded-[var(--radius-card)] border bg-bg p-6 ${
              t.featured ? "border-primary shadow-sm" : "border-line"
            }`}
          >
            {t.featured && (
              <span className="mb-3 w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                Le plus populaire
              </span>
            )}
            <h3 className="font-semibold">{t.name}</h3>
            <div className="mt-2 text-3xl font-bold">
              {t.price}
              <span className="text-base font-normal text-muted"> /mois</span>
            </div>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-success">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 rounded-full py-2.5 text-sm font-semibold ${
                t.featured
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "border border-line hover:bg-surface"
              }`}
            >
              Choisir {t.name}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        Vous préférez contribuer autrement ?{" "}
        <LocaleLink href="/creer" className="font-medium text-primary hover:underline">
          Créez et partagez votre propre formation.
        </LocaleLink>
      </p>
    </div>
  );
}
