import type {
  Category,
  Course,
  PendingCourse,
  PlatformUser,
  User,
} from "./types";

export const categories: Category[] = [
  { id: "dev-web", label: "Développement Web", icon: "code" },
  { id: "data", label: "Data engineering", icon: "database" },
  { id: "cyber", label: "Cybersécurité", icon: "shield" },
  { id: "ia", label: "Intelligence Artificielle", icon: "cpu" },
  { id: "cloud", label: "Cloud Computing", icon: "cloud" },
  { id: "ux", label: "Design UX", icon: "palette" },
  { id: "projet", label: "Gestion de projet", icon: "briefcase" },
  { id: "iot", label: "Objets connectés (IoT)", icon: "wifi" },
  { id: "infra", label: "Infrastructure", icon: "server" },
];

const lorem =
  "Cette leçon couvre les notions essentielles avec des exemples concrets et des cas pratiques. Prenez le temps de mettre en application chaque concept avant de passer à la suite.";

export const courses: Course[] = [
  {
    slug: "cybersecurite",
    title: "Cybersécurité",
    tagline: "Protégez données et systèmes contre les menaces modernes.",
    description:
      "Une formation complète pour comprendre les menaces, identifier les vulnérabilités et mettre en place des défenses efficaces. De l'introduction aux concepts jusqu'à la réponse aux incidents.",
    category: "Cybersécurité",
    level: "Débutant",
    instructor: "Dr. Émilie Lefèvre",
    instructorBio:
      "Dr. Émilie Lefèvre est une spécialiste en cybersécurité avec plus de 10 ans d'expérience. Elle a collaboré avec de nombreuses entreprises pour améliorer leur sécurité informatique et est passionnée par la formation des futurs experts.",
    hours: 20,
    rating: 4.8,
    learners: 3120,
    accent: "#215775",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    language: "Français",
    software: "OWASP ZAP, Wireshark",
    prerequisites: [
      "Connaissances de base en informatique",
      "Expérience avec les réseaux",
      "Compréhension des systèmes d'exploitation",
    ],
    summary: [
      "Partie 1 : Introduction à la cybersécurité",
      "Partie 2 : Identification des menaces et vulnérabilités",
      "Partie 3 : Techniques de défense et réponse aux incidents",
    ],
    objectives: [
      "Développer des compétences en évaluation des risques",
      "Élaborer des stratégies de sécurité efficaces",
      "Comprendre les lois et règlements en cybersécurité",
      "Réagir efficacement lors d'une cyberattaque",
    ],
    skills: [
      "Analyse des menaces et vulnérabilités",
      "Mise en place de solutions de sécurité",
      "Gestion des incidents de sécurité",
      "Conformité aux normes de sécurité",
    ],
    contentTypes: ["Vidéos", "Quiz interactifs", "Études de cas pratiques"],
    parts: [
      {
        id: "p1",
        title: "Partie 1 : Introduction à la cybersécurité",
        lessons: [
          {
            id: "l1",
            title:
              "Introduction à la cybersécurité : Concepts fondamentaux et enjeux",
            type: "video",
            duration: "8 min",
            videoLabel: "Vidéo d'introduction",
            body: lorem,
          },
          {
            id: "l2",
            title:
              "Les meilleures pratiques pour protéger les données personnelles",
            type: "text",
            duration: "6 min",
            body:
              "La protection des données personnelles repose sur des gestes simples mais réguliers : mots de passe robustes et uniques, authentification à deux facteurs, mises à jour systématiques et vigilance face au phishing. " +
              lorem,
          },
          {
            id: "l3",
            title: "Introduction à la cybersécurité et ses enjeux",
            type: "quiz",
            duration: "5 min",
            questions: [
              {
                id: "q1",
                prompt: "Quel est l'objectif principal de la cybersécurité ?",
                options: [
                  "Accélérer les performances réseau",
                  "Protéger la confidentialité, l'intégrité et la disponibilité des données",
                  "Réduire le coût du matériel informatique",
                  "Remplacer les administrateurs systèmes",
                ],
                correctIndex: 1,
                explanation:
                  "La cybersécurité vise à garantir la triade CIA : Confidentialité, Intégrité et Disponibilité.",
              },
              {
                id: "q2",
                prompt:
                  "Laquelle de ces pratiques renforce la sécurité d'un compte ?",
                options: [
                  "Réutiliser le même mot de passe partout",
                  "Désactiver les mises à jour",
                  "Activer l'authentification à deux facteurs",
                  "Partager ses identifiants par email",
                ],
                correctIndex: 2,
                explanation:
                  "Le 2FA ajoute une couche de protection même si le mot de passe est compromis.",
              },
            ],
          },
        ],
      },
      {
        id: "p2",
        title: "Partie 2 : Identification des menaces et vulnérabilités",
        lessons: [
          {
            id: "l4",
            title: "Comprendre les menaces en cybersécurité et leurs impacts",
            type: "video",
            duration: "10 min",
            videoLabel: "Vidéo · les menaces",
            body: lorem,
          },
          {
            id: "l5",
            title:
              "Stratégies essentielles pour sécuriser vos informations personnelles",
            type: "text",
            duration: "7 min",
            body: lorem,
          },
          {
            id: "l6",
            title: "Les menaces de cybersécurité",
            type: "quiz",
            duration: "5 min",
            questions: [
              {
                id: "q3",
                prompt: "Qu'est-ce qu'une attaque par hameçonnage (phishing) ?",
                options: [
                  "Une attaque qui sature un serveur de requêtes",
                  "Une tentative de tromper l'utilisateur pour voler ses informations",
                  "Un chiffrement des fichiers contre rançon",
                  "Une faille matérielle du processeur",
                ],
                correctIndex: 1,
                explanation:
                  "Le phishing exploite la confiance de l'utilisateur via des messages frauduleux.",
              },
            ],
          },
        ],
      },
      {
        id: "p3",
        title: "Partie 3 : Techniques de défense et réponse aux incidents",
        lessons: [
          {
            id: "l7",
            title:
              "Stratégies de défense en cybersécurité et gestion des incidents",
            type: "video",
            duration: "11 min",
            videoLabel: "Vidéo · défense",
            body: lorem,
          },
          {
            id: "l8",
            title:
              "Guide complet sur les techniques de protection des données sensibles",
            type: "text",
            duration: "8 min",
            body: lorem,
          },
          {
            id: "l9",
            title: "Les réponses aux incidents de cybersécurité",
            type: "quiz",
            duration: "5 min",
            questions: [
              {
                id: "q4",
                prompt: "Quelle est la première étape d'une réponse à incident ?",
                options: [
                  "Communiquer publiquement",
                  "Identifier et qualifier l'incident",
                  "Supprimer tous les logs",
                  "Éteindre l'ensemble du parc",
                ],
                correctIndex: 1,
                explanation:
                  "On commence par détecter et qualifier l'incident avant de contenir et éradiquer.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "commencer-le-html",
    title: "Commencer le HTML",
    tagline: "Apprendre les bases du HTML et structurer une page web.",
    description:
      "Le point de départ idéal pour créer vos premières pages web. Vous apprendrez à structurer le contenu avec les balises essentielles et les bonnes pratiques sémantiques.",
    category: "Développement Web",
    level: "Débutant",
    instructor: "Karim Benali",
    hours: 4,
    rating: 4.6,
    learners: 8420,
    accent: "#3489ca",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    language: "Français",
    prerequisites: ["Aucun prérequis", "Un navigateur web", "Un éditeur de texte"],
    summary: [
      "Partie 1 : Les fondations du HTML",
      "Partie 2 : Structurer une page",
      "Partie 3 : Bonnes pratiques sémantiques",
    ],
    objectives: [
      "Comprendre le rôle du HTML",
      "Structurer du contenu avec les balises",
      "Écrire un HTML sémantique et accessible",
    ],
    skills: ["Balises de structure", "Sémantique HTML", "Formulaires"],
    contentTypes: ["Vidéos", "Quiz interactifs"],
    parts: [
      {
        id: "p1",
        title: "Partie 1 : Les fondations du HTML",
        lessons: [
          {
            id: "l1",
            title: "Qu'est-ce que le HTML et comment ça fonctionne",
            type: "video",
            duration: "7 min",
            videoLabel: "Vidéo d'introduction",
            body: lorem,
          },
          {
            id: "l2",
            title: "Les balises de structure essentielles",
            type: "text",
            duration: "6 min",
            body: lorem,
          },
          {
            id: "l3",
            title: "Quiz : les bases du HTML",
            type: "quiz",
            duration: "4 min",
            questions: [
              {
                id: "q1",
                prompt: "Quelle balise définit le titre principal d'une page ?",
                options: ["<title>", "<h1>", "<header>", "<main>"],
                correctIndex: 1,
                explanation:
                  "<h1> représente le titre de premier niveau du contenu de la page.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "figma-avance",
    title: "Figma avancé",
    tagline: "Pour les experts de Figma qui veulent aller plus loin.",
    description:
      "Maîtrisez les composants avancés, les variables, l'auto-layout et les workflows de design system pour produire des maquettes professionnelles et maintenables.",
    category: "Design UX",
    level: "Avancé",
    instructor: "Sophie Marchand",
    hours: 6,
    rating: 4.9,
    learners: 2150,
    accent: "#9746ff",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    language: "Français",
    software: "Figma",
    prerequisites: ["Maîtrise des bases de Figma", "Notions de design d'interface"],
    summary: [
      "Partie 1 : Composants et variantes",
      "Partie 2 : Auto-layout avancé",
      "Partie 3 : Design system",
    ],
    objectives: [
      "Créer des composants réutilisables",
      "Maîtriser l'auto-layout",
      "Construire un design system maintenable",
    ],
    skills: ["Composants avancés", "Variables", "Auto-layout", "Design system"],
    contentTypes: ["Vidéos", "Études de cas pratiques"],
    parts: [
      {
        id: "p1",
        title: "Partie 1 : Composants et variantes",
        lessons: [
          {
            id: "l1",
            title: "Créer des composants réutilisables",
            type: "video",
            duration: "9 min",
            videoLabel: "Vidéo · composants",
            body: lorem,
          },
          {
            id: "l2",
            title: "Auto-layout et contraintes",
            type: "text",
            duration: "7 min",
            body: lorem,
          },
        ],
      },
    ],
  },
  {
    slug: "javascript-cours-expert",
    title: "Javascript - cours expert",
    tagline: "Connaître les raccourcis et concepts avancés du langage.",
    description:
      "Approfondissez le langage JavaScript : closures, prototypes, asynchronisme, modules et patterns modernes pour écrire un code performant et lisible.",
    category: "Développement Web",
    level: "Avancé",
    instructor: "Thomas Lefèvre",
    hours: 12,
    rating: 4.7,
    learners: 5610,
    accent: "#0ca8d3",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
    language: "Français",
    software: "Node.js, VS Code",
    prerequisites: ["Bases de JavaScript", "Notions de programmation"],
    summary: [
      "Partie 1 : Concepts fondamentaux",
      "Partie 2 : Asynchronisme et closures",
      "Partie 3 : Patterns modernes",
    ],
    objectives: [
      "Maîtriser closures et prototypes",
      "Gérer l'asynchronisme proprement",
      "Appliquer les patterns modernes",
    ],
    skills: ["Closures", "Asynchronisme", "Modules ES", "Patterns"],
    contentTypes: ["Vidéos", "Quiz interactifs", "Études de cas pratiques"],
    parts: [
      {
        id: "p1",
        title: "Partie 1 : Concepts fondamentaux et enjeux",
        lessons: [
          {
            id: "l1",
            title: "Introduction à JavaScript : concepts fondamentaux",
            type: "video",
            duration: "8 min",
            videoLabel: "Vidéo d'introduction",
            body: lorem,
          },
          {
            id: "l2",
            title: "Closures et portée des variables",
            type: "text",
            duration: "9 min",
            body: lorem,
          },
          {
            id: "l3",
            title: "Quiz : JavaScript essentiel",
            type: "quiz",
            duration: "5 min",
            questions: [
              {
                id: "q1",
                prompt: "Que retourne typeof null en JavaScript ?",
                options: ['"null"', '"object"', '"undefined"', '"number"'],
                correctIndex: 1,
                explanation:
                  'typeof null renvoie "object", une particularité historique du langage.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "debuter-en-cpp",
    title: "Débuter en C++",
    tagline: "Découvrir le langage et applications concrètes.",
    description:
      "Une initiation au C++ moderne : syntaxe, types, pointeurs, gestion mémoire et premières applications. Idéal pour comprendre la programmation système.",
    category: "Développement Web",
    level: "Débutant",
    instructor: "Émilie Rousseau",
    hours: 8,
    rating: 4.5,
    learners: 3040,
    accent: "#08234b",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    language: "Français",
    software: "GCC, CLion",
    prerequisites: ["Aucun prérequis en C++", "Logique de base en programmation"],
    summary: [
      "Partie 1 : Premiers pas",
      "Partie 2 : Types et pointeurs",
      "Partie 3 : Gestion mémoire",
    ],
    objectives: [
      "Installer son environnement",
      "Comprendre types et pointeurs",
      "Gérer la mémoire en C++ moderne",
    ],
    skills: ["Syntaxe C++", "Pointeurs", "Gestion mémoire"],
    contentTypes: ["Vidéos", "Études de cas pratiques"],
    parts: [
      {
        id: "p1",
        title: "Partie 1 : Premiers pas",
        lessons: [
          {
            id: "l1",
            title: "Installer son environnement et compiler",
            type: "video",
            duration: "10 min",
            videoLabel: "Vidéo · mise en place",
            body: lorem,
          },
          {
            id: "l2",
            title: "Variables, types et opérateurs",
            type: "text",
            duration: "8 min",
            body: lorem,
          },
        ],
      },
    ],
  },
  {
    slug: "devenir-product-owner",
    title: "Devenir Product Owner",
    tagline: "Piloter un produit de la vision jusqu'à la livraison.",
    description:
      "Tout ce qu'un Product Owner doit savoir : backlog, user stories, priorisation, rituels agiles et collaboration avec les équipes de développement.",
    category: "Gestion de projet",
    level: "Intermédiaire",
    instructor: "Nadia Cherif",
    hours: 7,
    rating: 4.8,
    learners: 1890,
    accent: "#1f9d6b",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    language: "Français",
    prerequisites: ["Notions de gestion de projet", "Curiosité pour l'agilité"],
    summary: [
      "Partie 1 : Le rôle du Product Owner",
      "Partie 2 : Backlog et user stories",
      "Partie 3 : Rituels agiles",
    ],
    objectives: [
      "Définir une vision produit",
      "Rédiger des user stories",
      "Animer les rituels agiles",
    ],
    skills: ["Backlog", "User stories", "Priorisation", "Scrum"],
    contentTypes: ["Vidéos", "Quiz interactifs"],
    parts: [
      {
        id: "p1",
        title: "Partie 1 : Le rôle du Product Owner",
        lessons: [
          {
            id: "l1",
            title: "Vision produit et parties prenantes",
            type: "video",
            duration: "9 min",
            videoLabel: "Vidéo d'introduction",
            body: lorem,
          },
          {
            id: "l2",
            title: "Rédiger des user stories efficaces",
            type: "text",
            duration: "7 min",
            body: lorem,
          },
        ],
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function allLessons(course: Course) {
  return course.parts.flatMap((p) =>
    p.lessons.map((l) => ({ ...l, partTitle: p.title }))
  );
}

export const popularSlugs = [
  "commencer-le-html",
  "figma-avance",
  "javascript-cours-expert",
  "debuter-en-cpp",
  "cybersecurite",
  "devenir-product-owner",
];

export const studentUser: User = {
  name: "Laura Durand",
  email: "etudiant@omnilearn.tech",
  initials: "LD",
  role: "etudiant",
  enrolled: [
    { slug: "cybersecurite", progress: 45, lastLesson: "Les menaces de cybersécurité" },
    { slug: "javascript-cours-expert", progress: 70, lastLesson: "Closures et portée des variables" },
    { slug: "figma-avance", progress: 20, lastLesson: "Auto-layout et contraintes" },
  ],
  certificates: [{ course: "Commencer le HTML", date: "12 mars 2026" }],
};

// Alias conservé pour les pages réservées à l'apprenant.
export const currentUser = studentUser;

export const instructorUser: User = {
  name: "Pierre Martin",
  email: "formateur@omnilearn.tech",
  initials: "PM",
  role: "formateur",
  enrolled: [],
  certificates: [],
  created: [
    { title: "Cybersécurité niveau 1", status: "online", started: 15, finished: 6 },
    { title: "Cybersécurité niveau 2", status: "pending", started: 0, finished: 0 },
    { title: "Sécuriser ses bases de données", status: "draft", started: 0, finished: 0 },
  ],
  stats: { started: 15, finished: 6, rating: 4.0 },
};

export const adminUser: User = {
  name: "Admin OmniLearn",
  email: "admin@omnilearn.tech",
  initials: "AO",
  role: "admin",
  enrolled: [],
  certificates: [],
};

export const pendingValidations: PendingCourse[] = [
  {
    title: "Cybersécurité niveau 2",
    instructor: "Pierre Martin",
    category: "Cybersécurité",
    level: "Intermédiaire",
    submitted: "24 mai 2026",
  },
  {
    title: "Sécuriser ses bases de données",
    instructor: "Pierre Martin",
    category: "Data engineering",
    level: "Avancé",
    submitted: "22 mai 2026",
  },
  {
    title: "Introduction au Cloud AWS",
    instructor: "Sophie Marchand",
    category: "Cloud Computing",
    level: "Débutant",
    submitted: "21 mai 2026",
  },
];

export const platformStats = {
  online: 42,
  pending: pendingValidations.length,
  instructors: 12,
  learners: 3120,
};

export const recentUsers: PlatformUser[] = [
  { name: "Laura Durand", initials: "LD", role: "Apprenant", joined: "25 mai 2026" },
  { name: "Pierre Martin", initials: "PM", role: "Formateur", joined: "20 mai 2026" },
  { name: "Yanis Bouchard", initials: "YB", role: "Apprenant", joined: "19 mai 2026" },
  { name: "Sophie Marchand", initials: "SM", role: "Formateur", joined: "17 mai 2026" },
];
