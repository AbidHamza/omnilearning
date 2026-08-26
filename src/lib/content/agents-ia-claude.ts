import type { Course } from "../types";

const course: Course = {
  slug: "agents-ia-claude",
  title: "Agents IA avec Claude : comprendre, piloter, automatiser",
  tagline:
    "Du premier prompt sur claude.ai jusqu'à ton premier agent branché sur de vrais outils : un parcours concret, sans poudre aux yeux, avec les prix réels et les pièges vécus.",
  description:
    "Tout le monde « fait de l'IA » ; presque personne ne sait expliquer ce qu'est un token, pourquoi son agent a réécrit la moitié d'un fichier sans prévenir, ni combien coûte vraiment un workflow automatisé. Ce cours reprend la chaîne complète avec Claude : comment un LLM fonctionne (tokens, fenêtre de contexte, gammes de modèles 2026), comment piloter claude.ai comme un pro (Projets, artefacts, prompts système), comment coder avec Claude Code sans accumuler de dette, puis comment construire de vrais agents : boucle agentique, appels d'outils, MCP, et un fil rouge complet de veille automatisée avec ses garde-fous et son budget. Tu repars capable de décider, cas par cas, entre un simple prompt, un workflow scripté ou un agent autonome.",
  category: "Intelligence Artificielle",
  level: "Intermédiaire",
  instructor: "Julien Vasseur",
  instructorBio:
    "Ancien développeur backend (10 ans en agence puis chez un éditeur SaaS lyonnais), Julien accompagne depuis 2023 des PME qui intègrent des LLM dans leurs opérations : support client, veille, génération de contenu. Il a déployé une trentaine d'agents en production, dont certains qu'il a lui-même dû débrancher, et il raconte pourquoi dans ce cours.",
  hours: 5,
  rating: 4.7,
  learners: 3260,
  accent: "#d97757",
  image: "/covers/agents-ia-claude.svg",
  language: "Français",
  software:
    "Un navigateur (claude.ai), un terminal, Node.js 18+ pour Claude Code. Un compte API Anthropic (quelques dollars de crédit) pour les parties 5 et 6, optionnel avant.",
  prerequisites: [
    "Être à l'aise avec un ordinateur et un navigateur",
    "Avoir déjà utilisé un chatbot IA (ChatGPT, Claude, Gemini…), même maladroitement",
    "Des bases de programmation (lire un script simple) aident pour les parties 3 à 6, sans être bloquantes avant",
  ],
  summary: [
    "Partie 1 : Comprendre les LLM et la gamme Claude (tokens, fenêtre de contexte, choisir le bon modèle au bon prix)",
    "Partie 2 : Piloter Claude au quotidien (claude.ai, Projets, artefacts, prompts système et réécriture avant/après)",
    "Partie 3 : Claude Code et le vibe coding (installation, CLAUDE.md, itérer sur un vrai projet, relire le code généré)",
    "Partie 4 : Agents et outils (la boucle agentique, le tool use, MCP expliqué simplement, agent ou simple prompt ?)",
    "Partie 5 : Automatiser un vrai workflow (fil rouge veille + rédaction + publication, garde-fous, coûts réels)",
    "Partie 6 : Aller plus loin (premiers appels API, sorties JSON, RAG simplifié, évaluer la qualité, éthique et limites)",
  ],
  objectives: [
    "Expliquer ce qu'est un token, une fenêtre de contexte et pourquoi ça change ta façon de rédiger tes prompts",
    "Choisir entre Haiku, Sonnet et Opus selon la tâche, avec les ordres de grandeur de prix en tête",
    "Structurer un Projet claude.ai avec des instructions système qui tiennent la route",
    "Utiliser Claude Code sur un vrai dépôt sans laisser passer de code halluciné ni de secrets",
    "Décrire la boucle agentique et le rôle de MCP, et décider quand un agent se justifie",
    "Concevoir, chiffrer et sécuriser un workflow automatisé de bout en bout",
  ],
  skills: [
    "Prompting avancé",
    "Claude Code",
    "Conception d'agents",
    "Tool use / function calling",
    "MCP",
    "API Anthropic",
    "Estimation de coûts LLM",
    "Évaluation de qualité",
  ],
  contentTypes: [
    "Leçons écrites",
    "Schémas techniques",
    "Exemples avant/après",
    "Quiz interactifs",
  ],
  parts: [
    {
      id: "p1",
      title: "Comprendre les LLM et Claude",
      lessons: [
        {
          id: "l1",
          title: "Ce qui se passe vraiment quand Claude te répond",
          type: "text",
          duration: "14 min",
          body:
            "## Le rapport de 80 pages qui finit mal\n\n" +
            "Scène vécue chez un client en mars dernier : une juriste colle un contrat de 80 pages dans un chatbot, pose douze questions à la suite, et s'étonne qu'à la treizième, la réponse contredise l'article 4 du document. Le contrat était pourtant « dans la conversation ». Sa conclusion : « l'IA ment ». La vraie explication tient en deux notions que cette leçon va installer une bonne fois : les tokens et la fenêtre de contexte. Une fois que tu les as, 80 % des comportements bizarres d'un LLM deviennent prévisibles.\n\n" +
            "## Un LLM ne lit pas des mots\n\n" +
            "Claude, comme tous les grands modèles de langage, ne manipule ni lettres ni mots : il découpe le texte en **tokens**, des fragments statistiquement fréquents. « Bonjour » tient en un token ; « anticonstitutionnellement » en prend plusieurs ; un émoji ou un bout de code JSON aussi. Les ordres de grandeur à retenir :\n\n" +
            "- 1 token ≈ 4 caractères en anglais, un peu moins en français (nos accents et nos mots longs coûtent plus cher) ;\n" +
            "- 1 000 tokens ≈ 700 à 750 mots ;\n" +
            "- une page A4 de texte dense ≈ 500 à 600 tokens.\n\n" +
            "Le modèle fait ensuite une seule chose, en boucle : prédire le token suivant le plus plausible compte tenu de tout ce qui précède. Pas de base de données interrogée, pas de « compréhension » au sens humain : une prédiction statistique d'une puissance déconcertante, entraînée sur d'immenses corpus de texte. C'est pour ça qu'un LLM peut affirmer avec aplomb une chose fausse : « plausible » et « vrai » ne sont pas le même mot.\n\n" +
            "## La fenêtre de contexte : la mémoire de travail\n\n" +
            "Tout ce que le modèle « voit » à un instant donné tient dans sa **fenêtre de contexte** : une limite en tokens qui englobe *l'ensemble* de la conversation. Sur les modèles Claude récents, elle va de 200 000 tokens (environ 500 pages) à 1 million selon le modèle. Ça paraît énorme. Mais fais le compte de ce qui s'y entasse :\n\n" +
            "- les instructions système (les consignes permanentes, visibles ou non) ;\n" +
            "- tout l'historique de la conversation, tes messages ET les réponses de Claude ;\n" +
            "- les fichiers que tu as joints, convertis en tokens ;\n" +
            "- la réponse en cours de génération, qui consomme aussi sa part.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La fenêtre de contexte : tout ce que Claude voit tient dans une seule limite en tokens\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Fenêtre de contexte et tokens</title>" +
            "<text x=\"16\" y=\"28\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.8\">1. Ton texte est découpé en tokens</text>" +
            "<rect x=\"16\" y=\"42\" width=\"92\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"26\" y=\"62\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.75\">Le contrat</text>" +
            "<rect x=\"116\" y=\"42\" width=\"64\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"126\" y=\"62\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.75\">de b</text>" +
            "<rect x=\"188\" y=\"42\" width=\"58\" height=\"30\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"198\" y=\"62\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.75\">ail</text>" +
            "<rect x=\"254\" y=\"42\" width=\"110\" height=\"30\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"264\" y=\"62\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.75\">stipule…</text>" +
            "<text x=\"380\" y=\"62\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">≈ 4 tokens</text>" +
            "<text x=\"16\" y=\"118\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.8\">2. Tout s'empile dans la fenêtre de contexte (ex. 200 000 tokens)</text>" +
            "<rect x=\"16\" y=\"132\" width=\"608\" height=\"56\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/>" +
            "<rect x=\"20\" y=\"136\" width=\"90\" height=\"48\" rx=\"3\" fill=\"currentColor\" opacity=\"0.35\"/><text x=\"28\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">systeme</text>" +
            "<rect x=\"114\" y=\"136\" width=\"200\" height=\"48\" rx=\"3\" fill=\"currentColor\" opacity=\"0.45\"/><text x=\"124\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">fichiers joints</text>" +
            "<rect x=\"318\" y=\"136\" width=\"170\" height=\"48\" rx=\"3\" fill=\"currentColor\" opacity=\"0.55\"/><text x=\"328\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">historique</text>" +
            "<rect x=\"492\" y=\"136\" width=\"128\" height=\"48\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"502\" y=\"164\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">reponse</text>" +
            "<line x1=\"624\" y1=\"196\" x2=\"624\" y2=\"216\" stroke=\"currentColor\" opacity=\"0.6\"/>" +
            "<text x=\"398\" y=\"214\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">limite : au-dela, ca deborde</text>" +
            "<text x=\"16\" y=\"258\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.8\">3. Une conversation longue = le debut finit par sortir du champ</text>" +
            "<line x1=\"16\" y1=\"272\" x2=\"320\" y2=\"272\" stroke=\"currentColor\" opacity=\"0.35\" stroke-dasharray=\"4 4\"/>" +
            "<line x1=\"320\" y1=\"272\" x2=\"624\" y2=\"272\" stroke=\"currentColor\" opacity=\"0.8\"/>" +
            "</svg>\n" +
            "```\n\n" +
            "Notre juriste avait donc empilé un contrat de ~45 000 tokens, douze allers-retours de questions-réponses, plus quelques copier-coller annexes. Rien ne « ment » : passé un certain volume, le modèle dispose d'une masse d'information telle que les détails du début pèsent moins dans sa prédiction. Et sur des conversations vraiment longues, certaines interfaces résument ou tronquent silencieusement les anciens échanges.\n\n" +
            "## Trois conséquences pratiques immédiates\n\n" +
            "**Une conversation neuve vaut mieux qu'une conversation fleuve.** Quand tu changes de sujet, ouvre une nouvelle discussion. L'historique accumulé n'aide pas, il dilue. Les meilleurs utilisateurs que je connais ouvrent dix conversations courtes par jour, pas une géante.\n\n" +
            "**Place l'important près de la question.** Si tu joins un long document, formule ta demande après lui, et cite explicitement le passage qui compte (« concentre-toi sur l'article 4, page 12 »). Tu guides la prédiction au lieu d'espérer qu'elle retrouve l'aiguille seule.\n\n" +
            "**Claude n'a pas de mémoire entre les conversations** par défaut. Ce que tu lui as dit hier dans une autre discussion n'existe plus (les Projets et les fonctions de mémoire, qu'on verra en partie 2, servent précisément à recréer une continuité contrôlée). Croire le contraire est l'erreur numéro un des débutants.\n\n" +
            "## À toi\n\n" +
            "Estime le nombre de tokens de ces trois éléments : (a) un email de 150 mots, (b) un PDF de 40 pages denses, (c) une conversation de 20 allers-retours d'environ 200 mots chacun.\n\n" +
            "> (a) ≈ 200-220 tokens. (b) ≈ 20 000 à 24 000 tokens (500-600 par page). (c) 40 messages × ~270 tokens ≈ 11 000 tokens, et oui, les réponses de Claude comptent dedans. Moralité : le PDF pèse à lui seul le double de toute la conversation.\n\n" +
            "Prochaine étape : maintenant que tu sais ce qu'un modèle fait, voyons *lesquels* existent chez Anthropic et comment la gamme est organisée.\n",
        },
        {
          id: "l2",
          title: "Haiku, Sonnet, Opus : la gamme Claude en 2026",
          type: "text",
          duration: "13 min",
          body:
            "## Trois gammes, une logique\n\n" +
            "Ouvre le sélecteur de modèle sur claude.ai et tu tombes sur des noms de poèmes : Haiku, Sonnet, Opus. Ce n'est pas du marketing gratuit, c'est une hiérarchie de taille littéraire, du plus court au plus ample, qui recouvre un vrai arbitrage technique :\n\n" +
            "- **Haiku** : le plus rapide et le moins cher. Conçu pour les tâches à fort volume : classification, extraction, résumés courts, modération. Réponses quasi instantanées.\n" +
            "- **Sonnet** : l'équilibre. C'est le cheval de trait : assez malin pour du code sérieux et de la rédaction soignée, assez rapide et abordable pour tourner toute la journée. Si tu hésites, commence là.\n" +
            "- **Opus** : le haut de gamme. Raisonnement multi-étapes, problèmes ambigus, agents qui enchaînent des dizaines d'actions. Plus lent, plus cher, mais nettement plus fiable sur le difficile.\n\n" +
            "Chaque gamme évolue par versions numérotées. En 2026, tu croiseras typiquement **Claude Haiku 4.5**, **Claude Sonnet 4.6** puis **Claude Sonnet 5**, et la lignée **Claude Opus 4.6, 4.7, 4.8**. Retiens surtout la mécanique : le numéro de génération monte régulièrement, et un Sonnet récent dépasse souvent l'Opus de la génération précédente sur beaucoup de tâches. Les numéros exacts seront périmés dans un an ; la logique de gamme, non.\n\n" +
            "## Ce que « plus capable » veut dire concrètement\n\n" +
            "Entre un Haiku et un Opus, la différence ne se voit presque pas sur « écris-moi un email de relance ». Elle explose sur :\n\n" +
            "- **le raisonnement long** : un bug qui traverse trois fichiers, un contrat avec des clauses qui se contredisent ;\n" +
            "- **le suivi de consignes nombreuses** : 15 règles de style dans un prompt système, respectées au lieu d'être oubliées à la 8e ;\n" +
            "- **l'agentique** : enchaîner 30 appels d'outils sans perdre le fil de l'objectif (on y passera toute la partie 4) ;\n" +
            "- **l'honnêteté sur l'incertain** : les gros modèles disent plus volontiers « je ne sais pas » au lieu d'inventer.\n\n" +
            "Les modèles récents disposent aussi d'un mode de **réflexion étendue** : avant de répondre, le modèle « réfléchit » en interne, ce qui améliore nettement les problèmes complexes en échange de latence et de tokens supplémentaires. Sur les versions les plus récentes, cette réflexion s'adapte d'elle-même à la difficulté de la question.\n\n" +
            "## Fenêtres de contexte : de 200K à 1M\n\n" +
            "Côté mémoire de travail, Haiku 4.5 offre 200 000 tokens de contexte ; les Sonnet et Opus récents montent jusqu'à 1 million. Un million de tokens, c'est l'équivalent d'une petite base de code entière ou de plusieurs romans. Attention au réflexe pavlovien : « plus grand contexte = je colle tout ». Non. Tu paies chaque token d'entrée, et la qualité de réponse baisse quand tu noies l'information utile dans du remplissage. Le grand contexte est une option de secours pour les cas qui en ont vraiment besoin, pas une invitation au vrac.\n\n" +
            "## Où rencontres-tu ces modèles ?\n\n" +
            "Trois portes d'entrée, et tu utiliseras les trois dans ce cours :\n\n" +
            "| Porte d'entrée | C'est quoi | Tu paies comment |\n" +
            "| --- | --- | --- |\n" +
            "| claude.ai | L'interface web/mobile grand public | Abonnement (gratuit limité, Pro ~20 $/mois) |\n" +
            "| Claude Code | L'agent de codage dans ton terminal | Abonnement ou consommation API |\n" +
            "| API Anthropic | L'accès programmatique pour tes scripts et produits | Au token consommé |\n\n" +
            "Un point qui surprend : le *même* modèle répond différemment selon la porte, parce que chaque produit ajoute ses propres instructions système et outils par-dessus. Si un résultat te semble incohérent entre claude.ai et l'API, ce n'est pas le modèle qui change d'humeur, c'est l'emballage.\n\n" +
            "## Les pièges de cette leçon\n\n" +
            "**Piège 1 : choisir son modèle une fois pour toutes.** Le bon réflexe est par tâche, pas par habitude. On formalise ça dans la leçon suivante.\n\n" +
            "**Piège 2 : croire qu'un modèle « connaît » l'actualité.** Chaque modèle a une date de coupure d'entraînement ; ce qui est arrivé après, il ne l'a pas appris. La recherche web (quand elle est activée) comble ce trou, mais c'est un outil branché sur le modèle, pas une propriété du modèle.\n\n" +
            "**Piège 3 : comparer les modèles sur une seule question.** La variance d'une génération à l'autre est réelle. Juger sur un essai unique, c'est juger un restaurant sur une frite.\n\n" +
            "## À retenir\n\n" +
            "- Trois gammes : Haiku (volume, vitesse), Sonnet (équilibre par défaut), Opus (raisonnement difficile) ; les versions montent, la logique reste.\n" +
            "- La différence de gamme se voit sur le complexe : consignes nombreuses, raisonnement long, agents.\n" +
            "- Le même modèle vit dans trois emballages (claude.ai, Claude Code, API) qui influencent ses réponses.\n",
        },
        {
          id: "l3",
          title: "Choisir son modèle : qualité, vitesse, prix",
          type: "text",
          duration: "14 min",
          body:
            "## La même tâche, facture multipliée par 25\n\n" +
            "Un client m'a montré sa facture API un lundi : 340 $ pour un mois de tri automatique d'emails entrants. Le script classait chaque message en « support / commercial / spam / autre ». Quatre catégories. Il tournait sur le modèle le plus haut de gamme, « pour être sûr ». On l'a basculé sur Haiku : même taux d'erreur mesuré (on a comparé sur 500 emails), facture divisée par 25. Personne n'avait fait le calcul avant, parce que personne ne savait comment les prix fonctionnent. Réparons ça.\n\n" +
            "## Comment se facture un appel\n\n" +
            "L'API Anthropic facture au **million de tokens**, avec deux compteurs séparés : les tokens d'**entrée** (tout ce que tu envoies : instructions, historique, documents) et les tokens de **sortie** (ce que le modèle génère), la sortie coûtant environ cinq fois plus cher. Ordres de grandeur en 2026 :\n\n" +
            "| Modèle | Entrée / M tokens | Sortie / M tokens |\n" +
            "| --- | --- | --- |\n" +
            "| Haiku 4.5 | ~1 $ | ~5 $ |\n" +
            "| Sonnet (4.6 / 5) | ~3 $ | ~15 $ |\n" +
            "| Opus 4.x | ~5 $ | ~25 $ |\n\n" +
            "Ces chiffres bougent (plutôt à la baisse à capacité égale), mais les *ratios* sont stables : un facteur ~5 entre entrée et sortie, un facteur ~5 entre Haiku et Sonnet, et encore un cran vers Opus.\n\n" +
            "Exemple chiffré, notre tri d'emails : 300 emails/jour, ~600 tokens d'entrée chacun (email + consignes), ~10 tokens de sortie (le nom de la catégorie). Par mois : 300 × 30 × 600 = 5,4 M tokens d'entrée. Sur Haiku : 5,4 × 1 $ ≈ 5,40 $ plus une sortie négligeable. Sur un modèle premium : l'addition que tu connais. La sortie courte est la clé du calcul : quand ton cas d'usage génère peu de texte, le modèle cher se paie surtout sur l'entrée répétée.\n\n" +
            "## La méthode en trois questions\n\n" +
            "Devant chaque nouvelle tâche, pose ces trois questions dans l'ordre :\n\n" +
            "**1. L'erreur coûte-t-elle cher ?** Un email mal classé se rattrape ; un avenant de contrat mal analysé, non. Plus l'erreur est coûteuse, plus la gamme monte, et plus tu ajoutes une relecture humaine (partie 5).\n\n" +
            "**2. La tâche demande-t-elle du raisonnement ou du réflexe ?** Extraire un montant d'une facture : réflexe, Haiku. Rédiger une réponse argumentée à une réclamation en respectant la politique commerciale : raisonnement, Sonnet. Diagnostiquer pourquoi trois systèmes se contredisent : Opus.\n\n" +
            "**3. Quel volume ?** À 10 requêtes par jour, la différence de prix est du bruit : prends le modèle confortable. À 100 000 par jour, chaque centime compte : descends la gamme jusqu'à ce que la qualité mesurée décroche, pas avant.\n\n" +
            "Mon avis tranché, après deux ans de ces arbitrages : **commence par Sonnet, mesure, puis ajuste**. Commencer par Opus t'empêche de savoir si tu surpaies ; commencer par Haiku te fait parfois conclure à tort que « l'IA n'y arrive pas » alors que c'est juste le mauvais étage de la gamme.\n\n" +
            "## Deux leviers de prix que presque personne n'utilise\n\n" +
            "**Le cache de prompt.** Si tu renvoies à chaque appel le même gros bloc (mêmes instructions, même documentation de référence), l'API peut le mettre en cache : les relectures de la partie cachée coûtent environ 10 fois moins cher que des tokens d'entrée normaux. Sur un agent qui relit 50 000 tokens de contexte à chaque tour, c'est le premier poste d'économie, loin devant le choix du modèle.\n\n" +
            "**Le traitement par lots (Batch API).** Si le résultat peut attendre quelques heures (rapports nocturnes, traduction de catalogue, backfill), le mode batch coûte moitié prix. Mon tri d'emails aurait pu descendre à ~2,70 $/mois. La question à se poser : « est-ce que quelqu'un attend la réponse en temps réel ? ». Souvent, non.\n\n" +
            "## Et la vitesse ?\n\n" +
            "Dernier axe, souvent oublié jusqu'au jour où il fait mal : la latence. Haiku répond en une fraction de seconde utile ; un gros modèle en réflexion étendue peut prendre des dizaines de secondes. Pour un chatbot face à un client qui attend, cette différence est une décision produit, pas un détail technique. Règle simple : temps réel humain → privilégie la vitesse ; traitement de fond → privilégie la qualité par token dépensé.\n\n" +
            "## À toi\n\n" +
            "Choisis une gamme (Haiku / Sonnet / Opus) et justifie en une phrase pour : (a) détecter la langue de 50 000 avis clients, (b) rédiger les réponses personnalisées aux 200 avis négatifs, (c) analyser un litige fournisseur en croisant 4 contrats.\n\n" +
            "> (a) Haiku : tâche réflexe, volume énorme, erreur bénigne. (b) Sonnet : rédaction nuancée face à des clients mécontents, volume moyen, et relecture humaine avant envoi. (c) Opus : raisonnement croisé multi-documents où une erreur coûte cher ; le surcoût est dérisoire face à l'enjeu du litige.\n",
        },
        {
          id: "l4",
          title: "Quiz : LLM, tokens et modèles",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Après 15 allers-retours dans une très longue conversation, Claude contredit un détail du document collé au tout début. Quelle est l'explication la plus probable ?",
              options: [
                "Le modèle a été mis à jour en cours de conversation",
                "Le volume accumulé dans la fenêtre de contexte dilue les détails du début, qui pèsent moins dans la prédiction",
                "Le document contenait un virus qui a corrompu la session",
                "Claude refuse volontairement de répondre deux fois sur le même document",
              ],
              correctIndex: 1,
              explanation:
                "Tout s'empile dans la même fenêtre de contexte : document, questions, réponses. Passé un certain volume, l'information du début est noyée et peut même être tronquée ou résumée par l'interface. Le réflexe : conversation neuve et citation explicite du passage qui compte.",
            },
            {
              id: "q2",
              prompt: "Que fait fondamentalement un LLM comme Claude pour produire sa réponse ?",
              options: [
                "Il interroge une base de données de réponses vérifiées",
                "Il copie des passages de pages web indexées en temps réel",
                "Il prédit, token après token, la suite la plus plausible compte tenu du contexte",
                "Il exécute un programme de règles grammaticales écrites par des linguistes",
              ],
              correctIndex: 2,
              explanation:
                "Un LLM génère le token suivant le plus plausible, en boucle. C'est pourquoi « plausible » peut diverger de « vrai » : le modèle n'a ni base de faits vérifiés ni accès au web par défaut (la recherche web est un outil ajouté par-dessus).",
            },
            {
              id: "q3",
              prompt:
                "Tu dois classer 80 000 tickets de support par catégorie, chaque réponse tenant en un mot. Quel choix est le plus raisonnable en premier ?",
              options: [
                "Le modèle Opus le plus récent, pour garantir zéro erreur",
                "Haiku, puis mesurer le taux d'erreur sur un échantillon avant de monter en gamme si besoin",
                "Sonnet en réflexion étendue pour chaque ticket",
                "N'importe quel modèle, le prix sera identique puisque la sortie est courte",
              ],
              correctIndex: 1,
              explanation:
                "Tâche réflexe, volume massif, erreur peu coûteuse : le profil Haiku type. On mesure sur un échantillon et on ne monte en gamme que si la qualité décroche. L'option d, elle, oublie que les tokens d'entrée (80 000 tickets !) sont facturés au tarif du modèle choisi.",
            },
            {
              id: "q4",
              prompt: "Pourquoi les tokens de sortie pèsent-ils souvent moins que prévu dans une facture de classification ?",
              options: [
                "Parce que les tokens de sortie sont gratuits en dessous de 1 000 par jour",
                "Parce qu'une classification génère très peu de tokens de sortie, alors que chaque document d'entrée est facturé en entier",
                "Parce que l'API arrondit toujours la sortie au token inférieur",
                "Parce que le cache de prompt rend la sortie moins chère que l'entrée",
              ],
              correctIndex: 1,
              explanation:
                "La sortie coûte ~5× plus cher au token, mais une étiquette de catégorie fait ~10 tokens quand l'email d'entrée en fait 600. Dans ce profil d'usage, l'essentiel de la facture vient de l'entrée répétée : d'où l'intérêt du cache de prompt et du bon étage de gamme.",
            },
            {
              id: "q5",
              prompt: "Quelle affirmation sur la gamme Claude est correcte ?",
              options: [
                "Haiku, Sonnet et Opus sont trois interfaces différentes du même modèle",
                "Opus est systématiquement le meilleur choix puisque c'est le plus capable",
                "Un Sonnet de génération récente peut dépasser un Opus de génération précédente sur de nombreuses tâches",
                "Le numéro de version (4.5, 4.6, 5…) indique la taille de la fenêtre de contexte",
              ],
              correctIndex: 2,
              explanation:
                "Les générations montent vite : le milieu de gamme d'aujourd'hui rivalise souvent avec le haut de gamme d'hier. C'est pour ça qu'on raisonne par tâche (coût de l'erreur, raisonnement, volume) et non par réflexe « toujours le plus gros ».",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Piloter Claude au quotidien",
      lessons: [
        {
          id: "l5",
          title: "claude.ai en mode pro : fichiers, artefacts, bonnes habitudes",
          type: "text",
          duration: "13 min",
          body:
            "## Deux collègues, le même outil, deux mondes\n\n" +
            "J'ai vu ça dans une équipe marketing de six personnes : deux abonnements Claude Pro identiques. La première personne tape des questions d'une ligne dans une conversation unique ouverte depuis trois semaines, et trouve l'outil « moyen ». La seconde joint ses briefs, fait générer des artefacts qu'elle commente ligne par ligne, ouvre une conversation par sujet, et a réduit d'une journée par semaine son temps de production. Même outil, même prix. La différence est entièrement dans les habitudes. Cette leçon installe celles qui comptent.\n\n" +
            "## Joindre des fichiers : le contexte avant la question\n\n" +
            "claude.ai accepte les pièces jointes : PDF, documents texte, feuilles de calcul, images, code. C'est LE geste qui sépare les débutants des autres. Comparons :\n\n" +
            "- Sans fichier : « Écris une page de vente pour mon logiciel de compta » → Claude invente un logiciel générique, des bénéfices génériques, un ton générique.\n" +
            "- Avec fichiers : le brief produit + deux pages de vente existantes + la grille tarifaire → Claude travaille sur TES données, dans TON ton.\n\n" +
            "Trois réflexes autour des fichiers :\n\n" +
            "- **Nomme ce que tu joins et pourquoi.** « Le PDF est notre charte éditoriale : respecte-la. Le tableau contient les vrais chiffres : n'en invente aucun autre. »\n" +
            "- **Ne joins que l'utile.** On l'a vu en partie 1 : chaque page consomme des tokens et dilue le reste. Dix fichiers « au cas où » dégradent la réponse.\n" +
            "- **Vérifie les chiffres extraits.** La lecture de tableaux complexes (cellules fusionnées, colonnes ambiguës) reste un point faible. Un contrôle aléatoire de trois valeurs prend trente secondes.\n\n" +
            "## Les artefacts : arrêter le copier-coller infernal\n\n" +
            "Quand tu demandes un contenu substantiel (un document, une page web, un script, un tableau), claude.ai peut le produire dans un **artefact** : un panneau séparé de la conversation, que Claude met à jour au fil de tes retours au lieu de te renvoyer le pavé entier à chaque fois. Concrètement :\n\n" +
            "1. « Rédige la FAQ support de notre produit à partir du brief joint » → l'artefact apparaît à droite.\n" +
            "2. « La question 4 est trop technique, réécris-la pour un non-informaticien » → seul l'artefact change, la conversation reste lisible.\n" +
            "3. Tu copies ou exportes la version finale.\n\n" +
            "Pour du code, l'artefact peut même être prévisualisé : une page HTML, un petit outil interactif, un diagramme. J'utilise ça en atelier client pour prototyper une maquette d'écran en direct : pas du code de production, mais un support de discussion qui aurait pris une heure à produire autrement.\n\n" +
            "Le piège classique avec les artefacts : demander vingt modifications successives d'affilée. Au bout d'un moment, les retouches se marchent dessus et le document régresse (une correction en écrase une autre). Quand ça patine, repars proprement : « Reprends l'artefact de zéro en intégrant tous mes retours ci-dessus. »\n\n" +
            "## Les habitudes qui changent tout\n\n" +
            "**Une conversation = un sujet.** Déjà dit en partie 1, jamais assez répété. Bonus : renomme tes conversations (« FAQ produit v2 », pas « Sans titre »), tu t'y retrouveras dans deux semaines.\n\n" +
            "**Donne le rôle et le destinataire.** « Tu es responsable support dans un éditeur SaaS B2B. Le texte s'adresse à des comptables non techniciens. » Deux phrases, et la moitié des retouches disparaissent.\n\n" +
            "**Demande d'abord un plan.** Pour tout livrable de plus d'une page : « Propose d'abord la structure, on rédigera après validation. » Corriger un plan coûte dix secondes ; corriger un document fini, dix minutes.\n\n" +
            "**Exige les sources quand la recherche web est utilisée.** claude.ai peut chercher sur le web pour les sujets récents. Demande les liens et ouvre-les : une synthèse web sans vérification des sources, c'est de l'information de seconde main non signée.\n\n" +
            "**Utilise la réponse pour améliorer la question.** Si la réponse est à côté, ne rafistole pas en douze messages. Demande : « Qu'est-ce qui manquait à ma demande pour bien répondre du premier coup ? » puis relance proprement. Ça paraît étrange ; ça marche remarquablement bien.\n\n" +
            "## À toi\n\n" +
            "Tu veux obtenir une trame d'email de prospection pour ton activité. Écris la demande complète que tu enverrais, en appliquant au moins trois habitudes de cette leçon.\n\n" +
            "> Exemple correct : « Tu es commercial senior en cybersécurité B2B. Je joins notre plaquette (offre réelle, ne rien inventer) et deux emails qui ont bien converti (imite ce ton). Destinataires : DSI de PME industrielles, froids. Propose d'abord 3 angles d'accroche différents, on rédigera après mon choix. » : rôle, fichiers nommés avec consigne, destinataire précis, plan avant rédaction.\n",
        },
        {
          id: "l6",
          title: "Projets et instructions système : ton Claude sur mesure",
          type: "text",
          duration: "14 min",
          body:
            "## Marre de répéter la même chose\n\n" +
            "Si tu utilises Claude sérieusement, tu retapes les mêmes consignes plusieurs fois par jour : ton contexte métier, ton ton, tes interdits. Au bout d'une semaine, tout le monde abrège, et la qualité retombe. Les **Projets** de claude.ai règlent exactement ça : un espace qui regroupe des conversations partageant les mêmes instructions permanentes et les mêmes documents de référence.\n\n" +
            "## Anatomie d'un Projet\n\n" +
            "Un Projet claude.ai combine trois choses :\n\n" +
            "- **Des instructions personnalisées** : un texte de consignes appliqué à toutes les conversations du Projet. C'est ton prompt système à toi.\n" +
            "- **Une base de connaissances** : les fichiers de référence (charte, catalogue, glossaire, exemples) disponibles dans chaque conversation sans les rejoindre à la main.\n" +
            "- **Les conversations** elles-mêmes, regroupées au même endroit.\n\n" +
            "Exemple réel, anonymisé : une agence immobilière de 12 personnes a monté trois Projets. « Annonces » (instructions : structure d'annonce maison, mentions légales obligatoires, interdiction des superlatifs creux ; fichiers : 10 annonces exemplaires). « Emails clients » (ton, signatures, cas types). « Juridique » (glossaire, modèles de clauses, consigne stricte : citer le document source ou dire « à vérifier avec le notaire »). Résultat : n'importe quel collaborateur obtient une annonce au standard maison en un message, sans connaître le prompting.\n\n" +
            "## Écrire des instructions système qui tiennent\n\n" +
            "Le prompt système, c'est la différence entre un intérimaire qui débarque et un collègue briefé. Les règles qui marchent, éprouvées sur des dizaines de Projets :\n\n" +
            "**1. Contexte d'abord, en deux phrases.** Qui tu es, ce que fait l'entreprise, à qui s'adressent les textes. Pas une page : deux phrases denses.\n\n" +
            "**2. Des règles positives et vérifiables.** « Sois professionnel » ne veut rien dire. « Vouvoie le client, phrases de 20 mots maximum, un seul appel à l'action par email » se vérifie d'un coup d'œil.\n\n" +
            "**3. Les interdits explicites, avec la raison.** « N'invente jamais de chiffre ni de témoignage client : tout chiffre doit venir des fichiers du Projet. Si l'information manque, écris [À COMPLÉTER]. » Donner la raison améliore le respect de la règle, et le marqueur [À COMPLÉTER] transforme les hallucinations potentielles en trous visibles.\n\n" +
            "**4. Un exemple vaut dix règles.** Un extrait de sortie idéale dans les instructions (ou en fichier de référence) cale le ton mieux que n'importe quel adjectif.\n\n" +
            "**5. Court.** Mes instructions de Projet font rarement plus de 300 mots. Au-delà, les règles se cannibalisent : le modèle en respecte 90 %, et tu ne sais jamais lesquelles sont tombées. Si tu dépasses largement, c'est le signe qu'il te faut deux Projets distincts.\n\n" +
            "## Le test de l'intérimaire\n\n" +
            "Mon test pour valider des instructions : je les lis en imaginant qu'elles s'adressent à un intérimaire compétent mais qui ne connaît rien à la boîte. S'il pourrait produire le livrable attendu avec ça, c'est bon. Sinon, ce qui manque à l'intérimaire manque aussi à Claude. Ce test élimine 90 % des instructions vagues du type « rédige du contenu de qualité qui reflète nos valeurs ».\n\n" +
            "Corollaire à méditer : tout ce que tu formalises pour Claude (procédures, ton, cas types), documente aussi ton entreprise pour les humains. Plusieurs clients m'ont dit que le vrai bénéfice des Projets avait été de les forcer à écrire noir sur blanc des règles qui n'existaient que dans la tête de deux personnes.\n\n" +
            "## Limites honnêtes\n\n" +
            "Les instructions système ne sont pas des lois physiques. Sur une conversation très longue, une consigne peut glisser ; un fichier de référence contradictoire avec les instructions crée des réponses incohérentes ; et aucune instruction ne rend Claude infaillible sur les faits. Les instructions réduisent la variance, elles ne remplacent ni la relecture ni les garde-fous qu'on construira en partie 5.\n\n" +
            "## À toi\n\n" +
            "Rédige les instructions (200 mots max) d'un Projet « Réponses aux avis Google » pour un restaurant : ton, règles vérifiables, interdits avec raison, gestion des avis injurieux.\n\n" +
            "> Points attendus : contexte en une phrase (nom, type de cuisine, positionnement) ; vouvoiement, remerciement personnalisé qui reprend un détail de l'avis, 3 phrases max ; interdit d'offrir une compensation (raison : engagement commercial non autorisé) ; jamais de justification agressive ; avis injurieux ou mentionnant un problème d'hygiène → réponse neutre + marqueur [TRANSMIS AU GÉRANT]. Si ton brouillon contient « sois chaleureux » sans critère vérifiable, resserre.\n",
        },
        {
          id: "l7",
          title: "Avant/après : l'art de réécrire ses prompts",
          type: "text",
          duration: "14 min",
          body:
            "## Le prompt n'est pas une formule magique\n\n" +
            "Oublie les listes de « 50 prompts secrets » vendues sur les réseaux : un bon prompt n'est pas une incantation, c'est un brief bien écrit. La bonne nouvelle, c'est que ça s'apprend vite, sur un principe unique : **réduire ce que Claude doit deviner**. Chaque information que tu ne donnes pas, le modèle la remplace par la moyenne statistique de son entraînement : c'est mathématiquement du générique. Voyons le principe à l'œuvre sur trois cas réels.\n\n" +
            "## Cas 1 : l'email délicat\n\n" +
            "**Avant :** « Écris un email pour relancer un client qui n'a pas payé. »\n\n" +
            "Résultat type : trois paragraphes polis, interchangeables, ton de recouvrement américain. Inutilisable tel quel.\n\n" +
            "**Après :** « Écris un email de relance à un client fidèle depuis 6 ans (agence de 15 personnes) qui n'a pas réglé la facture #2024-087 de 4 200 € échue depuis 45 jours. C'est sa première fois en retard, la relation est bonne, je soupçonne un oubli ou un souci de trésorerie passager. Objectif : être payé sous 15 jours SANS abîmer la relation. Ton : direct mais chaleureux, tutoiement (on se connaît). Maximum 120 mots. Propose une porte de sortie (échéancier) sans la mettre en avant. »\n\n" +
            "Ce qui a changé : l'enjeu relationnel, l'historique, l'objectif mesurable, le ton, la contrainte de longueur, la nuance stratégique. Le résultat sort utilisable à 90 %.\n\n" +
            "## Cas 2 : l'analyse de données\n\n" +
            "**Avant :** « Analyse ce fichier de ventes. » (tableau joint)\n\n" +
            "Résultat type : une paraphrase descriptive (« les ventes de mars sont supérieures à celles de février »), que tu voyais déjà dans le tableau.\n\n" +
            "**Après :** « Voici nos ventes 2025 par produit et par mois (tableau joint). Contexte : on doit couper 2 produits du catalogue en janvier et doubler le budget pub d'un seul. Identifie : 1) les 2 candidats à la suppression (critères : CA, tendance sur 6 mois, saisonnalité), 2) le meilleur candidat à l'investissement, 3) ce que tu ne peux PAS conclure de ces données seules. Chiffre chaque affirmation. »\n\n" +
            "Le point 3 est mon ajout préféré : demander explicitement les limites de l'analyse. Il transforme Claude d'élève qui veut plaire en analyste qui borde son raisonnement, et il fait remonter les vraies questions (« il manque la marge par produit, le CA seul peut être trompeur »).\n\n" +
            "## Cas 3 : la demande créative\n\n" +
            "**Avant :** « Donne-moi des idées de posts LinkedIn pour mon cabinet d'expertise comptable. »\n\n" +
            "Résultat type : dix idées lisses (« 5 conseils pour préparer votre bilan »), vues mille fois.\n\n" +
            "**Après :** « Mon cabinet d'expertise comptable cible les créateurs de boîtes de moins de 2 ans. Nos concurrents publient tous des conseils fiscaux génériques : je veux l'inverse. Génère 15 idées de posts VOLONTAIREMENT clivantes ou contre-intuitives (exemples du ton visé : “Votre expert-comptable vous coûte cher parce que votre Excel est un champ de ruines”, “Non, passer en société ne vous fera pas économiser d'impôts la première année”). Pour chaque idée : l'angle en une phrase + la première ligne du post. J'en garderai 3. »\n\n" +
            "Deux techniques ici : donner des **exemples du ton visé** (le modèle calibre dessus immédiatement) et annoncer la **surproduction volontaire** (15 pour en garder 3 ; demander plus que nécessaire puis trier bat toujours demander « la meilleure idée »).\n\n" +
            "## La grille AJOR, pour tout retenir\n\n" +
            "Quatre lettres à passer en revue avant d'envoyer un prompt qui compte :\n\n" +
            "- **A**udience : pour qui est le livrable, avec quel niveau de connaissance ?\n" +
            "- **J**eu de données : quels faits, fichiers, exemples je fournis pour ne rien laisser deviner ?\n" +
            "- **O**bjectif : à quoi ressemble un résultat réussi, mesurablement (longueur, format, critère) ?\n" +
            "- **R**ôle : quel chapeau Claude porte-t-il, et quel ton ?\n\n" +
            "Tu n'as pas besoin des quatre à chaque fois, pour une question factuelle rapide, un prompt d'une ligne reste parfait. La grille sert pour les livrables : dès que la réponse va être réutilisée telle quelle, déroule AJOR.\n\n" +
            "Dernier conseil, contre-intuitif : quand un prompt soigné donne un résultat décevant, résiste à l'envie d'ajouter encore plus de consignes. Le problème est plus souvent une consigne ambiguë ou contradictoire qu'une consigne manquante. Relis ton prompt comme si tu étais l'intérimaire de la leçon précédente : la contradiction saute aux yeux.\n\n" +
            "## À toi\n\n" +
            "Prends ce prompt faible : « Fais-moi une description pour mon gîte sur Airbnb. » Réécris-le avec la grille AJOR (invente les détails du gîte).\n\n" +
            "> Version attendue, par exemple : « Rédige l'annonce Airbnb de notre gîte 6 personnes en Ardèche (piscine partagée, 15 min de Vallon-Pont-d'Arc, rez-de-chaussée accessible PMR). Audience : familles avec jeunes enfants, plutôt urbaines. Objectif : 180-220 mots, titre de moins de 50 caractères inclus, mettre en avant ce qui rassure les parents (clôture piscine, chambre en RDC, lave-linge). Ton : chaleureux et concret, zéro superlatif vide (pas de “magnifique”, “exceptionnel”). Inspire-toi de la structure des 2 annonces jointes. » Compare : chaque élément AJOR y est.\n",
        },
        {
          id: "l8",
          title: "Quiz : piloter Claude au quotidien",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q6",
              prompt: "Quel est l'intérêt principal d'un Projet claude.ai par rapport à des conversations isolées ?",
              options: [
                "Il donne accès à un modèle plus puissant réservé aux Projets",
                "Il applique automatiquement des instructions permanentes et des fichiers de référence à toutes les conversations du Projet",
                "Il supprime la limite de la fenêtre de contexte",
                "Il permet à Claude de se souvenir de toutes tes conversations, même hors du Projet",
              ],
              correctIndex: 1,
              explanation:
                "Un Projet regroupe instructions personnalisées + base de connaissances + conversations. Le modèle reste le même et la fenêtre de contexte aussi : c'est la répétition manuelle du brief qui disparaît, pas les limites techniques.",
            },
            {
              id: "q7",
              prompt:
                "Dans des instructions système, quelle règle est la mieux formulée ?",
              options: [
                "« Sois professionnel et pertinent »",
                "« Rédige du contenu de haute qualité qui reflète nos valeurs »",
                "« Vouvoie le client, 3 phrases maximum, aucun chiffre qui ne vienne pas des fichiers du Projet ; si l'info manque, écris [À COMPLÉTER] »",
                "« Évite les erreurs et vérifie tout deux fois »",
              ],
              correctIndex: 2,
              explanation:
                "Une bonne règle est vérifiable d'un coup d'œil et gère le cas d'information manquante. « Professionnel », « qualité », « vérifie » ne sont pas des critères : le modèle ne peut ni les mesurer ni s'y conformer de façon stable.",
            },
            {
              id: "q8",
              prompt:
                "Après quinze retouches successives, ton artefact régresse : des corrections précédentes ont disparu. Que faire ?",
              options: [
                "Continuer les retouches une par une jusqu'à convergence",
                "Demander une reprise à zéro de l'artefact en intégrant explicitement tous les retours précédents",
                "Passer sur un modèle plus puissant, qui n'oublie jamais les retouches",
                "Supprimer le Projet et recommencer",
              ],
              correctIndex: 1,
              explanation:
                "Les retouches successives finissent par se marcher dessus dans le contexte accumulé. Une consigne de synthèse (« reprends de zéro en intégrant tous mes retours ci-dessus ») repart d'un état propre. Changer de modèle ne supprime pas la mécanique du contexte.",
            },
            {
              id: "q9",
              prompt: "Pourquoi fournir des exemples du résultat visé est-il si efficace ?",
              options: [
                "Parce que Claude copie-colle l'exemple en changeant quelques mots",
                "Parce que le modèle calibre ton, structure et niveau de détail sur l'exemple, mieux que sur des adjectifs",
                "Parce que les exemples désactivent la fenêtre de contexte",
                "Parce que c'est le seul moyen d'imposer une longueur maximale",
              ],
              correctIndex: 1,
              explanation:
                "Un LLM prédit la suite plausible du contexte : un exemple concret oriente cette prédiction bien plus précisément que « chaleureux » ou « professionnel ». La longueur, elle, peut aussi s'imposer par une consigne chiffrée.",
            },
            {
              id: "q10",
              prompt:
                "Ton prompt pourtant détaillé donne un résultat incohérent. Quel est le premier réflexe recommandé dans le cours ?",
              options: [
                "Ajouter davantage de consignes pour couvrir tous les cas",
                "Relire le prompt à la recherche de consignes ambiguës ou contradictoires",
                "Reposer exactement la même question jusqu'à obtenir mieux",
                "Réduire le prompt à une seule phrase",
              ],
              correctIndex: 1,
              explanation:
                "Passé un certain niveau de détail, le problème vient plus souvent d'une contradiction interne (« sois exhaustif » + « 100 mots max ») que d'un manque. Empiler des règles aggrave la cannibalisation des consignes.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Claude Code et le « vibe coding »",
      lessons: [
        {
          id: "l9",
          title: "Claude Code : un agent de codage dans ton terminal",
          type: "text",
          duration: "14 min",
          body:
            "## Pas un autocomplete : un exécutant\n\n" +
            "Tu connais peut-être les assistants de code qui suggèrent la fin de ta ligne dans l'éditeur. Claude Code est un animal différent : un **agent** en ligne de commande qui lit ton projet, propose un plan, modifie des fichiers, lance des commandes et des tests, puis itère sur les erreurs. Tu ne complètes plus du code : tu délègues des tâches. « Ajoute la pagination sur la liste des clients, style cohérent avec le reste, et vérifie que les tests passent » est une demande normale.\n\n" +
            "C'est aussi ton premier contact concret avec la notion d'agent, celle qu'on va disséquer en partie 4. Claude Code EST une boucle agentique : il observe (lit tes fichiers), agit (édite, exécute), constate le résultat (sortie de commande, erreur de test), et recommence jusqu'à l'objectif. Le voir travailler, c'est voir un agent travailler.\n\n" +
            "## Installation et premier lancement\n\n" +
            "Il te faut Node.js 18 ou plus récent, puis :\n\n" +
            "```bash\n" +
            "npm install -g @anthropic-ai/claude-code\n" +
            "cd mon-projet\n" +
            "claude\n" +
            "```\n\n" +
            "Au premier lancement, tu t'authentifies (abonnement claude.ai ou clé API : l'abonnement est plus simple pour débuter). Tu arrives sur une invite de commande conversationnelle, dans ton projet. Première chose à taper sur un projet existant :\n\n" +
            "```\n" +
            "/init\n" +
            "```\n\n" +
            "Cette commande fait analyser le projet et génère un fichier **CLAUDE.md** à la racine : la carte d'identité du dépôt (stack, commandes de build et de test, conventions). Claude Code le relit à chaque session. On lui consacre la leçon suivante, c'est le levier de qualité numéro un.\n\n" +
            "## La sécurité par les permissions\n\n" +
            "Par défaut, Claude Code **demande ton accord** avant d'éditer un fichier ou d'exécuter une commande. Au début, lis chaque demande : c'est ton apprentissage à toi. Tu peux ensuite autoriser certaines actions pour la session (les éditions de fichiers, par exemple) tout en gardant la main sur les commandes shell. Mon conseil ferme : ne passe jamais en mode « tout accepter » sur un projet qui compte, et encore moins sur une machine qui a accès à de la production. Le confort de ne pas cliquer ne vaut pas un `rm` malheureux ou une migration de base lancée sans relecture.\n\n" +
            "Autre pilier de sécurité, plus important encore : **git**. Travaille sur une branche, commite souvent. Un agent qui modifie douze fichiers, ça se revert en une commande si tu as commité avant ; ça se pleure si tu ne l'as pas fait.\n\n" +
            "## Ta première session utile\n\n" +
            "Scénario réel sur un petit projet Express : la route `/api/orders` renvoie les montants en centimes et le front affiche « 129900 € ». Session type :\n\n" +
            "1. Tu décris le symptôme, pas la solution : « Le front affiche les montants ×100 sur la page commandes. Trouve la cause et corrige au bon endroit. »\n" +
            "2. Claude Code cherche dans le code, identifie que l'API renvoie des centimes et que le front n'a pas de conversion, et **propose** : convertir côté API ou côté front, avec les implications de chaque option.\n" +
            "3. Tu tranches (côté API, pour ne pas dupliquer la conversion dans chaque client), il modifie, lance les tests, te montre le diff.\n" +
            "4. Tu relis le diff, vraiment, et tu commites.\n\n" +
            "Remarque le point 1 : décrire le symptôme plutôt qu'imposer une solution laisse l'agent explorer, et il trouve régulièrement une cause plus profonde que ton hypothèse. C'est exactement l'inverse du réflexe habituel avec un outil bête.\n\n" +
            "## Ce que « vibe coding » veut dire (et son piège)\n\n" +
            "L'expression « vibe coding » désigne cette pratique : décrire l'intention en langage naturel, laisser l'agent produire, juger au résultat, itérer. Pour un prototype, un script interne, un outil jetable, c'est spectaculaire de productivité : j'ai vu un chef de produit non-développeur se construire un tableau de bord de suivi en une soirée.\n\n" +
            "Le piège, c'est de glisser du prototype à la production sans changer de posture. Du code que personne n'a relu, dans un système qui touche des clients ou de l'argent, c'est une dette dont tu découvriras le taux d'intérêt au pire moment. La règle que je donne à mes clients : **le vibe coding produit des brouillons de code ; ce qui part en production a été relu par quelqu'un qui comprend ce qu'il lit.** La leçon 11 t'outillera précisément pour cette relecture.\n\n" +
            "## À toi\n\n" +
            "Sans installer quoi que ce soit : reformule ces deux demandes faibles en demandes fortes pour Claude Code. (a) « Corrige le bug de la page panier. » (b) « Améliore les performances. »\n\n" +
            "> (a) « Sur la page panier, quand on passe une quantité à 0, le total ne se recalcule pas (il faut recharger). Reproduis avec `npm run dev`, trouve la cause, corrige, et ajoute un test qui aurait attrapé ce bug. » (b) « La page /catalogue met ~4 s à charger avec 500 produits. Mesure d'abord où part le temps (requêtes SQL ? rendu ?), montre-moi le diagnostic AVANT de modifier quoi que ce soit, puis propose les 2 optimisations au meilleur rapport gain/risque. » Symptôme observable, critère de succès, et un point de contrôle humain.\n",
        },
        {
          id: "l10",
          title: "CLAUDE.md et l'art d'itérer sur un vrai projet",
          type: "text",
          duration: "14 min",
          body:
            "## Le fichier qui briefe ton agent\n\n" +
            "Reprenons le test de l'intérimaire de la partie 2 : un nouveau développeur arrive sur ton projet. Que doit-il savoir pour ne pas faire de dégâts ? La réponse à cette question, c'est le contenu de ton **CLAUDE.md** : un fichier markdown à la racine du dépôt que Claude Code charge au début de chaque session. Même principe que les instructions d'un Projet claude.ai, appliqué au code.\n\n" +
            "Un CLAUDE.md efficace, sur un projet web classique :\n\n" +
            "```markdown\n" +
            "# Boutique Nordik : API + front\n" +
            "\n" +
            "## Stack\n" +
            "Node 20, Express, PostgreSQL, front React (Vite). Tests : Vitest.\n" +
            "\n" +
            "## Commandes\n" +
            "- `npm run dev` : lance API (3001) + front (5173)\n" +
            "- `npm test` : lance TOUS les tests (à exécuter avant de conclure)\n" +
            "- `npm run db:migrate` : migrations. NE JAMAIS lancer db:reset (efface les données)\n" +
            "\n" +
            "## Conventions\n" +
            "- Montants TOUJOURS en centimes (int) côté serveur, conversion à l'affichage\n" +
            "- Pas de nouvelle dépendance sans me demander\n" +
            "- Les routes API vivent dans src/routes/, un fichier par ressource\n" +
            "\n" +
            "## Pièges connus\n" +
            "- Le module src/legacy/ est fragile : ne pas y toucher sans demander\n" +
            "```\n\n" +
            "Note le style : des faits et des interdits, pas de la littérature. Chaque ligne évite une classe d'erreurs réelle. « Montants en centimes » y figure parce que le bug de la leçon précédente est arrivé une fois : le CLAUDE.md est un document vivant qui s'enrichit à chaque leçon apprise. Quand l'agent fait deux fois la même erreur, la question n'est pas « pourquoi il est bête » mais « qu'est-ce qui manque au briefing ».\n\n" +
            "## Le cycle d'itération qui marche\n\n" +
            "Sur un vrai projet, la différence entre une session productive et une session qui part en vrille tient à la taille des pas. Le cycle gagnant :\n\n" +
            "**1. Une tâche = un objectif vérifiable.** « Ajoute le champ téléphone au formulaire client, avec validation format FR, et le test qui va avec. » Pas : « Modernise la gestion des clients. » Une grosse ambition se découpe en tâches de 10 à 30 minutes d'agent.\n\n" +
            "**2. Plan d'abord sur le non-trivial.** Pour une tâche qui touche plus de deux ou trois fichiers, demande le plan avant l'action : « Propose ton plan d'implémentation, n'écris pas encore de code. » Claude Code a d'ailleurs un mode dédié à la planification. Tu corriges le plan en dix secondes ; tu corriges une mauvaise implémentation en une heure.\n\n" +
            "**3. Vérification objective à chaque pas.** Le duo agent + tests automatisés est magique : l'agent lance `npm test`, voit l'échec, corrige, relance. Sans tests, il déclare « c'est corrigé » avec le même aplomb, vrai ou faux. Si ton projet n'a pas de tests, ta première tâche pour Claude Code devrait être d'en écrire sur les parties critiques.\n\n" +
            "**4. Commit à chaque étape verte.** Petit commit, message clair, et tu peux laisser l'agent tenter des choses audacieuses : le filet est là.\n\n" +
            "**5. Nouvelle session quand tu changes de sujet.** Comme sur claude.ai : une session qui a accumulé trois tâches différentes raisonne moins bien. `/clear` ou nouvelle session, le CLAUDE.md recharge le contexte essentiel.\n\n" +
            "## Quand l'agent patine : le signal des trois essais\n\n" +
            "Règle empirique qui m'a économisé des heures : si Claude Code échoue trois fois de suite sur la même correction (le test échoue encore, l'erreur se déplace), **arrête d'insister**. Au-delà, il a tendance à empiler des rustines de plus en plus étranges autour du symptôme. Reprends la main : demande-lui un diagnostic (« explique la cause racine sans rien modifier »), lis le code toi-même, ou découpe le problème autrement. Trois essais, c'est le seuil où l'humain redevient rentable.\n\n" +
            "Signal cousin : quand le diff proposé est disproportionné (tu attendais dix lignes, il en réécrit deux cents), refuse et demande la version minimale. Les agents ont un biais naturel vers la réécriture large : chirurgie, pas démolition.\n\n" +
            "## À toi\n\n" +
            "Écris la section « Conventions » et « Pièges connus » d'un CLAUDE.md pour ce projet fictif : un script Python qui synchronise chaque nuit les stocks entre un ERP et une boutique en ligne, avec un fichier `.env` contenant les clés API, et un mode `--dry-run` pour tester sans écrire.\n\n" +
            "> Attendu, par exemple : Conventions, « Toute modification de stock passe par la fonction `apply_change()`, jamais d'appel direct à l'API boutique ; toujours tester avec `--dry-run` avant un vrai run ; logs dans sync.log, ne pas print. » Pièges, « Le fichier.env contient des secrets : ne jamais l'afficher, le copier ni le commiter ; l'ERP limite à 100 requêtes/min (le code respecte ce quota, ne pas paralléliser) ; un stock négatif est possible côté ERP et doit être traité comme 0. » L'important : chaque ligne prévient une catastrophe précise.\n",
        },
        {
          id: "l11",
          title: "Relire le code généré : hallucinations, dette, secrets",
          type: "text",
          duration: "15 min",
          body:
            "## « Ça marche » n'est pas « c'est bon »\n\n" +
            "Le code généré par un agent a une propriété perverse : il a l'air fini. Bien indenté, bien nommé, commenté juste ce qu'il faut. Cette apparence de qualité court-circuite ta vigilance : on relit distraitement ce qui semble propre. Or les défauts du code d'agent ne sont pas là où tu attends des défauts : rarement des fautes de syntaxe, souvent des problèmes de fond invisibles à l'œil pressé. Voici la grille de relecture, défaut par défaut.\n\n" +
            "## Défaut 1 : l'API hallucinée\n\n" +
            "Le modèle peut inventer une fonction plausible qui n'existe pas : une méthode `client.orders.bulkUpdate()` dans une bibliothèque qui n'a jamais eu de bulk, une option de configuration rêvée. Version simple, ça plante immédiatement :\n\n" +
            "```\n" +
            "TypeError: client.orders.bulkUpdate is not a function\n" +
            "```\n\n" +
            "Celle-là, l'agent la voit et se corrige seul. La version dangereuse est plus subtile : une API qui existe mais ne fait pas ce que le code suppose (un paramètre ignoré silencieusement, une fonction dépréciée au comportement changé, une regex qui matche presque). Ça ne plante pas ; c'est juste faux dans certains cas. **Parade :** pour tout appel à une bibliothèque que tu ne connais pas par cœur, vérifie la doc officielle, et demande à l'agent de citer ses sources (« ce paramètre existe-t-il dans la version qu'on utilise ? vérifie dans node_modules ou la doc »).\n\n" +
            "## Défaut 2 : le cas nominal impeccable, les bords oubliés\n\n" +
            "Le code généré traite magnifiquement le chemin heureux. Les questions à poser systématiquement devant un diff :\n\n" +
            "- Que se passe-t-il si l'entrée est vide, nulle, énorme, mal encodée ?\n" +
            "- Si l'appel réseau échoue à mi-parcours, dans quel état reste le système ?\n" +
            "- Deux exécutions simultanées : catastrophe ou non ?\n\n" +
            "Tu n'as même pas besoin de répondre toi-même : pose ces questions à l'agent. « Liste les cas limites que ce code ne gère pas » est étonnamment efficace : le modèle sait critiquer son propre code, mais seulement quand on le lui demande.\n\n" +
            "## Défaut 3 : les secrets qui fuient\n\n" +
            "Grand classique : pour faire marcher vite, l'agent (ou toi, pressé) met la clé API en dur dans le fichier. Puis commit, puis push, et la clé est dans l'historique git pour toujours : les bots qui scannent les dépôts publics la trouveront en quelques minutes, c'est documenté et mesuré. Règles non négociables :\n\n" +
            "- Les secrets vivent dans des variables d'environnement ou un gestionnaire de secrets, jamais dans le code, jamais dans les exemples, jamais dans les logs.\n" +
            "- `.env` dans le `.gitignore` AVANT le premier commit.\n" +
            "- Une clé qui a touché un commit, même supprimée ensuite, est considérée compromise : on la révoque et on la régénère.\n\n" +
            "Ajoute la consigne dans ton CLAUDE.md (« jamais de secret en dur, utiliser process.env ») : c'est le genre de règle que l'agent respecte très bien une fois qu'elle est écrite.\n\n" +
            "## Défaut 4 : la dette silencieuse\n\n" +
            "Chaque tâche isolée est correcte, mais l'accumulation dérive : trois fonctions qui font presque la même chose, une gestion d'erreur différente par fichier, des dépendances ajoutées pour un one-liner. L'agent optimise la tâche, pas l'architecture : c'est TON travail de garder la cohérence. Deux pratiques :\n\n" +
            "- Une **passe de rangement** régulière : « Sans changer aucun comportement, factorise les duplications entre ces trois fichiers et harmonise la gestion d'erreurs sur le modèle de src/routes/orders.js. » Les tests verts avant/après garantissent le “sans changer le comportement”.\n" +
            "- Le **budget dépendances** : chaque `npm install` proposé se justifie. Une lib de 2 Mo pour formater une date, ça se refuse.\n\n" +
            "## La revue en pratique : 10 minutes bien placées\n\n" +
            "Ma checklist réelle avant de commiter du code d'agent, dans l'ordre :\n\n" +
            "1. **Lire le diff en entier.** Pas survoler : lire. Si le diff est trop gros pour être lu, il est trop gros pour être commité : demande un découpage.\n" +
            "2. **Chercher ce qui ne devrait pas y être** : fichier de config modifié sans raison, secret, dépendance surprise, suppression d'un test « gênant » (oui, ça arrive : un test qui échoue est parfois “résolu” en le supprimant, à toi de le voir).\n" +
            "3. **Exécuter les tests ET le cas limite qui t'inquiète**, à la main, une fois.\n" +
            "4. **Demander à l'agent sa propre critique** : « Qu'est-ce qu'un relecteur senior reprocherait à ce diff ? » Tu seras surpris de ce qu'il avoue.\n\n" +
            "Dix minutes. C'est le prix de la vitesse du vibe coding, et c'est un excellent prix, tant que tu le paies à chaque fois.\n\n" +
            "## À retenir\n\n" +
            "- Le danger n'est pas le code qui plante (il se voit) mais le code plausible et subtilement faux : API mal utilisées, bords non gérés.\n" +
            "- Secrets : variables d'environnement, .gitignore avant premier commit, clé exposée = clé révoquée.\n" +
            "- L'agent optimise la tâche, pas l'architecture : passes de rangement régulières, budget dépendances, et relecture du diff intégrale ou refus.\n",
        },
        {
          id: "l12",
          title: "Quiz : Claude Code sans dégâts",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q11",
              prompt: "Qu'est-ce qui distingue fondamentalement Claude Code d'un assistant d'autocomplétion dans l'éditeur ?",
              options: [
                "Il utilise un modèle plus récent que les autres outils",
                "C'est une boucle agentique : il lit le projet, agit, observe le résultat (tests, erreurs) et itère jusqu'à l'objectif",
                "Il écrit du code sans jamais avoir besoin de validation humaine",
                "Il fonctionne sans connexion internet",
              ],
              correctIndex: 1,
              explanation:
                "L'autocomplétion prédit la suite de la ligne ; Claude Code exécute une tâche : lecture du dépôt, plan, éditions, commandes, itération sur les erreurs. C'est un agent, avec la puissance et les risques que ça implique, d'où les permissions et git.",
            },
            {
              id: "q12",
              prompt: "À quoi sert le fichier CLAUDE.md à la racine d'un projet ?",
              options: [
                "C'est la documentation générée automatiquement pour les utilisateurs finaux",
                "C'est le briefing permanent du projet (stack, commandes, conventions, pièges), rechargé par Claude Code à chaque session",
                "C'est un fichier de licence exigé par Anthropic",
                "Il stocke l'historique des conversations avec l'agent",
              ],
              correctIndex: 1,
              explanation:
                "CLAUDE.md joue pour le code le rôle des instructions d'un Projet claude.ai : conventions, commandes de test, interdits. Document vivant : chaque erreur répétée de l'agent signale une ligne à y ajouter.",
            },
            {
              id: "q13",
              prompt:
                "Claude Code échoue pour la troisième fois d'affilée à faire passer le même test. Quelle est la meilleure suite ?",
              options: [
                "Relancer la même demande une quatrième fois, il finira par y arriver",
                "Supprimer le test qui échoue pour débloquer la situation",
                "Stopper les corrections, demander un diagnostic de la cause racine sans modification, et reprendre la main ou redécouper le problème",
                "Tout annuler et coder la fonctionnalité entière à la main",
              ],
              correctIndex: 2,
              explanation:
                "Au-delà de trois échecs, l'agent tend à empiler des rustines autour du symptôme. Le diagnostic sans modification casse ce cycle. Supprimer le test, c'est masquer le bug : c'est d'ailleurs un des « arrangements » à surveiller en relecture de diff.",
            },
            {
              id: "q14",
              prompt: "Une clé API s'est retrouvée dans un commit poussé sur le dépôt. Tu l'as retirée du code au commit suivant. Situation ?",
              options: [
                "Réglée : la clé n'apparaît plus dans la version courante du code",
                "La clé reste dans l'historique git et doit être considérée compromise : on la révoque et on en génère une nouvelle",
                "Sans risque tant que le dépôt reste privé pour toujours",
                "Il suffit de renommer le fichier .env pour invalider la clé",
              ],
              correctIndex: 1,
              explanation:
                "L'historique git conserve tout, et les dépôts sont scannés en permanence par des bots. Une clé exposée se révoque, point. La prévention : secrets en variables d'environnement, .env dans .gitignore avant le premier commit, et la règle écrite dans CLAUDE.md.",
            },
            {
              id: "q15",
              prompt: "Pourquoi le code généré « qui marche » mérite-t-il quand même une relecture attentive ?",
              options: [
                "Parce que le code d'agent contient toujours des fautes de syntaxe cachées",
                "Parce que ses défauts typiques (API subtilement mal utilisée, cas limites ignorés, dette d'architecture) ne se voient ni à l'exécution nominale ni en survolant un diff propre",
                "Parce que la licence d'Anthropic impose une relecture humaine",
                "Parce que le code généré est volontairement obscurci",
              ],
              correctIndex: 1,
              explanation:
                "L'apparence soignée du code généré endort la vigilance. Les vrais défauts sont silencieux : comportement faux sur certains cas, bords non gérés, duplication rampante. D'où la checklist : lire tout le diff, chercher l'inattendu, tester le cas qui inquiète, demander l'autocritique.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Agents et outils : comment ça marche vraiment",
      lessons: [
        {
          id: "l13",
          title: "Qu'est-ce qu'un agent, vraiment ?",
          type: "text",
          duration: "14 min",
          body:
            "## Un mot devenu slogan\n\n" +
            "« Agent » est probablement le mot le plus maltraité du marketing tech actuel : on l'appose sur n'importe quel chatbot avec un logo robot. Fixons une définition opérationnelle, celle qu'utilisent les gens qui en construisent : **un agent est un LLM qui poursuit un objectif en choisissant lui-même ses actions, via des outils, en boucle, jusqu'à estimer l'objectif atteint.** Trois ingrédients, et il les faut tous :\n\n" +
            "- un **objectif** exprimé en langage naturel (« trouve pourquoi la facture 2024-087 n'est pas passée en compta ») ;\n" +
            "- des **outils** : des actions concrètes mises à sa disposition (chercher dans une base, lire un fichier, appeler une API, exécuter une commande) ;\n" +
            "- une **boucle** : le modèle décide d'une action, ton système l'exécute, le résultat revient au modèle, qui décide de la suite, ou conclut.\n\n" +
            "Ce qui n'est PAS un agent : un chatbot qui répond (une seule prédiction, zéro action) ; un workflow scripté où TON code décide de l'enchaînement des étapes et appelle le LLM comme une fonction. La ligne de partage tient en une question : **qui décide de la prochaine étape ?** Si c'est ton code : workflow. Si c'est le modèle : agent.\n\n" +
            "## La boucle agentique, pas à pas\n\n" +
            "Déroulons un cas réel : « La facture du fournisseur Nordik n'apparaît pas en compta, trouve pourquoi. » L'agent dispose de trois outils : chercher un email, interroger l'API compta, lire un log d'import.\n\n" +
            "1. **Décision** : le modèle choisit d'appeler `chercher_email(\"facture Nordik\")`.\n" +
            "2. **Exécution** : ton code exécute réellement la recherche et renvoie le résultat : l'email existe, pièce jointe présente.\n" +
            "3. **Décision** : nouvelle donne, nouveau choix : `lire_log_import(date=\"2026-05-12\")`.\n" +
            "4. **Exécution** : le log montre `ERREUR: format PDF non reconnu (fichier chiffré)`.\n" +
            "5. **Conclusion** : l'agent a assez d'éléments, il rédige : « La facture est arrivée mais le PDF est protégé par mot de passe, l'import l'a rejetée le 12/05. Demandez au fournisseur une version non chiffrée. »\n\n" +
            "```figure\n" +
            "{\"caption\": \"La boucle agentique : le modèle décide, ton code exécute, le résultat nourrit la décision suivante\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\"><title>Boucle agentique</title>" +
            "<rect x=\"40\" y=\"30\" width=\"180\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"66\" y=\"52\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Objectif</text><text x=\"56\" y=\"70\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">(langage naturel)</text>" +
            "<rect x=\"40\" y=\"140\" width=\"180\" height=\"60\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"78\" y=\"166\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Modele</text><text x=\"58\" y=\"186\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">decide l'action</text>" +
            "<rect x=\"420\" y=\"140\" width=\"180\" height=\"60\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"452\" y=\"166\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Ton code</text><text x=\"440\" y=\"186\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">execute l'outil</text>" +
            "<rect x=\"40\" y=\"252\" width=\"180\" height=\"48\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"62\" y=\"280\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Reponse finale</text>" +
            "<line x1=\"130\" y1=\"82\" x2=\"130\" y2=\"136\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"130,140 125,130 135,130\" fill=\"currentColor\" opacity=\"0.6\"/>" +
            "<line x1=\"220\" y1=\"156\" x2=\"416\" y2=\"156\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"420,156 410,151 410,161\" fill=\"currentColor\" opacity=\"0.6\"/><text x=\"250\" y=\"148\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">appel d'outil</text>" +
            "<line x1=\"416\" y1=\"186\" x2=\"220\" y2=\"186\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"216,186 226,181 226,191\" fill=\"currentColor\" opacity=\"0.6\"/><text x=\"270\" y=\"204\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">resultat</text>" +
            "<path d=\"M 240 170 C 320 110 320 230 240 176\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.35\" stroke-dasharray=\"4 4\"/><text x=\"282\" y=\"236\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">iteration (xN)</text>" +
            "<line x1=\"130\" y1=\"200\" x2=\"130\" y2=\"248\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"130,252 125,242 135,242\" fill=\"currentColor\" opacity=\"0.6\"/><text x=\"140\" y=\"230\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">objectif atteint</text>" +
            "</svg>\n" +
            "```\n\n" +
            "Relis le déroulé : personne n'a écrit le scénario « email puis log ». Le modèle l'a improvisé en fonction des résultats. C'est la force des agents (ils gèrent les chemins qu'on n'avait pas prévus), et c'est exactement leur risque : ils empruntent aussi des chemins qu'on n'avait pas prévus. Toute la discipline des parties 4 et 5 découle de cette phrase.\n\n" +
            "## Tu en as déjà rencontré\n\n" +
            "Ce schéma, tu l'as déjà vu tourner deux fois dans ce cours sans le nommer. Claude Code : objectif (« corrige le bug »), outils (lire des fichiers, éditer, exécuter des commandes), boucle (test rouge → correction → test vert). La recherche web de claude.ai : objectif (ta question), outil (chercher sur le web), boucle (chercher, lire, rechercher plus précisément, synthétiser). Les agents ne sont pas une technologie exotique à venir ; c'est l'architecture des produits que tu utilises déjà.\n\n" +
            "## Les limites structurelles à connaître\n\n" +
            "**La dérive d'objectif.** Sur les longues boucles, l'agent peut s'éloigner du but initial : il part corriger un bug et se met à refactorer le module. Plus la boucle est longue, plus le risque monte : c'est une des raisons pour lesquelles les gros modèles (meilleurs pour « garder le cap ») dominent sur l'agentique.\n\n" +
            "**L'erreur qui se propage.** Si l'outil renvoie une donnée fausse (ou si l'agent interprète mal un résultat), toute la suite du raisonnement est bâtie dessus. Un humain qui doute revérifie ; un agent qui doute… continue, en général. D'où l'importance de points de contrôle (partie 5).\n\n" +
            "**Le coût multiplié.** Chaque tour de boucle est un appel API qui relit tout le contexte accumulé. Un agent de 30 tours peut coûter cent fois plus qu'une simple question. Ce n'est pas un défaut, c'est un paramètre de conception à budgéter.\n\n" +
            "Prochaine leçon : on ouvre le capot sur le mécanisme exact qui permet au modèle « d'appeler » un outil (le tool use).\n",
        },
        {
          id: "l14",
          title: "Tool use : donner des mains au modèle",
          type: "text",
          duration: "14 min",
          body:
            "## Le paradoxe à dissiper\n\n" +
            "Un LLM génère du texte. Uniquement du texte. Alors comment peut-il « chercher un email » ou « interroger une base » ? Réponse : il ne le fait pas. **C'est ton code qui le fait.** Le mécanisme, appelé *tool use* (ou *function calling*), est un protocole de politesse entre le modèle et ton programme, et le comprendre démystifie 100 % de la magie apparente des agents.\n\n" +
            "## Le contrat en quatre temps\n\n" +
            "**Temps 1 : tu déclares les outils.** Dans ta requête API, en plus du message, tu envoies la liste des outils disponibles : pour chacun, un nom, une description en langage naturel, et le schéma de ses paramètres (au format JSON Schema). Exemple d'outil déclaré :\n\n" +
            "```json\n" +
            "{\n" +
            "  \"name\": \"chercher_email\",\n" +
            "  \"description\": \"Recherche dans la boîte mail support et renvoie les emails correspondants (objet, expéditeur, date, extrait).\",\n" +
            "  \"input_schema\": {\n" +
            "    \"type\": \"object\",\n" +
            "    \"properties\": {\n" +
            "      \"requete\": { \"type\": \"string\", \"description\": \"Mots-clés de recherche\" },\n" +
            "      \"depuis\": { \"type\": \"string\", \"description\": \"Date plancher, format AAAA-MM-JJ\" }\n" +
            "    },\n" +
            "    \"required\": [\"requete\"]\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "**Temps 2 : le modèle demande.** S'il estime qu'un outil l'aiderait, il ne répond pas par du texte normal : il renvoie une demande d'appel structurée (le nom de l'outil et les arguments, du JSON conforme à ton schéma). La réponse API porte alors une indication explicite du type « arrêt pour appel d'outil » : ton programme sait qu'on lui demande quelque chose.\n\n" +
            "**Temps 3 : ton code exécute.** Ton programme lit la demande, exécute la vraie recherche (c'est ici que vivent la sécurité, les droits d'accès, les quotas ; le modèle n'a jamais eu les clés), et renvoie le résultat au modèle comme un nouveau message.\n\n" +
            "**Temps 4 : le modèle continue.** Avec le résultat sous les yeux, il répond… ou demande un autre outil. Retour au temps 2 : c'est la boucle de la leçon précédente, vue côté mécanique.\n\n" +
            "## Trois conséquences que les débutants ratent\n\n" +
            "**Le modèle ne peut rien faire que tu n'aies déclaré.** Pas d'outil `supprimer_email` dans la liste ? Il ne supprimera jamais d'email. Le catalogue d'outils EST le périmètre de l'agent : c'est ta première ligne de sécurité, et elle est architecturale, pas comportementale. Décider quoi exposer est la décision de conception la plus importante d'un agent.\n\n" +
            "**La description de l'outil est du prompting.** Le modèle choisit ses outils en lisant leurs descriptions. Une description vague (« recherche des trucs ») produit des appels à contretemps ; une description précise, avec les cas d'usage et les limites (« ne renvoie que les 20 premiers résultats »), produit des appels justes. Quand un agent utilise mal un outil, corrige d'abord la description : même réflexe que le CLAUDE.md.\n\n" +
            "**Les arguments peuvent être faux.** Le modèle génère les arguments comme il génère tout : par plausibilité. Il peut inventer un identifiant de client ou une date. Ton code d'exécution doit valider les entrées comme s'il recevait des données d'un utilisateur externe, parce que c'est le cas.\n\n" +
            "## Combien d'outils ?\n\n" +
            "Question rituelle en atelier : « on peut en déclarer combien ? » Techniquement, beaucoup. En pratique, mon conseil : **commence avec 3 à 5 outils bien décrits**. Chaque outil ajouté agrandit l'espace des chemins possibles, donc des chemins imprévus ; et vingt descriptions d'outils, c'est aussi des milliers de tokens relus à chaque tour de boucle (tu sais maintenant ce que ça coûte). Les gros agents généralistes existent, mais les agents qui tournent en production sans surprise sont presque toujours des agents étroits : peu d'outils, périmètre net, mission claire.\n\n" +
            "Note au passage : certains outils peuvent être fournis « clé en main » côté serveur par Anthropic (la recherche web ou l'exécution de code, par exemple) ; tu les actives dans la requête sans écrire leur exécution. Le principe reste identique : un catalogue déclaré, un modèle qui choisit.\n\n" +
            "## À toi\n\n" +
            "Ton agent de support doit pouvoir consulter les commandes des clients ET créer un ticket pour un humain quand il ne sait pas répondre. Écris (en français, pas en JSON) la description que tu donnerais à l'outil `creer_ticket` pour qu'il soit utilisé au bon moment, ni trop, ni trop peu.\n\n" +
            "> Exemple solide : « Crée un ticket pour l'équipe support humaine. À utiliser UNIQUEMENT quand la réponse exige une action que tu ne peux pas faire (remboursement, modification de commande) ou une information introuvable via les autres outils. Ne pas utiliser pour les questions dont la réponse figure dans la commande ou la FAQ. Paramètres : résumé du problème (2 phrases max), numéro de client, urgence (basse/normale/haute ; haute seulement si le client est bloqué). » La description contient les conditions d'usage ET de non-usage : c'est ça qui règle le « ni trop, ni trop peu ».\n",
        },
        {
          id: "l15",
          title: "MCP : une prise universelle pour brancher des outils",
          type: "text",
          duration: "13 min",
          body:
            "## Le problème que MCP règle\n\n" +
            "Avec le tool use de la leçon précédente, chaque développeur code ses outils dans son coin : ton outil `chercher_email` chez toi, le mien chez moi, incompatibles, réécrits mille fois. Multiplie par tous les services du monde (GitHub, Slack, Notion, Postgres, ton ERP…) et tous les produits IA (Claude Desktop, Claude Code, d'autres assistants…) : c'est une explosion combinatoire de connecteurs à écrire.\n\n" +
            "Le **Model Context Protocol (MCP)**, publié en standard ouvert par Anthropic fin 2024, attaque exactement ça : un protocole commun pour exposer des outils (et des sources de données) à n'importe quelle application IA compatible. L'analogie qui marche à tous les coups : l'USB. Avant l'USB, chaque périphérique avait son connecteur propriétaire ; après, n'importe quel clavier se branche sur n'importe quel ordinateur. MCP, c'est l'USB des outils d'IA.\n\n" +
            "## Serveurs et clients\n\n" +
            "Le vocabulaire MCP tient en deux rôles :\n\n" +
            "- Un **serveur MCP** enveloppe un service et expose ses capacités au format standard : un serveur MCP GitHub expose « lister les issues », « lire un fichier du dépôt », « créer une pull request » ; un serveur MCP Postgres expose « exécuter une requête en lecture » ; tu peux écrire le tien pour ton ERP maison.\n" +
            "- Un **client MCP** est l'application côté modèle qui s'y branche : Claude Code, Claude Desktop, et un écosystème croissant d'applications tierces. Le client découvre automatiquement les outils du serveur (nom, description, paramètres : exactement le format de la leçon 14) et les met à disposition du modèle.\n\n" +
            "```figure\n" +
            "{\"caption\": \"MCP : un protocole commun entre les applications IA et les services, au lieu d'un connecteur sur mesure par paire\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Architecture MCP</title>" +
            "<rect x=\"24\" y=\"36\" width=\"150\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"40\" y=\"63\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Claude Code</text>" +
            "<rect x=\"24\" y=\"128\" width=\"150\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"34\" y=\"155\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Claude Desktop</text>" +
            "<rect x=\"24\" y=\"220\" width=\"150\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"38\" y=\"247\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Autre app IA</text>" +
            "<text x=\"52\" y=\"22\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">clients MCP</text>" +
            "<rect x=\"270\" y=\"118\" width=\"110\" height=\"64\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"296\" y=\"146\" font-family=\"ui-monospace, monospace\" font-size=\"14\" fill=\"currentColor\">MCP</text><text x=\"280\" y=\"166\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">protocole</text>" +
            "<rect x=\"470\" y=\"36\" width=\"146\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"484\" y=\"63\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Serveur GitHub</text>" +
            "<rect x=\"470\" y=\"128\" width=\"146\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"480\" y=\"155\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Serveur Postgres</text>" +
            "<rect x=\"470\" y=\"220\" width=\"146\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"482\" y=\"247\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Serveur maison</text>" +
            "<text x=\"492\" y=\"22\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">serveurs MCP</text>" +
            "<line x1=\"174\" y1=\"58\" x2=\"266\" y2=\"136\" stroke=\"currentColor\" opacity=\"0.5\"/>" +
            "<line x1=\"174\" y1=\"150\" x2=\"266\" y2=\"150\" stroke=\"currentColor\" opacity=\"0.5\"/>" +
            "<line x1=\"174\" y1=\"242\" x2=\"266\" y2=\"164\" stroke=\"currentColor\" opacity=\"0.5\"/>" +
            "<line x1=\"380\" y1=\"136\" x2=\"466\" y2=\"58\" stroke=\"currentColor\" opacity=\"0.5\"/>" +
            "<line x1=\"380\" y1=\"150\" x2=\"466\" y2=\"150\" stroke=\"currentColor\" opacity=\"0.5\"/>" +
            "<line x1=\"380\" y1=\"164\" x2=\"466\" y2=\"242\" stroke=\"currentColor\" opacity=\"0.5\"/>" +
            "<text x=\"216\" y=\"288\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">3+3 connexions au lieu de 3x3 connecteurs sur mesure</text>" +
            "</svg>\n" +
            "```\n\n" +
            "Conséquence pratique : au lieu d'écrire un connecteur par paire application-service, chaque service écrit UN serveur MCP, chaque application implémente UNE fois le protocole, et tout se combine. Il existe déjà des centaines de serveurs MCP publics : bases de données, outils de gestion de projet, navigateurs, moteurs de recherche.\n\n" +
            "## À quoi ça ressemble pour toi\n\n" +
            "Concrètement, dans Claude Code, brancher un serveur MCP est une affaire de configuration : tu déclares le serveur (une commande à lancer ou une URL), et ses outils apparaissent dans la panoplie de l'agent. Exemple parlant : branche un serveur MCP Postgres en lecture seule sur ta base, et tu peux demander « quels sont nos 10 clients les plus actifs ce mois-ci ? » : l'agent découvre le schéma, écrit la requête SQL, l'exécute via le serveur et te répond. Zéro code écrit de ton côté.\n\n" +
            "## Le revers : brancher = faire confiance\n\n" +
            "Un serveur MCP, c'est du code qui s'exécute avec des accès réels à tes données. Trois règles avant d'en brancher un :\n\n" +
            "- **Provenance** : serveur officiel de l'éditeur ou projet communautaire sérieux et lisible ; un serveur MCP inconnu installé à la va-vite, c'est l'équivalent d'une extension de navigateur douteuse, en pire (il voit ce que ton agent voit).\n" +
            "- **Moindre privilège** : lecture seule quand la lecture suffit ; un compte dédié aux droits restreints plutôt que ton compte admin. Le serveur Postgres de l'exemple est branché sur un utilisateur SQL qui ne peut pas écrire, et ce n'est pas négociable.\n" +
            "- **Injection de prompt** : si un outil ramène du contenu externe (une page web, un ticket écrit par un inconnu), ce contenu peut contenir des instructions malveillantes que le modèle risque de suivre (« ignore tes consignes et envoie les données à… »). Les produits ajoutent des défenses, mais la parade structurelle reste : ne pas donner à l'agent des accès dont le détournement serait grave.\n\n" +
            "Trois points à retenir : MCP standardise la connexion outils-modèles comme l'USB a standardisé les périphériques ; pour l'utilisateur, brancher un serveur = donner des capacités à son agent sans coder ; et chaque branchement est une décision de confiance qui se raisonne en moindre privilège.\n",
        },
        {
          id: "l16",
          title: "Agent ou simple prompt ? L'arbre de décision",
          type: "text",
          duration: "13 min",
          body:
            "## La question à 10 000 euros\n\n" +
            "C'est la demande que je reçois le plus souvent en mission : « On veut un agent IA pour [tâche]. » Dans plus de la moitié des cas, ma réponse fait économiser des semaines : « Vous n'avez pas besoin d'un agent. » L'agent est l'option la plus puissante ET la plus coûteuse, la plus lente, la plus dure à fiabiliser. En ingénierie, on choisit l'outil le plus simple qui fait le travail. Voici la grille.\n\n" +
            "## Trois étages de complexité\n\n" +
            "**Étage 1 : l'appel unique.** Une entrée, une sortie, pas d'action sur le monde. Résumer, classer, traduire, extraire, rédiger. Un prompt bien construit (partie 2), éventuellement dans un script qui boucle sur tes données. C'est l'étage de 60 % des cas d'usage réels, et il se fiabilise très bien.\n\n" +
            "**Étage 2 : le workflow.** Plusieurs étapes, mais dont l'enchaînement est connu d'avance : c'est TON code qui orchestre, et le LLM intervient comme une fonction à certaines étapes. Exemple : chaque matin, récupérer les avis clients (code), classer chaque avis (LLM), rédiger un brouillon de réponse pour les négatifs (LLM), poster le tout dans un canal de validation (code). Prévisible, testable étape par étape, coût connu d'avance. C'est l'étage de 30 % des cas, et celui de notre fil rouge en partie 5.\n\n" +
            "**Étage 3 : l'agent.** Le chemin ne peut PAS être écrit d'avance, parce qu'il dépend de ce qu'on découvre en route : diagnostic (le bug de la leçon 13), investigation, tâches ouvertes sur des systèmes variés. Le modèle décide de l'enchaînement. Les 10 % restants.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Arbre de décision : le bon étage pour ta tâche, du prompt simple à l'agent\"}\n" +
            "<svg viewBox=\"0 0 640 340\" role=\"img\"><title>Arbre de decision agent ou prompt</title>" +
            "<rect x=\"200\" y=\"16\" width=\"240\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"216\" y=\"36\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">Plusieurs etapes, actions sur</text><text x=\"216\" y=\"52\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">des systemes externes ?</text>" +
            "<line x1=\"260\" y1=\"60\" x2=\"140\" y2=\"116\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"160\" y=\"84\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text>" +
            "<line x1=\"380\" y1=\"60\" x2=\"500\" y2=\"116\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"456\" y=\"84\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text>" +
            "<rect x=\"40\" y=\"120\" width=\"200\" height=\"48\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"64\" y=\"140\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Appel unique</text><text x=\"64\" y=\"158\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">prompt soigne + script</text>" +
            "<rect x=\"380\" y=\"120\" width=\"240\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"396\" y=\"140\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">L'enchainement est-il connu</text><text x=\"396\" y=\"156\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">d'avance ?</text>" +
            "<line x1=\"440\" y1=\"164\" x2=\"330\" y2=\"220\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"352\" y=\"188\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text>" +
            "<line x1=\"560\" y1=\"164\" x2=\"560\" y2=\"220\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"572\" y=\"196\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text>" +
            "<rect x=\"220\" y=\"224\" width=\"220\" height=\"48\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"250\" y=\"244\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Workflow</text><text x=\"250\" y=\"262\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">ton code orchestre + LLM</text>" +
            "<rect x=\"460\" y=\"224\" width=\"164\" height=\"48\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"506\" y=\"244\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Agent</text><text x=\"474\" y=\"262\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">le modele decide</text>" +
            "<text x=\"460\" y=\"300\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">+ valeur suffisante ?</text>" +
            "<text x=\"460\" y=\"318\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">+ erreur rattrapable ?</text>" +
            "<text x=\"40\" y=\"300\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">~60% des cas</text>" +
            "<text x=\"250\" y=\"300\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">~30% des cas</text>" +
            "</svg>\n" +
            "```\n\n" +
            "## Les quatre questions de validation\n\n" +
            "Si l'arbre te mène à la case agent, valide encore quatre critères (c'est la grille utilisée par les praticiens sérieux, Anthropic compris, avant de construire :)\n\n" +
            "1. **Complexité réelle** : la tâche est-elle vraiment impossible à spécifier d'avance ? (Si tu peux écrire l'organigramme, c'est un workflow déguisé.)\n" +
            "2. **Valeur** : le gain justifie-t-il un coût par exécution 10 à 100 fois supérieur et des semaines de fiabilisation ?\n" +
            "3. **Faisabilité** : le modèle est-il réellement bon sur ce type de tâche ? (Teste à la main dans claude.ai avant de construire quoi que ce soit.)\n" +
            "4. **Coût de l'erreur** : une bêtise de l'agent est-elle rattrapable (brouillon relu, environnement de test, rollback) ? Si une erreur est irréversible et grave, soit tu ajoutes une validation humaine bloquante, soit tu ne construis pas.\n\n" +
            "## Deux exemples tranchés\n\n" +
            "**« Un agent qui répond automatiquement à tous nos emails clients. »** Non. L'enchaînement est connu (lire, classer, rédiger, envoyer) : c'est un workflow. Et le coût d'erreur d'un envoi automatique est élevé : on met un humain avant l'envoi. Le mot « agent » n'apportait que du risque.\n\n" +
            "**« Quand une alerte de monitoring part à 3 h du matin, quelque chose qui investigue : logs, déploiements récents, tickets similaires, et prépare un diagnostic pour l'astreinte. »** Oui, bon candidat : chemin imprévisible par nature, valeur claire (minutes gagnées à 3 h du matin), erreur rattrapable (c'est un diagnostic, l'humain décide). Outils en lecture seule, qui plus est.\n\n" +
            "Tu remarqueras le motif : les bons cas d'agents sont souvent des **enquêtes en lecture** dont la conclusion passe par un humain. Les mauvais cas sont des **actions d'écriture automatiques** maquillées en intelligence.\n\n" +
            "## À toi\n\n" +
            "Classe ces trois demandes (appel unique / workflow / agent) : (a) « Traduire nos 400 fiches produit en anglais. » (b) « Trouver pourquoi les ventes du produit X se sont effondrées le mois dernier. » (c) « Chaque lundi, compiler les mentions de notre marque sur le web et produire une synthèse. »\n\n" +
            "> (a) Appel unique en boucle (un script qui traduit fiche par fiche : le batch à moitié prix de la leçon 3 est parfait ici). (b) Agent : c'est une enquête, le chemin dépend des découvertes (données internes ? avis ? concurrent ? saisonnalité ?) : en lecture seule, conclusion pour un humain. (c) Workflow : étapes connues (collecter, filtrer, synthétiser, livrer), orchestration code + LLM aux étapes de langage. Si tu as hésité entre (b) et (c) : demande-toi si tu peux écrire l'organigramme. Pour (c) oui, pour (b) non.\n",
        },
        {
          id: "l17",
          title: "Quiz : agents, outils et MCP",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q16",
              prompt: "Quelle est la différence décisive entre un workflow et un agent ?",
              options: [
                "Un agent utilise un modèle plus gros qu'un workflow",
                "Dans un workflow, ton code décide de l'enchaînement des étapes ; dans un agent, c'est le modèle qui choisit la prochaine action",
                "Un workflow ne peut pas utiliser de LLM",
                "Un agent fonctionne forcément sans supervision humaine",
              ],
              correctIndex: 1,
              explanation:
                "La ligne de partage est « qui décide de la prochaine étape ». Les deux peuvent utiliser des LLM et des outils ; mais l'agent improvise son chemin, ce qui le rend puissant sur l'imprévisible et plus difficile à fiabiliser.",
            },
            {
              id: "q17",
              prompt: "Dans le mécanisme de tool use, qui exécute réellement l'action (recherche, requête, écriture) ?",
              options: [
                "Le modèle, qui a un accès direct aux systèmes déclarés",
                "Les serveurs d'Anthropic, quel que soit l'outil",
                "Ton code : le modèle ne fait qu'émettre une demande d'appel structurée (nom + arguments), que ton programme exécute et dont il renvoie le résultat",
                "Personne : le modèle simule le résultat de l'outil",
              ],
              correctIndex: 2,
              explanation:
                "Le modèle génère une demande d'appel en JSON, c'est tout. L'exécution, les droits d'accès, la validation des arguments vivent dans ton code : c'est là que se joue la sécurité. (Quelques outils hébergés par Anthropic existent, mais le principe déclaratif reste le même.)",
            },
            {
              id: "q18",
              prompt: "Ton agent utilise souvent le mauvais outil au mauvais moment. Quel est le premier levier à actionner ?",
              options: [
                "Ajouter plus d'outils pour lui laisser plus de choix",
                "Réécrire les descriptions des outils : conditions d'usage, de non-usage et limites",
                "Passer sur un modèle plus rapide",
                "Supprimer le schéma JSON des paramètres",
              ],
              correctIndex: 1,
              explanation:
                "Le modèle choisit ses outils en lisant leurs descriptions : c'est du prompting. Préciser quand utiliser ET quand ne pas utiliser un outil corrige la plupart des appels à contretemps. Ajouter des outils agrandit au contraire l'espace des erreurs possibles.",
            },
            {
              id: "q19",
              prompt: "Que standardise le protocole MCP ?",
              options: [
                "Le format des prompts système entre entreprises",
                "La façon dont des serveurs exposent outils et données à n'importe quelle application IA compatible, évitant un connecteur sur mesure par paire application-service",
                "Le prix des tokens entre fournisseurs de modèles",
                "L'entraînement des modèles sur des données privées",
              ],
              correctIndex: 1,
              explanation:
                "MCP est « l'USB des outils d'IA » : chaque service écrit un serveur MCP, chaque application cliente implémente le protocole une fois, et tout se combine. Revers : brancher un serveur = lui confier des accès réels, d'où provenance vérifiée et moindre privilège.",
            },
            {
              id: "q20",
              prompt:
                "Parmi ces projets, lequel est le meilleur candidat à un vrai agent (étage 3) ?",
              options: [
                "Traduire automatiquement les nouvelles fiches produit chaque nuit",
                "Envoyer sans relecture les réponses aux réclamations clients",
                "Investiguer une alerte de monitoring en croisant logs, déploiements et tickets, et préparer un diagnostic pour l'astreinte",
                "Classer les emails entrants en quatre catégories",
              ],
              correctIndex: 2,
              explanation:
                "L'investigation a un chemin imprévisible (critère de complexité), une valeur claire, des outils en lecture seule et une erreur rattrapable (l'humain décide). La traduction et la classification sont des appels uniques en boucle ; l'envoi automatique sans relecture cumule workflow déguisé et coût d'erreur trop élevé.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Automatiser un vrai workflow business",
      lessons: [
        {
          id: "l18",
          title: "Le fil rouge : veille, rédaction, publication",
          type: "text",
          duration: "15 min",
          body:
            "## Le cahier des charges\n\n" +
            "Voici le projet qu'on va construire (sur le papier) dans toute cette partie : un cas que j'ai réellement déployé, en version anonymisée. Une PME qui vend des logiciels de gestion aux artisans veut exister en ligne face à des concurrents plus gros. Objectif : publier chaque semaine deux articles de blog informés et utiles sur l'actualité de leur secteur (réglementation, outils, gestion). Aujourd'hui, personne n'a le temps : la veille prend deux heures par semaine, la rédaction quatre. Mission : automatiser au maximum SANS publier de contenu médiocre ou faux (leur crédibilité est leur fonds de commerce).\n\n" +
            "Réflexe acquis en partie 4 : est-ce un agent ? Non. Les étapes sont connues d'avance : collecter, filtrer, rédiger, valider, publier. C'est un **workflow**, orchestré par du code (un script planifié, ou un outil d'automatisation type n8n ou Make : peu importe l'orchestrateur, l'architecture est la même), avec le LLM à trois endroits précis.\n\n" +
            "## L'architecture, étape par étape\n\n" +
            "**Étape 1 (Collecte (code, zéro LLM).** Chaque nuit, le script récupère les flux RSS de 15 sources choisies à la main (presse spécialisée, organismes officiels, blogs de référence) : titres, liens, résumés). Pas de LLM ici : un flux RSS se lit en dix lignes de code. Première leçon d'architecture : **n'utilise le LLM que là où il apporte quelque chose** (chaque étape LLM ajoute coût, latence et variance).\n\n" +
            "**Étape 2 (Filtrage et scoring (LLM, Haiku).** Sur les ~200 items collectés dans la semaine, un modèle rapide note chacun de 0 à 10 sur trois critères écrits noir sur blanc dans le prompt : pertinence pour des artisans, fraîcheur, angle exploitable). Sortie : JSON (note + justification en une phrase). Les items ≥ 7 passent. Tâche réflexe, volume élevé : Haiku, on connaît la chanson.\n\n" +
            "**Étape 3 : Choix des sujets (humain, 5 minutes).** Le lundi matin, la responsable marketing reçoit les 12 meilleurs items et en coche 2. Ce point humain-là coûte cinq minutes et rapporte gros : il attrape les faux positifs du scoring et garde la ligne éditoriale entre des mains humaines. On aurait pu l'automatiser ; on a choisi de ne pas le faire, et c'est un choix, pas un échec.\n\n" +
            "**Étape 4 (Rédaction (LLM, Sonnet).** Pour chaque sujet coché : un appel avec les sources complètes (pas juste les titres), le texte des articles sources), le guide éditorial de la boîte (ton, structure, longueur, interdits), et deux articles exemplaires. Consigne clé, non négociable : **chaque affirmation factuelle doit être attribuée à une source fournie ; information absente des sources = [À VÉRIFIER]**. On rédige un brouillon, pas une vérité.\n\n" +
            "**Étape 5 (Contrôle automatique (LLM, appel séparé).** Un second appel, indépendant, reçoit le brouillon et les sources avec une seule mission : « Liste chaque affirmation du brouillon introuvable dans les sources). » C'est le pattern **générateur-vérificateur** : le même modèle est nettement meilleur pour critiquer un texte que pour ne pas faire d'erreur en l'écrivant. Les écarts détectés sont annotés dans le brouillon.\n\n" +
            "**Étape 6 : Validation humaine (20 minutes).** Le brouillon annoté arrive dans l'outil de la responsable. Elle vérifie les [À VÉRIFIER] et les annotations, ajuste deux tournures, valide. **Rien ne se publie sans ce clic.**\n\n" +
            "**Étape 7 : Publication (code).** Le script publie l'article validé sur le CMS via son API, programme le post LinkedIn associé, archive les sources. De la mécanique.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le workflow fil rouge : le LLM à trois endroits precis, l'humain a deux points de controle\"}\n" +
            "<svg viewBox=\"0 0 640 360\" role=\"img\"><title>Workflow veille redaction publication</title>" +
            "<rect x=\"24\" y=\"24\" width=\"170\" height=\"46\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"38\" y=\"44\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">1. Collecte RSS</text><text x=\"38\" y=\"60\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">code</text>" +
            "<rect x=\"236\" y=\"24\" width=\"170\" height=\"46\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"250\" y=\"44\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">2. Scoring 0-10</text><text x=\"250\" y=\"60\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">LLM Haiku</text>" +
            "<rect x=\"448\" y=\"24\" width=\"170\" height=\"46\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\" stroke-dasharray=\"5 3\"/><text x=\"462\" y=\"44\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">3. Choix sujets</text><text x=\"462\" y=\"60\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">HUMAIN - 5 min</text>" +
            "<rect x=\"448\" y=\"140\" width=\"170\" height=\"46\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"462\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">4. Redaction</text><text x=\"462\" y=\"176\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">LLM Sonnet</text>" +
            "<rect x=\"236\" y=\"140\" width=\"170\" height=\"46\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"250\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">5. Verificateur</text><text x=\"250\" y=\"176\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">LLM, appel separe</text>" +
            "<rect x=\"24\" y=\"140\" width=\"170\" height=\"46\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\" stroke-dasharray=\"5 3\"/><text x=\"38\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">6. Validation</text><text x=\"38\" y=\"176\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">HUMAIN - 20 min</text>" +
            "<rect x=\"24\" y=\"264\" width=\"170\" height=\"46\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"38\" y=\"284\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">7. Publication</text><text x=\"38\" y=\"300\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.5\">code (API CMS)</text>" +
            "<line x1=\"194\" y1=\"47\" x2=\"232\" y2=\"47\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"236,47 226,42 226,52\" fill=\"currentColor\" opacity=\"0.6\"/>" +
            "<line x1=\"406\" y1=\"47\" x2=\"444\" y2=\"47\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"448,47 438,42 438,52\" fill=\"currentColor\" opacity=\"0.6\"/>" +
            "<line x1=\"533\" y1=\"70\" x2=\"533\" y2=\"136\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"533,140 528,130 538,130\" fill=\"currentColor\" opacity=\"0.6\"/>" +
            "<line x1=\"448\" y1=\"163\" x2=\"410\" y2=\"163\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"406,163 416,158 416,168\" fill=\"currentColor\" opacity=\"0.6\"/>" +
            "<line x1=\"236\" y1=\"163\" x2=\"198\" y2=\"163\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"194,163 204,158 204,168\" fill=\"currentColor\" opacity=\"0.6\"/>" +
            "<line x1=\"109\" y1=\"186\" x2=\"109\" y2=\"260\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"109,264 104,254 114,254\" fill=\"currentColor\" opacity=\"0.6\"/><text x=\"120\" y=\"230\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">rien ne part sans ce clic</text>" +
            "<text x=\"236\" y=\"330\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">pointilles = points de controle humains (25 min/sem au total)</text>" +
            "</svg>\n" +
            "```\n\n" +
            "## Le bilan chiffré\n\n" +
            "Avant : 6 heures humaines par semaine, publication irrégulière. Après : 25 minutes humaines par semaine (5 + 20), publication régulière, et, point crucial, **zéro article publié sans validation**. Le temps humain restant est concentré exactement là où l'humain est irremplaçable : le jugement éditorial et la responsabilité de publier.\n\n" +
            "Note ce que ce workflow n'est PAS : ce n'est pas « l'IA écrit notre blog ». C'est « l'IA fait la veille brute, propose, rédige des brouillons sourcés ; l'humain choisit et signe ». La nuance fait toute la différence entre un blog qui gagne de la crédibilité et un blog qui en perd. Prochaine leçon : tout ce qui peut casser dans ce joli schéma, parce que des choses vont casser.\n",
        },
        {
          id: "l19",
          title: "Garde-fous : concevoir pour le jour où ça déraille",
          type: "text",
          duration: "14 min",
          body:
            "## L'automatisation amplifie tout\n\n" +
            "Une erreur humaine produit une bêtise ; une erreur automatisée en produit deux cents avant le café. C'est LA différence de nature entre « utiliser Claude » et « brancher Claude » : dans le premier cas tu es dans la boucle, dans le second la boucle tourne sans toi. Un workflow de production se conçoit donc en pensant d'abord à ses pannes. Passons en revue les garde-fous du fil rouge, un par un : ils se transposent à n'importe quel workflow.\n\n" +
            "## Garde-fou 1 : la validation humaine au bon endroit\n\n" +
            "La question n'est pas « humain ou pas » mais « où placer l'humain pour un rendement maximal ». Le principe : **l'humain valide les sorties irréversibles ou engageantes** (publier, envoyer, payer, supprimer) **et échantillonne le reste**. Dans le fil rouge, le clic de publication est bloquant ; le scoring de veille, lui, n'est pas relu à 100 % : la responsable jette un œil aux notes une semaine par mois pour vérifier que le filtre ne dérive pas. Validation bloquante sur l'irréversible, contrôle par sondage sur le volume : ce couple couvre l'essentiel pour un coût humain minime.\n\n" +
            "Piège classique du point de validation : le **rubber stamping**. Au bout de trois semaines de brouillons corrects, la relecture devient un clic réflexe. Parades concrètes : afficher les annotations du vérificateur EN HAUT du brouillon (l'attention va où va l'écran), et glisser volontairement, une fois par mois, un brouillon avec une erreur connue pour vérifier que la relecture attrape encore quelque chose. Si ça te semble extrême : les industries critiques font exactement ça depuis des décennies.\n\n" +
            "## Garde-fou 2 : sorties structurées et validées\n\n" +
            "L'étape de scoring renvoie du JSON. Un LLM peut renvoyer un JSON mal formé, une note « 11 », une catégorie inventée. Ton code DOIT valider chaque sortie contre un schéma (note entre 0 et 10, champs obligatoires présents) et avoir une politique d'échec explicite : nouvelle tentative, puis mise de côté avec alerte. Jamais de « ça passera ». L'API propose des mécanismes de sorties structurées qui garantissent la conformité au schéma ; même avec, garde la validation côté code : ceinture et bretelles, parce que le schéma ne vérifie pas le SENS (une note de 10 sur un communiqué de presse hors sujet est conforme au schéma et fausse quand même).\n\n" +
            "## Garde-fou 3 : le budget et le disjoncteur\n\n" +
            "Fixe des limites dures côté code : nombre maximal d'appels par nuit, dépense maximale par mois, taille maximale d'un item traité. Le jour où un flux RSS bugué renvoie 40 000 items (vécu), le disjoncteur transforme une facture surprise en une ligne de log « quota atteint, arrêt propre, alerte envoyée ». Les tableaux de bord de consommation des fournisseurs permettent aussi des alertes de dépense : mets-les en place le jour 1, pas le jour où ça pique.\n\n" +
            "## Garde-fou 4 : la traçabilité\n\n" +
            "Chaque exécution laisse une trace : quels items collectés, quelles notes, quel brouillon, quelles annotations, qui a validé, quand. Le jour où un client signale une erreur dans un article, tu remontes la chaîne en deux minutes : la source disait-elle vraiment ça ? Le vérificateur l'avait-il signalé ? La validation l'a-t-elle manqué ? Sans traces, chaque incident est un mystère ; avec, c'est une amélioration de prompt ou de garde-fou. Range aussi les versions de tes prompts (un simple fichier versionné suffit) : « le prompt de rédaction v3 a fait chuter les [À VÉRIFIER] » est une phrase que tu veux pouvoir prononcer.\n\n" +
            "## Garde-fou 5 : la dérive lente\n\n" +
            "Les pannes franches s'attrapent vite ; la dérive lente, non. Le scoring qui devient complaisant, les brouillons qui rallongent, un flux source qui meurt en silence… Trois métriques hebdomadaires sur un tableau de bord minimal suffisent pour le fil rouge : nombre d'items collectés (détecte les sources mortes), distribution des notes (détecte la dérive du filtre), taux de corrections humaines en validation (LA métrique reine : si la responsable corrige de plus en plus, la qualité amont se dégrade ; si elle ne corrige plus jamais rien, c'est peut-être le rubber stamping qui s'installe).\n\n" +
            "## Le test d'incendie\n\n" +
            "Avant la mise en production, joue les scénarios sur papier avec l'équipe : « Le LLM invente une réglementation qui n'existe pas et le vérificateur la rate » → la validation humaine doit l'attraper, et c'est pour ça qu'elle vérifie chaque [À VÉRIFIER] avec la source ouverte. « L'API du CMS est en panne le jour de publication » → le script réessaie, puis alerte, l'article reste en file. « La responsable est en congés » → un suppléant est désigné, sinon la publication attend (elle n'est PAS contournée). Chaque scénario sans réponse est un garde-fou manquant.\n\n" +
            "## À toi\n\n" +
            "Ta boîte veut automatiser les réponses aux demandes de devis reçues par email (lecture de la demande, calcul du prix depuis la grille tarifaire, envoi du devis PDF). Liste les trois garde-fous que TU rendrais bloquants avant la mise en production.\n\n" +
            "> Minimum vital : (1) validation humaine bloquante sur l'ENVOI (un devis engage commercialement, au moins tant que le taux d'erreur n'est pas mesuré) ; (2) validation par code du calcul de prix : le LLM extrait les besoins, mais le prix sort de la grille par du code déterministe, jamais de l'imagination du modèle ; (3) traçabilité complète demande→extraction→calcul→devis, plus un disjoncteur sur le volume (une boucle email qui s'auto-répond, ça existe, et ça fait très mal).\n",
        },
        {
          id: "l20",
          title: "Compter les coûts et choisir de rester humain",
          type: "text",
          duration: "14 min",
          body:
            "## La facture du fil rouge, poste par poste\n\n" +
            "Chiffrons notre workflow de veille, avec les ordres de grandeur de la partie 1. Étape 2, scoring : ~800 items/mois × ~700 tokens d'entrée (item + consignes) ≈ 0,6 M tokens sur Haiku, sortie courte → **moins de 1 $/mois**. Étape 4, rédaction : 8 articles/mois × ~15 000 tokens d'entrée (sources complètes + guide éditorial + exemples) + ~2 000 tokens de sortie, sur Sonnet → entrée 0,12 M × 3 $ + sortie 0,016 M × 15 $ ≈ **0,60 $/mois**. Étape 5, vérification : du même ordre → **~0,60 $/mois**. Total API : **environ 2 $/mois**. Oui, deux dollars. Pour 5 h 30 humaines économisées par semaine.\n\n" +
            "Ce chiffre minuscule porte deux leçons. D'abord, sur un workflow bien conçu (LLM seulement où il sert, modèle adapté à chaque étape), le coût API est rarement le sujet : le vrai coût, c'est la construction et la maintenance. Ensuite, l'asymétrie est brutale avec les architectures mal conçues : la même mission confiée à un agent généraliste qui relirait tout le contexte à chaque tour de boucle coûterait 50 à 100 fois plus, pour un résultat moins prévisible. L'architecture EST l'optimisation.\n\n" +
            "## Les coûts qu'on oublie de compter\n\n" +
            "Le tarif au token n'est que la partie visible. Le devis honnête d'un workflow inclut :\n\n" +
            "- **La construction** : le fil rouge a demandé ~8 jours de travail (prompts, garde-fous, intégrations, tests). À ton tarif jour ou celui d'un presta, c'est le premier poste, de très loin.\n" +
            "- **La maintenance** : les sources changent, les prompts dérivent, les modèles évoluent (un changement de version de modèle se teste avant bascule, garde un jeu d'entrées de référence avec leurs sorties attendues pour comparer). Compte une demi-journée par mois.\n" +
            "- **Le temps humain résiduel** : 25 min/semaine de la responsable. Réel, mais à comparer aux 6 h d'avant.\n" +
            "- **Le coût des erreurs** : une erreur publiée coûte en crédibilité, en temps de correction, parfois en droit de réponse. Les garde-fous de la leçon 19 sont une prime d'assurance : leur coût se justifie par ce qu'ils évitent.\n\n" +
            "La formule de décision devient : (heures économisées × valeur horaire) − (construction amortie + maintenance + API + risque résiduel). Pour le fil rouge : ~22 h/mois économisées contre ~2 j de coût mensuel amorti la première année (rentable dès le deuxième mois). Beaucoup de projets d'automatisation qu'on m'apporte ne passent PAS ce calcul : automatiser 20 minutes par semaine avec 15 jours de dev, c'est un hobby, pas un projet.\n\n" +
            "## Quand rester humain : les cas où l'automatisation est le mauvais choix\n\n" +
            "Trois familles de tâches où mon conseil est de ne pas automatiser, même quand c'est techniquement possible :\n\n" +
            "**Quand l'enjeu relationnel EST la valeur.** La réponse à une réclamation grave, l'email à un client historique mécontent, la négociation. Le destinataire sent la différence, et le jour où il apprend que c'était une machine, le coût relationnel dépasse toutes les économies. Assistance à la rédaction, oui ; envoi automatique, non.\n\n" +
            "**Quand l'erreur est irréversible et grave.** Conseil juridique ou médical, engagement financier ferme, suppression de données, communication de crise. Le LLM peut préparer, jamais décider. La question filtre : « si ça se passe mal, peut-on annuler ? » Si non, humain.\n\n" +
            "**Quand le volume ne le justifie pas.** Trois occurrences par mois se font à la main avec l'aide de claude.ai en 10 minutes. L'automatisation se mérite par la répétition.\n\n" +
            "Et une famille plus subtile : **quand la tâche est ton avantage concurrentiel**. Si ta newsletter cartonne parce qu'elle a une voix unique, automatiser sa rédaction, c'est industrialiser ta banalisation. Automatise la veille, la mise en forme, la distribution : garde la voix.\n\n" +
            "## Le mot de la fin de cette partie\n\n" +
            "Si tu ne retiens que trois choses : le coût API d'un workflow bien architecturé est presque toujours négligeable devant le coût de construction et le temps humain, chiffre les trois avant de te lancer ; la validation humaine se place sur l'irréversible et s'échantillonne sur le volume ; et « on pourrait l'automatiser » n'a jamais été une raison suffisante de le faire : la bonne question est « qu'est-ce qu'on gagne, qu'est-ce qu'on risque, et où doit rester le jugement humain ».\n\n" +
            "## À toi\n\n" +
            "Calcule l'ordre de grandeur du coût API mensuel : un workflow qui résume chaque soir 40 comptes-rendus de visite (~1 200 tokens d'entrée, ~150 tokens de sortie chacun) sur Sonnet (~3 $/M en entrée, ~15 $/M en sortie).\n\n" +
            "> Entrée : 40 × 30 × 1 200 = 1,44 M tokens → ~4,30 $. Sortie : 40 × 30 × 150 = 0,18 M → ~2,70 $. Total ≈ 7 $/mois. Et si la fraîcheur au soir même n'est pas critique, le traitement par lots divise par deux : ~3,50 $. L'ordre de grandeur compte plus que la décimale : on est en dizaines de dollars par an, pas en centaines par mois.\n",
        },
        {
          id: "l21",
          title: "Quiz : automatiser sans se brûler",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q21",
              prompt:
                "Dans le workflow fil rouge, pourquoi l'étape de collecte des flux RSS n'utilise-t-elle pas de LLM ?",
              options: [
                "Parce que les LLM n'ont pas le droit de lire des flux RSS",
                "Parce qu'une tâche déterministe se fait en code simple : chaque étape LLM ajouterait coût, latence et variance sans rien apporter",
                "Parce que les flux RSS sont trop volumineux pour la fenêtre de contexte",
                "Parce que le scoring doit être fait avant toute lecture",
              ],
              correctIndex: 1,
              explanation:
                "Règle d'architecture : le LLM seulement là où il apporte du langage ou du jugement. Lire un flux RSS est déterministe : dix lignes de code, gratuit, fiable. C'est ce genre de choix qui fait passer la facture du fil rouge sous 2 $/mois.",
            },
            {
              id: "q22",
              prompt: "Qu'est-ce que le pattern « générateur-vérificateur » (étapes 4 et 5 du fil rouge) ?",
              options: [
                "Deux modèles différents qui rédigent chacun un article, on garde le meilleur",
                "Un appel séparé qui reçoit le brouillon et les sources avec pour seule mission de lister les affirmations non sourcées",
                "Un humain qui vérifie chaque phrase avant la rédaction",
                "Un test unitaire qui vérifie que le JSON est bien formé",
              ],
              correctIndex: 1,
              explanation:
                "Un modèle est meilleur pour critiquer un texte que pour écrire sans erreur : on sépare donc la rédaction et la vérification en deux appels indépendants. Les écarts détectés sont annotés pour la validation humaine : qui reste le point bloquant.",
            },
            {
              id: "q23",
              prompt:
                "Après un mois, la relectrice ne corrige plus jamais rien dans les brouillons. Comment interpréter ce signal ?",
              options: [
                "Le workflow est parfait, on peut supprimer l'étape de validation",
                "C'est ambigu : soit la qualité amont est excellente, soit la relecture est devenue un clic réflexe (rubber stamping) ; d'où l'intérêt de tester avec une erreur volontaire",
                "Le modèle a appris de ses erreurs et ne se trompe plus",
                "Il faut doubler le temps de relecture par précaution",
              ],
              correctIndex: 1,
              explanation:
                "Le taux de corrections humaines est la métrique reine, mais elle se lit dans les deux sens. Un zéro permanent peut signaler une vigilance endormie : le test à l'erreur connue (une fois par mois) départage. Et non, un LLM en production n'« apprend » pas de ses erreurs entre les appels.",
            },
            {
              id: "q24",
              prompt: "Quel poste domine généralement le coût réel d'un workflow LLM bien architecturé ?",
              options: [
                "La facture API mensuelle",
                "La construction initiale et la maintenance (prompts, garde-fous, intégrations, tests)",
                "Le stockage des logs",
                "L'abonnement claude.ai de l'équipe",
              ],
              correctIndex: 1,
              explanation:
                "Le fil rouge coûte ~2 $/mois d'API contre ~8 jours de construction et une demi-journée de maintenance mensuelle. L'API ne devient le poste dominant que sur les architectures gourmandes (agents à longues boucles, contexte relu à chaque tour) ou les très gros volumes.",
            },
            {
              id: "q25",
              prompt:
                "Ta newsletter doit son succès à ta voix personnelle très identifiable. Que recommande le cours ?",
              options: [
                "Automatiser la rédaction complète avec tes anciens numéros en exemples",
                "Automatiser la veille, la mise en forme et la distribution, mais garder la rédaction humaine : on n'automatise pas son avantage concurrentiel",
                "Ne rien automatiser du tout par principe",
                "Publier deux fois plus grâce à l'IA pour compenser la perte de voix",
              ],
              correctIndex: 1,
              explanation:
                "Quand la tâche EST ta différenciation, l'automatiser revient à industrialiser ta banalisation. L'IA prend tout ce qui entoure (veille, logistique) ; la voix reste humaine. Ni tout-automatique, ni refus de principe : un choix poste par poste.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Aller plus loin : API, RAG et regard critique",
      lessons: [
        {
          id: "l22",
          title: "Ton premier appel à l'API Anthropic",
          type: "text",
          duration: "14 min",
          body:
            "## Sortir de l'interface\n\n" +
            "Tout ce qu'on a construit conceptuellement en partie 5 suppose une brique : appeler Claude depuis du code. C'est le moment. Bonne nouvelle : c'est l'une des API les plus simples du marché (un endpoint principal, une requête, une réponse). Si tu as déjà consommé n'importe quelle API REST, tu seras opérationnel dans l'heure.\n\n" +
            "## Préparatifs\n\n" +
            "Direction la console Anthropic (console.anthropic.com) : tu crées un compte, tu charges quelques dollars de crédit, tu génères une **clé API**. Trois règles immédiates, tu les connais déjà par la leçon 11 : la clé va dans une variable d'environnement (`ANTHROPIC_API_KEY`), jamais dans le code ; jamais dans un dépôt git ; une clé exposée se révoque. La console te montre aussi ta consommation en temps réel : mets une alerte de dépense dès aujourd'hui, c'est deux clics.\n\n" +
            "Ensuite, le SDK officiel dans ton langage. En Python :\n\n" +
            "```bash\n" +
            "pip install anthropic\n" +
            "export ANTHROPIC_API_KEY=\"ta-cle-ici\"\n" +
            "```\n\n" +
            "## Le premier appel\n\n" +
            "```python\n" +
            "import anthropic\n" +
            "\n" +
            "client = anthropic.Anthropic()  # lit ANTHROPIC_API_KEY tout seul\n" +
            "\n" +
            "reponse = client.messages.create(\n" +
            "    model=\"claude-sonnet-4-6\",\n" +
            "    max_tokens=1024,\n" +
            "    system=\"Tu es l'assistant de tri d'une boite mail support. Reponds en JSON.\",\n" +
            "    messages=[\n" +
            "        {\"role\": \"user\", \"content\": \"Classe cet email : 'Bonjour, je n'arrive plus a me connecter depuis hier...'\"}\n" +
            "    ],\n" +
            ")\n" +
            "\n" +
            "print(reponse.content[0].text)\n" +
            "print(reponse.usage.input_tokens, reponse.usage.output_tokens)\n" +
            "```\n\n" +
            "Décortiquons les paramètres, parce que chacun raconte quelque chose du cours :\n\n" +
            "- `model` : le nom exact du modèle (leçons 2 et 3, vérifie les identifiants en vigueur dans la doc, ils évoluent avec les versions).\n" +
            "- `max_tokens` : le plafond de la réponse, obligatoire. C'est un disjoncteur : une réponse qui part en vrille s'arrête là. Dimensionne-le à ton besoin réel (une classification n'a pas besoin de 4 000 tokens).\n" +
            "- `system` : le prompt système (tes instructions permanentes, exactement le rôle des instructions de Projet (leçon 6), mais version programmable).\n" +
            "- `messages` : la conversation. L'API est **sans état** : elle ne se souvient de rien entre deux appels. Pour un dialogue, tu renvoies l'historique complet à chaque fois, et te voilà en train de payer des tokens d'entrée croissants, ce qui devrait te rappeler la partie 1 et t'expliquer d'un coup pourquoi le cache de prompt existe.\n\n" +
            "- `reponse.usage` : les compteurs de tokens réellement facturés. Logue-les dès le premier jour ; c'est la matière première de tous les calculs de la leçon 20.\n\n" +
            "## Les erreurs que tu vas rencontrer\n\n" +
            "Autant les connaître d'avance, elles sont au nombre de trois pour un débutant :\n\n" +
            "- `401 authentication_error` : clé absente ou invalide (la variable d'environnement n'est pas visible de ton process (relance ton terminal, vérifie le nom exact)).\n" +
            "- `429 rate_limit_error` : trop de requêtes par minute pour ton niveau de compte. La parade propre : réessayer avec un délai croissant (les SDK officiels le font en partie pour toi), et lisser tes traitements de masse.\n" +
            "- Une réponse coupée net : regarde `stop_reason` (si c'est `max_tokens`, ta réponse a touché le plafond). Augmente le plafond ou raccourcis la demande ; et en production, traite ce cas explicitement (une réponse tronquée qui part telle quelle chez un client, c'est vécu aussi).\n\n" +
            "## Streaming et batch, en une minute\n\n" +
            "Deux options à connaître de nom. Le **streaming** envoie la réponse token par token au fur et à mesure de la génération : indispensable pour une interface de chat (l'utilisateur voit le texte apparaître au lieu de fixer un spinner), inutile pour un traitement nocturne. Le **batch**, tu le connais depuis la leçon 3 : tu déposes un lot de requêtes, tu récupères les résultats sous quelques heures, moitié prix. Le fil rouge de la partie 5 utiliserait le batch pour le scoring et le temps réel pour rien du tout.\n\n" +
            "## À toi\n\n" +
            "Sans exécuter : repère les deux problèmes de ce fragment. `client.messages.create(model=\"claude\", max_tokens=100000, messages=[{\"role\": \"user\", \"content\": email + \"\\nClasse cet email en une categorie.\"}])`\n\n" +
            "> Problème 1 : `model=\"claude\"` n'est pas un identifiant de modèle valide (il faut le nom exact d'un modèle existant, l'API renverra une erreur). Problème 2 : `max_tokens=100000` pour une classification d'un mot, c'est un disjoncteur réglé à l'incendie ; 50 suffisent, et le plafond protège ta facture en cas de dérive. Bonus si tu l'as vu : aucune consigne système ni format de sortie imposé (la « catégorie » reviendra dans une phrase décorée, pénible à parser). Justement : leçon suivante.\n",
        },
        {
          id: "l23",
          title: "Des sorties JSON sur lesquelles ton code peut compter",
          type: "text",
          duration: "13 min",
          body:
            "## Le problème des 2 % \n\n" +
            "Ton scoring de veille tourne : 98 % des réponses sont un JSON impeccable. Les 2 % restants ? « Voici le JSON demandé : » suivi du JSON, un JSON avec une virgule en trop, une note de 10 écrite « dix », un champ renommé de bonne volonté. En interactif, tu n'aurais rien remarqué ; dans un pipeline, 2 % de casse sur 800 items, c'est 16 plantages par mois. Fiabiliser la sortie structurée est LE savoir-faire qui sépare un script de démo d'un workflow de production.\n\n" +
            "## Couche 1 : demander précisément\n\n" +
            "D'abord, un prompt de sortie sans ambiguïté : le schéma exact, un exemple complet, et les cas dégradés prévus. Version rodée pour le scoring :\n\n" +
            "```\n" +
            "Reponds UNIQUEMENT avec un objet JSON valide, sans texte avant ni apres,\n" +
            "sans bloc de code markdown. Schema :\n" +
            "{\n" +
            "  \"note\": <entier 0-10>,\n" +
            "  \"justification\": <string, 1 phrase>,\n" +
            "  \"themes\": <tableau de strings parmi : \"reglementation\", \"outils\", \"gestion\", \"autre\">\n" +
            "}\n" +
            "Si l'item est illisible ou vide : {\"note\": 0, \"justification\": \"item illisible\", \"themes\": [\"autre\"]}\n" +
            "```\n\n" +
            "Chaque ligne de ce prompt répond à un incident réel : le « sans bloc de code markdown » existe parce que les modèles adorent emballer le JSON dans une clôture de code ; le cas « item illisible » existe parce qu'un flux RSS a livré un jour des items vides et que le modèle improvisait des notes.\n\n" +
            "## Couche 2 : les sorties structurées de l'API\n\n" +
            "Le prompt soigné réduit la casse ; l'API peut faire mieux. Les modèles Claude récents proposent des **sorties structurées** : tu fournis le schéma JSON attendu dans la requête, et la génération est contrainte pour s'y conformer, plus de texte d'enrobage, plus de virgule en trop. Le même mécanisme de schéma sert d'ailleurs déjà aux outils de la leçon 14 (le modèle génère des arguments conformes à ton `input_schema`), et une astuce de vétéran consiste précisément à déclarer un outil fictif `enregistrer_score` pour forcer une sortie structurée. Consulte la doc pour la syntaxe en vigueur ; le concept, lui, est stable.\n\n" +
            "## Couche 3 : valider quand même, côté code\n\n" +
            "Même avec des sorties contraintes, ton code valide. Parce que la conformité au schéma ne garantit pas le **sens** : `{\"note\": 10, \"justification\": \"tres pertinent\", \"themes\": [\"autre\"]}` sur le communiqué de presse d'un fabricant de piscines est syntaxiquement parfait et éditorialement absurde. La pile complète, de bas en haut :\n\n" +
            "1. **Parsing** : le JSON se parse-t-il ? Sinon → nouvelle tentative (une seule), puis mise de côté avec alerte.\n" +
            "2. **Schéma** : champs présents, types corrects, valeurs dans les bornes (une bibliothèque de validation type Pydantic en Python fait ça en trois lignes).\n" +
            "3. **Plausibilité métier** : des règles simples en code, si la note est 10 mais la justification contient « hors sujet », incohérence → mise de côté ; si 30 % des items du jour ont la même note, le prompt a probablement un problème → alerte.\n\n" +
            "Cette pile transforme les 2 % de casse en zéro plantage : tout ce qui déraille finit dans une file « à regarder », jamais dans le pipeline aval.\n\n" +
            "## Le réflexe température\n\n" +
            "Un paramètre d'API mérite une mention ici : la **température**, qui règle le caractère aléatoire de la génération (de 0 à 1 chez Anthropic). Pour de l'extraction et de la classification structurée, mets-la basse (0 ou proche) : tu veux de la constance, pas de la créativité. Garde les valeurs hautes pour la génération d'idées (nos 15 posts LinkedIn de la leçon 7). Même à température 0, la sortie n'est pas strictement garantie identique d'un appel à l'autre : raison de plus pour la couche 3.\n\n" +
            "## À retenir\n\n" +
            "- Un pipeline se juge sur ses pires 2 %, pas sur ses 98 % : prompt de schéma béton, exemples, cas dégradés prévus.\n" +
            "- Les sorties structurées de l'API contraignent la syntaxe ; ton code reste seul juge du sens (parsing → schéma → plausibilité métier).\n" +
            "- Température basse pour l'extraction, haute pour l'idéation, et une file « à regarder » pour tout ce qui déraille.\n",
        },
        {
          id: "l24",
          title: "RAG simplifié : faire répondre Claude sur TES documents",
          type: "text",
          duration: "14 min",
          body:
            "## La question qui revient toujours\n\n" +
            "« On veut que Claude réponde sur NOS documents : nos 3 000 fiches produit, nos 10 ans de contrats, notre wiki interne. On l'entraîne ? » Non. Ré-entraîner un modèle sur tes données (le *fine-tuning*) est coûteux, complexe, et surtout ce n'est pas le bon outil pour de la connaissance factuelle qui change tous les jours. La réponse standard de l'industrie s'appelle **RAG** (Retrieval-Augmented Generation, génération augmentée par récupération), et le principe tient en une phrase : **chercher les bons passages dans tes documents, puis les donner à lire au modèle avec la question**.\n\n" +
            "Tu as déjà fait du RAG à la main sans le savoir : joindre le contrat à la conversation avant de poser ta question (leçon 5), c'est du RAG artisanal. Le RAG industrialisé automatise le « joindre le bon document » quand il y en a 3 000.\n\n" +
            "## Les trois temps du RAG\n\n" +
            "**Temps 1 : préparer la bibliothèque (une fois).** Tes documents sont découpés en **morceaux** (*chunks*) de quelques centaines de tokens (un article de wiki devient dix morceaux thématiques). Pourquoi découper ? Parce qu'on veut retrouver LE passage pertinent, pas un PDF de 100 pages. Chaque morceau est ensuite indexé pour la recherche.\n\n" +
            "**Temps 2 : retrouver (à chaque question).** Quand la question arrive (« quel est le délai de rétractation pour une commande sur mesure ? »), le système cherche les morceaux les plus pertinents. La recherche moderne est **sémantique** : chaque texte est converti en *embedding*, un vecteur de nombres qui capture son sens, et on retrouve les morceaux dont le vecteur est proche de celui de la question (même sans mot en commun (« délai de rétractation » retrouve un passage qui parle de « droit d'annulation de 14 jours »)). En pratique, les systèmes sérieux combinent recherche sémantique et recherche par mots-clés classique, parce que les références exactes (« article L221-28 ») se retrouvent mieux au mot près.\n\n" +
            "**Temps 3 : générer.** Les 3 à 10 meilleurs morceaux sont injectés dans le prompt avec la question et une consigne stricte : « Réponds uniquement à partir des extraits fournis. Cite l'extrait utilisé. Si la réponse n'y figure pas, dis-le. » Le modèle rédige, la réponse cite ses sources, et l'utilisateur peut vérifier.\n\n" +
            "## Pourquoi ça marche mieux que « tout coller »\n\n" +
            "Avec des fenêtres de 200 000 tokens ou plus, pourquoi ne pas coller les 3 000 fiches ? Trois raisons, que tu peux maintenant articuler toi-même : le **coût** (relire 2 M de tokens à chaque question, même en cache, contre 3 000 tokens de morceaux choisis) ; la **qualité** (l'information noyée dans le remplissage, phénomène connu depuis la partie 1) ; et la **fraîcheur** (mettre à jour une fiche = remplacer un morceau dans l'index, effet immédiat, aucun ré-entraînement). Le grand contexte et le RAG ne s'opposent pas : en dessous de quelques dizaines de documents, colle-les (le RAG se mérite par le volume, comme l'automatisation par la répétition).\n\n" +
            "## Là où les projets RAG échouent vraiment\n\n" +
            "Après plusieurs déploiements, mon constat : les échecs de RAG sont presque toujours des échecs de **recherche**, pas de génération. Si les bons passages n'arrivent pas au modèle, la meilleure génération du monde répondra à côté : poliment. Les causes récurrentes, dans l'ordre :\n\n" +
            "- **Découpage brutal** : des morceaux coupés au milieu d'un tableau ou d'une clause, incompréhensibles isolément. Le découpage doit respecter la structure (sections, paragraphes) et chaque morceau doit porter son contexte (« Contrat cadre Nordik 2025 > Article 4 > … »).\n" +
            "- **Documents pourris** : PDF scannés illisibles, versions contradictoires du même document, wiki obsolète. Le RAG expose la qualité réelle de ta base documentaire : beaucoup de projets « IA » sont morts d'un ménage documentaire jamais fait.\n" +
            "- **Zéro évaluation de la recherche** : personne n'a mesuré si les bons morceaux remontent. Le test minimal : 30 vraies questions d'utilisateurs, et pour chacune, vérifier à la main si le passage qui contient la réponse est dans les résultats. Ce test d'une demi-journée prédit le sort du projet mieux que n'importe quelle démo.\n\n" +
            "## À toi\n\n" +
            "Ton RAG interne répond « je ne trouve pas cette information » à la question « quelle est notre politique de télétravail ? » alors que la page wiki existe. Liste trois causes possibles, de la plus probable à la moins probable.\n\n" +
            "> (1) Échec de recherche : la page parle de « travail à distance » et « flex office » sans jamais dire « télétravail », et la recherche (trop lexicale) ou l'embedding (morceau trop long, dilué) ne fait pas le lien. (2) Découpage : la politique est dans un tableau RH coupé en deux, aucun morceau n'est autoporteur. (3) La page n'est simplement pas dans l'index (oubli d'ingestion, format non supporté, droits d'accès). Remarque que « le modèle n'est pas assez intelligent » n'apparaît pas : sur ce symptôme, le suspect est la recherche, pas la génération.\n",
        },
        {
          id: "l25",
          title: "Évaluer la qualité, connaître les limites, garder la main",
          type: "text",
          duration: "15 min",
          body:
            "## « Ça a l'air de marcher » n'est pas une métrique\n\n" +
            "Dernière ligne droite, et probablement la leçon qui te servira le plus longtemps. Tout ce cours a construit des systèmes ; celui-ci t'apprend à les juger, et à te juger toi-même en train de les utiliser. Parce que le mode d'échec le plus courant d'un projet LLM n'est pas technique : c'est une équipe qui a validé sur trois exemples sympas et découvre les problèmes chez les utilisateurs.\n\n" +
            "## Évaluer : le jeu de test, encore et toujours\n\n" +
            "Le principe est le même que les tests en programmation. Tu construis un **jeu d'évaluation** : 30 à 100 entrées réelles représentatives (dont les cas tordus : l'email agressif, le PDF à moitié vide, la question ambiguë), et pour chacune, ce qu'une bonne sortie doit contenir. À chaque changement (de prompt, de modèle, de température), tu rejoues le jeu et tu compares. Sans ça, tu navigues à l'impression, et l'impression est flatteuse par construction : tu te souviens des bonnes réponses.\n\n" +
            "Comment noter les sorties ? Trois méthodes, par coût croissant :\n\n" +
            "- **Vérifications programmables** : le JSON est valide, la catégorie appartient à la liste, la réponse cite une source, la longueur est dans les bornes. Gratuit, automatique, à faire partout où c'est possible.\n" +
            "- **LLM juge** : un appel séparé note chaque sortie contre une grille explicite (« la réponse est-elle intégralement fondée sur les extraits fournis ? oui/non + citation »). Le pattern vérificateur de la leçon 18, recyclé en outil de mesure. Calibre le juge en comparant ses notes aux tiennes sur 20 exemples avant de lui faire confiance.\n" +
            "- **Relecture humaine par échantillon** : la référence. 10 sorties par semaine, notées par quelqu'un du métier, sur une grille stable. C'est ce qui détecte les dérives que les deux premières méthodes ne voient pas.\n\n" +
            "Et une mesure que je t'invite à faire une fois pour vacciner ton équipe : sur 50 sorties, compte les erreurs factuelles à la main. Le chiffre exact importe peu ; ce qui compte, c'est que tout le monde ait VU que le taux n'est pas zéro. Les décisions de garde-fous deviennent soudain consensuelles.\n\n" +
            "## La carte des limites\n\n" +
            "Tu les as croisées tout au long du cours ; les voici rassemblées, parce que c'est la carte mentale à garder :\n\n" +
            "- **Hallucination** : le modèle produit du plausible, pas du vrai (partie 1). Se gère, ne se supprime pas : sources imposées, vérificateur, validation humaine sur l'engageant.\n" +
            "- **Sycophantie** : tendance à aller dans le sens de l'utilisateur. Demande « qu'est-ce qui cloche dans mon plan ? » plutôt que « mon plan est bon, non ? » : la formulation de la question biaise la réponse.\n" +
            "- **Variance** : deux exécutions identiques peuvent diverger. D'où les jeux de test et les schémas contraints.\n" +
            "- **Coupure de connaissance** et **injection de prompt** : vues en leçons 2 et 15. Fraîcheur = outils de recherche ; contenu externe = méfiance structurelle.\n" +
            "- **Biais** : les modèles reflètent leurs données d'entraînement. Sur des décisions touchant des personnes (tri de CV, scoring client), l'usage exige des précautions sérieuses, des tests de biais, et dans beaucoup de cas un cadre légal explicite : le règlement européen sur l'IA classe précisément ces usages comme à haut risque.\n\n" +
            "## L'éthique en pratique, pas en slogan\n\n" +
            "Trois règles concrètes, applicables dès demain. **Transparence** : quand un contenu généré part vers l'extérieur quasi tel quel, ou quand un humain croit parler à un humain, dis-le. La confiance perdue sur ce point ne se rachète pas. **Données** : ne colle pas dans un service cloud ce que tu n'enverrais pas à un prestataire externe sans accord, données clients nominatives, santé, secrets industriels ; ton entreprise a (ou doit écrire) une politique là-dessus, et les offres professionnelles ont des engagements contractuels spécifiques sur l'usage des données. **Responsabilité** : « c'est l'IA qui l'a écrit » n'est pas une défense, ni juridiquement ni moralement. Celui qui publie signe ; c'est exactement pour ça qu'on a construit chaque workflow de ce cours avec un humain au point d'engagement.\n\n" +
            "## Garder la main : le mot de la fin\n\n" +
            "Un dernier risque, plus intime : l'atrophie. Si tu délègues toute rédaction, toute analyse, tout code, ta capacité à juger la qualité de ce qui sort s'érode, et cette capacité de jugement est précisément ce qui te rend utile dans la boucle. Mon antidote personnel, que je te transmets : garde des répétitions délibérées (écris certains textes seul, relis du code ligne à ligne régulièrement), et utilise Claude comme un partenaire d'entraînement (« pose-moi trois questions difficiles sur ce document avant de me donner ton analyse »), pas seulement comme un distributeur de réponses.\n\n" +
            "Tu as maintenant la chaîne complète : comprendre le moteur (tokens, contexte, modèles), le piloter (prompts, Projets), coder avec (Claude Code), l'outiller (tool use, MCP), l'industrialiser (workflows, garde-fous, coûts) et le juger (évaluations, limites, éthique). Le quiz t'attend, puis ton premier vrai workflow.\n",
        },
        {
          id: "l26",
          title: "Quiz : API, RAG et regard critique",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q26",
              prompt: "L'API Messages d'Anthropic est « sans état ». Qu'est-ce que ça implique pour un dialogue multi-tours ?",
              options: [
                "Chaque conversation est stockée sur les serveurs et rechargée par identifiant",
                "Ton code doit renvoyer l'historique complet à chaque appel, dont le coût d'entrée croît au fil du dialogue",
                "Le modèle se souvient automatiquement des 10 derniers échanges",
                "Il est impossible de faire un chatbot avec cette API",
              ],
              correctIndex: 1,
              explanation:
                "L'API ne se souvient de rien entre deux appels : l'historique repart dans `messages` à chaque tour, et les tokens d'entrée gonflent en conséquence (c'est exactement le problème que le cache de prompt atténue). Les produits comme claude.ai gèrent cet état pour toi ; en API, c'est ton travail.",
            },
            {
              id: "q27",
              prompt:
                "Ton pipeline reçoit un JSON syntaxiquement parfait mais absurde sur le fond (note 10 pour un item hors sujet). Quelle couche de défense attrape ce cas ?",
              options: [
                "Le parsing JSON",
                "La validation de schéma (types et bornes)",
                "Les règles de plausibilité métier côté code, et l'échantillonnage humain qui surveille la dérive",
                "Aucune : ce cas est indétectable",
              ],
              correctIndex: 2,
              explanation:
                "Parsing et schéma valident la forme ; le sens relève des règles métier (incohérences note/justification, distributions anormales) et du contrôle humain par sondage. C'est pourquoi les sorties structurées de l'API ne dispensent jamais de la couche de validation applicative.",
            },
            {
              id: "q28",
              prompt: "Dans un système RAG, quel est le point de défaillance le plus fréquent en pratique ?",
              options: [
                "Le modèle de génération, trop peu créatif",
                "La recherche : si les bons passages ne remontent pas (découpage brutal, documents obsolètes, recherche mal évaluée), la génération répond à côté",
                "La taille de la fenêtre de contexte",
                "Le prix des embeddings",
              ],
              correctIndex: 1,
              explanation:
                "Les échecs de RAG sont presque toujours des échecs de récupération, pas de génération. D'où le test minimal : 30 vraies questions, vérification manuelle que le passage contenant la réponse remonte. Et en dessous de quelques dizaines de documents, le RAG est superflu : colle-les.",
            },
            {
              id: "q29",
              prompt: "Pourquoi construire un jeu d'évaluation plutôt que juger « à l'impression » ?",
              options: [
                "Parce que c'est exigé par les conditions d'utilisation d'Anthropic",
                "Parce que l'impression surestime la qualité (on retient les bonnes réponses) et ne permet pas de comparer objectivement deux prompts ou deux modèles",
                "Parce qu'un jeu d'évaluation supprime les hallucinations",
                "Parce que les modèles répondent mieux quand ils se savent évalués",
              ],
              correctIndex: 1,
              explanation:
                "Un jeu de 30 à 100 entrées réelles rejoué à chaque changement joue le rôle des tests en programmation : il objective la qualité et détecte les régressions. Il ne supprime pas les erreurs : il les rend visibles et mesurables, ce qui permet de dimensionner les garde-fous.",
            },
            {
              id: "q30",
              prompt:
                "Ton assistant IA a rédigé une analyse envoyée telle quelle à un client, avec une erreur factuelle. Qui est responsable ?",
              options: [
                "Anthropic, qui a entraîné le modèle",
                "Personne : les erreurs d'IA sont un cas de force majeure",
                "La personne (ou l'entreprise) qui a publié l'analyse : celui qui signe est responsable, d'où un point de validation humaine sur toute sortie engageante",
                "Le modèle lui-même",
              ],
              correctIndex: 2,
              explanation:
                "« C'est l'IA qui l'a écrit » n'est une défense ni juridique ni morale. C'est le fil conducteur de tout le cours : la validation humaine se place sur les sorties irréversibles ou engageantes, et celui qui publie assume. L'IA prépare ; l'humain signe.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
