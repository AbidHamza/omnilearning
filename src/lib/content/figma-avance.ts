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
  hours: 5,
  rating: 4.8,
  learners: 1420,
  accent: "#7B61FF",
  image: "/covers/figma-avance.svg",
  language: "Français",
  software: "Figma",
  prerequisites: [
    "Savoir créer des frames, dessiner des formes et poser du texte dans Figma",
    "Avoir déjà fait au moins une maquette d'écran, même sans composants",
    "Connaître les bases : calques, frames, export (on ne revient pas dessus)",
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
  contentTypes: ["Leçons écrites", "Démos commentées", "Schémas annotés", "Quiz interactifs", "Cas pratiques"],
  parts: [
    {
      id: "p1",
      title: "Auto-layout, pour de vrai",
      lessons: [
        {
          id: "l1",
          title: "Ce que l'auto-layout résout (et ce qu'il n'est pas)",
          type: "text",
          duration: "16 min",
          body:
            "## Le lundi où les textes allemands sont arrivés\n\n" +
            "Situation vécue dans à peu près toutes les équipes produit : la maquette est validée en français, puis la traduction allemande tombe. « Ajouter au panier » devient « In den Warenkorb legen », trente pour cent plus long. Sur un fichier fait à la main, chaque bouton déborde, chaque carte a son prix qui chevauche le titre, et tu passes ta journée à décaler des calques à la souris sur vingt-quatre écrans. Sur un fichier construit en auto-layout, tu colles les textes traduits et tout se replace tout seul. Même maquette, même deadline, une journée d'écart.\n\n" +
            "L'auto-layout, c'est un moteur de disposition attaché à une frame. Il empile ses enfants dans une direction, gère l'espace entre eux, et se redimensionne quand le contenu change. Ce n'est pas un gadget de confort : c'est ce qui fait la différence entre un dessin d'interface et une maquette qui se comporte comme la vraie interface.\n\n" +
            "## Le parallèle avec flexbox, à connaître par coeur\n\n" +
            "Les développeurs qui reçoivent tes maquettes pensent en CSS. L'auto-layout est calqué sur flexbox, et la correspondance est presque terme à terme :\n\n" +
            "| Réglage Figma | Équivalent CSS |\n" +
            "| --- | --- |\n" +
            "| Direction (vertical/horizontal) | flex-direction |\n" +
            "| Gap entre les éléments | gap |\n" +
            "| Padding | padding |\n" +
            "| Alignement (grille à 9 points) | align-items + justify-content |\n" +
            "| Gap en Auto | justify-content: space-between |\n" +
            "| Hug | width: fit-content |\n" +
            "| Fill | flex: 1 |\n" +
            "| Wrap | flex-wrap: wrap |\n\n" +
            "Retiens ce tableau : quand un développeur te demande « c'est quoi le gap ici ? », il lit littéralement ton panneau Auto layout. Une maquette bien construite se traduit en CSS sans interprétation, et c'est un argument très concret pour vendre l'auto-layout à une équipe qui traîne des pieds.\n\n" +
            "## Mettre une frame en auto-layout\n\n" +
            "Sélectionne deux ou trois calques, puis `Shift + A`. Figma crée une frame auto-layout autour d'eux, en devinant la direction d'après leur disposition. Tu peux aussi partir d'une frame existante et cliquer sur le `+` de la section **Auto layout** du panneau de droite. Pour retirer l'auto-layout d'une frame sans la détruire : `Alt + Shift + A`.\n\n" +
            "Trois réglages de base apparaissent :\n\n" +
            "- la **direction** : horizontale, verticale, ou **wrap** (les enfants passent à la ligne, disponible depuis 2023),\n" +
            "- l'**espacement entre les éléments**, le gap,\n" +
            "- le **padding** interne, réglable côté par côté.\n\n" +
            "```figure\n" +
            "{\"caption\": \"L'anatomie d'une frame auto-layout : direction du flux, gap entre enfants, padding interne\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\" font-family=\"ui-monospace, monospace\" font-size=\"12\">\n" +
            "<title>Frame auto-layout : direction, gap et padding</title>\n" +
            "<text x=\"40\" y=\"26\" fill=\"currentColor\" opacity=\"0.8\">Frame auto-layout (vertical)</text>\n" +
            "<rect x=\"40\" y=\"40\" width=\"390\" height=\"236\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/>\n" +
            "<rect x=\"76\" y=\"76\" width=\"318\" height=\"44\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\"/>\n" +
            "<rect x=\"76\" y=\"76\" width=\"318\" height=\"44\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"90\" y=\"103\" fill=\"currentColor\" opacity=\"0.7\">enfant 1</text>\n" +
            "<rect x=\"76\" y=\"136\" width=\"318\" height=\"44\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\"/>\n" +
            "<rect x=\"76\" y=\"136\" width=\"318\" height=\"44\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"90\" y=\"163\" fill=\"currentColor\" opacity=\"0.7\">enfant 2</text>\n" +
            "<rect x=\"76\" y=\"196\" width=\"318\" height=\"44\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\"/>\n" +
            "<rect x=\"76\" y=\"196\" width=\"318\" height=\"44\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"90\" y=\"223\" fill=\"currentColor\" opacity=\"0.7\">enfant 3</text>\n" +
            "<line x1=\"58\" y1=\"40\" x2=\"58\" y2=\"76\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<line x1=\"52\" y1=\"58\" x2=\"64\" y2=\"58\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<line x1=\"346\" y1=\"120\" x2=\"346\" y2=\"136\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<line x1=\"340\" y1=\"128\" x2=\"352\" y2=\"128\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<line x1=\"412\" y1=\"76\" x2=\"412\" y2=\"228\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<polygon points=\"406,228 418,228 412,240\" fill=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"456\" y=\"64\" fill=\"currentColor\" class=\"fig-accent\">padding : 36</text>\n" +
            "<text x=\"456\" y=\"132\" fill=\"currentColor\" class=\"fig-accent\">gap : 16</text>\n" +
            "<text x=\"456\" y=\"200\" fill=\"currentColor\" class=\"fig-accent\">direction</text>\n" +
            "<text x=\"456\" y=\"218\" fill=\"currentColor\" opacity=\"0.7\">(le flux empile)</text>\n" +
            "<text x=\"456\" y=\"258\" fill=\"currentColor\" opacity=\"0.7\">chaque enfant :</text>\n" +
            "<text x=\"456\" y=\"276\" fill=\"currentColor\" opacity=\"0.7\">Hug ou Fill</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "## Ce que l'auto-layout n'est pas\n\n" +
            "Ce n'est pas un système de positionnement libre. Dès qu'une frame est en auto-layout, ses enfants sont ordonnés dans un flux. Tu ne peux plus glisser un élément n'importe où sans changer son rang dans la pile. Ça déroute au début, surtout en venant de Sketch ou d'Illustrator, et c'est la raison pour laquelle certains designers abandonnent au bout d'une heure. Tiens deux jours : le déclic vient vite.\n\n" +
            "Ce n'est pas non plus magique pour le responsive multi-écran. L'auto-layout gère l'adaptation au contenu (un texte plus long pousse le reste), pas l'adaptation à la largeur d'écran toute seule. Le vrai responsive combine auto-layout, redimensionnement `Fill`, min/max et parfois des variables. On y vient en partie 4.\n\n" +
            "Dernier point de vocabulaire : un **groupe** (`Ctrl + G`) n'est pas une frame auto-layout. Un groupe est un simple paquet de calques, sans padding, sans flux, sans comportement. Les groupes qui traînent dans un fichier de système sont presque toujours des frames ratées. Je te conseille de les traquer : sélectionne, `Shift + A`, et le paquet devient pilotable.\n\n" +
            "## Imbriquer, et penser en poupées russes\n\n" +
            "Une vraie page n'est pas une frame auto-layout, c'en est trente. La page est une pile verticale ; dedans, un header horizontal ; dedans, une frame de liens ; dedans, des boutons. Chaque niveau règle sa direction, son gap et son padding, et l'ensemble respire d'un bloc : supprime une section entière, tout remonte ; insère une bannière, tout descend.\n\n" +
            "Deux gestes pour naviguer dans ces poupées russes sans t'énerver. Un : la touche `Entrée` descend d'un niveau dans la sélection et `Échap` remonte, bien plus fiable que le double-clic qui rate son étage. Deux : quand tu glisses un calque dans une frame auto-layout, Figma affiche une barre d'insertion à l'endroit où il va tomber. Lâche seulement quand la barre est au bon rang, sinon tu passeras ta soirée à réordonner.\n\n" +
            "## À toi\n\n" +
            "Prends un bouton fait à la main : un rectangle plus un texte centré. Objectif : qu'il survive à n'importe quel libellé sans que tu touches quoi que ce soit.\n\n" +
            "> Correction : sélectionne les deux calques, `Shift + A`. Le rectangle devient inutile, supprime-le et mets sa couleur en fond de la frame. Règle le padding à 12 en haut et en bas, 20 à gauche et à droite, largeur et hauteur en Hug. Change le texte de « Valider » à « S'inscrire maintenant » : le bouton s'élargit seul, le texte reste calé. Tu viens de fabriquer un composant qui ne cassera jamais sur la longueur du libellé, y compris en allemand.\n\n" +
            "Règle d'équipe pour finir : dans un fichier qui livre du système, à peu près tout est en auto-layout, sauf les illustrations et les schémas libres. Si tu te surprends à aligner des éléments à la main plus de deux fois, c'est qu'il manque une frame auto-layout.",
        },
        {
          id: "l2",
          title: "Direction, redimensionnement Hug/Fill/Fixed, ordre",
          type: "video",
          duration: "16 min",
          videoLabel: "Démo : régler les trois modes de redimensionnement sur une carte",
          body:
            "## Ce qu'on fabrique dans la démo\n\n" +
            "On part d'une carte produit : image en haut, puis un bloc texte avec titre et prix, puis un bouton. Objectif : que la carte tienne quel que soit le contenu, du titre de trois mots au titre de trois lignes.\n\n" +
            "## Les trois modes de redimensionnement\n\n" +
            "Chaque frame auto-layout, et chacun de ses enfants, a un réglage de largeur et un réglage de hauteur. Trois valeurs possibles, c'est le coeur du sujet :\n\n" +
            "- **Fixed** : la dimension est verrouillée à une valeur en pixels. L'élément ne bouge pas, même si le contenu déborde.\n" +
            "- **Hug** : la frame se resserre exactement autour de ses enfants. C'est le bon réglage pour un bouton, il fait la taille de son texte plus le padding.\n" +
            "- **Fill** : l'élément prend toute la place disponible dans son parent. Un titre en `Fill` occupe toute la largeur de la carte et passe à la ligne au lieu de déborder.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le même enfant dans le même conteneur, selon son mode de redimensionnement horizontal\"}\n" +
            "<svg viewBox=\"0 0 640 290\" role=\"img\" font-family=\"ui-monospace, monospace\" font-size=\"12\">\n" +
            "<title>Comparaison des modes Hug, Fill et Fixed</title>\n" +
            "<text x=\"48\" y=\"70\" fill=\"currentColor\" class=\"fig-accent\">Hug</text>\n" +
            "<rect x=\"140\" y=\"40\" width=\"320\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<rect x=\"152\" y=\"52\" width=\"120\" height=\"28\" rx=\"3\" fill=\"currentColor\" opacity=\"0.15\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"164\" y=\"71\" fill=\"currentColor\" opacity=\"0.8\">bouton</text>\n" +
            "<text x=\"480\" y=\"70\" fill=\"currentColor\" opacity=\"0.7\">colle au contenu</text>\n" +
            "<text x=\"48\" y=\"165\" fill=\"currentColor\" class=\"fig-accent\">Fill</text>\n" +
            "<rect x=\"140\" y=\"135\" width=\"320\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<rect x=\"152\" y=\"147\" width=\"296\" height=\"28\" rx=\"3\" fill=\"currentColor\" opacity=\"0.15\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"164\" y=\"166\" fill=\"currentColor\" opacity=\"0.8\">bouton</text>\n" +
            "<text x=\"480\" y=\"165\" fill=\"currentColor\" opacity=\"0.7\">prend la place</text>\n" +
            "<text x=\"48\" y=\"260\" fill=\"currentColor\" class=\"fig-accent\">Fixed</text>\n" +
            "<rect x=\"140\" y=\"230\" width=\"320\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<rect x=\"152\" y=\"242\" width=\"180\" height=\"28\" rx=\"3\" fill=\"currentColor\" opacity=\"0.15\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"164\" y=\"261\" fill=\"currentColor\" opacity=\"0.8\">bouton (180 px)</text>\n" +
            "<text x=\"480\" y=\"260\" fill=\"currentColor\" opacity=\"0.7\">ne bouge jamais</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "Dans le panneau de droite, ce sont les deux menus déroulants à côté des champs W et H. Dans la démo on passe par les menus pour bien voir les libellés, mais note le double-clic malin : double-cliquer sur le bord d'une frame la met en Hug sur cet axe.\n\n" +
            "## Le piège numéro un\n\n" +
            "Le titre déborde de la carte ? Neuf fois sur dix, il est en `Fixed` ou en `Hug` horizontal alors qu'il devrait être en `Fill`. En `Hug`, un texte grandit vers la droite sans jamais passer à la ligne. Passe-le en `Fill container` : il se limite à la largeur de la carte et wrappe proprement.\n\n" +
            "Autre piège : la carte entière en `Fixed` en hauteur. Ajoute une ligne de description et le contenu passe sous le bouton, coupé. Mets la hauteur de la carte en `Hug` pour qu'elle grandisse avec son contenu.\n\n" +
            "Troisième cas, plus sournois : un `Hug` qui semble ne pas marcher. Si une frame en Hug ne se resserre pas, c'est presque toujours qu'un de ses enfants est en Fill. Hug et Fill se définissent l'un par rapport à l'autre : un parent ne peut pas coller à un enfant qui, lui, attend de remplir le parent. Figma résout ce conflit en traitant l'enfant comme du contenu à taille minimale, et le résultat surprend. Quand un redimensionnement te semble illogique, remonte la chaîne parent par parent et vérifie qui est en quoi.\n\n" +
            "## Direction et ordre\n\n" +
            "La direction se change en un clic, horizontale ou verticale, dans le panneau Auto layout. Pour l'ordre : dans une frame verticale, l'élément le plus haut dans le panneau des calques est le plus haut à l'écran. Tu réordonnes soit dans l'arbre des calques, soit en glissant l'élément dans le canvas, Figma insère une barre pour montrer où il va tomber. Au clavier : `Ctrl + [` et `Ctrl + ]` déplacent l'élément dans la pile.\n\n" +
            "## Le récap de la démo\n\n" +
            "1. Frame carte : largeur `Fixed` à 280, hauteur `Hug`.\n" +
            "2. Image : largeur `Fill`, hauteur `Fixed` à 160.\n" +
            "3. Titre et prix : largeur `Fill`, hauteur `Hug`.\n" +
            "4. Bouton : largeur `Fill` pour qu'il s'étire sur toute la carte.\n\n" +
            "Résultat : on rallonge le titre, on change le prix, on traduit le bouton, la carte s'adapte sans qu'on touche une seule position. C'est ce squelette exact que tu retrouveras dans la carte du design system en partie 2.",
        },
        {
          id: "l3",
          title: "Padding, gap, alignement et position absolue",
          type: "text",
          duration: "16 min",
          body:
            "## Padding indépendant par côté\n\n" +
            "Par défaut, Figma propose un padding uniforme. Clique sur l'icône des réglages détaillés (les quatre côtés) dans le panneau Auto layout pour saisir haut, bas, gauche et droite séparément. Astuce de saisie qui fait gagner du temps : dans le champ de padding, tu peux taper deux valeurs séparées par une virgule, `12, 20`, pour régler vertical et horizontal d'un coup.\n\n" +
            "Cas classique : une alerte avec une icône collée à gauche veut 16 partout sauf 12 à gauche, pour équilibrer l'oeil. L'optique prime sur la géométrie, c'est toi qui doses côté par côté.\n\n" +
            "Autre geste à connaître : survole une frame avec `Alt` enfoncé et Figma affiche les distances avec les éléments voisins. C'est le moyen le plus rapide de vérifier qu'un padding est bien celui que tu crois, sans ouvrir aucun panneau.\n\n" +
            "## Gap, et le fameux « space between »\n\n" +
            "Le gap, c'est l'espace entre chaque enfant. Règle-le sur une valeur de ton échelle, jamais un chiffre au hasard : 8, 12, 16, 24. On construira cette échelle en partie 3, et à partir de là le gap ne sera même plus un chiffre, ce sera une variable.\n\n" +
            "Il existe un mode spécial. Si tu mets le gap sur **Auto**, Figma répartit l'espace restant entre les éléments. C'est le `justify-content: space-between` de CSS. Parfait pour une barre de navigation : le logo colle à gauche, les liens à droite, l'espace au milieu se gère seul quand la frame s'élargit. Condition : la frame doit être plus large que la somme de ses enfants, donc en `Fixed` ou `Fill`, pas en `Hug`. En Hug, elle se resserre et il n'y a aucun espace à distribuer, le réglage semble ne rien faire.\n\n" +
            "Détail que peu de gens connaissent : le gap accepte une valeur **négative**. Les enfants se chevauchent alors les uns les autres, ce qui sert exactement à un cas, la rangée d'avatars empilés en éventail. Gap à -8, et les cercles se recouvrent proprement.\n\n" +
            "## Alignement : la grille à neuf points\n\n" +
            "Dans le panneau Auto layout, un petit carré affiche neuf points. Il définit où les enfants se calent dans l'espace disponible : en haut à gauche, centré, en bas à droite. Sur une frame horizontale, l'axe vertical de cette grille gère l'alignement des éléments entre eux, haut, milieu ou bas.\n\n" +
            "Il y a aussi un alignement sur la **ligne de base du texte**, précieux quand tu mélanges un gros chiffre et une petite unité. « 29 € » avec un chiffre en 32 et un symbole en 16 : sans alignement baseline, le « € » flotte au milieu ; avec, il s'assoit sur le bas des chiffres, comme en typographie de presse.\n\n" +
            "## Sortir un élément du flux : la position absolue\n\n" +
            "Parfois tu veux un badge « -20% » posé dans le coin d'une carte, sans qu'il pousse le reste. Sélectionne le badge, puis active **Absolute position** dans le panneau (l'icône apparaît sur les enfants d'une frame auto-layout). L'élément quitte le flux. Tu le positionnes librement avec des contraintes classiques, ancré en haut à droite par exemple, et il flotte au-dessus sans déranger l'empilement.\n\n" +
            "> À retenir : position absolue = « je reste dans cette frame et je profite de ses contraintes, mais je ne compte pas dans l'empilement ». C'est le seul moyen propre de superposer dans un auto-layout. Si tu vois quelqu'un sortir le badge de la carte pour le poser par-dessus au niveau de la page, arrête-le : au premier déplacement de la carte, le badge reste orphelin au milieu du canvas.\n\n" +
            "## Stacking : qui passe devant\n\n" +
            "Dans une frame avec des éléments qui se chevauchent (gap négatif, wrap serré), l'ordre de superposition compte. Le réglage **Canvas stacking**, dans les options avancées de l'auto-layout, décide si le premier calque de la liste passe devant ou derrière. Ton éventail d'avatars se chevauche dans le mauvais sens ? C'est cette case, et uniquement cette case.\n\n" +
            "## Le détail des contours\n\n" +
            "Un piège discret pour finir : par défaut, les contours (strokes) ne comptent pas dans la mise en page. Un input dont la bordure passe de 1 à 2 au focus voit sa bordure mordre sur l'espace voisin, et deux champs empilés semblent se rapprocher d'un pixel au changement d'état. Dans les réglages avancés de l'auto-layout (les trois points du panneau), l'option **Strokes : included in layout** fait entrer la bordure dans l'espace occupé, l'équivalent d'un `box-sizing` choisi en CSS. Pour les composants de formulaire dont la bordure varie selon l'état, active-la : focus et erreur garderont exactement le même encombrement, et rien ne bougera autour.\n\n" +
            "## À toi : la barre de navigation\n\n" +
            "Construis une navbar de 1440 de large : logo à gauche, trois liens au centre-droit, un bouton « Connexion » tout à droite, le tout aligné verticalement au milieu, avec 32 de padding horizontal.\n\n" +
            "> Correction : une frame horizontale en largeur `Fixed` 1440, hauteur `Hug`, padding 32 à gauche et à droite, 16 en haut et en bas. Dedans : le logo, puis une frame `liens` horizontale en Hug avec gap 24 contenant les trois liens, puis le bouton. Gap de la navbar sur **Auto**. Alignement : la rangée du milieu de la grille à neuf points. Élargis la navbar à 1920 : le logo et le bouton restent collés aux bords, les liens suivent le bouton. Si tu voulais les liens exactement centrés, il faudrait une autre structure (trois zones en Fill), et c'est un bon exercice bonus.\n\n" +
            "Trois réflexes à garder de cette leçon : `Alt` pour lire les distances, gap Auto pour les répartitions, position absolue pour les badges. Le reste, c'est de l'échelle d'espacement, et justement, la partie 3 la transforme en tokens.",
        },
        {
          id: "l4",
          title: "Quiz : Auto-layout",
          type: "quiz",
          duration: "7 min",
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
                "Tu veux un logo collé à gauche et des liens collés à droite dans une barre, avec l'espace au milieu qui s'ajuste à la largeur. Que fais-tu ?",
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
                "Tu ajoutes un badge de promotion dans le coin d'une carte auto-layout, mais il pousse l'image vers le bas. Pourquoi, et comment l'éviter ?",
              options: [
                "Le badge est trop grand ; il faut le réduire",
                "Le badge compte dans l'empilement du flux ; il faut activer sa position absolue",
                "La carte est en Hug ; il faut la passer en Fixed",
                "Il faut détacher le badge de la carte",
              ],
              correctIndex: 1,
              explanation:
                "Tant qu'un enfant est dans le flux auto-layout, il occupe une place et décale les autres. La position absolue le sort du flux : il reste dans la frame, profite des contraintes, mais ne compte plus dans l'empilement. Le sortir de la carte lui ferait perdre l'ancrage.",
            },
            {
              id: "q4",
              prompt:
                "Une carte est en hauteur Fixed. Tu ajoutes une ligne de description : le texte passe sous le bouton et se retrouve coupé. Le meilleur réflexe ?",
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
            {
              id: "q21",
              prompt:
                "Une frame en Hug refuse de se resserrer autour de son contenu. Quelle cause vérifier en premier ?",
              options: [
                "Un de ses enfants est en Fill, ce qui entre en conflit avec le Hug du parent",
                "Le padding est trop petit",
                "La frame contient trop de calques",
                "Le gap est réglé sur Auto",
              ],
              correctIndex: 0,
              explanation:
                "Un parent ne peut pas coller à un enfant qui attend de le remplir : Hug et Fill se définissent l'un par rapport à l'autre. Quand un redimensionnement semble illogique, on remonte la chaîne parent par parent pour repérer le conflit. Le padding et le nombre de calques n'empêchent jamais un Hug.",
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
          duration: "15 min",
          body:
            "## L'histoire du bouton devenu rose\n\n" +
            "Anecdote véridique d'une équipe que j'ai accompagnée : un designer prépare une page marketing pour la Saint-Valentin, veut un bouton rose, et modifie le bouton... directement dans le composant principal. Le lendemain, quarante écrans de l'app ont un call-to-action rose, y compris l'écran de suppression de compte. Personne n'a rien cassé techniquement : le système a juste fait ce qu'on lui a demandé, propager. Toute cette leçon sert à ce que ça ne t'arrive jamais.\n\n" +
            "## La relation de base\n\n" +
            "Un **composant principal** (main component) est la source. Chaque copie que tu en tires est une **instance** liée à cette source. Modifie le principal, toutes les instances suivent. C'est le mécanisme qui fait qu'on change la couleur d'un bouton une fois et qu'elle se répercute sur cent écrans.\n\n" +
            "Pour créer un composant : sélectionne ton calque ou ta frame, puis `Ctrl + Alt + K` (`Cmd + Option + K` sur Mac), ou le bouton en losange dans la barre d'outils. L'icône du calque passe au losange violet. Pour poser une instance, glisse le composant depuis le panneau **Assets** à gauche, ou copie-colle une instance existante. Depuis une instance, tu retrouves la source via le clic droit, **Go to main component**, ou l'icône dédiée dans le panneau de droite. Le retour se fait avec le bouton flottant « Back » que Figma affiche en bas, pense à l'utiliser au lieu de chercher ton écran de départ à la main.\n\n" +
            "## Ce qu'une instance peut et ne peut pas faire\n\n" +
            "Sur une instance, tu peux surcharger (override) : le texte, les couleurs, les images, la visibilité de certains calques, et les propriétés qu'on exposera dans les prochaines leçons. Tu ne peux pas ajouter ou supprimer des calques structurels ni réorganiser l'architecture. Ça, c'est réservé au composant principal.\n\n" +
            "Point important sur les surcharges : elles s'accrochent au calque par son nom et sa position dans l'arbre. Si tu renommes un calque texte dans le composant principal après que des instances l'ont surchargé, Figma peut perdre le lien et les surcharges sautent. Sur un système utilisé par dix personnes, un renommage sauvage dans un composant central peut effacer des dizaines de libellés saisis à la main. D'où l'importance d'un nommage stable, décidé tôt, et du versioning qu'on verra en partie 5.\n\n" +
            "## Détacher, et pourquoi l'éviter\n\n" +
            "`Ctrl + Alt + B` détache une instance : elle devient une frame normale, coupée de sa source. Utile pour un cas ponctuel très particulier, une exploration jetable par exemple. Dangereux en système : une instance détachée ne reçoit plus aucune mise à jour de la bibliothèque. Un design system rempli d'instances détachées, c'est un système mort qui a l'air vivant. Les couleurs semblent bonnes aujourd'hui ; au premier rebranding, la moitié de l'app ne suit pas et personne ne sait pourquoi.\n\n" +
            "Règle simple que j'applique en revue de fichier : chaque détachement doit pouvoir se justifier à voix haute. Si la réponse est « le composant ne permettait pas de faire X », alors la vraie action est d'ajouter une propriété ou un variant au composant, pas de détacher.\n\n" +
            "## Supprimé par erreur : le filet de sécurité\n\n" +
            "Si un composant principal est supprimé alors que des instances existent encore, les instances continuent de vivre. Sélectionnes-en une : Figma propose **Restore main component**, qui recrée la source à partir de l'instance. Ça sauve des situations, mais ne compte pas dessus comme méthode de travail : le composant restauré revient sans son historique d'emplacement, à toi de le reranger.\n\n" +
            "## Où ranger les composants principaux\n\n" +
            "Ne laisse pas les principaux traîner au milieu des écrans. La convention, c'est une page dédiée, souvent nommée `Components` ou `Foundations`, où vivent toutes les sources, alignées et espacées. Les écrans de produit n'utilisent que des instances. Ça évite de surcharger un principal par erreur, exactement le scénario du bouton rose, et ça rend la maintenance lisible. On détaillera la structure complète du fichier en partie 5.\n\n" +
            "> À retenir : le composant principal est un moule. On ne travaille jamais dans le moule pour un besoin ponctuel ; on tire une instance et on la surcharge. Le moule ne change que pour une décision de design qui vaut pour tout le monde.\n\n" +
            "## Reconnaître qui est qui d'un coup d'oeil\n\n" +
            "Dans le panneau des calques, le composant principal porte une icône de quatre losanges, l'instance un losange unique. Sur le canvas, la sélection est violette dans les deux cas, et c'est ce qui trompe les débutants : vérifie l'icône, pas la couleur du contour. Le réflexe avant toute modification « rapide », c'est de lire le panneau de droite. S'il affiche le nom du composant avec les options d'instance (menu de swap, Go to main component), tu es sur une copie, vas-y. S'il te propose de créer des propriétés, tu es dans le moule, et chaque coup de pinceau se propage à toute l'app.\n\n" +
            "Autre outil de contrôle : le clic droit propose **Select all with same instance**, qui sélectionne d'un coup toutes les instances du même composant sur la page. Pratique pour mesurer l'impact d'un changement avant de le faire, ou pour remplacer partout un composant déprécié en un seul swap.\n\n" +
            "## À toi\n\n" +
            "Crée un bouton composant. Pose trois instances. Sur la première, change juste le texte. Retourne au principal et change sa couleur de fond. Observe, puis explique ce qui s'est passé.\n\n" +
            "> Correction : les trois instances changent de couleur, mais la première garde son libellé modifié. La couleur venait de la source, elle se propage ; le texte était une surcharge locale, elle est préservée. Figma fusionne toujours dans ce sens : ce que l'instance a surchargé lui appartient, tout le reste suit le moule. Maintenant change le texte du principal : la première instance ne bouge pas (sa surcharge gagne), les deux autres adoptent le nouveau libellé.",
        },
        {
          id: "l6",
          title: "Variants : un composant, plusieurs états",
          type: "video",
          duration: "17 min",
          videoLabel: "Démo : transformer cinq boutons séparés en un seul composant à variants",
          body:
            "## Le point de départ\n\n" +
            "On a cinq boutons dessinés séparément : primaire, secondaire, chacun en état normal et survol, plus un état désactivé. Cinq composants distincts dans les Assets, c'est ingérable : personne ne sait lequel prendre, et chaque correction se fait cinq fois. On les fusionne en un seul composant à variants.\n\n" +
            "## Combiner en variants\n\n" +
            "Sélectionne tous les boutons, déjà transformés en composants individuels, puis clique sur **Combine as variants** dans le panneau de droite. Figma les regroupe dans un cadre en pointillés violets, le **component set**. Chaque bouton devient un variant à l'intérieur.\n\n" +
            "Par défaut, Figma nomme la propriété « Property 1 » et les valeurs d'après les noms des anciens composants. On nettoie tout de suite. On crée deux propriétés claires :\n\n" +
            "- `Type` avec les valeurs `Primary` et `Secondary`,\n" +
            "- `State` avec les valeurs `Default`, `Hover` et `Disabled`.\n\n" +
            "Le nom de chaque variant devient par exemple `Type=Primary, State=Hover`. Ce nommage n'est pas cosmétique : c'est lui qui pilote les menus déroulants sur les instances.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Un component set et ses variants ; l'instance choisit une combinaison via deux menus\"}\n" +
            "<svg viewBox=\"0 0 640 330\" role=\"img\" font-family=\"ui-monospace, monospace\" font-size=\"12\">\n" +
            "<title>Hiérarchie component set, variants, instances</title>\n" +
            "<rect x=\"110\" y=\"36\" width=\"420\" height=\"144\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-dasharray=\"6 4\" class=\"fig-accent\"/>\n" +
            "<text x=\"122\" y=\"58\" fill=\"currentColor\" class=\"fig-accent\">Component set : Button</text>\n" +
            "<rect x=\"126\" y=\"72\" width=\"120\" height=\"32\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\" stroke=\"currentColor\"/>\n" +
            "<text x=\"134\" y=\"92\" fill=\"currentColor\" opacity=\"0.8\">Pri / Default</text>\n" +
            "<rect x=\"258\" y=\"72\" width=\"120\" height=\"32\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\" stroke=\"currentColor\"/>\n" +
            "<text x=\"266\" y=\"92\" fill=\"currentColor\" opacity=\"0.8\">Pri / Hover</text>\n" +
            "<rect x=\"390\" y=\"72\" width=\"124\" height=\"32\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\" stroke=\"currentColor\"/>\n" +
            "<text x=\"398\" y=\"92\" fill=\"currentColor\" opacity=\"0.8\">Pri / Disabled</text>\n" +
            "<rect x=\"126\" y=\"120\" width=\"120\" height=\"32\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\" stroke=\"currentColor\"/>\n" +
            "<text x=\"134\" y=\"140\" fill=\"currentColor\" opacity=\"0.8\">Sec / Default</text>\n" +
            "<rect x=\"258\" y=\"120\" width=\"120\" height=\"32\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\" stroke=\"currentColor\"/>\n" +
            "<text x=\"266\" y=\"140\" fill=\"currentColor\" opacity=\"0.8\">Sec / Hover</text>\n" +
            "<rect x=\"390\" y=\"120\" width=\"124\" height=\"32\" rx=\"3\" fill=\"currentColor\" opacity=\"0.1\" stroke=\"currentColor\"/>\n" +
            "<text x=\"398\" y=\"140\" fill=\"currentColor\" opacity=\"0.8\">Sec / Disabled</text>\n" +
            "<line x1=\"250\" y1=\"180\" x2=\"180\" y2=\"236\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"174,238 186,232 184,244\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<line x1=\"390\" y1=\"180\" x2=\"460\" y2=\"236\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"466,238 454,232 456,244\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<rect x=\"70\" y=\"244\" width=\"220\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"82\" y=\"268\" fill=\"currentColor\" opacity=\"0.8\">instance : Pri + Hover</text>\n" +
            "<rect x=\"350\" y=\"244\" width=\"228\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"362\" y=\"268\" fill=\"currentColor\" opacity=\"0.8\">instance : Sec + Default</text>\n" +
            "<text x=\"70\" y=\"316\" fill=\"currentColor\" class=\"fig-accent\">2 menus (Type, State) au lieu de 6 composants</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "## Ce que ça donne côté instance\n\n" +
            "Pose une instance. Le panneau de droite affiche deux menus : `Type` et `State`. Le designer qui utilise ton bouton choisit `Secondary` plus `Disabled` dans deux listes, au lieu de fouiller dans les Assets pour retrouver le bon composant parmi cinq. C'est là que le système devient utilisable par d'autres que toi. Bonus : pour `State`, si les valeurs s'appellent exactement `Hover`, `Pressed` ou `Disabled`, le prototypage saura les brancher presque tout seul (leçon 17).\n\n" +
            "## Les bonnes pratiques qui évitent le chaos\n\n" +
            "- Garde le **même nombre de propriétés** sur tous les variants d'un set. Un variant à qui il manque une valeur crée des trous dans la matrice.\n" +
            "- Range les variants en grille logique dans le set : une ligne par `Type`, une colonne par `State`. Figma signale par un contour d'erreur deux variants qui portent la même combinaison de valeurs, c'est interdit et ça casse les menus.\n" +
            "- Limite le nombre de propriétés de variant. Deux ou trois, ça va. Sept propriétés qui se multiplient, c'est des centaines de combinaisons théoriques impossibles à maintenir. Au-delà, on bascule sur des propriétés booléennes ou de l'instance swap, sujet de la leçon suivante.\n" +
            "- Nomme les valeurs avec une casse cohérente. `Primary` ici et `primary` là : Figma les traite comme deux valeurs différentes, et le menu se dédouble.\n\n" +
            "## Piège de la démo\n\n" +
            "En combinant, si un des boutons avait une largeur différente, le set garde des tailles hétérogènes et ça se voit à l'usage : changer de variant sur une instance fait sauter la largeur. On uniformise avant de combiner, tous les boutons sur le même auto-layout, largeur en `Hug`, mêmes paddings. Un component set propre commence par des variants cohérents entre eux. C'est dix minutes de préparation qui évitent des mois de « pourquoi mon bouton change de taille quand je le passe en Hover ».",
        },
        {
          id: "l7",
          title: "Propriétés : boolean, text, instance swap",
          type: "text",
          duration: "17 min",
          body:
            "## Le calcul qui fait réfléchir\n\n" +
            "Prenons un bouton réaliste : 2 types, 3 états, 2 tailles, avec ou sans icône, et 5 icônes possibles. En tout-variant, ça fait 2 × 3 × 2 × 6 = 72 variants à dessiner et maintenir. Avec les bons outils, le même bouton se modélise en 12 variants (2 types × 3 états × 2 tailles), plus une propriété booléenne pour l'icône, une instance swap pour la choisir et une propriété de texte pour le libellé. 12 objets au lieu de 72, pour couvrir strictement les mêmes cas. Voilà pourquoi cette leçon existe.\n\n" +
            "## Propriété booléenne\n\n" +
            "Elle montre ou cache un calque. Cas d'usage : l'icône optionnelle à gauche du texte. Dans le composant principal, sélectionne le calque icône, puis dans le panneau de droite, sur la ligne du composant, ajoute une propriété via l'icône de visibilité : **Create boolean property**. Nomme-la `Show icon`. Sur l'instance, un interrupteur apparaît : on affiche ou on masque l'icône sans changer de variant.\n\n" +
            "Piège de conception : une booléenne cache un calque, elle ne le supprime pas. Si l'icône cachée porte une largeur fixe dans un auto-layout mal réglé, son absence ne resserre pas le bouton. Vérifie que le bouton est en Hug et que l'icône est un enfant direct du flux : masquée, elle ne compte plus, et le bouton se resserre.\n\n" +
            "## Propriété de texte\n\n" +
            "Elle expose un calque de texte comme un champ nommé dans le panneau de l'instance. Sur le principal, sélectionne le calque texte, crée une **propriété de texte** appelée `Label`. Avantage sur la simple surcharge : le champ est nommé, visible d'emblée, et il survit mieux aux restructurations du composant qu'une surcharge accrochée à un nom de calque. Sur une carte avec titre, sous-titre et prix, tu obtiens trois champs clairs `Title`, `Subtitle`, `Price` au lieu de trois calques anonymes à retrouver en double-cliquant dans la structure.\n\n" +
            "## Instance swap\n\n" +
            "La plus puissante. Elle remplace une instance imbriquée par une autre, depuis un menu. Cas typique : l'icône du bouton. Au lieu d'une icône figée, tu exposes une propriété **instance swap** nommée `Icon`. Sur l'instance, un menu liste les icônes disponibles : flèche, coeur, panier, sans jamais entrer dans le composant.\n\n" +
            "Pour la créer : sélectionne l'instance imbriquée dans le principal, crée la propriété instance swap. Réglage à ne pas rater, les **preferred values** : tu choisis la liste des composants proposés dans le menu, par exemple uniquement le dossier des icônes 16 px. Sans ça, le menu propose toute la bibliothèque et un collègue finira par remplacer l'icône par une carte produit entière. Vécu.\n\n" +
            "## Comment choisir entre les quatre\n\n" +
            "- **Variant** : des états mutuellement exclusifs qui changent le style global (Primary/Secondary, Small/Large, Default/Hover).\n" +
            "- **Boolean** : un élément présent ou absent (badge, icône, séparateur).\n" +
            "- **Text** : du contenu textuel modifiable et nommé.\n" +
            "- **Instance swap** : échanger un sous-composant contre un autre (choix d'icône, choix d'avatar).\n\n" +
            "> À retenir : le bon bouton n'a pas soixante-douze variants. Il a une petite matrice de variants pour les états exclusifs, plus une booléenne, une instance swap et une propriété texte. Quatre leviers combinés couvrent des dizaines de cas avec une matrice minuscule.\n\n" +
            "## L'ordre des propriétés\n\n" +
            "Dans le panneau du composant principal, tu peux réordonner les propriétés par glisser-déposer. Mets en haut ce qu'on change le plus souvent : le libellé et le type avant la visibilité d'un séparateur. Le panneau de l'instance suit cet ordre. Un panneau bien rangé, c'est l'API publique de ton composant : les gens jugent la qualité du système à ça, pas à la beauté du fichier.\n\n" +
            "## Nommer les propriétés comme le code\n\n" +
            "Si ton produit a déjà un design system codé, ouvre la doc du composant React ou Vue avant de créer tes propriétés, et reprends les mêmes noms. Le bouton du code expose `variant`, `size`, `disabled` ? Alors ta propriété de variant s'appelle `Variant` avec les mêmes valeurs, la taille `Size`, et l'état désactivé porte le même nom des deux côtés. Au handoff, le développeur lit le panneau de l'instance et retrouve littéralement les props de son composant : zéro traduction mentale, zéro ticket « c'est quoi le mapping ». Sur un produit neuf, l'inverse marche aussi : l'API dessinée dans Figma devient la spec du composant à coder, et les débats de nommage ne se tiennent qu'une fois.\n\n" +
            "Bon à savoir côté maintenance : renommer une **propriété** (pas un calque) est une opération sûre, les instances gardent leurs valeurs et seuls les libellés du panneau changent. C'est le renommage de calques qui fait sauter des surcharges, comme vu en leçon 5, pas celui des propriétés.\n\n" +
            "## À toi : le champ de formulaire\n\n" +
            "Modélise un champ de saisie complet : label au-dessus, input, message d'aide en dessous, message d'erreur, icône optionnelle dans l'input. États : repos, focus, erreur, désactivé. Décide de ce qui est variant, booléen, texte ou swap avant de dessiner.\n\n" +
            "> Correction proposée : une propriété de variant `State` (Default, Focus, Error, Disabled), parce que ces états sont exclusifs et changent le style de la bordure et des couleurs. Trois propriétés texte : `Label`, `Placeholder`, `Helper text`. Deux booléennes : `Show helper` et `Show icon`. Une instance swap `Icon` limitée au set d'icônes. Le message d'erreur n'a pas besoin de booléenne : il n'apparaît que dans le variant `Error`, sa visibilité vit donc dans le variant. Si tu as mis une booléenne `Show error`, tu as créé un état illégal possible, une erreur affichée sur un champ Default. Les variants servent aussi à ça : rendre les états impossibles indessinables.",
        },
        {
          id: "l8",
          title: "Composants imbriqués et propriétés exposées",
          type: "text",
          duration: "16 min",
          body:
            "## Composer avec des composants\n\n" +
            "Un design system tient parce que les composants s'emboîtent. Un champ de formulaire contient un label, un input et un message d'aide, chacun composant. Une carte utilisateur contient un avatar et un bouton, chacun composant. On appelle ça des composants imbriqués, nested components.\n\n" +
            "L'intérêt : quand tu corriges l'avatar dans sa source, il se met à jour partout, y compris à l'intérieur de la carte utilisateur, elle-même posée dans une liste, elle-même dans un écran. Une correction, propagation en cascade sur toute la profondeur.\n\n" +
            "## Le problème des propriétés enfouies\n\n" +
            "Voici le mur que rencontrent tous les débutants en système. Tu poses une instance de carte utilisateur. Tu veux changer l'icône du bouton à l'intérieur. Mais la propriété instance swap du bouton n'apparaît pas dans le panneau de la carte : elle est enfouie deux niveaux plus bas. Résultat, tout le monde double-clique en profondeur dans l'instance, quatre clics pour atteindre l'icône, et à chaque restructuration du composant ces surcharges profondes deviennent fragiles.\n\n" +
            "## Exposer les propriétés imbriquées\n\n" +
            "La solution s'appelle **exposed nested instances**. Sur le composant principal de la carte, sélectionne-le en racine, puis dans la section des propriétés du panneau, ajoute des **nested instances** : tu choisis quelles instances internes (le bouton, l'avatar) exposent leurs propriétés au niveau du parent.\n\n" +
            "Concrètement, sur l'instance de carte, le panneau montre maintenant une section pour le bouton imbriqué avec ses propriétés `Type`, `State`, `Label`, `Icon`, directement, sans plonger. Le designer règle tout depuis un seul panneau.\n\n" +
            "N'expose que ce qui a du sens. Le libellé du bouton, oui ; les vingt réglages internes de l'avatar, non. Trop d'expositions et le panneau devient une usine, plus personne ne trouve rien. C'est un choix d'ergonomie d'API : tu décides de la surface publique de ton composant, et tout ce qui est public devra être maintenu.\n\n" +
            "> À retenir : expose une propriété imbriquée quand un utilisateur du composant aura légitimement besoin de la régler sans connaître la structure interne. C'est une décision de design d'API, pas un réflexe systématique.\n\n" +
            "## Bien nommer pour bien exposer\n\n" +
            "Sur un composant complexe, deux propriétés `Label` (celle du bouton, celle du champ) se marchent dessus visuellement dans le panneau. Nomme les propriétés depuis leur contexte : `CTA label`, `Field label`. Les quelques secondes passées à nommer se récupèrent à chaque utilisation, multipliées par le nombre de designers de l'équipe.\n\n" +
            "## Alléger le panneau : Simplify all instances\n\n" +
            "Dans le composant principal, la case **Simplify all instances** masque dans le panneau des calques les enfants internes des instances, pour ne laisser visible que ce qui est piloté par des propriétés. Les designers consommateurs voient un objet propre au lieu d'un arbre de trente calques. Active-la sur les composants finis de la bibliothèque ; laisse-la décochée pendant que tu construis, tu as encore besoin de voir l'intérieur.\n\n" +
            "## Un cas concret de bout en bout\n\n" +
            "Reprenons la carte utilisateur. Depuis l'instance, on veut : choisir l'image de l'avatar, écrire le nom, écrire le rôle, changer le libellé du bouton, passer le bouton en Secondary. Réglage côté principal : deux propriétés texte sur la carte (`Name`, `Role`), et deux nested instances exposées, l'avatar (pour son image) et le bouton (pour `Label` et `Type`).\n\n" +
            "Le panneau de l'instance devient un petit formulaire : deux champs texte, une vignette d'avatar, les menus du bouton. Un designer qui n'a jamais ouvert la structure interne remplit une liste de dix cartes en deux minutes. C'est exactement l'objectif d'un système : rendre le travail des autres rapide et difficile à rater.\n\n" +
            "## Swapper sans perdre les réglages\n\n" +
            "Question qui arrive vite en imbrication : que deviennent les surcharges quand on échange une instance contre une autre ? Réponse : Figma les transporte quand il retrouve ses petits. Si tu swappes une `UserCard` standard contre sa version `UserCard-dense` et que les calques et propriétés portent les mêmes noms (`Name`, `Role`, le bouton exposé), le nom saisi, le rôle et le variant du bouton survivent au swap. Si les noms diffèrent, les surcharges concernées retombent sur les valeurs du nouveau moule, sans avertissement.\n\n" +
            "C'est un argument de plus pour des conventions partagées entre composants d'une même famille : les versions denses, compactes ou larges d'un même objet gardent la même structure nommée, précisément pour qu'on passe de l'une à l'autre sans tout resaisir.\n\n" +
            "## Jusqu'où imbriquer\n\n" +
            "Techniquement, Figma encaisse des imbrications profondes. Humainement, au-delà de trois ou quatre niveaux de composants (icône dans bouton dans carte dans liste), plus personne ne sait où se règle quoi, et chaque exposition de propriété doit traverser toutes les couches. Si tu te retrouves à faire remonter une propriété du niveau 4 jusqu'au niveau 1, demande-toi si la structure intermédiaire mérite d'être un composant, ou si c'est juste une frame de mise en page qui n'avait pas besoin d'être un moule.\n\n" +
            "## À toi\n\n" +
            "Ta carte utilisateur est prête. Un collègue te demande : « je peux avoir la carte sans le bouton, pour la vue compacte ? » Trois solutions possibles : dupliquer le composant en `UserCard-compact`, ajouter un variant `Density=Compact`, ou ajouter une booléenne `Show button`. Laquelle choisis-tu, et pourquoi ?\n\n" +
            "> Correction : tout dépend de ce que « compact » veut dire. Si c'est uniquement la présence du bouton, la booléenne `Show button` suffit et reste combinable avec le reste. Si la vue compacte change aussi les espacements, la taille de l'avatar et la typographie, c'est un variant `Density`, car plusieurs choses changent ensemble et de façon exclusive. Le composant dupliqué est la mauvaise réponse dans les deux cas : deux sources à maintenir, elles divergeront dès le premier correctif oublié.",
        },
        {
          id: "l9",
          title: "Quiz : Composants et propriétés",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Tu veux qu'un bouton puisse afficher ou non une icône, et que le designer choisisse laquelle. Quelle combinaison de propriétés utilises-tu ?",
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
                "Sur une instance de carte utilisateur, tu n'arrives pas à changer le libellé du bouton imbriqué depuis le panneau de la carte. Quelle est la cause la plus probable ?",
              options: [
                "Le bouton n'est pas un vrai composant",
                "L'instance du bouton n'a pas été exposée au niveau du parent (exposed nested instance)",
                "La carte est en position absolue",
                "Il faut détacher la carte pour éditer le bouton",
              ],
              correctIndex: 1,
              explanation:
                "Les propriétés d'un composant imbriqué restent invisibles au niveau parent tant que l'instance n'est pas exposée. Une fois la nested instance exposée sur le principal de la carte, ses propriétés (dont le libellé) apparaissent directement dans le panneau, sans plonger dans la structure.",
            },
            {
              id: "q8",
              prompt:
                "Tu as sept propriétés de variant sur un même bouton, ce qui génère des centaines de combinaisons. Quel est le meilleur remède ?",
              options: [
                "Supprimer les variants les moins utilisés au hasard",
                "Garder deux ou trois variants pour les états exclusifs et déplacer le reste vers des propriétés booléennes et instance swap",
                "Créer un composant séparé pour chaque combinaison",
                "Augmenter le nombre de propriétés pour mieux organiser",
              ],
              correctIndex: 1,
              explanation:
                "Les variants doivent rester aux états mutuellement exclusifs (Type, State, Size). Ce qui est optionnel ou interchangeable passe en booléen ou en instance swap, qui se combinent sans multiplier la matrice. Découper en composants séparés casse l'unité du bouton.",
            },
            {
              id: "q22",
              prompt:
                "Après un renommage de calques dans un composant principal très utilisé, des libellés saisis à la main sur les instances ont disparu. Que s'est-il passé ?",
              options: [
                "Les surcharges s'accrochent au nom et à la position du calque ; le renommage a cassé le lien et les surcharges ont sauté",
                "Figma réinitialise toutes les instances chaque semaine",
                "Les instances ont été détachées automatiquement",
                "Le composant a dépassé la limite de surcharges autorisées",
              ],
              correctIndex: 0,
              explanation:
                "Une surcharge est reliée au calque qu'elle modifie par son nom et sa place dans l'arbre. Renommer ou restructurer le composant principal peut rompre cette correspondance, et Figma retombe alors sur le contenu du moule. D'où la règle : nommage stable décidé tôt, et restructurations passées par une branche avec annonce à l'équipe.",
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
          duration: "15 min",
          body:
            "## Deux systèmes qui coexistent\n\n" +
            "Figma a longtemps eu les **styles** : styles de couleur, de texte, d'effet, de grille. Tu définis une couleur `Brand/Primary`, tu l'appliques, et changer le style met tout à jour. Ça marche, mais un style de couleur porte une seule valeur. Pour un thème sombre, il fallait dupliquer tous les styles avec un préfixe `Dark/` et faire l'échange à la main, écran par écran, ou avec un plugin tiers du genre Themer. Les équipes qui ont vécu ça s'en souviennent.\n\n" +
            "Les **variables**, arrivées en 2023, changent la logique. Une variable de couleur porte plusieurs valeurs selon un **mode**. Une seule variable `background/default` vaut blanc en mode clair et presque noir en mode sombre. Tu bascules le mode d'une frame et tout le thème suit. C'est la différence structurante, et c'est ce qui rapproche enfin Figma du vocabulaire des design tokens côté code.\n\n" +
            "## Quatre types de variables\n\n" +
            "- **Color** : une couleur unie. Le socle des thèmes.\n" +
            "- **Number** : un nombre. Espacement, rayon, tailles, min/max, et même l'opacité.\n" +
            "- **String** : une chaîne de texte. Contenu multilingue, valeurs de configuration dans les prototypes.\n" +
            "- **Boolean** : vrai ou faux. Visibilité de calques et logique de prototype, partie 4.\n\n" +
            "## Quand garder les styles\n\n" +
            "Les variables ne remplacent pas tout. Deux limites nettes à connaître :\n\n" +
            "- Une variable de couleur stocke une **couleur unie**. Les dégradés et les remplissages d'image restent le territoire des styles.\n" +
            "- Un **style de texte** reste le bon emballage pour un ensemble typographique nommé (famille, taille, graisse, interligne réunis sous « Heading/H1 »). Pareil pour les **styles d'effet**, les ombres.\n\n" +
            "La nuance récente, c'est que les propriétés typographiques peuvent elles-mêmes être alimentées par des variables : taille, graisse, famille, interligne acceptent une variable de nombre ou de string. Le pattern propre en 2026 : des styles de texte comme interface publique, dont les valeurs internes pointent vers des variables, ce qui permet par exemple une échelle typo qui change selon un mode.\n\n" +
            "## Le départage en pratique\n\n" +
            "| Besoin | Outil |\n" +
            "| --- | --- |\n" +
            "| Couleur qui varie selon un thème | Variable color |\n" +
            "| Espacement, rayon, taille réutilisés | Variable number |\n" +
            "| Ensemble typographique nommé (H1, Body) | Style de texte (alimenté par variables) |\n" +
            "| Ombre portée, flou | Style d'effet |\n" +
            "| Dégradé, remplissage image | Style de couleur |\n" +
            "| Libellé qui change selon la langue | Variable string |\n\n" +
            "> À retenir : si la question est « est-ce que cette valeur doit varier selon un mode ? », la réponse penche vers les variables. Si c'est un paquet de propriétés figées ou un remplissage complexe, c'est un style.\n\n" +
            "## Faut-il migrer un vieux fichier ?\n\n" +
            "Question qu'on me pose à chaque mission : « on a 200 styles de couleur, on migre tout ? ». Mon avis : oui pour les couleurs et les espacements, parce que les modes et le lien aux tokens du code changent vraiment la vie ; mais pas en big bang. On crée les variables, on remplace écran par écran au fil des chantiers, et on garde les styles dépréciés dans un groupe `zz-deprecated` le temps de la transition, le préfixe les relègue en bas des listes. Une migration brutale un vendredi soir, c'est la garantie d'un lundi de couleurs cassées.\n\n" +
            "## La migration, pas à pas\n\n" +
            "Pour rendre ça concret, voilà le déroulé que j'applique sur un fichier de 200 styles :\n\n" +
            "1. **Inventaire.** Sélectionne quelques écrans représentatifs et lis Selection colors : tu obtiens la liste réelle des couleurs utilisées, souvent plus courte (et plus sale) que la liste officielle des styles. Note les doublons, les hexadécimaux nus, les quatre gris à cinq nuances d'écart.\n" +
            "2. **Primitives d'abord.** Crée la collection de valeurs pures en rationalisant : les gris quasi identiques deviennent deux primitives. C'est le moment de trancher, pas de recopier le désordre.\n" +
            "3. **Sémantiques ensuite.** Crée les rôles (`text/default`, `surface/raised`...) en aliasant les primitives, avec les deux modes si le thème sombre est au programme.\n" +
            "4. **Remplacement par lots.** Écran par écran, au fil des chantiers en cours : Selection colors sur l'écran, et chaque provenance obsolète est remplacée par le token sémantique. Pas de week-end sacrifié, la migration avance avec le travail normal.\n" +
            "5. **Dépréciation visible.** Renomme les vieux styles avec le préfixe `zz-deprecated/` : ils tombent en bas des menus, plus personne n'en applique de nouveaux, et tu mesures la progression au nombre d'usages restants.\n\n" +
            "Compte deux à quatre semaines en rythme de croisière pour un produit de taille moyenne. L'erreur qui coûte cher, c'est l'étape 2 bâclée : si les primitives recopient le chaos existant, toute la pyramide hérite du chaos, proprement rangé.\n\n" +
            "## À toi\n\n" +
            "Classe ces cinq besoins : le rayon des cartes, le dégradé du hero marketing, la couleur du texte courant, le style « Caption 12/16 », le libellé du bouton principal en FR et EN.\n\n" +
            "> Correction : rayon = variable number (`radius/md`). Dégradé = style de couleur, les variables ne stockent pas de dégradé. Couleur du texte courant = variable color sémantique (`text/default`), elle doit basculer en mode sombre. Caption = style de texte, idéalement alimenté par des variables de taille. Libellé FR/EN = variable string avec une collection à deux modes de langue.\n\n" +
            "Tout le reste de cette partie construit l'échelle de tokens en variables. Comprendre que les variables portent des modes, c'est comprendre pourquoi on livre un thème clair et un thème sombre sans dupliquer une seule couleur.",
        },
        {
          id: "l11",
          title: "Variables de couleur, modes clair/sombre, aliasing",
          type: "video",
          duration: "18 min",
          videoLabel: "Démo : créer une collection de couleurs avec deux modes et de l'aliasing",
          body:
            "## Ouvrir le panneau des variables\n\n" +
            "Clique dans le vide du canvas, puis dans le panneau de droite, section **Local variables**, ouvre le gestionnaire. Une fenêtre s'ouvre : collections à gauche, variables en lignes, modes en colonnes. C'est le tableau de bord de tout ce qui suit.\n\n" +
            "## Créer une collection primitive\n\n" +
            "On crée une première collection nommée `Primitives`. Dedans, les couleurs brutes, sans intention d'usage : `blue/500`, `blue/600`, `gray/50`, `gray/900`. Le `/` crée des groupes dans la liste, ce qui range visuellement. Ces couleurs ne changent jamais selon le thème : le bleu 500 est le même bleu partout. La collection Primitives garde donc un seul mode.\n\n" +
            "## Créer une collection sémantique avec deux modes\n\n" +
            "On crée une deuxième collection, `Semantic`. Dans son en-tête, le bouton `+` ajoute un deuxième mode ; on renomme les colonnes `Light` et `Dark`. Chaque variable de cette collection aura donc deux valeurs. Le nombre de modes disponibles dépend du plan Figma : un seul sur le plan gratuit, plusieurs sur les plans payants. C'est un point à vérifier avant de promettre un thème sombre à ton équipe.\n\n" +
            "On crée `background/default`. En mode `Light`, sa valeur pointe vers `gray/50`. En mode `Dark`, vers `gray/900`. C'est **l'aliasing** : au lieu de saisir un code hexadécimal, la variable référence une autre variable. Clic droit sur la cellule de valeur, ou l'icône dédiée, et tu tapes le nom de la primitive, Figma propose la liste.\n\n" +
            "On répète : `text/default` pointe vers `gray/900` en clair et `gray/50` en sombre. Puis `border/subtle`, `surface/raised`, `action/primary`. Chaque token sémantique dit une intention, « le fond par défaut », et délègue sa vraie couleur aux primitives, différemment selon le mode.\n\n" +
            "## Pourquoi cette double couche\n\n" +
            "On n'applique jamais une primitive directement sur un écran. Toujours un token sémantique. Comme ça, changer la nuance de bleu de la marque se fait en un point, la primitive, et tous les sémantiques qui la référencent suivent. Et le thème sombre est presque gratuit : on a juste rempli la colonne `Dark`.\n\n" +
            "## Appliquer et basculer\n\n" +
            "On sélectionne une frame de fond, clic sur le carré de couleur du fill, puis l'icône des variables, et on choisit `background/default`. Pour tester le sombre : sélectionne la frame d'écran, et dans le panneau de droite, section **Appearance**, choisis le mode `Dark` pour la collection Semantic. Tout l'écran bascule, textes, fonds, bordures. Aucune couleur n'a été touchée une deuxième fois. La frame peut aussi rester sur « Auto », elle hérite alors du mode de son parent, ce qui permet de poser un écran sombre au milieu d'une page claire pour comparaison.\n\n" +
            "## Piège de la démo\n\n" +
            "Si en basculant en `Dark` une carte reste blanche, c'est qu'elle a reçu une **primitive** (`gray/50`) au lieu du **token sémantique** (`surface/raised`). Les primitives n'ont pas de modes, donc elles ne bougent pas. Pour traquer ces fuites : sélectionne l'écran entier et regarde la section **Selection colors** du panneau, elle liste toutes les couleurs utilisées avec leur provenance. Un hexadécimal nu ou une primitive dans cette liste, c'est une fuite à corriger. Ce contrôle de cinq secondes avant de livrer un écran devient vite un réflexe d'équipe.",
        },
        {
          id: "l12",
          title: "Number et string : spacing, rayon, échelle typo",
          type: "text",
          duration: "15 min",
          body:
            "## Des nombres, pas seulement des couleurs\n\n" +
            "Les variables de nombre transforment ta discipline d'espacement en système vérifiable. Au lieu de taper 8, 12, 16, 24 de mémoire, et de laisser passer un 14 un jour de fatigue, tu crées des variables qui portent ces valeurs, tu les appliques, et l'échelle devient ajustable globalement.\n\n" +
            "## Une échelle d'espacement\n\n" +
            "On crée une collection `Scale` (ou un groupe dans la collection existante), base 4 :\n\n" +
            "- `space/1` = 4\n" +
            "- `space/2` = 8\n" +
            "- `space/3` = 12\n" +
            "- `space/4` = 16\n" +
            "- `space/6` = 24\n" +
            "- `space/8` = 32\n\n" +
            "Remarque la numérotation : elle suit les multiples de la base, pas un rang arbitraire, exactement la convention de Tailwind. Un développeur qui lit `space/4` = 16 s'y retrouve immédiatement, et cette familiarité compte au handoff.\n\n" +
            "On applique ces variables directement aux champs de padding et de gap : dans le panneau Auto layout, clique sur le champ, puis sur l'icône hexagonale de variable, et choisis `space/4`. Le gap n'est plus un chiffre magique, c'est un token. Si l'équipe décide un jour de resserrer l'interface, on change la valeur des variables, pas les centaines de frames.\n\n" +
            "## Rayons de bordure\n\n" +
            "Même logique pour les coins arrondis :\n\n" +
            "- `radius/sm` = 4\n" +
            "- `radius/md` = 8\n" +
            "- `radius/lg` = 16\n" +
            "- `radius/full` = 999\n\n" +
            "`radius/md` sur les cartes, `radius/full` sur les pastilles et avatars. Un design system cohérent, c'est trois ou quatre rayons partout, pas quinze valeurs improvisées. Le `999` du full n'est pas une vraie mesure, c'est une valeur volontairement énorme pour forcer la capsule quelle que soit la hauteur, même convention que côté CSS.\n\n" +
            "## L'échelle typographique\n\n" +
            "Pour les tailles de police, deux approches se combinent. Les styles de texte restent l'interface publique (H1, H2, Body, Caption), et leurs tailles internes pointent vers des variables de nombre. Une échelle classique en ratio proche de 1,25 :\n\n" +
            "- `font/size/xs` = 12\n" +
            "- `font/size/sm` = 14\n" +
            "- `font/size/md` = 16\n" +
            "- `font/size/lg` = 20\n" +
            "- `font/size/xl` = 25\n" +
            "- `font/size/2xl` = 31\n\n" +
            "L'intérêt d'une échelle mathématique : les tailles s'accordent visuellement au lieu d'être choisies au hasard, et surtout elles deviennent modulables par mode. Une collection `Breakpoint` avec un mode `Desktop` et un mode `Mobile` peut servir des tailles plus généreuses sur grand écran, sans dupliquer les styles.\n\n" +
            "## Les variables string\n\n" +
            "Moins courantes en tokens, précieuses ailleurs. Une variable string portée par une collection `Locale` à deux modes : `label/cta` vaut « Commencer » en mode `FR` et « Get started » en mode `EN`. Tu lies le calque texte à la variable, tu bascules le mode de la frame, et toute la maquette change de langue. Pour préparer le fameux test allemand de la leçon 1, ajoute un mode `DE` avec les libellés les plus longs : c'est le crash test de tes auto-layouts, à faire avant la revue, pas après.\n\n" +
            "## Min, max et breakpoints en variables\n\n" +
            "Les variables de nombre ne s'arrêtent pas au padding et au gap. Les champs de largeur, hauteur, min et max des frames les acceptent aussi. Ça ouvre un pattern très utile : une variable `card/min-width` = 240 appliquée au min width de toutes les cartes de grille. Le jour où la densité de l'interface change, une seule valeur bouge et toutes les grilles se recalculent.\n\n" +
            "Combiné aux modes, ça devient un vrai mécanisme de breakpoints. Une collection `Breakpoint` avec deux modes, `Desktop` et `Mobile` : `page/padding` vaut 64 en Desktop et 16 en Mobile, `font/size/hero` vaut 48 et 32. Tu maquettes un seul écran, tu le dupliques, tu bascules le mode de la copie : la version mobile se dessine à moitié toute seule. Ce n'est pas du responsive automatique, mais c'est la moitié du travail en moins et zéro divergence de valeurs entre les deux maquettes.\n\n" +
            "## Qui a le droit d'ajouter une valeur\n\n" +
            "Une échelle ne meurt jamais d'un coup, elle meurt par ajouts. Quelqu'un a besoin d'un 20, il crée `space/5` = 20 « juste pour ce cas », puis un 28 apparaît, et six mois plus tard l'échelle compte quatorze crans et ne protège plus rien. Décide en équipe d'une règle simple : l'échelle appartient au fichier bibliothèque, et on n'y ajoute un cran qu'après en avoir eu besoin trois fois, avec une note dans le changelog de publication. Un besoin isolé se règle avec le cran le plus proche, quitte à froisser un oeil de designer pendant une journée. Frustrant sur le moment, salvateur sur l'année.\n\n" +
            "> À retenir : dès qu'une valeur numérique se répète dans l'interface, elle mérite d'être un token. La règle du « trois fois » marche bien : la troisième fois que tu tapes la même valeur à la main, crée la variable.\n\n" +
            "## À toi : l'audit de ta propre maquette\n\n" +
            "Ouvre une de tes maquettes récentes. Relève tous les gaps et paddings utilisés sur trois écrans. Compte les valeurs distinctes.\n\n" +
            "> Correction (le résultat typique) : entre 10 et 15 valeurs distinctes, dont des 6, 10, 14 et 18 qui ne correspondent à aucune échelle. L'exercice : les rabattre sur l'échelle base 4 (6 devient 4 ou 8, 14 devient 12 ou 16), créer les six variables `space/*`, puis les appliquer. Sur trois écrans, ça prend une demi-heure. Le gain : chaque futur écran se construit en piochant six valeurs au lieu d'en inventer, et le développeur mappe ton échelle sur la sienne en une conversation.",
        },
        {
          id: "l13",
          title: "Architecture de tokens : primitives, sémantiques, composants",
          type: "text",
          duration: "18 min",
          body:
            "## Trois couches, pas une\n\n" +
            "Un système de tokens qui tient sur la durée s'organise en couches. On l'a amorcé avec la couleur, formalisons pour tout le reste.\n\n" +
            "1. **Primitives** : les valeurs pures. `blue/500`, `gray/900`, `space/4`, `radius/md`. Aucun sens d'usage, juste des valeurs, une seule source de vérité par nuance.\n" +
            "2. **Sémantiques** : des rôles. `action/primary`, `text/default`, `surface/raised`. Ils pointent vers des primitives, différemment selon le mode. C'est la couche qu'on applique presque partout.\n" +
            "3. **Composant** (optionnelle) : des tokens propres à un composant. `button/padding-x`, `card/radius`. Ils pointent vers des sémantiques ou des primitives. On ne les crée que si un composant a des besoins récurrents et particuliers, sinon c'est du bruit.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Les trois couches de tokens : les écrans ne consomment que la couche sémantique\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\" font-family=\"ui-monospace, monospace\" font-size=\"12\">\n" +
            "<title>Architecture de tokens en trois couches</title>\n" +
            "<rect x=\"36\" y=\"48\" width=\"168\" height=\"180\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"48\" y=\"36\" fill=\"currentColor\" opacity=\"0.8\">PRIMITIVES</text>\n" +
            "<text x=\"52\" y=\"84\" fill=\"currentColor\" opacity=\"0.7\">blue/500</text>\n" +
            "<text x=\"52\" y=\"114\" fill=\"currentColor\" opacity=\"0.7\">gray/50</text>\n" +
            "<text x=\"52\" y=\"144\" fill=\"currentColor\" opacity=\"0.7\">gray/900</text>\n" +
            "<text x=\"52\" y=\"174\" fill=\"currentColor\" opacity=\"0.7\">space/4</text>\n" +
            "<text x=\"52\" y=\"204\" fill=\"currentColor\" opacity=\"0.7\">1 mode</text>\n" +
            "<line x1=\"204\" y1=\"138\" x2=\"244\" y2=\"138\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<polygon points=\"244,132 256,138 244,144\" fill=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"200\" y=\"124\" fill=\"currentColor\" class=\"fig-accent\">alias</text>\n" +
            "<rect x=\"256\" y=\"48\" width=\"180\" height=\"180\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"268\" y=\"36\" fill=\"currentColor\" class=\"fig-accent\">SEMANTIQUES</text>\n" +
            "<text x=\"272\" y=\"84\" fill=\"currentColor\" opacity=\"0.7\">action/primary</text>\n" +
            "<text x=\"272\" y=\"114\" fill=\"currentColor\" opacity=\"0.7\">text/default</text>\n" +
            "<text x=\"272\" y=\"144\" fill=\"currentColor\" opacity=\"0.7\">surface/raised</text>\n" +
            "<text x=\"272\" y=\"186\" fill=\"currentColor\" class=\"fig-accent\">modes :</text>\n" +
            "<text x=\"272\" y=\"206\" fill=\"currentColor\" class=\"fig-accent\">Light | Dark</text>\n" +
            "<line x1=\"436\" y1=\"138\" x2=\"476\" y2=\"138\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<polygon points=\"476,132 488,138 476,144\" fill=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<rect x=\"488\" y=\"48\" width=\"128\" height=\"180\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"496\" y=\"36\" fill=\"currentColor\" opacity=\"0.8\">COMPOSANTS</text>\n" +
            "<text x=\"500\" y=\"84\" fill=\"currentColor\" opacity=\"0.7\">button/</text>\n" +
            "<text x=\"500\" y=\"102\" fill=\"currentColor\" opacity=\"0.7\">padding-x</text>\n" +
            "<text x=\"500\" y=\"140\" fill=\"currentColor\" opacity=\"0.7\">card/radius</text>\n" +
            "<text x=\"500\" y=\"204\" fill=\"currentColor\" opacity=\"0.7\">optionnel</text>\n" +
            "<text x=\"36\" y=\"272\" fill=\"currentColor\" opacity=\"0.8\">Ecrans et composants consomment la couche du milieu,</text>\n" +
            "<text x=\"36\" y=\"290\" fill=\"currentColor\" opacity=\"0.8\">jamais les primitives directement.</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "## Pourquoi ne pas tout mettre en sémantique directement\n\n" +
            "Parce que la couche primitive permet de refondre la marque en un point. Le bleu de l'entreprise change ? Tu édites `blue/500`, tous les sémantiques qui l'aliasent suivent, donc toutes les frames. Sans cette couche, tu retouches chaque token sémantique un par un, en priant de n'en oublier aucun.\n\n" +
            "Et pourquoi ne pas appliquer les primitives sur les écrans ? Parce qu'elles ignorent l'intention et les modes. `blue/500` ne sait pas s'il est un fond de bouton ou une couleur de lien, et il ne bouge pas en mode sombre. Le sémantique porte le sens et le comportement multi-mode.\n\n" +
            "## Le nommage, là où tout se joue\n\n" +
            "Un token mal nommé est un token qu'on n'ose plus toucher. Les principes qui tiennent :\n\n" +
            "- **Structure catégorie/rôle/variante** : `text/default`, `text/muted`, `text/inverse`. Lisible, groupé, extensible.\n" +
            "- **Pas de couleur dans le nom sémantique** : jamais `text/blue`. Le jour où le lien passe au violet, `text/blue` devient un mensonge. On nomme le rôle, `text/link`.\n" +
            "- **Cohérence des échelles** : si tu numérotes en 50, 100... 900 pour le gris, fais-le pour toutes les familles.\n" +
            "- **Groupes avec le slash** : `space/inset/sm` se range tout seul sous `space > inset` dans le gestionnaire.\n\n" +
            "## Trois réglages de pro dans le gestionnaire\n\n" +
            "**Le scoping.** Ouvre une variable, onglet des réglages : tu peux restreindre où elle s'applique. `radius/md` scopé au corner radius n'apparaîtra plus dans les menus de padding ou de taille de texte. Une couleur peut être limitée au texte, ou au fond. Sur une grosse bibliothèque, le scoping élimine une vraie catégorie d'erreurs, le rayon appliqué comme gap par un stagiaire pressé.\n\n" +
            "**Hide from publishing.** Coche cette case sur la collection `Primitives` avant de publier la bibliothèque. Les consommateurs ne verront que les sémantiques, et ne pourront donc pas appliquer une primitive par accident. La règle « jamais de primitive sur un écran » devient structurelle au lieu de reposer sur la discipline.\n\n" +
            "**La code syntax.** Toujours dans les réglages d'une variable, tu peux définir son nom côté code, par plateforme : `--color-action-primary` pour le Web, `colorActionPrimary` pour Android. Dev Mode affichera ce nom exact au développeur. C'est un petit champ qui économise des dizaines de conversations « ça s'appelle comment chez vous ? ».\n\n" +
            "> À retenir : le nom d'un token décrit son rôle, jamais sa valeur. `surface/raised` reste vrai que la carte soit blanche, grise ou anthracite. `card/white` devient faux au premier ajustement.\n\n" +
            "## À toi : la revue de nommage\n\n" +
            "Voici cinq tokens hérités d'un vrai fichier client : `card/white`, `text/blue`, `primary-color`, `gray-pour-les-bordures`, `space/13`. Corrige-les.\n\n" +
            "> Correction : `card/white` devient `surface/raised` (rôle, pas couleur). `text/blue` devient `text/link`. `primary-color` devient `action/primary`, rangé dans un groupe avec le slash. `gray-pour-les-bordures` devient `border/subtle`. `space/13` = 13 ne colle à aucune base 4 : la valeur elle-même est suspecte, on la rabat sur `space/3` (12) ou `space/4` (16) après vérification des usages. Un audit de nommage, c'est souvent un audit de valeurs déguisé.\n\n" +
            "## Quand créer la troisième couche\n\n" +
            "La couche composant fait débat dans toutes les équipes, alors autant donner un critère net : crée un token de composant quand une valeur est particulière à ce composant ET susceptible de changer indépendamment du reste. `button/padding-x` mérite d'exister si tes boutons ont un padding volontairement à part et que tu veux pouvoir le retoucher sans toucher aux cartes. Si le bouton utilise sagement `space/4` comme tout le monde, le token composant n'apporte rien, il ajoute un niveau d'indirection à maintenir.\n\n" +
            "Ordre de grandeur pour te situer : un système de taille moyenne tourne autour de 30 à 60 tokens sémantiques et d'une poignée de tokens de composant. Si tu en comptes 300, il y a de la duplication ou de la sur-ingénierie ; si tu en comptes 8, les écrans regorgent forcément de valeurs en dur. Et garde la règle de dépendance stricte : composant pointe vers sémantique, sémantique vers primitive, jamais l'inverse, jamais de saut de couche sur les écrans. Une flèche qui remonte le courant, une primitive qui référence un sémantique, rend les modes imprévisibles et le fichier indébogable.\n\n" +
            "## Le test de maturité\n\n" +
            "Un système de tokens est mûr quand un nouveau designer construit un écran sans jamais saisir une valeur en dur : ni un hexadécimal, ni un nombre de padding. Il pioche des tokens nommés par leur rôle. À ce stade, un changement de marque ou l'ajout d'un thème devient une opération d'une heure, pas d'une semaine.",
        },
        {
          id: "l14",
          title: "Quiz : Variables et tokens",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Tu bascules une frame en mode sombre, mais une carte reste blanche. Quelle est la cause la plus probable ?",
              options: [
                "La carte utilise un token sémantique qui n'a pas de mode Dark",
                "La carte a reçu une couleur primitive directement, or les primitives n'ont pas de modes",
                "Le mode Dark n'a pas été créé dans la collection",
                "La carte est détachée de la bibliothèque",
              ],
              correctIndex: 1,
              explanation:
                "Les primitives portent une valeur unique, sans mode. Appliquée directement, elle ne change pas quand on bascule. Il faut appliquer un token sémantique (surface/raised) qui, lui, pointe vers gray/50 en clair et gray/900 en sombre. La section Selection colors permet de repérer ces fuites.",
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
                "Le scoping limite les contextes d'application d'une variable. Un radius/md scopé au rayon n'apparaîtra plus dans les menus de padding ou de taille de texte, ce qui évite les erreurs d'usage sur une grosse bibliothèque. Pour masquer une collection des autres fichiers, c'est Hide from publishing.",
            },
            {
              id: "q23",
              prompt:
                "Le hero marketing utilise un dégradé de deux couleurs de marque. Comment le gérer dans le système ?",
              options: [
                "Une variable de couleur contenant le dégradé",
                "Un style de couleur : les variables ne stockent que des couleurs unies",
                "Deux variables number pour les angles",
                "Un mode Gradient dans la collection sémantique",
              ],
              correctIndex: 1,
              explanation:
                "Une variable color porte une couleur unie, pas un dégradé ni une image. Les remplissages complexes restent le territoire des styles de couleur. Les stops du dégradé peuvent en revanche s'appuyer visuellement sur des primitives existantes pour rester cohérents avec la marque.",
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
          duration: "16 min",
          body:
            "## Les layout grids\n\n" +
            "Une frame peut porter une ou plusieurs grilles de mise en page. Sélectionne une frame, puis dans le panneau, ajoute **Layout grid**. Trois types :\n\n" +
            "- **Grid** : une grille uniforme de carrés, souvent réglée à 8 px pour coller à la base d'espacement, utile pour du pixel-perfect fin.\n" +
            "- **Columns** : des colonnes verticales, le classique 12 colonnes du web. On règle le nombre, la gouttière (gutter) et la marge.\n" +
            "- **Rows** : des lignes horizontales, plus rare, utile pour tenir un rythme vertical.\n\n" +
            "Une grille de 12 colonnes avec gouttière de 24 et marges de 32 sur un desktop de 1440, c'est un point de départ éprouvé. Sauvegarde-la en **style de grille** pour la réappliquer d'un clic sur toutes les frames desktop, et crée sa petite soeur mobile, 4 colonnes, gouttière 16, marges 16, sur 375. Raccourci à connaître : `Ctrl + G` (`Cmd + G` sur Mac, avec Shift selon la config) bascule l'affichage des grilles, indispensable pour vérifier sans être gêné en permanence.\n\n" +
            "## La grille cadre, l'auto-layout remplit\n\n" +
            "Distinction clé : la layout grid est un **repère visuel**, elle n'agit sur aucun calque. Ce sont les contraintes et l'auto-layout qui font que le contenu s'aligne dessus. La grille te dit où poser les choses ; l'auto-layout les y maintient quand la taille change. Beaucoup de maquettes semblent alignées sur une grille et cassent au premier redimensionnement : la grille était là, le comportement non.\n\n" +
            "## Contraintes pour le redimensionnement\n\n" +
            "Sur un élément qui n'est pas dans un auto-layout, les **contraintes** décident de son comportement quand le parent est redimensionné : ancré à gauche, à droite, centré, étiré (Left and right), fixé en haut. Un bouton de fermeture ancré en haut à droite d'une modale reste dans son coin quand la modale grandit. Ça se règle dans la section **Constraints** du panneau. Dans un fichier moderne, les contraintes servent surtout aux éléments en position absolue ; le reste du monde vit en auto-layout.\n\n" +
            "## Le responsive, en vrai\n\n" +
            "Figma ne fait pas de responsive automatique entre desktop et mobile comme un navigateur. On combine plusieurs leviers :\n\n" +
            "- **Auto-layout avec Fill** pour que les blocs s'étirent avec la largeur.\n" +
            "- **Min/max width** sur les éléments en Fill, réglés sous les champs de dimension, pour qu'une carte ne s'étire pas à l'infini ni ne s'écrase. Bonus : min et max acceptent des variables.\n" +
            "- **Wrap** sur une frame auto-layout pour qu'une rangée de cartes passe à la ligne quand la largeur diminue, l'équivalent de `flex-wrap`.\n" +
            "- **Modes de variables** liés à des breakpoints : une collection `Breakpoint` avec des modes `Desktop` et `Mobile` qui changent les espacements et les tailles selon la frame.\n\n" +
            "> À retenir : un écran qui « se redimensionne bien » dans Figma, c'est de l'auto-layout en Fill, des min/max posés aux bons endroits, et du wrap là où il faut. La grille est un guide de composition, pas un moteur d'adaptation.\n\n" +
            "## Les largeurs auxquelles travailler\n\n" +
            "Sur quelles largeurs maquetter ? La pratique d'équipe se résume à trois ou quatre points de contrôle : 375 (mobile courant), 768 (tablette ou fenêtre réduite), 1440 (desktop de référence), et éventuellement 1920 pour vérifier que rien ne se perd dans les grandes largeurs. Tu ne maquettes pas quatre fois chaque écran : tu maquettes 1440 et 375, et les largeurs intermédiaires doivent être couvertes par le comportement (Fill, min/max, wrap), pas par des maquettes supplémentaires.\n\n" +
            "Le test qui ne pardonne pas : attrape le bord droit de ta frame et tire, lentement, de 1440 jusqu'à 900. Regarde ce qui casse et à quel moment. Un écran bien construit dégrade proprement, les colonnes se resserrent, les cartes wrappent, rien ne déborde. Un écran construit à la position dévoile ses trous avant 1200. Ce test de dix secondes en dit plus qu'une heure de revue visuelle, et c'est celui que le développeur fera, à sa façon, dans son navigateur.\n\n" +
            "Piège du confort : ne maquetter qu'en 1440 sur l'écran 27 pouces du studio. Les statistiques d'usage de la plupart des produits placent une grosse part du trafic sur des laptops en 1280-1366 et des fenêtres non maximisées. Si ta mise en page exige 1400 pixels pour respirer, elle sera à l'étroit chez la moitié des utilisateurs. Dessine large, vérifie étroit.\n\n" +
            "## À toi : la grille de cartes fluide\n\n" +
            "Construis une rangée de quatre cartes qui devient deux colonnes, puis une seule, quand on rétrécit la frame parente, sans jamais toucher une carte.\n\n" +
            "> Correction : une frame auto-layout horizontale en **wrap**, gap 24, largeur en Fill dans son parent. Chaque carte : largeur en `Fill`, min width à 240. Élargis et rétrécis la frame parente : les cartes passent de quatre par ligne à deux, puis une, en respectant leur largeur minimale. Tu viens de simuler `display: flex; flex-wrap: wrap; min-width: 240px` sans une ligne de code, et c'est exactement ce que le développeur écrira. Si les cartes refusent de wrapper, vérifie qu'elles sont bien en Fill et pas en Fixed : une carte Fixed de 320 ne se compresse jamais, elle force le passage à la ligne plus tôt que prévu.\n\n" +
            "Dernier conseil de terrain : maquette d'abord le mobile ou d'abord le desktop, peu importe, mais teste l'autre largeur **avant** la revue d'équipe. Le redimensionnement révèle les erreurs de structure bien mieux qu'une relecture visuelle.",
        },
        {
          id: "l16",
          title: "Prototypage piloté par variables et conditions",
          type: "video",
          duration: "18 min",
          videoLabel: "Démo : un compteur de panier qui s'incrémente avec des variables et une condition",
          body:
            "## Le saut par rapport au prototypage de base\n\n" +
            "Le prototypage classique, c'est « clic sur ce bouton, va vers cet écran ». Puissant mais limité : il faut un écran par état. Pour tester un panier qui passe de 0 à 5 articles, ça ferait six écrans quasi identiques et un plat de spaghettis de flèches. Avec les variables de prototype et les conditions, un même écran change de contenu selon une logique. On construit un mini panier qui compte.\n\n" +
            "## Créer une variable de comptage\n\n" +
            "Dans le gestionnaire de variables, on crée une variable de nombre `cartCount` à 0. On l'affiche dans le badge du panier : sélectionne le calque texte, clic droit sur le champ de contenu ou icône de variable, et lie-le à `cartCount`. Le badge affiche « 0 » dynamiquement. Un texte tapé à la main ne réagira jamais à rien : le lien à la variable est ce qui rend l'affichage vivant.\n\n" +
            "## Une action « Set variable »\n\n" +
            "Onglet **Prototype**. On sélectionne le bouton « Ajouter au panier », on tire une interaction. Au lieu de « Navigate to », on choisit l'action **Set variable** : cible `cartCount`, valeur `cartCount + 1`. Figma accepte les expressions arithmétiques et logiques simples dans ce champ. À chaque clic en présentation, le compteur monte, sans changer d'écran.\n\n" +
            "## Ajouter une condition\n\n" +
            "On veut que « Commander » ne mène au paiement que si le panier contient au moins un article. On ajoute une interaction sur le bouton, et on choisit **Conditional**. La condition : `cartCount > 0`. Dans la branche vraie, « Navigate to » vers l'écran de paiement. Dans la branche sinon, on met à vrai une booléenne `showEmptyWarning`, liée à la visibilité d'un message « Ton panier est vide ».\n\n" +
            "```figure\n" +
            "{\"caption\": \"La logique du prototype : déclencheurs, actions sur variables et condition\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\" font-family=\"ui-monospace, monospace\" font-size=\"12\">\n" +
            "<title>Flux de prototypage avec variables et condition</title>\n" +
            "<rect x=\"36\" y=\"44\" width=\"158\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"48\" y=\"66\" fill=\"currentColor\" opacity=\"0.8\">On click</text>\n" +
            "<text x=\"48\" y=\"84\" fill=\"currentColor\" opacity=\"0.8\">« Ajouter »</text>\n" +
            "<line x1=\"194\" y1=\"70\" x2=\"236\" y2=\"70\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<polygon points=\"236,64 248,70 236,76\" fill=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<rect x=\"248\" y=\"44\" width=\"212\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"260\" y=\"66\" fill=\"currentColor\" class=\"fig-accent\">Set variable</text>\n" +
            "<text x=\"260\" y=\"84\" fill=\"currentColor\" class=\"fig-accent\">cartCount = cartCount + 1</text>\n" +
            "<line x1=\"460\" y1=\"70\" x2=\"502\" y2=\"70\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"502,64 514,70 502,76\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<rect x=\"514\" y=\"44\" width=\"96\" height=\"52\" rx=\"4\" fill=\"currentColor\" opacity=\"0.1\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"528\" y=\"74\" fill=\"currentColor\" opacity=\"0.8\">badge 0-&gt;1</text>\n" +
            "<rect x=\"36\" y=\"168\" width=\"158\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"48\" y=\"190\" fill=\"currentColor\" opacity=\"0.8\">On click</text>\n" +
            "<text x=\"48\" y=\"208\" fill=\"currentColor\" opacity=\"0.8\">« Commander »</text>\n" +
            "<line x1=\"194\" y1=\"194\" x2=\"234\" y2=\"194\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<polygon points=\"234,188 246,194 234,200\" fill=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<polygon points=\"330,158 414,194 330,230 246,194\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"278\" y=\"190\" fill=\"currentColor\" class=\"fig-accent\">cartCount</text>\n" +
            "<text x=\"294\" y=\"208\" fill=\"currentColor\" class=\"fig-accent\">&gt; 0 ?</text>\n" +
            "<line x1=\"414\" y1=\"194\" x2=\"456\" y2=\"194\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"456,188 468,194 456,200\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"420\" y=\"184\" fill=\"currentColor\" opacity=\"0.8\">oui</text>\n" +
            "<rect x=\"468\" y=\"168\" width=\"150\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"480\" y=\"190\" fill=\"currentColor\" opacity=\"0.8\">Navigate to</text>\n" +
            "<text x=\"480\" y=\"208\" fill=\"currentColor\" opacity=\"0.8\">Paiement</text>\n" +
            "<line x1=\"330\" y1=\"230\" x2=\"330\" y2=\"262\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"324,262 336,262 330,274\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<text x=\"342\" y=\"254\" fill=\"currentColor\" opacity=\"0.8\">sinon</text>\n" +
            "<rect x=\"216\" y=\"274\" width=\"228\" height=\"38\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"228\" y=\"298\" fill=\"currentColor\" opacity=\"0.8\">showEmptyWarning = true</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "## Boolean pour afficher et masquer\n\n" +
            "La visibilité d'un calque peut être liée à une variable booléenne : sélectionne le calque du message, et sur la ligne de visibilité du panneau, applique `showEmptyWarning`. Dans l'action Set variable du bouton d'ajout, on repasse aussi `showEmptyWarning` à faux : l'avertissement disparaît dès le premier article. Un seul écran, trois variables, et le prototype se comporte comme une petite application.\n\n" +
            "## Pourquoi c'est un vrai levier\n\n" +
            "Les tests utilisateurs deviennent nettement plus crédibles : le testeur ajoute deux articles, le badge dit 2, le total change, il y croit. Et les développeurs lisent la logique attendue directement dans le panneau des interactions, `cartCount > 0` est une spec, plus précise qu'un paragraphe dans un ticket Jira.\n\n" +
            "Garde en tête les limites : pas de vraies listes ni de boucles, des expressions volontairement simples. Si tu te retrouves à simuler une base de données avec quarante variables, c'est le signal qu'un prototype codé (ou un plugin) sera plus rentable. Le prototypage conditionnel excelle sur les micro-parcours : panier, stepper d'onboarding, formulaire avec validation, toggle de préférences.\n\n" +
            "## Piège de la démo\n\n" +
            "Si le compteur ne bouge pas en présentation, vérifie dans l'ordre : le texte du badge est bien lié à la variable (et pas un « 0 » tapé), l'interaction est bien sur le bon calque (le bouton, pas son texte), et tu as bien relancé la présentation, les valeurs des variables persistent pendant une session de preview et un vieil état peut te tromper. Le bouton « Restart » de la présentation remet les variables à leur valeur par défaut.",
        },
        {
          id: "l17",
          title: "Smart Animate et composants interactifs",
          type: "text",
          duration: "16 min",
          body:
            "## Smart Animate, le principe\n\n" +
            "Smart Animate anime la transition entre deux frames en repérant les calques qui portent le **même nom** et en interpolant leurs différences : position, taille, opacité, rotation, couleur. Un rond en haut à gauche sur la frame A, le même rond nommé pareil en bas à droite sur la frame B, et Smart Animate le fait glisser. La condition absolue : des noms identiques d'une frame à l'autre. Tout le reste de la leçon découle de cette phrase.\n\n" +
            "On l'active dans l'interaction : animation **Smart Animate**, une durée (300 ms est une valeur saine pour une transition d'interface) et une courbe, `Ease out` pour un mouvement qui décélère naturellement.\n\n" +
            "## Les cas où ça brille\n\n" +
            "- Un panneau qui se déplie : la même frame, deux hauteurs, Smart Animate étire.\n" +
            "- Un indicateur d'onglet actif qui glisse d'un item à l'autre : un même calque « indicator » présent sur les deux frames, à deux positions.\n" +
            "- Une carte qui s'agrandit en vue détail : les éléments migrent vers leur nouvelle position au lieu d'apparaître d'un coup, l'utilisateur comprend d'où vient quoi.\n\n" +
            "## Les cas où ça casse\n\n" +
            "Si tu dupliques une frame et renommes des calques, Smart Animate ne les apparie plus et retombe sur un fondu brutal. Autre cause du même symptôme : le calque a changé de type (un rectangle devenu frame) ou a été recréé au lieu d'être déplacé, l'identité est perdue même si le nom correspond. Et trop d'éléments qui bougent en même temps donnent une bouillie : une bonne transition anime deux ou trois choses, pas trente.\n\n" +
            "## Les déclencheurs à connaître\n\n" +
            "Le clic n'est qu'un déclencheur parmi d'autres. Dans le panneau Prototype : `On click`, `On drag`, `While hovering`, `While pressing`, `Mouse enter` / `Mouse leave`, `Key/gamepad` et `After delay`. Deux mentions spéciales : `While hovering` revient en arrière tout seul quand le curseur sort, parfait pour les survols ; `After delay` ne s'applique qu'aux frames de premier niveau et sert aux splash screens et aux toasts qui disparaissent après 3 secondes.\n\n" +
            "## Composants interactifs\n\n" +
            "On peut poser des interactions **à l'intérieur d'un component set**, entre ses variants, avec l'action **Change to**. Un interrupteur avec un variant `Off` et un variant `On` : on relie `Off` vers `On` sur `On click`, avec Smart Animate, et l'inverse. Résultat, chaque instance de l'interrupteur bascule toute seule en présentation, sans qu'on câble quoi que ce soit sur l'écran. L'interaction voyage avec le composant.\n\n" +
            "C'est le bon outil pour les survols : un variant `Default` relié à un variant `Hover` sur `While hovering`. Chaque bouton du prototype réagit au survol, gratuitement, sur tous les écrans présents et futurs. Combine avec la convention de nommage des états vue en leçon 6 : des valeurs nommées `Hover` ou `Pressed` rendent le câblage évident.\n\n" +
            "> À retenir : nommer ses calques proprement n'est pas de la cosmétique. Smart Animate et les composants interactifs reposent entièrement sur la correspondance des noms entre états. Un système bien nommé s'anime presque tout seul.\n\n" +
            "## Combiner avec les variables\n\n" +
            "Tout se cumule. Un interrupteur qui bascule visuellement en Smart Animate peut, dans la même interaction, exécuter un Set variable qui passe `notifications` à vrai, et le reste de l'écran réagit à cet état. L'utilisateur voit l'animation, le prototype tient la logique. C'est le niveau où un prototype Figma devient un support de test presque aussi parlant qu'un développement, pour une fraction du coût.\n\n" +
            "## À toi : l'accordéon FAQ\n\n" +
            "Construis une question de FAQ qui se déplie au clic avec une animation douce, en composant interactif, sans rien câbler sur l'écran.\n\n" +
            "> Correction : un composant `FaqItem` avec deux variants, `Collapsed` (question seule, chevron vers le bas) et `Expanded` (question, réponse visible, chevron pivoté à 180°). Les calques portent les mêmes noms dans les deux variants, y compris le chevron. Interaction interne : `Collapsed` vers `Expanded` sur On click, Smart Animate 250 ms Ease out, et l'inverse. Pose cinq instances dans une frame verticale en Hug : chaque question se déplie indépendamment, la frame parente grandit toute seule. Si le chevron fond au lieu de pivoter, son nom diffère entre les deux variants, ou il a été redessiné au lieu d'être pivoté.\n\n" +
            "## After delay et le toast qui s'efface\n\n" +
            "Cas pratique avec le déclencheur temporel : le toast de confirmation. Un écran « après ajout au panier » affiche une notification en bas ; sur cette frame de premier niveau, une interaction `After delay` de 3000 ms navigue vers le même écran sans le toast, en Smart Animate, et la notification glisse hors champ toute seule. Rappelle-toi la contrainte : After delay ne se pose que sur une frame de premier niveau ou entre variants d'un composant interactif, pas sur un calque interne quelconque. Pour un toast vraiment autonome, la version moderne est justement le composant interactif dont le variant visible bascule vers le variant masqué après délai.\n\n" +
            "Quant au **On drag**, il rend crédibles les carrousels et les bottom sheets : une interaction On drag vers la frame suivante, et le testeur balaye les slides du pouce en présentation mobile. Un carrousel cliquable au lieu de glissable fait immédiatement « faux » en test utilisateur, et les retours s'en ressentent.\n\n" +
            "## Une durée qui sonne juste\n\n" +
            "Entre 200 et 400 ms pour la plupart des transitions d'interface. En dessous de 150 ms, l'oeil rate le mouvement. Au-dessus de 500 ms, ça traîne et l'utilisateur attend. Règle, teste en présentation, ajuste : une bonne animation se sent plus qu'elle ne se voit.",
        },
        {
          id: "l18",
          title: "Quiz : Grilles et prototypage",
          type: "quiz",
          duration: "7 min",
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
                "Dans un prototype, ton badge de panier affiche toujours « 0 » malgré une action Set variable qui incrémente cartCount. Pourquoi ?",
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
                "Tu veux qu'un bouton « Commander » ne navigue vers le paiement que si le panier contient au moins un article. Quel outil de prototypage utilises-tu ?",
              options: [
                "Une transition Smart Animate",
                "Une interaction conditionnelle (If/Else) testant cartCount > 0",
                "Un variant supplémentaire du bouton",
                "Une contrainte ancrée en bas",
              ],
              correctIndex: 1,
              explanation:
                "L'interaction conditionnelle évalue une expression au clic et exécute la branche vraie ou la branche sinon. Ici, cartCount > 0 déclenche la navigation, sinon on peut afficher un message via une booléenne. Smart Animate gère l'animation, pas la logique.",
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
                "Smart Animate interpole les calques qui portent un nom identique entre les deux frames. Si les noms diffèrent, ou si un calque a été recréé au lieu d'être déplacé, Figma ne fait plus le lien et retombe sur un fondu. Un nommage stable est indispensable pour animer proprement.",
            },
            {
              id: "q24",
              prompt:
                "Tu veux que tous les boutons du prototype réagissent au survol, sur tous les écrans, sans câbler chaque écran. Quelle est la bonne approche ?",
              options: [
                "Dupliquer chaque écran avec les boutons en état survolé",
                "Un composant interactif : relier le variant Default au variant Hover sur While hovering, dans le component set",
                "Une variable booléenne isHovered par bouton",
                "Une action After delay sur chaque bouton",
              ],
              correctIndex: 1,
              explanation:
                "Une interaction posée entre les variants d'un component set voyage avec le composant : chaque instance réagit au survol partout, présente et future. While hovering revient en arrière tout seul quand le curseur sort. Dupliquer les écrans ou multiplier les variables recrée l'enfer que les composants interactifs éliminent.",
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
          duration: "16 min",
          body:
            "## De fichier à bibliothèque\n\n" +
            "Un fichier Figma devient une **bibliothèque** quand tu publies ses composants, styles et variables pour les rendre disponibles dans d'autres fichiers. C'est ce qui transforme un beau fichier isolé en système partagé par l'équipe.\n\n" +
            "Pour publier : panneau **Assets**, icône de bibliothèque (le petit livre), ou le menu **Libraries**. Tu vois la liste de ce qui va partir : composants, styles, collections de variables. Coche, écris une note de version, clique sur **Publish**. Les autres fichiers de l'équipe activent alors cette bibliothèque et piochent dedans. À savoir : le partage de bibliothèques entre fichiers est une fonctionnalité des plans payants, sur le plan gratuit tu publies des styles mais pas les composants entre équipes.\n\n" +
            "## Structurer le fichier bibliothèque\n\n" +
            "Un fichier de bibliothèque rangé, c'est des **pages dédiées**, et cette structure n'a rien de décoratif : elle sépare ce qui est publié de ce qui est en chantier.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La structure de pages d'un fichier de bibliothèque propre : sources publiées en haut, chantier en bas\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\" font-family=\"ui-monospace, monospace\" font-size=\"12\">\n" +
            "<title>Structure des pages d'un fichier de bibliothèque</title>\n" +
            "<rect x=\"40\" y=\"36\" width=\"250\" height=\"260\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"54\" y=\"60\" fill=\"currentColor\" opacity=\"0.8\">Pages du fichier</text>\n" +
            "<line x1=\"40\" y1=\"72\" x2=\"290\" y2=\"72\" stroke=\"currentColor\" opacity=\"0.35\"/>\n" +
            "<text x=\"54\" y=\"96\" fill=\"currentColor\" opacity=\"0.7\">Cover</text>\n" +
            "<text x=\"54\" y=\"126\" fill=\"currentColor\" class=\"fig-accent\">Foundations</text>\n" +
            "<text x=\"54\" y=\"156\" fill=\"currentColor\" class=\"fig-accent\">Components</text>\n" +
            "<text x=\"54\" y=\"186\" fill=\"currentColor\" class=\"fig-accent\">Patterns</text>\n" +
            "<line x1=\"40\" y1=\"204\" x2=\"290\" y2=\"204\" stroke=\"currentColor\" opacity=\"0.35\" stroke-dasharray=\"5 4\"/>\n" +
            "<text x=\"54\" y=\"232\" fill=\"currentColor\" opacity=\"0.6\">Playground (WIP)</text>\n" +
            "<text x=\"54\" y=\"262\" fill=\"currentColor\" opacity=\"0.6\">zz-deprecated</text>\n" +
            "<line x1=\"300\" y1=\"120\" x2=\"336\" y2=\"120\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"346\" y=\"96\" fill=\"currentColor\" opacity=\"0.8\">tokens, typo, specimens</text>\n" +
            "<line x1=\"300\" y1=\"150\" x2=\"336\" y2=\"150\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"346\" y=\"156\" fill=\"currentColor\" opacity=\"0.8\">composants principaux,</text>\n" +
            "<text x=\"346\" y=\"174\" fill=\"currentColor\" opacity=\"0.8\">ranges par famille</text>\n" +
            "<line x1=\"300\" y1=\"182\" x2=\"336\" y2=\"196\" stroke=\"currentColor\" opacity=\"0.5\"/>\n" +
            "<text x=\"346\" y=\"216\" fill=\"currentColor\" opacity=\"0.8\">assemblages : header,</text>\n" +
            "<text x=\"346\" y=\"234\" fill=\"currentColor\" opacity=\"0.8\">formulaire, empty state</text>\n" +
            "<text x=\"346\" y=\"272\" fill=\"currentColor\" class=\"fig-accent\">sous la ligne : jamais</text>\n" +
            "<text x=\"346\" y=\"290\" fill=\"currentColor\" class=\"fig-accent\">publie tel quel</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "- `Cover` : une vignette de présentation, le nom du système, la version, qui contacter.\n" +
            "- `Foundations` : couleurs, typographie, espacements, sous forme de specimens visuels.\n" +
            "- `Components` : les composants principaux, groupés par famille, chacun avec ses variants alignés.\n" +
            "- `Patterns` : des assemblages plus gros, en-têtes, cartes complètes, formulaires, états vides.\n" +
            "- `Playground` ou `WIP` : le bac à sable, ce qui n'est pas prêt. Rien de ce qui y vit ne doit être publié.\n\n" +
            "Ne publie jamais depuis un fichier où les composants principaux traînent au milieu des écrans de test. La séparation nette entre sources et usages est la première marque d'un système sérieux, et c'est la première chose que je regarde quand on me demande d'auditer un design system.\n\n" +
            "## Documenter dans le fichier\n\n" +
            "Chaque composant accepte une **description** (dans le panneau du composant principal), qui s'affiche au survol dans les Assets et dans Dev Mode, ainsi qu'un lien vers une documentation externe. Une phrase du genre « Bouton d'action principale. Un seul par écran. » vaut mieux qu'un composant muet que chacun interprète à sa façon. Ajoute aussi, sur la page Components, une petite note à côté des cas limites : quand utiliser Ghost plutôt que Secondary, pourquoi le bouton destructif n'a pas de variant Hover en mobile.\n\n" +
            "## Recevoir et gérer les mises à jour\n\n" +
            "Quand la bibliothèque évolue, les fichiers qui l'utilisent affichent une notification. Chacun voit les changements et choisit de les accepter : personne ne subit une modification en douce. C'est important, une mise à jour d'un composant central peut décaler des dizaines d'écrans. Sur les plans Organization, les **library analytics** montrent quels composants sont réellement utilisés et où : précieux avant de supprimer ou de refondre, tu sais qui tu vas déranger.\n\n" +
            "## Le circuit de contribution\n\n" +
            "Une bibliothèque sans règles de contribution finit en décharge. Le montage qui marche dans les équipes de 3 à 30 designers : un ou deux mainteneurs désignés ont le droit d'éditer et de publier le fichier bibliothèque ; tout le monde peut proposer. La proposition prend la forme d'une section dédiée sur la page Playground, ou d'un ticket, avec le besoin, le composant candidat et deux ou trois usages réels à l'appui. Le mainteneur intègre, nettoie le nommage, branche les tokens, publie. Sans ce filtre, chaque designer ajoute « son » bouton légèrement différent, et six mois plus tard les Assets proposent quatre boutons dont personne ne connaît le bon.\n\n" +
            "La règle des usages réels compte double : un composant ajouté « au cas où » n'a jamais la bonne API, parce qu'elle a été devinée au lieu d'être constatée. On promeut en bibliothèque ce qui a déjà servi deux ou trois fois dans des écrans livrés, pas ce qu'on imagine servir un jour.\n\n" +
            "## Changer de bibliothèque sans tout recâbler\n\n" +
            "Dernier outil à connaître, côté plans Organization : le **swap de bibliothèque**. Quand une équipe migre d'une vieille bibliothèque vers une nouvelle (fusion d'équipes, refonte de système), la fonction Swap library du panneau Assets remplace dans un fichier toutes les instances d'une bibliothèque par leurs équivalentes dans l'autre, en s'appuyant sur les noms des composants. Même mécanique que le swap d'instance de la partie 2, à l'échelle du fichier entier : des noms alignés entre l'ancienne et la nouvelle bibliothèque font la différence entre une migration d'une heure et une semaine de recâblage à la main.\n\n" +
            "> À retenir : publier n'est pas un bouton qu'on presse à la va-vite. Chaque publication porte une note de version et, idéalement, un mot dans le canal de l'équipe. Un système, c'est autant de communication que de fichiers.\n\n" +
            "## Le piège des variables non publiées\n\n" +
            "Erreur classique : on publie les composants mais on oublie les **collections de variables**. Résultat, les fichiers consommateurs voient les composants, mais les couleurs arrivent comme des valeurs figées, sans lien aux tokens, et le mode sombre ne bascule rien. Vérifie la liste de publication : les collections doivent y figurer, sauf `Primitives` si tu l'as volontairement masquée avec Hide from publishing, ce qui est justement la bonne pratique vue en leçon 13.",
        },
        {
          id: "l20",
          title: "Versionner : historique, branches, changelog",
          type: "text",
          duration: "15 min",
          body:
            "## L'historique de versions\n\n" +
            "Figma enregistre l'historique en continu. Menu du fichier, **Show version history** : un panneau s'ouvre avec la timeline. Tu peux remonter à n'importe quel point, prévisualiser, restaurer, ou dupliquer un état passé dans un nouveau fichier pour comparer. Attention à la rétention : sur le plan gratuit, l'historique est conservé 30 jours ; les plans payants le gardent sans limite. Si ton système vit sur un plan gratuit, ce détail peut faire très mal un mois après une mauvaise manip.\n\n" +
            "L'historique automatique est fin et bavard, des dizaines de points par jour. Le vrai geste pro, c'est de **nommer des versions** aux moments clés : `Ctrl + Alt + S` (**Save to version history**), un titre parlant, une description. « v1.2, refonte des boutons », « Avant migration variables ». Ces jalons nommés sont tes points de retour fiables au milieu du bruit, et ce sont eux qu'on retrouve en un clin d'oeil dans la timeline.\n\n" +
            "## Les branches\n\n" +
            "Sur les plans Organization et Enterprise, Figma propose des **branches**, calquées sur Git. Tu crées une branche depuis le fichier principal, tu y travailles une évolution risquée sans toucher au système en production, puis tu ouvres une demande de fusion, revue par un pair avant d'être intégrée.\n\n" +
            "C'est la façon propre de retravailler un composant central : la branche isole le chantier, l'équipe continue sur la version stable, et la fusion se fait quand c'est prêt et validé. Sans branches, un designer qui refond les boutons casse le fichier pour tout le monde pendant deux jours. Souviens-toi aussi du quiz de la partie 2 : les restructurations de calques qui font sauter des surcharges, c'est exactement le genre de chantier qui doit passer par une branche et être annoncé.\n\n" +
            "Au moment de fusionner, Figma affiche les **conflits** si deux personnes ont modifié le même composant, et te fait choisir côté par côté, comme un merge de code. Déroutant la première fois, salvateur ensuite.\n\n" +
            "Si tu n'as pas les branches (plan Professional), le contournement honnête : dupliquer le fichier, préfixer « WIP », travailler dedans, puis reporter les changements à la main. C'est moins confortable, surtout au report, mais ça préserve l'essentiel, personne ne travaille sur un système en travaux.\n\n" +
            "## Le changelog de bibliothèque\n\n" +
            "Chaque publication porte une note. Prends l'habitude d'écrire ce qui change, façon changelog : « Ajout du variant Disabled sur Input », « Renommage token brand/500 en action/primary, mettez à jour vos écrans ». Les consommateurs lisent cette note avant d'accepter la mise à jour, et un renommage annoncé évite la panique quand des couleurs semblent disparaître. Une convention légère type versionnage sémantique aide à jauger le risque d'un coup d'oeil : patch pour un correctif visuel, mineure pour un ajout, majeure pour un changement qui casse des usages.\n\n" +
            "> À retenir : une version nommée avant chaque gros chantier, une branche pour les refontes risquées, une note claire à chaque publication. Trois habitudes qui coûtent cinq minutes et sauvent des demi-journées.\n\n" +
            "## Restaurer sans rien perdre\n\n" +
            "Peur classique : « si je restaure une version d'il y a trois jours, je perds le travail d'hier ? » Non. Restaurer ne supprime rien : Figma ajoute l'état restauré comme nouvel état courant, et tout l'historique, y compris hier, reste dans la timeline. Tu peux donc restaurer pour vérifier quelque chose, puis revenir à l'état d'avant, sans risque. Pour une récupération chirurgicale, passe plutôt par **Duplicate** sur la version visée : elle s'ouvre comme un nouveau fichier, tu copies les trois frames à sauver, tu les colles dans le fichier courant, et personne n'a rien vu bouger.\n\n" +
            "Pour les noms de version, une convention qui a fait ses preuves : l'intention d'abord, le contexte ensuite. « Avant migration variables », « Validé revue produit 12/03 », « v2.1 publiée ». Bannis les « save », « backup » et « ok final v3 final » : dans six mois, au milieu de quarante jalons, seuls les noms qui racontent l'état du fichier te permettront de viser juste du premier coup. La description sous le titre accepte quelques lignes, utilise-les pour lister ce qui a changé, c'est ton mini-changelog interne avant même la note de publication.\n\n" +
            "## Une cadence de publication\n\n" +
            "Évite de publier vingt fois par jour au fil des micro-ajustements : chaque publication génère une notification et du travail de validation chez tous les consommateurs. Regroupe et publie par lots cohérents. Sur une équipe active, une à deux publications par semaine, bien documentées, valent mieux qu'un flux permanent de petites mises à jour que plus personne ne lit.\n\n" +
            "## À toi\n\n" +
            "Tu dois renommer 40 tokens de couleur pour adopter la convention `catégorie/rôle` vue en partie 3. Écris ton plan d'action en quatre étapes avant de toucher au fichier.\n\n" +
            "> Correction : 1) version nommée « Avant renommage tokens » (`Ctrl + Alt + S`). 2) branche `token-renaming` si le plan le permet, sinon fichier dupliqué WIP. 3) renommage, vérification sur les écrans de la branche, demande de fusion revue par un pair. 4) publication avec une note explicite listant les correspondances ancien nom vers nouveau nom, plus un message dans le canal design. L'étape que tout le monde saute, c'est la 4 : sans la table de correspondance, chaque designer perd vingt minutes à deviner où est passé son `brand/500`.",
        },
        {
          id: "l21",
          title: "Handoff développeur avec Dev Mode",
          type: "video",
          duration: "18 min",
          videoLabel: "Démo : inspecter une carte, lire les specs et les tokens en Dev Mode",
          body:
            "## Ce qu'est Dev Mode\n\n" +
            "Dev Mode est l'espace de Figma pensé pour les développeurs. On y bascule avec l'interrupteur en haut à droite ou `Shift + D`. L'interface change : plus d'outils de dessin, mais des mesures, des valeurs, du code et un suivi de ce qui est prêt à intégrer. Côté accès, Dev Mode dépend du type de siège payant (les développeurs ont en général un siège Dev, moins cher qu'un siège complet de design) : à anticiper dans le budget de l'équipe, car c'est souvent une surprise au moment d'inviter les devs.\n\n" +
            "## Le flux de handoff complet\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le flux de handoff : de la maquette validée à l'intégration, avec retour par Compare changes\"}\n" +
            "<svg viewBox=\"0 0 640 270\" role=\"img\" font-family=\"ui-monospace, monospace\" font-size=\"12\">\n" +
            "<title>Flux de handoff développeur avec Dev Mode</title>\n" +
            "<rect x=\"32\" y=\"90\" width=\"128\" height=\"64\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"44\" y=\"116\" fill=\"currentColor\" opacity=\"0.8\">maquette</text>\n" +
            "<text x=\"44\" y=\"134\" fill=\"currentColor\" opacity=\"0.8\">validee</text>\n" +
            "<line x1=\"160\" y1=\"122\" x2=\"186\" y2=\"122\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"186,116 198,122 186,128\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<rect x=\"198\" y=\"90\" width=\"128\" height=\"64\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"210\" y=\"116\" fill=\"currentColor\" opacity=\"0.8\">section</text>\n" +
            "<text x=\"210\" y=\"134\" fill=\"currentColor\" opacity=\"0.8\">Ready for dev</text>\n" +
            "<line x1=\"326\" y1=\"122\" x2=\"352\" y2=\"122\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"352,116 364,122 352,128\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<rect x=\"364\" y=\"78\" width=\"140\" height=\"88\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"376\" y=\"102\" fill=\"currentColor\" class=\"fig-accent\">Dev Mode</text>\n" +
            "<text x=\"376\" y=\"122\" fill=\"currentColor\" opacity=\"0.8\">tokens nommes</text>\n" +
            "<text x=\"376\" y=\"140\" fill=\"currentColor\" opacity=\"0.8\">mesures, code</text>\n" +
            "<text x=\"376\" y=\"158\" fill=\"currentColor\" opacity=\"0.8\">annotations</text>\n" +
            "<line x1=\"504\" y1=\"122\" x2=\"530\" y2=\"122\" stroke=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<polygon points=\"530,116 542,122 530,128\" fill=\"currentColor\" opacity=\"0.6\"/>\n" +
            "<rect x=\"542\" y=\"90\" width=\"72\" height=\"64\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/>\n" +
            "<text x=\"552\" y=\"116\" fill=\"currentColor\" opacity=\"0.8\">code</text>\n" +
            "<text x=\"552\" y=\"134\" fill=\"currentColor\" opacity=\"0.8\">front</text>\n" +
            "<path d=\"M 570 154 L 570 220 L 434 220\" fill=\"none\" stroke=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<polygon points=\"434,214 422,220 434,226\" fill=\"currentColor\" class=\"fig-accent\"/>\n" +
            "<text x=\"200\" y=\"212\" fill=\"currentColor\" class=\"fig-accent\">maquette retouchee ?</text>\n" +
            "<text x=\"200\" y=\"230\" fill=\"currentColor\" class=\"fig-accent\">Compare changes</text>\n" +
            "<text x=\"32\" y=\"46\" fill=\"currentColor\" opacity=\"0.8\">Le developpeur lit le design, il ne le devine pas.</text>\n" +
            "</svg>\n" +
            "```\n\n" +
            "## Inspecter un élément\n\n" +
            "On sélectionne la carte. Le panneau affiche dimensions, padding, rayon, couleurs. Là où c'est précieux : quand une couleur vient d'une variable, Dev Mode montre le **nom du token**, `surface/raised`, et même la **code syntax** définie en leçon 13, `--surface-raised`, pas seulement l'hexadécimal. Le développeur voit qu'il doit utiliser sa variable CSS, pas coder une couleur en dur. Tout le travail de tokens des parties précédentes paye ici, littéralement à l'écran.\n\n" +
            "## Mesurer les espacements\n\n" +
            "En survolant un autre élément avec la carte sélectionnée, Figma affiche les distances entre les deux, en pixels. On voit aussi le padding et le gap de l'auto-layout, qui se traduisent directement en `padding` et `gap` CSS. C'est là que l'auto-layout bien construit porte ses fruits : des valeurs propres, issues de l'échelle, lisibles sans deviner.\n\n" +
            "## Le code généré\n\n" +
            "Dev Mode propose un extrait de code pour l'élément sélectionné, CSS par défaut, ou iOS et Android. Pour la carte :\n\n" +
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
            "Ce code n'est pas à coller tel quel en production, c'est une base de lecture. Pour aller plus loin, deux briques à connaître en 2026 : **Code Connect** (plans Organization et Enterprise) remplace le code générique par les vrais extraits de ta base de code, l'instance de bouton affiche `<Button variant=\"primary\">` de ton repo React au lieu d'un div approximatif ; et le **serveur MCP de Dev Mode** expose le contexte du design aux assistants de code, l'agent IA du développeur lit la structure et les tokens de la sélection au lieu de repartir d'une capture d'écran.\n\n" +
            "## Marquer « Ready for dev » et annoter\n\n" +
            "Une section peut être marquée **Ready for dev** : elle se signale visuellement aux développeurs comme validée et intégrable, et Dev Mode permet de filtrer pour ne voir qu'elles. On pose aussi des **annotations** : sélectionner un élément, ajouter une note qui précise un comportement, « ce bouton reste désactivé tant que le formulaire est invalide ». Ces annotations vivent dans le fichier, à côté du visuel, au lieu de se perdre dans un document séparé qui sera obsolète dans deux semaines.\n\n" +
            "## Comparer les changements\n\n" +
            "La vue **Compare changes** montre au développeur ce qui a bougé depuis la dernière fois qu'il a regardé la frame. Sur un écran retouché, il repère en un coup d'oeil que seul le padding d'un bloc a changé, sans relire tout l'écran. Ça évite les intégrations à l'aveugle et les régressions du genre « on a réintégré la vieille maquette ».\n\n" +
            "> À retenir : un bon handoff, ce n'est pas une capture d'écran envoyée sur Slack. C'est un fichier en Dev Mode, avec des tokens nommés, des sections marquées prêtes, et des annotations là où le comportement n'est pas évident. Le développeur lit le design, il ne le devine pas, et chaque brique de ce cours, auto-layout, propriétés, tokens, converge vers cette lecture-là.",
        },
        {
          id: "l22",
          title: "Quiz : Bibliothèque et handoff",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Après publication, un fichier consommateur voit tes composants mais les couleurs apparaissent comme des valeurs figées sans lien aux tokens. Quelle est la cause la plus probable ?",
              options: [
                "Les composants ont été détachés",
                "Les collections de variables n'ont pas été incluses dans la publication",
                "Le fichier consommateur est sur un autre plan Figma",
                "Le mode sombre n'a pas été activé",
              ],
              correctIndex: 1,
              explanation:
                "On oublie souvent de publier les collections de variables en même temps que les composants et les styles. Sans elles, les fichiers consommateurs récupèrent les composants mais pas les tokens de couleur, qui s'affichent alors sans lien, et les modes ne basculent rien. Il faut vérifier la liste de publication.",
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
                "La branche permet de retravailler un composant central sans perturber la production. L'équipe continue sur le fichier stable, et la fusion, revue par un pair, intègre le travail quand il est prêt. C'est le même principe que les branches Git, conflits compris.",
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
                "Le token nommé fait le pont entre le design system et le code, surtout si la code syntax est renseignée (--surface-raised). Le développeur référence sa variable CSS, ce qui garde le thème cohérent et permet les modes clair/sombre côté code. Un hexadécimal seul l'inciterait à coder la couleur en dur.",
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
            {
              id: "q25",
              prompt:
                "L'équipe front veut voir, sur chaque instance de bouton en Dev Mode, l'appel réel de son composant React (<Button variant=\"primary\">) au lieu du CSS générique. Quelle fonctionnalité répond à ce besoin ?",
              options: [
                "Les annotations",
                "Code Connect, qui relie les composants Figma aux vrais extraits de la base de code",
                "La vue Compare changes",
                "Le scoping des variables",
              ],
              correctIndex: 1,
              explanation:
                "Code Connect (plans Organization et Enterprise) mappe chaque composant Figma sur le composant réel du repo : Dev Mode affiche alors l'extrait exact à utiliser, propriétés incluses. Les annotations documentent un comportement, Compare changes montre les diffs, le scoping limite l'usage des variables : aucun des trois ne remplace le code réel.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
