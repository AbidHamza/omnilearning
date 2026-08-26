import type { Course } from "../types";

const course: Course = {
  slug: "lancer-micro-saas-ia",
  title: "Lancer un micro-SaaS avec l'IA : de l'idée aux premiers clients",
  tagline:
    "Valide un problème qui paie, construis le MVP en pilotant Claude Code ou Cursor, encaisse avec Stripe et trouve tes 100 premiers utilisateurs sans budget pub.",
  description:
    "Un parcours honnête pour passer de zéro à un produit qui encaisse, en solo et à côté d'un job. Tu valides d'abord une idée avec de vraies conversations et une landing de pré-vente, avant d'écrire la moindre ligne de code. Ensuite tu construis un MVP Next.js en pilotant l'IA sans lui signer un chèque en blanc, tu branches Stripe proprement, tu fixes un prix défendable, puis tu vas chercher tes premiers clients par le SEO, les communautés et le build in public. Pas de promesse de fortune : des chiffres réalistes, des seuils de décision, et une méthode pour durer sans t'épuiser.",
  category: "Gestion de projet",
  level: "Intermédiaire",
  instructor: "",
  hours: 5,
  rating: 0,
  learners: 0,
  accent: "#38bdf8",
  image: "/covers/lancer-micro-saas-ia.svg",
  language: "Français",
  software: "Claude Code ou Cursor, Next.js, Stripe (mode test), GitHub, Vercel",
  prerequisites: [
    "Savoir lire et modifier du code JavaScript ou TypeScript simple",
    "Avoir déjà mis un projet en ligne, même modeste (un site perso suffit)",
    "Aucune expérience business ou vente requise",
  ],
  summary: [
    "Partie 1 : Trouver une idée qui paie (et la valider avant de coder)",
    "Partie 2 : Construire le MVP en pilotant l'IA",
    "Partie 3 : Encaisser (Stripe, pricing, TVA)",
    "Partie 4 : Lancer et trouver ses 100 premiers utilisateurs",
    "Partie 5 : Mesurer, écouter, décider (pivot ou persévère)",
    "Partie 6 : Opérer en solo sans s'épuiser",
  ],
  objectives: [
    "Valider une idée avec 10 conversations et une landing de pré-vente, avec des seuils kill/go chiffrés",
    "Construire un MVP Next.js + base de données + auth en encadrant le code généré par l'IA",
    "Mettre en place Stripe Checkout et des abonnements, webhooks compris",
    "Fixer un prix défendable en s'appuyant sur des exemples réels de micro-SaaS",
    "Trouver tes 100 premiers utilisateurs sans budget publicitaire",
    "Suivre activation, rétention et churn, puis trancher pivot ou persévère sur des chiffres",
  ],
  skills: [
    "Validation d'idée (interviews, pré-vente)",
    "Vibe coding encadré (Claude Code, Cursor)",
    "Stripe Checkout et abonnements",
    "Pricing SaaS",
    "Acquisition sans budget (SEO, communautés, build in public)",
    "Métriques produit (activation, rétention, churn)",
  ],
  contentTypes: [
    "Leçons écrites",
    "Schémas et diagrammes",
    "Quiz interactifs",
    "Scripts et checklists réutilisables",
  ],
  parts: [
    {
      id: "p1",
      title: "Trouver une idée qui paie",
      lessons: [
        {
          id: "l1",
          title: "Un problème douloureux, une niche qui a déjà un budget",
          type: "text",
          duration: "15 min",
          body:
            "## L'histoire qui se répète\n\n" +
            "En 2023, un ami développeur a passé quatre mois de soirées sur une appli de suivi d'habitudes. Belle interface, notifications, mode sombre, tout. Lancement, 40 inscrits, 0 client payant. Il n'avait rien fait de mal techniquement. Il avait juste construit un produit dont personne n'avait suffisamment mal pour sortir sa carte bancaire, sur un marché où dix concurrents gratuits existaient déjà.\n\n" +
            "Ce cours commence par là, parce que c'est là que meurent la plupart des micro-SaaS. Pas sur un bug. Sur une idée qui n'était pas un problème payant.\n\n" +
            "## Douleur, pas préférence\n\n" +
            "Un problème qui paie a trois propriétés, et il te faut les trois :\n\n" +
            "- **Il fait mal régulièrement.** Pas une gêne annuelle, un caillou dans la chaussure chaque semaine. Une agence qui refait à la main le même rapport client tous les lundis matin, c'est de la douleur récurrente.\n" +
            "- **Il coûte déjà quelque chose.** Du temps facturable perdu, un abonnement à un outil trop gros, un freelance payé pour combler le trou. Si la cible dépense déjà pour contourner le problème, tu n'as pas à la convaincre de dépenser, seulement de dépenser mieux.\n" +
            "- **La cible peut décider seule d'acheter.** Un indépendant ou une petite équipe sort la carte en dix minutes. Une DSI de grand groupe, c'est six mois de cycle de vente : mauvais terrain pour un solo founder.\n\n" +
            "L'erreur classique est de partir d'une préférence personnelle (« j'aimerais une meilleure appli de notes ») plutôt que d'une douleur observée chez des gens qui travaillent. Les outils de productivité générique sont le cimetière préféré des side projects : tout le monde en veut, personne ne paie.\n\n" +
            "## La niche n'est pas une prison, c'est un raccourci\n\n" +
            "« Outil de facturation » est un océan avec des requins nommés QuickBooks. « Outil de facturation pour les professeurs de yoga qui vendent des cartes de 10 séances » est une mare où tu peux devenir le poisson de référence en six mois. La niche te donne trois avantages concrets : un vocabulaire précis pour ta landing (la cible se reconnaît), des lieux identifiables où elle se rassemble (groupes Facebook, forums métier, associations), et beaucoup moins de concurrence frontale.\n\n" +
            "Où chercher, par ordre d'efficacité :\n\n" +
            "1. **Ton propre travail.** Les tâches que toi ou tes collègues refaites à la main. Tu connais déjà le vocabulaire, les outils en place et le budget.\n" +
            "2. **Les métiers de ton entourage.** Le comptable, la kiné, le gérant de camping. Une heure de conversation révèle souvent trois irritants dont un se logicialise.\n" +
            "3. **Les forums et groupes métier.** Cherche les messages du type « comment vous faites pour... » qui reviennent tous les mois. Une question récurrente sans bonne réponse est un signal.\n" +
            "4. **Les avis 1 étoile des gros outils.** Les reproches récurrents faits à un mastodonte (« trop cher pour ce que j'en fais », « il me faudrait juste la fonction X ») dessinent des produits plus petits et plus ciblés.\n\n" +
            "## La concurrence, lue à l'envers\n\n" +
            "Le réflexe du débutant devant un concurrent : « c'est mort, quelqu'un le fait déjà ». C'est exactement l'inverse. Deux ou trois acteurs payants avec des avis mitigés, c'est la meilleure nouvelle possible : le marché existe, la cible sort déjà sa carte, et il reste des mécontents à mieux servir. Le vrai signal d'alarme, c'est le désert : zéro concurrent signifie rarement que tu es un génie incompris, presque toujours que d'autres ont essayé et que personne ne paie.\n\n" +
            "Le petit audit à faire en une heure, pour chaque idée retenue :\n\n" +
            "- Cherche « [ta douleur] logiciel » et « [ta douleur] outil » : qui apparaît, à quel prix, avec quel positionnement ?\n" +
            "- Lis les avis récents des acteurs en place. Les reproches récurrents sont ton cahier des charges gratuit.\n" +
            "- Vérifie qu'un géant gratuit ne couvre pas déjà le besoin « suffisamment bien ». Se battre contre un onglet de Google Sheets que tout le monde sait utiliser est une pente très raide.\n" +
            "- Note les prix pratiqués : ils t'apprennent ce que la niche accepte de payer, avant même ta première interview.\n\n" +
            "Trois profils de terrain en ressortent. L'océan saturé d'acteurs gros et gratuits : passe ton chemin. Le marché avec quelques payants imparfaits : creuse, c'est là que naissent les micro-SaaS. Le désert total : redouble de prudence sur la validation qui suit, la charge de la preuve vient de monter d'un cran.\n\n" +
            "## Les chiffres, sans le storytelling\n\n" +
            "Remettons l'église au milieu du village, parce que les captures d'écran de MRR à cinq chiffres sur les réseaux sont un biais de survivant à l'état pur. La réalité du terrain, celle qu'on voit sur les places de marché de revente de micro-SaaS et dans les communautés d'indie hackers : la majorité des produits lancés ne dépassent jamais 100 $ de MRR. Un micro-SaaS qui atteint 500 à 2 000 € de MRR au bout de 12 à 18 mois de travail régulier est un vrai succès, pas un lot de consolation. Les produits à 10 000 € et plus de MRR existent, mais ce sont des exceptions, souvent au troisième ou quatrième essai de leur créateur.\n\n" +
            "Pourquoi je te dis ça d'entrée ? Parce que ton plan doit tenir avec ces chiffres-là. 50 clients à 19 €/mois, c'est 950 € de MRR : atteignable, et déjà transformateur en revenu d'appoint. Si ton plan exige 5 000 clients pour avoir du sens, change de plan ou de prix.\n\n" +
            "## À toi\n\n" +
            "Liste trois problèmes concrets qui te coûtent, ou coûtent à quelqu'un que tu connais, au moins une heure par semaine ou un abonnement mal utilisé. Pour chacun, note : qui a mal, à quelle fréquence, et ce qui est dépensé aujourd'hui pour contourner.\n\n" +
            "> Correction : si tu n'arrives pas à remplir la colonne « ce qui est dépensé aujourd'hui », le problème est probablement une gêne, pas une douleur. Garde-le de côté et cherche-en un où la dépense actuelle existe déjà, même sous forme de temps facturable perdu.\n\n" +
            "La leçon suivante t'apprend à vérifier tout ça sans rien construire : dix conversations, menées correctement.\n",
        },
        {
          id: "l2",
          title: "Dix conversations avant la première ligne de code",
          type: "text",
          duration: "15 min",
          body:
            "## Pourquoi dix conversations et pas un sondage\n\n" +
            "Un sondage en ligne te donnera 87 % de « oui, super idée ! » et zéro client. Les gens sont polis, ne se connaissent pas eux-mêmes, et répondre « non » à un sondage gratuit ne coûte rien. Une conversation bien menée, elle, fait remonter ce que les gens font vraiment, pas ce qu'ils déclarent. Dix suffisent : au-delà, sur une niche précise, tu entends les mêmes choses en boucle. C'est d'ailleurs le signal que tu peux arrêter.\n\n" +
            "La méthode ci-dessous est directement inspirée du livre *The Mom Test* de Rob Fitzpatrick, le meilleur investissement à 15 € de tout ce parcours. Son titre résume l'idée : pose des questions telles que même ta mère, qui t'aime et veut te faire plaisir, ne pourrait pas te mentir.\n\n" +
            "## Les trois règles\n\n" +
            "- **Parle de leur vie, jamais de ton idée.** Dès que tu pitches, la conversation est morte : ton interlocuteur bascule en mode encouragement. Ton idée reste dans ta poche jusqu'à la fin, voire pour toujours.\n" +
            "- **Le passé, pas le futur.** « Est-ce que tu utiliserais un outil qui... » appelle une réponse hypothétique sans valeur. « Comment tu as géré ça la dernière fois ? » appelle un fait. Les faits ne mentent pas.\n" +
            "- **Cherche la dépense, pas le compliment.** « C'est une super idée » vaut zéro. « J'ai payé un stagiaire trois jours pour faire ça en mars » vaut de l'or.\n\n" +
            "## Le script, question par question\n\n" +
            "Voici la trame que j'utilise, à adapter à ton vocabulaire :\n\n" +
            "1. « Raconte-moi la dernière fois que tu as eu à [tâche du problème]. » Laisse dérouler, ne coupe pas.\n" +
            "2. « Qu'est-ce qui était le plus pénible là-dedans ? » Note les mots exacts, ils serviront pour la landing.\n" +
            "3. « Combien de temps ça t'a pris ? À quelle fréquence ça revient ? »\n" +
            "4. « Qu'est-ce que tu as déjà essayé pour régler ça ? » Outils, bricolages Excel, sous-traitance.\n" +
            "5. « Combien ça te coûte aujourd'hui, en temps ou en argent ? »\n" +
            "6. « Si ce problème disparaissait demain, qu'est-ce que ça changerait concrètement ? »\n" +
            "7. En clôture seulement : « Je regarde ce sujet de près. Je peux revenir vers toi quand j'ai quelque chose à montrer ? »\n\n" +
            "Trente minutes maximum. Tu prends des notes écrites (pas d'enregistrement sans accord), et tu remplis après chaque appel une grille à cinq colonnes : douleur citée, fréquence, solution actuelle, dépense actuelle, engagement obtenu.\n\n" +
            "## Une question, deux versions\n\n" +
            "Le plus simple pour sentir la différence, c'est de comparer les mêmes questions avant et après correction :\n\n" +
            "- « Tu ne trouves pas que la facturation, c'est pénible ? » souffle la réponse. Version corrigée : « Raconte-moi ta dernière facturation de fin de mois. » Le mot « pénible » doit venir de lui, pas de toi.\n" +
            "- « Est-ce que tu paierais 20 € par mois pour un outil qui automatise ça ? » appelle un oui de politesse qui n'engage à rien. Version corrigée : « Qu'est-ce que tu as déjà essayé pour régler ça, et combien ça t'a coûté ? » Le passé, toujours le passé.\n" +
            "- « Mon idée, c'est un outil qui... qu'est-ce que t'en penses ? » transforme l'interview en séance d'encouragement. Version corrigée : tu ne pitches pas. Si ton interlocuteur insiste (« mais tu construis quoi, au juste ? »), réponds que tu es encore en phase d'écoute et que tu lui montreras quelque chose de concret dans quelques semaines. C'est vrai, et ça protège la conversation.\n\n" +
            "Un dernier réglage : évite de ne faire l'exercice qu'avec des proches. Deux amis dans le lot, d'accord ; dix, et tu as recruté un jury de supporters.\n\n" +
            "## Trouver les dix personnes\n\n" +
            "C'est plus simple qu'il n'y paraît si la niche est précise. Deux ou trois viendront de ton réseau direct ou du réseau de ton réseau (un message LinkedIn honnête du type « je fais des recherches sur la facturation des studios de yoga, 20 minutes au téléphone ? » fonctionne mieux qu'on croit). Le reste viendra des lieux où la niche se rassemble : groupes Facebook métier, forums, salons, associations professionnelles. Propose un créneau court, précis, sans rien vendre. Sur 30 sollicitations, obtenir 10 conversations est un taux normal. Si tu n'arrives même pas à trouver 30 personnes à contacter, note-le : tu auras le même problème pour trouver des clients.\n\n" +
            "## Lire les signaux\n\n" +
            "Signaux forts, à compter précieusement :\n\n" +
            "- Une dépense actuelle chiffrée (argent ou heures) citée spontanément.\n" +
            "- De l'émotion : quelqu'un qui soupire ou s'énerve en racontant la tâche.\n" +
            "- Un engagement concret en fin d'appel : « tiens-moi au courant », adresse email donnée sans que tu la demandes, proposition de te présenter un confrère.\n\n" +
            "Signaux faibles, à ignorer froidement :\n\n" +
            "- Les compliments (« bonne idée », « ça manque, c'est sûr »).\n" +
            "- Les promesses hypothétiques (« je l'achèterais, c'est certain »).\n" +
            "- Les idées de fonctionnalités en rafale : c'est de la créativité de salon, pas un besoin.\n\n" +
            "## À toi\n\n" +
            "Prends ta grille et relis tes notes imaginaires (ou réelles) : sur 10 conversations, combien de personnes ont cité une dépense actuelle chiffrée sans que tu la souffles ?\n\n" +
            "> Correction : mon seuil personnel est 5 sur 10 minimum, avec au moins 3 engagements concrets en fin d'appel. En dessous, soit la niche n'a pas assez mal, soit tu as parlé aux mauvaises personnes. Dans les deux cas, on ne code toujours pas : on ajuste la cible et on refait cinq conversations. Ça coûte une semaine. Un MVP inutile coûte quatre mois.\n",
        },
        {
          id: "l3",
          title: "La landing de pré-vente et les seuils kill/go",
          type: "text",
          duration: "16 min",
          body:
            "## Des paroles aux actes\n\n" +
            "Les conversations t'ont donné le vocabulaire de la douleur et une première preuve d'intérêt. Reste le test décisif : est-ce que des inconnus, pas tes dix interlocuteurs polis, font un geste qui leur coûte quelque chose ? C'est le rôle de la landing de pré-vente. Tu la construis avant le produit, et c'est elle qui décide si tu ouvres ton éditeur de code ou si tu ranges l'idée.\n\n" +
            "Trois niveaux d'engagement, du plus faible au plus fort :\n\n" +
            "- **L'email** (liste d'attente). Facile à obtenir, facile à oublier. Utile, pas suffisant.\n" +
            "- **L'email + une réponse** à la question « qu'est-ce qui te ferait payer pour ça ? ». Déjà plus sérieux.\n" +
            "- **La pré-vente payée** : un paiement réel (remboursable) contre un accès early bird à tarif réduit. C'est la seule preuve qui ne ment jamais. Un lien de paiement Stripe se crée en dix minutes depuis le dashboard, sans écrire de code, et tu rembourses en un clic si tu abandonnes.\n\n" +
            "## Construire la page en une journée\n\n" +
            "Pas besoin de design system. Un outil comme Carrd (19 $ par an) ou une simple page Next.js déployée sur Vercel suffit. Ce qui compte, c'est le texte, et tu l'as déjà : ce sont les mots exacts notés pendant les conversations.\n\n" +
            "La structure qui fonctionne :\n\n" +
            "1. **Titre = la douleur, formulée comme la cible la formule.** Pas « La plateforme intelligente de gestion documentaire », mais « Arrête de refaire le même rapport client chaque lundi matin ».\n" +
            "2. **Sous-titre = le résultat promis**, concret et daté : « Ton rapport hebdo généré en 3 minutes au lieu de 2 heures ».\n" +
            "3. **Trois puces** sur le fonctionnement, sans jargon.\n" +
            "4. **Le prix affiché.** Oui, déjà. Une landing sans prix mesure la curiosité ; une landing avec prix mesure l'intention d'achat. C'est cette deuxième mesure qui t'intéresse.\n" +
            "5. **Un seul appel à l'action** : « Rejoindre la liste » ou « Réserver l'accès early bird à 9 €/mois (au lieu de 19 €) ».\n" +
            "6. Une ligne honnête : « Le produit est en construction, lancement prévu en octobre. Remboursement intégral si on n'aboutit pas. » La transparence convertit mieux que le faux fini.\n\n" +
            "## Amener du trafic qualifié\n\n" +
            "Une landing sans visiteurs ne mesure rien. Objectif : 200 à 300 visites **qualifiées**, c'est-à-dire venant de ta niche, pas de tes amis développeurs. Sources sans budget : les lieux repérés à la leçon précédente (groupes métier, forums, avec un message qui apporte d'abord de la valeur), tes dix interlocuteurs à qui tu envoies le lien en leur demandant de le transmettre à deux confrères, et un ou deux posts LinkedIn ou X racontant la démarche. Compte une à deux semaines pour les réunir. Résiste à la tentation des ads à ce stade : 50 € de pub mal ciblée produit des chiffres impossibles à interpréter.\n\n" +
            "## Les seuils kill/go, décidés avant de regarder les chiffres\n\n" +
            "Le piège mortel : décider des seuils après avoir vu les résultats. On trouve toujours une raison de continuer quand on a envie de continuer. Écris tes seuils noir sur blanc avant de publier la page. Voici les miens, calibrés sur du trafic qualifié :\n\n" +
            "| Métrique | Kill | Zone grise | Go |\n" +
            "| --- | --- | --- | --- |\n" +
            "| Visite → email | < 5 % | 5 à 10 % | > 10 % |\n" +
            "| Visite → pré-vente payée | 0 % | 0,5 à 2 % | > 2 % |\n" +
            "| Pré-ventes en valeur absolue | 0 | 1 à 4 | 5 et plus |\n\n" +
            "Sur trafic froid (gens qui ne te connaissent pas du tout), 10 à 20 % de conversion en email est un bon score pour une liste d'attente ; 1 à 3 % en pré-vente payée est déjà très solide. Si tu lis des études de cas qui annoncent 40 % de conversion, c'est du trafic d'audience existante, pas comparable à ta situation.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le funnel de validation : chaque étage filtre, la décision tombe avant d'écrire du code\"}\n" +
            "<svg viewBox=\"0 0 640 340\" role=\"img\"><title>Funnel de validation d'une idée de micro-SaaS</title><g font-family=\"ui-monospace, monospace\" font-size=\"13\"><rect x=\"90\" y=\"16\" width=\"460\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"320\" y=\"41\" text-anchor=\"middle\" fill=\"currentColor\">10 conversations : douleur + dépense confirmées</text><path d=\"M320 60 l0 14 m-5 -7 l5 7 l5 -7\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"130\" y=\"80\" width=\"380\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"320\" y=\"105\" text-anchor=\"middle\" fill=\"currentColor\">250 visites qualifiées sur la landing</text><path d=\"M320 124 l0 14 m-5 -7 l5 7 l5 -7\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"170\" y=\"144\" width=\"300\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"320\" y=\"169\" text-anchor=\"middle\" fill=\"currentColor\">35 emails captés (14 %)</text><text x=\"488\" y=\"169\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">kill si &lt; 5 %</text><path d=\"M320 188 l0 14 m-5 -7 l5 7 l5 -7\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"210\" y=\"208\" width=\"220\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"320\" y=\"233\" text-anchor=\"middle\" fill=\"currentColor\">6 pré-ventes payées (2,4 %)</text><text x=\"448\" y=\"233\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">kill si 0</text><path d=\"M320 252 l0 14 m-5 -7 l5 7 l5 -7\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"240\" y=\"272\" width=\"160\" height=\"44\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"320\" y=\"299\" text-anchor=\"middle\" fill=\"currentColor\">GO : construis le MVP</text></g></svg>\n" +
            "```\n\n" +
            "## Deux semaines, jour par jour\n\n" +
            "Pour rendre ça concret, voilà le déroulé type d'un test de pré-vente, calé sur l'objectif de 250 visites :\n\n" +
            "- **Jours 1-2** : la page (titre issu des interviews, prix affiché, lien de paiement Stripe), plus un événement de mesure sur le clic du bouton. Sans mesure, pas de verdict.\n" +
            "- **Jour 3** : envoi personnel à tes dix interviewés, avec la demande de transmission à deux confrères. C'est ton trafic le plus qualifié, note-le à part : il convertira mieux que le reste.\n" +
            "- **Jours 4-8** : un message utile par communauté repérée, dans une ou deux communautés, pas dix. Raconte le problème et la démarche, pas le produit miracle.\n" +
            "- **Jours 9-11** : un post LinkedIn ou X sur ce que tu as appris pendant les interviews. Le format « je partage ma recherche » attire la niche sans faire vendeur de tapis.\n" +
            "- **Jours 12-13** : relance douce des emails captés qui n'ont pas pré-acheté : « qu'est-ce qui te retient ? ». Leurs réponses valent presque autant que les paiements.\n" +
            "- **Jour 14** : verdict, seuils sous les yeux, décision écrite.\n\n" +
            "Garde le rythme court à dessein. Un test qui traîne six semaines s'étiole, le trafic se dilue et la motivation avec ; deux semaines denses donnent une lecture nette.\n\n" +
            "## Et si c'est kill ?\n\n" +
            "Alors tu viens de gagner quatre mois de soirées. Tu rembourses les éventuelles pré-ventes avec un mot honnête, tu gardes la liste email (ces gens ont un problème, ton prochain essai les intéressera peut-être), et tu recommences la boucle : autre douleur, autre niche, ou même douleur formulée autrement. Les indie hackers qui finissent par vivre de leurs produits ont presque tous deux ou trois kills derrière eux. Le kill n'est pas l'échec ; l'échec, c'est six mois de code pour apprendre ce qu'une landing t'aurait dit en deux semaines.\n",
        },
        {
          id: "l4",
          title: "Quiz : valider avant de coder",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Pendant une interview de validation, ton interlocuteur dit : « Franchement, super idée, je l'achèterais direct. » Comment traiter cette information ?",
              options: [
                "C'est un signal fort : le noter comme intention d'achat confirmée",
                "C'est un signal faible : les compliments et promesses hypothétiques ne prédisent rien, seuls les faits passés et les dépenses actuelles comptent",
                "C'est le signal pour pitcher ton idée en détail",
                "C'est suffisant pour commencer à coder si trois personnes le disent",
              ],
              correctIndex: 1,
              explanation:
                "Les gens sont polis et répondre « oui » à une hypothèse ne coûte rien. La méthode Mom Test recommande d'ancrer les questions dans le passé (« comment tu as géré ça la dernière fois ? ») et de chercher les dépenses réelles, seuls indicateurs fiables.",
            },
            {
              id: "q2",
              prompt:
                "Pourquoi afficher un prix sur la landing de pré-vente alors que le produit n'existe pas encore ?",
              options: [
                "Pour paraître plus professionnel auprès des visiteurs",
                "Parce que Stripe l'exige avant de créer un lien de paiement",
                "Parce qu'une page sans prix mesure la curiosité, alors qu'une page avec prix mesure l'intention d'achat, ce qui est la donnée recherchée",
                "Pour pouvoir augmenter le prix plus tard",
              ],
              correctIndex: 2,
              explanation:
                "Laisser un email sur une page vague ne coûte rien et ne prouve rien. Face à un prix affiché, le visiteur se demande « est-ce que ça les vaut ? » : c'est exactement la question dont tu veux la réponse avant de coder.",
            },
            {
              id: "q3",
              prompt:
                "Ta landing a reçu 240 visites qualifiées : 8 emails (3,3 %) et 0 pré-vente. Tes seuils écrits avant le test étaient kill si < 5 % d'emails ou 0 pré-vente. Que fais-tu ?",
              options: [
                "Tu continues : 8 emails prouvent quand même un intérêt",
                "Tu ajoutes des fonctionnalités à la landing pour améliorer le score",
                "Tu appliques le kill : tu rembourses, tu gardes la liste, et tu repars sur une autre douleur ou une autre niche",
                "Tu lances 100 € de publicité pour obtenir plus de trafic",
              ],
              correctIndex: 2,
              explanation:
                "Les seuils sont écrits avant justement pour empêcher la rationalisation après coup. Sous les deux seuils à la fois, le signal est clair. Deux semaines de test viennent de t'économiser des mois de développement : c'est le système qui fonctionne, pas un échec.",
            },
            {
              id: "q4",
              prompt:
                "Quel taux de conversion visite → pré-vente payée est considéré comme déjà très solide sur du trafic froid et qualifié ?",
              options: [
                "Autour de 20 à 30 %",
                "Autour de 1 à 3 %",
                "Autour de 50 %",
                "Moins de 0,01 %, la pré-vente ne fonctionne jamais",
              ],
              correctIndex: 1,
              explanation:
                "Sur des visiteurs qui ne te connaissent pas, 1 à 3 % de paiement réel est un excellent score. Les études de cas à 30 ou 40 % concernent des audiences existantes déjà acquises à l'auteur, pas du trafic froid.",
            },
            {
              id: "q5",
              prompt:
                "Parmi ces quatre idées, laquelle a le meilleur profil « problème qui paie » pour un solo founder ?",
              options: [
                "Une appli de productivité générique pour tout le monde",
                "Un outil pour les DSI de grands groupes, avec un fort budget mais un cycle d'achat de six mois",
                "Un outil qui automatise le rapport hebdomadaire que les petites agences web refont à la main chaque lundi",
                "Un réseau social pour les passionnés de photographie",
              ],
              correctIndex: 2,
              explanation:
                "Douleur récurrente (chaque semaine), coût actuel mesurable (heures facturables perdues), cible nichée qui peut décider seule d'acheter : les trois critères sont réunis. Les grands groupes ont du budget mais un cycle de vente incompatible avec un solo founder, et les produits génériques ou communautaires monétisent très mal.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Construire le MVP en pilotant l'IA",
      lessons: [
        {
          id: "l5",
          title: "Vibe coding honnête : ce que l'IA accélère, ce qu'elle casse",
          type: "text",
          duration: "16 min",
          body:
            "## Le contrat, sans le marketing\n\n" +
            "Avec un assistant comme Claude Code ou Cursor, un développeur intermédiaire construit aujourd'hui en trois week-ends ce qui lui aurait pris deux mois de soirées en 2021. C'est réel, je le mesure sur mes propres projets. Mais le même outil, utilisé les yeux fermés, produit des applications qui fuient des données, s'effondrent au premier trafic, et deviennent impossibles à modifier au bout de six semaines. Le mot à la mode est « vibe coding » : décrire ce qu'on veut et accepter le code sans le lire. Sur un jouet du dimanche, très bien. Sur un produit qui va stocker les données et les paiements de clients, non.\n\n" +
            "La posture qui marche : l'IA est un développeur junior extraordinairement rapide et cultivé, qui ne se relit jamais et n'a aucune mémoire de tes contraintes. Tu restes l'architecte et le relecteur. Voyons précisément où elle t'accélère et où elle te piège.\n\n" +
            "## Ce que l'IA accélère vraiment\n\n" +
            "- **Le boilerplate et la plomberie.** Mise en place du projet, configuration, formulaires, pages CRUD, appels d'API documentées. Facilement 3 à 5 fois plus vite, parce que c'est du code que des milliers de projets ont déjà écrit.\n" +
            "- **Le code de liaison.** Brancher Stripe, envoyer un email avec Resend, parser un CSV : l'IA connaît les SDK courants par cœur.\n" +
            "- **Les tests.** « Écris les tests de cette fonction, y compris les cas limites » : demande systématique, coût quasi nul, valeur énorme.\n" +
            "- **Les refactorings mécaniques.** Renommer, extraire, déplacer, convertir. Fastidieux à la main, immédiat en délégué.\n" +
            "- **L'apprentissage.** « Explique-moi pourquoi tu as utilisé une transaction ici » : tu montes en compétence sur ton propre code.\n\n" +
            "## Ce que l'IA casse, avec exemples\n\n" +
            "- **Les API inventées.** Le grand classique : une méthode de SDK qui n'existe pas, ou qui existait dans une version de 2022. Le code a l'air parfait, il ne compile pas, ou pire, il compile et échoue en production. Antidote : toujours vérifier contre la doc officielle de la version que TU utilises.\n" +
            "- **La sécurité par omission.** L'IA écrit ce que tu demandes. Si tu demandes « une route API qui renvoie les factures », tu obtiens une route qui renvoie les factures... de n'importe qui, sans vérification d'identité. Elle n'ajoute pas ce que tu n'as pas demandé. La leçon 7 est entièrement consacrée à ça.\n" +
            "- **La dérive d'architecture.** Chaque session de génération repart de zéro mentalement. Au bout de vingt sessions, tu as trois façons différentes de gérer les erreurs, deux clients de base de données, et des composants de 800 lignes. Le code devient un patchwork que plus personne ne comprend, toi inclus.\n" +
            "- **La sur-ingénierie spontanée.** Demande un formulaire de contact, reçois une machine à états avec cache distribué. L'IA adore montrer ses muscles ; ton MVP n'en a pas besoin.\n" +
            "- **Le code que tu ne comprends pas.** C'est le vrai coût caché. Un bug dans du code que tu n'as jamais lu se débogue trois fois plus lentement. Et le jour où l'IA tourne en rond sur ce bug (ça arrive), tu es seul avec un code étranger.\n\n" +
            "## Les règles de pilotage\n\n" +
            "Cinq habitudes qui changent tout, testées sur mes deux produits :\n\n" +
            "1. **Écris une mini-spec avant chaque session.** Dix lignes dans un fichier : la fonctionnalité, les cas limites, ce qui est hors périmètre. L'IA travaille infiniment mieux avec un cadre, et toi aussi.\n" +
            "2. **Petits pas, petits commits.** Une fonctionnalité à la fois, un commit dès que ça marche. Quand une génération part en vrille, `git checkout .` et on reformule, plutôt que de laisser l'IA « réparer » en couches successives.\n" +
            "3. **Lis chaque diff avant d'accepter.** Pas survoler : lire. Si une ligne te dépasse, demande une explication avant d'accepter. C'est non négociable sur tout ce qui touche l'auth, l'argent et les données.\n" +
            "4. **Maintiens un fichier de conventions** (la plupart des outils le supportent : instructions projet, fichier de règles). Stack, conventions de nommage, gestion d'erreurs, structure des dossiers. C'est ton antidote à la dérive d'architecture.\n" +
            "5. **Exige des tests sur la logique métier.** Calculs de prix, droits d'accès, quotas : chaque règle importante a son test. Les tests sont aussi ton filet quand l'IA modifiera ce code dans deux mois.\n\n" +
            "## Une session type, en vrai\n\n" +
            "Voilà à quoi ressemble une bonne session sur un cas réel de mon outil de reporting : l'export CSV des rapports.\n\n" +
            "La mini-spec, écrite en trois minutes : « Bouton Exporter sur la page rapport. Génère un CSV des lignes affichées, colonnes date, client, montant. Encodage UTF-8 avec BOM (Excel français). Cas limites : rapport vide (bouton désactivé), 10 000 lignes max. Hors périmètre : export PDF, planification. » Je la colle en tête de prompt et je demande l'implémentation plus les tests.\n\n" +
            "Premier retour de l'IA : correct à 90 %, sauf qu'elle a importé une fonction utilitaire de conversion qui n'existait pas dans le projet, en supposant qu'elle existait « sûrement ». Le compilateur TypeScript la coince immédiatement : c'est exactement le filet dont je te parlais. Je le lui signale, elle réécrit la logique en place, les tests passent. Relecture du diff : cinq minutes, rien qui touche l'auth ni les données d'un autre utilisateur, le cas « rapport vide » est couvert. Commit.\n\n" +
            "Durée totale : vingt-cinq minutes, dont dix de relecture. À la main, j'y aurais passé deux heures en comptant la subtilité du BOM pour Excel. C'est ça, le contrat tenu : l'IA fait la frappe, la spec et la relecture restent chez toi.\n\n" +
            "## À toi\n\n" +
            "Prends une fonctionnalité de ton futur MVP et écris sa mini-spec en dix lignes maximum : ce qu'elle fait, les deux cas limites principaux, ce qu'elle ne fait pas.\n\n" +
            "> Correction : si ta spec dépasse dix lignes, la fonctionnalité est trop grosse pour une session : découpe-la. Si tu n'arrives pas à nommer un cas limite, tu n'es pas prêt à la déléguer : l'IA butera exactement sur le flou que tu as laissé.\n",
        },
        {
          id: "l6",
          title: "Une stack ennuyeuse qui tient : Next.js, Postgres, auth",
          type: "text",
          duration: "15 min",
          body:
            "## L'ennui est une stratégie\n\n" +
            "Chaque techno excitante que tu ajoutes est un pari, et un solo founder n'a pas de budget paris : il a un produit à vendre. La bonne stack de micro-SaaS est celle qui a dix ans de réponses sur Stack Overflow, des tonnes d'exemples dans les données d'entraînement de ton IA (elle génèrera du bien meilleur code), et un hébergeur qui la déploie en un git push. Autrement dit : une stack ennuyeuse.\n\n" +
            "Voici celle que je recommande, et pourquoi, brique par brique :\n\n" +
            "- **Next.js** (React + TypeScript). Front et back dans le même projet : tes pages et tes routes d'API vivent ensemble, se déploient ensemble. TypeScript n'est pas optionnel : c'est ton premier filet contre les erreurs de l'IA, le compilateur attrape les hallucinations de types avant la production.\n" +
            "- **Postgres** comme base de données, hébergé chez Neon ou Supabase (offres gratuites au départ). Relationnel, transactionnel, indestructible. Tu n'as pas besoin de NoSQL, tu as besoin de ne jamais perdre une ligne de facturation.\n" +
            "- **Un ORM** (Prisma ou Drizzle) : requêtes typées, migrations versionnées, et une protection par défaut contre l'injection SQL.\n" +
            "- **L'authentification déléguée ou standardisée** : Clerk si tu veux aller vite (gratuit jusqu'à quelques milliers d'utilisateurs, puis payant), Auth.js si tu veux rester chez toi. Ce qu'il ne faut PAS faire : laisser l'IA implémenter son propre hachage de mots de passe et sa propre gestion de session. C'est le domaine où le code généré artisanal est le plus dangereux.\n" +
            "- **Stripe** pour l'argent (partie 3), **Resend** pour les emails transactionnels.\n" +
            "- **Vercel** pour l'hébergement : git push, c'est en ligne. Railway ou un VPS font aussi l'affaire si tu préfères.\n\n" +
            "Coût total au démarrage : entre 0 et 20 € par mois. Tout est remplaçable plus tard, et « plus tard » signifie « quand tu auras le problème de croissance qui le justifie », ce qui est un excellent problème.\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'architecture complète du MVP : un monolithe Next.js et des services managés autour\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\"><title>Architecture d'un MVP de micro-SaaS</title><g font-family=\"ui-monospace, monospace\" font-size=\"13\"><rect x=\"20\" y=\"120\" width=\"120\" height=\"56\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"80\" y=\"144\" text-anchor=\"middle\" fill=\"currentColor\">Navigateur</text><text x=\"80\" y=\"162\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">(client)</text><path d=\"M140 148 l64 0 m-8 -5 l8 5 l-8 5\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"204\" y=\"70\" width=\"220\" height=\"156\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"314\" y=\"94\" text-anchor=\"middle\" fill=\"currentColor\">Next.js (Vercel)</text><rect x=\"222\" y=\"108\" width=\"184\" height=\"36\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"314\" y=\"131\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.75\" font-size=\"12\">pages (app/)</text><rect x=\"222\" y=\"152\" width=\"184\" height=\"36\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"314\" y=\"175\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.75\" font-size=\"12\">routes API + ORM</text><text x=\"314\" y=\"212\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">un seul repo, un seul deploy</text><path d=\"M424 148 l64 0 m-8 -5 l8 5 l-8 5\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"488\" y=\"120\" width=\"132\" height=\"56\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"554\" y=\"144\" text-anchor=\"middle\" fill=\"currentColor\">Postgres</text><text x=\"554\" y=\"162\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">(Neon / Supabase)</text><rect x=\"204\" y=\"254\" width=\"120\" height=\"44\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"264\" y=\"281\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"12\">Stripe</text><path d=\"M264 254 l0 -28 m-5 8 l5 -8 l5 8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><text x=\"330\" y=\"246\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">webhooks</text><rect x=\"464\" y=\"254\" width=\"120\" height=\"44\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"524\" y=\"281\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"12\">Resend (emails)</text><path d=\"M470 254 l-56 -28 m2 9 l-2 -9 l9 2\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"20\" y=\"20\" width=\"150\" height=\"44\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"95\" y=\"47\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"12\">Auth (Clerk/Auth.js)</text><path d=\"M170 42 l40 40 m-2 -9 l2 9 l-9 -2\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/></g></svg>\n" +
            "```\n\n" +
            "## Ce qu'on n'installe pas\n\n" +
            "La liste des non est aussi importante que la stack elle-même. Pas de microservices : un monolithe Next.js gère sans transpirer tes 10 000 premiers utilisateurs. Pas de Kubernetes, pas de file de messages, pas de cache Redis « au cas où », pas de GraphQL si une route REST fait l'affaire. Chacune de ces briques est légitime... à une échelle que tu n'as pas. Le sur-outillage est le procrastination favorite du développeur qui a peur d'aller vendre.\n\n" +
            "Même discipline côté produit. Ton MVP, c'est : la fonctionnalité cœur qui supprime la douleur validée en partie 1, une inscription, un paiement, et c'est tout. Pas de mode équipe, pas de rôles et permissions, pas de thème sombre, pas d'API publique. Chaque « pendant que j'y suis » retarde le seul moment qui compte : celui où un client réel utilise le produit et te dit ce qui manque vraiment.\n\n" +
            "## Deux objections que j'entends à chaque fois\n\n" +
            "**« Pourquoi pas du no-code, genre Bubble ? »** C'était un vrai débat en 2022. Pour valider une idée, un outil no-code reste défendable ; pour le produit lui-même, l'équation a changé : avec un assistant IA, écrire du code standard est devenu presque aussi rapide que cliquer dans un éditeur visuel, sans les inconvénients qui piquent plus tard. Le no-code t'enferme chez un éditeur (impossible d'exporter ton app et de partir), ses tarifs grimpent avec l'usage, et le jour où il te faut un comportement que la plateforme n'a pas prévu, tu bricoles des contournements fragiles. Ton code Next.js, lui, t'appartient, se versionne dans Git et se déploie où tu veux. Développeur qui hésite entre les deux : reste sur du code, c'est devenu ton avantage.\n\n" +
            "**« Et si ça décolle, Vercel va me ruiner ? »** Les histoires de factures surprises circulent, et elles ont un fond de vrai : sur une offre à l'usage, un pic de trafic ou une boucle infinie peut coûter cher. La parade existe et prend cinq minutes : configure un plafond de dépenses (spend management) et des alertes dans le dashboard Vercel dès le premier jour. À ton échelle réelle (quelques centaines d'utilisateurs), tu tiendras longtemps dans l'offre gratuite ou à 20 $/mois. Et si un jour ton trafic justifie de migrer sur un VPS à 15 €, ce sera un bon problème, résolu en un week-end puisque ton app est du Node standard.\n\n" +
            "## L'ordre de construction\n\n" +
            "Concrètement, avec ton assistant IA et une mini-spec par étape :\n\n" +
            "1. Projet Next.js + TypeScript + ORM branché sur Postgres, déployé sur Vercel dès le premier jour (le déploiement continu d'abord, les fonctionnalités ensuite).\n" +
            "2. Le modèle de données minimal : en général 3 à 5 tables suffisent (utilisateur, l'objet métier central, l'abonnement).\n" +
            "3. L'authentification.\n" +
            "4. La fonctionnalité cœur, en version laide mais qui marche.\n" +
            "5. Stripe en mode test.\n" +
            "6. Trois clients pilotes (tes pré-ventes !) dessus avant tout polissage.\n\n" +
            "Compte deux à quatre semaines de soirées pour un développeur intermédiaire outillé d'une IA. Si tu en es à la semaine huit et que personne n'a encore touché le produit, tu es en train de te cacher dans le code. Ça nous arrive à tous ; la leçon suivante, elle, ne se saute pas, parce qu'elle concerne la sécurité de ce que tu viens de générer.\n",
        },
        {
          id: "l7",
          title: "Relire le code généré : la revue de sécurité minimale",
          type: "text",
          duration: "16 min",
          body:
            "## Pourquoi cette leçon peut te sauver la boîte\n\n" +
            "Depuis 2024, les exemples s'accumulent : des apps « vibe-codées » lancées en fanfare puis vidées de leurs données en quelques jours, clés d'API exposées côté client, routes ouvertes aux quatre vents. Le schéma est toujours le même : le fondateur a demandé des fonctionnalités, l'IA a livré des fonctionnalités, et personne n'a demandé la sécurité. Un micro-SaaS stocke des emails, des données métier, parfois des tokens d'accès aux comptes de tes clients. Une fuite, et c'est la confiance (plus, en Europe, une obligation de notification RGPD) qui saute.\n\n" +
            "Bonne nouvelle : pas besoin d'être expert. Une revue d'une heure, guidée par la checklist ci-dessous, élimine l'essentiel du risque réel d'un MVP. La voici, dans l'ordre des dégâts.\n\n" +
            "## 1. L'autorisation sur chaque route (le tueur n°1)\n\n" +
            "Le bug le plus fréquent du code généré n'est pas une faille exotique, c'est une absence : la route vérifie que tu es connecté, mais pas que la ressource t'appartient. On appelle ça un IDOR (Insecure Direct Object Reference). Exemple typique sorti d'une génération :\n\n" +
            "```ts\n" +
            "// GET /api/invoices/[id] : version générée, vulnérable\n" +
            "const invoice = await db.invoice.findUnique({ where: { id: params.id } });\n" +
            "return Response.json(invoice);\n" +
            "```\n\n" +
            "N'importe quel utilisateur connecté peut lire la facture de n'importe qui en changeant l'id dans l'URL. La version correcte filtre sur le propriétaire :\n\n" +
            "```ts\n" +
            "const invoice = await db.invoice.findUnique({\n" +
            "  where: { id: params.id, userId: session.user.id },\n" +
            "});\n" +
            "if (!invoice) return new Response(\"Not found\", { status: 404 });\n" +
            "```\n\n" +
            "Le geste de revue : ouvre chaque route d'API et pose deux questions. Qui a le droit d'appeler ça ? Est-ce que la requête base de données contient la condition de propriété ? Toute route qui prend un id en paramètre est suspecte par défaut. Demande aussi à ton IA : « Liste toutes mes routes API et signale celles qui ne vérifient pas la propriété de la ressource. » Elle est très bonne à cet exercice... quand on le lui demande.\n\n" +
            "## 2. Les secrets côté client\n\n" +
            "Dans Next.js, toute variable d'environnement préfixée `NEXT_PUBLIC_` est embarquée dans le JavaScript envoyé au navigateur, donc publique. L'IA, en voulant « faire marcher » un appel d'API depuis un composant client, propose parfois de préfixer une clé secrète. Résultat : ta clé Stripe secrète ou ta clé d'API LLM lisible par quiconque ouvre les DevTools, et une facture surprise quand quelqu'un la siphonne.\n\n" +
            "Le geste de revue : cherche `NEXT_PUBLIC_` dans tout le projet et vérifie que rien de secret ne s'y trouve. Les appels qui utilisent des secrets se font côté serveur, point. Et `.env` est dans le `.gitignore` (les scanners de dépôts GitHub trouvent les clés commitées en quelques minutes ; Stripe les révoque d'ailleurs automatiquement quand il les détecte).\n\n" +
            "## 3. La validation des entrées\n\n" +
            "Tout ce qui arrive du client est hostile jusqu'à preuve du contraire. Le code généré valide rarement au-delà du « champ requis ». Utilise un schéma (Zod, par exemple) sur chaque body de requête : types, longueurs maximales, valeurs autorisées. Ça bloque à la fois les données pourries qui casseront ton produit et une partie des attaques. L'ORM te protège de l'injection SQL classique, sauf si l'IA a glissé du SQL brut : cherche `$queryRawUnsafe` ou les concaténations de chaînes dans les requêtes, et bannis-les.\n\n" +
            "## 4. Le rate limiting sur les routes sensibles\n\n" +
            "Sans limite de débit, ta page de connexion accepte 10 000 tentatives de mot de passe par minute et ta route d'inscription se fait remplir par des bots. Une librairie comme Upstash Ratelimit se pose en une heure sur les routes de connexion, d'inscription et sur toute route qui coûte cher (envoi d'email, appel LLM).\n\n" +
            "## 5. Les webhooks vérifiés et les dépendances à jour\n\n" +
            "Ton endpoint de webhook Stripe doit vérifier la signature de la requête (on le fera en partie 3) : sans ça, n'importe qui peut t'envoyer un faux événement « paiement réussi ». Enfin, `npm audit` avant chaque mise en production et des dépendances raisonnablement à jour : les MVP se font rarement attaquer par des génies, souvent par des scanners automatiques qui exploitent des failles connues de vieilles versions.\n\n" +
            "## Si une clé a fuité quand même\n\n" +
            "Un jour, malgré tout, tu commiteras un `.env` ou colleras une clé dans un ticket public. La procédure, dans l'ordre et sans délai :\n\n" +
            "1. **Révoque et régénère la clé immédiatement** depuis le dashboard du service concerné (chez Stripe : « Roll key »). Considère-la compromise dès la seconde où elle a été exposée : les bots qui scannent GitHub la trouvent en quelques minutes, pas en quelques jours.\n" +
            "2. **Ne te contente pas de supprimer le commit.** Réécrire l'historique Git ne rappelle pas les copies déjà faites ; la révocation est la seule vraie réponse, le nettoyage d'historique vient après, pour l'hygiène.\n" +
            "3. **Vérifie les journaux d'usage** du service : appels inhabituels, créations d'objets que tu ne reconnais pas, dépenses anormales.\n" +
            "4. **Si des données personnelles ont pu être touchées**, souviens-toi que le RGPD impose de notifier la CNIL sous 72 heures quand la violation présente un risque pour les personnes. Mieux vaut connaître cette règle avant d'en avoir besoin.\n\n" +
            "Dix minutes de sang-froid, et l'incident reste une anecdote au lieu de devenir une facture.\n\n" +
            "## La routine qui rend ça tenable\n\n" +
            "- À chaque nouvelle route : les deux questions d'autorisation, le schéma de validation.\n" +
            "- Avant chaque mise en prod : recherche `NEXT_PUBLIC_`, `npm audit`, relecture des diffs touchant auth et paiement.\n" +
            "- Une fois par mois : demande à ton IA une passe complète avec cette checklist en prompt. La même IA qui a créé le trou sait très bien le trouver quand on lui donne la grille de lecture.\n\n" +
            "> À retenir : le risque n°1 du code généré n'est pas ce qu'il fait mal, c'est ce qu'il ne fait pas. Autorisation par ressource, secrets côté serveur, validation des entrées, rate limiting, webhooks signés : une heure de revue, et ton MVP est mieux loti que la moitié des produits lancés cette semaine.\n",
        },
        {
          id: "l8",
          title: "Quiz : construire avec l'IA sans se faire piéger",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q6",
              prompt:
                "Une route GET /api/documents/[id] vérifie que l'utilisateur est connecté puis renvoie le document demandé par son id. Quel est le problème ?",
              options: [
                "Aucun : l'authentification suffit à protéger la route",
                "Il manque la vérification de propriété : tout utilisateur connecté peut lire les documents des autres en changeant l'id (IDOR)",
                "Il faudrait utiliser POST au lieu de GET pour plus de sécurité",
                "Le paramètre id devrait être chiffré dans l'URL",
              ],
              correctIndex: 1,
              explanation:
                "Être connecté ne veut pas dire avoir le droit. La requête doit filtrer sur le propriétaire (where id ET userId). C'est le bug le plus fréquent du code généré par IA, parce qu'il relève de ce qu'on n'a pas demandé.",
            },
            {
              id: "q7",
              prompt:
                "Dans un projet Next.js, que se passe-t-il si tu mets ta clé secrète Stripe dans une variable NEXT_PUBLIC_STRIPE_KEY ?",
              options: [
                "Rien de spécial, le préfixe ne change que le nommage",
                "Next.js la chiffre automatiquement avant de l'envoyer au client",
                "Elle est embarquée dans le JavaScript envoyé au navigateur : n'importe qui peut la lire et l'utiliser à ta place",
                "Le build échoue avec une erreur de sécurité",
              ],
              correctIndex: 2,
              explanation:
                "Le préfixe NEXT_PUBLIC_ expose volontairement la variable au code client. Une clé secrète doit rester côté serveur, sans ce préfixe. Aucun garde-fou automatique ne t'en empêchera : c'est un point de revue humaine.",
            },
            {
              id: "q8",
              prompt:
                "L'IA te génère un appel de SDK qui a l'air parfaitement plausible mais que tu ne trouves pas dans la documentation officielle. Quelle est la bonne réaction ?",
              options: [
                "L'accepter : si le code compile, c'est que la méthode existe",
                "Vérifier dans la doc de la version que tu utilises : les API inventées ou obsolètes sont une des erreurs les plus courantes du code généré",
                "Changer de SDK pour un que l'IA connaît mieux",
                "Downgrader ta version du SDK pour correspondre au code généré",
              ],
              correctIndex: 1,
              explanation:
                "Les modèles génèrent parfois des méthodes qui n'existent pas ou qui datent d'une version ancienne. La doc officielle de TA version fait foi. Un code plausible n'est pas un code correct, et certaines de ces erreurs ne se révèlent qu'à l'exécution.",
            },
            {
              id: "q9",
              prompt:
                "Pourquoi éviter les microservices, Redis et Kubernetes pour un MVP de micro-SaaS ?",
              options: [
                "Parce que ces technologies sont dépassées",
                "Parce qu'un monolithe simple couvre largement les premiers milliers d'utilisateurs : chaque brique en plus est de la complexité à opérer seul, sans problème réel à résoudre",
                "Parce qu'elles sont incompatibles avec Next.js",
                "Parce qu'elles empêchent l'IA de générer du code",
              ],
              correctIndex: 1,
              explanation:
                "Ces outils résolvent des problèmes d'échelle que tu n'as pas encore. En solo, chaque composant d'infrastructure est un truc de plus qui peut tomber en panne un dimanche. La stack ennuyeuse maximise le temps passé sur ce qui compte : trouver des clients.",
            },
            {
              id: "q10",
              prompt:
                "Quelle habitude limite le mieux la « dérive d'architecture » quand on code avec une IA sur plusieurs semaines ?",
              options: [
                "Faire des sessions de génération les plus longues possibles pour garder le contexte",
                "Maintenir un fichier de conventions (stack, nommage, gestion d'erreurs) fourni à chaque session, et avancer par petits commits relus",
                "Laisser l'IA choisir librement les patterns à chaque session",
                "Régénérer tout le projet de zéro chaque semaine",
              ],
              correctIndex: 1,
              explanation:
                "Chaque session repart de zéro mentalement : sans conventions écrites, tu accumules des styles incompatibles. Le fichier de règles + les petits commits relus gardent une base cohérente que toi et l'IA pouvez continuer à faire évoluer.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Encaisser : Stripe, pricing, TVA",
      lessons: [
        {
          id: "l9",
          title: "Stripe Checkout et abonnements, pas à pas",
          type: "text",
          duration: "16 min",
          body:
            "## Le premier paiement test est un moment\n\n" +
            "Il y a quelque chose de particulier à voir passer son premier paiement, même avec la carte de test. C'est le moment où le side project devient un commerce. Et la bonne nouvelle, c'est que Stripe a rendu cette partie beaucoup plus simple qu'elle n'en a l'air, à condition de suivre le chemin balisé : Stripe Checkout, la page de paiement hébergée par Stripe. Tu ne touches jamais un numéro de carte (c'est aussi ce qui te simplifie énormément la conformité PCI), tu rediriges vers Stripe, Stripe encaisse et te redirige au retour.\n\n" +
            "Côté frais, ordre de grandeur en Europe à l'heure où j'écris : autour de 1,5 % + 0,25 € par transaction pour une carte européenne standard, davantage pour les cartes hors zone, plus un petit pourcentage additionnel si tu utilises la facturation par abonnement. Vérifie la grille à jour sur stripe.com/pricing, elle bouge. Sur un abonnement à 19 €, Stripe prend grosso modo 0,55 à 0,80 € : c'est le coût de ne jamais gérer une carte bancaire toi-même, et il est très bien investi.\n\n" +
            "## Le montage, en six étapes\n\n" +
            "1. **Dans le dashboard Stripe (mode test)** : crée un Produit, puis un ou plusieurs Prix récurrents dessus (19 €/mois, 190 €/an). Note les identifiants `price_...`.\n" +
            "2. **Côté serveur**, une route crée la session Checkout :\n\n" +
            "```ts\n" +
            "const session = await stripe.checkout.sessions.create({\n" +
            "  mode: \"subscription\",\n" +
            "  line_items: [{ price: \"price_XXX\", quantity: 1 }],\n" +
            "  customer_email: user.email,\n" +
            "  client_reference_id: user.id,\n" +
            "  success_url: \"https://tonapp.com/merci?session_id={CHECKOUT_SESSION_ID}\",\n" +
            "  cancel_url: \"https://tonapp.com/tarifs\",\n" +
            "});\n" +
            "return Response.redirect(session.url, 303);\n" +
            "```\n\n" +
            "3. **Le webhook**, pièce maîtresse. La page de retour « merci » ne prouve rien (l'utilisateur peut fermer l'onglet avant, ou revenir sans avoir payé) : la source de vérité, ce sont les événements que Stripe envoie à ton endpoint `/api/webhooks/stripe`. Les trois à traiter : `checkout.session.completed` (active l'abonnement en base, en retrouvant ton utilisateur via `client_reference_id`), `customer.subscription.updated` (synchronise le statut), `customer.subscription.deleted` (coupe l'accès).\n" +
            "4. **Vérifie la signature** du webhook avec `stripe.webhooks.constructEvent(body, signature, secret)`. Sans cette vérification, n'importe qui peut poster un faux « paiement réussi » sur ton endpoint et s'offrir un abonnement gratuit. C'est le point que le code généré par IA oublie une fois sur deux : relis-le.\n" +
            "5. **Teste en local** avec la CLI : `stripe listen --forward-to localhost:3000/api/webhooks/stripe`, puis un checkout avec la carte de test `4242 4242 4242 4242` (n'importe quelle date future, n'importe quel CVC).\n" +
            "6. **Active le Customer Portal** dans le dashboard : Stripe héberge pour toi la page où le client change de carte, télécharge ses factures ou résilie. Un bouton « Gérer mon abonnement » qui redirige vers le portail, et tu viens d'économiser des semaines de développement.\n\n" +
            "## Le cycle de vie d'un abonnement\n\n" +
            "Un abonnement Stripe est une machine à états, et ton code doit refléter ces états en base plutôt que d'inventer les siens :\n\n" +
            "```figure\n" +
            "{\"caption\": \"Les états d'un abonnement Stripe et les événements webhook qui les accompagnent\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Cycle de vie d'un abonnement Stripe</title><g font-family=\"ui-monospace, monospace\" font-size=\"13\"><rect x=\"24\" y=\"40\" width=\"200\" height=\"48\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"124\" y=\"61\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"12\">checkout.session</text><text x=\"124\" y=\"78\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"12\">.completed</text><path d=\"M224 64 l84 0 m-8 -5 l8 5 l-8 5\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"308\" y=\"40\" width=\"130\" height=\"48\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"373\" y=\"69\" text-anchor=\"middle\" fill=\"currentColor\">active</text><path d=\"M438 64 l84 0 m-8 -5 l8 5 l-8 5\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><text x=\"480\" y=\"54\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">échec paiement</text><rect x=\"522\" y=\"40\" width=\"100\" height=\"48\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"572\" y=\"69\" text-anchor=\"middle\" fill=\"currentColor\">past_due</text><path d=\"M560 88 q-40 60 -170 62 m8 5 l-8 -5 l9 -4\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><text x=\"505\" y=\"140\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">relances Stripe OK</text><path d=\"M373 88 q0 30 0 62 m-5 -8 l5 8 l5 -8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"250\" y=\"150\" width=\"140\" height=\"44\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"320\" y=\"170\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"12\">retour à</text><text x=\"320\" y=\"186\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"12\">active</text><path d=\"M596 88 q30 90 -120 140 m9 1 l-9 -1 l5 -8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><text x=\"590\" y=\"190\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">relances épuisées</text><rect x=\"316\" y=\"228\" width=\"160\" height=\"48\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"396\" y=\"249\" text-anchor=\"middle\" fill=\"currentColor\">canceled</text><text x=\"396\" y=\"266\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">subscription.deleted</text><path d=\"M340 88 q-120 80 -60 146 m-3 -9 l3 9 l8 -5\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><text x=\"200\" y=\"200\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">résiliation client</text></g></svg>\n" +
            "```\n\n" +
            "Le passage par `past_due` mérite ton attention : c'est le churn involontaire (carte expirée, plafond atteint). Stripe relance automatiquement la carte plusieurs fois et peut envoyer des emails de relance à ta place (Smart Retries et relances configurables dans le dashboard). Active-les : sur un petit SaaS, récupérer ces paiements-là, c'est facilement quelques pourcents de MRR sauvés sans effort.\n\n" +
            "## Tester les cas qui fâchent\n\n" +
            "Le chemin heureux avec la 4242 ne suffit pas : les vrais clients ont des cartes qui expirent, des banques qui demandent une confirmation, et des doubles clics. Stripe fournit des cartes de test pour chaque scénario, et trois méritent une passe avant la mise en ligne :\n\n" +
            "- `4000 0000 0000 9995` simule un paiement **refusé** (fonds insuffisants). Vérifie que ton app ne donne pas l'accès et affiche quelque chose d'intelligible.\n" +
            "- `4000 0025 0000 3155` exige une **authentification 3D Secure**, le fameux écran de confirmation bancaire imposé en Europe par la directive DSP2. Checkout gère l'écran pour toi ; ton boulot est de vérifier que le retour (réussite ou abandon) laisse ta base dans un état cohérent.\n" +
            "- Rejoue **deux fois le même événement webhook** (la CLI le permet : `stripe events resend`). Stripe garantit la livraison « au moins une fois », donc parfois deux : ton handler doit être idempotent. La pratique simple : traite chaque `event.id` une seule fois (table des événements traités, ou écriture idempotente du style « mets l'abonnement dans cet état » plutôt que « incrémente »).\n\n" +
            "Dernier réflexe de plomberie : stocke en base le `customer` et la `subscription` Stripe de chaque utilisateur dès le premier webhook. Toutes tes synchronisations futures (portail, résiliations, upgrades) reposent sur cette correspondance ; la reconstruire après coup est pénible.\n\n" +
            "## Les pièges qui coûtent une soirée\n\n" +
            "- Donner l'accès sur la page « merci » au lieu du webhook : accès fantômes garantis.\n" +
            "- Oublier que le body du webhook doit être lu **brut** pour vérifier la signature (avec un body déjà parsé en JSON, `constructEvent` échoue avec « No signatures found matching the expected signature »).\n" +
            "- Confondre clés test et clés live au déploiement : tout marche en local, rien en prod.\n" +
            "- Coder son propre formulaire de carte « pour le design » : tu viens de t'inviter dans un niveau de conformité PCI dont personne ne veut. Checkout ou les composants officiels Stripe, rien d'autre.\n\n" +
            "Le tunnel de paiement est en place. Reste à décider du chiffre qu'on met dessus, et c'est moins technique mais plus stratégique : c'est la leçon suivante.\n",
        },
        {
          id: "l10",
          title: "Le prix : psychologie et exemples réels de micro-SaaS",
          type: "text",
          duration: "15 min",
          body:
            "## Le réflexe du développeur : trop bas\n\n" +
            "Quand on a construit le produit soi-même, on connaît trop bien ses défauts, alors on se planque derrière un petit prix. C'est l'erreur de pricing n°1 des micro-SaaS, et elle est doublement toxique. D'abord l'arithmétique : à 5 €/mois, il te faut 400 clients pour 2 000 € de MRR ; à 29 €, il en faut 69. Or trouver 400 clients est beaucoup, beaucoup plus dur que d'en trouver 69 qui ont vraiment le problème. Ensuite le signal : pour un outil professionnel, un prix plancher évoque un projet amateur qui aura disparu dans six mois, exactement ce que craint un client qui va confier ses données.\n\n" +
            "Le prix ne se calcule pas sur tes coûts (tes 20 € de serveurs n'intéressent personne), il se calcule sur la **valeur remplacée**. Reprends tes notes d'interviews : si ton outil fait gagner 2 heures par semaine à une agence qui facture 80 €/h, la douleur vaut environ 640 € par mois. Un abonnement à 39 € est un dixième de ça : facile à défendre en une phrase sur ta landing (« économise 8 heures par mois pour le prix d'une heure »).\n\n" +
            "## Ce que font les micro-SaaS qui marchent\n\n" +
            "Regarde les grilles tarifaires de produits solo ou petite équipe qui durent (chiffres constatés à l'heure où j'écris, vérifie sur leurs sites) :\n\n" +
            "- **Plausible Analytics** (analytics web privacy-first) : à partir de 9 €/mois environ, paliers selon le trafic. Le prix suit l'usage, pas le nombre de fonctionnalités.\n" +
            "- **Bannerbear** (génération d'images par API) : à partir d'environ 49 $/mois. Un outil B2B qui s'insère dans un process de production peut se permettre un point d'entrée élevé.\n" +
            "- **Carrd** (landing pages) : environ 19 $/an. Le contre-exemple volontaire : prix plancher mais marché immense et produit ultra-simple à opérer. Ça ne fonctionne qu'à très gros volume.\n" +
            "- **Buttondown** (newsletters) : à partir d'environ 9 $/mois, paliers par nombre d'abonnés.\n\n" +
            "Le motif commun : un point d'entrée entre 9 et 49 par mois, des paliers indexés sur une métrique d'usage qui grandit avec le client (pages vues, abonnés, images générées), et pas de palier « tout illimité » au départ.\n\n" +
            "## La grille à trois paliers et l'ancrage\n\n" +
            "Trois paliers, c'est le standard pour une bonne raison psychologique : l'ancrage. Le palier haut, même s'il ne se vend presque pas, rend le palier du milieu raisonnable par comparaison. Structure type pour un outil B2B de niche : Solo 19 €/mois, Studio 49 €/mois (le palier que tu veux vendre, visuellement mis en avant), Agence 129 €/mois. La différence entre paliers doit porter sur une limite d'usage claire (nombre de projets, de clients, de rapports), pas sur des fonctionnalités de sécurité ou d'export que tout le monde attend.\n\n" +
            "Ajoute un prix annuel à environ deux mois offerts (19 €/mois ou 190 €/an). L'annuel améliore ta trésorerie et réduit mécaniquement le churn ; 20 à 40 % des clients B2B le choisissent quand il est proposé sans forcer.\n\n" +
            "## Essai gratuit ou freemium ?\n\n" +
            "Les deux se défendent, mais pas pour les mêmes produits, et les taux honnêtes sont plus bas que ce qu'on imagine :\n\n" +
            "- **Essai gratuit 14 jours sans carte** : friction faible, qualité moyenne. Ordre de grandeur constaté : 8 à 25 % des essais convertissent en payant pour un produit B2B correct.\n" +
            "- **Essai avec carte demandée d'entrée** : beaucoup moins d'inscrits, mais 40 à 60 % de conversion des essais. Bon choix quand ton acquisition amène déjà des gens très qualifiés.\n" +
            "- **Freemium** : un plan gratuit permanent. Typiquement 2 à 5 % des gratuits passent payants, et chaque gratuit te coûte du support et de l'infra. En solo, je te le déconseille au lancement : c'est une machine à te fabriquer du travail non payé. Le freemium se justifie plus tard, comme moteur d'acquisition, quand le produit a une boucle virale ou un SEO qui tourne.\n\n" +
            "Mon choix par défaut pour un premier micro-SaaS B2B : essai 14 jours sans carte, trois paliers, annuel à -2 mois.\n\n" +
            "## Remises et lifetime deals : la prudence a un prix aussi\n\n" +
            "Une remise de lancement bien bornée est saine : « -50 % les trois premiers mois pour les 20 premiers clients » crée de l'urgence honnête, récompense les pionniers et s'éteint toute seule. Deux garde-fous : une date ou un quota de fin (sinon la remise devient le prix), et un coupon Stripe propre plutôt qu'un deuxième `price_` qui traînera des années.\n\n" +
            "Le **lifetime deal** (accès à vie contre un paiement unique, souvent via des plateformes comme AppSumo) mérite un paragraphe de mise en garde, parce qu'il tente tous les fondateurs à court de trésorerie. Ce que tu gagnes : du cash immédiat et des centaines d'utilisateurs d'un coup. Ce que tu signes : des clients à supporter pour toujours, qui ne rapporteront plus jamais un euro, sur une plateforme qui prend une commission massive, et un MRR qui reste à zéro pendant que tes coûts d'infra et de support montent. Pour un produit d'abonnement dont la valeur se consomme chaque mois, c'est le plus souvent un pacte perdant. Si tu y tiens, réserve-le à un produit à coût marginal quasi nul, plafonne le volume, et considère l'opération comme du marketing payé en dette de support, pas comme du revenu.\n\n" +
            "Et n'oublie pas tes pré-ventes de la partie 1 : le tarif early bird promis se respecte à vie ou à l'échéance annoncée, au choix, mais ce qui a été écrit s'honore. Ces gens ont financé ta validation ; ce sont aussi tes premiers ambassadeurs.\n\n" +
            "## Changer le prix, c'est permis\n\n" +
            "Ton premier prix est une hypothèse, pas un tatouage. La pratique saine : augmenter pour les **nouveaux** clients (change simplement le prix affiché et le `price_` Stripe utilisé) et laisser les anciens sur leur tarif (« grandfathering »), au moins un temps. Si personne ne tique jamais sur ton prix, il est trop bas ; un bon prix génère quelques « c'est un peu cher » et des clients qui achètent quand même.\n\n" +
            "## À toi\n\n" +
            "Calcule le prix « valeur remplacée » de ton idée : heures économisées par mois × taux horaire de ta cible × 10 %. Compare au prix que tu avais spontanément en tête.\n\n" +
            "> Correction : dans 9 cas sur 10, ton prix spontané est en dessous, souvent de moitié. Si ton calcul donne un prix qui te met mal à l'aise, c'est plutôt bon signe : commence un cran en dessous de ce chiffre, pas trois.\n",
        },
        {
          id: "l11",
          title: "Factures, TVA, mentions légales : l'ordre de grandeur prudent",
          type: "text",
          duration: "15 min",
          body:
            "## Avertissement honnête\n\n" +
            "Je ne suis ni comptable ni avocat, les règles bougent chaque année, et cette leçon te donne des ordres de grandeur pour ne pas naviguer à l'aveugle, pas des conseils personnalisés. Le bon réflexe : dès que ton produit encaisse quelques centaines d'euros par mois, une heure avec un expert-comptable (souvent 80 à 150 €, parfois offerte en premier rendez-vous) t'évitera des erreurs qui coûtent dix fois plus. Ce qui suit décrit le cas d'un fondateur en France vendant en ligne ; les mécanismes européens sont similaires ailleurs dans l'UE.\n\n" +
            "## Le statut : commencer léger\n\n" +
            "Pour encaisser légalement, il te faut une structure. Le point d'entrée classique en France est la **micro-entreprise** : création gratuite en ligne, comptabilité réduite à un livre de recettes, et des cotisations sociales calculées en pourcentage du chiffre d'affaires encaissé, autour de 21 à 26 % pour des prestations de services selon la catégorie et l'année (le taux a bougé récemment pour certaines activités : vérifie le taux en vigueur sur le site de l'Urssaf). Pas de chiffre d'affaires, pas de cotisations : idéal pour tester. La société (SASU, EURL) devient intéressante plus tard, quand les montants grossissent ou que tu veux te verser autre chose ou t'associer ; ne commence pas par là.\n\n" +
            "Un point souvent ignoré : encaisser des revenus récurrents sans aucune structure déclarée n'est pas une zone grise, c'est du travail dissimulé. La micro-entreprise coûte si peu qu'il n'y a aucune raison de prendre ce risque.\n\n" +
            "## La TVA : les deux seuils à connaître\n\n" +
            "Premier mécanisme : la **franchise en base**. En dessous d'un seuil de chiffre d'affaires annuel (autour de 35 000 à 40 000 € pour les services ces dernières années ; le montant exact est révisé régulièrement, vérifie celui de l'année en cours), tu factures **sans TVA**, avec la mention « TVA non applicable, art. 293 B du CGI » sur chaque facture. Simplicité maximale. En contrepartie, tu ne récupères pas la TVA sur tes achats.\n\n" +
            "Deuxième mécanisme, spécifique au numérique : pour les ventes de services électroniques à des **particuliers** dans d'autres pays de l'UE, au-delà de 10 000 € par an de ventes transfrontalières, la TVA due est celle du pays du client (20 % en France, 19 % en Allemagne, 21 % en Espagne...). Le guichet unique **OSS** permet de déclarer tout ça en une seule déclaration trimestrielle au lieu de t'immatriculer dans chaque pays. Pour les ventes à des **entreprises** européennes avec numéro de TVA valide, c'est l'autoliquidation : tu factures hors taxe avec la mention adéquate.\n\n" +
            "Oui, c'est le morceau le moins drôle du parcours. Deux façons de le rendre indolore :\n\n" +
            "- **Stripe Tax** : calcule et applique automatiquement le bon taux par pays sur tes checkouts (service payant en pourcentage, tarif sur leur site). Tu restes responsable des déclarations, mais le calcul est juste.\n" +
            "- **Un merchant of record** comme Paddle ou Lemon Squeezy : c'est LUI le vendeur officiel, il encaisse, gère TVA et factures mondialement, et te reverse le net. Coût : environ 5 % + 0,50 $ par transaction, contre ~1,5-2 % chez Stripe. Sur un produit à clientèle B2C très internationale, ces 3 points d'écart achètent une tranquillité qui les vaut souvent. Sur du B2B majoritairement français ou européen, Stripe + franchise en base (puis Stripe Tax) reste plus rentable.\n\n" +
            "## Cas chiffré : que reste-t-il de 1 000 € de MRR ?\n\n" +
            "Posons un cas réaliste pour fixer les idées : micro-entrepreneur en France, 1 000 € de MRR stables, soit 12 000 € encaissés sur l'année, clientèle française, sous la franchise en base. Ordres de grandeur (arrondis, à recalculer avec les taux de ton année) :\n\n" +
            "| Poste | Ordre de grandeur annuel |\n" +
            "| --- | --- |\n" +
            "| Chiffre d'affaires encaissé | 12 000 € |\n" +
            "| Cotisations sociales (~23 %) | ~2 760 € |\n" +
            "| Frais Stripe (~2 %) | ~240 € |\n" +
            "| Outils et hébergement (~40 €/mois) | ~480 € |\n" +
            "| Reste avant impôt sur le revenu | ~8 500 € |\n\n" +
            "L'impôt sur le revenu s'ajoute ensuite selon ta situation globale (le versement libératoire, autour de 2 % du CA pour ce type d'activité quand on y est éligible, peut simplifier les choses : à étudier avec les seuils en vigueur). La leçon de ce tableau n'est pas le montant exact, c'est le réflexe : environ un quart à un tiers de ce que tu encaisses ne t'appartient pas. Mets-le de côté au fil de l'eau, sur un compte séparé, dès le premier mois. Le micro-entrepreneur qui découvre ses cotisations en fin de trimestre avec un compte vide est un classique évitable.\n\n" +
            "## Les factures\n\n" +
            "Une facture conforme comporte : tes coordonnées et ton SIREN, l'identité du client, un numéro **séquentiel sans trou** (2026-001, 2026-002...), la date, la description de la prestation, le montant, et la mention TVA applicable à ta situation. Le Customer Portal de Stripe génère des reçus, et Stripe peut émettre de vraies factures (Stripe Invoicing) ; assure-toi simplement que les mentions obligatoires y figurent, et garde tout : les factures se conservent 10 ans.\n\n" +
            "## Les pages légales du site\n\n" +
            "Quatre pages, une soirée de travail, et l'IA t'aide très bien à les rédiger à condition de relire et de personnaliser :\n\n" +
            "- **Mentions légales** (obligatoires en France) : identité de l'éditeur, contact, hébergeur.\n" +
            "- **CGV/CGU** : ce que tu vends, conditions de résiliation, limitation de responsabilité. Point spécifique : le droit de rétractation de 14 jours des consommateurs peut faire l'objet d'une renonciation pour un service numérique exécuté immédiatement, à condition de recueillir leur accord exprès au moment de l'achat ; prévois la case correspondante.\n" +
            "- **Politique de confidentialité** : quelles données, pour quoi faire, combien de temps, droits RGPD et contact. Si tu as suivi ce cours, ta liste de sous-traitants tient en cinq lignes (hébergeur, Stripe, email, analytics).\n" +
            "- **Cookies** : si tu utilises une analytics sans cookies (leçon 17), tu peux souvent te passer de bannière ; sinon, consentement préalable obligatoire.\n\n" +
            "> À retenir : micro-entreprise pour démarrer, franchise en base tant que tu es sous le seuil, OSS ou merchant of record dès que le B2C international décolle, factures numérotées sans trou, et une heure d'expert-comptable dès les premiers vrais revenus. C'est moins effrayant que ça en a l'air, à condition de s'en occuper avant le premier contrôle plutôt qu'après.\n",
        },
        {
          id: "l12",
          title: "Quiz : encaisser proprement",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q11",
              prompt:
                "Où doit se déclencher l'activation de l'abonnement d'un client après un paiement Stripe Checkout ?",
              options: [
                "Sur la page « merci » vers laquelle Stripe redirige l'utilisateur",
                "Dans le handler du webhook checkout.session.completed, après vérification de la signature",
                "Dès la création de la session Checkout côté serveur",
                "Dans le navigateur, via le localStorage, pour un accès immédiat",
              ],
              correctIndex: 1,
              explanation:
                "La page de retour ne prouve pas le paiement : l'utilisateur peut la fermer, la rouvrir, ou y accéder sans avoir payé. Le webhook signé est la seule source de vérité. Et sans vérification de signature, n'importe qui peut poster un faux événement sur ton endpoint.",
            },
            {
              id: "q12",
              prompt:
                "Un abonnement passe en statut past_due. Qu'est-ce que cela signifie et que fait Stripe ?",
              options: [
                "Le client a résilié : l'accès doit être coupé immédiatement",
                "Un paiement de renouvellement a échoué (carte expirée, plafond...) : Stripe retente automatiquement la carte et peut relancer le client avant une éventuelle annulation",
                "Le client est passé sur le plan gratuit",
                "La période d'essai vient de commencer",
              ],
              correctIndex: 1,
              explanation:
                "past_due correspond au churn involontaire. Les Smart Retries et emails de relance de Stripe récupèrent une partie de ces paiements sans intervention : c'est du MRR sauvé gratuitement, à condition d'avoir activé ces options et de ne pas couper l'accès brutalement au premier échec.",
            },
            {
              id: "q13",
              prompt:
                "Ton outil B2B fait gagner environ 4 heures par mois à des consultants facturés 90 €/h. Ton instinct te souffle un prix de 9 €/mois. Que suggère la méthode de pricing par la valeur ?",
              options: [
                "Garder 9 € : un prix bas attire plus de clients, le volume compensera",
                "La valeur remplacée est d'environ 360 €/mois : un prix autour de 29 à 39 €/mois reste très défendable et divise par trois le nombre de clients nécessaires",
                "Facturer 360 €/mois, la totalité de la valeur créée",
                "Passer en gratuit et monétiser par la publicité",
              ],
              correctIndex: 1,
              explanation:
                "On capture typiquement une fraction (autour de 10 %) de la valeur remplacée. À 9 €, il faut 220 clients pour 2 000 € de MRR ; à 35 €, il en faut 57. Trouver moins de clients mieux ciblés est presque toujours plus atteignable pour un solo founder, et un prix plancher dégrade la perception d'un outil pro.",
            },
            {
              id: "q14",
              prompt:
                "Qu'apporte un « merchant of record » comme Paddle ou Lemon Squeezy par rapport à Stripe seul ?",
              options: [
                "Des frais de transaction plus bas que Stripe",
                "Il devient le vendeur officiel : il gère TVA internationale et conformité des factures à ta place, contre une commission plus élevée (environ 5 % + 0,50 $)",
                "Il héberge aussi ton application",
                "Il supprime l'obligation d'avoir un statut légal",
              ],
              correctIndex: 1,
              explanation:
                "Le merchant of record encaisse en son nom et absorbe la complexité fiscale transfrontalière, ce qui vaut ses ~3 points de commission en plus quand la clientèle B2C est très internationale. Il ne remplace ni ton hébergement ni ton statut : il te faut toujours une structure pour percevoir ses reversements.",
            },
            {
              id: "q15",
              prompt:
                "En dessous du seuil de la franchise en base de TVA, comment factures-tu tes clients français ?",
              options: [
                "Avec 20 % de TVA que tu reverses chaque mois",
                "Sans TVA, avec la mention « TVA non applicable, art. 293 B du CGI » sur la facture",
                "Avec la TVA du pays du client",
                "Sans facture, un reçu Stripe suffit toujours légalement",
              ],
              correctIndex: 1,
              explanation:
                "La franchise en base dispense de facturer et déclarer la TVA sous un seuil de chiffre d'affaires annuel (à vérifier pour l'année en cours), en échange de la mention obligatoire et de l'impossibilité de récupérer la TVA sur tes achats. La TVA du pays du client concerne les ventes B2C transfrontalières au-delà du seuil OSS.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Lancer : les 100 premiers utilisateurs",
      lessons: [
        {
          id: "l13",
          title: "Une landing qui convertit (vraiment)",
          type: "text",
          duration: "15 min",
          body:
            "## De la landing de test à la landing de vente\n\n" +
            "Ta page de pré-vente a fait son travail de thermomètre. Maintenant que le produit existe, la landing change de mission : transformer un inconnu pressé en utilisateur inscrit. Et « pressé » n'est pas une figure de style : la majorité des visiteurs décident en quelques secondes de rester ou partir, sur la seule foi de ton titre et de ta première capture d'écran.\n\n" +
            "Avant la structure, les chiffres, pour calibrer tes attentes. Sur du trafic froid, une landing SaaS correcte convertit 2 à 5 % des visiteurs en inscription d'essai. Avec l'entonnoir complet, le taux visiteur → client payant se situe couramment entre 0,5 et 3 %. Ce ne sont pas des chiffres décevants, ce sont les vrais chiffres : les « landing pages qui convertissent à 25 % » des études de cas mesurent du trafic déjà chaud. Pose l'entonnoir sur 1 000 visites :\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'entonnoir complet sur 1 000 visites froides : des taux honnêtes, pas ceux des études de cas\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Entonnoir landing vers client payant</title><g font-family=\"ui-monospace, monospace\" font-size=\"13\"><rect x=\"30\" y=\"28\" width=\"500\" height=\"40\" rx=\"3\" fill=\"currentColor\" opacity=\"0.14\"/><rect x=\"30\" y=\"28\" width=\"500\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"46\" y=\"53\" fill=\"currentColor\">1 000 visiteurs</text><rect x=\"30\" y=\"96\" width=\"220\" height=\"40\" rx=\"3\" fill=\"currentColor\" opacity=\"0.14\"/><rect x=\"30\" y=\"96\" width=\"220\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"46\" y=\"121\" fill=\"currentColor\">40 essais (4 %)</text><rect x=\"30\" y=\"164\" width=\"150\" height=\"40\" rx=\"3\" fill=\"currentColor\" opacity=\"0.14\"/><rect x=\"30\" y=\"164\" width=\"150\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"46\" y=\"189\" fill=\"currentColor\">24 activés</text><rect x=\"30\" y=\"232\" width=\"90\" height=\"40\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"46\" y=\"257\" fill=\"currentColor\">12 payants</text><text x=\"560\" y=\"53\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\" text-anchor=\"end\">trafic froid</text><text x=\"560\" y=\"121\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\" text-anchor=\"end\">landing : 2-5 %</text><text x=\"560\" y=\"189\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\" text-anchor=\"end\">onboarding : ~60 %</text><text x=\"560\" y=\"257\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\" text-anchor=\"end\">essai payant : ~30 % · total 1,2 %</text><path d=\"M110 68 l0 28 m-5 -8 l5 8 l5 -8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.5\"/><path d=\"M90 136 l0 28 m-5 -8 l5 8 l5 -8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.5\"/><path d=\"M70 204 l0 28 m-5 -8 l5 8 l5 -8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.5\"/></g></svg>\n" +
            "```\n\n" +
            "Douze clients pour mille visites. Voilà pourquoi la partie acquisition (leçons suivantes) compte autant que la page elle-même : les deux se multiplient.\n\n" +
            "## La structure qui a fait ses preuves\n\n" +
            "1. **Le hero** : un titre qui nomme le résultat, pas le produit. « Ton reporting client généré en 3 minutes chaque lundi » bat « La plateforme de reporting nouvelle génération » à tous les coups. Sous-titre d'une ligne pour le comment, un CTA (« Essayer 14 jours gratuitement »), et une vraie capture du produit, pas une illustration abstraite. Le visiteur doit voir à quoi ressemble sa vie après.\n" +
            "2. **La preuve sociale, version honnête.** Au lancement tu n'as pas 500 logos, et les faux témoignages sont à la fois illégaux (pratique commerciale trompeuse) et repérables. Utilise ce que tu as vraiment : « Utilisé par 12 agences pilotes », une citation réelle d'un client pilote avec son accord, prénom et contexte. Trois lignes vraies convertissent mieux qu'un mur de logos douteux.\n" +
            "3. **Le problème, avec les mots du client.** Deux ou trois phrases qui décrivent le lundi matin douloureux. Tes notes d'interviews sont ton meilleur copywriter : recopie les formulations entendues.\n" +
            "4. **Comment ça marche, en trois étapes** illustrées de captures. Pas les fonctionnalités : le chemin (connecte, configure, reçois).\n" +
            "5. **Le pricing**, sur la même page pour un produit self-service. Cacher les prix derrière un « Contactez-nous », c'est du B2B grands comptes, pas ton marché.\n" +
            "6. **Une FAQ** qui traite les vraies objections : mes données sont où, comment je résilie, ça marche avec mon outil X ?\n" +
            "7. **Un CTA final** identique au premier. Un seul objectif par page : l'inscription. Chaque lien de sortie supplémentaire (blog, réseaux sociaux en pied de hero) est une fuite.\n\n" +
            "## Avant/après sur un hero réel\n\n" +
            "Prenons un hero typique de première version, celui qu'on écrit quand on est encore amoureux de son produit :\n\n" +
            "> « ReportFlow : la plateforme intelligente de reporting nouvelle génération. Grâce à l'IA, centralisez, automatisez et optimisez tous vos rapports. »\n\n" +
            "Trois problèmes en deux phrases : le nom du produit en premier (le visiteur s'en fiche, il ne te connaît pas), trois verbes abstraits qui ne décrivent aucune situation vécue, et « grâce à l'IA » qui n'est pas un bénéfice (personne n'achète de l'IA, on achète du temps ou de l'argent). Version retravaillée avec les mots des interviews :\n\n" +
            "> « Ton reporting client du lundi matin, généré en 3 minutes. Connecte tes sources une fois ; chaque semaine, ReportFlow assemble le rapport et l'envoie à tes clients. Essai 14 jours, sans carte. »\n\n" +
            "Chaque changement a une raison : « lundi matin » ancre la scène exacte que la cible vit ; « 3 minutes » chiffre la promesse ; le nom du produit passe en position d'outil, pas de héros ; la deuxième phrase répond au « comment » avant qu'on le demande ; la mention essai/sans carte désamorce le risque au moment précis du clic. Aucun de ces mots n'est décoratif. C'est l'exercice à refaire sur ton propre hero : chaque mot doit payer son loyer.\n\n" +
            "## Les détails qui font les points de conversion\n\n" +
            "- **La vitesse.** Une page qui met quatre secondes à s'afficher a perdu avant de commencer. Vise un score Lighthouse mobile au-dessus de 90 : compresse les images, pas de vidéo en autoplay.\n" +
            "- **Le mobile**, où arrivera une bonne partie du trafic des réseaux sociaux, même pour un outil desktop. La page doit être impeccable, quitte à afficher « Envoie-toi le lien pour l'essayer sur ordinateur ».\n" +
            "- **La réduction de risque autour du CTA** : « Sans carte bancaire · Annulable en un clic ». Deux mentions, quelques points de conversion.\n" +
            "- **Un seul changement testé à la fois.** Avec quelques centaines de visites par semaine, tu n'as pas le volume pour de l'A/B testing statistiquement propre ; compare plutôt semaine par semaine après chaque changement majeur de titre, et garde une trace écrite de ce que tu as changé et quand.\n\n" +
            "## À toi\n\n" +
            "Écris trois versions du titre de ta landing : une qui nomme le résultat chiffré, une qui nomme la douleur, une qui nomme le produit. Montre-les à deux personnes de ta cible et demande : « laquelle te donne envie d'en savoir plus ? »\n\n" +
            "> Correction : la version « produit » (« X, la plateforme de... ») perd presque toujours. Résultat et douleur se disputent la première place selon les niches ; en B2B, le résultat chiffré gagne le plus souvent parce qu'il se traduit directement en argent ou en temps.\n",
        },
        {
          id: "l14",
          title: "SEO de base : semer maintenant, récolter dans six mois",
          type: "text",
          duration: "15 min",
          body:
            "## Le canal lent que tout le monde regrette de ne pas avoir commencé plus tôt\n\n" +
            "Le SEO a un défaut rédhibitoire pour l'impatient : il ne donne à peu près rien pendant trois à six mois. Et une qualité que rien d'autre n'égale : passé ce délai, il t'apporte chaque mois des visiteurs qui cherchent activement une solution, sans budget pub, pendant des années. Pour un solo founder qui ne peut pas acheter son trafic, c'est structurellement le meilleur canal long terme. La conclusion pratique : tu plantes les graines maintenant, en parallèle du lancement, et tu ne juges rien avant six mois.\n\n" +
            "## L'intention avant le volume\n\n" +
            "L'erreur du débutant : viser les mots-clés à gros volume (« gestion de projet », des dizaines de milliers de recherches, une concurrence impossible). La bonne cible, c'est l'intention d'achat sur la longue traîne : des requêtes à 10-100 recherches par mois, précises, où le chercheur est déjà en train de choisir un outil. Par pouvoir de conversion décroissant :\n\n" +
            "- **« alternative à [gros concurrent] »** : la personne utilise déjà un outil du marché et veut en changer. Une page honnête « [Concurrent] vs [ton produit] : lequel pour une petite agence ? » qui reconnaît ce que le concurrent fait mieux est crédible et convertit très bien.\n" +
            "- **« [outil A] vs [outil B] »** : comparatifs, même logique.\n" +
            "- **« comment [tâche précise du métier] »** : le tutoriel qui résout le problème, avec ton produit en démonstration naturelle. C'est là que tes interviews resservent encore : chaque « comment vous faites pour... » entendu est un titre d'article.\n" +
            "- **Un outil gratuit lié à ta niche** (un calculateur, un générateur, un template) : ces pages attirent des liens naturellement et se classent des années.\n\n" +
            "Pour vérifier qu'une requête a un public : la recherche Google elle-même (suggestions, « autres questions posées »), et Google Search Console une fois que tu as un peu d'historique. Les outils payants type Ahrefs sont utiles mais pas nécessaires la première année.\n\n" +
            "## La technique, sans en faire trop\n\n" +
            "Sur une stack Next.js, l'essentiel tient en peu de choses : un `title` et une `meta description` uniques par page (l'API Metadata de Next.js fait ça proprement), des URL lisibles, un sitemap soumis dans Search Console, un balisage de titres cohérent (un h1 par page), des pages rapides (tu as déjà fait le travail à la leçon précédente), et un maillage interne : chaque article pointe vers deux ou trois autres pages du site et vers la page d'inscription. Vérifie dès la première semaine dans Search Console que tes pages sont indexées ; un `noindex` de préprod oublié est un classique qui coûte des mois.\n\n" +
            "## Le contenu : rythme soutenable et qualité réelle\n\n" +
            "Un article utile par semaine, tenu pendant six mois, bat trente articles publiés en un mois puis plus rien. Sur l'IA rédactionnelle, sois lucide dans les deux sens. Elle t'aide réellement : plan, reformulation, premier jet des sections factuelles. Mais un article généré en un prompt et publié tel quel a deux problèmes : il ressemble aux mille autres articles générés sur le même sujet (aucune raison de se classer devant eux), et Google a précisément des politiques contre le contenu produit en masse sans valeur ajoutée. Ta valeur ajoutée, c'est ce que l'IA n'a pas : tes chiffres, tes captures d'écran, les cas réels de tes clients, ton avis tranché sur ce qui marche dans ta niche. Écris ça ; laisse l'IA t'aider sur le reste.\n\n" +
            "## Anatomie d'un article qui se classe\n\n" +
            "Déroulons le format le plus rentable, la page « alternative », sur un exemple : « Alternative à [GrosOutil] pour les petites agences ». Le plan qui fonctionne :\n\n" +
            "1. **Le titre contient la requête telle quelle**, et l'introduction annonce la conclusion en trois lignes (le lecteur pressé doit être servi tout de suite, Google le remarque).\n" +
            "2. **Un tableau comparatif honnête** : prix, fonctions clés, pour qui. Honnête veut dire que certaines cases du concurrent sont meilleures que les tiennes, et que ça se voit.\n" +
            "3. **Une section « Quand [GrosOutil] reste le bon choix »**. Contre-intuitif et décisif : c'est elle qui rend le reste crédible. Le lecteur sait que tu vends ; il te juge sur ta capacité à ne pas mentir quand même.\n" +
            "4. **Des captures réelles de ton produit** sur le cas d'usage précis de la cible, pas des mockups marketing.\n" +
            "5. **Une FAQ** reprenant les « autres questions posées » de Google sur la requête.\n" +
            "6. **Un CTA sobre** en fin de page, et deux ou trois liens internes vers tes autres articles.\n\n" +
            "Longueur utile : 1 200 à 1 800 mots qui répondent, plutôt que 4 000 mots de remplissage qui noient. Date de mise à jour visible, et une vraie relecture tous les six mois : un comparatif avec des prix périmés perd sa crédibilité et son classement en même temps.\n\n" +
            "## Ce qu'il ne faut pas faire\n\n" +
            "- **Les pages programmatiques en masse** (500 pages « [outil] pour [ville] ») sur un site tout neuf : au mieux ignorées, au pire le site entier déclassé pour contenu de masse.\n" +
            "- **Acheter des backlinks** à 30 € le lien : ces réseaux finissent pénalisés, et ton site avec.\n" +
            "- **Le blog générique** (« 10 tendances de la productivité en 2026 ») : aucun rapport avec une intention d'achat, aucune chance face aux gros médias.\n\n" +
            "Les backlinks propres, eux, viendront de la leçon suivante : chaque apparition dans une communauté, un annuaire d'outils ou un lancement Product Hunt est aussi un lien qui pousse ton SEO. Les canaux se nourrissent entre eux, et c'est exactement le sujet de la suite.\n",
        },
        {
          id: "l15",
          title: "Product Hunt, communautés, build in public : les 100 premiers",
          type: "text",
          duration: "16 min",
          body:
            "## La vérité sur les 100 premiers\n\n" +
            "Les 100 premiers utilisateurs ne viennent pas d'un canal, ils viennent de partout, un par un, et c'est normal. À ce stade, tu fais des choses qui ne passent pas à l'échelle : des messages individuels, des démos en visio de quinze minutes, des onboardings à la main. Paul Graham en a fait un mantra (« do things that don't scale ») parce que c'est contre-intuitif pour un développeur : on a construit un produit self-service justement pour ne pas faire ça. Mais chaque conversation individuelle des débuts vaut double : un utilisateur, plus une leçon sur ton produit.\n\n" +
            "Commence par le stock que tu as déjà : tes pré-ventes (elles attendent !), ta liste d'attente, tes dix interviewés et les confrères qu'ils t'avaient proposés. Un email personnel à chacun, pas une newsletter : « Tu m'avais parlé de [douleur précise], c'est prêt, je te fais une démo de 15 minutes cette semaine ? » Sur 40 contacts accumulés pendant la validation, en tirer 10 à 15 utilisateurs actifs est réaliste. Te voilà déjà à 15 % de l'objectif avant tout « lancement ».\n\n" +
            "## Les communautés : donner d'abord, trois mois durant\n\n" +
            "Ta niche se rassemble quelque part : subreddits métier, groupes Facebook ou LinkedIn, Slack et Discord professionnels, forums historiques. La règle qui sépare ceux qui en tirent des clients de ceux qui se font bannir tient en une phrase : **on ne poste pas son lien avant d'avoir donné de la valeur pendant des semaines**. Concrètement : réponds aux questions de ton domaine, partage ce que tu sais, deviens un pseudo reconnu. Quand quelqu'un décrit exactement la douleur que ton produit résout, tu peux alors répondre en transparence : « je construis un outil qui fait ça, en toute transparence c'est le mien, si tu veux tester je t'offre trois mois ». Fait avec cette honnêteté et cette parcimonie, c'est bien reçu et ça convertit remarquablement, parce que le contexte est parfait.\n\n" +
            "Deux communautés spécialisées méritent une mention : Indie Hackers et les espaces équivalents francophones, non pas pour trouver des clients (sauf si tu vends aux makers eux-mêmes) mais pour le soutien moral et les retours de pairs, qui valent cher dans les mois où rien ne bouge.\n\n" +
            "## Product Hunt : utile, mais pas pour ce que tu crois\n\n" +
            "Soyons précis, parce que le fantasme est tenace. Un lancement Product Hunt correct pour un produit de niche, c'est : un pic de quelques centaines à quelques milliers de visites sur 48 heures, des inscriptions curieuses dont beaucoup ne reviendront jamais, une poignée de clients réels, puis retour au calme complet. Les produits qui font des lancements légendaires ont presque toujours une audience préexistante mobilisée. Alors pourquoi le faire quand même ? Trois bénéfices durables : un backlink correct, un badge de crédibilité pour ta landing, et une date butoir qui te force à finir. Prépare-le sérieusement (visuels propres, premier commentaire racontant l'histoire honnêtement, réponses toute la journée), mais ne mise pas le moral du trimestre dessus. Pendant que tu y es, inscris le produit sur les annuaires d'outils de ta niche : dix minutes par annuaire, des backlinks et un filet de trafic qui dure.\n\n" +
            "## Build in public : l'audience qui se construit en marchant\n\n" +
            "Documenter ton parcours en public (sur X ou LinkedIn selon ta cible) est le canal le plus lent et le plus sous-estimé. Le principe : partager régulièrement les vrais chiffres, les vraies décisions, les vrais ratés. « Troisième mois : 480 € de MRR, 9 clients, et j'ai enfin compris pourquoi les essais ne convertissaient pas » intéresse infiniment plus que « Notre solution innovante révolutionne le reporting ». En six mois de constance, tu construis quelques centaines d'abonnés dont une partie est ta cible ou connaît ta cible ; chaque post devient un petit canal d'acquisition permanent. Bonus non négligeable : l'audience, elle, te suit d'un produit à l'autre. Même si ce produit-ci échoue, elle reste ton actif.\n\n" +
            "## Le plan des 90 premiers jours\n\n" +
            "- **Semaines 1-2** : les 40 contacts de la validation, un par un. Objectif : 15 utilisateurs, 5 payants.\n" +
            "- **Semaines 3-6** : présence quotidienne légère dans 2 communautés (pas 8, tu n'as pas le temps), 2 posts build in public par semaine, inscription sur les annuaires.\n" +
            "- **Semaines 7-8** : lancement Product Hunt préparé, avec ta petite base existante comme premier soutien.\n" +
            "- **Semaines 9-13** : doubler la mise sur LE canal qui a produit des clients payants (pas des visites : des clients), continuer le SEO en fond.\n\n" +
            "À la fin du trimestre, un résultat entre 30 et 100 utilisateurs dont 10 à 30 payants est un bon résultat réel, pas une contre-performance. Comment savoir lequel de ces canaux a vraiment produit tes clients ? Il va falloir mesurer, et c'est la partie suivante.\n",
        },
        {
          id: "l16",
          title: "Quiz : lancer sans budget",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q16",
              prompt:
                "Quel taux de conversion visiteur → client payant est réaliste pour un SaaS sur du trafic froid, tout l'entonnoir compris ?",
              options: [
                "Autour de 20 %",
                "Entre 0,5 et 3 %",
                "Autour de 10 % minimum, sinon le produit est mauvais",
                "Plus de 50 % si la landing est bien faite",
              ],
              correctIndex: 1,
              explanation:
                "2 à 5 % des visiteurs froids s'inscrivent à l'essai, puis une partie s'active et une partie de ceux-là paie : le total tombe couramment entre 0,5 et 3 %. Les taux spectaculaires des études de cas mesurent du trafic déjà acquis (audience, bouche-à-oreille), pas du trafic froid.",
            },
            {
              id: "q17",
              prompt:
                "Pour le SEO d'un micro-SaaS tout neuf, quelle cible de mots-clés rapporte le plus de clients ?",
              options: [
                "Les mots-clés génériques à fort volume comme « gestion de projet »",
                "Les requêtes de longue traîne à forte intention d'achat, comme « alternative à [concurrent] » ou « comment [tâche métier précise] »",
                "Les sujets d'actualité tech pour maximiser le trafic",
                "500 pages générées automatiquement par ville et par métier",
              ],
              correctIndex: 1,
              explanation:
                "Un site neuf ne se classera pas sur les gros volumes, et le trafic généraliste ne convertit pas. Les requêtes précises à faible volume amènent des gens en train de choisir un outil. Les pages générées en masse exposent en plus le site aux politiques de Google sur le contenu de masse.",
            },
            {
              id: "q18",
              prompt:
                "Qu'est-ce qu'un lancement Product Hunt apporte de façon durable à un micro-SaaS de niche ?",
              options: [
                "Plusieurs centaines de clients payants en 48 heures",
                "Un flux de trafic constant pendant des mois",
                "Un backlink, un badge de crédibilité et une date butoir qui force à finir : le pic de trafic, lui, retombe en 48 heures",
                "Rien : il faut éviter Product Hunt pour un produit de niche",
              ],
              correctIndex: 2,
              explanation:
                "Le pic de visites retombe très vite et convertit peu pour un produit de niche sans audience préexistante. Les bénéfices réels sont périphériques et durables : lien, crédibilité, deadline. Ça vaut la préparation, pas la peine d'y miser le moral du trimestre.",
            },
            {
              id: "q19",
              prompt:
                "Quelle est la bonne façon d'utiliser une communauté métier (subreddit, groupe Facebook) pour trouver des clients ?",
              options: [
                "Poster le lien du produit dès l'inscription, dans tous les fils pertinents",
                "Contribuer utilement pendant des semaines, puis mentionner ton produit avec transparence uniquement quand quelqu'un décrit exactement la douleur qu'il résout",
                "Envoyer un message privé promotionnel à tous les membres",
                "Créer plusieurs comptes pour recommander ton produit « spontanément »",
              ],
              correctIndex: 1,
              explanation:
                "L'autopromo directe fait bannir et grille ta réputation dans la niche. Les faux comptes sont encore pires (et c'est une pratique trompeuse). La séquence donner d'abord, vendre rarement et avec transparence est plus lente mais construit une crédibilité qui convertit très bien.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Mesurer, écouter, décider",
      lessons: [
        {
          id: "l17",
          title: "Une analytics respectueuse et les cinq événements qui comptent",
          type: "text",
          duration: "14 min",
          body:
            "## Mesurer sans espionner\n\n" +
            "Le réflexe habituel est d'installer Google Analytics parce que « tout le monde le fait ». Pour un micro-SaaS, c'est le mauvais choix par défaut : GA4 est dimensionné pour des équipes marketing entières, son interface demande une formation, et son modèle à base de cookies tiers t'impose une bannière de consentement qui coûte à elle seule des points de conversion sur ta landing. Il existe une catégorie d'outils taillée pour ton cas : les analytics sans cookies, dites « privacy-first ».\n\n" +
            "Deux options qui couvrent l'essentiel : **Plausible** (hébergé, à partir d'environ 9 €/mois, entreprise européenne) et **Umami** (open source, gratuit si tu l'héberges toi-même). Les deux tiennent sur un script de moins de 2 Ko, comptent les visites, les sources et les événements sans identifier les personnes, et leur tableau de bord se lit en trente secondes. Pour la plupart de ces outils configurés sans cookies ni identifiant persistant, la bannière de consentement n'est pas requise ; mentionne simplement l'outil dans ta politique de confidentialité, et si tu veux la certitude, la CNIL publie la liste des solutions de mesure d'audience exemptées de consentement.\n\n" +
            "Précision qui a son importance : « pas de bannière pour l'analytics » ne veut pas dire « pas de RGPD ». Ton produit stocke des emails et des données clients : la politique de confidentialité, la liste des sous-traitants et la capacité à supprimer un compte sur demande restent obligatoires. C'est le socle posé en partie 3.\n\n" +
            "## Les cinq événements qui pilotent le produit\n\n" +
            "Les pages vues, c'est la météo. Ce qui pilote les décisions, ce sont cinq événements que tu définis une fois et que tu suis chaque semaine :\n\n" +
            "1. **`signup`** : création de compte. Croisé avec les sources, il te dit quel canal amène des gens (et pas juste des visites).\n" +
            "2. **`activated`** : LE moment où l'utilisateur a touché la valeur du produit. Pas « a créé un compte » : « a généré son premier rapport », « a connecté sa première source de données ». Sa définition est propre à ton produit et mérite dix minutes de réflexion, parce que toute la partie itération repose dessus.\n" +
            "3. **`subscribed`** : passage en payant (déclenché côté serveur, par le webhook Stripe, pas côté client).\n" +
            "4. **`core_action`** : l'action cœur répétée (chaque rapport généré). C'est ton signal de rétention d'usage.\n" +
            "5. **`canceled`** : résiliation, avec, si possible, la raison en un clic (« trop cher », « il manque X », « je n'en ai plus besoin »).\n\n" +
            "Événements produit dans Plausible ou Umami, événements d'argent recoupés avec le dashboard Stripe, et c'est tout. Pas de data warehouse, pas de Mixpanel à ce stade : cinq chiffres bien définis battent cinquante mal lus.\n\n" +
            "## La revue hebdomadaire de trente minutes\n\n" +
            "Le même créneau chaque semaine (lundi matin, café), une note de cinq lignes :\n\n" +
            "- Visites, et d'où.\n" +
            "- Signups, et le taux visite → signup.\n" +
            "- Taux signup → activated (le chiffre le plus important des trois premiers mois).\n" +
            "- MRR, nouveaux abonnés, résiliations.\n" +
            "- Une phrase : qu'est-ce que j'apprends, qu'est-ce que je change cette semaine ?\n\n" +
            "Trente minutes, pas plus. Le piège inverse de la négligence existe aussi : le fondateur qui rafraîchit son dashboard six fois par jour en espérant que les chiffres bougent. Ils ne bougent pas à l'heure, et cette anxiété-là se convertit très mal en décisions.\n\n" +
            "## Méfie-toi des chiffres qui font plaisir\n\n" +
            "Les visites, les inscrits cumulés, les followers : ces courbes montent toujours (on n'a jamais vu un « total cumulé » descendre) et ne disent rien de la santé du produit. Les chiffres qui disent la vérité sont des taux et des flux : activation, rétention, churn, MRR net. Ils font moins plaisir, ils sont plus lents, et ce sont eux qu'on apprend à lire dans la leçon suivante, formules comprises.\n",
        },
        {
          id: "l18",
          title: "Activation, rétention, churn : les définitions et les formules",
          type: "text",
          duration: "16 min",
          body:
            "## Le seau percé\n\n" +
            "Imagine deux produits qui signent chacun 10 nouveaux clients par mois. Le premier en perd 1 par mois, le second en perd 6. Au bout d'un an, le premier approche les 80 clients et grandit encore ; le second plafonne à 16 et n'ira jamais plus haut. Même acquisition, destins opposés : tout est dans le trou du seau. Les trois métriques de cette leçon mesurent ce trou, et on va les suivre sur un exemple unique, un outil fictif à 29 €/mois qu'on appellera Reporto.\n\n" +
            "## L'activation : le premier moment de valeur\n\n" +
            "**Définition** : la part des inscrits qui atteignent le moment où le produit a livré sa promesse une première fois. Pour Reporto : « a généré son premier rapport ».\n\n" +
            "**Formule** : `taux d'activation = activés / inscrits × 100`\n\n" +
            "Reporto : 40 inscrits en octobre, 24 ont généré un rapport → 60 % d'activation. Les 16 autres ont créé un compte et n'ont jamais rien vu de la valeur : pour eux, ton produit n'existe pas vraiment. En dessous de 40-50 % d'activation, inutile d'investir dans l'acquisition : tu verses de l'eau dans un entonnoir bouché, et le problème est dans l'onboarding (trop d'étapes avant la valeur, un import de données pénible, un écran vide sans guide). C'est presque toujours LE chantier des trois premiers mois.\n\n" +
            "## La rétention et le churn : le trou du seau\n\n" +
            "**Churn client** : la part des clients payants qui résilient sur une période.\n\n" +
            "`churn mensuel = clients perdus dans le mois / clients payants en début de mois × 100`\n\n" +
            "Reporto commence novembre avec 20 clients, 2 résilient → churn de 10 %. La rétention est le miroir : 90 %.\n\n" +
            "**Churn de revenu** : même calcul sur le MRR plutôt que sur les têtes. Il peut être meilleur que le churn client (si ce sont les petits comptes qui partent) ou pire (si un gros compte s'en va). Quand les clients peuvent monter en gamme, le churn de revenu **net** (résiliations moins upgrades) peut même devenir négatif : le MRR grandit sans aucun nouveau client. C'est le régime de croisière des meilleurs SaaS, pas celui de ta première année, mais c'est la direction.\n\n" +
            "**Les ordres de grandeur honnêtes** : pour un SaaS jeune vendant à des indépendants et petites entreprises, 3 à 8 % de churn mensuel est la fourchette courante. Au-dessus de 10 %, alerte rouge : le seau fuit plus vite que tu ne le remplis. En dessous de 3 % sur ce segment, tu es très bon. (Les benchmarks à 1 % mensuel que tu croiseras concernent des SaaS établis vendant à des grandes entreprises sous contrat annuel : rien à voir avec ta situation.)\n\n" +
            "## Ce que le churn implique : la LTV\n\n" +
            "La durée de vie moyenne d'un client est l'inverse du churn : à 5 % mensuel, un client reste en moyenne `1 / 0,05 = 20 mois`. D'où la valeur vie client :\n\n" +
            "`LTV ≈ ARPU × (1 / churn mensuel)`\n\n" +
            "Reporto : 29 € d'ARPU, 5 % de churn → LTV ≈ 580 €. Ce chiffre borne tout le reste : il te dit ce que peut te coûter l'acquisition d'un client (règle d'usage : rester sous un tiers de la LTV), et il montre l'effet démesuré du churn. Si Reporto passe de 5 % à 3 %, la LTV bondit de 580 € à 967 €, sans signer un seul client de plus. Réduire le churn d'un point vaut souvent plus que doubler le budget acquisition.\n\n" +
            "## Les cohortes : la seule lecture propre\n\n" +
            "Un taux global mélange tes clients fidèles de six mois et les inscrits d'hier. Pour voir la vérité, regarde par **cohorte** : sur les inscrits d'octobre, combien sont encore actifs à 30 jours ? À 60 ? À 90 ? Puis compare la cohorte d'octobre à celle de novembre : si la courbe de novembre s'aplatit plus haut, tes améliorations d'onboarding fonctionnent. Une courbe de rétention saine plonge les premières semaines (normal : les curieux s'en vont) puis **s'aplatit** sur un noyau stable. Une courbe qui descend sans plancher signifie qu'aucun segment ne trouve de valeur durable, et aucune campagne d'acquisition ne compensera ça.\n\n" +
            "## À toi\n\n" +
            "Reporto finit décembre ainsi : 25 clients au 1er décembre, 3 résiliations, 2 nouveaux clients, ARPU stable à 29 €. Calcule le churn client de décembre et la LTV approximative à ce rythme.\n\n" +
            "> Correction : churn = 3 / 25 = 12 % mensuel (les nouveaux clients ne comptent pas dans le calcul du churn : on rapporte les pertes au stock de début de mois). LTV ≈ 29 × (1 / 0,12) ≈ 242 €. Ces deux chiffres disent la même chose : à 12 % de churn, Reporto a un problème de rétention à régler avant toute chose. Comment ? En parlant aux partants, et c'est justement la leçon suivante.\n",
        },
        {
          id: "l19",
          title: "Parler aux utilisateurs et trancher : pivot ou persévère",
          type: "text",
          duration: "16 min",
          body:
            "## Les chiffres disent quoi, les conversations disent pourquoi\n\n" +
            "Ton dashboard t'annonce 12 % de churn ; il ne t'annonce pas que trois clients sont partis parce que l'export PDF sortait décalé chez eux. Les métriques détectent le problème, les conversations le diagnostiquent, et il te faut les deux. La boucle complète tient en quatre temps, à répéter chaque semaine :\n\n" +
            "```figure\n" +
            "{\"caption\": \"La boucle hebdomadaire : mesurer, écouter, décider, construire, et on recommence\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\"><title>Boucle mesurer, écouter, décider, construire</title><g font-family=\"ui-monospace, monospace\" font-size=\"13\"><rect x=\"240\" y=\"20\" width=\"160\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"320\" y=\"42\" text-anchor=\"middle\" fill=\"currentColor\">MESURER</text><text x=\"320\" y=\"60\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">revue 30 min, 5 chiffres</text><path d=\"M400 46 q120 10 110 90 m3 -9 l-3 9 l-9 -4\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"440\" y=\"136\" width=\"170\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"525\" y=\"158\" text-anchor=\"middle\" fill=\"currentColor\">ÉCOUTER</text><text x=\"525\" y=\"176\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">3-5 conversations</text><path d=\"M520 188 q-10 70 -120 76 m9 4 l-9 -4 l8 -6\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"240\" y=\"244\" width=\"160\" height=\"56\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"320\" y=\"266\" text-anchor=\"middle\" fill=\"currentColor\">DÉCIDER</text><text x=\"320\" y=\"286\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">persévère / ajuste / pivote</text><path d=\"M240 272 q-115 -6 -110 -84 m-4 9 l4 -9 l9 4\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/><rect x=\"36\" y=\"136\" width=\"170\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"121\" y=\"158\" text-anchor=\"middle\" fill=\"currentColor\">CONSTRUIRE</text><text x=\"121\" y=\"176\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" font-size=\"12\">1 seul pari / semaine</text><path d=\"M126 136 q0 -70 106 -88 m-9 -2 l9 2 l-6 8\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\"/></g></svg>\n" +
            "```\n\n" +
            "Le point clé du schéma : une seule case « construire », un seul pari par semaine. Le fondateur qui lance cinq changements à la fois ne saura jamais lequel a agi.\n\n" +
            "## Trois conversations qui rapportent plus que dix\n\n" +
            "- **L'interview de résiliation.** La plus précieuse et la moins agréable. Un email personnel le jour du départ : « Pas de vente cachée, j'essaie juste de comprendre : qu'est-ce qui t'a fait partir ? » Un tiers répond, et les réponses se rangent vite en trois familles qui appellent chacune une réaction différente : « trop cher pour mon usage » (problème de pricing ou de cible), « il manque X » (à vérifier : X revient-il chez plusieurs partants ?), « je n'en avais plus besoin » (churn structurel de ta niche, le plus dur à corriger).\n" +
            "- **La conversation avec les super-actifs.** Tes cinq utilisateurs les plus assidus : qu'est-ce qui les ferait partir, que font-ils juste avant et juste après ton produit, à qui te recommanderaient-ils ? C'est là que se cachent le positionnement et les mots de ta prochaine landing.\n" +
            "- **La relance des non-activés.** « Tu as créé un compte et tu n'as pas généré de rapport : qu'est-ce qui a coincé ? » Une question, par email, à chaque non-activé de la semaine. Les réponses dessinent la liste de réparation de ton onboarding, dans l'ordre.\n\n" +
            "Toutes ces réponses vont dans un même document, avec la date et le segment. Au bout d'un mois, les motifs sautent aux yeux ; c'est ce document, pas ton intuition du soir, qui alimente la case « décider ».\n\n" +
            "## Pivot ou persévère : des seuils, pas des humeurs\n\n" +
            "Le mot « pivot » recouvre en réalité trois manœuvres d'ampleur croissante : changer de **segment** (même produit, autre cible qui a plus mal), changer de **problème** (même cible, autre douleur découverte pendant les interviews), ou changer de **produit** (le vrai pivot, rare). Avant d'en arriver là, la plupart des situations se règlent par des ajustements : onboarding, pricing, positionnement.\n\n" +
            "Comme pour la validation, décide des seuils à froid, à horizon de six mois post-lancement par exemple :\n\n" +
            "- **Persévère** : le MRR croît, même lentement ; l'activation dépasse 50 % ; le churn descend mois après mois ; au moins un canal produit des clients payants de façon répétable. Il manque juste du temps et des tours de boucle.\n" +
            "- **Ajuste** (le cas le plus fréquent) : un seul indicateur est cassé et identifiable. Activation à 25 % mais excellente rétention des activés → chantier onboarding, pas pivot. Churn à 12 % concentré sur un segment → resserre la cible.\n" +
            "- **Pivote ou arrête** : après six mois d'itérations réelles, l'activation stagne sous 40 % malgré trois refontes d'onboarding, ou le churn reste au-dessus de 10 % sans motif réparable, ou aucun canal n'a produit dix clients payants. Continuer à l'identique n'est plus de la persévérance, c'est de l'entêtement.\n\n" +
            "Et si c'est l'arrêt : on l'a dit en partie 1, tu repars avec des actifs réels : une niche que tu connais, une liste d'emails, une audience naissante, une base de code réutilisable et une lucidité qui vaut de l'or pour l'essai suivant. Les fondateurs qui réussissent au deuxième ou troisième produit ne repartent jamais de zéro.\n\n" +
            "> À retenir : une boucle par semaine, un pari à la fois, des conversations qui expliquent les chiffres, et des seuils de décision écrits avant d'avoir mal. Le dashboard te dit où creuser ; ce sont les utilisateurs qui te disent quoi construire.\n",
        },
        {
          id: "l20",
          title: "Quiz : métriques et décisions",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q20",
              prompt:
                "Ton SaaS compte 30 clients payants au 1er mars ; pendant le mois, 3 résilient et 5 nouveaux arrivent. Quel est le churn client de mars ?",
              options: [
                "3 / 35 = 8,6 %",
                "3 / 30 = 10 %",
                "(3 - 5) / 30 = churn négatif",
                "5 / 30 = 16,7 %",
              ],
              correctIndex: 1,
              explanation:
                "Le churn rapporte les clients perdus au stock de début de période : 3/30 = 10 %. Les nouveaux clients n'entrent pas dans ce calcul (ils comptent dans la croissance, pas dans la rétention). Un churn négatif n'existe qu'en churn de revenu net, quand les upgrades dépassent les pertes.",
            },
            {
              id: "q21",
              prompt:
                "Avec un ARPU de 25 €/mois et un churn mensuel de 5 %, quelle est la LTV approximative d'un client ?",
              options: [
                "125 €",
                "25 € × 12 = 300 €",
                "25 € × (1 / 0,05) = 500 €",
                "25 € × 0,05 = 1,25 €",
              ],
              correctIndex: 2,
              explanation:
                "La durée de vie moyenne est l'inverse du churn : 1/0,05 = 20 mois, donc LTV ≈ 25 × 20 = 500 €. C'est aussi pour ça que réduire le churn est si rentable : à 3 %, la LTV du même client passe à environ 833 € sans rien changer à l'acquisition.",
            },
            {
              id: "q22",
              prompt:
                "Ton activation est à 25 % mais les utilisateurs activés ont une excellente rétention. Quelle est la bonne lecture ?",
              options: [
                "Le produit ne crée pas de valeur : il faut pivoter",
                "Il faut investir massivement en acquisition pour compenser",
                "Le produit crée de la valeur mais l'onboarding empêche la plupart des inscrits de l'atteindre : c'est le chantier prioritaire, pas un pivot",
                "L'activation n'a pas d'importance tant que le MRR monte",
              ],
              correctIndex: 2,
              explanation:
                "Une bonne rétention des activés prouve que la promesse est tenue pour ceux qui y accèdent. Le goulet est en amont : trop d'étapes avant la valeur, import pénible, écran vide. Verser plus de trafic dans un entonnoir bouché gaspillerait l'acquisition ; on répare l'entonnoir d'abord.",
            },
            {
              id: "q23",
              prompt:
                "Pourquoi une analytics sans cookies (Plausible, Umami) est-elle un bon choix par défaut pour un micro-SaaS ?",
              options: [
                "Elle fournit plus de données personnelles sur chaque visiteur",
                "Elle est plus simple à lire, allège la conformité côté mesure d'audience (souvent pas de bannière de consentement) et suffit largement à piloter le produit",
                "Elle est toujours 100 % gratuite, contrairement à Google Analytics",
                "Elle dispense de toute obligation RGPD sur l'ensemble du produit",
              ],
              correctIndex: 1,
              explanation:
                "Cinq événements bien définis suffisent à piloter un micro-SaaS, et l'absence de cookies évite (dans la plupart des configurations) la bannière qui coûte de la conversion. Attention au dernier piège : le produit lui-même stocke des données clients, donc politique de confidentialité et droits RGPD restent obligatoires.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Opérer en solo sans s'épuiser",
      lessons: [
        {
          id: "l21",
          title: "Le support client sans y laisser tes soirées",
          type: "text",
          duration: "14 min",
          body:
            "## Le support est un capteur, pas une corvée\n\n" +
            "Premier recadrage : à ton échelle, le support n'est pas le prix à payer pour avoir des clients, c'est ton meilleur canal de découverte produit. Chaque question est un endroit où l'interface n'a pas parlé d'elle-même ; chaque bug remonté est un test que tu n'avais pas écrit ; chaque « comment on fait pour... » est un futur article SEO. Les fondateurs solo qui détestent le support le traitent comme une interruption ; ceux qui durent le traitent comme un flux de données gratuit avec un humain au bout.\n\n" +
            "Second recadrage, pour te détendre : à 30 clients, tu recevras quelques messages par semaine, pas par heure. Le volume qui fait peur n'arrive que bien après, et à ce moment-là tu auras les moyens de t'outiller.\n\n" +
            "## L'outillage minimal\n\n" +
            "- **Une adresse dédiée** (support@tonproduit.com) qui arrive dans ta boîte habituelle avec un label. Pas de Zendesk à ce stade : un vrai email, signé de ton prénom, fait un support plus chaleureux que n'importe quel portail de tickets. Quand le volume le justifiera (pas avant plusieurs dizaines de messages par semaine), des outils légers comme Crisp ou Plain prendront le relais.\n" +
            "- **Un délai annoncé et tenu.** Écris sur le site « réponse sous 1 jour ouvré » et tiens-le. La déception naît de l'attente non cadrée, pas du délai lui-même : un client prévenu attend sereinement 24 heures ; sans promesse, il rage au bout de 3.\n" +
            "- **Un accusé de réception personnel pour les bugs** : « Bien reçu, je regarde ce soir et je te tiens au courant. » Deux lignes qui désamorcent 90 % de la frustration, parce que le client sait qu'un humain a lu.\n\n" +
            "## Répondre une fois, réutiliser cent fois\n\n" +
            "La règle d'or du support solo : **aucune bonne réponse ne doit être écrite deux fois**. Concrètement, trois destinations pour chaque réponse soignée que tu rédiges :\n\n" +
            "1. Un fichier de réponses types (dans Notion, un dossier de brouillons, peu importe) d'où tu copies-adaptes.\n" +
            "2. La FAQ ou la doc publique, si la question est revenue deux fois. Une page de doc écrite en quinze minutes intercepte la question pour toujours, et se classe parfois sur Google en prime.\n" +
            "3. Le backlog produit, si la question révèle un défaut d'interface. La meilleure réponse support est celle que le produit rend inutile : un libellé plus clair, un état vide qui explique quoi faire, un message d'erreur qui dit comment s'en sortir.\n\n" +
            "Tiens un petit compteur des motifs (un tableau à deux colonnes suffit) : au bout d'un mois, tu sauras que 40 % des messages concernent le même import CSV, et tu sauras exactement quoi réparer en priorité.\n\n" +
            "## Ce que l'IA fait bien ici, et ce qu'elle ne doit pas faire\n\n" +
            "Le support est un excellent terrain pour l'IA **en coulisses** : classer les messages entrants par motif, rédiger un premier brouillon de réponse à partir de ta doc et de tes réponses types, résumer l'historique d'un client avant que tu répondes. Tu relis, tu ajustes le ton, tu envoies : le temps de traitement fond, la qualité reste.\n\n" +
            "Ce que je te déconseille en revanche, à ton échelle : le chatbot autonome face au client. Un bot qui répond à côté à un client en train de churner transforme une frustration en départ définitif, et tu n'as ni le volume qui le justifie ni les données pour l'entraîner correctement. Les cas sensibles (colère, facturation, résiliation) exigent un humain, et cet humain, c'est toi. Trente clients qui savent que le fondateur répond en personne, c'est un argument commercial que les gros ne peuvent pas copier.\n\n" +
            "## À toi\n\n" +
            "Rédige maintenant tes trois premières réponses types : l'accusé de réception d'un bug, la réponse à une demande de fonctionnalité que tu ne feras pas, la réponse à « comment je résilie ? ».\n\n" +
            "> Correction : les pièges classiques, dans l'ordre : promettre un délai de correction précis qu'on ne tiendra pas (dis « je te tiens au courant d'ici demain » plutôt que « ce sera corrigé demain ») ; dire oui à la fonctionnalité pour faire plaisir (un « non, et voici pourquoi » honnête préserve mieux la confiance qu'un « c'est noté ! » suivi de silence) ; et cacher le chemin de résiliation, ce qui est à la fois contre-productif et, en Europe, contraire aux règles de protection du consommateur. La résiliation facile fait revenir des clients ; la résiliation cachée fabrique des avis furieux.\n",
        },
        {
          id: "l22",
          title: "Incidents, sauvegardes, monitoring : dormir tranquille",
          type: "text",
          duration: "15 min",
          body:
            "## Le scénario qui n'est pas une hypothèse\n\n" +
            "Un dimanche, ton produit tombera. Certificat expiré, dépendance cassée par une mise à jour, base saturée, région cloud en carafe : la cause importe peu, l'événement est certain. La différence entre un incident géré et une catastrophe ne se joue pas pendant la panne, elle se joue avant, dans trois investissements qui coûtent une soirée chacun : le monitoring, les sauvegardes testées, et un plan écrit.\n\n" +
            "## Savoir avant les clients\n\n" +
            "Le pire scénario n'est pas la panne, c'est la panne découverte par un email client huit heures plus tard. Deux outils, dix minutes d'installation chacun :\n\n" +
            "- **Un moniteur de disponibilité** (UptimeRobot a une offre gratuite, Better Stack aussi) qui appelle ton site et une route de santé de ton API toutes les minutes, et t'alerte par email et notification quand ça ne répond plus. Crée une vraie route `/api/health` qui vérifie aussi la connexion à la base, pas juste une page statique qui répond « ok » pendant que tout brûle derrière.\n" +
            "- **Un traqueur d'erreurs** (Sentry, offre gratuite confortable) qui capture chaque exception en production avec sa stack trace, la regroupe et t'alerte sur les nouveautés. Sans lui, tes bugs de prod n'existent que dans la frustration silencieuse des utilisateurs ; avec lui, tu corriges souvent avant le premier email.\n\n" +
            "## Les sauvegardes : la règle du restaure ou ça n'existe pas\n\n" +
            "Ta base de données EST ton produit ; le code se redéploie en dix minutes depuis Git, les données perdues sont perdues. Les hébergeurs sérieux (Neon, Supabase et consorts) font des sauvegardes automatiques avec récupération à un instant donné ; vérifie que c'est activé sur TON plan (les offres gratuites ont parfois une rétention courte, genre 24 heures ou moins) et ajoute une ceinture : un dump hebdomadaire automatisé (`pg_dump` dans un job cron) vers un stockage séparé, chez un autre fournisseur que ta base.\n\n" +
            "Et surtout, le point que presque tout le monde saute : **une sauvegarde jamais restaurée n'est pas une sauvegarde, c'est un espoir**. Les histoires d'horreur de l'industrie ne manquent pas, où l'on découvre pendant l'incident que les sauvegardes tournaient à vide depuis des mois. Une fois par trimestre, restaure ton dernier dump sur une base jetable et vérifie que l'application démarre dessus. Trente minutes, quatre fois par an, contre la mort du produit : l'assurance la moins chère du marché.\n\n" +
            "## Le plan d'incident, écrit à froid\n\n" +
            "À 3 h du matin avec le site down, ton QI opérationnel est divisé par deux. Le plan s'écrit maintenant, au calme, en cinq étapes affichées quelque part :\n\n" +
            "1. **Constater et communiquer** (dans les 30 minutes) : un mot honnête sur ta page de statut ou tes réseaux : « Incident en cours sur X, on est dessus, prochain point dans une heure. » Les clients pardonnent très bien les pannes annoncées et très mal les silences.\n" +
            "2. **Restaurer le service d'abord, comprendre ensuite.** Le réflexe le plus rentable : le dernier déploiement est suspect n°1, et un rollback (instantané sur Vercel : redéployer le déploiement précédent) règle une grosse part des incidents. On analysera demain.\n" +
            "3. **Garder des traces** pendant l'action : captures, logs, horodatage. Demain-toi te remerciera.\n" +
            "4. **Clore en communiquant** : « C'est réparé, voilà ce qui s'est passé, voilà ce qu'on change. »\n" +
            "5. **Le post-mortem de vingt minutes**, sans auto-flagellation : cause, détection (combien de temps avant de savoir ?), correction, et UNE action préventive concrète mise au backlog. Un incident dont tu tires une action préventive est un investissement ; le même incident deux fois est une négligence.\n\n" +
            "## Le garde-fou des mises en production\n\n" +
            "La plupart des incidents d'un solo founder sont auto-infligés : le déploiement du vendredi 23 h. Trois règles qui suppriment l'essentiel du risque : ne déploie rien d'important juste avant de devenir injoignable (soirée, week-end, avion) ; garde des déploiements petits et fréquents (un gros déploiement mensuel est une bombe, dix petits hebdomadaires sont dix pétards) ; et relis la checklist de sécurité de la leçon 7 avant tout changement qui touche l'auth ou le paiement.\n\n" +
            "> À retenir : une route de santé surveillée, Sentry sur les erreurs, des sauvegardes automatiques ET restaurées une fois par trimestre, un plan d'incident en cinq étapes écrit à froid. Une soirée de mise en place, des années de sommeil.\n",
        },
        {
          id: "l23",
          title: "Automatiser avec l'IA et durer : le marathon du solo founder",
          type: "text",
          duration: "15 min",
          body:
            "## La règle des trois fois\n\n" +
            "L'automatisation a un coût caché que le solo founder découvre toujours trop tard : chaque automatisation est du code en plus, qui peut casser, qu'il faut maintenir, et qui rend le système plus opaque. D'où la règle que je m'impose : **on n'automatise qu'une tâche déjà faite trois fois à la main et documentée**. Les trois passages manuels t'apprennent les cas tordus que l'automatisation devra gérer ; la documentation est la spec. Automatiser une tâche qu'on ne maîtrise pas à la main, c'est industrialiser sa propre confusion.\n\n" +
            "Corollaire : calcule avant de coder. Une tâche de 10 minutes par semaine coûte ~9 heures par an ; si l'automatisation demande deux soirées plus de la maintenance, elle est rentable seulement si elle tourne longtemps sans casser. Beaucoup de « gains de temps » n'en sont pas.\n\n" +
            "## Ce qui vaut la peine, dans l'ordre\n\n" +
            "Les automatisations rentables d'un micro-SaaS, celles que je referais dans cet ordre :\n\n" +
            "1. **Le déploiement et les tests** : git push → tests → prod. Si tu as suivi la partie 2, c'est déjà fait.\n" +
            "2. **Les emails du cycle de vie** : bienvenue, relance de non-activé à J+2 (« qu'est-ce qui a coincé ? »), fin d'essai à J-3, échec de paiement. Quatre emails déclenchés par les événements que tu traques déjà, écrits une fois, qui travaillent pour toujours. C'est l'automatisation au meilleur ratio effort/impact de toute la liste.\n" +
            "3. **Le digest hebdomadaire de métriques** : un job cron qui t'envoie chaque lundi les cinq chiffres de ta revue (leçon 17), pré-mâchés par un LLM en trois phrases de synthèse. Ta revue de 30 minutes en prend 15.\n" +
            "4. **Les brouillons de support** (leçon 21) : classification des messages entrants et premier jet de réponse à partir de ta doc, à relire avant envoi.\n" +
            "5. **La paperasse récurrente** : rappel de déclaration Urssaf, export mensuel des factures Stripe vers ton dossier comptable.\n\n" +
            "Et la liste de ce qu'on n'automatise pas, aussi importante : les conversations de découverte avec les utilisateurs (le point 3 de la boucle de la leçon 19 ne se délègue pas à un script), les décisions de pricing, les réponses aux clients en colère, et tout ce qui touche à la suppression de données. L'IA prépare, l'humain tranche.\n\n" +
            "## Durer : le vrai facteur limitant, c'est toi\n\n" +
            "Parlons du sujet que les threads à succès évitent : la version réaliste d'un micro-SaaS mené à côté d'un travail, c'est 10 à 15 heures par semaine pendant un à deux ans, avec des plateaux de MRR qui durent des mois. Le burn-out du solo founder ne vient pas d'une semaine de rush, il vient de l'accumulation : le produit, le support, le marketing, la compta, tout repose sur la même tête, sans collègue pour dire « c'est bien » ni week-end vraiment coupé. Quelques garde-fous qui ont fait leurs preuves, chez moi et chez d'autres :\n\n" +
            "- **Un plafond d'heures hebdomadaire, écrit.** Décide de ton budget (disons 12 h) et tiens-le comme tu tiens un budget d'argent. La contrainte force la priorisation ; l'illimité fabrique de l'épuisement et des soirées de bricolage sans valeur.\n" +
            "- **Une seule grande chose par semaine.** La boucle de la leçon 19 le disait pour le produit ; c'est vrai pour tout le reste. Une semaine = un pari principal, du support, et rien d'autre. La liste des « il faudrait aussi » est infinie par nature ; ce n'est pas un problème à résoudre, c'est un état permanent à accepter.\n" +
            "- **Des métriques regardées une fois par semaine, pas dix fois par jour.** Le dashboard compulsif est à l'indie hacker ce que le cours de bourse est au petit porteur : de l'anxiété sans information nouvelle.\n" +
            "- **Des pairs.** Une communauté de makers, deux ou trois fondateurs avec qui échanger chaque semaine. Les plateaux de six mois se traversent beaucoup mieux accompagné, et un regard extérieur repère en dix minutes l'angle mort où tu tournes depuis un mois.\n" +
            "- **De vraies coupures.** Le monitoring de la leçon 22 sert exactement à ça : si ton produit ne peut pas survivre à un week-end sans toi, répare ça avant de chercher de nouveaux clients.\n\n" +
            "## Le mot de la fin\n\n" +
            "Tu as maintenant la chaîne complète : une douleur validée avant de coder, un MVP construit vite mais relu, un tunnel de paiement propre, un prix défendable, des canaux d'acquisition patients, des métriques honnêtes, une boucle d'itération, et de quoi opérer sans t'user. Aucun maillon n'est spectaculaire ; c'est la chaîne entière qui fait les produits qui encaissent. Le premier objectif chiffré raisonnable : 10 clients payants qui restent trois mois. Pas de quoi faire un thread viral, mais c'est la preuve que des inconnus paient chaque mois pour ton travail, et cette preuve-là change tout pour la suite. Vas-y par petits pas, mesure, écoute, et tiens la distance : c'est là que se joue la différence.\n",
        },
        {
          id: "l24",
          title: "Quiz : opérer en solo",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q24",
              prompt:
                "Une question client revient pour la deuxième fois cette semaine. Quelle est la meilleure réaction selon la méthode « répondre une fois, réutiliser cent fois » ?",
              options: [
                "Répondre plus vite en copiant la réponse précédente, et passer à autre chose",
                "Répondre, puis ajouter la réponse à la FAQ publique et vérifier si un changement d'interface pourrait rendre la question inutile",
                "Installer un chatbot autonome pour absorber ce type de questions",
                "Ignorer la question puisque la réponse a déjà été donnée à quelqu'un d'autre",
              ],
              correctIndex: 1,
              explanation:
                "Une question récurrente est un signal produit : la doc publique l'intercepte pour toujours (et peut se classer sur Google), et un libellé ou un état vide mieux conçu peut la supprimer à la racine. Le chatbot autonome est déconseillé à cette échelle, surtout face aux cas sensibles.",
            },
            {
              id: "q25",
              prompt: "Pourquoi dit-on qu'une sauvegarde jamais restaurée « n'est pas une sauvegarde » ?",
              options: [
                "Parce que les sauvegardes expirent légalement au bout de 30 jours",
                "Parce que sans test de restauration régulier, rien ne prouve que le fichier est exploitable : on découvre les sauvegardes corrompues ou vides pendant l'incident, quand il est trop tard",
                "Parce que restaurer une sauvegarde la consomme",
                "Parce que seules les sauvegardes manuelles sont fiables",
              ],
              correctIndex: 1,
              explanation:
                "Le mode de défaillance classique n'est pas l'absence de sauvegarde mais la sauvegarde qui tournait à vide ou incomplète depuis des mois. Une restauration trimestrielle sur une base jetable (30 minutes) transforme l'espoir en garantie.",
            },
            {
              id: "q26",
              prompt:
                "Ton site tombe un samedi soir. D'après le plan d'incident, quelle est la première action dans la demi-heure ?",
              options: [
                "Analyser la cause racine en profondeur avant de toucher quoi que ce soit",
                "Communiquer honnêtement (statut, réseaux) qu'un incident est en cours, puis tenter la restauration du service, rollback du dernier déploiement en tête",
                "Attendre lundi : les clients ne travaillent pas le week-end",
                "Réinstaller le serveur complet pour repartir sur du propre",
              ],
              correctIndex: 1,
              explanation:
                "Les clients pardonnent les pannes annoncées et pas les silences : on communique d'abord, même sans explication. Ensuite on restaure le service (le dernier déploiement est le suspect n°1, et le rollback est instantané sur la plupart des plateformes) ; l'analyse de cause attend le retour au calme.",
            },
            {
              id: "q27",
              prompt: "Que dit la « règle des trois fois » en matière d'automatisation ?",
              options: [
                "Toute automatisation doit être testée trois fois avant la mise en production",
                "On n'automatise une tâche qu'après l'avoir faite trois fois à la main et documentée : les passages manuels révèlent les cas tordus et servent de spec",
                "Il faut automatiser au maximum trois tâches par produit",
                "Une automatisation doit faire gagner au moins trois heures par jour",
              ],
              correctIndex: 1,
              explanation:
                "Automatiser une tâche qu'on ne maîtrise pas à la main revient à industrialiser sa propre confusion, et chaque automatisation ajoute du code à maintenir. Les trois exécutions manuelles plus la documentation garantissent qu'on sait exactement quoi déléguer à la machine, et si ça en vaut le coût.",
            },
            {
              id: "q28",
              prompt:
                "Quel garde-fou protège le mieux un solo founder du burn-out sur la durée ?",
              options: [
                "Travailler sans limite les six premiers mois pour prendre de l'avance, puis lever le pied",
                "Vérifier les métriques plusieurs fois par jour pour rester motivé",
                "Un budget d'heures hebdomadaire écrit et tenu, une seule grande priorité par semaine, et des pairs avec qui échanger régulièrement",
                "Automatiser aussi les conversations de découverte avec les utilisateurs pour gagner du temps",
              ],
              correctIndex: 2,
              explanation:
                "Le burn-out solo vient de l'accumulation sans limite ni soutien, pas d'une semaine intense. Le plafond d'heures force la priorisation, le pari unique évite l'éparpillement, les pairs rendent les plateaux traversables. Le dashboard compulsif ajoute de l'anxiété, et les conversations utilisateurs font partie du cœur non délégable du métier.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
