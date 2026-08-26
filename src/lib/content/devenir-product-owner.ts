import type { Course } from "../types";

const course: Course = {
  slug: "devenir-product-owner",
  title: "Devenir Product Owner : de la vision à la livraison",
  tagline:
    "Le métier de PO sans le folklore : découverte, backlog, priorisation et cérémonies, appliqués à un vrai produit.",
  description:
    "Un parcours complet pour tenir le poste de Product Owner en équipe agile. On part de la vision produit, on passe par la découverte (entretiens, opportunity solution tree), on construit un backlog vivant avec de vraies user stories, on découpe avec le story mapping, on priorise avec RICE, MoSCoW, Kano et WSJF, on estime en story points, et on fait tourner Scrum et Kanban au quotidien avec les bons outils (Jira, Linear, Notion, Miro). Fil rouge : Covio, une app de covoiturage domicile-travail que l'on fait grandir d'un sprint à l'autre, chiffres en main.",
  category: "Gestion de projet",
  level: "Intermédiaire",
  instructor: "",
  hours: 6,
  rating: 0,
  learners: 0,
  accent: "#3b82f6",
  image: "/covers/devenir-product-owner.svg",
  language: "Français",
  software: "Jira, Linear, Notion, Miro (ou équivalents)",
  prerequisites: [
    "Avoir déjà travaillé dans ou avec une équipe produit/tech, même brièvement",
    "Comprendre les bases de l'agilité (sprint, itération) : on les reprend, mais partir de zéro absolu sera dense",
    "Aucun besoin de savoir coder",
  ],
  summary: [
    "Le rôle réel du PO et sa place face au Product Manager, au Scrum Master et aux parties prenantes",
    "Poser une vision et une stratégie produit qui tiennent la route (vision board, OKR, north star)",
    "Mener une vraie découverte produit : entretiens utilisateurs et opportunity solution tree",
    "Construire et affiner un backlog, écrire des user stories testables, les découper et les cartographier (story mapping)",
    "Prioriser et estimer avec les méthodes utilisées en entreprise (RICE, MoSCoW, Kano, WSJF, story points, matrice valeur/effort)",
    "Faire tourner Scrum et Kanban, lire un burndown et les métriques de flux, éviter les pièges du débutant",
  ],
  objectives: [
    "Distinguer clairement les responsabilités du PO de celles du PM et du Scrum Master",
    "Formuler une vision produit et la décliner en OKR mesurables",
    "Conduire un entretien utilisateur qui produit des insights exploitables, pas des opinions",
    "Écrire une user story avec des critères d'acceptation testables, la valider avec INVEST et la découper en tranches verticales",
    "Choisir la bonne méthode de priorisation selon le contexte et défendre ses arbitrages chiffres en main",
    "Animer sprint planning, daily, review et rétro en tenant le rôle attendu du PO, et lire un burndown sans se raconter d'histoires",
  ],
  skills: [
    "Découverte produit et entretiens utilisateurs",
    "Rédaction, découpage et cartographie de user stories (story mapping)",
    "Priorisation de backlog (RICE, MoSCoW, Kano, WSJF, valeur/effort)",
    "Estimation agile (story points, planning poker, vélocité)",
    "Animation des cérémonies Scrum et gestion de flux Kanban",
    "Définition et lecture de métriques produit",
  ],
  contentTypes: ["Leçons écrites", "Quiz interactifs", "Études de cas", "Exercices corrigés", "Démonstration guidée"],
  parts: [
    {
      id: "p1",
      title: "Le métier de Product Owner",
      lessons: [
        {
          id: "l1",
          title: "Ce que fait vraiment un Product Owner",
          type: "text",
          duration: "18 min",
          body:
            "## Mardi, 9h12 : trois demandes, un seul sprint\n\n" +
            "Ton sprint planning est dans deux jours. Ce matin, trois messages t'attendent. Le directeur commercial : \"il me faut l'export PDF des trajets pour vendredi, c'est promis au client Sodexo\". Le support : \"30 % des tickets du mois concernent le calcul d'itinéraire qui se trompe de point de rendez-vous\". Un développeur : \"on repousse encore la migration de la base ? Elle nous coûte une demi-journée par semaine en contournements\". L'équipe livre environ 30 points par sprint. Ces trois sujets, mis bout à bout, en pèsent 21. Il reste le reste du backlog.\n\n" +
            "Tu ne peux pas tout faire. Décider ce qui passe devant, et pouvoir expliquer pourquoi à chacun des trois sans perdre leur confiance : voilà le métier. Tout le reste du cours détaille comment prendre ce genre de décision autrement qu'au feeling ou à l'ancienneté du demandeur.\n\n" +
            "## La définition officielle, et ce qu'elle cache\n\n" +
            "Le Scrum Guide tient en une phrase : le Product Owner est responsable de maximiser la valeur du produit issu du travail de l'équipe. C'est vrai, et c'est presque inutile tel quel. Dans la réalité d'une journée, le PO passe son temps à trancher : quelle est la prochaine chose la plus utile qu'on puisse livrer, et pourquoi celle-là plutôt qu'une autre.\n\n" +
            "Le piège numéro un du débutant, c'est de se vivre comme un guichet. Le commercial demande une fonctionnalité, elle entre dans le backlog. Le directeur veut un bouton rouge, il devient une story. Au bout de trois mois, le backlog compte 400 tickets, personne ne sait ce qui compte, et l'équipe livre beaucoup sans que rien ne bouge côté clients. J'ai repris un backlog dans cet état en arrivant sur un produit de paiement : 412 tickets, dont 260 jamais rouverts depuis plus de six mois. On en a fermé 300 en une après-midi, personne ne les a jamais réclamés. Un bon PO dit non plus souvent qu'il ne dit oui, et il sait expliquer chaque non.\n\n" +
            "## Trois responsabilités qui ne se délèguent pas\n\n" +
            "Sur le fond, le métier tient sur trois piliers. D'abord la **vision et la stratégie** : où va le produit, pour qui, contre quoi il se bat. Ensuite la **gestion du backlog** : traduire cette direction en travail concret, ordonné, compréhensible par l'équipe de développement. Enfin l'**arbitrage de valeur** : décider en permanence des priorités face à des ressources limitées et des demandes contradictoires.\n\n" +
            "Ce qui n'est pas le métier : écrire les tests à la place des devs, imposer comment on code, jouer au chef de projet qui distribue les tâches. Le PO décide du *quoi* et du *pourquoi*. L'équipe décide du *comment*. Cette frontière est la source de la moitié des conflits que je vois chez les nouveaux POs.\n\n" +
            "## À quoi ressemble une journée\n\n" +
            "Pour donner de la chair au poste, voici une journée assez représentative :\n\n" +
            "- 9h30 : daily de l'équipe, 15 minutes. Tu écoutes, tu notes deux questions produit à traiter après.\n" +
            "- 10h : entretien avec un utilisateur (30 minutes, en visio), le troisième de la semaine.\n" +
            "- 11h : refinement avec l'équipe, une heure. Deux stories clarifiées, une découpée en trois, une renvoyée en découverte.\n" +
            "- 14h : écriture des critères d'acceptation des deux prochaines stories, réponses aux questions posées le matin.\n" +
            "- 15h30 : point avec le directeur des opérations, qui finance le produit. Tu montres les chiffres du mois et tu défends l'ordre du backlog.\n" +
            "- 16h30 : tri des demandes entrantes de la semaine. Sur neuf, deux entrent au backlog, cinq sont refusées avec une réponse motivée, deux repartent en question de découverte.\n\n" +
            "Remarque ce qui n'y figure pas : aucune heure passée à \"faire du Jira\". L'outil, que ce soit Jira, Linear ou une base Notion, matérialise tes décisions ; il ne les prend pas. Un PO qui passe quatre heures par jour à ranger des tickets a un problème de fond, pas un problème d'outil.\n\n" +
            "## Notre fil rouge : Covio\n\n" +
            "Tout le cours s'appuie sur un produit unique, Covio, une application de covoiturage domicile-travail. L'idée : mettre en relation des salariés qui font le même trajet chaque matin. Le marché existe (BlaBlaCar Daily et Karos opèrent dessus en France), le modèle est un marketplace à deux faces (il faut assez de conducteurs *et* de passagers pour que ça marche), et les problèmes produit y sont concrets : confiance, ponctualité, remboursement, masse critique locale.\n\n" +
            "Quelques ordres de grandeur qu'on retrouvera tout du long : 3 400 inscrits sur la zone pilote de Lyon-Est, 12 % d'actifs hebdomadaires, un taux d'annulation conducteur de 18 %, une équipe de cinq développeurs et une designer, des sprints de deux semaines, une vélocité moyenne de 30 points.\n\n" +
            "> À retenir : le PO ne maximise pas le volume livré, il maximise la valeur livrée. Ce sont deux métiers différents, et le second est beaucoup plus difficile.\n\n" +
            "Garde Covio en tête. À chaque notion, on se demandera : concrètement, qu'est-ce que ça change pour la prochaine décision sur Covio ?",
        },
        {
          id: "l2",
          title: "PO, Product Manager, Scrum Master : qui fait quoi",
          type: "text",
          duration: "17 min",
          body:
            "## Trois rôles qu'on confond tout le temps\n\n" +
            "Ces trois intitulés se chevauchent selon les entreprises, et c'est une vraie source de galère quand on débute. Une anecdote pour situer : sur ma première mission, j'ai passé trois semaines à construire une roadmap de six mois avant de comprendre qu'un Product Manager la faisait déjà deux étages au-dessus, et qu'on attendait de moi des stories prêtes pour le sprint suivant. Personne ne me l'avait dit, parce que tout le monde croyait que c'était évident. Voici les repères qui tiennent dans la majorité des organisations.\n\n" +
            "Le **Product Manager (PM)** regarde vers l'extérieur et vers le long terme : le marché, la concurrence, le business model, la roadmap sur plusieurs trimestres, la rentabilité. Il répond à \"quel produit construire et pourquoi c'est un bon pari\".\n\n" +
            "Le **Product Owner (PO)** regarde vers l'équipe et vers l'exécution : traduire la stratégie en backlog, écrire les stories, être disponible pour les développeurs, valider ce qui est livré. Il répond à \"comment on construit ça, dans quel ordre, et est-ce conforme\".\n\n" +
            "Le **Scrum Master (SM)** ne s'occupe pas du produit du tout. Il s'occupe de l'équipe et du processus : lever les blocages, protéger l'équipe des interruptions, faire progresser la maturité agile, faciliter les cérémonies. Il répond à \"comment l'équipe travaille mieux ensemble\".\n\n" +
            "## Dans les faits, ça dépend de la taille\n\n" +
            "Dans une startup de quinze personnes, une seule personne cumule souvent PM et PO. On l'appelle parfois \"PO stratégique\" ou simplement Product Manager, et elle fait tout, de la vision au ticket Jira. C'est intense mais cohérent : les décisions stratégiques et d'exécution restent dans la même tête.\n\n" +
            "Dans un grand groupe, les rôles se séparent : un PM pilote la vision de plusieurs équipes, chaque équipe a son PO qui exécute. Beaucoup de POs débutants sont en réalité des \"PO features\", des scribes de backlog sans mandat stratégique. Ce n'est pas grave pour commencer, mais il faut le savoir, sinon on croit qu'on décide alors qu'on exécute des décisions prises ailleurs. Le signe qui ne trompe pas : si tu découvres la roadmap en même temps que l'équipe, tu es un PO d'exécution. Négocie au moins un siège dans les discussions qui la fabriquent.\n\n" +
            "À noter aussi : le Scrum Guide, lui, ne connaît pas le titre de Product Manager. Il ne décrit que le Product Owner, avec un mandat complet incluant la stratégie. La séparation PM/PO est une invention des grandes organisations, pas de Scrum. C'est pour ça que les définitions varient autant d'une boîte à l'autre : demande toujours, en arrivant, qui décide de la roadmap et qui ordonne le backlog. Les réponses à ces deux questions te disent ce qu'on attend vraiment de toi, quel que soit le titre sur la fiche de poste.\n\n" +
            "## Le test qui clarifie tout\n\n" +
            "Face à une demande, pose-toi : de quoi je parle ?\n\n" +
            "- \"Faut-il attaquer le marché des trajets scolaires avec Covio ?\" → question de PM (stratégie, marché).\n" +
            "- \"La story 'annuler un trajet jusqu'à 1h avant' passe-t-elle avant 'noter son conducteur' ?\" → question de PO (priorité du backlog).\n" +
            "- \"Pourquoi la daily dure 40 minutes et personne n'écoute ?\" → question de Scrum Master (processus).\n\n" +
            "## À toi\n\n" +
            "Classe chacune de ces quatre situations : PM, PO ou SM ?\n\n" +
            "1. L'équipe n'arrive jamais à finir ce qu'elle prend en sprint, les stories débordent systématiquement.\n" +
            "2. Un concurrent vient de lever 20 M€ pour attaquer le covoiturage rural : faut-il réagir ?\n" +
            "3. La story \"remboursement automatique\" doit-elle sortir avant la fin du trimestre pour tenir le KR d'annulation ?\n" +
            "4. Deux développeurs sont en conflit ouvert depuis deux sprints et l'ambiance plombe les réunions.\n\n" +
            "> Correction : 1 = SM (problème de processus : engagement trop gros, découpage, estimation ; le SM aide l'équipe à le voir en rétro). 2 = PM (analyse concurrentielle, pari de marché). 3 = PO (ordre du backlog au service d'un objectif trimestriel). 4 = SM (santé de l'équipe). Si tu as hésité sur la 1 en pensant \"PO, c'est lui qui met trop de choses dans le sprint\" : non, c'est l'équipe qui s'engage sur le volume, pas le PO (on y revient dans la leçon sur le sprint planning).\n\n" +
            "## Le triangle qui fonctionne\n\n" +
            "La bonne équipe, c'est un PO qui porte la valeur, un Scrum Master qui fluidifie, une équipe de dev qui construit : trois responsabilités qui se respectent. Le SM n'est pas le chef du PO, le PO n'est pas le chef des devs. Personne ne commande, chacun a un domaine. Quand ce triangle est sain, les désaccords portent sur le fond (\"cette story a-t-elle plus de valeur que celle-là ?\") et pas sur le territoire (\"de quoi je me mêle ?\").\n\n" +
            "> À retenir : si ton Scrum Master priorise ton backlog ou si ton PM écrit tes critères d'acceptation, quelqu'un fait le travail d'un autre. Ça marche un temps, ça finit toujours mal.",
        },
        {
          id: "l3",
          title: "Le PO au milieu des parties prenantes",
          type: "text",
          duration: "16 min",
          body:
            "## Tu es une interface, pas un mur\n\n" +
            "Le PO est le point de rencontre entre trois mondes qui ne se parlent pas naturellement : le business (direction, ventes, marketing, support), les utilisateurs, et l'équipe de développement. Chacun tire dans son sens. Le rôle consiste à absorber ce bruit et à en sortir une décision unique et cohérente : le backlog ordonné.\n\n" +
            "Une erreur fréquente : se placer en bouclier et couper l'équipe des parties prenantes. \"Passez par moi, ne parlez pas aux devs directement.\" On croit protéger, on crée un goulot, et des développeurs qui construisent pour un utilisateur qu'ils n'ont jamais vu. À l'inverse, laisser tout le monde parler à tout le monde sans filtre transforme le sprint en champ de bataille : sur Covio, il a suffi d'un directeur régional qui demandait \"un petit truc\" directement à un dev pour qu'une semaine de sprint parte dans une fonctionnalité jamais priorisée. Le bon dosage : l'équipe a le contexte métier (elle rencontre les utilisateurs, assiste aux démos), mais les décisions de priorité passent par une seule voix, la tienne.\n\n" +
            "## Cartographier ses parties prenantes\n\n" +
            "Avant même de prioriser des fonctionnalités, priorise tes interlocuteurs. Une grille simple, pouvoir contre intérêt, suffit :\n\n" +
            "- **Fort pouvoir, fort intérêt** : à impliquer de près (ex. le directeur des opérations qui finance Covio). On les consulte tôt, on les tient au courant.\n" +
            "- **Fort pouvoir, faible intérêt** : à tenir satisfaits sans les noyer (ex. le service juridique, qui doit valider les CGU de remboursement entre particuliers).\n" +
            "- **Faible pouvoir, fort intérêt** : à informer et écouter, souvent tes meilleurs alliés (ex. le support client qui remonte les plaintes des utilisateurs).\n" +
            "- **Faible pouvoir, faible intérêt** : à surveiller, sans y passer d'énergie.\n\n" +
            "Fais l'exercice une fois par trimestre, sur un tableau Miro ou une page Notion, avec des noms réels et pas des fonctions abstraites. Les gens bougent : un juriste qui devient sponsor du projet change de case, et ta façon de communiquer avec lui doit changer aussi.\n\n" +
            "## Le rythme de communication qui évite 80 % des crises\n\n" +
            "La plupart des conflits de parties prenantes ne viennent pas d'un désaccord de fond mais d'une surprise. Le directeur qui découvre en comité que \"sa\" fonctionnalité est sortie du trimestre explose ; le même, prévenu trois semaines avant avec les raisons, négocie. D'où une discipline simple : une note d'avancement courte et régulière, après chaque sprint, dix lignes dans une page Notion ou Confluence partagée : ce qui est sorti, ce qui vient, ce qui a bougé dans les priorités et pourquoi. Ceux qui la lisent sont informés ; à ceux qui ne la lisent pas, tu peux toujours la citer. Ce document m'a sauvée plus souvent que n'importe quel talent de négociation.\n\n" +
            "Méfie-toi aussi du \"comité fantôme\" : les décisions qui se prennent dans des couloirs où tu n'es pas. Si des priorités changent sans toi, ne boude pas : invite-toi. Demande à assister à la réunion où ça se joue, avec tes chiffres. Un PO absent des lieux de décision devient un exécutant, quel que soit son titre.\n\n" +
            "## Dire non sans se faire des ennemis\n\n" +
            "Un directeur commercial te demande d'ajouter un système de parrainage pour Covio \"parce qu'un concurrent l'a fait\". Refuser sèchement crée un ennemi. La technique : ne jamais dire non à la personne, dire non au *trade-off*. \"On peut le faire, mais ça passe devant la fiabilité du calcul d'itinéraire, sur laquelle on a 30 % de plaintes support ce mois-ci et qui bloque des trajets déjà réservés. Tu préfères qu'on repousse ça ?\" Le refus devient une conversation sur les priorités, chiffres à l'appui. Neuf fois sur dix, la personne recule d'elle-même. La dixième fois, elle escalade, et c'est très bien : la décision remonte à quelqu'un qui a le mandat pour arbitrer entre deux objectifs business, avec un dossier propre.\n\n" +
            "Garde une trace écrite de ces arbitrages. Trois lignes par décision suffisent : la demande, l'alternative sacrifiée, qui a tranché. Six mois plus tard, quand quelqu'un demandera \"mais pourquoi on n'a jamais fait le parrainage ?\", tu auras la réponse datée au lieu d'un souvenir flou.\n\n" +
            "## À toi\n\n" +
            "Place ces quatre interlocuteurs de Covio dans la grille pouvoir/intérêt, et note en une phrase comment tu communiques avec chacun :\n\n" +
            "1. La DRH d'un employeur pilote, sponsor du budget mobilité.\n" +
            "2. Le délégué à la protection des données (DPO), qui n'a encore jamais entendu parler du projet.\n" +
            "3. Amélie, du support, qui traite les réclamations d'annulation tous les matins.\n" +
            "4. Un stagiaire marketing très enthousiaste qui envoie trois idées par semaine.\n\n" +
            "> Correction possible : 1 → fort pouvoir, fort intérêt : à impliquer de près, revue d'avancement mensuelle en direct. 2 → fort pouvoir (il peut bloquer le traitement des données de géolocalisation), faible intérêt pour l'instant : à tenir satisfait, en le consultant TÔT sur la conservation des trajets plutôt qu'en le découvrant à la veille du lancement. 3 → faible pouvoir, fort intérêt : ton alliée la plus précieuse, un point de 20 minutes toutes les deux semaines te donne la matière brute des irritants réels. 4 → faible pouvoir, faible intérêt réel (l'enthousiasme n'est pas de l'enjeu) : réponse polie, ses idées passent le filtre commun, pas de traitement de faveur. Si tu as classé le DPO en \"faible pouvoir\" parce qu'il est discret, c'est l'erreur classique : le pouvoir se mesure à la capacité de bloquer, pas au volume sonore.\n\n" +
            "> À retenir : ta crédibilité de PO ne vient pas de ton autorité, tu n'en as presque aucune, mais de la qualité et de la transparence de tes arbitrages. On te suit parce que tes raisons tiennent, pas parce que c'est toi qui décides.",
        },
        {
          id: "l4",
          title: "Quiz : Le rôle du PO",
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
            {
              id: "q26",
              prompt:
                "Des priorités du produit changent régulièrement lors de réunions de direction où le PO n'est pas convié. Quelle est la réaction la plus utile ?",
              options: [
                "Appliquer les changements sans discuter, la direction a le dernier mot",
                "Ignorer ces décisions puisqu'elles ne suivent pas le processus",
                "Demander à participer à ces réunions avec ses chiffres, pour que les arbitrages se fassent en connaissance des trade-offs",
                "Demander au Scrum Master d'y aller à sa place",
              ],
              correctIndex: 2,
              explanation:
                "Un PO absent des lieux où les priorités se décident devient un simple exécutant. Ni la soumission silencieuse ni le boycott ne règlent le problème : il faut se rendre présent là où ça se joue, avec des données, pour que chaque changement de cap soit arbitré en voyant ce qu'il coûte.",
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
          duration: "18 min",
          body:
            "## Sans vision, le backlog part dans tous les sens\n\n" +
            "Une vision produit, ce n'est pas un slogan marketing. C'est la réponse stable à quatre questions : pour qui, quel problème, quelle solution, quel bénéfice business. Tant que ces réponses ne sont pas claires, chaque priorisation est arbitraire, parce qu'on n'a aucun cap pour dire ce qui compte.\n\n" +
            "Tu reconnais un produit sans vision à son backlog : un peu de tout, des fonctionnalités copiées sur trois concurrents différents, et des débats de priorité qui tournent en rond parce que chacun a sa définition implicite de ce que le produit devrait être. La vision ne supprime pas les débats, elle leur donne un juge de paix.\n\n" +
            "## Le Product Vision Board\n\n" +
            "Le **Product Vision Board** de Roman Pichler est un outil simple pour poser ça sur une page. Cinq colonnes :\n\n" +
            "- **Vision** : le changement qu'on veut apporter au monde, en une phrase.\n" +
            "- **Cible** : les utilisateurs et clients visés (attention, ce ne sont pas toujours les mêmes).\n" +
            "- **Besoins** : le problème principal qu'on résout pour eux.\n" +
            "- **Produit** : ce qu'on construit, en gros, et ce qui le rend crédible.\n" +
            "- **Objectifs business** : comment le produit sert l'entreprise (revenus, coûts, acquisition).\n\n" +
            "L'exercice se fait à plusieurs (PO, PM s'il y en a un, un ou deux développeurs, la designer, le sponsor), en une heure ou deux, sur un tableau Miro ou un mur de post-its. Le débat pendant le remplissage vaut plus que le document final : c'est là que tu découvres que le sponsor pense \"produit pour les employeurs\" quand toi tu pensais \"produit pour les salariés\".\n\n" +
            "## Le Vision Board de Covio\n\n" +
            "- **Vision** : rendre le trajet domicile-travail moins cher, moins solitaire et moins polluant en le partageant.\n" +
            "- **Cible** : salariés d'une même zone d'activité qui viennent en voiture seuls, sur des trajets réguliers de 10 à 40 km. Client payeur possible : les employeurs (RSE, places de parking).\n" +
            "- **Besoins** : trouver de façon fiable quelqu'un qui fait le même trajet au même horaire, sans négociation pénible et sans risque de se retrouver seul un matin.\n" +
            "- **Produit** : mise en relation automatique sur trajets récurrents, paiement intégré, garantie \"trajet de secours\" si le conducteur annule.\n" +
            "- **Objectifs business** : commission sur les trajets, abonnements employeurs.\n\n" +
            "## Ce que la cible change concrètement\n\n" +
            "Regarde la cible de Covio : trajets *réguliers*. Ce choix élimine tout de suite une masse de fonctionnalités. Un moteur de recherche de trajets ponctuels à la BlaBlaCar longue distance ? Hors sujet. Un chat de négociation de prix ? Inutile, les trajets récurrents doivent être sans friction quotidienne. La vision n'est pas décorative : elle te donne le droit de dire non à des dizaines d'idées séduisantes mais hors trajectoire.\n\n" +
            "Une bonne vision est stable sur un an ou deux. Si la tienne change tous les mois, ce n'est pas une vision, c'est une humeur. Elle doit tenir même quand un concurrent sort une nouveauté, même quand un gros client réclame autre chose. À l'inverse, une vision gravée dans le marbre pendant cinq ans alors que le marché a tourné n'est plus une vision, c'est un dogme. Le bon réflexe : la relire en équipe une fois par an, et ne la changer que si les *faits* ont changé.\n\n" +
            "## Faire vivre la vision au quotidien\n\n" +
            "Un Vision Board rangé dans un dossier ne sert à rien. Trois usages concrets le rendent rentable. D'abord, l'affichage : la phrase de vision en tête de la page d'accueil du Notion d'équipe, et rappelée en une ligne au début de chaque sprint planning (trente secondes qui recadrent la réunion). Ensuite, le filtre d'entrée : quand une demande arrive, la première question n'est pas \"combien ça coûte ?\" mais \"est-ce que ça sert la cible et le besoin du board ?\". Sur Covio, cette question a éliminé en dix secondes une demande de module \"trajets aéroport le week-end\" : séduisant, mais hors cible (trajets réguliers domicile-travail). Enfin, l'onboarding : chaque nouveau développeur lit le board et deux ou trois comptes rendus d'entretiens utilisateurs avant sa première ligne de code. Un dev qui comprend pour qui il construit fait de meilleurs choix techniques, sans qu'on ait besoin de tout lui spécifier.\n\n" +
            "Si tu veux compléter le board par un format encore plus compact, l'elevator pitch de Geoffrey Moore (Crossing the Chasm) tient en une phrase à trous : \"Pour [la cible] qui [a tel besoin], [le produit] est [une catégorie] qui [bénéfice clé]. Contrairement à [l'alternative], notre produit [différenciateur].\" Pour Covio : \"Pour les salariés de zones d'activité qui viennent seuls en voiture, Covio est un service de covoiturage récurrent qui garantit le trajet du matin. Contrairement aux groupes WhatsApp et aux apps généralistes, il matche automatiquement des collègues de zone sur des trajets réguliers et reloge le passager si le conducteur annule.\" Si ta version à toi bute sur le \"contrairement à\", c'est un signal : tu ne sais pas encore contre quoi tu te bats.\n\n" +
            "## À toi\n\n" +
            "Voici la colonne \"Besoins\" rédigée par un PO débutant pour Covio : \"Les salariés ont besoin d'une application mobile moderne avec un algorithme de matching intelligent et des notifications push\". Qu'est-ce qui cloche ?\n\n" +
            "> Correction : ce ne sont pas des besoins, ce sont des solutions. \"Application mobile\", \"algorithme de matching\", \"notifications\" décrivent le produit, pas le problème. Le besoin, formulé côté utilisateur, c'est : \"trouver de façon fiable quelqu'un qui fait le même trajet, sans y passer du temps chaque jour et sans risque d'être lâché au dernier moment\". Le test rapide : un besoin reste vrai même si le produit n'existe pas encore. \"Avoir des notifications push\" n'était le besoin de personne avant l'invention des smartphones.\n\n" +
            "> À retenir : la vision se juge à sa capacité à trancher. Si elle ne t'aide pas à refuser une idée, elle est trop vague pour servir.\n\n" +
            "Pour approfondir l'outil, la fiche de référence est publique sur [le site de Roman Pichler](https://www.romanpichler.com/tools/product-vision-board/).",
        },
        {
          id: "l6",
          title: "Décliner la stratégie en OKR",
          type: "text",
          duration: "18 min",
          body:
            "## Du cap aux résultats mesurables\n\n" +
            "La vision dit où on va. Les **OKR** (Objectives and Key Results) disent ce qu'on cherche à obtenir ce trimestre pour s'en rapprocher. C'est la charnière entre stratégie et backlog. Popularisés par Intel puis Google, ils tiennent sur deux éléments :\n\n" +
            "- Un **Objective** : une direction qualitative, ambitieuse, inspirante, sans chiffre. Le \"quoi\".\n" +
            "- Deux à quatre **Key Results** : des mesures chiffrées qui prouvent qu'on a atteint l'objectif. Le \"comment on sait qu'on y est\".\n\n" +
            "## L'erreur qui tue les OKR\n\n" +
            "Neuf équipes sur dix confondent Key Result et liste de tâches. \"Livrer la fonctionnalité de paiement\" n'est pas un Key Result, c'est une livraison. Un vrai KR mesure un *résultat*, pas une *action*. Le test : si tu peux cocher la case en livrant du code sans que rien ne change pour les utilisateurs ou le business, ce n'est pas un KR.\n\n" +
            "Mauvais : \"Sortir l'app iOS.\" Bon : \"40 % des trajets réservés proviennent de mobile.\" Le premier peut être fait alors que personne n'utilise l'app iOS. Le second ne peut être atteint que si l'app apporte vraiment quelque chose.\n\n" +
            "## Un OKR trimestriel pour Covio\n\n" +
            "**Objective** : faire de Covio un réflexe quotidien pour nos utilisateurs pilotes de la zone d'activité de Lyon-Est.\n\n" +
            "Key Results :\n\n" +
            "1. Passer de 12 % à 35 % d'utilisateurs actifs hebdomadaires sur la base inscrite.\n" +
            "2. Atteindre 60 % de trajets \"matchés\" (un passager trouve un conducteur) sous 24h.\n" +
            "3. Réduire le taux d'annulation conducteur de 18 % à moins de 8 %.\n\n" +
            "Remarque : aucun KR ne dit \"construire telle fonctionnalité\". Ils décrivent un monde où Covio marche mieux. C'est au PO et à l'équipe de trouver quelles stories font bouger ces chiffres. Peut-être une garantie de trajet de secours pour le KR 3, peut-être des notifications de match pour le KR 2. Les OKR ne prescrivent pas la solution, ils fixent la cible.\n\n" +
            "## La vie d'un OKR : pas un rituel de janvier\n\n" +
            "Un OKR posé en début de trimestre et relu à la fin ne sert à rien : c'est un vœu de nouvel an. La cadence qui marche : un point de 15 minutes toutes les une ou deux semaines, où l'équipe regarde les trois chiffres et se demande \"est-ce que ce qu'on livre les fait bouger ?\". Sur Covio, c'est ce point qui nous a fait pivoter en milieu de trimestre : après quatre semaines, le KR 2 (matching sous 24h) stagnait à 41 % alors qu'on avait livré les notifications. L'analyse a montré que le problème n'était pas l'information mais l'offre : pas assez de conducteurs sur certains créneaux. On a réorienté le sprint suivant vers l'acquisition de conducteurs au lieu de s'acharner sur les notifications. Sans le point bimensuel, on l'aurait découvert en mars, trop tard.\n\n" +
            "Côté outillage, inutile d'acheter une plateforme dédiée au début : une page Notion avec les trois KR et leur courbe, mise à jour chaque lundi, suffit largement. L'important est que les chiffres soient visibles de tous, y compris de l'équipe de dev : des développeurs qui connaissent le KR trouvent des solutions que le PO n'aurait pas imaginées.\n\n" +
            "## Ambition et calibrage\n\n" +
            "Chez Google, un OKR atteint à 100 % est suspect : il était trop facile. La zone saine se situe autour de 60-70 %. Ça n'est pas universel (certaines équipes préfèrent des OKR engageants à 100 %), mais l'idée reste : un OKR doit tirer vers le haut, pas être une formalité. Deux à trois objectifs par trimestre suffisent. Une équipe avec sept OKR n'a en réalité aucune priorité. Et méfie-toi du sandbagging, l'art de se fixer des cibles qu'on a déjà quasiment atteintes pour briller en revue : ça se voit vite, et ça décrédibilise tout l'exercice.\n\n" +
            "## À toi\n\n" +
            "Transforme ces deux faux KR en vrais Key Results pour Covio :\n\n" +
            "1. \"Mettre en place la garantie trajet de secours.\"\n" +
            "2. \"Interviewer 10 conducteurs sur les annulations.\"\n\n" +
            "> Correction : 1 → \"Réduire le taux d'annulation subie par les passagers (conducteur absent sans solution) de 18 % à 5 %\". La garantie est une *solution possible* pour l'atteindre. 2 → celui-là est piégeux : interviewer est une activité de découverte, utile mais sans place dans les KR. Soit on la rattache au résultat qu'elle sert (le KR d'annulation), soit on la planifie comme simple tâche. Un KR \"nombre d'entretiens menés\" pousserait à faire des entretiens pour la statistique, pas pour apprendre.\n\n" +
            "> À retenir : un Key Result se formule toujours comme un changement d'état mesurable (\"passer de X à Y\"), jamais comme une chose à livrer. Si tu peux le cocher sans impact réel, réécris-le.",
        },
        {
          id: "l7",
          title: "North Star Metric : la boussole partagée",
          type: "text",
          duration: "16 min",
          body:
            "## Une métrique pour aligner tout le monde\n\n" +
            "Les OKR changent chaque trimestre. La **North Star Metric** (NSM), elle, reste stable longtemps. C'est la mesure unique qui capture le mieux la valeur que ton produit apporte aux utilisateurs. Son intérêt : quand une équipe entière (produit, tech, marketing, direction), regarde le même chiffre, les débats de priorité deviennent moins politiques et plus factuels.\n\n" +
            "Les exemples classiques donnent le ton : Airbnb suit les nuits réservées, Spotify le temps d'écoute, une messagerie suivra les messages envoyés. À chaque fois, le chiffre monte quand, et seulement quand, des utilisateurs reçoivent réellement de la valeur.\n\n" +
            "La bonne NSM a trois qualités. Elle reflète la valeur *reçue par l'utilisateur*, pas juste l'argent encaissé. Elle est un indicateur avancé des revenus (si elle monte, le business suit). Et l'équipe peut réellement l'influencer par son travail.\n\n" +
            "## Choisir la North Star de Covio\n\n" +
            "Plusieurs candidates :\n\n" +
            "- **Nombre d'inscrits** : mauvais. On peut recruter des inscrits qui n'utilisent jamais l'app. Une métrique de vanité classique.\n" +
            "- **Chiffre d'affaires** : mauvais comme north star. C'est le résultat, pas la valeur. Il monte trop tard pour guider les décisions produit.\n" +
            "- **Nombre de trajets partagés réalisés par semaine** : bon candidat. Un trajet partagé = un salarié qui a économisé de l'argent, un conducteur payé, une voiture de moins. La valeur est là, et c'est un indicateur avancé du revenu (commission par trajet).\n\n" +
            "On retient donc : **trajets partagés effectivement réalisés par semaine**. \"Effectivement réalisés\", pas réservés : un trajet annulé n'a créé aucune valeur, il en a même détruit (un passager déçu). Ce genre de nuance dans la définition compte énormément : entre \"trajets réservés\" et \"trajets réalisés\", il y a 18 % d'écart sur Covio, et surtout deux stratégies produit différentes.\n\n" +
            "## Décomposer la north star\n\n" +
            "Une NSM utile se décompose en facteurs sur lesquels on agit. Pour Covio : trajets réalisés = (utilisateurs actifs) × (trajets réservés par actif) × (taux de trajets non annulés). Avec les chiffres du pilote : 410 actifs × 2,1 trajets/semaine × 82 % = environ 705 trajets réalisés par semaine. Cette décomposition est une mine à priorités. Tu veux faire monter la north star ? Tu peux travailler l'activation (plus d'actifs), la fréquence (plus de trajets par personne) ou la fiabilité (moins d'annulations). Un rapide calcul de sensibilité aide à choisir : passer la fiabilité de 82 % à 92 % rapporte +86 trajets/semaine ; gagner 50 actifs au même niveau d'usage en rapporte +86 aussi. À gain égal, lequel coûte le moins d'effort ? Voilà une vraie question de priorisation, et on la traitera avec RICE en partie 5.\n\n" +
            "## Une boussole, pas un dieu : les métriques garde-fou\n\n" +
            "Toute métrique unique peut être poussée trop loin. On pourrait gonfler les trajets réalisés en spammant les utilisateurs de notifications, quitte à les faire fuir dans trois mois. D'où l'usage de métriques garde-fou (guardrail metrics) qu'on surveille sans chercher à les optimiser : taux de désinstallation, taux de désabonnement des notifications, note moyenne des trajets. Si la north star monte pendant qu'un garde-fou plonge, tu es en train d'acheter le présent avec le futur.\n\n" +
            "## Le lien vision → NSM → OKR → backlog\n\n" +
            "Voilà la chaîne complète : la vision donne le cap, la north star mesure la valeur globale sur la durée, les OKR fixent les cibles du trimestre, et le backlog contient le travail concret censé bouger tout ça. Un PO qui tient cette chaîne peut justifier n'importe quelle priorité en remontant jusqu'à la vision. Un PO qui n'a que le backlog priorise à l'aveugle et se fait balader par la demande la plus bruyante.\n\n" +
            "Concrètement, la NSM se rend visible : un graphique hebdomadaire épinglé dans le canal Slack de l'équipe, la courbe projetée en ouverture de la sprint review, avant même la démo. Quand la review commence par \"705 trajets réalisés cette semaine, +4 %\", les parties prenantes jugent les features à l'aune de ce chiffre, et toi aussi. Une équipe qui ne voit jamais sa north star finit par optimiser ce qu'elle voit : sa vélocité.\n\n" +
            "## À toi\n\n" +
            "Covio vend aussi des abonnements aux employeurs (budget RSE, places de parking libérées). Le responsable commercial propose d'ajouter une seconde north star pour ce marché : \"nombre de contrats employeurs signés\". Bonne idée ?\n\n" +
            "> Correction : non, pour deux raisons. D'abord, deux north stars, c'est zéro north star : dès qu'elles divergent, chacun choisit celle qui l'arrange et l'alignement disparaît. Ensuite, \"contrats signés\" mesure un résultat commercial, pas la valeur reçue : un employeur peut signer puis constater que ses salariés n'utilisent rien, et résilier dans un an. La bonne approche : garder les trajets réalisés comme north star unique (un employeur ne renouvelle que si ses salariés covoiturent vraiment), et suivre les contrats comme métrique business classique, en aval. Si tu tiens à une déclinaison par compte, \"salariés covoiturant activement par entreprise cliente\" est un bien meilleur indicateur avancé du renouvellement que la signature elle-même.\n\n" +
            "> À retenir : méfie-toi des métriques de vanité (inscrits, téléchargements, pages vues). Une vraie north star capte la valeur *utilisée*, celle qui prédit que le business tiendra.",
        },
        {
          id: "l8",
          title: "Quiz : Vision et stratégie",
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
                "Décomposer une north star en facteurs transforme une métrique abstraite en leviers concrets. Chaque facteur (plus d'actifs, plus de trajets par personne, moins d'annulations) ouvre un terrain de découverte et de priorisation différent, et un calcul de sensibilité dit lequel rapporte le plus.",
            },
            {
              id: "q27",
              prompt:
                "La north star de Covio monte de 15 % ce trimestre, mais le taux de désabonnement aux notifications explose et la note moyenne des trajets baisse. Comment interpréter ?",
              options: [
                "Tout va bien : seule la north star compte",
                "Les métriques garde-fou alertent : la croissance est peut-être achetée au prix de l'expérience, il faut creuser avant de continuer",
                "Il faut changer de north star immédiatement",
                "C'est une erreur de mesure, ces métriques ne peuvent pas diverger",
              ],
              correctIndex: 1,
              explanation:
                "Les guardrail metrics existent précisément pour ce cas : une north star qu'on pousse trop fort (ici probablement à coups de notifications) peut monter en dégradant l'expérience, donc la rétention future. Quand boussole et garde-fous divergent, on investigue avant d'accélérer.",
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
          duration: "18 min",
          body:
            "## Construire la bonne chose avant de bien la construire\n\n" +
            "La découverte produit (product discovery) répond à une question simple et vitale : est-ce qu'on résout un vrai problème pour de vrais gens, avant d'écrire une ligne de code ? Un PO qui saute cette étape passe son temps à livrer des fonctionnalités correctes que personne n'utilise. Le premier outil de découverte, le plus accessible, c'est l'entretien utilisateur.\n\n" +
            "Attention au contresens de débutant : un entretien utilisateur ne sert pas à demander aux gens quelle fonctionnalité ils veulent. Les gens sont de mauvais prédicteurs de leur propre comportement futur, et de bons inventeurs de solutions bancales. Un entretien sert à comprendre leur *problème*, leur *contexte* et ce qu'ils *font déjà*.\n\n" +
            "## Passé concret, pas futur hypothétique\n\n" +
            "La règle d'or vient du livre The Mom Test de Rob Fitzpatrick : parle de la vie de la personne, pas de ton idée. Pose des questions sur des faits passés et vérifiables, jamais sur des intentions.\n\n" +
            "Compare, pour Covio :\n\n" +
            "- Mauvais : \"Est-ce que vous utiliseriez une app de covoiturage pour aller au travail ?\" → réponse polie et sans valeur, presque toujours oui.\n" +
            "- Bon : \"Racontez-moi comment vous êtes venu travailler ce matin. Combien de temps, combien ça vous a coûté, qu'est-ce qui vous a agacé ?\"\n\n" +
            "Le second donne des faits : le trajet, le coût réel, l'irritant du jour. Le premier ne donne qu'une opinion sur une idée abstraite. Sur les entretiens Covio, la question \"utiliseriez-vous ?\" a récolté 14 oui sur 15 ; six mois plus tard, 3 de ces 15 personnes avaient installé l'app. Voilà ce que vaut un oui déclaratif.\n\n" +
            "## Trouver et recruter les bonnes personnes\n\n" +
            "Cinq à huit entretiens bien menés sur un même segment suffisent souvent à faire émerger des schémas nets. Au-delà, on entend les mêmes choses. Le vrai travail est en amont : trouver des gens du *bon segment*. Pour Covio, interroger des Parisiens en métro n'apprend rien : la cible, ce sont des salariés de zone d'activité qui viennent seuls en voiture. Où les trouver ? Le parking de la zone à 8h30, les responsables RSE des entreprises voisines, le canal Slack interne d'un employeur partenaire. Prévois un remerciement (une carte cadeau de 15 ou 20 € est un standard correct pour 30 minutes) et note tout dans un espace partagé (une base Notion avec une fiche par entretien fait très bien l'affaire : date, profil, verbatims marquants, lien vers l'enregistrement).\n\n" +
            "## Le déroulé d'un bon entretien\n\n" +
            "1. Mettre à l'aise, expliquer qu'il n'y a pas de mauvaise réponse, qu'on ne vend rien.\n" +
            "2. Faire raconter le dernier épisode concret lié au problème (le dernier trajet).\n" +
            "3. Creuser les irritants : \"qu'avez-vous fait quand c'est arrivé ?\", \"combien de fois ça vous arrive ?\".\n" +
            "4. Comprendre les solutions de contournement actuelles : covoiturage informel avec un collègue, transports, rien du tout.\n" +
            "5. Se taire. Le silence fait parler. La règle : l'interviewé parle 80 % du temps.\n\n" +
            "Va à deux si tu peux : un qui mène, un qui note. Et emmène régulièrement un développeur ou la designer : une heure d'entretien vécue en direct vaut dix pages de synthèse.\n\n" +
            "## Les pièges qui invalident tout\n\n" +
            "- **Les questions fermées** qui appellent oui/non tuent la richesse. Préfère \"comment\", \"pourquoi\", \"racontez\".\n" +
            "- **Pitcher son idée** : dès que tu décris Covio, l'interviewé devient poli et cherche à te faire plaisir. Garde ta solution pour la fin, ou pas du tout.\n" +
            "- **Les questions orientées** : \"c'est pénible de chercher un covoiturage, non ?\" souffle la réponse. Formule neutre : \"comment ça se passe quand vous cherchez ?\".\n" +
            "- **Les compliments** (\"super idée !\") ne valent rien. Ce qui compte, ce sont les engagements concrets : un rendez-vous suivant, une intro à un collègue, l'installation d'un prototype.\n\n" +
            "## À toi\n\n" +
            "Réécris ces trois questions pour qu'elles respectent le Mom Test :\n\n" +
            "1. \"Est-ce que vous paieriez 2 € par trajet pour un covoiturage garanti ?\"\n" +
            "2. \"Vous aimeriez recevoir une notification quand un conducteur est disponible ?\"\n" +
            "3. \"Le covoiturage, c'est important pour vous ?\"\n\n" +
            "> Correction possible : 1 → \"Combien vous coûte votre trajet aujourd'hui, tout compris ? Racontez-moi la dernière fois que vous avez payé pour éviter une galère de transport.\" (On cherche des preuves de disposition à payer dans le passé, pas une promesse.) 2 → \"La dernière fois que vous avez cherché quelqu'un pour partager un trajet, comment vous y êtes-vous pris ? Qu'est-ce qui a pris du temps ?\" (Le besoin de notification, s'il existe, apparaîtra tout seul.) 3 → \"Comment venez-vous au travail cette semaine ? Qu'est-ce que vous avez déjà essayé d'autre ?\" (On remplace l'opinion abstraite par des comportements réels.)\n\n" +
            "> À retenir : si l'interviewé te fait des compliments, l'entretien a raté. Tu cherches des faits sur son passé, pas une validation de ton idée.",
        },
        {
          id: "l10",
          title: "L'Opportunity Solution Tree",
          type: "text",
          duration: "18 min",
          body:
            "## Relier les découvertes aux décisions\n\n" +
            "Après quelques entretiens, tu as une masse d'irritants, de besoins, d'anecdotes. Comment passer de ce désordre à des décisions produit tracées ? L'**Opportunity Solution Tree** (OST), formalisé par Teresa Torres dans Continuous Discovery Habits, est l'outil qui structure ça. C'est un arbre à quatre niveaux.\n\n" +
            "- **La racine** : le résultat visé (outcome), typiquement lié à la north star ou à un OKR.\n" +
            "- **Les opportunités** : les besoins, points de douleur et désirs découverts en entretien. Ce sont des problèmes, pas des solutions.\n" +
            "- **Les solutions** : les idées de fonctionnalités qui pourraient adresser une opportunité.\n" +
            "- **Les expérimentations** : les tests pour valider qu'une solution marche vraiment (prototype, A/B test, maquette testée).\n\n" +
            "## L'OST de Covio\n\n" +
            "Prenons comme racine l'outcome \"réduire le taux d'annulation conducteur de 18 % à 8 %\" (notre KR 3).\n\n" +
            "Opportunités découvertes en entretien :\n\n" +
            "- \"Parfois j'ai un imprévu et je me sens coupable de laisser tomber mon passager, alors je préfère ne pas m'engager du tout.\"\n" +
            "- \"Le passager n'est pas prêt à l'heure et je pars sans lui, ça compte comme une annulation.\"\n" +
            "- \"Je ne sais jamais si la personne va vraiment venir, donc j'hésite à proposer mon trajet.\"\n\n" +
            "Chacune de ces opportunités peut ouvrir plusieurs solutions. Pour la première (\"je me sens coupable, donc je ne m'engage pas\") : une garantie \"trajet de secours\" qui reloge le passager si le conducteur annule, ou une fenêtre d'annulation sans pénalité jusqu'à H-2, ou un système de remplaçant automatique. Trois solutions concurrentes pour un même problème.\n\n" +
            "## Pourquoi cette structure change tout\n\n" +
            "L'OST te force à deux disciplines. D'abord, séparer le problème de la solution : tant qu'une opportunité n'a qu'une seule solution possible, tu n'as probablement pas assez réfléchi. Ensuite, choisir *quelle opportunité* attaquer avant de choisir *quelle solution*. Beaucoup de POs sautent directement aux solutions (\"faisons une garantie de trajet\") sans avoir comparé les opportunités entre elles. Or si l'annulation vient surtout du passager pas prêt, la garantie conducteur ne sert à rien. Sur Covio, un simple comptage des verbatims a tranché : 9 interviewés sur 12 citaient la peur de s'engager, 3 seulement le passager en retard. L'opportunité prioritaire était claire avant même de parler solution.\n\n" +
            "## Découverte et delivery : deux flux, pas deux phases\n\n" +
            "L'erreur d'organisation classique : traiter la découverte comme une phase amont (\"on fait trois mois de discovery, puis on développe\"). C'est le cycle en V qui revient déguisé. Ce que Teresa Torres appelle la découverte continue, c'est deux boucles qui tournent en même temps, toutes les semaines : pendant que l'équipe livre le sprint en cours, le trio produit (PO, designer, lead dev) mène ses entretiens hebdomadaires, alimente l'arbre, teste des maquettes. Les solutions validées entrent au backlog ; les données d'usage de ce qui vient d'être livré repartent nourrir la découverte.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La double boucle : la découverte alimente le delivery en solutions validées, l'usage réel renvoie des questions à la découverte\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Boucle discovery et boucle delivery reliées</title><defs><marker id=\"po-dd\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\"/></marker></defs><text x=\"110\" y=\"34\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.8\">DISCOVERY</text><text x=\"530\" y=\"34\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.8\">DELIVERY</text><rect x=\"40\" y=\"60\" width=\"140\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"110\" y=\"83\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">entretiens</text><rect x=\"40\" y=\"132\" width=\"140\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"110\" y=\"155\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">opportunités</text><rect x=\"40\" y=\"204\" width=\"140\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"110\" y=\"227\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">tests, protos</text><path d=\"M110 96 L110 128\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-dd)\"/><path d=\"M110 168 L110 200\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-dd)\"/><path d=\"M40 222 C2 222 2 78 36 78\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-dd)\"/><rect x=\"460\" y=\"60\" width=\"140\" height=\"36\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"530\" y=\"83\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">backlog</text><rect x=\"460\" y=\"132\" width=\"140\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"530\" y=\"155\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">sprint</text><rect x=\"460\" y=\"204\" width=\"140\" height=\"36\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"530\" y=\"227\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">incrément livré</text><path d=\"M530 96 L530 128\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-dd)\"/><path d=\"M530 168 L530 200\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-dd)\"/><path d=\"M600 222 C638 222 638 78 604 78\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-dd)\"/><path d=\"M185 118 L452 118\" stroke=\"currentColor\" fill=\"none\" marker-end=\"url(#po-dd)\"/><text x=\"320\" y=\"110\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">solutions validées</text><path d=\"M455 182 L188 182\" stroke=\"currentColor\" fill=\"none\" marker-end=\"url(#po-dd)\"/><text x=\"320\" y=\"202\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">données d'usage</text></svg>\n" +
            "```\n\n" +
            "Concrètement, ça se loge dans l'agenda : deux créneaux d'entretiens le mardi, un point arbre de 30 minutes le jeudi. Pas besoin de plus pour que la boucle vive. Côté outils, l'arbre se maintient très bien sur un tableau Miro partagé ; certaines équipes le tiennent dans Jira Product Discovery pour relier chaque solution aux tickets de delivery correspondants.\n\n" +
            "## L'arbre est vivant\n\n" +
            "Un OST n'est pas un livrable qu'on fait une fois. Il grossit à mesure que la découverte continue, en parallèle du delivery. Chaque semaine, de nouveaux entretiens ajoutent des opportunités, des expérimentations en écartent, l'arbre se taille. Si ton arbre n'a pas bougé depuis un mois, ta découverte est à l'arrêt, et ton backlog vit sur des certitudes qui datent.\n\n" +
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
            "Cette séance filmée reprend cinq entretiens réalisés auprès de conducteurs Covio et montre, étape par étape, comment on passe des verbatims bruts à un Opportunity Solution Tree exploitable sur un tableau Miro. Voici les notes complètes de l'atelier, à suivre en parallèle si tu veux reproduire l'exercice sur ton propre produit.\n\n" +
            "## Étape 1 : Extraire les verbatims\n\n" +
            "On relit chaque entretien et on surligne les phrases qui expriment un besoin, une douleur ou un contournement. On copie chaque verbatim tel quel sur un post-it numérique, avec un code couleur par interviewé pour garder la trace. Exemples réels tirés des entretiens Covio :\n\n" +
            "- \"J'ai proposé mon trajet une fois, personne n'a réservé, j'ai pas retenté.\"\n" +
            "- \"Le mec a annulé à 7h45, j'étais déjà à l'arrêt, j'ai pris ma voiture en catastrophe.\"\n" +
            "- \"Je fais du covoiturage avec un collègue mais on s'organise par SMS, l'app je l'ai désinstallée.\"\n\n" +
            "Règle de l'atelier : on garde les mots de l'utilisateur, on ne les reformule pas encore en langage produit. La reformulation prématurée fait perdre le sens : \"j'ai pas retenté\" ne dit pas la même chose que \"taux de réengagement faible\".\n\n" +
            "## Étape 2 : Regrouper en opportunités\n\n" +
            "On rapproche les verbatims qui parlent du même problème sous-jacent. Trois grappes émergent :\n\n" +
            "1. La peur de proposer un trajet dans le vide (personne ne réserve).\n" +
            "2. Le stress de l'annulation de dernière minute, côté conducteur comme passager.\n" +
            "3. La concurrence des solutions informelles (SMS entre collègues) qui vident l'app de son intérêt.\n\n" +
            "Chaque grappe devient une opportunité, formulée côté utilisateur : par exemple \"je n'ose pas proposer un trajet car je crains que personne ne réserve\".\n\n" +
            "## Étape 3 : Relier à l'outcome et arbitrer\n\n" +
            "On accroche chaque opportunité à la racine de l'arbre (ici : augmenter les trajets réalisés). Puis on estime grossièrement, pour chacune : combien d'utilisateurs concernés, quelle intensité de douleur, quel lien avec l'outcome. La grappe 2 (annulations) touche quatre interviewés sur cinq et bloque directement des trajets déjà quasi conclus. On la marque comme opportunité prioritaire du cycle.\n\n" +
            "## Étape 4 : Ouvrir plusieurs solutions\n\n" +
            "Sur l'opportunité retenue, on s'oblige à lister au moins trois solutions avant d'en choisir une, pour ne pas tomber amoureux de la première idée. Garantie de trajet de secours, fenêtre d'annulation avec préavis, file d'attente de passagers de remplacement. On note en face de chacune l'expérimentation la moins chère pour la tester avant de s'engager en développement : pour la garantie, un simple test de Wizard of Oz (on reloge à la main les passagers lâchés pendant deux semaines) dit si la promesse change les comportements, sans écrire une ligne de code.\n\n" +
            "> À retenir : la valeur de l'exercice n'est pas le joli arbre final, c'est la discipline de séparer verbatim, opportunité et solution. Refais-le toi-même sur trois entretiens, même imparfaits, plutôt que de regarder passivement.",
        },
        {
          id: "l12",
          title: "Quiz : Découverte produit",
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
            {
              id: "q28",
              prompt:
                "Une équipe consacre les trois premiers mois du projet à la découverte, puis passe six mois à développer sans nouvel entretien. Quel est le problème ?",
              options: [
                "Aucun : trois mois de découverte, c'est déjà beaucoup",
                "La découverte doit être continue, en parallèle du delivery : figée en phase amont, elle laisse le backlog vivre sur des certitudes périmées",
                "La découverte aurait dû durer six mois et le développement trois",
                "Il fallait externaliser la découverte à un cabinet d'études",
              ],
              correctIndex: 1,
              explanation:
                "Traiter la découverte comme une phase, c'est le cycle en V déguisé : au bout de quelques semaines de développement, le marché et la compréhension ont bougé mais plus rien ne les capte. La découverte continue fait tourner les deux boucles ensemble : entretiens hebdomadaires pendant que l'équipe livre, données d'usage qui reviennent nourrir l'arbre.",
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
          duration: "18 min",
          body:
            "## Un backlog, pas une décharge\n\n" +
            "Le Product Backlog est la liste ordonnée de tout ce qui pourrait être fait sur le produit. \"Ordonnée\" est le mot clé : ce n'est pas un tas d'idées, c'est une file de priorité. Le premier élément est ce que l'équipe fera ensuite, et chaque élément est plus prioritaire que celui d'en dessous. Un backlog où tout est \"haute priorité\" n'est pas priorisé du tout.\n\n" +
            "Un bon backlog respecte la structure DEEP (Roman Pichler à nouveau) :\n\n" +
            "- **Detailed appropriately** : les éléments du haut sont détaillés et prêts, ceux du bas restent grossiers. Inutile de spécifier finement une story qu'on fera dans six mois.\n" +
            "- **Estimated** : les éléments sont estimés, avec une précision qui décroît vers le bas.\n" +
            "- **Emergent** : le backlog vit, on ajoute, retire, réordonne en continu.\n" +
            "- **Prioritized** : ordonné par valeur/priorité.\n\n" +
            "## La forme d'un backlog sain\n\n" +
            "Imagine une pyramide inversée. En haut, quelques stories fines, prêtes à partir en sprint, avec critères d'acceptation. Au milieu, des éléments à moitié dégrossis. En bas, de gros blocs vagues, des épopées (epics) qu'on affinera le moment venu. C'est normal et sain. Vouloir tout spécifier d'avance, c'est du gaspillage : la moitié de ces stories changeront ou disparaîtront avant qu'on les touche.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le flux du travail : des idées au backlog ordonné, du refinement au sprint, et le feedback qui reboucle\"}\n" +
            "<svg viewBox=\"0 0 640 310\" role=\"img\"><title>Flux des demandes vers le backlog puis le sprint</title><defs><marker id=\"po-bk\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\"/></marker></defs><rect x=\"10\" y=\"120\" width=\"100\" height=\"56\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"60\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">idées,</text><text x=\"60\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">demandes</text><path d=\"M113 148 L136 148\" stroke=\"currentColor\" fill=\"none\" marker-end=\"url(#po-bk)\"/><rect x=\"140\" y=\"46\" width=\"140\" height=\"214\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"210\" y=\"36\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.8\">backlog produit</text><rect x=\"152\" y=\"58\" width=\"116\" height=\"13\" rx=\"2\" class=\"fig-accent\" fill=\"currentColor\"/><rect x=\"152\" y=\"76\" width=\"116\" height=\"13\" rx=\"2\" class=\"fig-accent\" fill=\"currentColor\"/><rect x=\"152\" y=\"94\" width=\"116\" height=\"13\" rx=\"2\" class=\"fig-accent\" fill=\"currentColor\"/><text x=\"210\" y=\"128\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">fin, prêt</text><rect x=\"152\" y=\"140\" width=\"116\" height=\"20\" rx=\"2\" fill=\"currentColor\" opacity=\"0.45\"/><rect x=\"152\" y=\"166\" width=\"116\" height=\"20\" rx=\"2\" fill=\"currentColor\" opacity=\"0.45\"/><rect x=\"152\" y=\"200\" width=\"116\" height=\"46\" rx=\"2\" fill=\"currentColor\" opacity=\"0.25\"/><text x=\"210\" y=\"276\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">grossier (epics)</text><path d=\"M283 148 L306 148\" stroke=\"currentColor\" fill=\"none\" marker-end=\"url(#po-bk)\"/><rect x=\"310\" y=\"120\" width=\"116\" height=\"56\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"368\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">refinement</text><text x=\"368\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">~10% du temps</text><path d=\"M429 148 L452 148\" stroke=\"currentColor\" fill=\"none\" marker-end=\"url(#po-bk)\"/><rect x=\"456\" y=\"120\" width=\"92\" height=\"56\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"502\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">sprint</text><text x=\"502\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">2 sem.</text><path d=\"M551 148 L570 148\" stroke=\"currentColor\" fill=\"none\" marker-end=\"url(#po-bk)\"/><rect x=\"574\" y=\"120\" width=\"58\" height=\"56\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"603\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">incré-</text><text x=\"603\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">ment</text><path d=\"M603 180 C603 292 60 292 60 182\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-bk)\"/><text x=\"330\" y=\"300\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">retours et données d'usage</text></svg>\n" +
            "```\n\n" +
            "## Le refinement, l'atelier le plus sous-estimé\n\n" +
            "L'affinage (backlog refinement) est la réunion récurrente où l'équipe et le PO préparent le haut du backlog : clarifier les stories, les découper, les estimer, lever les questions. Ce n'est pas une cérémonie officielle de Scrum avec un cadre strict, mais dans la pratique c'est là que se joue la qualité des sprints. Une équipe qui n'affine pas arrive au sprint planning avec des stories floues, passe deux heures à débattre, et s'engage sur du travail mal compris.\n\n" +
            "Compte environ 10 % du temps de l'équipe pour l'affinage : une à deux heures par semaine. Le PO y arrive préparé : il a une idée de la priorité, les objectifs métier, les maquettes s'il y en a. L'équipe apporte le regard technique : faisabilité, découpage, dépendances, pièges. Une bonne séance traite quatre à six stories, pas quinze : au-delà, on survole.\n\n" +
            "## La notion de \"Ready\"\n\n" +
            "Beaucoup d'équipes se dotent d'une Definition of Ready : les critères qu'une story doit remplir pour entrer en sprint. Typiquement : problème clair, critères d'acceptation écrits, estimée, dépendances identifiées, assez petite pour tenir dans un sprint. Une story qui n'est pas Ready ne devrait pas être planifiée. C'est le meilleur rempart contre les sprints qui explosent parce qu'on a découvert la complexité en cours de route.\n\n" +
            "Pour Covio, une epic comme \"gérer les paiements entre particuliers\" reste en bas, vague, tant qu'on n'y arrive pas. Quand elle remonte, on l'affine : découpage en stories (autoriser une carte, débiter à la fin du trajet, rembourser en cas d'annulation, gérer les litiges), et chacune passe le filtre Ready avant d'entrer en sprint.\n\n" +
            "## Entretenir le jardin : la purge assumée\n\n" +
            "Reste la question qui fâche : que faire des tickets qui dorment ? Ma règle : tout élément non touché depuis six mois est fermé, avec un commentaire poli. S'il compte vraiment, quelqu'un le recréera : ça arrive une fois sur vingt. Un backlog de 60 éléments se comprend et se réordonne en une séance ; un backlog de 400 ne sert plus qu'à rassurer ceux qui y ont déposé quelque chose. Côté outils, tous les gestionnaires modernes t'aident à tenir cette discipline : Jira permet de filtrer par date de dernière mise à jour, Linear archive et propose une boîte de Triage pour traiter les demandes entrantes avant qu'elles ne polluent le backlog (une idée que je te conseille de répliquer même ailleurs : un sas d'entrée, distinct du backlog, où les demandes attendent leur premier tri).\n\n" +
            "> À retenir : le backlog n'est pas figé et n'a pas à être exhaustif. Un PO passe une part importante de son temps à le tailler : c'est un jardin, pas une archive.",
        },
        {
          id: "l14",
          title: "Écrire une bonne user story : format, critères, INVEST",
          type: "text",
          duration: "19 min",
          body:
            "## La story n'est pas une spec, c'est une promesse de conversation\n\n" +
            "Une user story n'est pas un cahier des charges. C'est un rappel qu'il faudra parler d'un besoin utilisateur. Sa valeur tient autant dans la discussion qu'elle déclenche que dans le texte. Le format le plus courant, popularisé par Mike Cohn :\n\n" +
            "\"En tant que [rôle], je veux [action], afin de [bénéfice].\"\n\n" +
            "Pour Covio : \"En tant que passager, je veux annuler un trajet jusqu'à 2h avant le départ sans pénalité, afin de ne pas hésiter à réserver par peur d'un imprévu.\"\n\n" +
            "Le \"afin de\" est la partie la plus importante et la plus souvent bâclée. Il porte le *pourquoi*. Sans lui, l'équipe construit une mécanique sans comprendre l'intention, et passe à côté de meilleures solutions. Ici, le vrai besoin n'est pas \"un bouton annuler\", c'est \"réserver sans stress\". Ça ouvre d'autres pistes qu'un simple bouton.\n\n" +
            "Un mot sur le formalisme : le gabarit \"en tant que… je veux… afin de…\" est un moyen, pas un rite. Si un rôle est évident et répété partout, certaines équipes l'allègent. Ce qui ne se négocie pas, c'est la présence du bénéfice et la testabilité. Une story dont le rôle est \"en tant qu'utilisateur\" sur les 40 stories du backlog te dit d'ailleurs quelque chose : tu n'as probablement pas identifié tes vrais rôles (passager, conducteur, gestionnaire RSE côté employeur…).\n\n" +
            "## Les critères d'acceptation : le cœur testable\n\n" +
            "Une story sans critères d'acceptation (acceptance criteria) n'est pas prête. Les critères définissent ce que \"fini et correct\" veut dire, sans ambiguïté. Deux formats répandus :\n\n" +
            "Liste à cocher, simple et efficace :\n\n" +
            "- L'annulation gratuite est possible tant qu'il reste plus de 2h avant le départ.\n" +
            "- Passé ce délai, l'annulation est possible mais facture les frais de réservation.\n" +
            "- Le conducteur est notifié immédiatement de toute annulation.\n" +
            "- Un passager qui annule trois fois en gratuit sur 30 jours reçoit un avertissement.\n\n" +
            "Format Gherkin (Given / When / Then), utile quand le comportement dépend du contexte :\n\n" +
            "\"Étant donné un trajet dont le départ est dans 3h, quand le passager clique sur annuler, alors l'annulation est gratuite et le conducteur reçoit une notification.\"\n\n" +
            "Les bons critères sont testables : on peut dire objectivement s'ils sont remplis. \"L'annulation doit être simple\" n'est pas un critère, c'est un vœu. Et n'écris pas les critères seul dans ton coin : les meilleurs sortent d'une conversation à trois (le PO qui porte le besoin, un dev qui voit les cas limites, un testeur ou la designer qui pense au parcours). C'est souvent le dev qui demandera : \"et si le départ est dans exactement 2h ?\" Bonne question. La réponse va dans les critères.\n\n" +
            "## INVEST : la checklist qualité\n\n" +
            "Bill Wake a formalisé six qualités d'une bonne story sous l'acronyme INVEST :\n\n" +
            "- **Independent** : autonome, on peut la livrer sans dépendre d'une autre.\n" +
            "- **Negotiable** : c'est une base de discussion, pas un contrat gravé.\n" +
            "- **Valuable** : elle apporte une valeur perceptible à un utilisateur ou au business.\n" +
            "- **Estimable** : l'équipe peut en évaluer l'effort.\n" +
            "- **Small** : elle tient largement dans un sprint.\n" +
            "- **Testable** : on sait vérifier qu'elle est faite, via ses critères.\n\n" +
            "Si une story échoue à un critère, c'est un signal. Pas estimable ? Elle est trop floue, il faut la clarifier ou lancer un spike. Pas small ? Il faut la découper (prochaine leçon). Pas valuable ? Pourquoi est-elle dans le backlog ?\n\n" +
            "## L'erreur classique : la story technique déguisée\n\n" +
            "\"En tant qu'utilisateur, je veux une base de données PostgreSQL, afin de stocker les trajets.\" Aucun utilisateur ne veut une base de données. C'est une tâche technique maquillée en story. Les vraies stories parlent de valeur utilisateur ou métier. Le travail technique existe, mais il se rattache à une story de valeur, il ne se déguise pas en une.\n\n" +
            "## À toi\n\n" +
            "Écris la story et trois critères d'acceptation pour ce besoin Covio, remonté en entretien : les passagers hésitent à monter avec un inconnu et veulent savoir à qui ils ont affaire.\n\n" +
            "> Correction possible : \"En tant que passager, je veux consulter le profil du conducteur (prénom, photo, note moyenne, nombre de trajets réalisés) avant de réserver, afin de monter en confiance avec quelqu'un que je ne connais pas.\" Critères : 1) le profil affiche prénom, photo, note moyenne sur 5 et nombre de trajets réalisés ; 2) un conducteur sans historique affiche \"nouveau conducteur\" au lieu d'une note vide ; 3) le profil est accessible depuis la proposition de trajet, avant tout engagement. Si tu as écrit \"je veux un système de profils vérifiés avec KYC\", tu as sauté à une solution lourde : reste au besoin de confiance, la vérification d'identité est une autre story, à prioriser à part.\n\n" +
            "> À retenir : teste chaque story avec le \"afin de\". Si le bénéfice sonne creux ou tautologique (\"afin de pouvoir le faire\"), la story ne porte pas de valeur claire et mérite d'être réinterrogée.",
        },
        {
          id: "l15",
          title: "Découper une story trop grosse, et cartographier avec le story mapping",
          type: "text",
          duration: "20 min",
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
            "Appliqué à l'epic \"réserver et payer un trajet\" :\n\n" +
            "1. Réserver une place sur un trajet gratuit (sans paiement) : livre déjà la valeur \"mise en relation\".\n" +
            "2. Payer par carte enregistrée quand la réservation est confirmée, cas nominal seulement.\n" +
            "3. Gérer le refus de paiement et proposer une nouvelle tentative.\n" +
            "4. Rembourser automatiquement en cas d'annulation dans les délais.\n\n" +
            "Chaque story est démontrable, testable, et apporte une valeur incrémentale. On peut même s'arrêter après la 1 si les priorités changent, et avoir livré quelque chose d'utile.\n\n" +
            "## Le story mapping : découper à l'échelle du produit\n\n" +
            "Les patterns ci-dessus marchent story par story. Quand il faut découper un *produit entier* ou une grosse release, l'outil de référence est le **story mapping** de Jeff Patton (le livre User Story Mapping, 2014, reste la source). L'idée : au lieu d'une liste plate, on organise le backlog en deux dimensions.\n\n" +
            "- En haut, la **colonne vertébrale** (backbone) : les grandes activités de l'utilisateur, dans l'ordre où il les vit. Pour Covio : s'inscrire → publier un trajet → trouver un trajet → réserver et payer → évaluer.\n" +
            "- Dessous, sous chaque activité, les stories qui la réalisent, de la plus indispensable à la plus optionnelle.\n" +
            "- Puis on trace des lignes horizontales : chaque ligne est une release. La première coupe le strict nécessaire de chaque colonne (ce que Patton appelle un squelette qui marche (walking skeleton) : un parcours complet de bout en bout, même rudimentaire).\n\n" +
            "```figure\n" +
            "{\"caption\": \"Story map de Covio : les activités en colonne vertébrale, les stories dessous, la ligne de release qui coupe un parcours complet\"}\n" +
            "<svg viewBox=\"0 0 640 224\" role=\"img\"><title>Story map avec backbone et ligne de release</title><rect x=\"15\" y=\"30\" width=\"110\" height=\"34\" rx=\"3\" fill=\"currentColor\" opacity=\"0.35\"/><text x=\"70\" y=\"51\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">s'inscrire</text><rect x=\"140\" y=\"30\" width=\"110\" height=\"34\" rx=\"3\" fill=\"currentColor\" opacity=\"0.35\"/><text x=\"195\" y=\"51\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">publier</text><rect x=\"265\" y=\"30\" width=\"110\" height=\"34\" rx=\"3\" fill=\"currentColor\" opacity=\"0.35\"/><text x=\"320\" y=\"51\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">trouver</text><rect x=\"390\" y=\"30\" width=\"110\" height=\"34\" rx=\"3\" fill=\"currentColor\" opacity=\"0.35\"/><text x=\"445\" y=\"51\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">réserver</text><rect x=\"515\" y=\"30\" width=\"110\" height=\"34\" rx=\"3\" fill=\"currentColor\" opacity=\"0.35\"/><text x=\"570\" y=\"51\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">évaluer</text><rect x=\"15\" y=\"84\" width=\"110\" height=\"28\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"70\" y=\"102\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">email + mdp</text><rect x=\"140\" y=\"84\" width=\"110\" height=\"28\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"195\" y=\"102\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">trajet récurrent</text><rect x=\"265\" y=\"84\" width=\"110\" height=\"28\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"320\" y=\"102\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">match auto</text><rect x=\"390\" y=\"84\" width=\"110\" height=\"28\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"445\" y=\"102\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">réserver gratuit</text><line x1=\"10\" y1=\"132\" x2=\"630\" y2=\"132\" stroke=\"currentColor\" stroke-dasharray=\"6 5\" opacity=\"0.8\"/><text x=\"628\" y=\"126\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"end\" opacity=\"0.8\">release 1 : squelette qui marche</text><rect x=\"15\" y=\"146\" width=\"110\" height=\"28\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"70\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">profil, photo</text><rect x=\"140\" y=\"146\" width=\"110\" height=\"28\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"195\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">trajet ponctuel</text><rect x=\"265\" y=\"146\" width=\"110\" height=\"28\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"320\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">recherche manuelle</text><rect x=\"390\" y=\"146\" width=\"110\" height=\"28\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"445\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">payer carte</text><rect x=\"515\" y=\"146\" width=\"110\" height=\"28\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.55\"/><text x=\"570\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">note 1-5</text><line x1=\"10\" y1=\"196\" x2=\"630\" y2=\"196\" stroke=\"currentColor\" stroke-dasharray=\"6 5\" opacity=\"0.5\"/><text x=\"628\" y=\"190\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"end\" opacity=\"0.6\">release 2</text></svg>\n" +
            "```\n\n" +
            "La force du format : il rend le trou visible. Une liste plate de 60 tickets peut cacher qu'aucune story ne couvre l'évaluation ; sur une carte, la colonne vide saute aux yeux. Et la ligne de release force une discipline que la liste n'impose pas : plutôt qu'une colonne parfaite et quatre absentes, on prend le minimum de chaque colonne. Mieux vaut un parcours complet médiocre qu'un cinquième du parcours parfait : le premier s'apprend en vrai, le second n'apprend rien.\n\n" +
            "En pratique, l'atelier se fait en équipe, sur un mur de post-its ou un tableau Miro (il existe des gabarits de story map tout faits), en une demi-journée pour un produit comme Covio. On en ressort avec la release 1 découpée en stories qui partent au backlog : la carte reste affichée et sert de plan de situation les mois suivants.\n\n" +
            "## Le signe qu'on a bien découpé\n\n" +
            "Chaque tranche doit pouvoir se raconter comme un bénéfice, même petit : \"maintenant un passager peut réserver\", \"maintenant on encaisse\". Si une tranche ne se raconte pas côté utilisateur (\"maintenant la table SQL existe\"), c'est probablement un découpage horizontal déguisé. Et garde les tranches à peu près équilibrées : une story de 8 points et cinq de 1 point dans la même epic, c'est souvent un signe qu'on n'a pas fini de réfléchir à la grosse.\n\n" +
            "> À retenir : on découpe une story comme on tranche un gâteau, verticalement (chaque part contient toutes les couches). Et quand c'est tout le produit qu'il faut découper, la story map remplace la liste : un parcours complet minimal d'abord, l'enrichissement ensuite.",
        },
        {
          id: "l16",
          title: "Quiz : Backlog et user stories",
          type: "quiz",
          duration: "7 min",
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
            {
              id: "q29",
              prompt:
                "Sur la story map de Covio, un PO propose comme release 1 : tout le parcours d'inscription, parfait et complet, et rien d'autre. Pourquoi est-ce contraire à l'esprit du story mapping ?",
              options: [
                "Parce que l'inscription doit toujours arriver en dernier",
                "Parce que la release 1 doit couper horizontalement la carte : un parcours de bout en bout, même minimal (walking skeleton), pas une seule colonne parfaite",
                "Parce qu'une release doit contenir exactement dix stories",
                "Parce que l'inscription ne se découpe pas en stories",
              ],
              correctIndex: 1,
              explanation:
                "Une inscription parfaite sans trajet, sans réservation et sans paiement ne délivre aucune valeur et n'apprend rien. Le story mapping impose de prendre le minimum de chaque activité pour livrer un parcours complet utilisable, puis d'enrichir colonne par colonne dans les releases suivantes.",
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
          duration: "20 min",
          body:
            "## Le premier tri : la matrice valeur/effort\n\n" +
            "Avant de sortir un framework sophistiqué, commence par le geste le plus simple : placer chaque candidat sur deux axes, la valeur attendue et l'effort estimé. Quatre quadrants en sortent. Les quick wins (forte valeur, faible effort) partent devant. Les projets majeurs (forte valeur, gros effort) se planifient et se découpent. Les remplissages (faible valeur, faible effort) attendent un creux. Les ingrats (faible valeur, gros effort) sortent du backlog, poliment mais fermement.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La matrice valeur/effort : le premier tri d'un backlog, avant tout framework chiffré\"}\n" +
            "<svg viewBox=\"0 0 640 340\" role=\"img\"><title>Matrice valeur effort en quatre quadrants</title><defs><marker id=\"po-ve\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\"/></marker></defs><path d=\"M90 290 L90 40\" stroke=\"currentColor\" opacity=\"0.7\" fill=\"none\" marker-end=\"url(#po-ve)\"/><path d=\"M90 290 L600 290\" stroke=\"currentColor\" opacity=\"0.7\" fill=\"none\" marker-end=\"url(#po-ve)\"/><text x=\"58\" y=\"58\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">valeur</text><text x=\"560\" y=\"312\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">effort</text><line x1=\"340\" y1=\"48\" x2=\"340\" y2=\"290\" stroke=\"currentColor\" opacity=\"0.35\" stroke-dasharray=\"5 5\"/><line x1=\"90\" y1=\"166\" x2=\"594\" y2=\"166\" stroke=\"currentColor\" opacity=\"0.35\" stroke-dasharray=\"5 5\"/><rect x=\"104\" y=\"58\" width=\"222\" height=\"96\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"215\" y=\"88\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">quick wins</text><text x=\"215\" y=\"108\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">ex. notifs de rappel</text><text x=\"215\" y=\"128\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">→ faire en premier</text><rect x=\"354\" y=\"58\" width=\"230\" height=\"96\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"469\" y=\"88\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">projets majeurs</text><text x=\"469\" y=\"108\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">ex. garantie trajet</text><text x=\"469\" y=\"128\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">→ découper, planifier</text><rect x=\"104\" y=\"178\" width=\"222\" height=\"96\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"215\" y=\"212\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">remplissage</text><text x=\"215\" y=\"232\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">→ si un creux se libère</text><rect x=\"354\" y=\"178\" width=\"230\" height=\"96\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"469\" y=\"212\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">ingrats</text><text x=\"469\" y=\"232\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">→ sortir du backlog</text></svg>\n" +
            "```\n\n" +
            "Cette matrice se dessine en dix minutes en atelier et suffit à dégrossir 80 % des cas. Mais dès que deux options se disputent le même quadrant, ou qu'il faut justifier un arbitrage devant des parties prenantes, il faut du chiffre. C'est là qu'entrent les frameworks.\n\n" +
            "## RICE : chiffrer pour comparer\n\n" +
            "RICE, popularisé par l'équipe d'Intercom, note chaque option sur quatre dimensions : **Reach** (combien de personnes touchées par trimestre), **Impact** (effet par personne : 3 = massif, 2 = fort, 1 = moyen, 0,5 = faible), **Confidence** (confiance dans les estimations : 100 %, 80 %, 50 %), **Effort** (en personnes-mois). Score = (Reach × Impact × Confidence) / Effort.\n\n" +
            "Duel Covio :\n\n" +
            "| Option | Reach | Impact | Confidence | Effort | Score |\n" +
            "| --- | --- | --- | --- | --- | --- |\n" +
            "| Garantie trajet de secours | 500 | 2 | 0,8 | 3 | ≈ 267 |\n" +
            "| Notifications de rappel J-1 | 2000 | 0,5 | 1 | 1 | 1000 |\n\n" +
            "Résultat contre-intuitif : la petite feature sans prestige bat la grosse feature vedette, parce qu'elle touche quatre fois plus de monde pour trois fois moins d'effort. C'est exactement ce que RICE sait faire : casser le biais du \"projet excitant\".\n\n" +
            "## MoSCoW : cadrer un périmètre de release\n\n" +
            "MoSCoW classe en **Must** (sans ça, on ne lance pas), **Should** (important, négociable), **Could** (si le temps le permet), **Won't** (explicitement exclu de cette release : la catégorie la plus utile, car elle rend le renoncement officiel). Pour le lancement pilote Covio : Must = matching + réservation ; Should = paiement intégré (on peut démarrer en paiement direct entre covoitureurs) ; Could = notation des conducteurs ; Won't = application web (mobile d'abord). Garde-fou : si les Must dépassent ~60 % de la capacité, le classement a échoué (tout le monde a mis son sujet en Must et il faut re-trancher).\n\n" +
            "## Kano : penser satisfaction\n\n" +
            "Le modèle Kano classe les attributs selon leur effet sur la satisfaction. Les **basiques** (must-be) ne satisfont pas quand ils sont là mais rendent furieux quand ils manquent : pour Covio, que le trajet réservé ait bien lieu. Les attributs de **performance** satisfont proportionnellement : temps de matching, prix. Les **delighters** enchantent sans être attendus : le badge d'économies de CO2 partageable. Deux leçons pratiques : couvre les basiques avant de financer des delighters (un delighter sur un produit qui rate ses basiques, c'est une déco de Noël sur une maison sans toit), et souviens-toi que le delighter d'hier devient le basique de demain (la géolocalisation du conducteur en temps réel émerveillait en 2015, elle est attendue en 2026).\n\n" +
            "## WSJF : séquencer sous contrainte de temps\n\n" +
            "WSJF (Weighted Shortest Job First, issu de SAFe) divise le coût du délai par la durée du job : à coût de retard égal, on fait d'abord le plus court. Utile dans les contextes à l'échelle, où plusieurs équipes se partagent un train de release et où \"qu'est-ce qui coûte le plus cher à retarder ?\" est la vraie question.\n\n" +
            "## Choisir son framework, et rester honnête\n\n" +
            "```figure\n" +
            "{\"caption\": \"Quel framework pour quelle question : un mini arbre de décision\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Arbre de décision entre RICE MoSCoW Kano et WSJF</title><defs><marker id=\"po-fw\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\"/></marker></defs><rect x=\"200\" y=\"24\" width=\"240\" height=\"40\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"320\" y=\"49\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">quelle question te pose-t-on ?</text><path d=\"M240 64 L84 120\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><path d=\"M295 64 L242 120\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><path d=\"M345 64 L398 120\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><path d=\"M400 64 L556 120\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><text x=\"84\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">comparer des</text><text x=\"84\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">features ?</text><text x=\"242\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">cadrer une</text><text x=\"242\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">release ?</text><text x=\"398\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">comprendre la</text><text x=\"398\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">satisfaction ?</text><text x=\"556\" y=\"144\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">séquencer à</text><text x=\"556\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">l'échelle ?</text><path d=\"M84 168 L84 204\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><path d=\"M242 168 L242 204\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><path d=\"M398 168 L398 204\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><path d=\"M556 168 L556 204\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-fw)\"/><rect x=\"34\" y=\"208\" width=\"100\" height=\"38\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"84\" y=\"232\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">RICE</text><rect x=\"192\" y=\"208\" width=\"100\" height=\"38\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"242\" y=\"232\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">MoSCoW</text><rect x=\"348\" y=\"208\" width=\"100\" height=\"38\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"398\" y=\"232\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">Kano</text><rect x=\"506\" y=\"208\" width=\"100\" height=\"38\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"556\" y=\"232\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">WSJF</text><text x=\"320\" y=\"282\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">avant tout ça : la matrice valeur/effort dégrossit en 10 min</text></svg>\n" +
            "```\n\n" +
            "Dernier point, le plus important : un score RICE n'est pas une vérité, c'est un résumé d'hypothèses. Le Reach de 2000 vient d'où ? L'Impact de 2, qui l'a décidé ? L'intérêt du framework est la conversation qu'il force, pas le chiffre qu'il crache. Un PO qui brandit un score comme un argument d'autorité a raté l'exercice. Côté outillage, Jira Product Discovery et Productboard permettent de scorer et trier les idées sur des champs Reach/Impact/Confidence/Effort personnalisés ; un tableur partagé fait le même travail pour une équipe seule.\n\n" +
            "## À toi\n\n" +
            "Calcule le score RICE de cette option Covio : \"profil conducteur enrichi\" (Reach 1200 utilisateurs/trimestre, Impact 1, Confidence 80 %, Effort 2 personnes-mois). Où se place-t-elle face aux deux options du tableau ?\n\n" +
            "> Correction : (1200 × 1 × 0,8) / 2 = 480. Elle passe devant la garantie trajet (≈ 267) mais reste derrière les notifications (1000). Ordre final : notifications, profil enrichi, garantie. Note au passage que la Confidence à 80 % traduit un vrai doute : l'impact du profil sur la confiance des passagers n'est qu'une hypothèse d'entretien (un test rapide (afficher les profils existants plus visiblement) pourrait la consolider avant d'investir les 2 personnes-mois).",
        },
        {
          id: "l18",
          title: "Estimer : story points et planning poker",
          type: "text",
          duration: "19 min",
          body:
            "## Pourquoi pas des jours ?\n\n" +
            "Question légitime : pourquoi les équipes agiles estiment-elles en \"story points\" abstraits plutôt qu'en jours ? Deux raisons éprouvées. D'abord, les humains sont mauvais en estimation absolue (\"combien de jours ?\") mais corrects en comparaison relative (\"est-ce plus gros que ça ?\"). Ensuite, une estimation en jours devient immédiatement un engagement contractuel : dis \"3 jours\" un mardi, et le jeudi suivant quelqu'un te demandera pourquoi ce n'est pas fini. Les points estiment la *taille* (complexité, volume, incertitude), pas la durée.\n\n" +
            "L'échelle courante est la suite de Fibonacci tronquée : 1, 2, 3, 5, 8, 13, 20. Les écarts croissants sont voulus : plus c'est gros, moins on est précis, et l'échelle l'assume. Débattre pour savoir si une story fait 12 ou 13 points serait de la fausse précision. Règle d'hygiène : une story estimée à 13 ou plus est un signal de découpage (retour à la leçon sur le splitting).\n\n" +
            "## Le planning poker, sans folklore\n\n" +
            "Le planning poker est le rituel d'estimation le plus répandu, et il est mal compris. Le déroulé :\n\n" +
            "1. Le PO présente la story et répond aux questions. Il ne donne PAS son estimation : il n'estime jamais, ce n'est pas son travail.\n" +
            "2. Chaque développeur choisit une carte en secret.\n" +
            "3. Tout le monde révèle en même temps. Le vote simultané est le cœur du rituel : il neutralise l'ancrage (si le lead dev dit \"2\" en premier, plus personne n'ose dire \"8\").\n" +
            "4. Si les votes divergent, les extrêmes s'expliquent. C'est là que la valeur se crée : le 8 a souvent vu un piège que le 2 n'a pas vu, ou le 2 connaît un raccourci que le 8 ignore.\n" +
            "5. On revote. Deux tours suffisent presque toujours.\n\n" +
            "Le poker n'est pas un jeu de précision, c'est un détecteur de malentendus. Une story où tout le monde vote 3 du premier coup est comprise ; une story qui tire des 2 et des 13 cache un désaccord qu'il vaut mieux crever maintenant qu'en plein sprint. Dans Jira, les points se saisissent dans le champ Story points de chaque ticket et alimentent les rapports de sprint ; Linear, fidèle à sa philosophie minimaliste, rend les estimations optionnelles avec une échelle simplifiée : preuve que même l'outillage moderne considère l'estimation comme un moyen, pas une fin.\n\n" +
            "## La vélocité : un outil de prévision, rien d'autre\n\n" +
            "La vélocité est la somme des points livrés par sprint. Elle sert à une seule chose : prévoir. Si l'équipe tourne autour de 30 points, s'engager sur 45 est une fiction. Deux interdits absolus :\n\n" +
            "- **Comparer les vélocités entre équipes.** Les points sont une unité relative, propre à chaque équipe : 30 points chez l'une ne mesure pas la même chose que 30 chez l'autre.\n" +
            "- **Faire de la vélocité un objectif.** Dès que \"augmenter la vélocité\" devient un but, les estimations gonflent (une story de 3 devient un 5, et hop, +40 % de vélocité sans rien livrer de plus). C'est la loi de Goodhart appliquée au sprint.\n\n" +
            "## À toi : calcul de capacité\n\n" +
            "Les trois derniers sprints Covio ont livré 28, 34 et 31 points. Le sprint qui démarre : deux développeurs sur cinq sont en congé la première des deux semaines. Sur combien de points l'équipe peut-elle raisonnablement s'engager ?\n\n" +
            "> Correction : moyenne glissante ≈ 31 points pour une équipe complète. Deux devs absents une semaine sur deux, c'est environ 20 % de capacité en moins sur le sprint (2/5 × 1/2). 31 × 0,8 ≈ 25 points. On propose 24-25 au planning, et c'est l'équipe qui confirme : la vélocité éclaire la décision, elle ne la prend pas. Si tu as répondu 31 \"parce que c'est la moyenne\", tu viens de fabriquer le sprint raté du mois prochain.\n\n" +
            "## Lire un burndown sans se raconter d'histoires\n\n" +
            "Le burndown chart trace les points restants jour par jour, contre une diagonale idéale qui descend régulièrement vers zéro. Personne ne suit la diagonale, et ce n'est pas le but : le burndown vaut par ses *écarts*, qui racontent le sprint.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Lire un burndown : le plateau et la remontée racontent le sprint mieux qu'un rapport\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\"><title>Burndown avec plateau puis ajout de scope</title><defs><marker id=\"po-bd\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\"/></marker></defs><path d=\"M70 270 L70 34\" stroke=\"currentColor\" opacity=\"0.7\" fill=\"none\" marker-end=\"url(#po-bd)\"/><path d=\"M70 270 L610 270\" stroke=\"currentColor\" opacity=\"0.7\" fill=\"none\" marker-end=\"url(#po-bd)\"/><text x=\"36\" y=\"52\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">pts</text><text x=\"52\" y=\"74\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"end\" opacity=\"0.7\">30</text><text x=\"52\" y=\"172\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"end\" opacity=\"0.7\">15</text><text x=\"52\" y=\"274\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"end\" opacity=\"0.7\">0</text><text x=\"560\" y=\"292\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">jours</text><text x=\"90\" y=\"292\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">j1</text><text x=\"540\" y=\"292\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">j10</text><line x1=\"90\" y1=\"70\" x2=\"550\" y2=\"270\" stroke=\"currentColor\" stroke-dasharray=\"6 5\" opacity=\"0.5\"/><text x=\"470\" y=\"216\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">idéal</text><path d=\"M90 70 L141 90 L192 90 L243 90 L294 118 L345 96 L396 140 L447 180 L498 224 L550 252\" stroke=\"currentColor\" fill=\"none\" class=\"fig-accent\" stroke-width=\"2\"/><rect x=\"146\" y=\"48\" width=\"148\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"220\" y=\"63\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.8\">plateau j2-j4</text><path d=\"M220 70 L218 86\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.5\" marker-end=\"url(#po-bd)\"/><rect x=\"336\" y=\"128\" width=\"148\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"410\" y=\"143\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.8\">remontée : +5 pts</text><path d=\"M368 128 L348 102\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.5\" marker-end=\"url(#po-bd)\"/><text x=\"320\" y=\"312\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">courbe plate = stories trop grosses ou blocage · courbe qui remonte = scope ajouté</text></svg>\n" +
            "```\n\n" +
            "Trois motifs à connaître. Un **plateau** de plusieurs jours : rien ne se termine, soit les stories sont trop grosses (elles ne \"tombent\" qu'à la toute fin), soit un blocage silencieux traîne. Une **remontée** en cours de sprint : du scope a été ajouté après l'engagement ; si c'est toi, PO, qui as glissé cette story \"urgente\", la courbe t'accuse publiquement, et c'est très bien. Une courbe qui plonge d'un coup le dernier jour : tout se termine en même temps, symptôme classique de stories mal découpées. Le burndown ne juge personne ; il rend le sprint lisible, et un PO qui sait le lire pose les bonnes questions au bon moment.\n\n" +
            "> À retenir : les points mesurent la taille, la vélocité prévoit, le burndown raconte. Aucun des trois n'est un instrument de contrôle des personnes, dès qu'ils le deviennent, leurs chiffres se mettent à mentir.",
        },
        {
          id: "l19",
          title: "Quiz : Priorisation et estimation",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Option A : Reach 500, Impact 2, Confidence 0,8, Effort 3. Option B : Reach 2000, Impact 0,5, Confidence 1, Effort 1. Que dit RICE ?",
              options: [
                "A gagne car son impact est 4 fois plus fort",
                "B gagne largement : score 1000 contre environ 267 pour A",
                "Égalité, il faut trancher au feeling",
                "RICE ne s'applique pas à ce cas",
              ],
              correctIndex: 1,
              explanation:
                "A = (500 × 2 × 0,8) / 3 ≈ 267. B = (2000 × 0,5 × 1) / 1 = 1000. La feature modeste qui touche beaucoup de monde pour peu d'effort bat la grosse feature vedette. C'est précisément le biais (préférer le projet excitant) que RICE est conçu pour casser.",
            },
            {
              id: "q18",
              prompt:
                "Dans le modèle Kano, \"le trajet réservé a bien lieu\" est pour Covio :",
              options: [
                "Un delighter : ça enchante les utilisateurs",
                "Un attribut de performance : plus il y en a, mieux c'est",
                "Un basique (must-be) : personne ne s'en réjouit, mais son absence rend furieux",
                "Un attribut indifférent",
              ],
              correctIndex: 2,
              explanation:
                "C'est l'attente minimale du service : la remplir ne génère aucune satisfaction particulière, mais y manquer détruit la confiance. Conséquence pratique : on sécurise les basiques avant d'investir dans des delighters, aussi séduisants soient-ils.",
            },
            {
              id: "q19",
              prompt:
                "La direction veut comparer la vélocité de deux équipes (30 pts vs 45 pts) pour évaluer leur performance. Pourquoi est-ce un non-sens ?",
              options: [
                "Parce que 45 points, c'est impossible en deux semaines",
                "Parce que les story points sont une unité relative propre à chaque équipe : 30 points ici et 45 là-bas ne mesurent pas la même chose",
                "Parce qu'il faudrait comparer sur un seul sprint, pas en moyenne",
                "Parce que la vélocité ne se mesure qu'en jours-homme",
              ],
              correctIndex: 1,
              explanation:
                "Chaque équipe calibre ses points sur ses propres références. Comparer les vélocités pousse en plus les équipes à gonfler leurs estimations (loi de Goodhart) : la métrique devient un objectif et cesse de mesurer quoi que ce soit. La vélocité sert à prévoir, jamais à noter.",
            },
            {
              id: "q20",
              prompt:
                "Au planning poker, une story reçoit des votes 3, 3, 5 et 13. Quelle est la meilleure réaction ?",
              options: [
                "Prendre la moyenne (6) et passer à la suite",
                "Écarter le 13, qui est visiblement une erreur",
                "Faire expliquer les votes extrêmes : le 13 a peut-être vu un piège que les autres n'ont pas vu, puis revoter",
                "Laisser le PO trancher l'estimation",
              ],
              correctIndex: 2,
              explanation:
                "La divergence est la vraie valeur du poker : elle révèle un malentendu ou un risque caché. Le 13 connaît peut-être une dette dans ce module ; le 3 connaît peut-être un raccourci. On écoute les extrêmes, on apprend, on revote. Moyenner ou écarter jette exactement l'information qu'on cherchait. Et le PO n'estime jamais.",
            },
            {
              id: "q30",
              prompt:
                "Au jour 6 du sprint, le burndown de Covio remonte de 5 points. Que s'est-il probablement passé ?",
              options: [
                "L'équipe a ralenti et livre moins vite",
                "Du scope a été ajouté au sprint après l'engagement (ou une story a été réestimée à la hausse)",
                "Le graphique est bugué, un burndown ne remonte jamais",
                "Deux développeurs sont partis en congé",
              ],
              correctIndex: 1,
              explanation:
                "Le burndown trace les points RESTANTS : il ne peut remonter que si on ajoute du travail (story glissée en cours de sprint, réestimation à la hausse). Un ralentissement donnerait un plateau, pas une remontée. C'est souvent le PO lui-même qui est à l'origine de la remontée : le graphique rend cet ajout visible et discutable.",
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
          duration: "19 min",
          body:
            "## Le sprint, colonne vertébrale du delivery\n\n" +
            "Scrum organise le travail en sprints : des itérations de durée fixe, deux semaines dans la plupart des équipes (c'est le rythme de Covio), au plus un mois selon le Scrum Guide. Chaque sprint produit un incrément potentiellement livrable. Autour du sprint gravitent quatre événements, et le PO a un rôle précis dans chacun, ni figurant, ni chef d'orchestre.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le cycle Scrum et la place du PO : il alimente le planning, valide en review, et reste disponible pendant tout le sprint\"}\n" +
            "<svg viewBox=\"0 0 640 330\" role=\"img\"><title>Cycle Scrum avec backlog planning sprint review et retrospective</title><defs><marker id=\"po-sc\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\"/></marker></defs><rect x=\"20\" y=\"130\" width=\"120\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"80\" y=\"152\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">backlog</text><text x=\"80\" y=\"170\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">produit</text><path d=\"M143 156 L166 156\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-sc)\"/><rect x=\"170\" y=\"130\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"228\" y=\"152\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">sprint</text><text x=\"228\" y=\"170\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">planning</text><path d=\"M289 156 L312 156\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-sc)\"/><rect x=\"316\" y=\"110\" width=\"140\" height=\"92\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"386\" y=\"140\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" text-anchor=\"middle\">sprint</text><text x=\"386\" y=\"158\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">2 semaines</text><path d=\"M362 178 C348 196 376 210 396 198 C412 188 404 172 386 176\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-sc)\"/><text x=\"386\" y=\"232\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">daily · 15 min · 24h</text><path d=\"M459 156 L482 156\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.6\" marker-end=\"url(#po-sc)\"/><rect x=\"486\" y=\"130\" width=\"134\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"553\" y=\"152\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">incrément +</text><text x=\"553\" y=\"170\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">review</text><path d=\"M553 186 C553 268 260 276 120 268 C96 266 82 240 80 188\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.55\" marker-end=\"url(#po-sc)\"/><text x=\"330\" y=\"290\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.7\">rétro + feedback → le backlog se réordonne</text><text x=\"80\" y=\"96\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">le PO ordonne</text><path d=\"M80 104 L80 126\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.5\" marker-end=\"url(#po-sc)\"/><text x=\"553\" y=\"96\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\" opacity=\"0.75\">le PO valide</text><path d=\"M553 104 L553 126\" stroke=\"currentColor\" fill=\"none\" opacity=\"0.5\" marker-end=\"url(#po-sc)\"/></svg>\n" +
            "```\n\n" +
            "## Sprint planning : arriver préparé, proposer un but\n\n" +
            "Le planning ouvre le sprint (timebox : 8 heures max pour un sprint d'un mois selon le Scrum Guide 2020, en pratique 2 à 4 heures pour deux semaines). Le PO y arrive avec un backlog ordonné et affiné (c'est tout l'intérêt du refinement des semaines précédentes), et propose un Sprint Goal : \"à la fin du sprint, un passager peut réserver et payer un trajet de bout en bout\". Un but par sprint, formulé en valeur, pas une liste de tickets. Ensuite, et c'est le point que les POs débutants ratent : c'est l'ÉQUIPE qui décide du volume qu'elle embarque. Le PO propose l'ordre, l'équipe s'engage sur la quantité. Un PO qui force 40 points dans une équipe à 30 fabrique un échec et détruit la confiance dans l'engagement.\n\n" +
            "## Daily scrum : écouter, débloquer, se taire\n\n" +
            "Le daily (15 minutes, chaque jour) appartient aux développeurs : ils y synchronisent leur journée. Le PO est bienvenu mais il n'y fait pas de reporting : le jour où le daily devient \"chacun justifie son avancement au PO\", il est mort. Ton rôle : écouter, capter les blocages qui te concernent (\"j'attends la réponse sur les frais d'annulation\") et y répondre dans l'heure, pas dans trois jours. Une question produit qui traîne 72 heures, c'est un développeur qui suppose à ta place ou qui change de tâche : le sprint patine en silence.\n\n" +
            "## Sprint review : ton moment de vérité\n\n" +
            "La review (4 heures max pour un sprint d'un mois) est le moment fort du PO. L'équipe démontre l'incrément sur du vrai logiciel, pas des slides. Le PO accepte ou refuse chaque story à l'aune des critères d'acceptation écrits : pas de son humeur du jour ; si les critères étaient flous, la leçon est pour toi. Et surtout, la review est une boucle de feedback : les parties prenantes réagissent, et un \"ce n'est pas ça qu'on voulait\" en review coûte cent fois moins cher que le même constat en production trois mois plus tard. Douloureux sur le moment, précieux toujours. Invite de vrais utilisateurs quand tu peux : deux conducteurs Covio en review valent dix avis internes.\n\n" +
            "## Rétrospective : encaisser sa part\n\n" +
            "La rétro (3 heures max pour un sprint d'un mois) est le moment où l'équipe améliore sa façon de travailler. Le PO y participe en pair, pas en juge. Et il encaisse sa part : \"les stories arrivent floues au planning\", \"tu changes les priorités en plein sprint\", \"on attend tes réponses trop longtemps\" sont des retours qui te visent, et ce sont les plus utiles de ta quinzaine. Un PO qui se vexe en rétro s'assure de ne plus jamais entendre la vérité.\n\n" +
            "## Entre les cérémonies : la disponibilité, ta vraie contribution\n\n" +
            "Le travail du PO ne se joue pas dans les réunions. Il se joue dans les interstices : répondre vite aux questions, affiner le prochain sprint, mener la découverte, tenir les parties prenantes informées. Si tu ne devais retenir qu'une métrique personnelle : ton temps de réponse aux questions de l'équipe. Sous une heure, le sprint respire. Au-delà d'une journée, tu es le goulot d'étranglement de ta propre équipe.\n\n" +
            "> À retenir : le PO propose le quoi et le pourquoi (backlog ordonné, Sprint Goal), l'équipe décide du combien et du comment. La review est ton moment d'arbitrage, la rétro ton moment d'humilité, et ta disponibilité entre les deux vaut plus que ta présence dans toutes les réunions.",
        },
        {
          id: "l21",
          title: "Kanban et gestion du flux",
          type: "text",
          duration: "17 min",
          body:
            "## Un autre rapport au temps\n\n" +
            "Scrum découpe le temps en sprints ; Kanban ne découpe rien. Le travail s'écoule en continu à travers un tableau dont les colonnes matérialisent les étapes : À faire → En cours → En revue → En test → Terminé. Pas de sprint, pas d'engagement de lot, pas de planning bimensuel. On tire (pull) une nouvelle carte quand on a fini la précédente. Ça a l'air plus simple que Scrum. C'est plus exigeant.\n\n" +
            "## Les limites de WIP : LE principe qui change tout\n\n" +
            "Le cœur de Kanban tient en une règle : limiter le travail en cours (Work In Progress). Chaque colonne a un plafond : par exemple 3 cartes maximum \"En cours\" pour une équipe de 5. Colonne pleine ? On n'y entre pas ; on aide à finir ce qui s'y trouve. Le slogan de la méthode : arrêter de commencer, commencer à finir.\n\n" +
            "Pourquoi c'est vital : sans limite, tout le monde démarre des sujets en parallèle et rien ne sort. Le tableau de Covio un lundi de crise : 10 cartes \"En cours\", 0 \"Terminé\" depuis huit jours. Chaque carte entamée puis abandonnée pour une urgence, du travail à moitié fait partout, de la valeur livrée nulle part. La limite de WIP rend cette pathologie impossible : elle force à finir avant d'ouvrir. Dans Jira, les limites se configurent directement sur les colonnes du board (le nombre s'affiche en rouge quand il est dépassé) ; le plus dur n'est pas le réglage, c'est de résister à la tentation de monter la limite au premier embouteillage : l'embouteillage est l'information.\n\n" +
            "## Mesurer le flux, prévoir sans estimer\n\n" +
            "Kanban remplace la vélocité par des métriques de flux :\n\n" +
            "- **Lead time** : de la demande à la livraison (le temps vécu par le demandeur).\n" +
            "- **Cycle time** : de la prise en main à la livraison (le temps que l'équipe contrôle).\n" +
            "- **Débit (throughput)** : nombre d'éléments terminés par semaine.\n\n" +
            "Exemple chiffré : sur les 40 dernières cartes de l'équipe support Covio, le cycle time médian est de 3 jours, et 85 % des cartes sortent en moins de 6 jours. On peut alors s'engager sans estimer une seule carte : \"votre demande a 85 % de chances d'être livrée sous 6 jours\". C'est une prévision probabiliste fondée sur l'historique réel, souvent plus fiable que des story points, et beaucoup moins chère à produire.\n\n" +
            "## Scrum ou Kanban : choisir selon la nature du travail\n\n" +
            "Scrum brille quand on construit un produit par lots cohérents, avec un rythme qui structure (planning, review, rétro) et une équipe qui apprend. Kanban brille quand le travail arrive en continu et que les priorités changent plus vite qu'un sprint : support, maintenance, incidents. Chez Covio, l'équipe produit tourne en Scrum ; le flux \"incidents de paiement\", lui, ne peut pas attendre le prochain planning : un litige de remboursement se traite dans la journée. C'est un travail de flux, pas de lot : Kanban. Beaucoup d'équipes mixent les deux (Scrumban) : cadence de sprint pour le produit, flux limité pour l'imprévu.\n\n" +
            "Et le PO là-dedans ? En Kanban, pas de sprint planning pour ritualiser la priorisation : elle devient un geste quotidien. Tu alimentes la file d'entrée, tu l'ordonnes en continu, tu tranches entre deux urgences le mardi à 14h. La rigueur que Scrum impose par ses cérémonies, Kanban exige que tu l'aies en toi.\n\n" +
            "> À retenir : 1) la limite de WIP est le principe actif de Kanban, tout le reste est de la décoration ; 2) cycle time et débit permettent des prévisions probabilistes sans estimer ; 3) Scrum pour construire par lots, Kanban pour absorber un flux, et souvent les deux cohabitent.",
        },
        {
          id: "l22",
          title: "Les métriques produit qui comptent",
          type: "text",
          duration: "18 min",
          body:
            "## Livrer n'est pas réussir\n\n" +
            "Une équipe peut livrer à l'heure, à chaque sprint, pendant un an, et construire un produit qui ne sert à rien. La vélocité mesure la production, pas la valeur. Pour savoir si le produit réussit, il faut des métriques d'usage et de business. Encore faut-il choisir les bonnes : un dashboard de trente chiffres qui montent et descendent ne dit rien. Quelques métriques reliées entre elles disent tout.\n\n" +
            "## Le cadre AARRR : le parcours en cinq étapes\n\n" +
            "Le cadre AARRR (proposé par Dave McClure, investisseur, sous le nom de \"pirate metrics\") suit l'utilisateur en cinq étapes. Pour Covio :\n\n" +
            "| Étape | Question | Métrique Covio |\n" +
            "| --- | --- | --- |\n" +
            "| Acquisition | Les gens arrivent-ils ? | inscriptions / semaine |\n" +
            "| Activation | Vivent-ils le moment de valeur ? | 1er trajet réalisé sous 7 jours |\n" +
            "| Rétention | Reviennent-ils ? | utilisateurs actifs chaque semaine |\n" +
            "| Revenu | Paient-ils ? | commissions, abonnements employeurs |\n" +
            "| Referral | Recommandent-ils ? | invitations envoyées / utilisateur |\n\n" +
            "L'étape la plus sous-estimée est l'**activation**. Une inscription n'est pas un utilisateur : c'est un formulaire rempli. L'activation, c'est le moment où la personne vit la valeur promise (pour Covio, réaliser son premier trajet, pas créer son compte). Les 3400 inscrits pour 12 % d'actifs de nos premières leçons, c'est exactement ça : une acquisition correcte, une activation catastrophique. Investir en marketing dans cette situation, c'est remplir un seau percé.\n\n" +
            "## La rétention se lit en cohortes\n\n" +
            "La moyenne ment. \"60 % d'utilisateurs actifs\" mélange les inscrits d'hier (tous actifs) et ceux de l'an dernier (presque tous partis). La bonne lecture est la cohorte : on suit chaque groupe d'inscrits d'une même semaine, séparément, au fil du temps.\n\n" +
            "| Cohorte | S+1 | S+2 | S+4 | S+8 |\n" +
            "| --- | --- | --- | --- | --- |\n" +
            "| Inscrits sem. 10 | 48 % | 31 % | 22 % | 21 % |\n" +
            "| Inscrits sem. 14 | 52 % | 35 % | 27 % | 26 % |\n" +
            "| Inscrits sem. 18 | 55 % | 39 % | 31 % | n/a |\n\n" +
            "Deux bonnes nouvelles se cachent dans ce tableau. D'abord, chaque courbe s'aplatit (22 → 21 %) : un noyau d'utilisateurs reste durablement, c'est le signal qu'on cherche (une courbe qui file vers zéro dirait que le produit n'a pas trouvé son public, quel que soit le volume d'acquisition). Ensuite, les cohortes récentes retiennent mieux que les anciennes : le produit s'améliore. Aucune moyenne globale n'aurait montré ça. Pour un marketplace comme Covio, la rétention est doublement vitale : sous un seuil d'activité, il n'y a plus assez de conducteurs pour les passagers, et la masse critique s'effondre des deux côtés.\n\n" +
            "## Le NPS, à sa juste place\n\n" +
            "Le Net Promoter Score pose une question (\"recommanderiez-vous Covio ? 0-10\") et se calcule ainsi : % de promoteurs (9-10) moins % de détracteurs (0-6). Un NPS de +30 est bon, +50 excellent. Mon avis : le chiffre vaut moins que la question ouverte qui suit (\"pourquoi cette note ?\") ; c'est là que tu récoltes des verbatims pour ta découverte. Le NPS reste déclaratif : les gens disent qu'ils recommanderaient. Le referral mesuré (les invitations réellement envoyées) est un fait. Ne pilote jamais un produit au NPS seul.\n\n" +
            "## Relier les métriques à la north star\n\n" +
            "Souviens-toi de la leçon sur la North Star Metric : les trajets réalisés par semaine. AARRR n'est pas un cadre concurrent, c'est sa décomposition : les trajets réalisés = activation (des nouveaux qui font leur premier trajet) × rétention (des habitués qui continuent) × referral (des collègues qui rejoignent). Quand la north star stagne, le cadre te dit où regarder. Un dernier tri utile : distingue les métriques de vanité (cumulatives, elles ne descendent jamais ; \"12 000 inscrits depuis le lancement\") des métriques actionnables (des taux et des cohortes, qui peuvent baisser et donc t'alerter). Si un chiffre ne peut que monter, il ne t'apprend rien.\n\n" +
            "> À retenir : 1) l'activation avant l'acquisition, on ne remplit pas un seau percé ; 2) la rétention se lit en cohortes, jamais en moyenne, et son aplatissement est le vrai signal de product-market fit ; 3) quelques métriques reliées à la north star valent mieux que trente chiffres de vanité.",
        },
        {
          id: "l23",
          title: "Les pièges classiques du PO débutant",
          type: "text",
          duration: "17 min",
          body:
            "## Huit façons de rater, toutes vécues\n\n" +
            "Ces pièges ne sont pas théoriques : chaque PO en traverse plusieurs, et les repérer tôt évite des mois de dégâts. Pour chacun, la scène telle qu'elle se joue, puis le remède.\n\n" +
            "### 1. Le PO guichet\n\n" +
            "La scène : chaque demande de chaque partie prenante entre au backlog. Six mois plus tard, 412 tickets, plus personne ne comprend la stratégie, et l'équipe livre des features sans lien entre elles. Le PO est devenu un serveur qui prend les commandes. Le remède : chaque demande passe le filtre de la vision et des OKR. \"Non\" est une phrase complète, mais un non motivé et tracé (\"hors OKR du trimestre, revoyons ça en janvier\") : c'est ce qui distingue l'arbitrage du caprice.\n\n" +
            "### 2. Écrire des solutions au lieu de problèmes\n\n" +
            "La scène : la story dit \"ajouter un bouton bleu 'proposer un retour' en haut à droite de l'écran trajet\". L'équipe exécute sans réfléchir : le PO a déjà tout décidé, y compris la couleur. Le remède : décrire le problème (\"les conducteurs proposent l'aller mais oublient le retour, on perd un trajet sur deux\") et laisser l'équipe et la designer explorer les solutions. Tu recrutes des cerveaux, pas des mains.\n\n" +
            "### 3. Sauter la découverte\n\n" +
            "La scène : le calendrier presse, on fonce, on livrera bien quelque chose. Trois mois plus tard, la feature est en production et personne ne s'en sert. C'est le piège le plus coûteux de la liste, parce que son coût est invisible jusqu'à la fin. Le remède : même une découverte modeste (cinq entretiens, un prototype maquette testé une semaine) élimine les pires erreurs pour un coût dérisoire comparé à un trimestre de développement.\n\n" +
            "### 4. Confondre occupation et progression\n\n" +
            "La scène : l'équipe bat son record de vélocité, le burndown est superbe, tout le monde est fier. Mais les trajets réalisés stagnent depuis trois mois. On produit beaucoup de choses inutiles, vite. Le remède : regarder les métriques d'usage (leçon précédente) au moins aussi souvent que les métriques de delivery. La question n'est pas \"a-t-on livré ?\" mais \"est-ce que ça a changé quelque chose ?\".\n\n" +
            "### 5. Être indisponible\n\n" +
            "La scène : le PO enchaîne les réunions de parties prenantes, répond aux questions de l'équipe avec trois jours de retard. Les devs, bloqués, décident à sa place, et pas toujours dans le bon sens, ou attendent. Le remède déjà évoqué : ton temps de réponse est une métrique personnelle. Bloque des créneaux sans réunion, physiquement proches de l'équipe, et tiens-les.\n\n" +
            "### 6. Négliger la dette technique\n\n" +
            "La scène : chaque sprint est rempli à 100 % de features, les demandes de refactoring sont repoussées \"au prochain sprint\" depuis un an. La vélocité s'érode lentement : 34, 31, 28, 24… Chaque feature coûte plus cher que la précédente parce que le code se dégrade. Le remède : la dette se négocie, elle ne se refuse pas par principe. Beaucoup d'équipes réservent une part stable de la capacité (15-20 %) à la santé technique. C'est un investissement, pas une taxe, et c'est toi qui en récoltes les intérêts sous forme de vélocité préservée.\n\n" +
            "### 7. Tout mettre en Must\n\n" +
            "La scène : au cadrage de la release, 80 % des éléments finissent en Must have, sous la pression des parties prenantes. Si tout est prioritaire, rien ne l'est ; l'équipe déborde, coupe au hasard sous la contrainte du calendrier, et c'est elle qui priorise à ta place : au pire moment, sans les informations. Le remède : prioriser, c'est renoncer. Un classement où les Must dépassent 60 % de la capacité n'est pas un classement, c'est une liste de vœux.\n\n" +
            "### 8. Se prendre pour le chef\n\n" +
            "La scène : le PO donne des ordres, distribue les tâches, exige des estimations plus basses. L'équipe se ferme, exécute sans s'engager, garde ses idées pour elle. Le remède : le PO n'a aucune autorité hiérarchique sur les développeurs, et c'est une force. Ton influence vient de la clarté de ta vision et de la qualité de tes arguments. Le jour où l'équipe te suit parce qu'elle est convaincue, tu obtiens son intelligence en plus de ses bras.\n\n" +
            "## Le fil commun\n\n" +
            "Regarde bien : les huit pièges reviennent au même mélange (confondre l'activité avec la valeur, et l'autorité avec l'influence). Le PO guichet est actif, l'équipe record de vélocité est active, le PO qui ordonne se sent puissant. Aucun ne crée forcément de la valeur. La question qui protège de tout : \"quelle est la prochaine chose la plus utile, et pourquoi celle-là ?\" Si tu peux y répondre à voix haute, avec des faits, devant l'équipe et les parties prenantes, tu fais le métier.",
        },
        {
          id: "l24",
          title: "Quiz : Agilité, métriques et pièges",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q21",
              prompt: "Quel est le juste rôle du PO au daily scrum ?",
              options: [
                "Animer la réunion et recueillir le reporting de chaque développeur",
                "Assister en écoutant, capter les blocages qui le concernent et y répondre vite, sans transformer le daily en compte-rendu vers lui",
                "Ne jamais y assister : le daily est interdit au PO",
                "En profiter pour ajouter les urgences du jour au sprint",
              ],
              correctIndex: 1,
              explanation:
                "Le daily appartient aux développeurs, qui y synchronisent leur travail. Le PO est bienvenu comme auditeur utile : il note les questions produit et débloque rapidement. Dès que le daily devient un reporting vers le PO (ou un moment pour glisser du scope), il perd sa fonction.",
            },
            {
              id: "q22",
              prompt:
                "Le tableau Kanban de l'équipe montre 10 cartes \"En cours\" et 0 carte terminée depuis huit jours. Quel principe est enfreint ?",
              options: [
                "Le sprint est trop court",
                "La limite de WIP : trop de travail commencé en parallèle, rien ne se finit (il faut arrêter de commencer et commencer à finir)",
                "Le manque d'estimations en story points",
                "L'absence de daily scrum",
              ],
              correctIndex: 1,
              explanation:
                "C'est la pathologie exacte que les limites de WIP empêchent : du travail entamé partout, de la valeur livrée nulle part. Avec une limite (ex. 3 cartes \"En cours\"), la colonne pleine force l'équipe à terminer avant d'ouvrir un nouveau sujet. Les points et le daily n'ont rien à voir avec ce problème de flux.",
            },
            {
              id: "q23",
              prompt:
                "Covio a 3400 inscrits mais seulement 12 % réalisent un premier trajet. La direction propose de doubler le budget marketing. Pourquoi est-ce prématuré ?",
              options: [
                "Parce que le marketing ne fait jamais venir les bons utilisateurs",
                "Parce que le problème est l'activation, pas l'acquisition : investir en acquisition avec une activation cassée, c'est remplir un seau percé",
                "Parce qu'il faut d'abord augmenter le NPS",
                "Parce que 3400 inscrits suffisent pour toujours",
              ],
              correctIndex: 1,
              explanation:
                "L'inscription n'est qu'un formulaire rempli ; la valeur se vit au premier trajet réalisé (l'activation). Tant que 88 % des inscrits ne vivent jamais ce moment, chaque euro d'acquisition fuit par le trou du seau. On répare l'activation d'abord, on scale l'acquisition ensuite.",
            },
            {
              id: "q24",
              prompt:
                "Depuis un an, le PO refuse toute demande de refactoring pour maximiser les features. La vélocité passe de 34 à 24 points. Que se passe-t-il ?",
              options: [
                "L'équipe est devenue paresseuse, il faut la challenger",
                "La dette technique s'accumule et renchérit chaque nouvelle feature : la santé du code se négocie en continu, elle ne se refuse pas par principe",
                "Les story points ont été mal calibrés dès le départ",
                "C'est un phénomène normal et sans cause",
              ],
              correctIndex: 1,
              explanation:
                "Un code qui se dégrade rend chaque changement plus lent et plus risqué : l'érosion régulière de la vélocité en est le symptôme classique. Réserver une part stable de la capacité (souvent 15-20 %) à la santé technique protège la vitesse future : c'est un investissement dont le PO est le premier bénéficiaire.",
            },
            {
              id: "q25",
              prompt:
                "PO guichet, records de vélocité sans effet sur l'usage, ordres donnés à l'équipe : quel est le dénominateur commun de ces pièges ?",
              options: [
                "Un manque d'outils de gestion de backlog",
                "La confusion entre activité et valeur (et entre autorité et influence) : être occupé ou obéi ne signifie pas créer de la valeur",
                "Des sprints trop longs",
                "Un déficit de documentation",
              ],
              correctIndex: 1,
              explanation:
                "Le PO guichet est très actif, l'équipe qui bat des records produit beaucoup, le PO directif se sent efficace, et aucun ne garantit le moindre progrès sur les métriques d'usage. Le garde-fou : savoir répondre, faits à l'appui, à \"quelle est la prochaine chose la plus utile, et pourquoi celle-là ?\".",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
