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

// --- Générateur déterministe (mulberry32 + hash de chaîne) ---
export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function makePrng(seed: number) {
  let a = seed >>> 0;
  return function next(): number {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

// --- Viviers de noms par langue (prénom + nom) ---
const namesFr = [
  "Camille Rousseau", "Julien Mercier", "Sarah Benali", "Antoine Faure",
  "Léa Dupont", "Mehdi Kaddouri", "Chloé Girard", "Nicolas Weber",
  "Inès Lambert", "Hugo Marchand", "Manon Perrin", "Yanis Cherif",
  "Élodie Roy", "Thomas Colin", "Aurélie Vasseur", "Karim Haddad",
  "Pauline Denis", "Baptiste Noël", "Nadia Slimani", "Romain Guérin",
];
const namesEn = [
  "Emily Carter", "James Whitfield", "Priya Nair", "Daniel Brooks",
  "Sophia Reyes", "Marcus Bennett", "Hannah Fischer", "Omar Haddad",
  "Grace Sullivan", "Liam O'Connor", "Aisha Rahman", "Nathan Price",
  "Olivia Grant", "Ethan Nakamura", "Zoe Adler", "Victor Almeida",
];
const namesAr = [
  "Youssef El Amrani", "Layla Haddad", "Karim Benmoussa", "Nour Saidi",
  "Omar Zahiri", "Salma Bennani", "Hamza Toumi", "Rania Cherkaoui",
  "Bilal Ouazzani", "Imane Naciri", "Adam Belhaj", "Sofia Tazi",
];

export function namePool(locale: string): string[] {
  if (locale === "en") return namesEn;
  if (locale === "ar") return namesAr;
  return namesFr;
}

// --- Fragments d'avis : voix humaine, concrets, notes crédibles ---
interface Snippet {
  rating: number;
  title: string;
  body: string;
}

const snippetsFr: Snippet[] = [
  { rating: 5, title: "Enfin clair", body: "J'avais déjà suivi deux formations sur le sujet sans que ça tienne. Là, les explications vont au fond des choses et les quiz obligent à vraiment comprendre, pas à recopier." },
  { rating: 5, title: "Bon rythme", body: "Les leçons sont courtes mais denses. J'en faisais une par pause déjeuner, le format marche bien pour tenir dans la durée." },
  { rating: 4, title: "Solide", body: "Contenu très propre. J'aurais aimé un ou deux exercices en plus sur la fin, mais rien à redire sur le fond." },
  { rating: 5, title: "Les exemples font la différence", body: "Ce sont les cas concrets qui m'ont débloqué. On voit tout de suite à quoi ça sert dans un vrai projet." },
  { rating: 4, title: "Je recommande", body: "Pédagogie carrée, le formateur ne survole rien. Un chapitre m'a semblé un peu rapide mais je suis revenu dessus sans souci." },
  { rating: 5, title: "Pile ce qu'il me fallait", body: "Je bloquais sur des notions que je croyais maîtriser. Les quiz ont pointé mes trous, c'est exactement ce que je cherchais." },
  { rating: 3, title: "Correct", body: "Bon cours dans l'ensemble. Le niveau annoncé est juste, par contre prévoyez de coder en parallèle sinon ça glisse vite." },
  { rating: 5, title: "Zéro remplissage", body: "Aucune leçon inutile. Chaque partie apporte quelque chose et se termine par un quiz qui remet les idées en place." },
  { rating: 4, title: "Très bien construit", body: "La progression est logique, on ne se retrouve jamais largué. J'ai gagné en confiance au fil des parties." },
  { rating: 5, title: "À refaire", body: "Je compte reprendre certaines parties dans un mois pour ancrer. Le fait de tout avoir en écrit aide beaucoup à réviser." },
  { rating: 4, title: "Honnête et carré", body: "Pas de promesse en l'air. On apprend vraiment, à condition de jouer le jeu des quiz plutôt que de les zapper." },
  { rating: 5, title: "Le formateur sait de quoi il parle", body: "On sent l'expérience de terrain derrière chaque explication. Les pièges évoqués, je les avais déjà croisés au boulot." },
];

const snippetsEn: Snippet[] = [
  { rating: 5, title: "Finally clicked", body: "I'd read about this topic for months and it never stuck. The way each part builds on the last, plus the quizzes, made it land for good." },
  { rating: 5, title: "Great pacing", body: "Short lessons, but every one earns its place. I did one a day and never felt like skipping." },
  { rating: 4, title: "Really solid", body: "Clean, no fluff. I'd have liked a couple more practice questions near the end, but the core is excellent." },
  { rating: 5, title: "The examples sell it", body: "Concrete cases everywhere. You immediately see how it maps to real work instead of staying abstract." },
  { rating: 4, title: "Recommended", body: "The instructor doesn't skim. One chapter felt a bit quick, but rewatching cleared it up." },
  { rating: 5, title: "Exactly what I needed", body: "The quizzes found the gaps I didn't know I had. That alone was worth it." },
  { rating: 3, title: "Decent", body: "Good overall. The stated level is accurate — just be ready to code along or it slips past you." },
  { rating: 5, title: "No filler", body: "Not a single wasted lesson. Each section ends with a quiz that forces you to actually think." },
  { rating: 4, title: "Well structured", body: "The order makes sense and you never get lost. I came out noticeably more confident." },
  { rating: 5, title: "Worth revisiting", body: "Having everything written down makes it easy to come back and review. I'll redo a few parts next month." },
];

const snippetsAr: Snippet[] = [
  { rating: 5, title: "أخيرًا فهمت", body: "حاولت تعلّم هذا الموضوع مرارًا دون جدوى. طريقة البناء التدريجي والاختبارات جعلت الأمور تثبت في ذهني." },
  { rating: 5, title: "إيقاع ممتاز", body: "الدروس قصيرة لكنها مركّزة. كنت أنجز درسًا كل يوم دون ملل." },
  { rating: 4, title: "محتوى متين", body: "شرح واضح وبلا حشو. كنت أتمنى تمارين إضافية في النهاية، لكن الأساس ممتاز." },
  { rating: 5, title: "الأمثلة هي الفرق", body: "الحالات العملية جعلتني أفهم الفائدة مباشرة في مشروع حقيقي." },
  { rating: 4, title: "أنصح به", body: "المدرّب لا يمرّ على الأمور بسرعة. فصل واحد بدا سريعًا لكن إعادته حلّت الإشكال." },
  { rating: 5, title: "تمامًا ما احتجته", body: "الاختبارات كشفت الثغرات التي لم أكن أدركها. هذا وحده كان يستحق." },
  { rating: 3, title: "جيد", body: "دورة جيدة إجمالًا. المستوى المعلن دقيق، لكن جهّز نفسك للتطبيق العملي." },
  { rating: 5, title: "دون إطالة", body: "لا يوجد درس زائد. كل قسم ينتهي باختبار يدفعك للتفكير فعلًا." },
];

export function snippetPool(locale: string): Snippet[] {
  if (locale === "en") return snippetsEn;
  if (locale === "ar") return snippetsAr;
  return snippetsFr;
}

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
