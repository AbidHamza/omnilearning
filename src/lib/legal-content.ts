// Contenu des pages légales (mentions, confidentialité, CGU, contact, à propos).
// Isolé ici volontairement : ce texte est long, spécifique à chaque page et propre
// à chaque langue, il n'a donc pas sa place dans les dictionnaires d'interface
// (src/i18n). Les pages sous src/app/[lang]/* lisent le bloc correspondant à la
// locale et le rendent via le composant LegalDocument.
import type { Metadata } from "next";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { alternatesFor, siteName, siteUrl } from "@/lib/site";

/** Adresse de contact unique de la LLC, réutilisée dans le texte et les liens mailto. */
export const legalEmail = "info@omnilearn.org";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalPage {
  /** Sert d'<h1> et de base au <title> SEO. */
  title: string;
  /** Meta-description propre à la page (dans la langue de la page). */
  description: string;
  /** Chapeau introductif affiché sous le titre. */
  lead: string;
  /** Ligne « dernière mise à jour » pour les documents contractuels. */
  updated?: string;
  sections: LegalSection[];
}

export interface LegalContent {
  mentionsLegales: LegalPage;
  confidentialite: LegalPage;
  cgu: LegalPage;
  contact: LegalPage;
  aPropos: LegalPage;
}

export type LegalPageKey = keyof LegalContent;

