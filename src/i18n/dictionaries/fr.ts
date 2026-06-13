// Dictionnaire source (français). Sert de référence de type pour en/ar.
const fr = {
  common: {
    explore: "Explorer les formations",
    viewAll: "Tout voir",
    search: "Chercher une formation",
    signIn: "Se connecter",
    signUp: "S'enregistrer",
    createAccount: "Créer un compte",
    save: "Enregistrer",
    download: "Télécharger",
    loading: "Chargement…",
    free: "100% gratuit",
  },
  nav: {
    formations: "Formations",
    dashboard: "Tableau de bord",
    support: "Soutenir la plateforme",
    moderation: "Modération",
    myAccount: "Mon compte",
    notifications: "Notifications",
    settings: "Paramètres",
    language: "Langue",
  },
  theme: {
    toDark: "Passer en mode sombre",
    toLight: "Passer en mode clair",
  },
  roles: {
    visiteur: "Visiteur",
    etudiant: "Apprenant",
    formateur: "Formateur",
    admin: "Administrateur",
  },
  footer: {
    tagline:
      "Des formations de qualité, entièrement gratuites, pour apprendre à votre rythme et faire évoluer vos compétences.",
    colPages: "Pages",
    colFormations: "Formations",
    colAccount: "Compte",
    home: "Accueil",
    catDev: "Développement Web",
    catCyber: "Cybersécurité",
    catData: "Data engineering",
    catDesign: "Design UX",
    rights: "© 2026 OmniLearn. Tous droits réservés.",
    motto: "Apprenez. Pratiquez. Progressez.",
  },
  home: {
    heroBadge: "100% gratuit, pour toujours",
    heroTitle: "Apprenez les compétences",
    heroHighlight: "tech de demain",
    heroSubtitle:
      "Vidéos, cours et quiz conçus par des experts. Progressez à votre rythme et obtenez des certificats, sans rien payer.",
    heroCtaPrimary: "Commencer gratuitement",
    heroCtaSecondary: "Voir les formations",
    heroReassurance: "Aucune carte bancaire requise",
    heroAlt: "Apprenants en formation",

    // Mockup produit du hero
    mockTitle: "Cybersécurité",
    mockSubtitle: "Module 2 · Identifier les menaces",
    mockProgressLabel: "Progression",
    mockLessonVideo: "Comprendre les menaces et leurs impacts",
    mockLessonText: "Sécuriser ses informations personnelles",
    mockLessonQuiz: "Quiz : les menaces de cybersécurité",
    mockDuration: "20 h de contenu",
    mockLevel: "Niveau débutant",

    // Bande de stats
    statsTitle: "La plateforme en quelques chiffres",
    statLearners: "Apprenants actifs",
    statCourses: "Formations en ligne",
    statHours: "Heures de contenu",
    statSatisfaction: "Apprenants satisfaits",

    popularTitle: "Des cours populaires parmi les apprenants",
    popularSubtitle:
      "Les formations les plus suivies ce mois-ci, choisies par notre communauté.",
    themesTitle: "Explorez par thème",
    themesSubtitle: "Neuf domaines, un seul endroit pour monter en compétences.",

    whyTitle: "Pourquoi apprendre avec OmniLearn ?",
    whySubtitle:
      "Tout ce qu'il faut pour apprendre sérieusement, sans le prix d'une école.",
    features: [
      "Accédez à un catalogue de formations de qualité, entièrement gratuites.",
      "Apprenez à votre rythme, où que vous soyez et quand vous le souhaitez.",
      "Bénéficiez de l'expertise de formateurs passionnés et reconnus dans leur domaine.",
      "Obtenez des certificats pour valoriser vos compétences sur le marché.",
    ],
    featureTitles: [
      "Catalogue gratuit",
      "À votre rythme",
      "Formateurs experts",
      "Certificats reconnus",
    ],

    // Témoignages
    testimonialsTitle: "Ils ont appris avec OmniLearn",
    testimonialsSubtitle:
      "Des parcours réels, de la première vidéo au premier emploi.",
    testimonials: [
      {
        quote:
          "J'ai décroché mon premier poste de développeuse en six mois. Les quiz m'ont vraiment forcée à comprendre, pas juste à regarder.",
        name: "Laura Durand",
        role: "Développeuse front-end",
      },
      {
        quote:
          "Le format vidéo plus exercices est parfait quand on travaille à côté. J'ai suivi la formation cybersécurité le soir, à mon rythme.",
        name: "Yanis Bouchard",
        role: "Analyste sécurité junior",
      },
      {
        quote:
          "Enfin une plateforme où le contenu gratuit n'est pas au rabais. Le certificat m'a aidée à négocier une évolution au travail.",
        name: "Nadia Cherif",
        role: "Cheffe de projet",
      },
    ],

    // Accès gratuit (section pricing)
    pricingTitle: "Tout est gratuit. Vraiment.",
    pricingSubtitle:
      "Pas d'essai limité, pas d'option premium cachée. Vous créez un compte, vous apprenez.",
    pricingPlan: "Compte gratuit",
    pricingPrice: "0 €",
    pricingPeriod: "pour toujours",
    pricingIncludes: [
      "Accès à toutes les formations et mises à jour",
      "Vidéos, cours écrits et quiz interactifs",
      "Suivi de progression sur tous vos appareils",
      "Certificats à télécharger à chaque réussite",
      "Aucune publicité, aucune carte bancaire",
    ],
    pricingCta: "Créer mon compte gratuit",
    pricingNote: "Inscription en moins d'une minute.",

    // FAQ
    faqTitle: "Questions fréquentes",
    faqSubtitle: "Tout ce que vous voulez savoir avant de commencer.",
    faq: [
      {
        q: "OmniLearn est-il vraiment 100% gratuit ?",
        a: "Oui. L'accès aux formations, aux quiz et aux certificats est gratuit, sans limite de durée. La plateforme vit grâce aux dons de sa communauté.",
      },
      {
        q: "Ai-je besoin d'une carte bancaire pour m'inscrire ?",
        a: "Non. La création de compte ne demande qu'une adresse email. Aucune information de paiement n'est requise, ni maintenant ni plus tard.",
      },
      {
        q: "Les certificats ont-ils de la valeur ?",
        a: "Chaque certificat atteste de la réussite des quiz et exercices d'une formation. Il s'ajoute à votre profil et se partage sur votre CV ou LinkedIn.",
      },
      {
        q: "Puis-je apprendre à mon rythme ?",
        a: "Oui. Les cours restent accessibles à tout moment et votre progression est sauvegardée. Vous reprenez exactement où vous vous êtes arrêté, sur n'importe quel appareil.",
      },
    ],

    // CTA final
    ctaTitle: "Prêt à apprendre quelque chose de nouveau ?",
    ctaSubtitle:
      "Rejoignez les apprenants qui montent en compétences chaque jour, gratuitement.",
    ctaButton: "Commencer maintenant",
  },
  card: {
    levelPrefix: "Niveau :",
    hoursUnit: "heures",
    access: "Accéder à la formation",
  },
  catalog: {
    searchPlaceholder: "Chercher une formation",
    filterLevel: "Niveau de difficulté",
    filterDuration: "Durée de vidéo",
    filterCategory: "Catégorie",
    levelBeginner: "Débutant",
    levelIntermediate: "Intermédiaire",
    levelAdvanced: "Avancé",
    durLt1: "Moins de 1 heure",
    dur13: "Entre 1 heure et 3 heures",
    dur36: "Entre 3 heures et 6 heures",
    durGt6: "Plus de 6 heures",
    resultsFor: "résultat(s) pour",
    empty: "Aucune formation ne correspond à vos filtres.",
    defaultLabel: "toutes les formations",
  },
  curriculum: {
    lessonsCount: "leçons",
  },
  lessonType: {
    video: "Vidéo",
    text: "Texte",
    quiz: "Quiz",
  },
  quiz: {
    passed: "Quiz réussi !",
    failed: "Continuez vos efforts",
    scoreLine: "Bonnes réponses",
    restart: "Recommencer le quiz",
    questionOf: "Question",
    questionSep: "sur",
    prev: "Question précédente",
    next: "Question suivante",
    validate: "Valider",
    showResult: "Voir le résultat",
  },
  course: {
    backToAll: "Toutes les formations",
    durationLabel: "Durée",
    hoursUnit: "heures",
    languageLabel: "Langue",
    levelLabel: "Niveau",
    softwareLabel: "Logiciels",
    prerequisites: "Prérequis :",
    description: "Description",
    trailer: "Bande-annonce",
    summary: "Sommaire",
    objectives: "Objectifs",
    skills: "Compétences acquises",
    contentType: "Type de contenu",
    instructorTitle: "Votre formateur",
    start: "Commencer la formation",
    videoFallback: "Lecture de la vidéo",
    programLabel: "Programme",
    lessonsCount: "leçons",
    prevLesson: "Précédent",
    nextLesson: "Leçon suivante",
    finish: "Terminer la formation",
  },
  auth: {
    loginTitle: "Se connecter",
    identifier: "Identifiant",
    identifierPlaceholder: "Votre email ou identifiant",
    password: "Mot de passe",
    remember: "Se souvenir de moi",
    forgot: "Mot de passe oublié ?",
    noAccount: "Vous n'avez pas encore de compte ?",
    orContinue: "Ou continuez avec",
    invalid: "Identifiant ou mot de passe incorrect.",
    logout: "Se déconnecter",
    loginImageAlt: "Apprenant connecté à la plateforme",
  },
  notFound: {
    title: "Page introuvable",
    text: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
} as const;

export default fr;

/**
 * Élargit les types littéraux de `fr` vers `string` tout en conservant
 * la structure exacte : mêmes clés et mêmes longueurs de tableaux (tuples).
 * Les autres dictionnaires (en, ar) doivent donc reproduire la structure à
 * l'identique, sans être contraints aux mêmes valeurs textuelles françaises.
 */
type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type Dict = Widen<typeof fr>;
