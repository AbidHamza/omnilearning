import type { Course } from "../types";

const course: Course = {
  slug: "finance-personnelle",
  title: "Finance personnelle : budget, épargne et investir sans se faire avoir",
  tagline: "Reprendre la main sur ton argent avec méthode : budget qui tient, épargne qui protège, investissement sans promesses de gourou.",
  description:
    "Un cours concret pour construire un budget qui tient vraiment, te bâtir un fonds d'urgence, comprendre ce que l'inflation et la dette font à ton pouvoir d'achat, apprivoiser les intérêts composés et découvrir l'investissement de long terme via des ETF indiciels. On y parle des vraies enveloppes françaises (Livret A, LDDS, LEP, assurance-vie, PEA), de fiscalité de base, de frais cachés, et surtout de la façon de repérer les arnaques qui promettent monts et merveilles. Chaque notion est illustrée par des calculs complets en euros, ligne à ligne, et des exercices corrigés. Aucun conseil personnalisé, aucune promesse de rendement : des mécanismes solides que tu pourras confronter à ta situation.",
  category: "Gestion de projet",
  level: "Débutant",
  instructor: "",
  hours: 7,
  rating: 0,
  learners: 0,
  accent: "#0f766e",
  image: "/covers/finance-personnelle.svg",
  language: "Français",
  software: "Un tableur (Excel, Google Sheets ou LibreOffice Calc)",
  prerequisites: [
    "Savoir faire une règle de trois et un pourcentage simple",
    "Avoir accès à tes relevés bancaires des trois derniers mois",
    "Aucune connaissance financière préalable n'est requise",
  ],
  summary: [
    "Partie 1 : Poser les bases et construire un budget qui tient",
    "Partie 2 : Le fonds d'urgence et l'inflation",
    "Partie 3 : La dette, le crédit conso et les intérêts composés",
    "Partie 4 : Les enveloppes d'épargne françaises et leur fiscalité",
    "Partie 5 : Investir sur le long terme avec des ETF indiciels",
    "Partie 6 : Éviter les arnaques et tenir une hygiène financière durable",
  ],
  objectives: [
    "Établir un budget mensuel réaliste et le suivre dans un tableur",
    "Calculer et placer un fonds d'urgence adapté à sa situation",
    "Mesurer le coût réel d'un crédit, ligne à ligne, et prioriser ses remboursements",
    "Comprendre le fonctionnement, les plafonds et la fiscalité du Livret A, du LDDS, du LEP, de l'assurance-vie et du PEA",
    "Saisir la logique des ETF indiciels, du TER et de l'investissement progressif",
    "Repérer les signaux d'une arnaque financière avant d'y perdre son argent",
  ],
  skills: [
    "Construction et suivi de budget",
    "Gestion de l'épargne de précaution",
    "Lecture d'un TAEG et arbitrage de dettes",
    "Compréhension des intérêts composés",
    "Choix d'enveloppes d'épargne selon l'horizon",
    "Détection des fraudes et des placements douteux",
  ],
  contentTypes: ["Leçons écrites", "Démonstrations commentées", "Quiz interactifs", "Exemples chiffrés"],
  parts: [
    {
      id: "p1",
      title: "Partie 1 : Poser les bases et construire un budget",
      lessons: [
        {
          id: "l1",
          title: "Ce cours, ce qu'il est et ce qu'il n'est pas",
          type: "text",
          duration: "14 min",
          body:
            "## À qui je parle\n\n" +
            "Tu gagnes un salaire, tu n'es pas dans le rouge tous les mois, mais tu ne sais pas vraiment où part ton argent, et le mot \"investir\" te met vaguement mal à l'aise. Ce cours est fait pour toi. Pas besoin d'avoir de l'argent de côté pour commencer : la première richesse, c'est de savoir ce qui entre et ce qui sort de ton compte.\n\n" +
            "Un exemple que j'ai vu des dizaines de fois en atelier budgétaire : un couple, 3 400 € de revenus nets à deux, aucun crédit immobilier, et pourtant 0 € d'épargne au bout de dix ans de vie active. Pas de drame, pas de dépense folle. Juste personne aux commandes. Quand on a posé leurs trois derniers mois de relevés sur la table, on a trouvé 214 € par mois d'abonnements et de petites livraisons dont ils n'avaient même plus le souvenir. Six mois plus tard, ils avaient 1 500 € de côté. Rien de génial là-dedans : ils ont simplement regardé.\n\n" +
            "## Un avertissement, tout de suite\n\n" +
            "Je ne suis pas ta conseillère en investissement, et ce cours n'est pas un conseil financier personnalisé. Je t'explique des mécanismes, des ordres de grandeur et des pièges documentés. Tes décisions dépendent de ta situation, de tes projets et de ta tolérance au risque, que je ne connais pas. Pour un conseil adapté à ton cas, un conseiller en gestion de patrimoine indépendant (rémunéré par honoraires, pas par commissions sur les produits qu'il vend) reste la bonne adresse. Et pour vérifier qu'un intermédiaire ou un produit est sérieux, le réflexe s'appelle l'AMF, l'Autorité des marchés financiers : son site publie des mises en garde et des listes noires. On y reviendra en détail dans la dernière partie.\n\n" +
            "> À retenir : personne ne peut te garantir un rendement. Quiconque le fait te ment ou se trompe. Cette phrase seule vaut le prix du cours.\n\n" +
            "## Les chiffres que je cite, et leur durée de vie\n\n" +
            "Ce cours contient beaucoup de chiffres réels : plafonds du Livret A, prélèvements sociaux à 17,2 %, TAEG de crédit renouvelable autour de 20 %. Les plafonds légaux bougent rarement, les taux bougent tout le temps. Quand je cite un taux, prends-le comme un ordre de grandeur daté de la rédaction du cours, et vérifie la valeur du jour sur service-public.fr ou sur le site de ta banque avant toute décision. C'est un réflexe que je vais te répéter, parce qu'il t'évitera de raisonner sur des chiffres périmés.\n\n" +
            "## Ce que tu vas apprendre, et dans quel ordre\n\n" +
            "On avance dans l'ordre qui compte vraiment, pas dans l'ordre qui fait rêver. D'abord le budget, parce que sans lui tout le reste est du vent. Ensuite le fonds d'urgence, qui t'évite de replonger dans le crédit au premier imprévu. Puis la dette, souvent le pire ennemi silencieux d'un budget, et les intérêts composés, ce mécanisme qui joue contre toi quand tu empruntes et pour toi quand tu places. Ensuite seulement, les enveloppes françaises (Livret A, LDDS, LEP, assurance-vie, PEA) et l'investissement de long terme. Beaucoup de gens veulent commencer par la Bourse. C'est comme vouloir poser le toit avant les fondations : spectaculaire, et voué à finir par terre.\n\n" +
            "## La bonne mentalité\n\n" +
            "La finance personnelle n'est pas une question de génie mathématique. Tout ce dont tu as besoin tient dans une règle de trois et un pourcentage. C'est une question de régularité. Un ménage qui met 80 € de côté chaque mois, sans y penser, finit devant celui qui attend le \"bon moment\" pendant dix ans : au bout de dix ans, le premier a 9 600 € plus les intérêts, le second a une bonne excuse. La discipline bat l'intelligence sur ce terrain, et c'est une excellente nouvelle, parce que la discipline, ça s'organise. Tout le cours consiste à remplacer ta volonté par des automatismes.\n\n" +
            "## Comment travailler ce cours\n\n" +
            "Compte une quinzaine de minutes par leçon, tableur ouvert à côté. Chaque calcul que je pose, refais-le toi-même : lire un calcul d'intérêts ne t'apprend rien, le taper dans une cellule te l'apprend pour de bon. Les leçons se terminent presque toutes par un exercice corrigé : joue le jeu, réponds avant de lire la correction, c'est là que ça s'imprime.\n\n" +
            "Chaque partie débouche sur une action concrète, et c'est la vraie mesure de ta progression : à la fin de la partie 1, un budget posé noir sur blanc ; partie 2, un premier virement vers ton futur fonds d'urgence ; partie 3, un plan de remboursement si tu as des dettes ; partie 4, tes enveloppes identifiées et éventuellement ouvertes ; partie 5, un versement programmé si (et seulement si) les étapes d'avant sont réglées ; partie 6, les réflexes anti-arnaque installés. Six actions, pas cinquante. Quelqu'un qui fait ces six choses dans l'année gère mieux son argent que 90 % des gens que j'ai croisés en agence bancaire, diplômés de commerce compris.\n\n" +
            "## À toi\n\n" +
            "Avant la prochaine leçon, récupère tes relevés bancaires des trois derniers mois (PDF depuis l'appli de ta banque, ou export CSV si elle le propose). Puis réponds de tête, sans regarder : combien dépenses-tu par mois en courses ? En abonnements ? Note tes deux réponses quelque part.\n\n" +
            "> Correction : il n'y en a pas encore, et c'est le but. À la fin de la leçon suivante, tu compareras tes estimations aux vrais chiffres. En atelier, l'écart sur les abonnements dépassait 40 % pour la majorité des participants. Si le tien est inférieur, tu pars avec de l'avance.",
        },
        {
          id: "l2",
          title: "Faire le point : ce qui entre, ce qui sort",
          type: "text",
          duration: "16 min",
          body:
            "## Le chiffre qui compte vraiment\n\n" +
            "Ce n'est pas ton salaire brut, ni même ton net avant impôt. C'est ton revenu réellement disponible : ce qui arrive sur le compte après cotisations et prélèvement à la source. Un salaire affiché à 2 400 € brut donne autour de 1 870 € net avant impôt, puis un peu moins après le prélèvement à la source selon ton taux. Pars toujours du montant qui atterrit sur ton compte, celui de la ligne \"VIREMENT SALAIRE\" du relevé. Tout le reste est de la théorie.\n\n" +
            "## Trier ses dépenses en trois familles\n\n" +
            "Reprends tes trois mois de relevés et classe chaque ligne dans l'une de ces trois familles.\n\n" +
            "1. Les charges fixes : loyer, crédit, assurances, abonnements, forfait mobile, énergie. Elles tombent, que tu le veuilles ou non.\n" +
            "2. Les dépenses variables utiles : courses, carburant, santé, transports. Nécessaires, mais compressibles.\n" +
            "3. Les dépenses de confort : restaurants, sorties, vêtements plaisir, gadgets, streaming en rafale.\n\n" +
            "## Un cas complet : Sarah, 1 910 € net par mois\n\n" +
            "Déroulons l'exercice sur un cas réaliste. Sarah est locataire, seule, en CDI, salaire net après prélèvement à la source : 1 910 €. Ses charges fixes, relevées ligne à ligne sur trois mois :\n\n" +
            "| Poste | Montant / mois |\n" +
            "| --- | --- |\n" +
            "| Loyer charges comprises | 780 € |\n" +
            "| Électricité et gaz | 95 € |\n" +
            "| Assurance habitation | 16 € |\n" +
            "| Assurance auto | 42 € |\n" +
            "| Mutuelle santé | 38 € |\n" +
            "| Forfait mobile | 15,99 € |\n" +
            "| Internet | 29,99 € |\n" +
            "| Essence trajet travail | 110 € |\n" +
            "| Netflix + Spotify + salle de sport | 54,60 € |\n" +
            "| Total charges fixes | 1 181,58 € |\n\n" +
            "Déjà une leçon : Sarah pensait être \"autour de 1 000 € de fixe\". La réalité est 18 % plus haut. Presque tout le monde sous-estime, parce qu'on pense au loyer et à l'énergie, et qu'on oublie la couche d'abonnements à 15 € qui, empilés, pèsent un demi-loyer.\n\n" +
            "## Les lignes qui piègent le tri\n\n" +
            "Certaines dépenses résistent au classement, et c'est là que les budgets se trompent. Les courses : variable utile pour le fond du caddie, mais le rayon traiteur et les gâteaux apéro relèvent du confort ; sois honnête sur la répartition, sans devenir comptable du paquet de chips. L'essence : le trajet domicile-travail est un besoin, le week-end improvisé est une envie, et les deux passent par la même pompe. La salle de sport : si tu y vas, c'est de la santé ; si tu n'y as pas mis les pieds depuis mars, c'est un abonnement de confort qui dort. Le critère qui tranche presque tout : si je coupe cette dépense trois mois, est-ce que ma vie de base tient debout ? Oui : confort. Non : besoin.\n\n" +
            "Pense aussi aux lignes invisibles, celles qu'on ne voit plus à force de les voir : frais de tenue de compte et cotisation de carte (2 à 8 € par mois selon les banques, souvent négociables ou évitables en ligne), assurances en doublon (l'extension de garantie du téléphone alors que l'assurance habitation ou la carte bancaire couvre déjà une partie), options de forfait jamais utilisées. En atelier, la chasse aux doublons d'assurance rapportait en moyenne 10 à 15 € par mois. Ce n'est pas spectaculaire, c'est 150 € par an récupérés en une heure de lecture de contrats.\n\n" +
            "## Pourquoi trois mois et pas un\n\n" +
            "Un seul mois ment. Il n'y a pas la révision de la voiture, pas le cadeau d'anniversaire, pas les soldes, pas le week-end imprévu. En moyennant trois mois, tu approches la vérité. Encore mieux : repère les dépenses annuelles et divise-les par douze pour les provisionner. Chez Sarah : révision et pneus environ 240 € par an (20 € par mois), cadeaux de fin d'année 350 € (29 € par mois), une semaine de vacances 900 € (75 € par mois). Total des provisions : 124 € par mois. Une dépense annuelle non provisionnée n'est pas un imprévu, c'est un oubli.\n\n" +
            "## Le calcul du reste à vivre\n\n" +
            "La formule tient en une ligne :\n\n" +
            "`reste à vivre = revenu disponible - charges fixes - provisions annuelles`\n\n" +
            "Pour Sarah : 1 910 − 1 181,58 − 124 = 604,42 €. C'est ce qui lui reste réellement pour manger, se soigner, sortir et épargner. Ses courses tournent à 340 € par mois : il reste 264 € pour le confort et l'épargne. Sarah croyait avoir \"600 ou 700 € de marge\" pour ses envies. Elle en a 264. Ce n'est pas une mauvaise nouvelle, c'est la seule information qui permette de piloter : on ne pilote bien que ce qu'on mesure.\n\n" +
            "> À retenir : la plupart des budgets ne dérapent pas sur les gros postes, qu'on surveille, mais sur l'accumulation des petits. Cinq abonnements à 12 €, deux livraisons de repas par semaine, et 300 € disparaissent chaque mois sans laisser de souvenir.\n\n" +
            "## À toi\n\n" +
            "Ton revenu disponible est de 2 150 €. Tes charges fixes relevées font 1 240 €. Tu paies chaque année 420 € d'assurance auto (déjà comptée dans les fixes), 300 € de taxe foncière et 480 € de cadeaux et fêtes. Quel est ton reste à vivre mensuel ?\n\n" +
            "> Correction : les provisions à ajouter sont la taxe foncière (300 ÷ 12 = 25 €) et les fêtes (480 ÷ 12 = 40 €), soit 65 €. L'assurance auto est déjà dans les fixes, on ne la compte pas deux fois. Reste à vivre : 2 150 − 1 240 − 65 = 845 €. Si tu as trouvé 780 €, tu as compté l'assurance en double : c'est l'erreur la plus fréquente de l'exercice.\n\n" +
            "Dernière étape avant la leçon suivante : note chaque dépense pendant sept jours, sans exception, même le café à 1,80 €. Pas pour culpabiliser. Pour voir. Ce simple relevé change plus de comportements que n'importe quel discours.",
        },
        {
          id: "l3",
          title: "La méthode 50/30/20 en pratique",
          type: "text",
          duration: "16 min",
          body:
            "## Une règle simple, pas une loi\n\n" +
            "La méthode 50/30/20 répartit ton revenu disponible en trois parts : 50 % pour les besoins, 30 % pour les envies, 20 % pour l'épargne et le remboursement de dettes. Elle a été popularisée par la sénatrice américaine Elizabeth Warren dans son livre \"All Your Worth\" (2005). Son mérite n'est pas la précision des chiffres, c'est de forcer une place fixe pour l'épargne, décidée avant les envies plutôt qu'avec ce qui reste après.\n\n" +
            "## Un exemple chiffré\n\n" +
            "Prenons un revenu disponible de 2 000 € par mois.\n\n" +
            "- Besoins (50 %) : 1 000 €. Loyer, énergie, courses de base, assurances, transport pour aller travailler, mensualités minimales des crédits.\n" +
            "- Envies (30 %) : 600 €. Restaurants, loisirs, vêtements plaisir, abonnements de confort, week-ends.\n" +
            "- Épargne et dettes (20 %) : 400 €. Fonds d'urgence, remboursement accéléré des crédits, épargne de projet, investissement.\n\n" +
            "```figure\n" +
            "{\"caption\": \"2 000 € de revenu disponible passés au filtre 50/30/20 : l'épargne a une place réservée, pas les miettes\"}\n" +
            "<svg viewBox='0 0 640 300' role='img'><title>Répartition 50/30/20 d'un revenu de 2 000 euros</title><rect x='220' y='24' width='200' height='40' rx='4' fill='none' stroke='currentColor' opacity='0.7'/><text x='320' y='49' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>Revenu : 2 000 €</text><line x1='320' y1='64' x2='320' y2='108' stroke='currentColor' opacity='0.5'/><path d='M314 100 L320 112 L326 100 Z' fill='currentColor' opacity='0.5'/><rect x='40' y='120' width='280' height='64' fill='currentColor' opacity='0.35'/><rect x='320' y='120' width='168' height='64' fill='currentColor' opacity='0.55'/><rect x='488' y='120' width='112' height='64' class='fig-accent'/><text x='180' y='148' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>Besoins 50 %</text><text x='180' y='168' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>1 000 €</text><text x='404' y='148' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>Envies 30 %</text><text x='404' y='168' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>600 €</text><text x='544' y='148' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>20 %</text><text x='544' y='168' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>400 €</text><text x='40' y='216' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>loyer, courses, assurances,</text><text x='40' y='232' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>transport, minimums de crédit</text><text x='340' y='216' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>sorties, plaisir</text><text x='458' y='252' font-family='ui-monospace, monospace' font-size='12' fill='currentColor'>épargne + dettes :</text><text x='458' y='268' font-family='ui-monospace, monospace' font-size='12' fill='currentColor'>virement automatique le jour de la paie</text><line x1='544' y1='184' x2='544' y2='236' stroke='currentColor' opacity='0.5'/></svg>\n" +
            "```\n\n" +
            "## Ce que la règle ne dit pas\n\n" +
            "Deux limites à connaître avant de l'adopter. En bas de l'échelle des revenus, les 50 % de besoins sont souvent une fiction : au SMIC dans une ville moyenne, les besoins réels dépassent 70 % et la règle culpabilise plus qu'elle n'aide ; l'objectif honnête devient alors quelques pourcents d'épargne réguliers, point. En haut de l'échelle, c'est l'inverse : un foyer à 5 000 € qui suit 50/30/20 à la lettre dépense 1 500 € par mois en envies et n'épargne \"que\" 1 000 €, alors qu'il pourrait viser 30 ou 35 % d'épargne sans effort réel. La règle est un point de départ pour reprendre la main, pas un régime de croisière définitif. Quand ton budget tourne depuis six mois, la bonne question n'est plus \"suis-je dans les cases\" mais \"mon taux d'épargne peut-il monter d'un cran\".\n\n" +
            "Autre exemple pour ancrer les ordres de grandeur, un couple avec 2 600 € de revenu disponible commun : besoins 1 300 €, envies 780 €, épargne 520 €. À deux, les besoins mutualisés (un seul loyer, une seule box internet) laissent souvent plus de marge qu'en solo : c'est le moment d'installer le virement d'épargne, pas d'agrandir le train de vie.\n\n" +
            "## Et quand les besoins dépassent 50 %\n\n" +
            "Si tes besoins mangent 60 ou 65 %, ce n'est pas un échec moral. À Paris, Lyon ou Bordeaux, un loyer peut à lui seul absorber 40 % du revenu. La règle devient alors un cap, pas un couperet. Reprends le cas de Sarah, vu à la leçon précédente : 1 910 € de revenu, environ 1 306 € de fixes et provisions, 340 € de courses. Ses besoins pèsent 86 %. Le format 50/30/20 est hors d'atteinte à court terme, et alors ? La version utile pour elle : 5 % d'épargne (95 €), le reste en envies, et un chantier de fond sur les deux ou trois plus gros postes (renégocier les assurances, chasser les abonnements, revoir le forfait). Passer de 0 à 5 % d'épargne compte plus que de rêver à 20 % qu'on n'atteint jamais.\n\n" +
            "Trois pistes concrètes de compression, dans l'ordre du rendement par heure passée : les assurances (auto et habitation se renégocient ou se changent en une heure, gain courant de 10 à 25 %), l'énergie (comparateur officiel du médiateur, comparateur.energie-info.fr), puis les forfaits mobile et internet, où la concurrence fait le travail pour toi.\n\n" +
            "## Mini-exercice corrigé\n\n" +
            "Revenu disponible de 1 700 € : calcule les trois enveloppes, puis dis ce que tu fais si tes besoins réels s'élèvent à 1 020 €. Correction : les cibles théoriques donnent 850 € de besoins, 510 € d'envies, 340 € d'épargne. Avec 1 020 € de besoins réels, tu es à 60 % ; les 680 € restants se partagent entre envies et épargne. Plutôt que de tout prendre sur l'épargne, répartis l'effort : par exemple 420 € d'envies (25 %) et 260 € d'épargne (15 %). Tu gardes une épargne réelle, et tu sais exactement quel poste de besoins attaquer en priorité pour retrouver de la marge.\n\n" +
            "## Le principe qui fait la différence : se payer en premier\n\n" +
            "La plupart des gens épargnent ce qui reste à la fin du mois. Il ne reste jamais rien, c'est une loi de la nature. Inverse le sens : le lendemain de la paie, un virement automatique envoie tes 20 % (ou 10 %, ou 5 % pour commencer) vers un compte séparé. Tu vis avec le reste. Cette seule bascule, mettre l'épargne en premier au lieu de la laisser en dernier, transforme les résultats. Elle marche parce qu'elle retire la décision : tu ne peux pas craquer sur un arbitrage que tu n'as plus à faire.\n\n" +
            "> À retenir : un virement automatique le lendemain de la paie fait plus pour ton épargne que toute la volonté du monde.\n\n" +
            "## À toi\n\n" +
            "Revenu disponible de 1 400 € (temps partiel). Applique la grille 50/30/20 en euros, puis dis si un loyer de 720 € permet de tenir la case besoins.\n\n" +
            "> Correction : 50 % = 700 €, 30 % = 420 €, 20 % = 280 €. Le loyer seul (720 €) dépasse déjà la case besoins de 20 €, avant même les courses et les assurances. La grille standard est donc intenable : on passe en version cap, par exemple 65/30/5 (910 € de besoins, 420 € d'envies, 70 € d'épargne), et le vrai levier devient le coût du logement (colocation, aide au logement, déménagement à moyen terme), pas les cafés.\n\n" +
            "Étudiant, jeune actif, famille : les curseurs bougent. Ce qui ne bouge pas, c'est l'idée d'une part réservée à l'avenir, décidée à l'avance et virée automatiquement.",
        },
        {
          id: "l4",
          title: "Construire son budget dans un tableur",
          type: "video",
          duration: "16 min",
          videoLabel: "Démonstration commentée · tableur pas à pas",
          body:
            "## Ce que montre la démonstration\n\n" +
            "On construit ensemble une feuille de budget dans un tableur (Google Sheets, Excel ou LibreOffice Calc : tout fonctionne pareil). Voici les notes complètes pour reproduire la feuille de ton côté, avec les formules exactes.\n\n" +
            "## Étape 1 : les revenus\n\n" +
            "En haut, un bloc \"Revenus\" avec une ligne par source : salaire, primes, allocations, revenus annexes. En dessous, une cellule Total. Si ton salaire occupe les lignes B2 à B5 :\n\n" +
            "`=SOMME(B2:B5)`\n\n" +
            "On saisit le net réellement encaissé, jamais le brut. Pour un revenu variable (indépendant, primes), la démo utilise la moyenne des six derniers mois, arrondie vers le bas : mieux vaut une bonne surprise qu'un trou.\n\n" +
            "## Étape 2 : les charges fixes\n\n" +
            "Un bloc \"Charges fixes\" listant chaque poste récurrent avec son montant mensuel : loyer, crédits, assurances, énergie, mobile, internet, transports, abonnements. Une ligne par poste, pas de ligne fourre-tout \"divers\" : c'est dans \"divers\" que le budget fuit. Total du bloc dans une cellule dédiée.\n\n" +
            "## Étape 3 : les provisions annuelles\n\n" +
            "C'est l'étape que tout le monde oublie. Un bloc \"Provisions\" pour les dépenses qui ne tombent pas chaque mois : taxe foncière, assurance payée à l'année, révision, cadeaux de fin d'année, vacances. On saisit le montant annuel en colonne B et la formule mensuelle en colonne C :\n\n" +
            "`=B10/12`\n\n" +
            "Une assurance auto de 480 € par an devient une provision de 40 € par mois. Dans la démo, on ouvre aussi un deuxième compte (ou un livret dédié) où partent physiquement ces provisions chaque mois : l'argent provisionné qui reste sur le compte courant finit toujours dépensé.\n\n" +
            "## Étape 4 : les dépenses variables et l'épargne\n\n" +
            "Un bloc pour les courses, le carburant, la santé, les loisirs, avec deux colonnes : \"prévu\" et \"réel\". Puis une ligne \"Épargne\" traitée comme une charge, placée en haut de la liste des sorties, pas en bas. C'est la traduction concrète du \"se payer en premier\" vu à la leçon 3.\n\n" +
            "## Étape 5 : la cellule qui compte\n\n" +
            "Tout en bas, une formule unique, celle du solde prévisionnel :\n\n" +
            "`=Total_revenus - Total_charges_fixes - Total_provisions - Total_variables - Epargne`\n\n" +
            "Positif : tu as de la marge à réaffecter (vers l'épargne ou les envies, à toi de voir). Négatif : la feuille te dit exactement de combien tu dois réduire quelque part, poste par poste. On ajoute une mise en forme conditionnelle, vert si positif, rouge si négatif : dans Google Sheets, menu Format puis Mise en forme conditionnelle, règle \"inférieur à 0\". Le signal visuel fait la moitié du travail.\n\n" +
            "## Le réflexe à garder\n\n" +
            "Une feuille de budget n'est utile que si on la met à jour. La démo se termine par le rituel : dix minutes chaque début de mois, on remplit la colonne \"réel\" du mois passé, on compare au prévu, on ajuste une chose, une seule. C'est ce petit rendez-vous, pas la beauté du tableur, qui fait la différence sur un an.\n\n" +
            "> À retenir : la meilleure application de budget est celle que tu ouvres vraiment. Un tableur simple mis à jour chaque mois vaut mieux qu'un outil sophistiqué abandonné en février.",
        },
        {
          id: "l5",
          title: "Quiz : maîtriser son budget",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Dans la méthode 50/30/20 appliquée à un revenu disponible de 2 000 €, combien va à l'épargne et au remboursement de dettes ?",
              options: ["200 €", "300 €", "400 €", "600 €"],
              correctIndex: 2,
              explanation:
                "20 % de 2 000 €, soit 400 €. Ces 20 % couvrent à la fois l'épargne et le remboursement accéléré des crédits : les deux préparent ton avenir financier.",
            },
            {
              id: "q2",
              prompt:
                "Pourquoi analyser trois mois de dépenses plutôt qu'un seul ?",
              options: [
                "Parce que la loi l'exige pour un budget",
                "Parce qu'un seul mois masque les dépenses ponctuelles et saisonnières",
                "Parce que les banques ne fournissent que trois mois de relevés",
                "Parce que c'est la durée d'un trimestre fiscal",
              ],
              correctIndex: 1,
              explanation:
                "Un mois isolé ne contient ni la révision de la voiture, ni un impôt local, ni un cadeau. Trois mois lissent ces à-coups et donnent une image réaliste, surtout si l'on provisionne en plus les dépenses annuelles.",
            },
            {
              id: "q3",
              prompt:
                "Que signifie concrètement le principe \"se payer en premier\" ?",
              options: [
                "Négocier une augmentation avant tout",
                "Épargner ce qui reste à la fin du mois",
                "Virer automatiquement son épargne dès la paie, avant de dépenser",
                "Rembourser ses dettes uniquement en fin d'année",
              ],
              correctIndex: 2,
              explanation:
                "En programmant le virement d'épargne le lendemain de la paie, on retire la décision et donc la tentation. Ce qui reste sur le compte courant devient le budget de vie, et l'épargne ne dépend plus de la volonté du moment.",
            },
            {
              id: "q4",
              prompt:
                "Une taxe foncière de 900 € tombe une fois par an. Quelle est la bonne façon de la gérer dans un budget ?",
              options: [
                "Ne rien prévoir et payer au moment venu",
                "La provisionner à hauteur de 75 € par mois",
                "L'ignorer car ce n'est pas une charge fixe mensuelle",
                "L'épargner uniquement le mois précédant l'échéance",
              ],
              correctIndex: 1,
              explanation:
                "900 € divisés par douze donnent 75 € par mois. En provisionnant cette somme sur un compte dédié, l'échéance annuelle ne déséquilibre plus le mois où elle arrive.",
            },
            {
              id: "q25",
              prompt:
                "Ton revenu disponible est de 2 150 €, tes charges fixes de 1 240 €, et tes dépenses annuelles à provisionner totalisent 780 € par an. Quel est ton reste à vivre mensuel ?",
              options: ["845 €", "910 €", "130 €", "975 €"],
              correctIndex: 0,
              explanation:
                "Les provisions font 780 ÷ 12 = 65 € par mois. Reste à vivre : 2 150 − 1 240 − 65 = 845 €. L'erreur classique consiste à oublier les provisions (910 €) ou à retrancher les 780 € en entier sur un seul mois.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Partie 2 : Le fonds d'urgence et l'inflation",
      lessons: [
        {
          id: "l6",
          title: "Le fonds d'urgence : combien et où",
          type: "text",
          duration: "16 min",
          body:
            "## Une chaudière à 1 800 €\n\n" +
            "Scénario vécu cent fois : la chaudière lâche en novembre, devis 1 800 €. Le ménage qui a un coussin paie, râle un bon coup, et reconstitue son épargne sur six mois. Le ménage qui n'en a pas signe un crédit renouvelable \"facile et immédiat\" à 20 % de TAEG, et paiera la chaudière 2 300 € en traînant la dette deux ans. Même panne, même devis, 500 € d'écart. Le fonds d'urgence, c'est ça : le mur qui sépare l'imprévu du surendettement.\n\n" +
            "Il n'est pas là pour rapporter. C'est de l'épargne qui protège, pas de l'épargne qui fructifie. Les deux rôles sont différents, et les confondre est l'erreur la plus coûteuse de ce chapitre.\n\n" +
            "## Combien mettre de côté\n\n" +
            "La règle courante : entre trois et six mois de dépenses courantes. Attention, on parle de dépenses, pas de revenus. Si tu vis avec 1 600 € par mois de charges, courses et transport compris, ta cible se situe entre 4 800 € et 9 600 €. Quelqu'un qui gagne 3 000 € mais en dépense 1 600 vise la même fourchette : c'est ton train de vie qu'il faut couvrir, pas ton salaire.\n\n" +
            "Le bon niveau dépend de ta stabilité :\n\n" +
            "- Fonctionnaire ou CDI ancien, en couple à deux revenus : trois mois suffisent souvent.\n" +
            "- Indépendant, intérimaire, CDD, revenu unique du foyer, propriétaire d'un logement vieillissant : vise plutôt six mois, parfois plus.\n\n" +
            "Et surtout, ne vise pas la cible d'un coup. Le premier palier réaliste est un mois de dépenses. Rien que ça change la vie : la plupart des imprévus du quotidien (électroménager, réparation auto, frais de santé mal remboursés) tiennent dans un mois de budget.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le fonds d'urgence se construit par paliers, pour un train de vie de 1 600 € par mois\"}\n" +
            "<svg viewBox='0 0 640 320' role='img'><title>Paliers du fonds d'urgence : un mois, trois mois, six mois de dépenses</title><line x1='40' y1='264' x2='600' y2='264' stroke='currentColor' opacity='0.6'/><rect x='70' y='204' width='140' height='60' class='fig-accent'/><rect x='250' y='154' width='140' height='110' fill='currentColor' opacity='0.45'/><rect x='430' y='94' width='140' height='170' fill='currentColor' opacity='0.6'/><text x='140' y='232' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>1 mois</text><text x='140' y='252' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>1 600 €</text><text x='320' y='196' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>3 mois</text><text x='320' y='216' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>4 800 €</text><text x='500' y='136' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>6 mois</text><text x='500' y='156' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>9 600 €</text><text x='140' y='288' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor'>premier objectif</text><text x='320' y='288' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>CDI stable, 2 revenus</text><text x='500' y='288' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>indépendant, revenu unique</text><text x='70' y='40' font-family='ui-monospace, monospace' font-size='13' fill='currentColor' opacity='0.8'>cible = mois de DÉPENSES, pas de revenus</text><text x='70' y='60' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>support : livret disponible et garanti (Livret A, LDDS)</text></svg>\n" +
            "```\n\n" +
            "## Où le placer\n\n" +
            "Trois critères, dans cet ordre : disponibilité immédiate, capital garanti, et seulement ensuite le rendement. Ce fonds doit être accessible en 24 à 72 heures, sans risque de perte, et séparé du compte courant pour ne pas être grignoté par les fins de mois.\n\n" +
            "En France, le bon réceptacle est un livret réglementé : Livret A ou LDDS, et le LEP en priorité si tu y es éligible (on détaille les trois dans la partie 4). L'argent y est disponible à tout moment, garanti, exonéré d'impôt, et juste assez loin du compte courant pour ne pas fondre par distraction.\n\n" +
            "> À retenir : le fonds d'urgence ne doit surtout pas être investi en Bourse. Le jour où tu en as besoin est souvent le pire jour pour vendre, parce que les urgences et les krachs ont la mauvaise habitude d'arriver en même temps. Perdre son emploi pendant une récession, c'est le scénario type, et c'est précisément celui où un portefeuille d'actions est au plus bas.\n\n" +
            "## Un coussin qui rapporte quand même un peu\n\n" +
            "Sécurité d'abord ne veut pas dire zéro rendement. Sur un livret réglementé à 2,4 %, un fonds d'urgence de 4 800 € produit environ 115 € d'intérêts par an, nets de tout impôt. C'est un bonus appréciable, mais garde la hiérarchie en tête : ne va pas courir après un \"super-livret\" bancaire à taux promotionnel (souvent 3 % pendant trois mois, puis 0,5 %, et fiscalisé à 30 %) pour gratter quelques euros en compliquant tout. La vraie performance d'un fonds d'urgence ne se lit pas sur le relevé d'intérêts : elle se lit dans le crédit renouvelable que tu n'as jamais souscrit. Les 500 € d'intérêts évités sur une chaudière financée cash valent des années d'intérêts de livret.\n\n" +
            "## Les faux amis\n\n" +
            "Deux erreurs reviennent sans cesse. La première : placer l'épargne de précaution sur un support qui promet du rendement mais bloque l'argent (compte à terme, PEL) ou le fait fluctuer (assurance-vie en unités de compte, actions). Un fonds d'urgence indisponible n'est pas un fonds d'urgence, c'est un placement déguisé. La seconde : considérer le découvert autorisé ou une carte de crédit comme un fonds d'urgence. C'est exactement l'inverse : c'est le produit dont le fonds d'urgence doit te protéger, facturé entre 7 et 21 % selon le cas.\n\n" +
            "## Le plan de constitution, chiffré\n\n" +
            "Reprenons Sarah (leçon 2) : 1 910 € de revenu, environ 1 646 € de sorties fixes, provisions et courses. Elle décide de virer 120 € le lendemain de chaque paie vers un LDDS. Palier 1 (un mois, 1 646 €) : atteint en 14 mois. Si elle pousse à 150 € en renégociant ses assurances, 11 mois. C'est long ? Oui. C'est aussi la dernière fois de sa vie qu'elle part de zéro : une fois le coussin en place, il ne se reconstruit que partiellement, après usage.\n\n" +
            "## À toi\n\n" +
            "Tes dépenses mensuelles font 2 200 €, tu es en CDD, seul revenu du foyer. Quelle cible pour ton fonds d'urgence, et quel premier palier ? À 180 € d'épargne par mois, en combien de temps atteins-tu le palier ?\n\n" +
            "> Correction : situation instable et revenu unique, donc six mois : 13 200 €. Premier palier : un mois, 2 200 €. À 180 € par mois : 2 200 ÷ 180 = 12,2, soit environ un an. La cible complète prendra des années et c'est normal : le palier 1 couvre déjà l'essentiel des imprévus courants.\n\n" +
            "Tu as pioché dedans pour une vraie urgence ? Parfait, il a joué son rôle. La priorité redevient de le reconstituer avant de reprendre les autres projets d'épargne.",
        },
        {
          id: "l7",
          title: "L'inflation, ou pourquoi l'argent immobile fond",
          type: "text",
          duration: "15 min",
          body:
            "## Une définition sans jargon\n\n" +
            "L'inflation, c'est la hausse générale des prix au fil du temps. Quand elle est de 2 % par an, un panier de courses à 100 € cette année coûte 102 € l'an prochain. Vu autrement : le même billet de 100 € achète un peu moins chaque année. Ton argent ne bouge pas, mais son pouvoir d'achat baisse. C'est un impôt silencieux sur tout ce qui dort.\n\n" +
            "## Des chiffres réels\n\n" +
            "La Banque centrale européenne vise une inflation de 2 % à moyen terme. On en a été loin récemment : en France, l'inflation a atteint environ 5,2 % en 2022 et près de 4,9 % en 2023, avant de refluer vers 2 % en 2024 puis en dessous ensuite. Concrètement, sur la seule année 2022, 10 000 € laissés sur un compte courant à 0 % ont perdu environ 520 € de pouvoir d'achat. Sans mouvement, sans frais, sans que rien n'apparaisse sur le relevé. Ces épisodes rappellent que 2 % est une cible, pas une garantie, et que l'INSEE publie le chiffre réel chaque mois si tu veux suivre.\n\n" +
            "## L'effet cumulé, calculé ligne à ligne\n\n" +
            "Gardons 1 000 € sous le matelas et déroulons à 2 % d'inflation par an. Le pouvoir d'achat se calcule en divisant par 1,02 chaque année :\n\n" +
            "| Année | Pouvoir d'achat |\n" +
            "| --- | --- |\n" +
            "| Départ | 1 000 € |\n" +
            "| 1 an | 1 000 ÷ 1,02 = 980 € |\n" +
            "| 2 ans | 980 ÷ 1,02 = 961 € |\n" +
            "| 5 ans | environ 906 € |\n" +
            "| 10 ans | environ 820 € |\n\n" +
            "Presque 18 % de valeur réelle évaporée en dix ans, sans dépenser un centime. Avec une inflation à 5 %, les mêmes 1 000 € ne pèsent plus qu'environ 610 € au bout de dix ans. Ne rien faire de son argent n'est pas neutre : c'est une décision, et elle a un coût mesurable.\n\n" +
            "## D'où vient l'inflation\n\n" +
            "Sans transformer cette leçon en cours de macroéconomie, deux mécanismes expliquent l'essentiel. Côté demande : quand beaucoup de gens veulent acheter la même chose en même temps et que la production ne suit pas, les prix montent. C'est ce qui s'est passé à la sortie des confinements en 2021, avec une épargne accumulée qui s'est déversée d'un coup sur des chaînes logistiques encore à l'arrêt. Côté coûts : quand une matière première essentielle devient plus chère, tout ce qui en dépend suit. Le choc énergétique de 2022, gaz et électricité en tête, a diffusé dans les transports, l'agriculture, l'industrie, et fini dans ton caddie. Les deux mécanismes se sont cumulés, d'où les 5,2 % de 2022 en France. Tu n'as aucune prise là-dessus, et ce n'est pas grave : ton travail n'est pas de prévoir l'inflation, c'est de construire un patrimoine qui la supporte.\n\n" +
            "## Les prix ne montent pas tous pareil\n\n" +
            "Le chiffre officiel est une moyenne pondérée sur un panier type, et personne ne consomme le panier type. En 2022, l'énergie a pris plus de 20 % et l'alimentaire autour de 12 % l'année suivante, pendant que d'autres postes bougeaient à peine. Résultat : un ménage modeste, qui consacre une part plus grande de son budget au carburant, au chauffage et aux courses, a subi une inflation personnelle bien supérieure aux 5,2 % annoncés. À l'inverse, un cadre urbain sans voiture l'a moins sentie. C'est une raison de plus de suivre TES chiffres : ton relevé bancaire est un meilleur indicateur de ton inflation que le journal de 20 heures. Si ton budget courses est passé de 350 à 420 € en deux ans à consommation égale, ta réalité, c'est 20 %.\n\n" +
            "## Le taux réel, la seule mesure honnête\n\n" +
            "Ce qui compte n'est pas le taux affiché de ton placement, mais le taux réel : le rendement moins l'inflation.\n\n" +
            "`taux réel ≈ taux du placement - taux d'inflation`\n\n" +
            "Un livret à 3 % pendant que l'inflation est à 5 % te fait perdre environ 2 % de pouvoir d'achat par an, même si le solde du compte augmente. Le chiffre monte, la valeur descend. À l'inverse, un livret à 3 % avec une inflation à 1 % te fait gagner 2 % réels. C'est arrivé dans les deux sens ces dernières années : en 2022-2023, le Livret A à 3 % perdait face à une inflation à 5 %, puis la situation s'est inversée quand l'inflation est retombée. Le même livret, au même taux, peut être une bonne ou une mauvaise affaire selon le contexte.\n\n" +
            "> À retenir : un solde qui augmente ne veut pas dire que tu t'enrichis. Compare toujours ton rendement à l'inflation : c'est le taux réel qui remplit ou vide ton panier.\n\n" +
            "## À toi\n\n" +
            "Ton livret rapporte 2,4 %. L'inflation de l'année est de 1,3 %. Tu y laisses 8 000 €. Quel est ton gain nominal, ton taux réel approximatif, et ton gain de pouvoir d'achat sur l'année ?\n\n" +
            "> Correction : gain nominal = 8 000 × 2,4 % = 192 €. Taux réel ≈ 2,4 − 1,3 = 1,1 %. Gain de pouvoir d'achat ≈ 8 000 × 1,1 % = 88 €. Les 192 € du relevé bancaire sont réels, mais un peu plus de la moitié ne fait que compenser la hausse des prix.\n\n" +
            "## Ce que ça change pour toi\n\n" +
            "L'inflation justifie deux décisions. Un : garder sur les livrets seulement ce qui doit y être, c'est-à-dire le fonds d'urgence et les projets à moins de deux ou trois ans. Deux : chercher, pour l'argent de long terme, un placement dont le rendement espéré dépasse l'inflation sur la durée, en acceptant des fluctuations. C'est précisément le rôle de l'investissement, qu'on aborde dans les parties 4 et 5. L'inflation n'est pas une raison de paniquer, ni de foncer sur le premier placement venu \"pour se protéger\" : c'est une raison d'agir avec méthode, un étage après l'autre.",
        },
        {
          id: "l8",
          title: "Quiz : sécurité et pouvoir d'achat",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Tes dépenses mensuelles sont de 1 600 €. Quelle fourchette vise un fonds d'urgence de trois à six mois ?",
              options: [
                "1 600 € à 3 200 €",
                "3 200 € à 6 400 €",
                "4 800 € à 9 600 €",
                "9 600 € à 19 200 €",
              ],
              correctIndex: 2,
              explanation:
                "On calcule sur les dépenses, pas les revenus. Trois mois font 4 800 €, six mois font 9 600 €. Un indépendant ou un revenu unique visera plutôt le haut de la fourchette.",
            },
            {
              id: "q6",
              prompt:
                "Pourquoi le fonds d'urgence ne doit-il pas être investi en Bourse ?",
              options: [
                "Parce que la Bourse est interdite aux débutants",
                "Parce qu'il doit rester disponible et garanti, or les marchés peuvent chuter au moment où l'on en a besoin",
                "Parce que les livrets rapportent toujours plus que la Bourse",
                "Parce que la Bourse ne verse jamais d'argent avant dix ans",
              ],
              correctIndex: 1,
              explanation:
                "Un fonds d'urgence privilégie la disponibilité et la garantie du capital avant le rendement. Urgences et krachs surviennent souvent ensemble : être forcé de vendre en pleine baisse transformerait le coussin de sécurité en perte.",
            },
            {
              id: "q7",
              prompt:
                "Un livret rapporte 3 % pendant que l'inflation est de 5 %. Que se passe-t-il pour ton pouvoir d'achat ?",
              options: [
                "Il augmente de 3 %",
                "Il augmente de 2 %",
                "Il baisse d'environ 2 %",
                "Il reste strictement identique",
              ],
              correctIndex: 2,
              explanation:
                "Le taux réel est le rendement moins l'inflation : 3 % − 5 % = −2 %. Le solde du compte grossit, mais ce qu'il permet d'acheter diminue d'environ 2 % par an.",
            },
            {
              id: "q8",
              prompt:
                "Tu gardes 1 000 € en liquide, sans les placer, avec une inflation de 2 % par an. Que valent-ils en pouvoir d'achat dans dix ans ?",
              options: [
                "Toujours 1 000 €",
                "Environ 820 €",
                "Environ 1 020 €",
                "Environ 1 200 €",
              ],
              correctIndex: 1,
              explanation:
                "À 2 % d'inflation sur dix ans, le pouvoir d'achat de 1 000 € tombe à environ 820 € d'aujourd'hui. Laisser dormir de grosses sommes en liquide revient à accepter cette érosion silencieuse.",
            },
            {
              id: "q26",
              prompt:
                "Tu es en CDD, seul revenu du foyer, avec 2 200 € de dépenses mensuelles. Quel premier palier de fonds d'urgence viser, et quelle cible finale ?",
              options: [
                "Palier de 2 200 €, cible d'environ 13 200 €",
                "Palier de 6 600 €, cible de 26 400 €",
                "Palier de 1 000 €, cible de 2 200 €",
                "Pas de fonds d'urgence : le découvert autorisé suffit",
              ],
              correctIndex: 0,
              explanation:
                "Situation instable et revenu unique : la cible est de six mois de dépenses, soit 13 200 €. Mais on commence par un palier d'un mois (2 200 €), qui couvre déjà la plupart des imprévus courants. Le découvert autorisé est l'inverse d'un fonds d'urgence : il coûte de l'argent.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Partie 3 : La dette, le crédit et les intérêts composés",
      lessons: [
        {
          id: "l9",
          title: "Le coût réel de la dette et le piège du revolving",
          type: "text",
          duration: "17 min",
          body:
            "## Toutes les dettes ne se valent pas\n\n" +
            "Il y a la dette qui construit et la dette qui détruit. Un prêt immobilier à taux raisonnable finance un bien qui a de la valeur : c'est un outil. Un crédit renouvelable qui finance des vacances déjà oubliées, à 20 % d'intérêts, c'est un boulet. Savoir distinguer les deux, et surtout savoir lire le prix d'un crédit, évite des années d'ennuis.\n\n" +
            "## Le TAEG, le seul chiffre qui dit la vérité\n\n" +
            "Ne regarde jamais le taux nominal seul, ni la mensualité isolée. Regarde le TAEG, le taux annuel effectif global. Il intègre le taux d'intérêt, les frais de dossier, l'assurance emprunteur exigée et les frais annexes. C'est le coût total du crédit ramené à un pourcentage annuel, et c'est le seul chiffre comparable d'une offre à l'autre. La loi oblige à l'afficher sur toute publicité et toute offre de crédit, précisément pour empêcher les comparaisons truquées. Une pub qui met en avant \"4,9 %\" en gros et un TAEG de 8,7 % en petit te dit tout ce que tu as besoin de savoir sur son honnêteté.\n\n" +
            "## Le crédit renouvelable, le plus cher de tous\n\n" +
            "Le crédit renouvelable (ou \"revolving\"), souvent adossé à une carte de magasin, affiche des TAEG parmi les plus élevés du marché légal : fréquemment autour de 18 à 22 % pour les petits montants, tout près du taux d'usure, le plafond légal publié chaque trimestre par la Banque de France. Sa mécanique est bien huilée : des mensualités minimales si faibles qu'elles couvrent à peine les intérêts. Le capital ne descend presque pas, et la dette s'étire sur des années.\n\n" +
            "## L'exemple complet, ligne à ligne\n\n" +
            "Tu finances 3 000 € sur un crédit renouvelable à 20 % de TAEG, et tu rembourses le minimum, disons 60 € par mois. Un TAEG de 20 % correspond à un taux mensuel d'environ 1,53 %. Déroulons les premiers mois :\n\n" +
            "| Mois | Intérêts | Capital remboursé | Restant dû |\n" +
            "| --- | --- | --- | --- |\n" +
            "| 1 | 3 000 × 1,53 % = 45,90 € | 60 − 45,90 = 14,10 € | 2 985,90 € |\n" +
            "| 2 | 45,68 € | 14,32 € | 2 971,58 € |\n" +
            "| 3 | 45,46 € | 14,54 € | 2 957,04 € |\n\n" +
            "Regarde bien la deuxième colonne : sur 60 € versés, les trois quarts partent en intérêts. À ce rythme, il faut environ huit ans pour solder les 3 000 €, et tu auras versé autour de 5 700 € au total, soit quelque 2 700 € d'intérêts. Presque le prix de l'achat, une deuxième fois.\n\n" +
            "Le même besoin financé par un prêt personnel classique à 6 % de TAEG sur 36 mois donne une mensualité d'environ 91 €, un total remboursé d'environ 3 280 €, et c'est fini en trois ans, date connue d'avance. Écart entre les deux solutions : environ 2 400 €. Pour le même canapé.\n\n" +
            "> À retenir : la mensualité faible n'est pas un cadeau, c'est le piège. Plus tu rembourses lentement, plus le prêteur gagne. Le crédit renouvelable est conçu pour durer, pas pour te rendre service.\n\n" +
            "## Le taux d'usure, le plafond légal\n\n" +
            "Un crédit ne peut pas coûter n'importe quoi : la Banque de France publie chaque trimestre des taux d'usure, c'est-à-dire des TAEG maximaux au-delà desquels prêter est interdit. Ils varient selon le type et le montant du crédit ; pour les petits crédits à la consommation, le plafond tourne autour de 20 % et quelques. Deux leçons à en tirer. D'abord, si on te propose un financement dont le coût total dépasse largement ces ordres de grandeur (les arnaques ne s'embarrassent pas de la loi), fuis. Ensuite, remarque que le crédit renouvelable campe en permanence juste sous ce plafond : il coûte à peu près le maximum que la loi autorise. Ce n'est pas un hasard, c'est un modèle économique.\n\n" +
            "## Les pièges de frais qui vont avec\n\n" +
            "Trois classiques à connaître. Le découvert non autorisé : agios majorés plus commissions d'intervention, plafonnées à 8 € par opération et 80 € par mois, qui tombent en rafale sur un compte qui dérape. Le paiement en \"3 ou 4 fois sans frais\" : sans frais si tout se passe bien, mais avec des pénalités salées au premier incident, et surtout un empilement qui masque le total engagé (trois achats en quatre fois = sept prélèvements qui se chevauchent le mois suivant). Le rachat de crédits enfin : parfois utile pour sortir la tête de l'eau, mais souvent vendu avec un allongement de durée qui augmente le coût total. Là encore, le TAEG et le coût total tranchent.\n\n" +
            "## À toi\n\n" +
            "Une carte de magasin te propose 1 500 € à 21 % de TAEG (taux mensuel environ 1,60 %), mensualité minimale 30 €. Calcule les intérêts du premier mois et la part du capital réellement remboursée. Qu'en conclus-tu ?\n\n" +
            "> Correction : intérêts du mois 1 = 1 500 × 1,60 % = 24 €. Capital remboursé : 30 − 24 = 6 €. Sur ta première mensualité, 80 % partent en intérêts, et il te reste 1 494 € à rembourser. À ce rythme, la dette durera des années. Si tu dois emprunter, un prêt personnel amortissable à TAEG affiché, avec une date de fin, est presque toujours moins cher.\n\n" +
            "## La règle de bon sens\n\n" +
            "Rembourser une dette à 20 % équivaut à un placement garanti à 20 %, sans risque et sans impôt. Aucun investissement légal ne bat ça de façon certaine. Tant que tu traînes un crédit conso cher, la priorité absolue de tes 20 % d'épargne, c'est de l'éteindre. La leçon suivante donne la méthode.",
        },
        {
          id: "l10",
          title: "Rembourser vite : boule de neige et avalanche",
          type: "text",
          duration: "15 min",
          body:
            "## Deux méthodes, un même objectif\n\n" +
            "Quand on a plusieurs dettes à la fois, la question est : par laquelle commencer ? Deux stratégies éprouvées répondent, avec des logiques opposées. Pour les comparer honnêtement, on va suivre le même ménage du début à la fin.\n\n" +
            "Situation de départ, 250 € disponibles chaque mois en plus des minimums :\n\n" +
            "| Dette | Solde | TAEG | Minimum |\n" +
            "| --- | --- | --- | --- |\n" +
            "| Carte de magasin (revolving) | 2 800 € | 20 % | 56 € |\n" +
            "| Découvert consolidé | 900 € | 8 % | 25 € |\n" +
            "| Prêt auto | 6 500 € | 5 % | 190 € |\n\n" +
            "## La méthode avalanche : la plus rationnelle\n\n" +
            "On classe les dettes du taux le plus élevé au plus faible, on paie le minimum sur toutes, et tout l'argent disponible en plus va sur la dette au taux le plus haut. Ici : le revolving reçoit 56 + 250 = 306 € par mois. À ce rythme, il est soldé en une dizaine de mois. On bascule alors les 306 € sur le découvert (8 %), soldé en trois mois, puis tout le monde converge sur le prêt auto. Mathématiquement, c'est imbattable : tu paies le moins d'intérêts au total, parce que tu tues d'abord ce qui coûte le plus cher. Sur cet exemple, l'avalanche fait économiser plusieurs centaines d'euros d'intérêts par rapport à un remboursement dispersé.\n\n" +
            "## La méthode boule de neige : la plus motivante\n\n" +
            "On classe cette fois du plus petit solde au plus gros, sans regarder le taux. Ici : le découvert d'abord (900 €, soldé en un peu plus de trois mois avec 275 € par mois), puis le revolving, puis l'auto. La victoire rapide donne un élan psychologique réel, et la mensualité libérée roule sur la dette suivante en grossissant, d'où le nom. Le coût : quelques mois de plus à payer 20 % sur le revolving, donc un total d'intérêts un peu plus élevé qu'avec l'avalanche.\n\n" +
            "## Laquelle choisir\n\n" +
            "Sur le papier, l'avalanche gagne toujours en euros. Dans la vraie vie, beaucoup de gens abandonnent avant la fin, et un plan abandonné a un rendement de zéro. La boule de neige, avec ses petites victoires rapides, tient mieux dans la durée pour ceux qui ont besoin d'encouragements. Mon avis, après des années d'ateliers : si ta dette la plus chère est aussi une des plus grosses et que l'écart de taux est fort (comme ici, 20 % contre 8), serre les dents et prends l'avalanche. Si les taux se tiennent dans un mouchoir, prends la motivante. La meilleure méthode est celle que tu suivras jusqu'au bout.\n\n" +
            "> À retenir : ne paie jamais seulement le minimum sur plusieurs dettes en même temps sans stratégie. Concentre le feu sur une cible à la fois, minimum partout ailleurs. L'éparpillement est le meilleur allié des intérêts.\n\n" +
            "## Et le découvert bancaire ?\n\n" +
            "On l'oublie souvent dans la liste des dettes, parce qu'il ne ressemble pas à un crédit. C'en est un, et pas donné. Les agios (les intérêts du découvert) tournent selon les banques entre 7 et 16 % par an, et surtout, chaque dépassement du découvert autorisé déclenche des commissions d'intervention : 8 € par opération en général, plafonnées par la loi à 80 € par mois (4 € et 20 € pour les clients fragiles financièrement). Un mois avec dix prélèvements qui passent en dépassement, c'est 80 € partis en frais, soit plus que les intérêts annuels d'un vrai petit crédit. Si tu vis à découvert chronique, traite-le comme une dette à part entière : mets-le dans ta liste, avec son coût mensuel réel relevé sur ton relevé (les banques le détaillent, souvent en toute fin de document).\n\n" +
            "Corollaire pratique pendant le désendettement : garde toujours un mini-tampon de 300 à 500 € sur le compte courant, même si la logique voudrait que chaque euro aille aux dettes. Sans tampon, le moindre prélèvement imprévu te renvoie en dépassement, et les 80 € de commissions mangent l'effort du mois. Rembourser vite, oui ; rembourser au point de replonger dans les frais, non.\n\n" +
            "## Deux accélérateurs à connaître\n\n" +
            "D'abord, le remboursement anticipé : sur un crédit conso, tu peux rembourser par anticipation à tout moment, et en dessous de 10 000 € remboursés sur douze mois, sans indemnité. Une prime, un remboursement d'impôt, une vente sur Leboncoin : tout peut aller taper le capital de la dette cible. Ensuite, la renégociation : un prêt personnel à 6 % peut parfois racheter un revolving à 20 %. Compare les TAEG et le coût total, pas les mensualités.\n\n" +
            "## À toi\n\n" +
            "Tu as trois dettes : 400 € à 16 %, 3 200 € à 19 %, 5 000 € à 4 %. Quel ordre d'attaque en avalanche ? Et en boule de neige ?\n\n" +
            "> Correction : avalanche = 3 200 € à 19 %, puis 400 € à 16 %, puis 5 000 € à 4 %. Boule de neige = 400 €, puis 3 200 €, puis 5 000 €. Remarque que les deux méthodes gardent le prêt à 4 % pour la fin : une dette bon marché n'est jamais une urgence. Ici la boule de neige est défendable, la petite dette à 16 % étant soldée en quelques semaines avant de rejoindre le gros morceau à 19 %.\n\n" +
            "Dernier geste concret : liste tes dettes dans un tableur, solde, taux, minimum. Choisis ta méthode, et flèche chaque euro disponible sur la cible désignée. Regarder la première dette disparaître est souvent le déclic qui change tout le reste.",
        },
        {
          id: "l11",
          title: "Les intérêts composés, la force qui joue pour ou contre toi",
          type: "text",
          duration: "17 min",
          body:
            "## Le mécanisme\n\n" +
            "Les intérêts simples se calculent toujours sur le capital de départ. Les intérêts composés se calculent sur le capital plus les intérêts déjà accumulés : tes intérêts produisent eux-mêmes des intérêts. Sur un an, la différence est invisible. Sur trente ans, elle est monumentale. C'est la même force qui gonfle un placement patient et qui étouffe l'emprunteur d'un revolving.\n\n" +
            "Vérifions sur 1 000 € à 5 % : année 1, 1 000 + 50 = 1 050 €. Année 2, les 5 % s'appliquent à 1 050 €, soit 52,50 € d'intérêts : 1 102,50 €. Année 3 : 1 157,63 €. Les intérêts annuels grossissent chaque année (50, puis 52,50, puis 55,13) alors que tu n'as rien reversé. En intérêts simples, tu toucherais 50 € par an pour toujours. Au bout de 30 ans : 4 322 € en composé, 2 500 € en simple. Même capital, même taux.\n\n" +
            "## La règle des 72, à connaître par cœur\n\n" +
            "Pour estimer en combien d'années une somme double, divise 72 par le taux annuel. À 6 %, un capital double en 72 ÷ 6 = 12 ans environ. À 3 %, 24 ans. À 9 %, 8 ans. C'est une approximation, mais elle donne l'ordre de grandeur sans calculatrice, et elle marche dans les deux sens : une dette à 18 % non remboursée double en 4 ans.\n\n" +
            "## L'exemple qui frappe\n\n" +
            "Tu verses 100 € par mois sur un placement qui rapporte 5 % par an en moyenne, pendant 30 ans. Sorti de ta poche : 100 × 12 × 30 = 36 000 €. Valeur du placement au bout de 30 ans : environ 83 000 €. Tu as mis 36 000 €, le reste, près de 47 000 €, a été fabriqué par les intérêts composés. Plus de la moitié du résultat ne vient pas de ton épargne, mais du temps.\n\n" +
            "```figure\n" +
            "{\"caption\": \"100 € par mois à 5 % pendant 30 ans : la courbe décolle de la ligne des versements, et l'écart, c'est les intérêts composés\"}\n" +
            "<svg viewBox='0 0 640 360' role='img'><title>Courbe des intérêts composés : valeur du placement contre versements cumulés</title><line x1='60' y1='320' x2='620' y2='320' stroke='currentColor' opacity='0.6'/><line x1='60' y1='320' x2='60' y2='40' stroke='currentColor' opacity='0.6'/><text x='340' y='348' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>années</text><text x='153' y='336' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>5</text><text x='247' y='336' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>10</text><text x='340' y='336' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>15</text><text x='433' y='336' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>20</text><text x='527' y='336' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>25</text><text x='608' y='336' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>30</text><polyline points='60,320 620,216' fill='none' stroke='currentColor' opacity='0.5' stroke-dasharray='6 4' stroke-width='2'/><polyline points='60,320 153,300 247,275 340,243 433,201 527,148 620,80' fill='none' class='fig-accent' stroke-width='3'/><text x='400' y='260' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>versements : 36 000 €</text><text x='400' y='120' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>valeur : ≈ 83 000 €</text><line x1='620' y1='216' x2='620' y2='80' stroke='currentColor' opacity='0.5'/><text x='614' y='160' text-anchor='end' font-family='ui-monospace, monospace' font-size='12' fill='currentColor'>≈ 47 000 € d'intérêts</text></svg>\n" +
            "```\n\n" +
            "## La formule, pour les curieux\n\n" +
            "Tout tient dans une ligne : valeur finale = capital × (1 + taux)^années. Prends 5 000 € placés à 4 % pendant 10 ans. Le calcul : 1,04 puissance 10 donne environ 1,4802. Donc 5 000 × 1,4802 = 7 401 €. Vérifie à la main sur les premières années si tu veux sentir la mécanique : fin d'année 1, 5 000 × 1,04 = 5 200 €. Fin d'année 2, 5 200 × 1,04 = 5 408 € ; note que la deuxième année rapporte 208 € et non 200 €, les 8 € de plus sont les intérêts des intérêts. Fin d'année 3, 5 408 × 1,04 = 5 624,32 €. L'écart grossit chaque année, silencieusement. Dans un tableur, la fonction fait le travail : =5000*(1,04)^10. Pour des versements mensuels, la formule exacte est plus lourde, mais tu n'en as pas besoin : une colonne par mois avec =mois_precedent*1,00327+100 (4 % annuel vaut à peu près 0,327 % mensuel) te donne le résultat et, surtout, te le fait comprendre.\n\n" +
            "## Pourquoi ton cerveau sous-estime toujours le résultat\n\n" +
            "Fais le test autour de toi : demande combien donnent 100 € par mois pendant 40 ans à 5 %. La plupart des gens répondent entre 60 000 et 80 000 €. La vraie réponse dépasse 148 000 €. Ce n'est pas un manque d'intelligence, c'est un biais documenté : notre intuition extrapole en ligne droite, alors que la capitalisation suit une courbe qui s'accélère. Les premières années confirment d'ailleurs l'intuition, la courbe colle presque à la droite, et c'est exactement là que les gens abandonnent, déçus. La divergence explose sur la deuxième moitié du parcours. Conséquence pratique : ne juge jamais un plan d'épargne long terme sur ses trois premières années, tu regardes la partie de la courbe qui ne prouve rien. Et méfie-toi du biais dans l'autre sens : ceux qui vendent du rêve exploitent la même incompréhension en te montrant des projections à 15 ou 20 % par an, où l'exponentielle produit des chiffres délirants et impossibles à tenir.\n\n" +
            "## Le facteur décisif : commencer tôt\n\n" +
            "Comparons deux personnes, même rendement moyen de 5 %.\n\n" +
            "- Camille verse 200 € par mois de 25 à 65 ans, soit 40 ans. Versé : 96 000 €. Résultat : environ 305 000 €.\n" +
            "- Julien verse aussi 200 € par mois, mais de 35 à 65 ans, soit 30 ans. Versé : 72 000 €. Résultat : environ 166 000 €.\n\n" +
            "Camille n'a versé que 24 000 € de plus que Julien, mais elle finit avec près de 140 000 € de plus. Les dix années de départ, celles où le capital est petit et où on a l'impression que ça ne sert à rien, sont en réalité les plus puissantes, parce que chaque euro versé a quarante ans pour composer.\n\n" +
            "> À retenir : en investissement de long terme, le temps compte plus que le montant. Mieux vaut 50 € par mois à 25 ans que 200 € à 40 ans. Les années perdues ne se rattrapent jamais vraiment.\n\n" +
            "## À toi\n\n" +
            "Avec la règle des 72 : à 4 % par an, en combien d'années ton capital double-t-il ? Et combien vaut environ un capital de 10 000 € laissé 36 ans à 4 % ?\n\n" +
            "> Correction : 72 ÷ 4 = 18 ans pour doubler. En 36 ans, il double deux fois : 10 000 → 20 000 → 40 000 €. Le calcul exact donne 41 039 €, la règle des 72 tombe à 3 % près. Pas mal pour un calcul de tête.\n\n" +
            "## Le revers de la médaille\n\n" +
            "Cette même mécanique joue contre toi sur une dette non remboursée. Des intérêts à 20 % qui se composent sur un revolving font gonfler la somme due à la même vitesse qu'ils feraient grossir un placement, en pire : personne ne t'envoie de relevé triomphant quand ta dette a doublé. C'est pourquoi éteindre une dette chère avant d'investir n'est pas une option de prudence, c'est de l'arithmétique.",
        },
        {
          id: "l12",
          title: "Quiz : dette et intérêts composés",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Pourquoi le TAEG est-il le bon chiffre pour comparer deux crédits ?",
              options: [
                "Parce qu'il correspond à la mensualité",
                "Parce qu'il intègre le taux, les frais de dossier, l'assurance et les frais annexes",
                "Parce qu'il est toujours plus bas que le taux nominal",
                "Parce qu'il est fixé librement par l'emprunteur",
              ],
              correctIndex: 1,
              explanation:
                "Le TAEG regroupe l'ensemble des coûts du crédit en un pourcentage annuel comparable. Le taux nominal ou la seule mensualité peuvent masquer des frais qui alourdissent la note.",
            },
            {
              id: "q10",
              prompt:
                "Selon la règle des 72, en combien d'années un capital double-t-il à 6 % par an ?",
              options: ["Environ 6 ans", "Environ 12 ans", "Environ 18 ans", "Environ 24 ans"],
              correctIndex: 1,
              explanation:
                "72 ÷ 6 = 12. La règle des 72 donne rapidement l'ordre de grandeur du temps de doublement : à 3 % il faut 24 ans, à 9 % environ 8 ans. Elle marche aussi pour les dettes.",
            },
            {
              id: "q11",
              prompt:
                "En versant 100 €/mois à 5 % pendant 30 ans, on verse 36 000 € de sa poche. Le placement vaut environ 83 000 €. Que représentent les ~47 000 € restants ?",
              options: [
                "Une prime versée par la banque",
                "Les intérêts composés générés par le temps",
                "Une erreur de calcul, c'est impossible",
                "Le remboursement d'un crédit",
              ],
              correctIndex: 1,
              explanation:
                "Plus de la moitié du résultat provient des intérêts composés, pas des versements. Les intérêts produisent à leur tour des intérêts, et sur trente ans cet effet dépasse l'apport personnel.",
            },
            {
              id: "q12",
              prompt:
                "Tu as un crédit renouvelable à 20 % et 500 € à placer. Quel est le choix le plus rationnel ?",
              options: [
                "Investir les 500 € en Bourse pour viser plus de 20 %",
                "Les laisser sur le compte courant par précaution",
                "Rembourser le crédit à 20 %, équivalent à un rendement garanti de 20 %",
                "Ouvrir un nouveau livret d'épargne",
              ],
              correctIndex: 2,
              explanation:
                "Éteindre une dette à 20 % équivaut à un placement garanti à 20 %, sans risque ni impôt. Aucun investissement légal ne bat cela de façon certaine : tant que la dette chère existe, elle est la priorité.",
            },
            {
              id: "q27",
              prompt:
                "Sur un revolving de 3 000 € à 20 % de TAEG (environ 1,53 % par mois), tu paies la mensualité minimale de 60 €. Que se passe-t-il le premier mois ?",
              options: [
                "60 € de capital sont remboursés",
                "Environ 46 € partent en intérêts, 14 € seulement en capital",
                "La dette est réduite de 20 %",
                "Les intérêts ne courent qu'à partir du deuxième mois",
              ],
              correctIndex: 1,
              explanation:
                "Intérêts du mois : 3 000 × 1,53 % ≈ 45,90 €. Sur les 60 € versés, il ne reste que 14,10 € pour réduire le capital. C'est le cœur du piège : la mensualité minimale entretient la dette au lieu de l'éteindre.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Partie 4 : Les enveloppes d'épargne françaises",
      lessons: [
        {
          id: "l13",
          title: "La hiérarchie de l'épargne : dans quel ordre remplir",
          type: "text",
          duration: "15 min",
          body:
            "## Pourquoi un ordre\n\n" +
            "On ne remplit pas toutes les enveloppes en même temps. Il existe un ordre de priorité qui fait consensus chez à peu près tous les gens sérieux, parce qu'il traite d'abord les risques les plus coûteux avant de chercher le rendement. Le suivre évite l'erreur classique du débutant enthousiaste : ouvrir un compte de Bourse tout en traînant un crédit conso à 18 % et zéro épargne de secours. C'est comme installer un home cinéma dans une maison dont le toit fuit.\n\n" +
            "## L'échelle, du plus urgent au plus lointain\n\n" +
            "1. Éteindre les dettes chères. Tout crédit au-dessus de 8 à 10 % de TAEG passe avant le reste. On l'a vu en partie 3 : c'est un rendement garanti, net d'impôt.\n" +
            "2. Constituer le fonds d'urgence. Trois à six mois de dépenses sur un livret disponible. C'est le filet qui empêche de retomber dans le crédit au premier pépin.\n" +
            "3. Épargner les projets à court terme. Achat prévu dans un à trois ans, apport immobilier, voyage : sur des supports sûrs et liquides, jamais en Bourse.\n" +
            "4. Investir le long terme. L'argent dont tu n'auras pas besoin avant huit ou dix ans peut viser un rendement supérieur, en acceptant les fluctuations.\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'ordre de remplissage : chaque étage protège celui du dessus, on ne saute pas de marche\"}\n" +
            "<svg viewBox='0 0 640 400' role='img'><title>Ordre de priorité : dettes chères, fonds d'urgence, projets courts, long terme</title><rect x='90' y='20' width='460' height='62' class='fig-accent'/><text x='320' y='46' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>1. Éteindre les dettes chères (TAEG &gt; 8-10 %)</text><text x='320' y='68' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor'>= rendement garanti, net d'impôt</text><line x1='320' y1='82' x2='320' y2='108' stroke='currentColor' opacity='0.5'/><path d='M314 102 L320 112 L326 102 Z' fill='currentColor' opacity='0.5'/><rect x='90' y='116' width='460' height='62' rx='4' fill='none' stroke='currentColor' opacity='0.75'/><text x='320' y='142' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>2. Fonds d'urgence : 3 à 6 mois de dépenses</text><text x='320' y='164' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>Livret A / LDDS / LEP</text><line x1='320' y1='178' x2='320' y2='204' stroke='currentColor' opacity='0.5'/><path d='M314 198 L320 208 L326 198 Z' fill='currentColor' opacity='0.5'/><rect x='90' y='212' width='460' height='62' rx='4' fill='none' stroke='currentColor' opacity='0.75'/><text x='320' y='238' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>3. Projets à moins de 3 ans</text><text x='320' y='260' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>supports sûrs et liquides, pas de Bourse</text><line x1='320' y1='274' x2='320' y2='300' stroke='currentColor' opacity='0.5'/><path d='M314 294 L320 304 L326 294 Z' fill='currentColor' opacity='0.5'/><rect x='90' y='308' width='460' height='62' rx='4' fill='none' stroke='currentColor' opacity='0.75'/><text x='320' y='334' text-anchor='middle' font-family='ui-monospace, monospace' font-size='14' fill='currentColor'>4. Long terme : 8 ans et plus</text><text x='320' y='356' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>PEA, assurance-vie : rendement espéré contre fluctuations</text></svg>\n" +
            "```\n\n" +
            "## La logique horizon-risque\n\n" +
            "Chaque étage correspond à un horizon de temps. Plus l'argent sera utilisé bientôt, plus il doit être sûr et disponible, quitte à peu rapporter. Plus l'horizon est lointain, plus on peut accepter des variations en échange d'un rendement espéré plus élevé. Mélanger les horizons est l'erreur reine, dans les deux sens : placer en Bourse l'argent d'un achat prévu dans six mois (et risquer de vendre à −20 % le jour du besoin), ou laisser sur un livret à 2 % l'épargne retraite de tes 30 ans (et regarder l'inflation la ronger pendant trois décennies).\n\n" +
            "> À retenir : associe chaque euro à une échéance avant de choisir où le mettre. La question n'est pas \"quel placement rapporte le plus\", mais \"quand ai-je besoin de cet argent\". La réponse dicte le support.\n\n" +
            "## Les cas limites, où les maths et la tête se disputent\n\n" +
            "L'échelle tranche facilement les extrêmes : un revolving à 20 % passe avant tout, un livret à 2,4 % attend son tour. La zone grise, ce sont les dettes entre 4 et 6 % : un prêt auto, un prêt travaux. Mathématiquement, c'est un match à peu près nul avec un investissement long terme espéré autour de 5 à 7 %, sauf que le remboursement est un gain certain et l'investissement une espérance. Deux réponses défendables : le puriste continue à rembourser au rythme prévu et investit le surplus ; le prudent solde d'abord, dort mieux, et investit ensuite. Les deux stratégies se tiennent, choisis celle que tu tiendras dix ans. Ce qui ne se tient pas, c'est d'investir en Bourse avec un revolving à 20 % sur les bras : là, les maths sont sans appel.\n\n" +
            "## L'exception qui saute la file\n\n" +
            "Une seule situation justifie d'épargner \"long terme\" avant même d'avoir fini le fonds d'urgence : l'épargne salariale avec abondement. Si ton employeur propose un PEE et abonde tes versements (par exemple 100 % de ce que tu verses, jusqu'à 300 € par an), chaque euro versé en rapporte immédiatement un deuxième. Aucun placement au monde n'offre un rendement instantané de 100 %. Verse au moins le montant qui déclenche l'abondement maximal, même pendant ta phase de désendettement léger ; les sommes sont bloquées 5 ans (avec des cas de déblocage anticipé prévus par la loi, comme l'achat de la résidence principale), mais l'argent gratuit ne repasse pas deux fois.\n\n" +
            "## Un cas pratique complet\n\n" +
            "Karim, 31 ans, a 6 000 € qui dorment sur son compte courant, un crédit auto de 3 000 € restant à 4,5 %, une carte de magasin de 1 200 € à 19 %, et 1 500 € de dépenses mensuelles. Que fait l'échelle ? Étage 1 : la carte à 19 % saute tout de suite, moins 1 200 €. Le crédit auto à 4,5 % est sous le seuil de 8-10 %, il reste en mensualités normales. Étage 2 : cible de fonds d'urgence 4 500 € (trois mois, CDI stable), les 4 800 € restants la remplissent, et les 300 € en trop démarrent l'étage suivant. Résultat : dette chère éteinte, coussin plein, et seulement maintenant la question de l'investissement se pose, avec les versements mensuels futurs.\n\n" +
            "## À toi\n\n" +
            "Léa a 2 000 € de côté, un revolving de 800 € à 21 %, pas de fonds d'urgence, 1 400 € de dépenses par mois, et elle veut \"mettre 2 000 € en crypto parce que ça monte\". Déroule l'échelle pour elle.\n\n" +
            "> Correction : étage 1, solder le revolving : moins 800 €, il reste 1 200 €. Étage 2, fonds d'urgence : cible 4 200 € (trois mois), les 1 200 € y vont, il en manque 3 000 à constituer par virements mensuels. Étages 3 et 4 : plus tard. La crypto n'apparaît nulle part dans l'échelle avant que le coussin soit plein, et le \"parce que ça monte\" est exactement le réflexe qu'on désamorcera en partie 6.\n\n" +
            "## Où se rangent les enveloppes françaises\n\n" +
            "Dans les leçons suivantes, on place les outils réels sur cette échelle. Livret A, LDDS et LEP servent les étages 2 et 3 : sécurité et court terme. L'assurance-vie et le PEA servent surtout l'étage 4, l'investissement long terme, chacun avec sa logique et sa fiscalité. Une fois l'ordre compris, le choix des enveloppes devient évident au lieu d'angoissant.",
        },
        {
          id: "l14",
          title: "Livret A, LDDS, LEP : la base sûre et liquide",
          type: "text",
          duration: "15 min",
          body:
            "## Le Livret A\n\n" +
            "C'est le livret d'épargne réglementé le plus répandu en France, environ 57 millions de détenteurs. Ses règles sont fixées par l'État, pas par la banque, ce qui le rend rigoureusement identique partout : inutile de comparer les offres, il n'y en a qu'une. Le plafond de versement est de 22 950 € pour une personne. L'argent est disponible à tout moment, le capital est garanti, et les intérêts sont totalement exonérés d'impôt sur le revenu et de prélèvements sociaux. On ne peut détenir qu'un seul Livret A par personne : en ouvrir deux est illégal et les banques croisent leurs fichiers.\n\n" +
            "Détail utile que peu de gens connaissent : les intérêts se calculent par quinzaine. Un dépôt fait le 3 du mois ne produit des intérêts qu'à partir du 16, un retrait fait le 30 coûte la quinzaine entière. Pour optimiser, dépose juste avant le 1er ou le 16, retire juste après. Ça ne changera pas ta vie, mais c'est le genre de mécanique qu'un épargnant averti connaît.\n\n" +
            "## Le LDDS\n\n" +
            "Le Livret de Développement Durable et Solidaire fonctionne exactement comme le Livret A : même taux, même disponibilité, mêmes exonérations, même calcul par quinzaine. Son plafond est de 12 000 €. On peut cumuler un Livret A et un LDDS, ce qui porte l'enveloppe défiscalisée à près de 35 000 € par personne. Pour un couple, on double.\n\n" +
            "## Le LEP, le meilleur livret de France pour ceux qui y ont droit\n\n" +
            "Le Livret d'Épargne Populaire est réservé aux foyers dont le revenu fiscal de référence ne dépasse pas un plafond (de l'ordre de 22 800 € pour une part fiscale, réévalué chaque année : vérifie le seuil en vigueur sur service-public.fr avec ton avis d'imposition sous les yeux). Son taux est nettement supérieur à celui du Livret A, avec un plancher légal calé sur l'inflation, pour un plafond de versement de 10 000 €. Des millions de personnes éligibles ne l'ont pas ouvert : c'est de l'argent laissé sur la table. Si tu es éligible, le LEP passe devant le Livret A dans l'ordre de remplissage, point.\n\n" +
            "## Et les livrets bancaires ordinaires ?\n\n" +
            "Ta banque te proposera un jour son propre livret, parfois habillé d'un taux \"boosté\". Lis les conditions avant de signer : le taux promotionnel (3 % ou 4 % affichés en gros) ne dure en général que deux ou trois mois et sur un plafond de versement limité, puis retombe sur un taux de base souvent inférieur à 1 %. Surtout, ces livrets sont fiscalisés : les intérêts subissent le prélèvement forfaitaire de 30 % (impôt plus prélèvements sociaux). Un livret bancaire à 2 % net d'affichage rapporte donc 1,4 % dans ta poche, quand le Livret A à 2,4 % te donne 2,4 % tout rond. Tant que tes livrets réglementés ne sont pas pleins, les livrets bancaires ordinaires ne servent à rien. Ils redeviennent une option (faute de mieux, pour du court terme) uniquement une fois Livret A, LDDS et éventuel LEP remplis à ras bord.\n\n" +
            "## Le Livret Jeune, pour les 12-25 ans\n\n" +
            "Si tu as moins de 25 ans, ou pour tes enfants : le Livret Jeune offre un taux librement fixé par chaque banque mais toujours au moins égal à celui du Livret A, exonéré d'impôt lui aussi. Son plafond est modeste, 1 600 €, mais c'est un excellent premier réceptacle de fonds d'urgence pour un étudiant, cumulable avec un Livret A. À 25 ans, il se clôture et bascule vers les livrets adultes.\n\n" +
            "## Le taux, un point de vigilance\n\n" +
            "Le taux du Livret A et du LDDS est révisé jusqu'à deux fois par an selon une formule officielle liée à l'inflation et aux taux interbancaires. Il a été de 3 % en 2023 et 2024, puis a baissé par paliers en 2025 quand l'inflation a reflué. Retiens le principe plus que le chiffre : ce taux bouge, et il peut passer sous l'inflation comme en 2022-2023. Vérifie toujours le taux en vigueur au moment où tu lis, sur service-public.fr.\n\n" +
            "Dernier détail pratique qui étonne toujours : les intérêts des livrets se calculent par quinzaines. Un dépôt effectué le 2 du mois ne produit des intérêts qu'à partir du 16, un retrait le 30 fait perdre la quinzaine entamée. Sur un fonds d'urgence, l'enjeu se compte en centimes, mais si tu déplaces un jour de grosses sommes entre livrets, dépose juste avant le 1er ou le 16, et retire juste après.\n\n" +
            "## À quoi ils servent, à quoi ils ne servent pas\n\n" +
            "Ces livrets sont parfaits pour le fonds d'urgence et l'épargne de court terme : sûrs, liquides, sans fiscalité, sans frais. Ils sont mauvais pour faire fructifier une épargne de long terme, car leur rendement suit à peine l'inflation, voire passe dessous. Y laisser dormir 35 000 € pendant vingt ans, c'est accepter que l'inflation les grignote année après année, en toute sécurité apparente.\n\n" +
            "> À retenir : le Livret A n'est pas un placement pour s'enrichir, c'est un placement pour ne pas se faire surprendre. Utilise-le pour sa sécurité et sa disponibilité, pas pour son rendement.\n\n" +
            "## À toi\n\n" +
            "Un couple (deux adultes, revenu fiscal modeste, les deux éligibles au LEP) veut loger 30 000 € d'épargne de précaution et de projets courts au meilleur taux sans risque. Comment répartir ?\n\n" +
            "> Correction : d'abord les deux LEP, au taux le plus haut : 2 × 10 000 = 20 000 €. Les 10 000 € restants vont sur un Livret A ou un LDDS (plafonds largement suffisants). Tout est garanti, disponible, défiscalisé, et la part la plus grosse profite du meilleur taux. Le seul travail restant : vérifier chaque année que le foyer reste éligible au LEP, la banque le contrôle auprès du fisc.",
        },
        {
          id: "l15",
          title: "L'assurance-vie : l'enveloppe long terme souple",
          type: "text",
          duration: "17 min",
          body:
            "## Ce que c'est vraiment\n\n" +
            "Malgré son nom, l'assurance-vie n'est pas d'abord une assurance décès. C'est une enveloppe d'épargne et d'investissement, la plus utilisée de France avec environ 1 900 milliards d'euros d'encours. Tu y verses quand tu veux, tu retires quand tu veux (l'argent n'est pas bloqué, contrairement à une légende tenace), et à l'intérieur tu répartis ton argent entre deux grands types de supports.\n\n" +
            "## Fonds euros contre unités de compte\n\n" +
            "- Le fonds en euros : capital garanti par l'assureur, rendement modéré (de l'ordre de 2 à 3 % ces dernières années selon les contrats), intérêts définitivement acquis chaque année. C'est la partie sécurisée.\n" +
            "- Les unités de compte (UC) : fonds actions, ETF, immobilier (SCPI), obligations. Pas de garantie du capital, mais un potentiel de rendement supérieur. C'est la partie qui monte et qui descend.\n\n" +
            "Tu choisis la répartition selon ton horizon et ta tolérance au risque, et rien n'est figé : on peut arbitrer d'un support à l'autre au fil du temps, sans sortir de l'enveloppe ni déclencher d'impôt.\n\n" +
            "## La fiscalité, l'atout maître\n\n" +
            "Tant que l'argent reste dans le contrat, les gains ne sont pas imposés. L'impôt ne se déclenche qu'au moment d'un retrait (un \"rachat\"), et seulement sur la part de gains contenue dans le retrait, jamais sur le capital versé.\n\n" +
            "Le grand avantage arrive au bout de 8 ans de détention du contrat. À partir de là, tu bénéficies chaque année d'un abattement sur les gains retirés : 4 600 € pour une personne seule, 9 200 € pour un couple soumis à imposition commune. Exemple chiffré : après 8 ans, ton contrat vaut 40 000 € dont 8 000 € de gains (20 %). Tu retires 10 000 € : la part de gains dans ce retrait est de 20 %, soit 2 000 €, très en dessous de l'abattement de 4 600 €. Impôt sur le revenu : zéro. Restent les prélèvements sociaux de 17,2 % sur ces 2 000 € de gains, soit 344 €. Tu as récupéré 10 000 € en payant 344 €, soit 3,4 % de friction. Le même retrait sur un compte-titres ordinaire aurait coûté 30 % des gains, soit 600 €.\n\n" +
            "> À retenir : la date d'ouverture compte plus que les montants versés au début. Ouvrir un contrat tôt, même avec 50 €, fait tourner l'horloge des 8 ans. C'est le geste malin par excellence, il ne coûte rien et il ouvre des droits.\n\n" +
            "## Les frais, le point qui change tout\n\n" +
            "Tous les contrats ne se valent pas, et l'écart se joue sur les frais. Quatre lignes à vérifier avant de signer :\n\n" +
            "- Frais sur versement : 0 % chez les bons contrats en ligne, jusqu'à 3 à 5 % dans certains réseaux traditionnels. À 4 %, sur chaque versement de 500 €, 20 € s'évaporent avant même d'être placés. C'est un non absolu : des contrats sans frais d'entrée existent, prends-en un.\n" +
            "- Frais de gestion annuels du contrat : autour de 0,5 à 0,6 % en ligne, souvent 0,8 à 1 % au guichet.\n" +
            "- Frais des supports (le TER des fonds logés dedans, voir partie 5) : un ETF à 0,2 % contre un fonds maison à 2 %.\n" +
            "- Frais d'arbitrage : gratuits en ligne, parfois facturés ailleurs.\n\n" +
            "Sur trente ans, un point de frais annuels en trop ampute le capital final d'environ un quart. Ce n'est pas un détail de bas de page, c'est la différence entre deux retraites.\n\n" +
            "## La transmission, en deux mots\n\n" +
            "L'assurance-vie a un deuxième atout dont on parle moins à 30 ans mais qui compte dans un patrimoine : la transmission. À ton décès, les capitaux vont aux personnes désignées dans la clause bénéficiaire (que tu rédiges librement, et que tu peux modifier), en dehors des règles classiques de la succession. Pour les versements effectués avant tes 70 ans, chaque bénéficiaire profite d'un abattement de 152 500 € avant taxation. Concrètement, c'est l'un des outils les plus efficaces du droit français pour transmettre à qui tu veux, y compris hors famille. Retiens juste une règle d'hygiène : relis ta clause bénéficiaire après chaque événement de vie (mariage, séparation, naissance), une clause obsolète envoie l'argent à la mauvaise personne.\n\n" +
            "Un mot aussi sur la gestion pilotée que les contrats proposent presque tous : tu délègues les choix d'investissement contre des frais supplémentaires, souvent 0,2 à 1 % par an en plus des frais du contrat et des supports. Vu ce que la leçon sur les frais t'apprendra, regarde le total empilé avant d'accepter. Déléguer peut se justifier si ça t'évite de ne rien faire du tout ; payer 2,5 % de frais cumulés par an pour un portefeuille standardisé, non.\n\n" +
            "## Un cadre, pas un produit magique\n\n" +
            "L'assurance-vie ne rapporte rien en soi : tout dépend de ce que tu mets dedans. Un contrat rempli à 100 % de fonds euros aura un rendement proche d'un bon livret. Un contrat investi en UC actions sur le long terme suivra les marchés, avec leurs hauts et leurs bas. L'enveloppe optimise la fiscalité, elle ne crée pas la performance. Méfie-toi du discours commercial qui vend \"une assurance-vie\" comme si c'était un placement en soi : la vraie question est toujours \"remplie avec quoi, et à quels frais\".\n\n" +
            "## À toi\n\n" +
            "Ton contrat a 9 ans. Il vaut 30 000 € dont 6 000 € de gains. Tu retires 5 000 €, tu es célibataire. Combien d'impôt sur le revenu et de prélèvements sociaux ?\n\n" +
            "> Correction : part de gains du contrat : 6 000 ÷ 30 000 = 20 %. Gains contenus dans le retrait : 5 000 × 20 % = 1 000 €. C'est sous l'abattement de 4 600 €, donc impôt sur le revenu : 0 €. Prélèvements sociaux : 1 000 × 17,2 % = 172 €. Coût total du retrait : 172 €, soit 3,4 % du montant retiré.",
        },
        {
          id: "l16",
          title: "Le PEA : investir en actions avec une fiscalité douce",
          type: "text",
          duration: "16 min",
          body:
            "## Le principe\n\n" +
            "Le Plan d'Épargne en Actions est une enveloppe conçue pour investir en actions européennes et en fonds éligibles, avec une fiscalité avantageuse à la clé. C'est l'outil de référence des particuliers français qui investissent en Bourse sur le long terme, le plus souvent via des ETF.\n\n" +
            "## Le plafond\n\n" +
            "Le plafond de versement est de 150 000 € pour un PEA classique. C'est un plafond de versements, pas de valeur : si ton plan monte à 200 000 € grâce aux gains, aucun problème, et les gains peuvent continuer à composer sans limite. Il existe aussi le PEA-PME, dédié aux petites et moyennes entreprises, dont le plafond se cumule avec celui du PEA dans une limite globale de 225 000 €.\n\n" +
            "## La fiscalité, le vrai atout\n\n" +
            "Tout tourne autour des 5 ans. Après 5 ans de détention du plan, les gains sont exonérés d'impôt sur le revenu lors d'un retrait. Seuls les prélèvements sociaux de 17,2 % restent dus. Comparons sur 10 000 € de gains retirés :\n\n" +
            "| Enveloppe | Prélèvement | Il te reste |\n" +
            "| --- | --- | --- |\n" +
            "| Compte-titres ordinaire (PFU 30 %) | 3 000 € | 7 000 € |\n" +
            "| PEA après 5 ans (17,2 %) | 1 720 € | 8 280 € |\n\n" +
            "1 280 € d'écart sur ce seul retrait, uniquement grâce à l'enveloppe. Attention au piège des retraits précoces : avant 5 ans, un retrait entraîne en général la clôture du plan et la taxation des gains (sauf cas particuliers prévus par la loi, comme la création d'entreprise). La bonne pratique : n'y mettre que de l'argent dont tu n'auras pas besoin avant plusieurs années, et laisser le temps travailler.\n\n" +
            "> À retenir : comme pour l'assurance-vie, ouvre un PEA tôt, même avec 20 €, pour lancer le compteur des 5 ans. La date d'ouverture est un actif en soi.\n\n" +
            "## Ce qu'on peut y mettre\n\n" +
            "Le PEA accepte les actions de sociétés de l'Union européenne et les fonds investis à 75 % au moins en actions européennes. Bonne nouvelle pour les débutants : il existe des ETF éligibles au PEA qui répliquent des indices mondiaux de façon synthétique, ce qui permet une diversification internationale tout en gardant l'avantage fiscal du plan. On détaille les ETF dans la partie suivante.\n\n" +
            "Côté frais, la loi Pacte plafonne les frais du PEA (ouverture, tenue de compte, transaction) : un PEA chez un courtier en ligne coûte typiquement quelques euros par ordre, sans frais de garde. Là encore, compare avant d'ouvrir : les écarts de frais entre un PEA bancaire traditionnel et un courtier en ligne se comptent en centaines d'euros sur la durée.\n\n" +
            "## Ouvrir un PEA en pratique\n\n" +
            "Trois règles de fonctionnement à connaître avant d'ouvrir. Un : une seule personne ne peut détenir qu'UN seul PEA, et il faut être majeur et domicilié fiscalement en France. Ouvre-le même avec 10 €, c'est la date d'ouverture qui fait courir le compteur des 5 ans, pas les montants. Deux : le PEA se transfère d'un établissement à l'autre sans perdre son antériorité fiscale ; si ta banque te facture des frais élevés, tu n'es pas prisonnier, tu transfères (compte quelques semaines et parfois des frais de transfert, souvent remboursés par l'établissement d'arrivée). Trois : compare les frais de courtage avant de choisir où l'ouvrir, ils sont plafonnés par la loi (0,5 % maximum par ordre en ligne), mais l'écart entre une banque traditionnelle et un courtier en ligne reste sensible sur des ordres réguliers.\n\n" +
            "## Les erreurs de débutant sur PEA\n\n" +
            "Trois classiques à éviter. Retirer avant 5 ans par ignorance : un retrait précoce fait perdre l'avantage fiscal et, avant la loi Pacte, fermait carrément le plan ; aujourd'hui les règles se sont assouplies, mais le principe reste : n'y mets que de l'argent dont tu n'auras pas besoin avant longtemps. Laisser le cash dormir : verser sur le PEA ne suffit pas, l'argent reste en liquidités tant que tu n'as pas passé d'ordre, et des gens découvrent après trois ans que leurs versements n'ont jamais été investis. Multiplier les lignes : accumuler quinze actions et cinq ETF \"pour diversifier\" complique le suivi sans rien apporter ; un ou deux ETF larges couvrent déjà des centaines d'entreprises.\n\n" +
            "## La carte complète des enveloppes\n\n" +
            "Récapitulons les quatre familles vues dans cette partie, placées sur l'axe du temps :\n\n" +
            "```figure\n" +
            "{\"caption\": \"Les enveloppes françaises rangées par horizon : à chaque échéance son outil\"}\n" +
            "<svg viewBox='0 0 640 340' role='img'><title>Enveloppes françaises par horizon : livrets à court terme, PEA et assurance-vie à long terme</title><line x1='40' y1='290' x2='610' y2='290' stroke='currentColor' opacity='0.6'/><path d='M600 284 L612 290 L600 296 Z' fill='currentColor' opacity='0.6'/><text x='60' y='312' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>0 an</text><text x='230' y='312' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>3 ans</text><text x='360' y='312' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>5 ans</text><text x='500' y='312' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>8 ans +</text><rect x='60' y='36' width='190' height='54' rx='4' fill='none' stroke='currentColor' opacity='0.75'/><text x='155' y='58' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>Livret A / LDDS</text><text x='155' y='78' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>22 950 € / 12 000 €</text><rect x='60' y='104' width='190' height='54' rx='4' fill='none' stroke='currentColor' opacity='0.75'/><text x='155' y='126' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>LEP (si éligible)</text><text x='155' y='146' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>10 000 €, meilleur taux sûr</text><rect x='360' y='104' width='240' height='54' rx='4' class='fig-accent'/><text x='480' y='126' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>PEA : dès 5 ans</text><text x='480' y='146' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor'>150 000 €, IR exonéré, PS 17,2 %</text><rect x='430' y='172' width='170' height='54' rx='4' fill='none' stroke='currentColor' opacity='0.75'/><text x='515' y='194' text-anchor='middle' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>Assurance-vie</text><text x='515' y='214' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>abattement dès 8 ans</text><text x='60' y='250' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>court terme : sûr, liquide, défiscalisé</text><text x='360' y='250' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>long terme : fiscalité douce, fluctuations</text><line x1='250' y1='36' x2='250' y2='290' stroke='currentColor' opacity='0.3' stroke-dasharray='4 4'/></svg>\n" +
            "```\n\n" +
            "## PEA ou assurance-vie ?\n\n" +
            "Ce n'est pas un match, les deux sont complémentaires. Le PEA est imbattable pour les actions et ETF avec sa fiscalité légère dès 5 ans et ses frais plafonnés. L'assurance-vie offre plus de souplesse dans les supports (fonds euros pour la partie sécurisée, immobilier, obligations), pas de plafond de versement, et un cadre avantageux pour la transmission. Beaucoup d'épargnants organisés utilisent les deux, chacun pour ce qu'il fait de mieux. Le choix et le dosage dépendent de ta situation, que ce cours ne connaît pas : ceci reste une présentation générale des règles, pas une recommandation.\n\n" +
            "## À toi\n\n" +
            "Tu retires d'un PEA de 6 ans un montant contenant 4 000 € de gains. Même opération sur un compte-titres ordinaire au PFU. Combien de prélèvements dans chaque cas ?\n\n" +
            "> Correction : PEA après 5 ans : pas d'impôt sur le revenu, prélèvements sociaux 4 000 × 17,2 % = 688 €. Compte-titres : PFU 30 %, soit 4 000 × 30 % = 1 200 €. L'enveloppe fait économiser 512 € sur cette seule opération, sans rien changer au placement lui-même.",
        },
        {
          id: "l17",
          title: "Quiz : les enveloppes françaises",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Dans la hiérarchie de l'épargne, que faut-il faire avant de constituer son fonds d'urgence ?",
              options: [
                "Investir en Bourse pour ne pas rater le marché",
                "Éteindre les dettes chères, au-dessus de 8 à 10 %",
                "Remplir son PEA jusqu'au plafond",
                "Ouvrir une assurance-vie",
              ],
              correctIndex: 1,
              explanation:
                "Rembourser une dette chère équivaut à un rendement garanti et passe avant tout. Ensuite seulement vient le fonds d'urgence, puis les projets courts, puis l'investissement long terme.",
            },
            {
              id: "q14",
              prompt:
                "Quel est le plafond de versement du Livret A pour une personne ?",
              options: ["12 000 €", "22 950 €", "150 000 €", "Il n'y a pas de plafond"],
              correctIndex: 1,
              explanation:
                "Le Livret A est plafonné à 22 950 € de versements par personne. Le LDDS, plafonné à 12 000 €, se cumule avec lui pour porter l'épargne défiscalisée à près de 35 000 €.",
            },
            {
              id: "q15",
              prompt:
                "Au bout de combien d'années l'assurance-vie ouvre-t-elle un abattement annuel sur les gains retirés ?",
              options: ["2 ans", "5 ans", "8 ans", "15 ans"],
              correctIndex: 2,
              explanation:
                "À partir de 8 ans, l'abattement est de 4 600 € par an pour une personne seule et 9 200 € pour un couple. C'est pourquoi ouvrir un contrat tôt, même avec peu, lance une horloge fiscale précieuse.",
            },
            {
              id: "q16",
              prompt:
                "Sur un PEA, quelle est la fiscalité des gains lors d'un retrait après 5 ans ?",
              options: [
                "Exonération totale, aucun prélèvement",
                "Prélèvement forfaitaire unique de 30 %",
                "Exonération d'impôt sur le revenu, mais prélèvements sociaux de 17,2 % dus",
                "Imposition au barème progressif de l'impôt",
              ],
              correctIndex: 2,
              explanation:
                "Après 5 ans, le PEA exonère les gains d'impôt sur le revenu ; seuls les prélèvements sociaux de 17,2 % restent dus. C'est nettement plus léger que les 30 % du compte-titres ordinaire.",
            },
            {
              id: "q28",
              prompt:
                "Ton contrat d'assurance-vie de 9 ans vaut 30 000 € dont 6 000 € de gains. Tu retires 5 000 € (célibataire). Que paies-tu ?",
              options: [
                "0 € d'impôt sur le revenu et 172 € de prélèvements sociaux",
                "30 % de 5 000 €, soit 1 500 €",
                "17,2 % de 5 000 €, soit 860 €",
                "Rien du tout, l'assurance-vie est totalement défiscalisée",
              ],
              correctIndex: 0,
              explanation:
                "Le retrait contient 20 % de gains (la proportion du contrat), soit 1 000 €. C'est sous l'abattement de 4 600 €, donc pas d'impôt sur le revenu. Les prélèvements sociaux de 17,2 % s'appliquent sur les 1 000 € de gains : 172 €. On n'est jamais taxé sur le capital versé.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Partie 5 : Investir sur le long terme avec des ETF",
      lessons: [
        {
          id: "l18",
          title: "Les ETF indiciels : diversifier sans se ruiner en frais",
          type: "text",
          duration: "17 min",
          body:
            "## Qu'est-ce qu'un ETF\n\n" +
            "Un ETF (fonds indiciel coté en Bourse, ou tracker) est un fonds qui réplique un indice. Un ETF sur l'indice MSCI World, par exemple, détient un panier d'actions d'environ 1 400 grandes entreprises réparties dans les pays développés : États-Unis, Japon, Europe, et le reste. En achetant une seule part, tu possèdes un petit morceau de tout cet ensemble. C'est de la diversification instantanée, accessible avec quelques dizaines d'euros. Si une entreprise du panier fait faillite, tu perds une fraction de pourcent, pas ta mise.\n\n" +
            "## Gestion passive contre gestion active\n\n" +
            "Un fonds \"actif\" emploie des gérants qui choisissent les actions en espérant battre le marché. Un ETF \"passif\" ne cherche pas à battre l'indice, il le copie, ce qui demande très peu de travail humain. Cette différence a une conséquence directe sur les frais, et les frais sont l'un des rares paramètres que tu contrôles totalement en investissement. Le rendement futur, personne ne le connaît. Les frais, eux, sont écrits dans le document d'information du fonds, le DIC, que tout distributeur doit te remettre.\n\n" +
            "## Le TER, le chiffre à surveiller\n\n" +
            "Le TER (total expense ratio, ou \"frais courants\") est le pourcentage annuel prélevé pour gérer le fonds, directement déduit de la performance. Un ETF indiciel large affiche souvent un TER entre 0,05 % et 0,40 % par an. Un fonds actif classique tourne fréquemment entre 1,5 % et 2,5 %. L'écart a l'air minuscule. Il ne l'est pas, et on va le prouver.\n\n" +
            "## L'impact des frais, chiffré et dessiné\n\n" +
            "Deux placements partent de 10 000 € et rapportent 6 % brut par an pendant 30 ans. Le premier prélève 0,2 % de frais, le second 2 %. Rendements nets : environ 5,8 % contre 4 %.\n\n" +
            "| Horizon | À 0,2 % de frais | À 2 % de frais |\n" +
            "| --- | --- | --- |\n" +
            "| 10 ans | 17 600 € | 14 800 € |\n" +
            "| 20 ans | 30 900 € | 21 900 € |\n" +
            "| 30 ans | 54 300 € | 32 400 € |\n\n" +
            "```figure\n" +
            "{\"caption\": \"10 000 € à 6 % brut sur 30 ans : 1,8 point de frais annuels engloutit 22 000 € du résultat final\"}\n" +
            "<svg viewBox='0 0 640 340' role='img'><title>Impact des frais : croissance comparée à 0,2 % et 2 % de frais annuels</title><line x1='60' y1='300' x2='620' y2='300' stroke='currentColor' opacity='0.6'/><line x1='60' y1='300' x2='60' y2='40' stroke='currentColor' opacity='0.6'/><text x='233' y='322' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>10 ans</text><text x='407' y='322' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>20 ans</text><text x='580' y='322' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>30 ans</text><polyline points='60,260 233,230 407,176 580,83' fill='none' class='fig-accent' stroke-width='3'/><polyline points='60,260 233,241 407,212 580,170' fill='none' stroke='currentColor' opacity='0.55' stroke-width='2'/><text x='300' y='70' font-family='ui-monospace, monospace' font-size='13' fill='currentColor'>frais 0,2 % : ≈ 54 300 €</text><text x='300' y='230' font-family='ui-monospace, monospace' font-size='13' fill='currentColor' opacity='0.75'>frais 2 % : ≈ 32 400 €</text><line x1='580' y1='83' x2='580' y2='170' stroke='currentColor' opacity='0.5' stroke-dasharray='4 4'/><text x='574' y='135' text-anchor='end' font-family='ui-monospace, monospace' font-size='12' fill='currentColor'>≈ 22 000 € d'écart</text><text x='66' y='252' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.6'>10 000 €</text></svg>\n" +
            "```\n\n" +
            "Presque 1,8 point de frais annuels a fait fondre 22 000 € de résultat, soit 40 % du capital final. Les frais, comme les intérêts, se composent sur la durée. Contre toi, cette fois. Et contrairement au rendement, ils tombent même les années de baisse.\n\n" +
            "> À retenir : sur le long terme, un ETF à bas frais qui suit sagement le marché bat la grande majorité des fonds actifs. Ce n'est pas une opinion, c'est le constat répété des études SPIVA de S&P, qui comparent chaque année les fonds actifs à leur indice : sur 15 ans, l'écrasante majorité sous-performent, frais déduits.\n\n" +
            "## Lire une fiche ETF sans se noyer\n\n" +
            "Avant d'acheter un ETF, tu tomberas sur sa fiche et son document d'informations clés (le DIC, obligatoire en Europe). Six lignes suffisent à te faire une opinion. L'émetteur : les grands noms européens gèrent des centaines de milliards, la solidité compte. L'indice répliqué : c'est LE choix qui définit ce que tu possèdes ; \"MSCI World\" couvre environ 1 500 grandes entreprises de pays développés, un indice sectoriel étroit est un pari, pas une diversification. Le TER : tu sais déjà le lire. Capitalisant ou distribuant (souvent noté Acc ou Dist) : le premier réinvestit les dividendes automatiquement, le second te les verse ; en phase de construction de patrimoine, le capitalisant simplifie tout. Le mode de réplication : physique (le fonds détient les titres) ou synthétique (il passe par un contrat d'échange, c'est d'ailleurs ce qui permet à des ETF monde d'être logés dans un PEA). L'encours : un fonds qui gère plusieurs milliards a peu de risque de fermer ; en dessous de 100 millions, méfiance. La devise de cotation, elle, importe moins qu'on ne le croit : ce qui t'expose au dollar, ce sont les entreprises dans l'indice, pas la devise d'affichage.\n\n" +
            "## Ce que l'ETF ne protège pas\n\n" +
            "Sois lucide sur ce que tu achètes : un ETF supprime le risque qu'UNE entreprise fasse faillite dans ton portefeuille, il ne supprime pas le risque que le marché entier baisse. En 2008, un ETF monde parfaitement diversifié perdait plus de 40 % comme tout le monde. La diversification te protège de l'accident individuel, pas de la tempête collective ; contre la tempête, la seule protection s'appelle l'horizon, et c'est la leçon suivante.\n\n" +
            "## Les pièges de frais autour de l'ETF\n\n" +
            "L'ETF lui-même est bon marché, mais l'emballage peut ne pas l'être. Trois points de contrôle : les frais de courtage à chaque ordre (quelques euros en ligne, parfois 0,5 % ou plus au guichet), les droits de garde (à fuir, les courtiers en ligne n'en facturent pas), et, dans une assurance-vie, les frais de gestion du contrat qui s'ajoutent au TER. Un ETF à 0,2 % logé dans un contrat à 1 % de frais de gestion coûte en réalité 1,2 % par an. L'enveloppe et le produit se choisissent ensemble.\n\n" +
            "## À toi\n\n" +
            "Un conseiller te propose un fonds actions \"géré activement par nos experts\" à 1,9 % de frais courants plus 3 % de frais d'entrée. Tu comptes verser 5 000 €. Combien te coûte l'entrée, et quel handicap annuel le fonds doit-il surmonter face à un ETF à 0,25 % rien que pour faire jeu égal ?\n\n" +
            "> Correction : frais d'entrée : 5 000 × 3 % = 150 €, prélevés avant tout investissement. Handicap annuel : 1,9 − 0,25 = 1,65 point de performance à rattraper chaque année, tous les ans, juste pour égaler l'ETF. Les études longues montrent que très peu de gérants y parviennent durablement, et on ne sait pas lesquels à l'avance. Ma position : à produit comparable, le moins cher gagne presque toujours.\n\n" +
            "Diversification large, frais réduits, transparence, achat en une seule opération, éligibilité au PEA ou à l'assurance-vie : l'ETF indiciel coche les cases d'un placement long terme simple. Rien de tout ceci n'est une recommandation d'achat : c'est une explication de mécanique, à confronter à ta situation, et au besoin aux mises en garde de l'AMF.",
        },
        {
          id: "l19",
          title: "Risque, horizon, DCA : pourquoi battre le marché est dur",
          type: "text",
          duration: "17 min",
          body:
            "## Le risque, ce mot mal compris\n\n" +
            "En Bourse, risque ne veut pas dire arnaque, il veut dire variation. Un placement en actions peut perdre 20, 30, voire 40 % lors d'un krach (2008 : environ −40 % pour les grands indices ; mars 2020 : −35 % en un mois), puis se rétablir, puis remonter plus haut. Historiquement, sur des périodes longues, un indice mondial diversifié a produit un rendement annuel moyen positif, de l'ordre de 5 à 7 % après inflation selon les périodes, mais avec des années franchement négatives en cours de route. Le risque est le prix d'entrée du rendement espéré. Sans acceptation des fluctuations, pas de rendement supérieur aux livrets, et quiconque te promet l'inverse prépare ton portefeuille à financer le sien.\n\n" +
            "## L'horizon change tout\n\n" +
            "Plus ton horizon est long, plus les baisses ont le temps d'être compensées. Sur un an, un placement actions peut faire à peu près n'importe quoi : +30 % comme −40 %. Sur quinze ou vingt ans, la fourchette des résultats annualisés observés historiquement se resserre fortement, et les périodes perdantes deviennent rares. C'est un constat statistique sur le passé, pas une garantie pour l'avenir, mais c'est le constat le plus solide dont on dispose.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le cône du risque : la fourchette des rendements annualisés observés se resserre avec l'horizon (ordres de grandeur historiques, pas une garantie)\"}\n" +
            "<svg viewBox='0 0 640 320' role='img'><title>Risque et horizon : dispersion des rendements annualisés selon la durée de détention</title><line x1='80' y1='160' x2='620' y2='160' stroke='currentColor' opacity='0.35' stroke-dasharray='4 4'/><line x1='80' y1='290' x2='620' y2='290' stroke='currentColor' opacity='0.6'/><line x1='80' y1='290' x2='80' y2='30' stroke='currentColor' opacity='0.6'/><polyline points='106,40 210,100 340,121 600,133' fill='none' stroke='currentColor' opacity='0.6' stroke-width='2'/><polyline points='106,280 210,175 340,160 600,154' fill='none' stroke='currentColor' opacity='0.6' stroke-width='2'/><line x1='106' y1='40' x2='106' y2='280' class='fig-accent' stroke-width='3'/><line x1='600' y1='133' x2='600' y2='154' class='fig-accent' stroke-width='3'/><text x='106' y='308' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>1 an</text><text x='210' y='308' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>5 ans</text><text x='340' y='308' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>10 ans</text><text x='600' y='308' text-anchor='middle' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>20 ans</text><text x='120' y='48' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>jusqu'à +40 %</text><text x='120' y='278' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>jusqu'à −40 %</text><text x='430' y='120' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.7'>fourchette resserrée</text><text x='88' y='152' font-family='ui-monospace, monospace' font-size='12' fill='currentColor' opacity='0.5'>moyenne long terme</text></svg>\n" +
            "```\n\n" +
            "C'est pourquoi on n'investit en actions que l'argent dont on n'a pas besoin avant huit à dix ans au minimum. Le pire scénario n'est pas la baisse, c'est d'être forcé de vendre en pleine baisse parce qu'on avait besoin de l'argent. La baisse subie sans vendre est temporaire ; la baisse vendue est définitive.\n\n" +
            "## Le DCA, investir régulièrement\n\n" +
            "Le DCA (dollar cost averaging, ou investissement programmé) consiste à investir une somme fixe à intervalle régulier, par exemple 150 € le 5 de chaque mois, quoi qu'il arrive sur les marchés. Quand les cours sont bas, ta somme achète plus de parts ; quand ils sont hauts, elle en achète moins. Petit calcul sur trois mois : part à 100 €, puis 80 €, puis 120 €. Avec 120 € par mois tu achètes 1,2 puis 1,5 puis 1,0 part, soit 3,7 parts pour 360 €, prix moyen 97,3 €, sous la moyenne des cours (100 €). Résultat : un prix d'achat lissé, et surtout la fin de la question angoissante \"est-ce le bon moment ?\". La réponse du DCA est : toujours, un peu.\n\n" +
            "> À retenir : le DCA ne garantit pas le meilleur rendement possible, mais il te protège du pire ennemi de l'investisseur : tes propres émotions. Acheter machinalement chaque mois évite d'acheter par euphorie au sommet et de vendre par panique au creux.\n\n" +
            "## Le rééquilibrage, l'entretien annuel\n\n" +
            "Décide une fois d'une allocation cible adaptée à ton horizon, par exemple 80 % en ETF actions et 20 % en fonds euros ou livret pour un projet à 15 ans et plus. Puis, une fois par an, remets les proportions d'équerre. Si les actions ont bien monté et pèsent désormais 87 %, tu diriges tes prochains versements vers la poche sécurisée (ou tu vends un peu d'actions) pour revenir à 80/20. Si elles ont chuté et ne pèsent plus que 72 %, tes versements vont aux actions. Remarque ce que fait ce rituel mécanique : il te force à acheter ce qui a baissé et à alléger ce qui a monté, exactement l'inverse de ce que dicte l'émotion. Un rendez-vous par an suffit ; rééquilibrer chaque mois génère des frais et des impôts pour rien.\n\n" +
            "## Que faire pendant un krach\n\n" +
            "Un jour, ton portefeuille affichera -25 % et les journaux annonceront la fin du monde. Prépare ta réponse maintenant, à froid : si ton horizon n'a pas changé, tu ne changes rien. Les versements programmés continuent (ils achètent en soldes), le rééquilibrage annuel garde sa date, et tu évites de consulter ton compte tous les jours. La checklist tient en trois questions : ai-je besoin de cet argent dans les 5 ans ? (si oui, il n'aurait jamais dû être en actions, c'est une leçon, pas une raison de paniquer) ; mon fonds d'urgence est-il intact ? (si oui, rien ne t'oblige à vendre) ; ma situation personnelle a-t-elle changé ? (si non, ton plan non plus). Les études sur le comportement des épargnants convergent : l'essentiel de la sous-performance des particuliers vient des ventes paniques dans les creux, pas des produits choisis.\n\n" +
            "## Pourquoi battre le marché est si difficile\n\n" +
            "Deux raisons. D'abord, le marché intègre en temps réel toutes les informations publiques ; avoir raison contre des millions d'acteurs, dont des professionnels suréquipés, de façon répétée, est rarissime. Ensuite, chaque tentative coûte des frais de transaction et des impôts qui grignotent l'avantage éventuel. Sur longue période, la majorité des fonds gérés par des experts à plein temps sous-performent leur indice de référence une fois les frais déduits. Pour un particulier qui s'informe le soir après le travail, la modestie est une stratégie gagnante : suivre le marché plutôt que prétendre le battre.\n\n" +
            "## À toi\n\n" +
            "Tu as 12 000 € destinés à un apport immobilier dans 18 mois, et 200 € par mois disponibles pour du très long terme. Où va chaque somme, et pourquoi ?\n\n" +
            "> Correction : les 12 000 € de l'apport ont un horizon de 18 mois : étage 3 de l'échelle, supports sûrs et liquides (livrets), pas d'actions, le risque de tomber sur une mauvaise année est trop élevé. Les 200 € mensuels ont un horizon de dix ans et plus : ils peuvent aller vers un investissement programmé en ETF diversifié, dans une enveloppe adaptée (PEA ou assurance-vie). Deux horizons, deux réponses, aucune exception.\n\n" +
            "## L'ennemi numéro un\n\n" +
            "Ce n'est pas la crise, c'est le comportement. Vendre en panique en 2008 ou en mars 2020, puis attendre que \"ça se calme\" pour racheter plus haut, a coûté bien plus cher à beaucoup d'épargnants que les krachs eux-mêmes. Un plan simple tenu avec constance bat un plan brillant abandonné à la première secousse.",
        },
        {
          id: "l20",
          title: "En pratique : ouvrir un plan et automatiser ses versements",
          type: "video",
          duration: "15 min",
          videoLabel: "Démonstration commentée · du compte au premier versement",
          body:
            "## Ce que couvre la démonstration\n\n" +
            "On déroule le parcours concret, de l'ouverture d'une enveloppe jusqu'à la mise en place d'un versement automatique. Voici les notes détaillées. Rien ici n'est un conseil d'achat : c'est un mode d'emploi général du processus.\n\n" +
            "## Étape 1 : choisir l'enveloppe et le courtier\n\n" +
            "Pour investir en ETF sur le long terme, on part le plus souvent d'un PEA (fiscalité douce après 5 ans) ou d'une assurance-vie en ligne à bas frais. On compare d'abord les frais : courtage par ordre, tenue de compte, et pour l'assurance-vie les frais de gestion et l'absence de frais sur versement. On vérifie aussi, réflexe AMF, que l'intermédiaire est bien agréé : la liste des établissements autorisés est publique (registre Regafi), et la liste noire des sites frauduleux est sur le site de l'AMF.\n\n" +
            "## Étape 2 : sélectionner un ETF diversifié\n\n" +
            "Dans la démo, on cherche un ETF large et peu coûteux, du type indice monde développé, éligible au PEA si c'est le support choisi. Les quatre points qu'on lit dans le DIC : l'indice suivi (large et diversifié), le TER (le plus bas possible, sous 0,4 %), l'encours du fonds (un gros encours rassure sur la pérennité et la liquidité), et la méthode de réplication (physique ou synthétique, cette dernière étant ce qui permet à un ETF monde d'être éligible au PEA). On ne choisit pas sur le nom ni sur la performance de l'an dernier, qui ne préjuge de rien.\n\n" +
            "## Étape 3 : capitalisant ou distribuant\n\n" +
            "On explique la différence entre un ETF \"capitalisant\", qui réinvestit automatiquement les dividendes dans le fonds (idéal pour composer sans y penser), et un ETF \"distribuant\", qui les verse en cash. Pour une logique d'accumulation long terme, le capitalisant simplifie tout : pas de dividende qui traîne en liquidités, pas d'ordre de réinvestissement à passer.\n\n" +
            "## Étape 4 : passer le premier ordre\n\n" +
            "On montre un ordre d'achat simple. Pour un petit montant sur un ETF liquide, l'ordre \"au marché\" convient ; l'ordre \"à cours limité\" fixe un prix maximal si l'on veut de la précision. On vérifie le montant, les frais de courtage annoncés, puis on valide. Premier achat réel de la démo : une part, pour dédramatiser. Le deuxième ordre ressemble déjà à une formalité.\n\n" +
            "## Étape 5 : automatiser, l'étape qui fait tout\n\n" +
            "Le cœur de la méthode. On programme un versement récurrent (DCA) : une somme fixe investie chaque mois, le même jour. Certains courtiers proposent l'investissement programmé intégré, qui achète tout seul ; sinon, virement automatique le lendemain de la paie vers le compte espèces du plan, puis un ordre mensuel à passer, calé sur un rappel de téléphone. L'objectif est de retirer toute décision émotionnelle du processus : le plan achète pendant les hausses, pendant les baisses, et surtout pendant que tu penses à autre chose.\n\n" +
            "> À retenir : le meilleur portefeuille n'est pas le plus malin, c'est celui qu'on alimente sans y penser pendant vingt ans. L'automatisation transforme une bonne intention en résultat.\n\n" +
            "## Le rappel de prudence\n\n" +
            "On ne verse que de l'argent dont on n'a pas besoin avant plusieurs années, jamais le fonds d'urgence, jamais de l'argent emprunté. Et on garde en tête que les valeurs peuvent baisser, parfois longtemps : c'est le fonctionnement normal d'un placement de long terme, pas un dysfonctionnement.",
        },
        {
          id: "l21",
          title: "Quiz : investir sur le long terme",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q17",
              prompt: "Que réplique un ETF indiciel comme un ETF MSCI World ?",
              options: [
                "Les choix d'un gérant vedette",
                "Un indice, donc un panier large d'actions de grandes entreprises des pays développés",
                "Le cours d'une seule action star",
                "Le taux du Livret A",
              ],
              correctIndex: 1,
              explanation:
                "Un ETF indiciel copie un indice et détient donc un panier diversifié. Une seule part donne accès à des centaines ou milliers d'entreprises, d'où une diversification immédiate à faible coût.",
            },
            {
              id: "q18",
              prompt:
                "Deux placements à 6 % brut sur 30 ans, l'un à 0,2 % de frais, l'autre à 2 %. Quel est l'effet des frais élevés ?",
              options: [
                "Presque aucun, les frais sont négligeables",
                "Ils réduisent fortement le résultat final car ils se composent sur la durée",
                "Ils augmentent le rendement net",
                "Ils n'agissent que la première année",
              ],
              correctIndex: 1,
              explanation:
                "Sur 10 000 € et 30 ans, l'écart de frais fait passer le résultat d'environ 54 000 € à environ 32 000 €. Comme les intérêts, les frais se composent : un point et demi de trop coûte des dizaines de milliers d'euros.",
            },
            {
              id: "q19",
              prompt: "Quel est le principal intérêt du DCA (investissement programmé) ?",
              options: [
                "Garantir le meilleur rendement possible",
                "Éviter tout risque de perte",
                "Lisser le prix d'achat et neutraliser les décisions émotionnelles",
                "Permettre de battre le marché à coup sûr",
              ],
              correctIndex: 2,
              explanation:
                "Investir une somme fixe chaque mois lisse le prix d'achat et supprime la question du bon moment. Le DCA ne maximise pas le rendement mais protège contre le pire ennemi de l'investisseur : ses émotions.",
            },
            {
              id: "q20",
              prompt:
                "Pourquoi n'investit-on en actions que l'argent dont on n'a pas besoin avant 8 à 10 ans ?",
              options: [
                "Parce que la loi interdit les retraits avant 10 ans",
                "Parce qu'un horizon long laisse le temps aux baisses d'être compensées et évite de vendre en pleine chute",
                "Parce que les ETF sont bloqués pendant dix ans",
                "Parce que les dividendes ne sont versés qu'après dix ans",
              ],
              correctIndex: 1,
              explanation:
                "Sur le court terme, les actions peuvent chuter fortement. Un horizon long laisse statistiquement le temps aux hausses de compenser les baisses, et surtout évite d'être forcé de vendre au plus bas par besoin d'argent.",
            },
            {
              id: "q29",
              prompt:
                "Tu as 12 000 € pour un apport immobilier dans 18 mois. Où placer cette somme ?",
              options: [
                "En ETF actions : 18 mois suffisent pour un bon rendement",
                "Sur des livrets sûrs et liquides : l'horizon est trop court pour la Bourse",
                "Moitié livrets, moitié actions pour équilibrer",
                "Sur un PEA fraîchement ouvert pour profiter de la fiscalité",
              ],
              correctIndex: 1,
              explanation:
                "À 18 mois, une mauvaise année de Bourse (−20 ou −30 %) ne laisse aucun temps de récupération : l'apport partirait en fumée au pire moment. L'argent à échéance courte va sur des supports sûrs et liquides, quoi qu'il en coûte en rendement. L'horizon dicte le support.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Partie 6 : Éviter les arnaques et durer",
      lessons: [
        {
          id: "l22",
          title: "Reconnaître une arnaque avant d'y perdre son argent",
          type: "text",
          duration: "17 min",
          body:
            "## La règle d'or\n\n" +
            "Un rendement élevé, rapide et sans risque n'existe pas. Si les trois sont promis ensemble, c'est une arnaque, sans exception connue. Le rendement se paie toujours en risque ou en temps. Toute personne qui te vend l'inverse te ment ou ne comprend pas ce qu'elle vend, et dans les deux cas ton argent est en danger. L'AMF et la répression des fraudes recensent chaque année des centaines de millions d'euros perdus par des particuliers français sur des placements fictifs : livrets miracle, faux ordres de Bourse, cryptos fantômes, parkings d'aéroport imaginaires. Les victimes ne sont pas plus bêtes que toi. Elles étaient pressées, flattées, ou en confiance.\n\n" +
            "## Le \"trading\" qui promet 10 % par mois\n\n" +
            "Faisons le calcul qui tue le discours : 10 % par mois composés font 1,1 puissance 12, soit 3,14. Plus de 200 % par an. En trois ans, 1 000 € deviendraient 31 000 €. En dix ans, plus de 90 millions. Si quelqu'un savait faire ça, il n'aurait besoin ni de tes 500 €, ni de vendre une formation à 997 €. Les meilleurs investisseurs de l'histoire tournent autour de 20 % par an sur le très long terme, et c'est déjà exceptionnel. Un formateur ou un robot qui promet 10 % mensuels vend du rêve, généralement pour te soutirer des frais ou ton capital. Souvent, l'argent des nouveaux entrants sert à payer les anciens : c'est le schéma de Ponzi, et il s'effondre toujours, mathématiquement, quand les entrées ne couvrent plus les sorties.\n\n" +
            "## Les pump and dump\n\n" +
            "Un groupe organise l'achat massif d'un actif obscur, petite crypto ou action peu échangée, pour faire monter son cours (pump), pousse le grand public à acheter via les réseaux sociaux, de faux témoignages et des captures de gains truquées, puis revend tout au sommet (dump). Ceux qui ont acheté en dernier se retrouvent avec un actif qui s'effondre. Méfie-toi de tout ce qui \"va exploser\", des influenceurs payés pour promouvoir un jeton précis (c'est illégal sans mention de partenariat, et fréquent quand même), et de l'urgence artificielle du type \"c'est maintenant ou jamais\".\n\n" +
            "## L'effet de levier, l'accélérateur de pertes\n\n" +
            "Le levier permet d'investir plus que ton capital en empruntant. Il multiplie les gains, mais aussi les pertes, et peut te faire perdre plus que ta mise. Sur les produits à fort levier (CFD, contrats à terme), les courtiers européens sont légalement obligés d'afficher la part de leurs clients particuliers qui perdent de l'argent : elle se situe couramment entre 70 et 85 %. Lis cette mention, elle est écrite noir sur blanc sur leurs propres sites. Le levier n'est pas un outil pour débuter, c'est un accélérateur pour se ruiner plus vite.\n\n" +
            "## L'arnaque qui monte : la fausse plateforme et le faux conseiller\n\n" +
            "Le scénario type de ces dernières années, documenté par l'AMF : tu laisses ton numéro sur une pub en ligne, un \"conseiller\" très professionnel te rappelle, te fait ouvrir un compte sur une belle plateforme où tes gains s'affichent en temps réel. Les gains sont faux, l'interface est un décor. On te laisse même retirer 200 € une fois, pour t'appâter. Quand tu veux retirer le reste, on t'invente des \"frais de déblocage\", puis plus personne ne répond. Variante récente : l'usurpation, avec de faux sites au nom de banques ou d'acteurs réels connus, logo compris. Le réflexe qui sauve : ne jamais donner suite à un démarchage entrant, et vérifier le nom exact du site sur les listes noires de l'AMF avant tout versement.\n\n" +
            "> À retenir : l'urgence est l'arme numéro un de l'arnaqueur. \"Places limitées\", \"offre qui ferme ce soir\", \"train à ne pas rater\" : tout ce qui te presse de décider vite cherche à court-circuiter ta réflexion. Un vrai bon placement sera encore là demain.\n\n" +
            "## Les réflexes qui protègent\n\n" +
            "- Vérifie que l'intermédiaire est autorisé : registre des agents financiers (Regafi) et listes noires publiées sur le site de l'AMF, amf-france.org. Deux minutes de recherche, des années d'économies.\n" +
            "- Fuis tout démarchage non sollicité, appel, message ou publicité, qui te propose de placer ton argent. Les bons placements ne se vendent pas par téléphone.\n" +
            "- Ne communique jamais tes accès bancaires, et n'installe jamais un logiciel de prise de contrôle à distance pour qu'on \"t'aide à investir\".\n" +
            "- Si tu ne comprends pas comment le rendement est généré, n'investis pas. L'opacité est un signal, pas un détail.\n\n" +
            "## Si tu t'es fait avoir\n\n" +
            "Pas de honte, ces escroqueries sont professionnelles et font des victimes de tous niveaux d'études. Agis vite : préviens ta banque (une opposition ou un rappel de virement se tente dans les premières heures), dépose plainte, et signale la plateforme à l'AMF et sur la plateforme officielle de signalement des contenus illicites. Et surtout, méfie-toi de la deuxième vague : des \"cabinets de récupération de fonds\" contactent les victimes recensées en promettant de récupérer l'argent perdu contre des frais d'avance. C'est la même arnaque, deuxième service. Personne de légitime ne te demandera de payer d'avance pour récupérer des fonds volés.\n\n" +
            "## À toi\n\n" +
            "Une connaissance te montre son appli : +8 % le mois dernier, +9 % celui d'avant, jamais un mois négatif depuis deux ans. Elle peut te parrainer, et touchera une prime si tu déposes 1 000 €. Combien de signaux d'alerte comptes-tu ?\n\n" +
            "> Correction : au moins quatre. Des rendements mensuels réguliers sans aucun mois négatif, profil impossible sur des marchés réels (même les meilleures années ont des mois rouges). Un niveau de rendement (environ 170 % par an composés) qu'aucun gérant ne tient. Un système de parrainage rémunéré, moteur classique des Ponzi. Et la pression sociale de la connaissance, canal préféré de ces fraudes, qui se propagent par cercles amicaux et familiaux. Le bon réflexe : chercher le nom de la plateforme sur les listes noires de l'AMF, et ne rien verser.",
        },
        {
          id: "l23",
          title: "L'hygiène financière durable, mois après mois",
          type: "text",
          duration: "15 min",
          body:
            "## L'automatisation, ta meilleure alliée\n\n" +
            "La volonté est une ressource qui s'épuise. L'automatisation, non. Mets en place, une fois pour toutes, la chaîne de virements automatiques du lendemain de la paie : d'abord le fonds d'urgence tant qu'il n'est pas plein, puis les provisions annuelles, puis l'épargne de projet, puis l'investissement long terme. Une fois câblé, ton budget tourne presque seul. Tu vis avec ce qui reste sur le compte courant, sans arbitrage douloureux ni renoncement héroïque chaque mois.\n\n" +
            "Concrètement, pour un revenu versé le 28 : virements programmés le 29 vers le livret (fonds d'urgence et provisions) et vers l'enveloppe long terme. Trois lignes dans l'espace client de ta banque, quinze minutes, une fois. C'est probablement le meilleur rapport temps investi sur résultat de toute ta vie financière.\n\n" +
            "## Le rendez-vous mensuel\n\n" +
            "Bloque dix minutes une fois par mois pour ouvrir ta feuille de budget, remplir la colonne \"réel\", comparer au prévu, et ajuster une chose. Ce n'est pas une corvée, c'est le tableau de bord. Les gens qui réussissent sur la durée ne sont pas les plus doués, ce sont ceux qui regardent régulièrement où ils en sont. Et une fois par an, un contrôle technique plus complet : taux des livrets encore corrects, frais de l'assurance-vie toujours compétitifs, assurances renégociées, taux d'épargne augmenté si le revenu a monté.\n\n" +
            "## Les erreurs qui reviennent le plus\n\n" +
            "- Investir avant d'avoir un fonds d'urgence, et devoir vendre en catastrophe au premier imprévu.\n" +
            "- Négliger les frais, sur l'assurance-vie, les fonds, le courtage : quelques dixièmes de pourcent qui coûtent des milliers d'euros sur vingt ans.\n" +
            "- Suivre son portefeuille tous les jours et paniquer à la première baisse, alors que l'horizon est de quinze ans. Regarder moins souvent est une compétence.\n" +
            "- Chercher le placement miracle au lieu de faire simplement, longtemps, la chose qui marche.\n" +
            "- Confondre épargner et se priver : un budget vivable inclut du plaisir, sinon on craque et on abandonne tout, comme un régime trop strict.\n\n" +
            "> À retenir : la finance personnelle est un marathon, pas un sprint. La régularité modeste tenue pendant vingt ans écrase les coups d'éclat suivis d'abandon. C'est réconfortant : tu n'as pas besoin d'être un génie, juste constant.\n\n" +
            "## La check-list annuelle, poste par poste\n\n" +
            "Une fois par an, en janvier par exemple, offre-toi une heure de revue complète. Budget : les trois familles tiennent-elles toujours, le taux d'épargne peut-il monter d'un cran (une augmentation de salaire dont tu épargnes la moitié ne se sent pas dans le quotidien) ? Fonds d'urgence : correspond-il toujours à 3 à 6 mois de tes dépenses ACTUELLES ? Un loyer qui a augmenté de 100 € par mois, c'est 300 à 600 € de coussin à rajouter. Abonnements et assurances : résilie ce qui dort, fais jouer la concurrence sur ce qui reste (assurance auto et habitation se renégocient, la loi te permet de résilier après un an sans frais). Frais bancaires : relève le total annuel sur tes relevés, au-delà de 100 € par an pour un profil simple, la question du changement de banque se pose. Placements : vérifie tes taux (les livrets réglementés bougent), rééquilibre ton allocation, contrôle que les versements programmés tournent toujours. Clause bénéficiaire et coordonnées : à jour ? Une heure, sept points, et ton système repart pour un an.\n\n" +
            "## Les outils qui aident (et leurs limites)\n\n" +
            "Trois automatismes gratuits valent tous les gadgets : le virement programmé (déjà vu), les alertes de solde par SMS ou notification (ta banque le propose, mets le seuil à ton tampon de sécurité), et une note ou un tableur de suivi que TU tiens. Les applis d'agrégation de comptes, qui rassemblent tous tes comptes en un écran, peuvent aider à voir clair si tes comptes sont éparpillés ; choisis-en une agréée (les agrégateurs régulés passent par des interfaces bancaires officielles, pas par le stockage de tes mots de passe) et souviens-toi qu'aucune appli ne décide à ta place. Le meilleur tableau de bord du monde ne remplace pas les vingt minutes de rendez-vous mensuel.\n\n" +
            "## Faire évoluer son plan avec sa vie\n\n" +
            "Un budget n'est pas gravé dans le marbre. Une augmentation, un enfant, un déménagement, une séparation : chaque étape mérite de reprendre la feuille et de rejouer l'échelle de la partie 4. La meilleure habitude au moment d'une hausse de revenu : en épargner la moitié avant de s'y habituer. Une augmentation de 150 € nets dont 75 € partent automatiquement vers l'épargne améliore ton quotidien ET ton avenir, sans effort ressenti, parce qu'on ne regrette jamais un confort qu'on n'a pas encore goûté.\n\n" +
            "## À toi, le bilan de fin de cours\n\n" +
            "Sans relire, réponds : quel est ton reste à vivre mensuel ? Quelle est ta cible de fonds d'urgence et où en es-tu ? As-tu une dette au-dessus de 8-10 % ? Quelle somme partira automatiquement le lendemain de ta prochaine paie ?\n\n" +
            "> Correction : il n'y a pas de bonne réponse universelle, mais il y a un bon signe : si tu peux répondre aux quatre questions avec des chiffres, le cours a fait son travail. S'il te manque une réponse, la leçon correspondante t'attend (2, 6, 9 ou 3, dans l'ordre). Le plus dur n'est pas de savoir, c'est de commencer.\n\n" +
            "## Le mot de la fin\n\n" +
            "Tu as maintenant une carte : mesurer, protéger, désendetter, comprendre le temps et l'inflation, choisir la bonne enveloppe, investir simplement, et repérer les pièges. Ce cours reste une base générale, pas un conseil personnalisé : pour les décisions engageantes, confronte ces principes à ta situation, aux informations de l'AMF (amf-france.org) et de service-public.fr, et si besoin à un professionnel indépendant. Commence petit, cette semaine, avec un seul virement automatique. Le reste suivra.",
        },
        {
          id: "l24",
          title: "Quiz : arnaques et discipline durable",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q21",
              prompt:
                "Un site promet un rendement de 10 % par mois \"sans aucun risque\". Que faut-il en conclure ?",
              options: [
                "Que c'est une opportunité rare à saisir vite",
                "Que c'est une arnaque : rendement élevé, rapide et sans risque n'existent pas ensemble",
                "Que c'est réservé aux investisseurs professionnels",
                "Qu'il faut investir une petite somme pour tester",
              ],
              correctIndex: 1,
              explanation:
                "10 % par mois composés dépassent 200 % par an, ce qu'aucun gérant ne réalise durablement. La combinaison rendement élevé + rapide + sans risque est la signature d'une fraude, souvent un schéma de Ponzi.",
            },
            {
              id: "q22",
              prompt: "En quoi consiste un \"pump and dump\" ?",
              options: [
                "Une stratégie officielle recommandée par l'AMF",
                "Un placement garanti par l'État",
                "Gonfler artificiellement le cours d'un actif, pousser le public à acheter, puis revendre au sommet",
                "Un type de livret d'épargne réglementé",
              ],
              correctIndex: 2,
              explanation:
                "Des organisateurs font monter un actif obscur, attirent les acheteurs par des promesses et de faux témoignages, puis revendent au plus haut. Ceux qui achètent en dernier subissent l'effondrement.",
            },
            {
              id: "q23",
              prompt:
                "Pourquoi l'urgence (\"offre qui ferme ce soir\", \"places limitées\") est-elle un signal d'alerte ?",
              options: [
                "Parce que les bonnes affaires sont toujours urgentes",
                "Parce qu'elle vise à court-circuiter ta réflexion pour te faire décider vite",
                "Parce que la loi impose des délais courts",
                "Parce que les placements sérieux ferment vraiment le soir",
              ],
              correctIndex: 1,
              explanation:
                "L'urgence artificielle est l'arme favorite de l'arnaqueur : elle empêche de prendre le temps de vérifier et de réfléchir. Un placement légitime sera toujours disponible le lendemain.",
            },
            {
              id: "q24",
              prompt:
                "Quelle habitude protège le mieux ton épargne sur le long terme ?",
              options: [
                "Suivre son portefeuille en direct plusieurs fois par jour",
                "Chercher chaque année le placement à la mode",
                "Automatiser ses versements et tenir un rendez-vous budgétaire mensuel",
                "Utiliser l'effet de levier pour accélérer les gains",
              ],
              correctIndex: 2,
              explanation:
                "La régularité automatisée et un suivi mensuel calme battent de loin l'agitation, la recherche du placement miracle ou le levier. La finance personnelle récompense la constance, pas les coups d'éclat.",
            },
            {
              id: "q30",
              prompt:
                "Avant de verser de l'argent à une plateforme d'investissement trouvée en ligne, quel est le bon réflexe ?",
              options: [
                "Vérifier le nombre d'avis positifs sur les réseaux sociaux",
                "Tester avec un petit montant pour voir si on peut retirer",
                "Vérifier son autorisation sur le registre officiel et les listes noires de l'AMF",
                "Demander au conseiller de la plateforme ses résultats passés",
              ],
              correctIndex: 2,
              explanation:
                "Les avis se fabriquent, les conseillers frauduleux mentent, et le petit retrait test fait partie du scénario d'appât documenté par l'AMF. La seule vérification fiable est officielle : l'agrément de l'intermédiaire (registre Regafi) et l'absence du site sur les listes noires publiées par l'AMF.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
