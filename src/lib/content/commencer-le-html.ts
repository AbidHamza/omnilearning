import type { Course } from "../types";

const course: Course = {
  slug: "commencer-le-html",
  title: "Créer son premier site web : HTML & CSS",
  tagline:
    "Du fichier vide au site en ligne : écris du vrai HTML, mets-le en forme avec CSS et publie-le gratuitement.",
  description:
    "Un parcours pas à pas pour débuter le web sans rien connaître au départ. Tu comprends d'abord comment un navigateur récupère une page, puis tu écris ton propre HTML sémantique, tu le stylises avec CSS (box model, Flexbox, Grid), tu le rends responsive, et tu le mets en ligne sur Netlify ou GitHub Pages. Beaucoup d'exemples courts que tu peux copier, coller et modifier immédiatement.",
  category: "Développement Web",
  level: "Débutant",
  instructor: "Camille Ferrand",
  instructorBio:
    "Camille Ferrand est développeuse front-end et formatrice depuis huit ans. Elle a accompagné des reconversions en bootcamp et garde une obsession : que chaque débutant ait un site en ligne dès la première semaine.",
  hours: 6,
  rating: 4.8,
  learners: 1840,
  accent: "#e34c26",
  image:
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80",
  language: "Français",
  software: "Un éditeur de code (VS Code) et un navigateur",
  prerequisites: [
    "Savoir utiliser un ordinateur au quotidien (créer un dossier, ouvrir un fichier)",
    "Aucune connaissance en programmation requise",
    "Un navigateur récent (Chrome, Firefox ou Edge) installé",
  ],
  summary: [
    "Partie 1 : Comment fonctionne le web et comment coder en local",
    "Partie 2 : Anatomie d'un document HTML et balises sémantiques",
    "Partie 3 : Texte, liens, images, listes et tableaux",
    "Partie 4 : Formulaires et bases de l'accessibilité",
    "Partie 5 : Introduction à CSS (sélecteurs, cascade, box model, unités)",
    "Partie 6 : Mise en page moderne (Flexbox, Grid), responsive et mise en ligne",
  ],
  objectives: [
    "Expliquer le trajet d'une page web du serveur jusqu'à l'écran",
    "Écrire un document HTML valide et sémantique sans copier de modèle",
    "Structurer du contenu avec liens, images, listes, tableaux et formulaires accessibles",
    "Comprendre la cascade, la spécificité et le box model pour dompter le CSS",
    "Construire une mise en page responsive avec Flexbox et Grid",
    "Mettre un site en ligne gratuitement sur Netlify ou GitHub Pages",
  ],
  skills: [
    "HTML sémantique",
    "CSS (sélecteurs, box model, couleurs, unités)",
    "Flexbox et CSS Grid",
    "Responsive design et media queries",
    "Accessibilité web de base",
    "Déploiement statique (Netlify, GitHub Pages)",
  ],
  contentTypes: [
    "Leçons écrites",
    "Exemples de code commentés",
    "Quiz interactifs",
    "Transcript de démonstration",
  ],
  parts: [
    {
      id: "p1",
      title: "Comprendre le web et coder en local",
      lessons: [
        {
          id: "l1",
          title: "Client, serveur : qui parle à qui",
          type: "text",
          duration: "14 min",
          body:
            "## Le web tient en un aller-retour\n\n" +
            "Quand tu ouvres une page, deux ordinateurs se parlent. Le tien, avec son navigateur, s'appelle le **client**. En face, une machine allumée en permanence quelque part dans un centre de données stocke les fichiers du site : c'est le **serveur**. Le client demande, le serveur répond. Tout le web repose sur cette conversation.\n\n" +
            "Concrètement, tu tapes une adresse, le navigateur envoie une demande (\"donne-moi la page d'accueil\"), et le serveur renvoie un fichier texte. Ce texte, c'est du HTML. Le navigateur le lit et le transforme en la page que tu vois. Rien de magique : un fichier part d'un côté, s'affiche de l'autre.\n\n" +
            "## Pourquoi ça compte pour toi\n\n" +
            "Beaucoup de débutants imaginent qu'un site web est un logiciel installé quelque part. Faux. Un site, dans sa forme la plus simple, c'est un dossier de fichiers texte (`.html`, `.css`) posés sur un serveur. C'est exactement ce que tu vas fabriquer dans ce cours, sur ta propre machine d'abord, puis mis en ligne à la fin.\n\n" +
            "Ce type de site s'appelle un **site statique** : les fichiers sont livrés tels quels, sans base de données ni traitement côté serveur. C'est parfait pour un portfolio, une landing page, un blog, une doc. Les sites plus complexes (une boutique, un réseau social) ajoutent des couches, mais le socle reste ce même échange client/serveur.\n\n" +
            "## Les trois langages, trois rôles\n\n" +
            "- **HTML** décrit le contenu et sa structure : un titre, un paragraphe, une image, un lien.\n" +
            "- **CSS** décrit l'apparence : couleurs, espacements, disposition, polices.\n" +
            "- **JavaScript** ajoute le comportement : réagir à un clic, charger des données.\n\n" +
            "Une bonne image mentale : le HTML est le squelette, le CSS l'habillage, le JavaScript les muscles. Ce cours se concentre sur les deux premiers, qui suffisent déjà à construire un vrai site.\n\n" +
            "> À retenir : le client demande, le serveur répond, et ce qui voyage entre les deux c'est d'abord du HTML. Garde ce trajet en tête, tout le reste en découle.\n",
        },
        {
          id: "l2",
          title: "URL, HTTP et le voyage d'une page",
          type: "text",
          duration: "15 min",
          body:
            "## Décomposer une adresse\n\n" +
            "Une URL n'est pas une chaîne magique, elle a une grammaire. Prenons `https://developer.mozilla.org/fr/docs/Web` :\n\n" +
            "- `https` est le **protocole**, la langue commune client/serveur. Le `s` signifie que l'échange est chiffré.\n" +
            "- `developer.mozilla.org` est le **nom de domaine**, l'adresse lisible d'un serveur. En coulisse, un annuaire appelé DNS le traduit en une adresse numérique (une IP).\n" +
            "- `/fr/docs/Web` est le **chemin**, qui pointe vers une ressource précise sur ce serveur.\n\n" +
            "## HTTP, la langue de l'échange\n\n" +
            "Le protocole s'appelle HTTP (HTTPS quand il est chiffré). Le navigateur envoie une **requête** et reçoit une **réponse**. La requête la plus courante est un `GET` : \"donne-moi cette ressource\". La réponse contient le fichier demandé, plus un **code de statut** qui résume ce qui s'est passé.\n\n" +
            "Ces codes, tu vas vite les rencontrer :\n\n" +
            "- `200` : tout va bien, voici la page.\n" +
            "- `301` / `302` : la ressource a déménagé, suis la redirection.\n" +
            "- `404` : introuvable, l'adresse ne correspond à rien.\n" +
            "- `500` : le serveur a planté en préparant la réponse.\n\n" +
            "Le fameux 404 n'est donc pas un bug mystérieux, juste un serveur qui dit poliment \"je n'ai pas ça\".\n\n" +
            "## Ce qui se passe en une fraction de seconde\n\n" +
            "1. Tu valides une adresse.\n" +
            "2. Le DNS traduit le domaine en IP.\n" +
            "3. Le navigateur ouvre une connexion et envoie une requête `GET`.\n" +
            "4. Le serveur répond avec le HTML (statut `200`).\n" +
            "5. En lisant ce HTML, le navigateur voit qu'il a besoin d'autres fichiers : CSS, images, polices. Il envoie une requête pour chacun.\n" +
            "6. Il assemble le tout et dessine la page.\n\n" +
            "Tu peux observer ce ballet toi-même. Ouvre les **outils de développement** de ton navigateur (touche F12), onglet Réseau, puis recharge une page. Chaque ligne est une requête, avec son statut et son poids.\n\n" +
            "> À retenir : une page n'arrive pas d'un bloc. Le HTML arrive en premier, puis le navigateur va chercher les fichiers qu'il mentionne. Un site lent, c'est souvent trop de requêtes ou des fichiers trop lourds.\n" +
            "\n" +
            "Doc de référence pour approfondir : [MDN – Aperçu de HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Overview).\n",
        },
        {
          id: "l3",
          title: "Ton atelier : éditeur, fichier, navigateur",
          type: "text",
          duration: "13 min",
          body:
            "## Le minimum pour commencer\n\n" +
            "Bonne nouvelle : tu n'as besoin d'aucun logiciel payant, d'aucun serveur, d'aucune installation compliquée. Deux choses suffisent : un **éditeur de code** et un **navigateur**. Tu as déjà le second.\n\n" +
            "Pour l'éditeur, installe [Visual Studio Code](https://code.visualstudio.com/), gratuit et de loin le plus utilisé. Un éditeur de code n'est pas un traitement de texte : il colore ta syntaxe, signale tes erreurs et complète tes balises. Écrire du HTML dans Word finirait par ajouter des caractères invisibles qui cassent tout, alors passe par un vrai éditeur dès le départ.\n\n" +
            "## Créer ta première page\n\n" +
            "Crée un dossier `mon-site` sur ton bureau. Dedans, crée un fichier nommé exactement `index.html`. Ce nom n'est pas anodin : par convention, un serveur sert `index.html` quand on demande un dossier sans préciser de fichier. C'est la page d'accueil par défaut.\n\n" +
            "Colle ce contenu et enregistre :\n\n" +
            "```html\n" +
            "<!DOCTYPE html>\n" +
            "<html lang=\"fr\">\n" +
            "  <head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <title>Mon premier site</title>\n" +
            "  </head>\n" +
            "  <body>\n" +
            "    <h1>Bonjour, le web</h1>\n" +
            "    <p>Ma toute première page, écrite à la main.</p>\n" +
            "  </body>\n" +
            "</html>\n" +
            "```\n\n" +
            "Maintenant double-clique sur `index.html`. Il s'ouvre dans ton navigateur. Regarde la barre d'adresse : elle commence par `file://` et non `https://`. Tu lis un fichier local, directement depuis ton disque, sans serveur. C'est parfait pour apprendre.\n\n" +
            "## La boucle de travail\n\n" +
            "Tout le développement front-end tient dans ce cycle : modifie le fichier dans l'éditeur, enregistre, retourne au navigateur, recharge (Ctrl+R), observe. Répète. Tu vas le faire des centaines de fois. Garde ton éditeur et ton navigateur côte à côte à l'écran.\n\n" +
            "Un confort à installer plus tard : l'extension **Live Server** de VS Code, qui recharge la page automatiquement à chaque enregistrement. Pour l'instant, recharger à la main te fera très bien comprendre le lien entre ton fichier et l'affichage.\n\n" +
            "> À retenir : un site local, c'est un dossier avec un `index.html`. Éditeur d'un côté, navigateur de l'autre, et la touche de rechargement entre les deux. Tu tiens déjà tout l'outillage nécessaire pour la suite du cours.\n",
        },
        {
          id: "l4",
          title: "Quiz : le web et l'atelier",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Tu ouvres ton fichier index.html en double-cliquant dessus et l'adresse commence par file://. Qu'est-ce que cela indique ?",
              options: [
                "La page est déjà en ligne, accessible à tout le monde",
                "Le navigateur lit un fichier local sur ton disque, sans passer par un serveur",
                "Le fichier est corrompu car il devrait commencer par https://",
                "Tu as besoin d'un serveur pour afficher la moindre page HTML",
              ],
              correctIndex: 1,
              explanation:
                "file:// signifie que le navigateur affiche un fichier directement depuis ton disque. C'est suffisant pour tout apprendre. https:// n'apparaîtra qu'une fois le site déposé sur un serveur, à la fin du cours.",
            },
            {
              id: "q2",
              prompt: "Que renvoie exactement un serveur lorsqu'il répond à une requête GET pour une page ?",
              options: [
                "Une image de la page déjà dessinée",
                "Un fichier texte (le HTML) que le navigateur devra interpréter et dessiner",
                "Le code source complet du serveur",
                "Directement la version stylisée avec le CSS déjà appliqué visuellement",
              ],
              correctIndex: 1,
              explanation:
                "Le serveur envoie du texte : le HTML. C'est le navigateur qui l'interprète, va chercher les fichiers CSS et images mentionnés, puis dessine la page. Rien n'arrive sous forme d'image toute faite.",
            },
            {
              id: "q3",
              prompt:
                "Un lien de ton site renvoie un statut HTTP 404. Quelle est la cause la plus probable ?",
              options: [
                "Le serveur est en panne totale",
                "La ressource demandée n'existe pas à l'adresse indiquée",
                "La connexion n'est pas chiffrée",
                "Le navigateur est trop ancien",
              ],
              correctIndex: 1,
              explanation:
                "404 veut dire « introuvable » : l'adresse ne correspond à aucune ressource. Souvent un nom de fichier mal orthographié ou un fichier déplacé. Une panne serveur donnerait plutôt un code 500.",
            },
            {
              id: "q4",
              prompt: "Pourquoi vaut-il mieux écrire son HTML dans VS Code plutôt que dans un traitement de texte comme Word ?",
              options: [
                "Word ne peut pas enregistrer de fichiers .html du tout",
                "Un éditeur de code écrit du texte brut et propre, alors qu'un traitement de texte ajoute du formatage invisible qui casse le code",
                "VS Code met automatiquement le site en ligne",
                "Word ralentit le navigateur au moment de l'affichage",
              ],
              correctIndex: 1,
              explanation:
                "Un traitement de texte insère des caractères de mise en forme invisibles (guillemets typographiques, styles) qui rendent le HTML invalide. Un éditeur de code produit du texte brut, colore la syntaxe et signale les erreurs.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Anatomie d'un document HTML",
      lessons: [
        {
          id: "l5",
          title: "Squelette d'une page : doctype, head, body",
          type: "text",
          duration: "15 min",
          body:
            "## Anatomie d'une balise\n\n" +
            "Le HTML fonctionne par **balises**. Une balise ouvrante comme `<p>`, une balise fermante comme `</p>`, et entre les deux le contenu. L'ensemble forme un **élément** : `<p>Un paragraphe.</p>`. La barre oblique dans la balise fermante est ce qui la distingue de l'ouvrante.\n\n" +
            "Certaines balises n'ont pas de contenu et ne se ferment pas, comme l'image `<img>` ou le saut de ligne `<br>`. On les appelle des éléments vides.\n\n" +
            "Les balises peuvent porter des **attributs**, des informations supplémentaires écrites dans la balise ouvrante : `<html lang=\"fr\">`. Ici l'attribut `lang` vaut `fr`. Un attribut a un nom et, le plus souvent, une valeur entre guillemets.\n\n" +
            "## Le document minimal, ligne par ligne\n\n" +
            "```html\n" +
            "<!DOCTYPE html>\n" +
            "<html lang=\"fr\">\n" +
            "  <head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
            "    <title>Titre de l'onglet</title>\n" +
            "  </head>\n" +
            "  <body>\n" +
            "    <h1>Contenu visible</h1>\n" +
            "  </body>\n" +
            "</html>\n" +
            "```\n\n" +
            "- `<!DOCTYPE html>` prévient le navigateur : c'est du HTML moderne. Sans cette ligne, certains navigateurs basculent dans un mode de compatibilité bizarre. Mets-la toujours.\n" +
            "- `<html lang=\"fr\">` enveloppe toute la page et déclare sa langue. Le `lang` aide les lecteurs d'écran à prononcer correctement et les moteurs de recherche à classer la page.\n" +
            "- `<head>` contient les **métadonnées** : rien de visible dans la page, mais des informations pour le navigateur.\n" +
            "- `<body>` contient tout ce qui s'affiche.\n\n" +
            "## Ce que cache le head\n\n" +
            "Deux lignes du `<head>` méritent qu'on s'y arrête.\n\n" +
            "`<meta charset=\"UTF-8\">` déclare l'encodage des caractères. Oublie-la et tes accents deviennent des symboles cassés du genre `Ã©` à la place de `é`. C'est le bug le plus courant chez les débutants francophones. Mets-la en toute première ligne du head.\n\n" +
            "`<meta name=\"viewport\" ...>` indique au téléphone d'utiliser la largeur réelle de l'écran plutôt que de simuler un écran de bureau et de tout rétrécir. Sans elle, ton site responsive s'affichera minuscule sur mobile. On y reviendra dans la partie responsive, mais prends l'habitude de la mettre dès maintenant.\n\n" +
            "`<title>` est le texte de l'onglet et le titre affiché dans les résultats de recherche. Ce n'est pas le titre visible dans la page, ne le confonds pas avec `<h1>`.\n\n" +
            "> À retenir : head pour les informations invisibles, body pour le contenu visible. charset UTF-8 et la balise viewport ne sont pas optionnelles, ce sont les deux lignes qui évitent les bugs les plus fréquents.\n",
        },
        {
          id: "l6",
          title: "Balises sémantiques : donner du sens à la structure",
          type: "text",
          duration: "16 min",
          body:
            "## Pourquoi pas juste des div partout\n\n" +
            "On pourrait construire un site entier avec un seul élément générique, la `<div>`. Beaucoup le font, et c'est une mauvaise idée. Une `<div>` ne dit rien de ce qu'elle contient. Le HTML propose des balises **sémantiques** qui nomment le rôle de chaque zone. Un `<nav>` n'a pas d'apparence différente d'une `<div>`, mais il annonce : « ici, la navigation ».\n\n" +
            "Ce sens sert trois publics : les lecteurs d'écran, qui permettent aux personnes aveugles de sauter directement au contenu principal ; les moteurs de recherche, qui comprennent mieux la page ; et surtout toi, dans six mois, qui reliras un code où chaque zone porte son nom.\n\n" +
            "## Les grandes zones\n\n" +
            "```html\n" +
            "<body>\n" +
            "  <header>\n" +
            "    <h1>Mon portfolio</h1>\n" +
            "    <nav>\n" +
            "      <a href=\"/\">Accueil</a>\n" +
            "      <a href=\"/projets\">Projets</a>\n" +
            "      <a href=\"/contact\">Contact</a>\n" +
            "    </nav>\n" +
            "  </header>\n\n" +
            "  <main>\n" +
            "    <section>\n" +
            "      <h2>Projets récents</h2>\n" +
            "      <article>\n" +
            "        <h3>Application météo</h3>\n" +
            "        <p>Une petite appli qui affiche la météo locale.</p>\n" +
            "      </article>\n" +
            "    </section>\n" +
            "  </main>\n\n" +
            "  <footer>\n" +
            "    <p>&copy; 2026 Mon nom</p>\n" +
            "  </footer>\n" +
            "</body>\n" +
            "```\n\n" +
            "- `<header>` : l'en-tête, souvent le logo et la navigation principale.\n" +
            "- `<nav>` : un bloc de liens de navigation.\n" +
            "- `<main>` : le contenu principal, unique dans la page. Un lecteur d'écran peut y sauter directement.\n" +
            "- `<section>` : un regroupement thématique de contenu, en général introduit par un titre.\n" +
            "- `<article>` : un contenu autonome qui aurait du sens seul, comme un billet de blog ou une fiche produit.\n" +
            "- `<aside>` : un contenu annexe, une barre latérale, un encart.\n" +
            "- `<footer>` : le pied de page, mentions, copyright, liens secondaires.\n\n" +
            "## section ou article : le bon réflexe\n\n" +
            "La confusion classique. Pose-toi la question : « ce bloc garderait-il du sens si je le sortais de la page pour le publier ailleurs ? » Si oui, c'est un `<article>` (un billet, un commentaire, une carte produit). Si c'est juste un regroupement thématique interne à la page, c'est une `<section>`. Un `<article>` peut contenir plusieurs `<section>`, et l'inverse est possible aussi.\n\n" +
            "N'abandonne pas la `<div>` pour autant. Elle reste utile comme simple conteneur quand aucun élément sémantique ne convient, typiquement pour grouper des éléments à des fins de mise en page CSS. La règle : choisis d'abord la balise qui décrit le contenu, et retombe sur `<div>` seulement s'il n'y en a pas.\n\n" +
            "> À retenir : chaque zone de ta page a un nom. header, nav, main, footer d'abord, puis section et article à l'intérieur. La div n'est pas interdite, elle est juste le dernier recours quand rien de plus précis n'existe.\n",
        },
        {
          id: "l7",
          title: "Texte : titres, paragraphes et emphase",
          type: "text",
          duration: "13 min",
          body:
            "## La hiérarchie des titres\n\n" +
            "Le HTML propose six niveaux de titres, de `<h1>` à `<h6>`. Ils ne servent pas à faire du texte plus ou moins gros, ils dessinent un **plan**, comme les titres et sous-titres d'un mémoire.\n\n" +
            "Deux règles tiennent la route dans 99 % des cas :\n\n" +
            "- Un seul `<h1>` par page, c'est le sujet de la page.\n" +
            "- Ne saute pas de niveau. Un `<h3>` doit suivre un `<h2>`, pas directement un `<h1>`.\n\n" +
            "```html\n" +
            "<h1>Recettes de pain</h1>\n" +
            "<h2>Pains rapides</h2>\n" +
            "<h3>Pain de mie</h3>\n" +
            "<h3>Pain aux noix</h3>\n" +
            "<h2>Pains au levain</h2>\n" +
            "```\n\n" +
            "Cette hiérarchie n'est pas cosmétique. Les utilisateurs de lecteurs d'écran naviguent souvent de titre en titre pour scanner une page. Un plan cassé leur donne une page illisible. Les moteurs de recherche s'en servent aussi pour comprendre ta structure.\n\n" +
            "## Paragraphes et sauts de ligne\n\n" +
            "Le texte courant vit dans des `<p>`. N'utilise pas des `<br>` en série pour espacer, c'est le CSS qui gère l'espacement. Le `<br>` ne sert qu'aux sauts de ligne qui font partie du contenu, comme une adresse postale ou un vers de poème.\n\n" +
            "```html\n" +
            "<p>Premier paragraphe, une idée complète.</p>\n" +
            "<p>Deuxième paragraphe, une autre idée.</p>\n" +
            "```\n\n" +
            "## Mettre en valeur avec du sens\n\n" +
            "Deux balises se ressemblent visuellement mais portent un sens différent :\n\n" +
            "- `<strong>` marque une **importance forte**. Rendu en gras par défaut.\n" +
            "- `<em>` marque une **emphase**, une nuance de ton. Rendu en italique par défaut.\n\n" +
            "Il existe bien `<b>` et `<i>`, qui donnent le même gras et le même italique mais sans signification. Pour du contenu, préfère `<strong>` et `<em>` : un lecteur d'écran les prononce avec insistance, alors que `<b>` et `<i>` restent muets. Le rendu est identique, le sens ne l'est pas.\n\n" +
            "Quelques balises texte utiles au quotidien :\n\n" +
            "- `<a>` pour un lien (partie suivante).\n" +
            "- `<code>` pour du code au fil du texte, comme `const x = 1`.\n" +
            "- `<blockquote>` pour une citation longue, `<q>` pour une courte.\n" +
            "- `<abbr title=\"HyperText Markup Language\">HTML</abbr>` pour une abréviation avec sa définition au survol.\n\n" +
            "> À retenir : les titres dessinent un plan, pas des tailles de police. Un seul h1, pas de niveau sauté, et strong/em quand tu veux du sens plutôt que du simple gras décoratif.\n",
        },
        {
          id: "l8",
          title: "Quiz : structure et sémantique",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Sur ta page, les accents s'affichent en symboles bizarres comme « Ã© » au lieu de « é ». Quelle est la correction ?",
              options: [
                "Changer la police dans le CSS",
                "Ajouter <meta charset=\"UTF-8\"> au début du head",
                "Retirer l'attribut lang de la balise html",
                "Remplacer tous les accents par des entités HTML à la main",
              ],
              correctIndex: 1,
              explanation:
                "Ce symptôme vient d'un encodage non déclaré ou incorrect. <meta charset=\"UTF-8\"> en première ligne du head indique au navigateur de lire correctement les caractères accentués. C'est le réflexe numéro un pour ce bug.",
            },
            {
              id: "q6",
              prompt:
                "Tu écris un billet de blog qui pourrait être republié tel quel sur un autre site. Quelle balise sémantique l'enveloppe le mieux ?",
              options: [
                "<section>, car c'est un regroupement de contenu",
                "<div>, car c'est le conteneur le plus flexible",
                "<article>, car le contenu est autonome et aurait du sens hors de la page",
                "<aside>, car un billet est un contenu secondaire",
              ],
              correctIndex: 2,
              explanation:
                "Le test décisif : si le bloc garde son sens sorti de la page, c'est un article. Un billet de blog, une fiche produit ou un commentaire sont des articles. La section est un simple regroupement thématique interne.",
            },
            {
              id: "q7",
              prompt:
                "Quelle est la bonne raison de préférer <strong> à <b> pour un mot important ?",
              options: [
                "<strong> affiche un gras plus foncé que <b>",
                "<b> est obsolète et n'existe plus en HTML moderne",
                "<strong> porte une signification (importance) que les lecteurs d'écran restituent, alors que <b> n'est que visuel",
                "<strong> est plus rapide à charger",
              ],
              correctIndex: 2,
              explanation:
                "Le rendu par défaut est identique. La différence est sémantique : strong signifie « important » et un lecteur d'écran peut l'accentuer, tandis que b applique seulement du gras sans sens. b existe toujours, mais pour du contenu on choisit strong.",
            },
            {
              id: "q8",
              prompt:
                "Un développeur enchaîne <h1> puis directement <h3> sur sa page. Pourquoi est-ce un problème ?",
              options: [
                "Le h3 ne s'affichera pas du tout",
                "Cela casse le plan hiérarchique du document, ce qui gêne la navigation par titres des lecteurs d'écran et le référencement",
                "Le HTML devient invalide et la page ne se charge pas",
                "Il faut obligatoirement six titres sur chaque page",
              ],
              correctIndex: 1,
              explanation:
                "La page s'affichera quand même, mais les titres forment un plan. Sauter du h1 au h3 crée un trou dans ce plan. Les utilisateurs de lecteurs d'écran naviguent de titre en titre, et un plan cohérent aide aussi le référencement.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Contenu : liens, images, listes, tableaux",
      lessons: [
        {
          id: "l9",
          title: "Les liens, colonne vertébrale du web",
          type: "text",
          duration: "14 min",
          body:
            "## Anatomie d'un lien\n\n" +
            "Le lien hypertexte est ce qui fait du web une toile. La balise est `<a>`, pour *anchor*, et son attribut essentiel est `href`, la destination.\n\n" +
            "```html\n" +
            "<a href=\"https://developer.mozilla.org\">La documentation MDN</a>\n" +
            "```\n\n" +
            "Le texte entre les balises est ce que l'utilisateur voit et clique. Ce texte compte : écris un intitulé parlant. « Clique ici » est une mauvaise pratique, parce qu'un lecteur d'écran peut lister tous les liens d'une page hors contexte, et une liste de « clique ici » ne veut rien dire. Préfère « Lire le guide d'installation ».\n\n" +
            "## Liens absolus et liens relatifs\n\n" +
            "Deux façons d'écrire une destination.\n\n" +
            "Un lien **absolu** contient l'adresse complète, protocole compris. On l'utilise pour pointer vers un autre site :\n\n" +
            "```html\n" +
            "<a href=\"https://www.wikipedia.org\">Wikipédia</a>\n" +
            "```\n\n" +
            "Un lien **relatif** décrit un chemin par rapport à la page actuelle. On l'utilise pour naviguer à l'intérieur de son propre site :\n\n" +
            "```html\n" +
            "<a href=\"contact.html\">Contact</a>\n" +
            "<a href=\"projets/meteo.html\">Projet météo</a>\n" +
            "<a href=\"../index.html\">Retour à l'accueil</a>\n" +
            "```\n\n" +
            "Le `../` signifie « remonte d'un dossier ». C'est exactement la même logique que naviguer dans l'explorateur de fichiers. Les liens relatifs ont un gros avantage : ton site fonctionne pareil en local et une fois en ligne, sans changer une ligne.\n\n" +
            "## Trois usages pratiques\n\n" +
            "Ouvrir dans un nouvel onglet, avec la sécurité qui va avec :\n\n" +
            "```html\n" +
            "<a href=\"https://exemple.com\" target=\"_blank\" rel=\"noopener\">Site externe</a>\n" +
            "```\n\n" +
            "Le `rel=\"noopener\"` évite que la page ouverte puisse manipuler la tienne, un réflexe de sécurité à garder dès qu'on utilise `target=\"_blank\"`.\n\n" +
            "Un lien vers un ancrage dans la même page, grâce à un `id` :\n\n" +
            "```html\n" +
            "<a href=\"#tarifs\">Voir les tarifs</a>\n" +
            "<!-- plus bas -->\n" +
            "<section id=\"tarifs\">...</section>\n" +
            "```\n\n" +
            "Un lien qui déclenche un e-mail ou un appel :\n\n" +
            "```html\n" +
            "<a href=\"mailto:contact@exemple.fr\">Écris-nous</a>\n" +
            "<a href=\"tel:+33123456789\">Appelle-nous</a>\n" +
            "```\n\n" +
            "> À retenir : href pointe la destination, absolue vers l'extérieur, relative à l'intérieur de ton site. Écris toujours un intitulé de lien qui a du sens sorti de son contexte, c'est bon pour l'humain comme pour l'accessibilité.\n",
        },
        {
          id: "l10",
          title: "Images : afficher, décrire, alléger",
          type: "text",
          duration: "14 min",
          body:
            "## La balise img et ses deux attributs vitaux\n\n" +
            "Une image s'insère avec `<img>`, un élément vide qui ne se ferme pas. Deux attributs comptent vraiment :\n\n" +
            "```html\n" +
            "<img src=\"chat.jpg\" alt=\"Un chat roux endormi sur un clavier\">\n" +
            "```\n\n" +
            "- `src` est le chemin de l'image, relatif ou absolu, exactement comme pour les liens.\n" +
            "- `alt` est le **texte alternatif**, une description lue à voix haute par les lecteurs d'écran et affichée si l'image ne charge pas.\n\n" +
            "L'`alt` n'est pas optionnel. Sans lui, une personne aveugle n'a aucune idée de ce que montre l'image, et ton site perd des points en accessibilité comme en référencement. Décris ce que l'image apporte, pas « image » ou « photo ». Écris ce que tu dirais à quelqu'un au téléphone.\n\n" +
            "Exception importante : une image purement décorative (un motif de fond, une séparation) doit avoir un `alt` **vide**, `alt=\"\"`. Le lecteur d'écran l'ignore alors, ce qui est le comportement voulu. Un `alt` vide est un choix explicite, pas un oubli.\n\n" +
            "## Dimensions et pourquoi les préciser\n\n" +
            "```html\n" +
            "<img src=\"produit.jpg\" alt=\"Sac à dos gris de randonnée\" width=\"600\" height=\"400\">\n" +
            "```\n\n" +
            "Renseigner `width` et `height` permet au navigateur de réserver l'espace de l'image avant même de la télécharger. Sans ça, le texte saute au moment où l'image arrive, un défaut agaçant qu'on appelle décalage de mise en page. Ces valeurs donnent le ratio, le CSS ajustera la taille réelle plus tard.\n\n" +
            "## Servir la bonne taille avec srcset\n\n" +
            "Charger une photo de 4000 pixels de large pour l'afficher dans une vignette de 300 pixels gaspille des données et ralentit le mobile. L'attribut `srcset` propose plusieurs versions et laisse le navigateur choisir :\n\n" +
            "```html\n" +
            "<img\n" +
            "  src=\"photo-800.jpg\"\n" +
            "  srcset=\"photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w\"\n" +
            "  sizes=\"(max-width: 600px) 100vw, 800px\"\n" +
            "  alt=\"Vue d'une vallée au lever du soleil\">\n" +
            "```\n\n" +
            "C'est un sujet avancé, tu n'en as pas besoin pour ta première page. Retiens juste qu'il existe une solution propre pour ne pas envoyer des images énormes aux petits écrans.\n\n" +
            "## Un mot sur les formats\n\n" +
            "- `JPEG` pour les photos.\n" +
            "- `PNG` quand tu as besoin de transparence.\n" +
            "- `SVG` pour les logos et icônes, car ce sont des images vectorielles qui restent nettes à toute taille.\n" +
            "- `WebP` et `AVIF`, plus modernes, produisent des fichiers plus légers à qualité égale. À privilégier quand tu peux.\n\n" +
            "> À retenir : src pour la source, alt pour la description, et alt vide pour une image purement décorative. Précise width et height pour éviter les sauts, et n'envoie jamais une image de 4000 px là où 600 suffisent.\n",
        },
        {
          id: "l11",
          title: "Listes : à puces, ordonnées, de définitions",
          type: "text",
          duration: "12 min",
          body:
            "## Deux listes pour deux intentions\n\n" +
            "La liste à puces, `<ul>` pour *unordered list*, sert quand l'ordre n'a pas d'importance : une liste de courses, des fonctionnalités, des tags.\n\n" +
            "```html\n" +
            "<ul>\n" +
            "  <li>Pommes</li>\n" +
            "  <li>Farine</li>\n" +
            "  <li>Œufs</li>\n" +
            "</ul>\n" +
            "```\n\n" +
            "La liste ordonnée, `<ol>` pour *ordered list*, sert quand la séquence compte : des étapes, un classement, une procédure. Le navigateur numérote automatiquement.\n\n" +
            "```html\n" +
            "<ol>\n" +
            "  <li>Préchauffer le four à 200°C.</li>\n" +
            "  <li>Mélanger les ingrédients secs.</li>\n" +
            "  <li>Ajouter les œufs et pétrir.</li>\n" +
            "</ol>\n" +
            "```\n\n" +
            "Dans les deux cas, chaque élément est un `<li>` pour *list item*. On ne met rien d'autre que des `<li>` en enfant direct d'un `<ul>` ou d'un `<ol>`.\n\n" +
            "## Listes imbriquées\n\n" +
            "Une liste peut en contenir une autre. Attention, la sous-liste se glisse **à l'intérieur** du `<li>` parent, pas entre deux `<li>` :\n\n" +
            "```html\n" +
            "<ul>\n" +
            "  <li>Fruits\n" +
            "    <ul>\n" +
            "      <li>Pommes</li>\n" +
            "      <li>Bananes</li>\n" +
            "    </ul>\n" +
            "  </li>\n" +
            "  <li>Légumes</li>\n" +
            "</ul>\n" +
            "```\n\n" +
            "C'est l'erreur d'imbrication la plus fréquente : placer la sous-liste au mauvais endroit produit un HTML invalide et un affichage bancal.\n\n" +
            "## La liste de définitions, méconnue et utile\n\n" +
            "Pour associer des termes à leurs descriptions (un glossaire, des caractéristiques produit, une FAQ courte), il existe `<dl>`, *description list* :\n\n" +
            "```html\n" +
            "<dl>\n" +
            "  <dt>HTML</dt>\n" +
            "  <dd>Le langage qui structure le contenu.</dd>\n" +
            "  <dt>CSS</dt>\n" +
            "  <dd>Le langage qui met en forme ce contenu.</dd>\n" +
            "</dl>\n" +
            "```\n\n" +
            "`<dt>` est le terme, `<dd>` sa définition. On peut associer plusieurs `<dd>` à un même `<dt>`.\n\n" +
            "## Le vrai rôle des listes\n\n" +
            "Les listes ne servent pas qu'aux puces visibles. Une barre de navigation est, sémantiquement, une liste de liens. Les développeurs écrivent très souvent leur `<nav>` ainsi :\n\n" +
            "```html\n" +
            "<nav>\n" +
            "  <ul>\n" +
            "    <li><a href=\"/\">Accueil</a></li>\n" +
            "    <li><a href=\"/blog\">Blog</a></li>\n" +
            "  </ul>\n" +
            "</nav>\n" +
            "```\n\n" +
            "Le CSS retirera les puces et alignera les liens à l'horizontale, mais la structure de liste reste juste : c'est bien une énumération d'entrées.\n\n" +
            "> À retenir : ul quand l'ordre est libre, ol quand il compte, dl pour associer termes et définitions. Les puces se retireront en CSS, mais la sémantique de liste, elle, doit rester correcte.\n",
        },
        {
          id: "l12",
          title: "Tableaux : données en lignes et colonnes",
          type: "text",
          duration: "14 min",
          body:
            "## Un tableau, pour quoi faire\n\n" +
            "Un `<table>` sert à présenter des **données tabulaires** : un tableau de prix, un planning, des statistiques. La règle est stricte : jamais de tableau pour faire de la mise en page. Cette pratique, courante dans les années 2000, est morte. Pour disposer des éléments à l'écran, on utilise Flexbox et Grid, qu'on verra plus tard. Le tableau sert uniquement à des données qui ont vraiment des lignes et des colonnes.\n\n" +
            "## La structure complète\n\n" +
            "```html\n" +
            "<table>\n" +
            "  <caption>Tarifs des abonnements</caption>\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">Formule</th>\n" +
            "      <th scope=\"col\">Prix mensuel</th>\n" +
            "      <th scope=\"col\">Utilisateurs</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">Solo</th>\n" +
            "      <td>9 €</td>\n" +
            "      <td>1</td>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <th scope=\"row\">Équipe</th>\n" +
            "      <td>29 €</td>\n" +
            "      <td>10</td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "```\n\n" +
            "Décortiquons les balises :\n\n" +
            "- `<table>` enveloppe l'ensemble.\n" +
            "- `<caption>` donne un titre au tableau, lu par les lecteurs d'écran. À mettre juste après `<table>`.\n" +
            "- `<thead>` regroupe la ligne d'en-tête, `<tbody>` le corps des données.\n" +
            "- `<tr>` est une ligne, *table row*.\n" +
            "- `<th>` est une cellule d'en-tête, *table header*, en gras et centrée par défaut.\n" +
            "- `<td>` est une cellule de données, *table data*.\n\n" +
            "## L'attribut qui change tout : scope\n\n" +
            "Regarde `scope=\"col\"` et `scope=\"row\"`. Cet attribut indique si une cellule d'en-tête décrit une colonne ou une ligne. Pour une personne qui voit le tableau, c'est évident. Pour un lecteur d'écran, `scope` est ce qui lui permet d'annoncer, à chaque cellule, « colonne Prix, ligne Équipe : 29 € ». Sans lui, l'utilisateur entend une suite de chiffres décorrélés. C'est le détail qui distingue un tableau accessible d'un tableau illisible.\n\n" +
            "## Fusionner des cellules\n\n" +
            "Deux attributs permettent d'étendre une cellule sur plusieurs colonnes ou lignes :\n\n" +
            "```html\n" +
            "<td colspan=\"2\">Étalé sur deux colonnes</td>\n" +
            "<td rowspan=\"3\">Étalé sur trois lignes</td>\n" +
            "```\n\n" +
            "À manier avec parcimonie : un tableau truffé de fusions devient vite illisible et pénible à styliser.\n\n" +
            "> À retenir : un tableau, c'est pour des données, jamais pour la mise en page. thead pour l'en-tête, tbody pour les données, et surtout scope sur les th pour que le tableau reste compréhensible sans les yeux.\n",
        },
        {
          id: "l13",
          title: "Quiz : liens, images, listes, tableaux",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Ton site a une page accueil dans le dossier racine et une page projets/meteo.html. Depuis meteo.html, quel lien relatif ramène à l'accueil ?",
              options: [
                "<a href=\"index.html\">Accueil</a>",
                "<a href=\"../index.html\">Accueil</a>",
                "<a href=\"/projets/index.html\">Accueil</a>",
                "<a href=\"https://index.html\">Accueil</a>",
              ],
              correctIndex: 1,
              explanation:
                "meteo.html est dans le dossier projets. Pour atteindre index.html à la racine, il faut d'abord remonter d'un niveau avec ../ puis nommer le fichier. Le chemin relatif fonctionnera aussi bien en local qu'en ligne.",
            },
            {
              id: "q10",
              prompt:
                "Tu ajoutes un motif décoratif purement esthétique en image de contenu. Quel alt utiliser ?",
              options: [
                "alt=\"image décorative\"",
                "alt=\"motif\"",
                "alt=\"\" (vide)",
                "Ne pas mettre d'attribut alt du tout",
              ],
              correctIndex: 2,
              explanation:
                "Un alt vide indique explicitement au lecteur d'écran d'ignorer l'image, ce qui est le bon comportement pour du purement décoratif. Décrire « motif » ajouterait du bruit inutile. Omettre l'attribut, en revanche, est une erreur : certains lecteurs liraient alors le nom du fichier.",
            },
            {
              id: "q11",
              prompt:
                "Pourquoi préciser width et height sur une balise img améliore l'expérience de chargement ?",
              options: [
                "Cela compresse automatiquement l'image",
                "Le navigateur réserve l'espace avant le téléchargement, ce qui évite que le contenu saute quand l'image arrive",
                "Cela empêche l'image de se déformer sur mobile",
                "Cela remplace le besoin d'attribut alt",
              ],
              correctIndex: 1,
              explanation:
                "En connaissant le ratio à l'avance, le navigateur garde la place de l'image et le texte autour ne se décale pas au moment où elle se charge. Ce décalage de mise en page est un défaut de qualité mesuré par les outils de performance.",
            },
            {
              id: "q12",
              prompt:
                "À quoi sert l'attribut scope sur les cellules <th> d'un tableau ?",
              options: [
                "À colorer automatiquement les en-têtes",
                "À indiquer si l'en-tête décrit une colonne ou une ligne, pour que les lecteurs d'écran associent chaque donnée au bon en-tête",
                "À fusionner plusieurs cellules",
                "À trier les lignes du tableau",
              ],
              correctIndex: 1,
              explanation:
                "scope=\"col\" ou scope=\"row\" relie chaque cellule de données à son en-tête. Un lecteur d'écran peut alors annoncer « colonne Prix, ligne Équipe : 29 € ». Sans scope, les données défilent sans repère et le tableau devient incompréhensible à l'oreille.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Formulaires et accessibilité",
      lessons: [
        {
          id: "l14",
          title: "Construire un formulaire qui marche",
          type: "text",
          duration: "16 min",
          body:
            "## Le conteneur form\n\n" +
            "Un formulaire vit dans une balise `<form>`. Deux attributs définissent son comportement : `action`, l'adresse qui recevra les données, et `method`, la façon de les envoyer (`get` ou `post`). Pour un envoi qui modifie quelque chose côté serveur, comme un message de contact, on utilise `post`.\n\n" +
            "```html\n" +
            "<form action=\"/envoi\" method=\"post\">\n" +
            "  <!-- champs ici -->\n" +
            "</form>\n" +
            "```\n\n" +
            "Traiter réellement les données demande un serveur, ce qui dépasse le HTML/CSS. Mais construire le formulaire, le rendre correct et accessible, c'est entièrement de ton ressort.\n\n" +
            "## Le duo label + input\n\n" +
            "C'est le point le plus important de la leçon. Chaque champ doit avoir une étiquette `<label>` correctement reliée, jamais un simple texte posé à côté.\n\n" +
            "```html\n" +
            "<label for=\"email\">Adresse e-mail</label>\n" +
            "<input type=\"email\" id=\"email\" name=\"email\">\n" +
            "```\n\n" +
            "Le `for` du label doit valoir le `id` de l'input. Cette liaison a deux effets concrets : cliquer sur le texte du label place le curseur dans le champ, et un lecteur d'écran annonce « Adresse e-mail, champ de saisie » quand l'utilisateur y arrive. Un champ sans label relié est un champ que personne à l'aveugle ne peut remplir.\n\n" +
            "L'attribut `name`, lui, est le nom sous lequel la donnée sera envoyée au serveur. Sans `name`, la valeur du champ n'est pas transmise du tout.\n\n" +
            "## Les types d'input qui font le travail à ta place\n\n" +
            "L'attribut `type` change le clavier affiché sur mobile, la validation et parfois l'interface :\n\n" +
            "```html\n" +
            "<input type=\"text\">      <!-- texte simple -->\n" +
            "<input type=\"email\">     <!-- clavier @, validation du format -->\n" +
            "<input type=\"tel\">       <!-- clavier numérique -->\n" +
            "<input type=\"number\">    <!-- nombres, avec flèches -->\n" +
            "<input type=\"date\">      <!-- sélecteur de date natif -->\n" +
            "<input type=\"password\">  <!-- caractères masqués -->\n" +
            "<input type=\"checkbox\">  <!-- case à cocher -->\n" +
            "<input type=\"radio\">     <!-- bouton radio, choix unique -->\n" +
            "```\n\n" +
            "Choisir le bon `type` t'offre gratuitement le bon clavier et une validation de base. `type=\"email\"` refusera une saisie sans `@`, sans une ligne de code en plus.\n\n" +
            "## Zones de texte, listes déroulantes et bouton\n\n" +
            "```html\n" +
            "<label for=\"message\">Message</label>\n" +
            "<textarea id=\"message\" name=\"message\" rows=\"5\"></textarea>\n\n" +
            "<label for=\"pays\">Pays</label>\n" +
            "<select id=\"pays\" name=\"pays\">\n" +
            "  <option value=\"fr\">France</option>\n" +
            "  <option value=\"be\">Belgique</option>\n" +
            "</select>\n\n" +
            "<button type=\"submit\">Envoyer</button>\n" +
            "```\n\n" +
            "Quelques attributs utiles : `required` rend un champ obligatoire, `placeholder` affiche un exemple grisé (qui ne remplace jamais un label), `value` définit une valeur par défaut. Le `placeholder` disparaît dès qu'on tape, donc il ne doit jamais porter l'information essentielle.\n\n" +
            "> À retenir : un champ sans label relié par for/id est un champ cassé pour l'accessibilité. Choisis le bon type d'input, donne un name à chaque champ, et n'utilise jamais le placeholder à la place du label.\n",
        },
        {
          id: "l15",
          title: "Accessibilité : les réflexes qui comptent",
          type: "text",
          duration: "16 min",
          body:
            "## L'accessibilité n'est pas une option\n\n" +
            "Rendre un site accessible, c'est faire en sorte qu'une personne aveugle, malvoyante, avec un handicap moteur ou une navigation au clavier puisse l'utiliser. Ce n'est pas de la charité, c'est un socle de qualité, souvent une obligation légale, et ça améliore le site pour tout le monde. La bonne nouvelle : 80 % de l'accessibilité vient d'un HTML propre, et tu en as déjà vu l'essentiel.\n\n" +
            "## Ce que tu maîtrises déjà\n\n" +
            "Reprenons les points croisés dans les leçons précédentes, car ce sont les plus rentables :\n\n" +
            "- Un `alt` pertinent sur chaque image porteuse de sens, un `alt` vide sur les décoratives.\n" +
            "- Un plan de titres cohérent, un seul `<h1>`, sans niveau sauté.\n" +
            "- Des `<label>` reliés à leurs champs par `for` et `id`.\n" +
            "- Des intitulés de liens explicites, jamais « cliquez ici ».\n" +
            "- Des balises sémantiques (`<nav>`, `<main>`, `<header>`) qui offrent des points de repère.\n\n" +
            "Rien qu'avec ça, ton site est déjà mieux loti que la majorité du web.\n\n" +
            "## La navigation au clavier\n\n" +
            "Beaucoup d'utilisateurs ne touchent jamais la souris. Teste ton site : appuie sur `Tab` de façon répétée. Le focus doit sauter de lien en lien, de champ en champ, dans un ordre logique, et rester **visible** à l'écran. Si tu ne vois pas où tu es, tu as un problème.\n\n" +
            "Piège fréquent : certains retirent le contour de focus en CSS parce qu'ils le trouvent moche (`outline: none`). Ne fais jamais ça sans le remplacer. Ce contour est le seul repère d'un utilisateur au clavier. Stylise-le si tu veux, mais ne le supprime pas.\n\n" +
            "## ARIA : le complément, pas le remplaçant\n\n" +
            "ARIA (*Accessible Rich Internet Applications*) est un jeu d'attributs qui ajoute de l'information aux technologies d'assistance quand le HTML seul ne suffit pas. Trois exemples courants :\n\n" +
            "```html\n" +
            "<button aria-label=\"Fermer la fenêtre\">✕</button>\n" +
            "<nav aria-label=\"Navigation principale\">...</nav>\n" +
            "<input aria-describedby=\"aide-mdp\">\n" +
            "<p id=\"aide-mdp\">Au moins 8 caractères.</p>\n" +
            "```\n\n" +
            "`aria-label` donne un nom lu à voix haute à un élément qui n'a pas de texte visible, comme un bouton représenté par une croix. `aria-describedby` relie un champ à un texte d'aide.\n\n" +
            "La règle d'or, énoncée par les spécifications elles-mêmes : **la première règle d'ARIA, c'est de ne pas utiliser ARIA**. Un vrai `<button>` vaut toujours mieux qu'une `<div role=\"button\">` bricolée. ARIA sert à combler des trous, pas à réparer un HTML qu'on aurait mal choisi.\n\n" +
            "## Un test rapide et gratuit\n\n" +
            "Installe l'extension [axe DevTools](https://www.deque.com/axe/devtools/) ou lance l'audit Lighthouse intégré à Chrome (onglet Lighthouse des outils de développement). Ils listent les problèmes d'accessibilité concrets de ta page en quelques secondes. Fais-le sur ta première page, tu seras surpris de ce que tu peux corriger en cinq minutes.\n\n" +
            "> À retenir : l'accessibilité commence par un HTML honnête, pas par ARIA. Teste au clavier avec Tab, garde le focus visible, et n'ajoute ARIA que pour ce que le HTML natif ne sait pas exprimer.\n",
        },
        {
          id: "l16",
          title: "Quiz : formulaires et accessibilité",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Comment relie-t-on correctement un label à son champ de saisie ?",
              options: [
                "En plaçant simplement le texte juste au-dessus de l'input",
                "En faisant correspondre l'attribut for du label à l'attribut id de l'input",
                "En donnant le même name au label et à l'input",
                "En mettant l'input à l'intérieur d'une balise <p>",
              ],
              correctIndex: 1,
              explanation:
                "La liaison se fait entre for (sur le label) et id (sur l'input), avec la même valeur. Cliquer le label active alors le champ, et un lecteur d'écran annonce l'étiquette. Un texte simplement posé à côté n'établit aucun lien exploitable.",
            },
            {
              id: "q14",
              prompt:
                "Pourquoi le placeholder d'un champ ne remplace-t-il pas un label ?",
              options: [
                "Le placeholder est trop petit visuellement",
                "Le placeholder disparaît dès qu'on saisit du texte et n'est pas fiablement annoncé comme étiquette par les lecteurs d'écran",
                "Le placeholder ralentit le formulaire",
                "Le placeholder ne fonctionne que sur les champs de type text",
              ],
              correctIndex: 1,
              explanation:
                "Le placeholder n'est qu'un exemple grisé : il s'efface à la saisie, offre un contraste souvent trop faible et n'est pas un substitut fiable de label pour l'assistance technique. Il complète un label, il ne le remplace jamais.",
            },
            {
              id: "q15",
              prompt:
                "Un développeur écrit outline: none sur tous les éléments pour un rendu plus net. Quel est le risque ?",
              options: [
                "Le site se charge plus lentement",
                "Les utilisateurs au clavier perdent le repère visuel du focus et ne savent plus où ils se trouvent sur la page",
                "Les images cessent de s'afficher",
                "Le CSS devient invalide",
              ],
              correctIndex: 1,
              explanation:
                "Le contour de focus est le seul indicateur de position pour qui navigue au clavier. Le supprimer sans le remplacer rend la navigation impossible à suivre. On peut restyliser le focus, mais jamais le faire disparaître.",
            },
            {
              id: "q16",
              prompt:
                "Dans quel cas aria-label est-il vraiment justifié ?",
              options: [
                "Sur chaque paragraphe pour renforcer le sens",
                "Sur un bouton représenté seulement par une icône (par exemple une croix) et donc sans texte visible",
                "Pour remplacer un vrai élément <button> par une <div>",
                "Sur toutes les images à la place de l'attribut alt",
              ],
              correctIndex: 1,
              explanation:
                "aria-label fournit un nom accessible à un élément dépourvu de texte visible, comme un bouton-icône « ✕ ». On ne s'en sert pas pour bricoler des composants à partir de div, ni à la place d'alt sur les images : le HTML natif reste prioritaire.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Introduction à CSS",
      lessons: [
        {
          id: "l17",
          title: "Brancher le CSS et cibler avec des sélecteurs",
          type: "text",
          duration: "15 min",
          body:
            "## Trois façons d'ajouter du CSS, une seule à retenir\n\n" +
            "On peut écrire du CSS de trois manières. En ligne, dans un attribut `style` sur la balise : à éviter, ça mélange contenu et présentation. Dans une balise `<style>` au sein du `<head>` : pratique pour tester. Et dans un **fichier séparé** relié par une balise `<link>` : c'est la bonne méthode pour un vrai site.\n\n" +
            "```html\n" +
            "<head>\n" +
            "  <link rel=\"stylesheet\" href=\"styles.css\">\n" +
            "</head>\n" +
            "```\n\n" +
            "Un fichier `styles.css` séparé se met en cache par le navigateur, se partage entre toutes tes pages et sépare proprement la structure du style. Prends cette habitude dès maintenant.\n\n" +
            "## L'anatomie d'une règle\n\n" +
            "```css\n" +
            "p {\n" +
            "  color: #333;\n" +
            "  font-size: 18px;\n" +
            "}\n" +
            "```\n\n" +
            "Une règle a un **sélecteur** (`p`, ce qu'on vise) et un bloc de **déclarations** entre accolades. Chaque déclaration est une **propriété** (`color`) suivie d'une **valeur** (`#333`), séparées par deux-points et terminées par un point-virgule. Oublier ce point-virgule est l'erreur qui casse le plus de débutants.\n\n" +
            "## Les sélecteurs, du plus simple au plus utile\n\n" +
            "Cibler par nom de balise, ce qui touche tous les éléments de ce type :\n\n" +
            "```css\n" +
            "h1 { color: navy; }\n" +
            "```\n\n" +
            "Cibler par **classe**, un nom qu'on ajoute sur les éléments qu'on veut. C'est le sélecteur qu'on utilise 90 % du temps. Dans le HTML : `class=\"carte\"`. Dans le CSS, un point devant :\n\n" +
            "```css\n" +
            ".carte { border: 1px solid #ccc; }\n" +
            "```\n\n" +
            "Une classe est réutilisable sur autant d'éléments que tu veux. Cibler par **identifiant**, unique dans la page, avec un dièse :\n\n" +
            "```css\n" +
            "#entete { background: #f5f5f5; }\n" +
            "```\n\n" +
            "En pratique, on privilégie les classes et on garde les `id` pour les ancres de liens ou le JavaScript.\n\n" +
            "## Combiner les sélecteurs\n\n" +
            "```css\n" +
            "nav a { color: white; }        /* les liens à l'intérieur d'un nav */\n" +
            ".carte h2 { margin: 0; }        /* les h2 dans un élément de classe carte */\n" +
            "a:hover { text-decoration: underline; }  /* un lien au survol */\n" +
            "li:first-child { font-weight: bold; }    /* le premier li d'une liste */\n" +
            "```\n\n" +
            "L'espace entre deux sélecteurs signifie « à l'intérieur de ». Le `:hover` et le `:first-child` sont des **pseudo-classes**, des états ou des positions particulières. Elles ouvrent énormément de possibilités sans une ligne de JavaScript.\n\n" +
            "> À retenir : un fichier CSS relié par link, des règles faites d'un sélecteur et de déclarations, et la classe comme outil principal de ciblage. Réserve les id aux ancres et au JS, et n'oublie jamais le point-virgule.\n",
        },
        {
          id: "l18",
          title: "Cascade, héritage et spécificité",
          type: "text",
          duration: "16 min",
          body:
            "## Le C de CSS veut dire Cascade\n\n" +
            "Quand plusieurs règles visent le même élément et se contredisent, laquelle gagne ? C'est toute la question de la **cascade**, et c'est ce qui déroute le plus les débutants. « Pourquoi ma couleur ne s'applique pas ? » : neuf fois sur dix, une autre règle plus forte l'écrase.\n\n" +
            "Trois facteurs décident du vainqueur, dans cet ordre.\n\n" +
            "## 1. L'importance et l'ordre\n\n" +
            "À spécificité égale, la **dernière règle écrite gagne**. Si tu déclares deux fois la couleur d'un paragraphe, c'est la seconde qui l'emporte.\n\n" +
            "```css\n" +
            "p { color: blue; }\n" +
            "p { color: green; }  /* gagne : c'est la dernière */\n" +
            "```\n\n" +
            "C'est pour ça que l'ordre de tes règles compte, et pourquoi un fichier CSS bien rangé s'écrit du plus général vers le plus spécifique.\n\n" +
            "## 2. La spécificité\n\n" +
            "Avant même de regarder l'ordre, le navigateur compare le **poids** des sélecteurs. Plus un sélecteur est précis, plus il pèse lourd. On peut le lire comme un score à trois chiffres :\n\n" +
            "- un `id` vaut 1-0-0.\n" +
            "- une classe, un attribut ou une pseudo-classe vaut 0-1-0.\n" +
            "- un nom de balise vaut 0-0-1.\n\n" +
            "```css\n" +
            "p { color: black; }            /* 0-0-1 */\n" +
            ".intro { color: gray; }        /* 0-1-0, plus fort */\n" +
            "#special { color: red; }       /* 1-0-0, encore plus fort */\n" +
            "```\n\n" +
            "Un paragraphe qui a la classe `intro` et l'id `special` sera rouge, même si la règle noire est écrite en dernier : l'id l'emporte sur tout le reste. C'est aussi pourquoi surcharger un style ciblé par id devient vite pénible, une raison de plus de préférer les classes.\n\n" +
            "## Le piège de !important\n\n" +
            "Il existe une échappatoire, `!important`, qui court-circuite tout le calcul :\n\n" +
            "```css\n" +
            "p { color: purple !important; }\n" +
            "```\n\n" +
            "Fuis-le. C'est un marteau qui casse la cascade et te forcera à empiler d'autres `!important` pour le contrer. Si tu en as besoin, c'est presque toujours le signe d'un problème de structure ailleurs. Garde-le pour des cas d'exception rarissimes.\n\n" +
            "## L'héritage\n\n" +
            "Certaines propriétés se **transmettent** des parents aux enfants. Si tu définis une `color` et une `font-family` sur le `<body>`, tout le texte en hérite sans que tu aies à le répéter :\n\n" +
            "```css\n" +
            "body {\n" +
            "  font-family: system-ui, sans-serif;\n" +
            "  color: #222;\n" +
            "}\n" +
            "```\n\n" +
            "Les propriétés de texte s'héritent (couleur, police, taille). Celles de disposition, non : une `border` ou un `margin` ne se transmettent pas. On exploite l'héritage pour poser les réglages typographiques une seule fois, à la racine.\n\n" +
            "> À retenir : la cascade tranche par spécificité d'abord, ordre ensuite. id plus fort que classe, classe plus forte que balise. Évite !important, et sers-toi de l'héritage pour définir la typographie globale au niveau du body.\n",
        },
        {
          id: "l19",
          title: "Le box model : tout est une boîte",
          type: "text",
          duration: "15 min",
          body:
            "## Chaque élément est une boîte\n\n" +
            "En CSS, absolument tout élément est une boîte rectangulaire, même un mot dans une phrase. Comprendre cette boîte, c'est comprendre pourquoi tes éléments prennent la place qu'ils prennent. Le **box model** décrit quatre couches, de l'intérieur vers l'extérieur.\n\n" +
            "1. Le **contenu** : le texte ou l'image.\n" +
            "2. Le **padding** : l'espace intérieur, entre le contenu et la bordure.\n" +
            "3. La **border** : le trait de contour.\n" +
            "4. La **margin** : l'espace extérieur, qui repousse les voisins.\n\n" +
            "Une image mentale qui marche : le contenu est un tableau, le padding est le passe-partout, la border est le cadre, la margin est l'espace entre ce cadre et le cadre voisin sur le mur.\n\n" +
            "```css\n" +
            ".carte {\n" +
            "  padding: 16px;\n" +
            "  border: 2px solid #ccc;\n" +
            "  margin: 24px;\n" +
            "}\n" +
            "```\n\n" +
            "## Le piège historique de la largeur\n\n" +
            "Voici ce qui a fait râler des générations de développeurs. Par défaut, `width` définit la largeur du **contenu seul**. Le padding et la border s'ajoutent par-dessus. Une carte en `width: 300px` avec `padding: 20px` et `border: 5px` occupe en réalité 300 + 20 + 20 + 5 + 5 = 350 pixels. Tu demandes 300, tu obtiens 350, et ta mise en page déborde.\n\n" +
            "La solution tient en une règle qu'on met en tête de presque tous les projets modernes :\n\n" +
            "```css\n" +
            "* {\n" +
            "  box-sizing: border-box;\n" +
            "}\n" +
            "```\n\n" +
            "Avec `border-box`, la `width` inclut le padding et la border. Demande 300 pixels, tu obtiens 300 pixels, padding et bordure compris. C'est tellement plus intuitif que c'en est devenu le réglage par défaut de fait. Mets cette règle au sommet de ton CSS et n'y pense plus.\n\n" +
            "## Les raccourcis de margin et padding\n\n" +
            "Ces propriétés acceptent de une à quatre valeurs, et l'ordre suit les aiguilles d'une montre en partant du haut :\n\n" +
            "```css\n" +
            "padding: 10px;                /* les 4 côtés */\n" +
            "padding: 10px 20px;           /* haut/bas 10, gauche/droite 20 */\n" +
            "padding: 10px 20px 30px 40px; /* haut, droite, bas, gauche */\n" +
            "```\n\n" +
            "## La fusion des marges verticales\n\n" +
            "Un comportement qui surprend : deux marges verticales qui se touchent **fusionnent** au lieu de s'additionner. Si un paragraphe a `margin-bottom: 20px` et le suivant `margin-top: 30px`, l'espace entre eux n'est pas 50 mais 30 pixels, la plus grande des deux. Ce n'est pas un bug, c'est voulu, et ça ne concerne que les marges verticales. Sachant cela, tu ne chercheras pas pendant une heure d'où vient un espace « manquant ».\n\n" +
            "Un outil pour tout voir : dans les outils de développement, sélectionne un élément et regarde le panneau « Computed ». Il dessine le box model avec les valeurs réelles de chaque couche. C'est le meilleur moyen de comprendre pourquoi un élément fait la taille qu'il fait.\n\n" +
            "> À retenir : contenu, padding, border, margin, dans cet ordre. Active box-sizing: border-box dès la première ligne pour que width veuille dire ce que tu crois, et rappelle-toi que les marges verticales fusionnent au lieu de s'ajouter.\n",
        },
        {
          id: "l20",
          title: "Couleurs, typographie et unités",
          type: "text",
          duration: "15 min",
          body:
            "## Écrire une couleur\n\n" +
            "Plusieurs notations coexistent, autant les connaître :\n\n" +
            "```css\n" +
            "color: red;                    /* nom, pratique pour tester */\n" +
            "color: #e34c26;                /* hexadécimal, le plus courant */\n" +
            "color: rgb(227, 76, 38);       /* rouge, vert, bleu de 0 à 255 */\n" +
            "color: rgb(227 76 38 / 0.5);   /* avec 50% d'opacité */\n" +
            "color: hsl(14, 78%, 52%);      /* teinte, saturation, luminosité */\n" +
            "```\n\n" +
            "L'hexadécimal domine dans les maquettes. HSL est plus lisible quand tu veux ajuster une couleur à la main : monte la troisième valeur pour éclaircir, baisse-la pour assombrir, sans tâtonner sur trois canaux. Un vrai confort pour créer des variantes cohérentes.\n\n" +
            "## Un mot sur le contraste\n\n" +
            "Choisir des couleurs, ce n'est pas qu'esthétique. Un texte gris clair sur fond blanc est illisible pour beaucoup de monde. Les règles d'accessibilité demandent un rapport de contraste d'au moins 4,5 pour 1 entre le texte et son fond. Les outils de développement du navigateur affichent ce ratio quand tu inspectes une couleur de texte, et te préviennent s'il est insuffisant. Vérifie-le, surtout sur les textes secondaires.\n\n" +
            "## La typographie\n\n" +
            "```css\n" +
            "body {\n" +
            "  font-family: \"Inter\", system-ui, sans-serif;\n" +
            "  font-size: 18px;\n" +
            "  line-height: 1.6;\n" +
            "}\n" +
            "```\n\n" +
            "La `font-family` liste des polices par ordre de préférence : le navigateur prend la première disponible. Termine toujours par une famille générique (`sans-serif`, `serif`) comme filet de sécurité. Le mot-clé `system-ui` utilise la police native du système, rapide et sans téléchargement.\n\n" +
            "La `line-height` (hauteur de ligne) sans unité est un multiplicateur de la taille du texte. `1.6` donne une respiration confortable pour de la lecture. En dessous de `1.4`, les lignes se collent et fatiguent l'œil.\n\n" +
            "## Les unités, le vrai sujet\n\n" +
            "C'est le point qui sépare un débutant d'un intermédiaire.\n\n" +
            "- `px` (pixel) est une unité **fixe**. Précise, mais elle ignore les préférences de l'utilisateur.\n" +
            "- `rem` est relatif à la taille de police de la racine (`<html>`), par défaut 16 px. Donc `1rem` = 16 px, `1.5rem` = 24 px.\n" +
            "- `em` est relatif à la taille de police de l'**élément parent**, ce qui peut créer des effets d'accumulation dans les éléments imbriqués.\n" +
            "- `%` est relatif à la dimension du parent.\n\n" +
            "Pourquoi préférer `rem` à `px` pour les tailles de texte ? Parce qu'un utilisateur malvoyant peut augmenter la taille de police par défaut dans son navigateur. Avec des `px`, ton texte reste figé et ignore ce réglage. Avec des `rem`, tout grandit proportionnellement et respecte son choix. C'est un geste d'accessibilité gratuit.\n\n" +
            "```css\n" +
            "html { font-size: 100%; }   /* respecte le réglage utilisateur, ~16px */\n" +
            "h1   { font-size: 2rem; }   /* 32px, mais suit l'utilisateur */\n" +
            "p    { font-size: 1rem; }   /* 16px */\n" +
            "```\n\n" +
            "Ma recommandation concrète : `rem` pour les tailles de texte et les grands espacements, `px` seulement pour les détails fins comme une bordure de 1 pixel.\n\n" +
            "> À retenir : hexadécimal pour les couleurs de maquette, HSL pour ajuster à la main, et surtout des rem plutôt que des px sur le texte pour respecter les préférences de taille de l'utilisateur. Vérifie le contraste, c'est de la lisibilité pour tout le monde.\n",
        },
        {
          id: "l21",
          title: "Quiz : CSS, cascade et box model",
          type: "quiz",
          duration: "5 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Deux règles ciblent le même paragraphe : « p { color: black } » puis « .intro { color: gray } », et le paragraphe porte la classe intro. De quelle couleur sera-t-il ?",
              options: [
                "Noir, car la règle p est écrite en premier",
                "Gris, car une classe (0-1-0) est plus spécifique qu'un sélecteur de balise (0-0-1)",
                "Noir, car les balises l'emportent toujours sur les classes",
                "Cela dépend de l'ordre uniquement, la classe n'y change rien",
              ],
              correctIndex: 1,
              explanation:
                "La spécificité prime sur l'ordre. Une classe pèse 0-1-0, un nom de balise seulement 0-0-1. La règle de classe gagne donc, quel que soit l'ordre d'écriture. L'ordre ne départage que des sélecteurs de spécificité égale.",
            },
            {
              id: "q18",
              prompt:
                "Une carte a width: 300px, padding: 20px et border: 5px, sans box-sizing modifié. Quelle largeur occupe-t-elle réellement à l'écran ?",
              options: [
                "300px, la valeur demandée",
                "350px, car padding et bordure s'ajoutent à la largeur du contenu",
                "325px",
                "300px seulement si box-sizing vaut content-box",
              ],
              correctIndex: 1,
              explanation:
                "Par défaut (content-box), width ne concerne que le contenu : 300 + 20 + 20 + 5 + 5 = 350px. C'est le classique débordement de mise en page. Ajouter box-sizing: border-box ferait rentrer padding et bordure dans les 300px.",
            },
            {
              id: "q19",
              prompt:
                "Pourquoi recommande-t-on rem plutôt que px pour la taille du texte ?",
              options: [
                "rem s'affiche plus vite que px",
                "rem est relatif à la taille de police racine, donc le texte grandit si l'utilisateur augmente sa taille de police par défaut, ce que des px figés ignorent",
                "px n'est plus supporté par les navigateurs modernes",
                "rem empêche automatiquement les problèmes de contraste",
              ],
              correctIndex: 1,
              explanation:
                "Un utilisateur malvoyant peut augmenter la taille de police par défaut du navigateur. Des tailles en rem suivent ce réglage et grossissent proportionnellement, alors que des px restent figés et ignorent ce besoin d'accessibilité.",
            },
            {
              id: "q20",
              prompt:
                "Un paragraphe a margin-bottom: 20px, le suivant margin-top: 30px. Quel espace réel les sépare ?",
              options: [
                "50px, les deux marges s'additionnent",
                "30px, car les marges verticales adjacentes fusionnent et la plus grande l'emporte",
                "20px, car c'est la première marge qui compte",
                "0px, les marges s'annulent",
              ],
              correctIndex: 1,
              explanation:
                "Les marges verticales adjacentes fusionnent : elles ne s'additionnent pas, c'est la plus grande qui s'applique, soit 30px ici. Ce comportement voulu ne concerne que les marges verticales et surprend souvent quand on cherche un espace « manquant ».",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Mise en page, responsive et mise en ligne",
      lessons: [
        {
          id: "l22",
          title: "Flexbox : aligner en une dimension",
          type: "text",
          duration: "16 min",
          body:
            "## Le problème que Flexbox résout\n\n" +
            "Pendant des années, centrer un élément ou aligner trois cartes côte à côte relevait du bricolage (`float`, `inline-block`, marges négatives). Flexbox a rangé tout ça. C'est un mode de disposition pensé pour aligner des éléments sur **une dimension**, une ligne ou une colonne, avec une répartition d'espace intelligente.\n\n" +
            "On l'active sur le **conteneur**, pas sur les enfants :\n\n" +
            "```css\n" +
            ".barre {\n" +
            "  display: flex;\n" +
            "}\n" +
            "```\n\n" +
            "Dès cette ligne, les enfants directs se placent en ligne, côte à côte. Ils deviennent des « items flex ».\n\n" +
            "## Les deux axes\n\n" +
            "Flexbox raisonne en axes. L'**axe principal** est horizontal par défaut, l'**axe secondaire** vertical. Deux propriétés commandent la répartition :\n\n" +
            "```css\n" +
            ".barre {\n" +
            "  display: flex;\n" +
            "  justify-content: space-between;  /* répartit sur l'axe principal */\n" +
            "  align-items: center;             /* aligne sur l'axe secondaire */\n" +
            "}\n" +
            "```\n\n" +
            "`justify-content` gère l'espace horizontal : `flex-start`, `center`, `space-between` (colle aux bords, espace au milieu), `space-around`, `space-evenly`. `align-items` gère l'alignement vertical : `center` aligne au milieu de la hauteur, `stretch` étire, `flex-start` colle en haut.\n\n" +
            "## Le centrage parfait, enfin simple\n\n" +
            "Le graal qui a tant fait souffrir tient désormais en trois lignes :\n\n" +
            "```css\n" +
            ".centre {\n" +
            "  display: flex;\n" +
            "  justify-content: center;\n" +
            "  align-items: center;\n" +
            "}\n" +
            "```\n\n" +
            "Centré horizontalement et verticalement, quel que soit le contenu. Garde ce bloc sous le coude.\n\n" +
            "## Direction, retour à la ligne, espacement\n\n" +
            "```css\n" +
            ".grille {\n" +
            "  display: flex;\n" +
            "  flex-direction: row;   /* ou column pour empiler */\n" +
            "  flex-wrap: wrap;       /* passe à la ligne si ça déborde */\n" +
            "  gap: 16px;             /* espace entre les items */\n" +
            "}\n" +
            "```\n\n" +
            "La propriété `gap` mérite une mention : elle pose un espace régulier entre les items sans les marges bricolées d'autrefois. `flex-wrap: wrap` est essentiel pour le responsive, il autorise les cartes à retomber sur la ligne suivante quand la largeur manque.\n\n" +
            "## Faire grandir les items\n\n" +
            "Sur les enfants, `flex` distribue l'espace disponible :\n\n" +
            "```css\n" +
            ".principal { flex: 1; }  /* prend tout l'espace restant */\n" +
            ".fixe { flex: 0 0 200px; }  /* reste à 200px, ne grandit ni ne rétrécit */\n" +
            "```\n\n" +
            "Une barre de navigation avec un logo à gauche et des liens à droite, un footer sur trois colonnes, une carte avec image et texte alignés : Flexbox couvre l'immense majorité des besoins d'alignement du quotidien. Pour t'exercer de façon ludique, le jeu [Flexbox Froggy](https://flexboxfroggy.com/#fr) fait passer les concepts en une demi-heure.\n\n" +
            "> À retenir : display: flex sur le conteneur, justify-content pour l'axe principal, align-items pour le secondaire. gap pour espacer, flex-wrap pour le responsive, et le trio center pour centrer enfin sans douleur.\n",
        },
        {
          id: "l23",
          title: "Grid : construire en deux dimensions",
          type: "text",
          duration: "16 min",
          body:
            "## Flexbox ou Grid : ce qui les sépare\n\n" +
            "Flexbox gère une dimension à la fois, une ligne ou une colonne. CSS Grid gère les **deux en même temps**, lignes et colonnes, comme un quadrillage. Règle pratique : Flexbox pour aligner une série d'éléments (une barre, une liste de cartes), Grid pour poser la structure globale d'une page ou une vraie grille régulière. Les deux se combinent très bien, on met souvent du Flexbox à l'intérieur des cellules d'un Grid.\n\n" +
            "## Définir une grille\n\n" +
            "```css\n" +
            ".galerie {\n" +
            "  display: grid;\n" +
            "  grid-template-columns: 1fr 1fr 1fr;\n" +
            "  gap: 20px;\n" +
            "}\n" +
            "```\n\n" +
            "`display: grid` active le mode, `grid-template-columns` définit les colonnes. L'unité `fr` (fraction) est propre à Grid : elle partage l'espace disponible. `1fr 1fr 1fr` crée trois colonnes de largeur égale. `2fr 1fr` en ferait deux, la première deux fois plus large que la seconde.\n\n" +
            "## Le motif responsive le plus utile de tout le cours\n\n" +
            "Voici un bloc que tu vas réutiliser sans arrêt. Il crée autant de colonnes que la largeur le permet, chacune d'au moins 200 pixels, et réarrange tout automatiquement quand la fenêtre change de taille, sans une seule media query :\n\n" +
            "```css\n" +
            ".cartes {\n" +
            "  display: grid;\n" +
            "  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n" +
            "  gap: 20px;\n" +
            "}\n" +
            "```\n\n" +
            "Décortiquons : `repeat()` évite de répéter les valeurs, `auto-fill` demande de caser autant de colonnes que possible, et `minmax(200px, 1fr)` fixe une largeur minimale de 200 px tout en laissant chaque colonne s'étirer. Sur grand écran, quatre ou cinq cartes par ligne ; sur mobile, une seule. C'est de la magie honnête, et ça remplace des dizaines de lignes d'ancienne mise en page.\n\n" +
            "## Placer précisément avec des zones nommées\n\n" +
            "Grid permet de dessiner la structure d'une page avec des noms, une lisibilité rare en CSS :\n\n" +
            "```css\n" +
            ".page {\n" +
            "  display: grid;\n" +
            "  grid-template-columns: 200px 1fr;\n" +
            "  grid-template-areas:\n" +
            "    \"entete entete\"\n" +
            "    \"menu   contenu\"\n" +
            "    \"pied   pied\";\n" +
            "  gap: 16px;\n" +
            "}\n" +
            ".page > header  { grid-area: entete; }\n" +
            ".page > nav     { grid-area: menu; }\n" +
            ".page > main    { grid-area: contenu; }\n" +
            ".page > footer  { grid-area: pied; }\n" +
            "```\n\n" +
            "Le dessin en toutes lettres décrit la mise en page : en-tête sur toute la largeur, menu à gauche, contenu à droite, pied sur toute la largeur. On lit la structure d'un coup d'œil, et on peut la réorganiser en media query juste en redessinant ces lignes.\n\n" +
            "Pour pratiquer, [Grid Garden](https://cssgridgarden.com/#fr) fait le même travail que Flexbox Froggy pour Grid. Une demi-heure bien investie.\n\n" +
            "> À retenir : Flexbox pour une ligne d'éléments, Grid pour une vraie structure à deux dimensions. Retiens par cœur le motif repeat(auto-fill, minmax(...)) : une grille responsive sans media query, c'est le geste qui impressionne le plus pour l'effort minimal.\n",
        },
        {
          id: "l24",
          title: "Responsive : un site qui s'adapte à tous les écrans",
          type: "text",
          duration: "16 min",
          body:
            "## Un seul site pour tous les écrans\n\n" +
            "Plus de la moitié du trafic web vient du mobile. Un site responsive n'est pas une version mobile séparée, c'est un même code qui se réarrange selon la largeur disponible. Le HTML reste identique, le CSS s'adapte.\n\n" +
            "Premier prérequis, déjà croisé dans la partie 2, sans lequel rien ne marche sur téléphone :\n\n" +
            "```html\n" +
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
            "```\n\n" +
            "Sans cette ligne, le mobile fait semblant d'avoir un écran de bureau et rétrécit tout : ton site s'affiche minuscule, illisible. C'est l'oubli qui ruine le plus de premières tentatives responsive.\n\n" +
            "## Penser mobile d'abord\n\n" +
            "L'approche recommandée s'appelle *mobile first* : écris d'abord le style pour petit écran, simple et en une colonne, puis ajoute des ajustements pour les écrans plus larges. C'est plus facile d'enrichir une base simple que de dégrader une usine à gaz conçue pour le bureau.\n\n" +
            "## Les media queries\n\n" +
            "Une media query applique des règles CSS seulement quand une condition sur l'écran est remplie, le plus souvent une largeur :\n\n" +
            "```css\n" +
            "/* style de base : mobile, une colonne */\n" +
            ".grille {\n" +
            "  display: grid;\n" +
            "  grid-template-columns: 1fr;\n" +
            "  gap: 16px;\n" +
            "}\n\n" +
            "/* à partir de 768px de large : deux colonnes */\n" +
            "@media (min-width: 768px) {\n" +
            "  .grille {\n" +
            "    grid-template-columns: 1fr 1fr;\n" +
            "  }\n" +
            "}\n\n" +
            "/* à partir de 1024px : trois colonnes */\n" +
            "@media (min-width: 1024px) {\n" +
            "  .grille {\n" +
            "    grid-template-columns: 1fr 1fr 1fr;\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Ces seuils de largeur s'appellent des **points de rupture** (*breakpoints*). Ne les choisis pas d'après des modèles de téléphones précis, ils changent tout le temps. Choisis-les là où **ton** design commence à mal vieillir : élargis la fenêtre du navigateur jusqu'à ce que ça devienne moche, et pose un breakpoint à cet endroit. Les valeurs autour de 600, 768 et 1024 px sont des points de départ raisonnables.\n\n" +
            "## Des outils qui font le responsive presque tout seuls\n\n" +
            "Certaines techniques réduisent le besoin de media queries. Tu les as déjà vues :\n\n" +
            "- `flex-wrap: wrap` avec Flexbox, qui fait retomber les éléments à la ligne.\n" +
            "- `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`, qui adapte le nombre de colonnes tout seul.\n" +
            "- Des images fluides avec `max-width: 100%; height: auto;`, pour qu'aucune image ne déborde de son conteneur.\n\n" +
            "```css\n" +
            "img {\n" +
            "  max-width: 100%;\n" +
            "  height: auto;\n" +
            "}\n" +
            "```\n\n" +
            "## Tester pour de vrai\n\n" +
            "Les outils de développement du navigateur ont un mode responsive (l'icône de téléphone/tablette, ou Ctrl+Shift+M sur Chrome). Il simule différentes tailles d'écran. Sers-t'en constamment. Redimensionne aussi la vraie fenêtre à la souris : voir la mise en page se réorganiser en direct est le meilleur retour possible pendant que tu codes.\n\n" +
            "> À retenir : la balise viewport d'abord, sinon rien ne marche sur mobile. Conçois en mobile first, ajoute des media queries min-width là où ton design casse, pas selon des modèles de téléphone, et laisse Flexbox et Grid faire une partie du travail à ta place.\n",
        },
        {
          id: "l25",
          title: "Mettre son site en ligne (démonstration)",
          type: "video",
          duration: "17 min",
          videoLabel: "Démonstration : déployer un dossier statique sur Netlify puis GitHub Pages",
          body:
            "## Ce que montre la démonstration\n\n" +
            "Voici le transcript complet de la démo, à suivre en même temps sur ta machine. On part de ton dossier `mon-site` avec son `index.html` et son `styles.css`, et on le rend accessible au monde entier, gratuitement, en quelques minutes. Deux méthodes, choisis celle qui te parle.\n\n" +
            "## D'abord, comprendre l'hébergement\n\n" +
            "Mettre un site en ligne, c'est déposer tes fichiers sur un serveur allumé en permanence et connecté à internet, puis lui associer une adresse. Pour un site statique (que du HTML, CSS, images, sans base de données), plusieurs services font ça gratuitement et très bien. On voit les deux plus populaires. Aucun des deux ne demande de carte bancaire pour commencer.\n\n" +
            "## Méthode 1 : Netlify par glisser-déposer\n\n" +
            "C'est la voie la plus rapide, idéale pour un premier déploiement.\n\n" +
            "1. Crée un compte gratuit sur [Netlify](https://www.netlify.com/).\n" +
            "2. Une fois connecté, repère la zone « Sites » avec un encart qui invite à déposer un dossier.\n" +
            "3. Glisse ton dossier `mon-site` entier dans cette zone, directement depuis ton explorateur de fichiers.\n" +
            "4. En quelques secondes, Netlify met tout en ligne et te donne une adresse du type `nom-aleatoire.netlify.app`.\n\n" +
            "Ouvre cette adresse : ton site est en ligne, en HTTPS, accessible partout. Dans les réglages du site, tu peux renommer l'adresse pour quelque chose de plus propre. Pour mettre à jour, tu re-glisses le dossier, et Netlify remplace la version précédente.\n\n" +
            "> Piège classique de la démo : ton fichier d'accueil doit s'appeler exactement `index.html`, en minuscules. Si tu l'as nommé `Index.html` ou `accueil.html`, l'hébergeur ne saura pas quelle page servir par défaut et tu tomberas sur une erreur 404.\n\n" +
            "## Méthode 2 : GitHub Pages\n\n" +
            "Un peu plus de manipulation, mais tu apprends Git au passage, un outil que tout développeur utilise. La démo suit ces étapes :\n\n" +
            "1. Crée un compte sur [GitHub](https://github.com/) et un nouveau dépôt public, par exemple `mon-site`.\n" +
            "2. Envoie tes fichiers dans ce dépôt. Dans la démo, on utilise l'option « Add file » puis « Upload files » de l'interface web pour rester simple, en glissant `index.html` et `styles.css`.\n" +
            "3. Dans l'onglet **Settings** du dépôt, section **Pages**, choisis la branche `main` comme source et valide.\n" +
            "4. Après une minute, GitHub publie le site à l'adresse `ton-pseudo.github.io/mon-site`.\n\n" +
            "L'avantage de GitHub Pages : chaque modification que tu envoies au dépôt se met en ligne automatiquement. C'est ta première prise de contact avec un vrai flux de déploiement de développeur.\n\n" +
            "## Après la mise en ligne\n\n" +
            "Fais le tour de ton site en ligne comme un visiteur. Clique tous les liens : un lien relatif cassé en local le restera en ligne. Vérifie que les images s'affichent, souvent une histoire de casse dans le nom de fichier (`Photo.JPG` contre `photo.jpg`), car les serveurs Linux distinguent les majuscules, contrairement à ton ordinateur. Passe la page dans l'audit Lighthouse pour un dernier contrôle de performance et d'accessibilité.\n\n" +
            "Tu peux ensuite brancher un vrai nom de domaine (du type `ton-nom.fr`, quelques euros par an) sur l'un ou l'autre service : les deux l'acceptent gratuitement, seul le domaine est payant. Mais l'adresse `.netlify.app` ou `.github.io` suffit parfaitement pour partager ton travail dès aujourd'hui.\n\n" +
            "> À retenir : un site statique se met en ligne gratuitement, sans carte bancaire, par glisser-déposer sur Netlify ou via un dépôt GitHub. Vérifie le nom index.html en minuscules et la casse des fichiers image, ce sont les deux causes numéro un de site cassé une fois en ligne.\n",
        },
        {
          id: "l26",
          title: "Quiz : mise en page, responsive et déploiement",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q21",
              prompt:
                "Tu veux disposer une série de cartes sur une seule ligne, joliment espacées, avec passage à la ligne si la place manque. Quel outil est le plus adapté ?",
              options: [
                "Un tableau HTML",
                "Flexbox avec display: flex, gap et flex-wrap: wrap",
                "Des balises <br> entre chaque carte",
                "L'attribut align des div",
              ],
              correctIndex: 1,
              explanation:
                "Flexbox est fait pour aligner une série d'éléments sur une dimension. gap gère l'espacement propre et flex-wrap: wrap autorise le retour à la ligne quand la largeur manque. Le tableau est réservé aux données, et l'attribut align est obsolète.",
            },
            {
              id: "q22",
              prompt:
                "Que fait grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) ?",
              options: [
                "Crée toujours exactement trois colonnes fixes",
                "Crée autant de colonnes d'au moins 200px que la largeur le permet, et les réarrange automatiquement sans media query",
                "Empile tous les éléments en une seule colonne quelle que soit la largeur",
                "Répète la première image en fond",
              ],
              correctIndex: 1,
              explanation:
                "auto-fill case le maximum de colonnes possible, minmax(200px, 1fr) impose une largeur minimale de 200px tout en laissant chaque colonne s'étirer. Le nombre de colonnes s'adapte donc tout seul à la largeur de l'écran, sans media query.",
            },
            {
              id: "q23",
              prompt:
                "Ton site s'affiche minuscule et illisible sur téléphone alors que le CSS responsive semble correct. Quelle est la cause la plus probable ?",
              options: [
                "Il manque la balise <meta name=\"viewport\"> dans le head",
                "Les images sont trop lourdes",
                "Le fichier CSS n'est pas relié",
                "Il faut créer une version mobile séparée du site",
              ],
              correctIndex: 0,
              explanation:
                "Sans la balise viewport, le mobile simule un écran de bureau et réduit toute la page pour la faire tenir, d'où l'affichage minuscule. C'est l'oubli responsive le plus fréquent. Un site responsive n'a pas besoin d'une version mobile distincte.",
            },
            {
              id: "q24",
              prompt:
                "En approche mobile first, comment structure-t-on les media queries ?",
              options: [
                "On écrit le style bureau d'abord, puis on le simplifie pour mobile avec max-width",
                "On écrit le style mobile en base, puis on enrichit pour les écrans plus larges avec des media queries min-width",
                "On met tout le CSS dans des media queries",
                "On évite complètement les media queries",
              ],
              correctIndex: 1,
              explanation:
                "Mobile first signifie partir d'une base simple pour petit écran (souvent une colonne), puis ajouter des ajustements pour les écrans larges via des media queries min-width. Il est plus facile d'enrichir une base simple que de dégrader une mise en page complexe.",
            },
            {
              id: "q25",
              prompt:
                "Ton site marche en local mais une image ne s'affiche plus une fois déployé sur GitHub Pages. Quelle explication est la plus probable ?",
              options: [
                "GitHub Pages ne supporte pas les images",
                "La casse du nom de fichier diffère (par exemple Photo.JPG dans le HTML contre photo.jpg réel), car les serveurs Linux distinguent majuscules et minuscules",
                "Les images doivent obligatoirement être en SVG",
                "Il faut payer pour héberger des images",
              ],
              correctIndex: 1,
              explanation:
                "Ton ordinateur ignore souvent la casse des noms de fichiers, mais les serveurs Linux la respectent. Un src qui écrit Photo.JPG alors que le fichier s'appelle photo.jpg fonctionne en local et casse en ligne. Vérifie toujours la casse exacte des chemins.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
