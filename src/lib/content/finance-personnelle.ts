import type { Course } from "../types";

const course: Course = {
  slug: "finance-personnelle",
  title: "Finance personnelle : budget, épargne et investir sans se faire avoir",
  tagline: "Reprendre le contrôle de son argent avec méthode, sans jargon ni fausses promesses.",
  description:
    "Un cours concret pour construire un budget qui tient, se bâtir un fonds d'urgence, comprendre l'inflation et le coût de la dette, apprivoiser les intérêts composés et investir sur le long terme via des ETF indiciels. On y parle des vraies enveloppes françaises (Livret A, LDDS, assurance-vie, PEA), de fiscalité de base et surtout de la façon de repérer les arnaques qui promettent monts et merveilles. Aucun conseil personnalisé, aucune promesse de rendement : des principes solides et des exemples chiffrés que vous pourrez appliquer.",
  category: "Gestion de projet",
  level: "Débutant",
  instructor: "Nadia Berthier",
  instructorBio:
    "Nadia Berthier a été conseillère bancaire puis animatrice d'ateliers d'éducation budgétaire pendant douze ans. Elle a accompagné des centaines de ménages à sortir du découvert et à commencer à épargner, sans jamais vendre de produit maison.",
  hours: 6,
  rating: 4.8,
  learners: 1740,
  accent: "#0f766e",
  image:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  language: "Français",
  software: "Un tableur (Excel, Google Sheets ou LibreOffice Calc)",
  prerequisites: [
    "Savoir faire une règle de trois et un pourcentage simple",
    "Avoir accès à ses relevés bancaires des trois derniers mois",
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
    "Mesurer le coût réel d'un crédit et prioriser ses remboursements",
    "Comprendre le fonctionnement, les plafonds et la fiscalité du Livret A, du LDDS, de l'assurance-vie et du PEA",
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
          duration: "10 min",
          body:
            "## À qui je parle\n\n" +
            "Vous gagnez un salaire, vous n'êtes pas dans le rouge tous les mois mais vous ne savez pas vraiment où part votre argent, et le mot \"investir\" vous met mal à l'aise. Ce cours est fait pour vous. Pas besoin d'avoir de l'argent de côté pour commencer : la première richesse, c'est de savoir ce qui entre et ce qui sort.\n\n" +
            "## Un avertissement, tout de suite\n\n" +
            "Je ne suis pas votre conseillère en investissement, et ce cours n'est pas un conseil financier personnalisé. Je vous explique des mécanismes et des ordres de grandeur. Vos décisions dépendent de votre situation, de vos projets et de votre tolérance au risque, que je ne connais pas. Pour un conseil adapté à votre cas, un conseiller en gestion de patrimoine indépendant (rémunéré par honoraires, pas par commissions) reste la bonne adresse.\n\n" +
            "> À retenir : personne ne peut vous garantir un rendement. Quiconque le fait vous ment ou se trompe. On y reviendra en détail dans la dernière partie.\n\n" +
            "## Ce que vous allez apprendre\n\n" +
            "On avance dans l'ordre qui compte vraiment, pas dans l'ordre qui fait rêver. D'abord le budget, parce que sans lui tout le reste est du vent. Ensuite le fonds d'urgence, qui vous évite de replonger dans le crédit au premier imprévu. Puis la dette, souvent le pire ennemi silencieux d'un budget. Ensuite les intérêts composés, ce mécanisme qui joue contre vous quand vous empruntez et pour vous quand vous placez. Enfin les enveloppes françaises et l'investissement long terme.\n\n" +
            "## La bonne mentalité\n\n" +
            "La finance personnelle n'est pas une question de génie mathématique. C'est de la régularité. Un ménage qui met 80 € de côté chaque mois, sans y penser, finit devant celui qui attend le \"bon moment\" pendant dix ans. La discipline bat l'intelligence sur ce terrain, et c'est une bonne nouvelle : la discipline, ça s'organise.\n\n" +
            "Prenez trente minutes cette semaine pour récupérer vos relevés bancaires des trois derniers mois. C'est la matière première de tout ce qui suit.",
        },
        {
          id: "l2",
          title: "Faire le point : ce qui entre, ce qui sort",
          type: "text",
          duration: "14 min",
          body:
            "## Le chiffre qui compte vraiment\n\n" +
            "Ce n'est pas votre salaire brut, ni même votre net avant impôt. C'est votre revenu réellement disponible : ce qui arrive sur le compte après cotisations et prélèvement à la source. Un salaire affiché à 2 400 € brut donne souvent autour de 1 870 € net avant impôt, puis moins après le prélèvement à la source. Partez toujours du montant qui atterrit sur votre compte.\n\n" +
            "## Trier ses dépenses en trois familles\n\n" +
            "Reprenez trois mois de relevés et classez chaque ligne dans l'une de ces trois catégories.\n\n" +
            "1. Les charges fixes : loyer, crédit, assurances, abonnements, forfait mobile, énergie. Elles tombent, que vous le vouliez ou non.\n" +
            "2. Les dépenses variables utiles : courses, carburant, santé, transports. Nécessaires, mais compressibles.\n" +
            "3. Les dépenses de confort : restaurants, sorties, vêtements plaisir, gadgets, streaming en rafale.\n\n" +
            "## Pourquoi trois mois et pas un\n\n" +
            "Un seul mois ment. Il n'y a pas la révision de la voiture, pas la taxe foncière, pas le cadeau d'anniversaire, pas les soldes. En moyennant trois mois, vous approchez la vérité. Encore mieux : identifiez les dépenses annuelles (assurances, impôts locaux, Noël) et divisez-les par douze pour les provisionner chaque mois. Une taxe foncière de 900 €, c'est 75 € à mettre de côté tous les mois, pas une claque en octobre.\n\n" +
            "## Le calcul du \"reste à vivre\"\n\n" +
            "Revenu disponible moins charges fixes moins provisions annuelles : voilà ce qui vous reste réellement pour vivre et épargner. Beaucoup de gens croient avoir 800 € de marge et découvrent qu'ils en ont 250. Ce n'est pas grave, c'est même le but : on ne pilote bien que ce qu'on mesure.\n\n" +
            "> À retenir : la plupart des budgets ne dérapent pas sur les gros postes, qu'on surveille, mais sur l'accumulation des petits. Cinq abonnements à 12 €, deux livraisons de repas par semaine, et 300 € disparaissent sans laisser de souvenir.\n\n" +
            "## L'exercice de la semaine\n\n" +
            "Notez chaque dépense pendant sept jours, sans exception, même le café à 1,80 €. Pas pour culpabiliser, pour voir. Presque tout le monde sous-estime ses dépenses de confort d'au moins 30 %. Ce simple relevé change plus de comportements que n'importe quel discours.",
        },
        {
          id: "l3",
          title: "La méthode 50/30/20 en pratique",
          type: "text",
          duration: "15 min",
          body:
            "## Une règle simple, pas une loi\n\n" +
            "La méthode 50/30/20 répartit votre revenu disponible en trois parts : 50 % pour les besoins, 30 % pour les envies, 20 % pour l'épargne et le remboursement de dettes. Elle a été popularisée par la sénatrice américaine Elizabeth Warren. Son mérite n'est pas la précision des chiffres, c'est de forcer une place fixe pour l'épargne, avant les envies plutôt qu'après.\n\n" +
            "## Un exemple chiffré\n\n" +
            "Prenons un revenu disponible de 2 000 € par mois.\n\n" +
            "- Besoins (50 %) : 1 000 €. Loyer, énergie, courses de base, assurances, transport pour aller travailler, remboursement minimum des crédits.\n" +
            "- Envies (30 %) : 600 €. Restaurants, loisirs, vêtements plaisir, abonnements de confort, week-ends.\n" +
            "- Épargne et dettes (20 %) : 400 €. Fonds d'urgence, remboursement accéléré des crédits, épargne de projet, investissement.\n\n" +
            "Si vos besoins dépassent 50 %, ce n'est pas un échec moral. Dans les grandes villes, un loyer peut à lui seul manger 40 % du revenu. La règle devient alors un cap, pas un couperet : vous visez à ramener les besoins vers 55-60 % en jouant sur le logement, l'énergie ou les assurances, plutôt que de renoncer à toute épargne.\n\n" +
            "## Le principe qui fait la différence : se payer en premier\n\n" +
            "La plupart des gens épargnent ce qui reste à la fin du mois. Il ne reste jamais rien. Inversez : le jour de la paie, un virement automatique envoie vos 20 % (ou 10 %, ou 5 % pour commencer) vers un compte séparé. Vous vivez avec le reste. Cette seule bascule, mettre l'épargne en premier au lieu de la laisser en dernier, transforme les résultats.\n\n" +
            "> À retenir : un virement automatique le lendemain de la paie fait plus pour votre épargne que toute la volonté du monde. L'automatisme retire la décision, et donc la tentation.\n\n" +
            "## Adapter les curseurs\n\n" +
            "Étudiant, jeune actif, famille avec enfants : les proportions bougent. Ce qui ne bouge pas, c'est l'idée d'une part réservée à l'avenir, décidée à l'avance. Commencez petit si besoin. Passer de 0 à 5 % d'épargne compte plus que de rêver à 20 % qu'on n'atteint jamais.",
        },
        {
          id: "l4",
          title: "Construire son budget dans un tableur",
          type: "video",
          duration: "16 min",
          videoLabel: "Démonstration commentée · tableur pas à pas",
          body:
            "## Ce que montre la démonstration\n\n" +
            "On construit ensemble une feuille de budget dans un tableur (Google Sheets, Excel ou LibreOffice Calc : tout fonctionne pareil). Voici les notes complètes pour reproduire la feuille de votre côté.\n\n" +
            "## Étape 1 : les revenus\n\n" +
            "En haut, une colonne \"Revenus\" avec une ligne par source : salaire, primes, allocations, revenus annexes. En bas, une cellule Total qui les additionne. Si votre salaire est le seul revenu, une ligne suffit. On sépare bien le revenu net réellement encaissé.\n\n" +
            "## Étape 2 : les charges fixes\n\n" +
            "Un bloc \"Charges fixes\" listant chaque poste récurrent avec son montant mensuel. Loyer, crédits, assurances, énergie, mobile, internet, transports abonnés. On additionne le bloc dans une cellule Total charges fixes.\n\n" +
            "## Étape 3 : les provisions annuelles\n\n" +
            "C'est l'étape que tout le monde oublie. On crée un bloc \"Provisions\" pour les dépenses qui ne tombent pas chaque mois : taxe foncière, assurance auto payée à l'année, révision, impôts, cadeaux de fin d'année. On prend le montant annuel et on le divise par douze. Une assurance auto de 480 € par an devient une provision de 40 € par mois. Ainsi la grosse échéance ne fait plus mal.\n\n" +
            "## Étape 4 : les dépenses variables et l'épargne\n\n" +
            "Un bloc pour les courses, le carburant, la santé, les loisirs. Puis une ligne \"Épargne\" traitée comme une charge, en haut de la liste des sorties, pas en bas. C'est la traduction concrète du \"se payer en premier\".\n\n" +
            "## Étape 5 : la cellule qui compte\n\n" +
            "Tout en bas, une formule unique. Dans la démo on écrit, dans la cellule du solde :\n\n" +
            "`=Total_revenus - Total_charges_fixes - Total_provisions - Total_variables - Epargne`\n\n" +
            "Si le résultat est positif, vous avez de la marge à réaffecter. S'il est négatif, la feuille vous dit exactement de combien vous devez réduire quelque part. On met en forme conditionnelle : vert si positif, rouge si négatif, pour un signal visuel immédiat.\n\n" +
            "## Le réflexe à garder\n\n" +
            "Une feuille de budget n'est utile que si on la met à jour. On fixe un rendez-vous de dix minutes chaque début de mois pour comparer le prévu et le réel. C'est ce petit rituel, pas la beauté du tableur, qui fait la différence sur un an.\n\n" +
            "> À retenir : la meilleure application de budget est celle que vous ouvrez vraiment. Un tableur simple battu chaque mois vaut mieux qu'un outil sophistiqué abandonné en février.",
        },
        {
          id: "l5",
          title: "Quiz : maîtriser son budget",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Dans la méthode 50/30/20 appliquée à un revenu disponible de 2 000 €, combien va à l'épargne et au remboursement de dettes ?",
              options: ["200 €", "300 €", "400 €", "600 €"],
              correctIndex: 2,
              explanation:
                "20 % de 2 000 €, soit 400 €. Ces 20 % couvrent à la fois l'épargne et le remboursement accéléré des crédits : les deux préparent votre avenir financier.",
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
          duration: "14 min",
          body:
            "## À quoi il sert vraiment\n\n" +
            "Le fonds d'urgence, c'est le coussin qui absorbe l'imprévu sans vous jeter dans le crédit. Une chaudière qui lâche, une voiture à réparer pour aller travailler, une perte d'emploi. Sans coussin, chacun de ces chocs se paie à crédit renouvelable, et on verra dans la partie 3 à quel point cela coûte cher. Le fonds d'urgence n'est pas de l'épargne qui rapporte, c'est de l'épargne qui protège.\n\n" +
            "## Combien mettre de côté\n\n" +
            "La règle courante : entre trois et six mois de dépenses courantes. Attention, on parle de dépenses, pas de revenus. Si vous vivez avec 1 600 € par mois de charges et de courses, votre cible se situe entre 4 800 € et 9 600 €.\n\n" +
            "Le bon niveau dépend de votre stabilité :\n\n" +
            "- Fonctionnaire ou CDI stable, en couple à deux revenus : trois mois suffisent souvent.\n" +
            "- Indépendant, intérimaire, revenus irréguliers, revenu unique du foyer : visez plutôt six mois, parfois plus.\n\n" +
            "Ne visez pas la cible d'un coup. Un premier palier réaliste est un mois de dépenses. Rien que ça change la vie : la plupart des imprévus du quotidien tiennent dans un mois de budget.\n\n" +
            "## Où le placer\n\n" +
            "Trois critères, dans cet ordre : disponibilité immédiate, capital garanti, et seulement ensuite le rendement. Ce fonds doit être accessible en 24 à 72 heures, sans risque de perte, et séparé du compte courant pour ne pas être grignoté.\n\n" +
            "En France, le bon réceptacle est un livret réglementé, Livret A ou LDDS. L'argent y est disponible à tout moment, garanti, exonéré d'impôt, et suffisamment séparé pour ne pas être dépensé par distraction. On détaille ces livrets dans la partie 4.\n\n" +
            "> À retenir : le fonds d'urgence ne doit surtout pas être investi en Bourse. Le jour où vous en avez besoin est souvent le pire jour pour vendre, car les urgences et les krachs ont la mauvaise habitude d'arriver en même temps.\n\n" +
            "## L'erreur classique\n\n" +
            "Placer son épargne de précaution sur un support qui promet du rendement mais bloque l'argent ou le fait fluctuer. Un fonds d'urgence qui n'est pas disponible immédiatement n'est pas un fonds d'urgence, c'est un placement. Ce sont deux choses différentes, avec deux rôles différents.\n\n" +
            "## Le reconstituer\n\n" +
            "Vous avez pioché dedans pour une vraie urgence ? Parfait, il a joué son rôle. La priorité redevient alors de le reconstituer avant de reprendre les autres projets d'épargne.",
        },
        {
          id: "l7",
          title: "L'inflation, ou pourquoi l'argent immobile fond",
          type: "text",
          duration: "14 min",
          body:
            "## Une définition sans jargon\n\n" +
            "L'inflation, c'est la hausse générale des prix au fil du temps. Quand elle est de 2 % par an, un panier de courses à 100 € cette année coûte 102 € l'an prochain. Vu autrement : le même billet de 100 € achète un peu moins chaque année. Votre argent ne bouge pas, mais son pouvoir d'achat baisse.\n\n" +
            "## Des chiffres réels\n\n" +
            "La Banque centrale européenne vise une inflation de 2 % sur le moyen terme. On en a été loin récemment : en France, l'inflation a atteint environ 5,2 % en 2022 et près de 4,9 % en 2023, avant de refluer vers 2 % en 2024. Ces épisodes rappellent que 2 % n'est pas une garantie, juste une cible.\n\n" +
            "## L'effet cumulé, l'exemple qui fait mal\n\n" +
            "Gardons 1 000 € sous le matelas, sans les toucher. Avec une inflation de 2 % par an, leur pouvoir d'achat dans dix ans équivaut à environ 820 € d'aujourd'hui. Autrement dit, sans rien dépenser, vous avez perdu près de 18 % de valeur réelle. Avec une inflation de 5 %, ces mêmes 1 000 € ne pèsent plus qu'environ 610 € au bout de dix ans. Ne rien faire de son argent n'est pas neutre : c'est une décision, et elle coûte.\n\n" +
            "## Le taux réel, la seule mesure honnête\n\n" +
            "Ce qui compte n'est pas le taux affiché de votre placement, mais le taux réel, c'est-à-dire le rendement moins l'inflation. Un livret à 3 % pendant que l'inflation est à 5 % vous fait perdre 2 % de pouvoir d'achat par an, même si le solde du compte augmente. Le chiffre monte, la valeur réelle descend. À l'inverse, un livret à 3 % avec une inflation à 1 % vous fait gagner 2 % réels.\n\n" +
            "> À retenir : un solde qui augmente ne veut pas dire que vous vous enrichissez. Comparez toujours votre rendement à l'inflation. C'est le taux réel qui remplit ou vide votre panier.\n\n" +
            "## Ce que ça change pour vous\n\n" +
            "L'inflation justifie deux choses. Un, garder sur des livrets seulement ce dont vous avez besoin à court terme (fonds d'urgence, projets à moins de deux ou trois ans). Deux, chercher pour l'argent de long terme un placement dont le rendement espéré dépasse l'inflation sur la durée. C'est précisément le rôle de l'investissement, qu'on aborde dans les parties 4 et 5. L'inflation n'est pas une raison de paniquer, c'est une raison d'agir avec méthode.",
        },
        {
          id: "l8",
          title: "Quiz : sécurité et pouvoir d'achat",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Vos dépenses mensuelles sont de 1 600 €. Quelle fourchette vise un fonds d'urgence de trois à six mois ?",
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
                "Un livret rapporte 3 % pendant que l'inflation est de 5 %. Que se passe-t-il pour votre pouvoir d'achat ?",
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
                "Vous gardez 1 000 € en liquide, sans les placer, avec une inflation de 2 % par an. Que valent-ils en pouvoir d'achat dans dix ans ?",
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
          duration: "15 min",
          body:
            "## Toutes les dettes ne se valent pas\n\n" +
            "Il y a la dette qui construit et la dette qui détruit. Un prêt immobilier à taux raisonnable finance un bien qui a de la valeur : c'est un outil. Un crédit renouvelable qui finance des vacances déjà oubliées à 20 % d'intérêts, c'est un boulet. Savoir distinguer les deux évite bien des ennuis.\n\n" +
            "## Le TAEG, le seul chiffre qui dit la vérité\n\n" +
            "Ne regardez jamais le taux nominal seul, ni la mensualité isolée. Regardez le TAEG, le taux annuel effectif global. Il intègre le taux d'intérêt, les frais de dossier, l'assurance obligatoire et les frais annexes. C'est le coût total du crédit ramené à un pourcentage annuel, et c'est le seul chiffre comparable d'une offre à l'autre. La loi impose de l'afficher, justement pour empêcher les comparaisons trompeuses.\n\n" +
            "## Le crédit renouvelable, le plus cher de tous\n\n" +
            "Le crédit renouvelable (ou \"revolving\"), souvent adossé à une carte de magasin, affiche des TAEG parmi les plus élevés du marché, fréquemment autour de 18 à 21 %, proches du taux d'usure légal. Sa mécanique est perverse : les mensualités minimales sont si faibles qu'elles couvrent à peine les intérêts. Le capital ne descend presque pas, et la dette s'étire sur des années.\n\n" +
            "## Un exemple chiffré\n\n" +
            "Vous financez 3 000 € sur un crédit renouvelable à 20 % de TAEG. Si vous ne remboursez que le minimum, disons 60 € par mois, une grande partie part en intérêts au début. Il faut alors bien plus de cinq ans pour solder les 3 000 €, et vous aurez versé plusieurs centaines d'euros d'intérêts en plus du capital. Le même besoin financé par un prêt personnel classique à 6 % sur trois ans coûterait bien moins cher et serait soldé en date prévue.\n\n" +
            "> À retenir : la mensualité faible n'est pas un cadeau, c'est le piège. Plus vous remboursez lentement, plus la banque gagne. Le crédit renouvelable est conçu pour durer, pas pour vous rendre service.\n\n" +
            "## La règle de bon sens\n\n" +
            "Rembourser une dette à 20 % équivaut à un placement garanti à 20 %, sans risque et sans impôt. Aucun investissement légal ne bat ça de façon certaine. Tant que vous traînez un crédit conso cher, la priorité absolue de vos 20 % d'épargne, c'est de l'éteindre. On voit comment s'y prendre dans la leçon suivante.",
        },
        {
          id: "l10",
          title: "Rembourser vite : boule de neige et avalanche",
          type: "text",
          duration: "13 min",
          body:
            "## Deux méthodes, un même objectif\n\n" +
            "Quand on a plusieurs dettes à la fois, une carte de magasin, un prêt auto, un découvert autorisé, la question est : par laquelle commencer ? Deux stratégies éprouvées répondent, avec des logiques opposées.\n\n" +
            "## La méthode avalanche : la plus rationnelle\n\n" +
            "On classe les dettes du taux le plus élevé au plus faible. On paie le minimum sur toutes, et tout l'argent disponible en plus va sur la dette au taux le plus haut. Une fois soldée, on bascule ce montant sur la suivante, et ainsi de suite. Mathématiquement, c'est imbattable : vous payez le moins d'intérêts au total, car vous tuez d'abord ce qui coûte le plus cher.\n\n" +
            "Exemple : une carte revolving à 20 %, un prêt auto à 5 %, un découvert à 8 %. L'avalanche attaque le revolving en premier, puis le découvert, puis l'auto.\n\n" +
            "## La méthode boule de neige : la plus motivante\n\n" +
            "On classe cette fois les dettes du plus petit solde au plus gros, sans regarder le taux. On solde d'abord la plus petite. La victoire rapide donne un élan psychologique, et le montant libéré (la mensualité qu'on ne paie plus) roule sur la dette suivante, en grossissant comme une boule de neige.\n\n" +
            "## Laquelle choisir\n\n" +
            "Sur le papier, l'avalanche gagne toujours en euros. Dans la vraie vie, beaucoup de gens abandonnent avant la fin. La boule de neige, avec ses petites victoires rapides, tient mieux dans la durée pour ceux qui ont besoin d'encouragements. La meilleure méthode est celle que vous suivez jusqu'au bout. Si l'écart d'intérêts entre les deux est faible, prenez la motivante.\n\n" +
            "> À retenir : ne payez jamais seulement le minimum sur plusieurs dettes en même temps sans stratégie. Concentrez le feu sur une cible à la fois, minimum partout ailleurs. L'éparpillement est le meilleur allié des intérêts.\n\n" +
            "## Le geste concret\n\n" +
            "Listez vos dettes dans un tableur : solde, taux, mensualité minimale. Choisissez avalanche ou boule de neige, et fléchez chaque euro d'épargne disponible sur la cible désignée. Regarder la première dette disparaître est souvent le déclic qui change tout le reste.",
        },
        {
          id: "l11",
          title: "Les intérêts composés, la force qui joue pour ou contre vous",
          type: "text",
          duration: "16 min",
          body:
            "## Le mécanisme\n\n" +
            "Les intérêts simples se calculent toujours sur le capital de départ. Les intérêts composés se calculent sur le capital plus les intérêts déjà accumulés. Autrement dit, vos intérêts produisent eux-mêmes des intérêts. Ce petit détail change tout sur la durée. C'est la même force qui gonfle un placement patient et qui étouffe un emprunteur qui ne rembourse pas.\n\n" +
            "## La règle des 72, à connaître par cœur\n\n" +
            "Pour estimer en combien d'années une somme double, divisez 72 par le taux annuel. À 6 % par an, un capital double en 72 ÷ 6 = 12 ans environ. À 3 %, il faut 24 ans. À 9 %, seulement 8 ans. C'est une approximation, mais elle donne un ordre de grandeur immédiat, sans calculatrice.\n\n" +
            "## L'exemple qui frappe\n\n" +
            "Vous versez 100 € par mois sur un placement qui rapporte 5 % par an en moyenne, pendant 30 ans. Vous aurez versé de votre poche 100 × 12 × 30 = 36 000 €. Combien vaut le placement au bout de 30 ans ? Environ 83 000 €. Vous avez mis 36 000 €, le reste, près de 47 000 €, a été fabriqué par les intérêts composés. Plus de la moitié du résultat ne vient pas de votre épargne, mais du temps.\n\n" +
            "## Le facteur décisif : commencer tôt\n\n" +
            "Comparons deux personnes, même rendement de 5 %.\n\n" +
            "- Camille verse 200 € par mois de 25 à 65 ans, soit 40 ans. Elle a versé 96 000 €. Résultat : environ 305 000 €.\n" +
            "- Julien verse aussi 200 € par mois, mais de 35 à 65 ans, soit 30 ans. Il a versé 72 000 €. Résultat : environ 166 000 €.\n\n" +
            "Camille n'a versé que 24 000 € de plus que Julien, mais elle finit avec près de 140 000 € de plus. Les dix années de départ, celles où le capital est encore petit et où on a l'impression que ça ne sert à rien, sont en réalité les plus puissantes, car elles ont le plus de temps pour composer.\n\n" +
            "> À retenir : en investissement long terme, le temps compte plus que le montant. Mieux vaut 50 € par mois à 25 ans que 200 € à 40 ans. On ne rattrape jamais vraiment les années perdues.\n\n" +
            "## Le revers de la médaille\n\n" +
            "Cette même mécanique joue contre vous sur une dette non remboursée. Des intérêts à 20 % qui se composent sur un revolving font gonfler la somme due à la même vitesse qu'ils feraient grossir un placement. C'est pourquoi éteindre une dette chère avant d'investir n'est pas une option, c'est la base.",
        },
        {
          id: "l12",
          title: "Quiz : dette et intérêts composés",
          type: "quiz",
          duration: "6 min",
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
                "72 ÷ 6 = 12. La règle des 72 donne rapidement l'ordre de grandeur du temps de doublement : à 3 % il faut 24 ans, à 9 % environ 8 ans.",
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
                "Vous avez un crédit renouvelable à 20 % et 500 € à placer. Quel est le choix le plus rationnel ?",
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
          duration: "13 min",
          body:
            "## Pourquoi un ordre\n\n" +
            "On ne remplit pas toutes les enveloppes en même temps. Il existe un ordre de priorité qui fait consensus, parce qu'il traite d'abord les risques les plus coûteux avant de chercher le rendement. Le suivre évite les erreurs classiques, comme investir en Bourse tout en traînant un crédit conso à 18 %.\n\n" +
            "## L'échelle, du plus urgent au plus lointain\n\n" +
            "1. Éteindre les dettes chères. Tout crédit au-dessus de 8 à 10 % passe avant le reste. On l'a vu : c'est un rendement garanti.\n" +
            "2. Constituer le fonds d'urgence. Trois à six mois de dépenses sur un livret disponible. C'est le filet qui empêche de retomber dans le crédit.\n" +
            "3. Épargner les projets à court terme. Achat prévu dans un ou deux ans, apport, voyage : sur des supports sûrs et liquides, pas en Bourse.\n" +
            "4. Investir le long terme. L'argent dont vous n'aurez pas besoin avant huit ou dix ans peut viser un rendement supérieur, en acceptant le risque de fluctuation.\n\n" +
            "## La logique horizon-risque\n\n" +
            "Chaque étage correspond à un horizon de temps. Plus l'argent sera utilisé bientôt, plus il doit être sûr et disponible, quitte à peu rapporter. Plus l'horizon est lointain, plus on peut accepter des variations en échange d'un rendement espéré plus élevé. Mélanger les horizons est l'erreur reine : placer en Bourse l'argent d'un achat prévu dans six mois, ou laisser sur un livret l'épargne retraite de vos 30 ans.\n\n" +
            "> À retenir : associez chaque euro à une échéance avant de choisir où le mettre. La question n'est pas \"quel placement rapporte le plus\", mais \"quand ai-je besoin de cet argent\". La réponse dicte le support.\n\n" +
            "## Où se rangent les enveloppes françaises\n\n" +
            "Dans les leçons suivantes, on place les outils réels sur cette échelle. Livret A et LDDS servent les étages 2 et 3, sécurité et court terme. L'assurance-vie et le PEA servent surtout l'étage 4, l'investissement long terme, avec chacun sa logique et sa fiscalité. Comprendre cet ordre rend le choix des enveloppes évident au lieu d'angoissant.",
        },
        {
          id: "l14",
          title: "Livret A et LDDS : la base sûre et liquide",
          type: "text",
          duration: "13 min",
          body:
            "## Le Livret A\n\n" +
            "C'est le livret d'épargne réglementé le plus répandu en France. Ses règles sont fixées par l'État, pas par la banque, ce qui le rend identique partout. Le plafond de versement est de 22 950 € pour une personne. L'argent est disponible à tout moment, le capital est garanti, et les intérêts sont totalement exonérés d'impôt sur le revenu et de prélèvements sociaux. On ne peut détenir qu'un seul Livret A par personne.\n\n" +
            "## Le LDDS\n\n" +
            "Le Livret de Développement Durable et Solidaire fonctionne exactement comme le Livret A : même taux, même disponibilité, mêmes exonérations. Son plafond est de 12 000 €. On peut cumuler un Livret A et un LDDS, ce qui porte l'enveloppe défiscalisée totale à près de 35 000 € par personne. Pour un couple, on double.\n\n" +
            "## Le taux, un point de vigilance\n\n" +
            "Le taux du Livret A et du LDDS est révisé plusieurs fois par an selon une formule officielle liée à l'inflation et aux taux courts. Il a été de 3 % sur 2023 et 2024, puis abaissé à 2,4 % en 2025 lors d'une révision. Retenez le principe plus que le chiffre : ce taux bouge, et il peut passer sous l'inflation. Vérifiez toujours le taux en vigueur au moment où vous lisez, sur le site officiel service-public.fr.\n\n" +
            "## À quoi ils servent, à quoi ils ne servent pas\n\n" +
            "Ces livrets sont parfaits pour le fonds d'urgence et l'épargne de court terme : sûrs, liquides, sans fiscalité. Ils sont mauvais pour faire fructifier une épargne de long terme, car leur rendement suit à peine l'inflation, voire passe en dessous. Y laisser dormir 40 000 € pendant vingt ans, c'est accepter que l'inflation les grignote.\n\n" +
            "> À retenir : le Livret A n'est pas un placement pour s'enrichir, c'est un placement pour ne pas se faire surprendre. Utilisez-le pour sa sécurité et sa disponibilité, pas pour son rendement.\n\n" +
            "## Un mot sur le LEP\n\n" +
            "Si votre revenu fiscal de référence est sous un certain plafond, le Livret d'Épargne Populaire offre un taux plus élevé que le Livret A et un plafond de 10 000 €. Il est souvent sous-utilisé alors qu'il est le meilleur livret sûr pour les foyers éligibles. Vérifiez votre éligibilité auprès de votre banque : c'est de l'argent laissé sur la table pour beaucoup.",
        },
        {
          id: "l15",
          title: "L'assurance-vie : l'enveloppe long terme souple",
          type: "text",
          duration: "16 min",
          body:
            "## Ce que c'est vraiment\n\n" +
            "Malgré son nom, l'assurance-vie n'est pas d'abord une assurance décès. C'est une enveloppe d'épargne et d'investissement, la plus utilisée en France. On y verse quand on veut, on retire quand on veut, et à l'intérieur on répartit son argent entre deux grands types de supports.\n\n" +
            "## Fonds euros contre unités de compte\n\n" +
            "- Le fonds en euros : capital garanti, rendement modéré, sans risque de perte. C'est la partie sécurisée.\n" +
            "- Les unités de compte (UC) : fonds actions, ETF, immobilier. Pas de garantie du capital, mais un potentiel de rendement supérieur. C'est la partie qui peut monter et descendre.\n\n" +
            "On choisit soi-même la répartition selon son horizon et sa tolérance au risque. Un contrat n'est pas figé : on peut arbitrer entre supports au fil du temps.\n\n" +
            "## La fiscalité, l'atout maître\n\n" +
            "Tant que l'argent reste dans le contrat, les gains ne sont pas imposés. L'impôt ne se déclenche qu'au moment d'un retrait (un \"rachat\"), et seulement sur la part de gains retirée, jamais sur le capital versé.\n\n" +
            "Le grand avantage arrive au bout de 8 ans de détention du contrat. À partir de là, vous bénéficiez chaque année d'un abattement sur les gains retirés : 4 600 € pour une personne seule, 9 200 € pour un couple soumis à imposition commune. En pratique, un retrait modéré après 8 ans peut être quasiment exonéré d'impôt sur le revenu. Les prélèvements sociaux de 17,2 % restent dus sur les gains.\n\n" +
            "> À retenir : la date d'ouverture de l'assurance-vie compte plus que les montants versés au début. Ouvrir un contrat tôt, même avec 50 €, fait tourner l'horloge des 8 ans. C'est le geste malin par excellence.\n\n" +
            "## Les frais, le point de vigilance\n\n" +
            "Tous les contrats ne se valent pas. Méfiez-vous des frais sur versement (0 % chez les bons contrats en ligne, parfois 3 à 5 % dans les réseaux classiques, autant de perdu d'avance), des frais de gestion annuels, et des frais d'arbitrage. Sur trente ans, un demi-point de frais en trop ampute lourdement le résultat final. Les contrats en ligne sans frais d'entrée sont souvent bien plus compétitifs que ceux du guichet.\n\n" +
            "## Un cadre, pas un produit magique\n\n" +
            "L'assurance-vie ne rapporte rien en soi : tout dépend de ce que vous mettez dedans. Un contrat rempli à 100 % de fonds euros aura un rendement proche d'un livret. Un contrat investi en UT actions sur le long terme suivra les marchés, avec leurs hauts et leurs bas. L'enveloppe optimise la fiscalité, elle ne crée pas la performance.",
        },
        {
          id: "l16",
          title: "Le PEA : investir en actions avec une fiscalité douce",
          type: "text",
          duration: "14 min",
          body:
            "## Le principe\n\n" +
            "Le Plan d'Épargne en Actions est une enveloppe conçue pour investir en actions européennes et en fonds éligibles, avec une fiscalité avantageuse à la clé. C'est l'outil de référence des particuliers français qui investissent en Bourse sur le long terme, souvent via des ETF.\n\n" +
            "## Le plafond\n\n" +
            "Le plafond de versement est de 150 000 € pour un PEA classique. C'est un plafond de versements, pas de valeur : si votre plan monte à 200 000 € grâce aux gains, il n'y a pas de problème. Il existe aussi le PEA-PME, dédié aux petites et moyennes entreprises, avec un plafond commun à respecter.\n\n" +
            "## La fiscalité, le vrai atout\n\n" +
            "La règle clé tourne autour des 5 ans. Après 5 ans de détention du plan, les gains sont exonérés d'impôt sur le revenu lors d'un retrait. Seuls les prélèvements sociaux de 17,2 % restent dus. C'est très avantageux comparé à un compte-titres ordinaire, où les gains subissent le prélèvement forfaitaire unique de 30 %.\n\n" +
            "Attention au piège des retraits précoces : avant 5 ans, un retrait entraîne en général la clôture du plan et la taxation des gains. La bonne pratique est donc de n'ouvrir un PEA que pour de l'argent dont vous n'aurez pas besoin avant plusieurs années, et d'y laisser le temps faire son travail.\n\n" +
            "> À retenir : comme pour l'assurance-vie, ouvrez un PEA tôt, même avec une petite somme, pour lancer le compteur des 5 ans. La date d'ouverture est un actif en soi.\n\n" +
            "## Ce qu'on peut y mettre\n\n" +
            "Le PEA accepte les actions de sociétés européennes et certains fonds et ETF éligibles. Bonne nouvelle pour les débutants : il existe des ETF éligibles au PEA qui répliquent des indices mondiaux, ce qui permet une large diversification internationale tout en respectant les règles du plan. On détaille les ETF dans la partie suivante.\n\n" +
            "## PEA ou assurance-vie ?\n\n" +
            "Ce n'est pas l'un contre l'autre, les deux sont complémentaires. Le PEA est imbattable pour investir en actions et ETF avec une fiscalité légère après 5 ans. L'assurance-vie offre plus de souplesse dans les supports (fonds euros, immobilier, obligataire) et un cadre fiscal intéressant pour la transmission. Beaucoup d'épargnants organisés utilisent les deux, chacun pour ce qu'il fait de mieux. Le choix dépend de votre situation, que ce cours ne connaît pas : ceci reste une présentation générale, pas une recommandation.",
        },
        {
          id: "l17",
          title: "Quiz : les enveloppes françaises",
          type: "quiz",
          duration: "6 min",
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
          duration: "16 min",
          body:
            "## Qu'est-ce qu'un ETF\n\n" +
            "Un ETF (fonds indiciel coté en Bourse, ou tracker) est un fonds qui réplique un indice. Un ETF sur l'indice MSCI World, par exemple, détient un panier d'actions de plus de 1 500 grandes entreprises réparties dans les pays développés. En achetant une seule part, vous possédez un petit morceau de tout cet ensemble. C'est de la diversification instantanée, accessible avec quelques dizaines d'euros.\n\n" +
            "## Gestion passive contre gestion active\n\n" +
            "Un fonds \"actif\" emploie des gérants qui choisissent les actions en espérant battre le marché. Un ETF \"passif\" ne cherche pas à battre l'indice, il le copie. Cette différence a une conséquence directe sur les frais, et les frais sont l'un des rares éléments que vous contrôlez vraiment en investissement.\n\n" +
            "## Le TER, le chiffre à surveiller\n\n" +
            "Le TER (total expense ratio, ou frais courants) est le pourcentage annuel prélevé pour gérer le fonds. Un ETF indiciel large affiche souvent un TER compris entre 0,05 % et 0,40 % par an. Un fonds actif classique tourne fréquemment entre 1,5 % et 2,5 %. L'écart paraît minuscule, il ne l'est pas.\n\n" +
            "## L'impact des frais, chiffré\n\n" +
            "Imaginons deux placements qui rapportent 6 % brut par an sur 30 ans, avec 10 000 € de départ. Le premier a 0,2 % de frais, le second 2 %. Le premier rapporte net environ 5,8 %, le second environ 4 %. Résultat au bout de 30 ans : autour de 54 000 € pour le premier, autour de 32 000 € pour le second. Presque 1,8 % de frais annuels ont fait fondre plus de 20 000 € de résultat final. Les frais, comme les intérêts, se composent sur la durée. Contre vous, cette fois.\n\n" +
            "> À retenir : sur le long terme, un ETF à bas frais qui suit sagement le marché bat statistiquement la grande majorité des fonds actifs. Ce n'est pas une opinion, c'est un constat répété dans les études de performance sur longue période.\n\n" +
            "## Pourquoi c'est adapté aux débutants\n\n" +
            "Diversification large, frais réduits, transparence, achat en une seule opération, disponibilité sur PEA ou assurance-vie : l'ETF indiciel coche les cases d'un placement long terme simple. On n'a pas besoin de sélectionner des actions une par une, ni de suivre l'actualité économique tous les jours. On achète le marché, et on laisse le temps travailler. Rien de tout ceci n'est une recommandation d'achat : c'est une explication de principe, à confronter à votre situation.",
        },
        {
          id: "l19",
          title: "Risque, horizon, DCA : pourquoi battre le marché est dur",
          type: "text",
          duration: "16 min",
          body:
            "## Le risque, ce mot mal compris\n\n" +
            "En Bourse, risque ne veut pas dire arnaque, il veut dire variation. Un placement en actions peut perdre 20, 30, voire 40 % lors d'un krach, puis se rétablir, puis remonter plus haut. Historiquement, sur des périodes longues, un indice mondial diversifié a produit un rendement positif, mais avec des années franchement négatives en cours de route. Le risque est le prix d'entrée du rendement espéré. Sans acceptation de la fluctuation, pas de rendement supérieur aux livrets.\n\n" +
            "## L'horizon change tout\n\n" +
            "Plus votre horizon est long, plus vous pouvez encaisser les baisses sans les subir. Sur un an, un placement actions peut faire n'importe quoi. Sur quinze ou vingt ans, les périodes de baisse ont statistiquement eu le temps d'être compensées par les hausses. C'est pourquoi on n'investit en Bourse que l'argent dont on n'a pas besoin avant huit à dix ans au minimum. Le pire scénario n'est pas la baisse, c'est d'être forcé de vendre en pleine baisse parce qu'on avait besoin de l'argent.\n\n" +
            "## Le DCA, investir régulièrement\n\n" +
            "Le DCA (dollar cost averaging, ou investissement programmé) consiste à investir une somme fixe à intervalle régulier, par exemple 150 € le 5 de chaque mois, quoi qu'il arrive sur les marchés. Quand les cours sont bas, votre somme achète plus de parts ; quand ils sont hauts, elle en achète moins. Résultat : un prix d'achat moyen lissé, et surtout la fin de la question angoissante \"est-ce le bon moment pour acheter ?\". La réponse du DCA est : toujours, un peu.\n\n" +
            "> À retenir : le DCA ne garantit pas le meilleur rendement possible, mais il vous protège du pire ennemi de l'investisseur : ses propres émotions. Acheter machinalement chaque mois évite d'acheter par euphorie au sommet et de vendre par panique au creux.\n\n" +
            "## Pourquoi battre le marché est si difficile\n\n" +
            "Deux raisons. D'abord, le marché intègre déjà en temps réel toutes les informations connues ; espérer avoir raison contre des millions d'acteurs, dont des professionnels équipés, de façon répétée, est très rare. Ensuite, chaque tentative coûte des frais et des impôts qui grignotent l'avantage. Sur longue période, la majorité des fonds actifs, gérés par des experts à plein temps, sous-performent leur indice de référence une fois les frais déduits. Pour un particulier, la modestie est une stratégie gagnante : suivre le marché plutôt que prétendre le battre.\n\n" +
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
            "## Étape 1 : choisir l'enveloppe\n\n" +
            "Pour investir en ETF sur le long terme, on part le plus souvent d'un PEA (pour sa fiscalité douce après 5 ans) ou d'une assurance-vie en ligne à bas frais. On compare les frais avant tout : frais de courtage à l'achat, frais de tenue de compte, et pour l'assurance-vie les frais de gestion et l'absence de frais sur versement.\n\n" +
            "## Étape 2 : sélectionner un ETF diversifié\n\n" +
            "Dans la démo, on cherche un ETF large et peu coûteux, du type indice monde développé, éligible au PEA si c'est le support choisi. Les trois points qu'on regarde : l'indice suivi (large et diversifié), le TER (le plus bas possible, sous 0,4 %), et la taille de l'encours du fonds (un gros encours est plus rassurant sur la pérennité). On ne choisit pas sur le nom ou la performance passée récente, qui ne préjuge de rien.\n\n" +
            "## Étape 3 : capitalisant ou distribuant\n\n" +
            "On explique la différence entre un ETF \"capitalisant\", qui réinvestit automatiquement les dividendes dans le fonds (idéal pour faire jouer les intérêts composés sans y penser), et un ETF \"distribuant\", qui verse les dividendes. Pour une logique d'accumulation long terme, le capitalisant simplifie tout.\n\n" +
            "## Étape 4 : passer le premier ordre\n\n" +
            "On montre un ordre d'achat simple. On privilégie l'ordre \"au marché\" pour un petit montant sur un ETF liquide, ou un ordre \"à cours limité\" si l'on veut fixer un prix maximal. On vérifie le montant, les frais annoncés, puis on valide.\n\n" +
            "## Étape 5 : automatiser, l'étape qui fait tout\n\n" +
            "Le cœur de la méthode. On programme un versement récurrent (DCA) : une somme fixe investie chaque mois, le même jour, automatiquement. Certains courtiers proposent l'investissement programmé intégré ; sinon on met un virement automatique le lendemain de la paie, puis on passe l'ordre. L'objectif est de retirer toute décision émotionnelle du processus.\n\n" +
            "> À retenir : le meilleur portefeuille n'est pas le plus malin, c'est celui qu'on alimente sans y penser pendant vingt ans. L'automatisation transforme une bonne intention en résultat.\n\n" +
            "## Le rappel de prudence\n\n" +
            "On ne verse que de l'argent dont on n'a pas besoin avant plusieurs années, jamais le fonds d'urgence, jamais de l'argent emprunté. Et on garde en tête que les valeurs peuvent baisser : c'est normal, c'est même le fonctionnement attendu d'un placement de long terme.",
        },
        {
          id: "l21",
          title: "Quiz : investir sur le long terme",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q17",
              prompt: "Que réplique un ETF indiciel comme un ETF MSCI World ?",
              options: [
                "Les choix d'un gérant vedette",
                "Un indice, donc un panier large d'actions, ici plus de 1 500 grandes entreprises des pays développés",
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
          duration: "16 min",
          body:
            "## La règle d'or\n\n" +
            "Un rendement élevé, rapide et sans risque n'existe pas. Si les trois sont promis ensemble, c'est une arnaque, sans exception. Le rendement se paie toujours en risque ou en temps. Toute personne qui vous vend l'inverse ment ou ne comprend pas ce qu'elle vend. Gardez cette phrase en tête, elle vous fera économiser plus que tout le reste du cours.\n\n" +
            "## Le \"trading\" qui promet 10 % par mois\n\n" +
            "10 % par mois, cela ferait plus de 200 % par an avec les intérêts composés. Aucun gérant au monde, pas même les plus célèbres, ne réalise cela durablement. Les meilleurs investisseurs de l'histoire tournent autour de 20 % par an sur le très long terme, et c'est déjà exceptionnel. Un formateur ou un robot qui promet 10 % mensuels vend du rêve, généralement pour vous soutirer des frais ou votre capital. Souvent, l'argent des nouveaux entrants sert à payer les anciens : c'est le schéma de Ponzi, qui s'effondre toujours.\n\n" +
            "## Les pump and dump sur les cryptos et actions\n\n" +
            "Un groupe organise l'achat massif d'un actif obscur pour faire monter son cours (pump), pousse le grand public à acheter via les réseaux sociaux et de faux témoignages, puis revend tout au sommet (dump). Ceux qui ont acheté en dernier se retrouvent avec un actif qui s'effondre. Méfiez-vous de tout ce qui \"va exploser\", des influenceurs qui promeuvent un jeton précis, et de l'urgence artificielle du type \"c'est maintenant ou jamais\".\n\n" +
            "## L'effet de levier, l'accélérateur de pertes\n\n" +
            "Le levier permet d'investir plus que votre capital en empruntant. Il multiplie les gains, mais aussi les pertes, et peut vous faire perdre plus que votre mise. Sur les produits à fort levier (CFD, contrats à terme), la majorité des particuliers perdent de l'argent : les courtiers eux-mêmes sont légalement obligés d'afficher cette statistique. Le levier n'est pas un outil pour débuter, c'est un accélérateur pour se ruiner plus vite.\n\n" +
            "> À retenir : l'urgence est l'arme numéro un de l'arnaqueur. \"Places limitées\", \"offre qui ferme ce soir\", \"train à ne pas rater\" : tout ce qui vous presse de décider vite cherche à court-circuiter votre réflexion. Un vrai bon placement sera encore là demain.\n\n" +
            "## Les réflexes qui protègent\n\n" +
            "- Vérifiez que l'intermédiaire est enregistré auprès de l'AMF. L'Autorité des marchés financiers publie une liste noire des sites frauduleux sur son site officiel.\n" +
            "- Fuyez tout démarchage non sollicité, appel, message ou publicité, qui vous propose de placer votre argent.\n" +
            "- Ne communiquez jamais vos accès bancaires ni ne prenez le contrôle de votre ordinateur à distance pour \"vous aider à investir\".\n" +
            "- Si vous ne comprenez pas comment le rendement est généré, n'investissez pas. L'opacité est un signal, pas un détail.",
        },
        {
          id: "l23",
          title: "L'hygiène financière durable, mois après mois",
          type: "text",
          duration: "14 min",
          body:
            "## L'automatisation, votre meilleure alliée\n\n" +
            "La volonté est une ressource qui s'épuise. L'automatisation, non. Mettez en place, une fois pour toutes, la chaîne de virements automatiques le lendemain de la paie : d'abord le fonds d'urgence tant qu'il n'est pas plein, puis l'épargne de projet, puis l'investissement long terme. Une fois câblé, votre budget tourne presque seul. Vous vivez avec ce qui reste sur le compte courant, sans arbitrage douloureux chaque mois.\n\n" +
            "## Le rendez-vous mensuel\n\n" +
            "Bloquez dix minutes une fois par mois pour ouvrir votre feuille de budget, comparer le prévu et le réel, et ajuster. Ce n'est pas une corvée, c'est le tableau de bord de votre vie financière. Les gens qui réussissent sur la durée ne sont pas les plus doués, ce sont ceux qui regardent régulièrement où ils en sont.\n\n" +
            "## Les erreurs qui reviennent le plus\n\n" +
            "- Investir avant d'avoir un fonds d'urgence, et devoir vendre en catastrophe au premier imprévu.\n" +
            "- Négliger les frais, sur l'assurance-vie, les fonds, le courtage : quelques dixièmes de pourcent qui coûtent des milliers d'euros sur vingt ans.\n" +
            "- Suivre son portefeuille tous les jours et paniquer à la première baisse, alors que l'horizon est de quinze ans.\n" +
            "- Chercher le placement miracle au lieu de faire simplement, longtemps, la chose qui marche.\n" +
            "- Confondre épargner et se priver : un budget vivable inclut du plaisir, sinon on craque et on abandonne tout.\n\n" +
            "> À retenir : la finance personnelle est un marathon, pas un sprint. La régularité modeste tenue pendant vingt ans écrase de loin les coups d'éclat suivis d'abandon. C'est réconfortant : vous n'avez pas besoin d'être un génie, juste constant.\n\n" +
            "## Faire évoluer son plan avec sa vie\n\n" +
            "Un budget n'est pas gravé dans le marbre. Une augmentation, un enfant, un déménagement, un changement de situation : chaque étape mérite de reprendre la feuille et de réajuster les curseurs. La bonne habitude est de revoir l'ensemble une fois par an, tranquillement, et d'augmenter son taux d'épargne à chaque hausse de revenu plutôt que de laisser filer le train de vie.\n\n" +
            "## Le mot de la fin\n\n" +
            "Vous avez maintenant une carte : mesurer, protéger, désendetter, comprendre le temps et l'inflation, choisir la bonne enveloppe, investir simplement, et repérer les pièges. Ce cours reste une base générale et non un conseil personnalisé. Pour les décisions engageantes, confrontez ces principes à votre situation, et si besoin à un professionnel indépendant. Le plus dur n'est pas de savoir, c'est de commencer. Alors commencez petit, cette semaine, avec un seul virement automatique.",
        },
        {
          id: "l24",
          title: "Quiz : arnaques et discipline durable",
          type: "quiz",
          duration: "6 min",
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
                "10 % par mois dépasserait 200 % par an, ce qu'aucun gérant ne réalise durablement. La combinaison rendement élevé + rapide + sans risque est la signature d'une fraude, souvent un schéma de Ponzi.",
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
                "Parce qu'elle vise à court-circuiter votre réflexion pour vous faire décider vite",
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
                "Quelle habitude protège le mieux votre épargne sur le long terme ?",
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
          ],
        },
      ],
    },
  ],
};

export default course;
