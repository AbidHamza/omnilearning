import type { Course } from "../types";

const course: Course = {
  slug: "marketing-digital",
  title: "Marketing digital : acquérir et fidéliser ses premiers clients",
  tagline:
    "Un funnel AARRR de bout en bout : du premier clic SEO au client qui recommande, avec des chiffres et des arbitrages réels.",
  description:
    "Ce cours prend le problème par le bon bout : pas une liste de canaux à cocher, mais une machine à acquérir et retenir des clients. Le funnel AARRR (acquisition, activation, rétention, revenu, recommandation) sert de fil rouge du début à la fin. On construit d'abord un positionnement et des personas qui tiennent, puis on branche les canaux dessus : SEO, contenu, email, social organique, publicité payante. On finit par la mesure honnête, celle qui distingue une métrique qui pilote une décision d'une métrique qui flatte l'ego. À chaque étape, des ordres de grandeur concrets (CTR, taux d'ouverture, CPC, ROAS, ratio CAC/LTV) pour arrêter de deviner.",
  category: "Gestion de projet",
  level: "Intermédiaire",
  instructor: "Camille Ferrand",
  instructorBio:
    "Dix ans à monter l'acquisition de startups B2B et de e-commerces, d'abord en agence puis en interne comme head of growth. A brûlé assez de budget Ads pour savoir où ça fuit.",
  hours: 7,
  rating: 4.7,
  learners: 1840,
  accent: "#2563eb",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  language: "Français",
  software: "Google Search Console, GA4, un outil d'emailing (Brevo/Mailchimp), Google Ads & Meta Ads Manager",
  prerequisites: [
    "Savoir naviguer sur le web et gérer un site ou une page produit (WordPress, Shopify, ou un site sur mesure)",
    "Des bases de tableur (filtres, formules simples) pour lire des exports de données",
    "Aucune expérience en publicité payante requise, mais avoir déjà publié en ligne aide",
  ],
  summary: [
    "Poser le cadre : le funnel AARRR, un positionnement défendable et des personas fondés sur de vrais signaux.",
    "Capter l'intention : SEO on-page, technique, maillage interne et mesure via Search Console.",
    "Nourrir l'audience : content marketing, calendrier éditorial et social organique bien ciblé.",
    "Convertir et retenir par email : séquences, segmentation et délivrabilité.",
    "Acheter du trafic sans se ruiner : Google Ads vs Meta, structure de campagne, ROAS et CAC/LTV.",
    "Mesurer honnêtement : GA4, CRO/landing pages, attribution et vanity metrics à ignorer.",
  ],
  objectives: [
    "Cartographier son activité sur le funnel AARRR et identifier l'étape qui bride réellement la croissance",
    "Rédiger une proposition de valeur et des personas exploitables, pas des fiches décoratives",
    "Construire une stratégie SEO from scratch : intention, on-page, maillage, technique, suivi Search Console",
    "Écrire des séquences email qui convertissent et arrivent en boîte de réception",
    "Structurer une campagne Google Ads et Meta Ads et juger sa rentabilité avec ROAS, CAC et LTV",
    "Configurer les événements et conversions GA4 et distinguer une vraie métrique d'une vanity metric",
  ],
  skills: [
    "Cadrage funnel AARRR et diagnostic d'entonnoir",
    "SEO on-page et technique + lecture de Search Console",
    "Email marketing (séquences, segmentation, délivrabilité)",
    "Achat média Google Ads & Meta (structure, enchères, ROAS)",
    "Analytics GA4 et modélisation CAC/LTV",
    "Optimisation de landing pages (CRO)",
  ],
  contentTypes: ["Leçons écrites", "Notes de démonstration", "Quiz interactifs", "Études de cas chiffrées"],
  parts: [
    {
      id: "p1",
      title: "Le cadre : funnel, positionnement, personas",
      lessons: [
        {
          id: "l1",
          title: "Le funnel AARRR, votre fil rouge",
          type: "text",
          duration: "15 min",
          body:
            "## Cinq lettres qui remettent de l'ordre\n\n" +
            "AARRR a été popularisé par Dave McClure (500 Startups) sous le nom de \"pirate metrics\". L'idée tient en une phrase : un client ne tombe pas du ciel, il traverse cinq étapes, et à chaque étape il en perd d'autres au passage. Les cinq :\n\n" +
            "1. **Acquisition** — la personne découvre que vous existez (SEO, pub, bouche-à-oreille).\n" +
            "2. **Activation** — sa première expérience est bonne : elle comprend la valeur (inscription, premier usage, première commande).\n" +
            "3. **Rétention** — elle revient. Sans rétention, tout le reste est un seau percé.\n" +
            "4. **Revenu** — elle paie, ou paie davantage.\n" +
            "5. **Recommandation** — elle amène d'autres gens.\n\n" +
            "## Pourquoi ce cadre plutôt qu'un autre\n\n" +
            "Parce qu'il force à regarder les taux de passage entre étapes, pas les volumes bruts. Un exemple concret. Deux e-commerces reçoivent 10 000 visiteurs par mois. Le premier convertit 2 % des visiteurs et en fait revenir 40 % le mois suivant. Le second convertit 3 % mais n'en retient que 10 %. Sur douze mois, le premier gagne. La rétention compose, l'acquisition non.\n\n" +
            "> À retenir : votre travail n'est pas d'améliorer les cinq étapes en même temps. C'est de trouver **l'étape qui saigne le plus** et de la réparer avant de toucher au reste.\n\n" +
            "## Diagnostiquer son goulot\n\n" +
            "Posez les chiffres bruts, étape par étape, sur un mois. Visiteurs, inscrits, actifs, clients, clients qui reviennent, clients qui parrainent. Calculez le taux de conversion d'une étape à la suivante. La plus faible par rapport à sa référence de secteur est votre chantier prioritaire.\n\n" +
            "Piège classique que je vois tout le temps : une équipe injecte du budget en Acquisition alors que son problème est en Activation. Elle achète plus de trafic qui rebondit. Le coût par acquisition monte, personne ne comprend pourquoi, et la conclusion erronée devient \"la pub ne marche pas\". La pub marchait, l'accueil était cassé.\n\n" +
            "## Ce que le funnel n'est pas\n\n" +
            "Ce n'est pas un tunnel linéaire propre. Les gens entrent par le milieu, ressortent, reviennent trois semaines plus tard via un autre canal. Le modèle reste utile comme **grille de lecture**, pas comme description fidèle du parcours réel. On y reviendra en parlant d'attribution, où cette non-linéarité devient un vrai casse-tête de mesure.\n\n" +
            "Tout le reste du cours se raccroche à ces cinq lettres. SEO, contenu et Ads nourrissent l'Acquisition ; les landing pages jouent l'Activation ; l'email tient la Rétention et une partie du Revenu ; les mécaniques de parrainage adressent la Recommandation.",
        },
        {
          id: "l2",
          title: "Positionnement et proposition de valeur",
          type: "text",
          duration: "16 min",
          body:
            "## Le positionnement précède tous les canaux\n\n" +
            "Avant d'ouvrir un compte Google Ads ou d'écrire un article, il faut savoir répondre à une question en une phrase : **pour qui, quel problème, en quoi vous êtes différent**. Sans ça, chaque euro d'acquisition travaille contre vous, parce que vous attirez des gens que vous ne satisfaites pas.\n\n" +
            "Le positionnement, c'est le choix d'un terrain où vous pouvez gagner. Vous ne pouvez pas être \"le meilleur\" en général. Vous pouvez être le meilleur pour un segment précis, sur un critère précis. April Dunford résume ça bien dans *Obviously Awesome* : le positionnement, c'est le contexte qui fait qu'un produit devient évident pour la bonne personne.\n\n" +
            "## La proposition de valeur, concrètement\n\n" +
            "Une bonne proposition de valeur n'est pas un slogan. C'est l'articulation entre trois choses :\n\n" +
            "- La **tâche** que le client essaie d'accomplir (le \"job to be done\").\n" +
            "- Le **gain** qu'il cherche et la **douleur** qu'il veut éviter.\n" +
            "- Ce que votre offre apporte de mieux que l'alternative, y compris l'alternative \"ne rien faire\".\n\n" +
            "Testez la vôtre avec une trame simple :\n\n" +
            "1. Pour [segment précis]\n" +
            "2. qui [situation et problème]\n" +
            "3. notre [catégorie de produit]\n" +
            "4. apporte [bénéfice principal mesurable]\n" +
            "5. contrairement à [alternative], parce que [preuve/différence structurelle].\n\n" +
            "Exemple pour un logiciel de facturation destiné aux artisans : \"Pour les artisans du bâtiment qui perdent des heures sur leurs devis, notre app génère un devis conforme en 3 minutes depuis le chantier, là où un tableur exige de repasser au bureau.\"\n\n" +
            "## L'erreur des adjectifs\n\n" +
            "\"Simple, rapide, innovant, sur mesure\". Ces mots ne positionnent rien parce que vos concurrents disent exactement les mêmes. La différenciation vit dans le **spécifique et le vérifiable** : un chiffre, une contrainte que vous adressez et pas les autres, un cas d'usage que vous servez mieux.\n\n" +
            "> À retenir : si vous pouvez remplacer le nom de votre entreprise par celui d'un concurrent sans que la phrase devienne fausse, votre positionnement n'existe pas.\n\n" +
            "## Le lien avec le funnel\n\n" +
            "Un positionnement net améliore chaque étape AARRR à la fois. En Acquisition, il rend vos annonces et vos titres plus cliquables parce qu'ils parlent à quelqu'un. En Activation, il aligne l'attente et l'expérience, donc moins de déception. En Rétention, il attire des clients pour qui vous êtes vraiment le bon choix, ceux qui restent. C'est le seul levier qui agit partout en même temps, et c'est aussi le seul qui ne coûte que de la réflexion.",
        },
        {
          id: "l3",
          title: "Des personas fondés sur de vrais signaux",
          type: "text",
          duration: "15 min",
          body:
            "## Le persona inventé ne sert à rien\n\n" +
            "Vous avez déjà vu ces fiches : \"Marie, 34 ans, aime le yoga et les brunchs, veut réussir sa vie\". C'est de la décoration. Un persona utile n'est pas un portrait sympathique, c'est une **synthèse de signaux observés** qui vous aide à décider quoi dire et où.\n\n" +
            "La question n'est pas l'âge ou le prénom. La question est : quel problème cette personne cherche activement à résoudre, avec quels mots, à quel moment, et qu'est-ce qui la fait hésiter.\n\n" +
            "## Où trouver les vrais signaux\n\n" +
            "Vous en avez déjà autour de vous, gratuitement :\n\n" +
            "- **Les conversations de vente et le support**. Les objections récurrentes, les phrases exactes des clients. Notez le verbatim, pas votre reformulation.\n" +
            "- **Search Console et l'outil de mots-clés**. Les requêtes réelles montrent l'intention et le vocabulaire. Si les gens tapent \"logiciel devis auto-entrepreneur gratuit\", le mot \"gratuit\" est un signal d'objection prix.\n" +
            "- **Les avis, les vôtres et ceux des concurrents**. Les avis 3 étoiles sont une mine : ils disent ce qui a failli marcher.\n" +
            "- **Les forums et communautés** (Reddit, groupes Facebook métier, Discord). Les gens y parlent sans filtre marketing.\n" +
            "- **Vos analytics** : quelles pages retiennent, quels parcours convertissent.\n\n" +
            "## Structurer un persona qui décide\n\n" +
            "Gardez trois à cinq segments maximum. Pour chacun, remplissez seulement ce qui influence une action :\n\n" +
            "1. **Déclencheur** : l'événement qui lance la recherche (un salarié qui démissionne, une amende, une saison qui démarre).\n" +
            "2. **Tâche** : ce qu'il veut accomplir.\n" +
            "3. **Vocabulaire** : les mots qu'il emploie (ils deviennent vos mots-clés et vos titres).\n" +
            "4. **Objections** : ce qui le retient d'acheter.\n" +
            "5. **Canaux** : où il passe son temps et cherche des réponses.\n\n" +
            "> À retenir : un bon persona doit vous permettre d'écrire une annonce et de choisir un canal sans hésiter. S'il ne sert pas à décider, jetez-le.\n\n" +
            "## Attention au biais du client idéal fantasmé\n\n" +
            "On dessine souvent le client qu'on aimerait avoir, pas celui qu'on a. Confrontez toujours vos hypothèses aux données : si vos meilleurs clients (ceux qui restent et parrainent) ne ressemblent pas à votre persona principal, c'est le persona qu'il faut corriger. La rétention réelle est le meilleur juge de qui est vraiment votre cible.\n\n" +
            "Ces personas alimentent directement la suite : ils décident des mots-clés SEO qu'on visera, du ton des emails, du ciblage publicitaire et des angles de contenu.",
        },
        {
          id: "l4",
          title: "Un cadre de mesure honnête",
          type: "text",
          duration: "14 min",
          body:
            "## Le problème avant les outils\n\n" +
            "On installe GA4, on branche des tableaux de bord, et on se retrouve à contempler des chiffres qui montent sans savoir s'ils veulent dire quelque chose. Le cadre de mesure se pose **avant** l'outil : quelle décision je veux pouvoir prendre, et quelle métrique la déclenche.\n\n" +
            "Une métrique utile a deux propriétés. Elle est **actionnable** (je sais quoi faire si elle bouge) et elle est **rattachée à une étape du funnel**. Le reste est du bruit décoratif.\n\n" +
            "## Vanity metrics : les reconnaître\n\n" +
            "Une vanity metric monte toujours et ne dit jamais quoi faire. Les grands classiques :\n\n" +
            "- **Le nombre de followers**. Vous pouvez avoir 50 000 abonnés et zéro vente. Ce qui compte, c'est le trafic et les conversions que le canal génère.\n" +
            "- **Les impressions et la portée** seules. Être vu n'est pas être choisi.\n" +
            "- **Les pages vues cumulées** sans segmentation. Un pic de trafic sur un article viral hors sujet ne vaut rien.\n" +
            "- **Le taux d'ouverture email pris isolément**, surtout depuis 2021 et Apple Mail Privacy Protection qui gonfle artificiellement les ouvertures.\n\n" +
            "Le test : si la métrique double, est-ce que je sais quelle décision prendre ? Si non, c'est de la vanité.\n\n" +
            "## Le casse-tête de l'attribution\n\n" +
            "Un client vous découvre via un article de blog, revient trois jours plus tard par une pub Meta, puis tape votre nom sur Google et achète. Quel canal a \"fait\" la vente ? Aucun seul. C'est là que les modèles d'attribution entrent en jeu :\n\n" +
            "- **Last click** : tout le crédit au dernier canal (ici le Search de marque). Simple, mais surévalue le bas du funnel et le retargeting.\n" +
            "- **First click** : tout au premier (le blog). Surévalue la découverte.\n" +
            "- **Linéaire / basé sur la position** : répartit le crédit. Plus juste, plus flou.\n\n" +
            "> À retenir : aucun modèle n'est \"vrai\". Choisissez-en un, gardez-le pour comparer dans le temps, et méfiez-vous des canaux qui ne performent qu'en last-click, ils volent souvent le crédit d'autres.\n\n" +
            "## La North Star et la sobriété\n\n" +
            "Choisissez une **métrique boussole** qui reflète la valeur réellement délivrée (commandes livrées, projets terminés, mois actifs) plutôt qu'un proxy manipulable. Puis limitez-vous à cinq ou six indicateurs de pilotage, un par étape du funnel. Un tableau de bord de 40 chiffres n'est pas un signe de rigueur, c'est un signe qu'on ne sait pas ce qu'on cherche.",
        },
        {
          id: "l5",
          title: "Quiz — Cadre, positionnement, personas",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Un e-commerce reçoit beaucoup de trafic mais très peu de ces visiteurs finissent leur première commande, et son coût par acquisition explose. Où est probablement le vrai chantier ?",
              options: [
                "En Acquisition : il faut acheter encore plus de trafic",
                "En Activation : la première expérience convertit mal, injecter plus de trafic ne fera qu'aggraver le coût",
                "En Recommandation : il manque un programme de parrainage",
                "Nulle part, un CPA élevé est normal en e-commerce",
              ],
              correctIndex: 1,
              explanation:
                "Le symptôme (beaucoup de trafic, peu de conversions, CPA qui monte) pointe vers l'Activation. Ajouter du budget en amont revient à remplir un seau percé : chaque visiteur supplémentaire coûte et rebondit. On répare l'étape qui saigne avant d'élargir le haut du funnel.",
            },
            {
              id: "q2",
              prompt:
                "Parmi ces propositions de valeur, laquelle positionne réellement l'offre ?",
              options: [
                "Une solution simple, rapide et innovante pour votre entreprise",
                "Le logiciel de facturation le plus intuitif du marché",
                "Pour les artisans du bâtiment qui perdent des heures sur leurs devis, une app qui génère un devis conforme en 3 minutes depuis le chantier",
                "La plateforme sur mesure qui accompagne votre croissance",
              ],
              correctIndex: 2,
              explanation:
                "Seule la troisième nomme un segment précis, une situation, un bénéfice mesurable et une différence structurelle (depuis le chantier, en 3 minutes). Les autres sont des adjectifs interchangeables : on peut y remplacer le nom de l'entreprise par n'importe quel concurrent sans que ce soit faux.",
            },
            {
              id: "q3",
              prompt:
                "Votre persona principal décrit un dirigeant de 45 ans soucieux d'image de marque. Mais vos clients qui restent le plus longtemps et vous recommandent sont surtout de jeunes indépendants sensibles au prix. Que faire ?",
              options: [
                "Garder le persona, il correspond à la cible qu'on veut atteindre",
                "Corriger le persona pour qu'il colle aux clients réellement fidèles, car la rétention est le meilleur juge de la vraie cible",
                "Créer dix personas pour couvrir tous les cas",
                "Ignorer les personas, ils ne servent à rien",
              ],
              correctIndex: 1,
              explanation:
                "Un persona n'est pas le client fantasmé mais une synthèse de signaux observés. Quand les clients qui restent et parrainent contredisent le persona, c'est le persona qui est faux. La rétention réelle révèle qui est vraiment votre cible mieux que n'importe quelle hypothèse de départ.",
            },
            {
              id: "q4",
              prompt:
                "Pourquoi le taux d'ouverture email seul est-il un mauvais indicateur de pilotage depuis 2021 ?",
              options: [
                "Parce que personne n'ouvre plus ses emails",
                "Parce qu'Apple Mail Privacy Protection précharge les images et gonfle artificiellement les ouvertures, ce qui rend la métrique peu fiable prise isolément",
                "Parce que les taux d'ouverture ne sont plus mesurables du tout",
                "Parce que l'ouverture n'a jamais eu de valeur",
              ],
              correctIndex: 1,
              explanation:
                "Depuis iOS 15, Apple précharge les pixels de suivi côté Apple pour les utilisateurs Mail, ce qui compte des ouvertures qui n'ont pas eu lieu. Le taux d'ouverture reste utile en tendance relative, mais il ne pilote plus une décision seul : on regarde clics, conversions et désabonnements en complément.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "SEO : capter l'intention de recherche",
      lessons: [
        {
          id: "l6",
          title: "L'intention de recherche avant tout",
          type: "text",
          duration: "15 min",
          body:
            "## Google ne classe pas des mots, il satisfait des intentions\n\n" +
            "La plus grosse erreur SEO des débutants : choisir un mot-clé parce qu'il a du volume, sans se demander ce que la personne veut vraiment quand elle le tape. Or Google évalue si votre page **répond à l'intention** derrière la requête. Se tromper d'intention, c'est écrire une page qui ne se classera jamais, peu importe l'optimisation technique.\n\n" +
            "## Les quatre intentions\n\n" +
            "On distingue classiquement quatre types :\n\n" +
            "- **Informationnelle** : la personne veut apprendre (\"comment calculer une TVA\", \"qu'est-ce qu'un persona\"). Elle n'achète pas encore.\n" +
            "- **Navigationnelle** : elle cherche un site précis (\"connexion Brevo\", \"Shopify tarifs\").\n" +
            "- **Commerciale** : elle compare avant d'acheter (\"meilleur logiciel de facturation\", \"Brevo vs Mailchimp\").\n" +
            "- **Transactionnelle** : elle est prête à agir (\"acheter licence antivirus\", \"devis plombier Lyon\").\n\n" +
            "Une requête informationnelle appelle un article ou un guide. Une requête transactionnelle appelle une page produit ou une landing page. Mettre une page produit sur une requête informationnelle, c'est perdre à tous les coups.\n\n" +
            "## Lire les SERP pour valider l'intention\n\n" +
            "La méthode la plus fiable ne coûte rien : tapez la requête et regardez ce qui se classe déjà. Google a tranché à votre place. Si le top 10 est plein d'articles de blog, c'est informationnel, votre fiche produit n'a aucune chance. Si c'est plein de pages catégories e-commerce, c'est transactionnel.\n\n" +
            "Regardez aussi les blocs SERP : \"Autres questions posées\" (People Also Ask) révèle les sous-questions à couvrir, les featured snippets montrent le format que Google privilégie.\n\n" +
            "> À retenir : avant d'écrire, ouvrez les 5 premiers résultats. Ils vous disent l'intention, la profondeur attendue et le format. Vous ne devinez plus, vous observez.\n\n" +
            "## Volume, difficulté et la stratégie longue traîne\n\n" +
            "Un mot-clé à 40 000 recherches par mois est presque toujours hors de portée d'un site jeune, saturé de gros acteurs. La longue traîne (requêtes de 4 mots et plus, faible volume unitaire) est votre terrain : moins de concurrence, intention plus précise, taux de conversion souvent supérieur.\n\n" +
            "Cent requêtes longue traîne à 30 recherches mensuelles valent mieux qu'une requête à 3 000 que vous n'atteindrez jamais. Et elles se regroupent : plusieurs requêtes proches se traitent avec un seul bon article. Reliez toujours le choix des mots-clés au vocabulaire de vos personas vu en partie 1, c'est là que l'intention et votre offre se rencontrent.",
        },
        {
          id: "l7",
          title: "On-page et maillage interne",
          type: "text",
          duration: "16 min",
          body:
            "## L'optimisation on-page, sans magie\n\n" +
            "Le SEO on-page, c'est rendre une page compréhensible pour l'humain et la machine sur un sujet précis. Pas de bourrage de mots-clés, cette époque est morte depuis Panda en 2011. Quelques fondamentaux qui pèsent vraiment :\n\n" +
            "La **balise title** est l'élément on-page le plus important. C'est le titre bleu cliquable dans les résultats. Elle doit contenir le mot-clé principal, tenir en ~60 caractères (au-delà Google la tronque) et donner envie de cliquer.\n\n" +
            "```html\n<title>Logiciel de devis pour artisans — devis conforme en 3 min</title>\n<meta name=\"description\" content=\"Créez des devis conformes depuis le chantier en 3 minutes. Essai gratuit, sans carte bancaire.\">\n```\n\n" +
            "La **meta description** ne classe pas directement mais influence le taux de clic depuis les résultats. 150-160 caractères, un bénéfice, un appel à l'action.\n\n" +
            "## La structure Hn\n\n" +
            "Une page a **un seul H1** (le titre principal), puis des H2 et H3 qui découpent logiquement. Cette hiérarchie aide Google à comprendre le plan et l'utilisateur à scanner. Répondez à l'intention **dès le premier paragraphe** : les gens et les robots jugent vite.\n\n" +
            "Couvrez le sujet en profondeur, y compris les questions annexes du bloc \"Autres questions posées\". Un contenu qui traite le sujet complètement se classe mieux qu'un contenu court même parfaitement optimisé.\n\n" +
            "## Le maillage interne, l'arme sous-estimée\n\n" +
            "Les liens internes font trois choses : ils aident Google à découvrir vos pages, ils répartissent l'autorité (le \"link juice\") entre elles, et ils guident l'utilisateur. C'est un des leviers les plus rentables parce qu'il ne dépend que de vous.\n\n" +
            "Deux principes concrets :\n\n" +
            "1. **Ancre descriptive** : le texte cliquable doit décrire la page cible (\"guide de la facturation auto-entrepreneur\") plutôt que \"cliquez ici\". L'ancre est un signal de pertinence.\n" +
            "2. **Structure en cocon** : regroupez vos articles par thème, une page pilier qui couvre le sujet large, des articles satellites qui traitent les sous-sujets et pointent vers le pilier et entre eux. Ça concentre l'autorité et clarifie votre expertise thématique.\n\n" +
            "> À retenir : chaque nouvelle page devrait recevoir au moins deux ou trois liens internes depuis des pages existantes pertinentes, sinon elle reste orpheline et Google la juge peu importante.\n\n" +
            "## Ce qui ne marche plus\n\n" +
            "Le mot-clé répété 20 fois, les paragraphes bourrés de synonymes, les balises title identiques sur tout le site, le contenu dupliqué. Google est devenu bon pour détecter le contenu écrit pour lui plutôt que pour l'humain. Écrivez pour la personne, optimisez ensuite. On mesurera l'effet de tout ça avec Search Console deux leçons plus loin.",
        },
        {
          id: "l8",
          title: "Les bases techniques du SEO",
          type: "text",
          duration: "15 min",
          body:
            "## Le SEO technique, ou comment ne pas se saborder\n\n" +
            "Le technique ne fait pas grimper une page magiquement. Mais mal fait, il empêche vos bonnes pages de se classer. C'est un filet de sécurité : on vérifie que rien ne bloque, on ne cherche pas de miracle.\n\n" +
            "## Indexation : la base de la base\n\n" +
            "Si Google ne peut pas explorer et indexer votre page, rien d'autre ne compte. Deux fichiers à connaître :\n\n" +
            "Le **robots.txt** dit aux robots ce qu'ils peuvent explorer. L'erreur fatale, vécue plus d'une fois : oublier un blocage de préproduction en production.\n\n" +
            "```bash\n# robots.txt correct : autorise tout, pointe le sitemap\nUser-agent: *\nAllow: /\nSitemap: https://votresite.fr/sitemap.xml\n```\n\n" +
            "La balise **meta robots noindex** retire une page de l'index. Un `noindex` oublié après une refonte, et un site entier disparaît de Google. Vérifiez-le systématiquement avant toute mise en ligne.\n\n" +
            "Le **sitemap.xml** liste vos pages importantes pour aider Google à les découvrir. Soumettez-le dans Search Console.\n\n" +
            "## Vitesse et Core Web Vitals\n\n" +
            "Google utilise l'expérience de page comme signal, mesuré par trois indicateurs (les Core Web Vitals) :\n\n" +
            "- **LCP** (Largest Contentful Paint) : le temps d'affichage du plus gros élément. Cible sous 2,5 s.\n" +
            "- **INP** (Interaction to Next Paint), qui a remplacé le FID en mars 2024 : la réactivité aux interactions. Cible sous 200 ms.\n" +
            "- **CLS** (Cumulative Layout Shift) : la stabilité visuelle, ces sauts de mise en page agaçants. Cible sous 0,1.\n\n" +
            "Les leviers concrets : compresser les images (WebP, dimensions correctes), différer le JavaScript non critique, utiliser un CDN, activer la mise en cache. Une image de 4 Mo affichée en vignette est le péché le plus courant.\n\n" +
            "## Mobile et HTTPS\n\n" +
            "Google indexe en **mobile-first** depuis des années : c'est la version mobile qui fait foi. Si votre site est illisible sur téléphone, vous êtes pénalisé même pour les recherches desktop. **HTTPS** est un prérequis, plus une option.\n\n" +
            "## Données structurées\n\n" +
            "Le balisage Schema.org (au format JSON-LD) aide Google à comprendre le type de contenu et peut déclencher des **résultats enrichis** : étoiles d'avis, prix, FAQ dépliables. Ça n'améliore pas le classement directement mais augmente le taux de clic, ce qui compte autant.\n\n" +
            "> À retenir : le technique est un audit de non-régression. Chaque mise en ligne, on vérifie indexation, noindex, vitesse et rendu mobile. Un oubli ici annule des mois de contenu.",
        },
        {
          id: "l9",
          title: "Mesurer avec Google Search Console",
          type: "video",
          duration: "17 min",
          videoLabel: "Démo : lire le rapport Performances et l'onglet Indexation dans Search Console",
          body:
            "## L'outil que Google vous donne gratuitement\n\n" +
            "Search Console (GSC) est le seul endroit où vous voyez comment Google perçoit réellement votre site : quelles requêtes vous rapportent des clics, à quelle position vous êtes, quelles pages sont indexées ou en erreur. GA4 vous dit ce qui se passe sur le site ; GSC vous dit ce qui se passe **avant** le clic. Les deux sont complémentaires.\n\n" +
            "## Notes de démo — le rapport Performances\n\n" +
            "On ouvre l'onglet **Performances > Résultats de recherche**. Quatre métriques en haut :\n\n" +
            "- **Clics** : les visites depuis Google.\n" +
            "- **Impressions** : le nombre de fois où votre page est apparue dans les résultats.\n" +
            "- **CTR** (clics / impressions) : votre taux de clic. Ordre de grandeur réaliste selon la position : environ 28-30 % en position 1, ~15 % en position 2, ~10 % en position 3, et ça s'effondre sous 2 % dès la deuxième page.\n" +
            "- **Position moyenne**.\n\n" +
            "La manipulation qui change tout : cocher **Impressions** et **Position**, puis passer dans l'onglet **Requêtes**. On cherche les requêtes qui ont beaucoup d'impressions mais une position moyenne entre 8 et 20. Ce sont vos **quick wins** : Google vous juge pertinent (il vous montre), mais vous êtes en bas de page 1 ou en page 2. Un article amélioré, quelques liens internes, et vous gagnez trois places qui doublent le trafic.\n\n" +
            "> À retenir : le levier le plus rentable en SEO n'est pas de créer une nouvelle page, c'est de pousser une page déjà en position 8-15 vers le top 5. GSC vous les liste précisément.\n\n" +
            "## Notes de démo — l'indexation\n\n" +
            "Onglet **Indexation > Pages**. Il sépare les pages indexées des pages exclues, avec la raison de chaque exclusion : \"Explorée, actuellement non indexée\", \"Détectée, actuellement non indexée\", \"Bloquée par robots.txt\", \"Exclue par la balise noindex\". Si une page importante figure dans les exclues, c'est là qu'on diagnostique. L'outil **Inspection d'URL** (barre du haut) teste une URL précise et permet de demander une indexation.\n\n" +
            "## Ce qu'on regarde vraiment\n\n" +
            "Chaque semaine, trois choses suffisent : les requêtes en position 8-20 à pousser, les nouvelles pages en erreur d'indexation, et l'évolution des clics par page. Le reste est du confort. GSC est aussi votre source de vérité sur le **vocabulaire réel** de vos visiteurs, ce qui boucle avec le travail sur les personas et l'intention.",
        },
        {
          id: "l10",
          title: "Quiz — SEO fondamentaux",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Vous voulez vous classer sur \"meilleur logiciel de facturation\". En regardant la page 1 de Google, vous ne voyez que des articles comparatifs de blog. Quelle page devez-vous créer ?",
              options: [
                "Votre page produit, puisque vous vendez un logiciel de facturation",
                "Un article comparatif honnête, car l'intention détectée dans la SERP est commerciale/informationnelle, pas transactionnelle",
                "Une page de tarifs",
                "Aucune, la requête est perdue d'avance",
              ],
              correctIndex: 1,
              explanation:
                "La SERP est le meilleur juge de l'intention : Google a déjà décidé que cette requête appelle des comparatifs. Mettre une page produit sur une intention commerciale échoue systématiquement. On aligne le format de sa page sur ce que Google classe déjà pour la requête.",
            },
            {
              id: "q6",
              prompt:
                "Dans Search Console, une page a 4 000 impressions/mois mais une position moyenne de 12. Pourquoi est-ce une priorité intéressante ?",
              options: [
                "Parce qu'elle est déjà en position 1 et rapporte beaucoup",
                "Parce que Google la juge pertinente (fortes impressions) mais elle est en bas de page 1 / page 2 : la pousser vers le top 5 peut multiplier le trafic sans créer de nouvelle page",
                "Parce qu'il faut la mettre en noindex",
                "Parce qu'une position 12 signifie que la page est pénalisée",
              ],
              correctIndex: 1,
              explanation:
                "Le CTR s'effondre sous la première page : passer de la position 12 à la position 4-5 peut faire bondir les clics de façon spectaculaire. Améliorer une page déjà bien vue par Google est bien plus rentable que d'en créer une nouvelle depuis zéro. GSC identifie ces quick wins précisément.",
            },
            {
              id: "q7",
              prompt:
                "Après une refonte, tout le trafic organique d'un site s'effondre en quelques jours. Quelle cause faut-il vérifier en premier ?",
              options: [
                "Les Core Web Vitals",
                "Une balise noindex ou un blocage robots.txt de préproduction oublié en ligne, qui a désindexé le site",
                "Le nombre de mots-clés dans les titles",
                "Le maillage interne",
              ],
              correctIndex: 1,
              explanation:
                "Un effondrement soudain et total après une mise en ligne sent le noindex oublié ou le robots.txt de préprod resté actif. C'est le piège technique le plus fréquent et le plus destructeur. On vérifie l'indexation dans Search Console avant de soupçonner quoi que ce soit d'autre.",
            },
            {
              id: "q8",
              prompt:
                "Pourquoi le maillage interne est-il considéré comme un des leviers SEO les plus rentables ?",
              options: [
                "Parce qu'il fait payer Google pour mieux classer",
                "Parce qu'il ne dépend que de vous : il aide Google à découvrir les pages, répartit l'autorité entre elles et guide l'utilisateur, sans budget ni dépendance externe",
                "Parce qu'il remplace complètement la création de contenu",
                "Parce qu'il augmente le volume de recherche des mots-clés",
              ],
              correctIndex: 1,
              explanation:
                "Contrairement au netlinking externe qui dépend d'autres sites, le maillage interne est entièrement sous votre contrôle. Avec des ancres descriptives et une structure en cocon, il distribue l'autorité vers les pages stratégiques et évite les pages orphelines, pour un coût nul.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Contenu et réseaux sociaux organiques",
      lessons: [
        {
          id: "l11",
          title: "Content marketing et calendrier éditorial",
          type: "text",
          duration: "16 min",
          body:
            "## Produire du contenu n'est pas une stratégie\n\n" +
            "Beaucoup d'entreprises publient un article par semaine et s'étonnent que rien ne bouge. Le content marketing ne consiste pas à remplir un blog, mais à **répondre aux questions de vos personas aux différentes étapes de leur réflexion**, pour être présent avant même qu'ils cherchent à acheter.\n\n" +
            "Le contenu nourrit surtout le haut et le milieu du funnel AARRR : il crée de l'Acquisition organique (via le SEO) et prépare l'Activation en établissant la confiance. Il travaille lentement mais il compose : un bon article continue d'attirer du trafic pendant des années, contrairement à une pub qui s'arrête dès qu'on coupe le budget.\n\n" +
            "## Cartographier le contenu sur le parcours\n\n" +
            "Alignez vos formats sur l'étape de maturité du lecteur :\n\n" +
            "- **Prise de conscience** : la personne réalise qu'elle a un problème. Contenus \"comment\", guides, définitions. \"Pourquoi mes devis me prennent autant de temps\".\n" +
            "- **Considération** : elle compare des solutions. Comparatifs, études de cas, checklists. \"Tableur vs logiciel de devis\".\n" +
            "- **Décision** : elle choisit. Démos, témoignages clients, pages produit détaillées, essais.\n\n" +
            "L'erreur classique est de ne produire que du contenu de décision (\"pourquoi nous sommes les meilleurs\"), qui n'intéresse que les 3 % déjà prêts à acheter. Le contenu de prise de conscience capte les 97 % restants et les fait mûrir.\n\n" +
            "## Le calendrier éditorial, un outil de discipline\n\n" +
            "Un calendrier n'est pas une décoration Notion. Il sert à tenir un rythme et à équilibrer les sujets. Minimum viable :\n\n" +
            "1. Le **sujet** et le mot-clé/l'intention ciblé.\n" +
            "2. L'**étape** du parcours visée.\n" +
            "3. Le **format** et la longueur.\n" +
            "4. La **date** de publication et le responsable.\n" +
            "5. Le **canal de distribution** (car publier ne suffit pas).\n\n" +
            "> À retenir : la règle des 20/80 de la distribution. Passez 20 % de votre temps à créer le contenu et 80 % à le distribuer et le recycler. Un excellent article que personne ne lit ne vaut rien.\n\n" +
            "## Rythme réaliste et recyclage\n\n" +
            "Mieux vaut un article approfondi et bien distribué par mois que quatre articles bâclés. La qualité l'emporte largement depuis les mises à jour \"Helpful Content\" de Google. Un article se recycle ensuite en fil de posts LinkedIn, en séquence email, en carrousel Instagram, en script vidéo. Un seul travail de fond, cinq formats. C'est ça, une machine à contenu soutenable, pas une course au volume.",
        },
        {
          id: "l12",
          title: "Choisir ses réseaux sociaux organiques",
          type: "text",
          duration: "15 min",
          body:
            "## Vous ne pouvez pas être partout, et c'est tant mieux\n\n" +
            "La tentation est d'ouvrir un compte sur chaque plateforme \"au cas où\". Résultat : six comptes moribonds, aucun impact. Le choix se fait sur un seul critère : **où se trouve votre persona et sous quel format il consomme**. Pas sur la plateforme à la mode.\n\n" +
            "## Le paysage, par usage réel\n\n" +
            "Un panorama sans langue de bois, orienté cible :\n\n" +
            "- **LinkedIn** : le canal B2B par excellence. Décideurs, indépendants, recrutement. Le contenu texte natif (posts, pas de liens sortants dans le corps) performe. Si vous vendez à des entreprises, commencez là.\n" +
            "- **Instagram** : visuel, lifestyle, produits physiques, B2C. Fort sur la beauté, la mode, la food, le voyage, la déco. Reels pour la portée, feed pour la marque.\n" +
            "- **TikTok** : audience jeune mais qui s'élargit, portée organique encore forte pour un compte neuf (rare aujourd'hui). Idéal si vous savez produire de la vidéo courte régulièrement et divertissante.\n" +
            "- **Pinterest** : sous-estimé. C'est un moteur de recherche visuel, pas un réseau social. Excellent pour la déco, le DIY, le mariage, la recette, la mode. Le trafic dure des mois, contrairement au fil qui s'éteint en heures.\n" +
            "- **YouTube** : le meilleur investissement long terme si votre sujet se prête à la vidéo (tutoriels, démonstrations). C'est aussi le deuxième moteur de recherche du monde.\n" +
            "- **X / Threads** : niche tech, média, temps réel. Faible portée organique pour une marque lambda.\n\n" +
            "## La portée organique s'est effondrée\n\n" +
            "Soyons honnêtes : la portée organique gratuite a chuté sur presque toutes les plateformes matures. Sur une page Facebook, elle tourne souvent autour de 1 à 5 % des abonnés. Les algorithmes favorisent le contenu qui retient l'attention (vidéo, format natif) et poussent à payer pour de la portée. Le social organique reste utile, mais comme **preuve sociale et relation**, pas comme robinet à trafic massif et gratuit.\n\n" +
            "> À retenir : concentrez-vous sur une, deux plateformes maximum au départ, celles où votre persona est vraiment actif, et devenez bon avant d'élargir. Un compte fort bat cinq comptes tièdes.\n\n" +
            "## Aligner format et plateforme\n\n" +
            "Chaque plateforme a sa grammaire. Reposter la même image partout ne marche pas. Un même sujet devient un post-texte structuré sur LinkedIn, un Reel de 20 secondes sur Instagram, une épingle verticale sur Pinterest. C'est là que le recyclage vu à la leçon précédente prend son sens : un fond, plusieurs formes natives.",
        },
        {
          id: "l13",
          title: "Cohérence de marque et rythme de publication",
          type: "text",
          duration: "14 min",
          body:
            "## La régularité bat l'intensité\n\n" +
            "Le compte social qui réussit n'est presque jamais le plus créatif, c'est le plus **régulier**. Les algorithmes récompensent la constance, et l'audience se construit une habitude. Trois posts par semaine tenus pendant un an battent une rafale de vingt posts sur une semaine suivie de trois mois de silence.\n\n" +
            "Fixez un rythme que vous pouvez **soutenir sans vous épuiser**. Mieux vaut promettre deux posts hebdomadaires et les tenir que viser le quotidien et abandonner au bout d'un mois. La cohérence sur la durée est ce qui construit une audience.\n\n" +
            "## Le pilier de contenu, pour ne pas sécher\n\n" +
            "Le syndrome de la page blanche vient du manque de cadre. Définissez trois à cinq **piliers de contenu**, des thèmes récurrents liés à votre expertise et aux intérêts de votre persona. Un logiciel de devis pour artisans pourrait avoir :\n\n" +
            "1. Astuces d'organisation de chantier.\n" +
            "2. Réglementation et conformité (TVA, mentions obligatoires).\n" +
            "3. Coulisses et culture d'entreprise.\n" +
            "4. Témoignages et résultats clients.\n\n" +
            "Chaque post rentre dans un pilier. Vous ne cherchez plus quoi dire, vous alternez vos thèmes. Ça garantit aussi que vous ne parlez pas que de vous : le ratio sain penche largement vers le contenu utile plutôt que promotionnel.\n\n" +
            "## Une identité reconnaissable\n\n" +
            "La cohérence visuelle et de ton fait qu'on vous reconnaît sans lire le nom du compte. Une palette de couleurs stable, une typographie, un angle éditorial, une manière de parler. Ce n'est pas de la coquetterie : la répétition d'une identité forte accélère la mémorisation, donc la confiance, donc la conversion plus tard.\n\n" +
            "> À retenir : votre audience ne voit qu'une fraction de vos posts. Se répéter n'est pas un défaut, c'est nécessaire. Un bon message mérite d'être reformulé plusieurs fois sous des angles différents.\n\n" +
            "## Mesurer sans se noyer dans la vanité\n\n" +
            "Reliez ceci au cadre de mesure honnête de la partie 1. Les likes et les followers sont des vanity metrics. Ce qui compte : le **taux d'engagement** (interactions / portée), les **enregistrements et partages** (signal fort d'utilité), et surtout le **trafic et les conversions** que le canal envoie vers votre site, traçables dans GA4. Un compte avec peu d'abonnés mais qui envoie des clients qualifiés vaut mieux qu'un compte à 30 000 followers muet côté chiffre d'affaires.",
        },
        {
          id: "l14",
          title: "Quiz — Contenu et social organique",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Une entreprise ne publie que du contenu de type \"pourquoi choisir notre produit\". Pourquoi son content marketing plafonne-t-il ?",
              options: [
                "Parce que ce contenu est trop long",
                "Parce qu'il ne parle qu'aux quelques pour cent déjà prêts à acheter et néglige les contenus de prise de conscience qui captent et font mûrir la majorité des prospects",
                "Parce que Google interdit ce type de contenu",
                "Parce qu'il faut publier plus souvent, peu importe le sujet",
              ],
              correctIndex: 1,
              explanation:
                "Le contenu de décision n'intéresse que la minorité déjà en phase d'achat. En négligeant le contenu de prise de conscience et de considération, l'entreprise se prive de la vaste majorité des prospects qu'elle pourrait attirer tôt et accompagner jusqu'à la décision. On couvre tout le parcours, pas seulement la fin.",
            },
            {
              id: "q10",
              prompt:
                "Vous vendez un logiciel à des directions d'entreprise (B2B) et disposez d'un temps limité. Sur quelle plateforme organique concentrer vos efforts en priorité ?",
              options: [
                "TikTok, pour la portée",
                "LinkedIn, où se trouvent les décideurs B2B et où le contenu texte natif performe",
                "Les six plateformes à la fois pour maximiser la présence",
                "Pinterest, pour le trafic durable",
              ],
              correctIndex: 1,
              explanation:
                "Le choix de plateforme dépend d'où est le persona, pas de la mode. Pour du B2B qui vise des décideurs, LinkedIn est le terrain naturel. Se disperser sur six plateformes avec un temps limité produit six comptes faibles : mieux vaut dominer là où sa cible est réellement active.",
            },
            {
              id: "q11",
              prompt:
                "La \"règle des 20/80\" appliquée au content marketing recommande de :",
              options: [
                "Passer 80 % du temps à créer et 20 % à distribuer",
                "Passer 20 % du temps à créer le contenu et 80 % à le distribuer et le recycler, car un excellent contenu que personne ne voit ne sert à rien",
                "Publier 80 fois par mois",
                "Ne garder que 20 % des articles publiés",
              ],
              correctIndex: 1,
              explanation:
                "Produire ne suffit pas. La valeur se libère à la distribution : partage multicanal, recyclage en plusieurs formats, mise en avant dans les emails. Un article approfondi diffusé et décliné bat un flux d'articles publiés puis abandonnés. Le goulot est presque toujours la distribution, pas la création.",
            },
            {
              id: "q12",
              prompt:
                "Un compte Instagram a 30 000 abonnés mais n'envoie quasiment aucun trafic ni client vers le site. Un autre a 2 000 abonnés très engagés qui achètent. Comment juger ?",
              options: [
                "Le premier est meilleur car il a plus de followers",
                "Le second crée plus de valeur : les abonnés sont une vanity metric, ce sont le trafic qualifié et les conversions traçables dans GA4 qui comptent",
                "Les deux se valent puisqu'ils sont sur la même plateforme",
                "Impossible de comparer",
              ],
              correctIndex: 1,
              explanation:
                "Le nombre d'abonnés est une métrique de vanité classique : il flatte mais ne pilote aucune décision. Ce qui compte, c'est ce que le canal rapporte réellement en trafic qualifié et en clients, mesurable dans GA4. Une petite audience qui convertit bat une grande audience muette côté chiffre d'affaires.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Email marketing : activer et retenir",
      lessons: [
        {
          id: "l15",
          title: "Les séquences qui convertissent",
          type: "text",
          duration: "16 min",
          body:
            "## L'email, le canal qu'on possède\n\n" +
            "Contrairement aux réseaux sociaux et au SEO, vous ne louez pas votre audience email à un algorithme : vous la possédez. Personne ne peut couper votre portée du jour au lendemain. C'est pour ça que l'email reste, année après année, un des canaux au meilleur retour sur investissement. Il travaille surtout l'Activation, la Rétention et le Revenu du funnel AARRR.\n\n" +
            "On distingue deux grands usages : les **campagnes** (un email ponctuel à une liste, une newsletter, une promo) et les **séquences automatisées** (des emails déclenchés par un comportement). Les séquences sont le vrai levier de croissance parce qu'elles tournent toutes seules une fois écrites.\n\n" +
            "## La séquence de bienvenue, la plus rentable\n\n" +
            "Quand quelqu'un s'inscrit, il est au pic de son intérêt. Ne le laissez pas retomber. Une séquence de bienvenue de 3 à 5 emails, déclenchée à l'inscription, obtient des taux d'ouverture bien supérieurs à la moyenne (souvent 40-60 % sur le premier email) parce que la personne vous attend.\n\n" +
            "Une trame qui marche :\n\n" +
            "1. **Email 1, immédiat** : livrer ce qui a été promis (le lead magnet, l'accès), remercier, poser le décor.\n" +
            "2. **Email 2, J+1** : l'histoire ou le problème que vous résolvez. Créer la connexion.\n" +
            "3. **Email 3, J+3** : la preuve. Étude de cas, témoignage, résultat concret.\n" +
            "4. **Email 4, J+5** : lever l'objection principale.\n" +
            "5. **Email 5, J+7** : l'offre claire avec un appel à l'action unique.\n\n" +
            "## Le panier abandonné et les autres déclencheurs\n\n" +
            "En e-commerce, la séquence de **panier abandonné** est souvent l'automatisation la plus rentable du compte : un rappel à H+1, un second à J+1 avec parfois une incitation. Elle récupère une part non négligeable de ventes qui étaient perdues. Autres déclencheurs utiles : réengagement des inactifs, anniversaire d'inscription, post-achat (pour la rétention et le cross-sell).\n\n" +
            "> À retenir : une bonne séquence a **un seul objectif et un seul appel à l'action par email**. L'email qui propose trois choses n'en fait faire aucune.\n\n" +
            "## Écrire pour être lu\n\n" +
            "L'objet décide de l'ouverture : court, concret, curiosité ou bénéfice, jamais trompeur (ça tue la délivrabilité, on y vient). Le corps va droit au but, on écrit comme on parle à une personne, pas à une liste. Un seul bouton d'action bien visible. Et testez : la plupart des outils permettent l'A/B test sur l'objet, c'est le premier levier à activer.",
        },
        {
          id: "l16",
          title: "Segmentation : le bon message au bon contact",
          type: "text",
          duration: "15 min",
          body:
            "## Envoyer la même chose à tout le monde est un gâchis\n\n" +
            "La newsletter unique envoyée à toute la base est le degré zéro de l'email marketing. Vos contacts n'ont ni les mêmes besoins, ni la même maturité, ni le même historique. La **segmentation** consiste à découper la liste pour envoyer un message pertinent à chaque groupe. C'est ce qui sépare un canal qui rapporte d'un canal qui fatigue les gens jusqu'au désabonnement.\n\n" +
            "Les campagnes segmentées obtiennent des taux d'ouverture et de clic nettement supérieurs aux envois de masse, et surtout elles génèrent moins de désabonnements et de plaintes spam, ce qui protège la délivrabilité de tout le compte.\n\n" +
            "## Sur quels critères segmenter\n\n" +
            "Du plus simple au plus fin :\n\n" +
            "- **Cycle de vie** : prospect, client, client fidèle, inactif. Le message diffère radicalement. On ne parle pas à un nouveau prospect comme à un client de trois ans.\n" +
            "- **Comportement** : pages visitées, produits consultés, emails ouverts/cliqués, achats passés. Le comportement est le meilleur prédicteur de l'intérêt, bien plus que les données déclaratives.\n" +
            "- **Engagement** : actifs (ouvrent souvent) vs dormants. On ré-engage les dormants différemment, ou on finit par les retirer.\n" +
            "- **Données transactionnelles** : montant dépensé, fréquence, récence (le modèle RFM), catégorie de produits achetés.\n\n" +
            "## Un exemple concret de règle\n\n" +
            "Segment \"a consulté la page tarifs deux fois cette semaine sans acheter\" : c'est un signal d'intention chaud. On déclenche un email dédié qui lève l'objection prix (garantie, essai, comparatif de valeur). Segment \"client qui n'a pas commandé depuis 90 jours\" : séquence de réactivation avec une raison de revenir. La segmentation transforme des données dormantes en messages qui tombent au bon moment.\n\n" +
            "> À retenir : commencez simple. Deux ou trois segments bien exploités (nouveaux vs clients vs inactifs) valent mieux qu'une usine à segments jamais utilisée. La segmentation utile est celle qui déclenche un message différent.\n\n" +
            "## Personnalisation, sans la caricature\n\n" +
            "La personnalisation ne se résume pas à insérer le prénom dans l'objet, un procédé désormais éventé. La vraie personnalisation, c'est la **pertinence du contenu** au regard de ce que la personne a fait. Recommander un produit complémentaire à un achat récent vaut cent fois \"Bonjour [Prénom]\". La donnée comportementale, croisée avec GA4 et votre outil d'emailing, rend ça possible sans y passer ses journées.",
        },
        {
          id: "l17",
          title: "Délivrabilité : arriver en boîte de réception",
          type: "text",
          duration: "16 min",
          body:
            "## Un email non délivré n'existe pas\n\n" +
            "Vous pouvez écrire l'email parfait : s'il tombe en spam, il ne s'est rien passé. La **délivrabilité** est la discipline invisible qui décide si vos messages atteignent la boîte de réception. Elle repose sur la technique et sur votre réputation d'expéditeur, que les fournisseurs (Gmail, Outlook) surveillent en permanence.\n\n" +
            "## L'authentification, non négociable\n\n" +
            "Depuis février 2024, Gmail et Yahoo **exigent** l'authentification pour les expéditeurs en volume. Trois enregistrements DNS à mettre en place :\n\n" +
            "- **SPF** (Sender Policy Framework) : déclare quels serveurs ont le droit d'envoyer en votre nom.\n" +
            "- **DKIM** (DomainKeys Identified Mail) : une signature cryptographique qui prouve que l'email n'a pas été falsifié.\n" +
            "- **DMARC** : la politique qui dit quoi faire si SPF ou DKIM échoue, et qui vous envoie des rapports.\n\n" +
            "Sans ces trois, vos emails partent au mieux en spam, au pire sont rejetés. La plupart des plateformes (Brevo, Mailchimp, etc.) guident la configuration, mais l'ajout des enregistrements chez votre hébergeur DNS vous revient.\n\n" +
            "## La réputation se gagne par le comportement\n\n" +
            "Les fournisseurs jugent votre réputation sur des signaux d'engagement. Ce qui la dégrade :\n\n" +
            "1. **Les plaintes spam** (les gens qui cliquent \"signaler comme indésirable\"). Au-delà de 0,3 % de plaintes, Gmail vous sanctionne. C'est le seuil officiel.\n" +
            "2. **Les hard bounces** (adresses inexistantes). Une liste achetée ou vieille en est pleine et détruit la réputation.\n" +
            "3. **Le faible engagement** : si personne n'ouvre ni ne clique, les fournisseurs en déduisent que vos emails ne valent rien.\n" +
            "4. **Les spam traps** : de fausses adresses semées pour piéger ceux qui envoient sans consentement.\n\n" +
            "> À retenir : n'achetez jamais de liste. Jamais. C'est le raccourci qui grille durablement un domaine d'envoi, et la réputation se répare très lentement.\n\n" +
            "## L'hygiène de liste, la routine qui sauve\n\n" +
            "Une bonne délivrabilité tient à des habitudes simples : un opt-in propre (idéalement double opt-in), le retrait régulier des adresses inactives et des bounces, une fréquence d'envoi raisonnable, un lien de désabonnement visible (le cacher augmente les plaintes spam, l'inverse du but recherché). Nettoyer sa liste des contacts qui n'ouvrent plus depuis six mois fait souvent **remonter** les taux d'ouverture et la délivrabilité, même si la liste rétrécit. Une petite liste engagée bat une grosse liste morte, sur tous les plans.",
        },
        {
          id: "l18",
          title: "Quiz — Email marketing",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Pourquoi la séquence de bienvenue obtient-elle généralement de bien meilleurs taux d'ouverture que les newsletters habituelles ?",
              options: [
                "Parce qu'elle est envoyée à minuit",
                "Parce qu'elle est déclenchée au moment où l'intérêt du contact est au maximum, juste après l'inscription, quand il attend justement de vos nouvelles",
                "Parce qu'elle contient plus d'images",
                "Parce qu'elle n'a pas besoin d'objet",
              ],
              correctIndex: 1,
              explanation:
                "Au moment de l'inscription, la personne est au pic de son intérêt et vous attend. C'est pourquoi le premier email de bienvenue atteint couramment 40-60 % d'ouverture. Cette fenêtre d'attention est la plus rentable du cycle de vie : il faut en profiter tant qu'elle est chaude.",
            },
            {
              id: "q14",
              prompt:
                "Une entreprise achète une liste de 50 000 emails pour accélérer sa croissance. Quel est le risque principal ?",
              options: [
                "Aucun, c'est un gain de temps",
                "Hard bounces massifs, plaintes spam et spam traps qui détruisent durablement la réputation du domaine d'envoi, pénalisant même les emails légitimes futurs",
                "Un objet trop long",
                "Un taux de clic trop élevé",
              ],
              correctIndex: 1,
              explanation:
                "Une liste achetée est pleine d'adresses invalides et de spam traps, et les destinataires n'ont jamais consenti, donc ils signalent en spam. Au-delà de 0,3 % de plaintes, Gmail sanctionne. La réputation d'un domaine se répare très lentement : c'est un raccourci qui coûte des mois de délivrabilité.",
            },
            {
              id: "q15",
              prompt:
                "Depuis 2024, que doivent impérativement mettre en place les expéditeurs qui envoient de l'email en volume vers Gmail et Yahoo ?",
              options: [
                "Uniquement un objet accrocheur",
                "L'authentification par SPF, DKIM et DMARC, faute de quoi les emails partent en spam ou sont rejetés",
                "Un abonnement premium chez leur outil d'emailing",
                "Des images en haute résolution",
              ],
              correctIndex: 1,
              explanation:
                "Depuis février 2024, Gmail et Yahoo exigent SPF, DKIM et DMARC pour les expéditeurs en volume. Ces enregistrements DNS prouvent que vous êtes autorisé à envoyer au nom du domaine et que le message n'est pas falsifié. Sans eux, la délivrabilité s'effondre quel que soit le contenu.",
            },
            {
              id: "q16",
              prompt:
                "Retirer de sa liste les contacts qui n'ont rien ouvert depuis six mois fait pourtant souvent remonter les performances. Pourquoi ?",
              options: [
                "Parce que la taille de la liste n'a aucune importance",
                "Parce que les fournisseurs jugent la réputation sur l'engagement : une liste concentrée sur des contacts actifs améliore taux d'ouverture, délivrabilité et réputation, même si elle rétrécit",
                "Parce que les contacts inactifs coûtent trop cher",
                "Parce qu'il faut toujours envoyer moins d'emails",
              ],
              correctIndex: 1,
              explanation:
                "Les fournisseurs interprètent le faible engagement comme un signal négatif sur l'ensemble de vos envois. En retirant les dormants, on concentre les envois sur des gens qui ouvrent, ce qui remonte les taux moyens et rassure Gmail/Outlook. Une petite liste engagée délivre mieux qu'une grosse liste morte.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Publicité payante : acheter du trafic rentable",
      lessons: [
        {
          id: "l19",
          title: "Google Ads vs Meta Ads : deux logiques",
          type: "text",
          duration: "16 min",
          body:
            "## Deux façons opposées de trouver des clients\n\n" +
            "La confusion la plus coûteuse en publicité, c'est de traiter Google Ads et Meta Ads comme des variantes du même truc. Ce sont deux logiques opposées, et choisir la mauvaise pour son offre brûle du budget vite.\n\n" +
            "**Google Ads capte une demande qui existe déjà.** Quelqu'un tape \"réparation chaudière Toulouse\", il a un problème maintenant, il cherche une solution. Vous vous placez sur son chemin. C'est du marketing de **captation** : la personne est en bas du funnel, prête à agir. Le taux de conversion est élevé mais le clic coûte cher parce que tout le monde veut cette intention chaude.\n\n" +
            "**Meta Ads (Facebook, Instagram) crée une demande.** Personne ne va sur Instagram pour acheter votre produit. Vous interrompez quelqu'un qui regardait des photos de vacances avec une offre qu'il ne cherchait pas. C'est du marketing d'**interruption** : vous ciblez par centres d'intérêt et comportements, pas par intention. Le clic coûte moins cher mais convertit moins bien, parce que la personne n'était pas en recherche.\n\n" +
            "## Comment choisir\n\n" +
            "La règle de départ :\n\n" +
            "- Si les gens **cherchent activement** votre solution (services locaux, problèmes urgents, produits qu'on tape dans Google), commencez par **Google Ads Search**.\n" +
            "- Si votre produit se **découvre visuellement** ou crée un désir (mode, déco, food, gadgets, offres impulsives), commencez par **Meta**.\n" +
            "- Si personne ne connaît encore la catégorie de votre produit (innovation), Google Search ne marchera pas : personne ne tape ce qu'il ignore. Meta pour créer la demande.\n\n" +
            "## Les ordres de grandeur de coût\n\n" +
            "Le CPC (coût par clic) varie énormément selon le secteur, et c'est normal, il reflète la valeur d'un client :\n\n" +
            "- **Google Search** : de l'ordre de 0,50 à 2 € en e-commerce grand public, mais 5 à 15 € et bien plus dans l'assurance, le juridique, le B2B logiciel, où un client vaut des milliers d'euros.\n" +
            "- **Meta** : souvent 0,30 à 1 € le clic, plus bas parce que l'intention est plus faible. Mais on regarde surtout le coût par acquisition, pas le CPC.\n\n" +
            "> À retenir : ne comparez jamais deux plateformes sur le CPC. Un clic Google à 3 € qui convertit à 8 % peut être bien plus rentable qu'un clic Meta à 0,50 € qui convertit à 0,5 %. Ce qui compte est le coût par **client**, pas par clic.\n\n" +
            "## Ne pas opposer, séquencer\n\n" +
            "À terme, les deux se complètent. Meta crée la notoriété et alimente le haut du funnel, Google capte la demande que Meta a contribué à créer, le retargeting rattrape ceux qui ont hésité. Mais quand on débute avec un petit budget, on choisit **un** canal, celui qui colle à la logique de son offre, et on le maîtrise avant d'élargir.",
        },
        {
          id: "l20",
          title: "Structurer une campagne",
          type: "text",
          duration: "16 min",
          body:
            "## Une structure claire ou un budget qui fuit\n\n" +
            "Une campagne mal structurée ne se pilote pas : on ne sait pas ce qui marche, on coupe à l'aveugle. La structure sert à isoler les variables pour lire les résultats et allouer le budget là où il performe.\n\n" +
            "## L'anatomie d'un compte\n\n" +
            "La hiérarchie est la même dans les grandes lignes sur les deux plateformes :\n\n" +
            "- **Campagne** : le niveau de l'objectif et souvent du budget. On y définit ce qu'on optimise (ventes, prospects, trafic).\n" +
            "- **Groupe d'annonces (Google) / Ensemble de publicités (Meta)** : le niveau du **ciblage**. Sur Google, un groupe = un thème de mots-clés serré. Sur Meta, un ensemble = une audience.\n" +
            "- **Annonce** : le message et le visuel montrés à la personne.\n\n" +
            "Le principe cardinal : **une intention par groupe d'annonces**. Sur Google, ne mélangez pas \"logiciel de devis\" et \"logiciel de facturation\" dans le même groupe, sinon vos annonces ne peuvent pas coller à chaque recherche. Un groupe = un thème = des annonces spécifiques.\n\n" +
            "## Sur Google, les mots-clés et leurs pièges\n\n" +
            "Les types de correspondance décident de qui voit vos annonces :\n\n" +
            "- **Exact** `[devis artisan]` : uniquement des requêtes très proches. Contrôle maximal.\n" +
            "- **Expression** `\"devis artisan\"` : contient l'expression. Compromis.\n" +
            "- **Large** : Google élargit à ce qu'il juge lié. Portée maximale mais gaspillage assuré sans surveillance.\n\n" +
            "Et surtout, les **mots-clés à exclure** (negative keywords). C'est là qu'on économise le plus. Si vous vendez un logiciel payant, excluez \"gratuit\", \"crack\", \"open source\". Sans ça, vous payez des clics de gens qui ne paieront jamais. Le rapport sur les termes de recherche montre les vraies requêtes déclenchées : à consulter chaque semaine pour ajouter des exclusions.\n\n" +
            "## Sur Meta, l'audience et le creative\n\n" +
            "Meta a beaucoup automatisé le ciblage (Advantage+). Le vrai levier de performance est devenu le **creative** : la vidéo, l'image, l'accroche. On teste plusieurs angles créatifs, l'algorithme trouve l'audience. C'est l'inverse de l'ancien réflexe de sur-cibler des audiences étroites.\n\n" +
            "> À retenir : ne lancez jamais avec une seule annonce. Testez au moins 3 à 5 variantes de message ou de visuel par groupe, laissez l'algorithme et les chiffres désigner le gagnant, puis concentrez le budget dessus.\n\n" +
            "## Laisser respirer l'apprentissage\n\n" +
            "Les deux plateformes ont une **phase d'apprentissage** : l'algorithme a besoin d'un volume de conversions (l'ordre de grandeur souvent cité est ~50 conversions par ensemble et par semaine sur Meta) avant de se stabiliser. Ne coupez pas et ne modifiez pas une campagne tous les deux jours, vous la renvoyez sans cesse en apprentissage. Décidez après un volume de données suffisant, pas sur trois clics.",
        },
        {
          id: "l21",
          title: "ROAS, CAC et LTV : juger la rentabilité",
          type: "text",
          duration: "17 min",
          body:
            "## Le trafic n'est pas l'objectif, le profit l'est\n\n" +
            "On peut faire tourner des campagnes magnifiques qui ruinent l'entreprise. Trois indicateurs séparent la pub qui enrichit de la pub qui appauvrit : le ROAS, le CAC et la LTV. Les confondre ou en ignorer un mène droit au mur.\n\n" +
            "## ROAS : le retour immédiat\n\n" +
            "Le **ROAS** (Return On Ad Spend) = chiffre d'affaires généré / dépense publicitaire. Un ROAS de 4 signifie 4 € de CA pour 1 € dépensé. Mais attention au piège : **le ROAS n'est pas le profit**. Il ignore votre marge.\n\n" +
            "Le seuil de rentabilité dépend de votre marge : **ROAS d'équilibre = 1 / marge**. Si vous avez 25 % de marge, votre ROAS de survie est 1 / 0,25 = 4. Un ROAS de 3 avec 25 % de marge, c'est perdre de l'argent, même si le chiffre paraît beau. C'est exactement le genre d'erreur qui fait dire \"on vend plein mais on ne gagne rien\".\n\n" +
            "## CAC : ce que coûte un client\n\n" +
            "Le **CAC** (coût d'acquisition client) = total dépensé en marketing / nombre de nouveaux clients acquis. Si vous dépensez 2 000 € pour gagner 40 clients, votre CAC est de 50 €. Simple, mais souvent sous-estimé parce qu'on oublie d'y mettre tous les coûts (créa, outils, temps).\n\n" +
            "## LTV : ce que rapporte un client, dans le temps\n\n" +
            "Le CAC seul ne dit rien. Un CAC de 50 € est excellent si le client vous rapporte 400 € sur sa vie, catastrophique s'il rapporte 40 €. La **LTV** (Lifetime Value, valeur vie client) estime le profit total qu'un client génère sur toute sa relation avec vous. Pour un abonnement : marge mensuelle × durée de vie moyenne. Pour de l'e-commerce : panier moyen × marge × nombre d'achats sur la durée.\n\n" +
            "## Le ratio qui décide de tout\n\n" +
            "La règle de référence dans la tech : un business sain vise un ratio **LTV / CAC d'environ 3 pour 1**. En dessous de 1, vous perdez de l'argent sur chaque client. Autour de 1, vous survivez sans marge pour grandir. À 3 ou plus, vous pouvez réinvestir et scaler. Au-delà de 5, vous sous-investissez peut-être en acquisition et laissez de la croissance sur la table.\n\n" +
            "> À retenir : c'est la LTV qui autorise à payer cher un client. Une entreprise avec une forte rétention (donc une LTV élevée) peut se permettre un CAC que ses concurrents jugent suicidaire. La rétention, vue en partie 1, finance l'acquisition.\n\n" +
            "## Le délai de récupération\n\n" +
            "Dernier chiffre à surveiller, surtout en abonnement : le **payback period**, le temps qu'il faut pour récupérer le CAC. Un CAC récupéré en 3 mois vous laisse de la trésorerie pour réinvestir ; récupéré en 18 mois, il vous étrangle même si la LTV finale est bonne. Rentabilité et trésorerie sont deux questions distinctes : les campagnes se jugent sur les deux.",
        },
        {
          id: "l22",
          title: "Quiz — Publicité payante",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Vous lancez un produit d'une catégorie totalement nouvelle que personne ne connaît encore. Pourquoi Google Search Ads est-il un mauvais premier choix ?",
              options: [
                "Parce que Google est trop cher en général",
                "Parce que Google Search capte une demande existante : or personne ne peut taper le nom d'une solution qu'il ignore, donc il n'y a aucune recherche à capter. Meta, qui crée la demande, est plus adapté",
                "Parce que Google interdit les nouveaux produits",
                "Parce que Meta convertit toujours mieux",
              ],
              correctIndex: 1,
              explanation:
                "Google Search est un canal de captation : il ne fonctionne que s'il existe déjà des requêtes. Pour une catégorie inconnue, il n'y a rien à capter. Meta crée la demande par interruption et ciblage par intérêts, ce qui convient pour faire découvrir une solution que personne ne cherche encore.",
            },
            {
              id: "q18",
              prompt:
                "Votre marge est de 25 %. Vos campagnes affichent un ROAS de 3. Que se passe-t-il réellement ?",
              options: [
                "Vous êtes rentable, un ROAS de 3 est toujours bon",
                "Vous perdez de l'argent : le ROAS d'équilibre est 1 / 0,25 = 4, donc un ROAS de 3 est sous le seuil de rentabilité malgré une apparence flatteuse",
                "Vous êtes exactement à l'équilibre",
                "Impossible à dire sans connaître le CPC",
              ],
              correctIndex: 1,
              explanation:
                "Le ROAS ignore la marge. Le seuil de rentabilité est 1 / marge, soit 4 ici. Un ROAS de 3 signifie que le coût des produits vendus plus la pub dépasse le chiffre d'affaires : on vend beaucoup en perdant sur chaque vente. C'est le piège classique du chiffre d'affaires qui monte pendant que le compte en banque baisse.",
            },
            {
              id: "q19",
              prompt:
                "Deux entreprises ont un CAC de 50 €. La première a une LTV de 60 €, la seconde de 200 €. Qu'en conclure ?",
              options: [
                "Elles sont dans la même situation puisque le CAC est identique",
                "La seconde est bien plus saine : son ratio LTV/CAC est de 4 (proche de la cible de 3), tandis que la première, à 1,2, gagne à peine de quoi survivre et ne peut pas réinvestir",
                "La première est meilleure car sa LTV est plus facile à atteindre",
                "Le CAC est la seule chose qui compte",
              ],
              correctIndex: 1,
              explanation:
                "Le CAC ne veut rien dire sans la LTV. Un ratio LTV/CAC d'environ 3 marque un business sain. La seconde entreprise à 4:1 peut réinvestir et grandir ; la première à 1,2:1 survit sans marge de manœuvre. La LTV, portée par la rétention, est ce qui autorise à dépenser en acquisition.",
            },
            {
              id: "q20",
              prompt:
                "Une campagne Meta est modifiée ou mise en pause tous les deux jours parce que les résultats semblent instables. Pourquoi est-ce contre-productif ?",
              options: [
                "Parce que Meta facture chaque modification",
                "Parce que chaque changement significatif relance la phase d'apprentissage de l'algorithme, qui a besoin d'un volume de conversions pour se stabiliser : on l'empêche en permanence de converger",
                "Parce qu'il faut au contraire modifier plusieurs fois par jour",
                "Parce que les campagnes ne doivent jamais être touchées",
              ],
              correctIndex: 1,
              explanation:
                "Les plateformes ont une phase d'apprentissage qui exige un certain volume de conversions (souvent cité autour de 50 par ensemble et par semaine sur Meta) avant de se stabiliser. Modifier trop tôt et trop souvent renvoie la campagne en apprentissage et l'empêche d'optimiser. On décide sur un volume de données suffisant, pas sur quelques clics.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Analytics, CRO et mesure honnête",
      lessons: [
        {
          id: "l23",
          title: "GA4 : événements et conversions",
          type: "video",
          duration: "17 min",
          videoLabel: "Démo : marquer un événement en conversion et lire les rapports d'engagement dans GA4",
          body:
            "## GA4 pense en événements, pas en pages\n\n" +
            "Si vous venez de l'ancien Universal Analytics, oubliez le modèle sessions/pages vues comme unité centrale. GA4 modélise **tout comme un événement** : une page vue est un événement, un clic est un événement, un achat est un événement. Cette bascule déroute au début mais elle est puissante, parce qu'elle mesure des actions réelles, pas juste des chargements de page.\n\n" +
            "## Les événements, quatre familles\n\n" +
            "1. **Automatiques** : collectés sans rien faire (first_visit, session_start).\n" +
            "2. **Mesure améliorée** : activables en un clic (scroll, clics sortants, recherche interne, lecture vidéo, téléchargement de fichier). Activez-les, c'est gratuit et utile.\n" +
            "3. **Recommandés** : des noms standardisés par Google pour des actions courantes (`purchase`, `sign_up`, `add_to_cart`). Utiliser ces noms exacts débloque des rapports.\n" +
            "4. **Personnalisés** : les vôtres, pour ce qui est spécifique à votre activité.\n\n" +
            "## Notes de démo — marquer une conversion\n\n" +
            "Dans GA4, une **conversion** (désormais appelée \"key event\") est simplement un événement que vous avez désigné comme important. On va dans **Admin > Événements**, on repère l'événement (par exemple `generate_lead` ou `purchase`), et on active l'interrupteur \"Marquer comme événement clé\". À partir de là, GA4 le suit comme objectif et le rend disponible pour l'import dans Google Ads.\n\n" +
            "Pour envoyer un événement personnalisé, le code ressemble à ceci, via le tag Google (gtag) :\n\n" +
            "```js\ngtag('event', 'generate_lead', {\n  form_name: 'contact_devis',\n  value: 50,\n  currency: 'EUR'\n});\n```\n\n" +
            "Le paramètre `value` est ce qui permet plus tard de rapprocher les conversions du CAC et de la LTV. Ne le négligez pas.\n\n" +
            "> À retenir : ne marquez comme événement clé que ce qui reflète une vraie valeur business (lead, achat, inscription). Marquer \"a scrollé jusqu'en bas\" comme conversion pollue vos rapports et vos campagnes Ads.\n\n" +
            "## Ce qu'on regarde vraiment dans GA4\n\n" +
            "Trois rapports suffisent pour piloter. **Acquisition** : d'où viennent les visiteurs (organique, payant, direct, referral, social), pour savoir quel canal travaille. **Engagement** : quelles pages et événements retiennent. **Monétisation / conversions** : le taux de conversion par canal et par landing page, le vrai juge de paix. Croisez toujours le canal d'acquisition avec le taux de conversion : un canal qui amène beaucoup de monde mais convertit à 0,2 % vaut moins qu'un canal discret à 4 %.",
        },
        {
          id: "l24",
          title: "CRO et landing pages",
          type: "text",
          duration: "16 min",
          body:
            "## Optimiser l'existant coûte moins cher qu'acheter plus\n\n" +
            "Le CRO (Conversion Rate Optimization) consiste à convertir davantage des visiteurs que vous avez déjà, plutôt que d'en acheter toujours plus. Faites le calcul : passer un taux de conversion de 2 % à 3 %, c'est **+50 % de clients** sans un euro de trafic supplémentaire. C'est souvent l'investissement au meilleur rendement de tout le funnel, et il agit sur l'Activation.\n\n" +
            "## Anatomie d'une landing page qui convertit\n\n" +
            "Une landing page (page d'atterrissage dédiée à une conversion) n'est pas une page d'accueil. Elle a **un seul objectif** et retire tout ce qui distrait. Les ingrédients qui pèsent :\n\n" +
            "- **Un message qui matche la source**. Si votre pub promet \"devis en 3 minutes\", la landing doit répéter exactement ça au-dessus de la ligne de flottaison. Le décalage entre l'annonce et la page (message mismatch) tue le taux de conversion et fait grimper le coût par acquisition.\n" +
            "- **Une proposition de valeur claire en haut**, visible sans scroller.\n" +
            "- **Un seul appel à l'action**, répété. Multiplier les boutons différents disperse.\n" +
            "- **De la preuve** : témoignages, logos, chiffres, garanties. La preuve sociale lève le doute.\n" +
            "- **La réduction de friction** : moins de champs dans le formulaire, moins d'étapes. Chaque champ supprimé remonte le taux de complétion.\n\n" +
            "## Tester, pas deviner\n\n" +
            "Le CRO est une discipline expérimentale. On ne décide pas au feeling, on teste. L'**A/B test** compare deux versions d'un élément (un titre, un bouton, une image) sur du trafic réel et laisse les chiffres trancher. Règle de rigueur : ne testez **qu'une variable à la fois**, sinon vous ne saurez pas ce qui a produit l'effet.\n\n" +
            "Le piège n°1 : conclure trop vite. Un test a besoin d'un volume suffisant pour être **statistiquement significatif**. Déclarer un gagnant après 30 visiteurs et 2 conversions ne veut rien dire, l'écart est du bruit. Selon votre trafic, un test sérieux tourne souvent une à plusieurs semaines.\n\n" +
            "> À retenir : commencez les tests par les pages à fort trafic et fort enjeu (page produit, tunnel de commande, landing des campagnes payantes). Optimiser une page que personne ne visite est une perte de temps, même si le gain relatif paraît beau.\n\n" +
            "## Observer avant de tester\n\n" +
            "Avant même l'A/B test, regardez où ça coince. Les **heatmaps** et **enregistrements de sessions** (Hotjar, Microsoft Clarity qui est gratuit) montrent où les gens cliquent, où ils s'arrêtent, où ils abandonnent le formulaire. Ces observations génèrent des hypothèses de test bien meilleures que l'intuition. On regarde d'abord le comportement réel, on formule une hypothèse, puis on teste. C'est la boucle du CRO.",
        },
        {
          id: "l25",
          title: "Recommandation et boucle de mesure",
          type: "text",
          duration: "15 min",
          body:
            "## Le dernier R, le plus négligé\n\n" +
            "On arrive au bout du funnel AARRR : la **Recommandation**. C'est l'étape qu'on oublie parce qu'elle ne s'achète pas comme du trafic. Pourtant, un client qui en amène un autre a un coût d'acquisition proche de zéro et arrive déjà en confiance. C'est le levier qui améliore mécaniquement votre ratio LTV/CAC vu en partie 5.\n\n" +
            "## Ce qui déclenche vraiment le bouche-à-oreille\n\n" +
            "La recommandation ne se force pas avec un simple bouton \"partager\". Elle vient d'une expérience qui **dépasse l'attente**. On ne recommande pas un produit correct, on recommande une surprise agréable. Avant de bâtir un programme de parrainage, assurez-vous que le produit et l'accueil (Activation, Rétention) sont bons. Un programme de referral posé sur une expérience médiocre ne fait qu'accélérer la mauvaise réputation.\n\n" +
            "Quelques mécaniques qui marchent quand la base est saine :\n\n" +
            "- **Le parrainage à double récompense** (le parrain et le filleul gagnent quelque chose), popularisé par Dropbox qui offrait du stockage aux deux. Ça aligne les intérêts.\n" +
            "- **Le moment de demande bien choisi** : on sollicite un avis ou un partage juste après un pic de satisfaction (une commande réussie, un résultat obtenu), pas au hasard.\n" +
            "- **Le NPS** (Net Promoter Score) : la question \"recommanderiez-vous, de 0 à 10 ?\" identifie vos promoteurs (9-10), ceux à qui demander un parrainage ou un avis.\n\n" +
            "## Boucler le cadre de mesure honnête\n\n" +
            "On termine là où on a commencé, sur la mesure. Vous avez maintenant les cinq étapes instrumentées : Search Console et GA4 pour l'Acquisition, les conversions et le CRO pour l'Activation, l'email et les cohortes pour la Rétention, le ROAS/CAC/LTV pour le Revenu, le parrainage et le NPS pour la Recommandation.\n\n" +
            "> À retenir : le tableau de bord idéal tient sur un écran, une métrique actionnable par étape du funnel. Si vous ne pouvez pas dire quelle décision déclenche chaque chiffre, retirez-le.\n\n" +
            "## Garder le cap contre les vanity metrics\n\n" +
            "La discipline la plus dure sur la durée n'est pas technique, elle est mentale : résister à la tentation de célébrer les chiffres qui montent sans conséquence. Un pic de followers, un article viral hors cible, un taux d'ouverture gonflé. Revenez toujours à la question de départ : est-ce que ça fait avancer un vrai client dans le funnel, et est-ce que ça finance la suite. Le marketing digital honnête, ce n'est pas faire monter des courbes, c'est acquérir des clients qui restent et en amènent d'autres, à un coût qui laisse du profit.",
        },
        {
          id: "l26",
          title: "Quiz — Analytics, CRO et mesure",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q21",
              prompt:
                "Dans GA4, quelle affirmation décrit correctement une \"conversion\" (événement clé) ?",
              options: [
                "Un type d'objet totalement séparé des événements",
                "Un événement ordinaire que vous avez désigné comme important via l'interrupteur \"Marquer comme événement clé\", ce qui permet de le suivre comme objectif et de l'importer dans Google Ads",
                "Uniquement une page vue",
                "Une métrique calculée automatiquement par Google sans intervention",
              ],
              correctIndex: 1,
              explanation:
                "GA4 modélise tout en événements. Une conversion n'est rien d'autre qu'un événement que vous avez marqué comme clé. Cela le transforme en objectif suivi et le rend disponible pour l'import dans Google Ads. Il faut donc marquer uniquement ce qui a une vraie valeur business.",
            },
            {
              id: "q22",
              prompt:
                "Une boutique fait passer son taux de conversion de 2 % à 3 % grâce au CRO, à trafic constant. Quel est l'impact sur le nombre de clients ?",
              options: [
                "+1 % de clients",
                "+50 % de clients, sans un euro de trafic supplémentaire, ce qui fait souvent du CRO l'investissement au meilleur rendement du funnel",
                "Aucun changement, c'est le trafic qui compte",
                "+2 % de clients",
              ],
              correctIndex: 1,
              explanation:
                "Passer de 2 % à 3 %, c'est une hausse relative de 50 % (1 point sur 2). À trafic identique, cela veut dire 50 % de clients en plus sans dépense d'acquisition supplémentaire. C'est pourquoi optimiser la conversion de l'existant bat souvent l'achat de trafic additionnel.",
            },
            {
              id: "q23",
              prompt:
                "Une pub promet \"devis conforme en 3 minutes\" mais la landing page parle surtout de l'histoire de l'entreprise, sans reprendre cette promesse en haut. Quel problème cela crée-t-il ?",
              options: [
                "Aucun, tant que la page est jolie",
                "Un décalage message/page (message mismatch) qui casse le taux de conversion et fait grimper le coût par acquisition, car la promesse de l'annonce n'est pas confirmée à l'arrivée",
                "Un problème de délivrabilité email",
                "Un problème de robots.txt",
              ],
              correctIndex: 1,
              explanation:
                "La landing doit confirmer immédiatement la promesse de la source. Quand l'annonce dit une chose et que la page en dit une autre, le visiteur doute et repart : le taux de conversion chute et, comme on a payé le clic, le coût par acquisition monte. La continuité message-page est un fondamental du CRO.",
            },
            {
              id: "q24",
              prompt:
                "Une équipe déclare une version gagnante d'un A/B test après 30 visiteurs et 2 conversions sur la variante. Pourquoi est-ce une erreur ?",
              options: [
                "Parce qu'il faut toujours tester au moins dix variantes",
                "Parce que l'échantillon est bien trop petit pour être statistiquement significatif : l'écart observé est probablement du bruit, et conclure à ce stade mène à de mauvaises décisions",
                "Parce qu'un A/B test ne doit jamais avoir de gagnant",
                "Parce que les conversions ne se mesurent pas sur une landing page",
              ],
              correctIndex: 1,
              explanation:
                "Un test a besoin d'un volume suffisant pour distinguer un vrai effet du hasard. Avec 30 visiteurs et 2 conversions, l'intervalle d'incertitude est énorme : l'écart n'a aucune valeur statistique. Conclure trop vite est le piège n°1 du CRO ; un test sérieux tourne souvent plusieurs jours à semaines selon le trafic.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
