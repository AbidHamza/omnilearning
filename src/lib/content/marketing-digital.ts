import type { Course } from "../types";

const course: Course = {
  slug: "marketing-digital",
  title: "Marketing digital : acquérir et fidéliser ses premiers clients",
  tagline:
    "Un funnel AARRR de bout en bout : du premier clic SEO au client qui recommande, avec des budgets, des CPC et des calculs de ROAS réels.",
  description:
    "Ce cours prend le problème par le bon bout : pas une liste de canaux à cocher, mais une machine à acquérir et retenir des clients. Le funnel AARRR (acquisition, activation, rétention, revenu, recommandation) sert de fil rouge du début à la fin. On construit d'abord un positionnement et des personas qui tiennent, puis on branche les canaux dessus : SEO, contenu, email, social organique, publicité payante. On finit par la mesure honnête, celle qui distingue une métrique qui pilote une décision d'une métrique qui flatte l'ego. À chaque étape, des campagnes chiffrées de bout en bout (budgets, CPC, CTR, ROAS calculé ligne à ligne, ratio CAC/LTV) pour arrêter de deviner, et les erreurs de débutant qui coûtent vraiment de l'argent.",
  category: "Gestion de projet",
  level: "Intermédiaire",
  instructor: "Camille Ferrand",
  instructorBio:
    "Dix ans à monter l'acquisition de startups B2B et de e-commerces, d'abord en agence puis en interne comme head of growth. A brûlé assez de budget Ads pour savoir où ça fuit.",
  hours: 7,
  rating: 4.7,
  learners: 1840,
  accent: "#2563eb",
  image: "/covers/marketing-digital.svg",
  language: "Français",
  software: "Google Search Console, GA4, un outil d'emailing (Klaviyo/Brevo/Mailchimp), Google Ads & Meta Ads Manager",
  prerequisites: [
    "Savoir naviguer sur le web et gérer un site ou une page produit (WordPress, Shopify, ou un site sur mesure)",
    "Des bases de tableur (filtres, formules simples) pour lire des exports de données",
    "Aucune expérience en publicité payante requise, mais avoir déjà publié en ligne aide",
  ],
  summary: [
    "Poser le cadre : le funnel AARRR, un positionnement défendable et des personas fondés sur de vrais signaux.",
    "Capter l'intention : SEO on-page, technique (crawl, indexation, classement), maillage interne et mesure via Search Console.",
    "Nourrir l'audience : content marketing TOFU/MOFU/BOFU, calendrier éditorial et social organique bien ciblé.",
    "Convertir et retenir par email : séquences, segmentation, délivrabilité et consentement RGPD.",
    "Acheter du trafic sans se ruiner : Google Ads vs Meta, structure de compte, boucle de test créatif, ROAS et CAC/LTV calculés sur des campagnes réelles.",
    "Mesurer honnêtement : GA4, Consent Mode, CRO/landing pages, attribution multi-touch et vanity metrics à ignorer.",
  ],
  objectives: [
    "Cartographier ton activité sur le funnel AARRR et identifier l'étape qui bride réellement la croissance",
    "Rédiger une proposition de valeur et des personas exploitables, pas des fiches décoratives",
    "Construire une stratégie SEO from scratch : intention, on-page, maillage, technique, suivi Search Console",
    "Écrire des séquences email qui convertissent, arrivent en boîte de réception et respectent le RGPD",
    "Structurer une campagne Google Ads et Meta Ads, tester des créas méthodiquement et juger la rentabilité avec ROAS, CAC et LTV",
    "Configurer les événements et conversions GA4 et distinguer une vraie métrique d'une vanity metric",
  ],
  skills: [
    "Cadrage funnel AARRR et diagnostic d'entonnoir",
    "SEO on-page et technique + lecture de Search Console",
    "Email marketing (séquences, segmentation, délivrabilité, RGPD)",
    "Achat média Google Ads & Meta (structure, enchères, test créatif, ROAS)",
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
          duration: "19 min",
          body:
            "## 3 000 € par mois et personne ne comprend où ça part\n\n" +
            "Une boutique de compléments alimentaires que j'ai accompagnée dépensait 3 000 € par mois sur Meta. Les chiffres de campagne étaient corrects : CPC à 0,62 €, soit environ 4 800 clics mensuels. Au bout du tunnel, 38 ventes. Fais le calcul : 38 / 4 800 = 0,79 % de conversion, pour un panier moyen de 41 €. Le fondateur voulait doubler le budget. J'ai refusé, et c'est cette leçon qui explique pourquoi : son problème n'était pas d'acheter plus de trafic, c'était que 99,2 % des visiteurs payés repartaient sans rien faire. Doubler le budget aurait doublé la fuite.\n\n" +
            "Pour raisonner proprement sur ce genre de situation, il te faut une grille. La meilleure que je connaisse tient en cinq lettres.\n\n" +
            "## AARRR, les cinq étapes\n\n" +
            "Le cadre a été popularisé par Dave McClure (500 Startups) sous le nom de « pirate metrics ». L'idée : un client ne tombe pas du ciel, il traverse cinq étapes, et à chacune tu en perds au passage.\n\n" +
            "1. **Acquisition** : la personne découvre que tu existes (SEO, pub, bouche-à-oreille).\n" +
            "2. **Activation** : sa première expérience est bonne, elle comprend la valeur (inscription, premier usage, première commande).\n" +
            "3. **Rétention** : elle revient. Sans rétention, tout le reste est un seau percé.\n" +
            "4. **Revenu** : elle paie, ou paie davantage.\n" +
            "5. **Recommandation** : elle amène d'autres gens.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le funnel AARRR de la boutique : l'hémorragie est en Activation, pas en Acquisition\"}\n" +
            "<svg viewBox='0 0 640 340' role='img'><title>Funnel AARRR : cinq étapes et leurs taux de passage</title>" +
            "<g font-family='ui-monospace, monospace' font-size='13'>" +
            "<rect x='60' y='16' width='520' height='38' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='320' y='40' text-anchor='middle' fill='currentColor'>Acquisition · 4 800 clics payés</text>" +
            "<rect x='120' y='80' width='400' height='38' rx='3' class='fig-accent' fill='none' stroke-width='2'/>" +
            "<text x='320' y='104' text-anchor='middle' fill='currentColor'>Activation · 38 premières commandes</text>" +
            "<rect x='170' y='144' width='300' height='38' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='320' y='168' text-anchor='middle' fill='currentColor'>Rétention · 9 rachats sous 90 j</text>" +
            "<rect x='210' y='208' width='220' height='38' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='320' y='232' text-anchor='middle' fill='currentColor'>Revenu · 1 927 € de CA</text>" +
            "<rect x='245' y='272' width='150' height='38' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='320' y='296' text-anchor='middle' fill='currentColor'>Reco · ~0</text>" +
            "<g fill='currentColor' opacity='0.7'><text x='545' y='72'>↓ 0,79 %</text><text x='545' y='136'>↓ 24 %</text><text x='545' y='200'>↓</text><text x='545' y='264'>↓</text></g>" +
            "</g></svg>\n" +
            "```\n\n" +
            "## Pourquoi ce cadre plutôt qu'un autre\n\n" +
            "Parce qu'il force à regarder les **taux de passage** entre étapes, pas les volumes bruts. Compare deux boutiques qui reçoivent chacune 10 000 visiteurs par mois. La première convertit 2 % des visiteurs et fait racheter 40 % de ses clients dans les 90 jours. La seconde convertit 3 % mais n'en retient que 10 %. Sur le mois 1, la seconde gagne (300 clients contre 200). Sur douze mois, la première l'écrase : ses 40 % de rachats composent mois après mois pendant que la seconde repart de zéro à chaque fois. La rétention compose, l'acquisition non.\n\n" +
            "## Diagnostiquer ton goulot\n\n" +
            "Pose les chiffres bruts, étape par étape, sur un mois. Puis calcule le taux de passage d'une étape à la suivante et compare-le à un repère de secteur :\n\n" +
            "| Étape | Métrique à poser | Repère e-commerce (ordre de grandeur 2026) |\n" +
            "| --- | --- | --- |\n" +
            "| Acquisition | Visiteurs, CTR des pubs | CTR Meta ~0,9-1,5 %, Search 3-6 % |\n" +
            "| Activation | Taux de première commande | 1,5-3 % du trafic |\n" +
            "| Rétention | Clients qui rachètent sous 90 j | 20-30 % |\n" +
            "| Revenu | Panier moyen × marge | dépend du produit, à connaître par cœur |\n" +
            "| Recommandation | Part des commandes parrainées | 2-5 % quand un programme existe |\n\n" +
            "L'étape la plus faible **par rapport à sa référence** est ton chantier prioritaire. Pas la plus faible en valeur absolue : la Recommandation sera toujours petite en volume, ce n'est pas pour autant ton problème.\n\n" +
            "Reprends la boutique de l'intro : 0,79 % d'activation quand le secteur tourne à 2 %. Verdict immédiat. On a retravaillé la fiche produit (preuve, photos, réassurance livraison) sans toucher aux pubs : trois semaines plus tard, 1,9 % de conversion, 91 ventes pour le même budget. Le CPA est passé de 79 € à 33 €.\n\n" +
            "## L'erreur de débutant que je vois tous les mois\n\n" +
            "Injecter du budget en Acquisition alors que le problème est en Activation. Le trafic supplémentaire rebondit, le coût par acquisition monte, et la conclusion erronée tombe : « la pub ne marche pas ». La pub marchait. L'accueil était cassé. Symptôme typique dans GA4 : un taux d'engagement sous 40 % sur les landing pages payantes pendant que le trafic SEO du blog engage à 65 %.\n\n" +
            "## À toi\n\n" +
            "Un SaaS de facturation affiche sur un mois : 8 000 visiteurs, 240 inscriptions à l'essai gratuit, 12 abonnements payants, 11 encore abonnés le mois suivant. Où est le goulot ?\n\n" +
            "> Correction : pose les taux. Visite → essai : 3 % (correct pour du SaaS). Essai → payant : 12/240 = 5 %, alors que le repère du secteur se situe plutôt entre 10 et 25 % pour un essai sans carte bancaire. Payant → rétention M+1 : 11/12 = 92 %, excellent. Le goulot est la conversion essai → payant, donc l'Activation au sens large : onboarding, démonstration de valeur pendant l'essai, emails d'accompagnement. Acheter plus de trafic ne réglerait rien.\n\n" +
            "Tout le reste du cours se raccroche à ces cinq lettres. SEO, contenu et Ads nourrissent l'Acquisition ; les landing pages jouent l'Activation ; l'email tient la Rétention et une partie du Revenu ; les mécaniques de parrainage adressent la Recommandation. Et le funnel n'est pas un tunnel propre : les gens entrent par le milieu, ressortent, reviennent trois semaines plus tard par un autre canal. On en reparlera avec l'attribution, où cette non-linéarité devient un vrai casse-tête de mesure.",
        },
        {
          id: "l2",
          title: "Positionnement et proposition de valeur",
          type: "text",
          duration: "18 min",
          body:
            "## Deux annonces, même mot-clé, du simple au triple\n\n" +
            "Sur la requête « logiciel devis artisan », deux annonceurs se battent. Le premier écrit : « Logiciel de devis simple et intuitif. Essayez gratuitement. » Le second : « Devis conforme en 3 min, depuis le chantier. Pensé pour les artisans du bâtiment. » Même enchère de départ, même page 1 de Google. Le premier plafonne à 2,1 % de CTR, le second monte à 6,4 %. Et comme Google récompense la pertinence via le Quality Score, le CPC du second descend de 1,10 € à environ 0,60 € au fil des semaines. Le texte n'est pas meilleur par magie : il est mieux **positionné**. Il dit à qui il s'adresse, dans quelle situation, avec quelle preuve.\n\n" +
            "C'est la leçon la moins technique du cours et celle qui rapporte le plus par euro investi : zéro outil, zéro budget, juste des choix.\n\n" +
            "## Le positionnement précède tous les canaux\n\n" +
            "Avant d'ouvrir un compte Google Ads ou d'écrire un article, tu dois pouvoir répondre en une phrase : **pour qui, quel problème, en quoi tu es différent**. Sans ça, chaque euro d'acquisition travaille contre toi, parce que tu attires des gens que tu ne satisferas pas. Ils cliquent, coûtent, repartent, et dégradent au passage tes signaux (taux de rebond, Quality Score, coût des pubs).\n\n" +
            "Le positionnement, c'est le choix d'un terrain où tu peux gagner. Tu ne peux pas être « le meilleur » en général. Tu peux être le meilleur pour un segment précis, sur un critère précis. April Dunford résume ça bien dans *Obviously Awesome* : le positionnement, c'est le contexte qui rend un produit évident pour la bonne personne.\n\n" +
            "## La proposition de valeur, concrètement\n\n" +
            "Une bonne proposition de valeur n'est pas un slogan. C'est l'articulation entre trois choses :\n\n" +
            "- La **tâche** que le client essaie d'accomplir (le « job to be done »).\n" +
            "- Le **gain** qu'il cherche et la **douleur** qu'il veut éviter.\n" +
            "- Ce que ton offre apporte de mieux que l'alternative, y compris l'alternative « ne rien faire ».\n\n" +
            "Teste la tienne avec une trame simple :\n\n" +
            "1. Pour [segment précis]\n" +
            "2. qui [situation et problème]\n" +
            "3. notre [catégorie de produit]\n" +
            "4. apporte [bénéfice principal mesurable]\n" +
            "5. contrairement à [alternative], parce que [preuve ou différence structurelle].\n\n" +
            "Exemple complet pour le logiciel de devis : « Pour les artisans du bâtiment qui perdent leurs soirées sur les devis, notre app génère un devis conforme en 3 minutes depuis le chantier, là où un tableur exige de repasser au bureau. » Chaque segment de la phrase est vérifiable et exclut volontairement du monde : les experts-comptables, les grandes entreprises, les gens contents de leur tableur. Exclure est le but, pas un accident.\n\n" +
            "## L'erreur des adjectifs\n\n" +
            "« Simple, rapide, innovant, sur mesure. » Ces mots ne positionnent rien parce que tes concurrents disent exactement les mêmes. La différenciation vit dans le **spécifique et le vérifiable** : un chiffre, une contrainte que tu adresses et pas les autres, un cas d'usage que tu sers mieux. Le test brutal : si tu peux remplacer le nom de ton entreprise par celui d'un concurrent sans que la phrase devienne fausse, ton positionnement n'existe pas.\n\n" +
            "Autre piège de débutant : positionner sur ce qui te rend fier plutôt que sur ce qui fait décider le client. J'ai vu une équipe mettre « architecture cloud native » en titre de page d'accueil d'un outil pour artisans. L'artisan s'en fiche. Il veut savoir si le devis sera conforme et s'il peut le faire depuis sa camionnette.\n\n" +
            "Une fois la phrase trouvée, déploie-la partout où le client te lit : le title de la page d'accueil, la première ligne des annonces, l'objet des emails, la bio des réseaux. Le positionnement qui ne vit que dans un document de stratégie n'existe pas. Relis tes cinq derniers posts et ta page d'accueil : si chaque phrase pourrait avoir été écrite par ton concurrent, tu sais quoi corriger cette semaine.\n\n" +
            "## Ce que ça change à chaque étape du funnel\n\n" +
            "Un positionnement net améliore les cinq étapes AARRR à la fois. En Acquisition, il rend tes annonces et tes titres plus cliquables parce qu'ils parlent à quelqu'un (le 6,4 % de CTR de l'intro). En Activation, il aligne l'attente et l'expérience, donc moins de déception et un meilleur taux de première commande. En Rétention, il attire des clients pour qui tu es vraiment le bon choix, ceux qui restent. C'est le seul levier qui agit partout en même temps, et le seul qui ne coûte que de la réflexion.\n\n" +
            "## À toi\n\n" +
            "Voici la baseline d'un vrai site (anonymisée) : « La plateforme tout-en-un qui simplifie votre quotidien et accélère votre croissance. » Réécris-la pour un service de livraison de repas pour restaurants d'entreprise, en suivant la trame en 5 points.\n\n" +
            "> Correction possible : « Pour les responsables de restaurants d'entreprise qui jonglent avec trois fournisseurs et des menus figés, nous livrons chaque matin des plats préparés la veille dans un rayon de 30 km, avec un menu qui change chaque semaine, contrairement aux traiteurs classiques qui imposent un engagement annuel. » Ta version sera différente, c'est normal. Vérifie trois choses : un segment nommé, un bénéfice chiffrable ou observable, une alternative explicitement écartée. Si les trois y sont, elle est meilleure que 90 % des baselines en ligne.\n\n" +
            "Prochaine étape : savoir à qui exactement tu parles. C'est le travail des personas, et on va le faire avec des données, pas avec de l'imagination.",
        },
        {
          id: "l3",
          title: "Des personas fondés sur de vrais signaux",
          type: "text",
          duration: "18 min",
          body:
            "## Le persona inventé ne sert à rien\n\n" +
            "Tu as déjà vu ces fiches : « Marie, 34 ans, aime le yoga et les brunchs, veut réussir sa vie ». C'est de la décoration. Un persona utile n'est pas un portrait sympathique, c'est une **synthèse de signaux observés** qui t'aide à décider quoi dire et où. La question n'est pas l'âge ou le prénom. La question est : quel problème cette personne cherche activement à résoudre, avec quels mots, à quel moment, et qu'est-ce qui la fait hésiter.\n\n" +
            "Je te propose de le faire en vrai, sur le cas du logiciel de devis pour artisans qu'on suit depuis la leçon précédente.\n\n" +
            "## Où trouver les vrais signaux\n\n" +
            "Tu en as déjà autour de toi, gratuitement :\n\n" +
            "- **Les conversations de vente et le support**. Les objections récurrentes, les phrases exactes des clients. Note le verbatim, pas ta reformulation. « Je fais mes devis le dimanche soir » vaut de l'or ; « les artisans manquent de temps » ne vaut rien.\n" +
            "- **Search Console et le planificateur de mots-clés**. Les requêtes réelles montrent l'intention et le vocabulaire. Si les gens tapent « logiciel devis auto-entrepreneur gratuit », le mot « gratuit » est un signal d'objection prix à traiter, pas à ignorer.\n" +
            "- **Les avis, les tiens et ceux des concurrents**. Les avis 3 étoiles sont une mine : ils disent ce qui a failli marcher. Va lire les avis des concurrents sur Capterra ou le Play Store, colonne par colonne.\n" +
            "- **Les forums et communautés** (Reddit, groupes Facebook métier, Discord). Les gens y parlent sans filtre marketing.\n" +
            "- **Tes analytics** : quelles pages retiennent, quels parcours convertissent.\n\n" +
            "## Le mini-cas : douze appels et un export GSC\n\n" +
            "Pour le logiciel de devis, voilà ce qu'a donné une semaine de collecte. Douze appels de 20 minutes avec des clients existants. Un export Search Console des 500 premières requêtes. Une lecture des avis 1 à 3 étoiles des deux concurrents principaux.\n\n" +
            "Ce qui est ressorti, et qu'aucun brainstorming n'aurait deviné : le déclencheur n°1 n'était pas « gagner du temps » mais **un devis refusé pour non-conformité** (mentions légales manquantes, TVA mal appliquée). Le vocabulaire réel disait « devis en bonne et due forme », expression absente du site. Et l'objection principale n'était pas le prix mais « encore un truc à installer », donc la peur de la complexité. Trois découvertes, trois décisions : un angle publicitaire sur la conformité, une page SEO sur « devis en bonne et due forme », une démo sans installation en page d'accueil.\n\n" +
            "## Structurer un persona qui décide\n\n" +
            "Garde trois à cinq segments maximum. Pour chacun, remplis seulement ce qui influence une action :\n\n" +
            "1. **Déclencheur** : l'événement qui lance la recherche (un devis refusé, un salarié qui démissionne, une saison qui démarre).\n" +
            "2. **Tâche** : ce qu'il veut accomplir.\n" +
            "3. **Vocabulaire** : les mots qu'il emploie. Ils deviennent tes mots-clés et tes titres.\n" +
            "4. **Objections** : ce qui le retient d'acheter.\n" +
            "5. **Canaux** : où il passe son temps et cherche des réponses.\n\n" +
            "Un bon persona doit te permettre d'écrire une annonce et de choisir un canal sans hésiter. S'il ne sert pas à décider, jette-le.\n\n" +
            "## Le biais du client idéal fantasmé\n\n" +
            "On dessine souvent le client qu'on aimerait avoir, pas celui qu'on a. Une marque de thé haut de gamme avec qui j'ai travaillé jurait que sa cible était « la cadre urbaine de 30-40 ans ». L'export des commandes croisé avec les rachats disait autre chose : ses clientes les plus fidèles avaient 55-70 ans, commandaient par lots de six boîtes et venaient à 80 % de la newsletter. Toute la pub visait un segment qui achetait une fois et disparaissait. Confronte toujours tes hypothèses aux données : si tes meilleurs clients (ceux qui restent et parrainent) ne ressemblent pas à ton persona principal, c'est le persona qu'il faut corriger. La rétention réelle est le meilleur juge de qui est vraiment ta cible.\n\n" +
            "## L'anti-persona, le gain de temps caché\n\n" +
            "Note aussi qui tu ne sers **pas**. Le logiciel de devis a fini par l'écrire noir sur blanc : pas pour les entreprises de plus de 20 salariés, pas pour les experts-comptables. Effet concret : le support a cessé de traiter des demandes hors cible, les pages ont pu afficher « pensé pour les indépendants et les petites équipes », et le taux d'essais convertis en payant a monté parce que les mauvais profils s'auto-excluaient avant de s'inscrire. Un anti-persona assumé économise du budget publicitaire (tu l'exclus du ciblage), du temps de support et des avis déçus laissés par des gens à qui tu n'aurais jamais dû vendre.\n\n" +
            "## À toi\n\n" +
            "Prends ton projet (ou un commerce que tu connais bien) et remplis les 5 champs du persona principal en 15 minutes, uniquement avec des éléments que tu as réellement observés : une phrase entendue, une requête vue dans GSC, un avis lu. Interdiction d'inventer.\n\n" +
            "> Correction (auto-évaluation) : relis chaque champ et demande-toi « d'où je le sais ? ». Chaque ligne doit avoir une source : un appel, un avis, une requête, une stat. Si une ligne vient de ton intuition, marque-la [hypothèse] et cherche comment la vérifier cette semaine. Un persona à 60 % vérifié et 40 % d'hypothèses marquées est un outil de travail honnête ; un persona 100 % affirmé sans source est une fiction.\n\n" +
            "Ces personas alimentent directement la suite : ils décident des mots-clés SEO qu'on visera, du ton des emails, du ciblage publicitaire et des angles de contenu.",
        },
        {
          id: "l4",
          title: "Un cadre de mesure honnête",
          type: "text",
          duration: "19 min",
          body:
            "## Quarante chiffres et aucune décision\n\n" +
            "Le tableau de bord dont je me souviens le mieux comptait 43 indicateurs, mis à jour chaque lundi par un stagiaire pendant deux heures. Followers, impressions, pages vues, taux d'ouverture, sessions, likes. Quand j'ai demandé « lequel de ces chiffres a changé une décision ce trimestre ? », silence. Le cadre de mesure se pose **avant** l'outil : quelle décision je veux pouvoir prendre, et quelle métrique la déclenche.\n\n" +
            "Une métrique utile a deux propriétés. Elle est **actionnable** (tu sais quoi faire si elle bouge) et elle est **rattachée à une étape du funnel**. Le reste est du bruit décoratif.\n\n" +
            "## Vanity metrics : les reconnaître\n\n" +
            "Une vanity metric monte toujours et ne dit jamais quoi faire. Les grands classiques :\n\n" +
            "- **Le nombre de followers**. Tu peux avoir 50 000 abonnés et zéro vente. Ce qui compte, c'est le trafic et les conversions que le canal génère.\n" +
            "- **Les impressions et la portée** seules. Être vu n'est pas être choisi.\n" +
            "- **Les pages vues cumulées** sans segmentation. Un pic de trafic sur un article viral hors sujet ne vaut rien.\n" +
            "- **Le taux d'ouverture email pris isolément**, surtout depuis 2021 et Apple Mail Privacy Protection qui précharge les pixels de suivi et gonfle artificiellement les ouvertures.\n\n" +
            "Le test : si la métrique double demain, sais-tu quelle décision prendre ? Si non, c'est de la vanité.\n\n" +
            "## Le casse-tête de l'attribution\n\n" +
            "Suis un client réel. Jour 0 : il découvre ta marque via un article de blog trouvé sur Google. Jour 3 : une pub Meta de retargeting le fait revenir regarder la page produit. Jour 6 : il tape ton nom dans Google, clique sur le premier résultat et achète pour 89 €. Quel canal a « fait » la vente ? Aucun seul. C'est là que les modèles d'attribution entrent en jeu.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Un même achat, trois lectures selon le modèle d'attribution\"}\n" +
            "<svg viewBox='0 0 640 320' role='img'><title>Parcours d'attribution : trois points de contact avant l'achat</title>" +
            "<g font-family='ui-monospace, monospace' font-size='12'>" +
            "<rect x='16' y='24' width='140' height='44' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='86' y='42' text-anchor='middle' fill='currentColor'>J0 · Blog</text><text x='86' y='58' text-anchor='middle' fill='currentColor' opacity='0.7'>(SEO)</text>" +
            "<rect x='196' y='24' width='140' height='44' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='266' y='42' text-anchor='middle' fill='currentColor'>J+3 · Pub Meta</text><text x='266' y='58' text-anchor='middle' fill='currentColor' opacity='0.7'>(retargeting)</text>" +
            "<rect x='376' y='24' width='140' height='44' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='446' y='42' text-anchor='middle' fill='currentColor'>J+6 · Search</text><text x='446' y='58' text-anchor='middle' fill='currentColor' opacity='0.7'>(marque)</text>" +
            "<rect x='548' y='24' width='76' height='44' rx='3' class='fig-accent' fill='none' stroke-width='2'/>" +
            "<text x='586' y='50' text-anchor='middle' fill='currentColor'>89 €</text>" +
            "<g stroke='currentColor' stroke-opacity='0.6'><line x1='156' y1='46' x2='196' y2='46'/><line x1='336' y1='46' x2='376' y2='46'/><line x1='516' y1='46' x2='548' y2='46'/></g>" +
            "<text x='16' y='120' fill='currentColor'>Last click : Search marque = 100 %</text>" +
            "<rect x='16' y='130' width='420' height='12' fill='currentColor' fill-opacity='0.5'/>" +
            "<text x='16' y='180' fill='currentColor'>First click : Blog SEO = 100 %</text>" +
            "<rect x='16' y='190' width='420' height='12' fill='currentColor' fill-opacity='0.25'/>" +
            "<text x='16' y='240' fill='currentColor'>Linéaire : 33 % / 33 % / 33 %</text>" +
            "<g fill='currentColor' fill-opacity='0.35'><rect x='16' y='250' width='136' height='12'/><rect x='160' y='250' width='136' height='12'/><rect x='304' y='250' width='136' height='12'/></g>" +
            "<text x='16' y='300' fill='currentColor' opacity='0.7'>Même vente, trois vérités : choisis un modèle et garde-le.</text>" +
            "</g></svg>\n" +
            "```\n\n" +
            "- **Last click** : tout le crédit au dernier canal (ici le Search de marque). Simple, mais surévalue le bas du funnel et le retargeting.\n" +
            "- **First click** : tout au premier (le blog). Surévalue la découverte.\n" +
            "- **Linéaire / basé sur la position** : répartit le crédit. Plus juste, plus flou.\n" +
            "- **Data-driven** : le modèle par défaut de GA4, qui répartit selon des probabilités calculées. Correct, mais opaque : tu ne sais pas exactement pourquoi il attribue quoi.\n\n" +
            "Vois l'effet sur de vrais volumes. Sur 100 ventes d'un e-commerce type, le passage de last click à data-driven fait typiquement « perdre » 15 à 25 ventes au Search de marque et au retargeting, redistribuées vers le SEO et le social. Si tu juges tes canaux en last click, tu couperas le blog qui amorce les ventes et tu doubleras le retargeting qui les termine. Six mois plus tard, plus rien n'amorce.\n\n" +
            "Aucun modèle n'est « vrai ». Choisis-en un, garde-le pour comparer dans le temps, et méfie-toi des canaux qui ne performent qu'en last click : ils volent souvent le crédit des autres.\n\n" +
            "## La mesure a un angle mort légal\n\n" +
            "Depuis le RGPD et les exigences de la CNIL, tu ne mesures que les visiteurs qui ont accepté ta bannière de consentement. En France, selon la bannière, 15 à 40 % des visiteurs refusent : ton GA4 voit donc une fraction de la réalité, et le Consent Mode de Google comble partiellement le trou avec des conversions modélisées. Conséquence pratique : ne compare jamais les chiffres GA4 aux chiffres de ta plateforme e-commerce en attendant qu'ils collent. Un écart de 20 à 30 % est normal. La source de vérité pour le revenu, c'est ton back-office, pas l'outil analytics.\n\n" +
            "## La North Star et la sobriété\n\n" +
            "Choisis une **métrique boussole** qui reflète la valeur réellement délivrée (commandes livrées, projets terminés, mois actifs) plutôt qu'un proxy manipulable. Puis limite-toi à cinq ou six indicateurs de pilotage, un par étape du funnel. Un tableau de bord de 40 chiffres n'est pas un signe de rigueur, c'est un signe qu'on ne sait pas ce qu'on cherche.\n\n" +
            "## À toi\n\n" +
            "Classe ces quatre métriques : « nombre d'abonnés Instagram », « taux de conversion essai → payant », « impressions Google », « clients qui rachètent sous 90 jours ». Lesquelles sont actionnables ?\n\n" +
            "> Correction : essai → payant (Activation : si elle chute, tu revois l'onboarding) et rachats sous 90 jours (Rétention : si elle chute, tu revois produit et emails post-achat) sont actionnables et rattachées au funnel. Abonnés Instagram et impressions sont des vanity metrics tant qu'elles ne sont pas reliées à un trafic et des conversions traçables. Elles peuvent devenir utiles en diagnostic (une chute d'impressions Search signale un problème SEO), mais elles ne pilotent pas une décision seules.",
        },
        {
          id: "l5",
          title: "Quiz : Cadre, positionnement, personas",
          type: "quiz",
          duration: "7 min",
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
                "Ton persona principal décrit un dirigeant de 45 ans soucieux d'image de marque. Mais tes clients qui restent le plus longtemps et te recommandent sont surtout de jeunes indépendants sensibles au prix. Que faire ?",
              options: [
                "Garder le persona, il correspond à la cible qu'on veut atteindre",
                "Corriger le persona pour qu'il colle aux clients réellement fidèles, car la rétention est le meilleur juge de la vraie cible",
                "Créer dix personas pour couvrir tous les cas",
                "Ignorer les personas, ils ne servent à rien",
              ],
              correctIndex: 1,
              explanation:
                "Un persona n'est pas le client fantasmé mais une synthèse de signaux observés. Quand les clients qui restent et parrainent contredisent le persona, c'est le persona qui est faux. La rétention réelle révèle qui est vraiment ta cible mieux que n'importe quelle hypothèse de départ.",
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
            {
              id: "q25",
              prompt:
                "Un SaaS affiche sur un mois : 8 000 visiteurs, 240 essais gratuits, 12 abonnements payants, 11 abonnés encore actifs le mois suivant. Quel taux de passage est anormalement bas ?",
              options: [
                "Visite → essai (3 %), il faudrait au moins 10 %",
                "Essai → payant (5 %), alors que le repère pour un essai sans carte bancaire se situe plutôt entre 10 et 25 %",
                "La rétention M+1 (92 %), qui devrait être de 100 %",
                "Aucun, tous ces taux sont bons",
              ],
              correctIndex: 1,
              explanation:
                "3 % de visite → essai est correct pour du SaaS, et 92 % de rétention à M+1 est excellent. Le maillon faible est essai → payant à 5 % : c'est l'Activation qui pêche (onboarding, démonstration de valeur pendant l'essai). Diagnostiquer par taux de passage évite de dépenser au mauvais endroit.",
            },
            {
              id: "q26",
              prompt:
                "En passant du modèle last click au modèle data-driven de GA4, le canal « Search marque » perd 20 % de ses conversions attribuées. Qu'est-ce que cela signifie ?",
              options: [
                "Le site a réellement perdu 20 % de ses ventes",
                "Une partie du crédit que le last click donnait au dernier clic (souvent la recherche du nom de la marque) est redistribuée aux canaux qui ont amorcé le parcours, comme le SEO ou le social",
                "GA4 est en panne et il faut revenir à Universal Analytics",
                "Le Search marque ne sert à rien et il faut le couper",
              ],
              correctIndex: 1,
              explanation:
                "Le nombre de ventes réelles n'a pas bougé, seule leur répartition entre canaux change. Le last click surévalue le dernier point de contact : quelqu'un qui tape ton nom a été convaincu ailleurs avant. Le data-driven redonne du crédit aux canaux d'amorçage, ce qui évite de couper le blog qui démarre les parcours.",
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
          duration: "18 min",
          body:
            "## Google ne classe pas des mots, il satisfait des intentions\n\n" +
            "La plus grosse erreur SEO des débutants : choisir un mot-clé parce qu'il a du volume, sans se demander ce que la personne veut vraiment quand elle le tape. Or Google évalue si ta page **répond à l'intention** derrière la requête. Se tromper d'intention, c'est écrire une page qui ne se classera jamais, peu importe l'optimisation technique.\n\n" +
            "J'ai vu un site e-commerce de matériel de randonnée s'acharner huit mois sur « sac de dos randonnée » (14 800 recherches par mois en France) avec sa page catégorie. Résultat : position 38, invisible. La page 1 était remplie de comparatifs et de guides d'achat. Pendant ce temps, un guide « quel litrage de sac pour un trek de 3 jours » publié en un après-midi s'est classé 4e en six semaines sur sa longue traîne et envoyait 900 visites par mois vers les fiches produit. Toute la leçon tient dans cette anecdote.\n\n" +
            "## Les quatre intentions\n\n" +
            "On distingue classiquement quatre types :\n\n" +
            "- **Informationnelle** : la personne veut apprendre (« comment calculer une TVA », « qu'est-ce qu'un persona »). Elle n'achète pas encore.\n" +
            "- **Navigationnelle** : elle cherche un site précis (« connexion Klaviyo », « Shopify tarifs »).\n" +
            "- **Commerciale** : elle compare avant d'acheter (« meilleur logiciel de facturation », « Brevo vs Mailchimp »).\n" +
            "- **Transactionnelle** : elle est prête à agir (« acheter licence antivirus », « devis plombier Lyon »).\n\n" +
            "Une requête informationnelle appelle un article ou un guide. Une requête transactionnelle appelle une page produit ou une landing page. Mettre une page produit sur une requête informationnelle, c'est perdre à tous les coups.\n\n" +
            "## Lire les SERP pour valider l'intention\n\n" +
            "La méthode la plus fiable ne coûte rien : tape la requête en navigation privée et regarde ce qui se classe déjà. Google a tranché à ta place. Si le top 10 est plein d'articles de blog, c'est informationnel, ta fiche produit n'a aucune chance. Si c'est plein de pages catégories e-commerce, c'est transactionnel.\n\n" +
            "Regarde aussi les blocs SERP : « Autres questions posées » (People Also Ask) révèle les sous-questions à couvrir, les featured snippets montrent le format que Google privilégie, la présence de Shopping ou de la carte locale signale une intention d'achat ou de proximité. Avant d'écrire, ouvre les 5 premiers résultats. Ils te disent l'intention, la profondeur attendue et le format. Tu ne devines plus, tu observes.\n\n" +
            "## Volume, difficulté et la stratégie longue traîne\n\n" +
            "Un mot-clé à 15 000 recherches par mois est presque toujours hors de portée d'un site jeune, saturé de gros acteurs qui ont dix ans de liens d'avance. La longue traîne (requêtes de 4 mots et plus, faible volume unitaire) est ton terrain : moins de concurrence, intention plus précise, taux de conversion souvent supérieur.\n\n" +
            "Fais le calcul qui change la perspective. Cent requêtes longue traîne à 30 recherches mensuelles représentent 3 000 recherches par mois. En position 3-5 sur chacune (accessible à un site jeune), à ~8 % de CTR, tu captes environ 240 visites mensuelles très qualifiées. La requête star à 15 000 recherches, en position 25, t'en donne zéro. Et les requêtes longue traîne se regroupent : plusieurs formulations proches (« quel litrage sac trek 3 jours », « taille sac à dos week-end rando ») se traitent avec un seul bon article.\n\n" +
            "Relie toujours le choix des mots-clés au vocabulaire de tes personas vu en partie 1. Souviens-toi du « devis en bonne et due forme » : cette expression sortie des appels clients avait 320 recherches par mois et aucun concurrent sérieux dessus. C'est exactement là que l'intention et ton offre se rencontrent.\n\n" +
            "## Prioriser avec un score simple\n\n" +
            "Quand ta liste dépasse trente mots-clés, priorise avec trois notes de 1 à 5 : la **pertinence business** (la requête mène-t-elle vraiment à ton offre ?), la **chance réaliste** (qui occupe la page 1 : des mastodontes à forte autorité ou des forums et des pages moyennes ?), et le **volume**. Multiplie les trois et trie. Une requête à 40 recherches par mois avec pertinence 5 et chance 4 bat presque toujours la requête à 5 000 recherches avec pertinence 3 et chance 1. Ce petit tableur de dix minutes évite le piège classique : passer six mois sur des requêtes prestigieuses et perdues d'avance pendant que dix requêtes gagnables attendent leur article.\n\n" +
            "## Le piège du volume zéro affiché\n\n" +
            "Petit avertissement d'expérience : les outils de mots-clés affichent « 0-10 recherches » pour des requêtes très spécifiques qui reçoivent en réalité du trafic. Les volumes sont des moyennes lissées et arrondies. Si une requête correspond exactement à ce que tes clients disent au téléphone, écris la page même si l'outil affiche zéro. Search Console te montrera dans deux mois ce que l'outil ne voyait pas.\n\n" +
            "## À toi\n\n" +
            "Classe ces quatre requêtes par intention et déduis le format de page à créer : « chaussures trail femme avis », « pointure chaussure trail conseil », « acheter hoka speedgoat 6 », « decathlon horaires ».\n\n" +
            "> Correction : « chaussures trail femme avis » est commerciale (comparatif ou guide d'achat avec avis). « pointure chaussure trail conseil » est informationnelle (article guide des tailles, excellent contenu d'assistance qui se maille vers les fiches). « acheter hoka speedgoat 6 » est transactionnelle (fiche produit optimisée). « decathlon horaires » est navigationnelle : tu ne peux rien en faire, sauf si tu es Decathlon. Si tu as hésité entre commerciale et informationnelle sur la première, la SERP tranche : regarde ce que Google classe.",
        },
        {
          id: "l7",
          title: "On-page et maillage interne",
          type: "text",
          duration: "19 min",
          body:
            "## L'optimisation on-page, sans magie\n\n" +
            "Le SEO on-page, c'est rendre une page compréhensible pour l'humain et la machine sur un sujet précis. Pas de bourrage de mots-clés, cette époque est morte depuis Panda en 2011. Quelques fondamentaux qui pèsent vraiment, dans l'ordre d'importance.\n\n" +
            "La **balise title** est l'élément on-page le plus important. C'est le titre bleu cliquable dans les résultats. Elle doit contenir le mot-clé principal, tenir en ~60 caractères (au-delà Google la tronque) et donner envie de cliquer.\n\n" +
            "```html\n<title>Logiciel de devis pour artisans : devis conforme en 3 min</title>\n<meta name=\"description\" content=\"Créez des devis conformes depuis le chantier en 3 minutes. Essai gratuit, sans carte bancaire.\">\n```\n\n" +
            "La **meta description** ne classe pas directement mais influence le taux de clic depuis les résultats. 150-160 caractères, un bénéfice, un appel à l'action. Sur un site que je suivais, réécrire les descriptions des 20 pages les plus vues a fait passer le CTR moyen dans Search Console de 2,3 % à 3,1 % en un mois, soit environ 35 % de clics en plus sans gagner une seule position. C'est le levier le plus sous-coté du on-page.\n\n" +
            "## La structure Hn et le premier paragraphe\n\n" +
            "Une page a **un seul H1** (le titre principal), puis des H2 et H3 qui découpent logiquement. Cette hiérarchie aide Google à comprendre le plan et l'utilisateur à scanner. Réponds à l'intention **dès le premier paragraphe** : les gens et les robots jugent vite. La technique du journaliste s'applique : la réponse d'abord, les nuances ensuite.\n\n" +
            "Couvre le sujet en profondeur, y compris les questions annexes du bloc « Autres questions posées ». Un contenu qui traite le sujet complètement se classe mieux qu'un contenu court même parfaitement optimisé. Attention, profondeur ne veut pas dire longueur artificielle : les 800 mots d'introduction historique avant la réponse, tout le monde les fuit, et Google mesure cette fuite.\n\n" +
            "## Le maillage interne, l'arme sous-estimée\n\n" +
            "Les liens internes font trois choses : ils aident Google à découvrir tes pages, ils répartissent l'autorité entre elles, et ils guident l'utilisateur. C'est un des leviers les plus rentables parce qu'il ne dépend que de toi. Pas besoin de convaincre un autre site, pas de budget.\n\n" +
            "Deux principes concrets :\n\n" +
            "1. **Ancre descriptive** : le texte cliquable doit décrire la page cible (« guide de la facturation auto-entrepreneur ») plutôt que « cliquez ici ». L'ancre est un signal de pertinence que Google lit littéralement.\n" +
            "2. **Structure en cocon** : regroupe tes articles par thème, une page pilier qui couvre le sujet large, des articles satellites qui traitent les sous-sujets et pointent vers le pilier et entre eux. Ça concentre l'autorité et clarifie ton expertise thématique.\n\n" +
            "Chaque nouvelle page devrait recevoir au moins deux ou trois liens internes depuis des pages existantes pertinentes, sinon elle reste orpheline et Google la juge peu importante. Cas vécu : un blog de 60 articles dont 22 orphelins (zéro lien entrant interne, découverts uniquement via le sitemap). Après une passe de maillage d'une journée, sans toucher au contenu, 14 des 22 articles ont gagné des positions dans les six semaines, dont trois passés de la page 2 au top 5. Une journée de travail, aucun mot écrit.\n\n" +
            "## Les images aussi parlent à Google\n\n" +
            "Trois gestes rapides par page : un nom de fichier descriptif (`devis-artisan-mobile.webp` plutôt que `IMG_4382.jpg`), un attribut `alt` qui décrit l'image pour les lecteurs d'écran et pour Google Images, et un poids raisonnable (une image d'illustration n'a aucune raison de dépasser 150-200 Ko). Google Images apporte un trafic réel sur tout ce qui est visuel (produits, recettes, tutoriels), et l'attribut alt est de toute façon une obligation d'accessibilité. Pendant que les concurrents uploadent des `Capture-d-ecran-2026.png` de 3 Mo, c'est une position gratuite à prendre.\n\n" +
            "Dernier détail qui pèse sur les sites à fort contenu : l'entretien. Un article mis à jour sérieusement (chiffres rafraîchis, section ajoutée, exemples remplacés, pas juste la date changée) reprend souvent des positions en quelques semaines. Google et les lecteurs préfèrent tous les deux le contenu maintenu.\n\n" +
            "## Ce qui ne marche plus (et ce qui pénalise)\n\n" +
            "Le mot-clé répété 20 fois, les paragraphes bourrés de synonymes, les balises title identiques sur tout le site, le contenu dupliqué entre fiches produit. Et depuis les vagues « Helpful Content » intégrées au cœur de l'algorithme, la production massive de pages fines pour ratisser des mots-clés se paie cash : des sites entiers ont perdu 60 à 90 % de leur trafic sur ces mises à jour. Google est devenu bon pour détecter le contenu écrit pour lui plutôt que pour l'humain. Écris pour la personne, optimise ensuite.\n\n" +
            "## À toi\n\n" +
            "Cette balise title fait 94 caractères : « Bienvenue sur notre site - Découvrez notre gamme complète de logiciels de devis et facturation pour tous les professionnels ». Réécris-la pour la page d'accueil du logiciel de devis artisans.\n\n" +
            "> Correction possible : « Logiciel de devis pour artisans : conforme en 3 min » (52 caractères). On vire « Bienvenue sur notre site » (aucune valeur, aucun mot-clé), on garde un mot-clé principal (« logiciel de devis artisans »), une promesse chiffrée qui fait cliquer, et on tient sous 60 caractères pour éviter la troncature. Le title n'est pas un message d'accueil, c'est ton annonce gratuite dans Google.\n\n" +
            "On mesurera l'effet de tout ça avec Search Console deux leçons plus loin. Avant, un détour obligatoire : vérifier que rien, techniquement, n'empêche Google de voir tes pages.",
        },
        {
          id: "l8",
          title: "Les bases techniques du SEO",
          type: "text",
          duration: "19 min",
          body:
            "## Le SEO technique, ou comment ne pas se saborder\n\n" +
            "Le technique ne fait pas grimper une page magiquement. Mais mal fait, il empêche tes bonnes pages de se classer. C'est un filet de sécurité : on vérifie que rien ne bloque, on ne cherche pas de miracle. Pour comprendre où ça peut casser, il faut voir le chemin qu'une page parcourt avant d'apparaître dans les résultats.\n\n" +
            "## Crawl, index, rank : trois portes successives\n\n" +
            "```figure\n" +
            "{\"caption\": \"Une page doit passer trois portes : exploration, indexation, classement. Chaque porte a ses bloqueurs.\"}\n" +
            "<svg viewBox='0 0 640 300' role='img'><title>Pipeline SEO : du crawl au classement</title>" +
            "<g font-family='ui-monospace, monospace' font-size='13'>" +
            "<rect x='24' y='40' width='170' height='64' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='109' y='66' text-anchor='middle' fill='currentColor'>1. CRAWL</text>" +
            "<text x='109' y='86' text-anchor='middle' fill='currentColor' opacity='0.7'>Googlebot explore</text>" +
            "<rect x='236' y='40' width='170' height='64' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='321' y='66' text-anchor='middle' fill='currentColor'>2. INDEX</text>" +
            "<text x='321' y='86' text-anchor='middle' fill='currentColor' opacity='0.7'>la page est stockée</text>" +
            "<rect x='448' y='40' width='170' height='64' rx='3' class='fig-accent' fill='none' stroke-width='2'/>" +
            "<text x='533' y='66' text-anchor='middle' fill='currentColor'>3. RANK</text>" +
            "<text x='533' y='86' text-anchor='middle' fill='currentColor' opacity='0.7'>position gagnée</text>" +
            "<g stroke='currentColor' stroke-opacity='0.6'><line x1='194' y1='72' x2='236' y2='72'/><line x1='406' y1='72' x2='448' y2='72'/></g>" +
            "<g fill='currentColor' opacity='0.75'>" +
            "<text x='24' y='150'>Bloqueurs :</text>" +
            "<text x='24' y='178'>· robots.txt Disallow</text>" +
            "<text x='24' y='198'>· page orpheline</text>" +
            "<text x='24' y='218'>· serveur en erreur 5xx</text>" +
            "<text x='236' y='178'>· meta noindex</text>" +
            "<text x='236' y='198'>· canonical vers ailleurs</text>" +
            "<text x='236' y='218'>· contenu jugé trop faible</text>" +
            "<text x='448' y='178'>· intention ratée</text>" +
            "<text x='448' y='198'>· contenu moins bon</text>" +
            "<text x='448' y='218'>· autorité insuffisante</text>" +
            "</g>" +
            "<text x='24' y='270' fill='currentColor' opacity='0.7'>Une porte fermée = les suivantes n'existent pas.</text>" +
            "</g></svg>\n" +
            "```\n\n" +
            "Tout le SEO technique consiste à garder les deux premières portes grandes ouvertes. La troisième, c'est le contenu et l'autorité qui la franchissent.\n\n" +
            "## Porte 1 : le crawl\n\n" +
            "Le **robots.txt** dit aux robots ce qu'ils peuvent explorer. L'erreur fatale, vécue plus d'une fois : oublier un blocage de préproduction en production. Sur une refonte que j'ai auditée après coup, le fichier contenait encore `Disallow: /` hérité de la préprod. Dix jours après la mise en ligne, les clics organiques avaient chuté de 90 % et personne n'avait fait le lien. Le fichier correct pour un site public :\n\n" +
            "```bash\n# robots.txt : autorise tout, pointe le sitemap\nUser-agent: *\nAllow: /\nSitemap: https://votresite.fr/sitemap.xml\n```\n\n" +
            "Le **sitemap.xml** liste tes pages importantes pour aider Google à les découvrir, surtout les nouvelles et celles qui ont peu de liens. Soumets-le dans Search Console. Et garde tes pages reliées entre elles : une page orpheline (aucun lien interne vers elle) se fait crawler tard, mal, ou pas du tout.\n\n" +
            "## Porte 2 : l'indexation\n\n" +
            "La balise **meta robots noindex** retire une page de l'index. Utile pour les pages de panier, de compte, de résultats de recherche interne. Catastrophique quand elle traîne où il ne faut pas : un `noindex` oublié après une refonte, et un site entier disparaît de Google en quelques jours. Vérifie-le systématiquement avant toute mise en ligne, c'est un contrôle de 30 secondes (afficher le code source, chercher « noindex »).\n\n" +
            "Autre bloqueur discret : la balise **canonical** qui pointe vers une autre URL. Elle dit à Google « la vraie version de cette page est ailleurs ». Un canonical mal généré par un thème ou un plugin peut désindexer des sections entières sans aucun message d'erreur.\n\n" +
            "## Vitesse et Core Web Vitals\n\n" +
            "Google utilise l'expérience de page comme signal, mesuré par trois indicateurs :\n\n" +
            "- **LCP** (Largest Contentful Paint) : le temps d'affichage du plus gros élément. Cible sous 2,5 s.\n" +
            "- **INP** (Interaction to Next Paint), qui a remplacé le FID en mars 2024 : la réactivité aux interactions. Cible sous 200 ms.\n" +
            "- **CLS** (Cumulative Layout Shift) : la stabilité visuelle, ces sauts de mise en page agaçants. Cible sous 0,1.\n\n" +
            "Mesure avec PageSpeed Insights, qui combine données de laboratoire et données réelles d'utilisateurs. Les leviers concrets : compresser les images (WebP ou AVIF, dimensions correctes), différer le JavaScript non critique, utiliser un CDN, activer la mise en cache. Une image de 4 Mo affichée en vignette est le péché le plus courant ; je l'ai trouvée sur la moitié des sites audités, sans exagérer.\n\n" +
            "Sois lucide sur le poids de ce signal : les Core Web Vitals départagent des contenus comparables, ils ne sauvent pas un contenu moyen. Passer de 4 s à 2 s de LCP aide ; passer de 2 s à 1,2 s ne changera probablement rien à tes positions.\n\n" +
            "## Mobile, HTTPS, données structurées\n\n" +
            "Google indexe en **mobile-first** depuis des années : c'est la version mobile qui fait foi. Si ton site est illisible sur téléphone, tu es pénalisé même pour les recherches desktop. **HTTPS** est un prérequis, plus une option.\n\n" +
            "Le balisage **Schema.org** (au format JSON-LD) aide Google à comprendre le type de contenu et peut déclencher des résultats enrichis : étoiles d'avis, prix, FAQ dépliables. Ça n'améliore pas le classement directement mais augmente le taux de clic, ce qui compte autant. Priorité aux types Product, Article, FAQPage et LocalBusiness selon ton activité. Et une règle : le balisage doit refléter ce qui est visible sur la page. Baliser des avis qui n'existent pas relève du spam structuré, et Google distribue des pénalités manuelles pour ça.\n\n" +
            "Pour auditer sans rien payer : Screaming Frog en version gratuite crawle 500 URLs, largement assez pour un petit site, et la commande `site:tonsite.fr` dans Google donne en dix secondes une idée de ce qui est réellement indexé.\n\n" +
            "Le technique est un audit de non-régression. Chaque mise en ligne, on vérifie dans l'ordre des trois portes : robots.txt, noindex/canonical, vitesse et rendu mobile. Un oubli ici annule des mois de contenu.",
        },
        {
          id: "l9",
          title: "Mesurer avec Google Search Console",
          type: "video",
          duration: "18 min",
          videoLabel: "Démo : lire le rapport Performances et l'onglet Indexation dans Search Console",
          body:
            "## L'outil que Google te donne gratuitement\n\n" +
            "Search Console (GSC) est le seul endroit où tu vois comment Google perçoit réellement ton site : quelles requêtes te rapportent des clics, à quelle position tu es, quelles pages sont indexées ou en erreur. GA4 te dit ce qui se passe sur le site ; GSC te dit ce qui se passe **avant** le clic. Les deux sont complémentaires, et GSC ne dépend pas du consentement cookies : il mesure côté Google, pas côté navigateur. C'est parfois ta donnée la plus complète.\n\n" +
            "Compte trois à quatre semaines après la vérification de propriété pour avoir un historique exploitable. Installe-le donc dès le premier jour, même si le site est vide.\n\n" +
            "## Notes de démo : le rapport Performances\n\n" +
            "On ouvre l'onglet **Performances > Résultats de recherche**. Quatre métriques en haut :\n\n" +
            "- **Clics** : les visites depuis Google.\n" +
            "- **Impressions** : le nombre de fois où ta page est apparue dans les résultats.\n" +
            "- **CTR** (clics / impressions) : ton taux de clic.\n" +
            "- **Position moyenne** : trompeuse si tu la lis seule, car elle moyenne des requêtes très différentes.\n\n" +
            "Les ordres de grandeur de CTR selon la position, pour calibrer tes attentes : environ 28-30 % en position 1, ~15 % en position 2, ~10 % en position 3, 4-6 % en bas de page 1, et ça s'effondre sous 2 % dès la page 2. Autrement dit, passer de la position 11 à la position 3 ne fait pas « un peu mieux » : ça multiplie souvent les clics par cinq à dix.\n\n" +
            "La manipulation qui change tout : coche **Impressions** et **Position**, puis passe dans l'onglet **Requêtes**. Cherche les requêtes qui ont beaucoup d'impressions mais une position moyenne entre 8 et 20. Ce sont tes **quick wins** : Google te juge pertinent (il te montre), mais tu es en bas de page 1 ou en page 2.\n\n" +
            "## Un quick win déroulé de bout en bout\n\n" +
            "Cas réel type. Un article « assurance décennale auto-entrepreneur » affiche 6 200 impressions par mois, position moyenne 11,4, CTR 1,1 %, soit 68 clics. Le plan d'action tenait en trois gestes : réécrire le title pour coller à la requête exacte (l'ancien disait « Tout savoir sur les assurances »), ajouter une section répondant aux deux questions du bloc People Also Ask, et pointer trois liens internes depuis les articles voisins avec des ancres descriptives. Sept semaines plus tard : position 4,8, CTR 6,3 %, 390 clics mensuels. Presque six fois plus de trafic, zéro nouvelle page, une demi-journée de travail.\n\n" +
            "Le levier le plus rentable en SEO n'est pas de créer une nouvelle page, c'est de pousser une page déjà en position 8-15 vers le top 5. GSC te les liste précisément.\n\n" +
            "## Notes de démo : l'indexation\n\n" +
            "Onglet **Indexation > Pages**. Il sépare les pages indexées des pages exclues, avec la raison de chaque exclusion : « Explorée, actuellement non indexée », « Détectée, actuellement non indexée », « Bloquée par robots.txt », « Exclue par la balise noindex ». Traduction rapide : « Détectée, non indexée » signifie souvent que Google n'a pas jugé utile de venir (maillage faible, site lent) ; « Explorée, non indexée » signifie qu'il est venu et n'a pas trouvé la page assez intéressante (contenu fin ou dupliqué). Deux diagnostics différents, deux remèdes différents.\n\n" +
            "Si une page importante figure dans les exclues, c'est là qu'on creuse. L'outil **Inspection d'URL** (barre du haut) teste une URL précise, montre la version indexée et permet de demander une indexation après correction.\n\n" +
            "## La routine hebdomadaire\n\n" +
            "Chaque semaine, trois contrôles suffisent, quinze minutes en tout :\n\n" +
            "1. Les requêtes en position 8-20 avec de grosses impressions : ta liste de quick wins à prioriser.\n" +
            "2. L'onglet Pages : des exclusions nouvelles sur des URLs importantes ? C'est ton alarme incendie technique.\n" +
            "3. L'évolution des clics par page sur 28 jours vs période précédente : quelles pages montent, lesquelles décrochent (souvent un signe de contenu vieillissant à rafraîchir).\n\n" +
            "Le reste est du confort. GSC est aussi ta source de vérité sur le **vocabulaire réel** de tes visiteurs : les requêtes qui t'affichent sans que tu les aies visées sont des idées d'articles servies sur un plateau, et elles bouclent avec le travail sur les personas et l'intention.\n\n" +
            "## À toi\n\n" +
            "Trois lignes extraites d'un rapport Performances (requête / impressions / position / clics mensuels) : « logiciel devis batiment » 4 900 / 9,2 / 55 · « exemple devis peinture pdf » 12 300 / 34 / 8 · « logiciel devis artisan avis » 850 / 6,1 / 41. Par laquelle commences-tu, et pourquoi ?\n\n" +
            "> Correction : « logiciel devis batiment », sans hésiter. Position 9,2 avec 4 900 impressions, c'est le profil quick win parfait : title à resserrer, section à compléter, trois liens internes, et un passage en position 4-5 peut tripler ou quadrupler les 55 clics. « exemple devis peinture pdf » a le plus gros volume mais une position 34 : Google ne te juge pas pertinent, ce serait un chantier long, et l'intention est douteuse pour ton business (ces gens veulent un modèle gratuit, pas un logiciel). « logiciel devis artisan avis » est déjà en position 6 sur un petit volume : gain marginal faible. Le réflexe à retenir : on trie par impressions × proximité de la page 1, jamais par volume brut.",
        },
        {
          id: "l10",
          title: "Quiz : SEO fondamentaux",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Tu veux te classer sur « meilleur logiciel de facturation ». En regardant la page 1 de Google, tu ne vois que des articles comparatifs de blog. Quelle page dois-tu créer ?",
              options: [
                "Ta page produit, puisque tu vends un logiciel de facturation",
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
                "Le CTR s'effondre sous la première page : passer de la position 12 à la position 4-5 peut faire bondir les clics de façon spectaculaire (souvent ×5 à ×10). Améliorer une page déjà bien vue par Google est bien plus rentable que d'en créer une nouvelle depuis zéro. GSC identifie ces quick wins précisément.",
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
                "Un effondrement soudain et total après une mise en ligne sent le noindex oublié ou le robots.txt de préprod resté actif (le fameux Disallow: /). C'est le piège technique le plus fréquent et le plus destructeur. On vérifie l'indexation dans Search Console avant de soupçonner quoi que ce soit d'autre.",
            },
            {
              id: "q8",
              prompt:
                "Pourquoi le maillage interne est-il considéré comme un des leviers SEO les plus rentables ?",
              options: [
                "Parce qu'il fait payer Google pour mieux classer",
                "Parce qu'il ne dépend que de toi : il aide Google à découvrir les pages, répartit l'autorité entre elles et guide l'utilisateur, sans budget ni dépendance externe",
                "Parce qu'il remplace complètement la création de contenu",
                "Parce qu'il augmente le volume de recherche des mots-clés",
              ],
              correctIndex: 1,
              explanation:
                "Contrairement au netlinking externe qui dépend d'autres sites, le maillage interne est entièrement sous ton contrôle. Avec des ancres descriptives et une structure en cocon, il distribue l'autorité vers les pages stratégiques et évite les pages orphelines, pour un coût nul.",
            },
            {
              id: "q27",
              prompt:
                "Une page importante apparaît dans Search Console comme « Explorée, actuellement non indexée ». Qu'est-ce que cela indique le plus probablement ?",
              options: [
                "Un problème de robots.txt qui empêche Googlebot de venir",
                "Google est venu voir la page mais ne l'a pas jugée assez intéressante pour l'indexer : contenu trop fin, dupliqué ou sans valeur ajoutée",
                "La page est en position 1 et n'a plus besoin d'être indexée",
                "Le site n'a pas de sitemap",
              ],
              correctIndex: 1,
              explanation:
                "« Explorée, non indexée » signifie que le crawl a eu lieu (donc pas de blocage robots.txt) mais que l'indexation a été refusée : c'est un verdict sur la qualité ou l'unicité du contenu. « Détectée, non indexée » pointerait plutôt vers un problème de crawl (maillage faible, site lent). Deux diagnostics, deux remèdes.",
            },
            {
              id: "q28",
              prompt:
                "Un article passe de la position moyenne 11 à la position 4 sur sa requête principale. À quoi peux-tu t'attendre côté trafic ?",
              options: [
                "Une hausse marginale, la position compte peu",
                "Une multiplication des clics souvent par 5 à 10, car le CTR passe d'environ 1-2 % en page 2 à 8-10 % dans le top 5",
                "Une baisse, car la position 11 était plus visible",
                "Aucun changement tant que le nombre d'impressions ne monte pas",
              ],
              correctIndex: 1,
              explanation:
                "Le CTR est très non-linéaire : ~28-30 % en position 1, ~10 % en position 3, moins de 2 % en page 2. Passer de 11 à 4 fait bondir le taux de clic sur un volume d'impressions comparable. C'est pour ça que pousser une page en position 8-15 vers le top 5 est le travail SEO le plus rentable.",
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
          duration: "19 min",
          body:
            "## Produire du contenu n'est pas une stratégie\n\n" +
            "Beaucoup d'entreprises publient un article par semaine et s'étonnent que rien ne bouge. Un an, 52 articles, 400 visites mensuelles : je l'ai vu, et tu le verras aussi. Le content marketing ne consiste pas à remplir un blog, mais à **répondre aux questions de tes personas aux différentes étapes de leur réflexion**, pour être présent avant même qu'ils cherchent à acheter.\n\n" +
            "Le contenu nourrit surtout le haut et le milieu du funnel AARRR : il crée de l'Acquisition organique via le SEO et prépare l'Activation en établissant la confiance. Il travaille lentement mais il compose : un bon article continue d'attirer du trafic pendant des années, contrairement à une pub qui s'arrête dès qu'on coupe le budget. Un guide publié en 2023 sur un blog que je gère envoie encore 1 100 visites par mois en 2026. Coût marginal actuel : zéro.\n\n" +
            "## TOFU, MOFU, BOFU : cartographier le contenu sur le parcours\n\n" +
            "Le jargon du métier découpe l'entonnoir en trois zones, et il vaut la peine d'être connu parce que tout le monde l'utilise :\n\n" +
            "```figure\n" +
            "{\"caption\": \"TOFU, MOFU, BOFU : à chaque zone de l'entonnoir son type de contenu et son objectif\"}\n" +
            "<svg viewBox='0 0 640 330' role='img'><title>Entonnoir de contenu TOFU MOFU BOFU</title>" +
            "<g font-family='ui-monospace, monospace' font-size='13'>" +
            "<path d='M 40 24 L 380 24 L 330 118 L 90 118 Z' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='210' y='60' text-anchor='middle' fill='currentColor'>TOFU · prise de conscience</text>" +
            "<text x='210' y='84' text-anchor='middle' fill='currentColor' opacity='0.7'>guides, comment-faire, définitions</text>" +
            "<path d='M 90 128 L 330 128 L 290 212 L 130 212 Z' fill='currentColor' fill-opacity='0.12' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='210' y='162' text-anchor='middle' fill='currentColor'>MOFU · considération</text>" +
            "<text x='210' y='186' text-anchor='middle' fill='currentColor' opacity='0.7'>comparatifs, cas clients, checklists</text>" +
            "<path d='M 130 222 L 290 222 L 250 306 L 170 306 Z' class='fig-accent' fill='none' stroke-width='2'/>" +
            "<text x='210' y='256' text-anchor='middle' fill='currentColor'>BOFU · décision</text>" +
            "<text x='210' y='280' text-anchor='middle' fill='currentColor' opacity='0.7'>démos, essais, pages produit</text>" +
            "<g fill='currentColor' opacity='0.75'>" +
            "<text x='420' y='60'>~97 % des visiteurs</text>" +
            "<text x='420' y='80'>pas prêts à acheter</text>" +
            "<text x='420' y='166'>ils comparent,</text>" +
            "<text x='420' y='186'>objections à lever</text>" +
            "<text x='420' y='256'>~3 % prêts :</text>" +
            "<text x='420' y='276'>convertir maintenant</text>" +
            "</g></g></svg>\n" +
            "```\n\n" +
            "- **TOFU** (top of funnel, prise de conscience) : la personne réalise qu'elle a un problème. Contenus « comment », guides, définitions. « Pourquoi mes devis me prennent autant de temps ».\n" +
            "- **MOFU** (middle, considération) : elle compare des solutions. Comparatifs, études de cas, checklists. « Tableur vs logiciel de devis ».\n" +
            "- **BOFU** (bottom, décision) : elle choisit. Démos, témoignages clients, pages produit détaillées, essais.\n\n" +
            "L'erreur classique est de ne produire que du BOFU (« pourquoi nous sommes les meilleurs »), qui n'intéresse que les quelques pour cent déjà prêts à acheter. Le TOFU capte l'immense majorité restante et la fait mûrir. L'erreur inverse existe aussi : un blog 100 % TOFU qui attire un trafic énorme mais ne propose jamais le pas suivant. Chaque article TOFU doit se mailler vers un contenu MOFU, qui pointe vers le BOFU. C'est ton cocon sémantique de la partie SEO, vu sous l'angle business.\n\n" +
            "## Le calendrier éditorial, un outil de discipline\n\n" +
            "Un calendrier n'est pas une décoration Notion. Il sert à tenir un rythme et à équilibrer les zones de l'entonnoir. Minimum viable, une ligne par contenu :\n\n" +
            "1. Le **sujet** et le mot-clé/l'intention ciblé.\n" +
            "2. La **zone** (TOFU/MOFU/BOFU) visée.\n" +
            "3. Le **format** et la longueur.\n" +
            "4. La **date** de publication et le responsable.\n" +
            "5. Le **canal de distribution** (car publier ne suffit pas).\n\n" +
            "Une répartition de départ raisonnable : 60 % TOFU, 30 % MOFU, 10 % BOFU. Ajuste ensuite selon ce que Search Console et GA4 te montrent.\n\n" +
            "## La règle des 20/80 de la distribution\n\n" +
            "Passe 20 % de ton temps à créer le contenu et 80 % à le distribuer et le recycler. Un excellent article que personne ne lit ne vaut rien. Concrètement, pour un article de fond : le partager dans la newsletter, le découper en trois posts LinkedIn étalés sur trois semaines, en tirer un carrousel Instagram, répondre avec son lien aux questions correspondantes sur les forums où ta cible traîne, et le mailler depuis tes anciens articles. Un seul travail de fond, six points de contact.\n\n" +
            "## Rythme réaliste et rafraîchissement\n\n" +
            "Mieux vaut un article approfondi et bien distribué par mois que quatre articles bâclés. La qualité l'emporte largement depuis les mises à jour « Helpful Content » de Google, qui ont laminé les blogs produits à la chaîne. Et n'oublie pas le stock existant : rafraîchir un article de 2024 qui glisse dans les classements (mettre à jour les chiffres, ajouter les nouvelles questions, réécrire le title) coûte quatre fois moins cher qu'en écrire un neuf et rapporte souvent plus, comme on l'a vu avec les quick wins Search Console.\n\n" +
            "## À toi\n\n" +
            "Pour le logiciel de devis artisans, propose un contenu TOFU, un MOFU et un BOFU, chacun avec la requête qu'il vise.\n\n" +
            "> Correction possible : TOFU : « Devis refusé pour non-conformité : les 5 mentions obligatoires » (requête « mentions obligatoires devis »). MOFU : « Tableur ou logiciel de devis : le vrai coût pour un artisan seul » (requête « tableur devis artisan »). BOFU : la page démo « Créer un devis conforme en 3 minutes, sans installation » (requête « logiciel devis artisan »). Le TOFU maille vers le MOFU, le MOFU vers la démo. Si tes trois idées visent la même requête ou la même zone, recommence en te demandant où en est la personne dans sa réflexion.",
        },
        {
          id: "l12",
          title: "Choisir ses réseaux sociaux organiques",
          type: "text",
          duration: "18 min",
          body:
            "## Tu ne peux pas être partout, et c'est tant mieux\n\n" +
            "La tentation est d'ouvrir un compte sur chaque plateforme « au cas où ». Résultat : six comptes moribonds, aucun impact. J'ai fait l'inventaire chez un client l'an dernier : cinq comptes créés en 2023, dernier post il y a sept mois sur quatre d'entre eux. Ces comptes fantômes sont pires que rien, ils signalent l'abandon. Le choix se fait sur un seul critère : **où se trouve ton persona et sous quel format il consomme**. Pas sur la plateforme à la mode.\n\n" +
            "## Le paysage, par usage réel\n\n" +
            "Un panorama sans langue de bois, orienté cible :\n\n" +
            "- **LinkedIn** : le canal B2B par excellence. Décideurs, indépendants, recrutement. Le contenu texte natif performe (les liens sortants dans le corps du post sont pénalisés par la portée, mets-les en commentaire). Si tu vends à des entreprises, commence là.\n" +
            "- **Instagram** : visuel, lifestyle, produits physiques, B2C. Fort sur la beauté, la mode, la food, le voyage, la déco. Reels pour la portée, feed pour la marque.\n" +
            "- **TikTok** : audience jeune mais qui s'élargit, portée organique encore correcte pour un compte neuf (rare aujourd'hui). Idéal si tu sais produire de la vidéo courte régulière et divertissante.\n" +
            "- **Pinterest** : sous-estimé. C'est un moteur de recherche visuel, pas un réseau social : une épingle continue de circuler et d'envoyer du trafic des mois après sa publication, là où un post Instagram est mort en 48 heures. Excellent pour la déco, le DIY, le mariage, la recette, la mode.\n" +
            "- **YouTube** : le meilleur investissement long terme si ton sujet se prête à la vidéo (tutoriels, démonstrations). C'est aussi le deuxième moteur de recherche du monde, et une vidéo bien titrée se comporte comme un article SEO : elle rapporte pendant des années.\n" +
            "- **X / Threads / Bluesky** : niche tech, média, temps réel. Faible portée organique pour une marque lambda.\n\n" +
            "## La portée organique s'est effondrée, dis-le toi une fois pour toutes\n\n" +
            "Sur une page Facebook, la portée organique tourne souvent autour de 1 à 5 % des abonnés : avec 10 000 fans, un post touche 100 à 500 personnes. Instagram et LinkedIn suivent la même pente, en moins brutal. Les algorithmes favorisent le contenu qui retient l'attention (vidéo, format natif) et poussent à payer pour la portée. Le social organique reste utile, mais comme **preuve sociale et relation** (le prospect qui vérifie que tu es vivant avant d'acheter), pas comme robinet à trafic massif et gratuit. Si ton plan de croissance repose sur « devenir viral », tu n'as pas de plan.\n\n" +
            "## Choisir : un exercice de croisement\n\n" +
            "Reprends ton persona de la partie 1, champ « canaux ». Croise avec tes capacités de production réelles : sais-tu faire de la vidéo chaque semaine ? As-tu des visuels produits ? Écris-tu bien ? Le bon canal est à l'intersection de « ma cible y est » et « je peux y produire du natif régulièrement ». Concentre-toi sur une ou deux plateformes maximum au départ, et deviens bon avant d'élargir. Un compte fort bat cinq comptes tièdes.\n\n" +
            "## Trois mois pour juger, avec des chiffres\n\n" +
            "Fixe ton cadre de décision avant de commencer, sinon tu abandonneras au premier creux ou tu t'accrocheras par habitude. Exemple B2B : un cabinet de conseil a tenu deux posts LinkedIn par semaine pendant un trimestre. Bilan à 90 jours, mesuré avec des UTM dans GA4 : 26 posts, 41 000 impressions, 380 visites sur le site et 9 demandes de rendez-vous, dont 3 signées. Aucun post viral, un canal rentable. Le même cabinet avait tenté Instagram l'année d'avant : 40 posts, 60 abonnés, 0 lead, arrêt justifié.\n\n" +
            "Deux précisions pour un test honnête : le trimestre de jugement commence après les quatre à six premières semaines d'apprentissage du format, pas au premier post ; et compare des efforts comparables (deux posts par semaine sur un canal contre six sur un autre ne dit rien du canal, seulement de ton investissement). Fixe tes seuils à l'avance, du type « au moins 300 visites et 5 leads au trimestre, sinon on réalloue », et juge sur le funnel, pas sur les likes.\n\n" +
            "## À toi\n\n" +
            "Trois activités : un cabinet de conseil RH pour PME, une marque de bijoux artisanaux, un plombier local. Attribue à chacune sa plateforme prioritaire et justifie en une phrase.\n\n" +
            "> Correction : le cabinet RH vise des dirigeants et DRH : LinkedIn, contenu texte d'expertise. La marque de bijoux vit par l'image : Instagram en priorité, Pinterest en second canal pour le trafic durable vers la boutique. Le plombier local n'a pas vraiment besoin de social organique : sa priorité est la fiche Google Business Profile et les avis clients, qui captent la recherche locale « plombier + ville ». Si tu as répondu TikTok pour le plombier, tu as choisi la mode, pas le persona.\n\n" +
            "## Aligner format et plateforme\n\n" +
            "Chaque plateforme a sa grammaire. Reposter la même image partout ne marche pas. Un même sujet devient un post texte structuré sur LinkedIn, un Reel de 20 secondes sur Instagram, une épingle verticale sur Pinterest. C'est là que le recyclage vu à la leçon précédente prend son sens : un fond, plusieurs formes natives. Et pense au reste du funnel : le social nourrit aussi le retargeting publicitaire (les visiteurs venus du social se recroisent en pub Meta) et la collecte email, qu'on voit dans la partie suivante.",
        },
        {
          id: "l13",
          title: "Cohérence de marque et rythme de publication",
          type: "text",
          duration: "17 min",
          body:
            "## La régularité bat l'intensité\n\n" +
            "Le compte social qui réussit n'est presque jamais le plus créatif, c'est le plus **régulier**. Les algorithmes récompensent la constance, et l'audience se construit une habitude. Trois posts par semaine tenus pendant un an battent une rafale de vingt posts sur une semaine suivie de trois mois de silence.\n\n" +
            "Fixe un rythme que tu peux **soutenir sans t'épuiser**. Mieux vaut promettre deux posts hebdomadaires et les tenir que viser le quotidien et abandonner au bout d'un mois. Fais le test de charge avant de t'engager : produis deux semaines de contenu d'avance. Si tu n'y arrives pas en stock, tu n'y arriveras pas en flux tendu avec le reste de l'activité sur les bras.\n\n" +
            "## Le pilier de contenu, pour ne pas sécher\n\n" +
            "Le syndrome de la page blanche vient du manque de cadre. Définis trois à cinq **piliers de contenu**, des thèmes récurrents liés à ton expertise et aux intérêts de ton persona. Le logiciel de devis pour artisans pourrait avoir :\n\n" +
            "1. Astuces d'organisation de chantier.\n" +
            "2. Réglementation et conformité (TVA, mentions obligatoires).\n" +
            "3. Coulisses et culture d'entreprise.\n" +
            "4. Témoignages et résultats clients.\n\n" +
            "Chaque post rentre dans un pilier. Tu ne cherches plus quoi dire, tu alternes tes thèmes. Ça garantit aussi que tu ne parles pas que de toi : le ratio sain penche largement vers le contenu utile plutôt que promotionnel. La règle informelle du métier tourne autour de 80 % utile ou divertissant, 20 % promotionnel. Les comptes qui inversent ce ratio voient leur portée fondre, l'algorithme lisant le désintérêt de l'audience.\n\n" +
            "## Une identité reconnaissable\n\n" +
            "La cohérence visuelle et de ton fait qu'on te reconnaît sans lire le nom du compte. Une palette de couleurs stable, une typographie, un angle éditorial, une manière de parler. Ce n'est pas de la coquetterie : la répétition d'une identité accélère la mémorisation, donc la confiance, donc la conversion plus tard. Documente-la en une page (couleurs, ton, mots interdits, exemples de posts réussis) pour que n'importe qui puisse publier sans te dénaturer, y compris le stagiaire ou l'agence qui prendra le relais.\n\n" +
            "Et souviens-toi : ton audience ne voit qu'une fraction de tes posts (les 1 à 5 % de portée de la leçon précédente). Se répéter n'est pas un défaut, c'est nécessaire. Un bon message mérite d'être reformulé cinq fois sous cinq angles différents. Personne d'autre que toi ne remarque la répétition.\n\n" +
            "## Le piège du calendrier parfait\n\n" +
            "Erreur de débutant classique : passer trois semaines à construire le système parfait (templates, outil de programmation, charte) sans rien publier. Le premier mois d'un compte sert à apprendre ce qui résonne, pas à exécuter un plan. Publie dix posts imparfaits, regarde lesquels génèrent des enregistrements et des partages, et construis le système autour des gagnants. L'outil de programmation (Buffer, Metricool, ou le planificateur natif de Meta Business Suite) se choisit après, pas avant.\n\n" +
            "## Un mois de calendrier, concrètement\n\n" +
            "À quoi ressemble « deux posts par semaine » pour le logiciel de devis, sur ses quatre piliers ? Semaine 1 : un post réglementation (« les 8 mentions obligatoires d'un devis, la sixième que tout le monde oublie ») et un témoignage client chiffré. Semaine 2 : une astuce d'organisation, photo de chantier à l'appui, et un post coulisses (la question support la plus fréquente du mois, avec la réponse). Semaine 3 : réglementation encore (TVA à 10 % ou 20 %, trois cas concrets) et un résultat client. Semaine 4 : une astuce, puis la reformulation du meilleur post du mois précédent sous un autre angle. Huit posts, zéro page blanche, et chaque post a un rôle : rendre service, prouver, ou humaniser.\n\n" +
            "## Recycler : un fond, cinq formes\n\n" +
            "Le calendrier tient parce que tu ne pars jamais de zéro. Un article de blog de 1 200 mots (le guide des mentions obligatoires, disons) se décline en : un carrousel LinkedIn de six slides, deux posts courts (une erreur fréquente chacun), une vidéo de 45 secondes face caméra, et un passage dans la newsletter mensuelle. Cinq contenus natifs pour un seul travail de fond. C'est l'inverse du copier-coller multi-plateforme vu à la leçon précédente : le fond est commun, la forme est native. Les comptes qui tiennent des années fonctionnent presque tous comme ça : du fond une fois par semaine, de la forme tous les jours.\n\n" +
            "## À toi\n\n" +
            "Écris les titres de tes huit posts du mois prochain, chacun rattaché à un pilier. Temps limite : 20 minutes.\n\n" +
            "> Correction (auto-évaluation) : compte les posts purement promotionnels. Plus de deux sur huit, et tu as inversé le ratio 80/20. Vérifie ensuite qu'au moins trois posts répondent à une vraie question client (entendue au support, en rendez-vous, ou vue dans Search Console) : c'est le test qui sépare un calendrier utile d'un calendrier décoratif. Et si les huit titres t'ont pris plus de 20 minutes, tes piliers sont trop vagues, resserre-les.\n\n" +
            "## Mesurer sans se noyer dans la vanité\n\n" +
            "Relie ceci au cadre de mesure honnête de la partie 1. Les likes et les followers sont des vanity metrics. Ce qui compte : le **taux d'engagement** (interactions / portée), les **enregistrements et partages** (signal fort d'utilité, bien plus que le like), et surtout le **trafic et les conversions** que le canal envoie vers ton site, traçables dans GA4 avec des UTM propres sur chaque lien en bio. Un compte avec 2 000 abonnés qui envoie trente clients qualifiés par mois vaut mieux qu'un compte à 30 000 followers muet côté chiffre d'affaires. Tu as maintenant tous les critères pour en juger toi-même.",
        },
        {
          id: "l14",
          title: "Quiz : Contenu et social organique",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Une entreprise ne publie que du contenu de type « pourquoi choisir notre produit ». Pourquoi son content marketing plafonne-t-il ?",
              options: [
                "Parce que ce contenu est trop long",
                "Parce qu'il ne parle qu'aux quelques pour cent déjà prêts à acheter (BOFU) et néglige les contenus de prise de conscience qui captent et font mûrir la majorité des prospects",
                "Parce que Google interdit ce type de contenu",
                "Parce qu'il faut publier plus souvent, peu importe le sujet",
              ],
              correctIndex: 1,
              explanation:
                "Le contenu de décision (BOFU) n'intéresse que la minorité déjà en phase d'achat. En négligeant le TOFU et le MOFU, l'entreprise se prive de la vaste majorité des prospects qu'elle pourrait attirer tôt et accompagner jusqu'à la décision. On couvre tout le parcours, pas seulement la fin.",
            },
            {
              id: "q10",
              prompt:
                "Tu vends un logiciel à des directions d'entreprise (B2B) et ton temps est limité. Sur quelle plateforme organique concentrer tes efforts en priorité ?",
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
                "La « règle des 20/80 » appliquée au content marketing recommande de :",
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
            {
              id: "q29",
              prompt:
                "Un plombier local avec deux heures par semaine pour son marketing hésite entre ouvrir un compte TikTok et soigner sa fiche Google Business Profile. Que lui conseilles-tu ?",
              options: [
                "TikTok, car la vidéo courte est le format qui monte",
                "La fiche Google Business Profile et la collecte d'avis clients, car sa clientèle le cherche par la recherche locale « plombier + ville », pas dans un fil de divertissement",
                "Les deux à fond en même temps",
                "Aucun des deux, un plombier n'a pas besoin de marketing",
              ],
              correctIndex: 1,
              explanation:
                "Le canal se choisit selon le comportement réel de la cible. Quelqu'un qui a une fuite tape « plombier + ville » dans Google : la fiche Business Profile, ses avis et ses photos captent cette intention chaude. TikTok demanderait un effort de production disproportionné pour toucher une audience majoritairement hors zone.",
            },
            {
              id: "q30",
              prompt:
                "Pourquoi une épingle Pinterest et une vidéo YouTube ont-elles un profil de rendement différent d'un post Instagram ?",
              options: [
                "Parce qu'elles coûtent plus cher à produire",
                "Parce que Pinterest et YouTube fonctionnent comme des moteurs de recherche : leur contenu continue d'être trouvé et de générer du trafic des mois ou des années après publication, quand un post de fil s'éteint en 48 heures",
                "Parce qu'Instagram interdit les liens",
                "Parce que leurs audiences sont plus âgées",
              ],
              correctIndex: 1,
              explanation:
                "Un post de fil (Instagram, LinkedIn, X) vit un à deux jours puis disparaît. Une épingle Pinterest ou une vidéo YouTube bien titrée est indexée et recherchable : elle se comporte comme un article SEO et compose dans le temps. À effort égal, le contenu recherchable construit un actif, le contenu de fil construit une présence.",
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
          duration: "19 min",
          body:
            "## L'email, le canal qu'on possède\n\n" +
            "Contrairement aux réseaux sociaux et au SEO, tu ne loues pas ton audience email à un algorithme : tu la possèdes. Personne ne peut couper ta portée du jour au lendemain. C'est pour ça que l'email reste, année après année, un des canaux au meilleur retour sur investissement (les études du secteur citent régulièrement 30 à 40 € générés par euro dépensé, à prendre comme un ordre de grandeur, pas une promesse). Il travaille surtout l'Activation, la Rétention et le Revenu du funnel AARRR.\n\n" +
            "On distingue deux grands usages : les **campagnes** (un email ponctuel à une liste : newsletter, promo) et les **séquences automatisées** (des emails déclenchés par un comportement, que Klaviyo appelle des flows). Les séquences sont le vrai levier de croissance parce qu'elles tournent toutes seules une fois écrites. Chez la plupart des e-commerces que j'ai audités, trois automatisations bien réglées génèrent plus de revenu que toutes les newsletters de l'année.\n\n" +
            "## La séquence de bienvenue, la plus rentable\n\n" +
            "Quand quelqu'un s'inscrit, il est au pic de son intérêt. Ne le laisse pas retomber. Une séquence de bienvenue de 3 à 5 emails, déclenchée à l'inscription, obtient des taux d'ouverture bien supérieurs à la moyenne (souvent 40-60 % sur le premier email) parce que la personne t'attend.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La séquence de bienvenue : cinq emails, un objectif chacun, du J0 au J+7\"}\n" +
            "<svg viewBox='0 0 640 260' role='img'><title>Chronologie d'une séquence de bienvenue en cinq emails</title>" +
            "<g font-family='ui-monospace, monospace' font-size='12'>" +
            "<line x1='30' y1='200' x2='610' y2='200' stroke='currentColor' stroke-opacity='0.5'/>" +
            "<g stroke='currentColor' stroke-opacity='0.5'><line x1='60' y1='195' x2='60' y2='205'/><line x1='185' y1='195' x2='185' y2='205'/><line x1='310' y1='195' x2='310' y2='205'/><line x1='435' y1='195' x2='435' y2='205'/><line x1='560' y1='195' x2='560' y2='205'/></g>" +
            "<g fill='currentColor' opacity='0.7'><text x='60' y='224' text-anchor='middle'>J0</text><text x='185' y='224' text-anchor='middle'>J+1</text><text x='310' y='224' text-anchor='middle'>J+3</text><text x='435' y='224' text-anchor='middle'>J+5</text><text x='560' y='224' text-anchor='middle'>J+7</text></g>" +
            "<rect x='16' y='30' width='88' height='120' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='60' y='55' text-anchor='middle' fill='currentColor'>1</text><text x='60' y='80' text-anchor='middle' fill='currentColor' opacity='0.8'>livrer la</text><text x='60' y='96' text-anchor='middle' fill='currentColor' opacity='0.8'>promesse</text>" +
            "<rect x='141' y='30' width='88' height='120' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='185' y='55' text-anchor='middle' fill='currentColor'>2</text><text x='185' y='80' text-anchor='middle' fill='currentColor' opacity='0.8'>histoire,</text><text x='185' y='96' text-anchor='middle' fill='currentColor' opacity='0.8'>connexion</text>" +
            "<rect x='266' y='30' width='88' height='120' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='310' y='55' text-anchor='middle' fill='currentColor'>3</text><text x='310' y='80' text-anchor='middle' fill='currentColor' opacity='0.8'>preuve,</text><text x='310' y='96' text-anchor='middle' fill='currentColor' opacity='0.8'>cas client</text>" +
            "<rect x='391' y='30' width='88' height='120' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='435' y='55' text-anchor='middle' fill='currentColor'>4</text><text x='435' y='80' text-anchor='middle' fill='currentColor' opacity='0.8'>lever</text><text x='435' y='96' text-anchor='middle' fill='currentColor' opacity='0.8'>l'objection</text>" +
            "<rect x='516' y='30' width='88' height='120' rx='3' class='fig-accent' fill='none' stroke-width='2'/>" +
            "<text x='560' y='55' text-anchor='middle' fill='currentColor'>5</text><text x='560' y='80' text-anchor='middle' fill='currentColor' opacity='0.8'>offre, CTA</text><text x='560' y='96' text-anchor='middle' fill='currentColor' opacity='0.8'>unique</text>" +
            "</g></svg>\n" +
            "```\n\n" +
            "1. **Email 1, immédiat** : livrer ce qui a été promis (le lead magnet, l'accès), remercier, poser le décor.\n" +
            "2. **Email 2, J+1** : l'histoire ou le problème que tu résous. Créer la connexion.\n" +
            "3. **Email 3, J+3** : la preuve. Étude de cas, témoignage, résultat concret.\n" +
            "4. **Email 4, J+5** : lever l'objection principale (celle que ton persona t'a donnée en partie 1).\n" +
            "5. **Email 5, J+7** : l'offre claire avec un appel à l'action unique.\n\n" +
            "## Le panier abandonné et les autres déclencheurs\n\n" +
            "En e-commerce, la séquence de **panier abandonné** est souvent l'automatisation la plus rentable du compte. Environ 70 % des paniers sont abandonnés ; une séquence de deux ou trois emails (rappel à H+1 ou H+4, second à J+1, parfois une incitation à J+2) récupère typiquement 3 à 8 % de ces ventes perdues. Sur une boutique à 30 000 € de CA mensuel, ça représente souvent 1 500 à 3 000 € par mois pour quelques heures de mise en place dans Klaviyo ou Brevo.\n\n" +
            "Autres déclencheurs utiles, dans l'ordre où je les installerais : post-achat (remerciement, conseils d'usage, puis cross-sell : elle travaille la Rétention), réengagement des inactifs à 90 jours, navigation abandonnée (la personne a vu un produit trois fois sans acheter). Le post-achat est le plus sous-estimé des trois : un simple « comment bien utiliser votre produit » à J+3 réduit les demandes de remboursement et prépare le deuxième achat, celui qui fait basculer la LTV.\n\n" +
            "## Écrire pour être lu\n\n" +
            "L'objet décide de l'ouverture : court, concret, curiosité ou bénéfice, jamais trompeur (« RE: » sur un email qui n'est pas une réponse, c'est grillé au deuxième envoi et ça nourrit les plaintes spam). Le corps va droit au but, on écrit comme on parle à une personne, pas à une liste. Un seul bouton d'action bien visible.\n\n" +
            "Règle d'or : **un objectif et un seul appel à l'action par email**. L'email qui propose trois choses n'en fait faire aucune. Et teste : la plupart des outils permettent l'A/B test sur l'objet. Sur des volumes de PME (2 000-10 000 envois), c'est le seul test email qui atteint une taille d'échantillon utile, commence par lui.\n\n" +
            "## À toi\n\n" +
            "Écris l'objet et la première phrase de l'email 4 (lever l'objection) pour le logiciel de devis artisans, sachant que l'objection n°1 relevée en interview était « encore un truc compliqué à installer ».\n\n" +
            "> Correction possible : objet « Rien à installer (promis) », première phrase : « La question qui revient le plus souvent avant de commencer : est-ce qu'il faut installer quelque chose ? Non. Vous créez votre premier devis dans le navigateur, depuis le téléphone, en moins de 3 minutes. » L'objet nomme l'objection frontalement, la première phrase y répond sans détour, et le reste de l'email peut dérouler une preuve (vidéo de 40 secondes d'un devis créé sur un parking de chantier). Si ton objet parlait de tes fonctionnalités plutôt que de son objection, recommence.",
        },
        {
          id: "l16",
          title: "Segmentation : le bon message au bon contact",
          type: "text",
          duration: "18 min",
          body:
            "## Envoyer la même chose à tout le monde est un gâchis\n\n" +
            "La newsletter unique envoyée à toute la base est le degré zéro de l'email marketing. Tes contacts n'ont ni les mêmes besoins, ni la même maturité, ni le même historique. La **segmentation** consiste à découper la liste pour envoyer un message pertinent à chaque groupe. C'est ce qui sépare un canal qui rapporte d'un canal qui fatigue les gens jusqu'au désabonnement.\n\n" +
            "Les campagnes segmentées obtiennent des taux d'ouverture et de clic nettement supérieurs aux envois de masse, et surtout elles génèrent moins de désabonnements et de plaintes spam, ce qui protège la délivrabilité de tout le compte (leçon suivante). Ordre de grandeur constaté : sur une base e-commerce de 12 000 contacts, la campagne « toute la base » plafonnait à 22 % d'ouverture et 1,1 % de clic ; la même offre envoyée aux seuls acheteurs de la catégorie concernée montait à 41 % d'ouverture et 4,7 % de clic, avec deux fois moins de désabonnements.\n\n" +
            "## Sur quels critères segmenter\n\n" +
            "Du plus simple au plus fin :\n\n" +
            "- **Cycle de vie** : prospect, client, client fidèle, inactif. Le message diffère radicalement. On ne parle pas à un nouveau prospect comme à un client de trois ans.\n" +
            "- **Comportement** : pages visitées, produits consultés, emails ouverts/cliqués, achats passés. Le comportement est le meilleur prédicteur de l'intérêt, bien plus que les données déclaratives.\n" +
            "- **Engagement** : actifs (ouvrent souvent) vs dormants. On ré-engage les dormants différemment, ou on finit par les retirer.\n" +
            "- **Données transactionnelles** : montant dépensé, fréquence, récence (le modèle RFM), catégorie de produits achetés.\n\n" +
            "Dans Klaviyo, ces critères se combinent en segments dynamiques (« a acheté au moins 2 fois ET n'a pas ouvert depuis 60 jours ») qui se mettent à jour seuls. Brevo et Mailchimp offrent l'équivalent. La mécanique n'est pas le problème ; le problème est de choisir trois segments utiles et de s'y tenir.\n\n" +
            "## Trois règles qui rapportent\n\n" +
            "Segment « a consulté la page tarifs deux fois cette semaine sans acheter » : c'est un signal d'intention chaud. On déclenche un email dédié qui lève l'objection prix (garantie, essai, comparatif de valeur). Segment « client qui n'a pas commandé depuis 90 jours » : séquence de réactivation avec une vraie raison de revenir (nouveauté, réassort, contenu utile), pas juste « -10 % on vous a vu partir ». La segmentation transforme des données dormantes en messages qui tombent au bon moment.\n\n" +
            "Troisième règle, moins intuitive : la **sunset policy**. Après deux campagnes de réactivation restées sans ouverture, le contact sort des envois réguliers. Ça semble contre-productif (« on perd des contacts ! ») mais c'est l'inverse : ces adresses ne lisaient déjà plus rien, et leur silence pesait sur ta réputation d'expéditeur. Quant au RFM cité plus haut, il se met en place en une heure dans Klaviyo : récence, fréquence, montant, trois colonnes qui suffisent à isoler les 20 % de clients qui font 60 % du chiffre. C'est à eux qu'on réserve les attentions (avant-première, geste au troisième achat), pas des remises générales qui rognent la marge sur des gens qui auraient acheté plein tarif.\n\n" +
            "Commence simple. Deux ou trois segments bien exploités (nouveaux vs clients vs inactifs) valent mieux qu'une usine à segments jamais utilisée. La segmentation utile est celle qui déclenche un message différent : si deux segments reçoivent le même email, c'est un seul segment.\n\n" +
            "## Le consentement n'est pas une formalité\n\n" +
            "Parlons RGPD, parce que la segmentation repose sur des données personnelles. Trois règles opérationnelles en France et en Europe : tu n'ajoutes personne à ta liste sans **consentement actif** (la case pré-cochée est interdite, l'inscription doit être un geste volontaire) ; tu dois pouvoir **prouver** ce consentement (date, source : ton outil l'enregistre, ne l'importe jamais d'un fichier acheté ou « récupéré ») ; et le B2B bénéficie d'une tolérance (prospection liée à la fonction professionnelle possible sans opt-in préalable, avec information et opt-out), mais le B2C, non. La CNIL sanctionne réellement : des amendes tombent chaque année pour de la prospection sans consentement. Au-delà du droit, c'est ton intérêt : une liste consentante ouvre, clique et ne te signale pas en spam. La conformité et la performance vont dans le même sens.\n\n" +
            "## Personnalisation, sans la caricature\n\n" +
            "La personnalisation ne se résume pas à insérer le prénom dans l'objet, un procédé éventé. La vraie personnalisation, c'est la **pertinence du contenu** au regard de ce que la personne a fait. Recommander un produit complémentaire à un achat récent vaut cent fois « Bonjour [Prénom] ». La donnée comportementale, croisée avec GA4 et ton outil d'emailing, rend ça possible sans y passer tes journées.\n\n" +
            "## À toi\n\n" +
            "Ta base : 8 000 contacts, dont 1 200 clients, dont 300 ont acheté deux fois ou plus, et 2 500 contacts n'ont rien ouvert depuis six mois. Tu lances un nouveau produit complémentaire de ton best-seller. À qui envoies-tu quoi ?\n\n" +
            "> Correction : trois envois différents. Aux 300 multi-acheteurs (et en priorité ceux qui possèdent le best-seller) : annonce en avant-première, ton complice, ce sont tes meilleurs répondeurs. Aux ~900 autres clients : annonce standard avec preuve et lien clair. Aux prospects actifs (jamais acheté mais engagés) : angle découverte, pourquoi ce produit existe. Et surtout : les 2 500 dormants ne reçoivent rien. Les inclure ferait chuter tes taux d'engagement et ta réputation d'expéditeur pour zéro vente ou presque. Eux relèvent d'une campagne de réactivation séparée, ou d'un nettoyage.",
        },
        {
          id: "l17",
          title: "Délivrabilité : arriver en boîte de réception",
          type: "text",
          duration: "18 min",
          body:
            "## Un email non délivré n'existe pas\n\n" +
            "Tu peux écrire l'email parfait : s'il tombe en spam, il ne s'est rien passé. La **délivrabilité** est la discipline invisible qui décide si tes messages atteignent la boîte de réception. Elle repose sur la technique et sur ta réputation d'expéditeur, que les fournisseurs (Gmail, Outlook) surveillent en permanence. Symptôme classique chez les PME : « nos taux d'ouverture sont passés de 35 % à 12 % en trois mois ». Neuf fois sur dix, ce n'est pas le contenu qui a empiré, c'est la réputation qui s'est dégradée.\n\n" +
            "## L'authentification, non négociable\n\n" +
            "Depuis février 2024, Gmail et Yahoo **exigent** l'authentification pour les expéditeurs en volume (seuil annoncé : 5 000 emails/jour, mais applique-le quel que soit ton volume). Trois enregistrements DNS à mettre en place :\n\n" +
            "- **SPF** (Sender Policy Framework) : déclare quels serveurs ont le droit d'envoyer en ton nom.\n" +
            "- **DKIM** (DomainKeys Identified Mail) : une signature cryptographique qui prouve que l'email n'a pas été falsifié.\n" +
            "- **DMARC** : la politique qui dit quoi faire si SPF ou DKIM échoue, et qui t'envoie des rapports.\n\n" +
            "Sans ces trois, tes emails partent au mieux en spam, au pire sont rejetés. Klaviyo, Brevo et Mailchimp guident la configuration pas à pas, mais l'ajout des enregistrements chez ton hébergeur DNS te revient. Vérifie ensuite avec un outil comme mail-tester.com : tu envoies un email à l'adresse fournie, il te rend une note sur 10 avec le détail de ce qui cloche. Vise 9 ou 10 avant tout envoi en volume.\n\n" +
            "## La réputation se gagne par le comportement\n\n" +
            "Les fournisseurs jugent ta réputation sur des signaux d'engagement. Ce qui la dégrade :\n\n" +
            "1. **Les plaintes spam** (les gens qui cliquent « signaler comme indésirable »). Au-delà de 0,3 % de plaintes, Gmail te sanctionne. C'est le seuil officiel, publié dans les Postmaster Guidelines, et il est vite atteint : 15 plaintes sur 5 000 envois suffisent.\n" +
            "2. **Les hard bounces** (adresses inexistantes). Une liste achetée ou vieille en est pleine et détruit la réputation.\n" +
            "3. **Le faible engagement** : si personne n'ouvre ni ne clique, les fournisseurs en déduisent que tes emails ne valent rien.\n" +
            "4. **Les spam traps** : de fausses adresses semées pour piéger ceux qui envoient sans consentement.\n\n" +
            "N'achète jamais de liste. Jamais. C'est le raccourci qui grille durablement un domaine d'envoi, la réputation se répare très lentement, et en Europe c'est en plus une violation du RGPD (aucun consentement valable ne peut accompagner un fichier acheté). Double peine : délivrabilité morte et risque juridique.\n\n" +
            "## L'hygiène de liste, la routine qui sauve\n\n" +
            "Une bonne délivrabilité tient à des habitudes simples : un opt-in propre (idéalement **double opt-in** : la personne confirme par un clic dans un email, ce qui élimine les fautes de frappe et fournit une preuve de consentement en béton, la CNIL le recommande d'ailleurs), le retrait régulier des adresses inactives et des bounces, une fréquence d'envoi raisonnable et régulière (les pics soudains de volume alertent les filtres), un lien de désabonnement visible en un clic (le cacher augmente les plaintes spam, l'inverse du but recherché, et c'est une exigence Gmail/Yahoo depuis 2024).\n\n" +
            "Nettoyer sa liste des contacts qui n'ouvrent plus depuis six mois fait souvent **remonter** les taux d'ouverture et la délivrabilité, même si la liste rétrécit. J'ai vu une base passer de 18 000 à 11 000 contacts au nettoyage, et le revenu par campagne augmenter de 20 % le trimestre suivant : les emails arrivaient enfin en boîte de réception principale. Une petite liste engagée bat une grosse liste morte, sur tous les plans.\n\n" +
            "## Le cas du nouveau domaine\n\n" +
            "Dernier piège de débutant : envoyer 20 000 emails le premier jour depuis un domaine tout neuf. Les filtres détestent les inconnus pressés. Un domaine d'envoi neuf se **chauffe** : quelques centaines d'emails aux contacts les plus engagés la première semaine, puis on double progressivement sur quatre à six semaines. Les outils sérieux proposent des plans de warm-up automatiques. Si tu migres d'outil (de Mailchimp vers Klaviyo par exemple), garde le même domaine d'envoi authentifié : c'est lui qui porte la réputation, pas l'outil.\n\n" +
            "## À toi\n\n" +
            "Diagnostic : une boutique voit ses ouvertures passer de 34 % à 13 % en deux mois. Sur la même période, elle a importé 6 000 adresses collectées lors d'un salon en 2022 et doublé sa fréquence d'envoi. Par où commences-tu ?\n\n" +
            "> Correction : l'import est le suspect n°1. Des adresses de 2022 jamais sollicitées contiennent des bounces et probablement des spam traps, et ces contacts qui n'attendaient rien génèrent des plaintes : la réputation plonge, et toute la base en pâtit, y compris les abonnés fidèles. Plan d'action dans l'ordre : suspendre les envois à l'import, vérifier plaintes et bounces dans l'outil et dans Google Postmaster Tools (gratuit, il montre ta réputation vue par Gmail), reprendre les envois vers les seuls contacts engagés des 90 derniers jours pour remonter les signaux, puis traiter l'import à part avec une campagne de re-permission (« souhaitez-vous toujours recevoir nos emails ? ») et supprimer les non-répondants. Le doublement de fréquence a aggravé les choses mais n'est pas la cause racine ; il se rediscutera une fois la réputation stabilisée. Compte six à huit semaines pour retrouver la boîte de réception principale : une réputation se dégrade en jours et se répare en mois, c'est toute l'asymétrie de la délivrabilité.",
        },
        {
          id: "l18",
          title: "Quiz : Email marketing",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Pourquoi la séquence de bienvenue obtient-elle généralement de bien meilleurs taux d'ouverture que les newsletters habituelles ?",
              options: [
                "Parce qu'elle est envoyée à minuit",
                "Parce qu'elle est déclenchée au moment où l'intérêt du contact est au maximum, juste après l'inscription, quand il attend justement de tes nouvelles",
                "Parce qu'elle contient plus d'images",
                "Parce qu'elle n'a pas besoin d'objet",
              ],
              correctIndex: 1,
              explanation:
                "Au moment de l'inscription, la personne est au pic de son intérêt et t'attend. C'est pourquoi le premier email de bienvenue atteint couramment 40-60 % d'ouverture. Cette fenêtre d'attention est la plus rentable du cycle de vie : il faut en profiter tant qu'elle est chaude.",
            },
            {
              id: "q14",
              prompt:
                "Une entreprise achète une liste de 50 000 emails pour accélérer sa croissance. Quel est le risque principal ?",
              options: [
                "Aucun, c'est un gain de temps",
                "Hard bounces massifs, plaintes spam et spam traps qui détruisent durablement la réputation du domaine d'envoi, plus une violation du RGPD puisqu'aucun consentement valable n'accompagne un fichier acheté",
                "Un objet trop long",
                "Un taux de clic trop élevé",
              ],
              correctIndex: 1,
              explanation:
                "Une liste achetée est pleine d'adresses invalides et de spam traps, et les destinataires n'ont jamais consenti, donc ils signalent en spam. Au-delà de 0,3 % de plaintes, Gmail sanctionne. S'y ajoute le risque CNIL : la prospection B2C sans consentement est illégale. Double peine, délivrabilité et juridique.",
            },
            {
              id: "q15",
              prompt:
                "Depuis 2024, que doivent impérativement mettre en place les expéditeurs qui envoient de l'email en volume vers Gmail et Yahoo ?",
              options: [
                "Uniquement un objet accrocheur",
                "L'authentification par SPF, DKIM et DMARC, plus un désabonnement en un clic, faute de quoi les emails partent en spam ou sont rejetés",
                "Un abonnement premium chez leur outil d'emailing",
                "Des images en haute résolution",
              ],
              correctIndex: 1,
              explanation:
                "Depuis février 2024, Gmail et Yahoo exigent SPF, DKIM et DMARC pour les expéditeurs en volume, ainsi qu'un lien de désabonnement en un clic et un taux de plaintes sous 0,3 %. Ces enregistrements DNS prouvent que tu es autorisé à envoyer au nom du domaine. Sans eux, la délivrabilité s'effondre quel que soit le contenu.",
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
                "Les fournisseurs interprètent le faible engagement comme un signal négatif sur l'ensemble de tes envois. En retirant les dormants, on concentre les envois sur des gens qui ouvrent, ce qui remonte les taux moyens et rassure Gmail/Outlook. Une petite liste engagée délivre mieux qu'une grosse liste morte.",
            },
            {
              id: "q31",
              prompt:
                "Une boutique en ligne fait 30 000 € de CA mensuel et 70 % de ses paniers sont abandonnés. Elle installe une séquence de panier abandonné qui récupère 5 % de ces ventes perdues. Quel ordre de grandeur de revenu mensuel supplémentaire peut-elle espérer ?",
              options: [
                "Environ 150 €",
                "Environ 3 500 € : si 30 000 € représentent les 30 % de paniers convertis, les paniers abandonnés pèsent ~70 000 €, et 5 % de récupération donne ~3 500 €",
                "Environ 21 000 €",
                "Impossible à estimer sans connaître le taux d'ouverture",
              ],
              correctIndex: 1,
              explanation:
                "Si 30 000 € correspondent aux 30 % de paniers qui aboutissent, la valeur des paniers abandonnés est d'environ 30 000 × (70/30) = 70 000 €. En récupérer 5 % rapporte ~3 500 € par mois, pour quelques heures de configuration dans Klaviyo ou Brevo. C'est pourquoi cette automatisation est souvent la plus rentable du compte.",
            },
            {
              id: "q32",
              prompt:
                "Pour une newsletter B2C en France, quelle pratique d'inscription est conforme au RGPD ?",
              options: [
                "Une case pré-cochée « je souhaite recevoir la newsletter » dans le tunnel de commande",
                "Un consentement actif (case décochée par défaut ou formulaire dédié), dont l'outil enregistre la date et la source, idéalement confirmé en double opt-in",
                "L'ajout automatique de tout acheteur à toutes les listes de l'entreprise",
                "L'import d'un fichier d'adresses fourni par un partenaire",
              ],
              correctIndex: 1,
              explanation:
                "En B2C, le consentement doit être un geste actif, libre et prouvable : case pré-cochée interdite, et il faut pouvoir démontrer qui a consenti, quand et comment. Le double opt-in ajoute une preuve solide et nettoie les fautes de frappe. Au-delà du droit, une liste consentante est aussi celle qui délivre et convertit le mieux.",
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
          duration: "19 min",
          body:
            "## Deux façons opposées de trouver des clients\n\n" +
            "La confusion la plus coûteuse en publicité, c'est de traiter Google Ads et Meta Ads comme des variantes du même truc. Ce sont deux logiques opposées, et choisir la mauvaise pour son offre brûle du budget vite. J'ai récupéré un compte où un institut de formation avait dépensé 4 200 € sur Meta pour vendre une formation « habilitation électrique » que les gens cherchent activement sur Google quand leur employeur l'exige. Coût par lead Meta : 61 €. La même offre en Google Search, un mois plus tard : 14 € le lead. Rien d'autre n'avait changé, juste le canal.\n\n" +
            "**Google Ads capte une demande qui existe déjà.** Quelqu'un tape « réparation chaudière Toulouse », il a un problème maintenant, il cherche une solution. Tu te places sur son chemin. C'est du marketing de **captation** : la personne est en bas du funnel, prête à agir. Le taux de conversion est élevé mais le clic coûte cher parce que tout le monde veut cette intention chaude.\n\n" +
            "**Meta Ads (Facebook, Instagram) crée une demande.** Personne ne va sur Instagram pour acheter ton produit. Tu interromps quelqu'un qui regardait des photos de vacances avec une offre qu'il ne cherchait pas. C'est du marketing d'**interruption** : tu cibles par centres d'intérêt et comportements, pas par intention. Le clic coûte moins cher mais convertit moins bien, parce que la personne n'était pas en recherche.\n\n" +
            "## Comment choisir\n\n" +
            "La règle de départ :\n\n" +
            "- Si les gens **cherchent activement** ta solution (services locaux, problèmes urgents, produits qu'on tape dans Google), commence par **Google Ads Search**.\n" +
            "- Si ton produit se **découvre visuellement** ou crée un désir (mode, déco, food, gadgets, offres impulsives), commence par **Meta**.\n" +
            "- Si personne ne connaît encore la catégorie de ton produit (innovation), Google Search ne marchera pas : personne ne tape ce qu'il ignore. Meta pour créer la demande.\n\n" +
            "## Les ordres de grandeur 2026\n\n" +
            "Le CPC (coût par clic) varie énormément selon le secteur, et c'est normal : il reflète la valeur d'un client.\n\n" +
            "| Contexte | CPC typique | CTR typique |\n" +
            "| --- | --- | --- |\n" +
            "| Google Search, e-commerce grand public FR | 0,50-2 € | 3-6 % |\n" +
            "| Google Search, assurance / juridique / B2B logiciel | 5-15 € et plus | 3-5 % |\n" +
            "| Meta, e-commerce B2C FR | 0,30-0,90 € | 0,9-1,5 % |\n" +
            "| Meta, lead gen B2B | 1-3 € | 0,7-1,2 % |\n\n" +
            "Des CPC à 12 € ne signifient pas que le canal est « trop cher » : dans le juridique, un dossier vaut des milliers d'euros, donc un lead à 150 € reste rentable. Ne compare jamais deux plateformes sur le CPC. Un clic Google à 3 € qui convertit à 8 % donne un client à 37,50 € ; un clic Meta à 0,50 € qui convertit à 0,5 % donne un client à 100 €. Le clic « cher » est ici deux fois et demie plus rentable. Ce qui compte est le coût par **client**, pas par clic.\n\n" +
            "## Le budget minimum réaliste\n\n" +
            "Erreur de débutant : lancer Meta à 5 € par jour « pour tester ». À ce rythme, tu accumules quelques conversions par semaine, l'algorithme n'a jamais assez de données pour apprendre, et tu conclus au bout d'un mois que « ça ne marche pas » après avoir dépensé 150 € pour rien. Calibre à l'envers : si ton coût par acquisition cible est 25 €, il te faut au moins 40-50 conversions pour juger, donc un budget de test de l'ordre de 1 000 à 1 250 €, dépensé sur trois à quatre semaines. Si ce montant te fait mal, ce n'est pas grave : ça veut dire que ton canal de départ est le SEO et l'email, pas la pub. La pub accélère une machine qui marche, elle ne répare pas une machine cassée.\n\n" +
            "## Consentement et signaux, le contexte européen\n\n" +
            "En Europe, le ciblage et la mesure publicitaires dépendent du consentement (RGPD et bannières cookies). Concrètement : une partie de tes visiteurs refuse le suivi, donc les plateformes voient moins de conversions qu'il n'y en a réellement, et le retargeting touche moins de monde qu'avant 2021. Les réponses techniques existent (API de conversion côté serveur, Consent Mode chez Google) et ton prestataire ou ta plateforme e-commerce les propose en standard. Retiens surtout la conséquence stratégique : les campagnes s'appuient de plus en plus sur le ciblage large et le creative, de moins en moins sur le pistage fin. On le voit dans la leçon suivante.\n\n" +
            "## Et les autres régies ?\n\n" +
            "Même grille de lecture ailleurs. LinkedIn Ads = captation de profils professionnels précis, mais des CPC à 8-14 € qui n'ont de sens qu'avec un panier B2B élevé. TikTok Ads = pure création de demande, CPM bas, mais exige de la vidéo native qui ne ressemble pas à une pub. Microsoft Ads (Bing) = la même logique que Google Search avec moins de volume, des CPC souvent 20 à 30 % plus bas et une audience plus âgée : un bon second canal quand ton Google Search est rentable et plafonne.\n\n" +
            "## Ne pas opposer, séquencer\n\n" +
            "À terme, les deux se complètent. Meta crée la notoriété et alimente le haut du funnel, Google capte la demande que Meta a contribué à créer, le retargeting rattrape ceux qui ont hésité. Mais quand on débute avec un petit budget, on choisit **un** canal, celui qui colle à la logique de son offre, et on le maîtrise avant d'élargir.",
        },
        {
          id: "l20",
          title: "Structurer une campagne",
          type: "text",
          duration: "20 min",
          body:
            "## Une structure claire ou un budget qui fuit\n\n" +
            "Une campagne mal structurée ne se pilote pas : on ne sait pas ce qui marche, on coupe à l'aveugle. La structure sert à isoler les variables pour lire les résultats et allouer le budget là où il performe.\n\n" +
            "## L'anatomie d'un compte\n\n" +
            "La hiérarchie est la même dans les grandes lignes sur les deux plateformes :\n\n" +
            "```figure\n" +
            "{\"caption\": \"La hiérarchie d'un compte : l'objectif en haut, le ciblage au milieu, le message en bas\"}\n" +
            "<svg viewBox='0 0 640 320' role='img'><title>Structure d'un compte Google Ads et Meta Ads</title>" +
            "<g font-family='ui-monospace, monospace' font-size='12'>" +
            "<rect x='200' y='16' width='240' height='44' rx='3' fill='currentColor' fill-opacity='0.1' stroke='currentColor' stroke-opacity='0.6'/>" +
            "<text x='320' y='34' text-anchor='middle' fill='currentColor'>CAMPAGNE</text>" +
            "<text x='320' y='50' text-anchor='middle' fill='currentColor' opacity='0.7'>objectif + budget</text>" +
            "<rect x='60' y='110' width='240' height='44' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='180' y='128' text-anchor='middle' fill='currentColor'>GROUPE / AD SET A</text>" +
            "<text x='180' y='144' text-anchor='middle' fill='currentColor' opacity='0.7'>ciblage : theme devis</text>" +
            "<rect x='340' y='110' width='240' height='44' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='460' y='128' text-anchor='middle' fill='currentColor'>GROUPE / AD SET B</text>" +
            "<text x='460' y='144' text-anchor='middle' fill='currentColor' opacity='0.7'>ciblage : theme facture</text>" +
            "<g class='fig-accent'><rect x='24' y='210' width='150' height='40' rx='3' fill='none' stroke-width='2'/><rect x='194' y='210' width='150' height='40' rx='3' fill='none' stroke-width='2'/><rect x='364' y='210' width='150' height='40' rx='3' fill='none' stroke-width='2'/></g>" +
            "<text x='99' y='234' text-anchor='middle' fill='currentColor'>Annonce 1</text>" +
            "<text x='269' y='234' text-anchor='middle' fill='currentColor'>Annonce 2</text>" +
            "<text x='439' y='234' text-anchor='middle' fill='currentColor'>Annonce 3</text>" +
            "<g stroke='currentColor' stroke-opacity='0.5'><line x1='320' y1='60' x2='180' y2='110'/><line x1='320' y1='60' x2='460' y2='110'/><line x1='180' y1='154' x2='99' y2='210'/><line x1='180' y1='154' x2='269' y2='210'/><line x1='460' y1='154' x2='439' y2='210'/></g>" +
            "<text x='24' y='300' fill='currentColor' opacity='0.7'>Google : campagne &gt; groupe d'annonces &gt; annonces · Meta : campagne &gt; ad set &gt; ads</text>" +
            "</g></svg>\n" +
            "```\n\n" +
            "- **Campagne** : le niveau de l'objectif et souvent du budget. On y définit ce qu'on optimise (ventes, prospects, trafic).\n" +
            "- **Groupe d'annonces (Google) / Ensemble de publicités (Meta)** : le niveau du **ciblage**. Sur Google, un groupe = un thème de mots-clés serré. Sur Meta, un ensemble = une audience.\n" +
            "- **Annonce** : le message et le visuel montrés à la personne.\n\n" +
            "Le principe cardinal : **une intention par groupe d'annonces**. Ne mélange pas « logiciel de devis » et « logiciel de facturation » dans le même groupe, sinon tes annonces ne peuvent pas coller à chaque recherche. Un groupe = un thème = des annonces spécifiques.\n\n" +
            "## Sur Google, les mots-clés et leurs pièges\n\n" +
            "Les types de correspondance décident de qui voit tes annonces :\n\n" +
            "- **Exact** `[devis artisan]` : uniquement des requêtes très proches. Contrôle maximal.\n" +
            "- **Expression** `\"devis artisan\"` : contient l'expression. Compromis.\n" +
            "- **Large** : Google élargit à ce qu'il juge lié. Portée maximale, gaspillage assuré sans surveillance.\n\n" +
            "Et surtout, les **mots-clés à exclure** (negative keywords). C'est là qu'on économise le plus. Audit vécu : sur un compte en requête large sans exclusions, 38 % du budget du mois partait sur des requêtes contenant « gratuit », « emploi », « formation » et « définition », toutes sans valeur pour un logiciel payant. 570 € sur 1 500 € évaporés. Le **rapport sur les termes de recherche** montre les vraies requêtes qui ont déclenché tes annonces : consulte-le chaque semaine les deux premiers mois, puis chaque mois, et nourris ta liste d'exclusions à chaque passage.\n\n" +
            "## Sur Meta, l'audience s'automatise, le creative devient le ciblage\n\n" +
            "Meta a beaucoup automatisé le ciblage (Advantage+), en partie parce que le consentement européen a réduit les signaux disponibles. Le vrai levier de performance est devenu le **creative** : la vidéo, l'image, l'accroche. C'est lui qui « cible » désormais : une vidéo qui parle d'artisans dans leur camionnette sélectionne toute seule les artisans dans l'enchère. On teste plusieurs angles créatifs, l'algorithme trouve l'audience. C'est l'inverse de l'ancien réflexe de sur-cibler des audiences étroites.\n\n" +
            "## La boucle de test créatif\n\n" +
            "```figure\n" +
            "{\"caption\": \"La boucle de test créatif : on itère sur les angles, pas sur les réglages\"}\n" +
            "<svg viewBox='0 0 640 300' role='img'><title>Boucle d'itération des créas publicitaires</title>" +
            "<g font-family='ui-monospace, monospace' font-size='12'>" +
            "<rect x='40' y='30' width='230' height='52' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='155' y='52' text-anchor='middle' fill='currentColor'>1. Hypothèse d'angle</text>" +
            "<text x='155' y='70' text-anchor='middle' fill='currentColor' opacity='0.7'>objection ou bénéfice persona</text>" +
            "<rect x='370' y='30' width='230' height='52' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='485' y='52' text-anchor='middle' fill='currentColor'>2. 3-5 variantes</text>" +
            "<text x='485' y='70' text-anchor='middle' fill='currentColor' opacity='0.7'>même angle, formes différentes</text>" +
            "<rect x='370' y='190' width='230' height='52' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='485' y='212' text-anchor='middle' fill='currentColor'>3. 7-14 j de données</text>" +
            "<text x='485' y='230' text-anchor='middle' fill='currentColor' opacity='0.7'>sans toucher aux réglages</text>" +
            "<rect x='40' y='190' width='230' height='52' rx='3' class='fig-accent' fill='none' stroke-width='2'/>" +
            "<text x='155' y='212' text-anchor='middle' fill='currentColor'>4. Couper / scaler</text>" +
            "<text x='155' y='230' text-anchor='middle' fill='currentColor' opacity='0.7'>le gagnant nourrit l'hypothèse suivante</text>" +
            "<g stroke='currentColor' stroke-opacity='0.6' fill='none'><path d='M 270 56 L 370 56'/><path d='M 485 82 L 485 190'/><path d='M 370 216 L 270 216'/><path d='M 155 190 L 155 82'/></g>" +
            "</g></svg>\n" +
            "```\n\n" +
            "Ne lance jamais avec une seule annonce. Teste au moins 3 à 5 variantes par groupe, laisse tourner 7 à 14 jours sans y toucher, coupe les perdantes, garde la gagnante comme référence à battre, et formule l'hypothèse suivante à partir de ce qu'elle t'apprend. Si l'angle « conformité » bat l'angle « gain de temps » de 40 % sur le coût par lead, ton persona vient de te parler : décline la conformité sous trois nouvelles formes au tour suivant. Chaque itération rend la suivante moins chère.\n\n" +
            "## Laisser respirer l'apprentissage\n\n" +
            "Les deux plateformes ont une **phase d'apprentissage** : l'algorithme a besoin d'un volume de conversions (l'ordre de grandeur souvent cité est ~50 conversions par ensemble et par semaine sur Meta) avant de se stabiliser. Ne coupe pas et ne modifie pas une campagne tous les deux jours, tu la renvoies sans cesse en apprentissage. La panique de J+3 (« ça ne convertit pas, on change tout ! ») est l'erreur la plus répandue chez les débutants, et elle garantit de ne jamais rien apprendre. Décide après un volume de données suffisant, pas sur trois clics.",
        },
        {
          id: "l21",
          title: "ROAS, CAC et LTV : juger la rentabilité",
          type: "text",
          duration: "20 min",
          body:
            "## Le trafic n'est pas l'objectif, le profit l'est\n\n" +
            "On peut faire tourner des campagnes magnifiques qui ruinent l'entreprise. Trois indicateurs séparent la pub qui enrichit de la pub qui appauvrit : le ROAS, le CAC et la LTV. Les confondre ou en ignorer un mène droit au mur. On va les calculer sur une campagne complète, ligne à ligne.\n\n" +
            "## Une campagne réelle, du budget au verdict\n\n" +
            "Boutique e-commerce, panier moyen 62 €, marge brute 55 % (après coût produit et livraison). Campagne Meta sur un mois :\n\n" +
            "| Ligne | Valeur | Calcul |\n" +
            "| --- | --- | --- |\n" +
            "| Budget dépensé | 1 500 € | 50 €/jour × 30 j |\n" +
            "| CPM constaté | 9,80 € | facturation à l'impression |\n" +
            "| Impressions | 153 000 | 1 500 / 9,80 × 1 000 |\n" +
            "| CTR | 1,3 % | dans la norme Meta B2C |\n" +
            "| Clics | 1 989 | 153 000 × 1,3 % |\n" +
            "| Taux de conversion | 2,4 % | landing correcte |\n" +
            "| Ventes | 48 | 1 989 × 2,4 % |\n" +
            "| Chiffre d'affaires | 2 976 € | 48 × 62 € |\n\n" +
            "**ROAS** (Return On Ad Spend) = CA / dépense = 2 976 / 1 500 = **1,98**. Presque 2 € récupérés par euro dépensé. Bonne nouvelle ? Continue le calcul : marge brute = 2 976 × 55 % = 1 637 €. Moins les 1 500 € de pub : il reste **137 €** de contribution. Un mois de travail, 137 €. Le ROAS de 1,98 « paraissait » correct ; la marge dit la vérité.\n\n" +
            "La règle générale : **ROAS d'équilibre = 1 / marge**. Avec 55 % de marge, l'équilibre est à 1,82. Notre campagne à 1,98 est à peine au-dessus de la ligne de flottaison. Avec 25 % de marge, l'équilibre serait à 4 : un ROAS de 3, qui semble flatteur, y perdrait de l'argent à chaque vente. C'est exactement le mécanisme derrière le classique « on vend plein mais on ne gagne rien ».\n\n" +
            "## CAC : ce que coûte un client\n\n" +
            "Le **CAC** (coût d'acquisition client) = total dépensé en marketing / nombre de nouveaux clients. Ici : 1 500 / 48 = **31,25 €**. Attention au piège du périmètre : le vrai CAC inclut la créa, les outils, ton temps. Si tu as payé 300 € de visuels ce mois-là, ton CAC réel est (1 500 + 300) / 48 = 37,50 €.\n\n" +
            "## LTV : ce que rapporte un client, dans le temps\n\n" +
            "Le CAC seul ne dit rien. La **LTV** (Lifetime Value) estime la marge totale qu'un client génère sur toute sa relation avec toi. Pour notre boutique, les données de rétention disent : 30 % des clients rachètent, et un client fait en moyenne 1,9 commande au total. LTV = 62 € × 1,9 × 55 % = **64,80 €** de marge par client.\n\n" +
            "Le verdict complet de la campagne change : chaque client coûte 31,25 € et rapporte 64,80 € de marge sur sa durée de vie. Ratio LTV/CAC = 64,80 / 31,25 = **2,1**. La campagne qui semblait à peine rentable sur la première commande construit en réalité un actif, grâce à la rétention.\n\n" +
            "```figure\n" +
            "{\"caption\": \"CAC vs LTV : la première commande ne dit pas tout, la rétention finance l'acquisition\"}\n" +
            "<svg viewBox='0 0 640 300' role='img'><title>Calcul du CAC, de la LTV et du ratio</title>" +
            "<g font-family='ui-monospace, monospace' font-size='12'>" +
            "<rect x='24' y='24' width='280' height='96' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='40' y='48' fill='currentColor'>CAC = dépenses / clients</text>" +
            "<text x='40' y='72' fill='currentColor' opacity='0.75'>1 500 € / 48 = 31,25 €</text>" +
            "<text x='40' y='100' fill='currentColor' opacity='0.6'>(+ créa, outils, temps)</text>" +
            "<rect x='336' y='24' width='280' height='96' rx='3' fill='currentColor' fill-opacity='0.07' stroke='currentColor' stroke-opacity='0.55'/>" +
            "<text x='352' y='48' fill='currentColor'>LTV = panier × cmd × marge</text>" +
            "<text x='352' y='72' fill='currentColor' opacity='0.75'>62 € × 1,9 × 55 % = 64,80 €</text>" +
            "<text x='352' y='100' fill='currentColor' opacity='0.6'>la rétention fait la LTV</text>" +
            "<rect x='120' y='170' width='400' height='60' rx='3' class='fig-accent' fill='none' stroke-width='2'/>" +
            "<text x='320' y='196' text-anchor='middle' fill='currentColor'>LTV / CAC = 64,80 / 31,25 = 2,1</text>" +
            "<text x='320' y='218' text-anchor='middle' fill='currentColor' opacity='0.75'>cible saine ≈ 3 · &lt; 1 = on perd · &gt; 5 = on sous-investit</text>" +
            "<g stroke='currentColor' stroke-opacity='0.5'><line x1='164' y1='120' x2='250' y2='170'/><line x1='476' y1='120' x2='390' y2='170'/></g>" +
            "<text x='24' y='274' fill='currentColor' opacity='0.7'>Juger une campagne sur la première commande = fermer des campagnes rentables.</text>" +
            "</g></svg>\n" +
            "```\n\n" +
            "## Le ratio qui décide de tout\n\n" +
            "La règle de référence : un business sain vise un ratio **LTV/CAC d'environ 3 pour 1**. En dessous de 1, tu perds de l'argent sur chaque client. Autour de 1, tu survis sans marge pour grandir. À 3 ou plus, tu peux réinvestir et scaler. Au-delà de 5, tu sous-investis probablement en acquisition et tu laisses de la croissance sur la table. Notre boutique à 2,1 a deux leviers : baisser le CAC (meilleurs creatives, meilleure landing) ou monter la LTV (emails post-achat, abonnement, bundle). C'est la LTV qui autorise à payer cher un client : une entreprise avec une forte rétention peut se permettre un CAC que ses concurrents jugent suicidaire.\n\n" +
            "## Le délai de récupération\n\n" +
            "Dernier chiffre, surtout en abonnement : le **payback period**, le temps qu'il faut pour récupérer le CAC. Un CAC récupéré en 3 mois te laisse de la trésorerie pour réinvestir ; récupéré en 18 mois, il t'étrangle même si la LTV finale est bonne. Rentabilité et trésorerie sont deux questions distinctes : les campagnes se jugent sur les deux.\n\n" +
            "## À toi\n\n" +
            "Un SaaS dépense 3 000 €/mois en Google Ads. CPC 2,50 €, taux d'essai 6 %, essai → payant 15 %, abonnement 29 €/mois avec 80 % de marge, durée de vie moyenne 14 mois. Calcule CAC, LTV et le ratio.\n\n" +
            "> Correction : 3 000 / 2,50 = 1 200 clics. Essais : 1 200 × 6 % = 72. Clients payants : 72 × 15 % = 10,8, disons 10 ou 11 par mois, prenons 10,8 pour le calcul. CAC = 3 000 / 10,8 = 278 €. LTV = 29 € × 80 % × 14 = 325 €. Ratio = 325 / 278 = **1,17**. Verdict : la machine tourne à peine au-dessus de l'équilibre, et le payback est long (278 € récupérés à 23,20 € de marge par mois = 12 mois pour rembourser le CAC). Ce SaaS ne doit pas scaler ce canal en l'état : il doit d'abord améliorer essai → payant (15 % est faible) ou la rétention. Si tu as trouvé un ratio proche de 1,2 et conclu « on n'augmente pas le budget », tu as tout compris.",
        },
        {
          id: "l22",
          title: "Quiz : Publicité payante",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Tu lances un produit d'une catégorie totalement nouvelle que personne ne connaît encore. Pourquoi Google Search Ads est-il un mauvais premier choix ?",
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
                "Ta marge est de 25 %. Tes campagnes affichent un ROAS de 3. Que se passe-t-il réellement ?",
              options: [
                "Tu es rentable, un ROAS de 3 est toujours bon",
                "Tu perds de l'argent : le ROAS d'équilibre est 1 / 0,25 = 4, donc un ROAS de 3 est sous le seuil de rentabilité malgré une apparence flatteuse",
                "Tu es exactement à l'équilibre",
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
                "La seconde est bien plus saine : son ratio LTV/CAC est de 4 (au-dessus de la cible de 3), tandis que la première, à 1,2, gagne à peine de quoi survivre et ne peut pas réinvestir",
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
            {
              id: "q33",
              prompt:
                "Campagne Meta : 1 500 € dépensés, 48 ventes, panier moyen 62 €, marge brute 55 %. Le ROAS est de 1,98. Quelle est la contribution réelle (marge moins pub) ?",
              options: [
                "1 476 €, puisque le ROAS est presque de 2",
                "Environ 137 € : le CA fait 2 976 €, la marge brute 2 976 × 55 % = 1 637 €, moins 1 500 € de pub il reste 137 €",
                "2 976 €, le chiffre d'affaires généré",
                "Une perte de 500 €",
              ],
              correctIndex: 1,
              explanation:
                "Le ROAS compare le CA à la dépense mais ignore le coût des produits. Il faut passer par la marge : 48 × 62 = 2 976 € de CA, × 55 % = 1 637 € de marge, moins 1 500 € de pub = 137 €. Un ROAS proche de 2 peut donc cacher une campagne à peine rentable. Le ROAS d'équilibre se calcule avec 1 / marge (ici 1,82).",
            },
            {
              id: "q34",
              prompt:
                "Sur Meta en 2026, avec le ciblage largement automatisé (Advantage+) et les signaux réduits par le consentement RGPD, quel est devenu le principal levier de performance d'une campagne ?",
              options: [
                "L'empilement d'audiences très étroites définies à la main",
                "Le creative : les angles, visuels et vidéos testés en boucle, car c'est le message qui sélectionne l'audience dans l'enchère",
                "Le changement de budget quotidien pour suivre les résultats",
                "Le nombre de campagnes actives en parallèle",
              ],
              correctIndex: 1,
              explanation:
                "Meta a automatisé le ciblage, en partie parce que le consentement européen a réduit les données de pistage. Le creative fait désormais office de ciblage : une pub qui parle à un persona précis attire ce persona. D'où la boucle de test : 3-5 variantes, 7-14 jours de données, couper, décliner le gagnant.",
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
          duration: "18 min",
          videoLabel: "Démo : marquer un événement en conversion et lire les rapports d'engagement dans GA4",
          body:
            "## GA4 pense en événements, pas en pages\n\n" +
            "Si tu as connu l'ancien Universal Analytics, oublie le modèle sessions/pages vues comme unité centrale. GA4 modélise **tout comme un événement** : une page vue est un événement, un clic est un événement, un achat est un événement. Cette bascule déroute au début, puis elle libère : tu mesures des actions réelles, pas des chargements de page. Un site vitrine où les gens lisent trois pages sans jamais te contacter et un site où une page suffit pour déclencher un appel se ressemblent en « pages vues » ; en événements, ils n'ont rien à voir.\n\n" +
            "## Les événements, quatre familles\n\n" +
            "1. **Automatiques** : collectés sans rien faire (`first_visit`, `session_start`).\n" +
            "2. **Mesure améliorée** : activables en un clic dans les paramètres du flux (scroll, clics sortants, recherche interne, lecture vidéo, téléchargement de fichier). Active-les dès l'installation, c'est gratuit et tu ne peux pas récupérer rétroactivement ce que tu n'as pas collecté.\n" +
            "3. **Recommandés** : des noms standardisés par Google pour les actions courantes (`purchase`, `sign_up`, `add_to_cart`, `generate_lead`). Utilise ces noms **exacts** : ils débloquent des rapports préconstruits et l'import propre vers Google Ads. Un événement maison `achat_valide` fonctionne, mais tu perds tout ce que Google a câblé autour de `purchase`.\n" +
            "4. **Personnalisés** : les tiens, pour ce qui est propre à ton activité (`demande_devis_pro`, `simulation_terminee`).\n\n" +
            "## Notes de démo : marquer une conversion\n\n" +
            "Dans GA4, une **conversion** (renommée « événement clé », key event) est simplement un événement que tu as désigné comme important. Dans **Admin > Événements**, tu repères l'événement, par exemple `generate_lead`, et tu actives l'interrupteur « Marquer comme événement clé ». À partir de là, GA4 le suit comme objectif et le rend disponible pour l'import dans Google Ads, ce qui permet aux campagnes d'optimiser dessus.\n\n" +
            "Pour envoyer un événement personnalisé via le tag Google (gtag), le code ressemble à ceci :\n\n" +
            "```js\ngtag('event', 'generate_lead', {\n  form_name: 'contact_devis',\n  value: 50,\n  currency: 'EUR'\n});\n```\n\n" +
            "Le paramètre `value` mérite deux minutes de réflexion : c'est lui qui permettra plus tard de relier les conversions au CAC et à la LTV vus en partie 5. Pour un lead, mets une valeur estimée réaliste : si un lead sur cinq devient client et qu'un client vaut 250 € de marge, un lead vaut 50 €. Ne le laisse pas vide « en attendant », l'attente dure toujours.\n\n" +
            "> À retenir : ne marque comme événement clé que ce qui reflète une vraie valeur business (lead, achat, inscription). Marquer « a scrollé jusqu'en bas » comme conversion pollue tes rapports et, pire, tes campagnes Ads qui optimiseraient sur du scroll.\n\n" +
            "## RGPD : mesurer sans consentement complet\n\n" +
            "En Europe, GA4 ne se déploie pas sans bannière de consentement : tant que le visiteur n'a pas accepté, tu ne poses pas de cookies de mesure. Conséquence directe, tes chiffres GA4 sont **partiels** : avec 15 à 40 % de refus selon les secteurs, GA4 voit 60 à 85 % de ta réalité. Le **Consent Mode v2** de Google atténue le trou en modélisant statistiquement les conversions des visiteurs non consentants, sans les identifier. Deux réflexes : configure Consent Mode avec ta plateforme de consentement (Axeptio, Cookiebot, Didomi côté FR), et compare toujours les chiffres GA4 aux chiffres **source de vérité** (commandes réelles dans ton back-office, leads réels dans ton CRM). Si GA4 affiche 80 ventes et Shopify 100, l'écart de 20 % est normal, pas un bug.\n\n" +
            "Et avant de faire confiance à un événement, vérifie-le dans **DebugView** (Admin > DebugView) : tu déclenches l'action sur le site et tu regardes l'événement arriver en direct avec ses paramètres. Trente secondes de vérification qui évitent le grand classique : découvrir après trois semaines de campagne que `generate_lead` partait à chaque chargement de la page contact au lieu de la soumission du formulaire, et que la moitié des « conversions » n'en étaient pas.\n\n" +
            "## Ce qu'on regarde vraiment dans GA4\n\n" +
            "L'interface contient des dizaines de rapports ; trois suffisent pour piloter.\n\n" +
            "- **Acquisition** : d'où viennent les visiteurs (organique, payant, direct, referral, social). C'est là que tu vérifies quel canal travaille, et que tes UTM des leçons précédentes prennent leur sens.\n" +
            "- **Engagement** : quelles pages et quels événements retiennent. Le taux d'engagement de GA4 (sessions de plus de 10 s, avec conversion ou 2 pages) remplace l'ancien taux de rebond, dans le bon sens.\n" +
            "- **Monétisation / événements clés** : le taux de conversion par canal et par landing page. Le juge de paix.\n\n" +
            "Croise systématiquement le canal d'acquisition avec le taux de conversion. Exemple vécu : un compte fier de ses 9 000 visites mensuelles Pinterest... qui convertissaient à 0,1 %, pendant que 400 visites Google organiques convertissaient à 4,2 %. En visites, Pinterest gagnait ; en clients, c'était 9 contre 17. Sans le croisement, on aurait continué à nourrir le mauvais canal.\n\n" +
            "## À toi\n\n" +
            "Ton site propose un simulateur de prix et un formulaire de contact. Liste les événements que tu enverrais à GA4, en distinguant recommandés et personnalisés, et dis lesquels tu marquerais comme événements clés.\n\n" +
            "> Correction possible : `generate_lead` (recommandé) à la soumission du formulaire, marqué événement clé avec une `value` estimée. `simulation_terminee` (personnalisé) quand le simulateur affiche un prix : utile pour l'analyse du funnel, mais PAS marqué comme clé (c'est un pas intermédiaire, pas une valeur business). Les événements de mesure améliorée (scroll, clics sortants) restent en toile de fond, jamais en événements clés.",
        },
        {
          id: "l24",
          title: "CRO et landing pages",
          type: "text",
          duration: "19 min",
          body:
            "## Optimiser l'existant coûte moins cher qu'acheter plus\n\n" +
            "Le CRO (Conversion Rate Optimization) consiste à convertir davantage des visiteurs que tu as déjà, plutôt que d'en acheter toujours plus. Fais le calcul sur un cas concret : une boutique reçoit 20 000 visites par mois et convertit à 2 %, soit 400 commandes. Passer à 3 %, c'est 600 commandes, **+50 % de clients sans un euro de trafic supplémentaire**. Pour obtenir le même résultat en achetant du trafic à 0,60 € le clic avec le même taux de 2 %, il faudrait 10 000 visites de plus, soit 6 000 € par mois, tous les mois. Le CRO, lui, se paie une fois et son gain se cumule sur chaque canal en même temps : SEO, pub, email, tout convertit mieux. C'est souvent l'investissement au meilleur rendement de tout le funnel, et il agit sur l'Activation.\n\n" +
            "## Anatomie d'une landing page qui convertit\n\n" +
            "Une landing page (page d'atterrissage dédiée à une conversion) n'est pas une page d'accueil. Elle a **un seul objectif** et retire tout ce qui distrait, souvent jusqu'au menu de navigation. Les ingrédients qui pèsent :\n\n" +
            "- **Un message qui matche la source.** Si ta pub promet « devis en 3 minutes », la landing doit répéter exactement ça au-dessus de la ligne de flottaison. Le décalage annonce/page (message mismatch) tue le taux de conversion et fait grimper le coût par acquisition : tu as payé le clic, le visiteur doute, il repart.\n" +
            "- **Une proposition de valeur claire en haut**, lisible sans scroller, en langage client (retour leçon 2 : le bénéfice, pas la technologie).\n" +
            "- **Un seul appel à l'action**, répété plusieurs fois dans la page. Trois boutons différents qui mènent à trois endroits, c'est trois fois moins de décisions prises.\n" +
            "- **De la preuve** : témoignages avec noms réels, logos clients, chiffres, garanties. La preuve sociale lève le doute au moment exact où il se forme.\n" +
            "- **La réduction de friction** : chaque champ de formulaire en moins remonte le taux de complétion. Demande le minimum pour traiter la demande ; le reste, tu le collecteras plus tard. Un formulaire de devis à 11 champs contre 4 champs, testé sur le même trafic : 2,1 % contre 5,3 % de complétion. Mêmes visiteurs, même offre.\n\n" +
            "## Observer avant de tester\n\n" +
            "Avant même de tester, regarde où ça coince. Les **heatmaps** et **enregistrements de sessions** (Hotjar, ou Microsoft Clarity qui est gratuit et sans limite de trafic) montrent où les gens cliquent, jusqu'où ils lisent, à quel champ ils abandonnent le formulaire. Une heure à regarder vingt enregistrements de sessions vaut dix réunions d'hypothèses. Cas typique découvert comme ça : sur mobile, un bandeau cookies mal configuré recouvrait le bouton principal ; le taux de conversion mobile était moitié moindre que desktop depuis des mois et personne ne comprenait pourquoi. Aucun A/B test n'aurait trouvé ça, deux enregistrements Clarity l'ont montré.\n\n" +
            "La boucle du CRO : observer le comportement réel, formuler une hypothèse (« si on réduit le formulaire à 4 champs, la complétion montera car les sessions montrent des abandons au champ SIRET »), tester, mesurer, recommencer.\n\n" +
            "## Tester, pas deviner\n\n" +
            "L'**A/B test** compare deux versions d'un élément (un titre, un bouton, un formulaire) sur du trafic réel réparti au hasard, et laisse les chiffres trancher. Deux règles de rigueur :\n\n" +
            "**Une variable à la fois.** Si tu changes le titre, l'image et le bouton en même temps et que la version B gagne, tu ne sais pas ce qui a produit l'effet, donc tu n'as rien appris de réutilisable.\n\n" +
            "**Un volume suffisant.** Le piège n°1 est de conclure trop vite. Déclarer un gagnant après 30 visiteurs et 2 conversions ne veut rien dire : l'écart est du bruit. Ordre de grandeur à connaître : pour détecter de façon fiable une amélioration relative de 20 % sur un taux de conversion de base de 3 %, il faut grosso modo **10 000 visiteurs par variante**. Avec 500 visites par jour réparties sur deux versions, ça fait 40 jours de test. Conséquence pratique pour un petit site : ne teste pas des micro-détails (couleur de bouton) que tu n'auras jamais le volume de trancher ; teste des changements **forts** (offre, promesse, structure de page) dont l'effet espéré est assez gros pour être visible. Les outils de test (VWO, AB Tasty, ou les tests intégrés des plateformes) calculent la significativité pour toi ; ton travail est de ne pas arrêter le test avant.\n\n" +
            "> À retenir : commence par les pages à fort trafic et fort enjeu (page produit, tunnel de commande, landing des campagnes payantes). Doubler la conversion d'une page à 50 visites par mois rapporte moins qu'améliorer de 10 % une page à 10 000 visites.\n\n" +
            "## À toi\n\n" +
            "Ta landing convertit à 2,5 % avec 6 000 visites par mois. Tu hésites entre tester une nouvelle couleur de bouton (gain espéré ~3 % relatif) et une réécriture complète de la promesse au-dessus de la ligne de flottaison (gain espéré ~25 % relatif). Que choisis-tu et pourquoi ?\n\n" +
            "> Correction : la promesse, sans hésiter. Avec 3 000 visiteurs par variante et par mois, tu n'auras jamais le volume pour détecter un effet de 3 % (il faudrait des centaines de milliers de visiteurs) : le test bouton tournerait des mois pour finir non concluant. Un effet de 25 % relatif sur une base de 2,5 % est détectable en quelques semaines à ton volume. Petit trafic = gros tests.",
        },
        {
          id: "l25",
          title: "Recommandation et boucle de mesure",
          type: "text",
          duration: "17 min",
          body:
            "## Le dernier R, le plus négligé\n\n" +
            "On arrive au bout du funnel AARRR : la **Recommandation**. C'est l'étape qu'on oublie parce qu'elle ne s'achète pas comme du trafic. Pourtant, un client qui en amène un autre a un coût d'acquisition proche de zéro et arrive déjà en confiance : il convertit mieux, reste plus longtemps, et négocie moins. C'est le levier qui améliore mécaniquement ton ratio LTV/CAC de la partie 5, par les deux bouts : le filleul a un CAC quasi nul, et le parrain, plus engagé, augmente sa propre LTV.\n\n" +
            "Chiffre d'ordre de grandeur pour fixer les idées : si 100 clients t'en amènent 15 par recommandation chaque année, et que ton CAC payant est de 40 €, ces 15 clients « gratuits » valent 600 € de budget pub économisé par an, pour une base de seulement 100 clients. À 5 000 clients, le canal recommandation peut dépasser un canal payant entier.\n\n" +
            "## Ce qui déclenche vraiment le bouche-à-oreille\n\n" +
            "La recommandation ne se force pas avec un bouton « partager ». Elle vient d'une expérience qui **dépasse l'attente** : on ne recommande pas un produit correct, on recommande une surprise agréable, ou un produit qui nous fait passer pour quelqu'un de bien informé auprès de nos amis. Avant de bâtir un programme de parrainage, vérifie que le produit et l'accueil (Activation, Rétention) tiennent la route. Un programme de referral posé sur une expérience médiocre ne fait qu'accélérer la mauvaise réputation, en payant pour ça.\n\n" +
            "Les mécaniques qui marchent quand la base est saine :\n\n" +
            "- **Le parrainage à double récompense** : le parrain ET le filleul gagnent quelque chose. Le cas d'école reste Dropbox, qui offrait de l'espace de stockage aux deux ; le programme a porté une part énorme de sa croissance initiale. La double récompense change la psychologie : le parrain n'a plus l'air de vendre son ami, il lui rend service.\n" +
            "- **Le moment de demande bien choisi** : on sollicite un avis ou un partage juste après un pic de satisfaction mesurable (commande livrée et notée, objectif atteint dans l'app, compliment spontané au support), pas au hasard ni trop tôt. Automatise-le : un email déclenché à J+3 après livraison convertit sans effort continu.\n" +
            "- **Le NPS** (Net Promoter Score) : la question « recommanderais-tu, de 0 à 10 ? ». Les 9-10 sont tes **promoteurs** : c'est à eux, et à eux seuls, qu'on propose le parrainage ou la demande d'avis. Envoyer une demande d'avis à un client mécontent (0-6, détracteur), c'est fabriquer soi-même son avis négatif public. Le NPS sert de filtre de routage : promoteurs → demande d'avis/parrainage, détracteurs → contact du support pour rattraper la relation.\n\n" +
            "Et le rappel réglementaire qui protège ta marque : les avis doivent être **réels**. Fabriquer ou acheter de faux avis est illégal (pratique commerciale trompeuse, et la DGCCRF sanctionne), et incentiver un avis positif contre récompense sans le dire est de la même famille. Récompenser le parrainage, oui ; acheter des étoiles, non.\n\n" +
            "## Chiffrer un programme avant de le lancer\n\n" +
            "Un programme de parrainage se calcule comme une campagne. Reprends la boutique de la partie 5 : 2 000 clients actifs, CAC payant à 31 €. Hypothèses prudentes : 10 % des clients partagent leur code au moins une fois, et chaque partageur amène 0,8 filleul par an, soit 160 nouveaux clients. Coût : une double récompense à 10 € par tête (10 € au parrain, 10 € de remise au filleul) = 20 € par acquisition, plus l'outil (les apps de parrainage type ReferralCandy, ou les mécaniques natives de ta plateforme, coûtent quelques dizaines d'euros par mois). Verdict : un CAC d'environ 22 € contre 31 € en payant, pour des clients qui retiennent statistiquement mieux. Si tes hypothèses donnent un coût par filleul supérieur à ton CAC payant, retravaille la récompense ou renonce : le parrainage n'est pas obligatoire, il doit gagner sa place dans le mix comme n'importe quel canal.\n\n" +
            "## Boucler le cadre de mesure honnête\n\n" +
            "On termine là où on a commencé, sur la mesure. Tu as maintenant les cinq étapes instrumentées :\n\n" +
            "| Étape AARRR | Outil / métrique de pilotage |\n" +
            "| --- | --- |\n" +
            "| Acquisition | Search Console, GA4 (canaux + UTM) |\n" +
            "| Activation | taux de conversion, CRO, A/B tests |\n" +
            "| Rétention | flows email Klaviyo, taux de réachat, cohortes |\n" +
            "| Revenu | ROAS, CAC, LTV, ratio LTV/CAC |\n" +
            "| Recommandation | NPS, part de clients issus du parrainage |\n\n" +
            "> À retenir : le tableau de bord idéal tient sur un écran, une métrique actionnable par étape du funnel. Si tu ne peux pas dire quelle décision déclenche chaque chiffre, retire-le.\n\n" +
            "## Garder le cap contre les vanity metrics\n\n" +
            "La discipline la plus dure sur la durée n'est pas technique, elle est mentale : résister à l'envie de célébrer les chiffres qui montent sans conséquence. Un pic de followers, un article viral hors cible, un taux d'ouverture gonflé par les préchargements d'Apple Mail. Reviens toujours à la question de départ : est-ce que ça fait avancer un vrai client dans le funnel, et est-ce que ça finance la suite. Le marketing digital honnête, ce n'est pas faire monter des courbes, c'est acquérir des clients qui restent et en amènent d'autres, à un coût qui laisse du profit. Tout ce cours tient dans cette phrase ; les outils, eux, changeront encore d'ici deux ans.",
        },
        {
          id: "l26",
          title: "Quiz : Analytics, CRO et mesure",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q21",
              prompt:
                "Dans GA4, quelle affirmation décrit correctement une « conversion » (événement clé) ?",
              options: [
                "Un type d'objet totalement séparé des événements",
                "Un événement ordinaire que tu as désigné comme important via l'interrupteur « Marquer comme événement clé », ce qui permet de le suivre comme objectif et de l'importer dans Google Ads",
                "Uniquement une page vue",
                "Une métrique calculée automatiquement par Google sans intervention",
              ],
              correctIndex: 1,
              explanation:
                "GA4 modélise tout en événements. Une conversion n'est rien d'autre qu'un événement que tu as marqué comme clé. Cela le transforme en objectif suivi et le rend disponible pour l'import dans Google Ads. D'où la règle : ne marquer que ce qui a une vraie valeur business.",
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
                "Passer de 2 % à 3 %, c'est une hausse relative de 50 % (1 point sur 2). À trafic identique, cela fait 50 % de clients en plus sans dépense d'acquisition supplémentaire, et le gain profite à tous les canaux en même temps. C'est pourquoi optimiser la conversion de l'existant bat souvent l'achat de trafic additionnel.",
            },
            {
              id: "q23",
              prompt:
                "Une pub promet « devis conforme en 3 minutes » mais la landing page parle surtout de l'histoire de l'entreprise, sans reprendre cette promesse en haut. Quel problème cela crée-t-il ?",
              options: [
                "Aucun, tant que la page est jolie",
                "Un décalage message/page (message mismatch) qui casse le taux de conversion et fait grimper le coût par acquisition, car la promesse de l'annonce n'est pas confirmée à l'arrivée",
                "Un problème de délivrabilité email",
                "Un problème de robots.txt",
              ],
              correctIndex: 1,
              explanation:
                "La landing doit confirmer immédiatement la promesse de la source. Quand l'annonce dit une chose et que la page en dit une autre, le visiteur doute et repart : le taux de conversion chute et, comme le clic a été payé, le coût par acquisition monte. La continuité message-page est un fondamental du CRO.",
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
                "Un test a besoin d'un volume suffisant pour distinguer un vrai effet du hasard. Ordre de grandeur : détecter +20 % relatif sur une base de 3 % demande environ 10 000 visiteurs par variante. Avec 30 visiteurs, l'écart n'a aucune valeur statistique. Conclure trop vite est le piège n°1 du CRO.",
            },
            {
              id: "q35",
              prompt:
                "Ton site reçoit 500 visites par jour et ta landing convertit à 3 %. Tu veux tester une couleur de bouton (effet espéré ~2 % relatif). Quel est le vrai problème de ce test ?",
              options: [
                "Les couleurs ne s'A/B testent pas techniquement",
                "À ce volume, tu n'atteindras jamais la significativité pour un effet aussi faible : détecter un petit effet exige des centaines de milliers de visiteurs. Sur un petit trafic, on teste des changements forts (promesse, offre, structure), pas des micro-détails",
                "Il faut d'abord doubler le budget publicitaire",
                "Deux jours de test suffiront puisque le trafic est régulier",
              ],
              correctIndex: 1,
              explanation:
                "La taille d'échantillon nécessaire explose quand l'effet à détecter est petit. Détecter +20 % relatif sur une base de 3 % demande déjà ~10 000 visiteurs par variante ; +2 % relatif en demande des centaines de milliers. Un petit site doit réserver ses A/B tests à des changements dont l'effet espéré est assez gros pour être mesurable dans un délai raisonnable.",
            },
            {
              id: "q36",
              prompt:
                "Ton enquête NPS classe tes clients : 41 promoteurs (9-10), 30 passifs (7-8), 12 détracteurs (0-6). Quel usage marketing en fais-tu ?",
              options: [
                "Envoyer la demande d'avis et de parrainage aux 83 clients pour maximiser le volume",
                "Router : proposer avis et parrainage aux 41 promoteurs, faire contacter les 12 détracteurs par le support pour rattraper la relation, et ne pas solliciter d'avis public chez eux",
                "Ignorer le NPS, c'est une vanity metric",
                "Offrir une récompense contre un avis 5 étoiles aux détracteurs",
              ],
              correctIndex: 1,
              explanation:
                "Le NPS sert de filtre de routage : demander un avis public à un détracteur, c'est fabriquer soi-même son avis négatif, et acheter des avis positifs est une pratique commerciale trompeuse sanctionnable. On sollicite les promoteurs au bon moment (après un pic de satisfaction) et on traite les détracteurs en privé via le support.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
