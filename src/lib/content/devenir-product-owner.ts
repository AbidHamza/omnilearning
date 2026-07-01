import type { Course } from "../types";

const course: Course = {
  slug: "devenir-product-owner",
  title: "Devenir Product Owner : de la vision à la livraison",
  tagline:
    "Le métier de PO sans le folklore : découverte, backlog, priorisation et cérémonies, appliqués à un vrai produit.",
  description:
    "Un parcours complet pour tenir le poste de Product Owner en équipe agile. On part de la vision produit, on passe par la découverte (entretiens, opportunity solution tree), on construit un backlog vivant avec de vraies user stories, on priorise avec RICE, MoSCoW, Kano et WSJF, on estime en story points, et on fait tourner Scrum et Kanban au quotidien. Fil rouge : Covio, une app de covoiturage domicile-travail que l'on fait grandir d'un sprint à l'autre.",
  category: "Gestion de projet",
  level: "Intermédiaire",
  instructor: "Camille Ferrand",
  instructorBio:
    "Product Owner puis Product Manager pendant huit ans dans la fintech et la mobilité, elle a coaché une douzaine de POs débutants et déteste les backlogs qui servent de cimetière à idées.",
  hours: 6,
  rating: 4.7,
  learners: 1284,
  accent: "#3b82f6",
  image:
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
  language: "Français",
  software: "Jira, Miro, Notion (ou équivalents)",
  prerequisites: [
    "Avoir déjà travaillé dans ou avec une équipe produit/tech, même brièvement",
    "Comprendre les bases de l'agilité (sprint, itération) — on les reprend, mais partir de zéro absolu sera dense",
    "Aucun besoin de savoir coder",
  ],
  summary: [
    "Le rôle réel du PO et sa place face au Product Manager, au Scrum Master et aux parties prenantes",
    "Poser une vision et une stratégie produit qui tiennent la route (vision board, OKR, north star)",
    "Mener une vraie découverte produit : entretiens utilisateurs et opportunity solution tree",
    "Construire et affiner un backlog, écrire des user stories testables et bien découpées",
    "Prioriser et estimer avec les méthodes utilisées en entreprise (RICE, MoSCoW, Kano, WSJF, story points)",
    "Faire tourner Scrum et Kanban, lire les bonnes métriques et éviter les pièges du débutant",
  ],
  objectives: [
    "Distinguer clairement les responsabilités du PO de celles du PM et du Scrum Master",
    "Formuler une vision produit et la décliner en OKR mesurables",
    "Conduire un entretien utilisateur qui produit des insights exploitables, pas des opinions",
    "Écrire une user story avec des critères d'acceptation testables et la valider avec INVEST",
    "Choisir la bonne méthode de priorisation selon le contexte et défendre ses arbitrages",
    "Animer sprint planning, daily, review et rétro en tenant le rôle attendu du PO",
  ],
  skills: [
    "Découverte produit et entretiens utilisateurs",
    "Rédaction et découpage de user stories",
    "Priorisation de backlog (RICE, MoSCoW, Kano, WSJF)",
    "Estimation agile (story points, planning poker)",
    "Animation des cérémonies Scrum et gestion de flux Kanban",
    "Définition et lecture de métriques produit",
  ],
  contentTypes: ["Leçons écrites", "Quiz interactifs", "Études de cas", "Démonstration guidée"],
  parts: [
    {
      id: "p1",
      title: "Le métier de Product Owner",
      lessons: [
        {
          id: "l1",
          title: "Ce que fait vraiment un Product Owner",
          type: "text",
          duration: "15 min",
          body:
            "## Le PO n'est pas un preneur de commandes\n\n" +
            "La définition officielle de Scrum tient en une phrase : le Product Owner est responsable de maximiser la valeur du produit issu du travail de l'équipe. C'est vrai, et c'est presque inutile tel quel. Dans la réalité d'une journée, le PO passe son temps à trancher : quelle est la prochaine chose la plus utile qu'on puisse livrer, et pourquoi celle-là plutôt qu'une autre.\n\n" +
            "Le piège numéro un du débutant, c'est de se vivre comme un guichet. Le commercial demande une fonctionnalité, elle entre dans le backlog. Le directeur veut un bouton rouge, il devient une story. Au bout de trois mois, le backlog compte 400 tickets, personne ne sait ce qui compte, et l'équipe livre beaucoup sans que rien ne bouge côté clients. Un bon PO dit non plus souvent qu'il ne dit oui, et il sait expliquer chaque non.\n\n" +
            "## Trois responsabilités qui ne se délèguent pas\n\n" +
            "Sur le fond, le métier tient sur trois piliers. D'abord la **vision et la stratégie** : où va le produit, pour qui, contre quoi il se bat. Ensuite la **gestion du backlog** : traduire cette direction en travail concret, ordonné, compréhensible par l'équipe de développement. Enfin l'**arbitrage de valeur** : décider en permanence des priorités face à des ressources limitées et des demandes contradictoires.\n\n" +
            "Ce qui n'est pas le métier : écrire les tests à la place des devs, imposer comment on code, jouer au chef de projet qui distribue les tâches. Le PO décide du *quoi* et du *pourquoi*. L'équipe décide du *comment*. Cette frontière est la source de la moitié des conflits que je vois chez les nouveaux POs.\n\n" +
            "## Notre fil rouge : Covio\n\n" +
            "Tout le cours s'appuie sur un produit unique, Covio, une application de covoiturage domicile-travail. L'idée : mettre en relation des salariés qui font le même trajet chaque matin. Le marché existe (BlaBlaCar Daily, Karos, Klaxit opèrent dessus en France), le modèle est un marketplace à deux faces — il faut assez de conducteurs *et* de passagers pour que ça marche — et les problèmes produit y sont concrets : confiance, ponctualité, remboursement, masse critique locale.\n\n" +
            "> À retenir : le PO ne maximise pas le volume livré, il maximise la valeur livrée. Ce sont deux métiers différents, et le second est beaucoup plus difficile.\n\n" +
            "Gardez Covio en tête. À chaque notion, on se demandera : concrètement, qu'est-ce que ça change pour la prochaine décision sur Covio ?",
        },
        {
          id: "l2",
          title: "PO, Product Manager, Scrum Master : qui fait quoi",
          type: "text",
          duration: "16 min",
          body:
            "## Trois rôles qu'on confond tout le temps\n\n" +
            "Ces trois intitulés se chevauchent selon les entreprises, et c'est une vraie source de galère quand on débute. Voici les repères qui tiennent dans la majorité des organisations.\n\n" +
            "Le **Product Manager (PM)** regarde vers l'extérieur et vers le long terme : le marché, la concurrence, le business model, la roadmap sur plusieurs trimestres, la rentabilité. Il répond à \"quel produit construire et pourquoi c'est un bon pari\".\n\n" +
            "Le **Product Owner (PO)** regarde vers l'équipe et vers l'exécution : traduire la stratégie en backlog, écrire les stories, être disponible pour les développeurs, valider ce qui est livré. Il répond à \"comment on construit ça, dans quel ordre, et est-ce conforme\".\n\n" +
            "Le **Scrum Master (SM)** ne s'occupe pas du produit du tout. Il s'occupe de l'équipe et du processus : lever les blocages, protéger l'équipe des interruptions, faire progresser la maturité agile, faciliter les cérémonies. Il répond à \"comment l'équipe travaille mieux ensemble\".\n\n" +
            "## Dans les faits, ça dépend de la taille\n\n" +
            "Dans une petite structure, une seule personne cumule souvent PM et PO. On l'appelle parfois \"PO stratégique\" ou simplement Product Manager, et elle fait tout, de la vision au ticket Jira. Dans un grand groupe, les rôles se séparent : un PM pilote la vision de plusieurs équipes, chaque équipe a son PO qui exécute. Beaucoup de POs débutants sont en réalité des \"PO features\", des scribes de backlog sans mandat stratégique. Ce n'est pas grave pour commencer, mais il faut le savoir, sinon on croit qu'on décide alors qu'on exécute des décisions prises ailleurs.\n\n" +
            "## Le test qui clarifie tout\n\n" +
            "Face à une demande, posez-vous : de quoi je parle ?\n\n" +
            "- \"Faut-il attaquer le marché des trajets scolaires avec Covio ?\" → question de PM (stratégie, marché).\n" +
            "- \"La story 'annuler un trajet jusqu'à 1h avant' passe-t-elle avant 'noter son conducteur' ?\" → question de PO (priorité du backlog).\n" +
            "- \"Pourquoi la daily dure 40 minutes et personne n'écoute ?\" → question de Scrum Master (processus).\n\n" +
            "## Le triangle qui fonctionne\n\n" +
            "La bonne équipe, c'est un PO qui porte la valeur, un Scrum Master qui fluidifie, une équipe de dev qui construit — trois responsabilités qui se respectent. Le SM n'est pas le chef du PO, le PO n'est pas le chef des devs. Personne ne commande, chacun a un domaine.\n\n" +
            "> À retenir : si votre Scrum Master priorise votre backlog ou si votre PM écrit vos critères d'acceptation, quelqu'un fait le travail d'un autre. Ça marche un temps, ça finit toujours mal.",
        },
        {
          id: "l3",
          title: "Le PO au milieu des parties prenantes",
          type: "text",
          duration: "14 min",
          body:
            "## Vous êtes une interface, pas un mur\n\n" +
            "Le PO est le point de rencontre entre trois mondes qui ne se parlent pas naturellement : le business (direction, ventes, marketing, support), les utilisateurs, et l'équipe de développement. Chacun tire dans son sens. Le rôle consiste à absorber ce bruit et à en sortir une décision unique et cohérente : le backlog ordonné.\n\n" +
            "Une erreur fréquente : se placer en bouclier et couper l'équipe des parties prenantes. \"Passez par moi, ne parlez pas aux devs directement.\" On croit protéger, on crée un goulot. À l'inverse, laisser tout le monde parler à tout le monde sans filtre transforme le sprint en champ de bataille. Le bon dosage : l'équipe a le contexte métier (donc elle rencontre les utilisateurs, assiste aux démos), mais les décisions de priorité passent par une seule voix, la vôtre.\n\n" +
            "## Cartographier ses parties prenantes\n\n" +
            "Avant même de prioriser des fonctionnalités, priorisez vos interlocuteurs. Une grille simple, pouvoir contre intérêt, suffit :\n\n" +
            "- **Fort pouvoir, fort intérêt** : à impliquer de près (ex. le directeur des opérations qui finance Covio). On les consulte tôt, on les tient au courant.\n" +
            "- **Fort pouvoir, faible intérêt** : à tenir satisfaits sans les noyer (ex. le service juridique, qui doit valider les CGU de remboursement entre particuliers).\n" +
            "- **Faible pouvoir, fort intérêt** : à informer et écouter, souvent vos meilleurs alliés (ex. le support client qui remonte les plaintes des utilisateurs).\n" +
            "- **Faible pouvoir, faible intérêt** : à surveiller, sans y passer d'énergie.\n\n" +
            "## Dire non sans se faire des ennemis\n\n" +
            "Un directeur commercial vous demande d'ajouter un système de parrainage pour Covio \"parce qu'un concurrent l'a fait\". Refuser sèchement crée un ennemi. La technique : ne jamais dire non à la personne, dire non au *trade-off*. \"On peut le faire, mais ça passe devant la fiabilité du calcul d'itinéraire, sur laquelle on a 30 % de plaintes support ce mois-ci. Tu préfères qu'on repousse ça ?\" Le refus devient une conversation sur les priorités, chiffres à l'appui. Neuf fois sur dix, la personne recule d'elle-même.\n\n" +
            "> À retenir : votre crédibilité de PO ne vient pas de votre autorité — vous n'en avez presque aucune — mais de la qualité et de la transparence de vos arbitrages. On vous suit parce que vos raisons tiennent, pas parce que c'est vous qui décidez.",
        },
        {
          id: "l4",
          title: "Quiz — Le rôle du PO",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Le directeur commercial exige que sa demande de fonctionnalité entre en tête du backlog. Quelle est la meilleure réponse d'un PO ?",
              options: [
                "Ajouter la demande en haut du backlog : il a plus de pouvoir que vous",
                "Refuser, c'est vous qui décidez des priorités",
                "Exposer le trade-off : ce que cette demande fait passer derrière elle, chiffres à l'appui, et le laisser arbitrer en connaissance de cause",
                "Renvoyer la décision au Scrum Master",
              ],
              correctIndex: 2,
              explanation:
                "Le PO n'a pas d'autorité hiérarchique et n'a pas non plus à céder. Sa force est la transparence des arbitrages : transformer une demande en discussion sur le coût d'opportunité. Le Scrum Master ne priorise jamais le backlog, c'est hors de son rôle.",
            },
            {
              id: "q2",
              prompt:
                "\"Faut-il lancer Covio sur le marché des trajets scolaires l'an prochain ?\" est typiquement une question qui relève de :",
              options: [
                "Product Owner",
                "Product Manager / dimension stratégie produit",
                "Scrum Master",
                "L'équipe de développement",
              ],
              correctIndex: 1,
              explanation:
                "C'est une question de marché, de segment et de pari long terme : le registre du Product Manager (ou de la casquette stratégique du PO dans une petite structure). Le PO au sens exécution s'occupe de l'ordre des stories, pas du choix de marché.",
            },
            {
              id: "q3",
              prompt:
                "Quelle affirmation décrit correctement la frontière PO / équipe de dev ?",
              options: [
                "Le PO décide du quoi et du pourquoi, l'équipe décide du comment",
                "Le PO décide de tout, l'équipe exécute",
                "L'équipe décide des priorités, le PO code",
                "Le PO distribue les tâches à chaque développeur chaque matin",
              ],
              correctIndex: 0,
              explanation:
                "La séparation quoi/pourquoi (PO) contre comment (équipe) est la ligne de partage centrale de Scrum. Distribuer les tâches ou imposer l'implémentation, c'est empiéter sur l'auto-organisation de l'équipe, une des causes les plus fréquentes de tension.",
            },
            {
              id: "q4",
              prompt:
                "Un backlog qui compte 400 tickets accumulés au fil des demandes est surtout le signe que :",
              options: [
                "L'équipe est très productive",
                "Le PO a joué un rôle de guichet au lieu d'arbitrer, et a rarement dit non",
                "Le produit est mature",
                "Il faut recruter un second PO",
              ],
              correctIndex: 1,
              explanation:
                "Un backlog obèse traduit une absence d'arbitrage : tout ce qui est demandé est ajouté. Un PO efficace refuse davantage qu'il n'accepte et garde un backlog court, ordonné et compréhensible. Le volume n'est jamais un indicateur de valeur.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Vision et stratégie produit",
      lessons: [
        {
          id: "l5",
          title: "Poser une vision avec le Product Vision Board",
          type: "text",
          duration: "16 min",
          body:
            "## Sans vision, le backlog part dans tous les sens\n\n" +
            "Une vision produit, ce n'est pas un slogan marketing. C'est la réponse stable à quatre questions : pour qui, quel problème, quelle solution, quel bénéfice business. Tant que ces réponses ne sont pas claires, chaque priorisation est arbitraire, parce qu'on n'a aucun cap pour dire ce qui compte.\n\n" +
            "Le **Product Vision Board** de Roman Pichler est un outil simple pour poser ça sur une page. Cinq colonnes :\n\n" +
            "- **Vision** : le changement qu'on veut apporter au monde, en une phrase.\n" +
            "- **Cible** : les utilisateurs et clients visés (attention, ce ne sont pas toujours les mêmes).\n" +
            "- **Besoins** : le problème principal qu'on résout pour eux.\n" +
            "- **Produit** : ce qu'on construit, en gros, et ce qui le rend crédible.\n" +
            "- **Objectifs business** : comment le produit sert l'entreprise (revenus, coûts, acquisition).\n\n" +
            "## Le Vision Board de Covio\n\n" +
            "- **Vision** : rendre le trajet domicile-travail moins cher, moins solitaire et moins polluant en le partageant.\n" +
            "- **Cible** : salariés d'une même zone d'activité qui viennent en voiture seuls, sur des trajets réguliers de 10 à 40 km. Client payeur possible : les employeurs (RSE, place de parking).\n" +
            "- **Besoins** : trouver de façon fiable quelqu'un qui fait le même trajet au même horaire, sans négociation pénible et sans risque de se retrouver seul un matin.\n" +
            "- **Produit** : mise en relation automatique sur trajets récurrents, paiement intégré, garantie \"trajet de secours\" si le conducteur annule.\n" +
            "- **Objectifs business** : commission sur les trajets, abonnements employeurs.\n\n" +
            "## Ce que la cible change concrètement\n\n" +
            "Regardez la cible de Covio : trajets *réguliers*. Ce choix élimine tout de suite une masse de fonctionnalités. Un moteur de recherche de trajets ponctuels à la BlaBlaCar longue distance ? Hors sujet. Un chat de négociation de prix ? Inutile, les trajets récurrents doivent être sans friction quotidienne. La vision n'est pas décorative : elle vous donne le droit de dire non à des dizaines d'idées séduisantes mais hors trajectoire.\n\n" +
            "Une bonne vision est stable sur un an ou deux. Si la vôtre change tous les mois, ce n'est pas une vision, c'est une humeur. Elle doit tenir même quand un concurrent sort une nouveauté, même quand un gros client réclame autre chose.\n\n" +
            "> À retenir : la vision se juge à sa capacité à trancher. Si elle ne vous aide pas à refuser une idée, elle est trop vague pour servir.\n\n" +
            "Pour approfondir l'outil, la fiche de référence est publique sur [le site de Roman Pichler](https://www.romanpichler.com/tools/product-vision-board/).",
        },
        {
          id: "l6",
          title: "Décliner la stratégie en OKR",
          type: "text",
          duration: "16 min",
          body:
            "## Du cap aux résultats mesurables\n\n" +
            "La vision dit où on va. Les **OKR** (Objectives and Key Results) disent ce qu'on cherche à obtenir ce trimestre pour s'en rapprocher. C'est la charnière entre stratégie et backlog. Popularisés par Intel puis Google, ils tiennent sur deux éléments :\n\n" +
            "- Un **Objective** : une direction qualitative, ambitieuse, inspirante, sans chiffre. Le \"quoi\".\n" +
            "- Deux à quatre **Key Results** : des mesures chiffrées qui prouvent qu'on a atteint l'objectif. Le \"comment on sait qu'on y est\".\n\n" +
            "## L'erreur qui tue les OKR\n\n" +
            "Neuf équipes sur dix confondent Key Result et liste de tâches. \"Livrer la fonctionnalité de paiement\" n'est pas un Key Result, c'est une livraison. Un vrai KR mesure un *résultat*, pas une *action*. Le test : si vous pouvez cocher la case en livrant du code sans que rien ne change pour les utilisateurs ou le business, ce n'est pas un KR.\n\n" +
            "Mauvais : \"Sortir l'app iOS.\" Bon : \"40 % des trajets réservés proviennent de mobile.\" Le premier peut être fait alors que personne n'utilise l'app iOS. Le second ne peut être atteint que si l'app apporte vraiment quelque chose.\n\n" +
            "## Un OKR trimestriel pour Covio\n\n" +
            "**Objective** : faire de Covio un réflexe quotidien pour nos utilisateurs pilotes de la zone d'activité de Lyon-Est.\n\n" +
            "Key Results :\n\n" +
            "1. Passer de 12 % à 35 % d'utilisateurs actifs hebdomadaires sur la base inscrite.\n" +
            "2. Atteindre 60 % de trajets \"matchés\" (un passager trouve un conducteur) sous 24h.\n" +
            "3. Réduire le taux d'annulation conducteur de 18 % à moins de 8 %.\n\n" +
            "Remarquez : aucun KR ne dit \"construire telle fonctionnalité\". Ils décrivent un monde où Covio marche mieux. C'est au PO et à l'équipe de trouver quelles stories font bouger ces chiffres. Peut-être une garantie de trajet de secours pour le KR 3, peut-être des notifications de match pour le KR 2. Les OKR ne prescrivent pas la solution, ils fixent la cible.\n\n" +
            "## Ambition et calibrage\n\n" +
            "Chez Google, un OKR atteint à 100 % est suspect : il était trop facile. La zone saine se situe autour de 60-70 %. Ça n'est pas universel — certaines équipes préfèrent des OKR engageants à 100 % — mais l'idée reste : un OKR doit tirer vers le haut, pas être une formalité. Deux à trois objectifs par trimestre suffisent. Une équipe avec sept OKR n'a en réalité aucune priorité.\n\n" +
            "> À retenir : un Key Result se formule toujours comme un changement d'état mesurable (\"passer de X à Y\"), jamais comme une chose à livrer. Si vous pouvez le cocher sans impact réel, réécrivez-le.",
        },
        {
          id: "l7",
          title: "North Star Metric : la boussole partagée",
          type: "text",
          duration: "15 min",
          body:
            "## Une métrique pour aligner tout le monde\n\n" +
            "Les OKR changent chaque trimestre. La **North Star Metric** (NSM), elle, reste stable longtemps. C'est la mesure unique qui capture le mieux la valeur que votre produit apporte aux utilisateurs. Son intérêt : quand une équipe entière — produit, tech, marketing, direction — regarde le même chiffre, les débats de priorité deviennent moins politiques et plus factuels.\n\n" +
            "La bonne NSM a trois qualités. Elle reflète la valeur *reçue par l'utilisateur*, pas juste l'argent encaissé. Elle est un indicateur avancé des revenus (si elle monte, le business suit). Et l'équipe peut réellement l'influencer par son travail.\n\n" +
            "## Choisir la North Star de Covio\n\n" +
            "Plusieurs candidates :\n\n" +
            "- **Nombre d'inscrits** : mauvais. On peut recruter des inscrits qui n'utilisent jamais l'app. Une métrique de vanité classique.\n" +
            "- **Chiffre d'affaires** : mauvais comme north star. C'est le résultat, pas la valeur. Il monte trop tard pour guider les décisions produit.\n" +
            "- **Nombre de trajets partagés réalisés par semaine** : bon candidat. Un trajet partagé = un salarié qui a économisé de l'argent, un conducteur payé, une voiture de moins. La valeur est là, et c'est un indicateur avancé du revenu (commission par trajet).\n\n" +
            "On retient donc : **trajets partagés effectivement réalisés par semaine**. \"Effectivement réalisés\", pas réservés — un trajet annulé n'a créé aucune valeur, il en a même détruit (un passager déçu).\n\n" +
            "## Décomposer la north star\n\n" +
            "Une NSM utile se décompose en facteurs sur lesquels on agit. Pour Covio : trajets réalisés = (utilisateurs actifs) × (trajets réservés par actif) × (taux de trajets non annulés). Cette décomposition est une mine à priorités. Vous voulez faire monter la north star ? Vous pouvez travailler l'activation (plus d'actifs), la fréquence (plus de trajets par personne) ou la fiabilité (moins d'annulations). Chaque branche devient un terrain d'opportunités pour la découverte produit qu'on verra dans la partie suivante.\n\n" +
            "## Le lien vision → NSM → OKR → backlog\n\n" +
            "Voilà la chaîne complète : la vision donne le cap, la north star mesure la valeur globale sur la durée, les OKR fixent les cibles du trimestre, et le backlog contient le travail concret censé bouger tout ça. Un PO qui tient cette chaîne peut justifier n'importe quelle priorité en remontant jusqu'à la vision. Un PO qui n'a que le backlog priorise à l'aveugle et se fait balader par la demande la plus bruyante.\n\n" +
            "> À retenir : méfiez-vous des métriques de vanité (inscrits, téléchargements, pages vues). Une vraie north star capte la valeur *utilisée*, celle qui prédit que le business tiendra.",
        },
        {
          id: "l8",
          title: "Quiz — Vision et stratégie",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Parmi ces formulations, laquelle est un véritable Key Result ?",
              options: [
                "Développer et livrer l'application iOS",
                "Passer de 12 % à 35 % d'utilisateurs actifs hebdomadaires",
                "Organiser trois ateliers de découverte",
                "Recruter un développeur mobile",
              ],
              correctIndex: 1,
              explanation:
                "Un Key Result mesure un changement d'état, pas une action livrée. \"Passer de 12 % à 35 %\" décrit un résultat que le code seul ne garantit pas. Les trois autres sont des tâches ou des livrables : on peut les cocher sans qu'aucun indicateur ne bouge.",
            },
            {
              id: "q6",
              prompt:
                "Pourquoi \"nombre total d'inscrits\" est un mauvais choix de North Star Metric pour Covio ?",
              options: [
                "Parce qu'il est difficile à mesurer techniquement",
                "Parce qu'on peut le faire monter sans qu'aucune valeur ne soit réellement délivrée aux utilisateurs (métrique de vanité)",
                "Parce que la direction ne s'y intéresse pas",
                "Parce qu'il augmente trop lentement",
              ],
              correctIndex: 1,
              explanation:
                "Un inscrit qui n'utilise jamais l'app ne reçoit aucune valeur et n'annonce aucun revenu futur. La north star doit capturer la valeur effectivement reçue (ici, les trajets partagés réalisés), pas un compteur qu'on peut gonfler avec de l'acquisition sans usage.",
            },
            {
              id: "q7",
              prompt:
                "À quoi sert principalement le Product Vision Board au quotidien du PO ?",
              options: [
                "À produire un joli support pour les investisseurs",
                "À remplacer le backlog",
                "À donner un cap stable qui permet de refuser les idées hors trajectoire",
                "À estimer les story points",
              ],
              correctIndex: 2,
              explanation:
                "La valeur opérationnelle d'une vision se mesure à sa capacité à trancher. Le Vision Board (pour qui, quel besoin, quelle solution, quel objectif business) donne les critères qui permettent de dire non à des idées séduisantes mais hors cap. Il ne remplace ni le backlog ni l'estimation.",
            },
            {
              id: "q8",
              prompt:
                "La north star de Covio (trajets réalisés/semaine) se décompose en actifs × trajets par actif × taux de non-annulation. En quoi est-ce utile ?",
              options: [
                "Ça rend la métrique plus impressionnante en réunion",
                "Ça identifie plusieurs leviers d'action distincts (activation, fréquence, fiabilité) pour faire progresser la métrique",
                "Ça permet de supprimer les OKR",
                "Ça sert uniquement au reporting financier",
              ],
              correctIndex: 1,
              explanation:
                "Décomposer une north star en facteurs transforme une métrique abstraite en leviers concrets. Chaque facteur (plus d'actifs, plus de trajets par personne, moins d'annulations) ouvre un terrain de découverte et de priorisation différent.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "La découverte produit",
      lessons: [
        {
          id: "l9",
          title: "Mener un entretien utilisateur qui sert à quelque chose",
          type: "text",
          duration: "17 min",
          body:
            "## Construire la bonne chose avant de bien la construire\n\n" +
            "La découverte produit (product discovery) répond à une question simple et vitale : est-ce qu'on résout un vrai problème pour de vrais gens, avant d'écrire une ligne de code ? Un PO qui saute cette étape passe son temps à livrer des fonctionnalités correctes que personne n'utilise. Le premier outil de découverte, le plus accessible, c'est l'entretien utilisateur.\n\n" +
            "Attention au contresens de débutant : un entretien utilisateur ne sert pas à demander aux gens quelle fonctionnalité ils veulent. Les gens sont de mauvais prédicteurs de leur propre comportement futur, et de bons inventeurs de solutions bancales. Un entretien sert à comprendre leur *problème*, leur *contexte* et ce qu'ils *font déjà*.\n\n" +
            "## Passé concret, pas futur hypothétique\n\n" +
            "La règle d'or vient du livre The Mom Test de Rob Fitzpatrick : parlez de la vie de la personne, pas de votre idée. Posez des questions sur des faits passés et vérifiables, jamais sur des intentions.\n\n" +
            "Comparez, pour Covio :\n\n" +
            "- Mauvais : \"Est-ce que vous utiliseriez une app de covoiturage pour aller au travail ?\" → réponse polie et sans valeur, presque toujours oui.\n" +
            "- Bon : \"Racontez-moi comment vous êtes venu travailler ce matin. Combien de temps, combien ça vous a coûté, qu'est-ce qui vous a agacé ?\"\n\n" +
            "Le second donne des faits : le trajet, le coût réel, l'irritant du jour. Le premier ne donne qu'une opinion sur une idée abstraite.\n\n" +
            "## Le déroulé d'un bon entretien\n\n" +
            "1. Mettre à l'aise, expliquer qu'il n'y a pas de mauvaise réponse, qu'on ne vend rien.\n" +
            "2. Faire raconter le dernier épisode concret lié au problème (le dernier trajet).\n" +
            "3. Creuser les irritants : \"qu'avez-vous fait quand c'est arrivé ?\", \"combien de fois ça vous arrive ?\".\n" +
            "4. Comprendre les solutions de contournement actuelles : covoiturage informel avec un collègue, transports, rien du tout.\n" +
            "5. Se taire. Le silence fait parler. La règle : l'interviewé parle 80 % du temps.\n\n" +
            "## Les pièges qui invalident tout\n\n" +
            "- **Les questions fermées** qui appellent oui/non tuent la richesse. Préférez \"comment\", \"pourquoi\", \"racontez\".\n" +
            "- **Pitcher son idée** : dès que vous décrivez Covio, l'interviewé devient poli et cherche à vous faire plaisir. Gardez votre solution pour la fin, ou pas du tout.\n" +
            "- **Les compliments** (\"super idée !\") ne valent rien. Ce qui compte, ce sont les engagements concrets : un rendez-vous suivant, une intro à un collègue, l'installation d'un prototype.\n\n" +
            "Cinq à huit entretiens bien menés sur un même segment suffisent souvent à faire émerger des schémas nets. Au-delà, on entend les mêmes choses.\n\n" +
            "> À retenir : si l'interviewé vous fait des compliments, l'entretien a raté. Vous cherchez des faits sur son passé, pas une validation de votre idée.",
        },
        {
          id: "l10",
          title: "L'Opportunity Solution Tree",
          type: "text",
          duration: "16 min",
          body:
            "## Relier les découvertes aux décisions\n\n" +
            "Après quelques entretiens, vous avez une masse d'irritants, de besoins, d'anecdotes. Comment passer de ce désordre à des décisions produit tracées ? L'**Opportunity Solution Tree** (OST), formalisé par Teresa Torres dans Continuous Discovery Habits, est l'outil qui structure ça. C'est un arbre à quatre niveaux.\n\n" +
            "- **La racine** : le résultat visé (outcome), typiquement lié à la north star ou à un OKR.\n" +
            "- **Les opportunités** : les besoins, points de douleur et désirs découverts en entretien. Ce sont des problèmes, pas des solutions.\n" +
            "- **Les solutions** : les idées de fonctionnalités qui pourraient adresser une opportunité.\n" +
            "- **Les expérimentations** : les tests pour valider qu'une solution marche vraiment (prototype, A/B test, maquette testée).\n\n" +
            "## L'OST de Covio\n\n" +
            "Prenons comme racine l'outcome \"réduire le taux d'annulation conducteur\" (notre KR 3).\n\n" +
            "Opportunités découvertes en entretien :\n\n" +
            "- \"Parfois j'ai un imprévu et je me sens coupable de laisser tomber mon passager, alors je préfère ne pas m'engager du tout.\"\n" +
            "- \"Le passager n'est pas prêt à l'heure et je pars sans lui, ça compte comme une annulation.\"\n" +
            "- \"Je ne sais jamais si la personne va vraiment venir, donc j'hésite à proposer mon trajet.\"\n\n" +
            "Chacune de ces opportunités peut ouvrir plusieurs solutions. Pour la première (\"je me sens coupable, donc je ne m'engage pas\") : une garantie \"trajet de secours\" qui reloge le passager si le conducteur annule, ou une fenêtre d'annulation sans pénalité jusqu'à H-2, ou un système de remplaçant automatique. Trois solutions concurrentes pour un même problème.\n\n" +
            "## Pourquoi cette structure change tout\n\n" +
            "L'OST vous force à deux disciplines. D'abord, séparer le problème de la solution : tant qu'une opportunité n'a qu'une seule solution possible, vous n'avez probablement pas assez réfléchi. Ensuite, choisir *quelle opportunité* attaquer avant de choisir *quelle solution*. Beaucoup de POs sautent directement aux solutions (\"faisons une garantie de trajet\") sans avoir comparé les opportunités entre elles. Or si l'annulation vient surtout du passager pas prêt, la garantie conducteur ne sert à rien.\n\n" +
            "## L'arbre est vivant\n\n" +
            "Un OST n'est pas un livrable qu'on fait une fois. Il grossit à mesure que la découverte continue, en parallèle du delivery. Chaque semaine, de nouveaux entretiens ajoutent des opportunités, des expérimentations en écartent, l'arbre se taille. C'est ce que Teresa Torres appelle la découverte continue : découvrir et livrer ne sont pas deux phases successives mais deux flux permanents.\n\n" +
            "> À retenir : une opportunité est un problème formulé du point de vue de l'utilisateur, jamais une solution déguisée. \"Les gens veulent une garantie de trajet\" est une solution ; \"les gens n'osent pas s'engager par peur de décevoir\" est une opportunité.",
        },
        {
          id: "l11",
          title: "Démonstration : de l'entretien à l'arbre d'opportunités",
          type: "video",
          duration: "14 min",
          videoLabel: "Atelier filmé : dépouiller 5 entretiens et bâtir un OST sur Miro",
          body:
            "## Ce que montre la démo\n\n" +
            "Cette séance filmée reprend cinq entretiens réalisés auprès de conducteurs Covio et montre, étape par étape, comment on passe des verbatims bruts à un Opportunity Solution Tree exploitable. Voici les notes complètes de l'atelier, à suivre en parallèle si vous voulez reproduire l'exercice sur votre propre produit.\n\n" +
            "## Étape 1 — Extraire les verbatims\n\n" +
            "On relit chaque entretien et on surligne les phrases qui expriment un besoin, une douleur ou un contournement. On copie chaque verbatim tel quel sur un post-it numérique. Exemples réels tirés des entretiens Covio :\n\n" +
            "- \"J'ai proposé mon trajet une fois, personne n'a réservé, j'ai pas retenté.\"\n" +
            "- \"Le mec a annulé à 7h45, j'étais déjà à l'arrêt, j'ai pris ma voiture en catastrophe.\"\n" +
            "- \"Je fais du covoiturage avec un collègue mais on s'organise par SMS, l'app je l'ai désinstallée.\"\n\n" +
            "Règle de l'atelier : on garde les mots de l'utilisateur, on ne les reformule pas encore en langage produit. La reformulation prématurée fait perdre le sens.\n\n" +
            "## Étape 2 — Regrouper en opportunités\n\n" +
            "On rapproche les verbatims qui parlent du même problème sous-jacent. Trois grappes émergent :\n\n" +
            "1. La peur de proposer un trajet dans le vide (personne ne réserve).\n" +
            "2. Le stress de l'annulation de dernière minute côté conducteur comme passager.\n" +
            "3. La concurrence des solutions informelles (SMS entre collègues) qui vident l'app de son intérêt.\n\n" +
            "Chaque grappe devient une opportunité, formulée côté utilisateur : par exemple \"je n'ose pas proposer un trajet car je crains que personne ne réserve\".\n\n" +
            "## Étape 3 — Relier à l'outcome et arbitrer\n\n" +
            "On accroche chaque opportunité à la racine de l'arbre (ici : augmenter les trajets réalisés). Puis on estime grossièrement, pour chacune : combien d'utilisateurs concernés, quelle intensité de douleur, quel lien avec l'outcome. La grappe 2 (annulations) touche presque tous les interviewés et bloque directement des trajets déjà quasi conclus. On la marque comme opportunité prioritaire du cycle.\n\n" +
            "## Étape 4 — Ouvrir plusieurs solutions\n\n" +
            "Sur l'opportunité retenue, on s'oblige à lister au moins trois solutions avant d'en choisir une, pour ne pas tomber amoureux de la première idée. Garantie de trajet de secours, fenêtre d'annulation avec préavis, file d'attente de passagers de remplacement. On note en face de chacune l'expérimentation la moins chère pour la tester avant de s'engager en développement.\n\n" +
            "> À retenir : la valeur de l'exercice n'est pas le joli arbre final, c'est la discipline de séparer verbatim, opportunité et solution. Refaites-le vous-même sur trois entretiens, même imparfaits, plutôt que de regarder passivement.",
        },
        {
          id: "l12",
          title: "Quiz — Découverte produit",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Quelle question d'entretien respecte le principe du Mom Test ?",
              options: [
                "\"Utiliseriez-vous une app de covoiturage domicile-travail ?\"",
                "\"Racontez-moi comment vous êtes venu travailler ce matin et ce qui vous a agacé.\"",
                "\"Trouvez-vous que le covoiturage est une bonne idée ?\"",
                "\"Notre app avec garantie de trajet, ça vous plairait ?\"",
              ],
              correctIndex: 1,
              explanation:
                "Le Mom Test impose de parler du passé concret et vérifiable de la personne, pas de son opinion sur votre idée. \"Racontez-moi ce matin\" produit des faits ; les trois autres appellent des réponses polies et hypothétiques sans valeur.",
            },
            {
              id: "q10",
              prompt:
                "Dans un Opportunity Solution Tree, qu'est-ce qu'une \"opportunité\" ?",
              options: [
                "Une fonctionnalité à développer",
                "Un problème, besoin ou point de douleur exprimé du point de vue de l'utilisateur",
                "Un résultat business chiffré",
                "Une expérimentation de validation",
              ],
              correctIndex: 1,
              explanation:
                "Une opportunité décrit un problème utilisateur, pas une solution. La confondre avec une fonctionnalité (\"faire une garantie de trajet\") fait sauter l'étape la plus importante : comparer les problèmes entre eux avant de choisir quoi construire.",
            },
            {
              id: "q11",
              prompt:
                "Un interviewé conclut par \"franchement c'est une super idée, bravo !\". Comment un PO expérimenté l'interprète ?",
              options: [
                "Comme une validation forte : on peut lancer le développement",
                "Comme un signal faible, voire un échec de l'entretien : les compliments ne sont pas des faits",
                "Comme une preuve du product-market fit",
                "Comme un engagement d'achat",
              ],
              correctIndex: 1,
              explanation:
                "Les compliments coûtent zéro à celui qui les fait et ne prédisent aucun comportement. Ce qui compte, ce sont les engagements concrets (un prochain rendez-vous, une intro, l'installation d'un prototype). Un entretien qui finit en compliments a souvent dérivé vers le pitch.",
            },
            {
              id: "q12",
              prompt:
                "Pourquoi s'oblige-t-on à lister plusieurs solutions par opportunité dans un OST ?",
              options: [
                "Pour remplir l'arbre et impressionner la direction",
                "Pour éviter de s'attacher à la première idée et pouvoir comparer avant de s'engager en développement",
                "Parce que Scrum l'exige",
                "Pour augmenter le nombre de story points",
              ],
              correctIndex: 1,
              explanation:
                "Lister plusieurs solutions concurrentes force à traiter chaque idée comme une hypothèse parmi d'autres, testable et comparable, au lieu de foncer sur la première venue. C'est une protection contre le biais d'engagement, très coûteux quand on découvre trop tard que la solution choisie ne marchait pas.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Backlog et user stories",
      lessons: [
        {
          id: "l13",
          title: "Le backlog produit et son affinage",
          type: "text",
          duration: "16 min",
          body:
            "## Un backlog, pas une décharge\n\n" +
            "Le Product Backlog est la liste ordonnée de tout ce qui pourrait être fait sur le produit. \"Ordonnée\" est le mot clé : ce n'est pas un tas d'idées, c'est une file de priorité. Le premier élément est ce que l'équipe fera ensuite, et chaque élément est plus prioritaire que celui d'en dessous. Un backlog où tout est \"haute priorité\" n'est pas priorisé du tout.\n\n" +
            "Un bon backlog respecte la structure DEEP (Roman Pichler à nouveau) :\n\n" +
            "- **Detailed appropriately** : les éléments du haut sont détaillés et prêts, ceux du bas restent grossiers. Inutile de spécifier finement une story qu'on fera dans six mois.\n" +
            "- **Estimated** : les éléments sont estimés, avec une précision qui décroît vers le bas.\n" +
            "- **Emergent** : le backlog vit, on ajoute, retire, réordonne en continu.\n" +
            "- **Prioritized** : ordonné par valeur/priorité.\n\n" +
            "## La forme d'un backlog sain\n\n" +
            "Imaginez une pyramide inversée. En haut, quelques stories fines, prêtes à partir en sprint, avec critères d'acceptation. Au milieu, des éléments à moitié dégrossis. En bas, de gros blocs vagues, des épopées (epics) qu'on affinera le moment venu. C'est normal et sain. Vouloir tout spécifier d'avance, c'est du gaspillage : la moitié de ces stories changeront ou disparaîtront avant qu'on les touche.\n\n" +
            "## Le refinement, l'atelier le plus sous-estimé\n\n" +
            "L'affinage (backlog refinement ou grooming) est la réunion récurrente où l'équipe et le PO préparent le haut du backlog : clarifier les stories, les découper, les estimer, lever les questions. Ce n'est pas une cérémonie officielle de Scrum avec un cadre strict, mais dans la pratique c'est là que se joue la qualité des sprints. Une équipe qui n'affine pas arrive au sprint planning avec des stories floues, passe deux heures à débattre, et s'engage sur du travail mal compris.\n\n" +
            "Comptez environ 10 % du temps de l'équipe pour l'affinage — une à deux heures par semaine. Le PO y arrive préparé : il a une idée de la priorité, les objectifs métier, les maquettes s'il y en a. L'équipe apporte le regard technique : faisabilité, découpage, dépendances, pièges.\n\n" +
            "## La notion de \"Ready\"\n\n" +
            "Beaucoup d'équipes se dotent d'une Definition of Ready : les critères qu'une story doit remplir pour entrer en sprint. Typiquement : problème clair, critères d'acceptation écrits, estimée, dépendances identifiées, assez petite pour tenir dans un sprint. Une story qui n'est pas Ready ne devrait pas être planifiée. C'est le meilleur rempart contre les sprints qui explosent parce qu'on a découvert la complexité en cours de route.\n\n" +
            "Pour Covio, une epic comme \"gérer les paiements entre particuliers\" reste en bas, vague, tant qu'on n'y arrive pas. Quand elle remonte, on l'affine : découpage en stories (autoriser une carte, débiter à la fin du trajet, rembourser en cas d'annulation, gérer les litiges), et chacune passe le filtre Ready avant d'entrer en sprint.\n\n" +
            "> À retenir : le backlog n'est pas figé et n'a pas à être exhaustif. Un PO passe une part importante de son temps à le tailler — c'est un jardin, pas une archive.",
        },
        {
          id: "l14",
          title: "Écrire une bonne user story : format, critères, INVEST",
          type: "text",
          duration: "17 min",
          body:
            "## La story n'est pas une spec, c'est une promesse de conversation\n\n" +
            "Une user story n'est pas un cahier des charges. C'est un rappel qu'il faudra parler d'un besoin utilisateur. Sa valeur tient autant dans la discussion qu'elle déclenche que dans le texte. Le format le plus courant, popularisé par Mike Cohn :\n\n" +
            "\"En tant que [rôle], je veux [action], afin de [bénéfice].\"\n\n" +
            "Pour Covio : \"En tant que passager, je veux annuler un trajet jusqu'à 2h avant le départ sans pénalité, afin de ne pas hésiter à réserver par peur d'un imprévu.\"\n\n" +
            "Le \"afin de\" est la partie la plus importante et la plus souvent bâclée. Il porte le *pourquoi*. Sans lui, l'équipe construit une mécanique sans comprendre l'intention, et passe à côté de meilleures solutions. Ici, le vrai besoin n'est pas \"un bouton annuler\", c'est \"réserver sans stress\". Ça ouvre d'autres pistes qu'un simple bouton.\n\n" +
            "## Les critères d'acceptation : le cœur testable\n\n" +
            "Une story sans critères d'acceptation (acceptance criteria) n'est pas prête. Les critères définissent ce que \"fini et correct\" veut dire, sans ambiguïté. Deux formats répandus :\n\n" +
            "Liste à cocher, simple et efficace :\n\n" +
            "- L'annulation gratuite est possible tant qu'il reste plus de 2h avant le départ.\n" +
            "- Passé ce délai, l'annulation est possible mais facture les frais de réservation.\n" +
            "- Le conducteur est notifié immédiatement de toute annulation.\n" +
            "- Un passager qui annule trois fois en gratuit sur 30 jours reçoit un avertissement.\n\n" +
            "Format Gherkin (Given / When / Then), utile quand le comportement dépend du contexte :\n\n" +
            "\"Étant donné un trajet dont le départ est dans 3h, quand le passager clique sur annuler, alors l'annulation est gratuite et le conducteur reçoit une notification.\"\n\n" +
            "Les bons critères sont testables : on peut dire objectivement s'ils sont remplis. \"L'annulation doit être fluide\" n'est pas un critère, c'est un vœu.\n\n" +
            "## INVEST : la checklist qualité\n\n" +
            "Bill Wake a formalisé six qualités d'une bonne story sous l'acronyme INVEST :\n\n" +
            "- **Independent** : autonome, on peut la livrer sans dépendre d'une autre.\n" +
            "- **Negotiable** : c'est une base de discussion, pas un contrat gravé.\n" +
            "- **Valuable** : elle apporte une valeur perceptible à un utilisateur ou au business.\n" +
            "- **Estimable** : l'équipe peut en évaluer l'effort.\n" +
            "- **Small** : elle tient largement dans un sprint.\n" +
            "- **Testable** : on sait vérifier qu'elle est faite, via ses critères.\n\n" +
            "Si une story échoue à un critère, c'est un signal. Pas estimable ? Elle est trop floue, il faut la clarifier ou la spiker. Pas small ? Il faut la découper (prochaine leçon). Pas valuable ? Pourquoi est-elle dans le backlog ?\n\n" +
            "## L'erreur classique : la story technique déguisée\n\n" +
            "\"En tant qu'utilisateur, je veux une base de données PostgreSQL, afin de stocker les trajets.\" Aucun utilisateur ne veut une base de données. C'est une tâche technique maquillée en story. Les vraies stories parlent de valeur utilisateur ou métier. Le travail technique existe, mais il se rattache à une story de valeur, il ne se déguise pas en une.\n\n" +
            "> À retenir : testez chaque story avec le \"afin de\". Si le bénéfice sonne creux ou tautologique (\"afin de pouvoir le faire\"), la story ne porte pas de valeur claire et mérite d'être réinterrogée.",
        },
        {
          id: "l15",
          title: "Découper une story trop grosse",
          type: "text",
          duration: "16 min",
          body:
            "## Pourquoi on découpe\n\n" +
            "Une story qui ne tient pas dans un sprint est une story qu'on comprend mal et qu'on ne peut pas livrer. Le découpage (story splitting) est une des compétences les plus concrètement utiles du PO. L'objectif : obtenir des stories petites, chacune livrant une part de valeur réelle, testable indépendamment. Le piège à éviter absolument : découper par couche technique.\n\n" +
            "## Le mauvais découpage : par couche\n\n" +
            "Story trop grosse : \"réserver et payer un trajet\". Découpage naïf :\n\n" +
            "- Story 1 : faire le back-end de la réservation.\n" +
            "- Story 2 : faire le front-end de la réservation.\n" +
            "- Story 3 : brancher le paiement.\n\n" +
            "Problème : aucune de ces stories ne livre de valeur seule. Le back-end sans front ne sert à personne, on ne peut pas le montrer en review, et on ne saura que ça marche vraiment qu'à la fin des trois. C'est du découpage horizontal, à proscrire.\n\n" +
            "## Le bon découpage : par tranches verticales\n\n" +
            "On cherche des tranches fines qui traversent toutes les couches et livrent chacune quelque chose d'utilisable. Plusieurs patterns classiques (issus du travail de Richard Lawrence sur le splitting) :\n\n" +
            "- **Par flux (workflow steps)** : d'abord réserver un trajet gratuit (test interne), puis ajouter le paiement dans une story suivante.\n" +
            "- **Par règle métier** : d'abord le cas nominal (paiement par carte qui réussit), puis les cas particuliers (paiement refusé, remboursement) en stories séparées.\n" +
            "- **Par variation de données** : d'abord les trajets à un seul passager, plus tard les trajets à plusieurs passagers.\n" +
            "- **Par plateforme ou canal** : d'abord la réservation sur mobile, plus tard sur le web.\n" +
            "- **Par effort/qualité** : d'abord une version simple qui marche, puis l'optimisation (matching basique, puis matching intelligent par proximité).\n\n" +
            "## Appliqué à Covio\n\n" +
            "L'epic \"réserver et payer un trajet\" se découpe par exemple ainsi :\n\n" +
            "1. Réserver une place sur un trajet gratuit (sans paiement) — livre déjà la valeur \"mise en relation\".\n" +
            "2. Payer par carte enregistrée quand la réservation est confirmée, cas nominal seulement.\n" +
            "3. Gérer le refus de paiement et proposer une nouvelle tentative.\n" +
            "4. Rembourser automatiquement en cas d'annulation dans les délais.\n\n" +
            "Chaque story est démontrable, testable, et apporte une valeur incrémentale. On peut même s'arrêter après la 1 si les priorités changent, et avoir livré quelque chose d'utile.\n\n" +
            "## Le signe qu'on a bien découpé\n\n" +
            "Chaque tranche doit pouvoir se raconter comme un bénéfice, même petit : \"maintenant un passager peut réserver\", \"maintenant on encaisse\". Si une tranche ne se raconte pas côté utilisateur (\"maintenant la table SQL existe\"), c'est probablement un découpage horizontal déguisé. Et gardez les tranches à peu près équilibrées : une story de 8 points et cinq de 1 point dans la même epic, c'est souvent un signe qu'on n'a pas fini de réfléchir à la grosse.\n\n" +
            "> À retenir : on découpe une story comme on tranche un gâteau, verticalement — chaque part contient de la génoise et de la crème (toutes les couches), jamais en séparant la génoise de la crème.",
        },
        {
          id: "l16",
          title: "Quiz — Backlog et user stories",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Dans le format \"En tant que… je veux… afin de…\", pourquoi la partie \"afin de\" est-elle cruciale ?",
              options: [
                "Elle rend la story plus longue et donc plus complète",
                "Elle porte le bénéfice et l'intention, ce qui permet à l'équipe de trouver de meilleures solutions que la première venue",
                "Elle est obligatoire dans Jira",
                "Elle sert à estimer les story points",
              ],
              correctIndex: 1,
              explanation:
                "Le \"afin de\" explicite le pourquoi. Sans lui, l'équipe implémente une mécanique sans comprendre l'objectif et passe à côté d'alternatives parfois meilleures. C'est aussi le meilleur test de la valeur d'une story : si le bénéfice sonne creux, la story est à réinterroger.",
            },
            {
              id: "q14",
              prompt:
                "\"En tant qu'utilisateur, je veux une base de données PostgreSQL afin de stocker les trajets.\" Quel est le problème ?",
              options: [
                "PostgreSQL n'est pas assez performant",
                "C'est une tâche technique déguisée en story : aucun utilisateur ne tire de valeur d'une base de données en tant que telle",
                "Il manque les critères d'acceptation",
                "Le rôle devrait être 'administrateur'",
              ],
              correctIndex: 1,
              explanation:
                "Une user story doit exprimer une valeur pour un utilisateur ou le business. Ici, c'est du travail technique maquillé. Le travail technique est légitime, mais il se rattache à une story de valeur au lieu de se présenter comme une fin en soi. Le critère INVEST enfreint est 'Valuable'.",
            },
            {
              id: "q15",
              prompt:
                "On veut découper l'epic \"réserver et payer un trajet\". Quel découpage est correct (vertical) ?",
              options: [
                "Back-end / Front-end / Intégration paiement",
                "Réserver un trajet gratuit, puis payer le cas nominal, puis gérer le refus de paiement, puis le remboursement",
                "Base de données / API / Interface",
                "Analyse / Développement / Tests",
              ],
              correctIndex: 1,
              explanation:
                "Le bon découpage est vertical : chaque tranche traverse toutes les couches et livre une valeur démontrable et testable. Les découpages par couche technique (back/front, DB/API/UI, analyse/dev/tests) ne livrent rien d'utilisable avant la toute fin et ne se démontrent pas en review.",
            },
            {
              id: "q16",
              prompt:
                "Une story est jugée \"non estimable\" par l'équipe pendant l'affinage. Que révèle ce signal INVEST ?",
              options: [
                "Que l'équipe manque d'expérience et doit estimer quand même",
                "Que la story est trop floue ou trop incertaine : il faut la clarifier, la découper, ou lancer un spike pour lever l'inconnue",
                "Qu'il faut la mettre directement en sprint pour apprendre",
                "Qu'elle a trop de valeur",
              ],
              correctIndex: 1,
              explanation:
                "\"Non estimable\" signale un manque de compréhension ou une incertitude technique. La bonne réaction est de traiter la cause : clarifier le besoin, découper, ou faire un spike (petite investigation encadrée). Estimer à l'aveugle ou planifier tel quel garantit un sprint qui dérape.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Prioriser et estimer",
      lessons: [
        {
          id: "l17",
          title: "Prioriser : RICE, MoSCoW, Kano, WSJF",
          type: "text",
          duration: "18 min",
          body:
            "## Aucune méthode n'est magique, chacune a son terrain\n\n" +
            "Prioriser, c'est le cœur du métier. Les frameworks ne décident pas à votre place, ils structurent la discussion et rendent vos arbitrages défendables. Voici les quatre les plus utilisés, avec le contexte où chacun brille.\n\n" +
            "## RICE : arbitrer entre initiatives comparables\n\n" +
            "Développé par Intercom, RICE note chaque élément sur un score : (Reach × Impact × Confidence) / Effort.\n\n" +
            "- **Reach** : combien d'utilisateurs touchés sur une période (ex. 500 passagers/mois).\n" +
            "- **Impact** : ampleur de l'effet, sur une échelle (3 = massif, 1 = moyen, 0,25 = minime).\n" +
            "- **Confidence** : votre certitude, en pourcentage, qui pénalise les paris hasardeux.\n" +
            "- **Effort** : le coût en personne-mois.\n\n" +
            "Exemple Covio. Garantie de trajet de secours : Reach 500, Impact 2, Confidence 80 %, Effort 3 → (500 × 2 × 0,8) / 3 = 267. Notifications de rappel : Reach 2000, Impact 0,5, Confidence 100 %, Effort 1 → 1000. La méthode révèle que les notifications, moins spectaculaires, ont un meilleur ratio valeur/effort. RICE est excellent pour comparer objectivement des initiatives et casser les décisions à l'instinct.\n\n" +
            "## MoSCoW : cadrer un périmètre, une release\n\n" +
            "MoSCoW classe en quatre catégories : **Must have** (sans quoi la release n'a pas de sens), **Should have** (important mais pas vital), **Could have** (bonus si le temps le permet), **Won't have** (explicitement hors périmètre cette fois). Pour le lancement pilote de Covio : Must = matching et réservation ; Should = paiement ; Could = notation du conducteur ; Won't = version web. Sa force : aligner les parties prenantes sur ce qui est *dedans* et surtout ce qui est *dehors*. Son piège : tout le monde veut mettre son sujet en Must. Une règle saine : les Must ne dépassent pas 60 % de l'effort.\n\n" +
            "## Kano : comprendre la satisfaction, pas juste la valeur\n\n" +
            "Le modèle Kano classe les fonctionnalités selon leur effet sur la satisfaction :\n\n" +
            "- **Basiques (must-be)** : attendues, invisibles si présentes, catastrophiques si absentes. Pour Covio : que le trajet réservé ait bien lieu. Personne ne vous remercie pour ça, mais son absence tue le produit.\n" +
            "- **De performance** : plus il y en a, plus les gens sont contents (temps de matching plus court, prix plus bas).\n" +
            "- **Attractives (delighters)** : inattendues, créent l'enthousiasme (un café offert au point de rendez-vous, un badge écolo). Leur absence ne manque à personne.\n\n" +
            "Kano rappelle une chose que RICE ignore : il faut couvrir les basiques *avant* d'ajouter des delighters. Un delighter sur un produit dont les basiques flanchent ne sert à rien. Les attentes évoluent aussi : un delighter d'hier devient un basique de demain.\n\n" +
            "## WSJF : prioriser par coût du délai\n\n" +
            "Issu de SAFe, le Weighted Shortest Job First calcule : Coût du Délai / Durée du travail. Le Coût du Délai combine valeur métier, urgence temporelle et réduction de risque. L'idée forte : faire d'abord ce qui coûte cher à retarder et se fait vite. Une fonctionnalité très urgente mais énorme peut passer derrière une petite qui rapporte presque autant. WSJF s'utilise surtout dans les contextes à l'échelle (plusieurs équipes) où le séquencement compte beaucoup.\n\n" +
            "## Comment choisir\n\n" +
            "Comparer des features entre elles ? RICE. Cadrer le périmètre d'une release avec des parties prenantes ? MoSCoW. Comprendre quels investissements créent de la satisfaction ? Kano. Séquencer à l'échelle sous contrainte de temps ? WSJF. Un bon PO en connaît plusieurs et sort le bon outil selon la question posée, plutôt que d'appliquer religieusement un seul framework à toutes les sauces.\n\n" +
            "> À retenir : le chiffre que crache un framework n'est pas une vérité, c'est le résumé d'hypothèses (le Reach, l'Impact, la Confidence sont vos estimations). L'intérêt est la conversation qu'il déclenche, pas la décimale finale.",
        },
        {
          id: "l18",
          title: "Estimer : story points et planning poker",
          type: "text",
          duration: "16 min",
          body:
            "## Pourquoi pas des jours ?\n\n" +
            "La question qui revient toujours : pourquoi estimer en points abstraits plutôt qu'en heures ou en jours ? Parce que les humains sont mauvais pour estimer une durée absolue mais plutôt bons pour comparer des tailles relatives. On ne sait pas dire \"ça prend 6h37\", mais on sait dire \"c'est à peu près deux fois plus gros que ça\". Le story point mesure une taille relative qui mêle complexité, effort et incertitude, pas une durée.\n\n" +
            "Autre raison, plus politique : une estimation en jours devient vite un engagement contractuel qu'on vous reproche. \"Tu avais dit 3 jours.\" Les points cassent cette illusion de précision et gardent l'estimation dans le registre de la prévision d'équipe, pas de la promesse individuelle.\n\n" +
            "## La suite de Fibonacci\n\n" +
            "On estime en général sur une suite proche de Fibonacci : 1, 2, 3, 5, 8, 13, 20… Les écarts se creusent volontairement vers le haut. Pourquoi ? Parce que plus une story est grosse, plus l'incertitude est grande, et une fausse précision (\"c'est 14, pas 15\") n'aurait aucun sens. Une story à 13 ou plus est un signal : elle est probablement trop grosse et devrait être découpée avant d'entrer en sprint.\n\n" +
            "## Le planning poker\n\n" +
            "L'estimation collective se fait souvent en planning poker :\n\n" +
            "1. Le PO présente une story et répond aux questions (il n'estime pas, il clarifie).\n" +
            "2. Chaque développeur choisit une carte (un chiffre de la suite) en secret.\n" +
            "3. Tout le monde révèle en même temps.\n" +
            "4. Si les estimations divergent fortement, ceux qui ont voté le plus bas et le plus haut expliquent. C'est là qu'est la valeur : l'un a vu un piège que l'autre ignorait, ou l'inverse.\n" +
            "5. On rediscute, on revote, jusqu'à convergence raisonnable.\n\n" +
            "Le vote simultané et secret évite l'effet d'ancrage : si le lead annonce \"5\" à voix haute, tout le monde s'aligne sans réfléchir. Le désaccord n'est pas un problème à étouffer, c'est le signal le plus précieux de l'exercice — il révèle une compréhension différente de la story.\n\n" +
            "## Vélocité, pas productivité\n\n" +
            "La somme des points livrés par sprint donne la **vélocité**, qui sert à prévoir combien de travail l'équipe peut prendre. Une équipe qui livre en moyenne 30 points par sprint ne devrait pas s'engager sur 45. Deux avertissements majeurs :\n\n" +
            "- La vélocité n'est **pas** un indicateur de performance et ne se compare **jamais** entre équipes. Les points d'une équipe n'ont aucun sens pour une autre. Un manager qui met deux équipes en concurrence sur la vélocité pousse à l'inflation des estimations, et le chiffre perd tout sens.\n" +
            "- Ne cherchez pas à faire monter la vélocité. C'est une jauge de prévision, pas un objectif. La faire monter artificiellement (gonfler les points) ne livre rien de plus aux utilisateurs.\n\n" +
            "## Le PO et l'estimation\n\n" +
            "Le rôle du PO en estimation est clair : il apporte le contexte, répond aux questions, mais **il n'estime pas**. Ce sont ceux qui feront le travail qui l'évaluent. Un PO qui impose ses chiffres (\"non, ça c'est un 3\") détruit tout l'intérêt de l'exercice et, à terme, la confiance de l'équipe.\n\n" +
            "> À retenir : le story point n'est pas une heure déguisée. Dès que quelqu'un demande \"ça fait combien de jours, un point ?\", le sens de la démarche est en train de se perdre.",
        },
        {
          id: "l19",
          title: "Quiz — Priorisation et estimation",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Fonctionnalité A : Reach 500, Impact 2, Confidence 80 %, Effort 3. Fonctionnalité B : Reach 2000, Impact 0,5, Confidence 100 %, Effort 1. Selon RICE, laquelle est prioritaire ?",
              options: [
                "A, car son Impact unitaire est plus élevé",
                "B, car son score RICE (1000) est nettement supérieur à celui de A (≈267)",
                "Elles sont à égalité",
                "Impossible à dire sans les story points",
              ],
              correctIndex: 1,
              explanation:
                "RICE = (Reach × Impact × Confidence) / Effort. A = (500 × 2 × 0,8) / 3 ≈ 267. B = (2000 × 0,5 × 1) / 1 = 1000. B gagne largement, malgré un Impact unitaire plus faible, grâce à sa portée, sa certitude et son faible effort. C'est justement l'intérêt de RICE : contredire l'intuition qui surévalue les features spectaculaires.",
            },
            {
              id: "q18",
              prompt:
                "Dans le modèle Kano, \"le trajet réservé a effectivement lieu\" est une fonctionnalité de type :",
              options: [
                "Attractive (delighter) : elle crée de l'enthousiasme",
                "De performance : plus il y en a, mieux c'est",
                "Basique (must-be) : invisible si présente, catastrophique si absente",
                "Indifférente : sans effet sur la satisfaction",
              ],
              correctIndex: 2,
              explanation:
                "Qu'un trajet réservé ait lieu est une attente de base : personne ne félicite l'app pour ça, mais son absence détruit la confiance et le produit. Kano rappelle qu'il faut sécuriser les basiques avant d'investir dans des delighters, qu'un produit défaillant ne pourra jamais compenser.",
            },
            {
              id: "q19",
              prompt:
                "Pourquoi la vélocité d'une équipe ne doit-elle jamais servir à comparer deux équipes ?",
              options: [
                "Parce que c'est interdit par le Scrum Guide sous peine de sanction",
                "Parce que les story points sont une unité relative propre à chaque équipe : ils n'ont aucune signification transférable, et comparer pousse à gonfler les estimations",
                "Parce que les équipes n'ont pas le même nombre de développeurs",
                "Parce que la vélocité change à chaque sprint",
              ],
              correctIndex: 1,
              explanation:
                "Les points sont une échelle interne, calibrée par et pour une équipe donnée. Un 5 chez l'une n'égale pas un 5 chez l'autre. Mettre des équipes en concurrence sur la vélocité provoque une inflation des estimations et vide la métrique de son seul usage légitime : prévoir la charge d'une même équipe.",
            },
            {
              id: "q20",
              prompt:
                "Lors d'un planning poker, deux développeurs votent 3 et 13 pour la même story. Quelle est la bonne conduite ?",
              options: [
                "Prendre la moyenne (8) et passer à la suivante",
                "Faire revoter jusqu'à ce que tout le monde dise 3, la valeur la plus basse",
                "Faire expliquer les votes extrêmes : l'écart révèle une compréhension différente de la story, souvent un piège vu par l'un et pas par l'autre",
                "Laisser le PO trancher avec son estimation",
              ],
              correctIndex: 2,
              explanation:
                "Le désaccord est le signal le plus précieux du planning poker. Un écart 3/13 traduit une divergence de compréhension : peut-être une dépendance ou un cas limite que l'un a repéré. On fait expliquer, on aligne la compréhension, puis on revote. Faire une moyenne ou laisser le PO trancher gaspille cette information.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "L'agilité en pratique et les pièges du métier",
      lessons: [
        {
          id: "l20",
          title: "Scrum en pratique : le rôle du PO dans chaque cérémonie",
          type: "text",
          duration: "17 min",
          body:
            "## Le sprint, l'unité de rythme\n\n" +
            "Scrum organise le travail en sprints, des itérations de durée fixe (une à quatre semaines, deux étant le standard). Chaque sprint vise un incrément livrable. Autour de ce battement, quatre cérémonies, et le PO n'y tient pas le même rôle. Beaucoup de POs débutants surjouent dans certaines et sont absents dans d'autres. Voici la juste place.\n\n" +
            "## Sprint planning : le PO ouvre, l'équipe s'engage\n\n" +
            "En début de sprint, l'équipe décide de ce qu'elle prendra. Rôle du PO : arriver avec un backlog ordonné et affiné, proposer un **objectif de sprint** (Sprint Goal) clair — pour Covio, par exemple \"un passager peut réserver et payer un trajet de bout en bout\". Le PO explique le pourquoi et répond aux questions. Ce qu'il ne fait pas : imposer la quantité de travail. C'est l'équipe qui, au vu de sa vélocité et de sa capacité, s'engage sur ce qu'elle prend. Le PO tire vers la valeur, il ne remplit pas le sprint de force.\n\n" +
            "## Daily scrum : le PO écoute, ne dirige pas\n\n" +
            "La mêlée quotidienne (15 minutes) appartient aux développeurs. Ils se synchronisent : ce qui avance, ce qui bloque, le plan du jour. Le PO peut y assister pour rester au courant et débloquer une question métier rapide, mais il n'en fait pas un point de reporting où chacun lui rend des comptes. Une daily qui se transforme en réunion de statut face au PO est un anti-pattern fréquent. Si un blocage relève d'une décision produit, on le traite juste après, pas en étirant la mêlée.\n\n" +
            "## Sprint review : montrer et récolter du feedback\n\n" +
            "En fin de sprint, l'équipe présente l'incrément aux parties prenantes. C'est le moment fort du PO : il fait la démo (ou l'orchestre), recueille les retours, et surtout accepte ou refuse les stories au regard des critères d'acceptation. La review n'est pas une simple démonstration décorative, c'est une boucle de feedback qui alimente le backlog. Le PO y confronte le produit à la réalité et ajuste la suite. Si des parties prenantes découvrent le produit et disent \"ce n'est pas ça qu'on voulait\", c'est douloureux mais utile : mieux vaut l'apprendre là qu'après six mois.\n\n" +
            "## Rétrospective : le PO participe, à sa place\n\n" +
            "La rétro améliore la *façon de travailler* de l'équipe. Le PO y participe en tant que membre de l'équipe, pas en observateur ni en juge. C'est un espace de confiance, souvent facilité par le Scrum Master. Le PO doit y accepter la critique — parfois sur lui-même (\"les stories arrivent floues en planning\") — sans se braquer. Un PO qui utilise la rétro pour distribuer des reproches en tue l'utilité en une séance.\n\n" +
            "## Ce qui relie tout : la disponibilité\n\n" +
            "Entre les cérémonies, la contribution la plus précieuse du PO est d'être joignable. Une question sur une story qui reste sans réponse trois jours, c'est un sprint qui patine. Le PO n'a pas besoin d'être présent physiquement en continu, mais il doit répondre vite. C'est peu spectaculaire et c'est déterminant.\n\n" +
            "> À retenir : le PO est actif au planning et à la review, discret à la daily, humble en rétro. Se tromper de posture — diriger la daily, bâcler la review — est une des marques d'un PO qui débute.",
        },
        {
          id: "l21",
          title: "Kanban et gestion du flux",
          type: "text",
          duration: "15 min",
          body:
            "## Une autre façon de cadencer le travail\n\n" +
            "Scrum n'est pas la seule option. **Kanban** est une approche par flux continu, sans sprints ni engagements sur une itération. Le travail avance en continu à travers un tableau, et l'accent est mis sur la fluidité plutôt que sur le rythme fixe. Beaucoup d'équipes mélangent d'ailleurs les deux (on parle parfois de \"Scrumban\"). Un PO doit comprendre les deux, car le choix dépend du type de travail.\n\n" +
            "## Le tableau et ses colonnes\n\n" +
            "Un tableau Kanban visualise le flux : par exemple À faire → En cours → En revue → En test → Terminé. Chaque carte (une story, une tâche) progresse de gauche à droite. La règle centrale, souvent ignorée des débutants, ce sont les **limites de WIP** (Work In Progress) : on plafonne le nombre de cartes autorisées dans chaque colonne. Trois maximum \"en cours\", par exemple.\n\n" +
            "Pourquoi limiter ? Parce que trop de travail en parallèle ralentit tout. Une équipe qui a dix choses commencées et zéro terminée ne livre rien. Limiter le WIP force à *finir avant de commencer*, ce qui semble contre-intuitif mais accélère réellement la livraison de valeur. C'est le principe le plus important de Kanban.\n\n" +
            "## Les métriques de flux\n\n" +
            "Là où Scrum regarde la vélocité, Kanban regarde le flux :\n\n" +
            "- **Lead time** : temps entre l'entrée d'une demande dans le système et sa livraison. Ce que vit le demandeur.\n" +
            "- **Cycle time** : temps entre le début du travail effectif et la fin. Ce que contrôle l'équipe.\n" +
            "- **Débit (throughput)** : nombre d'éléments terminés par unité de temps.\n\n" +
            "Ces métriques permettent des prévisions probabilistes (\"85 % de nos stories sortent en moins de 6 jours\") sans passer par l'estimation en points. Certaines équipes matures abandonnent même les story points au profit du simple comptage d'items, en s'appuyant sur un cycle time stable.\n\n" +
            "## Quand Scrum, quand Kanban\n\n" +
            "Scrum convient bien à un travail qu'on peut planifier par lots, avec un objectif d'itération et un besoin de rythme et de rituels — le développement de nouvelles fonctionnalités. Kanban brille quand le travail arrive de façon imprévisible et doit être traité en continu : le support, la maintenance, une équipe de correction de bugs, ou une équipe plateforme sollicitée par d'autres. Pour Covio, l'équipe qui construit les nouvelles fonctionnalités pourrait tourner en Scrum, tandis qu'une petite équipe qui gère les incidents de paiement et les litiges tournerait en Kanban, avec des priorités qui changent d'heure en heure.\n\n" +
            "## Le rôle du PO en Kanban\n\n" +
            "Il change peu sur le fond : ordonner le travail, définir la valeur. Mais au lieu de remplir un sprint, le PO alimente et priorise la file d'entrée en continu. La question n'est plus \"que met-on dans le sprint ?\" mais \"quelle est la prochaine chose la plus importante à tirer quand une place se libère ?\". La priorisation devient un geste quotidien plutôt qu'un rendez-vous bihebdomadaire.\n\n" +
            "> À retenir : la limite de WIP est le cœur de Kanban. \"Arrêter de commencer, commencer à finir\" résume l'état d'esprit — et vaut aussi pour une équipe Scrum qui s'éparpille.",
        },
        {
          id: "l22",
          title: "Les métriques produit qui comptent",
          type: "text",
          duration: "16 min",
          body:
            "## Livrer n'est pas réussir\n\n" +
            "Un PO qui ne suit que la vélocité et le nombre de tickets fermés pilote à l'aveugle. Ces chiffres disent que l'équipe *produit*, pas que le produit *marche*. Les vraies métriques de PO mesurent le comportement des utilisateurs et l'atteinte des résultats. En voici les familles essentielles.\n\n" +
            "## Le framework AARRR (les métriques pirates)\n\n" +
            "Popularisé par Dave McClure, AARRR décrit le parcours d'un utilisateur en cinq étapes, chacune mesurable :\n\n" +
            "- **Acquisition** : comment les gens arrivent (téléchargements, visites). Pour Covio : nouvelles inscriptions par semaine.\n" +
            "- **Activation** : la première expérience de valeur. C'est LA métrique sous-estimée. Pour Covio, ce n'est pas l'inscription, c'est le premier trajet réservé et réalisé. Un utilisateur qui s'inscrit sans jamais faire un trajet n'est pas activé.\n" +
            "- **Rétention** : reviennent-ils ? Le nerf de la guerre d'un marketplace. Un covoiturage domicile-travail vit ou meurt sur la rétention : l'usage doit devenir hebdomadaire, sinon la masse critique locale s'effondre.\n" +
            "- **Revenu** : monétisation (commissions, abonnements employeurs).\n" +
            "- **Recommandation (referral)** : les utilisateurs en amènent-ils d'autres ? Décisif dans un produit à effet de réseau : un conducteur qui invite ses collègues crée son propre bassin de passagers.\n\n" +
            "## L'activation, obsession n°1 d'un jeune produit\n\n" +
            "Le piège classique : mettre toute l'énergie sur l'acquisition (plus d'inscrits !) alors que l'activation fuit. Verser de l'eau dans un seau percé. Définissez précisément votre \"moment d'activation\" — pour Covio, \"a réalisé un premier trajet dans les 7 jours suivant l'inscription\" — et mesurez le taux. S'il est bas, c'est là qu'est le problème, pas dans l'acquisition.\n\n" +
            "## Rétention : la cohorte plutôt que la moyenne\n\n" +
            "La rétention se lit en cohortes : on suit un groupe d'utilisateurs inscrits la même semaine et on regarde combien reviennent en semaine 1, 2, 4, 8. Une courbe de rétention qui s'aplatit (se stabilise au-dessus de zéro) est le meilleur signal de product-market fit. Une courbe qui descend vers zéro dit que le produit ne crée pas d'habitude, quel que soit le volume d'acquisition. La moyenne globale masque ça, la cohorte le révèle.\n\n" +
            "## NPS et la voix du client\n\n" +
            "Le **Net Promoter Score** demande \"recommanderiez-vous ce produit, de 0 à 10 ?\". On soustrait le pourcentage de détracteurs (0-6) du pourcentage de promoteurs (9-10). Utile comme tendance et pour la question ouverte qui l'accompagne (\"pourquoi cette note ?\"), qui vaut souvent plus que le chiffre. À manier avec prudence : c'est déclaratif, sensible au moment et à l'échantillon. Ne pilotez pas un produit au NPS seul.\n\n" +
            "## Relier au North Star\n\n" +
            "Toutes ces métriques doivent se raccrocher à la north star (partie 2). Pour Covio, trajets réalisés/semaine = activation (premiers trajets) × rétention (trajets répétés) × referral (nouveaux via invitation). Choisissez peu de métriques, reliées entre elles, plutôt qu'un tableau de bord de trente chiffres que personne ne regarde. Un bon jeu de métriques tient sur une main.\n\n" +
            "> À retenir : distinguez toujours métriques de vanité (inscrits, téléchargements, cumul) et métriques actionnables (taux d'activation, rétention par cohorte). Les premières flattent, les secondes font décider.",
        },
        {
          id: "l23",
          title: "Les pièges classiques du PO débutant",
          type: "text",
          duration: "16 min",
          body:
            "## Ces erreurs, presque tout le monde les fait une fois\n\n" +
            "Voici les fautes que je vois revenir chez presque chaque PO qui débute. Les connaître à l'avance ne vous en immunise pas totalement, mais raccourcit le temps passé à les payer.\n\n" +
            "## 1. Le PO guichet\n\n" +
            "On l'a vu dès la première leçon, mais c'est le piège mère. Accepter toutes les demandes, empiler les tickets, ne jamais dire non. Résultat : un backlog obèse, aucune priorité lisible, une équipe qui livre sans impact. Le remède : rattacher chaque demande à la vision et aux OKR, et refuser à voix haute ce qui ne s'y rattache pas.\n\n" +
            "## 2. Écrire des solutions au lieu de problèmes\n\n" +
            "Le PO arrive avec des stories qui décrivent une interface précise (\"un bouton bleu en haut à droite\") au lieu du problème à résoudre. Il vole à l'équipe la partie créative et se prive de meilleures idées. Décrivez le besoin et le résultat attendu, laissez l'équipe et le designer proposer le comment.\n\n" +
            "## 3. Sauter la découverte\n\n" +
            "Foncer en delivery sans avoir parlé à un seul utilisateur. On construit vite, proprement, et personne n'utilise. C'est l'erreur la plus coûteuse car elle ne se voit qu'à la fin, quand tout est livré. Un peu de découverte continue, même imparfaite, en amont, évite des trimestres de travail dans le vide.\n\n" +
            "## 4. Confondre occupation et progression\n\n" +
            "Mesurer le succès à la vélocité et au nombre de tickets fermés. Une équipe peut battre des records de points en construisant des choses inutiles. Le PO doit défendre les métriques de résultat (activation, rétention) contre la tentation de célébrer le volume de production.\n\n" +
            "## 5. Être indisponible\n\n" +
            "Un PO absent, injoignable, qui répond aux questions de l'équipe en trois jours, bloque tout le sprint. Le delivery agile suppose un flux constant de micro-décisions produit. Si elles s'accumulent sans réponse, l'équipe soit s'arrête, soit décide à votre place — souvent mal.\n\n" +
            "## 6. Négliger la dette technique\n\n" +
            "Le PO ne voit que les fonctionnalités visibles et refuse systématiquement le temps de refonte que réclame l'équipe. La dette s'accumule, la vélocité s'effondre lentement, et un jour chaque petite story coûte une fortune. Un bon PO ne comprend pas forcément la technique en détail, mais il fait confiance à l'équipe quand elle signale une dette et négocie un équilibre, pas un refus de principe.\n\n" +
            "## 7. Tout mettre en Must / haute priorité\n\n" +
            "Si tout est prioritaire, rien ne l'est. Un PO qui n'assume pas de hiérarchiser dur laisse l'équipe choisir à l'aveugle ou se laisse dicter l'ordre par la personne qui crie le plus fort. Priorisez de façon nette, quitte à ce que ce soit inconfortable.\n\n" +
            "## 8. Se prendre pour le chef\n\n" +
            "Confondre \"responsable de la valeur\" avec \"patron de l'équipe\". Imposer les estimations, distribuer les tâches, court-circuiter l'auto-organisation. On gagne un peu de contrôle à court terme, on perd l'engagement de l'équipe durablement. L'autorité du PO est celle de ses arguments, jamais celle d'un grade.\n\n" +
            "## Ce qui sépare un bon PO d'un mauvais\n\n" +
            "Ce n'est pas la maîtrise de Jira ni le nombre de frameworks récités. C'est la capacité à dire non avec des raisons, à rester connecté aux utilisateurs, et à mesurer le succès par l'impact plutôt que par le volume livré. Le reste s'apprend en le pratiquant, sprint après sprint.\n\n" +
            "> À retenir : la plupart de ces pièges dérivent d'une même racine — confondre activité et valeur. Chaque fois que vous doutez, revenez à la question fondatrice du métier : quelle est la prochaine chose la plus utile qu'on puisse livrer, et pourquoi celle-là ?",
        },
        {
          id: "l24",
          title: "Quiz — Agilité, métriques et pièges",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q21",
              prompt:
                "Pendant le daily scrum, quel est le comportement attendu d'un PO ?",
              options: [
                "Diriger la réunion et demander à chaque dev de lui rendre compte de l'avancement",
                "Assister pour rester informé et débloquer une question métier rapide, sans transformer la mêlée en reporting vers lui",
                "Ne jamais y assister, c'est interdit au PO",
                "Estimer les stories restantes avec l'équipe",
              ],
              correctIndex: 1,
              explanation:
                "La daily appartient aux développeurs qui se synchronisent entre eux. Le PO peut y assister pour le contexte et répondre à une question produit, mais en faire un point de reporting vers lui est un anti-pattern classique. L'estimation n'a pas sa place en daily.",
            },
            {
              id: "q22",
              prompt:
                "Une équipe Kanban a dix stories \"en cours\" et n'en termine aucune depuis des jours. Quel principe est enfreint ?",
              options: [
                "La suite de Fibonacci",
                "La limite de WIP (Work In Progress) : trop de travail commencé en parallèle bloque la livraison",
                "Le Sprint Goal",
                "Le Net Promoter Score",
              ],
              correctIndex: 1,
              explanation:
                "Kanban plafonne le travail en cours pour forcer à finir avant de commencer. Dix items ouverts et zéro terminé est le symptôme exact d'une limite de WIP absente ou trop haute. \"Arrêter de commencer, commencer à finir\" est le remède.",
            },
            {
              id: "q23",
              prompt:
                "Pour Covio, pourquoi l'activation est-elle souvent plus urgente à travailler que l'acquisition ?",
              options: [
                "Parce que l'acquisition ne coûte rien",
                "Parce qu'attirer plus d'inscrits qui ne réalisent jamais un premier trajet revient à remplir un seau percé : sans activation, l'acquisition est gaspillée",
                "Parce que l'activation se mesure plus facilement",
                "Parce que la rétention n'a pas d'importance",
              ],
              correctIndex: 1,
              explanation:
                "Si le taux d'activation (ici, réaliser un premier trajet sous 7 jours) est bas, chaque euro d'acquisition supplémentaire fuit. Colmater l'activation d'abord rend toute l'acquisition ultérieure rentable. La rétention reste ensuite décisive, surtout pour un marketplace local.",
            },
            {
              id: "q24",
              prompt:
                "L'équipe signale une dette technique qui ralentit chaque story, mais le PO refuse d'y allouer du temps car ce n'est pas visible pour les utilisateurs. Quel est le risque ?",
              options: [
                "Aucun, le PO a raison de prioriser le visible",
                "La vélocité s'érode lentement jusqu'à ce que la moindre story coûte très cher ; le PO devrait négocier un équilibre plutôt que refuser par principe",
                "L'équipe sera plus motivée",
                "La dette technique disparaît d'elle-même avec le temps",
              ],
              correctIndex: 1,
              explanation:
                "Ignorer systématiquement la dette technique la laisse s'accumuler jusqu'à effondrer la capacité de livraison. Le PO n'a pas à comprendre la technique en détail, mais il doit faire confiance au signal de l'équipe et arbitrer un équilibre entre valeur visible et santé du code, pas opposer un refus de principe.",
            },
            {
              id: "q25",
              prompt:
                "Quel dénominateur commun relie la plupart des pièges du PO débutant (backlog guichet, culte de la vélocité, saut de la découverte) ?",
              options: [
                "Un manque de maîtrise de Jira",
                "La confusion entre activité (produire beaucoup) et valeur (produire ce qui compte)",
                "Une mauvaise connaissance de la suite de Fibonacci",
                "Le fait de trop parler aux utilisateurs",
              ],
              correctIndex: 1,
              explanation:
                "Backlog guichet, obsession de la vélocité, delivery sans découverte : tous confondent le fait de s'activer avec le fait de créer de la valeur. Ramener chaque décision à \"quelle est la chose la plus utile à livrer et pourquoi\" est le meilleur garde-fou contre l'ensemble de ces pièges.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
