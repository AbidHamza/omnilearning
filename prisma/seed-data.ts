/**
 * Données de seed non issues des cours : badges déclaratifs, avis fictifs
 * multilingues (comptes de démo assumés), apprenants « fantômes » pour peupler
 * le classement, et quelques utilitaires déterministes.
 *
 * Les avis sont volontairement fabriqués pour la démo. Ils restent crédibles :
 * répartition de notes réaliste, voix humaine, pas de tournures d'IA.
 */

export interface BadgeSeed {
  slug: string;
  label: string;
  description: string;
  icon: string; // clé UI (voir gamification-panel)
  tier: "bronze" | "argent" | "or";
  condition: { type: string; threshold: number };
}

export const badges: BadgeSeed[] = [
  {
    slug: "premiers-pas",
    label: "Premiers pas",
    description: "Terminer votre toute première leçon.",
    icon: "seedling",
    tier: "bronze",
    condition: { type: "lessons_completed", threshold: 1 },
  },
  {
    slug: "quinze-lecons",
    label: "En rythme",
    description: "Terminer 15 leçons.",
    icon: "book",
    tier: "argent",
    condition: { type: "lessons_completed", threshold: 15 },
  },
  {
    slug: "cinquante-lecons",
    label: "Bibliothèque vivante",
    description: "Terminer 50 leçons.",
    icon: "brain",
    tier: "or",
    condition: { type: "lessons_completed", threshold: 50 },
  },
  {
    slug: "premier-quiz",
    label: "Sans-faute",
    description: "Réussir votre premier quiz.",
    icon: "target",
    tier: "bronze",
    condition: { type: "quizzes_passed", threshold: 1 },
  },
  {
    slug: "dix-quiz",
    label: "Tête bien faite",
    description: "Réussir 10 quiz.",
    icon: "target",
    tier: "argent",
    condition: { type: "quizzes_passed", threshold: 10 },
  },
  {
    slug: "serie-3",
    label: "Trois jours",
    description: "Apprendre trois jours d'affilée.",
    icon: "flame",
    tier: "bronze",
    condition: { type: "streak", threshold: 3 },
  },
  {
    slug: "serie-7",
    label: "Une semaine pleine",
    description: "Sept jours d'affilée sans lâcher.",
    icon: "flame",
    tier: "argent",
    condition: { type: "streak", threshold: 7 },
  },
  {
    slug: "premier-cours",
    label: "Premier cap",
    description: "Terminer un cours en entier.",
    icon: "medal",
    tier: "argent",
    condition: { type: "courses_completed", threshold: 1 },
  },
  {
    slug: "trois-cours",
    label: "Sur une lancée",
    description: "Terminer trois cours.",
    icon: "trophy",
    tier: "or",
    condition: { type: "courses_completed", threshold: 3 },
  },
  {
    slug: "xp-500",
    label: "Élan",
    description: "Atteindre 500 XP.",
    icon: "bolt",
    tier: "bronze",
    condition: { type: "xp", threshold: 500 },
  },
  {
    slug: "xp-2000",
    label: "Vitesse de croisière",
    description: "Atteindre 2 000 XP.",
    icon: "rocket",
    tier: "argent",
    condition: { type: "xp", threshold: 2000 },
  },
  {
    slug: "xp-5000",
    label: "Référence",
    description: "Atteindre 5 000 XP.",
    icon: "star",
    tier: "or",
    condition: { type: "xp", threshold: 5000 },
  },
];

// Apprenants « fantômes » pour donner du corps au classement (aucun login).
export const ghostLearners: { name: string; xp: number }[] = [
  { name: "Sarah Benali", xp: 8420 },
  { name: "Marcus Bennett", xp: 7310 },
  { name: "Youssef El Amrani", xp: 6180 },
  { name: "Camille Rousseau", xp: 5540 },
  { name: "Priya Nair", xp: 4870 },
  { name: "Hugo Marchand", xp: 4210 },
  { name: "Layla Haddad", xp: 3630 },
  { name: "Nathan Price", xp: 2980 },
  { name: "Manon Perrin", xp: 2450 },
  { name: "Omar Zahiri", xp: 1920 },
  { name: "Grace Sullivan", xp: 1360 },
  { name: "Baptiste Noël", xp: 820 },
];
