import type { Course } from "../types";

const course: Course = {
  slug: "javascript-cours-expert",
  title: "JavaScript moderne : de solide à expert",
  tagline:
    "Comprendre ce que fait vraiment le moteur : coercion, closures, this, event loop et async sans zones d'ombre.",
  description:
    "Un cours pour développeurs qui écrivent déjà du JavaScript et veulent arrêter de deviner. On démonte les règles réelles du langage — coercion et égalité, hoisting et TDZ, closures, prototypes et classes, style fonctionnel, puis l'asynchronisme vu depuis l'event loop (microtâches contre macrotâches, Promises, async/await, Promise.all/race/allSettled). On finit par les modules ES, trois patterns qu'on utilise tous les jours (module, observateur, debounce/throttle) et les pièges de performance qui coûtent cher en production. Chaque notion s'appuie sur du code exact, exécutable dans un navigateur récent ou dans Node.",
  category: "Développement Web",
  level: "Avancé",
  instructor: "Thomas Lefèvre",
  instructorBio:
    "Développeur JavaScript depuis 2011, il a passé six ans à maintenir des applications front à fort trafic et forme des équipes sur les subtilités du langage et de l'asynchronisme.",
  hours: 11,
  rating: 4.8,
  learners: 5610,
  accent: "#0ca8d3",
  image:
    "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
  language: "Français",
  software: "Node.js 20+, un navigateur récent, VS Code",
  prerequisites: [
    "Écrire des fonctions et manipuler des objets/tableaux en JavaScript",
    "Avoir déjà utilisé le DOM ou une petite API Node",
    "Savoir ouvrir la console du navigateur ou lancer un script Node",
  ],
  summary: [
    "Partie 1 : Types, coercion, portée et hoisting",
    "Partie 2 : Closures et le mot-clé this",
    "Partie 3 : Prototypes, héritage et classes ES",
    "Partie 4 : Données, style fonctionnel et immutabilité",
    "Partie 5 : Asynchronisme en profondeur",
    "Partie 6 : Modules, patterns et performance",
  ],
  objectives: [
    "Prédire le résultat d'une comparaison ou d'une coercion sans lancer le code",
    "Expliquer et exploiter les closures dans des cas concrets",
    "Déterminer la valeur de this dans n'importe quel appel de fonction",
    "Modéliser de l'héritage avec prototypes et classes ES sans confusion",
    "Dérouler l'ordre d'exécution d'un code asynchrone via l'event loop",
    "Choisir entre Promise.all, race, allSettled et any selon le besoin",
  ],
  skills: [
    "Coercion et égalité",
    "Closures",
    "this et binding",
    "Programmation fonctionnelle",
    "Promises et async/await",
    "Modules ES et patterns",
  ],
  contentTypes: ["Leçons écrites", "Quiz interactifs", "Études de cas"],
  parts: [
    {
      id: "p1",
      title: "Partie 1 : Types, coercion, portée et hoisting",
      lessons: [
        {
          id: "l1",
          title: "Les types primitifs et le piège de typeof",
          type: "text",
          duration: "13 min",
          body:
            "## Sept primitifs et un objet\n\n" +
            "JavaScript a sept types primitifs : `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`. Tout le reste est un objet, y compris les tableaux et les fonctions. Un primitif est immuable : quand vous écrivez `\"abc\".toUpperCase()`, la chaîne d'origine ne change pas, une nouvelle est créée.\n\n" +
            "L'outil qu'on dégaine en premier pour inspecter un type, c'est `typeof`. Il renvoie une chaîne. Et il a des surprises qu'il faut connaître par cœur.\n\n" +
            "```js\n" +
            "typeof \"bonjour\"    // \"string\"\n" +
            "typeof 42           // \"number\"\n" +
            "typeof 42n          // \"bigint\"\n" +
            "typeof true         // \"boolean\"\n" +
            "typeof undefined    // \"undefined\"\n" +
            "typeof Symbol()     // \"symbol\"\n" +
            "typeof function(){} // \"function\"\n" +
            "typeof null         // \"object\"  <-- le bug historique\n" +
            "```\n\n" +
            "### typeof null vaut \"object\"\n\n" +
            "Ce n'est pas un choix, c'est un bug de la toute première implémentation de 1995 jamais corrigé pour ne pas casser le web existant. Concrètement : pour tester `null`, n'utilisez jamais `typeof`. Comparez directement.\n\n" +
            "```js\n" +
            "const x = null;\n" +
            "if (x === null) { /* la seule façon fiable */ }\n" +
            "```\n\n" +
            "### NaN est un number qui ne s'égale pas lui-même\n\n" +
            "`typeof NaN` renvoie `\"number\"`. Et `NaN === NaN` est `false`, c'est la seule valeur du langage qui n'est pas égale à elle-même. Pour le détecter, utilisez `Number.isNaN(valeur)`, jamais l'ancien `isNaN()` global qui commence par convertir son argument et donne des faux positifs.\n\n" +
            "```js\n" +
            "Number.isNaN(NaN)        // true\n" +
            "Number.isNaN(\"abc\")      // false, ce n'est pas un NaN, c'est une chaîne\n" +
            "isNaN(\"abc\")            // true, trompeur : \"abc\" est converti en NaN\n" +
            "```\n\n" +
            "### Distinguer un vrai objet\n\n" +
            "Comme `typeof null` et `typeof []` mentent tous les deux (`\"object\"`), pour reconnaître un tableau on utilise `Array.isArray(v)`. Pour distinguer un objet « nu » d'un `null`, on combine les tests.\n\n" +
            "> À retenir : `typeof` répond à sept questions correctement et ment sur deux (`null` et les tableaux). Mémorisez les exceptions et vous ne perdrez plus de temps dessus.\n\n" +
            "Référence complète : [typeof sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof).\n",
        },
        {
          id: "l2",
          title: "Coercion, == contre === et les comparaisons qui piègent",
          type: "text",
          duration: "15 min",
          body:
            "## La coercion, ce n'est pas du hasard\n\n" +
            "Beaucoup de développeurs traitent la coercion comme une loterie et bannissent `==` par peur. C'est dommage, parce que les règles sont peu nombreuses et parfaitement déterministes. Les connaître vous permet de lire n'importe quel code.\n\n" +
            "### Égalité stricte : ===\n\n" +
            "`===` ne convertit rien. Types différents ? C'est `false`, point. C'est le comportement que vous voulez dans 95 % des cas.\n\n" +
            "```js\n" +
            "1 === 1      // true\n" +
            "1 === \"1\"    // false, number vs string\n" +
            "null === undefined // false, types différents\n" +
            "```\n\n" +
            "### Égalité lâche : ==\n\n" +
            "`==` tente une conversion avant de comparer. Les règles utiles à retenir :\n\n" +
            "- `null == undefined` vaut `true`, et ils ne sont lâchement égaux à rien d'autre. C'est même un usage propre : `x == null` teste « null ou undefined » en une expression.\n" +
            "- Entre un nombre et une chaîne, la chaîne est convertie en nombre.\n" +
            "- Un booléen est d'abord converti en nombre (`true` → 1, `false` → 0). D'où le classique `[] == false` qui vaut `true`.\n\n" +
            "```js\n" +
            "0 == \"\"        // true : \"\" devient 0\n" +
            "0 == \"0\"       // true\n" +
            "\"\" == \"0\"      // false : deux chaînes, pas de conversion, elles diffèrent\n" +
            "null == 0      // false : null n'est lâchement égal qu'à undefined\n" +
            "[] == 0        // true : [] -> \"\" -> 0\n" +
            "```\n\n" +
            "Ces trois dernières lignes montrent pourquoi `==` n'est pas transitif : `0 == \"\"` et `0 == \"0\"` sont vrais, mais `\"\" == \"0\"` est faux. C'est exactement le genre de bug qui survit trois sprints.\n\n" +
            "### Le truthy/falsy\n\n" +
            "Dans un `if`, un `&&` ou un `!`, la valeur est convertie en booléen. Il n'y a que huit valeurs falsy à connaître : `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, `NaN`. Tout le reste est truthy, y compris `\"0\"`, `\"false\"`, `[]` et `{}`.\n\n" +
            "```js\n" +
            "if ([]) console.log(\"un tableau vide est truthy\"); // s'affiche\n" +
            "if (\"0\") console.log(\"la chaine \\\"0\\\" est truthy\"); // s'affiche\n" +
            "```\n\n" +
            "### Ma règle en production\n\n" +
            "Utilisez `===` partout, avec une seule exception assumée : `x == null` pour couvrir null et undefined en même temps. Pour les valeurs par défaut, préférez `??` (nullish) à `||` : `port || 3000` écrase un `0` légitime, alors que `port ?? 3000` ne se déclenche que sur null/undefined.\n\n" +
            "> À retenir : la coercion suit un algorithme, pas une intuition. Apprenez les huit falsy et la règle null/undefined, le reste se déduit.\n",
        },
        {
          id: "l3",
          title: "Portée, hoisting, TDZ et le choix var/let/const",
          type: "text",
          duration: "14 min",
          body:
            "## Ce que le moteur fait avant d'exécuter\n\n" +
            "Avant d'exécuter une ligne, le moteur parcourt le scope et réserve la place des déclarations. C'est le hoisting. Mais `var`, `let`, `const` et les fonctions n'y sont pas traités pareil, et c'est la source d'un paquet de bugs.\n\n" +
            "### var est hissé et initialisé à undefined\n\n" +
            "```js\n" +
            "console.log(a); // undefined, pas une erreur\n" +
            "var a = 1;\n" +
            "```\n\n" +
            "Le moteur lit ça comme « déclare `a` en haut, mets `undefined`, puis assigne `1` à la ligne d'origine ». `var` ignore les blocs : il n'existe qu'à l'échelle de la fonction. Une `var` déclarée dans un `if` fuit hors du `if`.\n\n" +
            "### let et const : la zone morte temporelle\n\n" +
            "`let` et `const` sont aussi hissés, mais pas initialisés. Entre le début du bloc et la ligne de déclaration, la variable existe mais y accéder lève une `ReferenceError`. Cette fenêtre s'appelle la Temporal Dead Zone (TDZ).\n\n" +
            "```js\n" +
            "console.log(b); // ReferenceError: Cannot access 'b' before initialization\n" +
            "let b = 1;\n" +
            "```\n\n" +
            "La TDZ n'est pas une punition, c'est un garde-fou : elle vous force à déclarer avant d'utiliser, ce qui attrape des fautes de frappe et des ordres d'initialisation cassés à l'exécution plutôt qu'en silence.\n\n" +
            "### const gèle le lien, pas la valeur\n\n" +
            "`const` interdit de réassigner la variable, mais si elle pointe vers un objet, l'objet reste modifiable.\n\n" +
            "```js\n" +
            "const user = { nom: \"Ada\" };\n" +
            "user.nom = \"Grace\"; // autorisé : on mute l'objet\n" +
            "user = {};           // TypeError : on réassigne le lien\n" +
            "```\n\n" +
            "### Le piège de la boucle var\n\n" +
            "Le cas d'école qui a fait souffrir une génération de développeurs :\n\n" +
            "```js\n" +
            "for (var i = 0; i < 3; i++) {\n" +
            "  setTimeout(() => console.log(i), 0);\n" +
            "}\n" +
            "// affiche 3, 3, 3\n" +
            "```\n\n" +
            "Il n'existe qu'un seul `i`, partagé, et il vaut 3 quand les callbacks s'exécutent. Remplacez `var` par `let` : chaque tour de boucle crée une nouvelle liaison de `i`, et vous obtenez `0, 1, 2`. Ce détail à lui seul justifie d'abandonner `var`.\n\n" +
            "### Les fonctions déclarées sont entièrement hissées\n\n" +
            "Une déclaration `function f(){}` est disponible avant sa ligne. Une fonction stockée dans une `const` ne l'est pas (elle suit la règle de la TDZ). D'où la règle simple.\n\n" +
            "> À retenir : `const` par défaut, `let` quand vous devez réassigner, `var` jamais. Vous éliminez la fuite de bloc, le piège de boucle et les undefined silencieux d'un coup.\n\n" +
            "Détails sur [let (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let).\n",
        },
        {
          id: "l4",
          title: "Quiz : types, coercion et portée",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q1",
              prompt: "Quel test détecte de façon fiable qu'une valeur est exactement NaN ?",
              options: [
                "value === NaN",
                "isNaN(value)",
                "Number.isNaN(value)",
                "typeof value === \"NaN\"",
              ],
              correctIndex: 2,
              explanation:
                "NaN n'est égal à rien, pas même à lui-même, donc value === NaN est toujours faux. isNaN() convertit d'abord son argument et renvoie true sur \"abc\". Seul Number.isNaN teste sans conversion. typeof NaN vaut d'ailleurs \"number\".",
            },
            {
              id: "q2",
              prompt: "Que vaut l'expression \"\" == \"0\" ?",
              options: ["true", "false", "0", "une TypeError"],
              correctIndex: 1,
              explanation:
                "Quand == compare deux chaînes, il n'y a aucune conversion : il compare les chaînes telles quelles, et \"\" diffère de \"0\", donc false. C'est ce qui rend == non transitif, car 0 == \"\" et 0 == \"0\" sont pourtant tous deux vrais.",
            },
            {
              id: "q3",
              prompt: "Que fait cette boucle : for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0) ?",
              options: [
                "Affiche 0, 1, 2",
                "Affiche 3, 3, 3",
                "Affiche 0, 0, 0",
                "Lève une ReferenceError",
              ],
              correctIndex: 1,
              explanation:
                "Avec var il n'existe qu'un seul i partagé par tous les callbacks. Les setTimeout s'exécutent après la boucle, quand i vaut déjà 3. Remplacer var par let crée une liaison par itération et donne 0, 1, 2.",
            },
            {
              id: "q4",
              prompt: "Pourquoi accéder à une variable let avant sa déclaration lève-t-il une erreur, contrairement à var ?",
              options: [
                "let n'est pas hissé du tout",
                "let est hissé mais reste non initialisé dans la Temporal Dead Zone",
                "let n'existe qu'au moment de son assignation",
                "C'est un bug des moteurs modernes",
              ],
              correctIndex: 1,
              explanation:
                "let et const sont hissés comme var, mais ils ne sont pas pré-initialisés à undefined. Entre le début du bloc et la ligne de déclaration, la variable est dans la TDZ : elle existe, mais y accéder lève une ReferenceError. C'est un garde-fou volontaire.",
            },
            {
              id: "q5",
              prompt: "Avec const config = { port: 3000 }, quelle opération est autorisée ?",
              options: [
                "config = { port: 8080 }",
                "config.port = 8080",
                "Aucune, const gèle tout",
                "Les deux",
              ],
              correctIndex: 1,
              explanation:
                "const gèle la liaison, pas la valeur pointée. Réassigner config est interdit (TypeError), mais muter une propriété de l'objet est parfaitement permis. Pour figer réellement l'objet, il faut Object.freeze.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "Partie 2 : Closures et le mot-clé this",
      lessons: [
        {
          id: "l5",
          title: "Closures : la mécanique et les vrais cas d'usage",
          type: "text",
          duration: "15 min",
          body:
            "## Une fonction se souvient d'où elle est née\n\n" +
            "Une closure, c'est une fonction qui garde l'accès aux variables de la portée dans laquelle elle a été définie, même après que cette portée a fini de s'exécuter. Ce n'est pas une fonctionnalité qu'on active, c'est le comportement par défaut du langage. Chaque fonction JavaScript est une closure.\n\n" +
            "### Un compteur privé\n\n" +
            "```js\n" +
            "function creerCompteur() {\n" +
            "  let n = 0;\n" +
            "  return {\n" +
            "    incr() { n += 1; return n; },\n" +
            "    valeur() { return n; },\n" +
            "  };\n" +
            "}\n" +
            "const c = creerCompteur();\n" +
            "c.incr(); // 1\n" +
            "c.incr(); // 2\n" +
            "c.n;      // undefined : n est inaccessible de l'extérieur\n" +
            "```\n\n" +
            "La variable `n` a survécu à l'appel de `creerCompteur`. Elle n'est visible que par les deux méthodes retournées. C'est de l'encapsulation réelle, sans convention de nommage ni underscore : personne ne peut lire ou écrire `n` directement.\n\n" +
            "### Une factory de configuration\n\n" +
            "Les closures servent à figer un paramètre une fois pour toutes.\n\n" +
            "```js\n" +
            "function multiplicateur(facteur) {\n" +
            "  return (x) => x * facteur;\n" +
            "}\n" +
            "const doubler = multiplicateur(2);\n" +
            "const tripler = multiplicateur(3);\n" +
            "doubler(10); // 20\n" +
            "tripler(10); // 30\n" +
            "```\n\n" +
            "`doubler` et `tripler` partagent le même code mais capturent chacun leur propre `facteur`. C'est la base de la fonction partiellement appliquée.\n\n" +
            "### Le piège classique et son correctif\n\n" +
            "Une closure capture la variable, pas une copie de sa valeur à l'instant T. C'est exactement pourquoi la boucle `var` de la partie 1 échouait : les trois callbacks fermaient sur le même `i`. La solution moderne, `let`, crée une liaison par itération. Avant `let`, on isolait la valeur avec une IIFE.\n\n" +
            "```js\n" +
            "for (var i = 0; i < 3; i++) {\n" +
            "  (function (copie) {\n" +
            "    setTimeout(() => console.log(copie), 0);\n" +
            "  })(i);\n" +
            "}\n" +
            "// 0, 1, 2\n" +
            "```\n\n" +
            "### Le coût mémoire, à connaître\n\n" +
            "Tant qu'une closure vit, les variables qu'elle capture ne peuvent pas être libérées par le ramasse-miettes. Si vous fermez sur un gros tableau et que la fonction reste attachée à un écouteur d'événement jamais retiré, vous tenez une fuite mémoire. Ce n'est pas une raison d'éviter les closures, c'est une raison de retirer vos `addEventListener` quand ils ne servent plus.\n\n" +
            "> À retenir : la closure est l'outil d'encapsulation natif de JavaScript. Elle donne des variables privées, de la configuration figée et de la mémoïsation, à condition de se rappeler qu'elle capture la variable elle-même.\n",
        },
        {
          id: "l6",
          title: "this : quatre règles et le cas des fonctions fléchées",
          type: "text",
          duration: "16 min",
          body:
            "## this dépend de l'appel, pas de la définition\n\n" +
            "La confusion sur `this` vient d'une fausse intuition héritée d'autres langages : on croit que `this` désigne « l'objet courant ». En JavaScript, pour une fonction classique, `this` est déterminé au moment de l'appel, par la façon dont la fonction est appelée. Quatre règles couvrent tout.\n\n" +
            "### Règle 1 : appel de méthode\n\n" +
            "Si la fonction est appelée via un objet, `this` est cet objet.\n\n" +
            "```js\n" +
            "const user = {\n" +
            "  nom: \"Ada\",\n" +
            "  direBonjour() { return `Bonjour, ${this.nom}`; },\n" +
            "};\n" +
            "user.direBonjour(); // \"Bonjour, Ada\" : this === user\n" +
            "```\n\n" +
            "### Règle 2 : appel simple\n\n" +
            "Appelée toute seule, sans objet devant, `this` vaut `undefined` en mode strict (le cas des modules ES et des classes) ou l'objet global en mode non strict. C'est ce qui casse quand on détache une méthode.\n\n" +
            "```js\n" +
            "const f = user.direBonjour;\n" +
            "f(); // this est undefined -> TypeError sur this.nom\n" +
            "```\n\n" +
            "La méthode a perdu son objet en cours de route. Ce bug apparaît tout le temps quand on passe une méthode en callback.\n\n" +
            "### Règle 3 : call, apply, bind\n\n" +
            "Vous pouvez imposer `this`. `call` et `apply` appellent immédiatement (l'un prend les arguments séparés, l'autre un tableau). `bind` renvoie une nouvelle fonction avec `this` figé pour toujours.\n\n" +
            "```js\n" +
            "f.call(user);            // \"Bonjour, Ada\"\n" +
            "const lie = f.bind(user);\n" +
            "lie();                   // \"Bonjour, Ada\", quoi qu'il arrive\n" +
            "```\n\n" +
            "### Règle 4 : new\n\n" +
            "Avec `new`, `this` est le nouvel objet fraîchement créé. On y revient dans la partie sur les prototypes.\n\n" +
            "### Les fonctions fléchées n'ont pas de this\n\n" +
            "Voilà le point qui change tout. Une fonction fléchée n'a pas son propre `this` : elle emprunte celui de la portée où elle est écrite (this lexical). Elle ignore complètement la façon dont on l'appelle.\n\n" +
            "```js\n" +
            "const compteur = {\n" +
            "  n: 0,\n" +
            "  demarrer() {\n" +
            "    setInterval(() => { this.n += 1; }, 1000);\n" +
            "    // la flèche garde le this de demarrer(), donc compteur\n" +
            "  },\n" +
            "};\n" +
            "```\n\n" +
            "Si on avait écrit `function () { this.n += 1; }` dans le `setInterval`, `this` aurait été `undefined` (règle 2) et ça aurait planté. La flèche règle le problème sans `bind`. En contrepartie, n'utilisez jamais de fonction fléchée pour définir une méthode d'objet qui doit accéder à l'objet via `this`, ni comme constructeur.\n\n" +
            "> À retenir : demandez-vous toujours « comment cette fonction est-elle appelée ? ». Pour une fonction classique, la réponse donne `this`. Pour une flèche, il n'y a rien à se demander : elle prend le `this` du dessus.\n\n" +
            "Détails sur [this (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this).\n",
        },
        {
          id: "l7",
          title: "Quiz : closures et this",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q6",
              prompt: "Dans creerCompteur qui retourne { incr, valeur } fermant sur une variable locale n, pourquoi n est-elle inaccessible depuis l'extérieur ?",
              options: [
                "Parce que n est déclarée avec const",
                "Parce que n reste dans la portée de la fonction, capturée uniquement par les méthodes retournées",
                "Parce que le mot-clé private est appliqué implicitement",
                "Parce que n est supprimée après le return",
              ],
              correctIndex: 1,
              explanation:
                "n vit dans la portée de creerCompteur. Seules les fonctions définies à l'intérieur (incr, valeur) ferment dessus et y accèdent. Rien de l'extérieur n'a de référence vers n : c'est de l'encapsulation par closure, indépendante de const ou let.",
            },
            {
              id: "q7",
              prompt: "const f = user.direBonjour; f(); échoue avec un TypeError. Pourquoi ?",
              options: [
                "direBonjour n'existe pas",
                "En appel simple, this vaut undefined en mode strict, donc this.nom plante",
                "f est en lecture seule",
                "bind est obligatoire pour toute méthode",
              ],
              correctIndex: 1,
              explanation:
                "En affectant la méthode à f puis en l'appelant seule, on perd le lien avec user. C'est l'appel qui fixe this : appel simple en mode strict donne this = undefined, et lire this.nom lève un TypeError. f.call(user) ou user.direBonjour() corrigent.",
            },
            {
              id: "q8",
              prompt: "Quelle différence entre f.call(obj) et f.bind(obj) ?",
              options: [
                "Aucune, ce sont des alias",
                "call appelle f immédiatement avec this = obj ; bind renvoie une nouvelle fonction dont this est figé sur obj",
                "bind appelle immédiatement, call renvoie une fonction",
                "call fige this pour toujours, bind seulement une fois",
              ],
              correctIndex: 1,
              explanation:
                "call exécute la fonction tout de suite en imposant this. bind n'exécute rien : il produit une nouvelle fonction qui, quel que soit son mode d'appel futur, aura toujours ce this. apply est comme call mais reçoit les arguments dans un tableau.",
            },
            {
              id: "q9",
              prompt: "Pourquoi utilise-t-on une fonction fléchée dans setInterval(() => this.n++, 1000) à l'intérieur d'une méthode ?",
              options: [
                "Pour la performance",
                "Parce que la flèche n'a pas son propre this et garde celui de la méthode englobante",
                "Parce que setInterval refuse les fonctions classiques",
                "Pour éviter le hoisting",
              ],
              correctIndex: 1,
              explanation:
                "Une fonction classique passée à setInterval serait appelée en mode simple, avec this = undefined. La fonction fléchée n'a pas de this propre : elle capture lexicalement celui de la méthode, donc l'objet. C'est plus propre qu'un bind manuel.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Partie 3 : Prototypes, héritage et classes ES",
      lessons: [
        {
          id: "l8",
          title: "La chaîne de prototypes, le vrai modèle objet",
          type: "text",
          duration: "15 min",
          body:
            "## JavaScript hérite par délégation\n\n" +
            "JavaScript n'a pas de classes au sens de C++ ou Java sous le capot. Il a des objets qui pointent vers d'autres objets. Quand vous lisez une propriété sur un objet et qu'il ne l'a pas, le moteur remonte vers son prototype, puis le prototype du prototype, jusqu'à `null`. C'est la chaîne de prototypes, et c'est tout le mécanisme d'héritage du langage.\n\n" +
            "### Le lien réel : Object.getPrototypeOf\n\n" +
            "Chaque objet a un prototype interne. On le lit avec `Object.getPrototypeOf(obj)` et on le crée avec `Object.create`.\n\n" +
            "```js\n" +
            "const animal = {\n" +
            "  respirer() { return `${this.nom} respire`; },\n" +
            "};\n" +
            "const chien = Object.create(animal);\n" +
            "chien.nom = \"Rex\";\n" +
            "chien.respirer(); // \"Rex respire\"\n" +
            "Object.getPrototypeOf(chien) === animal; // true\n" +
            "```\n\n" +
            "`chien` n'a pas de méthode `respirer`. Le moteur la trouve sur `animal` via la chaîne, et l'appelle avec `this` égal à `chien`. Notez bien : `this` reste l'objet de départ, pas celui où la méthode a été trouvée.\n\n" +
            "### La fonction constructeur et prototype\n\n" +
            "Avant `Object.create`, et toujours sous les classes, on utilise des fonctions constructeurs. Toute fonction possède une propriété `prototype` qui devient le prototype des objets créés avec `new`.\n\n" +
            "```js\n" +
            "function Animal(nom) {\n" +
            "  this.nom = nom;\n" +
            "}\n" +
            "Animal.prototype.respirer = function () {\n" +
            "  return `${this.nom} respire`;\n" +
            "};\n" +
            "const a = new Animal(\"Mia\");\n" +
            "a.respirer(); // \"Mia respire\"\n" +
            "```\n\n" +
            "Ce que fait `new` en quatre temps : il crée un objet vide, met son prototype à `Animal.prototype`, exécute `Animal` avec `this` sur ce nouvel objet, et renvoie l'objet. Les méthodes sont sur le prototype, donc partagées par toutes les instances : une seule fonction en mémoire, pas une copie par objet. C'est un vrai gain.\n\n" +
            "### hasOwnProperty contre in\n\n" +
            "Comme la lecture remonte la chaîne, il faut savoir distinguer une propriété propre d'une propriété héritée.\n\n" +
            "```js\n" +
            "a.hasOwnProperty(\"nom\");     // true, propre à l'instance\n" +
            "a.hasOwnProperty(\"respirer\"); // false, elle est sur le prototype\n" +
            "\"respirer\" in a;              // true, l'opérateur in remonte la chaîne\n" +
            "```\n\n" +
            "C'est exactement pourquoi on écrit `Object.prototype.hasOwnProperty.call(obj, cle)` dans du code défensif : si un objet a une clé nommée `hasOwnProperty`, l'appel direct casserait.\n\n" +
            "> À retenir : il n'y a pas de copie à l'héritage, il y a une délégation. Comprendre la chaîne, c'est comprendre pourquoi les classes de la prochaine leçon ne sont qu'une syntaxe posée dessus.\n\n" +
            "Détails sur [l'héritage et la chaîne de prototypes (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).\n",
        },
        {
          id: "l9",
          title: "Classes ES : extends, super, static et champs privés",
          type: "text",
          duration: "15 min",
          body:
            "## Du sucre, mais du bon sucre\n\n" +
            "Les classes ES2015 ne remplacent pas les prototypes, elles les habillent. `class` crée une fonction constructeur, et les méthodes atterrissent sur le `prototype`. Mais la syntaxe est plus lisible et apporte de vraies nouveautés utiles : les champs privés et une gestion propre de l'héritage.\n\n" +
            "### La forme de base\n\n" +
            "```js\n" +
            "class Animal {\n" +
            "  constructor(nom) {\n" +
            "    this.nom = nom;\n" +
            "  }\n" +
            "  respirer() {\n" +
            "    return `${this.nom} respire`;\n" +
            "  }\n" +
            "}\n" +
            "const a = new Animal(\"Mia\");\n" +
            "```\n\n" +
            "Une classe n'est pas hissée comme une fonction déclarée : l'utiliser avant sa définition lève une erreur (elle est dans la TDZ, comme `let`). Et on ne peut pas l'appeler sans `new`.\n\n" +
            "### extends et super\n\n" +
            "```js\n" +
            "class Chien extends Animal {\n" +
            "  constructor(nom, race) {\n" +
            "    super(nom); // appelle le constructeur parent, obligatoire avant this\n" +
            "    this.race = race;\n" +
            "  }\n" +
            "  aboyer() {\n" +
            "    return `${this.nom} aboie`;\n" +
            "  }\n" +
            "}\n" +
            "const rex = new Chien(\"Rex\", \"Berger\");\n" +
            "rex.respirer(); // \"Rex respire\", hérité\n" +
            "rex.aboyer();   // \"Rex aboie\"\n" +
            "```\n\n" +
            "Dans une sous-classe, `super(...)` doit être appelé avant tout accès à `this`. C'est une contrainte du langage, pas un style : sans l'appel parent, `this` n'existe pas encore.\n\n" +
            "### Champs privés avec #\n\n" +
            "Enfin de la vraie visibilité privée, garantie par le moteur. Un champ préfixé de `#` est inaccessible hors de la classe, y compris depuis une sous-classe.\n\n" +
            "```js\n" +
            "class CompteBancaire {\n" +
            "  #solde = 0;\n" +
            "  deposer(montant) {\n" +
            "    if (montant <= 0) throw new Error(\"Montant invalide\");\n" +
            "    this.#solde += montant;\n" +
            "    return this.#solde;\n" +
            "  }\n" +
            "  get solde() {\n" +
            "    return this.#solde;\n" +
            "  }\n" +
            "}\n" +
            "const c = new CompteBancaire();\n" +
            "c.deposer(100);\n" +
            "c.solde;   // 100 via le getter\n" +
            "c.#solde;  // SyntaxError : champ privé inaccessible dehors\n" +
            "```\n\n" +
            "Avant `#`, on simulait le privé avec des closures ou un underscore par convention. Le `#` est enfin appliqué par le langage, pas par la discipline de l'équipe.\n\n" +
            "### static\n\n" +
            "`static` attache une méthode ou un champ à la classe, pas aux instances. Pratique pour les factories.\n\n" +
            "```js\n" +
            "class Temperature {\n" +
            "  constructor(celsius) { this.celsius = celsius; }\n" +
            "  static depuisFahrenheit(f) {\n" +
            "    return new Temperature((f - 32) * 5 / 9);\n" +
            "  }\n" +
            "}\n" +
            "const t = Temperature.depuisFahrenheit(212); // 100 °C\n" +
            "```\n\n" +
            "> À retenir : préférez les classes pour leur lisibilité et pour `#`, mais gardez en tête que dessous, c'est toujours la chaîne de prototypes de la leçon précédente.\n",
        },
        {
          id: "l10",
          title: "Quiz : prototypes et classes",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q10",
              prompt: "Quand chien = Object.create(animal) et qu'on appelle chien.respirer() défini sur animal, à quoi vaut this dans respirer ?",
              options: [
                "À animal, l'objet qui porte la méthode",
                "À chien, l'objet sur lequel l'appel a été fait",
                "À undefined",
                "À l'objet global",
              ],
              correctIndex: 1,
              explanation:
                "Le moteur trouve respirer en remontant la chaîne jusqu'à animal, mais this reste déterminé par l'appel : chien.respirer() fixe this sur chien. La délégation ne change pas la règle du this de méthode ; l'objet de départ est conservé.",
            },
            {
              id: "q11",
              prompt: "Pourquoi place-t-on les méthodes sur Constructeur.prototype plutôt que dans le constructeur ?",
              options: [
                "Par convention esthétique",
                "Pour qu'une seule copie de la méthode soit partagée par toutes les instances au lieu d'une par objet",
                "Parce que le constructeur n'accepte pas de fonctions",
                "Pour les rendre privées",
              ],
              correctIndex: 1,
              explanation:
                "Définir une méthode dans le constructeur en recrée une par instance, ce qui gaspille de la mémoire. Sur le prototype, la fonction existe une seule fois et toutes les instances y accèdent par la chaîne. Les classes le font automatiquement.",
            },
            {
              id: "q12",
              prompt: "Dans une sous-classe avec extends, que se passe-t-il si le constructeur accède à this avant d'appeler super(...) ?",
              options: [
                "Rien, this est déjà disponible",
                "Une ReferenceError, car this n'existe pas tant que super n'a pas été appelé",
                "this vaut undefined mais le code continue",
                "Le constructeur parent est appelé automatiquement",
              ],
              correctIndex: 1,
              explanation:
                "Dans une classe dérivée, this n'est initialisé que par l'appel à super(). Y accéder avant lève une ReferenceError. C'est pourquoi super(nom) doit précéder toute affectation sur this dans le constructeur enfant.",
            },
            {
              id: "q13",
              prompt: "Quel est l'intérêt d'un champ privé #solde par rapport à une convention _solde ?",
              options: [
                "Aucun, c'est cosmétique",
                "#solde est réellement inaccessible hors de la classe, garanti par le moteur, alors que _solde reste public",
                "#solde est plus rapide à l'exécution",
                "#solde rend le champ statique",
              ],
              correctIndex: 1,
              explanation:
                "Le préfixe underscore est une simple convention : rien n'empêche d'écrire obj._solde. Le # est appliqué par le langage ; accéder à #solde hors de la classe est une erreur de syntaxe. C'est de l'encapsulation garantie, pas de la discipline.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Partie 4 : Données, style fonctionnel et immutabilité",
      lessons: [
        {
          id: "l11",
          title: "map, filter, reduce : penser en transformations",
          type: "text",
          duration: "15 min",
          body:
            "## Décrire le résultat plutôt que la boucle\n\n" +
            "Le trio `map`, `filter`, `reduce` remplace l'immense majorité des boucles `for`. L'intérêt n'est pas la mode : ces méthodes ne mutent pas le tableau d'origine, renvoient une nouvelle valeur, et se lisent comme une phrase. Vous décrivez la transformation, pas la mécanique d'itération.\n\n" +
            "### map : un pour un\n\n" +
            "`map` applique une fonction à chaque élément et renvoie un tableau de même longueur.\n\n" +
            "```js\n" +
            "const prix = [10, 20, 30];\n" +
            "const ttc = prix.map((p) => p * 1.2);\n" +
            "// [12, 24, 36], prix inchangé\n" +
            "```\n\n" +
            "### filter : garder ce qui passe le test\n\n" +
            "`filter` renvoie un sous-ensemble : les éléments pour lesquels la fonction renvoie une valeur truthy.\n\n" +
            "```js\n" +
            "const nombres = [1, 2, 3, 4, 5, 6];\n" +
            "const pairs = nombres.filter((n) => n % 2 === 0);\n" +
            "// [2, 4, 6]\n" +
            "```\n\n" +
            "### reduce : tout condenser en une valeur\n\n" +
            "`reduce` est le plus puissant et le plus mal compris. Il parcourt le tableau en maintenant un accumulateur, et renvoie sa valeur finale. Cette valeur peut être un nombre, un objet, un autre tableau, n'importe quoi.\n\n" +
            "```js\n" +
            "const panier = [\n" +
            "  { nom: \"Livre\", prix: 15 },\n" +
            "  { nom: \"Stylo\", prix: 3 },\n" +
            "  { nom: \"Sac\", prix: 25 },\n" +
            "];\n" +
            "const total = panier.reduce((acc, article) => acc + article.prix, 0);\n" +
            "// 43\n" +
            "```\n\n" +
            "Le second argument, `0`, est la valeur initiale de l'accumulateur. Ne l'oubliez jamais : sans lui, `reduce` prend le premier élément comme valeur de départ, et sur un tableau vide il lève une `TypeError`. Passer une valeur initiale rend aussi le code plus clair sur le type du résultat.\n\n" +
            "### Grouper avec reduce\n\n" +
            "Un cas réel : regrouper des objets par une clé.\n\n" +
            "```js\n" +
            "const gens = [\n" +
            "  { nom: \"Ada\", ville: \"Paris\" },\n" +
            "  { nom: \"Alan\", ville: \"Lyon\" },\n" +
            "  { nom: \"Grace\", ville: \"Paris\" },\n" +
            "];\n" +
            "const parVille = gens.reduce((acc, p) => {\n" +
            "  (acc[p.ville] ||= []).push(p.nom);\n" +
            "  return acc;\n" +
            "}, {});\n" +
            "// { Paris: [\"Ada\", \"Grace\"], Lyon: [\"Alan\"] }\n" +
            "```\n\n" +
            "### Chaîner, avec mesure\n\n" +
            "On enchaîne naturellement : `data.filter(...).map(...).reduce(...)`. C'est lisible, mais chaque maillon crée un tableau intermédiaire. Sur trois éléments, aucune importance. Sur un million, dans une boucle chaude, une seule `for...of` ou un seul `reduce` peut être plus rapide. Écrivez d'abord lisible, optimisez seulement là où un profil le prouve.\n\n" +
            "> À retenir : `map` transforme, `filter` sélectionne, `reduce` condense. Trois briques qui couvrent presque tout le traitement de données, sans muter vos entrées.\n",
        },
        {
          id: "l12",
          title: "Déstructuration, spread et rest",
          type: "text",
          duration: "14 min",
          body:
            "## Extraire et rassembler proprement\n\n" +
            "La déstructuration et l'opérateur `...` sont partout dans le code moderne. Bien utilisés, ils réduisent le bruit et clarifient les intentions. Mal compris, ils cachent des copies coûteuses.\n\n" +
            "### Déstructurer un objet\n\n" +
            "```js\n" +
            "const user = { nom: \"Ada\", age: 36, ville: \"Paris\" };\n" +
            "const { nom, ville } = user;\n" +
            "// nom = \"Ada\", ville = \"Paris\"\n" +
            "```\n\n" +
            "On peut renommer et donner une valeur par défaut dans la même expression.\n\n" +
            "```js\n" +
            "const { nom: prenom, pays = \"France\" } = user;\n" +
            "// prenom = \"Ada\", pays = \"France\" (absent dans user)\n" +
            "```\n\n" +
            "C'est particulièrement propre dans les signatures de fonction, pour nommer des options sans imposer d'ordre aux appelants.\n\n" +
            "```js\n" +
            "function creerLien({ href, texte, cible = \"_self\" }) {\n" +
            "  return `<a href=\"${href}\" target=\"${cible}\">${texte}</a>`;\n" +
            "}\n" +
            "creerLien({ texte: \"Doc\", href: \"/doc\" });\n" +
            "```\n\n" +
            "### Déstructurer un tableau, par position\n\n" +
            "```js\n" +
            "const [premier, deuxieme] = [10, 20, 30];\n" +
            "const [, , troisieme] = [10, 20, 30]; // on saute des positions\n" +
            "// échange sans variable temporaire :\n" +
            "let a = 1, b = 2;\n" +
            "[a, b] = [b, a]; // a = 2, b = 1\n" +
            "```\n\n" +
            "### Rest : rassembler le reste\n\n" +
            "Dans une déstructuration, `...` collecte ce qui n'a pas été nommé.\n\n" +
            "```js\n" +
            "const [tete, ...queue] = [1, 2, 3, 4];\n" +
            "// tete = 1, queue = [2, 3, 4]\n" +
            "const { nom: n, ...reste } = user;\n" +
            "// reste = { age: 36, ville: \"Paris\" }\n" +
            "```\n\n" +
            "En paramètre de fonction, rest capture un nombre variable d'arguments dans un vrai tableau, ce que l'ancien objet `arguments` ne faisait pas.\n\n" +
            "```js\n" +
            "function somme(...nombres) {\n" +
            "  return nombres.reduce((a, b) => a + b, 0);\n" +
            "}\n" +
            "somme(1, 2, 3, 4); // 10\n" +
            "```\n\n" +
            "### Spread : étaler\n\n" +
            "Le même `...`, à l'inverse, déploie un itérable ou les propriétés d'un objet.\n\n" +
            "```js\n" +
            "const base = [1, 2];\n" +
            "const etendu = [...base, 3, 4]; // [1, 2, 3, 4]\n" +
            "const config = { ...defauts, timeout: 5000 }; // fusion, timeout écrase\n" +
            "```\n\n" +
            "### Le piège de la copie superficielle\n\n" +
            "Le spread copie sur un seul niveau. Les objets ou tableaux imbriqués restent partagés par référence.\n\n" +
            "```js\n" +
            "const original = { nom: \"Ada\", roles: [\"admin\"] };\n" +
            "const copie = { ...original };\n" +
            "copie.roles.push(\"user\");\n" +
            "original.roles; // [\"admin\", \"user\"] : le tableau est partagé !\n" +
            "```\n\n" +
            "Pour une copie profonde ponctuelle, `structuredClone(obj)` est disponible dans les navigateurs récents et Node 17+. C'est la bonne réponse moderne, bien plus sûre que le vieux `JSON.parse(JSON.stringify(...))` qui perd les dates, les fonctions et les undefined.\n\n" +
            "> À retenir : `...` rassemble en position rest et étale en position spread. Mais souvenez-vous que le spread reste superficiel : au-delà d'un niveau, il partage les références.\n",
        },
        {
          id: "l13",
          title: "Immutabilité : pourquoi et comment concrètement",
          type: "text",
          duration: "13 min",
          body:
            "## Ne pas modifier, remplacer\n\n" +
            "L'immutabilité, c'est la discipline de ne jamais modifier une donnée en place, mais d'en produire une nouvelle version. Ce n'est pas un dogme académique. C'est ce qui rend un état prévisible, ce qui permet à React de détecter un changement par simple comparaison de référence, et ce qui évite la classe de bugs où une fonction lointaine mute un objet que vous croyiez stable.\n\n" +
            "### Le bug qu'on évite\n\n" +
            "```js\n" +
            "function ajouterRole(user, role) {\n" +
            "  user.roles.push(role); // mutation cachée\n" +
            "  return user;\n" +
            "}\n" +
            "const ada = { nom: \"Ada\", roles: [\"lecteur\"] };\n" +
            "const modifie = ajouterRole(ada, \"admin\");\n" +
            "ada.roles; // [\"lecteur\", \"admin\"] : l'original a changé sans qu'on l'ait demandé\n" +
            "```\n\n" +
            "La fonction a des effets de bord sur son entrée. Deux parties du programme partagent maintenant le même tableau, et un changement chez l'une surprend l'autre.\n\n" +
            "### La version immuable\n\n" +
            "```js\n" +
            "function ajouterRole(user, role) {\n" +
            "  return { ...user, roles: [...user.roles, role] };\n" +
            "}\n" +
            "const modifie = ajouterRole(ada, \"admin\");\n" +
            "ada.roles;     // [\"lecteur\"], intact\n" +
            "modifie.roles; // [\"lecteur\", \"admin\"]\n" +
            "```\n\n" +
            "On reconstruit l'objet et le tableau modifié. L'original n'est jamais touché. Notez qu'il faut recopier chaque niveau qu'on modifie : le spread superficiel de la leçon précédente est exactement l'outil pour ça.\n\n" +
            "### Les méthodes qui mutent, à connaître\n\n" +
            "Certaines méthodes de tableau modifient en place et sont à éviter dans un style immuable : `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`. Leurs équivalents non destructifs :\n\n" +
            "- au lieu de `arr.push(x)`, écrire `[...arr, x]`\n" +
            "- au lieu de `arr.sort()`, écrire `[...arr].sort()` pour trier une copie\n" +
            "- ES2023 ajoute `toSorted`, `toReversed`, `toSpliced` et `with`, qui renvoient une nouvelle version sans toucher l'original\n\n" +
            "```js\n" +
            "const scores = [3, 1, 2];\n" +
            "const tries = scores.toSorted((a, b) => a - b);\n" +
            "// tries = [1, 2, 3], scores = [3, 1, 2] intact\n" +
            "```\n\n" +
            "### Object.freeze pour verrouiller\n\n" +
            "`Object.freeze(obj)` empêche toute modification de premier niveau. En mode strict, une tentative de mutation lève une erreur au lieu d'échouer en silence. Attention, c'est superficiel : les objets imbriqués restent modifiables, il faut geler récursivement pour un vrai gel.\n\n" +
            "```js\n" +
            "const config = Object.freeze({ theme: \"clair\" });\n" +
            "config.theme = \"sombre\"; // ignoré, ou TypeError en mode strict\n" +
            "```\n\n" +
            "> À retenir : traiter les données comme immuables coûte quelques spreads de plus, et vous rend en échange un état dont l'évolution est traçable et sans surprise à distance. Sur une application avec de l'état partagé, c'est un des meilleurs rapports effort/bugs évités.\n",
        },
        {
          id: "l14",
          title: "Quiz : données, fonctionnel et immutabilité",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q14",
              prompt: "Pourquoi passer une valeur initiale à reduce, comme reduce((acc, x) => ..., 0) ?",
              options: [
                "C'est purement décoratif",
                "Sans elle, reduce prend le premier élément comme départ et lève une TypeError sur un tableau vide",
                "Elle rend reduce plus rapide",
                "Elle est obligatoire syntaxiquement",
              ],
              correctIndex: 1,
              explanation:
                "Sans valeur initiale, reduce utilise le premier élément comme accumulateur de départ et commence à l'indice 1 ; sur un tableau vide, il lève une TypeError. Fournir l'initiale sécurise le cas vide et clarifie le type du résultat.",
            },
            {
              id: "q15",
              prompt: "Après const copie = { ...original } où original.roles est un tableau, puis copie.roles.push(\"x\"), que contient original.roles ?",
              options: [
                "Le tableau d'origine sans \"x\"",
                "Le tableau avec \"x\", car le spread est superficiel et le tableau reste partagé",
                "Une erreur est levée",
                "undefined",
              ],
              correctIndex: 1,
              explanation:
                "Le spread ne copie qu'un niveau. La propriété roles des deux objets pointe vers le même tableau ; muter via copie.roles affecte donc original.roles. Pour éviter ça, il faut recopier aussi le niveau imbriqué ou utiliser structuredClone.",
            },
            {
              id: "q16",
              prompt: "Quelle méthode trie un tableau sans modifier l'original ?",
              options: [
                "arr.sort()",
                "arr.reverse()",
                "arr.toSorted()",
                "arr.splice()",
              ],
              correctIndex: 2,
              explanation:
                "sort, reverse et splice mutent le tableau en place. toSorted, ajouté en ES2023, renvoie un nouveau tableau trié et laisse l'original intact. À défaut, [...arr].sort() trie une copie.",
            },
            {
              id: "q17",
              prompt: "Quelle est la limite de Object.freeze(obj) ?",
              options: [
                "Il ralentit toutes les lectures",
                "Il ne gèle que le premier niveau ; les objets imbriqués restent modifiables",
                "Il supprime les propriétés",
                "Il transforme l'objet en tableau",
              ],
              correctIndex: 1,
              explanation:
                "Object.freeze est superficiel : il empêche d'ajouter, supprimer ou réassigner les propriétés directes, mais un objet ou tableau imbriqué peut toujours être muté. Un gel profond demande d'appliquer freeze récursivement.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Partie 5 : Asynchronisme en profondeur",
      lessons: [
        {
          id: "l15",
          title: "L'event loop : microtâches contre macrotâches",
          type: "text",
          duration: "16 min",
          body:
            "## Un seul fil, une file d'attente\n\n" +
            "JavaScript exécute votre code sur un seul thread. Il ne fait qu'une chose à la fois. Comment, alors, gère-t-il des timers, des requêtes réseau et des clics sans tout bloquer ? Grâce à l'event loop et à des files de tâches. Comprendre leur ordre, c'est pouvoir prédire l'exécution de n'importe quel code asynchrone.\n\n" +
            "### La pile, puis les files\n\n" +
            "Le moteur exécute d'abord tout le code synchrone, sur la pile d'appels, jusqu'à ce qu'elle soit vide. Ensuite seulement, l'event loop pioche du travail en attente. Il y a deux files, et leur priorité diffère :\n\n" +
            "- Les macrotâches : `setTimeout`, `setInterval`, les événements du DOM, les I/O.\n" +
            "- Les microtâches : les callbacks de Promises (`.then`, `.catch`, `.finally`), `queueMicrotask`, et `await`.\n\n" +
            "La règle d'or : après chaque macrotâche, l'event loop vide entièrement la file des microtâches avant de reprendre la macrotâche suivante. Les microtâches passent toujours devant.\n\n" +
            "### Le cas qui départage tout le monde\n\n" +
            "```js\n" +
            "console.log(\"1 synchrone\");\n" +
            "setTimeout(() => console.log(\"2 macrotache\"), 0);\n" +
            "Promise.resolve().then(() => console.log(\"3 microtache\"));\n" +
            "console.log(\"4 synchrone\");\n" +
            "```\n\n" +
            "L'ordre affiché est : `1 synchrone`, `4 synchrone`, `3 microtache`, `2 macrotache`. Décortiquons. Les deux `console.log` synchrones partent d'abord, dans l'ordre. Le `setTimeout` met sa fonction en macrotâche, le `.then` en microtâche. La pile se vide. L'event loop vide alors les microtâches : `3` s'affiche. Puis, seulement, il prend la macrotâche : `2`.\n\n" +
            "Le `setTimeout(..., 0)` n'est donc pas « exécuter tout de suite ». C'est « exécuter au prochain tour de macrotâche, après tout le synchrone et toutes les microtâches en attente ». Un `.then` planifié plus tard s'exécutera avant lui.\n\n" +
            "### Pourquoi ça compte en vrai\n\n" +
            "Une boucle qui empile des microtâches sans jamais rendre la main peut affamer le rendu et geler la page, parce que le navigateur ne repeint qu'entre les macrotâches. À l'inverse, si vous avez besoin d'exécuter du code « juste après le code courant mais avant tout timer », `queueMicrotask` est l'outil précis, plus fiable qu'un `setTimeout(fn, 0)`.\n\n" +
            "```js\n" +
            "queueMicrotask(() => console.log(\"après le synchrone, avant les timers\"));\n" +
            "```\n\n" +
            "> À retenir : synchrone d'abord, puis toutes les microtâches, puis une macrotâche, puis de nouveau toutes les microtâches, et ainsi de suite. Gardez ce cycle en tête et l'asynchronisme cesse d'être magique.\n\n" +
            "Explication détaillée : [la boucle d'événements (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Execution_model).\n",
        },
        {
          id: "l16",
          title: "Des callbacks aux Promises",
          type: "text",
          duration: "15 min",
          body:
            "## Le problème que les Promises résolvent\n\n" +
            "Avant les Promises, l'asynchronisme passait par des callbacks : on passait une fonction à appeler « quand ce sera prêt ». Ça marche, mais ça se dégrade vite dès qu'on enchaîne des étapes.\n\n" +
            "### L'enfer des callbacks\n\n" +
            "```js\n" +
            "chargerUser(id, (err, user) => {\n" +
            "  if (err) return gerer(err);\n" +
            "  chargerCommandes(user, (err, commandes) => {\n" +
            "    if (err) return gerer(err);\n" +
            "    chargerDetails(commandes, (err, details) => {\n" +
            "      if (err) return gerer(err);\n" +
            "      afficher(details);\n" +
            "    });\n" +
            "  });\n" +
            "});\n" +
            "```\n\n" +
            "Trois niveaux d'imbrication, la gestion d'erreur répétée à chaque étage, une lecture qui part vers la droite. Ajoutez une quatrième étape et ça devient ingérable.\n\n" +
            "### Une Promise, trois états\n\n" +
            "Une Promise représente une valeur future. Elle est dans un de trois états : `pending` (en attente), `fulfilled` (résolue avec une valeur), ou `rejected` (échouée avec une raison). Une fois résolue ou rejetée, elle est figée : elle ne change plus.\n\n" +
            "```js\n" +
            "const p = new Promise((resolve, reject) => {\n" +
            "  setTimeout(() => resolve(42), 1000);\n" +
            "});\n" +
            "p.then((valeur) => console.log(valeur)); // 42 après une seconde\n" +
            "```\n\n" +
            "Dans la pratique, vous créez rarement une Promise à la main. Les API modernes en renvoient déjà, comme `fetch`.\n\n" +
            "### Chaîner à plat\n\n" +
            "Le vrai gain, c'est le chaînage. Chaque `.then` renvoie une nouvelle Promise, et ce que vous retournez dedans devient la valeur du maillon suivant. L'imbrication disparaît.\n\n" +
            "```js\n" +
            "chargerUser(id)\n" +
            "  .then((user) => chargerCommandes(user))\n" +
            "  .then((commandes) => chargerDetails(commandes))\n" +
            "  .then((details) => afficher(details))\n" +
            "  .catch((err) => gerer(err));\n" +
            "```\n\n" +
            "Un seul `.catch` en fin de chaîne attrape l'erreur de n'importe quelle étape précédente. C'est le point crucial : une rejection saute par-dessus tous les `.then` restants et file directement au premier `.catch`. Fini le `if (err)` répété.\n\n" +
            "### Le piège à éviter\n\n" +
            "Retournez toujours la Promise dans un `.then` qui en produit une, sinon vous cassez la chaîne et perdez la gestion d'erreur.\n\n" +
            "```js\n" +
            "// mauvais : la Promise interne n'est pas retournée\n" +
            ".then((user) => { chargerCommandes(user); }) // le maillon suivant reçoit undefined\n" +
            "// bon\n" +
            ".then((user) => chargerCommandes(user))\n" +
            "```\n\n" +
            "### finally\n\n" +
            "`.finally(fn)` s'exécute quel que soit le résultat, résolu ou rejeté. Idéal pour couper un indicateur de chargement.\n\n" +
            "```js\n" +
            "montrerSpinner();\n" +
            "charger().then(afficher).catch(gerer).finally(cacherSpinner);\n" +
            "```\n\n" +
            "> À retenir : la Promise remplace l'imbrication par une chaîne plate et centralise les erreurs dans un `.catch`. C'est la fondation sur laquelle async/await, à la leçon suivante, ajoute juste une syntaxe.\n",
        },
        {
          id: "l17",
          title: "async/await et la gestion d'erreurs asynchrones",
          type: "text",
          duration: "15 min",
          body:
            "## Écrire de l'asynchrone qui se lit comme du synchrone\n\n" +
            "`async/await` est du sucre syntaxique posé sur les Promises. Aucune nouvelle capacité, mais un code bien plus lisible. Une fonction `async` renvoie toujours une Promise. À l'intérieur, `await` met en pause la fonction jusqu'à ce que la Promise attendue se résolve, et renvoie sa valeur.\n\n" +
            "### La même chaîne, en linéaire\n\n" +
            "```js\n" +
            "async function afficherDetails(id) {\n" +
            "  const user = await chargerUser(id);\n" +
            "  const commandes = await chargerCommandes(user);\n" +
            "  const details = await chargerDetails(commandes);\n" +
            "  afficher(details);\n" +
            "}\n" +
            "```\n\n" +
            "On lit ça de haut en bas comme du code classique. Mais souvenez-vous de la leçon sur l'event loop : chaque `await` rend la main au moteur, qui va traiter d'autres tâches pendant l'attente. Rien n'est bloqué, malgré l'apparence séquentielle.\n\n" +
            "### La gestion d'erreurs : try/catch\n\n" +
            "Avec `await`, une Promise rejetée devient une exception qu'on attrape avec `try/catch` ordinaire. C'est le grand confort de la syntaxe.\n\n" +
            "```js\n" +
            "async function chargerProfil(id) {\n" +
            "  try {\n" +
            "    const reponse = await fetch(`/api/users/${id}`);\n" +
            "    if (!reponse.ok) {\n" +
            "      throw new Error(`HTTP ${reponse.status}`);\n" +
            "    }\n" +
            "    return await reponse.json();\n" +
            "  } catch (err) {\n" +
            "    console.error(\"Chargement échoué\", err);\n" +
            "    return null;\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Attention à un piège classique de `fetch` : il ne rejette que sur une erreur réseau. Une réponse 404 ou 500 est considérée comme réussie, avec `ok` à `false`. Il faut donc tester `reponse.ok` explicitement et lever soi-même, comme ci-dessus. Beaucoup de bugs viennent de ce détail.\n\n" +
            "### Le piège de la séquence inutile\n\n" +
            "Chaîner des `await` indépendants les met en série sans raison, et vous payez la somme des attentes.\n\n" +
            "```js\n" +
            "// lent : 300 ms + 300 ms = 600 ms\n" +
            "const a = await fetchA();\n" +
            "const b = await fetchB();\n" +
            "```\n\n" +
            "Si `fetchB` ne dépend pas de `a`, lancez les deux d'abord, attendez ensuite. On y revient avec `Promise.all` à la prochaine leçon.\n\n" +
            "```js\n" +
            "// rapide : les deux en parallèle, ~300 ms\n" +
            "const [a, b] = await Promise.all([fetchA(), fetchB()]);\n" +
            "```\n\n" +
            "### Ne pas oublier le await\n\n" +
            "Oublier un `await` sur un appel `async` est sournois : la fonction continue avec une Promise en attente au lieu de la valeur, et une erreur devient une rejection non gérée, silencieuse. Un linter avec la règle `no-floating-promises` attrape ça.\n\n" +
            "> À retenir : `async/await` ne remplace pas les Promises, il les rend lisibles. `try/catch` pour les erreurs, `reponse.ok` à vérifier sur `fetch`, et `Promise.all` dès que des attentes sont indépendantes.\n",
        },
        {
          id: "l18",
          title: "Promise.all, race, allSettled et any",
          type: "text",
          duration: "14 min",
          body:
            "## Combiner plusieurs opérations asynchrones\n\n" +
            "Dès qu'on manipule plusieurs Promises à la fois, quatre combinateurs couvrent les besoins. Les confondre mène à des bugs subtils, notamment sur la gestion d'échec. Voici quand utiliser chacun.\n\n" +
            "### Promise.all : tout ou rien\n\n" +
            "`Promise.all` attend que toutes les Promises réussissent et renvoie un tableau de résultats, dans l'ordre d'entrée. Mais si une seule échoue, l'ensemble rejette immédiatement avec cette erreur, sans attendre les autres.\n\n" +
            "```js\n" +
            "const [user, config, stats] = await Promise.all([\n" +
            "  fetchUser(),\n" +
            "  fetchConfig(),\n" +
            "  fetchStats(),\n" +
            "]);\n" +
            "```\n\n" +
            "C'est le bon choix quand vous avez besoin de tous les résultats pour continuer, et qu'un échec doit tout interrompre. Le fait qu'il rejette à la première erreur est une fonctionnalité, pas un défaut : inutile d'afficher une page à moitié chargée.\n\n" +
            "### Promise.allSettled : ne jamais rejeter\n\n" +
            "`allSettled` attend que toutes les Promises se terminent, réussite ou échec, et renvoie un tableau d'objets décrivant chaque issue. Il ne rejette jamais.\n\n" +
            "```js\n" +
            "const resultats = await Promise.allSettled([fetchA(), fetchB(), fetchC()]);\n" +
            "for (const r of resultats) {\n" +
            "  if (r.status === \"fulfilled\") console.log(\"OK\", r.value);\n" +
            "  else console.warn(\"KO\", r.reason);\n" +
            "}\n" +
            "```\n\n" +
            "C'est le choix pour des opérations indépendantes dont vous voulez le bilan complet : envoyer trois notifications, en réussir deux, et savoir laquelle a échoué sans perdre les autres.\n\n" +
            "### Promise.race : le premier qui arrive\n\n" +
            "`race` se règle dès qu'une Promise se termine, réussie ou rejetée, et adopte son issue. L'usage type est le timeout.\n\n" +
            "```js\n" +
            "function avecTimeout(promesse, ms) {\n" +
            "  const limite = new Promise((_, reject) =>\n" +
            "    setTimeout(() => reject(new Error(\"Timeout\")), ms)\n" +
            "  );\n" +
            "  return Promise.race([promesse, limite]);\n" +
            "}\n" +
            "await avecTimeout(fetch(\"/lent\"), 3000);\n" +
            "```\n\n" +
            "Si la vraie requête n'a pas répondu en 3 secondes, la Promise de timeout gagne la course et rejette.\n\n" +
            "### Promise.any : le premier qui réussit\n\n" +
            "`any` se règle dès qu'une Promise réussit, en ignorant les échecs. Il ne rejette que si toutes échouent, avec une `AggregateError` qui rassemble les raisons.\n\n" +
            "```js\n" +
            "// interroge trois miroirs, garde la première réponse valable\n" +
            "const rapide = await Promise.any([\n" +
            "  fetch(\"https://miroir1/data\"),\n" +
            "  fetch(\"https://miroir2/data\"),\n" +
            "  fetch(\"https://miroir3/data\"),\n" +
            "]);\n" +
            "```\n\n" +
            "### Le tableau récapitulatif\n\n" +
            "- `all` : toutes réussissent, sinon rejette à la première erreur.\n" +
            "- `allSettled` : attend tout le monde, ne rejette jamais, renvoie le bilan.\n" +
            "- `race` : la première terminée gagne, réussite comme échec.\n" +
            "- `any` : la première réussie gagne, ne rejette que si toutes échouent.\n\n" +
            "> À retenir : le piège numéro un est d'utiliser `all` là où `allSettled` était voulu, et de perdre tous les résultats à cause d'un seul échec. Choisissez selon ce qu'un échec doit provoquer.\n",
        },
        {
          id: "l19",
          title: "Quiz : asynchronisme",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q18",
              prompt: "Dans quel ordre s'affichent ces lignes : console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D'); ?",
              options: ["A B C D", "A D C B", "A D B C", "A C D B"],
              correctIndex: 1,
              explanation:
                "A et D sont synchrones, affichés en premier. Puis l'event loop vide les microtâches avant les macrotâches : le .then (C, microtâche) passe avant le setTimeout (B, macrotâche). D'où A, D, C, B.",
            },
            {
              id: "q19",
              prompt: "Pourquoi fetch ne déclenche-t-il pas le catch sur une réponse HTTP 404 ?",
              options: [
                "C'est un bug de fetch",
                "fetch ne rejette que sur erreur réseau ; une réponse 404 est une requête réussie avec ok à false",
                "Il faut passer une option throwOnError",
                "404 déclenche bien le catch",
              ],
              correctIndex: 1,
              explanation:
                "fetch considère qu'obtenir une réponse du serveur est un succès, quel que soit le code HTTP. Seule une panne réseau rejette. Pour traiter un 404 ou 500 comme une erreur, il faut tester response.ok et lever soi-même.",
            },
            {
              id: "q20",
              prompt: "Vous lancez trois envois de notifications indépendants et voulez le bilan complet même si l'un échoue. Quel combinateur ?",
              options: [
                "Promise.all",
                "Promise.race",
                "Promise.allSettled",
                "Promise.any",
              ],
              correctIndex: 2,
              explanation:
                "Promise.all rejetterait à la première erreur et vous perdriez les résultats des autres. allSettled attend tout le monde, ne rejette jamais, et renvoie pour chaque Promise son status fulfilled/rejected avec la valeur ou la raison.",
            },
            {
              id: "q21",
              prompt: "const a = await fetchA(); const b = await fetchB(); où fetchB ne dépend pas de a. Quel est le problème ?",
              options: [
                "Aucun, c'est optimal",
                "Les deux requêtes sont mises en série alors qu'elles pourraient être parallèles, doublant l'attente",
                "await ne peut pas être utilisé deux fois",
                "Il manque un try/catch",
              ],
              correctIndex: 1,
              explanation:
                "Chaque await bloque la suite de la fonction jusqu'à sa résolution. Comme fetchB est indépendant de a, les enchaîner additionne inutilement les durées. Promise.all([fetchA(), fetchB()]) les lance ensemble et attend la plus lente.",
            },
            {
              id: "q22",
              prompt: "Que fait Promise.race([promesse, timeoutQuiRejetteApres3s]) ?",
              options: [
                "Attend les deux et renvoie un tableau",
                "Adopte l'issue de la première Promise terminée : si promesse répond avant 3 s elle gagne, sinon le timeout rejette",
                "Renvoie toujours la promesse la plus rapide même si elle échoue plus tard",
                "Ignore les rejets",
              ],
              correctIndex: 1,
              explanation:
                "race se règle sur la première Promise à se terminer, réussite ou échec. Si la vraie promesse se résout avant le délai, on obtient sa valeur ; sinon le timeout se déclenche en premier et rejette avec l'erreur Timeout. C'est le motif standard de délai maximal.",
            },
          ],
        },
      ],
    },
    {
      id: "p6",
      title: "Partie 6 : Modules, patterns et performance",
      lessons: [
        {
          id: "l20",
          title: "Modules ES : import, export et ce qu'ils changent",
          type: "text",
          duration: "14 min",
          body:
            "## Un fichier, un module, une portée\n\n" +
            "Les modules ES sont le système d'organisation standard de JavaScript, dans le navigateur comme dans Node moderne. Chaque fichier module a sa propre portée : ses variables ne fuient pas dans le global, et on choisit explicitement ce qu'on expose et ce qu'on importe.\n\n" +
            "### Export nommé\n\n" +
            "On exporte plusieurs valeurs par leur nom. L'appelant importe exactement celles qu'il veut, entre accolades.\n\n" +
            "```js\n" +
            "// maths.js\n" +
            "export const PI = 3.14159;\n" +
            "export function aire(r) {\n" +
            "  return PI * r * r;\n" +
            "}\n" +
            "```\n\n" +
            "```js\n" +
            "// app.js\n" +
            "import { aire, PI } from \"./maths.js\";\n" +
            "aire(2); // 12.56636\n" +
            "```\n\n" +
            "Les noms doivent correspondre. On peut renommer à l'import avec `as` : `import { aire as calculerAire } from \"./maths.js\"`.\n\n" +
            "### Export par défaut\n\n" +
            "Un module peut avoir un seul export par défaut, pour sa valeur principale. À l'import, on lui donne le nom qu'on veut, sans accolades.\n\n" +
            "```js\n" +
            "// bouton.js\n" +
            "export default function Bouton(props) { /* ... */ }\n" +
            "```\n\n" +
            "```js\n" +
            "import Bouton from \"./bouton.js\"; // le nom est libre\n" +
            "```\n\n" +
            "Ma préférence en équipe : privilégier les exports nommés. Ils rendent les imports cohérents d'un fichier à l'autre, facilitent le renommage automatique par l'outillage et évitent qu'un même module soit importé sous cinq noms différents.\n\n" +
            "### Les imports sont statiques et hissés\n\n" +
            "Un `import` est analysé avant l'exécution : il ne peut pas être conditionnel ni dépendre d'une variable, et il est hissé en haut du module. C'est ce qui permet à un bundler de savoir, sans exécuter le code, quels modules sont liés, et d'éliminer le code mort (le tree-shaking).\n\n" +
            "```js\n" +
            "// interdit : import n'est pas une instruction ordinaire\n" +
            "if (condition) import { x } from \"./m.js\"; // erreur de syntaxe\n" +
            "```\n\n" +
            "### import() dynamique\n\n" +
            "Pour charger un module à la demande, il existe la forme fonction `import()`, qui renvoie une Promise. Utile pour ne charger un gros module que lorsqu'il sert vraiment.\n\n" +
            "```js\n" +
            "bouton.addEventListener(\"click\", async () => {\n" +
            "  const { genererPdf } = await import(\"./pdf.js\");\n" +
            "  genererPdf();\n" +
            "});\n" +
            "```\n\n" +
            "Le module PDF n'est téléchargé qu'au premier clic, ce qui allège le chargement initial de la page. C'est le fractionnement de code, un levier de performance concret.\n\n" +
            "### Les modules sont en mode strict et exécutés une fois\n\n" +
            "Un module est toujours en mode strict, sans le déclarer. Et il n'est évalué qu'une seule fois, même s'il est importé par dix fichiers : ils partagent la même instance. C'est ce qui fait qu'un module exportant un objet de configuration se comporte comme un singleton naturel.\n\n" +
            "> À retenir : un module isole sa portée, expose l'essentiel par export nommé, et se charge statiquement pour permettre le tree-shaking, ou dynamiquement via `import()` pour alléger le démarrage.\n\n" +
            "Détails sur [les modules JavaScript (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules).\n",
        },
        {
          id: "l21",
          title: "Trois patterns utiles : module, observateur, debounce/throttle",
          type: "text",
          duration: "16 min",
          body:
            "## Des solutions rodées à des problèmes récurrents\n\n" +
            "Un pattern, c'est une réponse éprouvée à un problème qui revient. En voici trois qu'on utilise vraiment, avec du code exécutable, pas de la théorie.\n\n" +
            "### Le pattern module : état privé, interface publique\n\n" +
            "Avant les modules ES, on isolait de l'état avec une IIFE renvoyant un objet. Le principe reste éclairant et sert encore pour créer une instance unique à état encapsulé.\n\n" +
            "```js\n" +
            "const compteur = (() => {\n" +
            "  let n = 0; // privé, invisible dehors\n" +
            "  return {\n" +
            "    incr() { n += 1; return n; },\n" +
            "    reset() { n = 0; },\n" +
            "  };\n" +
            "})();\n" +
            "compteur.incr(); // 1\n" +
            "compteur.n;      // undefined\n" +
            "```\n\n" +
            "C'est la closure de la partie 2 mise au service de l'architecture : une frontière nette entre le dedans et le dehors.\n\n" +
            "### Le pattern observateur : prévenir des abonnés\n\n" +
            "Un sujet tient une liste d'abonnés et les notifie quand quelque chose change. C'est le cœur des systèmes d'événements et de la réactivité.\n\n" +
            "```js\n" +
            "function creerSujet() {\n" +
            "  const abonnes = new Set();\n" +
            "  return {\n" +
            "    abonner(fn) {\n" +
            "      abonnes.add(fn);\n" +
            "      return () => abonnes.delete(fn); // fonction de désabonnement\n" +
            "    },\n" +
            "    emettre(donnee) {\n" +
            "      for (const fn of abonnes) fn(donnee);\n" +
            "    },\n" +
            "  };\n" +
            "}\n" +
            "const sujet = creerSujet();\n" +
            "const stop = sujet.abonner((v) => console.log(\"recu\", v));\n" +
            "sujet.emettre(42); // \"recu 42\"\n" +
            "stop();            // se désabonne\n" +
            "```\n\n" +
            "Renvoyer la fonction de désabonnement dès l'abonnement est le détail qui évite les fuites mémoire : l'abonné sait comment se retirer.\n\n" +
            "### debounce : attendre le calme\n\n" +
            "`debounce` retarde l'exécution jusqu'à ce que les déclenchements se calment. Cas typique : une barre de recherche qui n'interroge l'API qu'une fois que l'utilisateur a arrêté de taper.\n\n" +
            "```js\n" +
            "function debounce(fn, delai) {\n" +
            "  let timer;\n" +
            "  return (...args) => {\n" +
            "    clearTimeout(timer);\n" +
            "    timer = setTimeout(() => fn(...args), delai);\n" +
            "  };\n" +
            "}\n" +
            "const rechercher = debounce((q) => console.log(\"requete\", q), 300);\n" +
            "// tape vite : une seule requête, 300 ms après la dernière frappe\n" +
            "```\n\n" +
            "### throttle : cadencer\n\n" +
            "`throttle` limite la fréquence : au plus un appel par intervalle, même si l'événement se déclenche en continu. Cas typique : un gestionnaire de `scroll` ou de `resize`, qui sinon tire des dizaines de fois par seconde.\n\n" +
            "```js\n" +
            "function throttle(fn, intervalle) {\n" +
            "  let pret = true;\n" +
            "  return (...args) => {\n" +
            "    if (!pret) return;\n" +
            "    pret = false;\n" +
            "    fn(...args);\n" +
            "    setTimeout(() => { pret = true; }, intervalle);\n" +
            "  };\n" +
            "}\n" +
            "```\n\n" +
            "La distinction est nette et souvent confondue : debounce attend la fin de la rafale et n'exécute qu'une fois ; throttle exécute régulièrement pendant la rafale. Recherche au clavier, c'est debounce. Suivi de scroll, c'est throttle.\n\n" +
            "> À retenir : le module encapsule, l'observateur diffuse, debounce et throttle domptent les événements trop fréquents. Ces quatre-là couvrent une grande part du code utilitaire d'une application réelle.\n",
        },
        {
          id: "l22",
          title: "Pièges de performance à connaître",
          type: "text",
          duration: "15 min",
          body:
            "## Là où ça coûte vraiment cher\n\n" +
            "La plupart des problèmes de performance en JavaScript ne viennent pas d'un algorithme mal choisi, mais de quelques réflexes évitables. En voici les plus fréquents, avec le correctif.\n\n" +
            "### Le layout thrashing dans le DOM\n\n" +
            "Lire une propriété géométrique du DOM (`offsetWidth`, `getBoundingClientRect`, `scrollTop`) force le navigateur à recalculer la mise en page. Si vous alternez lecture et écriture dans une boucle, vous déclenchez ce recalcul à chaque tour. C'est le layout thrashing, et il fait chuter le nombre d'images par seconde.\n\n" +
            "```js\n" +
            "// mauvais : lit puis écrit à chaque itération, force N reflows\n" +
            "for (const el of elements) {\n" +
            "  el.style.height = el.offsetHeight + 10 + \"px\";\n" +
            "}\n" +
            "// bon : on lit tout d'abord, on écrit tout ensuite\n" +
            "const hauteurs = elements.map((el) => el.offsetHeight);\n" +
            "elements.forEach((el, i) => {\n" +
            "  el.style.height = hauteurs[i] + 10 + \"px\";\n" +
            "});\n" +
            "```\n\n" +
            "Regrouper les lectures puis les écritures laisse le navigateur ne recalculer qu'une fois.\n\n" +
            "### Manipuler le DOM dans une boucle\n\n" +
            "Insérer des éléments un par un fait travailler le navigateur à chaque insertion. Construisez hors du document, puis insérez d'un coup avec un `DocumentFragment`.\n\n" +
            "```js\n" +
            "const fragment = document.createDocumentFragment();\n" +
            "for (const item of donnees) {\n" +
            "  const li = document.createElement(\"li\");\n" +
            "  li.textContent = item;\n" +
            "  fragment.appendChild(li);\n" +
            "}\n" +
            "liste.appendChild(fragment); // une seule insertion dans le DOM\n" +
            "```\n\n" +
            "### Le mauvais outil de recherche\n\n" +
            "Chercher répétitivement dans un grand tableau avec `includes` ou `indexOf` est en temps linéaire. Si vous testez l'appartenance des milliers de fois, un `Set` fait la même chose en temps quasi constant.\n\n" +
            "```js\n" +
            "// lent sur de gros volumes : O(n) par recherche\n" +
            "if (grandTableau.includes(id)) { /* ... */ }\n" +
            "// rapide : O(1) en moyenne\n" +
            "const index = new Set(grandTableau);\n" +
            "if (index.has(id)) { /* ... */ }\n" +
            "```\n\n" +
            "### Bloquer le fil principal\n\n" +
            "Une boucle lourde et synchrone gèle l'interface : rien ne se repeint tant qu'elle tourne, puisque JavaScript est mono-thread. Pour un calcul long, un Web Worker l'exécute sur un autre fil et laisse la page réactive. À défaut, découpez le travail en morceaux rendus entre deux macrotâches.\n\n" +
            "### La micro-optimisation prématurée\n\n" +
            "Le plus grand piège reste d'optimiser à l'aveugle. Remplacer un `map` lisible par une boucle `for` illisible pour gagner un temps que personne ne mesure, c'est du temps perdu et de la dette ajoutée. La bonne démarche : écrire clair, mesurer avec l'onglet Performance des DevTools ou `console.time`, et n'optimiser que le point chaud identifié.\n\n" +
            "```js\n" +
            "console.time(\"traitement\");\n" +
            "traiter(donnees);\n" +
            "console.timeEnd(\"traitement\"); // traitement: 12.4 ms\n" +
            "```\n\n" +
            "> À retenir : groupez les accès au DOM, insérez par lots, choisissez `Set`/`Map` pour les recherches répétées, sortez le calcul lourd du fil principal, et surtout, mesurez avant d'optimiser. L'intuition se trompe souvent sur ce qui est lent.\n",
        },
        {
          id: "l23",
          title: "Quiz : modules, patterns et performance",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q23",
              prompt: "Pourquoi ne peut-on pas écrire import { x } from \"./m.js\" à l'intérieur d'un if ?",
              options: [
                "C'est autorisé, l'exemple est faux",
                "Parce que les imports statiques sont analysés et hissés avant l'exécution, ce qui permet le tree-shaking ; pour du conditionnel il faut import() dynamique",
                "Parce que les modules sont désactivés dans les blocs",
                "Parce que x n'existe pas",
              ],
              correctIndex: 1,
              explanation:
                "Un import statique est résolu avant que le code ne s'exécute : il ne peut être ni conditionnel ni dynamique, et il est hissé. C'est cette staticité qui permet aux bundlers d'éliminer le code mort. Pour charger à la demande, on utilise la forme fonction import() qui renvoie une Promise.",
            },
            {
              id: "q24",
              prompt: "Un utilisateur tape dans une barre de recherche et on veut n'interroger l'API qu'une fois qu'il s'arrête. Quel outil ?",
              options: [
                "throttle",
                "debounce",
                "Promise.race",
                "Object.freeze",
              ],
              correctIndex: 1,
              explanation:
                "debounce reporte l'exécution jusqu'à ce que les déclenchements cessent pendant le délai fixé : la requête ne part qu'après la dernière frappe. throttle, lui, exécute à cadence régulière pendant la rafale, ce qui conviendrait plutôt à un événement de scroll.",
            },
            {
              id: "q25",
              prompt: "Pourquoi une boucle qui alterne lecture de offsetHeight et écriture de style.height est-elle lente ?",
              options: [
                "offsetHeight n'existe pas",
                "Chaque lecture après une écriture force le navigateur à recalculer la mise en page (layout thrashing)",
                "Les styles sont en lecture seule",
                "La boucle for est intrinsèquement lente",
              ],
              correctIndex: 1,
              explanation:
                "Écrire un style invalide la mise en page ; lire ensuite une propriété géométrique force un recalcul immédiat pour donner une valeur à jour. Alterner les deux dans la boucle déclenche N reflows. Regrouper toutes les lectures puis toutes les écritures n'en provoque qu'un.",
            },
            {
              id: "q26",
              prompt: "Vous testez des milliers de fois si un identifiant appartient à une grande collection. Quel choix est le plus performant ?",
              options: [
                "tableau.includes(id) à chaque test",
                "tableau.indexOf(id) !== -1",
                "Construire un Set une fois et utiliser set.has(id)",
                "Trier le tableau puis includes",
              ],
              correctIndex: 2,
              explanation:
                "includes et indexOf parcourent le tableau à chaque appel, en O(n). Un Set offre une recherche en temps moyen constant, O(1). Sur des milliers de tests contre une grande collection, construire le Set une fois puis interroger has est nettement plus rapide.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