const fr: LegalContent = {
  mentionsLegales: {
    title: "Mentions légales",
    description:
      "Éditeur, hébergement et informations légales de la plateforme OmniLearn, éditée par OmniLearnConsultingCommerce LLC (Wyoming, États-Unis).",
    lead: "Les informations ci-dessous identifient l'éditeur du site omnilearn.org et précisent le cadre légal de son fonctionnement.",
    updated: "Dernière mise à jour : 2 juillet 2026",
    sections: [
      {
        heading: "Éditeur du site",
        blocks: [
          {
            type: "p",
            text: "OmniLearn est une plateforme éditée par OmniLearnConsultingCommerce LLC, société à responsabilité limitée (Limited Liability Company) immatriculée dans l'État du Wyoming, aux États-Unis.",
          },
          {
            type: "p",
            text: "Contact : info@omnilearn.org. Site : https://omnilearn.org.",
          },
        ],
      },
      {
        heading: "Direction de la publication",
        blocks: [
          {
            type: "p",
            text: "La direction de la publication est assurée par la direction d'OmniLearnConsultingCommerce LLC. Pour toute question relative au contenu publié, écrivez à info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Hébergement",
        blocks: [
          {
            type: "p",
            text: "Le site est hébergé sur une infrastructure dédiée située en Europe. Pour des raisons de sécurité, les coordonnées techniques précises de l'hébergeur ne sont pas exposées publiquement ; une demande motivée peut être adressée à info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Propriété intellectuelle",
        blocks: [
          {
            type: "p",
            text: "Les cours, textes, vidéos, quiz, illustrations, exemples de code et éléments graphiques publiés sur OmniLearn sont créés en interne ou utilisés avec autorisation. Ils sont protégés par le droit d'auteur. Vous pouvez les consulter et vous en servir dans le cadre de votre apprentissage personnel. Toute reproduction, diffusion ou revente sans accord écrit préalable est interdite.",
          },
          {
            type: "p",
            text: "La marque OmniLearn et son logo appartiennent à OmniLearnConsultingCommerce LLC.",
          },
        ],
      },
      {
        heading: "Liens externes et responsabilité",
        blocks: [
          {
            type: "p",
            text: "Certains cours renvoient vers des ressources externes : documentation, dépôts de code, outils en ligne. Ces sites restent sous la responsabilité de leurs propres éditeurs ; OmniLearn ne contrôle pas leur contenu et ne saurait en répondre.",
          },
        ],
      },
      {
        heading: "Droit applicable",
        blocks: [
          {
            type: "p",
            text: "Les présentes mentions relèvent du droit de l'État du Wyoming (États-Unis). Les utilisateurs situés dans l'Union européenne conservent le bénéfice des règles impératives de protection des consommateurs et des données personnelles applicables dans leur pays de résidence.",
          },
        ],
      },
    ],
  },

  confidentialite: {
    title: "Politique de confidentialité",
    description:
      "Quelles données OmniLearn collecte, pourquoi, combien de temps, et comment exercer vos droits (RGPD, CCPA). Les paiements passent par Stripe : aucune donnée bancaire sur nos serveurs.",
    lead: "Cette page explique concrètement quelles données nous traitons quand vous utilisez OmniLearn, dans quel but, et les droits dont vous disposez.",
    updated: "Dernière mise à jour : 2 juillet 2026",
    sections: [
      {
        heading: "Responsable du traitement",
        blocks: [
          {
            type: "p",
            text: "Le responsable du traitement est OmniLearnConsultingCommerce LLC (Wyoming, États-Unis). Pour toute question relative à vos données : info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Données que nous collectons",
        blocks: [
          {
            type: "list",
            items: [
              "Compte : votre adresse e-mail et votre mot de passe. Le mot de passe n'est jamais stocké en clair, il est haché avec bcrypt.",
              "Connexion Google (facultative) : si vous choisissez de vous connecter avec Google, nous recevons votre adresse e-mail et votre nom tels que Google nous les transmet.",
              "Progression pédagogique : leçons terminées, points d'expérience (XP), badges et niveau. Ces données servent à afficher votre avancement et le classement.",
              "Dons : lorsque vous soutenez la plateforme, le paiement est traité par Stripe. Nous recevons le montant, la date et un identifiant de transaction, mais jamais votre numéro de carte.",
              "Données techniques : journaux de connexion et cookies nécessaires au fonctionnement du site.",
            ],
          },
        ],
      },
      {
        heading: "Cookies",
        blocks: [
          {
            type: "list",
            items: [
              "Cookie de session d'authentification : il vous garde connecté. Sans lui, impossible de rester identifié.",
              "NEXT_LOCALE : mémorise votre langue (français, anglais ou arabe).",
              "Mesure d'audience : le cas échéant, un cookie statistique anonyme nous aide à comprendre quelles pages sont consultées.",
            ],
          },
        ],
      },
      {
        heading: "Finalités et base légale",
        blocks: [
          {
            type: "list",
            items: [
              "Créer et sécuriser votre compte, vous authentifier : exécution du contrat.",
              "Suivre votre progression et animer la gamification : exécution du contrat et intérêt légitime.",
              "Traiter les dons via Stripe : exécution du contrat et obligations comptables.",
              "Assurer la sécurité et prévenir les abus : intérêt légitime.",
            ],
          },
        ],
      },
      {
        heading: "Durée de conservation",
        blocks: [
          {
            type: "list",
            items: [
              "Données de compte et de progression : conservées tant que votre compte est actif ; supprimées lorsque vous le fermez.",
              "Données de dons : conservées le temps requis par les obligations comptables et fiscales.",
              "Journaux techniques : conservés quelques mois puis purgés.",
            ],
          },
        ],
      },
      {
        heading: "Sous-traitants et partage",
        blocks: [
          {
            type: "p",
            text: "Nous ne vendons pas vos données. Elles sont traitées par un petit nombre de prestataires nécessaires au service :",
          },
          {
            type: "list",
            items: [
              "Stripe (paiement des dons) : reçoit les informations de paiement directement, sur ses propres serveurs.",
              "Google (connexion OAuth, si vous l'utilisez).",
              "Notre hébergeur, pour le stockage sécurisé des données.",
            ],
          },
        ],
      },
      {
        heading: "Vos droits (RGPD)",
        blocks: [
          {
            type: "p",
            text: "Si vous résidez dans l'Union européenne, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Pour les exercer, écrivez à info@omnilearn.org depuis l'adresse liée à votre compte. Vous pouvez aussi introduire une réclamation auprès de l'autorité de protection des données de votre pays.",
          },
        ],
      },
      {
        heading: "Résidents de Californie (CCPA)",
        blocks: [
          {
            type: "p",
            text: "Si vous résidez en Californie, vous pouvez demander quelles catégories de données personnelles nous détenons à votre sujet, en obtenir la suppression et refuser toute vente de données, étant précisé que nous ne vendons pas de données personnelles. Les demandes se font à info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Sécurité",
        blocks: [
          {
            type: "p",
            text: "Les mots de passe sont hachés, les échanges chiffrés en HTTPS et l'accès aux données restreint. Aucun système n'étant infaillible, choisissez de préférence un mot de passe unique, réservé à OmniLearn.",
          },
        ],
      },
      {
        heading: "Modifications",
        blocks: [
          {
            type: "p",
            text: "Cette politique peut évoluer si le service change. La date de dernière mise à jour figure en haut de page.",
          },
        ],
      },
    ],
  },

  cgu: {
    title: "Conditions générales d'utilisation",
    description:
      "Les règles d'utilisation d'OmniLearn : accès freemium aux cours, création de compte, dons facultatifs via Stripe, propriété du contenu et droit applicable (Wyoming).",
    lead: "En utilisant OmniLearn, vous acceptez les règles ci-dessous. Elles encadrent l'accès aux cours, la création de compte et les dons.",
    updated: "Dernière mise à jour : 2 juillet 2026",
    sections: [
      {
        heading: "Objet",
        blocks: [
          {
            type: "p",
            text: "OmniLearn est une plateforme d'apprentissage en ligne consacrée aux compétences techniques. Ces conditions régissent votre utilisation du site omnilearn.org.",
          },
        ],
      },
      {
        heading: "Accès aux cours (modèle freemium)",
        blocks: [
          {
            type: "p",
            text: "Les deux premières leçons de chaque cours sont en accès libre, sans inscription. La suite des leçons, les quiz, le suivi de progression et les badges nécessitent la création d'un compte gratuit.",
          },
        ],
      },
      {
        heading: "Création de compte",
        blocks: [
          {
            type: "list",
            items: [
              "Vous fournissez une adresse e-mail valide et choisissez un mot de passe, ou vous vous connectez avec Google.",
              "Un compte est personnel. Vous êtes responsable de la confidentialité de vos identifiants.",
              "Vous devez avoir la capacité juridique de contracter ; les mineurs utilisent la plateforme sous la responsabilité d'un parent ou tuteur.",
            ],
          },
        ],
      },
      {
        heading: "Comportement attendu",
        blocks: [
          {
            type: "list",
            items: [
              "Ne pas partager, revendre ni rediffuser le contenu des cours en dehors de votre usage personnel.",
              "Ne pas tenter de contourner les limitations d'accès ni perturber le fonctionnement du service.",
              "Rester correct dans les espaces communautaires (avis, commentaires) : pas de propos haineux, de spam ni de contenu illégal.",
            ],
          },
        ],
      },
      {
        heading: "Dons",
        blocks: [
          {
            type: "p",
            text: "Le soutien financier à OmniLearn est facultatif ; les dons sont traités par Stripe. Un don n'ouvre pas droit à une contrepartie commerciale et, par nature, n'est pas remboursable une fois versé, sauf erreur manifeste que vous nous signalez rapidement à info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Propriété du contenu",
        blocks: [
          {
            type: "p",
            text: "Le contenu pédagogique reste la propriété d'OmniLearnConsultingCommerce LLC ou de ses partenaires. Votre compte vous donne un droit d'accès personnel, non exclusif et non transférable.",
          },
        ],
      },
      {
        heading: "Absence de garantie de résultat",
        blocks: [
          {
            type: "p",
            text: "Nous mettons du soin dans nos cours, mais l'apprentissage dépend de votre travail. Nous ne garantissons ni un emploi, ni la réussite à un examen, ni un résultat professionnel précis. Le contenu est fourni « en l'état ».",
          },
        ],
      },
      {
        heading: "Suppression de compte",
        blocks: [
          {
            type: "p",
            text: "Vous pouvez fermer votre compte à tout moment depuis vos paramètres ou en écrivant à info@omnilearn.org ; vos données personnelles sont alors supprimées. Nous pouvons suspendre un compte en cas de manquement grave à ces conditions.",
          },
        ],
      },
      {
        heading: "Modification des conditions",
        blocks: [
          {
            type: "p",
            text: "Ces conditions peuvent être ajustées. En cas de changement notable, nous vous en informons ; l'usage continu du service vaut acceptation.",
          },
        ],
      },
      {
        heading: "Droit applicable",
        blocks: [
          {
            type: "p",
            text: "Ces conditions relèvent du droit de l'État du Wyoming (États-Unis), sans préjudice des protections impératives dont bénéficient les consommateurs de l'Union européenne.",
          },
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    description:
      "Contactez OmniLearn : support, demandes RGPD/CCPA sur vos données, presse et partenariats. Une seule adresse : info@omnilearn.org.",
    lead: "Une question, une demande liée à vos données ou une sollicitation presse ? Écrivez-nous : une seule adresse suffit.",
    sections: [
      {
        heading: "Par e-mail",
        blocks: [
          {
            type: "p",
            text: "Écrivez à info@omnilearn.org. C'est l'adresse unique pour toutes vos demandes ; nous n'avons pas de formulaire automatisé, un e-mail direct est plus simple et mieux suivi.",
          },
        ],
      },
      {
        heading: "Selon votre demande",
        blocks: [
          {
            type: "list",
            items: [
              "Support et pédagogie : problème de compte, question sur un cours, bug rencontré.",
              "Données personnelles (RGPD/CCPA) : accès, rectification ou suppression de vos données. Écrivez depuis l'adresse liée à votre compte.",
              "Presse et partenariats : présentation d'OmniLearn, projets de collaboration.",
            ],
          },
        ],
      },
      {
        heading: "Délai de réponse",
        blocks: [
          {
            type: "p",
            text: "Nous répondons généralement sous deux à trois jours ouvrés. Les demandes relatives aux données personnelles sont traitées dans le délai prévu par la réglementation.",
          },
        ],
      },
    ],
  },

  aPropos: {
    title: "À propos d'OmniLearn",
    description:
      "OmniLearn, plateforme d'apprentissage tech éditée par OmniLearnConsultingCommerce LLC : cours créés en interne, modèle freemium financé par les dons, mission d'accès au savoir.",
    lead: "OmniLearn est une plateforme pour apprendre les métiers techniques sans payer pour commencer. Voici d'où ça vient et comment ça tourne.",
    sections: [
      {
        heading: "Pourquoi",
        blocks: [
          {
            type: "p",
            text: "L'idée de départ est simple : les bonnes ressources pour apprendre à coder, sécuriser un système ou manipuler des données existent, mais elles sont éparpillées, souvent payantes dès la première leçon, et rarement construites comme un vrai parcours. On voulait un endroit où on peut commencer tout de suite, gratuitement, et progresser à son rythme.",
          },
        ],
      },
      {
        heading: "Comment ça marche",
        blocks: [
          {
            type: "p",
            text: "Chaque cours s'ouvre sur deux leçons libres. Si le sujet vous parle, un compte gratuit débloque la suite : les quiz, le suivi de progression, les badges et le classement. La gamification n'est pas là pour faire joli, elle aide à tenir dans la durée, là où beaucoup abandonnent.",
          },
        ],
      },
      {
        heading: "Qui édite la plateforme",
        blocks: [
          {
            type: "p",
            text: "OmniLearn est édité par OmniLearnConsultingCommerce LLC, une société immatriculée dans le Wyoming (États-Unis). Les cours sont écrits et produits en interne, pas agrégés au hasard depuis le web.",
          },
        ],
      },
      {
        heading: "Le modèle économique",
        blocks: [
          {
            type: "p",
            text: "Pas de paywall caché, pas de revente de vos données. La plateforme est financée par les dons de celles et ceux qui en tirent de la valeur et veulent qu'elle reste ouverte. C'est un pari : tant que le contenu est utile, une partie des apprenants soutient le reste.",
          },
        ],
      },
      {
        heading: "La suite",
        blocks: [
          {
            type: "p",
            text: "Le catalogue s'étoffe cours après cours. Si vous voulez proposer un sujet, signaler une erreur ou juste dire bonjour, l'adresse est info@omnilearn.org.",
          },
        ],
      },
    ],
  },
};

const en: LegalContent = {
  mentionsLegales: {
    title: "Legal notice",
    description:
      "Publisher, hosting and legal information for OmniLearn, operated by OmniLearnConsultingCommerce LLC (Wyoming, USA).",
    lead: "The information below identifies who runs omnilearn.org and sets out the legal framework behind it.",
    updated: "Last updated: 2 July 2026",
    sections: [
      {
        heading: "Publisher",
        blocks: [
          {
            type: "p",
            text: "OmniLearn is a platform operated by OmniLearnConsultingCommerce LLC, a limited liability company registered in the State of Wyoming, United States.",
          },
          {
            type: "p",
            text: "Contact: info@omnilearn.org. Website: https://omnilearn.org.",
          },
        ],
      },
      {
        heading: "Editorial responsibility",
        blocks: [
          {
            type: "p",
            text: "Editorial responsibility for published content sits with the management of OmniLearnConsultingCommerce LLC. For any question about what we publish, write to info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Hosting",
        blocks: [
          {
            type: "p",
            text: "The site is hosted on dedicated infrastructure located in Europe. For security reasons we don't publish the host's precise technical details; a reasoned request can be sent to info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Intellectual property",
        blocks: [
          {
            type: "p",
            text: "Courses, text, videos, quizzes, illustrations, sample code and graphics published on OmniLearn are produced in-house or used under licence, and are protected by copyright. You may view and use them for your own learning. Copying, redistributing or reselling them without prior written consent is not allowed.",
          },
          {
            type: "p",
            text: "The OmniLearn name and logo belong to OmniLearnConsultingCommerce LLC.",
          },
        ],
      },
      {
        heading: "External links and liability",
        blocks: [
          {
            type: "p",
            text: "Some courses link out to external resources: documentation, code repositories, online tools. Those sites remain the responsibility of their own publishers; OmniLearn does not control their content and cannot answer for it.",
          },
        ],
      },
      {
        heading: "Governing law",
        blocks: [
          {
            type: "p",
            text: "This notice is governed by the law of the State of Wyoming (United States). Users located in the European Union keep the benefit of the mandatory consumer and data-protection rules that apply where they live.",
          },
        ],
      },
    ],
  },

  confidentialite: {
    title: "Privacy policy",
    description:
      "What OmniLearn collects, why, how long we keep it, and how to exercise your rights (GDPR, CCPA). Payments run through Stripe, so card details never touch our servers.",
    lead: "This page spells out, in plain terms, what we do with your data when you use OmniLearn, why, and the rights you have.",
    updated: "Last updated: 2 July 2026",
    sections: [
      {
        heading: "Data controller",
        blocks: [
          {
            type: "p",
            text: "The controller is OmniLearnConsultingCommerce LLC (Wyoming, USA). For anything about your data: info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "What we collect",
        blocks: [
          {
            type: "list",
            items: [
              "Account: your email address and password. The password is never stored in the clear; it is hashed with bcrypt.",
              "Google sign-in (optional): if you sign in with Google, we receive your email and name as Google passes them to us.",
              "Learning progress: completed lessons, experience points (XP), badges and level. We use these to show your progress and the leaderboard.",
              "Donations: when you support the platform, payment is handled by Stripe. We receive the amount, the date and a transaction ID, but never your card number.",
              "Technical data: connection logs and the cookies the site needs to run.",
            ],
          },
        ],
      },
      {
        heading: "Cookies",
        blocks: [
          {
            type: "list",
            items: [
              "Authentication session cookie: keeps you signed in. Without it, you can't stay logged in.",
              "NEXT_LOCALE: remembers your language (English, French or Arabic).",
              "Audience measurement: where used, an anonymous analytics cookie helps us see which pages get read.",
            ],
          },
        ],
      },
      {
        heading: "Purposes and legal basis",
        blocks: [
          {
            type: "list",
            items: [
              "Creating and securing your account, and signing you in: performance of the contract.",
              "Tracking progress and running the gamification: contract and legitimate interest.",
              "Processing donations through Stripe: contract and accounting obligations.",
              "Keeping the service secure and preventing abuse: legitimate interest.",
            ],
          },
        ],
      },
      {
        heading: "How long we keep it",
        blocks: [
          {
            type: "list",
            items: [
              "Account and progress data: kept while your account is active; deleted when you close it.",
              "Donation records: kept for as long as accounting and tax rules require.",
              "Technical logs: kept for a few months, then purged.",
            ],
          },
        ],
      },
      {
        heading: "Processors and sharing",
        blocks: [
          {
            type: "p",
            text: "We don't sell your data. A small set of providers process it so the service can run:",
          },
          {
            type: "list",
            items: [
              "Stripe (donation payments): receives payment details directly, on its own servers.",
              "Google (OAuth sign-in, if you use it).",
              "Our host, for secure data storage.",
            ],
          },
        ],
      },
      {
        heading: "Your rights (GDPR)",
        blocks: [
          {
            type: "p",
            text: "If you live in the European Union, you have the rights of access, rectification, erasure, restriction, objection and portability. To use them, write to info@omnilearn.org from the address tied to your account. You may also lodge a complaint with your national data-protection authority.",
          },
        ],
      },
      {
        heading: "California residents (CCPA)",
        blocks: [
          {
            type: "p",
            text: "If you live in California, you can ask which categories of personal data we hold about you, request their deletion, and opt out of any sale of data, noting that we do not sell personal data. Requests go to info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Security",
        blocks: [
          {
            type: "p",
            text: "Passwords are hashed, traffic is encrypted over HTTPS, and access to data is restricted. No system is perfect, so please pick a unique password kept just for OmniLearn.",
          },
        ],
      },
      {
        heading: "Changes",
        blocks: [
          {
            type: "p",
            text: "This policy may change as the service does. The last-updated date sits at the top of the page.",
          },
        ],
      },
    ],
  },

  cgu: {
    title: "Terms of use",
    description:
      "How OmniLearn works: freemium access to courses, account creation, optional donations via Stripe, content ownership and governing law (Wyoming).",
    lead: "By using OmniLearn you agree to the rules below. They cover access to courses, creating an account, and donations.",
    updated: "Last updated: 2 July 2026",
    sections: [
      {
        heading: "Purpose",
        blocks: [
          {
            type: "p",
            text: "OmniLearn is an online learning platform focused on technical skills. These terms govern your use of omnilearn.org.",
          },
        ],
      },
      {
        heading: "Access to courses (freemium)",
        blocks: [
          {
            type: "p",
            text: "The first two lessons of every course are free, with no sign-up. The rest of the lessons, the quizzes, progress tracking and badges require a free account.",
          },
        ],
      },
      {
        heading: "Creating an account",
        blocks: [
          {
            type: "list",
            items: [
              "You provide a valid email and choose a password, or sign in with Google.",
              "An account is personal. You are responsible for keeping your credentials private.",
              "You must have the legal capacity to enter a contract; minors use the platform under a parent or guardian's responsibility.",
            ],
          },
        ],
      },
      {
        heading: "Expected behaviour",
        blocks: [
          {
            type: "list",
            items: [
              "Don't share, resell or redistribute course content beyond your personal use.",
              "Don't try to bypass access limits or disrupt the service.",
              "Stay civil in community spaces (reviews, comments): no hate speech, spam or illegal content.",
            ],
          },
        ],
      },
      {
        heading: "Donations",
        blocks: [
          {
            type: "p",
            text: "Supporting OmniLearn financially is optional, and donations are handled by Stripe. A donation buys no commercial benefit and, by its nature, isn't refundable once paid, save for a clear error you flag promptly at info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Ownership of content",
        blocks: [
          {
            type: "p",
            text: "Course content remains the property of OmniLearnConsultingCommerce LLC or its partners. Your account gives you a personal, non-exclusive, non-transferable right to access it.",
          },
        ],
      },
      {
        heading: "No guarantee of results",
        blocks: [
          {
            type: "p",
            text: "We put care into our courses, but learning depends on your own work. We don't promise a job, an exam pass, or any specific career outcome. Content is provided “as is”.",
          },
        ],
      },
      {
        heading: "Closing an account",
        blocks: [
          {
            type: "p",
            text: "You can close your account at any time from your settings or by writing to info@omnilearn.org; your personal data is then deleted. We may suspend an account for a serious breach of these terms.",
          },
        ],
      },
      {
        heading: "Changes to the terms",
        blocks: [
          {
            type: "p",
            text: "These terms may be adjusted. If something material changes we'll let you know; continued use counts as acceptance.",
          },
        ],
      },
      {
        heading: "Governing law",
        blocks: [
          {
            type: "p",
            text: "These terms are governed by the law of the State of Wyoming (United States), without prejudice to the mandatory protections EU consumers enjoy.",
          },
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    description:
      "Get in touch with OmniLearn: support, GDPR/CCPA requests about your data, press and partnerships. One address: info@omnilearn.org.",
    lead: "A question, a request about your data, or a press enquiry? Write to us: one address covers it.",
    sections: [
      {
        heading: "By email",
        blocks: [
          {
            type: "p",
            text: "Write to info@omnilearn.org. It's the single address for everything; we don't run an automated form, and a direct email is simpler and easier to follow up.",
          },
        ],
      },
      {
        heading: "Depending on your request",
        blocks: [
          {
            type: "list",
            items: [
              "Support and learning: account trouble, a question about a course, a bug you hit.",
              "Personal data (GDPR/CCPA): access, correction or deletion of your data. Write from the address tied to your account.",
              "Press and partnerships: introducing OmniLearn, collaboration ideas.",
            ],
          },
        ],
      },
      {
        heading: "Response time",
        blocks: [
          {
            type: "p",
            text: "We usually reply within two to three business days. Data-protection requests are handled within the time the law allows.",
          },
        ],
      },
    ],
  },

  aPropos: {
    title: "About OmniLearn",
    description:
      "OmniLearn is a tech learning platform run by OmniLearnConsultingCommerce LLC: courses built in-house, a freemium model funded by donations, and a mission of open access to knowledge.",
    lead: "OmniLearn is a place to learn technical skills without paying to get started. Here's where it comes from and how it runs.",
    sections: [
      {
        heading: "Why",
        blocks: [
          {
            type: "p",
            text: "The starting point is simple: good resources for learning to code, secure a system or work with data exist, but they're scattered, often paywalled from the first lesson, and rarely built as a real path. We wanted somewhere you can start straight away, for free, and progress at your own pace.",
          },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          {
            type: "p",
            text: "Every course opens with two free lessons. If it clicks, a free account unlocks the rest: the quizzes, progress tracking, badges and the leaderboard. The gamification isn't decoration, it helps you keep going where a lot of people give up.",
          },
        ],
      },
      {
        heading: "Who runs it",
        blocks: [
          {
            type: "p",
            text: "OmniLearn is operated by OmniLearnConsultingCommerce LLC, a company registered in Wyoming (United States). Courses are written and produced in-house, not scraped together from around the web.",
          },
        ],
      },
      {
        heading: "The business model",
        blocks: [
          {
            type: "p",
            text: "No hidden paywall, no reselling your data. The platform is funded by donations from the people who get something out of it and want it to stay open. It's a bet: as long as the content is useful, some learners will support the rest.",
          },
        ],
      },
      {
        heading: "What's next",
        blocks: [
          {
            type: "p",
            text: "The catalogue grows course by course. If you want to suggest a topic, report a mistake or just say hello, the address is info@omnilearn.org.",
          },
        ],
      },
    ],
  },
};

const ar: LegalContent = {
  mentionsLegales: {
    title: "الإشعارات القانونية",
    description:
      "الناشر والاستضافة والمعلومات القانونية لمنصّة OmniLearn التي تديرها شركة OmniLearnConsultingCommerce LLC (وايومنغ، الولايات المتحدة).",
    lead: "تحدّد المعلومات التالية الجهة الناشرة لموقع omnilearn.org وتوضّح الإطار القانوني لعمله.",
    updated: "آخر تحديث: 2 يوليو 2026",
    sections: [
      {
        heading: "الجهة الناشرة",
        blocks: [
          {
            type: "p",
            text: "OmniLearn منصّة تديرها شركة OmniLearnConsultingCommerce LLC، وهي شركة ذات مسؤولية محدودة مسجّلة في ولاية وايومنغ بالولايات المتحدة الأمريكية.",
          },
          {
            type: "p",
            text: "للتواصل: info@omnilearn.org. الموقع: https://omnilearn.org.",
          },
        ],
      },
      {
        heading: "إدارة النشر",
        blocks: [
          {
            type: "p",
            text: "تتولّى إدارة شركة OmniLearnConsultingCommerce LLC مسؤولية النشر. ولأي استفسار يتعلّق بالمحتوى المنشور، راسلونا على info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "الاستضافة",
        blocks: [
          {
            type: "p",
            text: "يُستضاف الموقع على بنية تحتية مخصّصة داخل أوروبا. ولأسباب أمنية لا نعرض التفاصيل التقنية الدقيقة للمستضيف علنًا، ويمكن تقديم طلب مبرّر إلى info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "الملكية الفكرية",
        blocks: [
          {
            type: "p",
            text: "الدورات والنصوص ومقاطع الفيديو والاختبارات والرسوم وأمثلة الشيفرة والعناصر المرئية المنشورة على OmniLearn منتَجة داخليًا أو مستخدَمة بترخيص، وهي محمية بموجب حقوق المؤلّف. يمكنكم الاطّلاع عليها واستخدامها في إطار تعلّمكم الشخصي، ويُمنع نسخها أو نشرها أو إعادة بيعها دون إذن كتابي مسبق.",
          },
          {
            type: "p",
            text: "علامة OmniLearn وشعارها مملوكان لشركة OmniLearnConsultingCommerce LLC.",
          },
        ],
      },
      {
        heading: "الروابط الخارجية والمسؤولية",
        blocks: [
          {
            type: "p",
            text: "تحيل بعض الدورات إلى مصادر خارجية: توثيق ومستودعات شيفرة وأدوات على الإنترنت. تبقى هذه المواقع على مسؤولية ناشريها، ولا تتحكّم OmniLearn في محتواها ولا تتحمّل مسؤوليته.",
          },
        ],
      },
      {
        heading: "القانون الواجب التطبيق",
        blocks: [
          {
            type: "p",
            text: "تخضع هذه الإشعارات لقانون ولاية وايومنغ (الولايات المتحدة). ويحتفظ المستخدمون في الاتحاد الأوروبي بالحقوق الإلزامية لحماية المستهلك والبيانات الشخصية السارية في بلد إقامتهم.",
          },
        ],
      },
    ],
  },

  confidentialite: {
    title: "سياسة الخصوصية",
    description:
      "ما البيانات التي تجمعها OmniLearn ولماذا ومدّة الاحتفاظ بها وكيفية ممارسة حقوقك (GDPR وCCPA). المدفوعات تمرّ عبر Stripe، فلا تمرّ بيانات البطاقة على خوادمنا.",
    lead: "توضّح هذه الصفحة بشكل ملموس البيانات التي نعالجها عند استخدامك OmniLearn، والغرض منها، والحقوق المتاحة لك.",
    updated: "آخر تحديث: 2 يوليو 2026",
    sections: [
      {
        heading: "المسؤول عن المعالجة",
        blocks: [
          {
            type: "p",
            text: "المسؤول عن المعالجة هو شركة OmniLearnConsultingCommerce LLC (وايومنغ، الولايات المتحدة). ولأي أمر يخصّ بياناتك: info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "البيانات التي نجمعها",
        blocks: [
          {
            type: "list",
            items: [
              "الحساب: عنوان بريدك الإلكتروني وكلمة المرور. لا تُخزَّن كلمة المرور بصيغة واضحة أبدًا، بل تُشفَّر باستخدام خوارزمية bcrypt.",
              "تسجيل الدخول عبر Google (اختياري): إذا اخترت الدخول عبر Google، نتلقّى عنوان بريدك واسمك كما يرسلهما Google إلينا.",
              "التقدّم التعليمي: الدروس المكتملة ونقاط الخبرة (XP) والأوسمة والمستوى. تُستخدم هذه البيانات لعرض تقدّمك ولوحة الترتيب.",
              "التبرّعات: عند دعمك للمنصّة تُعالَج عملية الدفع بواسطة Stripe. نتلقّى المبلغ والتاريخ ومعرّف العملية، لكننا لا نتلقّى رقم بطاقتك.",
              "بيانات تقنية: سجلّات الدخول وملفّات تعريف الارتباط اللازمة لتشغيل الموقع.",
            ],
          },
        ],
      },
      {
        heading: "ملفّات تعريف الارتباط",
        blocks: [
          {
            type: "list",
            items: [
              "ملفّ جلسة المصادقة: يُبقيك مسجّلًا للدخول، وبدونه يتعذّر البقاء متصلًا بحسابك.",
              "NEXT_LOCALE: يحفظ لغتك (العربية أو الفرنسية أو الإنجليزية).",
              "قياس الزيارات: عند الاقتضاء، يساعدنا ملفّ إحصائي مجهول الهوية على معرفة الصفحات الأكثر اطّلاعًا.",
            ],
          },
        ],
      },
      {
        heading: "الغايات والأساس القانوني",
        blocks: [
          {
            type: "list",
            items: [
              "إنشاء حسابك وتأمينه والتحقّق من هويتك: تنفيذ العقد.",
              "متابعة تقدّمك وتشغيل عناصر التحفيز: تنفيذ العقد والمصلحة المشروعة.",
              "معالجة التبرّعات عبر Stripe: تنفيذ العقد والالتزامات المحاسبية.",
              "ضمان الأمن ومنع إساءة الاستخدام: المصلحة المشروعة.",
            ],
          },
        ],
      },
      {
        heading: "مدّة الاحتفاظ",
        blocks: [
          {
            type: "list",
            items: [
              "بيانات الحساب والتقدّم: تُحفظ ما دام حسابك نشطًا، وتُحذف عند إغلاقه.",
              "بيانات التبرّعات: تُحفظ للمدّة التي تفرضها الالتزامات المحاسبية والضريبية.",
              "السجلّات التقنية: تُحفظ بضعة أشهر ثم تُمحى.",
            ],
          },
        ],
      },
      {
        heading: "مقدّمو الخدمة والمشاركة",
        blocks: [
          {
            type: "p",
            text: "لا نبيع بياناتك. تعالجها مجموعة صغيرة من مقدّمي الخدمات اللازمين لتشغيل الخدمة:",
          },
          {
            type: "list",
            items: [
              "Stripe (معالجة مدفوعات التبرّعات): تتلقّى بيانات الدفع مباشرةً على خوادمها الخاصة.",
              "Google (تسجيل الدخول عبر OAuth إذا استخدمته).",
              "مستضيفنا، لتخزين البيانات بشكل آمن.",
            ],
          },
        ],
      },
      {
        heading: "حقوقك (GDPR)",
        blocks: [
          {
            type: "p",
            text: "إذا كنت مقيمًا في الاتحاد الأوروبي، فلك حقوق الوصول والتصحيح والمحو والتقييد والاعتراض ونقل البيانات. ولممارستها راسلنا على info@omnilearn.org من العنوان المرتبط بحسابك. ويمكنك أيضًا تقديم شكوى إلى سلطة حماية البيانات في بلدك.",
          },
        ],
      },
      {
        heading: "المقيمون في كاليفورنيا (CCPA)",
        blocks: [
          {
            type: "p",
            text: "إذا كنت مقيمًا في كاليفورنيا، يمكنك طلب معرفة فئات البيانات الشخصية التي نحتفظ بها عنك، وطلب حذفها، ورفض أي بيع للبيانات، مع التأكيد أننا لا نبيع البيانات الشخصية. وتُرسَل الطلبات إلى info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "الأمان",
        blocks: [
          {
            type: "p",
            text: "تُشفَّر كلمات المرور، وتجري الاتصالات عبر HTTPS، والوصول إلى البيانات مقيَّد. ولأنّ أي نظام ليس محصّنًا تمامًا، يُفضَّل اختيار كلمة مرور فريدة مخصّصة لـ OmniLearn وحده.",
          },
        ],
      },
      {
        heading: "التعديلات",
        blocks: [
          {
            type: "p",
            text: "قد تتطوّر هذه السياسة مع تغيّر الخدمة، ويُذكر تاريخ آخر تحديث أعلى الصفحة.",
          },
        ],
      },
    ],
  },

  cgu: {
    title: "شروط الاستخدام",
    description:
      "قواعد استخدام OmniLearn: الوصول المجاني الجزئي إلى الدورات، وإنشاء الحساب، والتبرّعات الاختيارية عبر Stripe، وملكية المحتوى، والقانون الواجب التطبيق (وايومنغ).",
    lead: "باستخدامك OmniLearn فإنك توافق على القواعد التالية التي تنظّم الوصول إلى الدورات وإنشاء الحساب والتبرّعات.",
    updated: "آخر تحديث: 2 يوليو 2026",
    sections: [
      {
        heading: "الغرض",
        blocks: [
          {
            type: "p",
            text: "OmniLearn منصّة تعلّم إلكتروني مخصّصة للمهارات التقنية. تنظّم هذه الشروط استخدامك لموقع omnilearn.org.",
          },
        ],
      },
      {
        heading: "الوصول إلى الدورات (نموذج مجاني جزئيًا)",
        blocks: [
          {
            type: "p",
            text: "أوّل درسين من كل دورة متاحان مجانًا دون تسجيل، أمّا بقية الدروس والاختبارات ومتابعة التقدّم والأوسمة فتتطلّب إنشاء حساب مجاني.",
          },
        ],
      },
      {
        heading: "إنشاء الحساب",
        blocks: [
          {
            type: "list",
            items: [
              "تقدّم عنوان بريد إلكتروني صالحًا وتختار كلمة مرور، أو تسجّل الدخول عبر Google.",
              "الحساب شخصي، وأنت مسؤول عن سرّية بيانات دخولك.",
              "يجب أن تتمتّع بالأهلية القانونية للتعاقد، ويستخدم القاصرون المنصّة تحت مسؤولية وليّ أمرهم.",
            ],
          },
        ],
      },
      {
        heading: "السلوك المتوقّع",
        blocks: [
          {
            type: "list",
            items: [
              "عدم مشاركة محتوى الدورات أو إعادة بيعه أو نشره خارج استخدامك الشخصي.",
              "عدم محاولة تجاوز قيود الوصول أو تعطيل عمل الخدمة.",
              "الالتزام باللياقة في المساحات المجتمعية (التقييمات والتعليقات): لا لخطاب الكراهية ولا للرسائل المزعجة ولا للمحتوى غير القانوني.",
            ],
          },
        ],
      },
      {
        heading: "التبرّعات",
        blocks: [
          {
            type: "p",
            text: "دعم OmniLearn ماليًا اختياري، وتُعالَج التبرّعات عبر Stripe. لا يمنح التبرّع أي مقابل تجاري، وهو بطبيعته غير قابل للاسترداد بعد دفعه، ما لم يكن هناك خطأ ظاهر تُبلغنا به سريعًا على info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "ملكية المحتوى",
        blocks: [
          {
            type: "p",
            text: "يبقى المحتوى التعليمي ملكًا لشركة OmniLearnConsultingCommerce LLC أو لشركائها. ويمنحك حسابك حقّ وصول شخصيًّا غير حصري وغير قابل للتحويل.",
          },
        ],
      },
      {
        heading: "عدم ضمان النتيجة",
        blocks: [
          {
            type: "p",
            text: "نبذل عناية في إعداد دوراتنا، لكنّ التعلّم يتوقّف على جهدك. لا نضمن وظيفة ولا نجاحًا في امتحان ولا نتيجة مهنية محدّدة، ويُقدَّم المحتوى «كما هو».",
          },
        ],
      },
      {
        heading: "حذف الحساب",
        blocks: [
          {
            type: "p",
            text: "يمكنك إغلاق حسابك في أي وقت من إعداداتك أو بمراسلة info@omnilearn.org، وعندها تُحذف بياناتك الشخصية. ويجوز لنا تعليق أي حساب في حال إخلال جسيم بهذه الشروط.",
          },
        ],
      },
      {
        heading: "تعديل الشروط",
        blocks: [
          {
            type: "p",
            text: "قد تُعدَّل هذه الشروط، وعند أي تغيير جوهري نُعلمك به، ويُعدّ استمرارك في استخدام الخدمة قبولًا لها.",
          },
        ],
      },
      {
        heading: "القانون الواجب التطبيق",
        blocks: [
          {
            type: "p",
            text: "تخضع هذه الشروط لقانون ولاية وايومنغ (الولايات المتحدة)، دون المساس بالحماية الإلزامية التي يتمتّع بها مستهلكو الاتحاد الأوروبي.",
          },
        ],
      },
    ],
  },

  contact: {
    title: "اتصل بنا",
    description:
      "تواصل مع OmniLearn: الدعم، وطلبات بياناتك (GDPR/CCPA)، والصحافة والشراكات. عنوان واحد: info@omnilearn.org.",
    lead: "سؤال، أو طلب متعلّق ببياناتك، أو استفسار صحفي؟ راسلنا؛ عنوان واحد يكفي.",
    sections: [
      {
        heading: "عبر البريد الإلكتروني",
        blocks: [
          {
            type: "p",
            text: "راسلنا على info@omnilearn.org. إنه العنوان الوحيد لجميع طلباتك؛ لا نستخدم نموذجًا آليًا، فالبريد المباشر أبسط وأسهل في المتابعة.",
          },
        ],
      },
      {
        heading: "حسب نوع طلبك",
        blocks: [
          {
            type: "list",
            items: [
              "الدعم والتعليم: مشكلة في الحساب، أو سؤال عن دورة، أو عطل واجهته.",
              "البيانات الشخصية (GDPR/CCPA): الوصول إلى بياناتك أو تصحيحها أو حذفها. راسلنا من العنوان المرتبط بحسابك.",
              "الصحافة والشراكات: التعريف بـ OmniLearn، وفرص التعاون.",
            ],
          },
        ],
      },
      {
        heading: "مدّة الردّ",
        blocks: [
          {
            type: "p",
            text: "نردّ عادةً خلال يومين إلى ثلاثة أيام عمل. أمّا الطلبات المتعلّقة بالبيانات الشخصية فتُعالَج ضمن المدّة التي تحدّدها الأنظمة.",
          },
        ],
      },
    ],
  },

  aPropos: {
    title: "عن OmniLearn",
    description:
      "OmniLearn منصّة لتعلّم المجالات التقنية تديرها شركة OmniLearnConsultingCommerce LLC: دورات تُصنع داخليًا، ونموذج مجاني جزئيًا يموّله الدعم، ورسالة إتاحة المعرفة للجميع.",
    lead: "OmniLearn منصّة لتعلّم المهن التقنية دون أن تدفع لتبدأ. إليك من أين جاءت وكيف تعمل.",
    sections: [
      {
        heading: "لماذا",
        blocks: [
          {
            type: "p",
            text: "الفكرة بسيطة: المصادر الجيّدة لتعلّم البرمجة أو تأمين الأنظمة أو معالجة البيانات موجودة، لكنها مبعثرة، وكثيرًا ما تكون مدفوعة من الدرس الأول، ونادرًا ما تُبنى كمسار متكامل. أردنا مكانًا يمكن أن تبدأ فيه فورًا ومجانًا، وتتقدّم على وتيرتك.",
          },
        ],
      },
      {
        heading: "كيف تعمل",
        blocks: [
          {
            type: "p",
            text: "تبدأ كل دورة بدرسين مجانيين. وإن نال الموضوع اهتمامك، يفتح حساب مجاني بقيّة الدروس والاختبارات ومتابعة التقدّم والأوسمة ولوحة الترتيب. وعناصر التحفيز ليست للزينة، بل تساعد على الاستمرار حيث يتوقّف كثيرون.",
          },
        ],
      },
      {
        heading: "من يدير المنصّة",
        blocks: [
          {
            type: "p",
            text: "تدير OmniLearn شركة OmniLearnConsultingCommerce LLC المسجّلة في وايومنغ (الولايات المتحدة). تُكتب الدورات وتُنتَج داخليًا، لا تُجمَع اعتباطًا من الإنترنت.",
          },
        ],
      },
      {
        heading: "نموذج العمل",
        blocks: [
          {
            type: "p",
            text: "لا جدار دفع خفيّ، ولا بيع لبياناتك. تُموَّل المنصّة من تبرّعات من يجدون فيها قيمة ويريدون بقاءها مفتوحة. إنه رهان: ما دام المحتوى مفيدًا، يدعم جزء من المتعلّمين البقيّة.",
          },
        ],
      },
      {
        heading: "ما هو قادم",
        blocks: [
          {
            type: "p",
            text: "يتوسّع الكتالوج دورةً بعد أخرى. وإن أردت اقتراح موضوع أو الإبلاغ عن خطأ أو مجرّد إلقاء التحية، فالعنوان هو info@omnilearn.org.",
          },
        ],
      },
    ],
  },
};

export const legalContent: Record<Locale, LegalContent> = { fr, en, ar };

/** Locale valide de l'URL, avec repli sur le français si le segment est inconnu. */
export function resolveLegalLocale(lang: string): Locale {
  return isLocale(lang) ? lang : defaultLocale;
}

/** Récupère le bloc de contenu d'une page dans la bonne langue. */
export function getLegalPage(lang: string, key: LegalPageKey): LegalPage {
  return legalContent[resolveLegalLocale(lang)][key];
}

/**
 * Construit les métadonnées d'une page légale : titre unique (le template
 * `%s · OmniLearn` du layout ajoute la marque), description propre à la page,
 * canonical auto-référent vers l'URL réelle et Open Graph.
 */
export function buildLegalMetadata(
  lang: string,
  route: string,
  key: LegalPageKey,
): Metadata {
  const locale = resolveLegalLocale(lang);
  const page = legalContent[locale][key];
  const url = `${siteUrl}/${locale}${route}`;
  return {
    title: page.title,
    description: page.description,
    alternates: alternatesFor(locale, route),
    openGraph: {
      type: "article",
      siteName,
      title: `${page.title} · ${siteName}`,
      description: page.description,
      url,
      locale,
    },
  };
}
