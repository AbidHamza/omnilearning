import type { Course } from "../types";

const course: Course = {
  slug: "figma-avance",
  title: "Figma avancé : composants, variables et design system",
  tagline:
    "Passer d'écrans jolis à un système qui tient : auto-layout, composants pilotables, variables multi-modes et handoff dev propre.",
  description:
    "Un cours pour designers qui savent déjà dessiner une maquette et veulent industrialiser. On construit, écran après écran, une petite bibliothèque de A à Z : boutons et cartes en auto-layout, composants avec propriétés, tokens de couleur et d'espacement en variables avec un mode clair et un mode sombre, prototypes qui réagissent à des conditions, puis une bibliothèque publiée, versionnée et livrée aux développeurs dans Dev Mode. Chaque leçon donne les manips exactes, les raccourcis et les pièges qui coûtent des heures quand on ne les connaît pas.",
  category: "Design UX",
  level: "Avancé",
  instructor: "Camille Rieu",
  instructorBio:
    "Product designer, dix ans en agence puis en scale-up SaaS. A repris trois design systems Figma qui partaient en vrille et maintient une bibliothèque utilisée par une quarantaine de designers et développeurs.",
  hours: 6,
  rating: 4.8,
  learners: 1420,
  accent: "#7B61FF",
  image:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  language: "Français",
  software: "Figma",
  prerequisites: [
    "Savoir créer des frames, dessiner des formes et poser du texte dans Figma",
    "Avoir déjà fait au moins une maquette d'écran, même sans composants",
    "Connaître les bases : calques, frames, export — on ne revient pas dessus",
  ],
  summary: [
    "Auto-layout en profondeur : direction, redimensionnement, imbrication, position absolue",
    "Composants et propriétés : variants, boolean, text et instance swap, imbrication",
    "Styles contre variables, et construction d'une échelle de tokens multi-modes",
    "Grilles responsive et prototypage piloté par variables et conditions",
    "Bibliothèque publiée, versionnée, et handoff développeur dans Dev Mode",
  ],
  objectives: [
    "Construire des composants qui se redimensionnent seuls sans casser",
    "Modéliser un bouton complet avec variants et propriétés au lieu de dix copies",
    "Mettre en place des variables de couleur, d'espacement et de rayon avec modes clair et sombre",
    "Organiser des tokens en primitives, sémantiques et composants sans se perdre dans le nommage",
    "Créer un prototype qui change d'état selon une condition, pas seulement au clic",
    "Publier une bibliothèque, gérer ses versions et livrer des specs exploitables aux développeurs",
  ],
  skills: [
    "Auto-layout avancé",
    "Système de composants et variants",
    "Variables et design tokens",
    "Prototypage conditionnel",
    "Gestion de bibliothèque Figma",
    "Handoff développeur (Dev Mode)",
  ],
  contentTypes: ["Leçons écrites", "Démos commentées", "Quiz interactifs", "Cas pratiques"],
  parts: [
    {
      id: "p1",
      title: "Auto-layout, pour de vrai",
      lessons: [
        {
          id: "l1",
          title: "Ce que l'auto-layout résout (et ce qu'il n'est pas)",
          type: "text",
          duration: "13 min",
          body:
            "## Le problème avant de parler d'outil\n\n" +
            "Sans auto-layout, une carte produit, c'est un rectangle, une image, un titre, un prix et un bouton, tous positionnés à la main. Le jour où le titre passe sur deux lignes, tout ce qui est en dessous ne bouge pas. Vous décalez à la souris. Multipliez par vingt cartes et vous avez perdu votre matinée.\n\n" +
            "L'auto-layout, c'est un moteur de disposition attaché à une frame. Il empile ses enfants dans une direction, gère l'espace entre eux, et se redimensionne quand le contenu change. C'est l'équivalent visuel de flexbox en CSS, et ce n'est pas un hasard : les développeurs qui reçoivent vos maquettes pensent déjà en `flex-direction`, `gap` et `padding`.\n\n" +
            "## Mettre une frame en auto-layout\n\n" +
            "Sélectionnez deux ou trois calques, puis `Shift + A`. Figma crée une frame auto-layout autour d'eux. Vous pouvez aussi sélectionner une frame existante et cliquer sur le `+` à côté de **Auto layout** dans le panneau de droite.\n\n" +
            "Trois réglages de base apparaissent :\n\n" +
            "- la **direction** (horizontale, verticale, ou wrap depuis 2023),\n" +
            "- l'**espacement entre les éléments** (le gap),\n" +
            "- le **padding** interne, réglable par côté.\n\n" +
            "## Ce que l'auto-layout n'est pas\n\n" +
            "Ce n'est pas un système de positionnement libre. Dès qu'une frame est en auto-layout, ses enfants sont ordonnés dans un flux. Vous ne pouvez plus glisser un élément n'importe où sans changer son rang dans la pile. Ça déroute au début, surtout si vous venez de Sketch ou d'Illustrator.\n\n" +
            "Ce n'est pas non plus magique pour le responsive multi-écran. L'auto-layout gère l'adaptation au contenu (un texte plus long pousse le reste), pas l'adaptation à la largeur d'écran toute seule. Le vrai responsive combine auto-layout, redimensionnement `Fill` et parfois des variables. On y vient partie 4.\n\n" +
            "> À retenir : si vous vous surprenez à aligner des éléments à la main plus de deux fois, c'est qu'il manque un auto-layout. La règle dans une équipe qui livre du système, c'est qu'à peu près tout est en auto-layout, sauf les illustrations et les schémas libres.\n\n" +
            "## Un premier réflexe\n\n" +
            "Prenez un bouton fait à la main : un rectangle plus un texte centré. Sélectionnez les deux, `Shift + A`. Réglez le padding à 12 en haut et en bas, 20 à gauche et à droite. Changez le texte de « Valider » à « S'inscrire maintenant ». Le bouton s'élargit tout seul, le texte reste bien calé avec ses marges. Vous venez de faire un composant qui ne cassera jamais sur la longueur du libellé. C'est tout l'intérêt.",
        },
        {
          id: "l2",
          title: "Direction, redimensionnement Hug/Fill/Fixed, ordre",
          type: "video",
          duration: "16 min",
          videoLabel: "Démo : régler les trois modes de redimensionnement sur une carte",
          body:
            "## Ce qu'on fabrique dans la démo\n\n" +
            "On part d'une carte produit : image en haut, puis un bloc texte avec titre et prix, puis un bouton. Objectif : que la carte tienne quel que soit le contenu.\n\n" +
            "## Les trois modes de redimensionnement\n\n" +
            "Chaque frame auto-layout, et chacun de ses enfants, a un réglage de largeur et de hauteur. Trois valeurs possibles, c'est le coeur du sujet :\n\n" +
            "- **Fixed** (fixe) : la dimension est verrouillée à une valeur en pixels. L'élément ne bouge pas, même si le contenu déborde.\n" +
            "- **Hug** (ajuster au contenu) : la frame se resserre exactement autour de ses enfants. C'est le bon réglage pour un bouton : il fait la taille de son texte plus le padding.\n" +
            "- **Fill** (remplir le conteneur) : l'élément prend toute la place disponible dans son parent. Un titre en `Fill` occupera toute la largeur de la carte et passera à la ligne au lieu de déborder.\n\n" +
            "Dans le panneau de droite, ce sont les deux menus déroulants à côté des champs W et H. Raccourci utile : sélectionnez un élément et appuyez sur `Shift + Alt + H` pour Hug horizontal, ou réglez au menu. On passe par le menu dans la démo pour bien voir les libellés.\n\n" +
            "## Le piège numéro un\n\n" +
            "Le titre déborde de la carte ? Neuf fois sur dix, il est en `Fixed` ou en `Hug` horizontal alors qu'il devrait être en `Fill`. En `Hug`, un texte grandit vers la droite sans jamais passer à la ligne. Passez-le en `Fill container` : il se limite à la largeur de la carte et wrappe proprement.\n\n" +
            "Autre piège : la carte entière en `Fixed` en hauteur. Ajoutez une ligne de description et le contenu passe sous le bouton, coupé. Mettez la hauteur de la carte en `Hug` pour qu'elle grandisse avec son contenu.\n\n" +
            "## Direction et ordre\n\n" +
            "La direction se change en un clic : horizontale ou verticale, dans le panneau Auto layout. Pour l'ordre, dans une frame verticale, l'élément le plus haut dans le panneau des calques est le plus haut à l'écran. Vous réordonnez soit dans l'arbre des calques, soit en glissant l'élément dans le canvas : Figma insère une barre bleue pour montrer où il va tomber.\n\n" +
            "## Le récap de la démo\n\n" +
            "1. Frame carte en `Hug` vertical, largeur `Fixed` à 280.\n" +
            "2. Image en `Fill` horizontal, hauteur `Fixed` à 160.\n" +
            "3. Titre et prix en `Fill` horizontal.\n" +
            "4. Bouton en `Fill` horizontal pour qu'il s'étire sur toute la largeur de la carte.\n\n" +
            "Résultat : on rallonge le titre, on change le prix, la carte s'adapte sans jamais qu'on touche une position.",
        },
        {
          id: "l3",
          title: "Padding, gap, alignement et position absolue",
          type: "text",
          duration: "14 min",
          body:
            "## Padding indépendant par côté\n\n" +
            "Par défaut Figma propose un padding uniforme. Cliquez sur l'icône des réglages détaillés (les quatre côtés) dans le panneau Auto layout pour saisir haut, bas, gauche, droite séparément. Cas classique : une alerte avec une icône collée à gauche veut 16 partout sauf 12 à gauche pour équilibrer l'oeil. On dose côté par côté.\n\n" +
            "## Gap, et le fameux « Space between »\n\n" +
            "Le gap, c'est l'espace entre chaque enfant. Réglez-le à une valeur de votre échelle, jamais un chiffre au hasard : 8, 12, 16, 24. On construira cette échelle en partie 3.\n\n" +
            "Il y a un mode spécial. Si vous mettez le gap sur **Auto** (l'icône qui ressemble à des barres écartées), Figma répartit l'espace restant entre les éléments. C'est le `justify-content: space-between` de CSS. Parfait pour une barre de navigation : le logo colle à gauche, les liens à droite, l'espace au milieu se gère seul quand la frame s'élargit. Condition : la frame doit être plus large que la somme de ses enfants, donc en `Fixed` ou `Fill`, pas en `Hug`.\n\n" +
            "## Alignement : la grille à neuf points\n\n" +
            "Dans le panneau Auto layout, un petit carré affiche neuf points. Il définit où les enfants se calent dans l'espace disponible : en haut à gauche, centré, en bas à droite, etc. Sur une frame horizontale, le point vertical gère l'alignement des éléments entre eux (haut, milieu, bas). Il y a aussi un alignement sur la ligne de base du texte, pratique quand vous mélangez un gros chiffre et une petite unité, genre « 29 € » avec le « € » aligné sur le bas des chiffres.\n\n" +
            "## Sortir un élément du flux : la position absolue\n\n" +
            "Parfois vous voulez un badge « -20% » posé dans le coin d'une carte, sans qu'il pousse le reste. Sélectionnez le badge, puis dans le panneau, activez **Absolute position** (l'icône de cadre en pointillés, ou `Ctrl/Cmd + Shift + P` selon la config). L'élément quitte le flux auto-layout. Vous le positionnez librement avec des contraintes classiques (ancré en haut à droite, par exemple), et il flotte au-dessus sans déranger l'empilement.\n\n" +
            "> À retenir : position absolue = « je reste dans cette frame et je profite de ses contraintes, mais je ne compte pas dans l'empilement ». C'est le seul moyen de superposer proprement dans un auto-layout.\n\n" +
            "## Stacking : qui passe devant\n\n" +
            "Dans une frame en `wrap` ou avec des éléments qui se chevauchent, l'ordre de superposition compte. Le réglage **Canvas stacking order** (dernier au-dessus / premier au-dessus) décide si le premier calque de la liste passe devant ou derrière. Réglez-le quand vos avatars empilés « en éventail » se chevauchent dans le mauvais sens : une case à cocher, et l'éventail part dans l'autre direction.",
        },
        {
          id: "l4",
          title: "Quiz — Auto-layout",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Un titre déborde à droite de sa carte au lieu de passer à la ligne. Quel réglage corrige ça le plus proprement ?",
              options: [
                "Réduire la taille de police du titre",
                "Passer la largeur du titre en Fill container",
                "Mettre la carte en position absolue",
                "Augmenter le padding droit de la carte",
              ],
              correctIndex: 1,
              explanation:
                "En Hug, un texte grandit horizontalement sans wrapper. En Fill, il se limite à la largeur du parent et passe à la ligne. Réduire la police ou toucher au padding ne règle pas la cause : c'est le mode de redimensionnement.",
            },
            {
              id: "q2",
              prompt:
                "Vous voulez un logo collé à gauche et des liens collés à droite dans une barre, avec l'espace au milieu qui s'ajuste à la largeur. Que faites-vous ?",
              options: [
                "Mettre un gap fixe très grand entre les deux",
                "Mettre le gap sur Auto (space between) et la frame en Fixed ou Fill",
                "Positionner les liens en absolu à droite",
                "Ajouter un rectangle transparent entre les deux",
              ],
              correctIndex: 1,
              explanation:
                "Le gap sur Auto répartit l'espace restant, comme justify-content: space-between. Il faut que la frame ait une largeur définie (Fixed ou Fill), sinon en Hug elle se resserre et il n'y a pas d'espace à distribuer. Le rectangle transparent est un vieux hack qu'on évite.",
            },
            {
              id: "q3",
              prompt:
                "Vous ajoutez un badge de promotion dans le coin d'une carte auto-layout, mais il pousse l'image vers le bas. Pourquoi, et comment l'éviter ?",
              options: [
                "Le badge est trop grand ; il faut le réduire",
                "Le badge compte dans l'empilement du flux ; il faut activer sa position absolue",
                "La carte est en Hug ; il faut la passer en Fixed",
                "Il faut détacher le badge de la carte",
              ],
              correctIndex: 1,
              explanation:
                "Tant qu'un enfant est dans le flux auto-layout, il occupe une place et décale les autres. La position absolue le sort du flux : il reste dans la frame, profite des contraintes, mais ne compte plus dans l'empilement. Le détacher lui ferait perdre l'ancrage à la carte.",
            },
            {
              id: "q4",
              prompt:
                "Une carte est en hauteur Fixed. Vous ajoutez une ligne de description : le texte passe sous le bouton et se retrouve coupé. Le meilleur réflexe ?",
              options: [
                "Passer la hauteur de la carte en Hug",
                "Augmenter manuellement la valeur de hauteur à chaque fois",
                "Réduire l'interligne du texte",
                "Mettre la description en position absolue",
              ],
              correctIndex: 0,
              explanation:
                "En Hug vertical, la carte grandit toute seule avec son contenu. Augmenter la valeur à la main annule tout l'intérêt de l'auto-layout, et jouer sur l'interligne ne fait que retarder le débordement.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Composants et propriétés",
      lessons: [
        {
          id: "l5",
          title: "Composant, instance, main component : le modèle mental",
          type: "text",
          duration: "12 min",
          body:
            "## La relation de base\n\n" +
            "Un **composant principal** (main component) est la source. Chaque copie que vous en tirez est une **instance** liée à cette source. Modifiez le composant principal, toutes les instances suivent. C'est le mécanisme qui fait qu'on change la couleur d'un bouton une fois et qu'elle se propage sur cent écrans.\n\n" +
            "Pour créer un composant : sélectionnez votre calque ou votre frame, puis `Ctrl + Alt + K` (`Cmd + Option + K` sur Mac), ou le bouton en losange dans la barre du haut. L'icône du calque passe au losange violet. Pour poser une instance, glissez le composant depuis le panneau **Assets** (l'onglet à gauche), ou copiez-collez l'instance existante.\n\n" +
            "## Ce qu'une instance peut et ne peut pas faire\n\n" +
            "Sur une instance, vous pouvez surcharger (override) : le texte, les couleurs, les images, la visibilité de certains calques, et les propriétés qu'on exposera dans les prochaines leçons. Vous ne pouvez pas ajouter ou supprimer des calques structurels ni réorganiser l'architecture. Ça, c'est réservé au composant principal.\n\n" +
            "Point important sur les surcharges : elles collent au calque par son nom et sa position. Si vous renommez un calque texte dans le composant principal après avoir surchargé des instances, Figma peut perdre le lien et vos surcharges sautent. D'où l'importance d'un nommage stable, sujet de la partie 5.\n\n" +
            "## Détacher, et pourquoi l'éviter\n\n" +
            "`Ctrl + Alt + B` détache une instance : elle devient un groupe de calques normaux, coupé de sa source. Utile pour un cas ponctuel très particulier. Dangereux en système : une instance détachée ne reçoit plus les mises à jour de la bibliothèque. Un design system rempli d'instances détachées, c'est un système mort qui a l'air vivant. Règle simple : si vous détachez, demandez-vous d'abord s'il ne manque pas une propriété ou un variant au composant.\n\n" +
            "## Où ranger les composants principaux\n\n" +
            "Ne laissez pas vos composants principaux traîner au milieu des écrans. La convention, c'est une page dédiée, souvent nommée `🧩 Components` ou `Foundations`, où vivent toutes les sources, bien alignées. Les écrans de produit n'utilisent que des instances. Ça évite de surcharger un principal par erreur et ça rend la maintenance lisible.\n\n" +
            "> À retenir : le composant principal est un moule. On ne travaille jamais dans le moule pour un besoin ponctuel ; on tire une instance et on la surcharge. Le moule ne change que pour une décision de design qui vaut pour tout le monde.\n\n" +
            "## Un test rapide\n\n" +
            "Créez un bouton composant. Posez trois instances. Sur une instance, changez juste le texte. Puis retournez au composant principal et changez sa couleur de fond. Les trois instances virent de couleur, mais celle dont vous avez changé le texte garde son libellé. Vous voyez la ligne exacte entre ce qui est hérité et ce qui est surchargé.",
        },
        {
          id: "l6",
          title: "Variants : un composant, plusieurs états",
          type: "video",
          duration: "17 min",
          videoLabel: "Démo : transformer cinq boutons séparés en un seul composant à variants",
          body:
            "## Le point de départ\n\n" +
            "On a cinq boutons dessinés séparément : primaire, secondaire, chacun en état normal et survol, plus un état désactivé. Cinq composants distincts, c'est ingérable. On va les fusionner en un seul composant avec des propriétés de variant.\n\n" +
            "## Combiner en variants\n\n" +
            "Sélectionnez tous les boutons, déjà transformés en composants individuels, puis cliquez sur **Combine as variants** dans le panneau de droite. Figma les regroupe dans un cadre en pointillés violet, le **component set**. Chaque bouton devient un variant à l'intérieur.\n\n" +
            "Par défaut, Figma nomme les variants « Property 1 = Default, Variant 2… ». On nettoie tout de suite. Dans le panneau, on crée deux propriétés claires :\n\n" +
            "- `Type` avec les valeurs `Primary` et `Secondary`,\n" +
            "- `State` avec les valeurs `Default`, `Hover` et `Disabled`.\n\n" +
            "On renomme les propriétés directement dans le panneau des propriétés du component set, et on assigne à chaque variant ses valeurs. Le nom de chaque variant devient par exemple `Type=Primary, State=Hover`. Ce nommage n'est pas cosmétique : c'est lui qui pilote les menus déroulants sur les instances.\n\n" +
            "## Ce que ça donne côté instance\n\n" +
            "Posez une instance. Le panneau de droite affiche maintenant deux menus : `Type` et `State`. Le designer qui utilise votre bouton choisit `Secondary` + `Disabled` dans deux listes, au lieu de fouiller dans les Assets pour retrouver le bon composant. C'est là que le système devient utilisable par d'autres que vous.\n\n" +
            "## Les bonnes pratiques qui évitent le chaos\n\n" +
            "- Gardez le **même nombre de propriétés** sur tous les variants d'un set. Un variant à qui il manque une propriété crée des trous dans la matrice.\n" +
            "- Rangez les variants en grille logique dans le set : une ligne par `Type`, une colonne par `State`. Figma sait afficher un avertissement si deux variants ont la même combinaison de valeurs, ce qui est interdit.\n" +
            "- Limitez le nombre de propriétés. Trois ou quatre, ça va. Sept propriétés qui se multiplient, c'est des centaines de variants théoriques, impossible à maintenir. Au-delà, on bascule certaines dimensions en propriétés booléennes ou en instance swap, la leçon suivante.\n\n" +
            "## Piège de la démo\n\n" +
            "En combinant, si un des boutons avait une largeur différente, le set garde des tailles hétérogènes et ça se voit à l'usage. On uniformise en mettant tous les variants sur le même auto-layout, largeur en `Hug`, avant de combiner. Un component set propre commence par des variants cohérents entre eux.",
        },
        {
          id: "l7",
          title: "Propriétés : boolean, text, instance swap",
          type: "text",
          duration: "15 min",
          body:
            "## Au-delà des variants\n\n" +
            "Les variants gèrent les grands états. Mais rajouter un variant juste pour « avec icône » ou « sans icône » double le nombre de variants. Figma offre trois autres types de propriétés qui se combinent aux variants sans exploser la matrice.\n\n" +
            "## Propriété booléenne\n\n" +
            "Elle montre ou cache un calque. Cas d'usage : une icône optionnelle à gauche du texte du bouton. Sélectionnez le calque icône dans le composant principal, puis dans le panneau, à côté de la ligne de visibilité, cliquez sur l'icône pour **créer une propriété booléenne**. Nommez-la `Show icon`. Sur l'instance, un simple interrupteur apparaît : on affiche ou on masque l'icône sans changer de variant.\n\n" +
            "## Propriété de texte\n\n" +
            "Elle expose un calque de texte comme un champ éditable nommé dans le panneau de l'instance. Sur le composant principal, sélectionnez le calque texte, créez une **propriété de texte** appelée `Label`. Avantage sur la simple surcharge : le champ est nommé et documenté. Sur une carte avec titre, sous-titre et prix, on aura trois champs clairs `Title`, `Subtitle`, `Price` au lieu de trois calques anonymes à retrouver.\n\n" +
            "## Instance swap\n\n" +
            "La plus puissante. Elle permet de remplacer une instance imbriquée par une autre du même type, depuis un menu. Cas typique : l'icône dans le bouton. Au lieu d'une icône figée, on expose une propriété **instance swap** nommée `Icon`. Sur l'instance, un menu déroulant liste toutes les icônes de la bibliothèque. Le designer choisit « flèche », « coeur », « panier » sans jamais entrer dans le composant.\n\n" +
            "Pour la créer : sélectionnez l'instance imbriquée dans le composant principal, puis dans le panneau, créez la propriété instance swap. Vous pouvez restreindre les valeurs proposées à un dossier de composants précis, pour éviter qu'on remplace l'icône par une carte entière.\n\n" +
            "## Comment choisir entre les quatre\n\n" +
            "- **Variant** : des états mutuellement exclusifs qui changent le style global (Primary/Secondary, Small/Large).\n" +
            "- **Boolean** : un élément présent ou absent (badge, icône, séparateur).\n" +
            "- **Text** : du contenu textuel modifiable et nommé.\n" +
            "- **Instance swap** : échanger un sous-composant contre un autre (choix d'icône, choix d'avatar).\n\n" +
            "> À retenir : le bon bouton n'a pas vingt variants. Il a deux ou trois variants pour Type et State, plus une booléenne pour l'icône, plus une instance swap pour choisir laquelle, plus une propriété texte pour le libellé. Quatre leviers combinés couvrent des dizaines de cas avec une matrice minuscule.\n\n" +
            "## L'ordre des propriétés\n\n" +
            "Dans le panneau des propriétés du composant, vous pouvez réordonner par glisser. Mettez en haut ce qu'on change le plus souvent : le libellé et le type avant la visibilité d'un séparateur. Le panneau de l'instance suit cet ordre, et un panneau bien rangé, c'est du temps gagné pour toute l'équipe.",
        },
        {
          id: "l8",
          title: "Composants imbriqués et propriétés exposées",
          type: "text",
          duration: "14 min",
          body:
            "## Composer avec des composants\n\n" +
            "Un design system tient parce que les composants s'emboîtent. Un champ de formulaire contient un label (composant), un input (composant) et un message d'aide (composant). Une carte utilisateur contient un avatar (composant) et un bouton (composant). On appelle ça des composants imbriqués, ou nested components.\n\n" +
            "L'intérêt : quand vous corrigez l'avatar dans sa source, il se met à jour partout, y compris à l'intérieur de la carte utilisateur, elle-même utilisée dans une liste, elle-même dans un écran. Une correction, propagation en cascade.\n\n" +
            "## Le problème des propriétés enfouies\n\n" +
            "Voici le piège que rencontrent tous les débutants en système. Vous posez une instance de carte utilisateur. Vous voulez changer l'icône du bouton à l'intérieur. Mais la propriété instance swap du bouton n'apparaît pas dans le panneau de la carte : elle est enfouie deux niveaux plus bas. Résultat, on entre dans l'instance en cliquant profond, ce qui est lent et fragile.\n\n" +
            "## Exposer les propriétés imbriquées\n\n" +
            "La solution s'appelle **nested instance properties**. Sur le composant principal de la carte utilisateur, sélectionnez l'instance du bouton imbriqué. Dans le panneau de droite, une section liste ses propriétés (Type, State, Label, Icon…). Chaque propriété a une icône pour la **remonter au niveau du parent**. Cliquez, et la propriété du bouton apparaît désormais directement dans le panneau de la carte.\n\n" +
            "Concrètement, sur l'instance de carte, le designer voit maintenant `Bouton — Label`, `Bouton — Type` sans avoir à plonger dans le bouton. On expose seulement ce qui a du sens : le libellé du bouton, oui ; les vingt propriétés internes de l'avatar, non. Trop d'expositions et le panneau devient illisible.\n\n" +
            "> À retenir : exposez une propriété imbriquée quand un utilisateur du composant aura légitimement besoin de la régler sans connaître la structure interne. C'est un choix d'ergonomie d'API, pas un réflexe systématique.\n\n" +
            "## Bien nommer pour bien exposer\n\n" +
            "Les propriétés remontées prennent le nom que vous leur donnez. Préfixez-les pour qu'on sache d'où elles viennent : `CTA Label`, `Avatar Image`. Sur un composant complexe, ce préfixe évite deux propriétés `Label` qui se marchent dessus.\n\n" +
            "## Un cas concret de bout en bout\n\n" +
            "Reprenons la carte utilisateur. On veut, depuis l'instance, choisir l'image de l'avatar, écrire le nom, écrire le rôle, et changer le libellé du bouton d'action. Quatre propriétés à exposer : l'instance swap de l'avatar, deux propriétés texte (nom, rôle), la propriété texte du bouton. On les remonte, on les renomme, et le panneau de la carte devient un petit formulaire propre. Un designer qui n'a jamais ouvert la structure interne peut remplir une liste de dix cartes en deux minutes. C'est exactement l'objectif d'un système : rendre le travail des autres rapide et sans erreur.",
        },
        {
          id: "l9",
          title: "Quiz — Composants et propriétés",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Vous voulez qu'un bouton puisse afficher ou non une icône, et que le designer choisisse laquelle. Quelle combinaison de propriétés utilisez-vous ?",
              options: [
                "Deux variants supplémentaires : « avec icône flèche » et « avec icône coeur »",
                "Une propriété booléenne pour la visibilité, plus une propriété instance swap pour le choix de l'icône",
                "Une propriété de texte contenant le nom de l'icône",
                "Détacher l'instance et coller l'icône à la main",
              ],
              correctIndex: 1,
              explanation:
                "La booléenne gère présent/absent, l'instance swap gère le choix parmi les icônes. Ajouter des variants ferait exploser la matrice pour chaque icône possible. Une propriété texte avec un nom d'icône ne changerait rien visuellement.",
            },
            {
              id: "q6",
              prompt:
                "Pourquoi remplir un design system d'instances détachées est-il un problème de fond ?",
              options: [
                "Les instances détachées pèsent plus lourd dans le fichier",
                "Elles ne reçoivent plus les mises à jour de leur composant source",
                "Figma interdit de détacher plus de dix instances",
                "Elles perdent automatiquement leurs couleurs",
              ],
              correctIndex: 1,
              explanation:
                "Détacher coupe le lien à la source. Le composant a beau évoluer, l'instance détachée reste figée. Un système plein d'instances détachées donne l'illusion d'être maintenu alors qu'une partie n'est plus reliée à rien.",
            },
            {
              id: "q7",
              prompt:
                "Sur une instance de carte utilisateur, vous n'arrivez pas à changer le libellé du bouton imbriqué depuis le panneau de la carte. Quelle est la cause la plus probable ?",
              options: [
                "Le bouton n'est pas un vrai composant",
                "La propriété texte du bouton n'a pas été exposée au niveau du parent",
                "La carte est en position absolue",
                "Il faut détacher la carte pour éditer le bouton",
              ],
              correctIndex: 1,
              explanation:
                "Les propriétés d'un composant imbriqué restent invisibles au niveau parent tant qu'on ne les remonte pas via les nested instance properties. Une fois exposée, la propriété texte du bouton apparaît directement dans le panneau de la carte, sans avoir à plonger dedans.",
            },
            {
              id: "q8",
              prompt:
                "Vous avez sept propriétés de variant sur un même bouton, ce qui génère des centaines de combinaisons. Quel est le meilleur remède ?",
              options: [
                "Supprimer les variants les moins utilisés au hasard",
                "Garder deux ou trois variants pour les états clés et déplacer le reste vers des propriétés booléennes et instance swap",
                "Créer un composant séparé pour chaque combinaison",
                "Augmenter le nombre de propriétés pour mieux organiser",
              ],
              correctIndex: 1,
              explanation:
                "Les variants doivent rester aux états mutuellement exclusifs (Type, State). Ce qui est optionnel ou interchangeable passe en booléen ou en instance swap, qui se combinent sans multiplier la matrice. Découper en composants séparés casse l'unité du bouton.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Styles, variables et design tokens",
      lessons: [
        {
          id: "l10",
          title: "Styles contre variables : ce qui a changé",
          type: "text",
          duration: "13 min",
          body:
            "## Deux systèmes qui coexistent\n\n" +
            "Figma a longtemps eu les **styles** : styles de couleur, de texte, d'effet, de grille. Vous définissez une couleur `Brand/Primary`, vous l'appliquez, et changer le style met tout à jour. Ça marche, mais un style de couleur porte une seule valeur. Pour un thème sombre, il fallait dupliquer tous les styles avec un préfixe `Dark/`, et échanger à la main. Douloureux.\n\n" +
            "Les **variables**, arrivées en 2023, changent la donne. Une variable de couleur peut porter plusieurs valeurs selon un **mode**. Une seule variable `background/default` vaut blanc en mode clair et presque noir en mode sombre. Vous basculez le mode d'une frame et tout le thème suit. C'est la différence structurante.\n\n" +
            "## Quatre types de variables\n\n" +
            "- **Color** : une couleur. Le socle des thèmes.\n" +
            "- **Number** : un nombre. Sert au spacing, au rayon de bordure, aux tailles.\n" +
            "- **String** : une chaîne de texte. Sert au contenu multilingue ou à des valeurs de configuration dans les prototypes.\n" +
            "- **Boolean** : vrai ou faux. Surtout utile en prototypage conditionnel, partie 4.\n\n" +
            "## Quand garder les styles\n\n" +
            "Les variables ne remplacent pas tout, en tout cas pas encore. Les **styles de texte** (une combinaison famille + taille + graisse + interligne) et les **styles d'effet** (ombres) restent des styles à part entière. On mélange donc : styles de texte et d'effet d'un côté, variables de couleur et de nombre de l'autre. Depuis quelques versions, on peut d'ailleurs alimenter certaines propriétés d'un style de texte avec des variables de nombre, ce qui rapproche les deux mondes.\n\n" +
            "## Le vrai départage en pratique\n\n" +
            "- Une couleur qui doit changer selon un thème ou un contexte : **variable**.\n" +
            "- Une valeur d'espacement ou de rayon réutilisée partout : **variable de nombre**.\n" +
            "- Un ensemble typographique nommé, style titre H1 : **style de texte**.\n" +
            "- Une ombre portée de carte : **style d'effet**.\n\n" +
            "> À retenir : si la question est « est-ce que cette valeur doit varier selon un mode ? », la réponse penche vers les variables. Si c'est un paquet de propriétés typographiques figées, c'est un style.\n\n" +
            "## Pourquoi ça compte pour la suite\n\n" +
            "Tout le reste de cette partie construit une échelle de tokens en variables. Comprendre que les variables portent des modes, c'est comprendre pourquoi on peut livrer un thème clair et un thème sombre sans dupliquer une seule couleur. On passe à la construction concrète dès la prochaine leçon, avec la collection de couleurs et ses modes.",
        },
        {
          id: "l11",
          title: "Variables de couleur, modes clair/sombre, aliasing",
          type: "video",
          duration: "18 min",
          videoLabel: "Démo : créer une collection de couleurs avec deux modes et de l'aliasing",
          body:
            "## Ouvrir le panneau des variables\n\n" +
            "Cliquez dans le vide du canvas, puis dans le panneau de droite, section **Local variables**, ouvrez le gestionnaire. Une fenêtre s'ouvre : c'est là qu'on gère les collections, les modes et les variables.\n\n" +
            "## Créer une collection primitive\n\n" +
            "On crée une première collection nommée `Primitives`. Dedans, on met les couleurs brutes, sans intention d'usage : `blue/500`, `blue/600`, `gray/50`, `gray/900`, etc. Le `/` crée des groupes dans la liste, ce qui range visuellement. Ces couleurs ne changent jamais selon le thème : le bleu 500 est le même bleu partout. La collection Primitives a donc un seul mode.\n\n" +
            "## Créer une collection sémantique avec deux modes\n\n" +
            "On crée une deuxième collection, `Semantic`. Dans l'en-tête de la collection, on ajoute un deuxième mode : on renomme les deux modes `Light` et `Dark` (le bouton `+` à côté du nom du mode). Chaque variable de cette collection aura donc deux valeurs.\n\n" +
            "On crée `background/default`. En mode `Light`, sa valeur pointe vers `gray/50`. En mode `Dark`, vers `gray/900`. C'est ça, **l'aliasing** : au lieu de saisir un code hexadécimal, la variable **référence une autre variable**. On tape le nom de la primitive et Figma propose la liste. La valeur affichée montre la primitive pointée.\n\n" +
            "On répète : `text/default` pointe vers `gray/900` en clair et `gray/50` en sombre. `border/subtle`, `surface/raised`, `action/primary`… Chaque token sémantique dit une intention (« le fond par défaut ») et délègue sa vraie couleur aux primitives, différemment selon le mode.\n\n" +
            "## Pourquoi cette double couche\n\n" +
            "On n'applique jamais une primitive directement sur un écran. On applique toujours un token sémantique. Comme ça, changer la nuance de bleu de la marque se fait en un point (la primitive), et tous les tokens sémantiques qui la référencent suivent. Et le thème sombre est gratuit : on a juste rempli la colonne `Dark`.\n\n" +
            "## Appliquer et basculer\n\n" +
            "On sélectionne une frame de fond, on clique sur le petit carré de couleur, puis sur l'icône des variables, et on choisit `background/default`. Pour tester le thème sombre : sélectionnez la frame parente, ouvrez le sélecteur de mode (clic droit ou dans le panneau, section Layer > mode de la collection Semantic), passez de `Light` à `Dark`. Tout l'écran bascule. Aucune couleur n'a été touchée une seconde fois.\n\n" +
            "## Piège de la démo\n\n" +
            "Si en basculant en `Dark` une carte reste blanche, c'est qu'on lui a appliqué une **primitive** (`gray/50`) au lieu du **token sémantique** (`surface/raised`). Les primitives n'ont pas de mode, donc elles ne bougent pas. La règle sort renforcée : sur les écrans, uniquement du sémantique.",
        },
        {
          id: "l12",
          title: "Number et string : spacing, rayon, échelle typo",
          type: "text",
          duration: "15 min",
          body:
            "## Des nombres, pas seulement des couleurs\n\n" +
            "Les variables de nombre transforment votre discipline d'espacement en système. Au lieu de taper 8, 12, 16, 24 de mémoire, on crée des variables qui portent ces valeurs, on les applique, et on peut ajuster l'échelle globalement.\n\n" +
            "## Une échelle d'espacement\n\n" +
            "On crée une collection `Scale`, ou on ajoute au groupe existant. On définit une base de 4 et on décline :\n\n" +
            "- `space/1` = 4\n" +
            "- `space/2` = 8\n" +
            "- `space/3` = 12\n" +
            "- `space/4` = 16\n" +
            "- `space/6` = 24\n" +
            "- `space/8` = 32\n\n" +
            "On applique ces variables directement aux champs de padding et de gap des auto-layouts. Dans le panneau Auto layout, cliquez sur un champ de valeur, puis sur l'icône variable, et choisissez `space/4`. Le gap n'est plus un chiffre magique, c'est un token. Si un jour l'équipe décide de resserrer l'interface, on change la valeur des variables, pas les centaines de frames.\n\n" +
            "## Rayons de bordure\n\n" +
            "Même logique pour les coins arrondis :\n\n" +
            "- `radius/sm` = 4\n" +
            "- `radius/md` = 8\n" +
            "- `radius/lg` = 16\n" +
            "- `radius/full` = 999\n\n" +
            "On applique `radius/md` sur les cartes, `radius/full` sur les pastilles et avatars. Un design system cohérent, c'est aussi trois rayons partout, pas quinze valeurs improvisées.\n\n" +
            "## L'échelle typographique\n\n" +
            "Pour les tailles de police, deux approches. Soit on garde tout dans des styles de texte (H1, H2, Body…), soit on porte les tailles en variables de nombre pour pouvoir les moduler par mode, par exemple une échelle plus grande sur écran large. Une échelle classique en ratio proche de 1,25 :\n\n" +
            "- `font/size/xs` = 12\n" +
            "- `font/size/sm` = 14\n" +
            "- `font/size/md` = 16\n" +
            "- `font/size/lg` = 20\n" +
            "- `font/size/xl` = 25\n" +
            "- `font/size/2xl` = 31\n\n" +
            "L'intérêt d'une échelle mathématique, c'est que les tailles s'accordent visuellement au lieu d'être choisies au hasard. Sept tailles bien espacées valent mieux que vingt tailles arbitraires.\n\n" +
            "## Les variables string\n\n" +
            "Moins courantes en tokens, très utiles ailleurs. Une variable string peut porter un libellé qui change selon le mode : `label/cta` vaut « Commencer » en mode `FR` et « Get started » en mode `EN`. Combinée à des modes de langue sur une collection dédiée, elle sert des maquettes multilingues sans dupliquer les écrans. On la retrouvera aussi en prototypage, pour afficher un texte dynamique piloté par une variable.\n\n" +
            "> À retenir : dès qu'une valeur numérique se répète dans l'interface (marge, gap, rayon, taille), elle mérite d'être un token. La règle du « trois fois » marche bien : la troisième fois que vous tapez la même valeur à la main, créez la variable.",
        },
        {
          id: "l13",
          title: "Architecture de tokens : primitives, sémantiques, composants",
          type: "text",
          duration: "16 min",
          body:
            "## Trois couches, pas une\n\n" +
            "Un système de tokens qui tient sur la durée s'organise en couches. On l'a amorcé avec couleur ; formalisons.\n\n" +
            "1. **Primitives** (ou tokens bruts) : les valeurs pures. `blue/500`, `gray/900`, `space/4`, `radius/md`. Aucun sens d'usage, juste des valeurs. Une seule source de vérité pour chaque nuance.\n" +
            "2. **Sémantiques** (ou tokens d'intention) : ils décrivent un rôle. `action/primary`, `text/default`, `surface/raised`, `space/inset/card`. Ils pointent vers des primitives, différemment selon le mode. C'est la couche qu'on applique presque partout.\n" +
            "3. **Composant** (optionnel) : des tokens spécifiques à un composant. `button/padding/x`, `card/radius`. Ils pointent vers des sémantiques ou des primitives. On ne les crée que si un composant a des besoins récurrents et particuliers, sinon on surcharge inutilement.\n\n" +
            "## Pourquoi ne pas tout mettre en sémantique directement\n\n" +
            "Parce que la couche primitive vous permet de refondre la marque en un point. Le bleu de l'entreprise change ? Vous éditez `blue/500`. Tous les sémantiques qui l'aliasent suivent, donc toutes les frames. Sans la couche primitive, vous devez retoucher chaque token sémantique un par un.\n\n" +
            "Et pourquoi ne pas appliquer les primitives directement sur les écrans ? Parce que les primitives ignorent l'intention et les modes. `blue/500` ne sait pas s'il est un fond de bouton ou une couleur de lien, et il ne change pas en mode sombre. Le sémantique porte le sens et le comportement multi-mode.\n\n" +
            "## Le nommage, là où tout se joue\n\n" +
            "Un token mal nommé est un token qu'on n'ose plus toucher. Quelques principes qui tiennent :\n\n" +
            "- **Structure catégorie/rôle/variante** : `text/default`, `text/muted`, `text/inverse`. Lisible, groupé, extensible.\n" +
            "- **Pas de couleur dans le nom sémantique** : jamais `text/blue`. Le jour où le lien passe au violet, le nom `text/blue` devient un mensonge. On nomme le rôle (`text/link`), pas la couleur.\n" +
            "- **Cohérence des échelles** : si vous numérotez en 50, 100… 900 pour le gris, faites-le pour toutes les familles. Un système mélangeant `500` et `dark` désoriente.\n" +
            "- **Groupes avec le slash** : le `/` crée la hiérarchie dans Figma. `space/inset/sm` se range tout seul sous `space > inset`.\n\n" +
            "> À retenir : le nom d'un token décrit son rôle, jamais sa valeur. `surface/raised` reste vrai que la carte soit blanche, grise ou anthracite. `card/white` devient faux dès le premier ajustement.\n\n" +
            "## Le scoping, pour éviter les erreurs d'application\n\n" +
            "Figma permet de limiter où une variable peut s'appliquer, via le **scoping**. Ouvrez une variable de nombre `radius/md` et restreignez-la au rayon de bordure : elle n'apparaîtra plus dans les menus de padding ou de taille de texte. Ça évite qu'un collègue applique un rayon comme espacement par erreur. Pareil pour restreindre une couleur au texte uniquement, ou au fond uniquement. Sur une grosse bibliothèque, le scoping réduit franchement les fautes d'usage.\n\n" +
            "## Le test de maturité\n\n" +
            "Un système de tokens est mûr quand un nouveau designer peut construire un écran sans jamais saisir une valeur en dur : ni un hexadécimal, ni un nombre de padding. Il pioche des tokens nommés par leur rôle. Si vous en êtes là, un changement de marque ou l'ajout d'un thème devient une opération d'une heure, pas d'une semaine.",
        },
        {
          id: "l14",
          title: "Quiz — Variables et tokens",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Vous basculez une frame en mode sombre, mais une carte reste blanche. Quelle est la cause la plus probable ?",
              options: [
                "La carte utilise un token sémantique qui n'a pas de mode Dark",
                "La carte a reçu une couleur primitive directement, or les primitives n'ont pas de modes",
                "Le mode Dark n'a pas été créé dans la collection",
                "La carte est détachée de la bibliothèque",
              ],
              correctIndex: 1,
              explanation:
                "Les primitives portent une valeur unique, sans mode. Appliquée directement, elle ne change pas quand on bascule. Il faut appliquer un token sémantique (surface/raised) qui, lui, pointe vers gray/50 en clair et gray/900 en sombre.",
            },
            {
              id: "q10",
              prompt:
                "Pourquoi nomme-t-on un token « text/link » plutôt que « text/blue » ?",
              options: [
                "Parce que Figma interdit les noms de couleur",
                "Parce que le nom décrit le rôle, qui reste vrai même si la couleur change un jour",
                "Parce que « blue » est réservé aux primitives",
                "Parce que les noms courts sont mieux indexés",
              ],
              correctIndex: 1,
              explanation:
                "Un token sémantique nomme une intention. Si les liens passent du bleu au violet, text/link reste exact alors que text/blue devient un mensonge qu'il faut renommer partout. Le rôle est stable, la couleur non.",
            },
            {
              id: "q11",
              prompt:
                "Quel est l'intérêt principal d'avoir une couche primitive sous la couche sémantique, plutôt que de mettre les couleurs directement dans les tokens sémantiques ?",
              options: [
                "Ça réduit le poids du fichier Figma",
                "Ça permet de refondre une nuance de marque en un seul point, propagé à tous les sémantiques qui l'aliasent",
                "Ça rend les modes clair/sombre inutiles",
                "Ça accélère le rendu du canvas",
              ],
              correctIndex: 1,
              explanation:
                "Les sémantiques aliasent les primitives. Changer blue/500 met à jour tous les tokens qui le référencent, donc toutes les frames. Sans cette couche, il faudrait éditer chaque token sémantique un par un. Ce n'est ni une question de poids ni de rendu.",
            },
            {
              id: "q12",
              prompt:
                "À quoi sert le scoping d'une variable dans Figma ?",
              options: [
                "À masquer la variable des autres fichiers",
                "À restreindre les propriétés où la variable peut s'appliquer, par exemple un rayon uniquement au border radius",
                "À verrouiller la valeur pour qu'elle ne change plus",
                "À traduire automatiquement la variable selon le mode",
              ],
              correctIndex: 1,
              explanation:
                "Le scoping limite les contextes d'application d'une variable. Un radius/md scopé au rayon n'apparaîtra plus dans les menus de padding ou de taille de texte, ce qui évite les erreurs d'usage sur une grosse bibliothèque. Ça n'affecte ni la valeur ni la traduction.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Grilles, responsive et prototypage avancé",
      lessons: [
        {
          id: "l15",
          title: "Grilles de mise en page et responsive",
          type: "text",
          duration: "14 min",
          body:
            "## Les layout grids\n\n" +
            "Une frame peut porter une ou plusieurs grilles de mise en page. Sélectionnez une frame, puis dans le panneau, ajoutez **Layout grid**. Trois types :\n\n" +
            "- **Grid** : une grille uniforme de carrés, utile pour du pixel-perfect fin, souvent réglée à 8 pixels pour coller à la base d'espacement.\n" +
            "- **Columns** : des colonnes verticales, le classique 12 colonnes du web. On règle le nombre, la gouttière (gutter) et la marge.\n" +
            "- **Rows** : des lignes horizontales, plus rare, utile pour un rythme vertical.\n\n" +
            "Une grille de 12 colonnes avec gouttière de 24 et marges de 32 sur un desktop de 1440, c'est un point de départ solide. On sauvegarde cette grille en **style de grille** pour la réappliquer d'un clic sur toutes les frames desktop.\n\n" +
            "## La grille cadre, l'auto-layout remplit\n\n" +
            "Distinction clé : la layout grid est un **repère visuel**, elle n'agit pas sur les calques. Ce sont les contraintes et l'auto-layout qui font que le contenu s'aligne dessus. La grille vous dit où poser les choses ; l'auto-layout les y maintient quand la taille change.\n\n" +
            "## Contraintes pour le redimensionnement\n\n" +
            "Sur un élément qui n'est pas dans un auto-layout, les **contraintes** décident de son comportement quand le parent est redimensionné. Ancré à gauche, à droite, centré, étiré (left and right), fixé en haut. Un bouton ancré en bas à droite d'une modale reste dans son coin quand la modale grandit. On règle ça dans la section **Constraints** du panneau, en haut à droite.\n\n" +
            "## Le responsive, en vrai\n\n" +
            "Figma ne fait pas de responsive automatique entre desktop et mobile comme le ferait un navigateur. On combine plusieurs leviers :\n\n" +
            "- **Auto-layout avec Fill** pour que les blocs s'étirent avec la largeur.\n" +
            "- **Min/max width** sur les éléments Fill, pour qu'une carte ne s'étire pas à l'infini ni ne s'écrase. On les règle dans le panneau, sous les champs de dimension.\n" +
            "- **Wrap** sur une frame auto-layout pour qu'une rangée de cartes passe à la ligne quand la largeur diminue, comme `flex-wrap` en CSS.\n" +
            "- **Modes de variables** liés à des breakpoints, sur les plans avancés, pour changer des espacements ou des tailles selon la largeur.\n\n" +
            "> À retenir : un écran qui « se redimensionne bien » dans Figma, c'est de l'auto-layout en Fill, des min/max bien posés, et du wrap là où il faut. La grille est un guide de composition, pas un moteur d'adaptation.\n\n" +
            "## Un exercice utile\n\n" +
            "Prenez une rangée de quatre cartes dans une frame auto-layout horizontale en wrap, chaque carte en `Fill` avec une largeur minimale de 240. Élargissez et rétrécissez la frame parente. Les cartes passent de quatre par ligne à deux, puis une, en gardant leur largeur minimale. Vous venez de simuler une grille responsive sans une ligne de code, et c'est exactement ce que le développeur va reproduire en CSS.",
        },
        {
          id: "l16",
          title: "Prototypage piloté par variables et conditions",
          type: "video",
          duration: "18 min",
          videoLabel: "Démo : un compteur de panier qui s'incrémente avec des variables et une condition",
          body:
            "## Le saut par rapport au prototypage de base\n\n" +
            "Le prototypage classique, c'est « clic sur ce bouton, va vers cet écran ». Puissant mais limité : il faut un écran par état. Avec les variables de prototype et les conditions, un même écran change de contenu selon une logique. On construit un mini panier qui compte des articles.\n\n" +
            "## Créer une variable de comptage\n\n" +
            "Dans le gestionnaire de variables, on crée une variable de nombre `cartCount` valant 0. On affiche cette valeur dans un texte : sélectionnez le calque texte du badge de panier, et dans le panneau, liez son contenu à la variable `cartCount` (icône variable sur le champ de texte). Le badge affiche maintenant « 0 » dynamiquement.\n\n" +
            "## Une action « Set variable »\n\n" +
            "On passe en onglet **Prototype**. On sélectionne le bouton « Ajouter au panier », on tire une interaction. Au lieu de « Navigate to », on choisit l'action **Set variable**. On cible `cartCount` et on lui donne la valeur `cartCount + 1`. Figma accepte les expressions simples dans ce champ. À chaque clic en preview, le compteur monte de un, sans changer d'écran. C'est nouveau et ça change beaucoup de choses.\n\n" +
            "## Ajouter une condition\n\n" +
            "On veut que le bouton « Commander » ne fasse rien tant que le panier est vide, et navigue vers le paiement dès qu'il y a au moins un article. On sélectionne le bouton, on ajoute une interaction, et on choisit **Conditional** (le bloc If/Else). La condition : `cartCount > 0`. Dans la branche vraie, action « Navigate to » vers l'écran de paiement. Dans la branche fausse, on peut ne rien faire ou afficher une alerte via une autre variable booléenne.\n\n" +
            "## Boolean pour afficher/masquer\n\n" +
            "On ajoute une variable booléenne `isEmpty`. On lie la visibilité du message « Votre panier est vide » à cette variable. Puis, dans l'action Set variable du bouton d'ajout, on met aussi `isEmpty` à faux. Le message disparaît dès le premier article. On pilote la visibilité d'un calque par une variable de prototype, sans dupliquer l'écran.\n\n" +
            "## Pourquoi c'est un vrai levier\n\n" +
            "Avant, tester un parcours à états multiples voulait dire dix écrans quasi identiques et un enfer de flèches. Là, un écran, quelques variables, deux conditions, et le prototype se comporte comme une petite appli. Les tests utilisateurs deviennent bien plus crédibles, et les développeurs comprennent la logique attendue sans qu'on la décrive dans un document à part.\n\n" +
            "## Piège de la démo\n\n" +
            "Si le compteur ne bouge pas en preview, vérifiez que le texte du badge est bien **lié à la variable** et pas juste un texte tapé « 0 ». Un texte statique ne réagit à aucune action Set variable. Le lien à la variable est ce qui rend l'affichage dynamique.",
        },
        {
          id: "l17",
          title: "Smart Animate et composants interactifs",
          type: "text",
          duration: "14 min",
          body:
            "## Smart Animate, le principe\n\n" +
            "Smart Animate anime la transition entre deux frames en repérant les calques qui portent le **même nom** et en interpolant leurs différences : position, taille, opacité, rotation, couleur. Un rond en haut à gauche sur la frame A, le même rond nommé pareil en bas à droite sur la frame B, et Smart Animate le fait glisser en douceur. La condition absolue : les calques doivent avoir des noms identiques d'une frame à l'autre.\n\n" +
            "On l'active dans l'interaction : type d'animation **Smart Animate**, avec une durée (300 ms est une valeur honnête pour une transition d'interface) et une courbe (`Ease out` pour un mouvement naturel qui décélère).\n\n" +
            "## Les cas où ça brille\n\n" +
            "- Un panneau qui se déplie : la même frame, deux hauteurs, Smart Animate étire.\n" +
            "- Un onglet actif qui glisse d'un item à l'autre : un même calque « indicateur » présent sur les deux frames.\n" +
            "- Une carte qui s'agrandit en modale : les éléments migrent vers leur nouvelle position au lieu d'apparaître d'un coup.\n\n" +
            "## Les cas où ça casse\n\n" +
            "Si vous dupliquez une frame et renommez des calques, Smart Animate ne les reconnaît plus et bascule sur un fondu brutal. Autre piège : trop d'éléments qui bougent en même temps donnent une animation confuse. Une bonne transition anime deux ou trois choses, pas trente.\n\n" +
            "## Composants interactifs\n\n" +
            "On peut poser des interactions **à l'intérieur d'un component set**, entre ses variants. Un interrupteur avec un variant `Off` et un variant `On` : on relie `Off` vers `On` sur l'événement `On click`, avec Smart Animate. Résultat, l'instance de l'interrupteur bascule toute seule en preview, sans qu'on ait à câbler quoi que ce soit sur l'écran. L'interaction voyage avec le composant.\n\n" +
            "C'est très pratique pour les états de survol : un variant `Default` vers un variant `Hover` sur l'événement `While hovering`. Chaque instance du bouton réagit au survol dans le prototype, gratuitement.\n\n" +
            "> À retenir : nommer ses calques proprement n'est pas de la cosmétique. Smart Animate et les composants interactifs reposent entièrement sur la correspondance des noms entre états. Un système bien nommé s'anime presque tout seul.\n\n" +
            "## Combiner avec les variables\n\n" +
            "On peut mélanger tout ça. Un composant interactif d'interrupteur qui bascule visuellement en Smart Animate, et en même temps une action Set variable qui passe un booléen `notifications` à vrai. L'utilisateur voit l'animation, et le reste du prototype réagit à l'état. C'est le niveau où un prototype Figma devient un support de test presque aussi parlant qu'un vrai développement, pour une fraction du temps.\n\n" +
            "## Une durée qui sonne juste\n\n" +
            "Entre 200 et 400 ms pour la plupart des transitions d'interface. En dessous de 150 ms, l'oeil rate le mouvement. Au-dessus de 500 ms, ça traîne et l'utilisateur attend. Réglez, testez en preview, ajustez : une bonne animation se sent plus qu'elle ne se voit.",
        },
        {
          id: "l18",
          title: "Quiz — Grilles et prototypage",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Quel énoncé décrit correctement une layout grid dans Figma ?",
              options: [
                "Elle redimensionne automatiquement les calques quand la frame change de taille",
                "Elle est un repère visuel ; ce sont l'auto-layout et les contraintes qui alignent réellement le contenu",
                "Elle remplace les contraintes",
                "Elle ne fonctionne que sur les frames mobiles",
              ],
              correctIndex: 1,
              explanation:
                "La grille ne bouge aucun calque. Elle guide la composition. L'alignement réel du contenu quand la taille change vient de l'auto-layout (Fill, wrap, min/max) et des contraintes. Confondre les deux mène à des maquettes qui semblent alignées mais cassent au redimensionnement.",
            },
            {
              id: "q14",
              prompt:
                "Dans un prototype, votre badge de panier affiche toujours « 0 » malgré une action Set variable qui incrémente cartCount. Pourquoi ?",
              options: [
                "L'action Set variable ne fonctionne qu'entre deux écrans différents",
                "Le texte du badge est statique et n'est pas lié à la variable cartCount",
                "cartCount doit être une variable string, pas number",
                "Il manque une transition Smart Animate",
              ],
              correctIndex: 1,
              explanation:
                "Set variable modifie bien la valeur de cartCount, mais un texte tapé à la main ne reflète rien. Il faut lier le contenu du calque texte à la variable pour que l'affichage soit dynamique. C'est l'erreur la plus fréquente sur ce type de prototype.",
            },
            {
              id: "q15",
              prompt:
                "Vous voulez qu'un bouton « Commander » ne navigue vers le paiement que si le panier contient au moins un article. Quel outil de prototypage utilisez-vous ?",
              options: [
                "Une transition Smart Animate",
                "Une interaction conditionnelle (If/Else) testant cartCount > 0",
                "Un variant supplémentaire du bouton",
                "Une contrainte ancrée en bas",
              ],
              correctIndex: 1,
              explanation:
                "L'interaction conditionnelle évalue une expression au clic et exécute la branche vraie ou fausse. Ici, cartCount > 0 déclenche la navigation, sinon rien. Smart Animate gère l'animation, pas la logique ; les variants et contraintes ne testent aucune condition.",
            },
            {
              id: "q16",
              prompt:
                "Une transition Smart Animate entre deux frames se transforme en simple fondu brutal. Quelle cause chercher en premier ?",
              options: [
                "La durée est réglée trop courte",
                "Les calques concernés n'ont pas le même nom d'une frame à l'autre",
                "Les frames n'ont pas la même taille",
                "Il faut activer le mode sombre",
              ],
              correctIndex: 1,
              explanation:
                "Smart Animate interpole les calques qui portent un nom identique entre les deux frames. Si les noms diffèrent, Figma ne fait plus le lien et retombe sur un fondu. C'est pourquoi un nommage stable est indispensable pour animer proprement.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Bibliothèque, versioning et handoff dev",
      lessons: [
        {
          id: "l19",
          title: "Publier et organiser une bibliothèque",
          type: "text",
          duration: "14 min",
          body:
            "## De fichier à bibliothèque\n\n" +
            "Un fichier Figma devient une **bibliothèque** quand vous publiez ses composants, styles et variables pour les rendre disponibles dans d'autres fichiers. C'est ce qui transforme un beau fichier isolé en système partagé par l'équipe.\n\n" +
            "Pour publier : ouvrez le panneau **Assets** (icône livre à gauche), puis l'icône de bibliothèque, ou depuis le menu principal, **Libraries**. Vous voyez la liste des composants, styles et variables à publier. Cochez, ajoutez une note de version, cliquez sur **Publish**. Les autres fichiers de l'équipe peuvent alors activer cette bibliothèque et piocher dedans.\n\n" +
            "## Structurer le fichier bibliothèque\n\n" +
            "Un fichier de bibliothèque bien rangé, c'est des **pages dédiées** :\n\n" +
            "- une page `Foundations` : couleurs, typographie, espacements, sous forme de spécimens visuels,\n" +
            "- une page `Components` : les composants principaux, groupés par famille, chacun avec ses variants alignés,\n" +
            "- une page `Patterns` : des assemblages plus gros (en-têtes, cartes complètes, formulaires),\n" +
            "- éventuellement une page `Playground` ou `WIP` pour ce qui n'est pas encore prêt à être publié.\n\n" +
            "Ne publiez jamais depuis un fichier où les composants principaux traînent au milieu des écrans de test. La séparation nette entre sources et usages est la première marque d'un système sérieux.\n\n" +
            "## Documenter dans le fichier\n\n" +
            "Ajoutez à côté de chaque composant une courte note : quand l'utiliser, quand ne pas l'utiliser, les états disponibles. Figma permet aussi d'ajouter une **description** à chaque composant (dans le panneau, sous son nom) qui s'affiche au survol dans les Assets. Une phrase du genre « Bouton d'action principale. Un seul par écran. » vaut mieux qu'un composant muet que chacun interprète à sa façon.\n\n" +
            "## Recevoir et gérer les mises à jour\n\n" +
            "Quand la bibliothèque évolue, les fichiers qui l'utilisent reçoivent une notification de mise à jour. L'utilisateur voit les changements et choisit de les accepter. Il ne subit pas une modification en douce : il valide. C'est important, car une mise à jour d'un composant très utilisé peut décaler des dizaines d'écrans. On prévient l'équipe avant de pousser un changement structurant.\n\n" +
            "> À retenir : publier n'est pas un bouton qu'on presse à la va-vite. Chaque publication porte une note de version et, idéalement, un mot dans le canal de l'équipe. Un système, c'est autant de communication que de fichiers.\n\n" +
            "## Le piège des variables non publiées\n\n" +
            "Erreur classique : on publie les composants mais on oublie de publier les **collections de variables**. Résultat, les fichiers consommateurs voient les composants mais pas les tokens de couleur, et les couleurs s'affichent comme des valeurs figées sans lien. Vérifiez toujours que les variables sont bien dans la liste de publication, à côté des composants et des styles.",
        },
        {
          id: "l20",
          title: "Versionner : historique, branches, changelog",
          type: "text",
          duration: "13 min",
          body:
            "## L'historique de versions\n\n" +
            "Figma enregistre l'historique en continu. Menu principal, **Show version history**, ouvre un panneau à droite avec la timeline. Vous pouvez remonter à n'importe quel point, prévisualiser, et restaurer. Utile après une manip malheureuse, mais l'historique automatique est fin et bavard.\n\n" +
            "Le vrai geste pro, c'est de **nommer des versions** aux moments clés : « v1.2 — refonte des boutons », « Avant migration variables ». On sélectionne un point de l'historique, on clique sur les trois points, **Add to version history**, et on lui donne un nom parlant. Ces jalons nommés sont vos points de retour fiables au milieu du bruit.\n\n" +
            "## Les branches\n\n" +
            "Sur les plans Organization et Enterprise, Figma propose des **branches**, calquées sur Git. Vous créez une branche depuis le fichier principal, vous y travaillez sur une évolution risquée sans toucher au système en production, puis vous ouvrez une **demande de fusion** (merge) revue par un pair.\n\n" +
            "C'est la façon propre de retravailler un composant central : la branche isole le chantier, l'équipe continue sur la version stable, et la fusion se fait quand c'est prêt et validé. Sans branches, un designer qui refond les boutons casse le fichier pour tout le monde pendant deux jours.\n\n" +
            "Au moment de fusionner, Figma affiche les **conflits** si deux personnes ont touché le même composant. On les résout à la main, comme un merge de code. C'est un peu déroutant la première fois, très salvateur ensuite.\n\n" +
            "## Le changelog de bibliothèque\n\n" +
            "Chaque publication de bibliothèque peut porter une note. Prenez l'habitude d'écrire ce qui change, façon changelog : « Ajout du variant Disabled sur Input », « Renommage token brand/500 en action/primary ». Les consommateurs de la bibliothèque lisent cette note avant d'accepter la mise à jour, et un renommage de token annoncé évite la panique quand des couleurs semblent disparaître.\n\n" +
            "> À retenir : une version nommée avant chaque gros chantier, une branche pour les refontes risquées, une note claire à chaque publication. Ces trois habitudes coûtent cinq minutes et sauvent des demi-journées de récupération.\n\n" +
            "## Une cadence de publication\n\n" +
            "Évitez de publier vingt fois par jour au fil de micro-ajustements : chaque publication génère une notification et du travail de validation chez les consommateurs. Regroupez les changements et publiez par lots cohérents, avec une note qui les résume. Sur une équipe active, une à deux publications par semaine, bien documentées, valent mieux qu'un flux permanent de petites mises à jour que plus personne ne lit.",
        },
        {
          id: "l21",
          title: "Handoff développeur avec Dev Mode",
          type: "video",
          duration: "17 min",
          videoLabel: "Démo : inspecter une carte, lire les specs et les tokens en Dev Mode",
          body:
            "## Ce qu'est Dev Mode\n\n" +
            "Dev Mode est un espace de Figma pensé pour les développeurs. On y bascule via l'interrupteur en haut à droite, ou avec `Shift + D`. L'interface change : plus d'outils de dessin, mais des mesures, des valeurs, du code et un suivi de ce qui est prêt à intégrer. C'est une fonctionnalité de siège payant, à connaître car elle conditionne l'accès.\n\n" +
            "## Inspecter un élément\n\n" +
            "On sélectionne la carte. Le panneau de droite affiche ses dimensions, son padding, son rayon, ses couleurs. Là où c'est précieux : quand une couleur vient d'une variable, Dev Mode montre le **nom du token** (`surface/raised`) et pas seulement l'hexadécimal. Le développeur voit qu'il doit utiliser sa variable CSS correspondante, pas coder une couleur en dur. Le pont entre design tokens et code passe par là.\n\n" +
            "## Mesurer les espacements\n\n" +
            "En survolant un autre élément avec la carte sélectionnée, Figma affiche les distances entre les deux, en pixels. Le développeur relève le gap réel entre deux blocs sans deviner. On voit aussi le padding intérieur de l'auto-layout, ce qui se traduit directement en `padding` et `gap` CSS. C'est là que l'auto-layout bien fait porte ses fruits : les valeurs sont propres et lisibles.\n\n" +
            "## Le code généré\n\n" +
            "Dev Mode propose un extrait de code pour l'élément sélectionné, en CSS par défaut, ou dans d'autres cibles (iOS, Android). Un exemple typique pour la carte :\n\n" +
            "```css\n" +
            ".card {\n" +
            "  display: flex;\n" +
            "  flex-direction: column;\n" +
            "  gap: 16px;\n" +
            "  padding: 24px;\n" +
            "  border-radius: 8px;\n" +
            "  background: var(--surface-raised);\n" +
            "}\n" +
            "```\n\n" +
            "Ce code n'est pas à copier tel quel en production, c'est une base de lecture. Mais il traduit fidèlement l'auto-layout en flexbox, ce qui montre encore pourquoi on construit les maquettes comme le navigateur pense.\n\n" +
            "## Marquer « Ready for dev » et annoter\n\n" +
            "Une section ou une frame peut être marquée **Ready for dev**, ce qui la signale aux développeurs comme validée et intégrable. On peut aussi poser des **annotations** : sélectionner un élément, ajouter une note qui précise un comportement (« ce bouton est désactivé tant que le formulaire est invalide »). Ces annotations vivent dans le fichier, à côté du visuel, au lieu de se perdre dans un document séparé.\n\n" +
            "## Comparer les changements\n\n" +
            "Dev Mode offre une vue **Compare changes** qui montre ce qui a bougé depuis la dernière fois que le développeur a regardé. Sur un écran retravaillé, il repère en un coup d'oeil que seul le padding d'un bloc a changé, sans relire tout l'écran. Ça évite les intégrations à l'aveugle et les régressions.\n\n" +
            "> À retenir : un bon handoff, ce n'est pas une capture d'écran envoyée par message. C'est un fichier en Dev Mode, avec des tokens nommés, des sections marquées prêtes, et des annotations là où le comportement n'est pas évident. Le développeur lit le design, il ne le devine pas.",
        },
        {
          id: "l22",
          title: "Quiz — Bibliothèque et handoff",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Après publication, un fichier consommateur voit vos composants mais les couleurs apparaissent comme des valeurs figées sans lien aux tokens. Quelle est la cause la plus probable ?",
              options: [
                "Les composants ont été détachés",
                "Les collections de variables n'ont pas été incluses dans la publication",
                "Le fichier consommateur est sur un autre plan Figma",
                "Le mode sombre n'a pas été activé",
              ],
              correctIndex: 1,
              explanation:
                "On oublie souvent de publier les collections de variables en même temps que les composants et les styles. Sans elles, les fichiers consommateurs récupèrent les composants mais pas les tokens de couleur, qui s'affichent alors sans lien. Il faut vérifier la présence des variables dans la liste de publication.",
            },
            {
              id: "q18",
              prompt:
                "Pourquoi travailler une refonte du composant bouton dans une branche plutôt que directement dans le fichier principal ?",
              options: [
                "Les branches réduisent le poids du fichier",
                "La branche isole le chantier pour ne pas casser la version stable utilisée par l'équipe, avec une fusion revue avant intégration",
                "Les branches publient automatiquement la bibliothèque",
                "C'est la seule façon d'utiliser les variables",
              ],
              correctIndex: 1,
              explanation:
                "La branche permet de retravailler un composant central sans perturber la production. L'équipe continue sur le fichier stable, et la fusion, revue par un pair, intègre le travail quand il est prêt. C'est le même principe que les branches Git.",
            },
            {
              id: "q19",
              prompt:
                "En Dev Mode, quel intérêt qu'une couleur affiche le nom de son token (surface/raised) plutôt que seulement son code hexadécimal ?",
              options: [
                "Le nom du token est plus court à lire",
                "Il indique au développeur d'utiliser la variable correspondante dans le code, au lieu de coder une couleur en dur",
                "L'hexadécimal est masqué pour des raisons de sécurité",
                "Ça change la couleur affichée à l'écran",
              ],
              correctIndex: 1,
              explanation:
                "Le token nommé fait le pont entre le design system et le code. Le développeur sait qu'il doit référencer sa variable CSS, ce qui garde le thème cohérent et permet les modes clair/sombre côté code. Un hexadécimal seul l'inciterait à coder la couleur en dur.",
            },
            {
              id: "q20",
              prompt:
                "Quelle habitude de publication de bibliothèque évite de noyer l'équipe sous les notifications ?",
              options: [
                "Publier après chaque micro-ajustement pour tout tracer",
                "Regrouper les changements et publier par lots cohérents, avec une note qui les résume",
                "Ne jamais écrire de note de version",
                "Désactiver les notifications de mise à jour",
              ],
              correctIndex: 1,
              explanation:
                "Chaque publication déclenche une notification et un travail de validation chez les consommateurs. Publier par lots cohérents, une à deux fois par semaine avec une note claire, garde le changelog lisible et respecte le temps de l'équipe. Publier sans cesse ou sans note rend les mises à jour illisibles.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
