import type { Course } from "../types";

const course: Course = {
  slug: "cybersecurite",
  title: "Cybersécurité : comprendre, détecter, défendre",
  tagline: "Du phishing deepfake au ransomware, apprends à raisonner comme un défenseur et à sécuriser un système réel.",
  description:
    "Un cours de terrain sur la sécurité des systèmes d'information, nourri d'incidents réels et documentés : l'hôpital de Corbeil-Essonnes, Equifax, Change Healthcare, MOVEit, NotPetya chez Maersk. On part des principes qui ne bougent pas (la triade CIA, la surface d'attaque, le modèle de menace), on démonte les attaques qui font mal aujourd'hui (phishing assisté par deepfake, ransomware à double extorsion, infostealers, injection SQL, XSS), puis on construit une défense qui tient : passkeys et MFA, gestionnaire de mots de passe, chiffrement, segmentation réseau, réponse à incident et obligations RGPD. Chaque partie s'appuie sur des outils qu'un professionnel utilise vraiment (Wireshark, nmap, ZAP, Have I Been Pwned, Bitwarden) et se termine par un quiz qui teste ton raisonnement, pas ta mémoire.",
  category: "Cybersécurité",
  level: "Intermédiaire",
  instructor: "",
  hours: 6,
  rating: 0,
  learners: 0,
  accent: "#2563eb",
  image: "/covers/cybersecurite.svg",
  language: "Français",
  software: "Wireshark, nmap, OWASP ZAP, Bitwarden",
  prerequisites: [
    "Savoir utiliser un terminal (naviguer, lancer une commande).",
    "Notions de base sur les réseaux : ce qu'est une adresse IP, un port, HTTP.",
    "Avoir déjà écrit un peu de code aide pour la partie web, mais ce n'est pas bloquant.",
  ],
  summary: [
    "Les fondamentaux : triade CIA, surface d'attaque, modèle de menace et vocabulaire du risque.",
    "L'humain comme cible : phishing (y compris deepfake et QR codes), mots de passe, MFA, passkeys.",
    "Malwares, ransomwares à double extorsion et les bases concrètes de la cryptographie, jusqu'au post-quantique.",
    "Sécurité réseau et web : pare-feu, segmentation, défense en profondeur, OWASP Top 10, SQLi et XSS.",
    "Défendre pour de vrai : réponse à incident, RGPD, NIS2 et hygiène durable.",
  ],
  objectives: [
    "Analyser la surface d'attaque d'un système, bâtir un modèle de menace et prioriser les risques.",
    "Reconnaître un phishing moderne : mail, SMS, QR code, faux conseiller bancaire, deepfake.",
    "Mettre en place un gestionnaire de mots de passe, le MFA et des passkeys correctement.",
    "Expliquer chiffrement symétrique, asymétrique et le handshake TLS avec un schéma.",
    "Identifier et corriger une injection SQL et une faille XSS dans du vrai code.",
    "Dérouler les six phases d'une réponse à incident et tenir les 72 heures de notification RGPD.",
  ],
  skills: [
    "Analyse de risque et modélisation de la menace",
    "Détection de phishing et sensibilisation",
    "Gestion des identités et authentification forte",
    "Sécurité applicative web (OWASP)",
    "Sécurité réseau et lecture de trafic",
    "Réponse à incident",
  ],
  contentTypes: ["Leçons écrites", "Démonstrations d'outils", "Quiz interactifs", "Études de cas"],
  parts: [
    {
      id: "p1",
      title: "Fondamentaux : penser en défenseur",
      lessons: [
        {
          id: "l1",
          title: "La triade CIA, et pourquoi elle n'est pas qu'un acronyme",
          type: "text",
          duration: "18 min",
          body:
            "## Une nuit d'août à Corbeil-Essonnes\n\n" +
            "Dans la nuit du 20 au 21 août 2022, le Centre hospitalier sud-francilien de Corbeil-Essonnes voit ses systèmes tomber les uns après les autres. Le groupe LockBit vient de chiffrer une partie du réseau et réclame 10 millions de dollars. L'hôpital, comme tous les établissements publics français, ne paie pas. Résultat : des mois de fonctionnement dégradé, des prescriptions rédigées au stylo, des patients transférés vers d'autres établissements, des examens d'imagerie reportés. Et le 23 septembre, faute de rançon, LockBit publie 11 gigaoctets de données volées : résultats d'examens, numéros de sécurité sociale, informations sur le personnel.\n\n" +
            "Regarde bien cet incident : il contient trois dégâts de natures différentes. Des soins impossibles à assurer normalement pendant des semaines. Des données médicales exposées publiquement. Et pendant la crise, l'impossibilité de savoir si les dossiers encore accessibles étaient fiables. Ces trois dégâts portent des noms, et ces noms forment la grille de lecture de toute la sécurité informatique.\n\n" +
            "## Trois propriétés, un équilibre\n\n" +
            "On les note CIA, pour Confidentialité, Intégrité, Disponibilité (Confidentiality, Integrity, Availability en anglais). Ce n'est pas une checklist décorative : c'est l'outil qui permet de dire précisément ce qu'on protège, et contre quoi.\n\n" +
            "- **Confidentialité** : l'information n'est lisible que par ceux qui y ont droit. Les 11 Go publiés par LockBit, c'est une atteinte à la confidentialité (irréversible, d'ailleurs : on ne « récupère » pas des données publiées).\n" +
            "- **Intégrité** : l'information n'a pas été modifiée sans autorisation, et on peut le prouver. Une prescription de 50 mg qui devient 500 mg dans la base, un virement de 100 € qui devient 10 000 €. À l'hôpital, le simple doute sur l'intégrité des dossiers a suffi à imposer le retour au papier.\n" +
            "- **Disponibilité** : le service répond quand on en a besoin. Un système de prescription qui tombe une nuit de garde, c'est un problème de disponibilité, pas de vol de données. C'est le dégât le plus visible du ransomware.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La triade CIA : trois propriétés en tension, chaque mesure de sécurité arbitre entre elles\"}\n" +
            "<svg viewBox=\"0 0 640 320\" role=\"img\"><title>Triade CIA : confidentialité, intégrité, disponibilité</title><g font-family=\"ui-monospace, monospace\" font-size=\"13\"><polygon points=\"320,50 110,260 530,260\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" opacity=\"0.5\"/><rect x=\"240\" y=\"24\" width=\"160\" height=\"32\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"320\" y=\"45\" text-anchor=\"middle\" fill=\"currentColor\">Confidentialité</text><rect x=\"40\" y=\"252\" width=\"150\" height=\"32\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"115\" y=\"273\" text-anchor=\"middle\" fill=\"currentColor\">Intégrité</text><rect x=\"455\" y=\"252\" width=\"160\" height=\"32\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"535\" y=\"273\" text-anchor=\"middle\" fill=\"currentColor\">Disponibilité</text><text x=\"320\" y=\"185\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.75\">arbitrage</text><text x=\"320\" y=\"203\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.75\">permanent</text><text x=\"175\" y=\"140\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" transform=\"rotate(-45 175 140)\">chiffrer ralentit</text><text x=\"468\" y=\"140\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\" transform=\"rotate(45 468 140)\">exposer fragilise</text><text x=\"320\" y=\"300\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\">valider prend du temps</text></g></svg>\n" +
            "```\n\n" +
            "## Les trois tirent dans des sens différents\n\n" +
            "Le piège classique, c'est de croire qu'on peut maximiser les trois en même temps. En pratique elles s'opposent. Chiffrer une base et exiger une authentification forte renforce la confidentialité, mais chaque barrière ajoutée est un point de panne possible pour la disponibilité : un médecin urgentiste qui ne peut pas ouvrir un dossier à 3 h du matin parce que le serveur d'authentification est tombé, c'est un vrai scénario, pas une hypothèse d'école. À l'inverse, répliquer une base sur cinq serveurs améliore la disponibilité mais multiplie par cinq les endroits où la voler. Exiger une double validation humaine pour chaque virement protège l'intégrité et ralentit toute la comptabilité.\n\n" +
            "> Une bonne décision de sécurité, c'est un arbitrage assumé entre ces trois propriétés, pas un « on sécurise tout ». Quelqu'un qui te promet les trois au maximum sans contrepartie te vend quelque chose.\n\n" +
            "Autre cas documenté, pour ancrer l'idée : en mai 2021, l'oléoduc Colonial Pipeline, aux États-Unis, est touché par le ransomware DarkSide, entré par un compte VPN sans MFA dont le mot de passe traînait dans une fuite. L'entreprise coupe elle-même ses systèmes par précaution, et une partie de la côte Est se retrouve à court d'essence pendant plusieurs jours. Le vol de données existait, mais le dégât qui a fait la une, c'était l'arrêt de service : encore la disponibilité. Note au passage que la décision de couper venait du défenseur lui-même, parfois on sacrifie volontairement la disponibilité pour sauver l'intégrité et la confidentialité. C'est exactement le genre d'arbitrage dont on parle.\n\n" +
            "## L'appliquer soi-même\n\n" +
            "Devant n'importe quel actif (une base clients, un site, un serveur de sauvegarde, ton propre ordinateur portable), pose-toi trois questions :\n\n" +
            "1. Qu'est-ce qui se passe si quelqu'un **lit** ça sans droit ? (confidentialité)\n" +
            "2. Qu'est-ce qui se passe si quelqu'un **modifie** ça en douce ? (intégrité)\n" +
            "3. Qu'est-ce qui se passe si ça **tombe** deux jours ? (disponibilité)\n\n" +
            "La réponse te dit où mettre l'effort. Pour un blog public, la confidentialité du contenu compte peu (il est public par définition), mais l'intégrité compte énormément : une page défigurée ou un lien remplacé par un lien piégé détruit la confiance des lecteurs. Pour un cabinet d'avocats, la confidentialité domine tout. Pour une plateforme de paiement, l'intégrité des montants passe avant le reste. On ne sécurise pas ces trois systèmes de la même façon, et c'est très bien.\n\n" +
            "## À toi\n\n" +
            "Classe chaque scénario selon la propriété principalement atteinte : (a) le planning de blocs opératoires d'une clinique est inaccessible pendant 48 h ; (b) un stagiaire modifie discrètement son propre salaire dans le logiciel RH ; (c) la liste des donateurs d'une association est envoyée par erreur à toute la liste de diffusion.\n\n" +
            "> Correction : (a) disponibilité : rien n'est lu ni modifié, mais le service ne répond plus au moment critique. (b) intégrité : la donnée a été altérée sans autorisation ; le montant reste confidentiel et disponible, mais il est faux. (c) confidentialité : des informations réservées ont été lues par des personnes sans droit, et c'est irréversible. Remarque que (b) est le plus sournois des trois : sans mécanisme de journalisation ou de validation, personne ne s'en aperçoit.\n\n" +
            "Garde cette grille en tête : dans la prochaine leçon, on ajoute le vocabulaire du risque (menace, vulnérabilité, surface d'attaque), et tu auras l'équipement complet pour raisonner en défenseur.",
        },
        {
          id: "l2",
          title: "Menace, vulnérabilité, risque : le vocabulaire qui change tout",
          type: "text",
          duration: "19 min",
          body:
            "## Equifax, ou le prix d'un mot mal compris\n\n" +
            "Le 7 mars 2017, une faille critique du framework web Apache Struts est publiée, avec son correctif : CVE-2017-5638. Chez Equifax, l'un des trois grands bureaux de crédit américains, l'équipe sécurité envoie un mail interne demandant de patcher. Le serveur du portail de contestation, lui, n'est jamais mis à jour. Mi-mai, des attaquants entrent par cette faille. Ils se promènent dans le réseau pendant 76 jours : d'autant plus tranquillement que le certificat de l'outil censé inspecter le trafic sortant avait expiré depuis dix mois. Bilan final : les données personnelles de 147 millions de personnes, dont numéros de sécurité sociale et permis de conduire, et plus de 1,4 milliard de dollars de coûts pour l'entreprise.\n\n" +
            "Cette histoire tient en trois mots que tout le monde confond : il existait une **vulnérabilité** (le Struts non patché), une **menace** active (des groupes qui scannaient Internet à la recherche de cette faille précise dès les jours suivant sa publication), et donc un **risque** énorme. Le jour où tu utilises ces trois mots correctement, tu pries différemment : tu sais quoi corriger en premier.\n\n" +
            "## Les définitions qui servent à prioriser\n\n" +
            "- **Menace** (threat) : ce qui pourrait mal tourner, et qui a une intention ou une cause. Un groupe de rançongiciel, un employé négligent, un concurrent, une panne électrique, une crue.\n" +
            "- **Vulnérabilité** : une faiblesse exploitable. Un logiciel non patché, un mot de passe par défaut, un partage réseau ouvert à tous, une porte de local technique jamais fermée.\n" +
            "- **Risque** : la rencontre des deux, pondérée par l'impact. Risque ≈ probabilité qu'une menace exploite une vulnérabilité × gravité si ça arrive.\n\n" +
            "Une vulnérabilité sans menace crédible reste théorique : une faille dans un logiciel qui tourne sur une machine isolée, sans réseau, dans un coffre, ne vaut pas une alerte de nuit. Une menace sans vulnérabilité correspondante ne se réalise pas. C'est l'intersection qui coûte cher, et c'est elle qu'on cherche. Chez Equifax, l'intersection était béante : faille connue publiquement, exploitée activement dans la nature, sur un serveur exposé à Internet contenant les données les plus sensibles du pays.\n\n" +
            "## La surface d'attaque : compter ses portes\n\n" +
            "La **surface d'attaque**, c'est l'ensemble des points par lesquels un attaquant peut entrer ou interagir avec ton système : ports ouverts, formulaires web, API, comptes utilisateurs, boîtes mail, clés USB, sous-traitants qui ont un accès, instances cloud oubliées. Réduire la surface d'attaque est souvent le geste le plus rentable de toute la sécurité. Un port fermé ne peut pas être attaqué. Un compte supprimé ne peut pas être compromis. Un service désinstallé n'a plus besoin d'être patché.\n\n" +
            "```figure\n" +
            "{\"caption\": \"La surface d'attaque : chaque point d'entrée exposé est une porte à surveiller ou à fermer\"}\n" +
            "<svg viewBox=\"0 0 640 340\" role=\"img\"><title>Surface d'attaque d'un système</title><g font-family=\"ui-monospace, monospace\" font-size=\"13\"><rect x=\"225\" y=\"120\" width=\"190\" height=\"100\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.8\"/><text x=\"320\" y=\"162\" text-anchor=\"middle\" fill=\"currentColor\">Ton système</text><text x=\"320\" y=\"182\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">(données, services)</text><g stroke=\"currentColor\" opacity=\"0.6\"><line x1=\"120\" y1=\"60\" x2=\"235\" y2=\"125\"/><line x1=\"520\" y1=\"60\" x2=\"405\" y2=\"125\"/><line x1=\"70\" y1=\"170\" x2=\"220\" y2=\"170\"/><line x1=\"570\" y1=\"170\" x2=\"420\" y2=\"170\"/><line x1=\"120\" y1=\"290\" x2=\"235\" y2=\"218\"/><line x1=\"520\" y1=\"290\" x2=\"405\" y2=\"218\"/></g><text x=\"115\" y=\"48\" text-anchor=\"middle\" fill=\"currentColor\">Ports exposés</text><text x=\"525\" y=\"48\" text-anchor=\"middle\" fill=\"currentColor\">Formulaires, API</text><text x=\"65\" y=\"158\" text-anchor=\"end\" fill=\"currentColor\">Comptes, mots de passe</text><text x=\"575\" y=\"158\" fill=\"currentColor\">Emails reçus</text><text x=\"115\" y=\"312\" text-anchor=\"middle\" fill=\"currentColor\">USB, postes</text><text x=\"525\" y=\"312\" text-anchor=\"middle\" fill=\"currentColor\">Sous-traitants, cloud</text><rect x=\"55\" y=\"152\" width=\"4\" height=\"4\" class=\"fig-accent\"/><text x=\"320\" y=\"268\" text-anchor=\"middle\" class=\"fig-accent\" font-size=\"13\">chaque trait = une porte : fermer &gt; surveiller &gt; espérer</text></g></svg>\n" +
            "```\n\n" +
            "Un exemple concret, vu mille fois : une entreprise expose un serveur d'administration à distance (RDP, port 3389) sur Internet « le temps du télétravail ». Les scanners automatisés type Shodan la trouvent en quelques heures, et les tentatives de connexion par force brute commencent le jour même. Fermer ce port ou le passer derrière un VPN supprime toute une classe d'attaques d'un coup. Chaque fonctionnalité ajoutée, chaque outil SaaS adopté, chaque intégration agrandit la surface. La sécurité et le « toujours plus de features » sont en tension permanente, et c'est toi qui arbitres.\n\n" +
            "## Le modèle de menace : contre qui, exactement ?\n\n" +
            "Dernier outil, le plus sous-coté : le **modèle de menace** (threat model). Se protéger « contre les hackers » ne veut rien dire. Un cambrioleur opportuniste, un cambrioleur qui te vise toi, et un service de renseignement ne se contrent pas avec les mêmes moyens. Le modèle de menace, c'est répondre posément à quatre questions :\n\n" +
            "1. **Qu'est-ce que je protège ?** (mes données clients, mon code source, ma trésorerie, ma réputation)\n" +
            "2. **Contre qui ?** L'écrasante majorité des PME affronte des attaquants opportunistes et automatisés : ils scannent tout Internet et prennent ce qui s'ouvre. Viennent ensuite le cybercrime organisé (ransomware, fraude au virement), l'insider négligent ou mécontent, et, pour une minorité, des acteurs étatiques.\n" +
            "3. **Quelle vraisemblance ?** Un ransomware opportuniste : très probable pour tout le monde. Un espionnage ciblé : dépend de ton secteur.\n" +
            "4. **Quel impact ?** Perdre une journée de travail, ou fermer boutique ?\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le modèle de menace en quatre questions : de l'actif aux priorités de défense\"}\n" +
            "<svg viewBox=\"0 0 640 300\" role=\"img\"><title>Modèle de menace en quatre questions</title><g font-family=\"ui-monospace, monospace\" font-size=\"12\"><rect x=\"20\" y=\"40\" width=\"130\" height=\"56\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"85\" y=\"62\" text-anchor=\"middle\" fill=\"currentColor\">1. Quoi</text><text x=\"85\" y=\"80\" text-anchor=\"middle\" fill=\"currentColor\">protéger ?</text><rect x=\"175\" y=\"40\" width=\"130\" height=\"56\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"240\" y=\"62\" text-anchor=\"middle\" fill=\"currentColor\">2. Contre</text><text x=\"240\" y=\"80\" text-anchor=\"middle\" fill=\"currentColor\">qui ?</text><rect x=\"330\" y=\"40\" width=\"130\" height=\"56\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"395\" y=\"62\" text-anchor=\"middle\" fill=\"currentColor\">3. Quelle</text><text x=\"395\" y=\"80\" text-anchor=\"middle\" fill=\"currentColor\">vraisemblance ?</text><rect x=\"485\" y=\"40\" width=\"135\" height=\"56\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"552\" y=\"62\" text-anchor=\"middle\" fill=\"currentColor\">4. Quel</text><text x=\"552\" y=\"80\" text-anchor=\"middle\" fill=\"currentColor\">impact ?</text><g stroke=\"currentColor\" opacity=\"0.5\"><line x1=\"150\" y1=\"68\" x2=\"175\" y2=\"68\"/><line x1=\"305\" y1=\"68\" x2=\"330\" y2=\"68\"/><line x1=\"460\" y1=\"68\" x2=\"485\" y2=\"68\"/></g><text x=\"85\" y=\"120\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\">base clients</text><text x=\"240\" y=\"120\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\">opportuniste ?</text><text x=\"240\" y=\"136\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\">crime organisé ?</text><text x=\"395\" y=\"120\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\">très probable</text><text x=\"552\" y=\"120\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.55\">arrêt total ?</text><line x1=\"320\" y1=\"160\" x2=\"320\" y2=\"195\" stroke=\"currentColor\" opacity=\"0.5\"/><polygon points=\"314,193 326,193 320,205\" fill=\"currentColor\" opacity=\"0.5\"/><rect x=\"170\" y=\"210\" width=\"300\" height=\"56\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"320\" y=\"233\" text-anchor=\"middle\" fill=\"currentColor\">Priorités de défense</text><text x=\"320\" y=\"252\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">l'effort va où risque × impact est max</text></g></svg>\n" +
            "```\n\n" +
            "Ce petit exercice évite les deux erreurs symétriques : dépenser une fortune contre un adversaire qui ne te vise pas, et laisser grande ouverte la porte que les attaquants automatisés testent toutes les heures. Il te donne aussi un argument face à un vendeur de solution miracle : « contre quelle menace de mon modèle, exactement ? »\n\n" +
            "## À toi\n\n" +
            "Fais le modèle de menace d'une boutique en ligne artisanale (deux personnes, un site sous Shopify, une boîte Gmail, 3 000 clients en base). Liste l'actif principal, les deux menaces les plus vraisemblables et la première mesure pour chacune.\n\n" +
            "> Correction possible : l'actif principal est le compte email, car il permet de réinitialiser tous les autres accès, y compris Shopify et la banque. Menace n°1 : le phishing et le vol d'identifiants (opportuniste, massif) → MFA sur Gmail et Shopify, en priorité absolue. Menace n°2 : la fraude au virement ou au faux fournisseur → une règle simple : tout changement de RIB se vérifie par téléphone au numéro déjà connu. Remarque ce qui n'apparaît pas : pas de pare-feu à 10 000 €, pas d'audit de code. Le modèle de menace a orienté l'effort vers ce qui sera réellement tenté.\n\n" +
            "Deux principes traverseront tout le cours à partir d'ici : la **défense en profondeur** (empiler des couches, car aucune n'est parfaite ; on la détaillera avec un schéma dans la partie réseau) et le **moindre privilège** (chaque personne, chaque service n'a que les droits strictement nécessaires : le stagiaire n'est pas administrateur du domaine, l'application web n'a pas le droit de supprimer des tables). Garde-les en tête, on va les croiser dans chaque partie.",
        },
        {
          id: "l3",
          title: "Quiz : Fondamentaux",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q1",
              prompt:
                "Un site e-commerce est mis hors ligne par une attaque par déni de service. Aucune donnée n'est volée ni modifiée. Quelle propriété de la triade CIA est atteinte ?",
              options: ["Confidentialité", "Intégrité", "Disponibilité", "Aucune des trois"],
              correctIndex: 2,
              explanation:
                "Rien n'est lu ni altéré : c'est la capacité du service à répondre qui est visée, donc la disponibilité. C'est justement l'angle privilégié des attaques DDoS et de nombreux ransomwares.",
            },
            {
              id: "q2",
              prompt:
                "Une entreprise utilise partout la version 1.2 d'une bibliothèque connue pour une faille critique, mais son réseau interne est totalement isolé d'Internet et aucun code externe ne s'y exécute. Comment qualifier la situation ?",
              options: [
                "Un risque élevé, car la vulnérabilité existe",
                "Une vulnérabilité réelle mais un risque faible faute de menace exploitable",
                "Ni vulnérabilité ni risque",
                "Une menace, pas une vulnérabilité",
              ],
              correctIndex: 1,
              explanation:
                "La faiblesse (vulnérabilité) est bien là, mais sans chemin d'attaque crédible la menace ne peut pas l'exploiter. Le risque, produit des deux, reste faible. C'est pourquoi on ne patche pas tout avec la même urgence : on regarde l'exposition réelle. Chez Equifax, c'était l'inverse : faille connue, serveur exposé, données massives.",
            },
            {
              id: "q3",
              prompt: "Quel geste réduit le plus directement la surface d'attaque ?",
              options: [
                "Ajouter un antivirus supplémentaire",
                "Fermer un port d'administration exposé sur Internet et le placer derrière un VPN",
                "Augmenter la fréquence des sauvegardes",
                "Former les employés au phishing",
              ],
              correctIndex: 1,
              explanation:
                "La surface d'attaque, ce sont les points d'entrée exposés. Fermer un service accessible depuis Internet en supprime un entièrement. Les autres options sont utiles mais renforcent des couches sans réduire l'exposition elle-même.",
            },
            {
              id: "q4",
              prompt:
                "Le principe du moindre privilège appliqué à une application web se traduit concrètement par :",
              options: [
                "Donner à l'application un compte base de données administrateur pour éviter les erreurs",
                "Donner à l'application uniquement les droits SQL dont elle a besoin (par ex. lecture/écriture sur certaines tables, pas DROP)",
                "Chiffrer le trafic entre l'application et la base",
                "Mettre l'application derrière un pare-feu",
              ],
              correctIndex: 1,
              explanation:
                "Le moindre privilège limite les droits au strict nécessaire. Si l'appli n'a pas le droit de supprimer des tables, une injection SQL réussie fait beaucoup moins de dégâts. Chiffrement et pare-feu sont d'autres couches, pas le moindre privilège.",
            },
            {
              id: "q21",
              prompt:
                "Une association de quartier (10 bénévoles, un site vitrine, un fichier adhérents) demande si elle doit investir dans une protection contre l'espionnage étatique. Que lui répond un bon modèle de menace ?",
              options: [
                "Oui, il faut toujours se protéger contre l'adversaire le plus fort",
                "Non : ses menaces vraisemblables sont le phishing et les attaques automatisées ; l'effort doit aller au MFA, aux mises à jour et aux sauvegardes",
                "Non, une association n'a aucune menace à craindre",
                "Oui, car les attaques étatiques sont les plus fréquentes statistiquement",
              ],
              correctIndex: 1,
              explanation:
                "Le modèle de menace croise vraisemblance et impact. Pour cette association, l'adversaire réaliste est opportuniste et automatisé : c'est contre lui qu'il faut dépenser l'énergie. Se protéger d'un service de renseignement qui ne vous vise pas, c'est du budget brûlé pendant que la porte réellement testée reste ouverte.",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      title: "L'humain, cible numéro un",
      lessons: [
        {
          id: "l4",
          title: "Phishing et ingénierie sociale",
          type: "text",
          duration: "18 min",
          body:
            "## La visioconférence à 25 millions de dollars\n\n" +
            "Janvier 2024, Hong Kong. Un employé du service financier du cabinet d'ingénierie britannique Arup reçoit un mail du « directeur financier » évoquant une transaction confidentielle. Méfiant, il hésite, jusqu'à la visioconférence qui suit, où il reconnaît le directeur financier et plusieurs collègues, visages et voix à l'appui. Rassuré, il exécute quinze virements, pour un total d'environ 200 millions de dollars de Hong Kong, soit 25,6 millions de dollars US. Tous les participants de la réunion, sauf lui, étaient des deepfakes générés à partir de vidéos publiques. L'affaire est documentée par la police de Hong Kong, et Arup a confirmé être l'entreprise visée.\n\n" +
            "Retiens deux choses de cette histoire. D'abord, la victime avait eu le bon réflexe initial : douter. C'est le canal de vérification qui a été piégé. Ensuite, aucun exploit technique là-dedans : pas de faille logicielle, pas de malware. Juste de l'**ingénierie sociale**, l'art de manipuler quelqu'un pour qu'il livre une information ou fasse une action contre son intérêt. Le **phishing** (hameçonnage) en est la forme industrialisée : un message qui se fait passer pour une source de confiance.\n\n" +
            "## Les leviers ne changent jamais\n\n" +
            "Les outils évoluent (l'IA générative écrit maintenant des mails sans fautes et clone des voix avec quelques secondes d'audio), mais les leviers psychologiques sont les mêmes depuis toujours :\n\n" +
            "- **Urgence** : « votre compte sera suspendu dans 24 h », « virement à faire avant la clôture ».\n" +
            "- **Autorité** : le PDG, la banque, les impôts, la gendarmerie.\n" +
            "- **Peur** : « activité suspecte détectée », « votre colis est bloqué en douane ».\n" +
            "- **Appât du gain** : remboursement, prime, cadeau.\n\n" +
            "Quand un message active un de ces leviers, ton cerveau passe en mode réflexe. C'est exactement le moment où il faut ralentir.\n\n" +
            "## Le bestiaire, version courante\n\n" +
            "- **Spear phishing** : ciblé, personnalisé avec ton nom, ton poste, un projet en cours. Beaucoup plus crédible que le spam de masse.\n" +
            "- **Fraude au président (BEC)** : un faux mail de dirigeant ou de fournisseur demande un virement ou un changement de RIB. D'après les rapports annuels IC3 du FBI, le BEC cause chaque année plusieurs milliards de dollars de pertes déclarées, plus que le ransomware.\n" +
            "- **Smishing** (SMS) : le faux avis de passage Chronopost, la fausse amende, la vignette Crit'Air à 3,70 € (le montant est petit exprès : ce que veut l'attaquant, c'est ta carte bancaire complète).\n" +
            "- **Vishing** (appel vocal) : le grand classique français de ces dernières années est le **faux conseiller bancaire** : l'escroc appelle en affichant le vrai numéro de ta banque (le spoofing d'affichage est trivial), annonce des opérations frauduleuses en cours, et te fait « sécuriser » ton compte en validant… ses propres virements. La Cour de cassation a d'ailleurs jugé en 2023 qu'une victime piégée par un appel affichant le numéro de sa banque n'était pas fautive par négligence grave, ce qui oblige la banque à rembourser dans ce type de cas.\n" +
            "- **Quishing** : un QR code piégé, collé sur un horodateur, une borne de recharge ou glissé dans un mail (le QR passe sous les radars des filtres qui analysent les liens).\n\n" +
            "## Anatomie d'une attaque, et où elle casse\n\n" +
            "```figure\n" +
            "{\"caption\": \"La chaîne d'attaque du phishing : chaque maillon est une occasion de casser l'attaque\"}\n" +
            "<svg viewBox=\"0 0 640 330\" role=\"img\"><title>Chaîne d'attaque du phishing et défenses à chaque étape</title><g font-family=\"ui-monospace, monospace\" font-size=\"12\"><rect x=\"15\" y=\"60\" width=\"105\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"67\" y=\"81\" text-anchor=\"middle\" fill=\"currentColor\">Appât</text><text x=\"67\" y=\"98\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">mail/SMS/QR</text><rect x=\"143\" y=\"60\" width=\"95\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"190\" y=\"81\" text-anchor=\"middle\" fill=\"currentColor\">Clic</text><text x=\"190\" y=\"98\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">urgence</text><rect x=\"261\" y=\"60\" width=\"110\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"316\" y=\"81\" text-anchor=\"middle\" fill=\"currentColor\">Page piégée</text><text x=\"316\" y=\"98\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">faux domaine</text><rect x=\"394\" y=\"60\" width=\"110\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"449\" y=\"81\" text-anchor=\"middle\" fill=\"currentColor\">Identifiants</text><text x=\"449\" y=\"98\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">saisis/volés</text><rect x=\"527\" y=\"60\" width=\"100\" height=\"52\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"577\" y=\"81\" text-anchor=\"middle\" fill=\"currentColor\">Compte</text><text x=\"577\" y=\"98\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">compromis</text><g stroke=\"currentColor\" opacity=\"0.5\"><line x1=\"120\" y1=\"86\" x2=\"143\" y2=\"86\"/><line x1=\"238\" y1=\"86\" x2=\"261\" y2=\"86\"/><line x1=\"371\" y1=\"86\" x2=\"394\" y2=\"86\"/><line x1=\"504\" y1=\"86\" x2=\"527\" y2=\"86\"/></g><g stroke=\"currentColor\" opacity=\"0.4\" stroke-dasharray=\"3 3\"><line x1=\"67\" y1=\"112\" x2=\"67\" y2=\"165\"/><line x1=\"190\" y1=\"112\" x2=\"190\" y2=\"165\"/><line x1=\"316\" y1=\"112\" x2=\"316\" y2=\"165\"/><line x1=\"449\" y1=\"112\" x2=\"449\" y2=\"165\"/><line x1=\"577\" y1=\"112\" x2=\"577\" y2=\"165\"/></g><rect x=\"15\" y=\"170\" width=\"105\" height=\"66\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"67\" y=\"196\" text-anchor=\"middle\" fill=\"currentColor\">filtrage +</text><text x=\"67\" y=\"213\" text-anchor=\"middle\" fill=\"currentColor\">signalement</text><rect x=\"143\" y=\"170\" width=\"95\" height=\"66\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"190\" y=\"196\" text-anchor=\"middle\" fill=\"currentColor\">ralentir,</text><text x=\"190\" y=\"213\" text-anchor=\"middle\" fill=\"currentColor\">vérifier URL</text><rect x=\"261\" y=\"170\" width=\"110\" height=\"66\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"316\" y=\"196\" text-anchor=\"middle\" fill=\"currentColor\">gestionnaire ne</text><text x=\"316\" y=\"213\" text-anchor=\"middle\" fill=\"currentColor\">remplit pas</text><rect x=\"394\" y=\"170\" width=\"110\" height=\"66\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"449\" y=\"196\" text-anchor=\"middle\" fill=\"currentColor\">passkey refuse</text><text x=\"449\" y=\"213\" text-anchor=\"middle\" fill=\"currentColor\">le faux domaine</text><rect x=\"527\" y=\"170\" width=\"100\" height=\"66\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"577\" y=\"196\" text-anchor=\"middle\" fill=\"currentColor\">alertes +</text><text x=\"577\" y=\"213\" text-anchor=\"middle\" fill=\"currentColor\">moindre priv.</text><text x=\"320\" y=\"290\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">l'attaque doit réussir chaque maillon ; toi, tu n'as besoin d'en casser qu'un</text></g></svg>\n" +
            "```\n\n" +
            "Ce schéma explique un point que le grand public rate souvent : les défenses se cumulent. Même si tu cliques (maillon 2), un gestionnaire de mots de passe qui refuse de remplir sur `paypa1-secure.com` casse le maillon 3. Même si tu tapes ton mot de passe, une passkey ou une clé FIDO2 ne s'authentifie pas sur le faux domaine. Attention en revanche aux kits de phishing dits AitM (adversary-in-the-middle), comme ceux vendus en abonnement sous les noms Evilginx ou Tycoon 2FA : la fausse page relaie tout en temps réel vers le vrai site, y compris ton code à 6 chiffres, et récupère le cookie de session. Un code TOTP ne protège donc pas d'une page piégée bien faite. On verra dans la leçon MFA pourquoi les passkeys, elles, résistent par construction.\n\n" +
            "## Les signaux qui doivent alerter\n\n" +
            "1. **L'adresse d'expéditeur** ne correspond pas au domaine légitime (regarde après le @, pas le nom affiché).\n" +
            "2. **Le lien** ne pointe pas là où il prétend. Survole-le : `paypa1-secure.com` n'est pas `paypal.com`.\n" +
            "3. Une **demande inhabituelle**, urgente, qui contourne les procédures, surtout si elle touche à l'argent ou aux identifiants.\n" +
            "4. Une **pièce jointe** inattendue : `.zip`, `.iso`, ou un document qui réclame d'« activer les macros ».\n" +
            "5. Un **canal qui descend en gamme** : la banque n'a jamais besoin que tu valides quoi que ce soit par téléphone séance tenante.\n\n" +
            "> La règle qui sauve : toute demande sensible se vérifie par un **autre canal, que tu choisis toi-même**. Un mail du comptable qui change un RIB ? Tu l'appelles sur le numéro que tu connais déjà. Ta « banque » t'appelle ? Tu raccroches et tu rappelles le numéro au dos de ta carte. Depuis l'affaire Arup, ajoute : une visio ne vaut pas vérification pour un virement exceptionnel (un rappel téléphonique sortant, si).\n\n" +
            "## À toi\n\n" +
            "Trois messages arrivent. (a) Un SMS : « Chronopost : votre colis attend, régularisez 1,45 € : chrono-suivi-colis.net ». (b) Un mail de `no-reply@github.com` t'informant d'une connexion depuis un nouvel appareil, avec un lien vers `github.com/settings/security`. (c) Un appel du « service fraude » de ta banque qui te demande de valider une notification dans ton appli « pour annuler un virement suspect ». Classe-les.\n\n" +
            "> Correction : (a) smishing classique : domaine sans rapport, micro-montant, urgence ; on supprime et on transfère au 33700, la plateforme française de signalement des SMS frauduleux. (b) plausible et légitime en l'état : le domaine est le bon ; le bon réflexe reste d'ouvrir GitHub soi-même plutôt que de cliquer. (c) vishing quasi certain : une banque ne fait jamais valider une opération pour l'« annuler ». Valider la notification exécuterait le virement de l'escroc. On raccroche, on rappelle le numéro officiel.\n\n" +
            "Dernier point, trop négligé : le phishing n'est pas qu'une affaire de vigilance individuelle. Une organisation qui rend la vérification impossible (aucune procédure de contre-appel, pression au « fais vite », dirigeants qui exigent des exceptions) fabrique ses propres victimes. Les process comptent autant que la formation. Et un phishing signalé tôt à l'équipe sécurité, c'est des dizaines de collègues prévenus avant de cliquer.",
        },
        {
          id: "l5",
          title: "Démonstration : décortiquer un email de phishing",
          type: "video",
          duration: "12 min",
          videoLabel: "Analyse en direct des en-têtes et de l'URL d'un vrai message frauduleux",
          body:
            "## Ce que montre la démonstration\n\n" +
            "On prend un email qui se présente comme une notification de livraison d'un transporteur connu, et on l'ouvre dans un environnement sûr (client mail en mode texte, aucun clic sur les liens). L'objectif : montrer où regarder, dans l'ordre.\n\n" +
            "## Étape 1 : l'expéditeur réel\n\n" +
            "Le nom affiché dit « Suivi Colis Express ». Mais en affichant l'adresse complète, on lit `notif@track-colis-livraison.info`. Le domaine `.info` bricolé, sans rapport avec le vrai transporteur, est déjà un signal fort. Le nom affiché est cosmétique, il ne prouve rien.\n\n" +
            "## Étape 2 : les en-têtes\n\n" +
            "On ouvre les en-têtes techniques (dans Gmail : menu des trois points, « Afficher l'original »). On y cherche trois lignes :\n\n" +
            "- **SPF** : le serveur qui a envoyé le mail est-il autorisé pour ce domaine ?\n" +
            "- **DKIM** : la signature cryptographique du message est-elle valide ?\n" +
            "- **DMARC** : la politique du domaine est-elle respectée ?\n\n" +
            "Sur notre exemple, on lit `spf=fail` et `dkim=none`. Autrement dit, personne n'a prouvé que ce mail vient vraiment de qui il prétend. Un mail légitime d'une grande entreprise passe presque toujours ces contrôles.\n\n" +
            "## Étape 3 : l'URL sans cliquer\n\n" +
            "Le bouton « Suivre mon colis » affiche une belle URL, mais en survolant on voit la vraie destination en bas du client mail : `http://track-colis-livraison.info/verif?id=...`. Deux détails : `http` sans `s` (pas de chiffrement), et le domaine douteux. On peut aussi copier l'URL et l'analyser sur un service comme VirusTotal, sans jamais l'ouvrir dans un navigateur.\n\n" +
            "## Étape 4 : la charge\n\n" +
            "La page finale, qu'on n'ouvre que dans une machine jetable, réclame le paiement de « frais de douane » de 1,99 € avec la carte bancaire. Le montant est minuscule exprès : il paraît anodin, mais ce qui compte pour l'attaquant, c'est le numéro de carte complet.\n\n" +
            "> À retenir : on lit un mail suspect de l'extérieur vers l'intérieur (expéditeur, en-têtes, URL), sans jamais interagir. Le clic est la dernière chose qu'on fait, et seulement après avoir levé le doute.\n\n" +
            "En entreprise, le bon réflexe n'est pas seulement de supprimer : on **signale** le message à l'équipe sécurité, car un phishing arrive rarement à une seule personne. Côté particulier, la France a des canaux dédiés : les SMS frauduleux se transfèrent au 33700, les mails se signalent sur signal-spam.fr, et en cas de doute ou de pépin, cybermalveillance.gouv.fr (et son parcours 17Cyber) oriente vers les bons réflexes et les bons interlocuteurs.",
        },
        {
          id: "l6",
          title: "Mots de passe : entropie, gestionnaire et fuites",
          type: "text",
          duration: "18 min",
          body:
            "## 14 000 mots de passe, 6,9 millions de victimes\n\n" +
            "En octobre 2023, la société de tests génétiques 23andMe révèle une fuite massive. Les attaquants n'ont exploité aucune faille du site : ils ont rejoué des couples email/mot de passe issus de fuites d'autres services, et environ 14 000 comptes se sont ouverts parce que leurs propriétaires réutilisaient le même mot de passe partout. De là, via la fonction de partage familial « DNA Relatives », les attaquants ont aspiré les données de 6,9 millions de personnes : ascendance, correspondances génétiques, parfois données de santé. L'affaire s'est soldée par une action collective et un accord à 30 millions de dollars. Quatorze mille mots de passe réutilisés, sept millions de victimes : voilà l'arithmétique du **credential stuffing**.\n\n" +
            "## Le problème n'est pas la complexité, c'est la longueur et l'unicité\n\n" +
            "Pendant vingt ans on a imposé des règles absurdes : une majuscule, un chiffre, un caractère spécial, changement tous les 90 jours. Résultat : `Printemps2024!` partout, et des post-it sous les claviers. Les recommandations actuelles du NIST américain (la ligne directrice SP 800-63B, révisée en ce sens) ont acté le virage : on privilégie des mots de passe **longs**, **uniques** par service, on vérifie qu'ils ne figurent pas dans les fuites connues, et on n'impose plus ni règles de composition arbitraires ni changement périodique sans indice de compromission.\n\n" +
            "La bonne mesure, c'est l'**entropie** : le nombre de possibilités qu'un attaquant doit essayer. Elle croît doucement avec la taille de l'alphabet, mais explose avec la longueur. Une phrase de passe de quatre ou cinq mots tirés au hasard (`girafe-tunnel-brique-orage`) est à la fois mémorisable et hors de portée d'une attaque par force brute. Un `P@ss1!` court est faible malgré ses symboles, et un mot de passe « complexe » construit sur un schéma humain (mot + année + point d'exclamation) tombe en secondes face à un outil qui connaît les schémas humains.\n\n" +
            "L'ampleur du problème côté attaquant : en juillet 2024, un fichier baptisé RockYou2024 a circulé sur les forums criminels (une compilation frôlant les 10 milliards de mots de passe issus de fuites accumulées). Les attaquants ne « devinent » plus grand-chose : ils rejouent l'existant.\n\n" +
            "## Pourquoi l'unicité est vitale\n\n" +
            "Le vrai danger, c'est la réutilisation. Quand un site se fait pirater et que sa base fuite, les couples email/mot de passe partent dans ces compilations, et des botnets les essaient partout ailleurs : banques, messageries, réseaux sociaux, 23andMe. Si ton mot de passe de forum de jeu est aussi celui de ta boîte mail, la fuite du forum donne ta boîte mail, et ta boîte mail permet de réinitialiser tout le reste.\n\n" +
            "Vérifie si tes adresses ont déjà fuité sur [Have I Been Pwned](https://haveibeenpwned.com), le service gratuit du chercheur Troy Hunt, qui agrège des milliards d'identifiants issus de fuites publiques. Active ses alertes : tu seras prévenu à la prochaine fuite d'un service où tu es inscrit. Si un mot de passe y apparaît, considère-le comme mort, partout.\n\n" +
            "## Le gestionnaire de mots de passe\n\n" +
            "Un humain ne peut pas retenir 80 mots de passe uniques de 16 caractères. C'est le rôle du **gestionnaire de mots de passe**. Le principe :\n\n" +
            "- Tu retiens **un seul** mot de passe maître, long et jamais réutilisé.\n" +
            "- Le gestionnaire génère et stocke un mot de passe aléatoire différent pour chaque site.\n" +
            "- Le coffre est chiffré **localement**, avant toute synchronisation : même l'éditeur ne peut pas lire tes secrets.\n\n" +
            "Concrètement, en 2026, les options sérieuses : **Bitwarden** (open source, offre gratuite complète, Premium à 10 $ par an pour les codes TOTP intégrés et les rapports de fuite), **1Password** (environ 3,99 $ par mois, très soigné, pas d'offre gratuite), **KeePassXC** (gratuit, open source, 100 % local : à toi de gérer la synchronisation du fichier de coffre), **Proton Pass** (offre gratuite correcte, Plus autour de 2 € par mois). Je te déconseille de laisser tes mots de passe uniquement dans le trousseau du navigateur d'un compte sans MFA : celui qui prend ta session Google prend tout. Mon choix par défaut pour débuter : Bitwarden gratuit (tu pourras toujours migrer, tous ces outils s'exportent).\n\n" +
            "Le bénéfice caché du gestionnaire, on l'a vu dans la leçon phishing : le remplissage automatique est lié au **domaine exact**. Sur `paypa1.com`, il ne propose rien. Il vient de t'éviter un phishing sans que tu réfléchisses.\n\n" +
            "Un mot sur un incident qui a marqué le secteur : fin 2022, LastPass a vu des coffres clients chiffrés exfiltrés après la compromission du poste personnel d'un de ses ingénieurs. Les coffres restaient chiffrés, mais les maîtres faibles ont pu être cassés hors ligne. Moralité, pas « les gestionnaires sont dangereux » (l'alternative, la réutilisation, est bien pire), mais : le mot de passe maître doit être long, et l'éditeur doit avoir une architecture zéro-connaissance sérieuse.\n\n" +
            "> Choisis un mot de passe maître de quatre à cinq mots sans rapport entre eux, que tu peux taper de mémoire. Note-le une fois sur papier, range le papier en lieu sûr, et n'y touche plus. Un maître oublié = coffre irrécupérable, par conception : c'est le prix du chiffrement de bout en bout, et c'est voulu.\n\n" +
            "## À toi\n\n" +
            "Classe ces quatre mots de passe du plus faible au plus solide, et justifie : (1) `Ax7!q@` ; (2) `Marseille2025!` ; (3) `correct-cheval-agrafe-nuage-13` ; (4) le même `hiver!Doux88` utilisé sur 12 sites.\n\n" +
            "> Correction : le pire est (4) ; sa solidité intrinsèque n'a aucune importance, une seule fuite le grille sur les 12 sites. Puis (2) : long en apparence, mais construit sur le schéma ville+année+ponctuation que tous les outils de cassage testent en premier. Puis (1) : aléatoire mais 6 caractères, c'est une affaire de minutes pour du matériel moderne. Le meilleur est (3) : une trentaine de caractères, des mots sans lien, mémorisable. La longueur bat la « complexité », et l'unicité bat tout le reste.",
        },
        {
          id: "l7",
          title: "MFA et gestion des identités",
          type: "text",
          duration: "18 min",
          body:
            "## Uber, septembre 2022 : le MFA usé à la fatigue\n\n" +
            "Un soir de septembre 2022, un attaquant de 17 ans affilié au groupe Lapsus$ achète sur un marché criminel les identifiants d'un prestataire d'Uber, récoltés par un infostealer. Le mot de passe est bon, mais le compte a du MFA : chaque tentative de connexion envoie une notification push au prestataire. L'attaquant en envoie en rafale, pendant plus d'une heure, puis contacte sa cible sur WhatsApp en se faisant passer pour le support informatique d'Uber : « accepte la notification et ça s'arrêtera ». La victime accepte. Derrière, l'attaquant trouve sur le réseau interne des scripts contenant des identifiants d'administration, et se promène jusque dans les consoles AWS et Slack de l'entreprise. Uber a confirmé publiquement le déroulé.\n\n" +
            "Cette attaque, dite de **MFA fatigue**, dit deux choses : le MFA change radicalement la donne (sans lui, le mot de passe acheté aurait suffi, en silence), et toutes les formes de MFA ne se valent pas.\n\n" +
            "## Trois facteurs, pas trois mots de passe\n\n" +
            "L'authentification repose sur des **facteurs** de nature différente :\n\n" +
            "- Ce que tu **sais** : mot de passe, code PIN.\n" +
            "- Ce que tu **as** : téléphone, clé physique, carte.\n" +
            "- Ce que tu **es** : empreinte, visage.\n\n" +
            "Le MFA (authentification multifacteur, 2FA quand il y en a deux) combine des facteurs de **catégories différentes**. Deux mots de passe, ce n'est pas du MFA. Une question secrète non plus : c'est encore du « ce que tu sais ». Un mot de passe plus un code sur ton téléphone, oui.\n\n" +
            "L'intérêt est massif : même si ton mot de passe fuite (et statistiquement, il fuitera), l'attaquant bute sur le second facteur. Microsoft répète depuis des années que le MFA bloque l'écrasante majorité des attaques automatisées sur les comptes. C'est la mesure au meilleur rapport effort/résultat de tout ce cours.\n\n" +
            "## L'échelle de solidité, version 2026\n\n" +
            "1. **SMS** : mieux que rien, mais vulnérable au SIM swapping (l'attaquant se fait réattribuer ton numéro en boutique ou par le service client de l'opérateur). À réserver aux comptes sans autre option.\n" +
            "2. **Application TOTP** (Aegis sur Android, ou intégrée à Bitwarden/1Password) : un code à 6 chiffres qui change toutes les 30 secondes, hors ligne. Bon niveau. Limite vue dans la leçon phishing : un kit AitM qui relaie la page en temps réel capture aussi ce code.\n" +
            "3. **Notification push** : confortable, mais exposée à la MFA fatigue façon Uber. Les éditeurs ont réagi avec le **number matching** (il faut taper sur le téléphone un nombre affiché à l'écran de connexion), qui casse le scénario « accepte pour que ça s'arrête ».\n" +
            "4. **FIDO2 / WebAuthn** : clé physique (une YubiKey coûte dans les 60 €) ou **passkey**. Le standard le plus solide, car **résistant au phishing par construction** : la signature cryptographique intègre le domaine réel. Sur un faux site, l'authentification échoue, point. Il n'y a rien à « ne pas se faire voler », aucun code à taper au mauvais endroit.\n\n" +
            "## Les passkeys, concrètement\n\n" +
            "La passkey est une paire de clés cryptographiques : la clé privée reste dans ton téléphone, ton ordinateur ou ton gestionnaire (synchronisée via le trousseau iCloud, le gestionnaire Google, Bitwarden ou 1Password), et tu la déverrouilles par biométrie ou code local. Rien de secret ne transite ni n'est stocké côté site : plus de mot de passe à hameçonner, plus de base à faire fuiter. En 2026, l'essentiel des grands services les accepte (Google, Apple, Microsoft (qui propose même des comptes sans mot de passe du tout), Amazon, PayPal, GitHub, WhatsApp), et la connexion est franchement plus rapide qu'un mot de passe suivi d'un code.\n\n" +
            "Mon conseil d'ordre de bataille pour tes comptes perso : active une passkey ou une clé physique sur ta messagerie principale et ton gestionnaire de mots de passe (ce sont les comptes racines, ceux qui permettent de réinitialiser les autres), du TOTP partout ailleurs, et garde des **codes de récupération** imprimés quelque part de sûr (le MFA qui te verrouille dehors le jour où ton téléphone tombe dans l'eau, c'est un vrai scénario aussi).\n\n" +
            "## Au-delà du compte individuel : la gestion des identités\n\n" +
            "Dans une organisation, on gère des **identités** et leur cycle de vie, pas des comptes isolés :\n\n" +
            "- **SSO** (authentification unique) : un point d'entrée central, ce qui permet d'imposer le MFA partout d'un coup et de couper un accès d'un seul geste.\n" +
            "- **Provisioning / deprovisioning** : les bons accès à l'arrivée, tout couper **le jour du départ**. Les comptes d'anciens employés ou prestataires jamais désactivés sont une porte d'entrée classique : souviens-toi que l'attaque Uber est passée par un prestataire.\n" +
            "- **Revue périodique des accès** : qui a accès à quoi, et est-ce encore justifié ? Le moindre privilège, encore lui.\n\n" +
            "## À toi\n\n" +
            "Tu conseilles une PME de 30 personnes qui n'a aucun MFA. Budget limité, trois mois. Par quoi commences-tu, et avec quelle méthode ?\n\n" +
            "> Correction : d'abord la messagerie (c'est la racine de tout : réinitialisations, factures, RIB), en push avec number matching ou TOTP pour tout le monde (pas de SMS). En parallèle, clés FIDO2 ou passkeys pour les cinq comptes qui peuvent faire le plus mal : admins IT, direction, comptabilité (cibles du BEC). Ensuite le SSO si les outils le permettent, pour étendre sans friction. Et une procédure de secours écrite (codes de récupération, perte de téléphone) avant le déploiement, pas après : la première panne de MFA mal gérée, et tout le monde réclamera sa désactivation.",
        },
        {
          id: "l8",
          title: "Quiz : L'humain",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Tu reçois un mail du « directeur financier » demandant un virement urgent et confidentiel vers un nouveau fournisseur. Le style est correct et le nom exact. Quelle est la meilleure réaction ?",
              options: [
                "Exécuter, puisque le nom et le poste sont corrects",
                "Répondre au mail pour demander confirmation",
                "Vérifier par un autre canal connu (l'appeler sur son numéro habituel) avant toute action",
                "Demander une visioconférence pour vérifier son identité",
              ],
              correctIndex: 2,
              explanation:
                "C'est le scénario type de la fraude au président (BEC). Répondre au mail ne prouve rien : si le compte est usurpé, l'attaquant reçoit ta réponse. Et depuis l'affaire Arup (2024), on sait qu'une visio peut être entièrement deepfakée. Le contre-appel sortant, vers un numéro que tu connais déjà, reste la parade fiable.",
            },
            {
              id: "q6",
              prompt: "Pourquoi la réutilisation d'un mot de passe est-elle plus dangereuse que sa simplicité ?",
              options: [
                "Parce qu'un mot de passe réutilisé est toujours plus court",
                "Parce qu'une fuite sur un seul site permet le credential stuffing sur tous les autres comptes partageant ce mot de passe",
                "Parce que les mots de passe réutilisés expirent plus vite",
                "Ce n'est pas plus dangereux, les deux se valent",
              ],
              correctIndex: 1,
              explanation:
                "Le credential stuffing rejoue les couples email/mot de passe fuités sur d'autres services : c'est exactement ce qui est arrivé à 23andMe en 2023, où 14 000 comptes réutilisés ont exposé 6,9 millions de profils. Un mot de passe unique cloisonne le risque : la fuite d'un site n'affecte que ce site.",
            },
            {
              id: "q7",
              prompt:
                "Pour un compte très sensible et fréquemment ciblé par du phishing, quelle méthode de MFA offre la meilleure résistance au phishing ?",
              options: [
                "Un code reçu par SMS",
                "Un code TOTP d'une application d'authentification",
                "Une passkey ou une clé de sécurité physique FIDO2 / WebAuthn",
                "Une question secrète en plus du mot de passe",
              ],
              correctIndex: 2,
              explanation:
                "FIDO2/WebAuthn lie cryptographiquement l'authentification au domaine réel : sur un faux site, elle échoue, point. Un code TOTP ou SMS peut être saisi par la victime sur une page AitM qui le relaie en temps réel. Une question secrète n'est qu'un second « ce que tu sais », pas un vrai second facteur.",
            },
            {
              id: "q8",
              prompt:
                "Un gestionnaire de mots de passe ne propose pas de remplir automatiquement tes identifiants sur une page qui ressemble pourtant à ta banque. Qu'est-ce que cela indique probablement ?",
              options: [
                "Un bug du gestionnaire",
                "Que le domaine de la page ne correspond pas au domaine enregistré : possible site de phishing",
                "Que ton coffre est corrompu",
                "Qu'il faut désactiver le remplissage automatique",
              ],
              correctIndex: 1,
              explanation:
                "Le remplissage automatique est lié au domaine exact. S'il ne se déclenche pas, c'est souvent parce que l'URL n'est pas la bonne (par ex. un homoglyphe). Le gestionnaire vient de te signaler un phishing potentiel sans que tu aies eu à le repérer toi-même.",
            },
            {
              id: "q22",
              prompt:
                "Tu reçois une rafale de notifications push MFA que tu n'as pas demandées, puis un message « du support IT » te disant d'accepter pour faire cesser les alertes. Que se passe-t-il, et que fais-tu ?",
              options: [
                "Un bug de l'application : j'accepte pour resynchroniser",
                "Une attaque de MFA fatigue : quelqu'un a mon mot de passe ; je refuse tout, je change ce mot de passe et je préviens la sécurité",
                "Un test de l'équipe informatique : j'accepte une seule fois",
                "Rien de grave tant que je n'ai pas cliqué sur un lien",
              ],
              correctIndex: 1,
              explanation:
                "Des push non sollicités signifient qu'un attaquant possède déjà ton mot de passe et martèle le second facteur : le scénario exact de l'intrusion chez Uber en 2022. Accepter, même une fois, lui ouvre la porte. On refuse, on change le mot de passe compromis, on alerte. Le number matching des applis récentes rend ce scénario bien plus difficile.",
            },
            {
              id: "q23",
              prompt: "Qu'est-ce qui rend une passkey résistante au phishing, contrairement à un code TOTP ?",
              options: [
                "Elle est plus longue qu'un code à 6 chiffres",
                "Elle change plus souvent",
                "La signature est cryptographiquement liée au domaine réel : il n'y a aucun secret que la victime pourrait saisir sur un faux site",
                "Elle nécessite une connexion Internet permanente",
              ],
              correctIndex: 2,
              explanation:
                "Un TOTP reste un secret que l'humain peut taper au mauvais endroit, et qu'un kit AitM relaie en temps réel. Avec une passkey, il n'y a rien à taper : le navigateur signe un défi qui inclut le domaine, et cette signature ne vaut rien pour un autre domaine. La protection ne dépend plus de la vigilance de l'utilisateur.",
            },
          ],
        },
      ],
    },
    {
      id: "p3",
      title: "Malwares, ransomwares et cryptographie",
      lessons: [
        {
          id: "l9",
          title: "Panorama des malwares",
          type: "text",
          duration: "17 min",
          body:
            "## Snowflake, 2024 : pas de faille, juste des identifiants volés\n\n" +
            "Au printemps 2024, des attaquants aspirent les données de quelque 165 clients de la plateforme cloud Snowflake, dont Ticketmaster, avec environ 560 millions de lignes clients mises en vente. L'enquête de Mandiant conclut à un point remarquable : aucune faille de Snowflake. Les attaquants ont utilisé des identifiants valides, récoltés des mois voire des années plus tôt par des **infostealers** installés sur les postes d'employés et de prestataires (souvent via un logiciel craqué téléchargé sur un PC perso), et rejoués sur des comptes qui n'avaient pas de MFA. Le malware n'était pas la fin de l'attaque : il était le fournisseur discret d'une chaîne criminelle bien organisée.\n\n" +
            "Cette affaire fixe le décor : « malware » (logiciel malveillant) est un mot-valise, et si tu mets un virus des années 90 et un infostealer moderne dans le même sac, tu rates la façon dont on se défend. Classons par comportement.\n\n" +
            "## Le bestiaire, classé par comportement\n\n" +
            "- **Virus** : s'attache à un fichier ou programme légitime et se propage quand on l'exécute. Rare aujourd'hui sous sa forme historique.\n" +
            "- **Ver** (worm) : se propage tout seul de machine en machine via le réseau, sans action humaine. WannaCry, en mai 2017, a fait le tour du monde en un week-end en exploitant une faille Windows (MS17-010, dite EternalBlue) corrigée deux mois plus tôt ; le service de santé britannique a annulé environ 19 000 rendez-vous.\n" +
            "- **Cheval de Troie** (trojan) : se fait passer pour un logiciel utile. Le faux crack, le faux installeur, la pièce jointe piégée.\n" +
            "- **Rançongiciel** (ransomware) : chiffre tes fichiers et vend la clé. Leçon suivante.\n" +
            "- **Infostealer** : la grande industrie actuelle. RedLine, Lumma et consorts aspirent en quelques secondes mots de passe enregistrés dans le navigateur, cookies de session (ce qui contourne le MFA : la session est déjà ouverte), portefeuilles crypto, puis les « logs » sont vendus à la découpe sur des places de marché. C'est ce circuit qui a alimenté Snowflake. L'ampleur est telle qu'en mai 2025, une opération conjointe d'Europol, de Microsoft et du FBI a démantelé l'infrastructure de Lumma Stealer, saisissant plus de deux mille domaines.\n" +
            "- **Rootkit** : s'enfouit profondément dans le système pour rester invisible et persister.\n" +
            "- **Botnet** : ta machine devient un soldat d'une armée pilotée à distance (DDoS, spam, minage). Mirai, construit sur des caméras IP au mot de passe d'usine, a mis à genoux une partie du web américain en 2016.\n\n" +
            "## Comment un malware entre\n\n" +
            "Les vecteurs sont peu nombreux et connus :\n\n" +
            "1. Pièce jointe ou lien de phishing, toujours en tête.\n" +
            "2. Logiciel hors source officielle : cracks, faux installeurs. Variante moderne : le **malvertising**, une fausse publicité achetée sur un moteur de recherche pour « Notepad++ » ou « OBS » qui place un site piégé au-dessus du vrai résultat.\n" +
            "3. Exploitation d'une vulnérabilité non patchée exposée sur le réseau (le mode d'entrée de WannaCry).\n" +
            "4. Support amovible : la clé USB « trouvée » sur un parking fonctionne encore.\n" +
            "5. Chaîne d'approvisionnement : du code légitime piégé en amont. SolarWinds en 2020 (une mise à jour signée et vérolée installée chez 18 000 clients), et en mars 2024 la porte dérobée découverte in extremis dans xz Utils, une bibliothèque de compression au cœur de nombreuses distributions Linux, après des années d'infiltration patiente d'un mainteneur malveillant.\n\n" +
            "## Se défendre sans magie\n\n" +
            "L'antivirus moderne (en entreprise on parle d'**EDR**, Endpoint Detection and Response, qui surveille les comportements et pas seulement les signatures) aide vraiment, mais ce n'est pas une police d'assurance. Les couches qui comptent :\n\n" +
            "- **Patcher vite** : la plupart des vers exploitent des failles pour lesquelles un correctif existait déjà. WannaCry est l'exemple canonique : deux mois entre le patch et le carnage.\n" +
            "- **Moindre privilège** : un malware exécuté par un compte non-admin fait beaucoup moins de dégâts, et un infostealer ne vole que ce que la session peut atteindre.\n" +
            "- **Sources officielles uniquement**, macros désactivées par défaut, et méfiance envers les résultats sponsorisés des moteurs de recherche pour télécharger un logiciel.\n" +
            "- **Ne pas tout stocker dans le navigateur** : un gestionnaire de mots de passe verrouillé résiste mieux à un infostealer que le trousseau du navigateur, ouvert en permanence.\n" +
            "- **Sauvegardes** hors ligne : on y arrive dans la leçon suivante.\n\n" +
            "Apprends aussi à reconnaître les signaux d'une machine compromise : ventilateur à fond au repos (minage de cryptomonnaie), redirections ou fenêtres inattendues, extensions de navigateur que tu n'as jamais installées, ou des connexions et déconnexions étranges sur tes comptes. Aucun signal n'est une preuve à lui seul, mais deux ou trois ensemble méritent un scan complet et, surtout, un changement des mots de passe critiques depuis une machine saine : pas depuis la machine suspecte, où un keylogger capturerait les nouveaux.\n\n" +
            "## À toi\n\n" +
            "Associe chaque situation au type de malware le plus probable : (a) ton voisin télécharge « Photoshop gratuit » et, deux semaines plus tard, on lui vole sa session Steam et son portefeuille crypto sans qu'aucun fichier ne soit chiffré ; (b) une machine non patchée, jamais utilisée par personne, est infectée dans la nuit ; (c) ton routeur participe à des attaques DDoS sans symptôme visible.\n\n" +
            "> Correction : (a) infostealer livré par un faux installeur : vol silencieux d'identifiants et de cookies, aucune rançon ; (b) ver : la propagation sans action humaine par le réseau est sa signature ; (c) botnet : l'appareil compromis travaille pour quelqu'un d'autre, discrètement. Trois comportements, trois défenses prioritaires : sources officielles pour (a), patching pour (b), changement des mots de passe par défaut pour (c).\n\n" +
            "Tu remarqueras qu'aucune de ces défenses n'est un produit miracle. C'est un thème du cours : la sécurité, c'est surtout de l'hygiène tenue dans la durée.",
        },
        {
          id: "l10",
          title: "Anatomie d'une attaque ransomware",
          type: "text",
          duration: "18 min",
          body:
            "## Février 2024 : les pharmacies américaines en panne\n\n" +
            "Le 21 février 2024, Change Healthcare, la plateforme qui traite une grosse partie des transactions de santé américaines (ordonnances, remboursements), est chiffrée par un affilié du groupe ALPHV/BlackCat. Pendant des semaines, des pharmacies ne peuvent plus facturer les assurances, des cabinets ne sont plus payés. Le point d'entrée, reconnu par le PDG devant le Sénat américain : un portail d'accès distant Citrix **sans MFA**, ouvert avec des identifiants volés. L'entreprise paie 22 millions de dollars en bitcoin. Le groupe empoche et disparaît en arnaquant son propre affilié, lequel, toujours en possession des données, s'associe à un autre groupe pour une **seconde** extorsion. Bilan final annoncé : les données d'environ 190 millions d'Américains touchées, et plus de deux milliards de dollars de coûts de remédiation.\n\n" +
            "Tout y est : l'entrée banale, la rançon qui ne règle rien, la double extorsion. Déroulons la mécanique.\n\n" +
            "## Le déroulé typique\n\n" +
            "Une attaque moderne n'est pas un mail piégé qui chiffre tout en cinq minutes. C'est une opération en plusieurs jours, souvent menée par un **affilié** qui loue le ransomware à un groupe (le modèle RaaS, ransomware-as-a-service, avec partage des gains) et achète l'accès initial à un **courtier d'accès** :\n\n" +
            "1. **Accès initial** : phishing, identifiants volés par infostealer, ou service exposé (RDP, VPN ou Citrix vulnérable ou sans MFA).\n" +
            "2. **Élévation de privilèges** : l'attaquant cherche un compte administrateur. Un mot de passe faible ou une faille locale non patchée suffisent.\n" +
            "3. **Déplacement latéral** : il se propage de machine en machine, cartographie le réseau, repère serveurs de fichiers et sauvegardes. Cette phase peut durer des jours sans être détectée : c'est la fenêtre où une bonne détection change tout.\n" +
            "4. **Exfiltration** : avant de chiffrer, il **copie** les données sensibles. C'est la **double extorsion** : « payez, sinon on publie ». Même avec des sauvegardes parfaites, la menace de fuite reste.\n" +
            "5. **Destruction des sauvegardes** : il supprime ou chiffre tout backup joignable depuis le réseau, pour t'ôter l'alternative.\n" +
            "6. **Chiffrement** : déclenché un vendredi soir ou une veille de jour férié, quand personne ne regarde.\n\n" +
            "## Faut-il payer ?\n\n" +
            "La position des autorités (l'ANSSI en France, le FBI aux États-Unis), est de **ne pas payer** : payer finance l'écosystème, ne garantit rien, et ne supprime pas les données exfiltrées. Ce n'est pas que de la morale, c'est documenté. Quand Europol et la police britannique ont démantelé l'infrastructure de LockBit en février 2024 (opération Cronos), les enquêteurs ont retrouvé sur les serveurs du groupe des données de victimes qui avaient payé pour leur « suppression ». Et Change Healthcare a payé 22 millions pour se faire extorquer une deuxième fois. Certaines organisations paient quand même, acculées par un arrêt total. C'est une décision de crise, pas une stratégie.\n\n" +
            "## La vraie défense se prépare avant\n\n" +
            "La sauvegarde reste l'arme décisive, à condition qu'elle survive à l'étape 5. Applique la règle **3-2-1** :\n\n" +
            "- **3** copies de tes données,\n" +
            "- sur **2** supports différents,\n" +
            "- dont **1** hors site et **hors ligne** ou **immuable** (un stockage objet avec verrouillage en écriture, ou un disque réellement débranché).\n\n" +
            "Une sauvegarde montée en permanence sur le réseau, avec les mêmes identifiants que la production, sera chiffrée avec le reste. Les équipes sérieuses ajoutent un critère : la restauration **testée**. Une sauvegarde qu'on n'a jamais restaurée est une hypothèse, pas une sécurité : le jour de la crise n'est pas le moment de découvrir qu'un backup était corrompu depuis six mois, ni qu'une restauration complète prend trois semaines quand ton plan tablait sur deux jours.\n\n" +
            "À la sauvegarde s'ajoutent les couches déjà croisées : MFA sur tous les accès distants (l'absence de MFA sur un seul portail a suffi chez Change Healthcare), détection du déplacement latéral, segmentation réseau pour limiter la propagation, et un plan de réponse écrit (les deux derniers points ont leurs propres leçons).\n\n" +
            "Un mot sur l'assurance cyber, souvent découverte le jour J : la plupart des contrats imposent des prérequis (MFA, sauvegardes isolées, EDR) et les vérifient après sinistre (une déclaration inexacte au moment de la souscription peut annuler l'indemnisation). En France, la loi conditionne en plus le remboursement à un dépôt de plainte dans les 72 heures, on y reviendra dans la leçon sur la réponse à incident. Autrement dit, les mesures de cette leçon ne protègent pas seulement tes données : elles conditionnent ta capacité à être indemnisé.\n\n" +
            "Et si tu te demandes qui est visé : l'ANSSI répète chaque année que la majorité des victimes de ransomware en France sont des PME, des collectivités et des établissements de santé, pas des multinationales. Les affiliés ratissent au scanner et frappent ce qui est mal protégé, pas ce qui est célèbre.\n\n" +
            "## À toi\n\n" +
            "Audit express : une PME sauvegarde chaque nuit sur un NAS branché au réseau, avec le compte admin du domaine, et réplique le NAS vers un cloud connecté en permanence via un lecteur réseau. Trouve les deux failles majeures face au scénario en six étapes.\n\n" +
            "> Correction : première faille, tout est joignable depuis le réseau avec des identifiants que l'attaquant aura récupérés à l'étape 2 (NAS et réplique cloud seront chiffrés ou supprimés à l'étape 5). Deuxième faille, aucune copie hors ligne ou immuable : la règle 3-2-1 est violée sur le « 1 ». Correctifs : un compte dédié aux sauvegardes sans droits d'admin domaine, une copie sur stockage immuable (verrou d'écriture temporel) ou physiquement déconnectée, et un test de restauration trimestriel chronométré.",
        },
        {
          id: "l11",
          title: "Chiffrement symétrique et asymétrique",
          type: "text",
          duration: "18 min",
          body:
            "## Adobe, 2013 : le plus grand mots croisés du monde\n\n" +
            "En octobre 2013, Adobe se fait voler une base de 153 millions de comptes. Les mots de passe n'étaient pas en clair, l'entreprise avait « fait quelque chose » : elle les avait **chiffrés** avec 3DES en mode ECB, tous avec la même clé, au lieu de les **hacher**. Conséquence en cascade : deux utilisateurs ayant le même mot de passe avaient le même bloc chiffré, et les « indices de mot de passe », stockés en clair juste à côté, faisaient le reste. La communauté sécurité a surnommé la fuite « le plus grand mots croisés du monde » : indice « mon chat », réponse partagée par 50 000 comptes… Personne n'a eu besoin de casser la clé pour deviner des millions de mots de passe.\n\n" +
            "Moralité : la cryptographie ne pardonne pas l'à-peu-près. Bien employée, elle est ce qu'on a de plus solide ; mal employée, elle donne une illusion de sécurité. Cette leçon pose les fondations : les deux familles de chiffrement, et pourquoi on a besoin des deux.\n\n" +
            "## Symétrique : une seule clé\n\n" +
            "En chiffrement **symétrique**, la même clé sert à chiffrer et à déchiffrer. La référence est **AES** (Advanced Encryption Standard), sûr avec des clés de 256 bits et tellement central que les processeurs modernes ont des instructions dédiées pour l'accélérer ; ChaCha20 est l'autre choix courant, notamment sur mobile. C'est rapide : on chiffre des disques entiers, des bases, des flux vidéo.\n\n" +
            "Son problème est logistique : comment transmettre la clé à ton correspondant sans qu'un espion l'intercepte ? Si tu envoies la clé par le même canal que le message, celui qui écoute obtient les deux. C'est le **problème de la distribution des clés**, et il a borné la cryptographie pendant des siècles : il fallait des valises diplomatiques et des carnets de clés papier.\n\n" +
            "## Asymétrique : une paire de clés\n\n" +
            "Le chiffrement **asymétrique** (à clé publique), formalisé dans les années 1970, dissout ce problème. Chaque personne a une paire de clés mathématiquement liées :\n\n" +
            "- une **clé publique**, diffusable à tout le monde,\n" +
            "- une **clé privée**, gardée secrète.\n\n" +
            "Ce qui est chiffré avec la clé publique ne se déchiffre qu'avec la clé privée correspondante. N'importe qui peut t'écrire confidentiellement avec ta clé publique ; toi seul peux lire. Plus besoin de partager un secret au préalable. Les algorithmes courants sont **RSA** et les courbes elliptiques (**ECC**, par exemple X25519), plus compactes à sécurité égale.\n\n" +
            "L'asymétrique offre un second service, au moins aussi important : la **signature numérique**. Tu signes avec ta clé privée, tout le monde vérifie avec ta clé publique. Cela prouve l'origine et la non-altération : l'intégrité de notre triade. C'est ce qui authentifie les mises à jour logicielles, les certificats TLS, les transactions.\n\n" +
            "## Pourquoi on combine les deux\n\n" +
            "L'asymétrique est élégant mais lent et limité en taille de message. Le symétrique est rapide mais bute sur la distribution des clés. La solution, utilisée partout, est le **chiffrement hybride** : l'asymétrique sert uniquement à établir une petite **clé de session** symétrique, qui chiffre ensuite tout le volume.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Symétrique, asymétrique, hybride : le duo qui fait tourner TLS, Signal et le reste\"}\n" +
            "<svg viewBox=\"0 0 640 360\" role=\"img\"><title>Chiffrement symétrique contre asymétrique, et leur combinaison hybride</title><g font-family=\"ui-monospace, monospace\" font-size=\"12\"><text x=\"160\" y=\"32\" text-anchor=\"middle\" fill=\"currentColor\">SYMÉTRIQUE (AES)</text><rect x=\"30\" y=\"50\" width=\"80\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"70\" y=\"75\" text-anchor=\"middle\" fill=\"currentColor\">Alice</text><rect x=\"210\" y=\"50\" width=\"80\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"250\" y=\"75\" text-anchor=\"middle\" fill=\"currentColor\">Bob</text><line x1=\"110\" y1=\"70\" x2=\"210\" y2=\"70\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"160\" y=\"62\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.7\">même clé K</text><text x=\"160\" y=\"115\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.7\">+ rapide, gros volumes</text><text x=\"160\" y=\"133\" text-anchor=\"middle\" class=\"fig-accent\">- comment échanger K ?</text><text x=\"480\" y=\"32\" text-anchor=\"middle\" fill=\"currentColor\">ASYMÉTRIQUE (RSA/ECC)</text><rect x=\"350\" y=\"50\" width=\"80\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"390\" y=\"75\" text-anchor=\"middle\" fill=\"currentColor\">Alice</text><rect x=\"530\" y=\"50\" width=\"80\" height=\"40\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"570\" y=\"75\" text-anchor=\"middle\" fill=\"currentColor\">Bob</text><line x1=\"430\" y1=\"70\" x2=\"530\" y2=\"70\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"480\" y=\"62\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.7\">pub(Bob) chiffre</text><text x=\"480\" y=\"115\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.7\">+ zéro secret partagé</text><text x=\"480\" y=\"133\" text-anchor=\"middle\" class=\"fig-accent\">- lent, petits messages</text><line x1=\"320\" y1=\"150\" x2=\"320\" y2=\"178\" stroke=\"currentColor\" opacity=\"0.5\"/><polygon points=\"314,176 326,176 320,188\" fill=\"currentColor\" opacity=\"0.5\"/><rect x=\"95\" y=\"196\" width=\"450\" height=\"120\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"320\" y=\"222\" text-anchor=\"middle\" fill=\"currentColor\">HYBRIDE : le meilleur des deux</text><text x=\"320\" y=\"250\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.75\">1. clé de session aléatoire K</text><text x=\"320\" y=\"272\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.75\">2. K protégée par la clé publique (asym.)</text><text x=\"320\" y=\"294\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.75\">3. données chiffrées avec K (sym. AES)</text></g></svg>\n" +
            "```\n\n" +
            "Le destinataire récupère la clé de session avec sa clé privée, puis déchiffre le volume avec cette clé. C'est exactement ce que fait TLS à chaque connexion HTTPS (leçon suivante), et, dans l'autre sens, ce que fait un ransomware quand il chiffre tes fichiers.\n\n" +
            "## Hacher n'est pas chiffrer\n\n" +
            "Retour sur Adobe : leur erreur de fond était d'utiliser un mécanisme **réversible** pour une donnée qu'on ne doit jamais pouvoir relire. Le **hachage** (SHA-256 par exemple) est à sens unique : une empreinte fixe, impossible à inverser. Pour des mots de passe on utilise des fonctions de hachage volontairement **lentes et salées** (bcrypt, scrypt ou argon2), afin qu'un attaquant qui vole la base ne puisse tester que quelques milliers de candidats par seconde au lieu de milliards, et que deux mots de passe identiques donnent des empreintes différentes (le sel). Chiffrement pour ce qu'on doit relire, hachage pour ce qu'on doit seulement vérifier.\n\n" +
            "## Et l'ordinateur quantique ?\n\n" +
            "Un mot sur 2026 : un ordinateur quantique suffisamment grand casserait RSA et ECC (pas AES-256, qui résiste moyennant des clés longues). Il n'existe pas encore à cette échelle, mais des acteurs enregistrent déjà du trafic chiffré pour le déchiffrer plus tard : la stratégie « harvest now, decrypt later ». Le NIST a publié en août 2024 ses standards post-quantiques (dont ML-KEM pour l'échange de clés), et les déploiements hybrides classique + post-quantique sont déjà actifs dans Chrome, chez Cloudflare et dans Signal. Tu n'as rien à faire à ton échelle, mais tu sais désormais lire ces annonces.\n\n" +
            "## À toi\n\n" +
            "Choisis le bon outil : (a) stocker les mots de passe des utilisateurs de ton application ; (b) chiffrer le disque d'un ordinateur portable ; (c) prouver qu'une mise à jour logicielle vient bien de toi et n'a pas été altérée.\n\n" +
            "> Correction : (a) hachage lent et salé (argon2 ou bcrypt), jamais de chiffrement réversible, c'est la leçon Adobe ; (b) chiffrement symétrique (AES), rapide et adapté aux gros volumes, la clé étant dérivée de ta phrase de déverrouillage ; (c) signature numérique asymétrique : ta clé privée signe, les clients vérifient avec la clé publique embarquée. Trois besoins, trois mécanismes : si tu sais faire ce tri, tu as le niveau attendu de cette partie.",
        },
        {
          id: "l12",
          title: "TLS et HTTPS, sous le capot",
          type: "text",
          duration: "18 min",
          body:
            "## DigiNotar, l'autorité qui a trahi sans le vouloir\n\n" +
            "Été 2011. DigiNotar, une autorité de certification néerlandaise, se fait pirater. L'intrus émet plus de 500 faux certificats, dont un pour `*.google.com`. Pendant des semaines, ce certificat sert à intercepter les connexions Gmail d'environ 300 000 internautes, essentiellement en Iran : leurs navigateurs affichaient le cadenas, la connexion était bien chiffrée… mais chiffrée vers l'espion. L'affaire éclate, les navigateurs révoquent DigiNotar en urgence, et l'entreprise fait faillite en septembre. Cet épisode fondateur explique la moitié des mécanismes modernes de TLS : tout repose sur la confiance dans les certificats, donc cette confiance doit être vérifiable et révocable.\n\n" +
            "## Ce que le cadenas signifie vraiment\n\n" +
            "Le cadenas veut dire que la connexion utilise **TLS** (Transport Layer Security), le successeur de SSL. HTTPS, c'est HTTP transporté dans un tunnel TLS. Trois garanties, qu'on lit directement dans la triade CIA :\n\n" +
            "- **Confidentialité** : le trafic est chiffré, un espion sur le réseau ne lit rien d'utile.\n" +
            "- **Intégrité** : toute modification en transit est détectée.\n" +
            "- **Authentification** : le serveur prouve qu'il est bien le domaine affiché, via son certificat.\n\n" +
            "Malentendu fréquent, à corriger une fois pour toutes : le cadenas ne dit **pas** que le site est honnête. Les certificats sont gratuits et automatiques depuis Let's Encrypt, et l'immense majorité des sites de phishing sont aujourd'hui en HTTPS parfaitement valide. TLS garantit que tu parles bien, de façon chiffrée, au serveur nommé dans l'URL : pas que ce serveur te veut du bien. Le réflexe utile n'est donc pas « il y a un cadenas », mais « quel est le domaine, exactement ».\n\n" +
            "## Le handshake, étape par étape\n\n" +
            "Avant d'échanger la moindre donnée, client et serveur exécutent un **handshake** (poignée de main). Version simplifiée, dans l'esprit de TLS 1.3 :\n\n" +
            "```figure\n" +
            "{\"caption\": \"Le handshake TLS simplifié : authentifier, négocier une clé de session, puis tout chiffrer en symétrique\"}\n" +
            "<svg viewBox=\"0 0 640 400\" role=\"img\"><title>Handshake TLS simplifié entre client et serveur</title><g font-family=\"ui-monospace, monospace\" font-size=\"12\"><rect x=\"60\" y=\"20\" width=\"120\" height=\"36\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"120\" y=\"43\" text-anchor=\"middle\" fill=\"currentColor\">Client</text><rect x=\"460\" y=\"20\" width=\"120\" height=\"36\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.8\"/><text x=\"520\" y=\"43\" text-anchor=\"middle\" fill=\"currentColor\">Serveur</text><line x1=\"120\" y1=\"56\" x2=\"120\" y2=\"370\" stroke=\"currentColor\" opacity=\"0.35\"/><line x1=\"520\" y1=\"56\" x2=\"520\" y2=\"370\" stroke=\"currentColor\" opacity=\"0.35\"/><line x1=\"120\" y1=\"90\" x2=\"512\" y2=\"90\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"510,84 510,96 522,90\" fill=\"currentColor\" opacity=\"0.6\"/><text x=\"320\" y=\"82\" text-anchor=\"middle\" fill=\"currentColor\">1. ClientHello : versions, algos, part de clé</text><line x1=\"520\" y1=\"140\" x2=\"128\" y2=\"140\" stroke=\"currentColor\" opacity=\"0.6\"/><polygon points=\"130,134 130,146 118,140\" fill=\"currentColor\" opacity=\"0.6\"/><text x=\"320\" y=\"132\" text-anchor=\"middle\" fill=\"currentColor\">2. ServerHello : part de clé + certificat</text><rect x=\"30\" y=\"165\" width=\"215\" height=\"52\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"137\" y=\"186\" text-anchor=\"middle\" fill=\"currentColor\">3. vérifie le certificat :</text><text x=\"137\" y=\"204\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.7\">CA ? domaine ? validité ?</text><rect x=\"175\" y=\"240\" width=\"290\" height=\"40\" rx=\"3\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"320\" y=\"265\" text-anchor=\"middle\" fill=\"currentColor\">4. clé de session dérivée des 2 parts</text><text x=\"320\" y=\"300\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.6\">(jamais transmise sur le réseau)</text><line x1=\"120\" y1=\"335\" x2=\"520\" y2=\"335\" stroke=\"currentColor\" opacity=\"0.8\" stroke-width=\"2\"/><polygon points=\"510,329 510,341 522,335\" fill=\"currentColor\" opacity=\"0.8\"/><polygon points=\"130,329 130,341 118,335\" fill=\"currentColor\" opacity=\"0.8\"/><text x=\"320\" y=\"327\" text-anchor=\"middle\" fill=\"currentColor\">5. HTTP chiffré en symétrique (AES/ChaCha20)</text></g></svg>\n" +
            "```\n\n" +
            "1. Le navigateur annonce ce qu'il sait faire (versions, algorithmes) et joint déjà sa part d'échange de clé.\n" +
            "2. Le serveur choisit les paramètres, renvoie sa propre part et son **certificat**, qui contient sa clé publique et l'identité du domaine.\n" +
            "3. Le navigateur **vérifie le certificat** : signé par une autorité de confiance ? correspondant au domaine demandé ? ni expiré ni révoqué ?\n" +
            "4. Chaque côté combine les deux parts (un échange de type Diffie-Hellman éphémère) pour dériver la **même clé de session symétrique**, sans que cette clé ait jamais circulé. L'« éphémère » a une vertu précieuse : une clé par session, donc même si la clé privée du serveur fuit un jour, le trafic passé enregistré reste indéchiffrable (c'est la forward secrecy).\n" +
            "5. Tout l'échange applicatif est ensuite chiffré avec cette clé symétrique.\n\n" +
            "Tu reconnais le schéma hybride de la leçon précédente : asymétrique pour authentifier et négocier, symétrique pour le débit. TLS 1.3 a élagué les vieux algorithmes et raccourci ce ballet à un seul aller-retour ; SSL et TLS 1.0/1.1 sont morts et doivent être désactivés côté serveur.\n\n" +
            "## La chaîne de confiance, et ses garde-fous post-DigiNotar\n\n" +
            "Pourquoi ton navigateur croit-il ce certificat ? Parce qu'une **autorité de certification** (CA) l'a signé, que cette autorité est elle-même certifiée, et que la racine de cette chaîne est pré-installée dans ton système. C'est la **chaîne de confiance**. DigiNotar a montré sa fragilité : une CA compromise peut mentir sur n'importe quel domaine. D'où les garde-fous ajoutés depuis : la **Certificate Transparency** oblige toute émission de certificat à être inscrite dans des journaux publics vérifiables (un faux `*.google.com` émis en douce se repère vite), et les navigateurs savent révoquer une CA entière. D'où aussi le **HSTS**, un en-tête qui ordonne au navigateur de toujours utiliser HTTPS pour un site donné, coupant court aux attaques de rétrogradation vers HTTP en clair.\n\n" +
            "Quand un navigateur affiche un avertissement de certificat, il te dit qu'un maillon de tout cela casse. Ne clique jamais « continuer quand même » machinalement : demande-toi lequel.\n\n" +
            "Trois pièges classiques pour finir. Le **contenu mixte** : une page HTTPS qui charge un script en HTTP simple ruine une partie des garanties (les navigateurs modernes le bloquent, mais les vieux sites en souffrent encore). Le **certificat auto-signé** en interne : pratique en environnement de test, mais il habitue les équipes à cliquer « accepter le risque », le pire réflexe qu'on puisse installer ; monte plutôt une petite autorité interne ou utilise des certificats publics. Et le **renouvellement manuel** : un certificat expire toujours un dimanche ; automatise avec certbot ou le client ACME de ton hébergeur, et pose une alerte quinze jours avant l'échéance.\n\n" +
            "## À toi\n\n" +
            "Diagnostique : (a) sur le Wi-Fi d'un hôtel, toute tentative d'accès à un site HTTPS affiche une erreur de certificat avant que tu aies accepté les conditions du portail ; (b) ton navigateur hurle sur TOUS les sites depuis ce matin, y compris Google, sur ta propre connexion ; (c) un seul site interne de ton entreprise affiche « certificat expiré ».\n\n" +
            "> Correction : (a) le portail captif intercepte tes requêtes pour te rediriger vers sa page de connexion : c'est littéralement une interception, et TLS fait son travail en la signalant ; passe par la page du portail, jamais en « acceptant le risque » sur un vrai site. (b) suspecte d'abord ton horloge système (une date fausse invalide tous les certificats) ou un logiciel local qui intercepte le trafic ; si ce n'est ni l'un ni l'autre, méfiance maximale sur ce réseau. (c) le plus banal : un renouvellement oublié côté serveur (l'automatisation type Let's Encrypt existe précisément pour ça).",
        },
        {
          id: "l13",
          title: "Quiz : Malwares et cryptographie",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q9",
              prompt:
                "Une organisation a des sauvegardes quotidiennes, mais elles sont stockées sur un partage réseau accessible en écriture depuis les serveurs de production. Pourquoi est-ce risqué face à un ransomware ?",
              options: [
                "Les sauvegardes réseau sont toujours trop lentes",
                "Un ransomware qui atteint le réseau peut chiffrer ou supprimer ces sauvegardes en même temps que le reste",
                "Les sauvegardes quotidiennes sont insuffisantes en fréquence",
                "Le partage réseau ne permet pas le chiffrement des sauvegardes",
              ],
              correctIndex: 1,
              explanation:
                "La destruction des sauvegardes joignables est une étape standard de l'attaque, juste avant le chiffrement. D'où la règle 3-2-1 avec au moins une copie hors ligne ou immuable, hors de portée des identifiants que l'attaquant aura volés.",
            },
            {
              id: "q10",
              prompt: "Pourquoi TLS utilise-t-il à la fois chiffrement asymétrique et symétrique ?",
              options: [
                "Pour doubler la longueur des clés",
                "Parce que l'asymétrique sert à authentifier le serveur et à négocier une clé, tandis que le symétrique, rapide, chiffre ensuite tout le trafic",
                "Parce que le symétrique est plus sûr que l'asymétrique",
                "Pour être compatible avec les anciens navigateurs",
              ],
              correctIndex: 1,
              explanation:
                "C'est le chiffrement hybride. L'asymétrique résout la distribution de clé et l'authentification, mais il est lent ; on l'utilise donc juste pour établir une clé de session symétrique qui, elle, chiffre efficacement les données.",
            },
            {
              id: "q11",
              prompt:
                "Un site de phishing affiche bien le cadenas HTTPS dans le navigateur. Qu'est-ce que cela prouve ?",
              options: [
                "Que le site est légitime et sûr",
                "Que la connexion est chiffrée et que tu parles bien au serveur indiqué dans l'URL, sans rien garantir sur son honnêteté",
                "Que le certificat a été volé",
                "Que le site ne peut pas voler tes données",
              ],
              correctIndex: 1,
              explanation:
                "TLS garantit confidentialité, intégrité et l'identité du serveur nommé dans l'URL. Il ne juge pas des intentions du propriétaire : les certificats sont gratuits et automatiques, et la plupart des sites de phishing en ont un parfaitement valide. La question utile n'est pas « y a-t-il un cadenas ? » mais « quel est le domaine ? ».",
            },
            {
              id: "q12",
              prompt:
                "Pour stocker les mots de passe des utilisateurs d'une application, quelle approche est correcte ?",
              options: [
                "Les chiffrer en AES pour pouvoir les redéchiffrer si besoin",
                "Les stocker en clair mais dans une base protégée",
                "Les hacher avec une fonction lente et salée (par ex. bcrypt/argon2), sans jamais pouvoir les redéchiffrer",
                "Les encoder en base64",
              ],
              correctIndex: 2,
              explanation:
                "Un mot de passe ne doit jamais pouvoir être redéchiffré : on le hache avec une fonction lente et salée conçue pour ça. C'est exactement l'erreur d'Adobe en 2013 : du chiffrement réversible (3DES) au lieu d'un hachage, et 153 millions de comptes devenus un jeu de devinettes géant. Base64 n'est qu'un encodage, pas une protection.",
            },
            {
              id: "q24",
              prompt:
                "Deux semaines après avoir téléchargé un logiciel « gratuit » hors du site officiel, un utilisateur voit ses comptes ouverts un à un par un tiers, alors que certains avaient un code TOTP. Quelle explication est la plus probable ?",
              options: [
                "Un ransomware dormant",
                "Un infostealer a volé les mots de passe du navigateur et les cookies de session, lesquels permettent d'entrer sans redéclencher le MFA",
                "Une faille du protocole TOTP",
                "Un ver réseau venu du Wi-Fi public",
              ],
              correctIndex: 1,
              explanation:
                "C'est le mode opératoire des infostealers (RedLine, Lumma…) : aspirer identifiants et cookies en quelques secondes. Un cookie de session valide représente une authentification déjà faite, MFA compris : c'est le circuit qui a alimenté l'affaire Snowflake en 2024. Le TOTP n'est pas cassé : il est contourné, car la session, elle, est déjà ouverte.",
            },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Sécurité réseau et vulnérabilités web",
      lessons: [
        {
          id: "l14",
          title: "Pare-feu, segmentation et défense en profondeur",
          type: "text",
          duration: "18 min",
          body:
            "## NotPetya : quand tout le réseau est une seule pièce\n\n" +
            "Le 27 juin 2017, le géant du transport maritime Maersk voit ses écrans s'éteindre les uns après les autres. NotPetya, un malware destructeur diffusé via la mise à jour piégée d'un logiciel de comptabilité ukrainien (M.E.Doc), vient d'entrer par une seule filiale, et se propage à toute la planète Maersk en quelques heures : environ 49 000 postes et près de 4 000 serveurs détruits, 76 terminaux portuaires perturbés, autour de 300 millions de dollars de pertes. Détail devenu légendaire : la reconstruction de l'annuaire central n'a été possible que grâce à un contrôleur de domaine au Ghana, hors ligne au moment de l'attaque à cause d'une coupure de courant. Une panne électrique a servi de sauvegarde involontaire.\n\n" +
            "La leçon n'est pas « Maersk était négligent ». C'est qu'un réseau **à plat**, où chaque machine peut parler à toutes les autres, transforme la moindre infection en incendie généralisé. Cette leçon parle des murs, des portes, et de la stratégie qui les organise.\n\n" +
            "## Le pare-feu, portier du réseau\n\n" +
            "Un **pare-feu** filtre le trafic selon des règles : quelle source, quelle destination, quel port, quel protocole. Le principe directeur s'appelle **deny by default** : tout est interdit, sauf ce qui est explicitement autorisé. C'est l'inverse de l'intuition « bloquons ce qui est dangereux » : on ne connaît jamais tout ce qui est dangereux, mais on peut lister ce qui est légitime.\n\n" +
            "On filtre dans les deux sens. L'**ingress** (trafic entrant) protège des intrusions ; l'**egress** (sortant) est le filtre oublié : c'est lui qui peut couper la communication d'un malware avec son serveur de commande ou freiner une exfiltration. Les pare-feu modernes (NGFW) inspectent aussi le contenu applicatif, et un **WAF** (Web Application Firewall) se spécialise dans le trafic HTTP pour filtrer les attaques web de la fin de cette partie. Ton ordinateur et ta box ont aussi leur pare-feu : la logique est la même à toutes les échelles.\n\n" +
            "## Segmenter : des cloisons coupe-feu\n\n" +
            "La **segmentation** découpe le réseau en zones étanches qui ne communiquent qu'à travers des règles : les serveurs exposés à Internet dans une **DMZ** (zone démilitarisée), la base de données dans une zone que seule l'application peut joindre, les postes bureautique ailleurs, le Wi-Fi invité isolé de tout. Si NotPetya entre dans un segment, il y reste, ou au moins, il y perd assez de temps pour être détecté. Chez toi, la version miniature existe : le réseau invité de ta box pour les objets connectés et les visiteurs.\n\n" +
            "## La défense en profondeur\n\n" +
            "Pare-feu et segmentation ne sont que deux couches d'une stratégie plus large, héritée des fortifications militaires : la **défense en profondeur**. Postulat honnête : chaque couche finira par céder ; l'important est qu'aucune ne soit la dernière.\n\n" +
            "```figure\n" +
            "{\"caption\": \"Défense en profondeur : chaque couche ralentit l'attaquant, la détection surveille toutes les couches\"}\n" +
            "<svg viewBox=\"0 0 640 380\" role=\"img\"><title>Couches de défense en profondeur, du périmètre aux données</title><g font-family=\"ui-monospace, monospace\" font-size=\"12\"><rect x=\"40\" y=\"30\" width=\"460\" height=\"330\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.4\"/><text x=\"60\" y=\"52\" fill=\"currentColor\" opacity=\"0.7\">PÉRIMÈTRE  pare-feu, WAF</text><rect x=\"70\" y=\"66\" width=\"400\" height=\"264\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.5\"/><text x=\"90\" y=\"88\" fill=\"currentColor\" opacity=\"0.7\">RÉSEAU  segmentation, DMZ</text><rect x=\"100\" y=\"102\" width=\"340\" height=\"198\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.6\"/><text x=\"120\" y=\"124\" fill=\"currentColor\" opacity=\"0.7\">IDENTITÉ  MFA, moindre privilège</text><rect x=\"130\" y=\"138\" width=\"280\" height=\"132\" rx=\"4\" fill=\"none\" stroke=\"currentColor\" opacity=\"0.7\"/><text x=\"150\" y=\"160\" fill=\"currentColor\" opacity=\"0.7\">POSTE / APPLI  EDR, patching</text><rect x=\"160\" y=\"174\" width=\"220\" height=\"66\" rx=\"4\" class=\"fig-accent\" fill=\"none\" stroke-width=\"2\"/><text x=\"270\" y=\"200\" text-anchor=\"middle\" fill=\"currentColor\">DONNÉES</text><text x=\"270\" y=\"222\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\"0.7\">chiffrement, sauvegardes</text><line x1=\"545\" y1=\"40\" x2=\"545\" y2=\"350\" stroke=\"currentColor\" opacity=\"0.5\" stroke-dasharray=\"5 4\"/><text x=\"558\" y=\"170\" fill=\"currentColor\" opacity=\"0.7\" transform=\"rotate(90 558 170)\">DÉTECTION : journaux + alertes sur chaque couche</text><line x1=\"10\" y1=\"200\" x2=\"32\" y2=\"200\" stroke=\"currentColor\" opacity=\"0.7\" stroke-width=\"2\"/><polygon points=\"30,194 30,206 42,200\" fill=\"currentColor\" opacity=\"0.7\"/><text x=\"14\" y=\"188\" fill=\"currentColor\" opacity=\"0.7\">attaque</text></g></svg>\n" +
            "```\n\n" +
            "De l'extérieur vers l'intérieur : le périmètre filtre, le réseau cloisonne, l'identité vérifie (MFA, moindre privilège ; tes acquis de la partie 2), le poste et l'application se durcissent (EDR, patching), et les données elles-mêmes sont chiffrées et sauvegardées. En travers de tout : la **détection**. Sans journaux ni alertes, chaque couche peut tomber en silence, et l'attaquant de la leçon ransomware passe ses journées de déplacement latéral tranquille.\n\n" +
            "Prolongement moderne : le **Zero Trust**. L'idée n'est pas de supprimer les couches mais d'arrêter de faire confiance à la localisation : « être dans le réseau interne » ne prouve plus rien (NotPetya l'a démontré, le télétravail l'a achevé). Chaque accès est vérifié : identité, appareil, contexte, à chaque fois.\n\n" +
            "Version personnelle du Zero Trust, si tu télétravailles : considère ton réseau domestique comme hostile. Le PC pro n'a rien à faire sur le même segment que ta TV connectée ou l'aspirateur robot ; le réseau invité de la box fait une DMZ du pauvre très honorable, et le VPN d'entreprise chiffre le reste. Deux réglages de box suffisent, et c'est exactement le raisonnement qu'un architecte réseau applique à l'échelle d'une usine.\n\n" +
            "## Les pièges qui coûtent cher\n\n" +
            "- **La règle temporaire éternelle** : le port RDP ouvert « pour le prestataire, juste cette semaine » et toujours ouvert deux ans après. Les règles de pare-feu doivent être datées, commentées et revues.\n" +
            "- **Le périmètre-coquille** : dur dehors, mou dedans. Si tout mise sur le pare-feu externe, le premier phishing réussi donne les clés de tout : c'est l'anti-modèle NotPetya.\n" +
            "- **L'egress ignoré** : tout le monde filtre l'entrant, presque personne le sortant. Or l'exfiltration et le command-and-control passent par là.\n" +
            "- **La segmentation sur le papier** : des VLAN existent, mais des règles « any/any » entre eux annulent tout. Une segmentation non testée est une décoration.\n\n" +
            "## À toi\n\n" +
            "Place ces quatre systèmes dans des zones réseau, avec les flux autorisés entre elles : un site web vitrine public, la base de données clients, les postes des comptables, les caméras IP du bâtiment.\n\n" +
            "> Correction possible : site web en DMZ (Internet → DMZ sur le port 443 uniquement) ; base clients dans une zone données, joignable uniquement depuis la zone applicative (jamais depuis Internet ni depuis les postes) ; postes comptables dans une zone bureautique qui accède à l'application par son interface, pas à la base en direct ; caméras IP dans une zone IoT isolée, sans aucun flux vers les autres zones (souvenir de Mirai : ces appareils sont des cibles faciles), avec un seul flux sortant vers le serveur d'enregistrement. Et partout : deny by default, chaque flux autorisé écrit et justifié.",
        },
        {
          id: "l15",
          title: "Démo : scanner et analyser un réseau local",
          type: "video",
          duration: "14 min",
          videoLabel:
            "Démo guidée et défensive sur un lab local : découverte des machines du réseau avec nmap (nmap -sV pour identifier les services et leurs versions), lecture du trafic avec Wireshark pour voir passer une requête HTTP en clair puis la même en HTTPS, et interprétation des résultats : quels ports ouverts sont attendus, lesquels sont des surprises à corriger. Objectif : apprendre à auditer TON réseau, celui dont tu as la responsabilité (scanner un réseau qui ne t'appartient pas est illégal (article 323-1 du Code pénal)).",
        },
        {
          id: "l16",
          title: "OWASP Top 10 : la carte des risques web",
          type: "text",
          duration: "17 min",
          body:
            "## Log4Shell, la faille à dix sur dix\n\n" +
            "Le 9 décembre 2021, une vulnérabilité est publiée dans Log4j, la bibliothèque de journalisation Java présente dans une part énorme des applications d'entreprise. Référence CVE-2021-44228, score de gravité 10/10, surnom **Log4Shell** : il suffisait de faire journaliser au serveur une chaîne du type `${jndi:ldap://...}` (dans un champ de formulaire, un en-tête HTTP, un pseudo de jeu vidéo), pour lui faire exécuter du code à distance. Des équipes du monde entier ont passé leurs nuits de décembre à chercher où Log4j se cachait dans leurs dépendances… et beaucoup ont découvert qu'elles n'en savaient rien. Des scans d'exploitation circulaient encore des années après.\n\n" +
            "Log4Shell illustre deux choses : une seule brique logicielle peut exposer des milliers d'applications qui ne l'ont même pas choisie consciemment, et les risques web sont assez récurrents pour qu'on ait pu les cataloguer. Ce catalogue, c'est l'**OWASP Top 10**.\n\n" +
            "## C'est quoi, l'OWASP Top 10\n\n" +
            "L'OWASP (Open Worldwide Application Security Project) est une fondation à but non lucratif qui publie, environ tous les quatre ans, le classement des dix catégories de risques les plus critiques des applications web, construit sur les données de centaines de milliers d'applications réelles. Ce n'est pas une liste de failles précises mais de **familles de causes**. L'édition 2025 (publiée en release candidate en novembre 2025) :\n\n" +
            "1. **A01 Broken Access Control** (contrôle d'accès défaillant : l'utilisateur accède à ce qui ne le regarde pas (le SSRF, ancien A10, y est intégré)). Numéro 1 depuis 2021, de loin.\n" +
            "2. **A02 Security Misconfiguration** (mauvaise configuration : compte admin par défaut, page de debug en production, permissions cloud trop larges). En forte hausse.\n" +
            "3. **A03 Software Supply Chain Failures** (la nouveauté 2025 : défaillances de la chaîne logicielle, dépendances compromises ou vulnérables). Log4Shell, SolarWinds et xz Utils habitent ici.\n" +
            "4. **A04 Cryptographic Failures** (crypto absente ou mal employée : données sensibles en clair, algorithmes obsolètes). L'affaire Adobe de la leçon 11, en somme.\n" +
            "5. **A05 Injection** (des données interprétées comme du code : SQL, commandes, et le XSS qui y est rattaché). Leçons 17 et 18.\n" +
            "6. **A06 Insecure Design** (le défaut est dans la conception même : aucune limite de tentatives, une logique métier contournable).\n" +
            "7. **A07 Authentication Failures** (authentification faible : pas de MFA, sessions mal gérées, mots de passe permissifs).\n" +
            "8. **A08 Software or Data Integrity Failures** (intégrité non vérifiée : mise à jour non signée, désérialisation de données non fiables).\n" +
            "9. **A09 Logging & Alerting Failures** (on ne journalise pas, ou personne ne regarde : l'attaque dure des mois sans bruit).\n" +
            "10. **A10 Mishandling of Exceptional Conditions** (nouvelle catégorie : erreurs et cas limites mal gérés, échecs qui laissent le système ouvert (fail open)).\n\n" +
            "Par rapport à 2021, retiens surtout la promotion de la chaîne d'approvisionnement au podium : on n'audite plus seulement SON code, mais tout ce qu'on importe.\n\n" +
            "## Le fil rouge : ne jamais faire confiance à une entrée\n\n" +
            "Si tu cherches l'idée qui relie la moitié de ce classement : **toute donnée venant de l'extérieur est hostile jusqu'à preuve du contraire**. L'injection, c'est une entrée qui devient du code. Le contrôle d'accès cassé, c'est une requête crue sur parole (« je demande la facture 4812, donne-la-moi », sans vérifier qu'elle est à toi). Log4Shell, c'est un journal qui interprète ce qu'on lui donne à écrire. Le développeur qui valide, échappe et vérifie les droits **côté serveur**, systématiquement, élimine des catégories entières.\n\n" +
            "Deuxième réflexe : **connaître ses dépendances**. Un fichier `package-lock.json` ou `requirements.txt`, un outil d'alerte comme Dependabot sur GitHub ou `npm audit`, et tu sais en quelques minutes si tu embarques une faille connue : là où les victimes de Log4Shell ont mis des semaines à dresser l'inventaire.\n\n" +
            "## Comment s'en servir sans le réciter\n\n" +
            "Le Top 10 n'est pas un examen, c'est une grille de lecture. Trois usages concrets. En **revue de code**, garde les trois premières catégories en tête : qui a le droit d'appeler ça (A01) ? qu'est-ce qui tourne avec la configuration par défaut (A02) ? d'où vient cette dépendance (A03) ? , et tu attraperas déjà l'essentiel. En **conception**, pose les questions avant d'écrire : limite de tentatives, journalisation des actions sensibles, comportement en cas d'erreur. En **audit**, l'OWASP publie des compagnons plus précis, notamment l'ASVS (Application Security Verification Standard), une vraie checklist vérifiable point par point quand le Top 10 devient trop généraliste. Et souviens-toi que ce classement décrit des fréquences observées dans le monde, pas ta situation particulière : ton application a SON modèle de menace, celui de la leçon 2.\n\n" +
            "## À toi\n\n" +
            "Relie trois incidents déjà vus dans ce cours à leur catégorie 2025 : (a) Equifax 2017 (framework non patché avec faille connue) ; (b) Adobe 2013 (mots de passe chiffrés en 3DES au lieu d'être hachés) ; (c) Change Healthcare 2024 (portail distant sans MFA).\n\n" +
            "> Correction : (a) A03 Software Supply Chain Failures : un composant tiers (Apache Struts) vulnérable et non mis à jour ; on pouvait aussi défendre A02, la frontière est poreuse et c'est normal, le Top 10 classe des causes qui se combinent. (b) A04 Cryptographic Failures, le cas d'école : la crypto existait mais était mal choisie. (c) A07 Authentication Failures : authentification à facteur unique sur un accès critique. Si tu as hésité entre deux catégories voisines, c'est bon signe : l'important est de diagnostiquer la cause, pas de réciter le numéro.",
        },
        {
          id: "l17",
          title: "Injection SQL : comprendre pour se défendre",
          type: "text",
          duration: "18 min",
          body:
            "## MOVEit, mai 2023 : une SQLi à 95 millions de victimes\n\n" +
            "Fin mai 2023, le groupe cybercriminel Cl0p exploite une faille inconnue (zero-day, CVE-2023-34362) dans MOVEit Transfer, un logiciel de transfert de fichiers utilisé par des milliers d'organisations pour échanger des données sensibles. La faille de départ ? Une **injection SQL**. En quelques jours d'exploitation automatisée, Cl0p aspire les données puis extorque les victimes une à une, sans même chiffrer quoi que ce soit. Bilan cumulé : plus de 2 700 organisations touchées (la BBC, British Airways, des administrations américaines…), environ 95 millions de personnes concernées. En 2023, une technique documentée publiquement depuis 1998 restait capable du plus gros pillage de données de l'année.\n\n" +
            "Voyons pourquoi elle refuse de mourir, et pourquoi la correction tient en une ligne.\n\n" +
            "## Le mécanisme : la donnée devient code\n\n" +
            "Une application web construit souvent ses requêtes de base de données en collant des chaînes de caractères. Version naïve en Python :\n\n" +
            "```python\n" +
            "# VULNÉRABLE : ne fais jamais ça\n" +
            "query = \"SELECT * FROM users WHERE name = '\" + user_input + \"'\"\n" +
            "```\n\n" +
            "Tant que l'utilisateur tape `alice`, la requête est innocente. Mais s'il tape `' OR '1'='1`, la requête devient :\n\n" +
            "```sql\n" +
            "SELECT * FROM users WHERE name = '' OR '1'='1'\n" +
            "```\n\n" +
            "La condition `'1'='1'` est toujours vraie : la requête renvoie **tous** les utilisateurs. L'entrée n'a pas été traitée comme une donnée mais **interprétée comme du code SQL**. C'est toute l'anatomie de la famille « injection » du Top 10 : un mélange non maîtrisé entre le gabarit de la requête et les données qu'on y insère. Selon le contexte, une injection permet de lire des tables entières, de contourner une authentification, de modifier ou détruire des données : dans MOVEit, elle a servi de porte d'entrée vers l'ensemble des fichiers stockés.\n\n" +
            "Inutile d'aller plus loin dans les techniques d'exploitation : notre but est défensif, et la bonne nouvelle est que la défense ne demande aucune subtilité.\n\n" +
            "## La parade : requêtes paramétrées\n\n" +
            "La correction canonique sépare le code SQL des données, une bonne fois pour toutes :\n\n" +
            "```python\n" +
            "# CORRECT : requête paramétrée\n" +
            "cursor.execute(\"SELECT * FROM users WHERE name = %s\", (user_input,))\n" +
            "```\n\n" +
            "Le `%s` n'est pas un collage de chaîne : c'est un **paramètre**. Le moteur de base de données reçoit le gabarit de la requête d'un côté, la valeur de l'autre, et traite cette valeur comme une donnée pure, quoi qu'elle contienne. `' OR '1'='1` devient un nom d'utilisateur bizarre qu'on cherche littéralement, rien de plus. Tous les langages ont leur équivalent (placeholders `?` en Java/JDBC, requêtes préparées en PHP/PDO), et les ORM courants (Django, SQLAlchemy, Prisma…) paramètrent par défaut : la vulnérabilité revient surtout quand un développeur écrit du SQL brut « juste pour cette requête ».\n\n" +
            "## Pourquoi ça existe encore, alors ?\n\n" +
            "- **Le code hérité** : des millions de lignes écrites avant que la paramétrisation soit un réflexe, dans des logiciels qu'on n'ose plus toucher (MOVEit était un produit vénérable).\n" +
            "- **La faille du vendredi soir** : la requête dynamique « temporaire » construite à la main pour un rapport, un filtre de recherche, un tri par colonne (les noms de colonnes ne se paramètrent pas, d'où des concaténations bricolées).\n" +
            "- **La confiance mal placée** : « cette valeur vient de notre application mobile, pas d'un utilisateur », sauf que toute requête HTTP se forge en dix secondes.\n\n" +
            "La défense en profondeur s'applique ici aussi : requêtes paramétrées (la couche décisive), validation des entrées en amont, compte applicatif de base de données au moindre privilège (l'application vitrine n'a pas besoin de `DROP TABLE`), WAF en périmètre pour freiner les scans automatisés, et journaux surveillés pour repérer les tentatives (Cl0p a pu piller MOVEit à grande échelle aussi parce que peu de victimes ont vu l'exfiltration passer).\n\n" +
            "Dernier détail défensif : les **messages d'erreur**. Une application qui renvoie l'erreur SQL brute au navigateur (« syntax error near... ») offre à l'attaquant une carte de ta base : moteur, noms de tables, structure des requêtes. En production, l'utilisateur doit recevoir une erreur générique et neutre ; le détail part dans les journaux côté serveur, où il aide tes équipes et pas l'adversaire. C'est l'esprit de la catégorie A10 du Top 10 2025 : un cas exceptionnel mal géré est une information donnée à l'ennemi, parfois une porte laissée ouverte. Et si tu veux voir la mécanique de près en toute légalité, OWASP Juice Shop contient plusieurs injections à découvrir toi-même, avec indices progressifs : une heure dessus vaut dix lectures.\n\n" +
            "## À toi\n\n" +
            "Ce code Node.js est-il vulnérable, et si oui, corrige-le mentalement :\n\n" +
            "```js\n" +
            "const id = req.params.id;\n" +
            "db.query(\"SELECT * FROM orders WHERE id = \" + id);\n" +
            "```\n\n" +
            "> Correction : vulnérable, et doublement. D'abord l'injection : `id` vient de l'URL et se retrouve concaténé dans la requête ; un appel à `/orders/1 OR 1=1` renverrait toutes les commandes. Correction : `db.query(\"SELECT * FROM orders WHERE id = ?\", [id])`. Ensuite, même paramétrée, la requête a un second problème, de contrôle d'accès celui-là (A01) : rien ne vérifie que la commande appartient à l'utilisateur connecté (il suffit d'incrémenter l'id pour lire les commandes des autres). La version saine ajoute la condition : `WHERE id = ? AND user_id = ?`. Une ligne de code, deux catégories du Top 10 : c'est exactement pour ça qu'on lit du code avec cette grille.",
        },
        {
          id: "l18",
          title: "XSS et tests avec ZAP",
          type: "text",
          duration: "18 min",
          body:
            "## De Samy à British Airways : le code des autres dans ta page\n\n" +
            "Octobre 2005. Samy Kamkar, 19 ans, découvre que MySpace filtre mal le HTML des profils. Il y glisse un script qui ajoute automatiquement Samy en ami et se recopie sur le profil du visiteur. En moins de vingt heures, plus d'un million de profils affichent « but most of all, samy is my hero ». Le ver le plus rapide de l'époque, sans aucune faille serveur : juste du JavaScript injecté dans une page.\n\n" +
            "Treize ans plus tard, la même famille de failles n'amuse plus personne : en 2018, le groupe Magecart injecte 22 lignes de JavaScript dans le site de British Airways. Pendant deux semaines, chaque paiement est discrètement copié vers un serveur pirate : environ 380 000 cartes bancaires, et une amende de 20 millions de livres du régulateur britannique. Même principe que Samy (du script étranger exécuté dans la page), mais côté conséquences, on a changé de monde.\n\n" +
            "## XSS : l'injection côté navigateur\n\n" +
            "Le **XSS** (cross-site scripting) est le cousin de l'injection SQL, transposé au navigateur : au lieu de faire interpréter du SQL par la base, on fait exécuter du JavaScript par le navigateur **des autres visiteurs**. Le script injecté tourne avec les droits de la page : il peut lire ce que la page affiche, voler des jetons de session, enregistrer les frappes d'un formulaire de paiement, rediriger vers un faux login.\n\n" +
            "Trois familles :\n\n" +
            "- **XSS stocké** : la charge est enregistrée côté serveur (commentaire, profil, avis produit) et servie à chaque visiteur. Le ver Samy. La plus grave : une injection, des milliers de victimes.\n" +
            "- **XSS réfléchi** : la charge voyage dans l'URL et n'est exécutée que par celui qui clique le lien piégé (typiquement diffusé par phishing).\n" +
            "- **XSS DOM** : tout se joue dans le JavaScript de la page, qui insère une donnée non fiable dans le DOM sans passer par le serveur.\n\n" +
            "## S'en défendre\n\n" +
            "La règle de fond ne change pas, toute entrée est hostile, mais la parade spécifique s'appelle **échappement en sortie** : au moment d'afficher une donnée utilisateur, les caractères spéciaux HTML sont neutralisés (`<` devient `&lt;`), et le `<script>` injecté s'affiche comme du texte inoffensif au lieu de s'exécuter. Les frameworks modernes le font par défaut : React, Vue ou Angular échappent tout ce qu'on interpole. La faille revient quand on force la main au framework (la fonction React s'appelle littéralement `dangerouslySetInnerHTML`, l'avertissement est dans le nom), ou quand on manipule `innerHTML` à la main.\n\n" +
            "Cas particulier : si ton produit doit vraiment accepter du HTML riche (un éditeur de commentaires avec gras et liens, par exemple), n'écris jamais ton propre filtre. Utilise une bibliothèque d'assainissement éprouvée comme DOMPurify, qui ne conserve que les balises et attributs sûrs. Les filtres maison contournés par une variante d'encodage exotique sont un grand classique des rapports de bug bounty.\n\n" +
            "En profondeur, deux compléments : le cookie de session marqué `HttpOnly` (illisible depuis JavaScript, donc involable par XSS) et une **CSP** (Content Security Policy), l'en-tête qui liste les origines de scripts autorisées (une CSP stricte aurait considérablement gêné le script Magecart qui exfiltrait vers un domaine pirate).\n\n" +
            "## Tester avec ZAP\n\n" +
            "Comprendre les failles, c'est bien ; vérifier ton application, c'est mieux. L'outil libre de référence est **ZAP** (Zed Attack Proxy), historiquement « OWASP ZAP », aujourd'hui projet open source soutenu par Checkmarx. C'est un proxy : il s'intercale entre ton navigateur et ton application, voit tout le trafic, et sait tester automatiquement les classiques (XSS, injection, en-têtes manquants).\n\n" +
            "Un premier audit réaliste :\n\n" +
            "1. **Cadre légal d'abord** : uniquement TON application, ou une cible d'entraînement prévue pour, comme OWASP Juice Shop (une boutique volontairement truffée de failles que tu lances en local avec Docker).\n" +
            "2. **Explorer** : navigue dans l'application à travers ZAP, ou lance le spider pour découvrir les pages.\n" +
            "3. **Scan passif** : sans rien attaquer, ZAP signale déjà les en-têtes de sécurité absents (CSP, HSTS…), les cookies sans `HttpOnly`.\n" +
            "4. **Scan actif** sur les zones à risque : ZAP injecte des charges de test dans chaque paramètre et regarde ce qui ressort.\n" +
            "5. **Trier** : un scanner produit des faux positifs et rate les failles logiques (le contrôle d'accès de la leçon précédente, typiquement). Chaque alerte se vérifie à la main avant d'aller au rapport.\n\n" +
            "Un scan ZAP propre ne veut pas dire « application sûre » : il veut dire « pas de faille triviale automatisable ». C'est déjà beaucoup : c'est le niveau qu'exploitent la majorité des attaques de masse.\n\n" +
            "## À toi\n\n" +
            "Une application affiche le pseudo de l'utilisateur à trois endroits : (a) dans le HTML de la page de profil ; (b) dans un attribut `href` d'un lien « mon site web » ; (c) dans un email de notification en texte brut. Où le risque XSS existe-t-il, et quelle est la subtilité du cas (b) ?\n\n" +
            "> Correction : (a) risque classique, réglé par l'échappement HTML automatique du framework. (b) risque réel et plus sournois : l'échappement HTML ne suffit pas, car une URL `javascript:alert(1)` est du HTML parfaitement valide dans un `href` (il faut valider le **schéma** de l'URL (n'autoriser que `http:`/`https:`)). L'échappement dépend du contexte d'insertion : HTML, attribut, URL et JavaScript ont chacun leurs règles. (c) pas de XSS dans un email en texte brut, le client mail n'exécute pas de script : le pseudo y reste une donnée inerte.",
        },
        {
          id: "l19",
          title: "Quiz : Réseau et web",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q13",
              prompt: "Quel est le principe « deny by default » appliqué à un pare-feu ?",
              options: [
                "Bloquer uniquement les adresses IP connues comme malveillantes",
                "Tout interdire par défaut et n'autoriser explicitement que les flux légitimes identifiés",
                "Refuser toutes les connexions entrantes et autoriser toutes les sortantes",
                "Demander une confirmation manuelle pour chaque connexion",
              ],
              correctIndex: 1,
              explanation:
                "On ne peut pas lister tout ce qui est dangereux, mais on peut lister ce qui est légitime. Tout le reste est bloqué : dans les deux sens, car le filtrage sortant (egress) coupe l'exfiltration et le command-and-control, pas seulement les intrusions entrantes.",
            },
            {
              id: "q14",
              prompt:
                "Un attaquant tape `' OR '1'='1` dans le champ login d'un site et obtient l'accès. De quelle vulnérabilité s'agit-il ?",
              options: [
                "Cross-site scripting (XSS)",
                "Attaque par force brute",
                "Injection SQL : l'entrée est interprétée comme du code par la base de données",
                "Détournement de session",
              ],
              correctIndex: 2,
              explanation:
                "L'entrée transforme la condition SQL en tautologie toujours vraie : la donnée est devenue du code. La parade décisive est la requête paramétrée, qui sépare définitivement le gabarit SQL des valeurs : c'est cette famille de faille qui a permis le pillage MOVEit de 2023.",
            },
            {
              id: "q15",
              prompt: "Quelle est la différence essentielle entre injection SQL et XSS ?",
              options: [
                "L'injection SQL vise les applications web, le XSS vise les serveurs de bases de données",
                "L'injection SQL fait exécuter du code par la base de données côté serveur, le XSS fait exécuter du script par le navigateur des autres visiteurs",
                "Le XSS est plus grave que l'injection SQL dans tous les cas",
                "L'injection SQL nécessite un compte utilisateur, pas le XSS",
              ],
              correctIndex: 1,
              explanation:
                "Même principe (une entrée non maîtrisée devient du code), deux interpréteurs différents : la base de données pour la SQLi, le navigateur des victimes pour le XSS. C'est pour ça que les parades diffèrent : requêtes paramétrées d'un côté, échappement en sortie selon le contexte de l'autre.",
            },
            {
              id: "q16",
              prompt:
                "Pourquoi la segmentation réseau limite-t-elle les dégâts d'une intrusion ?",
              options: [
                "Elle chiffre le trafic entre les machines",
                "Elle rend le réseau plus rapide, donc les attaques moins efficaces",
                "Elle cloisonne le réseau en zones étanches : un attaquant qui compromet une zone ne peut pas se propager librement aux autres",
                "Elle masque les adresses IP internes",
              ],
              correctIndex: 2,
              explanation:
                "Un réseau à plat transforme une infection locale en incendie général : NotPetya a détruit environ 49 000 postes de Maersk en quelques heures après être entré par une seule filiale. Des zones cloisonnées avec des flux explicitement autorisés confinent l'attaquant et donnent du temps à la détection.",
            },
            {
              id: "q25",
              prompt:
                "Une API renvoie la facture demandée via `/factures/4812` après avoir soigneusement paramétré sa requête SQL, mais sans vérifier à qui appartient la facture. Quelle catégorie OWASP décrit ce problème ?",
              options: [
                "A05 Injection, car l'identifiant vient de l'URL",
                "A01 Broken Access Control : la requête est techniquement propre mais les droits ne sont pas vérifiés côté serveur",
                "A04 Cryptographic Failures, car la facture n'est pas chiffrée",
                "Aucun problème : la requête paramétrée suffit",
              ],
              correctIndex: 1,
              explanation:
                "La paramétrisation élimine l'injection, pas le défaut de contrôle d'accès : n'importe quel utilisateur connecté peut incrémenter l'identifiant et lire les factures des autres. C'est la catégorie numéro 1 du Top 10 depuis 2021, et elle échappe aux scanners automatiques : il faut vérifier la propriété de la ressource côté serveur (`WHERE id = ? AND user_id = ?`).",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Défendre pour de vrai",
      lessons: [
        {
          id: "l20",
          title: "Réponse à incident : les 6 phases",
          type: "text",
          duration: "18 min",
          body:
            "## Norsk Hydro : la crise gérée en public\n\n" +
            "Dans la nuit du 19 mars 2019, le ransomware LockerGoga paralyse Norsk Hydro, l'un des plus gros producteurs d'aluminium du monde : 22 000 ordinateurs touchés sur 170 sites dans 40 pays. Certaines usines repassent en pilotage manuel, avec des classeurs papier ressortis des archives et des retraités rappelés pour aider. La direction prend deux décisions restées célèbres : **ne pas payer**, et **tout dire** (conférences de presse quotidiennes, état d'avancement publié, transparence totale). Coût final : environ 70 millions de dollars, partiellement couverts par l'assurance… et une réputation renforcée, au point que l'affaire est enseignée comme un modèle de gestion de crise.\n\n" +
            "Ce qui a sauvé Hydro n'est pas la chance : c'est d'avoir su quoi faire, dans quel ordre, sous pression. Cette compétence a un cadre.\n\n" +
            "## Les six phases\n\n" +
            "Le découpage classique vient du SANS Institute (le cycle « PICERL ») ; le guide de référence du NIST, la publication SP 800-61 (révision 3 en 2025, alignée sur son Cybersecurity Framework), regroupe les mêmes idées. Six phases :\n\n" +
            "1. **Préparation.** Tout ce qui se joue AVANT : plan de réponse écrit, rôles définis, contacts imprimés (si l'annuaire est chiffré, ton plan stocké sur le serveur chiffré ne sert à rien ; version papier ou hors ligne obligatoire), sauvegardes testées, exercices sur table. Hydro a tenu parce que cette phase existait.\n" +
            "2. **Identification.** Détecter et qualifier : est-ce un incident de sécurité ? Quel périmètre ? Depuis quand ? Les journaux de la leçon 14 deviennent ici la matière première. Erreur classique : sous-estimer (« c'est juste un poste qui rame ») et perdre les heures où l'attaquant est encore confinable.\n" +
            "3. **Confinement.** Stopper l'hémorragie sans détruire les preuves : isoler les machines du réseau (débrancher le câble, pas éteindre ; la mémoire vive contient des indices), bloquer les comptes compromis, couper les accès distants. C'est la phase des décisions dures : Maersk et Hydro ont coupé des pans entiers de leur réseau eux-mêmes, volontairement.\n" +
            "4. **Éradication.** Éliminer la cause : supprimer le malware, fermer la porte d'entrée (patcher LA faille, réinitialiser LES identifiants volés), vérifier qu'aucune persistance ne reste. Si tu éradiques sans avoir compris l'entrée, l'attaquant revient par la même porte la semaine suivante : ça se voit régulièrement.\n" +
            "5. **Rétablissement.** Restaurer depuis les sauvegardes saines, remettre en production progressivement, surveiller de près : c'est le moment où une réinfection se produit. L'affaire CHSF de la leçon 1 le montre : des mois pour retrouver un fonctionnement normal, la restauration est un marathon.\n" +
            "6. **Leçons apprises.** À froid, la réunion post-incident : chronologie, ce qui a marché, ce qui a manqué, plan d'action. Sans blâme : si les gens craignent d'être punis, ils cacheront le prochain clic malheureux, et tu perdras tes précieuses heures de la phase 2.\n\n" +
            "## Le volet français\n\n" +
            "En France, trois réflexes complètent le cadre :\n\n" +
            "- **17Cyber** (dispositif national lancé fin 2024) et **cybermalveillance.gouv.fr** orientent particuliers et PME vers le bon guichet et des prestataires labellisés ; les opérateurs critiques travaillent avec le **CERT-FR** de l'ANSSI.\n" +
            "- **Dépôt de plainte sous 72 heures** : depuis avril 2023 (loi LOPMI), une entreprise victime d'une cyberattaque doit porter plainte dans les 72 heures pour pouvoir être indemnisée par son assurance cyber. Concrètement : la plainte fait partie du plan de réponse, pas des formalités d'après.\n" +
            "- **Notification CNIL**, si des données personnelles sont touchées : leçon suivante, elle a ses propres délais.\n\n" +
            "## Les pièges de la crise\n\n" +
            "- **Éteindre les machines** par réflexe : preuves en mémoire perdues, et certains ransomwares laissent un système instable au redémarrage.\n" +
            "- **Communiquer trop tard ou mentir** : la vérité sort toujours, et chaque version successive détruit la confiance. Hydro a prouvé l'inverse : la transparence est une stratégie gagnante.\n" +
            "- **Restaurer trop vite** sur une infrastructure non éradiquée : réinfection à J+3.\n" +
            "- **Négocier seul** avec l'attaquant sans en parler aux autorités ni à un spécialiste.\n\n" +
            "Un plan qui n'a jamais servi ne vaut pas grand-chose non plus : la parade s'appelle l'**exercice sur table**. Deux heures, une fois par an, un scénario réaliste (« lundi 8 h, la compta est chiffrée ») déroulé autour d'une table avec la direction, l'IT et la communication. Pas de technique, que des décisions : qui décide de couper la production ? qui parle aux clients ? où est la version papier des contacts ? Chaque exercice révèle deux ou trois trous qu'on corrige à froid, ce qui coûte infiniment moins cher que de les découvrir en pleine crise. Hydro n'a pas improvisé sa transparence : elle était préparée.\n\n" +
            "## À toi\n\n" +
            "Lundi 8 h, la comptable t'appelle : tous ses fichiers portent l'extension `.locked`, une note de rançon s'affiche. Classe ces cinq actions dans l'ordre : (1) restaurer les sauvegardes ; (2) isoler le poste du réseau ; (3) porter plainte ; (4) chercher comment l'attaquant est entré ; (5) vérifier si d'autres machines sont touchées.\n\n" +
            "> Correction : 2 (confinement immédiat du poste, câble débranché, machine allumée) → 5 (l'identification continue : périmètre réel ? un poste ou quarante ?) → 3 (la plainte tôt (le compteur des 72 h de la LOPMI court, et les enquêteurs peuvent aider) → 4 (éradication : sans comprendre l'entrée, la restauration sera réinfectée) → 1 (rétablissement, en dernier, depuis des sauvegardes vérifiées saines)). L'erreur la plus coûteuse serait 1 en premier : on restaure dans un environnement encore compromis.",
        },
        {
          id: "l21",
          title: "RGPD, NIS2 et données personnelles",
          type: "text",
          duration: "17 min",
          body:
            "## Dedalus : l'amende qui a fait date dans la santé\n\n" +
            "En 2021, les données médicales de près de 500 000 personnes fuitent depuis Dedalus Biologie, un éditeur de logiciels pour laboratoires d'analyses : identités, numéros de sécurité sociale, mentions de pathologies, traitements (le fichier circule librement sur le web). L'enquête de la CNIL révèle une accumulation de manquements techniques : données extraites sans chiffrement, serveur mal configuré, absence de procédure. Verdict en 2022 : **1,5 million d'euros d'amende**, à l'époque un record pour la CNIL hors géants du numérique. Le message aux sous-traitants est limpide : traiter les données des autres engage TA responsabilité.\n\n" +
            "Jusqu'ici on a parlé technique. Cette leçon parle de la loi, parce qu'en Europe, protéger les données n'est pas un choix d'ingénieur, c'est une obligation.\n\n" +
            "## Le RGPD en pratique\n\n" +
            "Le Règlement général sur la protection des données s'applique depuis mai 2018 à toute organisation qui traite des données de personnes situées dans l'UE : où que soit l'organisation. Une **donnée personnelle** est tout ce qui permet d'identifier quelqu'un, directement (nom, email) ou par recoupement (adresse IP, identifiant publicitaire). Les principes utiles au quotidien :\n\n" +
            "- **Minimisation** : ne collecter que le nécessaire. Chaque champ de formulaire doit se justifier, et une donnée que tu n'as pas ne peut pas fuiter. La minimisation est une mesure de sécurité déguisée.\n" +
            "- **Finalité et durée** : une donnée collectée pour X ne sert pas à Y, et ne se garde pas éternellement.\n" +
            "- **Droits des personnes** : accès, rectification, effacement, portabilité. Il faut pouvoir y répondre sous un mois.\n" +
            "- **Sécurité (l'article 32** : le règlement impose des « mesures techniques et organisationnelles appropriées », citant nommément le chiffrement et la pseudonymisation). C'est le pont entre ce cours et le droit : le hachage des mots de passe de la leçon 11, le TLS de la leçon 12, les sauvegardes de la leçon 10 sont, littéralement, des obligations légales. Dedalus a été condamné pour leur absence.\n" +
            "- **Registre et sous-traitance** : documenter les traitements, encadrer les prestataires par contrat.\n\n" +
            "Les sanctions montent jusqu'à 20 millions d'euros ou 4 % du chiffre d'affaires mondial. La CNIL a infligé des amendes bien au-delà de Dedalus (Google, Meta, Amazon, en centaines de millions), mais l'affaire Dedalus reste la plus parlante pour une PME : pas besoin d'être un géant pour être sanctionné.\n\n" +
            "## Violation de données : le chrono des 72 heures\n\n" +
            "Si des données personnelles sont compromises (fuite, ransomware avec exfiltration, portable volé non chiffré), l'article 33 impose de **notifier la CNIL sous 72 heures** après en avoir pris connaissance, dès lors qu'il existe un risque pour les personnes. Si le risque est élevé (données médicales, bancaires, mots de passe), il faut **aussi informer les personnes concernées** directement. Tu remarqueras la convergence avec la leçon précédente : plainte sous 72 h pour l'assurance, notification CNIL sous 72 h pour le RGPD (la phase « identification » de ton plan de réponse doit inclure la question « des données personnelles sont-elles touchées ?) » dès la première heure.\n\n" +
            "La notification se fait en ligne, via le téléservice dédié sur cnil.fr, et peut être complétée en plusieurs fois si l'enquête interne est encore en cours : mieux vaut une notification initiale incomplète dans les délais qu'un dossier parfait hors délai.\n\n" +
            "Nuance importante : une violation notifiée proprement, avec des mesures correctives sérieuses, n'entraîne pas automatiquement de sanction. Ce qui aggrave le dossier, c'est la dissimulation, la négligence de fond (le cas Dedalus) ou l'absence des protections « appropriées ». Et le chiffrement joue un rôle d'amortisseur : un portable volé dont le disque est chiffré, sans la clé compromise, peut ne pas exiger d'informer les personnes (l'attaquant n'a rien d'exploitable).\n\n" +
            "## NIS2 : la sécurité devient obligatoire pour des milliers d'entités\n\n" +
            "Deuxième texte à connaître en 2026 : la directive **NIS2**, applicable dans l'UE depuis octobre 2024, en cours de transposition en France sous l'égide de l'ANSSI (mise en œuvre étalée sur 2025-2026). Là où le RGPD protège les données personnelles, NIS2 impose la cybersécurité elle-même (gestion des risques, réponse à incident, sécurité de la chaîne d'approvisionnement, notification des incidents importants sous 24 à 72 heures), à des milliers d'« entités essentielles et importantes » : énergie, santé, transports, numérique, administration, et une bonne partie de leurs fournisseurs. Concrètement, des PME qui n'avaient aucune obligation légale de sécurité en ont désormais, avec des dirigeants personnellement responsabilisés. Si tu travailles un jour pour un client dans ces secteurs, attends-toi à ce que tout ce cours devienne… du cahier des charges contractuel.\n\n" +
            "## À toi\n\n" +
            "Notifier ou pas ? (a) Un ransomware chiffre le serveur de fichiers RH, sans preuve d'exfiltration mais sans preuve du contraire ; (b) un commercial perd une clé USB chiffrée (BitLocker, clé de récupération non compromise) contenant un fichier clients ; (c) un stagiaire envoie par erreur le fichier de paie complet à un fournisseur externe.\n\n" +
            "> Correction : (a) notification CNIL : l'indisponibilité des données EST une violation au sens du RGPD (la disponibilité fait partie de la triade, le droit l'a intégrée), et sans preuve d'absence d'exfiltration, le doute compte comme un risque. (b) violation à documenter en interne, mais le chiffrement intact rend le risque pour les personnes improbable : pas de notification obligatoire (c'est l'amortisseur juridique du chiffrement). (c) violation par divulgation : notification CNIL probable, information des salariés si le risque est élevé (données de paie = sensibles), et demande écrite de destruction au fournisseur. Dans les trois cas : documenter au registre, même quand on ne notifie pas.",
        },
        {
          id: "l22",
          title: "Construire son hygiène de sécurité durable",
          type: "text",
          duration: "16 min",
          body:
            "## LastPass : la leçon finale, à domicile\n\n" +
            "Fin 2022, LastPass (un gestionnaire de mots de passe, donc une entreprise dont la sécurité est le produit), révèle l'ampleur d'une compromission : des coffres chiffrés de clients ont été exfiltrés. Le point d'entrée mérite qu'on s'y arrête : l'ordinateur **personnel** d'un des quatre ingénieurs DevOps ayant accès aux clés critiques, compromis via son serveur multimédia Plex, resté vulnérable à une faille (CVE-2020-5741) corrigée… deux ans et demi plus tôt. Un keylogger, le mot de passe maître capturé, et l'attaquant entre.\n\n" +
            "Tout ce cours tient dans cette histoire : la frontière pro/perso n'existe plus, un patch oublié sur un loisir a fait tomber une entreprise de sécurité, et la cible n'était pas la technologie mais une personne précise à un moment précis. La sécurité n'est pas un état qu'on atteint ; c'est une pratique qu'on entretient. Voici le socle, en deux étages.\n\n" +
            "## Ton socle personnel : cinq gestes\n\n" +
            "1. **Gestionnaire de mots de passe + mots de passe uniques.** Bitwarden gratuit suffit ; KeePassXC si tu veux du 100 % local. Le mot de passe maître est une phrase longue, mémorisée, utilisée nulle part ailleurs. C'est le geste au meilleur rendement de toute cette liste.\n" +
            "2. **MFA partout où c'est critique** : email d'abord (il réinitialise tout le reste), puis banque, cloud, réseaux sociaux. Passkey ou application TOTP plutôt que SMS ; une clé physique type YubiKey si ton modèle de menace le justifie.\n" +
            "3. **Mises à jour automatiques, partout.** OS, navigateur, téléphone, et les appareils qu'on oublie : box, NAS, et le serveur Plex de l'histoire ci-dessus. Ce qui ne peut pas se mettre à jour ne devrait pas être exposé à Internet.\n" +
            "4. **Sauvegarde 3-2-1** de ce qui compte vraiment : photos, documents, coffre de mots de passe exporté chiffré. Teste une restauration une fois par an : un fichier pris au hasard suffit à valider la chaîne.\n" +
            "5. **Le réflexe canal officiel.** Message inattendu qui presse ? On ne clique pas, on ouvre soi-même l'application ou le site concerné. Un seul réflexe qui désamorce phishing, smishing, faux conseillers et arnaques au président.\n\n" +
            "Tu peux déployer ce socle en un week-end. Le maintenir coûte quelques minutes par mois.\n\n" +
            "Donne-toi un rythme plutôt qu'une résolution : un rendez-vous « sécurité » de quinze minutes le premier week-end du mois. Au menu, en rotation : vérifier les mises à jour des appareils qui ne se mettent pas à jour seuls (box, NAS, objets connectés), passer ton email dans Have I Been Pwned, faire le ménage dans les accès accordés (applications connectées à ton compte Google, extensions de navigateur), jeter un œil aux sessions actives de tes comptes critiques. Quinze minutes mensuelles battent une grande résolution annuelle abandonnée en février : c'est le mécanisme des mises à jour automatiques, appliqué à toi-même.\n\n" +
            "## Le socle d'une petite organisation\n\n" +
            "Si tu portes la sécurité d'une équipe ou d'une PME, la logique change : il ne s'agit plus de TA discipline mais d'un **système qui tient sans héroïsme**. Les fondations, dans l'ordre où je les poserais :\n\n" +
            "- **Inventaire** : la liste à jour des machines, comptes, services exposés et accès des prestataires. On ne protège pas ce qu'on ignore posséder : les victimes de Log4Shell l'ont appris en cherchant leurs dépendances pendant des semaines.\n" +
            "- **MFA imposé** (pas proposé) sur tous les accès distants et l'email. Change Healthcare est tombé par UN portail sans MFA.\n" +
            "- **Patching avec un délai cible** : les correctifs critiques sur les systèmes exposés en jours, pas en mois. Equifax, WannaCry, LastPass : le trio des patchs en retard.\n" +
            "- **Moindre privilège et départs** : les droits suivent le poste, et le compte d'un partant est coupé le jour même. Les comptes orphelins de prestataires sont un point d'entrée récurrent.\n" +
            "- **Sauvegardes immuables testées** : relis la leçon 10, elle est ta police d'assurance.\n" +
            "- **Un plan de réponse d'une page**, imprimé : qui appeler, quoi couper, où sont les sauvegardes, le numéro de l'assurance. La version minimale de la « préparation » de la leçon 20.\n" +
            "- **Sensibiliser sans culpabiliser** : des exercices de phishing pour apprendre, jamais pour punir. Celui qui signale son propre clic en dix minutes vaut de l'or ; celui qui le cache par peur coûte une semaine de latence.\n\n" +
            "## L'état d'esprit pour la suite\n\n" +
            "Trois habitudes séparent ceux qui « ont suivi un cours » de ceux qui deviennent bons. **Penser en modèle de menace** : qui, pourquoi, par où (la question de la leçon 2 s'applique à chaque nouveau projet, compte ou objet connecté). **Rester en veille** : le paysage bouge (les passkeys remplacent les mots de passe, le post-quantique arrive, les arnaques par deepfake se banalisent) ; une source fiable suffit, le CERT-FR pour les alertes ou une newsletter sérieuse. **Pratiquer légalement** : TryHackMe ou les salles gratuites de Root-Me côté offensif encadré, OWASP Juice Shop en local pour le web, jamais sur des systèmes qui ne t'appartiennent pas.\n\n" +
            "Dernier mot. La sécurité parfaite n'existe pas ; LastPass, Maersk et Hydro l'ont tous appris. Mais entre « victime facile d'une attaque de masse » et « cible coûteuse qui détecte, contient et récupère », il y a exactement les gestes de cette leçon. Le quiz t'attend, puis va poser ton MFA sur ton email, si ce n'est pas déjà fait. C'est le meilleur premier pas.",
        },
        {
          id: "l23",
          title: "Quiz final : Culture sécurité",
          type: "quiz",
          duration: "8 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Un ransomware vient de chiffrer un poste de travail. Quelle est la toute première action à mener ?",
              options: [
                "Éteindre immédiatement la machine",
                "Payer la rançon pour récupérer les fichiers rapidement",
                "Isoler la machine du réseau (débrancher le câble, couper le Wi-Fi) en la laissant allumée",
                "Restaurer les sauvegardes sur la machine",
              ],
              correctIndex: 2,
              explanation:
                "Le confinement d'abord : couper le réseau stoppe la propagation, et laisser la machine allumée préserve les preuves en mémoire vive. Éteindre détruit des indices, restaurer avant d'avoir éradiqué mène à la réinfection, et payer est déconseillé par l'ANSSI comme par le FBI : Change Healthcare a payé 22 millions et s'est fait extorquer une seconde fois.",
            },
            {
              id: "q18",
              prompt:
                "Une entreprise française subit une fuite de données clients (noms, emails, historiques d'achat). Quelles obligations de délai s'appliquent ?",
              options: [
                "Aucune, tant que la fuite n'est pas rendue publique",
                "Notifier la CNIL sous 72 heures, et porter plainte sous 72 heures pour préserver l'indemnisation par l'assurance cyber",
                "Informer uniquement les clients concernés, sous un mois",
                "Notifier la CNIL sous 30 jours après la fin de l'enquête interne",
              ],
              correctIndex: 1,
              explanation:
                "Deux chronos de 72 heures courent en parallèle : la notification CNIL (article 33 du RGPD, dès la prise de connaissance) et le dépôt de plainte exigé depuis la loi LOPMI d'avril 2023 pour être indemnisé par l'assurance cyber. Si le risque pour les personnes est élevé, il faut en plus les informer directement.",
            },
            {
              id: "q19",
              prompt:
                "Pourquoi la réunion « leçons apprises » post-incident doit-elle se tenir sans chercher de coupable ?",
              options: [
                "Parce que la responsabilité individuelle n'existe pas en cybersécurité",
                "Pour éviter les conflits dans l'équipe",
                "Parce que si les gens craignent d'être punis, ils cacheront les prochains incidents et signalements, ce qui allonge le délai de détection",
                "Parce que c'est une obligation du RGPD",
              ],
              correctIndex: 2,
              explanation:
                "La matière première de la défense, c'est le signalement rapide : l'employé qui avoue son clic en dix minutes permet de confiner pendant que l'attaquant est encore isolable. Une culture de la punition détruit exactement ça. On corrige les processus qui ont laissé l'erreur passer, pas les personnes.",
            },
            {
              id: "q20",
              prompt:
                "Quel enseignement central tirer de la compromission de LastPass en 2022 ?",
              options: [
                "Les gestionnaires de mots de passe sont à éviter",
                "Le périmètre personnel et professionnel sont liés : un logiciel non patché sur un poste perso (un serveur Plex avec un correctif en retard de deux ans et demi) a suffi à atteindre l'entreprise",
                "Le chiffrement des coffres ne sert à rien",
                "Seules les grandes entreprises sont ciblées",
              ],
              correctIndex: 1,
              explanation:
                "L'attaquant a visé l'ordinateur personnel d'un ingénieur clé via son serveur multimédia vulnérable, y a posé un keylogger et capturé le mot de passe maître. La frontière pro/perso n'existe plus pour un attaquant motivé, et le patching s'applique aussi aux machines « de loisir ». Les gestionnaires restent recommandés : le problème était l'hygiène du poste, pas l'outil.",
            },
            {
              id: "q26",
              prompt:
                "Ta PME héberge un logiciel pour un client dans le secteur de l'énergie, qui t'annonce que NIS2 s'applique à sa chaîne d'approvisionnement. Qu'est-ce que cela implique concrètement pour toi ?",
              options: [
                "Rien : NIS2 ne concerne que les grands opérateurs d'énergie",
                "Uniquement une obligation de chiffrer les données personnelles",
                "Des exigences de cybersécurité contractuelles probables : gestion des risques, notification rapide des incidents, sécurité de ta propre chaîne de fournisseurs",
                "L'interdiction de sous-traiter à ton tour",
              ],
              correctIndex: 2,
              explanation:
                "NIS2 (applicable dans l'UE depuis octobre 2024, transposition française pilotée par l'ANSSI) impose la sécurité aux entités essentielles et importantes ET redescend sur leurs fournisseurs via la sécurité de la chaîne d'approvisionnement. En pratique, les exigences arrivent dans les contrats : mesures de gestion des risques, délais de notification d'incident (24 à 72 h), preuves d'hygiène de sécurité. Le RGPD protège les données personnelles ; NIS2 impose la cybersécurité elle-même.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
