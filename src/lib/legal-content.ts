// Contenu des pages légales (mentions, confidentialité, CGU, contact, à propos).
// Isolé ici volontairement : ce texte est long, spécifique à chaque page et propre
// à chaque langue, il n'a donc pas sa place dans les dictionnaires d'interface
// (src/i18n). Les pages sous src/app/[lang]/* lisent le bloc correspondant à la
// locale et le rendent via le composant LegalDocument.
import type { Metadata } from "next";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { alternatesFor, shareCard, siteName, siteUrl } from "@/lib/site";

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
  /** Contrat propre aux formateurs qui publient et vendent sur la place de marche. */
  formateurs: LegalPage;
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
    updated: "Dernière mise à jour : 9 septembre 2026",
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
            text: "Les cours, textes, vidéos, quiz, illustrations, exemples de code et éléments graphiques publiés sur OmniLearn sont créés en interne, publiés par des formateurs indépendants qui en restent propriétaires, ou utilisés avec autorisation. Ils sont protégés par le droit d'auteur. Vous pouvez les consulter et vous en servir dans le cadre de votre apprentissage personnel. Toute reproduction, diffusion ou revente sans accord écrit préalable est interdite.",
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
    updated: "Dernière mise à jour : 9 septembre 2026",
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
              "Achat d'un cours : le cours acheté, le montant, la date et l'identifiant de la transaction Stripe. Le paiement se déroule sur les serveurs de Stripe, votre numéro de carte ne nous parvient pas.",
              "Formateurs : si vous publiez un cours, nous conservons vos coordonnées de contact, vos cours et le détail des ventes qui vous reviennent. Les pièces d'identité et le compte bancaire nécessaires au versement sont collectés et détenus par Stripe, pas par nous.",
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
              "Encaisser l'achat d'un cours, ouvrir l'accès correspondant et verser sa part au formateur : exécution du contrat et obligations comptables.",
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
              "Données de dons et d'achat : conservées le temps requis par les obligations comptables et fiscales, dix ans pour les pièces comptables.",
              "Accès acheté : conservé tant que votre compte existe, sans quoi le cours payé se refermerait.",
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
              "Stripe (dons, achat de cours, versements aux formateurs) : reçoit les informations de paiement directement, sur ses propres serveurs.",
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
      "Les règles d'utilisation d'OmniLearn : accès freemium, cours payants, remboursement, cours des formateurs indépendants, dons via Stripe et droit applicable (Wyoming).",
    lead: "En utilisant OmniLearn, vous acceptez les règles ci-dessous. Elles encadrent l'accès aux cours, l'achat d'une formation, la création de compte et les dons.",
    updated: "Dernière mise à jour : 9 septembre 2026",
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
            text: "Les deux premières leçons de chaque cours sont en accès libre, sans inscription. Sur un cours gratuit, la suite des leçons, les quiz, le suivi de progression et les badges demandent seulement un compte gratuit. Sur un cours payant, la suite s'ouvre après l'achat, dans les conditions décrites juste en dessous.",
          },
        ],
      },
      {
        heading: "Cours payants",
        blocks: [
          {
            type: "p",
            text: "Une partie du catalogue est payante. Le prix figure sur la carte du cours et sur sa fiche, en euros, taxes comprises. Rien n'est débité tant que vous n'avez pas validé le paiement sur la page sécurisée de Stripe.",
          },
          {
            type: "list",
            items: [
              "Le paiement passe par Stripe. Votre numéro de carte ne transite pas par nos serveurs et nous ne le conservons pas.",
              "Un achat ouvre l'accès complet au cours concerné, pour votre compte seul, sans limite de durée tant que le cours reste publié.",
              "Si un cours que vous avez acheté quitte le catalogue, vous en gardez l'accès pendant au moins douze mois à compter du retrait.",
              "Le reçu vous parvient par e-mail juste après le paiement.",
              "L'accès est personnel : il ne se prête pas, ne se partage pas et ne se revend pas.",
            ],
          },
        ],
      },
      {
        heading: "Rétractation et remboursement",
        blocks: [
          {
            type: "p",
            text: "Un cours est un contenu numérique livré immédiatement. Le droit européen vous accorde quatorze jours pour vous rétracter, et prévoit que ce délai s'éteint dès que la livraison commence avec votre accord exprès. En validant le paiement, vous demandez l'accès immédiat au cours et vous acceptez de perdre ce droit une fois la première leçon payante ouverte.",
          },
          {
            type: "p",
            text: "Tant qu'aucune leçon payante n'a été ouverte, l'achat est remboursé sur simple demande dans les quatorze jours, à info@omnilearn.org, sans avoir à vous justifier. Au-delà, nous remboursons dès que la situation le mérite : un cours qui ne correspond pas à sa description, un défaut technique qui vous empêche de le suivre, une double facturation.",
          },
          {
            type: "p",
            text: "Le remboursement repart sur le moyen de paiement d'origine. Comptez cinq à dix jours ouvrés pour le voir arriver, ce délai dépend de votre banque et non de nous.",
          },
        ],
      },
      {
        heading: "Cours publiés par des formateurs indépendants",
        blocks: [
          {
            type: "p",
            text: "Une partie des cours vient de formateurs indépendants. Ils écrivent leur contenu, en gardent la propriété et répondent de son exactitude. OmniLearn héberge le cours, encaisse le paiement et reverse au formateur la part convenue.",
          },
          {
            type: "p",
            text: "Chaque cours est relu avant sa mise en ligne. Nous pouvons retirer un cours qui enfreint la loi, ces conditions ou les règles applicables aux formateurs, et rembourser les acheteurs concernés.",
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
            text: "Le contenu pédagogique reste la propriété d'OmniLearnConsultingCommerce LLC ou du formateur qui l'a publié. Votre compte, ou votre achat, vous donne un droit d'accès personnel, non exclusif et non transférable.",
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

  formateurs: {
    title: "Conditions applicables aux formateurs",
    description:
      "Publier et vendre un cours sur OmniLearn : validation éditoriale, prix, part reversée, versements Stripe, propriété du contenu et conditions de retrait.",
    lead: "Ce document complète les conditions générales pour toute personne qui publie un cours sur OmniLearn. Il vaut contrat entre vous et OmniLearnConsultingCommerce LLC.",
    updated: "Dernière mise à jour : 9 septembre 2026",
    sections: [
      {
        heading: "Qui peut publier",
        blocks: [
          {
            type: "list",
            items: [
              "Vous déposez une candidature depuis la page Devenir formateur. Elle est examinée à la main.",
              "Vous devez avoir la capacité juridique de contracter et pouvoir justifier de votre identité auprès de Stripe avant tout versement.",
              "Un compte formateur est nominatif. Il ne se prête pas et ne se cède pas.",
            ],
          },
        ],
      },
      {
        heading: "Votre contenu reste le vôtre",
        blocks: [
          {
            type: "p",
            text: "Vous gardez la propriété entière de ce que vous publiez. Vous nous accordez le droit non exclusif de l'héberger, de l'afficher, de le traduire et d'en faire la promotion tant que le cours est en ligne, sur le site et dans nos supports de communication.",
          },
          {
            type: "p",
            text: "Vous garantissez que le contenu est de vous, ou que vous détenez les droits nécessaires sur ce qu'il reprend : textes, images, extraits de code, marques citées.",
          },
        ],
      },
      {
        heading: "Validation avant publication",
        blocks: [
          {
            type: "p",
            text: "Chaque cours passe en modération avant d'être visible. Nous vérifions la cohérence pédagogique, la langue, les droits sur les éléments repris et le prix proposé. Le prix peut être ajusté à ce moment-là, et il vous est indiqué avant la mise en ligne.",
          },
          {
            type: "p",
            text: "Un refus est motivé et vous pouvez soumettre à nouveau après correction.",
          },
        ],
      },
      {
        heading: "Prix et part reversée",
        blocks: [
          {
            type: "list",
            items: [
              "Le prix est fixé en euros, taxes comprises, et s'entend par acheteur pour un accès à vie au cours.",
              "Vous percevez 70 % de chaque vente, la plateforme retient 30 %. Un taux différent peut être convenu par écrit et s'affiche alors dans votre espace formateur.",
              "Les frais de traitement de Stripe sont supportés par la plateforme, pas par vous : votre part se calcule sur le prix payé par l'acheteur.",
              "Le taux est figé au moment de la vente. Un changement de barème ne recalcule jamais une vente déjà encaissée.",
            ],
          },
        ],
      },
      {
        heading: "Versements",
        blocks: [
          {
            type: "p",
            text: "Les versements passent par un compte Stripe Express que vous créez depuis votre espace formateur. Stripe vérifie votre identité et vos coordonnées bancaires. Tant que cette vérification n'est pas terminée, les ventes sont encaissées mais rien ne part.",
          },
          {
            type: "p",
            text: "Une fois le compte actif, Stripe verse selon son calendrier habituel. Le détail des ventes, la part qui vous revient et le solde en attente sont lisibles dans votre espace formateur.",
          },
        ],
      },
      {
        heading: "Impôts et cotisations",
        blocks: [
          {
            type: "p",
            text: "Vous êtes indépendant. OmniLearn n'est ni votre employeur ni votre mandataire fiscal. Vous déclarez vos revenus et réglez les taxes qui vous incombent dans votre pays. Un récapitulatif annuel de vos ventes vous est fourni sur demande à info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "Ce qui n'a pas sa place sur la plateforme",
        blocks: [
          {
            type: "list",
            items: [
              "Du contenu copié, traduit sans droit ou généré sans relecture ni vérification des faits.",
              "Des promesses de résultat : emploi garanti, réussite certaine à un examen, revenus chiffrés.",
              "Des données personnelles d'un tiers, des identifiants ou des accès partagés.",
              "Une invitation à payer en direct, hors de la plateforme, pour contourner le partage.",
              "Tout ce qui est illégal, haineux ou trompeur.",
            ],
          },
        ],
      },
      {
        heading: "Remboursement d'un acheteur",
        blocks: [
          {
            type: "p",
            text: "Quand un acheteur est remboursé, la part qui vous avait été attribuée sur cette vente est annulée. Si elle vous a déjà été versée, elle est déduite de vos versements suivants.",
          },
          {
            type: "p",
            text: "Un taux de remboursement anormalement élevé sur vos cours nous conduit à revoir leur description avec vous, et le cas échéant à les dépublier.",
          },
        ],
      },
      {
        heading: "Retrait d'un cours et fin de la collaboration",
        blocks: [
          {
            type: "p",
            text: "Vous pouvez retirer un cours à tout moment, avec un préavis de trente jours. Les personnes qui l'ont déjà acheté conservent leur accès pendant au moins douze mois : c'est ce qu'elles ont payé.",
          },
          {
            type: "p",
            text: "Nous pouvons suspendre un compte formateur immédiatement en cas de fraude, de contenu illégal ou de manquement grave à ces conditions. Les sommes régulièrement dues vous restent acquises.",
          },
        ],
      },
      {
        heading: "Droit applicable",
        blocks: [
          {
            type: "p",
            text: "Ce document relève du droit de l'État du Wyoming (États-Unis), sans préjudice des protections impératives dont vous bénéficiez dans votre pays de résidence.",
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
      "OmniLearn, plateforme d'apprentissage tech éditée par OmniLearnConsultingCommerce LLC : deux leçons libres par cours, catalogue gratuit et payant, formateurs indépendants, mission d'accès au savoir.",
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
            text: "Chaque cours s'ouvre sur deux leçons libres. Si le sujet vous parle, un compte gratuit ouvre la suite des cours gratuits : les quiz, le suivi de progression, les badges et le classement. Les cours payants s'achètent à l'unité, une fois, et restent ouverts ensuite. La gamification n'est pas là pour faire joli, elle aide à tenir dans la durée, là où beaucoup abandonnent.",
          },
        ],
      },
      {
        heading: "Qui édite la plateforme",
        blocks: [
          {
            type: "p",
            text: "OmniLearn est édité par OmniLearnConsultingCommerce LLC, une société immatriculée dans le Wyoming (États-Unis). Une partie du catalogue est écrite en interne, l'autre vient de formateurs indépendants dont chaque cours est relu avant d'être publié. Rien n'est agrégé au hasard depuis le web.",
          },
        ],
      },
      {
        heading: "Le modèle économique",
        blocks: [
          {
            type: "p",
            text: "Deux leçons libres sur chaque cours, sans compte et sans carte. Ensuite, une partie du catalogue reste gratuite et l'autre s'achète à l'unité, sans abonnement, sans paywall caché et sans revente de vos données. Sur un cours vendu par un formateur indépendant, 70 % du prix lui reviennent et 30 % financent la plateforme : hébergement, relecture des cours, frais de paiement. Les dons restent possibles, ils servent à garder ouverte la partie gratuite.",
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
    updated: "Last updated: 9 September 2026",
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
            text: "Courses, text, videos, quizzes, illustrations, sample code and graphics published on OmniLearn are produced in-house, published by independent instructors who keep ownership of them, or used under licence. All of it is protected by copyright. You may view and use them for your own learning. Copying, redistributing or reselling them without prior written consent is not allowed.",
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
    updated: "Last updated: 9 September 2026",
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
              "Course purchases: the course bought, the amount, the date and the Stripe transaction ID. Payment happens on Stripe servers, so your card number never reaches us.",
              "Instructors: if you publish a course, we keep your contact details, your courses and the sales figures behind your share. The identity documents and bank account needed to pay you out are collected and held by Stripe, not by us.",
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
              "Taking payment for a course, opening the matching access and paying the instructor their share: contract and accounting obligations.",
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
              "Donation and purchase records: kept for as long as accounting and tax rules require, ten years for accounting documents.",
              "Purchased access: kept for the life of your account, otherwise the course you paid for would close again.",
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
              "Stripe (donations, course payments, instructor payouts): receives payment details directly, on its own servers.",
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
      "How OmniLearn works: freemium access, paid courses, refunds, courses from independent instructors, donations via Stripe and governing law (Wyoming).",
    lead: "By using OmniLearn you agree to the rules below. They cover access to courses, buying a course, creating an account, and donations.",
    updated: "Last updated: 9 September 2026",
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
            text: "The first two lessons of every course are free, with no sign-up. On a free course, the remaining lessons, the quizzes, progress tracking and badges only ask for a free account. On a paid course, the rest opens once you buy it, under the terms set out just below.",
          },
        ],
      },
      {
        heading: "Paid courses",
        blocks: [
          {
            type: "p",
            text: "Part of the catalogue is paid. The price appears on the course card and on the course page, in euros, taxes included. Nothing is charged until you confirm the payment on Stripe's secure page.",
          },
          {
            type: "list",
            items: [
              "Payment goes through Stripe. Your card number never reaches our servers and we do not store it.",
              "A purchase opens full access to that course, for your account only, with no time limit for as long as the course stays published.",
              "If a course you bought leaves the catalogue, you keep access to it for at least twelve months from the day it is removed.",
              "Your receipt arrives by email right after the payment.",
              "Access is personal: it cannot be lent, shared or resold.",
            ],
          },
        ],
      },
      {
        heading: "Withdrawal and refunds",
        blocks: [
          {
            type: "p",
            text: "A course is digital content delivered immediately. European law gives you fourteen days to withdraw, and provides that this right ends once delivery begins with your express consent. By confirming the payment you ask for immediate access to the course and accept losing that right once the first paid lesson is opened.",
          },
          {
            type: "p",
            text: "As long as no paid lesson has been opened, we refund the purchase on request within fourteen days, at info@omnilearn.org, with no reason needed. After that we still refund whenever the situation calls for it: a course that does not match its description, a technical fault that stops you from following it, a double charge.",
          },
          {
            type: "p",
            text: "Refunds go back to the original payment method. Allow five to ten working days for it to show up, a delay that depends on your bank rather than on us.",
          },
        ],
      },
      {
        heading: "Courses published by independent instructors",
        blocks: [
          {
            type: "p",
            text: "Some courses come from independent instructors. They write the content, keep ownership of it and answer for its accuracy. OmniLearn hosts the course, collects the payment and pays the instructor their agreed share.",
          },
          {
            type: "p",
            text: "Every course is reviewed before it goes live. We can take down a course that breaks the law, these terms or the instructor terms, and refund the buyers concerned.",
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
            text: "Course content remains the property of OmniLearnConsultingCommerce LLC or of the instructor who published it. Your account, or your purchase, gives you a personal, non-exclusive, non-transferable right to access it.",
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

  formateurs: {
    title: "Instructor terms",
    description:
      "Publishing and selling a course on OmniLearn: editorial review, pricing, revenue share, Stripe payouts, content ownership and how to withdraw a course.",
    lead: "This document completes the terms of use for anyone who publishes a course on OmniLearn. It stands as the agreement between you and OmniLearnConsultingCommerce LLC.",
    updated: "Last updated: 9 September 2026",
    sections: [
      {
        heading: "Who can publish",
        blocks: [
          {
            type: "list",
            items: [
              "You apply from the Become an instructor page. Every application is read by hand.",
              "You must be legally able to enter into a contract, and able to prove your identity to Stripe before any payout.",
              "An instructor account is personal. It cannot be lent or transferred.",
            ],
          },
        ],
      },
      {
        heading: "Your content stays yours",
        blocks: [
          {
            type: "p",
            text: "You keep full ownership of what you publish. You grant us the non-exclusive right to host, display, translate and promote it for as long as the course is online, on the site and in our communication material.",
          },
          {
            type: "p",
            text: "You warrant that the content is yours, or that you hold the rights to whatever it reuses: text, images, code excerpts, trademarks mentioned.",
          },
        ],
      },
      {
        heading: "Review before publication",
        blocks: [
          {
            type: "p",
            text: "Every course goes through moderation before it becomes visible. We check the teaching structure, the language, the rights on reused material and the price you proposed. The price can be adjusted at that point, and you are told before the course goes live.",
          },
          {
            type: "p",
            text: "A rejection comes with a reason, and you can submit again once it is fixed.",
          },
        ],
      },
      {
        heading: "Price and revenue share",
        blocks: [
          {
            type: "list",
            items: [
              "The price is set in euros, taxes included, per buyer, for lifetime access to the course.",
              "You receive 70% of every sale and the platform keeps 30%. A different rate can be agreed in writing, and then shows in your instructor area.",
              "Stripe's processing fees are borne by the platform, not by you: your share is computed on the price the buyer paid.",
              "The rate is locked at the moment of the sale. Changing the scheme later never recomputes a sale already collected.",
            ],
          },
        ],
      },
      {
        heading: "Payouts",
        blocks: [
          {
            type: "p",
            text: "Payouts run through a Stripe Express account you create from your instructor area. Stripe verifies your identity and your bank details. Until that check is done, sales are collected but nothing is paid out.",
          },
          {
            type: "p",
            text: "Once the account is active, Stripe pays out on its usual schedule. Sales, your share and the pending balance are all readable in your instructor area.",
          },
        ],
      },
      {
        heading: "Tax and social contributions",
        blocks: [
          {
            type: "p",
            text: "You are independent. OmniLearn is neither your employer nor your tax agent. You declare your income and settle whatever taxes apply where you live. A yearly summary of your sales is available on request at info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "What does not belong on the platform",
        blocks: [
          {
            type: "list",
            items: [
              "Content copied, translated without rights, or generated without review and factchecking.",
              "Promises of a result: guaranteed job, certain exam pass, a figure of income.",
              "Someone else's personal data, credentials or shared accounts.",
              "Any invitation to pay directly, off the platform, to get around the revenue share.",
              "Anything illegal, hateful or misleading.",
            ],
          },
        ],
      },
      {
        heading: "When a buyer is refunded",
        blocks: [
          {
            type: "p",
            text: "When a buyer is refunded, the share credited to you on that sale is cancelled. If it has already been paid out, it is deducted from your next payouts.",
          },
          {
            type: "p",
            text: "An unusually high refund rate on your courses leads us to review their description with you, and to unpublish them if needed.",
          },
        ],
      },
      {
        heading: "Withdrawing a course and ending the agreement",
        blocks: [
          {
            type: "p",
            text: "You can withdraw a course at any time with thirty days' notice. People who already bought it keep their access for at least twelve months, because that is what they paid for.",
          },
          {
            type: "p",
            text: "We can suspend an instructor account immediately in case of fraud, illegal content or serious breach of these terms. Amounts properly due to you remain yours.",
          },
        ],
      },
      {
        heading: "Governing law",
        blocks: [
          {
            type: "p",
            text: "This document is governed by the law of the State of Wyoming (United States), without prejudice to the mandatory protections you enjoy in your country of residence.",
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
      "OmniLearn is a tech learning platform run by OmniLearnConsultingCommerce LLC: two free lessons on every course, a catalogue that mixes free and paid, independent instructors, and a mission of open access to knowledge.",
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
            text: "Every course opens with two free lessons. If it clicks, a free account opens the rest of the free courses: the quizzes, progress tracking, badges and the leaderboard. Paid courses are bought one at a time, once, and stay open afterwards. The gamification isn't decoration, it helps you keep going where a lot of people give up.",
          },
        ],
      },
      {
        heading: "Who runs it",
        blocks: [
          {
            type: "p",
            text: "OmniLearn is operated by OmniLearnConsultingCommerce LLC, a company registered in Wyoming (United States). Part of the catalogue is written in-house, the rest comes from independent instructors whose courses are read through before they go live. Nothing is scraped together from around the web.",
          },
        ],
      },
      {
        heading: "The business model",
        blocks: [
          {
            type: "p",
            text: "Two free lessons on every course, no account and no card. After that, part of the catalogue stays free and part is bought one course at a time, with no subscription, no hidden paywall and no reselling of your data. On a course sold by an independent instructor, 70 % of the price goes to them and 30 % funds the platform: hosting, reading courses before they go live, payment fees. Donations are still open, and they are what keeps the free half free.",
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
    updated: "آخر تحديث: 9 سبتمبر 2026",
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
            text: "الدورات والنصوص ومقاطع الفيديو والاختبارات والرسوم وأمثلة الشيفرة والعناصر المرئية المنشورة على OmniLearn منتَجة داخليًا، أو ينشرها مدرّبون مستقلّون تبقى ملكيتها لهم، أو مستخدَمة بترخيص، وهي محمية بموجب حقوق المؤلّف. يمكنكم الاطّلاع عليها واستخدامها في إطار تعلّمكم الشخصي، ويُمنع نسخها أو نشرها أو إعادة بيعها دون إذن كتابي مسبق.",
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
    updated: "آخر تحديث: 9 سبتمبر 2026",
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
              "شراء دورة: الدورة المشتراة والمبلغ والتاريخ ومعرّف العملية لدى Stripe. تتمّ عملية الدفع على خوادم Stripe، فلا يصلنا رقم بطاقتك.",
              "المدرّبون: إذا نشرت دورة، نحتفظ ببيانات التواصل معك ودوراتك وتفاصيل المبيعات التي تعود إليك. أمّا وثائق الهوية والحساب البنكي اللازمان للتحويل فتجمعها Stripe وتحتفظ بها، لا نحن.",
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
              "تحصيل ثمن الدورة وفتح الوصول إليها وتحويل حصّة المدرّب: تنفيذ العقد والالتزامات المحاسبية.",
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
              "بيانات التبرّعات والمشتريات: تُحفظ للمدّة التي تفرضها الالتزامات المحاسبية والضريبية، وعشر سنوات للمستندات المحاسبية.",
              "الوصول المشترى: يُحفظ ما دام حسابك قائمًا، وإلّا أُغلقت الدورة التي دفعت ثمنها.",
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
              "Stripe (التبرّعات وشراء الدورات وتحويلات المدرّبين): تتلقّى بيانات الدفع مباشرةً على خوادمها الخاصة.",
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
      "قواعد استخدام OmniLearn: الوصول المجاني الجزئي، والدورات المدفوعة، والاسترداد، ودورات المدرّبين المستقلّين، والتبرّعات عبر Stripe، والقانون الواجب التطبيق (وايومنغ).",
    lead: "باستخدامك OmniLearn فإنك توافق على القواعد التالية التي تنظّم الوصول إلى الدورات وشراءها وإنشاء الحساب والتبرّعات.",
    updated: "آخر تحديث: 9 سبتمبر 2026",
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
            text: "أوّل درسين من كل دورة متاحان مجانًا دون تسجيل. في الدورات المجانية تتطلّب بقية الدروس والاختبارات ومتابعة التقدّم والأوسمة حسابًا مجانيًا فقط، أمّا في الدورات المدفوعة فتُفتح البقية بعد الشراء وفق الشروط الواردة أدناه.",
          },
        ],
      },
      {
        heading: "الدورات المدفوعة",
        blocks: [
          {
            type: "p",
            text: "جزء من الكتالوج مدفوع. يظهر السعر على بطاقة الدورة وفي صفحتها، باليورو وشاملًا الضرائب. ولا يُخصم أي مبلغ قبل أن تؤكّد الدفع على صفحة Stripe الآمنة.",
          },
          {
            type: "list",
            items: [
              "يمرّ الدفع عبر Stripe. ولا يمرّ رقم بطاقتك عبر خوادمنا ولا نحتفظ به.",
              "يفتح الشراء وصولًا كاملًا إلى الدورة المعنيّة، لحسابك وحده، بلا حدّ زمني ما دامت الدورة منشورة.",
              "إذا خرجت دورة اشتريتها من الكتالوج، يبقى وصولك إليها اثني عشر شهرًا على الأقل من تاريخ سحبها.",
              "يصلك الإيصال بالبريد الإلكتروني بعد الدفع مباشرة.",
              "الوصول شخصي: لا يُعار ولا يُشارك ولا يُعاد بيعه.",
            ],
          },
        ],
      },
      {
        heading: "حقّ الانسحاب والاسترداد",
        blocks: [
          {
            type: "p",
            text: "الدورة محتوى رقمي يُسلَّم فورًا. يمنحك القانون الأوروبي أربعة عشر يومًا للانسحاب، وينصّ على سقوط هذا الحقّ متى بدأ التسليم بموافقتك الصريحة. وبتأكيدك الدفع تطلب الوصول الفوري إلى الدورة وتقبل فقدان هذا الحقّ بمجرّد فتح أوّل درس مدفوع.",
          },
          {
            type: "p",
            text: "ما دام لم يُفتح أي درس مدفوع، نردّ لك المبلغ عند الطلب خلال أربعة عشر يومًا على info@omnilearn.org دون أن تبرّر طلبك. وبعد ذلك نردّ المبلغ كلّما استحقّت الحالة: دورة لا تطابق وصفها، أو عطل تقني يمنعك من متابعتها، أو خصم مزدوج.",
          },
          {
            type: "p",
            text: "يعود المبلغ إلى وسيلة الدفع الأصلية. واحتسب من خمسة إلى عشرة أيام عمل لظهوره، وهي مهلة تعود إلى مصرفك لا إلينا.",
          },
        ],
      },
      {
        heading: "دورات ينشرها مدرّبون مستقلّون",
        blocks: [
          {
            type: "p",
            text: "يأتي جزء من الدورات من مدرّبين مستقلّين. هم من يكتب المحتوى ويحتفظ بملكيّته ويتحمّل مسؤوليّة دقّته. وتتولّى OmniLearn استضافة الدورة وتحصيل المبلغ وتحويل حصّة المدرّب المتّفق عليها.",
          },
          {
            type: "p",
            text: "تُراجَع كلّ دورة قبل نشرها. ويمكننا سحب أي دورة تخالف القانون أو هذه الشروط أو الشروط الخاصّة بالمدرّبين، مع ردّ المبالغ إلى المشترين المعنيّين.",
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
            text: "يبقى المحتوى التعليمي ملكًا لشركة OmniLearnConsultingCommerce LLC أو للمدرّب الذي نشره. ويمنحك حسابك أو شراؤك حقّ وصول شخصيًّا غير حصري وغير قابل للتحويل.",
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

  formateurs: {
    title: "شروط المدرّبين",
    description:
      "نشر دورة وبيعها على OmniLearn: المراجعة التحريرية، والسعر، والحصّة المحوَّلة، ودفعات Stripe، وملكية المحتوى، وشروط السحب.",
    lead: "يكمّل هذا المستند شروط الاستخدام لكلّ من ينشر دورة على OmniLearn، ويقوم مقام العقد بينك وبين شركة OmniLearnConsultingCommerce LLC.",
    updated: "آخر تحديث: 9 سبتمبر 2026",
    sections: [
      {
        heading: "من يمكنه النشر",
        blocks: [
          {
            type: "list",
            items: [
              "تقدّم طلبك من صفحة كن مدرّبًا، ويُدرَس كلّ طلب يدويًّا.",
              "يجب أن تكون أهلًا للتعاقد وقادرًا على إثبات هويّتك لدى Stripe قبل أي تحويل.",
              "حساب المدرّب اسمي، لا يُعار ولا يُنقل إلى غيرك.",
            ],
          },
        ],
      },
      {
        heading: "محتواك يبقى لك",
        blocks: [
          {
            type: "p",
            text: "تحتفظ بالملكية الكاملة لما تنشره، وتمنحنا حقًّا غير حصري في استضافته وعرضه وترجمته والترويج له ما دامت الدورة متاحة، على الموقع وفي موادّنا التواصلية.",
          },
          {
            type: "p",
            text: "وتضمن أنّ المحتوى من إنشائك، أو أنّك تملك الحقوق اللازمة على ما يقتبسه من نصوص وصور ومقاطع برمجية وعلامات تجارية مذكورة.",
          },
        ],
      },
      {
        heading: "المراجعة قبل النشر",
        blocks: [
          {
            type: "p",
            text: "تمرّ كلّ دورة بالمراجعة قبل أن تصبح ظاهرة. نتحقّق من البناء التعليمي واللغة والحقوق على العناصر المقتبسة والسعر المقترح. وقد يُعدَّل السعر عندئذ، ويُبلَّغ إليك قبل النشر.",
          },
          {
            type: "p",
            text: "ويأتي الرفض مسبَّبًا، ويمكنك إعادة التقديم بعد التصحيح.",
          },
        ],
      },
      {
        heading: "السعر والحصّة",
        blocks: [
          {
            type: "list",
            items: [
              "يُحدَّد السعر باليورو شاملًا الضرائب، لكلّ مشترٍ، مقابل وصول دائم إلى الدورة.",
              "تحصل على 70 % من كلّ عملية بيع وتحتفظ المنصّة بـ 30 %. ويمكن الاتفاق كتابةً على نسبة أخرى تظهر عندئذ في مساحتك.",
              "تتحمّل المنصّة رسوم Stripe، لا أنت: تُحتسب حصّتك على السعر الذي دفعه المشتري.",
              "تُثبَّت النسبة لحظة البيع، ولا يعيد أيّ تغيير لاحق احتساب بيع تمّ تحصيله.",
            ],
          },
        ],
      },
      {
        heading: "التحويلات",
        blocks: [
          {
            type: "p",
            text: "تمرّ التحويلات عبر حساب Stripe Express تنشئه من مساحة المدرّب. ويتحقّق Stripe من هويّتك وبياناتك المصرفية. وإلى أن يكتمل هذا التحقّق تُحصَّل المبيعات ولا يخرج شيء.",
          },
          {
            type: "p",
            text: "وبعد تفعيل الحساب يحوّل Stripe وفق جدوله المعتاد. وتقرأ تفاصيل المبيعات وحصّتك والرصيد المعلّق في مساحة المدرّب.",
          },
        ],
      },
      {
        heading: "الضرائب والاشتراكات",
        blocks: [
          {
            type: "p",
            text: "أنت مستقلّ. OmniLearn ليست ربّ عملك ولا وكيلك الضريبي. أنت من يصرّح بدخله ويسدّد ما يترتّب عليه من ضرائب في بلده. ويتوفّر ملخّص سنوي لمبيعاتك عند الطلب على info@omnilearn.org.",
          },
        ],
      },
      {
        heading: "ما لا مكان له على المنصّة",
        blocks: [
          {
            type: "list",
            items: [
              "محتوى منسوخ أو مترجم دون حقّ أو مولَّد دون مراجعة ولا تحقّق من الوقائع.",
              "وعود بنتيجة: وظيفة مضمونة أو نجاح مؤكّد في امتحان أو دخل بالأرقام.",
              "بيانات شخصية تخصّ غيرك أو بيانات دخول أو حسابات مشتركة.",
              "أيّ دعوة إلى الدفع مباشرةً خارج المنصّة للالتفاف على تقاسم العائد.",
              "كلّ ما هو مخالف للقانون أو محرّض على الكراهية أو مضلّل.",
            ],
          },
        ],
      },
      {
        heading: "عند ردّ مبلغ إلى مشترٍ",
        blocks: [
          {
            type: "p",
            text: "عند ردّ المبلغ إلى مشترٍ تُلغى الحصّة التي قُيّدت لك على تلك العملية. وإن كانت قد حُوّلت إليك، تُخصم من تحويلاتك التالية.",
          },
          {
            type: "p",
            text: "وارتفاع نسبة الاسترداد على دوراتك بصورة غير معتادة يدفعنا إلى مراجعة وصفها معك، وإلى إلغاء نشرها عند الاقتضاء.",
          },
        ],
      },
      {
        heading: "سحب دورة وإنهاء التعاون",
        blocks: [
          {
            type: "p",
            text: "يمكنك سحب دورة متى شئت بإشعار مدّته ثلاثون يومًا. ويحتفظ من اشتراها قبل ذلك بوصوله اثني عشر شهرًا على الأقلّ، لأنّ هذا ما دفع مقابله.",
          },
          {
            type: "p",
            text: "ويمكننا تعليق حساب مدرّب فورًا في حالات الاحتيال أو المحتوى المخالف للقانون أو الإخلال الجسيم بهذه الشروط. وتبقى لك المبالغ المستحقّة لك بوجه نظامي.",
          },
        ],
      },
      {
        heading: "القانون الواجب التطبيق",
        blocks: [
          {
            type: "p",
            text: "يخضع هذا المستند لقانون ولاية وايومنغ (الولايات المتّحدة)، دون المساس بالحمايات الإلزامية التي تتمتّع بها في بلد إقامتك.",
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
      "OmniLearn منصّة لتعلّم المجالات التقنية تديرها شركة OmniLearnConsultingCommerce LLC: درسان مجانيان في كل دورة، وكتالوج يجمع بين المجاني والمدفوع، ومدرّبون مستقلّون، ورسالة إتاحة المعرفة للجميع.",
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
            text: "تبدأ كل دورة بدرسين مجانيين. وإن نال الموضوع اهتمامك، يفتح حساب مجاني بقيّة الدورات المجانية والاختبارات ومتابعة التقدّم والأوسمة ولوحة الترتيب. أمّا الدورات المدفوعة فتُشترى واحدةً واحدة، مرّة واحدة، وتبقى مفتوحة بعدها. وعناصر التحفيز ليست للزينة، بل تساعد على الاستمرار حيث يتوقّف كثيرون.",
          },
        ],
      },
      {
        heading: "من يدير المنصّة",
        blocks: [
          {
            type: "p",
            text: "تدير OmniLearn شركة OmniLearnConsultingCommerce LLC المسجّلة في وايومنغ (الولايات المتحدة). جزء من الكتالوج يُكتب داخليًا، والباقي يأتي من مدرّبين مستقلّين تُراجَع كل دورة لهم قبل نشرها. ولا شيء يُجمَع اعتباطًا من الإنترنت.",
          },
        ],
      },
      {
        heading: "نموذج العمل",
        blocks: [
          {
            type: "p",
            text: "درسان مجانيان في كل دورة، دون حساب ودون بطاقة. وبعد ذلك يبقى جزء من الكتالوج مجانيًا ويُشترى الجزء الآخر دورةً دورة، دون اشتراك ودون جدار دفع خفيّ ودون بيع لبياناتك. وفي الدورة التي يبيعها مدرّب مستقلّ تعود إليه 70 % من الثمن وتموّل 30 % المنصّة: الاستضافة ومراجعة الدورات ورسوم الدفع. ويبقى باب التبرّع مفتوحًا، وهو ما يُبقي الجزء المجاني مجانيًا.",
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
      images: [shareCard(locale)],
    },
  };
}
