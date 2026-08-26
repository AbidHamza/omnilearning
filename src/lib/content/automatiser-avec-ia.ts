import type { Course } from "../types";

const course: Course = {
  slug: "automatiser-avec-ia",
  title: "Automatiser son business avec l'IA et n8n",
  tagline:
    "Repère les tâches qui mangent tes semaines, branche-les sur n8n et laisse un LLM trier, résumer et rédiger, sous ton contrôle.",
  description:
    "Un parcours pensé pour les entrepreneurs et les indépendants qui perdent des heures sur des tâches répétitives. Tu apprends d'abord à repérer et chiffrer ce qui vaut la peine d'être automatisé, puis tu comprends les briques techniques (APIs, webhooks, JSON) sans être développeur. Ensuite tu montes de vrais workflows n8n pas à pas, tu y ajoutes un modèle d'IA pour classer des emails ou résumer une veille, et tu termines avec quatre automatisations complètes prêtes à adapter à ton activité, plus les réflexes pour qu'elles tournent sans surprise.",
  category: "Intelligence Artificielle",
  level: "Intermédiaire",
  instructor: "",
  hours: 6,
  rating: 0,
  learners: 0,
  accent: "#ea4b71",
  image: "/covers/automatiser-avec-ia.svg",
  language: "Français",
  software: "n8n (cloud ou auto-hébergé), un navigateur, un compte email",
  prerequisites: [
    "Être à l'aise avec les outils web du quotidien (email, tableur, back-office d'une boutique ou d'un CRM)",
    "Aucune expérience de développeur exigée, mais ne pas avoir peur de lire un peu de JSON",
    "Avoir de vraies tâches répétitives à automatiser (les exemples s'appliquent directement)",
  ],
  summary: [
    "Partie 1 : Penser automatisation (repérer, chiffrer, cartographier, savoir renoncer)",
    "Partie 2 : Les briques techniques : APIs, JSON, clés et webhooks sans jargon",
    "Partie 3 : n8n en pratique : choisir son offre, premier workflow, lire les erreurs",
    "Partie 4 : Ajouter l'IA : nœuds LLM, prompts opérationnels, coûts et garde-fous",
    "Partie 5 : Quatre cas complets : veille, tri d'emails, posts sociaux, alerting",
    "Partie 6 : Fiabiliser : erreurs, retries, monitoring, versions et sécurité",
  ],
  objectives: [
    "Identifier les tâches automatisables de ton activité et chiffrer le temps gagné en euros",
    "Expliquer ce que sont une API, une clé API et un webhook, et tester une API avec curl",
    "Construire et activer un workflow n8n complet, du déclencheur à l'action finale",
    "Intégrer un modèle d'IA dans un workflow pour classer, résumer ou extraire des données",
    "Calculer le coût par exécution d'un workflow IA et poser des garde-fous anti-hallucination",
    "Rendre tes workflows fiables : retries, workflow d'erreur, monitoring et sauvegardes",
  ],
  skills: [
    "Cartographie et priorisation de processus",
    "APIs REST, JSON et webhooks",
    "n8n (nœuds, credentials, expressions, exécutions)",
    "Intégration de LLM dans des workflows",
    "Prompting opérationnel et contrôle des coûts IA",
    "Fiabilisation : gestion d'erreurs, monitoring, versionnage",
  ],
  contentTypes: [
    "Leçons écrites",
    "Schémas techniques",
    "Workflows détaillés pas à pas",
    "Quiz interactifs",
  ],
  parts: [
    {
      id: "p1",
      title: "Penser automatisation avant de penser outil",
      lessons: [
        {
          id: "l1",
          title: "Repérer ce qui mérite d'être automatisé",
          type: "text",
          duration: "14 min",
          body:
            "## Une journée de Léa\n\n" +
            "Léa vend des affiches personnalisées en ligne. Environ 300 commandes par mois, toute seule. Un mardi de janvier, elle a noté tout ce qu'elle faisait, minute par minute. Le résultat l'a un peu vexée :\n\n" +
            "| Tâche | Durée | Fréquence |\n" +
            "| --- | --- | --- |\n" +
            "| Trier les emails (SAV, fournisseurs, spam, partenariats) | 40 min | chaque jour |\n" +
            "| Recopier les commandes du jour dans un tableur | 25 min | chaque jour |\n" +
            "| Vérifier les prix de 5 boutiques concurrentes | 20 min | chaque jour |\n" +
            "| Rédiger et publier les posts Instagram et Pinterest | 45 min | chaque jour |\n" +
            "| Relancer l'imprimeur sur les commandes en retard | 15 min | 3 fois par semaine |\n\n" +
            "Presque deux heures et demie par jour de travail que Léa décrit elle-même comme \"du travail de robot\". Aucune de ces tâches ne demande son talent. Toutes lui prennent son temps. Ce cours va suivre Léa d'un bout à l'autre : à la fin de la partie 5, ces cinq lignes tourneront toutes seules, avec elle en superviseure plutôt qu'en exécutante.\n\n" +
            "Avant d'ouvrir n8n, il faut apprendre à regarder ton activité comme elle a regardé la sienne. C'est l'étape que tout le monde saute, et c'est pour ça que tant d'automatisations finissent à la poubelle : elles automatisent la mauvaise chose.\n\n" +
            "## Les quatre critères d'une tâche automatisable\n\n" +
            "Une tâche est une bonne candidate quand elle coche ces quatre cases :\n\n" +
            "- **Elle se répète à l'identique, ou presque.** Recopier une commande dans un tableur suit exactement les mêmes gestes à chaque fois. Négocier un tarif avec un imprimeur, non.\n" +
            "- **Tu peux la décrire avec des règles.** \"Si l'email contient un numéro de commande et le mot remboursement, alors il va dans le dossier SAV.\" Si tu peux l'expliquer à un stagiaire en dix phrases du type si/alors, une machine peut le faire.\n" +
            "- **Les entrées et les sorties sont numériques.** Un email, une ligne de tableur, une commande dans une boutique en ligne : parfait. Emballer un colis : non, il faudra toujours des mains (mais l'étiquette et l'email de suivi, eux, s'automatisent).\n" +
            "- **La fréquence justifie l'effort.** Une tâche de deux heures qui revient une fois par an ne mérite pas trois heures de construction de workflow. La même tâche chaque lundi, si.\n\n" +
            "Le deuxième critère a longtemps été le plus dur. \"Classe cet email\" était simple à dire et presque impossible à coder en règles : un client mécontent n'écrit pas toujours le mot \"problème\". C'est exactement ce que les modèles d'IA ont changé. Un LLM lit l'email comme un humain le lirait et le range dans la bonne case, sans que tu écrives cinquante règles. La frontière de l'automatisable s'est déplacée, et c'est tout l'objet de la partie 4. Mais retiens dès maintenant la contrepartie : un LLM se trompe parfois avec beaucoup d'assurance, donc tout ce qu'il touche devra passer par des garde-fous.\n\n" +
            "## L'inventaire : une semaine de journal, pas un souvenir\n\n" +
            "Ne fais pas cet inventaire de mémoire. De mémoire, tout le monde cite les deux ou trois tâches les plus visibles et oublie les micro-tâches qui, cumulées, pèsent le plus lourd. La bonne méthode :\n\n" +
            "1. Pendant cinq jours ouvrés, note chaque tâche qui dure plus de cinq minutes. Un carnet ou une note de téléphone suffit.\n" +
            "2. Pour chaque tâche : durée, fréquence, et une note d'agacement de 1 à 5. L'agacement compte : une tâche détestée qu'on repousse coûte plus cher que sa durée brute.\n" +
            "3. En fin de semaine, regroupe les doublons et trie par temps hebdomadaire total.\n\n" +
            "Chez Léa, la surprise est venue d'une ligne qu'elle n'aurait jamais citée de tête : \"répondre aux questions sur les délais de livraison\". Douze fois par jour, deux minutes à chaque fois, toujours la même réponse. Presque deux heures par semaine, invisibles parce que découpées en miettes.\n\n" +
            "## Les faux amis\n\n" +
            "Certaines tâches ressemblent à des candidates et n'en sont pas. Apprends à les repérer tout de suite :\n\n" +
            "- **La tâche à fort jugement.** Choisir les visuels de la prochaine collection se répète chaque saison, mais la valeur EST le jugement de Léa. Automatiser ça, c'est automatiser son métier, pas ses corvées.\n" +
            "- **La tâche relationnelle.** Répondre à un client furieux suit vaguement un script, mais le client sent la différence. Une réponse automatique ratée coûte plus cher que dix minutes d'humain.\n" +
            "- **La tâche dont les règles changent tout le temps.** Si le process a changé trois fois ce trimestre, tu passeras ta vie à réparer le workflow. Stabilise d'abord, automatise ensuite.\n\n" +
            "## À toi\n\n" +
            "Prends ta journée d'hier et liste trois tâches que tu as faites. Pour chacune, passe les quatre critères en revue et donne un verdict : bonne candidate, candidate avec IA, ou faux ami.\n\n" +
            "> Exemple de correction sur la journée de Léa : recopier les commandes = bonne candidate (répétitif, règles claires, tout est numérique, quotidien). Trier les emails = candidate avec IA (répétitif et quotidien, mais les règles pures ne suffisent pas à comprendre le ton d'un message). Choisir le visuel mis en avant sur la page d'accueil = faux ami, c'est du jugement de marque.\n",
        },
        {
          id: "l2",
          title: "Chiffrer le temps gagné, en heures et en euros",
          type: "text",
          duration: "15 min",
          body:
            "## La formule tient sur un ticket de caisse\n\n" +
            "Le temps annuel d'une tâche se calcule en trente secondes :\n\n" +
            "```\n" +
            "durée par occurrence x occurrences par semaine x 52 = heures par an\n" +
            "```\n\n" +
            "Reprenons le tri des emails de Léa : 40 minutes par jour, 5 jours par semaine. Ça donne 200 minutes par semaine, soit 3 h 20. Sur l'année : 3 h 20 x 52 = un peu plus de 173 heures. Plus de quatre semaines de travail à temps plein, uniquement pour ranger des emails.\n\n" +
            "Pour convertir en euros, prends ton taux horaire réel ou visé. Léa facture ses créations sur mesure autour de 30 € de l'heure quand elle travaille pour des clients pro. Le tri d'emails lui coûte donc environ 5 190 € par an. Ce chiffre change la conversation : on ne se demande plus \"est-ce que ça vaut le coup d'apprendre n8n\", on se demande pourquoi on ne l'a pas fait avant.\n\n" +
            "Un piège classique : compter la durée idéale au lieu de la durée réelle. Le tri d'emails, ce n'est pas seulement les 40 minutes chrono. C'est aussi le coût de l'interruption : chaque fois que Léa ouvre sa boîte \"juste pour vérifier\", elle met plusieurs minutes à se reconcentrer sur son travail de création. Les recherches sur l'interruption au travail parlent de 20 minutes et plus pour retrouver une vraie concentration. Ton chiffre officiel est donc presque toujours sous-estimé, ce qui rend le calcul confortable : si ça vaut le coup sur le papier, ça vaut encore plus le coup en vrai.\n\n" +
            "## Combien de temps as-tu le droit d'investir\n\n" +
            "Le dessinateur de xkcd a publié un tableau devenu culte (la planche 1205, \"Is It Worth the Time?\") qui répond à la question inverse : pour un gain donné, combien de temps peux-tu investir avant que l'automatisation ne soit rentabilisée sur cinq ans. En voici une version simplifiée, ramenée à un horizon d'un an et à des jours ouvrés :\n\n" +
            "| Temps gagné chaque jour | Budget de construction rentable (sur 1 an) |\n" +
            "| --- | --- |\n" +
            "| 1 minute | environ 4 heures |\n" +
            "| 5 minutes | environ 21 heures |\n" +
            "| 15 minutes | environ 65 heures |\n" +
            "| 30 minutes | environ 130 heures |\n\n" +
            "Lecture concrète : si une automatisation te fait gagner ne serait-ce que 5 minutes par jour, tu peux passer deux jours et demi à la construire et tu seras gagnant dès la première année. Or ton premier workflow n8n te prendra 2 à 4 heures, et les suivants nettement moins. La rentabilité n'est presque jamais le problème. Le problème, c'est de choisir la bonne cible.\n\n" +
            "## Le coût complet, pas seulement la construction\n\n" +
            "Pour être honnête, le calcul doit inclure quatre postes :\n\n" +
            "- **La construction.** Compte 2 à 4 heures pour ton premier workflow, 1 heure pour les suivants du même genre. Double ton estimation si l'outil à connecter est exotique.\n" +
            "- **La maintenance.** Une API change, un site modifie sa structure, un mot de passe expire. Provisionne 10 à 20 % du temps de construction par an. Un workflow jamais maintenu finit toujours par casser en silence, on verra comment s'en protéger en partie 6.\n" +
            "- **Les outils.** n8n auto-hébergé coûte le prix d'un petit serveur (autour de 5 à 10 € par mois), l'offre cloud démarre autour de 20 € par mois, et les appels à un modèle d'IA se comptent en centimes. On détaillera tout ça avec les vrais chiffres en parties 3 et 4.\n" +
            "- **Le coût des erreurs.** C'est le poste que tout le monde oublie. Si ton tri d'emails classe une commande urgente en spam une fois par mois, combien ça coûte ? Ce chiffre décide de la quantité de garde-fous à poser.\n\n" +
            "## Le calcul de Léa, en entier\n\n" +
            "Tri des emails : 173 heures par an de gain potentiel. Construction estimée : 4 heures (c'est un workflow avec IA, donc un peu plus long). Maintenance : disons 4 heures par an, large. Outils : 20 € par mois de n8n cloud, partagés entre tous ses workflows, et environ 1 € par mois d'appels IA pour ce volume d'emails.\n\n" +
            "Même en divisant le gain par deux par pessimisme (le workflow ne triera pas tout, Léa gardera un œil dessus), il reste plus de 80 heures nettes gagnées la première année. Elle a classé ses cinq tâches avec le même calcul et obtenu son ordre d'attaque : emails, puis recopie des commandes, puis veille concurrente, puis posts sociaux, puis relances imprimeur. Le ratio gain sur effort décide, pas l'envie du moment.\n\n" +
            "## Ce que le chiffre ne dit pas\n\n" +
            "Deux effets n'apparaissent pas dans le tableau et jouent pourtant fort. D'abord la latence : un client qui reçoit sa réponse sur les délais en 2 minutes au lieu de 4 heures achète plus souvent. Ensuite la charge mentale : ne plus avoir la boîte email en tâche de fond dans un coin du cerveau, ça ne se mesure pas en euros mais tous mes clients le citent comme le premier bénéfice ressenti.\n\n" +
            "Et l'avertissement inverse, parce que je l'ai vécu : l'automatisation est un hobby dangereux. J'ai vu un fondateur passer une vingtaine d'heures sur un workflow qui synchronisait deux outils pour économiser 10 minutes par mois, parce que c'était amusant à construire. Le tableau ci-dessus existe pour trancher à ta place les soirs où c'est tentant.\n\n" +
            "## À toi\n\n" +
            "Prends la tâche la plus lourde de ton inventaire de la leçon 1. Calcule son coût annuel en heures puis en euros, et compare avec un budget de construction de 4 heures.\n\n" +
            "> Correction type : une facturation mensuelle de 90 minutes = 1,5 h x 12 = 18 h par an. À 40 € de l'heure, 720 € par an. Budget de 4 h de construction : rentabilisé en moins de trois mois. Si ton résultat donne un rendement inférieur à 1 (plus cher à construire qu'à faire à la main sur un an), garde la tâche pour plus tard, quand construire te prendra 30 minutes au lieu de 4 heures.\n",
        },
        {
          id: "l3",
          title: "Cartographier le process, et savoir renoncer",
          type: "text",
          duration: "15 min",
          body:
            "## Dessine avant de brancher\n\n" +
            "L'erreur numéro un des débutants sur n8n : ouvrir l'éditeur et empiler des nœuds en découvrant le process au fur et à mesure. Résultat, un workflow spaghetti qu'on n'ose plus toucher trois semaines plus tard. Un process se cartographie sur papier d'abord, en répondant à cinq questions :\n\n" +
            "1. **Le déclencheur.** Qu'est-ce qui fait démarrer la tâche ? Un email qui arrive, une commande passée, une heure fixe, un clic de ta part ?\n" +
            "2. **Les entrées.** De quelles informations as-tu besoin ? D'où viennent-elles exactement (quel champ de quel outil) ?\n" +
            "3. **Les étapes.** Quels gestes, dans quel ordre ? Écris-les comme si tu dictais à un stagiaire le premier jour.\n" +
            "4. **Les décisions.** À quels moments choisis-tu entre plusieurs chemins ? Sur quel critère précis ?\n" +
            "5. **La sortie.** Qu'est-ce qui existe à la fin (un email envoyé, une ligne ajoutée, une alerte) et qui doit être prévenu ?\n\n" +
            "Voici la carte de Léa pour \"une commande d'affiche encadrée arrive\" :\n\n" +
            "- Déclencheur : nouvelle commande contenant un produit \"cadre\" dans la boutique.\n" +
            "- Entrées : nom du client, adresse, dimensions du cadre, délai promis.\n" +
            "- Étapes : vérifier le stock de cadres, envoyer le bon de commande à l'imprimeur, ajouter la ligne au tableur de suivi, envoyer l'email de confirmation avec le délai.\n" +
            "- Décision : si le cadre n'est pas en stock, prévenir le client d'un délai rallongé au lieu de l'email standard.\n" +
            "- Sortie : commande transmise, client informé, suivi à jour.\n\n" +
            "Quatre phrases de plus que \"je transmets les commandes\", et pourtant chaque phrase deviendra un nœud n8n en partie 3. Une bonne carte est un workflow déjà à moitié construit.\n\n" +
            "## Les exceptions sont le vrai sujet\n\n" +
            "Le chemin normal, celui qu'on vient de décrire, représente peut-être 90 % des cas et 20 % de la difficulté. Tout le sel est dans les exceptions : le client qui commande deux cadres de tailles différentes, l'adresse à l'étranger, l'imprimeur fermé en août. Pose-toi la question brutalement : qu'est-ce qui, le mois dernier, a fait dérailler cette tâche ?\n\n" +
            "Si tu ne peux pas citer au moins deux exceptions, c'est que tu ne connais pas encore assez le process pour l'automatiser. Attends d'en avoir vécu un cycle complet.\n\n" +
            "La stratégie des pros n'est pas de tout gérer. C'est d'automatiser le chemin normal et de **router les exceptions vers un humain** : le workflow détecte le cas bizarre et te l'envoie avec tout le contexte, au lieu de deviner. Un workflow qui traite 90 % des cas tout seul et te tend proprement les 10 % restants vaut infiniment mieux qu'un workflow qui prétend tout gérer et se plante en silence sur les cas tordus.\n\n" +
            "## Quand NE PAS automatiser\n\n" +
            "Savoir renoncer fait partie du métier. Les cinq drapeaux rouges :\n\n" +
            "- **Le process change tout le temps.** Nouveau fournisseur chaque mois, règles de prix revues chaque semaine : tu passeras plus de temps à réparer qu'à profiter. Stabilise d'abord.\n" +
            "- **C'est trop rare.** Une tâche trimestrielle de 30 minutes se gère très bien avec une checklist écrite. La checklist est l'outil d'automatisation le plus sous-coté du monde : zéro maintenance, zéro bug.\n" +
            "- **L'humain est la valeur.** Le message de remerciement manuscrit que Léa glisse dans les grosses commandes fait revenir les clients précisément parce qu'il n'est pas automatique.\n" +
            "- **Le process est cassé.** Automatiser un mauvais process, c'est produire du chaos plus vite. Si les relances imprimeur partent dans tous les sens parce que personne ne sait qui a promis quoi, répare la promesse d'abord.\n" +
            "- **L'erreur est irréversible ou sensible.** Rembourser un client, supprimer des données, envoyer un devis engageant : garde une validation humaine sur tout ce qui ne se rattrape pas. On y reviendra sérieusement avec l'IA en partie 4.\n\n" +
            "L'arbre ci-dessous résume la décision. Imprime-le mentalement, il servira à chaque nouvelle idée d'automatisation :\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'arbre de décision : automatiser, assister avec l'IA, ou laisser tomber\"}\n" +
            "<svg viewBox=\"0 0 640 330\" role=\"img\"><title>Arbre de décision : automatiser ou pas</title><defs><marker id=\"fl1\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\" opacity=\"0.7\"/></marker></defs><rect x=\"30\" y=\"16\" width=\"230\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"145\" y=\"43\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">La tâche se répète ?</text><line x1=\"260\" y1=\"38\" x2=\"412\" y2=\"38\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl1)\"/><text x=\"336\" y=\"30\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text><rect x=\"420\" y=\"16\" width=\"190\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"515\" y=\"43\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.8\">on laisse tomber</text><line x1=\"145\" y1=\"60\" x2=\"145\" y2=\"92\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl1)\"/><text x=\"160\" y=\"80\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text><rect x=\"30\" y=\"96\" width=\"230\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"145\" y=\"123\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Règles descriptibles ?</text><line x1=\"260\" y1=\"118\" x2=\"412\" y2=\"118\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl1)\"/><text x=\"336\" y=\"110\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text><rect x=\"420\" y=\"96\" width=\"190\" height=\"44\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"515\" y=\"116\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">IA + validation</text><text x=\"515\" y=\"132\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">humaine</text><line x1=\"145\" y1=\"140\" x2=\"145\" y2=\"172\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl1)\"/><text x=\"160\" y=\"160\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text><rect x=\"30\" y=\"176\" width=\"230\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"145\" y=\"203\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">Assez fréquente ?</text><line x1=\"260\" y1=\"198\" x2=\"412\" y2=\"198\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl1)\"/><text x=\"336\" y=\"190\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non</text><rect x=\"420\" y=\"176\" width=\"190\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"515\" y=\"203\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.8\">checklist manuelle</text><line x1=\"145\" y1=\"220\" x2=\"145\" y2=\"252\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl1)\"/><text x=\"160\" y=\"240\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">oui</text><rect x=\"30\" y=\"256\" width=\"230\" height=\"44\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"145\" y=\"283\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">automatiser avec n8n</text></svg>\n" +
            "```\n\n" +
            "Remarque le chemin du milieu : quand les règles pures ne suffisent pas, la réponse moderne n'est plus \"impossible\" mais \"IA plus validation humaine\". C'est la nouveauté des trois dernières années, et c'est un chemin, pas un raccourci : la validation fait partie du design, pas d'une phase de test qu'on retire ensuite.\n\n" +
            "## À toi\n\n" +
            "Cartographie la tâche que tu as chiffrée à la leçon précédente : déclencheur, entrées, étapes, décisions, sortie, plus deux exceptions vécues. Puis fais-lui passer l'arbre de décision.\n\n" +
            "> Bon signe : ta carte tient en moins de dix étapes et tes exceptions ont une règle de routage claire (\"si adresse hors UE, me prévenir au lieu d'envoyer\"). Mauvais signe : tu écris \"ça dépend\" à une étape sans pouvoir dire de quoi ça dépend. Ce \"ça dépend\" est soit une règle à clarifier, soit le futur travail du LLM, soit la preuve qu'il faut renoncer.\n",
        },
        {
          id: "l4",
          title: "Quiz : penser automatisation",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Léa hésite à automatiser la sélection des visuels de sa prochaine collection, une tâche qui revient chaque saison. Pourquoi est-ce un mauvais candidat ?",
              options: [
                "La tâche n'est pas assez fréquente pour être rentable",
                "La valeur de cette tâche est précisément son jugement créatif : ce serait automatiser son métier, pas une corvée",
                "Les images ne peuvent pas être traitées par un workflow",
                "n8n ne gère pas les tâches saisonnières",
              ],
              correctIndex: 1,
              explanation:
                "La fréquence n'est pas le problème : même une tâche saisonnière peut valoir le coup. Le vrai critère ici est que le choix des visuels EST le travail à valeur ajoutée de Léa. On automatise les corvées autour du jugement, jamais le jugement qui fait la marque.",
            },
            {
              id: "q2",
              prompt:
                "Une tâche te prend 15 minutes chaque jour ouvré. D'après le raisonnement de la leçon (inspiré de xkcd 1205), quel budget de construction reste rentable sur un an ?",
              options: [
                "2 heures maximum, au-delà ce n'est jamais rentable",
                "Environ 65 heures : 15 min x 260 jours ouvrés représente déjà 65 heures par an",
                "Aucun : une tâche de moins de 30 minutes ne s'automatise pas",
                "Exactement le temps de la tâche, soit 15 minutes",
              ],
              correctIndex: 1,
              explanation:
                "15 minutes par jour ouvré, c'est 15 x 260 = 3 900 minutes, soit environ 65 heures par an. Tant que la construction coûte moins que ça, tu es gagnant dès la première année. En pratique un workflow n8n se construit en quelques heures, la rentabilité est donc rarement le vrai obstacle.",
            },
            {
              id: "q3",
              prompt:
                "Pendant la cartographie, tu identifies que 10 % des commandes sont des cas particuliers (adresse à l'étranger, produits mélangés). Quelle est la stratégie recommandée ?",
              options: [
                "Ajouter des branches au workflow jusqu'à couvrir 100 % des cas avant de lancer",
                "Ignorer ces cas : 10 % d'erreurs silencieuses, c'est acceptable",
                "Automatiser le chemin normal et router les exceptions vers un humain avec tout le contexte",
                "Renoncer à automatiser : un process avec exceptions n'est pas automatisable",
              ],
              correctIndex: 2,
              explanation:
                "Vouloir couvrir 100 % des cas rend le workflow fragile et interminable à construire. Ignorer les exceptions crée des erreurs silencieuses, le pire scénario. Le bon design traite le chemin normal automatiquement et te transmet proprement les cas bizarres, avec les informations pour décider vite.",
            },
            {
              id: "q4",
              prompt:
                "Quelle situation est un vrai signal de NE PAS automatiser maintenant ?",
              options: [
                "La tâche nécessite de lire le ton d'un email, pas seulement des mots-clés",
                "Le process a changé trois fois ce trimestre et changera encore",
                "La tâche implique un tableur et une boutique en ligne",
                "La tâche prend seulement 10 minutes par jour",
              ],
              correctIndex: 1,
              explanation:
                "Un process instable condamne le workflow à être réparé en permanence : on stabilise d'abord, on automatise ensuite. Lire le ton d'un email est justement devenu automatisable grâce aux LLM (avec garde-fous), les outils numériques sont le cas idéal, et 10 minutes par jour représentent plus de 43 heures par an.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Les briques : APIs et webhooks sans jargon",
      lessons: [
        {
          id: "l5",
          title: "Une API, c'est un guichet qui répond aux questions",
          type: "text",
          duration: "15 min",
          body:
            "## Le guichet derrière chaque outil\n\n" +
            "Chaque outil que tu utilises a deux entrées. La porte principale, c'est l'interface : les boutons, les pages, ce que tes yeux voient. Et il y a une porte de service, prévue pour les machines : l'**API** (Application Programming Interface). Quand Léa ouvre son back-office pour voir les commandes du jour, elle passe par la porte principale. Quand son futur workflow n8n récupérera les mêmes commandes, il frappera à la porte de service et recevra les mêmes données, sans page web autour.\n\n" +
            "Le principe tient en une phrase : **tu envoies une requête, le serveur renvoie une réponse**. Une requête, c'est une URL précise plus une intention. La réponse, c'est du texte structuré. Toute l'automatisation moderne, n8n compris, n'est que ça : des requêtes et des réponses enchaînées.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le cycle requête/réponse : ton workflow demande, l'API répond en JSON\"}\n" +
            "<svg viewBox=\"0 0 640 260\" role=\"img\"><title>Cycle requête réponse d'une API</title><defs><marker id=\"fl2\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\" opacity=\"0.7\"/></marker></defs><rect x=\"30\" y=\"80\" width=\"180\" height=\"100\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"120\" y=\"122\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">ton workflow</text><text x=\"120\" y=\"142\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">(client)</text><rect x=\"430\" y=\"80\" width=\"180\" height=\"100\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"520\" y=\"122\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">serveur API</text><text x=\"520\" y=\"142\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">(la boutique)</text><line x1=\"210\" y1=\"105\" x2=\"422\" y2=\"105\" stroke=\"currentColor\" class=\"fig-accent\" marker-end=\"url(#fl2)\"/><text x=\"320\" y=\"95\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">GET /orders?status=paid</text><line x1=\"430\" y1=\"155\" x2=\"218\" y2=\"155\" stroke=\"currentColor\" opacity=\"0.6\" marker-end=\"url(#fl2)\"/><text x=\"320\" y=\"178\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.8\">200 OK + JSON</text><text x=\"320\" y=\"226\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">1 requête = 1 réponse, jamais l'inverse</text></svg>\n" +
            "```\n\n" +
            "## Les verbes : demander ou modifier\n\n" +
            "Une requête porte un verbe (une méthode HTTP) qui annonce l'intention :\n\n" +
            "- `GET` : donne-moi des données, sans rien changer. Lire les commandes, lire la météo.\n" +
            "- `POST` : crée quelque chose ou envoie des données. Créer une ligne, envoyer un message.\n" +
            "- `PUT` et `PATCH` : modifie quelque chose qui existe.\n" +
            "- `DELETE` : supprime. À manier avec respect.\n\n" +
            "Retiens surtout la ligne de partage : `GET` est inoffensif, tout le reste modifie des choses. Quand tu testeras des APIs, commence toujours par des `GET`.\n\n" +
            "## Essaie, là, maintenant\n\n" +
            "Le plus court chemin pour démystifier une API, c'est d'en appeler une vraie. Open-Meteo est une API météo publique, gratuite et sans inscription. Ouvre un terminal (ou même juste ton navigateur, une URL de `GET` s'y colle très bien) :\n\n" +
            "```bash\n" +
            "curl \"https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true\"\n" +
            "```\n\n" +
            "`curl` est l'outil en ligne de commande qui envoie des requêtes HTTP, préinstallé sur Mac, Linux et Windows récents. La réponse arrive en une seconde :\n\n" +
            "```json\n" +
            "{\n" +
            "  \"latitude\": 48.86,\n" +
            "  \"longitude\": 2.36,\n" +
            "  \"current_weather\": {\n" +
            "    \"temperature\": 12.3,\n" +
            "    \"windspeed\": 18.7,\n" +
            "    \"weathercode\": 3\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Ce format s'appelle **JSON** (JavaScript Object Notation) et c'est la langue commune de toutes les APIs. Trois règles suffisent pour le lire :\n\n" +
            "- Les accolades `{}` délimitent un objet, un paquet de paires `\"clé\": valeur`.\n" +
            "- Les valeurs sont du texte entre guillemets, des nombres, `true`/`false`, ou un autre objet imbriqué.\n" +
            "- Les crochets `[]` délimitent une liste. Une liste de commandes, c'est `[ {...}, {...}, {...} ]`.\n\n" +
            "Tu n'écriras presque jamais de JSON à la main dans n8n, mais tu en liras tous les jours : chaque nœud affiche ses données de sortie en JSON. Savoir repérer que `temperature` vit à l'intérieur de `current_weather` te servira dès la partie 3, quand il faudra écrire `current_weather.temperature` pour attraper la valeur.\n\n" +
            "## Décortiquer l'URL\n\n" +
            "Reprends l'adresse appelée : `https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true`.\n\n" +
            "- `api.open-meteo.com` : le serveur.\n" +
            "- `/v1/forecast` : l'**endpoint**, le guichet précis. Une API en expose des dizaines (`/orders`, `/products`, `/customers`...). Le `v1` est un numéro de version : les APIs sérieuses versionnent pour ne pas casser tes workflows quand elles évoluent.\n" +
            "- Après le `?` : les **paramètres**, séparés par des `&`. Ici la latitude et la longitude de Paris, et l'option météo courante.\n\n" +
            "Où trouve-t-on la liste des guichets et des paramètres ? Dans la **documentation** de l'API. Cherche \"nom de l'outil + API docs\" : Shopify, Stripe, Notion, Airtable, tous publient la leur. Lire une doc d'API devient vite un réflexe : tu cherches l'endpoint qui correspond à ta question, tu regardes l'exemple de réponse JSON, et tu sais si l'automatisation est possible.\n\n" +
            "## Les codes de réponse, ton premier outil de debug\n\n" +
            "Chaque réponse arrive avec un code à trois chiffres qui résume ce qui s'est passé :\n\n" +
            "- `200` : tout va bien, voici tes données.\n" +
            "- `400` : ta requête est mal formée (paramètre manquant ou invalide).\n" +
            "- `401` / `403` : tu n'as pas montré patte blanche, ou pas les droits (leçon suivante).\n" +
            "- `404` : cet endpoint ou cette ressource n'existe pas. Souvent une faute de frappe dans l'URL.\n" +
            "- `429` : tu appelles trop vite, ralentis (chaque API a des limites de débit).\n" +
            "- `500` et plus : le serveur d'en face a un problème. Ce n'est pas ta faute, mais c'est ton problème quand même.\n\n" +
            "Mémorise au moins 200, 401, 404 et 429 : ce sont eux que tu croiseras dans n8n, et savoir les lire transforme un message d'erreur anxiogène en information banale.\n\n" +
            "## À toi\n\n" +
            "Modifie la requête Open-Meteo pour obtenir la météo de ta ville (cherche ses coordonnées GPS), puis trouve dans la réponse la vitesse du vent.\n\n" +
            "> Correction : remplace les valeurs de `latitude` et `longitude` dans l'URL, par exemple 45.76 et 4.83 pour Lyon. Dans le JSON reçu, la vitesse du vent est la clé `windspeed` à l'intérieur de l'objet `current_weather`. Si tu as reçu un code 400, vérifie que tu as bien gardé le `?` avant le premier paramètre et les `&` entre les suivants.\n",
        },
        {
          id: "l6",
          title: "Clés API : montrer patte blanche",
          type: "text",
          duration: "14 min",
          body:
            "## Pourquoi la météo était gratuite et tes commandes non\n\n" +
            "Open-Meteo répond à tout le monde parce que la météo de Paris n'appartient à personne. Les commandes de Léa, si. Quand son workflow demandera `GET /orders` à sa boutique, le serveur exigera une preuve d'identité. Cette preuve, dans la majorité des APIs, c'est une **clé API** : une longue chaîne de caractères générée dans les réglages de l'outil, qui dit à la fois qui tu es et ce que tu as le droit de faire.\n\n" +
            "Une clé API, c'est un badge d'immeuble. Il ouvre certaines portes et pas d'autres, il est révocable à distance, et si tu le prêtes, la personne agit en ton nom. Toute la sécurité de tes automatisations repose sur cette image.\n\n" +
            "## Où vit la clé dans une requête\n\n" +
            "La convention la plus répandue : un **header**, une ligne d'information qui accompagne la requête sans faire partie de l'URL. Voici à quoi ressemble un appel authentifié à l'API d'OpenAI, celle qu'on utilisera en partie 4 :\n\n" +
            "```bash\n" +
            "curl https://api.openai.com/v1/models \\\n" +
            "  -H \"Authorization: Bearer sk-proj-XXXXXXXXXXXX\"\n" +
            "```\n\n" +
            "Le `-H` ajoute un header. `Authorization: Bearer <clé>` est le format standard : \"porteur de ce jeton\". Si la clé est valide, tu reçois un `200` et la liste des modèles disponibles. Sans elle, ou avec une clé révoquée, la réponse est immédiate et sans ambiguïté :\n\n" +
            "```json\n" +
            "{\n" +
            "  \"error\": {\n" +
            "    \"message\": \"Incorrect API key provided...\",\n" +
            "    \"code\": \"invalid_api_key\"\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Code 401. Tu croiseras ce trio (header manquant, clé invalide, 401) des dizaines de fois : c'est l'erreur la plus fréquente de toute l'automatisation, et la plus facile à réparer.\n\n" +
            "Certaines APIs préfèrent d'autres emplacements : un header maison comme `X-API-Key`, ou un paramètre dans l'URL. La doc de chaque API précise son format, en général sur une page nommée \"Authentication\". C'est la première page à lire, avant même la liste des endpoints.\n\n" +
            "## Où trouver ta clé\n\n" +
            "Le chemin est presque toujours le même : réglages du compte, puis une section \"API\", \"Developers\" ou \"Integrations\". Deux exemples concrets :\n\n" +
            "- OpenAI : platform.openai.com, menu \"API keys\", bouton \"Create new secret key\". La clé commence par `sk-` et ne s'affiche qu'une fois : copie-la immédiatement dans un endroit sûr.\n" +
            "- Airtable, Notion, Slack : même logique, une page développeur où tu crées un jeton et choisis ses permissions.\n\n" +
            "Ce mot, **permissions** (ou scopes), mérite ton attention. Beaucoup d'outils te laissent créer une clé qui ne peut QUE lire, ou qui n'accède qu'à une seule base. Prends l'habitude de donner à chaque clé le minimum nécessaire : un workflow de lecture des commandes n'a aucune raison de détenir le droit de rembourser. Si la clé fuit un jour, les dégâts possibles sont bornés par ce que tu as coché à la création.\n\n" +
            "## Les trois règles d'hygiène\n\n" +
            "- **Une clé ne se partage pas en clair.** Jamais dans un email, un doc partagé, un canal Slack, une capture d'écran. Le bon endroit, on le verra en partie 3, c'est le coffre à credentials de n8n, chiffré et réutilisable entre workflows.\n" +
            "- **Une clé par usage.** Crée une clé dédiée \"n8n\" plutôt que de réutiliser celle d'un autre outil. Le jour où tu veux couper l'accès de n8n, tu révoques sa clé sans rien casser d'autre, et les journaux d'utilisation te disent qui a fait quoi.\n" +
            "- **Une clé qui fuit se révoque, tout de suite.** Pas de panique, pas de débat : tu la supprimes dans l'outil, tu en crées une neuve, tu mets à jour n8n. Cinq minutes. C'est exactement pour ça que les clés existent au lieu de ton mot de passe principal.\n\n" +
            "Dernier point de vocabulaire : certains outils utilisent **OAuth** au lieu d'une clé. C'est le fameux écran \"Autoriser n8n à accéder à votre compte Google\". Le principe est le même (un jeton avec des permissions), mais c'est l'outil qui gère la création et l'expiration du jeton à ta place. Dans n8n, tu cliqueras juste sur \"Connect\" et tu suivras l'écran. Moins de copier-coller, même vigilance sur les permissions accordées.\n\n" +
            "## À toi\n\n" +
            "Sans rien construire : choisis un outil que tu utilises vraiment (ta boutique, ton CRM, ton outil de facturation) et trouve trois choses dans sa doc : la page d'authentification, le format attendu (header ? paramètre ?), et l'endpoint qui liste tes données principales.\n\n" +
            "> Exemple avec Airtable : la page \"Authentication\" indique un header `Authorization: Bearer <personal access token>`, les jetons se créent sur airtable.com/create/tokens avec des scopes précis (par exemple `data.records:read` seul), et l'endpoint principal est `GET https://api.airtable.com/v0/{baseId}/{tableName}`. Si ton outil n'a pas de doc d'API du tout, c'est une information aussi : il faudra passer par d'autres chemins, ou changer d'outil un jour.\n",
        },
        {
          id: "l7",
          title: "Webhooks : l'API qui t'appelle",
          type: "text",
          duration: "15 min",
          body:
            "## Le problème du \"quoi de neuf ?\"\n\n" +
            "Avec ce que tu sais, comment réagir à une nouvelle commande dans la boutique de Léa ? Première idée : demander régulièrement. Toutes les cinq minutes, une requête `GET /orders` pour vérifier s'il y a du nouveau. Ça s'appelle du **polling**, et ça marche, mais regarde le coût : 288 requêtes par jour pour peut-être 10 commandes. 97 % des appels reviennent bredouilles, et une commande peut attendre presque cinq minutes avant d'être vue.\n\n" +
            "Deuxième idée, celle qui a gagné : inverser le sens. Tu donnes à la boutique une adresse à toi, et c'est ELLE qui envoie une requête à cette adresse au moment précis où l'événement se produit. Cette adresse s'appelle un **webhook**. Une sonnette, plutôt qu'un facteur que tu harcèlerais toutes les cinq minutes.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Polling contre webhook : demander en boucle, ou être prévenu à l'instant\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Comparaison entre polling et webhook</title><defs><marker id=\"fl3\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\" opacity=\"0.7\"/></marker></defs><text x=\"30\" y=\"32\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.8\">POLLING (tu demandes en boucle)</text><rect x=\"30\" y=\"48\" width=\"150\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"105\" y=\"75\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">workflow</text><rect x=\"460\" y=\"48\" width=\"150\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"535\" y=\"75\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">boutique</text><line x1=\"180\" y1=\"58\" x2=\"452\" y2=\"58\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl3)\"/><text x=\"316\" y=\"50\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">du nouveau ? (x288/jour)</text><line x1=\"452\" y1=\"82\" x2=\"188\" y2=\"82\" stroke=\"currentColor\" opacity=\"0.5\" marker-end=\"url(#fl3)\"/><text x=\"316\" y=\"104\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">non... non... non... oui</text><text x=\"30\" y=\"172\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\" opacity=\"0.8\">WEBHOOK (on te prévient)</text><rect x=\"30\" y=\"188\" width=\"150\" height=\"44\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"105\" y=\"215\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">workflow</text><rect x=\"460\" y=\"188\" width=\"150\" height=\"44\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"535\" y=\"215\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"13\" fill=\"currentColor\">boutique</text><line x1=\"460\" y1=\"210\" x2=\"188\" y2=\"210\" stroke=\"currentColor\" class=\"fig-accent\" marker-end=\"url(#fl3)\"/><text x=\"322\" y=\"200\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">POST + JSON, à l'instant T</text><text x=\"322\" y=\"264\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">1 commande = 1 appel, zéro requête à vide</text></svg>\n" +
            "```\n\n" +
            "## Anatomie d'un appel de webhook\n\n" +
            "Techniquement, un webhook n'est rien de nouveau : c'est une requête `POST` classique, envoyée par l'outil vers ton URL, avec l'événement en JSON dans le corps. Quand un client paie chez Léa, sa boutique enverra quelque chose comme :\n\n" +
            "```json\n" +
            "{\n" +
            "  \"event\": \"order.created\",\n" +
            "  \"order_id\": 4812,\n" +
            "  \"customer_email\": \"paul@exemple.fr\",\n" +
            "  \"total\": 64.90,\n" +
            "  \"items\": [\n" +
            "    { \"sku\": \"AFF-A2-CADRE\", \"quantity\": 1 }\n" +
            "  ]\n" +
            "}\n" +
            "```\n\n" +
            "Même grammaire JSON qu'à la leçon 5, simplement dans l'autre sens. API et webhook sont les deux moitiés d'une conversation : l'API, c'est quand tu poses la question ; le webhook, c'est quand on te prévient. Un workflow complet utilise souvent les deux, par exemple : webhook \"commande créée\" (on te prévient), puis appel API \"donne-moi le détail du client\" (tu complètes).\n\n" +
            "## D'où vient ton URL de webhook\n\n" +
            "C'est n8n qui te la fournit. Son nœud déclencheur **Webhook** génère une URL unique du genre :\n\n" +
            "```\n" +
            "https://ton-instance.app.n8n.cloud/webhook/commande-recue\n" +
            "```\n\n" +
            "Tu copies cette URL dans les réglages de l'outil émetteur, presque toujours dans une section nommée \"Webhooks\" ou \"Notifications\". Stripe, Shopify, Calendly, Typeform, GitHub : tous proposent cette case \"appelez cette URL quand X se produit\", avec le choix des événements qui déclenchent l'appel. Abonne-toi au strict nécessaire : recevoir tous les événements d'une boutique pour n'en traiter qu'un, c'est du bruit et des exécutions gaspillées.\n\n" +
            "Détail n8n à connaître dès maintenant : le nœud Webhook a deux URLs, une de **test** (`/webhook-test/...`) qui ne fonctionne que pendant que tu as cliqué sur \"Listen for test event\" dans l'éditeur, et une de **production** (`/webhook/...`) qui ne devient active qu'une fois le workflow activé. Neuf problèmes de débutant sur dix avec les webhooks viennent de la confusion entre ces deux URLs.\n\n" +
            "## Tester sans attendre une vraie commande\n\n" +
            "Grâce à curl, tu peux jouer le rôle de la boutique et sonner toi-même à ta porte :\n\n" +
            "```bash\n" +
            "curl -X POST \"https://ton-instance.app.n8n.cloud/webhook-test/commande-recue\" \\\n" +
            "  -H \"Content-Type: application/json\" \\\n" +
            "  -d '{\"event\": \"order.created\", \"order_id\": 9999, \"total\": 64.90}'\n" +
            "```\n\n" +
            "`-X POST` force le verbe, `-d` fournit le corps JSON, et le header `Content-Type` annonce son format. Cette commande est ton outil de répétition générale : tu simules l'événement autant de fois que nécessaire, avec les données que tu veux, y compris les cas tordus (total à zéro, email manquant) pour vérifier que ton workflow les encaisse.\n\n" +
            "## Deux réflexes de fiabilité\n\n" +
            "D'abord, un webhook peut arriver **en double**. Les émetteurs réessaient quand ils ne reçoivent pas de confirmation assez vite, c'est documenté chez Stripe comme chez Shopify. Si ton workflow envoie un email par commande reçue, une livraison en double signifie un client qui reçoit deux emails. La parade classique : vérifier si l'`order_id` a déjà été traité avant d'agir. On le mettra en pratique en partie 6.\n\n" +
            "Ensuite, ton URL de webhook est publique par construction : n'importe qui la connaissant peut y envoyer des requêtes. Pour un simple tri d'emails ce n'est pas dramatique, mais dès que le workflow agit (envoie, crée, modifie), active une vérification : la plupart des émetteurs signent leurs appels, et le nœud Webhook de n8n propose une authentification (Basic Auth ou header) dans ses options.\n\n" +
            "## À toi\n\n" +
            "Dans un outil que tu utilises, trouve la section webhooks et liste les événements disponibles. Lequel déclencherait l'automatisation la plus utile pour toi ?\n\n" +
            "> Exemples de réponses selon l'outil : Stripe expose `payment_intent.succeeded` et `invoice.payment_failed` (l'échec de paiement est souvent le plus rentable à automatiser : relance immédiate). Calendly expose `invitee.created` (rendez-vous pris : créer la fiche CRM et envoyer le questionnaire préparatoire). Typeform expose la réponse au formulaire, qu'on branchera justement dans la partie suivante, version n8n.\n",
        },
        {
          id: "l8",
          title: "Quiz : APIs et webhooks",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Ton appel d'API renvoie un code 401. Qu'est-ce que cela signifie et quel est le premier réflexe ?",
              options: [
                "Le serveur est en panne, il faut réessayer plus tard",
                "La ressource n'existe pas, il faut corriger l'URL",
                "L'authentification a échoué : vérifier que la clé API est présente, valide et envoyée au bon format",
                "Tu appelles trop souvent, il faut ralentir la fréquence",
              ],
              correctIndex: 2,
              explanation:
                "401 = non authentifié. C'est l'erreur la plus fréquente en automatisation : clé absente, révoquée, mal copiée ou envoyée dans le mauvais header. La panne serveur donnerait un 500, la ressource introuvable un 404 et l'excès d'appels un 429.",
            },
            {
              id: "q6",
              prompt:
                "Dans la réponse JSON {\"current_weather\": {\"temperature\": 12.3, \"windspeed\": 18.7}}, comment est organisée la donnée temperature ?",
              options: [
                "C'est une clé de premier niveau, accessible directement",
                "C'est une valeur imbriquée dans l'objet current_weather, accessible via current_weather.temperature",
                "C'est un élément de liste, accessible via un index [0]",
                "C'est du texte, car toutes les valeurs JSON sont entre guillemets",
              ],
              correctIndex: 1,
              explanation:
                "Les accolades imbriquées créent un objet dans l'objet : temperature vit à l'intérieur de current_weather, d'où le chemin current_weather.temperature. Ce n'est pas une liste (pas de crochets), et c'est un nombre, pas du texte (pas de guillemets autour de 12.3). Savoir lire ces chemins est indispensable dans n8n.",
            },
            {
              id: "q7",
              prompt:
                "Pourquoi préférer un webhook au polling pour réagir aux nouvelles commandes d'une boutique ?",
              options: [
                "Le webhook est plus sécurisé par nature, le polling ne peut pas être authentifié",
                "Le polling ne fonctionne qu'avec les APIs payantes",
                "Le webhook prévient à l'instant de l'événement sans requêtes à vide, alors que le polling multiplie les appels inutiles et ajoute un délai",
                "Le webhook permet de modifier les commandes, pas le polling",
              ],
              correctIndex: 2,
              explanation:
                "Avec le polling, tu interroges en boucle (des centaines d'appels à vide par jour) et une commande peut attendre tout l'intervalle avant d'être vue. Le webhook inverse le sens : l'outil t'appelle au moment exact de l'événement. Côté sécurité, les deux demandent la même vigilance, l'URL de webhook étant d'ailleurs publique.",
            },
            {
              id: "q8",
              prompt:
                "Tu crées une clé API pour ton workflow n8n de lecture des commandes. Quelle est la bonne pratique ?",
              options: [
                "Réutiliser la clé déjà créée pour ton site web, pour centraliser",
                "Créer une clé dédiée avec les permissions minimales (lecture seule des commandes), révocable indépendamment",
                "Donner toutes les permissions à la clé pour éviter les erreurs 403 futures",
                "Stocker la clé dans un document partagé avec l'équipe pour ne pas la perdre",
              ],
              correctIndex: 1,
              explanation:
                "Une clé par usage, avec le minimum de permissions : si elle fuit, les dégâts sont bornés, et tu peux couper l'accès de n8n sans casser le site. Tout donner \"au cas où\" est exactement l'anti-pattern, et une clé en clair dans un doc partagé finit toujours par fuiter. Le bon coffre, c'est le gestionnaire de credentials chiffré de n8n.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "n8n en pratique",
      lessons: [
        {
          id: "l9",
          title: "n8n, Make ou Zapier : choisir sans se tromper",
          type: "text",
          duration: "15 min",
          body:
            "## Trois outils, une même idée\n\n" +
            "Zapier, Make et n8n font le même métier : relier des outils entre eux avec des briques visuelles, sans coder. Les différences sont ailleurs : le prix, la façon de compter, et jusqu'où tu peux aller quand ton besoin sort des sentiers battus. Les prix qui suivent sont ceux constatés au moment où j'écris ; l'ordre de grandeur bouge peu, mais vérifie les pages pricing avant de sortir la carte bleue.\n\n" +
            "**Zapier** est le pionnier et le plus simple à prendre en main. Son offre gratuite plafonne à 100 tâches par mois, et les plans payants démarrent autour de 20 à 30 dollars mensuels pour environ 750 tâches. Le piège est dans le mot \"tâche\" : chaque étape d'un zap qui s'exécute en consomme une. Un scénario de 5 étapes déclenché 10 fois par jour brûle 1 500 tâches par mois. Beaucoup d'utilisateurs découvrent la facture réelle au troisième mois, quand leurs automatisations commencent enfin à servir.\n\n" +
            "**Make** (ex-Integromat) est le milieu de gamme malin : plus visuel que Zapier, nettement moins cher, avec une offre gratuite à 1 000 opérations par mois et un premier plan autour de 9 à 10 dollars pour 10 000 opérations. Même logique de comptage à l'étape (une \"opération\" par module exécuté), mais le tarif au volume est sans comparaison. Si tu veux du 100 % visuel sans jamais t'approcher d'un serveur, Make est un choix honnête.\n\n" +
            "**n8n** compte autrement, et c'est son premier argument : une exécution de workflow = 1, quel que soit le nombre de nœuds dedans. Ton scénario de 25 étapes déclenché 10 fois par jour coûte 300 exécutions par mois, pas 7 500. L'offre cloud démarre autour de 20 euros par mois pour 2 500 exécutions, le plan Pro autour de 50 euros pour 10 000. Et surtout, n8n peut s'**auto-héberger**.\n\n" +
            "## Self-host ou cloud : la vraie question n8n\n\n" +
            "Le code de n8n est publié sous une licence dite fair-code (Sustainable Use License) : tu peux l'installer sur ta propre machine et l'utiliser pour ton activité sans payer la licence. Ce qui reste à ta charge : un petit serveur et un peu d'entretien.\n\n" +
            "- **Auto-hébergé** : un VPS d'entrée de gamme suffit largement pour démarrer (2 vCPU, 4 Go de RAM, entre 5 et 10 euros par mois chez Hetzner, OVH ou DigitalOcean). Exécutions illimitées, données chez toi, accès à toutes les fonctions techniques. En échange : c'est toi qui installes (une commande Docker), qui mets à jour, qui sauvegardes, et qui répares à 23 h quand le disque est plein.\n" +
            "- **Cloud (n8n.cloud)** : tu payes pour ne penser à rien. Mises à jour, disponibilité, sauvegardes : gérées. Tu comptes tes exécutions, et 2 500 par mois couvrent très confortablement un business individuel (les quatre workflows de Léa en partie 5 en consommeront moins de 900).\n\n" +
            "Mon avis, après avoir installé les deux configurations des dizaines de fois : si tu découvres, prends le cloud, ou le VPS si tu as déjà touché à Docker et que l'idée de gérer un serveur ne te réveille pas la nuit. La pire option est de passer ta première semaine à débugger une installation au lieu de construire ton premier workflow. Tu pourras toujours migrer plus tard : les workflows s'exportent en un fichier JSON et se réimportent tels quels d'une instance à l'autre.\n\n" +
            "## Le tableau de décision\n\n" +
            "| Critère | Zapier | Make | n8n |\n" +
            "| --- | --- | --- | --- |\n" +
            "| Prise en main | la plus simple | simple | une soirée d'apprentissage |\n" +
            "| Comptage | par étape exécutée | par opération | par exécution complète |\n" +
            "| Premier plan payant | ~20-30 $/mois | ~9-10 $/mois | ~20 €/mois (ou VPS ~5-10 €) |\n" +
            "| Auto-hébergement | non | non | oui |\n" +
            "| Nœud LLM natif et code sur mesure | limité | correct | complet |\n\n" +
            "Pourquoi ce cours a choisi n8n : le comptage à l'exécution pardonne les workflows riches (et les nôtres le seront, avec l'IA dedans), l'auto-hébergement garde tes données d'emails et de clients chez toi si tu y tiens, et le nœud Code permet de sortir des rails quand un cas ne rentre dans aucune brique standard. La contrepartie est réelle : l'interface parle un langage un peu plus technique. C'est exactement le fossé que la suite de cette partie va combler.\n\n" +
            "## Ouvre ton instance maintenant\n\n" +
            "Avant la prochaine leçon, il te faut un n8n qui tourne. Deux chemins :\n\n" +
            "1. **Cloud** : crée un compte d'essai sur n8n.io (l'essai est gratuit et ne demande pas de carte). Tu obtiens une adresse du type `ton-nom.app.n8n.cloud`.\n" +
            "2. **Local, pour essayer sans serveur** : si Docker est installé sur ta machine, une seule commande lance n8n sur ton ordinateur :\n\n" +
            "```bash\n" +
            "docker run -it --rm -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n\n" +
            "```\n\n" +
            "Puis ouvre `http://localhost:5678`. Le `-v n8n_data:...` garde tes workflows entre deux lancements. Attention, un n8n sur ton portable ne reçoit pas de webhooks depuis internet et s'arrête avec la machine : c'est un bac à sable, pas de la production.\n\n" +
            "> À retenir : Zapier vend la simplicité, Make le prix, n8n la liberté et un comptage qui ne punit pas les workflows ambitieux. Et quel que soit l'outil, la partie 1 reste vraie : c'est le choix de la tâche qui fait la rentabilité, pas le logo de l'outil.\n",
        },
        {
          id: "l10",
          title: "Nœuds, items, connexions : lire un workflow",
          type: "text",
          duration: "14 min",
          body:
            "## La grammaire de l'éditeur\n\n" +
            "Ouvre ton n8n, crée un workflow vide, et posons le vocabulaire une bonne fois. Un **workflow** est un enchaînement de **nœuds** (nodes) reliés par des **connexions**. Chaque nœud fait une chose : recevoir un événement, appeler une API, filtrer, transformer, envoyer. Les données circulent de gauche à droite le long des connexions.\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'anatomie d'un workflow n8n : un déclencheur, des nœuds, des items qui circulent\"}\n" +
            "<svg viewBox=\"0 0 640 280\" role=\"img\"><title>Anatomie d'un workflow n8n</title><defs><marker id=\"fl4\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"currentColor\" opacity=\"0.7\"/></marker></defs><rect x=\"22\" y=\"96\" width=\"130\" height=\"52\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"87\" y=\"118\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">Schedule</text><text x=\"87\" y=\"134\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">Trigger</text><text x=\"87\" y=\"170\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"11\" fill=\"currentColor\" opacity=\"0.6\">déclencheur</text><line x1=\"152\" y1=\"122\" x2=\"192\" y2=\"122\" stroke=\"currentColor\" opacity=\"0.55\" marker-end=\"url(#fl4)\"/><rect x=\"200\" y=\"96\" width=\"130\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"265\" y=\"118\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">HTTP</text><text x=\"265\" y=\"134\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">Request</text><text x=\"265\" y=\"170\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"11\" fill=\"currentColor\" opacity=\"0.6\">3 items</text><line x1=\"330\" y1=\"122\" x2=\"370\" y2=\"122\" stroke=\"currentColor\" opacity=\"0.55\" marker-end=\"url(#fl4)\"/><rect x=\"378\" y=\"96\" width=\"110\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"433\" y=\"126\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">IF</text><text x=\"433\" y=\"170\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"11\" fill=\"currentColor\" opacity=\"0.6\">décision</text><line x1=\"488\" y1=\"110\" x2=\"528\" y2=\"70\" stroke=\"currentColor\" opacity=\"0.55\" marker-end=\"url(#fl4)\"/><text x=\"496\" y=\"78\" font-family=\"ui-monospace, monospace\" font-size=\"11\" fill=\"currentColor\" opacity=\"0.7\">true</text><rect x=\"532\" y=\"40\" width=\"96\" height=\"48\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"580\" y=\"68\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\">Send Email</text><line x1=\"488\" y1=\"134\" x2=\"528\" y2=\"176\" stroke=\"currentColor\" opacity=\"0.55\" marker-end=\"url(#fl4)\"/><text x=\"492\" y=\"172\" font-family=\"ui-monospace, monospace\" font-size=\"11\" fill=\"currentColor\" opacity=\"0.7\">false</text><rect x=\"532\" y=\"156\" width=\"96\" height=\"48\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.45\"/><text x=\"580\" y=\"184\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.8\">rien</text><text x=\"320\" y=\"246\" text-anchor=\"middle\" font-family=\"ui-monospace, monospace\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">les items circulent de gauche à droite le long des connexions</text></svg>\n" +
            "```\n\n" +
            "## Le déclencheur, toujours en premier\n\n" +
            "Tout workflow commence par un nœud **déclencheur** (trigger), reconnaissable à son bord gauche arrondi et à l'absence d'entrée. Les quatre que tu utiliseras sans arrêt :\n\n" +
            "- **Schedule Trigger** : à heure fixe ou à intervalle. Tous les jours à 8 h, toutes les 15 minutes.\n" +
            "- **Webhook** : quand un outil extérieur appelle ton URL (leçon 7).\n" +
            "- **n8n Form Trigger** : n8n héberge lui-même un petit formulaire web et démarre à chaque réponse. C'est lui qu'on utilise à la leçon suivante.\n" +
            "- Les déclencheurs d'applications : **Gmail Trigger**, **Shopify Trigger** et compagnie, qui emballent le webhook ou le polling de l'outil pour toi.\n\n" +
            "Un workflow sans déclencheur actif ne fait rien, jamais. Et un workflow **désactivé** (l'interrupteur en haut à droite de l'éditeur) n'écoute rien en production, même parfaitement construit. C'est l'oubli le plus classique du monde : tout tester, tout vérifier, fermer l'onglet, et ne jamais comprendre pourquoi rien ne se passe. L'interrupteur, toujours l'interrupteur.\n\n" +
            "## Les items : la notion qui explique tout\n\n" +
            "Voici le concept qui différencie ceux qui subissent n8n de ceux qui le comprennent. Les données circulent sous forme d'**items** : des paquets JSON transportés d'un nœud au suivant. Et la règle d'or : **chaque nœud s'exécute une fois par item reçu**.\n\n" +
            "Concrètement : ton HTTP Request rapporte les commandes du jour, il en sort 3 items. Si tu branches derrière un nœud d'envoi d'email, il enverra 3 emails, un par commande, sans que tu écrives la moindre boucle. C'est magique dans le bon sens... et dans le mauvais : si tu voulais UN email récapitulatif et que le nœud reçoit 30 items, tu viens d'envoyer 30 emails. Quand un comportement te surprend dans n8n, la première question est toujours : combien d'items entrent dans ce nœud ? Le nombre s'affiche sur la connexion et en haut du panneau de sortie de chaque nœud.\n\n" +
            "## Les nœuds à tout faire\n\n" +
            "Une poignée de nœuds génériques revient dans quasiment tous les workflows. Retiens leurs vrais noms, tu les chercheras dans le panneau d'ajout (touche Tab ou le +) :\n\n" +
            "- **HTTP Request** : appelle n'importe quelle API, le couteau suisse absolu. Tout ce que tu as vu avec curl se transpose dedans : URL, méthode, headers, corps.\n" +
            "- **IF** : aiguille les items en deux sorties, true et false, selon des conditions. **Switch** fait pareil avec plus de deux branches.\n" +
            "- **Edit Fields (Set)** : crée, renomme ou nettoie des champs. Idéal pour ne garder que ce qui t'intéresse.\n" +
            "- **Code** : du JavaScript quand aucune brique ne suffit. Tu n'en auras presque jamais besoin au début, mais c'est la sortie de secours qui fait que n8n ne te bloque jamais.\n" +
            "- **Merge** : réunit deux branches. **Filter** : jette les items qui ne passent pas une condition. **Wait** : met le workflow en pause.\n\n" +
            "Et pour parler aux outils du quotidien, les nœuds d'applications : Gmail, Google Sheets, Slack, Notion, Airtable, Telegram, Shopify... Plusieurs centaines d'intégrations, chacune exposant les opérations de l'outil (créer une ligne, envoyer un message, chercher un contact) sans que tu touches à son API.\n\n" +
            "## Exécuter et regarder\n\n" +
            "Dernier réflexe de lecture : le bouton \"Execute workflow\" lance une exécution de test, et chaque nœud affiche alors ce qui lui est entré et sorti. Clique sur un nœud après une exécution : le panneau montre les items en JSON ou en tableau. Cette transparence est ton meilleur outil d'apprentissage : tu VOIS les données se transformer nœud après nœud. L'onglet \"Executions\" (dans la barre latérale) garde l'historique, on s'en servira sérieusement en partie 6.\n\n" +
            "## À toi\n\n" +
            "Construis ce mini-workflow d'observation : un Schedule Trigger, puis un HTTP Request vers l'API météo de la leçon 5 (méthode GET, l'URL complète avec ses paramètres), puis un Edit Fields (Set) qui ne garde qu'un champ `temperature`. Exécute et observe les panneaux.\n\n" +
            "> Points de contrôle : la sortie du HTTP Request contient un item avec tout le JSON météo. Dans Edit Fields, ajoute un champ `temperature` et tape dedans `{{ $json.current_weather.temperature }}` : ces doubles accolades sont une **expression** n8n, la façon d'attraper une valeur venue du nœud précédent. Si tu vois la température apparaître en vert en aperçu, tu viens d'utiliser le mécanisme qui alimente tous les workflows de la suite du cours.\n",
        },
        {
          id: "l11",
          title: "Premier workflow complet : formulaire vers email",
          type: "text",
          duration: "16 min",
          body:
            "## Ce qu'on construit\n\n" +
            "Léa reçoit ses demandes de devis pour les commandes sur mesure par un formulaire. Aujourd'hui, elle recopie chaque demande dans un email qu'elle s'envoie, avec un niveau de priorité selon le budget. Trente secondes par demande, dix fois par semaine, et surtout des oublis. On automatise exactement ça, de bout en bout : **un formulaire hébergé par n8n, un tri par budget, un email qui part tout seul**. C'est le \"hello world\" de l'automatisation, et il contient déjà tous les gestes des workflows sérieux.\n\n" +
            "## Étape 1 : le formulaire\n\n" +
            "Dans un workflow vide, ajoute le nœud **n8n Form Trigger**. Configure :\n\n" +
            "- Form Title : `Demande de devis`.\n" +
            "- Form Fields, trois champs : `Votre email` (type Email, requis), `Votre projet` (type Textarea, requis), `Budget approximatif en euros` (type Number, requis).\n\n" +
            "Le nœud te donne deux URLs, comme le Webhook de la leçon 7 : une **Test URL** (active seulement pendant l'écoute de test) et une **Production URL** (active une fois le workflow activé). Clique sur \"Execute workflow\", ouvre la Test URL dans un autre onglet : ton formulaire existe, hébergé par n8n, sans écrire une ligne de HTML. Remplis-le avec des données bidon (par exemple un budget de 450) et envoie.\n\n" +
            "Retour dans l'éditeur : le nœud a capturé un item. Ouvre son panneau de sortie, tu y trouves tes trois réponses en JSON, avec les noms de champs exacts. Note-les, ils servent tout de suite.\n\n" +
            "## Étape 2 : le tri\n\n" +
            "Ajoute un nœud **IF** derrière le formulaire. On veut séparer les demandes à gros budget (500 euros et plus) des autres. Dans les conditions :\n\n" +
            "- Valeur de gauche : `{{ $json['Budget approximatif en euros'] }}` (glisse simplement le champ depuis le panneau de gauche, n8n écrit l'expression pour toi ; les crochets remplacent le point quand le nom de champ contient des espaces).\n" +
            "- Opérateur : Number, \"is greater than or equal\".\n" +
            "- Valeur de droite : `500`.\n\n" +
            "Deux sorties apparaissent : true en haut, false en bas. Le glisser-déposer depuis le panneau d'entrée est LE geste n8n à prendre : il évite 100 % des fautes de frappe dans les expressions.\n\n" +
            "## Étape 3 : les emails\n\n" +
            "Sur la branche true, ajoute un nœud **Send Email** (SMTP) ou **Gmail** selon ce que tu utilises ; pour Gmail, l'opération est \"Send\" sur la ressource Message. Configure :\n\n" +
            "- To : ton adresse.\n" +
            "- Subject : `PRIORITAIRE - Devis {{ $json['Budget approximatif en euros'] }} EUR`.\n" +
            "- Message : reprends les champs du formulaire, par exemple :\n\n" +
            "```\n" +
            "Nouvelle demande de devis.\n\n" +
            "Contact : {{ $json['Votre email'] }}\n" +
            "Budget : {{ $json['Budget approximatif en euros'] }} EUR\n" +
            "Projet : {{ $json['Votre projet'] }}\n" +
            "```\n\n" +
            "Sur la branche false, duplique ce nœud (clic droit, Duplicate) et retire juste le PRIORITAIRE du sujet. À la première utilisation d'un nœud Gmail ou SMTP, n8n te demandera de créer un **credential** : c'est l'objet de la leçon suivante, suis simplement l'écran de connexion pour l'instant.\n\n" +
            "## Étape 4 : tester, puis activer\n\n" +
            "Refais un test complet : Execute workflow, formulaire, envoi. Suis visuellement l'item : formulaire, IF, branche du haut ou du bas selon le budget, email. Ouvre ta boîte : le message est là, avec les bonnes valeurs aux bons endroits. Teste les DEUX branches (une soumission à 450, une à 900), et le cas limite : 500 tout rond doit partir en prioritaire, puisque l'opérateur est \"supérieur ou égal\".\n\n" +
            "Puis le geste qui rend la chose réelle : l'interrupteur **Active** en haut à droite. À partir de là, c'est la Production URL du formulaire qui fonctionne, en permanence, même ton ordinateur éteint. C'est elle que tu partagerais sur ton site. La Test URL, elle, ne marche plus qu'en mode écoute : neuf \"mon formulaire est cassé\" sur dix viennent d'un lien de test partagé au lieu du lien de production.\n\n" +
            "## Ce que tu viens d'apprendre, en vrai\n\n" +
            "Prends une seconde pour mesurer : tu as utilisé un déclencheur, lu la sortie JSON d'un nœud, écrit des expressions `{{ }}`, créé une branche conditionnelle, connecté un service externe avec un credential, testé les deux chemins et un cas limite, et activé en production. Il n'y a rien de plus dans un workflow à 25 nœuds, juste plus de nœuds.\n\n" +
            "## À toi\n\n" +
            "Ajoute une troisième issue : les demandes sans budget sérieux (moins de 50 euros) ne doivent générer aucun email, juste être ignorées. Deux chemins possibles, cherche avant de lire la correction.\n\n" +
            "> Correction : le plus propre est un nœud **Filter** juste après le formulaire, condition \"Budget is greater than or equal 50\" : les items en dessous s'arrêtent là, le reste continue vers le IF. L'alternative est de remplacer le IF par un **Switch** à trois règles (moins de 50, de 50 à 499, 500 et plus) avec la première branche laissée sans suite. Les deux marchent ; le Filter dit plus clairement l'intention \"on écarte\", le Switch centralise les seuils. Ce genre de choix de lisibilité, c'est déjà de l'artisanat de workflow.\n",
        },
        {
          id: "l12",
          title: "Credentials et messages d'erreur : lire ce que n8n te dit",
          type: "text",
          duration: "15 min",
          body:
            "## Le coffre à credentials\n\n" +
            "À la leçon précédente, n8n t'a demandé de \"créer un credential\" pour envoyer l'email. Posons proprement ce que c'est : un credential est une fiche d'identité stockée par n8n (clé API, login OAuth, mot de passe SMTP), **chiffrée** dans sa base, et référencée par les nœuds qui en ont besoin. Tu la crées une fois, tous tes workflows la réutilisent. Le menu \"Credentials\" de la barre latérale liste toutes tes connexions.\n\n" +
            "Deux formes selon les outils, tu les reconnaîtras à l'écran de création :\n\n" +
            "- **Clé API** : tu colles la clé récupérée comme à la leçon 6. Champ, coller, sauvegarder.\n" +
            "- **OAuth2** : un bouton \"Sign in with...\" ouvre l'écran d'autorisation de l'outil (Google, Slack...). Pas de clé à copier, mais un jeton qui peut expirer : si un workflow Gmail qui marchait depuis des mois tombe en panne avec une erreur d'authentification, la reconnexion du credential est le premier geste, avant toute autre hypothèse.\n\n" +
            "Bonne nouvelle : la plupart des nœuds proposent un test à la sauvegarde du credential. Prends l'habitude de vérifier ce petit \"Connection tested successfully\" avant de continuer : une erreur attrapée là se répare en trente secondes, la même erreur découverte au milieu d'un workflow te coûtera vingt minutes de fausses pistes.\n\n" +
            "## Anatomie d'une erreur n8n\n\n" +
            "Ton workflow va casser. Pas peut-être : il va casser, c'est le fonctionnement normal d'un système qui dépend de services extérieurs. La compétence qui change tout n'est pas d'éviter les erreurs, c'est de les **lire**. Quand un nœud échoue, il devient rouge, et son panneau affiche le message. Voici les cinq familles qui couvrent l'essentiel de ce que tu verras, avec leur traduction :\n\n" +
            "- `Authorization failed - please check your credentials` : le grand classique. La clé est fausse, révoquée ou expirée. Va dans Credentials, reconnecte ou recolle la clé. Correspond au 401 de la partie 2.\n" +
            "- `The resource you are requesting could not be found` (ou un 404 brut dans HTTP Request) : l'URL ou l'identifiant n'existe pas. Faute de frappe dans l'endpoint, identifiant d'une ressource supprimée, ou variable vide au milieu de l'URL : regarde l'URL réellement appelée dans les détails de l'erreur.\n" +
            "- Un 429 ou un message de \"rate limit\" : trop d'appels trop vite. On verra les retries en partie 6 ; en attendant, espace tes exécutions de test.\n" +
            "- `ECONNREFUSED` ou `getaddrinfo ENOTFOUND` : personne ne répond à cette adresse. Le service est éteint, ou le nom de domaine est mal écrit. Ce n'est pas un refus, c'est un silence.\n" +
            "- `Cannot read properties of undefined (reading 'x')` : celle-là vient de tes données, pas du réseau. Une expression cherche un champ dans quelque chose qui n'existe pas : l'item n'a pas la structure attendue. Ouvre la sortie du nœud PRÉCÉDENT et regarde la vraie forme du JSON.\n\n" +
            "Le réflexe transversal : **remonter au dernier nœud vert**. Une erreur au nœud 6 avec des données bizarres vient souvent du nœud 3. L'exécution te montre les items à chaque étape ; le point exact où les données cessent de ressembler à ce que tu attendais, c'est là qu'est le vrai bug.\n\n" +
            "## L'historique des exécutions\n\n" +
            "L'onglet **Executions** (barre latérale, ou l'onglet du même nom dans le workflow) liste chaque exécution avec son statut. Clique sur une ligne : n8n rejoue l'exécution sous tes yeux, avec les données réelles de ce moment-là, nœud par nœud. C'est ton enregistreur de vol. Un client dit qu'il n'a pas reçu son email mardi ? Tu ouvres l'exécution de mardi et tu VOIS : le formulaire est arrivé, le IF a envoyé l'item dans la branche du bas, l'email est parti à telle adresse. Fin du mystère.\n\n" +
            "Vérifie dans les réglages du workflow (les trois points en haut à droite, puis Settings) que les exécutions de production sont bien conservées, y compris les réussites, au moins pendant tes premières semaines : \"Save successful production executions\" doit être actif. Débugger sans historique, c'est enquêter sans témoin.\n\n" +
            "## Provoque tes pannes avant la production\n\n" +
            "Le conseil le moins appliqué et le plus rentable de cette partie : casse ton workflow toi-même, maintenant, pendant que c'est sans conséquence. Trois sabotages instructifs sur le workflow de la leçon 11 :\n\n" +
            "1. Modifie une lettre de l'URL dans un HTTP Request : tu obtiens ton `ENOTFOUND` ou ton 404, et tu sais à quoi ils ressemblent.\n" +
            "2. Renomme un champ du formulaire sans mettre à jour l'expression de l'email : l'email part avec un trou (`undefined`). Note bien ça : certaines erreurs ne font PAS d'erreur. Le workflow reste vert et le résultat est faux. Ce sont les pires, et c'est le sujet du monitoring en partie 6.\n" +
            "3. Soumets un budget vide ou négatif si tu as retiré le \"requis\" : observe quelle branche du IF l'attrape.\n\n" +
            "Quinze minutes de sabotage volontaire t'éviteront des heures de panique le jour où ces messages apparaîtront tout seuls.\n\n" +
            "## À toi\n\n" +
            "Un workflow qui tournait depuis trois mois s'arrête avec `Authorization failed - please check your credentials` sur le nœud Gmail. Rien n'a changé dans le workflow. Déroule ton diagnostic avant de lire la suite.\n\n" +
            "> Diagnostic type : rien n'a changé DANS le workflow, donc le problème est dehors. Un credential OAuth peut expirer ou être révoqué (changement de mot de passe Google, alerte de sécurité, autorisation retirée dans les réglages du compte). Direction Credentials, reconnexion du compte Gmail, re-test : réglé dans 90 % des cas. La leçon générale : un workflow qui casse sans modification, c'est presque toujours une dépendance extérieure qui a bougé, credentials en tête de liste.\n",
        },
        {
          id: "l13",
          title: "Quiz : n8n en pratique",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Un scénario de 20 étapes se déclenche 15 fois par jour (environ 450 fois par mois). Pourquoi le comptage de n8n est-il avantageux ici ?",
              options: [
                "n8n ne compte que les nœuds qui échouent",
                "n8n compte 450 exécutions par mois, alors qu'un comptage par étape (Zapier, Make) compterait environ 9 000 tâches ou opérations",
                "n8n est toujours gratuit quel que soit le volume",
                "Les workflows de plus de 10 étapes sont interdits chez Zapier et Make",
              ],
              correctIndex: 1,
              explanation:
                "n8n facture à l'exécution du workflow complet : 15 par jour = environ 450 par mois, ce qui tient dans le premier plan cloud (2 500). Zapier et Make comptent chaque étape exécutée : 20 x 450 = 9 000 tâches, ce qui change de gamme de prix. Plus tes workflows sont riches, plus la différence pèse.",
            },
            {
              id: "q10",
              prompt:
                "Ton nœud HTTP Request rapporte 30 commandes (30 items) et tu branches derrière un nœud Gmail pour t'envoyer un récapitulatif. Que se passe-t-il ?",
              options: [
                "Gmail envoie un seul email contenant les 30 commandes",
                "Gmail refuse de s'exécuter car il y a trop d'items",
                "Gmail s'exécute une fois par item : 30 emails partent",
                "Seul le premier item est traité, les 29 autres sont ignorés",
              ],
              correctIndex: 2,
              explanation:
                "Règle d'or de n8n : chaque nœud s'exécute une fois par item reçu. 30 items en entrée du nœud Gmail = 30 emails. Pour un récapitulatif unique, il faut d'abord regrouper les 30 items en un seul (par exemple avec un nœud Code ou une agrégation) avant l'envoi. Toujours vérifier le nombre d'items affiché sur la connexion.",
            },
            {
              id: "q11",
              prompt:
                "Ton formulaire n8n fonctionnait pendant les tests, mais l'URL partagée sur ton site ne répond plus. Cause la plus probable ?",
              options: [
                "n8n limite chaque formulaire à 10 soumissions",
                "Tu as partagé la Test URL, qui n'écoute que pendant les tests dans l'éditeur : il fallait activer le workflow et partager la Production URL",
                "Le nœud n8n Form Trigger doit être remplacé par un Webhook pour la production",
                "Les formulaires n8n ne fonctionnent qu'en auto-hébergement",
              ],
              correctIndex: 1,
              explanation:
                "Le n8n Form Trigger (comme le Webhook) a deux URLs : la Test URL ne vit que pendant l'écoute de test, la Production URL ne s'active qu'avec l'interrupteur Active du workflow. Partager le lien de test est l'erreur de débutant la plus fréquente sur les déclencheurs n8n.",
            },
            {
              id: "q12",
              prompt:
                "Un nœud affiche l'erreur \"Cannot read properties of undefined (reading 'email')\". Où chercher en premier ?",
              options: [
                "Dans les credentials : c'est forcément une clé expirée",
                "Dans la sortie du nœud précédent : une expression cherche un champ email dans des données qui n'ont pas la structure attendue",
                "Dans les réglages du compte n8n : le quota d'exécutions est dépassé",
                "Sur la page de statut de l'API appelée : le serveur distant est en panne",
              ],
              correctIndex: 1,
              explanation:
                "Cette erreur vient des données, pas du réseau ni de l'authentification : une expression tente de lire un champ dans quelque chose d'inexistant. Le bon réflexe est d'ouvrir la sortie du nœud précédent pour voir la vraie forme du JSON, puis de corriger le chemin de l'expression ou de gérer le cas où le champ manque.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Ajouter l'IA dans les workflows",
      lessons: [
        {
          id: "l14",
          title: "Brancher un cerveau : les nœuds LLM de n8n",
          type: "text",
          duration: "15 min",
          body:
            "## Ce que l'IA change dans un workflow\n\n" +
            "Reprends le IF de la leçon 11 : il sait comparer un nombre à 500. Demande-lui maintenant de décider si un email de client est \"mécontent\", et il est muet : aucune règle simple ne capture le ton d'un message. C'est précisément le trou que bouche un LLM (large language model, le moteur derrière ChatGPT et ses concurrents) : **un nœud qui prend du texte flou en entrée et rend une décision, un résumé ou des données structurées en sortie**.\n\n" +
            "Dans un workflow, un appel LLM n'a rien de mystique. C'est un appel d'API comme un autre : tu envoies un texte (le prompt), tu reçois un texte, il coûte quelques fractions de centime, et il met une à trois secondes. Tout ce que tu sais des parties 2 et 3 s'applique : credentials, items, erreurs 401 et 429.\n\n" +
            "## Les trois usages qui paient\n\n" +
            "En production, chez de vrais indépendants, trois usages représentent l'écrasante majorité de la valeur :\n\n" +
            "- **Classer.** Ranger un texte dans une catégorie d'une liste fermée : cet email est-il SAV, commande, partenariat ou spam ? Ce ticket est-il urgent ? C'est l'usage le plus fiable, parce que la sortie est contrainte.\n" +
            "- **Résumer.** Compresser du texte long : trois pages de conditions fournisseur en cinq lignes, dix articles de veille en un digest. Fiable aussi, tant qu'on n'exige pas l'exhaustivité.\n" +
            "- **Extraire.** Transformer du texte libre en champs structurés : sortir nom, dimensions et délai souhaité d'une demande de devis rédigée en paragraphe. L'usage le plus puissant, celui qui transforme des emails en lignes de tableur.\n\n" +
            "Tu remarqueras ce qui manque : \"rédiger et envoyer sans relecture\". On y viendra, avec des pincettes, dans les leçons 16 et 20.\n\n" +
            "## Les nœuds concrets dans n8n\n\n" +
            "Dans le panneau d'ajout de nœuds, la section AI regroupe tout. Trois briques à connaître, de la plus simple à la plus ambitieuse :\n\n" +
            "- **Le nœud OpenAI** (ou son équivalent Anthropic, Google Gemini...) : la brique directe. Ressource \"Text\", opération \"Message a Model\" : tu choisis le modèle, tu écris le prompt, la réponse sort dans un champ de l'item. Pour 90 % des cas de ce cours, c'est tout ce qu'il faut.\n" +
            "- **Basic LLM Chain** : même idée, mais en deux morceaux : le nœud de chaîne porte le prompt, et un sous-nœud de modèle (par exemple **OpenAI Chat Model**) s'y accroche par une connexion spéciale. L'intérêt : changer de fournisseur de modèle sans réécrire le prompt, et accéder aux options avancées de la famille de nœuds IA de n8n.\n" +
            "- **AI Agent** : le nœud qui donne au modèle des outils (chercher sur le web, interroger une base) et le laisse décider de ses propres étapes. Puissant, imprévisible par construction, et hors sujet pour automatiser des tâches répétitives : quand tu connais les étapes, écris-les en nœuds. Mon conseil ferme : pas d'AI Agent avant d'avoir six mois de workflows classiques derrière toi.\n\n" +
            "Côté branchement : crée un compte sur platform.openai.com, génère une clé API (leçon 6, elle commence par `sk-`), charge quelques euros de crédit, et colle la clé dans un credential n8n à la première utilisation du nœud. Note que l'API est payante à l'usage et séparée de l'abonnement ChatGPT : les deux ne partagent rien.\n\n" +
            "## Premier appel : classer une demande\n\n" +
            "Ajoute un nœud OpenAI derrière ton formulaire de devis (leçon 11), avec le modèle `gpt-4o-mini` (le petit modèle rapide et peu cher, largement suffisant pour classer) et ce prompt :\n\n" +
            "```\n" +
            "Tu classes des demandes de devis pour une créatrice d'affiches.\n" +
            "Réponds par un seul mot parmi : CADRE, GRAND_FORMAT, ENTREPRISE, AUTRE.\n\n" +
            "Demande : {{ $json['Votre projet'] }}\n" +
            "```\n\n" +
            "Exécute avec une soumission de test. La réponse arrive dans la sortie du nœud (champ `message.content` pour le nœud OpenAI), et tu peux brancher un Switch dessus pour router chaque type de demande vers un traitement différent. Ton workflow vient de comprendre du texte libre.\n\n" +
            "## Choisir la taille du modèle\n\n" +
            "Chaque fournisseur propose une gamme : des petits modèles (gpt-4o-mini et équivalents) rapides et quasi gratuits, des gros modèles dix à trente fois plus chers et plus malins. La règle d'atelier : **commence toujours par le petit**. Pour classer en quatre catégories ou extraire trois champs, le petit modèle fait jeu égal avec le gros ; la différence ne se voit que sur la rédaction fine ou le raisonnement long. On chiffrera tout ça à la leçon 16, mais garde l'ordre de grandeur en tête : au tarif actuel de gpt-4o-mini, classer un email coûte de l'ordre d'un centième de centime.\n\n" +
            "Dernier réglage qui compte : la **température**, disponible dans les options du nœud. C'est le curseur de créativité du modèle. Pour classer et extraire, mets-la basse (0 ou 0.1) : tu veux la même réponse pour la même entrée, pas de fantaisie. Garde les valeurs hautes pour la génération de brouillons créatifs.\n\n" +
            "## À toi\n\n" +
            "Sur le papier : pour chacune de ces tâches de Léa, dis si c'est du classement, du résumé ou de l'extraction, et si un petit modèle suffit. 1) Détecter les emails de clients mécontents. 2) Transformer \"je voudrais une affiche 60x80 de notre chatte Mirza pour les 40 ans de ma femme, livrable avant le 12\" en champs exploitables. 3) Condenser les 15 avis clients de la semaine en trois points d'amélioration.\n\n" +
            "> Correction : 1) classement (liste fermée : MECONTENT / NEUTRE / CONTENT), petit modèle parfait, température 0. 2) extraction (format 60x80, sujet, occasion, échéance 12 du mois), petit modèle très bon là-dessus ; on verra à la leçon suivante comment exiger du JSON propre. 3) résumé avec consigne de structure (exactement trois points), petit modèle correct, un modèle moyen apporte parfois des formulations plus fines : à tester sur tes vraies données, pas à décider dans l'absolu.\n",
        },
        {
          id: "l15",
          title: "Des prompts qui tiennent en production",
          type: "text",
          duration: "14 min",
          body:
            "## Un prompt de workflow n'est pas une conversation\n\n" +
            "Quand tu discutes avec ChatGPT, tu corriges le tir message après message : \"non, plutôt comme ça\". Dans un workflow, personne ne corrige rien : le prompt tourne seul, mille fois, sur des entrées que tu n'as pas relues. Un prompt de production est donc moins une question qu'un **cahier des charges** : rôle, tâche, format de sortie imposé, et comportement en cas de doute. Les quatre morceaux, toujours.\n\n" +
            "Voici le prompt de tri d'emails qu'on déploiera pour Léa en partie 5, complet :\n\n" +
            "```\n" +
            "Tu tries les emails d'une boutique d'affiches personnalisées.\n\n" +
            "Catégories possibles (une seule) :\n" +
            "- SAV : problème avec une commande existante\n" +
            "- COMMANDE : question avant achat, demande de devis\n" +
            "- FOURNISSEUR : imprimeurs, transporteurs, matières premières\n" +
            "- PARTENARIAT : collaborations, influenceurs, presse\n" +
            "- AUTRE : tout le reste, y compris ce qui ressemble à du spam\n\n" +
            "Réponds UNIQUEMENT avec un JSON de cette forme exacte :\n" +
            "{\"categorie\": \"SAV\", \"urgent\": true, \"resume\": \"une phrase\"}\n\n" +
            "urgent = true seulement si : client mécontent, commande bloquée,\n" +
            "ou demande avec une échéance de moins de 48 h.\n" +
            "Si tu hésites entre deux catégories, choisis AUTRE.\n\n" +
            "Email :\n" +
            "Sujet : {{ $json.subject }}\n" +
            "Corps : {{ $json.text }}\n" +
            "```\n\n" +
            "Chaque ligne a une raison d'être. Décortiquons les cinq techniques qu'il contient.\n\n" +
            "## Technique 1 : la liste fermée\n\n" +
            "Ne demande jamais \"quelle est la catégorie de cet email ?\" en laissant le modèle inventer. Tu recevrais \"Service client\", \"SAV\", \"réclamation\", \"support\" selon les jours, et ton Switch en aval ne matcherait rien. Énumère les valeurs autorisées, en majuscules, avec leur définition. La sortie d'un LLM doit être traitée comme une saisie utilisateur : contrainte d'abord, vérifiée ensuite.\n\n" +
            "## Technique 2 : le format imposé par l'exemple\n\n" +
            "Montrer UN exemple du JSON attendu vaut mieux que trois paragraphes de description. Les modèles imitent remarquablement bien une forme qu'on leur montre. Pour du JSON, active aussi l'option de sortie structurée du nœud quand elle existe (\"Output Content as JSON\" sur le nœud OpenAI) : le modèle est alors contraint mécaniquement de produire du JSON valide, et la sortie arrive déjà parsée pour les nœuds suivants.\n\n" +
            "## Technique 3 : la porte de sortie\n\n" +
            "La ligne \"si tu hésites, choisis AUTRE\" est la plus importante du prompt. Sans elle, le modèle DOIT choisir, même sur un email incompréhensible, et il choisira avec aplomb. Avec elle, le doute a une destination officielle, que ton workflow route vers un humain. Même principe pour l'extraction : \"si une information est absente, mets null, n'invente jamais de valeur\". Tu ne peux pas empêcher un modèle d'hésiter ; tu peux décider où va son hésitation.\n\n" +
            "## Technique 4 : des exemples pour les cas limites\n\n" +
            "Quand une frontière est floue (mécontent ou pas ?), ajoute deux ou trois exemples résolus dans le prompt (du few-shot, en jargon) :\n\n" +
            "```\n" +
            "Exemples :\n" +
            "\"Toujours pas reçu ma commande, ça commence à faire long\" -> urgent: true\n" +
            "\"Petite question : le cadre existe-t-il en noir ?\" -> urgent: false\n" +
            "```\n\n" +
            "Choisis des exemples proches de TA réalité, pas des cas d'école. Trois exemples bien choisis corrigent plus de comportements que dix règles abstraites.\n\n" +
            "## Technique 5 : tester sur un lot réel avant d'activer\n\n" +
            "Un prompt s'évalue, il ne se devine pas. La méthode qui tient en une heure : prends 20 emails réels du mois dernier, classe-les toi-même (c'est ta référence), passe-les dans le workflow, compare. 18 ou 19 sur 20 : très bon, active. 15 sur 20 : lis les 5 ratés, ils se ressemblent presque toujours (même catégorie confondue, même type de formulation), et ajoute l'exemple ou la règle qui manque. En dessous de 12 : le découpage des catégories lui-même est flou, y compris probablement pour un humain ; retravaille les définitions avant de blâmer le modèle.\n\n" +
            "Note tes résultats dans un coin du workflow (un nœud désactivé fait très bien office de post-it). \"v2 du prompt, 19/20 le 12 mars\" : dans six mois, quand tu voudras améliorer, tu sauras d'où tu pars.\n\n" +
            "## À toi\n\n" +
            "Écris le prompt d'extraction pour les demandes de devis de Léa : entrée en texte libre, sortie JSON avec `format` (ex. 60x80), `sujet`, `occasion`, `echeance` (date ou null), `budget_estime` (nombre ou null). Applique les cinq techniques avant de comparer.\n\n" +
            "> Points que ta version doit contenir : un rôle d'une ligne ; l'exemple de JSON exact avec les cinq clés ; la consigne null explicite (\"si le client ne mentionne pas de budget, budget_estime: null, n'estime jamais toi-même\") ; au moins un exemple résolu avec une valeur manquante, pour montrer le null en situation ; et une température à 0 dans le nœud. Le piège principal ici est le budget : sans la consigne, le modèle \"estime\" poliment un budget plausible, et tu prendras des décisions commerciales sur un chiffre inventé.\n",
        },
        {
          id: "l16",
          title: "Coût par exécution et garde-fous anti-hallucination",
          type: "text",
          duration: "16 min",
          body:
            "## Le compteur tourne en tokens\n\n" +
            "Une API de LLM facture au **token**, un morceau de mot d'environ quatre caractères ; en français, compte grossièrement 1,5 token par mot. Deux compteurs distincts : les tokens d'entrée (ton prompt, avec l'email ou le document inséré dedans) et les tokens de sortie (la réponse), ces derniers étant plus chers. Au moment où j'écris, gpt-4o-mini coûte 0,15 $ par million de tokens d'entrée et 0,60 $ par million en sortie. Un million. Garde ce mot en tête, il va rendre la suite très détendue.\n\n" +
            "Calculons le tri d'un email de Léa, honnêtement :\n\n" +
            "```\n" +
            "Entrée : prompt (~250 tokens) + email moyen (~350 tokens) = 600 tokens\n" +
            "Sortie : le petit JSON (~40 tokens)\n\n" +
            "Coût entrée : 600 x 0,15 / 1 000 000 = 0,00009 $\n" +
            "Coût sortie :  40 x 0,60 / 1 000 000 = 0,000024 $\n" +
            "Total : ~0,00011 $ par email, soit un centième de centime\n" +
            "```\n\n" +
            "Léa reçoit environ 600 emails par mois : le tri complet lui coûte **7 centimes par mois**. Même en ajoutant le résumé de veille quotidien (des entrées plus grosses, disons 4 000 tokens par jour) et les brouillons de posts, sa facture IA totale restera sous un euro mensuel. Les workflows de ce cours vivent dans cette zone : le coût de l'IA est un non-sujet TANT QUE deux conditions tiennent.\n\n" +
            "Première condition : rester sur un petit modèle quand il suffit. Les gros modèles coûtent 10 à 30 fois plus par token ; sur du classement, tu payerais ce multiple pour rien. Seconde condition : surveiller le **volume et la taille**. Les deux accidents de facturation classiques sont un workflow en boucle (un déclencheur qui se rappelle lui-même) et des entrées énormes (coller un PDF de 100 pages dans le prompt \"pour le contexte\"). Fixe un plafond de dépense mensuel dans la console du fournisseur (Settings puis Limits chez OpenAI) : c'est ton disjoncteur, il transforme l'accident en email d'alerte.\n\n" +
            "## L'hallucination n'est pas un bug, c'est le mode de fonctionnement\n\n" +
            "Passons au vrai sujet. Un LLM produit le texte le plus plausible, pas le texte le plus vrai. Quand la bonne réponse est plausible, il a raison ; quand une invention est plausible, il invente, **avec exactement le même ton assuré**. Demande-lui le transporteur d'une commande dont l'email ne dit rien : il répondra volontiers \"Colissimo\", parce que c'est plausible pour une boutique française. Personne ne mentira jamais avec autant de naturel.\n\n" +
            "Tu ne corrigeras pas ça avec un meilleur prompt. Tu le contiens avec de l'architecture. Quatre garde-fous, du moins cher au plus cher :\n\n" +
            "- **Contraindre la sortie** (leçon 15) : listes fermées, JSON imposé, null obligatoire pour l'inconnu. Moins le modèle a de liberté, moins il a d'espace pour inventer.\n" +
            "- **Vérifier mécaniquement.** La sortie du LLM se contrôle avec des nœuds ordinaires : un IF qui vérifie que `categorie` appartient bien aux cinq valeurs autorisées, que `echeance` est une date valide, que le total extrait est un nombre positif. Tout item qui échoue part dans la branche \"à vérifier\" au lieu de continuer. Un LLM encadré par des IF, c'est le motif de base de l'IA fiable.\n" +
            "- **Croiser avec la source.** Pour l'extraction, la vérification reine : le chiffre extrait existe-t-il littéralement dans le texte d'origine ? Un nœud Code peut tester `sourceText.includes(montant)` ; si le montant \"extrait\" n'apparaît nulle part dans l'email, il a été inventé, direction la branche humaine.\n" +
            "- **La validation humaine.** Pour tout ce qui sort vers l'extérieur (un client, le public) ou engage de l'argent : un humain approuve avant l'action. C'est le garde-fou ultime et il a un coût en délai, donc on le réserve aux actions irréversibles. La leçon 20 construira ce circuit en entier.\n\n" +
            "## Où placer le curseur\n\n" +
            "La bonne question n'est jamais \"le modèle peut-il se tromper ?\" (oui, toujours) mais \"**que coûte une erreur, et est-elle rattrapable ?**\". Trois zones :\n\n" +
            "- Erreur bénigne et visible (un email mal classé que tu verras passer) : l'IA décide seule, tu corriges au fil de l'eau.\n" +
            "- Erreur coûteuse mais interne (une mauvaise ligne dans le tableur de suivi) : IA + vérifications mécaniques, échantillon contrôlé chaque semaine.\n" +
            "- Erreur publique ou irréversible (réponse envoyée à un client, remboursement, publication) : IA propose, humain dispose. Sans exception, même quand \"ça marche bien depuis trois mois\". Surtout quand ça marche bien depuis trois mois : c'est là qu'on relâche l'attention.\n\n" +
            "Et une règle que je donne à tous mes clients : **ne branche jamais un LLM directement sur une action d'argent** (remboursement, tarif, commande fournisseur). Le modèle peut préparer, calculer, pré-remplir ; le clic final est humain. Le jour où tu seras tenté de l'automatiser aussi, relis l'histoire du transporteur inventé.\n\n" +
            "## À toi\n\n" +
            "Chiffre ton propre cas : prends une tâche de ton inventaire qui implique du texte, estime les tokens (mots x 1,5), le volume mensuel, et calcule le coût avec les tarifs de gpt-4o-mini. Puis classe l'erreur possible dans une des trois zones.\n\n" +
            "> Exemple corrigé : résumer 40 tickets clients par jour, tickets de ~200 mots (300 tokens) plus un prompt de 200 tokens, sortie de 80 tokens. Entrée : 500 x 0,15 / 1M = 0,000075 $ ; sortie : 80 x 0,60 / 1M = 0,000048 $ ; par ticket : ~0,00012 $. Par mois (40 x 22 jours = 880 tickets) : environ 11 centimes. Zone d'erreur : interne et rattrapable si le résumé sert à ta priorisation ; publique si tu l'envoies au client, auquel cas validation humaine. Le coût n'est jamais l'argument contre l'IA à cette échelle ; le risque d'erreur non contrôlée, souvent.\n",
        },
        {
          id: "l17",
          title: "Quiz : l'IA dans les workflows",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Pour classer 600 emails par mois en 5 catégories, quel choix de modèle et de température est le plus pertinent ?",
              options: [
                "Le plus gros modèle disponible avec température 1, pour maximiser l'intelligence",
                "Un petit modèle type gpt-4o-mini avec température 0 : la tâche est contrainte et on veut des réponses reproductibles",
                "Un gros modèle avec température 0.9, pour varier les formulations",
                "Un petit modèle avec température 1, pour compenser sa petite taille par de la créativité",
              ],
              correctIndex: 1,
              explanation:
                "Le classement en liste fermée est justement le cas où les petits modèles font jeu égal avec les gros, pour 10 à 30 fois moins cher. La température basse (0 ou 0.1) rend la sortie reproductible : même email, même catégorie. La créativité est une qualité pour rédiger des brouillons, un défaut pour classer.",
            },
            {
              id: "q14",
              prompt:
                "Pourquoi la consigne \"si une information est absente, mets null, n'invente jamais de valeur\" est-elle indispensable dans un prompt d'extraction ?",
              options: [
                "Parce que le JSON n'accepte pas les champs vides",
                "Parce que sans destination officielle pour le doute, le modèle remplit les trous avec des valeurs plausibles, affirmées avec le même aplomb que les vraies",
                "Parce qu'elle réduit le nombre de tokens facturés",
                "Parce que n8n refuse les sorties incomplètes",
              ],
              correctIndex: 1,
              explanation:
                "Un LLM produit le texte le plus plausible, pas le plus vrai : face à un champ manquant, il \"estime\" volontiers un budget ou un transporteur crédible. La consigne null donne une sortie légitime au doute, que le workflow peut router vers un humain. C'est un garde-fou d'architecture, pas une optimisation de coût.",
            },
            {
              id: "q15",
              prompt:
                "Ton LLM extrait un montant de 89 € d'un email de commande. Quelle vérification mécanique est la plus solide avant d'écrire ce montant dans ton tableur ?",
              options: [
                "Redemander au même modèle s'il est sûr de lui",
                "Vérifier que le montant est un nombre positif, ce qui suffit à prouver qu'il est exact",
                "Vérifier que la chaîne \"89\" apparaît littéralement dans le texte source de l'email : sinon, le montant a été inventé",
                "Comparer avec le montant moyen des commandes précédentes",
              ],
              correctIndex: 2,
              explanation:
                "Croiser avec la source est la vérification reine pour l'extraction : une vraie donnée extraite existe forcément dans le texte d'origine. Un montant positif peut très bien être inventé, et redemander au modèle produit la même plausibilité assurée. Les items qui échouent au test partent en branche humaine.",
            },
            {
              id: "q16",
              prompt:
                "D'après le calcul de la leçon, classer un email (600 tokens d'entrée, 40 de sortie) avec gpt-4o-mini coûte environ 0,0001 $. Quelle conclusion en tirer pour un volume de 600 emails par mois ?",
              options: [
                "Le coût (~7 centimes/mois) est négligeable : les vrais sujets sont le choix du modèle adapté et les garde-fous, pas la facture",
                "Le coût est prohibitif, il faut passer en local",
                "Il faut réduire le volume d'emails traités pour économiser",
                "Le calcul prouve qu'un gros modèle serait au même prix",
              ],
              correctIndex: 0,
              explanation:
                "600 emails x 0,0001 $ = environ 6 à 7 centimes par mois : à cette échelle, le coût de l'IA est un non-sujet. Les gros modèles coûteraient 10 à 30 fois plus par token, ce qui resterait modeste ici mais inutile. L'attention se porte sur les deux vrais risques : la boucle accidentelle (d'où le plafond de dépense) et l'erreur non contrôlée (d'où les garde-fous).",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Quatre workflows en production chez Léa",
      lessons: [
        {
          id: "l18",
          title: "Veille concurrentielle : le rapport qui s'écrit tout seul",
          type: "text",
          duration: "16 min",
          body:
            "## Le cahier des charges de Léa\n\n" +
            "Retour au fil rouge. Léa passe 20 minutes chaque matin à ouvrir les sites de ses 5 concurrents pour noter leurs prix et repérer les nouveautés. Ce qu'elle veut vraiment, formulé avec elle : \"un message le matin qui me dit ce qui a CHANGÉ, et rien du tout les jours où rien n'a bougé\". Retiens cette dernière partie : un rapport quotidien identique à celui de la veille est du bruit, et le bruit tue les automatisations (on finit par ne plus le lire).\n\n" +
            "Le workflow complet, qu'on va monter morceau par morceau :\n\n" +
            "```figure\n" +
            "{\"caption\": \"La veille de Léa : collecter, comparer à l'état stocké, alerter seulement si changement\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\" font-family=\"ui-monospace, monospace\"><title>Workflow de veille concurrentielle</title><rect x=\"16\" y=\"40\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"74\" y=\"62\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">Schedule</text><text x=\"74\" y=\"78\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">Trigger 7h</text><line x1=\"132\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"162\" y=\"40\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"220\" y=\"62\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">HTTP Request</text><text x=\"220\" y=\"78\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">x5 sites</text><line x1=\"278\" y1=\"66\" x2=\"308\" y2=\"66\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"308\" y=\"40\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"366\" y=\"62\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">HTML</text><text x=\"366\" y=\"78\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">extraire prix</text><line x1=\"424\" y1=\"66\" x2=\"454\" y2=\"66\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"454\" y=\"40\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"512\" y=\"62\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">Google Sheets</text><text x=\"512\" y=\"78\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">lire etat</text><line x1=\"512\" y1=\"92\" x2=\"512\" y2=\"122\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"454\" y=\"122\" width=\"116\" height=\"52\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"512\" y=\"144\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">IF</text><text x=\"512\" y=\"160\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">changement ?</text><line x1=\"454\" y1=\"148\" x2=\"424\" y2=\"148\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"308\" y=\"122\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"366\" y=\"144\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">OpenAI</text><text x=\"366\" y=\"160\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">resume digest</text><line x1=\"308\" y1=\"148\" x2=\"278\" y2=\"148\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"162\" y=\"122\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"220\" y=\"144\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">Send Email</text><text x=\"220\" y=\"160\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">+ maj Sheets</text><line x1=\"512\" y1=\"174\" x2=\"512\" y2=\"224\" stroke=\"currentColor\" opacity=\"0.4\" stroke-dasharray=\"4 4\"/><rect x=\"430\" y=\"224\" width=\"164\" height=\"40\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.4\" stroke-dasharray=\"4 4\"/><text x=\"512\" y=\"249\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\" text-anchor=\"middle\">rien : pas d'email</text><text x=\"438\" y=\"116\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">true</text><text x=\"522\" y=\"196\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.6\">false</text></svg>\n" +
            "```\n\n" +
            "## Étape 1 : collecter\n\n" +
            "Un **Schedule Trigger** réglé sur 7 h du matin, puis un nœud **HTTP Request** par page à surveiller (les pages tarifs ou nouveautés des 5 concurrents). Chaque requête GET rapporte le HTML brut de la page, exactement ce que ton navigateur reçoit avant de le dessiner.\n\n" +
            "Puis le nœud **HTML** de n8n, opération \"Extract HTML Content\" : tu lui donnes un sélecteur CSS (par exemple `.price` ou `h2.product-title`) et il sort les valeurs correspondantes. Pour trouver le bon sélecteur : ouvre la page concurrente dans ton navigateur, clic droit sur le prix, \"Inspecter\", et regarde la classe de l'élément. C'est la partie la plus artisanale du workflow, et sa principale fragilité : si le concurrent refait son site, ton sélecteur ne matche plus rien. On détectera ce cas en partie 6 plutôt que de prétendre l'empêcher.\n\n" +
            "Deux précautions de savoir-vivre : espace tes requêtes (un nœud Wait de quelques secondes entre les sites), et vérifie le fichier `/robots.txt` du site ainsi que ses CGU. Une requête par jour par page, c'est moins qu'un visiteur curieux ; scraper toutes les minutes, c'est une autre histoire. Certains sites chargent d'ailleurs leurs prix en JavaScript après coup : le HTML reçu par HTTP Request est alors vide à l'endroit attendu. Dans ce cas, cherche d'abord un flux RSS ou une API publique du concurrent, c'est plus stable que contourner.\n\n" +
            "## Étape 2 : comparer à hier\n\n" +
            "Le cœur du système : un état stocké. Un Google Sheet à trois colonnes fait l'affaire : `concurrent`, `produit`, `dernier_prix`. Le workflow lit la feuille (nœud **Google Sheets**, credential OAuth2 de la leçon 12), puis un nœud **Code** compare les prix fraîchement extraits aux prix stockés :\n\n" +
            "```js\n" +
            "const anciens = $('Google Sheets').all();\n" +
            "const changements = [];\n" +
            "for (const item of $input.all()) {\n" +
            "  const ancien = anciens.find(a =>\n" +
            "    a.json.produit === item.json.produit);\n" +
            "  if (!ancien || ancien.json.dernier_prix !== item.json.prix) {\n" +
            "    changements.push(item);\n" +
            "  }\n" +
            "}\n" +
            "return changements;\n" +
            "```\n\n" +
            "En sortie : uniquement les lignes qui ont bougé. Un **IF** vérifie ensuite qu'il y a au moins un changement ; sinon, le workflow s'arrête là et Léa ne reçoit rien. C'est ce IF qui transforme un rapport en alerte.\n\n" +
            "## Étape 3 : résumer et envoyer\n\n" +
            "Sur la branche true, un nœud OpenAI reçoit les changements et un prompt du type : \"Rédige un digest en français de ces changements de prix concurrents, une ligne par changement, format : nom, ancien prix, nouveau prix, écart en pourcentage. Termine par une ligne 'À regarder en priorité :' si un écart dépasse 15 %. N'ajoute aucune information qui n'est pas dans les données.\" La dernière phrase est ton garde-fou de la leçon 16 : le modèle met en forme des données fournies, il n'a aucune latitude pour inventer un fait.\n\n" +
            "Un **Send Email** expédie le digest, et un dernier nœud Google Sheets réécrit les nouveaux prix dans la feuille d'état pour la comparaison de demain. Ce motif collecter, comparer à l'état, agir sur l'écart, mettre à jour l'état, tu le réutiliseras partout : suivi de stocks, de positions SEO, de mentions presse.\n\n" +
            "## Ce que ça donne chez Léa\n\n" +
            "En chiffres : 20 min/jour récupérées, soit 87 h/an (leçon 2). Coût : 30 exécutions par mois, quelques centimes d'IA les jours de digest. Et un bénéfice non prévu : la feuille Google Sheets accumule l'HISTORIQUE des prix concurrents, une donnée que Léa n'avait jamais eue, qui lui a servi à repérer que son concurrent principal solde systématiquement fin de mois.\n\n" +
            "## À toi\n\n" +
            "Adapte le motif : tu veux être alerté quand un produit revient en stock chez un fournisseur. Décris tes nœuds dans l'ordre, l'état stocké, et la condition d'alerte.\n\n" +
            "> Une version propre : Schedule Trigger (toutes les 2 h, pas toutes les minutes) -> HTTP Request sur la page produit -> HTML extract sur le bloc de disponibilité -> Google Sheets lire l'état (`produit`, `dernier_statut`) -> Code : garder l'item si le statut a changé -> IF au moins un changement -> notification (email ou Telegram) seulement si le nouveau statut est \"en stock\" -> mise à jour de la feuille. L'erreur classique : alerter sur \"statut = en stock\" au lieu de \"statut a CHANGÉ vers en stock\", ce qui spamme une alerte toutes les 2 h tant que le produit est disponible.\n",
        },
        {
          id: "l19",
          title: "Trier les emails entrants sans risquer la boîte",
          type: "text",
          duration: "15 min",
          body:
            "## La tâche n°1 de l'inventaire\n\n" +
            "40 minutes par jour, 173 h par an : le tri d'emails était en tête du classement de Léa depuis la leçon 2, et on a écrit son prompt en leçon 15. Il reste à construire le tuyau autour. Objectif précis : chaque email entrant est étiqueté dans Gmail selon sa catégorie, les urgences déclenchent une notification immédiate, et Léa ne traite plus sa boîte qu'en deux sessions par jour au lieu d'un picorage permanent.\n\n" +
            "Note ce que l'objectif ne dit PAS : répondre à sa place. On en reparle plus bas, c'est le point chaud de cette leçon.\n\n" +
            "## Le montage\n\n" +
            "Quatre étages :\n\n" +
            "- **Gmail Trigger** : le déclencheur Gmail de n8n, credential OAuth2 (le \"Sign in with Google\" de la leçon 12). Il surveille la boîte et démarre le workflow à chaque nouveau message, avec l'expéditeur, le sujet et le corps dans l'item. À savoir : ce trigger fonctionne par vérification périodique (tu choisis la fréquence, chaque minute si tu veux), pas en temps réel strict ; pour du tri, une latence d'une minute est invisible.\n" +
            "- **Le nœud OpenAI** avec le prompt complet de la leçon 15 : sortie JSON `{\"categorie\": ..., \"urgent\": ..., \"resume\": ...}`, liste fermée SAV / COMMANDE / FOURNISSEUR / PARTENARIAT / AUTRE, hésitation routée vers AUTRE.\n" +
            "- **Le garde-fou mécanique** (leçon 16) : un IF qui vérifie que la catégorie reçue appartient bien aux cinq valeurs. Si non, l'item est traité comme AUTRE. Deux minutes à ajouter, et ton workflow ne dépend plus de la discipline du modèle.\n" +
            "- **L'action** : un nœud **Gmail** (opération d'ajout de label) pose l'étiquette correspondante ; crée d'abord les cinq labels dans Gmail, avec des couleurs. Et sur la branche `urgent: true`, un nœud **Telegram** envoie le résumé d'une phrase sur le téléphone de Léa. Telegram est mon choix par défaut pour les alertes d'indépendant : gratuit, immédiat, et séparé de la boîte email qu'on cherche justement à moins ouvrir. Slack fait pareil si tu y vis déjà.\n\n" +
            "Résultat vécu : la boîte de Léa s'auto-range. Le matin, elle ouvre le label COMMANDE (le seul qui rapporte), traite, puis SAV. Les newsletters et le spam poli s'entassent dans AUTRE, qu'elle balaye le vendredi. Les urgences la trouvent, elle, au lieu d'attendre d'être trouvées.\n\n" +
            "## Le brouillon, pas l'envoi\n\n" +
            "Vient la tentation, elle arrive toujours vers la deuxième semaine : \"puisque le modèle comprend les emails, qu'il y réponde\". C'est non, et pas par principe timoré. Un email envoyé est public, irréversible, et engage ta réputation : c'est la zone 3 de la leçon 16, celle où l'IA propose et l'humain dispose.\n\n" +
            "La bonne version existe et elle est confortable : le **brouillon**. Le nœud Gmail sait créer un draft (ressource Draft) rattaché à ta boîte. Pour les catégories répétitives, SAV et COMMANDE, ajoute un second appel LLM qui rédige une proposition de réponse à partir de l'email et de deux ou trois réponses types que tu lui donnes en exemple dans le prompt. Léa ouvre l'email, le brouillon est déjà là, elle le lit, corrige un détail, envoie. Son temps de réponse est passé de 15 à 3 minutes par email, et chaque envoi est passé par ses yeux. Tu gardes 80 % du gain et 100 % du contrôle.\n\n" +
            "Deux réglages de prompt pour des brouillons utiles : donne au modèle tes VRAIES réponses passées comme exemples (ton ton, tes formules, ta signature), et interdis-lui de promettre : \"ne t'engage jamais sur un délai, un prix ou un remboursement ; écris [À COMPLÉTER] à la place\". Les crochets sautent aux yeux à la relecture, c'est voulu.\n\n" +
            "## Les pièges spécifiques aux emails\n\n" +
            "- **La boucle.** Si ton workflow envoie ou déplace des emails dans la même boîte qu'il surveille, tu peux créer un cycle (le trigger voit l'email que le workflow vient de produire). Filtre en tête de workflow : ignorer les messages dont l'expéditeur est toi-même, et les catégories automatiques (notifications Gmail, accusés).\n" +
            "- **Les pièces jointes et emails géants.** Un corps de 30 000 mots (chaîne de transferts) explose ton budget tokens pour rien. Tronque l'entrée dans un nœud Code : les 2 000 premiers caractères suffisent presque toujours à classer.\n" +
            "- **La confidentialité.** Chaque email part chez ton fournisseur de LLM. Pour une boutique d'affiches, le risque est modeste ; si tu manipules des données médicales ou juridiques, c'est un vrai sujet : regarde les options de résidence des données des fournisseurs, ou un modèle auto-hébergé, et dans le doute demande à ton conseil.\n\n" +
            "## À toi\n\n" +
            "Cas pratique : un email arrive, sujet \"URGENT remboursement affiche abîmée\", et ton LLM sort `{\"categorie\": \"SAV\", \"urgent\": true, \"resume\": \"Client demande remboursement, affiche arrivée pliée\"}`. Déroule ce que fait chaque étage du workflow, et dis où s'arrête l'automatisation.\n\n" +
            "> Déroulé : le IF de validation confirme que SAV est une catégorie autorisée ; le nœud Gmail pose le label SAV ; la branche urgent envoie le résumé sur Telegram ; le second appel LLM prépare un brouillon d'excuse SANS promettre le remboursement (il écrit \"[À COMPLÉTER : geste commercial]\"). L'automatisation s'arrête exactement là : la décision de rembourser (une action d'argent, zone 3) et le clic Envoyer restent à Léa. Si tu as répondu \"le workflow envoie la réponse et déclenche le remboursement\", relis la leçon 16 : c'est précisément l'endroit où un faux positif du modèle coûterait de l'argent réel.\n",
        },
        {
          id: "l20",
          title: "Posts sociaux : générer beaucoup, publier peu, valider tout",
          type: "text",
          duration: "16 min",
          body:
            "## 45 minutes par jour pour alimenter la machine\n\n" +
            "Le poste le plus lourd de l'inventaire de Léa après les emails : 45 minutes quotidiennes à rédiger des posts Instagram et Pinterest pour ses affiches. Le problème n'est pas l'inspiration, c'est la production en série : chaque nouvelle affiche mérite trois ou quatre posts, avec des angles différents, étalés dans le temps.\n\n" +
            "C'est le terrain idéal pour le motif le plus important de cette partie : **la génération avec validation humaine**. Le LLM excelle à produire des variantes ; il est incapable de garantir qu'aucune ne contient une bourde. La parade n'est pas un meilleur prompt, c'est un circuit où rien ne part en ligne sans un œil humain, mais où cet œil ne coûte que quelques secondes par post.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le pipeline de contenu : l'IA propose en masse, l'humain approuve, le workflow publie\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\" font-family=\"ui-monospace, monospace\"><title>Pipeline IA avec validation humaine</title><rect x=\"16\" y=\"36\" width=\"128\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"80\" y=\"58\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">RSS Read</text><text x=\"80\" y=\"74\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">nouveautes</text><line x1=\"144\" y1=\"62\" x2=\"180\" y2=\"62\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"180\" y=\"36\" width=\"128\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"244\" y=\"58\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">OpenAI</text><text x=\"244\" y=\"74\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">3 variantes</text><line x1=\"308\" y1=\"62\" x2=\"344\" y2=\"62\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"344\" y=\"36\" width=\"128\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"408\" y=\"58\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">Airtable</text><text x=\"408\" y=\"74\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">statut: a valider</text><line x1=\"472\" y1=\"62\" x2=\"508\" y2=\"62\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"508\" y=\"28\" width=\"116\" height=\"68\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke=\"currentColor\"/><text x=\"566\" y=\"54\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">HUMAIN</text><text x=\"566\" y=\"70\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">relit, edite,</text><text x=\"566\" y=\"86\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">approuve</text><line x1=\"566\" y1=\"96\" x2=\"566\" y2=\"140\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"508\" y=\"140\" width=\"116\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"566\" y=\"162\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">statut:</text><text x=\"566\" y=\"178\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">approuve</text><line x1=\"508\" y1=\"166\" x2=\"472\" y2=\"166\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"344\" y=\"140\" width=\"128\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"408\" y=\"162\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">Schedule 18h</text><text x=\"408\" y=\"178\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">lire approuves</text><line x1=\"344\" y1=\"166\" x2=\"308\" y2=\"166\" stroke=\"currentColor\" opacity=\"0.5\"/><rect x=\"180\" y=\"140\" width=\"128\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"244\" y=\"162\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">Publier</text><text x=\"244\" y=\"178\" font-size=\"12\" fill=\"currentColor\" text-anchor=\"middle\">+ statut: publie</text><rect x=\"16\" y=\"228\" width=\"608\" height=\"64\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.35\" stroke-dasharray=\"4 4\"/><text x=\"32\" y=\"252\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">Regle : AUCUN chemin direct de OpenAI vers Publier.</text><text x=\"32\" y=\"272\" font-size=\"12\" fill=\"currentColor\" opacity=\"0.7\">Tout passe par la colonne statut, et le statut change a la main.</text></svg>\n" +
            "```\n\n" +
            "## Étage 1 : générer en masse\n\n" +
            "Source de matière : le flux des nouveautés. Si ta boutique expose un flux RSS (la plupart des CMS et Shopify le font), le nœud **RSS Read** le lit ; sinon, l'API de ta boutique via HTTP Request. À chaque nouvelle affiche, un nœud OpenAI génère trois variantes de post avec un prompt qui applique tout ce qu'on a vu :\n\n" +
            "```\n" +
            "Tu écris des posts Instagram pour une boutique d'affiches\n" +
            "personnalisées, ton chaleureux et direct, jamais de superlatifs\n" +
            "creux, 2 hashtags max.\n\n" +
            "Écris 3 variantes courtes (moins de 300 caractères chacune) :\n" +
            "1. angle emotion / cadeau\n" +
            "2. angle produit / matiere / format\n" +
            "3. angle question posee a la communaute\n\n" +
            "Utilise UNIQUEMENT les informations fournies. Pas de prix,\n" +
            "pas de promo, pas de delai : tu ne les connais pas.\n\n" +
            "Voici 2 posts que j'ai ecrits moi-meme, imite leur ton : [...]\n\n" +
            "Affiche : {{ $json.title }} - {{ $json.description }}\n" +
            "```\n\n" +
            "Les vraies références de ton, tu les connais depuis la leçon 15. L'interdiction des prix et promos, c'est la leçon 16 : le modèle ne doit rien affirmer qu'on ne lui a pas donné.\n\n" +
            "## Étage 2 : la file d'attente\n\n" +
            "Les variantes ne partent PAS sur Instagram. Elles atterrissent dans une base **Airtable** (ou Notion, ou même Google Sheets : ce qui compte est la colonne de statut) avec les champs `texte`, `affiche`, `angle`, et `statut = à valider`. Airtable a l'avantage d'une belle vue mobile : Léa fait sa revue depuis son canapé.\n\n" +
            "Sa routine réelle : deux fois par semaine, 10 minutes, elle parcourt la file. Un post correct : statut `approuvé`, parfois après avoir changé trois mots directement dans la cellule. Un post raté : statut `rejeté`, sans état d'âme. Sur trois variantes générées, une ou deux passent en général. Le taux de rejet est une information : s'il grimpe, le prompt a besoin d'exemples plus proches de ce qu'elle veut.\n\n" +
            "## Étage 3 : publier ce qui est approuvé\n\n" +
            "Un second workflow, indépendant : Schedule Trigger à 18 h, nœud Airtable qui cherche UN enregistrement `statut = approuvé`, publication, puis mise à jour du statut en `publié` avec la date. Un post par jour, la file se vide au rythme choisi. Pour la publication elle-même : certains réseaux se pilotent bien par API dans n8n, d'autres (Instagram en tête) ont des contraintes d'accès qui bougent souvent ; l'alternative honnête est de passer par un outil de programmation dédié (Buffer et équivalents) que n8n alimente. Le pipeline de validation reste identique dans les deux cas, c'est lui le sujet.\n\n" +
            "Remarque la séparation en deux workflows reliés par la base : c'est ce qui permet à l'humain d'être DANS la boucle sans bloquer la machine. Le premier workflow n'attend personne ; le second ne publie que du validé. La base est le sas.\n\n" +
            "## À toi\n\n" +
            "Question de conception : pourquoi deux workflows séparés plutôt qu'un seul workflow qui génère, \"attend la validation\", puis publie ?\n\n" +
            "> Parce qu'une exécution n8n n'est pas faite pour attendre trois jours qu'un humain ait le temps de relire (même si un nœud Wait peut techniquement patienter, tu crées des exécutions suspendues fragiles, difficiles à suivre, perdues si tu redéploies). En découplant par la colonne statut, chaque workflow reste court, testable et relançable ; l'humain valide quand ça l'arrange ; et tu peux changer le rythme de publication sans toucher à la génération. Retiens le motif : quand un humain entre dans la boucle, matérialise la boucle dans une donnée (un statut), pas dans une exécution qui attend.\n",
        },
        {
          id: "l21",
          title: "Alerting e-commerce : savoir avant les clients",
          type: "text",
          duration: "14 min",
          body:
            "## Le workflow qui ne fait rien 99 jours sur 100\n\n" +
            "Dernier chantier chez Léa, et le plus court à monter : la surveillance. Celui-ci ne lui rend pas des heures chaque semaine ; il existe pour UN jour précis, celui où quelque chose casse. Léa l'a compris un samedi : sa page de paiement est restée en erreur de 9 h à 16 h, zéro commande de la journée, et elle ne l'a su que le soir en consultant son tableau de bord par habitude. Sept heures de ventes perdues, et surtout des clients partis sans rien dire.\n\n" +
            "Un workflow d'alerting a une définition simple : il vérifie en continu des signes vitaux, et se tait tant que tout va bien. Sa qualité se mesure à sa discrétion autant qu'à sa réactivité.\n\n" +
            "## Signal 1 : les événements de la boutique\n\n" +
            "Si ta boutique est sur Shopify, n8n fournit un **Shopify Trigger** : un webhook (leçon 7) que Shopify appelle à chaque événement choisi : commande créée, commande annulée, mise à jour produit. WooCommerce et les autres plateformes ont leurs équivalents ou, à défaut, des webhooks génériques à brancher sur le nœud Webhook.\n\n" +
            "Premier montage : à chaque commande créée, un nœud IF vérifie le niveau de stock des articles commandés (via l'API de la boutique) ; sous un seuil, disons 3 exemplaires, alerte Telegram \"Stock faible : Affiche Constellation, reste 2\". Léa recommande à l'imprimeur avant la rupture, plus jamais après.\n\n" +
            "## Signal 2 : l'absence d'événement\n\n" +
            "Le montage précédent a un angle mort énorme : il ne se déclenche que s'il se passe quelque chose. Or la panne du samedi de Léa, c'était l'inverse : il ne se passait RIEN. Un site cassé ne t'envoie pas de webhook \"je suis cassé\" ; il devient silencieux.\n\n" +
            "La parade : surveiller le silence lui-même. Un Schedule Trigger toutes les heures, un nœud Shopify (ou HTTP Request vers l'API) qui compte les commandes des dernières X heures, et un IF : zéro commande pendant une fenêtre où il y en a normalement, alerte \"aucune commande depuis 6 h, vérifie le site\". Le seuil dépend de ton volume : Léa fait 8 à 12 commandes par jour, six heures de silence en journée est anormal ; si tu en fais 2 par semaine, ce signal ne veut rien dire pour toi, saute-le. Oui, ce détecteur produira quelques fausses alertes (un dimanche très calme). C'est un compromis assumé : une fausse alerte par mois coûte 30 secondes ; une vraie panne non détectée coûte une journée de chiffre.\n\n" +
            "## Signal 3 : le battement de cœur\n\n" +
            "Plus direct encore : demander au site s'il va bien. Un Schedule Trigger toutes les 5 minutes, un HTTP Request GET vers ta page d'accueil et, plus important, vers ta page de paiement ou une URL de test, puis un IF sur le code de statut (leçon 5) : autre chose que 200, alerte immédiate avec le code reçu. Un `503` ou un timeout à 3 heures du matin, et Léa le sait avant son premier client.\n\n" +
            "Deux finesses qui séparent l'alerting utile de l'alerting pénible :\n\n" +
            "- **Confirme avant d'alerter.** Un réseau qui hoquette produit des échecs isolés. N'alerte qu'après deux ou trois échecs consécutifs (stocke le compteur dans ta feuille d'état, comme en leçon 18). Sinon tu recevras des alertes fantômes jusqu'à couper le workflow, et le jour de la vraie panne, il sera coupé.\n" +
            "- **Ne crie qu'une fois.** Une panne d'une heure vérifiée toutes les 5 minutes, c'est 12 alertes identiques. Mémorise l'état \"alerte déjà envoyée\" et n'envoie de nouveau message qu'au retour à la normale (\"c'est réparé, panne de 47 min\"). Ton canal d'alerte doit rester un endroit où chaque message compte.\n\n" +
            "Dernier réflexe d'architecte : ce workflow surveille ton site, mais qui surveille ce workflow ? Si ton n8n tombe, tes alertes tombent avec lui, en silence. La réponse propre s'appelle un heartbeat inversé et t'attend en leçon 24 ; l'idée en une phrase : un service externe s'inquiète si ton workflow cesse de lui donner signe de vie.\n\n" +
            "## Le bilan du fil rouge\n\n" +
            "Quatre workflows en production : veille (leçon 18), tri d'emails (19), posts sociaux (20), alerting (21). Comptons les exécutions mensuelles, promesse de la leçon 9 : veille 30, tri d'emails environ 600, génération et publication de posts environ 90, alerting 730 vérifications d'absence plus le heartbeat. Le heartbeat aux 5 minutes est le poste gourmand (8 640/mois) : sur le plan Starter de n8n cloud à 2 500 exécutions, passe-le aux 15 minutes (2 880) ou confie ce seul rôle à un service de monitoring dédié ; en auto-hébergé, la question ne se pose pas, les exécutions sont illimitées. Temps récupéré : environ 2 h par jour. Facture IA : moins d'un euro par mois. C'est ça, un business automatisé raisonnablement : pas un robot qui décide, une équipe de tuyaux fiables qui préparent, trient et surveillent pendant que l'humain décide.\n\n" +
            "## À toi\n\n" +
            "Choisis TON alerte prioritaire : la panne dont tu ne te remettrais pas d'apprendre l'existence par un client. Décris le signal (événement, absence, ou heartbeat), la fréquence, le seuil, et la règle anti-spam.\n\n" +
            "> Exemple corrigé pour un site de réservation : heartbeat GET sur la page de résa toutes les 10 minutes, alerte si statut différent de 200 deux fois de suite (compteur en feuille d'état), message Telegram unique avec le code d'erreur, message de résolution au retour du 200. Bonus absence : zéro réservation en 24 h alors que la moyenne est de 4 par jour, alerte quotidienne au maximum. Si ta version alerte au premier échec et à chaque vérification suivante, tu tiens une machine à te désensibiliser : dans un mois, tu ne liras plus ce canal.\n",
        },
        {
          id: "l22",
          title: "Quiz : les workflows du fil rouge",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Dans la veille concurrentielle de Léa, quel élément évite qu'elle reçoive un rapport identique tous les matins ?",
              options: [
                "Le nœud OpenAI, qui reformule différemment chaque jour",
                "La comparaison avec l'état stocké dans Google Sheets suivie d'un IF : sans changement détecté, le workflow s'arrête et n'envoie rien",
                "Le Schedule Trigger, qui ne se déclenche que si les sites ont changé",
                "Le nœud HTML, qui filtre automatiquement les contenus déjà vus",
              ],
              correctIndex: 1,
              explanation:
                "C'est le motif état stocké + comparaison + IF qui transforme un rapport en alerte : on ne notifie que l'écart avec hier. Un Schedule Trigger se déclenche à l'heure dite quoi qu'il arrive, et ni le nœud HTML ni le LLM ne savent ce qui a déjà été vu : cette mémoire, c'est la feuille d'état qui la porte.",
            },
            {
              id: "q18",
              prompt:
                "Pourquoi le workflow de tri d'emails crée-t-il des brouillons Gmail au lieu d'envoyer les réponses directement ?",
              options: [
                "Parce que l'API Gmail ne permet pas d'envoyer des emails depuis n8n",
                "Pour économiser des tokens sur les appels au modèle",
                "Parce qu'un email envoyé est irréversible et engage la réputation : l'IA propose, l'humain relit et envoie, ce qui garde l'essentiel du gain de temps avec tout le contrôle",
                "Parce que les brouillons sont plus rapides à générer que les envois",
              ],
              correctIndex: 2,
              explanation:
                "C'est la zone 3 de la leçon 16 : action publique et irréversible, donc validation humaine. Le brouillon pré-rédigé fait passer le temps de réponse de 15 à 3 minutes (l'essentiel du gain) tout en garantissant que chaque envoi est passé par des yeux humains. L'API Gmail sait parfaitement envoyer : c'est un choix d'architecture, pas une limite technique.",
            },
            {
              id: "q19",
              prompt:
                "Dans le pipeline de posts sociaux, quel est le rôle exact de la colonne statut dans Airtable ?",
              options: [
                "Compter le nombre de posts générés pour la facturation",
                "Matérialiser la validation humaine dans une donnée : la génération et la publication sont deux workflows séparés, et seul un changement de statut fait à la main fait passer un post de l'un à l'autre",
                "Permettre au LLM de savoir quelles variantes ont eu du succès",
                "Trier les posts par ordre chronologique de publication",
              ],
              correctIndex: 1,
              explanation:
                "La base avec sa colonne statut est le sas entre les deux workflows : aucun chemin direct ne relie la génération à la publication. L'humain valide quand ça l'arrange, sans exécution n8n suspendue qui l'attend. C'est le motif général : quand un humain entre dans la boucle, on matérialise la boucle dans une donnée, pas dans une exécution en attente.",
            },
            {
              id: "q20",
              prompt:
                "Le site de Léa tombe en panne un samedi matin : aucune commande n'arrive. Lequel de ses signaux d'alerting détecte ce problème ?",
              options: [
                "Le Shopify Trigger sur commande créée, qui remarque l'anomalie",
                "Le tri d'emails, car les clients écrivent pour se plaindre",
                "Les signaux d'absence et de heartbeat : un comptage périodique qui alerte si zéro commande sur une fenêtre anormale, et un HTTP Request régulier qui alerte si la page ne répond plus 200",
                "Aucun : une panne ne peut se détecter que manuellement",
              ],
              correctIndex: 2,
              explanation:
                "Un site cassé devient silencieux : il n'émet plus d'événements, donc un trigger par webhook ne se déclenche jamais (c'est son angle mort). Il faut surveiller activement : compter les commandes sur une fenêtre (détection d'absence) et interroger le site soi-même (heartbeat sur le code de statut). Attendre les plaintes clients, c'est exactement le scénario que l'alerting existe pour éviter.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Fiabiliser, surveiller, maintenir",
      lessons: [
        {
          id: "l23",
          title: "Pannes prévues : retries, branches d'erreur et doublons",
          type: "text",
          duration: "15 min",
          body:
            "## Tout ce qui appelle le réseau finira par échouer\n\n" +
            "Trois semaines après la mise en production, le tri d'emails de Léa a raté 4 messages dans la même heure. Cause : l'API du fournisseur de LLM renvoyait des 429 (leçon 12), une saturation passagère de quelques minutes. Rien d'anormal : une API a beau afficher 99,9 % de disponibilité, il reste des heures d'indisponibilité par an, qui tomberont un jour pendant TON exécution. La fiabilité ne consiste pas à empêcher ces échecs, mais à décider à l'avance ce qui se passe quand ils arrivent.\n\n" +
            "n8n te donne trois niveaux de réponse, du réflexe local au plan de secours global.\n\n" +
            "## Niveau 1 : réessayer, dans les réglages du nœud\n\n" +
            "Ouvre n'importe quel nœud, onglet Settings : tu y trouves **Retry On Fail**, avec **Max Tries** (nombre de tentatives) et **Wait Between Tries** (délai entre elles, en millisecondes). Active-le sur tout nœud qui parle au réseau : HTTP Request, LLM, Google Sheets, email. Mon réglage par défaut : 3 essais, 5 000 ms d'attente. La grande majorité des 429 et des micro-coupures se résorbent en quelques secondes ; avec ce seul réglage, les 4 emails ratés de Léa auraient été traités sans que personne ne le sache.\n\n" +
            "Deux nuances. D'abord, ne réessaie pas n'importe quoi : un 401 (mauvaise clé) ou un 404 (mauvaise URL) échoueront à l'identique 3 fois ; le retry est fait pour les pannes transitoires (429, 500, timeouts), pas pour les erreurs de configuration. Ensuite, méfie-toi du retry sur un nœud qui a un effet (envoyer un email, créer une ligne) : si l'action a réussi mais que la CONFIRMATION s'est perdue, réessayer duplique l'action. On y revient plus bas, c'est le sujet des doublons.\n\n" +
            "## Niveau 2 : la branche d'erreur\n\n" +
            "Toujours dans Settings, le champ **On Error** décide du sort de l'exécution quand le nœud a définitivement échoué. Par défaut : \"Stop Workflow\", tout s'arrête, l'exécution passe en rouge. L'alternative qui change tout : **\"Continue (using error output)\"**, qui ajoute une seconde sortie au nœud, par laquelle sortent les items en échec avec le détail de l'erreur.\n\n" +
            "Concrètement, sur le nœud LLM du tri d'emails : la sortie normale continue vers les labels ; la sortie d'erreur part vers un nœud Gmail qui pose un label ERREUR_TRI et une notification. Un email dont la classification a échoué n'est plus un email perdu, c'est un email routé vers l'ancienne méthode : les yeux de Léa. C'est la traduction en nœuds d'un principe de conception : **le mode dégradé de ton automatisation doit être le processus manuel qu'elle remplace**, jamais le silence.\n\n" +
            "Dans un nœud Code, tu peux aussi lever une erreur volontairement quand une donnée est incohérente (le montant extrait qui n'existe pas dans la source, leçon 16) : `throw new Error('montant absent du texte source')`. Le nœud **Stop and Error** fait la même chose sans écrire de code : place-le sur une branche de IF pour transformer un cas interdit en échec explicite.\n\n" +
            "## Niveau 3 : le workflow d'erreur\n\n" +
            "Il reste les échecs que tu n'as pas prévus, sur des nœuds où tu n'as rien configuré. Pour eux, n8n a un mécanisme global : dans les réglages de chaque workflow (Settings du workflow, pas d'un nœud), le champ **Error Workflow** désigne un second workflow à exécuter à chaque échec. Ce workflow de garde commence par un nœud **Error Trigger** et reçoit tout le contexte : nom du workflow tombé, nœud coupable, message d'erreur, lien vers l'exécution.\n\n" +
            "Construis-le une fois, trois nœuds : Error Trigger, mise en forme du message, envoi Telegram. Puis désigne-le comme Error Workflow dans CHACUN de tes workflows. À partir de là, plus aucune panne n'est silencieuse : ton téléphone vibre avec \"Veille concurrentielle a échoué au nœud HTML : sélecteur sans résultat\", et tu sais que le concurrent a refait son site (la fragilité annoncée en leçon 18).\n\n" +
            "## Les doublons : la promesse de la leçon 7\n\n" +
            "Dernier chantier, le plus subtil. Souviens-toi : un émetteur de webhooks qui n'a pas reçu ta confirmation renvoie le même événement, et ton retry peut rejouer une action déjà faite. Conséquence typique : deux lignes pour la même commande, deux emails de bienvenue au même client. La parade s'appelle l'**idempotence** : faire en sorte que traiter deux fois le même événement produise le même résultat qu'une fois.\n\n" +
            "La recette pragmatique : chaque événement porte un identifiant unique (`order_id`, ID de message). Avant d'agir, ton workflow vérifie dans sa feuille d'état si cet ID a déjà été traité ; si oui, l'item s'arrête là (un IF suffit) ; si non, on agit ET on enregistre l'ID. Deux nœuds de plus, et les doublons deviennent des non-événements. Réserve ce blindage aux workflows où un doublon coûte quelque chose : personne n'est mort d'un digest de veille reçu deux fois.\n\n" +
            "## À toi\n\n" +
            "Reprends le workflow formulaire vers email de la leçon 11 et blinde-le sur papier : pour chacun de ses nœuds (n8n Form Trigger, IF, Send Email), décide retry ou pas, et ce qui doit se passer si le Send Email échoue définitivement.\n\n" +
            "> Version raisonnable : le Form Trigger n'appelle rien, pas de retry à configurer. Le IF est un calcul local, il n'échoue pas sur le réseau. Le Send Email : Retry On Fail, 3 essais, 5 s, et On Error en Continue avec, sur la sortie d'erreur, une écriture dans une feuille \"emails non partis\" plus une notification. Bonus doublon : si le SMTP a envoyé mais renvoyé une erreur (ça existe), le retry peut dupliquer l'email de confirmation ; pour un message de bienvenue c'est acceptable, pour une facture on ajouterait le contrôle d'ID. Si ta réponse était \"retry partout, y compris sur le IF\", tu as blindé du code local qui ne peut pas tomber, et laissé passer la vraie question : où va le prospect si l'email ne part jamais ?\n",
        },
        {
          id: "l24",
          title: "Monitoring : détecter les pannes qui ne font pas de bruit",
          type: "text",
          duration: "14 min",
          body:
            "## L'histoire du workflow mort depuis onze jours\n\n" +
            "Un client m'appelle : \"la veille ne m'a rien envoyé ce mois-ci, c'est normal ?\". Vérification : son workflow était désactivé depuis onze jours. Une mise à jour de son instance auto-hébergée s'était mal passée, n8n avait redémarré, un workflow n'était pas revenu en mode actif. Aucune erreur nulle part : un workflow désactivé n'échoue pas, il n'existe plus. L'Error Workflow de la leçon 23 n'a rien vu, et pour cause : il attrape les exécutions qui échouent, pas les exécutions qui n'ont jamais lieu.\n\n" +
            "C'est la distinction fondatrice de cette leçon : les pannes bruyantes (une exécution rouge) et les **pannes silencieuses** (plus d'exécutions du tout, ou des exécutions vertes qui ne produisent rien). Les premières, tu les as couvertes. Les secondes exigent un renversement : ne plus demander \"y a-t-il eu une erreur ?\" mais \"**ai-je la preuve que ça a marché récemment ?**\".\n\n" +
            "## L'historique des exécutions, ton premier tableau de bord\n\n" +
            "L'onglet **Executions** de n8n liste chaque exécution avec son statut, sa durée, et le détail nœud par nœud (leçon 12). Deux réglages à vérifier dans les Settings de chaque workflow : la conservation des exécutions réussies (\"Save successful production executions\", parfois désactivée pour économiser de l'espace, à garder active au moins pendant les premiers mois d'un workflow) et la durée de rétention. Un coup d'œil hebdomadaire à cette liste fait partie de la routine : tu y repères les durées qui s'allongent (une API qui ralentit annonce souvent une API qui va tomber) et les absences.\n\n" +
            "Mais un tableau de bord qu'il faut penser à ouvrir protège mal. Les deux outils suivants viennent te chercher, eux.\n\n" +
            "## Le heartbeat inversé\n\n" +
            "Promis en leçon 21 : qui surveille le surveillant ? Le principe du heartbeat inversé est élégant : ce n'est pas toi qui vérifies que le workflow tourne, c'est le workflow qui doit régulièrement prouver qu'il tourne, auprès d'un service externe qui s'alarme au premier silence.\n\n" +
            "En pratique avec healthchecks.io (le service de référence pour ça, gratuit jusqu'à 20 checks au moment où j'écris ; cron-job.org ou UptimeRobot rendent des services voisins) : tu crées un check \"veille-concurrentielle, attendu 1 fois par jour, délai de grâce 2 h\", le site te donne une URL de ping unique, et tu ajoutes en FIN de ton workflow un HTTP Request GET vers cette URL. Tant que le workflow termine, healthchecks reçoit son ping quotidien et se tait. Le jour où le ping manque, workflow désactivé, instance n8n éteinte, panne de serveur, peu importe la cause, tu reçois un email. Mon client aurait su en 2 h, pas en 11 jours.\n\n" +
            "Le point clé : le ping en DERNIER nœud. Ainsi il atteste que toute la chaîne a fonctionné, pas seulement le déclencheur. Un ping placé en début de workflow te dirait \"ça a démarré\", ce qui ne prouve à peu près rien.\n\n" +
            "## Le journal de bord et le digest\n\n" +
            "Troisième couche, pour les workflows dont le succès se mesure en volume : un journal. Ajoute en fin de workflow une ligne dans une feuille dédiée : date, workflow, nombre d'items traités. Coût : un nœud Google Sheets. Ce journal nourrit deux choses.\n\n" +
            "D'abord une détection d'anomalie de volume : le tri d'emails traite 25 à 35 messages par jour ; un lundi à 0 alors que le workflow est vert, c'est le credential Gmail qui a expiré et un trigger qui ne voit plus rien. Le zéro anormal est le symptôme silencieux par excellence, aucun statut rouge ne le signalera.\n\n" +
            "Ensuite un **digest hebdomadaire** : un petit workflow du lundi matin lit le journal et envoie trois lignes : \"Semaine passée : 187 emails triés, 3 digests de veille, 6 posts publiés, 0 erreur.\" Trente secondes de lecture, deux fonctions : confirmer que tout vit, et rappeler ce que la machine te rend, ce qui n'est pas du luxe le jour où tu te demandes si tout ça vaut la maintenance.\n\n" +
            "La pyramide complète, de bas en haut : retries (leçon 23) pour les hoquets, branches d'erreur pour les échecs définitifs, Error Workflow pour l'imprévu, heartbeat pour l'inexécution, journal et digest pour l'anomalie de volume. Cinq étages, une heure de mise en place au total, et plus aucune catégorie de panne sans détecteur.\n\n" +
            "## À toi\n\n" +
            "Diagnostic : le workflow de veille de Léa est vert tous les matins dans Executions, le heartbeat pingue, mais le digest ne signale plus aucun changement de prix depuis trois semaines, alors que tu SAIS qu'un concurrent a lancé des soldes. Où chercher ?\n\n" +
            "> C'est la panne silencieuse de niveau supérieur : tout s'exécute, mais l'extraction ne trouve plus rien. Piste n°1 : le concurrent a modifié son HTML et le sélecteur CSS ne matche plus (leçon 18) ; le nœud HTML sort 0 item, le IF conclut \"aucun changement\", tout est vert. Vérifie dans Executions le nombre d'items en sortie du nœud HTML : s'il est à zéro depuis trois semaines, voilà ton coupable. Le correctif durable : un IF juste après l'extraction, \"si 0 prix extrait, Stop and Error\", qui transforme cette panne silencieuse en panne bruyante attrapée par l'Error Workflow. Règle générale : quand un nœud DOIT produire des données, un résultat vide est une erreur, dis-le à n8n explicitement.\n",
        },
        {
          id: "l25",
          title: "Versionner, sécuriser, transmettre",
          type: "text",
          duration: "15 min",
          body:
            "## Le jour où tu casses ton propre workflow\n\n" +
            "Dernier scénario de panne, le plus vexant : c'est toi. Tu modifies le prompt du tri d'emails un dimanche soir, \"juste un mot\", et le lundi matin la moitié des messages part dans la mauvaise catégorie. Tu voudrais revenir à la version d'hier. Elle n'existe plus : tu as édité par-dessus.\n\n" +
            "n8n cloud garde bien un historique de versions du workflow (le panneau d'historique permet de consulter et restaurer des versions récentes), et c'est un vrai filet. Mais il vit DANS l'instance : si l'instance meurt, si tu migres, si tu veux comparer sérieusement deux versions ou garder une trace de POURQUOI tu as changé, il te faut mieux. À noter : la fonctionnalité Git intégrée de n8n (environnements et push vers un dépôt) est réservée aux plans Enterprise ; je te donne la version artisanale, gratuite, qui fait 90 % du travail.\n\n" +
            "## L'export JSON, ta sauvegarde et ton historique\n\n" +
            "Un workflow n8n s'exporte en un fichier JSON : menu du workflow, Download, ou tout simplement Ctrl+A puis Ctrl+C dans l'éditeur (oui, le presse-papier contient le JSON complet, et Ctrl+V le recolle dans un autre n8n). Ce fichier contient les nœuds, leurs réglages, les connexions, tes prompts. Il ne contient PAS tes credentials, seulement des références vers eux, et c'est une excellente nouvelle pour la suite.\n\n" +
            "La routine que je recommande, calibrée pour un indépendant : un dossier `workflows/` sur ta machine, un fichier par workflow, et à chaque modification significative, export par-dessus puis un commit git : `git commit -m \"tri-emails: ajout exemples factures au prompt\"`. Si git ne fait pas partie de ta vie, un dossier Drive avec des fichiers datés (`tri-emails-2025-03-12.json`) rend le même service de base : revenir en arrière et comprendre ce qui a changé. L'important est le message ou le nom qui dit POURQUOI : dans six mois, \"ajout exemples factures\" te parlera, \"v2 final OK\" non.\n\n" +
            "Complète avec deux habitudes de propreté qui ne coûtent rien : des noms de workflows explicites (\"Veille prix concurrents - quotidien 7h\", pas \"My workflow 3\") et une note d'en-tête dans chaque workflow (un nœud collant, Sticky Note, dans l'éditeur) : à quoi il sert, ce qu'il touche, la date du dernier gros changement. C'est le README du pauvre, et c'est ce qui rend tes workflows transmissibles à un futur assistant, un associé, ou toi-même dans un an.\n\n" +
            "## Sécuriser : les credentials d'abord\n\n" +
            "Tes workflows ont accumulé un trousseau sensible : Gmail, Google Sheets, la clé OpenAI, l'API de ta boutique. Cinq règles, par ordre d'importance :\n\n" +
            "- **Jamais de clé en dur.** Ni dans un nœud Code, ni dans un header de HTTP Request tapé à la main, ni dans une Sticky Note. Toujours le coffre à credentials (leçon 12) : les valeurs y sont chiffrées, et surtout elles ne partent PAS dans tes exports JSON. Une clé écrite en dur dans un nœud part dans chaque export, chaque copier-coller, chaque capture d'écran de ton éditeur.\n" +
            "- **Sauvegarde ta clé de chiffrement** (auto-hébergé uniquement). n8n chiffre les credentials avec une clé, `N8N_ENCRYPTION_KEY`, stockée par défaut dans le dossier de données. Si tu perds le serveur sans avoir cette clé ailleurs, tes sauvegardes de credentials sont indéchiffrables : tu recréeras tout. Copie-la dans ton gestionnaire de mots de passe le jour de l'installation.\n" +
            "- **Scopes minimaux et clés dédiées** (leçon 6, version production) : une clé par usage, nommée (`n8n-tri-emails`), avec les seuls droits nécessaires. Le jour où une clé fuite, tu sauras laquelle et tu ne révoqueras qu'elle.\n" +
            "- **Fais le ménage.** Tous les trimestres, supprime les credentials des expériences abandonnées. Un coffre qui ne contient que du vivant, c'est une surface d'attaque et une charge mentale en moins.\n" +
            "- **Protège l'accès à n8n lui-même** : celui qui entre dans ton éditeur peut utiliser tous tes credentials sans jamais en voir les valeurs. Mot de passe solide, deuxième facteur activé (n8n le propose), et si tu es auto-hébergé, pas d'instance ouverte au monde sans authentification devant.\n\n" +
            "## Séparer l'atelier de l'usine\n\n" +
            "Dernière discipline, celle qui évite le crash du dimanche soir : ne modifie pas directement un workflow actif. La méthode légère : duplique le workflow (\"Duplicate\" dans le menu), bricole sur la copie avec des données de test, et quand la copie est validée, reporte les changements sur l'actif (ou active la copie et désactive l'ancien, après avoir vérifié les déclencheurs pour ne pas avoir DEUX workflows actifs sur le même trigger, le grand classique du doublon auto-infligé). Ton export JSON d'avant modification est ton bouton retour.\n\n" +
            "Avec ça, la boucle du cours est bouclée : tu sais repérer quoi automatiser (partie 1), parler aux APIs (2), construire dans n8n (3), y insérer de l'IA sous garde-fous (4), monter quatre systèmes qui rapportent du temps (5), et les faire vivre sans qu'ils te réveillent la nuit (6). La suite ne s'apprend pas dans un cours : c'est TON inventaire de la leçon 1, ligne par ligne, un workflow à la fois.\n\n" +
            "## À toi\n\n" +
            "Audit final, sur tes propres workflows (ou ceux de Léa si tu n'as pas encore les tiens) : liste ce que tu perdrais si ton instance n8n disparaissait ce soir, et ce qu'un inconnu pourrait faire s'il entrait dans ton éditeur demain matin.\n\n" +
            "> Grille de correction : perte totale = les workflows (couverts par tes exports JSON versionnés ?), les credentials (recréables, MAIS seulement si tu sais lesquels existent : d'où l'intérêt du trousseau propre ; en auto-hébergé, sauvegarde de la base ET de N8N_ENCRYPTION_KEY), l'historique des exécutions (accepte de le perdre). Intrusion = l'inconnu peut exécuter des workflows avec TES accès Gmail et ta clé OpenAI sans voir aucune valeur de clé : la barrière utile est donc devant la porte (mot de passe fort, 2FA), pas dans le coffre. Si ton audit a répondu \"rien de grave\" à l'un des deux scénarios, refais-le en imaginant que ça arrive un vendredi de lancement produit.\n",
        },
        {
          id: "l26",
          title: "Quiz : fiabiliser et maintenir",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q21",
              prompt:
                "Sur quel type d'échec le réglage Retry On Fail d'un nœud est-il réellement utile ?",
              options: [
                "Les erreurs 401 : réessayer finit par faire accepter la clé",
                "Les pannes transitoires comme un 429 ou un timeout, qui se résorbent souvent en quelques secondes",
                "Les erreurs 404 : l'URL peut se remettre à exister",
                "Tous les échecs sans distinction : plus on réessaie, mieux c'est",
              ],
              correctIndex: 1,
              explanation:
                "Le retry est fait pour les pannes passagères : saturation (429), erreur serveur ponctuelle, micro-coupure réseau. Un 401 (mauvaise clé) ou un 404 (mauvaise URL) sont des erreurs de configuration : les trois essais échoueront à l'identique. Et sur un nœud qui agit (envoi d'email), un retry aveugle peut dupliquer l'action si elle avait en fait réussi.",
            },
            {
              id: "q22",
              prompt:
                "Quelle est la différence entre l'option On Error \"Continue (using error output)\" d'un nœud et l'Error Workflow global ?",
              options: [
                "Aucune, ce sont deux noms de la même fonction",
                "La sortie d'erreur route les items en échec vers un traitement prévu dans le même workflow (le mode dégradé) ; l'Error Workflow est un filet global qui s'exécute quand un workflow échoue, y compris là où rien n'était prévu",
                "L'Error Workflow corrige les erreurs automatiquement, la sortie d'erreur ne fait que les afficher",
                "La sortie d'erreur est réservée au plan Enterprise",
              ],
              correctIndex: 1,
              explanation:
                "Les deux niveaux se complètent : la sortie d'erreur, configurée nœud par nœud, permet un plan B local (l'email non classé reçoit un label ERREUR_TRI et arrive devant un humain) ; l'Error Workflow, désigné dans les réglages du workflow et démarré par un Error Trigger, attrape tous les échecs imprévus et les transforme en notification. Aucun ne corrige quoi que ce soit tout seul.",
            },
            {
              id: "q23",
              prompt:
                "Pourquoi le ping de heartbeat vers healthchecks.io doit-il être le DERNIER nœud du workflow ?",
              options: [
                "Parce que healthchecks.io rejette les pings envoyés en début d'exécution",
                "Pour que le ping soit plus rapide à envoyer",
                "Parce qu'ainsi le ping n'est émis que si toute la chaîne a fonctionné : son absence signale aussi bien un workflow désactivé qu'un échec en cours de route",
                "Parce que n8n n'autorise les HTTP Request qu'en fin de workflow",
              ],
              correctIndex: 2,
              explanation:
                "Le heartbeat inversé repose sur la preuve de succès : le service externe s'alarme quand le ping attendu manque. Placé en dernier, le ping atteste que tout le workflow s'est déroulé ; placé au début, il dirait seulement \"ça a démarré\" et masquerait un échec au milieu. C'est ce mécanisme qui détecte les pannes silencieuses (workflow désactivé, instance éteinte) qu'aucun statut rouge ne signalera jamais.",
            },
            {
              id: "q24",
              prompt:
                "Ton export JSON de workflow ne contient pas les valeurs de tes credentials. Quelle en est la conséquence pratique ?",
              options: [
                "C'est un bug : il faut ajouter les clés à la main dans le JSON avant de l'archiver",
                "Tu peux versionner et partager tes exports sans exposer de secrets, mais une restauration complète exige aussi de pouvoir recréer les credentials (et, en auto-hébergé, d'avoir sauvegardé N8N_ENCRYPTION_KEY)",
                "Les workflows restaurés fonctionnent sans credentials",
                "Cela n'a aucune conséquence, les credentials sont inutiles à la restauration",
              ],
              correctIndex: 1,
              explanation:
                "L'export ne référence les credentials que par leur nom : tu peux donc committer tes JSON dans git ou les partager sans fuite de secrets, à condition de n'avoir jamais écrit de clé en dur dans un nœud. Le revers : la sauvegarde des workflows ne suffit pas, il faut aussi le trousseau (recréable si tu sais ce qu'il contient) et, en auto-hébergé, la clé de chiffrement sans laquelle les credentials sauvegardés sont indéchiffrables.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
