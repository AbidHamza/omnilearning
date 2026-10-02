import type { FreeCourse } from "./types";

const azureFondamentauxLabs: FreeCourse = {
  "slug": "azure-fondamentaux-labs",
  "title": "Azure Fondamentaux : ateliers pratiques",
  "tagline": "Cinq ateliers guidés pour manipuler Azure pour de vrai : VM, stockage, coûts et sécurité des ressources.",
  "description": "Ce cours adapte les ateliers pratiques du parcours Microsoft AZ-900 (Azure Fundamentals) en une version réécrite, réorganisée et traduite en trois langues. Vous manipulez une vraie console Azure : créer une machine virtuelle, l'exposer avec un script, stocker un fichier dans Blob Storage, estimer un coût sans rien dépenser, et poser un verrou de ressource pour vous protéger d'une suppression accidentelle. Chaque atelier facturable se termine par une étape de nettoyage explicite, pour ne jamais laisser une ressource tourner (et coûter) pour rien.",
  "category": "Cloud Computing",
  "level": "Débutant",
  "instructor": "Équipe OmniLearn",
  "instructorBio": "Écrit par l'équipe de formateurs OmniLearn, dont un Microsoft Certified Trainer qui anime aussi des sessions de sécurité Azure (AZ-500). Les ateliers reprennent les labs ouverts de Microsoft (licence MIT), réécrits, vérifiés dans le portail Azure à la date indiquée dans chaque leçon et traduits en trois langues.",
  "hours": 4.5,
  "rating": 0,
  "learners": 0,
  "accent": "#0a84d6",
  "image": "/covers/azure-fondamentaux-labs.webp",
  "language": "Français",
  "software": "Un navigateur et un compte Azure (essai gratuit ou abonnement étudiant)",
  "prerequisites": [
    "Aucune expérience Azure préalable requise",
    "Un compte Microsoft, pour créer un essai gratuit Azure ou utiliser un abonnement étudiant",
    "À l'aise avec la navigation dans une interface web classique"
  ],
  "summary": [
    "Partie 1 : les sources du cours, la licence MIT, et ce que confirme (et ne confirme pas) l'attestation OmniLearn",
    "Partie 2 : créer une machine virtuelle, l'exposer via un script personnalisé, ouvrir le port nécessaire et nettoyer derrière vous",
    "Partie 3 : stocker un fichier dans Blob Storage et comprendre pourquoi un conteneur privé renvoie une erreur trompeuse",
    "Partie 4 : estimer le coût d'une architecture à trois services avec la calculatrice de prix officielle, sans dépenser un centime",
    "Partie 5 : poser puis retirer un verrou de ressource pour vous protéger d'une suppression accidentelle"
  ],
  "objectives": [
    "Créer et configurer une machine virtuelle Azure depuis le portail",
    "Installer un logiciel sur une VM sans connexion SSH, via une extension de script personnalisé",
    "Créer un compte de stockage et un conteneur, et régler correctement leur niveau d'accès",
    "Estimer le coût d'une architecture Azure avec la calculatrice de prix officielle",
    "Poser un verrou de ressource pour se protéger d'une suppression accidentelle",
    "Systématiser la suppression des ressources créées pour éviter toute facturation inutile"
  ],
  "skills": [
    "Azure Virtual Machines",
    "Groupes de ressources",
    "Azure Blob Storage",
    "Azure CLI",
    "Network Security Groups",
    "Calculatrice de prix Azure",
    "Verrous de ressources (resource locks)"
  ],
  "contentTypes": [
    "Leçons texte",
    "Quiz"
  ],
  "parts": [
    {
      "id": "p1",
      "title": "Sources et bases du portail",
      "lessons": [
        {
          "id": "l1",
          "title": "Sources, licence et attestation",
          "type": "text",
          "duration": "12 min",
          "body": "## Un cours indépendant, pas un produit Microsoft\n\nOmniLearn est un organisme de formation indépendant. Ce cours n'est ni affilié à Microsoft, ni approuvé, ni sponsorisé par Microsoft. « Azure » est une marque déposée de Microsoft Corporation, utilisée ici uniquement pour désigner le service cloud dont ce cours explique le fonctionnement.\n\n## D'où vient ce contenu\n\nLes ateliers pratiques de ce cours sont adaptés des labs officiels du parcours AZ-900 (Microsoft Azure Fundamentals), publiés par Microsoft Learning sur GitHub sous licence MIT.\n\n- Dépôt source : https://github.com/MicrosoftLearning/AZ-900T0x-MicrosoftAzureFundamentals\n- Version reprise : commit 12dfa4ac, consulté le 13 août 2026\n\nCe qui a été changé par rapport à la source :\n\n- réécriture complète des consignes dans un style différent, aucune phrase n'est traduite mot à mot\n- réorganisation des ateliers en cinq parties avec une progression propre à ce cours\n- traduction intégrale en français (langue de base), en anglais et en arabe\n- ajout d'explications, de mises en garde sur les coûts et de quiz qui n'existent pas dans la source\n- suppression de toutes les captures d'écran : les leçons décrivent le portail avec des mots, pas des images figées\n\n## Licence du contenu source\n\nLe contenu original est publié sous licence MIT. La voici, telle quelle :\n\n```text\nMIT License\n\nCopyright (c) 2024 Microsoft\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n```\n\n## Le piège : une licence de code n'emporte pas une marque\n\nUne licence MIT autorise à copier, modifier et redistribuer le texte ou le code qu'elle couvre. Elle n'autorise pas, en revanche, à laisser croire que le résultat est un produit Microsoft ou qu'il porte l'aval de Microsoft : le nom « Azure » et les marques associées restent protégés séparément, en dehors du droit d'auteur sur le contenu. C'est la raison précise pour laquelle ce cours rappelle, dès la première leçon, qu'il est indépendant : la licence permissive posée sur les labs d'origine donne un droit sur le texte, jamais un droit sur la marque. Un module qui confondrait les deux s'exposerait à une confusion avec un contenu officiel, sans rapport avec la qualité réelle de ce qu'il enseigne.\n\n## Ce que vaut l'attestation de fin de cours\n\nÀ la fin de ce cours, OmniLearn vous délivre une attestation. Elle confirme une seule chose : que vous avez terminé les leçons et réussi les quiz de ce cours. Ce n'est pas une certification Microsoft et elle ne remplace pas l'examen AZ-900 officiel. Cet examen se passe exclusivement par l'intermédiaire de Pearson VUE, le partenaire d'examen retenu par Microsoft, soit dans un centre de test, soit à distance sous surveillance (option OnVUE) ; son tarif dépend du pays où il est présenté et ne se devine pas ici. Si votre objectif est le titre Microsoft reconnu par les employeurs, ce cours vous donne les bases pour vous y présenter, mais l'inscription et le passage de l'examen restent une démarche séparée, à faire directement sur le site de Microsoft.\n\n> Utilisez ce cours pour comprendre Azure et pratiquer sans risque. Utilisez le site de Microsoft si vous voulez passer l'examen officiel.\n\n*Vérifié le 27 septembre 2026 sur https://learn.microsoft.com/en-us/credentials/certifications/register-schedule-exam.*",
          "i18n": {
            "en": {
              "title": "Sources, license and attestation",
              "body": "## An independent course, not a Microsoft product\n\nOmniLearn is an independent training provider. This course is not affiliated with, endorsed by, or sponsored by Microsoft. \"Azure\" is a registered trademark of Microsoft Corporation, used here only to name the cloud service this course explains.\n\n## Where this content comes from\n\nThe hands-on labs in this course are adapted from the official AZ-900 (Microsoft Azure Fundamentals) labs, published by Microsoft Learning on GitHub under the MIT license.\n\n- Source repository: https://github.com/MicrosoftLearning/AZ-900T0x-MicrosoftAzureFundamentals\n- Version used: commit 12dfa4ac, retrieved on August 13, 2026\n\nWhat was changed compared to the source:\n\n- complete rewrite of the instructions in a different style, no sentence is a word-for-word translation\n- reorganized into five parts with a progression specific to this course\n- full translation into French (base language), English and Arabic\n- added explanations, cost warnings and quizzes that do not exist in the source\n- every screenshot was removed: lessons describe the portal in words, not fixed images\n\n## License of the source content\n\nThe original content is published under the MIT license. Here it is, unchanged:\n\n```text\nMIT License\n\nCopyright (c) 2024 Microsoft\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n```\n\n## The trap: a code license does not carry a trademark\n\nAn MIT license lets you copy, modify and redistribute the text or code it covers. It does not let you imply that the result is a Microsoft product or carries Microsoft's endorsement: the \"Azure\" name and the marks tied to it are protected separately, outside the copyright on the content itself. That is the exact reason this course states, from its first lesson, that it stands on its own: the permissive license on the original labs grants a right over the text, never a right over the brand. A course that blurred the two would risk being mistaken for official material, regardless of how accurate its actual teaching is.\n\n## What the end-of-course attestation is worth\n\nAt the end of this course, OmniLearn issues an attestation. It confirms exactly one thing: that you completed the lessons and passed the quizzes of this course. It is not a Microsoft certification and it does not replace the official AZ-900 exam. That exam is delivered exclusively through Pearson VUE, the exam partner Microsoft has contracted, either at a test center or remotely under supervision (the OnVUE option); its price depends on the country where it is taken and is not something to guess at here. If your goal is the Microsoft credential recognized by employers, this course gives you the groundwork to sit for it, but registering and taking the exam remain a separate step, done directly on Microsoft's site.\n\n> Use this course to understand Azure and practice without risk. Use Microsoft's site if you want to take the official exam.\n\n*Checked on September 27, 2026 against https://learn.microsoft.com/en-us/credentials/certifications/register-schedule-exam.*"
            },
            "ar": {
              "title": "المصادر والترخيص والإفادة",
              "body": "## كورس مستقل، وليس منتجًا من Microsoft\n\nOmniLearn جهة تدريب مستقلة. هذا الكورس غير تابع لشركة Microsoft، وغير معتمد منها، وغير مموَّل منها. اسم \"Azure\" علامة تجارية مسجَّلة لشركة Microsoft Corporation، استُخدمت هنا فقط للإشارة إلى الخدمة السحابية التي يشرحها هذا الكورس.\n\n## من أين جاء هذا المحتوى\n\nالتمارين العملية في هذا الكورس مُقتبسة من تمارين مسار AZ-900 (Microsoft Azure Fundamentals) الرسمية، التي نشرتها Microsoft Learning على GitHub تحت ترخيص MIT.\n\n- المستودع المصدر: https://github.com/MicrosoftLearning/AZ-900T0x-MicrosoftAzureFundamentals\n- النسخة المعتمدة: commit 12dfa4ac، بتاريخ 13 أغسطس 2026\n\nما تم تغييره مقارنة بالمصدر:\n\n- إعادة كتابة كاملة للتعليمات بأسلوب مختلف، لا توجد أي جملة مترجمة حرفيًا\n- إعادة تنظيم التمارين في خمسة أجزاء بترتيب خاص بهذا الكورس\n- ترجمة كاملة إلى الفرنسية (اللغة الأساسية)، والإنجليزية، والعربية\n- إضافة شروحات، وتحذيرات حول التكلفة، واختبارات (quiz) غير موجودة في المصدر\n- حذف جميع لقطات الشاشة: الدروس تصف بوابة (Portal) Azure بالكلمات، لا بصور ثابتة\n\n## ترخيص المحتوى المصدر\n\nالمحتوى الأصلي منشور تحت ترخيص MIT. هذا نصه كما هو:\n\n```text\nMIT License\n\nCopyright (c) 2024 Microsoft\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n```\n\n## الفخ: ترخيص الكود لا يمنح حق استعمال العلامة التجارية\n\nترخيص MIT يسمح بنسخ النص أو الكود الذي يغطيه، وتعديله، وإعادة توزيعه. لكنه لا يسمح بالإيحاء بأن النتيجة منتج من Microsoft أو أنها تحمل مباركة Microsoft: فاسم \"Azure\" والعلامات المرتبطة به محمية بشكل منفصل، خارج حقوق النشر على المحتوى نفسه. لهذا السبب بالتحديد يذكّر هذا الكورس، منذ درسه الأول، بأنه مستقل: الترخيص المتساهل على التمارين الأصلية يمنح حقًا على النص، لا حقًا على العلامة التجارية. أي كورس يخلط بين الأمرين يخاطر بأن يُظَنّ محتوى رسميًا، بغض النظر عن دقة ما يُدرّسه فعليًا.\n\n## ما تعنيه شهادة إتمام الكورس\n\nفي نهاية هذا الكورس، تمنحك OmniLearn شهادة إتمام (attestation). وهي تؤكد أمرًا واحدًا فقط: أنك أنهيت الدروس واجتزت اختبارات هذا الكورس. هذه ليست شهادة معتمدة (certification) من Microsoft ولا تحل محل امتحان AZ-900 الرسمي. يُقدَّم هذا الامتحان حصريًا عبر Pearson VUE، شريك الامتحانات الذي تعاقدت معه Microsoft، إما في مركز اختبار، أو عن بُعد تحت مراقبة (خيار OnVUE) ؛ وتكلفته تتوقف على البلد الذي يُجرى فيه الامتحان، ولا تُخمَّن هنا. إذا كان هدفك هو الاعتماد الرسمي من Microsoft المعترف به لدى أصحاب العمل، فهذا الكورس يمنحك الأساس اللازم لخوض ذلك الامتحان، لكن التسجيل وأداء الامتحان يبقيان خطوة منفصلة، تُنجز مباشرة عبر موقع Microsoft.\n\n> استخدم هذا الكورس لفهم Azure والتمرّن دون أي مخاطرة. استخدم موقع Microsoft إذا أردت خوض الامتحان الرسمي.\n\n*تم التحقق في 2026-09-27 على https://learn.microsoft.com/en-us/credentials/certifications/register-schedule-exam.*"
            }
          },
          "isFree": true
        },
        {
          "id": "l2",
          "title": "Le portail, l'abonnement et le groupe de ressources",
          "type": "text",
          "duration": "10 min",
          "body": "## Le portail, votre console de pilotage\n\nLe portail Azure (portal.azure.com) est l'interface web depuis laquelle vous créez et surveillez vos ressources. Comme toute interface mise à jour en continu, l'emplacement d'un bouton ou le libellé d'une case à cocher change parfois d'une semaine à l'autre. Si un libellé ne correspond pas exactement à ce que vous voyez, cherchez la case qui remplit la même fonction.\n\n## L'abonnement, l'unité de facturation\n\nUn abonnement (« subscription ») est le conteneur qui relie vos ressources à un mode de paiement. Tout ce que vous créez dans Azure appartient à un abonnement, qui reçoit la facture à la fin du mois.\n\n## Le groupe de ressources, l'unité de rangement\n\nUn groupe de ressources (« resource group ») regroupe les ressources qui partagent un même cycle de vie : une application, un projet, un atelier. Le nom n'a pas de sens technique, vous l'appelez comme vous voulez, tant qu'il reste unique dans l'abonnement.\n\n### Pourquoi ranger dans un groupe\n\n- Supprimer le groupe supprime tout ce qu'il contient, en une seule action.\n- Un droit d'accès posé sur le groupe s'applique à toutes ses ressources.\n- Le coût du groupe donne le coût du projet, sans cocher les ressources une par une.\n\n## Une ressource en entraîne d'autres\n\nQuand vous créez une machine virtuelle depuis le portail, Azure ne crée pas qu'une VM. Le formulaire ajoute un disque managé, une carte réseau virtuelle, une adresse IP publique et un groupe de sécurité réseau, tous rangés dans le même groupe que la VM. Allez voir le contenu du groupe après la création : vous y trouverez cette famille de ressources, même si vous n'en avez demandé qu'une.\n\n## Le piège : supprimer la VM ne supprime pas le reste\n\nBeaucoup pensent que supprimer une machine virtuelle nettoie tout ce qu'elle a entraîné avec elle. C'est faux par défaut : le disque, la carte réseau et l'adresse IP publique restent dans le groupe et continuent d'être facturés tant qu'ils existent. C'est pour cette raison que la fin de chaque atelier de ce cours vous demande de supprimer le groupe de ressources entier, pas la seule VM.\n\n> Retenez ce réflexe : avant de créer quoi que ce soit sur Azure, choisissez ou créez d'abord le groupe de ressources qui va l'accueillir. C'est aussi la première chose à supprimer en fin d'atelier, groupe entier, pas ressource par ressource.\n\n> **À retenir**\n>\n> - L'abonnement relie vos ressources à un mode de paiement et reçoit la facture.\n> - Le groupe de ressources range ce qui partage un cycle de vie : le supprimer supprime tout son contenu, un droit posé dessus s'applique à tout, et son coût donne le coût du projet.\n> - Supprimer une VM laisse le disque, la carte réseau et l'adresse IP publique, qui restent facturés.\n\n> **À vous de jouer**\n>\n> 1. Dans le portail, créez un groupe de ressources nommé `IntroAzureRG`.\n> 2. Tentez d'en créer un second avec exactement le même nom : le nom doit rester unique dans l'abonnement, notez ce que répond le portail.\n> 3. Ouvrez `IntroAzureRG` et constatez qu'il est vide. Gardez-le, les parties suivantes l'utilisent.\n\n*Vérifié le 27 septembre 2026 sur https://learn.microsoft.com/en-us/azure/virtual-machines/delete.*",
          "i18n": {
            "en": {
              "title": "The portal, the subscription and the resource group",
              "body": "## The portal, your control console\n\nThe Azure portal (portal.azure.com) is the web interface you use to create and watch over your resources. Like any interface under continuous updates, the exact position of a button or the wording of a checkbox can change from one week to the next. If a label does not match exactly what you see, look for the box that serves the same purpose.\n\n## The subscription, the billing unit\n\nA subscription is the container that links your resources to a payment method. Everything you create in Azure belongs to a subscription, which receives the bill at the end of the month.\n\n## The resource group, the storage unit\n\nA resource group gathers resources that share the same lifecycle: an application, a project, a lab. The name carries no particular technical meaning, you can call it whatever you want, as long as it stays unique within the subscription.\n\n### Why group resources\n\n- Deleting the group deletes everything inside it, in a single action.\n- An access right applied on the group applies to all its resources.\n- The group's cost gives you the project's cost, without checking resources one by one.\n\n## One resource brings others along\n\nWhen you create a virtual machine from the portal, Azure does not create just a VM. The form adds a managed disk, a virtual network card, a public IP address and a network security group, all placed in the same group as the VM. Look inside the group after creation: you will find this family of resources, even though you only asked for one.\n\n## The trap: deleting the VM does not delete the rest\n\nMany people assume that deleting a virtual machine cleans up everything it brought along. That is wrong by default: the disk, the network card and the public IP address stay in the resource group and keep being billed as long as they exist. That is exactly why every lab in this course ends by asking you to delete the whole resource group, not just the VM.\n\n> Keep this habit: before creating anything in Azure, pick or create the resource group that will hold it first. It is also the first thing to delete at the end of a lab, the whole group, not resource by resource.\n\n> **Key takeaways**\n>\n> - The subscription ties your resources to a payment method and receives the bill.\n> - The resource group holds what shares a life cycle: deleting it deletes everything inside, a permission set on it applies to all of it, and its cost gives the cost of the project.\n> - Deleting a VM leaves the disk, the network card and the public IP address, which keep being billed.\n\n> **Your turn**\n>\n> 1. In the portal, create a resource group named `IntroAzureRG`.\n> 2. Try to create a second one with exactly the same name: the name must stay unique in the subscription, note what the portal answers.\n> 3. Open `IntroAzureRG` and check that it is empty. Keep it, the next parts use it.\n\n*Checked on September 27, 2026 against https://learn.microsoft.com/en-us/azure/virtual-machines/delete.*"
            },
            "ar": {
              "title": "البوابة والاشتراك ومجموعة الموارد",
              "body": "## البوابة (Portal)، لوحة تحكمك\n\nبوابة Azure (portal.azure.com) هي الواجهة التي تُنشئ وتراقب من خلالها مواردك. مثل أي واجهة تُحدَّث باستمرار، قد يتغيّر مكان زر أو نص خانة اختيار (checkbox) من أسبوع لآخر. إن لم يطابق التسمية ما تراه بالضبط، ابحث عن الخانة التي تؤدي نفس الوظيفة.\n\n## الاشتراك (Subscription)، وحدة الفوترة\n\nالاشتراك (Subscription) هو الحاوية التي تربط مواردك بوسيلة دفع. كل ما تنشئه في Azure ينتمي إلى اشتراك، وهو من يستلم الفاتورة نهاية الشهر.\n\n## مجموعة الموارد (Resource Group)، وحدة الترتيب\n\nمجموعة الموارد (Resource Group) تجمع الموارد التي تشترك في نفس دورة الحياة: تطبيق، مشروع، تمرين واحد. الاسم لا يحمل أي معنى تقني، تسمّيه كما تشاء، طالما بقي فريدًا داخل الاشتراك.\n\n### لماذا الترتيب داخل مجموعة\n\n- حذف المجموعة يحذف كل ما بداخلها، في عملية واحدة.\n- صلاحية وصول تُطبَّق على المجموعة تسري على كل مواردها.\n- تكلفة المجموعة تعطيك تكلفة المشروع كاملة، دون تفقّد كل مورد على حدة.\n\n## مورد واحد يجلب معه موارد أخرى\n\nعندما تنشئ Virtual Machine من البوابة، لا تنشئ Azure الجهاز الافتراضي وحده. النموذج (form) يضيف قرصًا مُدارًا (managed disk)، وبطاقة شبكة افتراضية، وعنوان IP عامًا، ومجموعة أمان شبكة (NSG)، كلها في نفس مجموعة الموارد الخاصة بالـ VM. افتح محتوى المجموعة بعد الإنشاء: ستجد هذه العائلة من الموارد، حتى لو طلبت واحدًا فقط منها.\n\n## الفخ: حذف الـ VM لا يحذف الباقي\n\nكثيرون يظنون أن حذف جهاز افتراضي ينظّف كل ما جلبه معه. هذا خطأ افتراضيًا: القرص، وبطاقة الشبكة، وعنوان IP العام تبقى داخل مجموعة الموارد وتستمر الفوترة عليها طالما بقيت موجودة. لهذا السبب بالتحديد يطلب منك كل تمرين في هذا الكورس، في نهايته، حذف مجموعة الموارد بأكملها، لا الـ VM وحدها.\n\n> احتفظ بهذه العادة: قبل إنشاء أي شيء في Azure، اختر أو أنشئ أولًا مجموعة الموارد التي ستستضيفه. وهي أيضًا أول شيء تحذفه في نهاية التمرين، المجموعة كاملة، لا موردًا موردًا.\n\n> **للتذكّر**\n>\n> - الاشتراك يربط مواردك بوسيلة دفع ويستقبل الفاتورة.\n> - مجموعة الموارد ترتّب ما يشترك في دورة حياة واحدة: حذفها يحذف كل محتواها، وأي صلاحية موضوعة عليها تسري على كل ما فيها، وتكلفتها تعطي تكلفة المشروع.\n> - حذف الـ VM يُبقي القرص وبطاقة الشبكة وعنوان IP العام، وتظل هذه تُحاسَب.\n\n> **دورك الآن**\n>\n> 1. في البوابة، أنشئ مجموعة موارد باسم `IntroAzureRG`.\n> 2. حاول إنشاء مجموعة ثانية بالاسم نفسه تمامًا: يجب أن يبقى الاسم فريدًا داخل الاشتراك، ولاحظ ما ترد به البوابة.\n> 3. افتح `IntroAzureRG` وتحقق أنها فارغة. احتفظ بها، فالأجزاء التالية تستخدمها.\n\n*تم التحقق في 2026-09-27 على https://learn.microsoft.com/en-us/azure/virtual-machines/delete.*"
            }
          },
          "isFree": true
        }
      ]
    },
    {
      "id": "p2",
      "title": "Créer et sécuriser une machine virtuelle",
      "lessons": [
        {
          "id": "l3",
          "title": "Créer une machine virtuelle",
          "type": "text",
          "duration": "15 min",
          "body": "## Le formulaire de création\n\nLa création d'une VM passe par un formulaire en plusieurs onglets, dont l'onglet « Basics » (informations de base) est celui qui compte le plus. Il vous demande le strict nécessaire pour démarrer une machine.\n\n| Paramètre | Ce que vous choisissez |\n| --- | --- |\n| Groupe de ressources | celui que vous avez créé pour l'atelier |\n| Nom de la VM | un nom court, sans espace |\n| Région | la même que votre groupe de ressources |\n| Taille | une taille économique pour un test (catégorie B, par exemple Standard_B1s) |\n| Authentification | mot de passe ou clé SSH selon le système |\n| Nom d'utilisateur | un identifiant que vous choisissez |\n| Ports entrants publics | aucun, sauf besoin précis |\n\nLe réglage « Ports entrants publics » mérite un arrêt. Le laisser sur « Aucun » ferme la machine à toute connexion entrante depuis internet au démarrage. Si vous prévoyez de vous y connecter en SSH tout de suite, vous pouvez autoriser le port 22 ; sinon, ouvrez les ports au cas par cas plus tard, une fois que vous savez lesquels vous sont vraiment nécessaires.\n\n## Le piège : la facturation démarre avec la VM, pas avec votre connexion\n\n> Une VM facture depuis l'instant où elle démarre, à l'heure, tant qu'elle tourne, même si vous ne vous y connectez jamais. Une taille B1s coûte peu, mais « peu » multiplié par des jours oubliés finit par compter. Le seul état qui ne facture pas le calcul est « Stopped (Deallocated) », atteint depuis le bouton Arrêter du portail, pas en fermant simplement l'onglet du navigateur.\n\nUne fois le formulaire validé, la création prend une à deux minutes. Le portail vous avertit par une notification, puis propose « Accéder à la ressource » pour ouvrir la fiche de la VM.\n\n*Vérifié le 27 septembre 2026 sur https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal.*",
          "i18n": {
            "en": {
              "title": "Creating a virtual machine",
              "body": "## The creation form\n\nCreating a VM goes through a multi-tab form, and the \"Basics\" tab is the one that matters most. It asks for the strict minimum needed to start a machine.\n\n| Setting | What you choose |\n| --- | --- |\n| Resource group | the one you created for this lab |\n| VM name | a short name, no spaces |\n| Region | the same one as your resource group |\n| Size | a budget size for a test (B-series, for example Standard_B1s) |\n| Authentication | password or SSH key depending on the OS |\n| Username | an identifier you pick yourself |\n| Public inbound ports | none, unless you have a specific need |\n\nThe \"Public inbound ports\" setting deserves a pause. Leaving it on \"None\" closes the machine to any inbound connection from the internet at startup. If you plan to connect over SSH right away, you can allow port 22; otherwise, open ports case by case later, once you know which ones you actually need.\n\n## The trap: billing starts with the VM, not with your connection\n\n> A VM is billed from the moment it starts, by the hour, for as long as it runs, even if you never connect to it. A B1s size costs little, but \"little\" multiplied by forgotten days adds up. The only state that stops compute billing is \"Stopped (Deallocated)\", reached from the portal's Stop button, not by simply closing the browser tab.\n\nOnce the form is submitted, creation takes one to two minutes. The portal notifies you, then offers \"Go to resource\" to open the VM's page.\n\n*Checked on September 27, 2026 against https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal.*"
            },
            "ar": {
              "title": "إنشاء جهاز افتراضي",
              "body": "## نموذج الإنشاء\n\nإنشاء VM يمر عبر نموذج (form) بعدة تبويبات (tabs)، وتبويب \"Basics\" هو الأهم بينها. يطلب منك الحد الأدنى الضروري لتشغيل جهاز.\n\n| الإعداد | ما تختاره |\n| --- | --- |\n| مجموعة الموارد (Resource group) | تلك التي أنشأتها لهذا التمرين |\n| اسم الـ VM | اسم قصير، دون مسافات |\n| المنطقة (Region) | نفس منطقة مجموعة الموارد |\n| الحجم (Size) | حجم اقتصادي لتجربة (فئة B، مثل Standard_B1s) |\n| المصادقة (Authentication) | كلمة مرور أو مفتاح SSH حسب نظام التشغيل |\n| اسم المستخدم | معرّف تختاره بنفسك |\n| المنافذ الواردة العامة (Public inbound ports) | لا شيء، إلا لحاجة محددة |\n\nإعداد \"المنافذ الواردة العامة\" يستحق التوقف عنده. إبقاؤه على \"None\" يغلق الجهاز أمام أي اتصال وارد من الإنترنت عند التشغيل. إذا كنت تخطط للاتصال عبر SSH فورًا، يمكنك السماح بالمنفذ 22؛ وإلا، افتح المنافذ لاحقًا حسب الحاجة، بعد أن تعرف بالضبط أيها ضروري لك.\n\n## الفخ: الفوترة تبدأ مع الـ VM، لا مع اتصالك به\n\n> تُفوتَر الـ VM منذ لحظة تشغيلها، بالساعة، طالما بقيت تعمل، حتى لو لم تتصل بها أبدًا. حجم B1s تكلفته قليلة، لكن \"القليل\" مضروبًا في أيام منسية يصبح مبلغًا محسوسًا. الحالة الوحيدة التي توقف فوترة الحوسبة هي \"Stopped (Deallocated)\"، والتي تُبلَغ من زر الإيقاف في البوابة (Portal)، لا بمجرد إغلاق تبويب المتصفح.\n\nبعد إرسال النموذج، يستغرق الإنشاء دقيقة إلى دقيقتين. تُعلمك البوابة بإشعار، ثم تعرض \"Go to resource\" لفتح صفحة الـ VM.\n\n*تم التحقق في 2026-09-27 على https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal.*"
            }
          }
        },
        {
          "id": "l4",
          "title": "Configurer la VM avec un script personnalisé",
          "type": "text",
          "duration": "15 min",
          "body": "## Exécuter un script sans se connecter en SSH\n\nPlutôt que de vous connecter à la VM pour taper des commandes, Azure propose les extensions de VM : des scripts exécutés pour vous, à l'intérieur de la machine, depuis le portail ou la ligne de commande. L'extension « Custom Script » télécharge un fichier et l'exécute.\n\nExemple : installer et configurer Nginx (un serveur web) sur une VM Linux nommée my-vm, dans le groupe IntroAzureRG, depuis Azure Cloud Shell.\n\n```azurecli\naz vm extension set \\\n  --resource-group \"IntroAzureRG\" \\\n  --vm-name my-vm \\\n  --name customScript \\\n  --publisher Microsoft.Azure.Extensions \\\n  --version 2.1 \\\n  --settings \"{{\\\"fileUris\\\":[\\\"https://exemple.tld/configure-nginx.sh\\\"]}}\" \\\n  --protected-settings \"{{\\\"commandToExecute\\\": \\\"./configure-nginx.sh\\\"}}\"\n```\n\nLe script met à jour les paquets, installe nginx, puis écrit une page d'accueil affichant le nom de la machine. La commande met une à deux minutes à répondre : Azure attend la fin du script avant de rendre la main.\n\n## Vérifier depuis la ligne de commande\n\nRécupérez l'adresse IP publique de la VM :\n\n```azurecli\naz vm list-ip-addresses \\\n  --resource-group \"IntroAzureRG\" \\\n  --name my-vm \\\n  --query \"[].virtualMachine.network.publicIpAddresses[*].ipAddress\" \\\n  --output tsv\n```\n\nPuis interrogez le serveur avec curl :\n\n```bash\ncurl --connect-timeout 5 http://ADRESSE_IP_ICI\n```\n\n## Le piège : un échec attendu, pas une panne\n\nÀ ce stade, la commande échoue le plus souvent par un délai dépassé (« connection timed out »). Le script a bien tourné, et nginx écoute réellement sur le port 80 dans la VM. Ce qui bloque, c'est le pare-feu réseau devant la machine, qui n'autorise aucun trafic entrant par défaut. Recréer la VM ne changerait rien : la leçon suivante, sur le groupe de sécurité réseau, comble ce manque.\n\n*Vérifié le 27 septembre 2026 sur https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-linux.*",
          "i18n": {
            "en": {
              "title": "Configuring the VM with a custom script",
              "body": "## Running a script without connecting over SSH\n\nInstead of connecting to the VM to type commands, Azure offers VM extensions: scripts run for you, inside the machine, from the portal or the command line. The \"Custom Script\" extension downloads a file and runs it.\n\nExample: installing and configuring Nginx (a web server) on a Linux VM named my-vm, inside the IntroAzureRG group, from Azure Cloud Shell.\n\n```azurecli\naz vm extension set \\\n  --resource-group \"IntroAzureRG\" \\\n  --vm-name my-vm \\\n  --name customScript \\\n  --publisher Microsoft.Azure.Extensions \\\n  --version 2.1 \\\n  --settings \"{{\\\"fileUris\\\":[\\\"https://example.tld/configure-nginx.sh\\\"]}}\" \\\n  --protected-settings \"{{\\\"commandToExecute\\\": \\\"./configure-nginx.sh\\\"}}\"\n```\n\nThe script updates packages, installs nginx, then writes a home page that displays the machine's name. The command takes one to two minutes to return: Azure waits for the script to finish before handing control back.\n\n## Checking from the command line\n\nGet the VM's public IP address:\n\n```azurecli\naz vm list-ip-addresses \\\n  --resource-group \"IntroAzureRG\" \\\n  --name my-vm \\\n  --query \"[].virtualMachine.network.publicIpAddresses[*].ipAddress\" \\\n  --output tsv\n```\n\nThen query the server with curl:\n\n```bash\ncurl --connect-timeout 5 http://YOUR_IP_HERE\n```\n\n## The trap: an expected failure, not a breakdown\n\nAt this point, the command most often fails with a timeout (\"connection timed out\"). The script did run, and nginx really is listening on port 80 inside the VM. What's blocking is the network firewall in front of the machine, which allows no inbound traffic by default. Recreating the VM would change nothing: the next lesson, on the network security group, fills that gap.\n\n*Checked on September 27, 2026 against https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-linux.*"
            },
            "ar": {
              "title": "ضبط الـ VM بسكربت مخصص",
              "body": "## تشغيل سكربت دون الاتصال عبر SSH\n\nبدل الاتصال بالـ VM لكتابة الأوامر، توفر Azure إضافات (extensions) للـ VM: سكربتات تُشغَّل نيابة عنك، داخل الجهاز، من البوابة (Portal) أو من سطر الأوامر. إضافة \"Custom Script\" تُنزّل ملفًا وتشغّله.\n\nمثال: تثبيت وضبط Nginx (خادم ويب) على VM يعمل بـ Linux باسم my-vm، داخل مجموعة IntroAzureRG، من Azure Cloud Shell.\n\n```azurecli\naz vm extension set \\\n  --resource-group \"IntroAzureRG\" \\\n  --vm-name my-vm \\\n  --name customScript \\\n  --publisher Microsoft.Azure.Extensions \\\n  --version 2.1 \\\n  --settings \"{{\\\"fileUris\\\":[\\\"https://example.tld/configure-nginx.sh\\\"]}}\" \\\n  --protected-settings \"{{\\\"commandToExecute\\\": \\\"./configure-nginx.sh\\\"}}\"\n```\n\nالسكربت يحدّث الحزم، يثبّت nginx، ثم يكتب صفحة ترحيب تعرض اسم الجهاز. الأمر يستغرق دقيقة إلى دقيقتين قبل أن يستجيب: تنتظر Azure انتهاء السكربت قبل إعادة التحكم.\n\n## التحقق من سطر الأوامر\n\nاحصل على عنوان IP العام للـ VM:\n\n```azurecli\naz vm list-ip-addresses \\\n  --resource-group \"IntroAzureRG\" \\\n  --name my-vm \\\n  --query \"[].virtualMachine.network.publicIpAddresses[*].ipAddress\" \\\n  --output tsv\n```\n\nثم استعلم عن الخادم باستخدام curl:\n\n```bash\ncurl --connect-timeout 5 http://YOUR_IP_HERE\n```\n\n## الفخ: فشل متوقع، لا عطل\n\nفي هذه المرحلة، يفشل الأمر غالبًا بانتهاء المهلة (\"connection timed out\"). السكربت اشتغل فعلًا، و nginx يستمع فعليًا على المنفذ 80 داخل الـ VM. ما يمنع المرور هو جدار الحماية الشبكي أمام الجهاز، الذي لا يسمح افتراضيًا بأي حركة واردة. إعادة إنشاء الـ VM لن يغيّر شيئًا: الدرس التالي، عن مجموعة أمان الشبكة (NSG)، يسد هذه الثغرة.\n\n*تم التحقق في 2026-09-27 على https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-linux.*"
            }
          }
        },
        {
          "id": "l5",
          "title": "Ouvrir l'accès réseau et nettoyer",
          "type": "text",
          "duration": "15 min",
          "body": "## Le pare-feu attaché à la carte réseau\n\nUn groupe de sécurité réseau (NSG) filtre le trafic entrant et sortant d'une VM. Il fonctionne par règles classées par priorité : plus le chiffre de priorité est bas, plus la règle est examinée tôt. Azure ajoute par défaut une règle qui autorise le port 22 (SSH) et bloque le reste du trafic entrant venu d'internet.\n\nRetrouvez le NSG attaché à la carte réseau de votre VM :\n\n```azurecli\naz network nic list \\\n  --query \"[?virtualMachine.id && contains(virtualMachine.id, '/my-vm')].networkSecurityGroup.id | [0]\"\n```\n\nListez ses règles :\n\n```azurecli\naz network nsg rule list \\\n  --resource-group \"IntroAzureRG\" \\\n  --nsg-name \"NOM_DU_NSG\" \\\n  --query \"[].{{Name:name, Priority:priority, Port:destinationPortRange, Access:access}}\" \\\n  --output table\n```\n\nVous devriez voir une seule règle pour l'instant, sur le port 22. Ajoutez une règle pour le port 80 (HTTP) :\n\n```azurecli\naz network nsg rule create \\\n  --resource-group \"IntroAzureRG\" \\\n  --nsg-name \"NOM_DU_NSG\" \\\n  --name allow-http \\\n  --protocol tcp \\\n  --priority 100 \\\n  --destination-port-range 80 \\\n  --access Allow\n```\n\nRelancez la commande curl de la leçon précédente : elle devrait maintenant répondre avec la page d'accueil générée par le script. La différence entre les deux essais montre bien que le script d'installation et l'ouverture du port sont deux étapes séparées, l'une n'entraîne pas l'autre.\n\n## Le piège : un port ouvert et oublié\n\n> N'ouvrez que les ports dont vous avez vraiment besoin, et seulement le temps de l'atelier. Un port 80 ou 22 ouvert sur une VM oubliée est une porte que vous laissez sans surveillance, et une VM oubliée facture en plus tant qu'elle tourne.\n\n## Nettoyage : ne laissez jamais une VM tourner pour rien\n\nCet atelier a créé une VM qui facture à l'heure tant qu'elle tourne, plus les ressources qui l'accompagnent (disque, IP publique, carte réseau). Une fois les commandes de cette partie testées, supprimez le groupe de ressources complet :\n\n```azurecli\naz group delete --name \"IntroAzureRG\" --yes --no-wait\n```\n\nCette commande supprime la VM et tout ce qui a été créé avec elle en une seule opération. `--no-wait` rend la main tout de suite ; la suppression continue en arrière-plan. Vérifiez ensuite dans le portail que le groupe a bien disparu avant de passer à la suite.\n\n> **À retenir**\n>\n> - L'extension Custom Script exécute un script dans la VM sans connexion SSH.\n> - Installer un serveur et ouvrir son port sont deux étapes séparées : l'une n'entraîne pas l'autre.\n> - Le groupe de sécurité réseau classe ses règles par priorité, le plus petit chiffre est examiné en premier. Par défaut, seul le port 22 est autorisé en entrée.\n> - Pour ne rien laisser facturer, supprimez le groupe de ressources entier.\n\n> **À vous de jouer**\n>\n> 1. Listez les règles du NSG avec `az network nsg rule list` : vous ne devez voir que le port 22.\n> 2. Écrivez ce que vous attendez de `curl`, puis lancez-le sur l'IP de la VM et comparez.\n> 3. Créez la règle `allow-http` (priorité 100, port 80), relistez les règles : il y en a maintenant deux.\n> 4. Relancez `curl` et comparez avec votre prédiction. Puis supprimez `IntroAzureRG` et vérifiez dans le portail qu'il a disparu.\n\n*Vérifié le 27 septembre 2026 sur https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview.*",
          "i18n": {
            "en": {
              "title": "Opening network access and cleaning up",
              "body": "## The firewall attached to the network card\n\nA network security group (NSG) filters inbound and outbound traffic for a VM. It works through rules ranked by priority: the lower the priority number, the earlier the rule is checked. Azure adds a default rule that allows port 22 (SSH) and blocks the rest of the inbound traffic coming from the internet.\n\nFind the NSG attached to your VM's network card:\n\n```azurecli\naz network nic list \\\n  --query \"[?virtualMachine.id && contains(virtualMachine.id, '/my-vm')].networkSecurityGroup.id | [0]\"\n```\n\nList its rules:\n\n```azurecli\naz network nsg rule list \\\n  --resource-group \"IntroAzureRG\" \\\n  --nsg-name \"YOUR_NSG_NAME\" \\\n  --query \"[].{{Name:name, Priority:priority, Port:destinationPortRange, Access:access}}\" \\\n  --output table\n```\n\nYou should see a single rule for now, on port 22. Add a rule for port 80 (HTTP):\n\n```azurecli\naz network nsg rule create \\\n  --resource-group \"IntroAzureRG\" \\\n  --nsg-name \"YOUR_NSG_NAME\" \\\n  --name allow-http \\\n  --protocol tcp \\\n  --priority 100 \\\n  --destination-port-range 80 \\\n  --access Allow\n```\n\nRun the curl command from the previous lesson again: it should now return the home page generated by the script. The difference between the two attempts clearly shows that the installation script and opening the port are two separate steps, one does not trigger the other.\n\n## The trap: an open port left forgotten\n\n> Only open the ports you actually need, and only for the duration of the lab. An open port 80 or 22 on a forgotten VM is a door you leave unwatched, and a forgotten VM keeps billing on top of that as long as it runs.\n\n## Cleanup: never leave a VM running for nothing\n\nThis lab created a VM that bills by the hour for as long as it runs, plus the resources that come with it (disk, public IP, network card). Once you've tried the commands in this part, delete the whole resource group:\n\n```azurecli\naz group delete --name \"IntroAzureRG\" --yes --no-wait\n```\n\nThis command deletes the VM and everything created with it in a single operation. `--no-wait` returns control immediately; the deletion continues in the background. Then check in the portal that the group is really gone before moving on.\n\n> **Key takeaways**\n>\n> - The Custom Script extension runs a script inside the VM without an SSH connection.\n> - Installing a server and opening its port are two separate steps: one does not bring the other.\n> - The network security group orders its rules by priority, the lowest number is examined first. By default only port 22 is allowed inbound.\n> - To leave nothing billing, delete the whole resource group.\n\n> **Your turn**\n>\n> 1. List the NSG rules with `az network nsg rule list`: you should see only port 22.\n> 2. Write down what you expect from `curl`, then run it against the VM's IP and compare.\n> 3. Create the `allow-http` rule (priority 100, port 80), list the rules again: there are now two.\n> 4. Run `curl` again and compare with your prediction. Then delete `IntroAzureRG` and check in the portal that it is gone.\n\n*Checked on September 27, 2026 against https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview.*"
            },
            "ar": {
              "title": "فتح الوصول الشبكي والتنظيف",
              "body": "## جدار الحماية المرتبط ببطاقة الشبكة\n\nمجموعة أمان الشبكة (NSG) تُصفّي حركة المرور الواردة والصادرة لجهاز VM. تعمل عبر قواعد مرتبة حسب الأولوية (priority): كلما كان رقم الأولوية أقل، كلما فُحصت القاعدة أولاً. تضيف Azure افتراضيًا قاعدة تسمح بالمنفذ 22 (SSH) وتحجب باقي حركة المرور الواردة من الإنترنت.\n\nاعثر على الـ NSG المرتبط ببطاقة شبكة الـ VM:\n\n```azurecli\naz network nic list \\\n  --query \"[?virtualMachine.id && contains(virtualMachine.id, '/my-vm')].networkSecurityGroup.id | [0]\"\n```\n\nاعرض قواعده:\n\n```azurecli\naz network nsg rule list \\\n  --resource-group \"IntroAzureRG\" \\\n  --nsg-name \"YOUR_NSG_NAME\" \\\n  --query \"[].{{Name:name, Priority:priority, Port:destinationPortRange, Access:access}}\" \\\n  --output table\n```\n\nيفترض أن ترى قاعدة واحدة فقط حاليًا، على المنفذ 22. أضف قاعدة للمنفذ 80 (HTTP):\n\n```azurecli\naz network nsg rule create \\\n  --resource-group \"IntroAzureRG\" \\\n  --nsg-name \"YOUR_NSG_NAME\" \\\n  --name allow-http \\\n  --protocol tcp \\\n  --priority 100 \\\n  --destination-port-range 80 \\\n  --access Allow\n```\n\nأعد تشغيل أمر curl من الدرس السابق: يفترض أن يستجيب الآن بصفحة الترحيب التي أنشأها السكربت. الفرق بين المحاولتين يوضح أن سكربت التثبيت وفتح المنفذ خطوتان منفصلتان، إحداهما لا تستدعي الأخرى تلقائيًا.\n\n## الفخ: منفذ مفتوح ومنسي\n\n> افتح فقط المنافذ التي تحتاجها فعلًا، وفقط طوال مدة التمرين. منفذ 80 أو 22 مفتوح على VM منسي هو باب تتركه دون مراقبة، وفوق ذلك، VM منسي يستمر في الفوترة طالما بقي يعمل.\n\n## التنظيف: لا تترك أبدًا VM يعمل بلا فائدة\n\nأنشأ هذا التمرين VM تُفوتَر بالساعة طالما استمر بالعمل، بالإضافة إلى الموارد المرافقة له (القرص، الـ IP العام، بطاقة الشبكة). بعد تجربة أوامر هذا الجزء، احذف مجموعة الموارد بالكامل:\n\n```azurecli\naz group delete --name \"IntroAzureRG\" --yes --no-wait\n```\n\nهذا الأمر يحذف الـ VM وكل ما أُنشئ معه في عملية واحدة. `--no-wait` يعيد التحكم إليك فورًا؛ ويستمر الحذف في الخلفية. تحقق بعد ذلك من البوابة أن المجموعة اختفت فعلًا قبل المتابعة.\n\n> **للتذكّر**\n>\n> - إضافة Custom Script تنفّذ سكربتًا داخل الـ VM دون اتصال SSH.\n> - تثبيت الخادم وفتح منفذه خطوتان منفصلتان: إحداهما لا تستلزم الأخرى.\n> - مجموعة أمان الشبكة ترتّب قواعدها حسب الأولوية، والرقم الأصغر يُفحص أولًا. افتراضيًا يُسمح فقط بالمنفذ 22 للدخول.\n> - حتى لا يبقى شيء يُحاسَب، احذف مجموعة الموارد بأكملها.\n\n> **دورك الآن**\n>\n> 1. اعرض قواعد الـ NSG بالأمر `az network nsg rule list`: يجب ألا ترى سوى المنفذ 22.\n> 2. دوّن ما تتوقعه من `curl`، ثم شغّله على عنوان IP الخاص بالـ VM وقارن.\n> 3. أنشئ القاعدة `allow-http` (الأولوية 100، المنفذ 80) ثم اعرض القواعد مجددًا: صارت قاعدتين.\n> 4. شغّل `curl` مرة أخرى وقارن بتوقعك. ثم احذف `IntroAzureRG` وتحقق في البوابة أنها اختفت.\n\n*تم التحقق في 2026-09-27 على https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview.*"
            }
          }
        },
        {
          "id": "l6",
          "title": "Quiz : les fondamentaux de la VM",
          "type": "quiz",
          "duration": "5 min",
          "questions": [
            {
              "id": "q1",
              "prompt": "Que se passe-t-il si vous fermez l'onglet du navigateur sans arrêter la VM ?",
              "options": [
                "La VM s'arrête et cesse d'être facturée",
                "La VM continue de tourner et de facturer, seul l'onglet se ferme",
                "Azure la supprime automatiquement après 24 heures",
                "La VM bascule seule en état « Stopped (Deallocated) »"
              ],
              "correctIndex": 1,
              "explanation": "Fermer un onglet n'agit pas sur l'état de la VM. Seul un arrêt explicite (bouton Arrêter, menant à « Stopped (Deallocated) ») coupe la facturation du calcul."
            },
            {
              "id": "q2",
              "prompt": "Quel est le rôle du groupe de sécurité réseau (NSG) ?",
              "options": [
                "Chiffrer le disque de la VM",
                "Filtrer le trafic entrant et sortant selon des règles classées par priorité",
                "Sauvegarder automatiquement la VM chaque nuit",
                "Répartir la charge entre plusieurs VM"
              ],
              "correctIndex": 1,
              "explanation": "Le NSG est un ensemble de règles de filtrage réseau, examinées par ordre de priorité croissante."
            },
            {
              "id": "q3",
              "prompt": "Pourquoi la première commande curl échoue-t-elle après l'installation du script Nginx ?",
              "options": [
                "Le script d'installation a échoué",
                "L'adresse IP récupérée est fausse",
                "Le port 80 n'est pas encore autorisé par le NSG",
                "La VM n'a pas encore démarré"
              ],
              "correctIndex": 2,
              "explanation": "Le script d'installation et l'ouverture du port sont deux étapes indépendantes ; sans règle NSG sur le port 80, le trafic web reste bloqué."
            },
            {
              "id": "q4",
              "prompt": "Quand une VM créée depuis le portail commence-t-elle à être facturée pour le calcul ?",
              "options": [
                "Seulement après la première connexion SSH",
                "Dès qu'elle est démarrée, à l'heure, tant qu'elle tourne",
                "Une fois par mois, au tarif fixe",
                "Jamais, tant qu'aucun logiciel n'est installé"
              ],
              "correctIndex": 1,
              "explanation": "La facturation du calcul démarre dès le lancement de la VM et continue tant qu'elle n'est pas explicitement arrêtée (désallouée)."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: VM fundamentals",
              "questions": [
                {
                  "prompt": "What happens if you close the browser tab without stopping the VM?",
                  "options": [
                    "The VM stops and billing ends",
                    "The VM keeps running and billing, only the tab closes",
                    "Azure deletes it automatically after 24 hours",
                    "The VM switches to \"Stopped (Deallocated)\" on its own"
                  ],
                  "explanation": "Closing a tab has no effect on the VM's state. Only an explicit stop (the Stop button, leading to \"Stopped (Deallocated)\") stops compute billing."
                },
                {
                  "prompt": "What is the role of a network security group (NSG)?",
                  "options": [
                    "Encrypting the VM's disk",
                    "Filtering inbound and outbound traffic through priority-ranked rules",
                    "Automatically backing up the VM every night",
                    "Load-balancing traffic across several VMs"
                  ],
                  "explanation": "An NSG is a set of network filtering rules, checked in ascending order of priority."
                },
                {
                  "prompt": "Why does the first curl command fail after installing the Nginx script?",
                  "options": [
                    "The installation script failed",
                    "The retrieved IP address is wrong",
                    "Port 80 is not yet allowed by the NSG",
                    "The VM has not started yet"
                  ],
                  "explanation": "The installation script and opening the port are independent steps; without an NSG rule on port 80, web traffic stays blocked."
                },
                {
                  "prompt": "When does a VM created from the portal start being billed for compute?",
                  "options": [
                    "Only after the first SSH connection",
                    "As soon as it starts, by the hour, for as long as it runs",
                    "Once a month, at a fixed rate",
                    "Never, as long as no software is installed"
                  ],
                  "explanation": "Compute billing starts as soon as the VM launches and continues until it is explicitly stopped (deallocated)."
                }
              ]
            },
            "ar": {
              "title": "اختبار: أساسيات VM",
              "questions": [
                {
                  "prompt": "ماذا يحدث إذا أغلقت تبويب المتصفح دون إيقاف الـ VM؟",
                  "options": [
                    "يتوقف الـ VM وتنتهي الفوترة",
                    "يستمر الـ VM في العمل والفوترة، فقط التبويب يُغلق",
                    "تحذفه Azure تلقائيًا بعد 24 ساعة",
                    "ينتقل الـ VM وحده إلى حالة \"Stopped (Deallocated)\""
                  ],
                  "explanation": "إغلاق التبويب لا يؤثر على حالة الـ VM. فقط الإيقاف الصريح (زر Stop، المؤدي إلى \"Stopped (Deallocated)\") يوقف فوترة المعالجة."
                },
                {
                  "prompt": "ما دور مجموعة أمان الشبكة (NSG)؟",
                  "options": [
                    "تشفير قرص الـ VM",
                    "تصفية حركة المرور الواردة والصادرة عبر قواعد مرتبة بالأولوية",
                    "نسخ احتياطي تلقائي للـ VM كل ليلة",
                    "توزيع الحمل بين عدة أجهزة VM"
                  ],
                  "explanation": "الـ NSG مجموعة قواعد تصفية شبكية، تُفحص بترتيب أولوية تصاعدي."
                },
                {
                  "prompt": "لماذا يفشل أمر curl الأول بعد تثبيت سكربت Nginx؟",
                  "options": [
                    "فشل سكربت التثبيت",
                    "عنوان IP المسترجع خاطئ",
                    "المنفذ 80 غير مسموح به بعد في NSG",
                    "الـ VM لم يبدأ التشغيل بعد"
                  ],
                  "explanation": "سكربت التثبيت وفتح المنفذ خطوتان مستقلتان؛ بدون قاعدة NSG على المنفذ 80، تبقى حركة مرور الويب محجوبة."
                },
                {
                  "prompt": "متى تبدأ فوترة المعالجة لجهاز VM أُنشئ من البوابة؟",
                  "options": [
                    "فقط بعد أول اتصال SSH",
                    "بمجرد تشغيله، بالساعة، طالما استمر بالعمل",
                    "مرة واحدة شهريًا بسعر ثابت",
                    "أبدًا، طالما لم يُثبّت أي برنامج"
                  ],
                  "explanation": "تبدأ فوترة المعالجة بمجرد تشغيل الـ VM وتستمر حتى إيقافه صراحةً (deallocated)."
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "p3",
      "title": "Stocker des objets avec Blob Storage",
      "lessons": [
        {
          "id": "l7",
          "title": "Créer un compte de stockage et un conteneur",
          "type": "text",
          "duration": "12 min",
          "body": "## Un compte de stockage, plusieurs services\n\nUn compte de stockage Azure regroupe plusieurs services de données sous une même adresse et une même facturation : le stockage d'objets (Blob), les partages de fichiers (Files), les files d'attente (Queues) et les tables. Cette leçon se concentre sur le Blob Storage, fait pour stocker des fichiers non structurés : images, vidéos, sauvegardes, documents.\n\n## Le piège : une case qui n'ouvre rien à elle seule\n\nÀ la création d'un compte de stockage, l'onglet « Avancé » du formulaire contient un réglage nommé quelque chose comme « Autoriser l'accès anonyme sur des conteneurs individuels ». Ce réglage ne rend rien public par lui-même : il détermine seulement si vous aurez la possibilité, plus tard, de rendre un conteneur précis accessible sans authentification. Sans lui, même une tentative volontaire de rendre un conteneur public échouera. Activez-le si vous comptez suivre cet atelier jusqu'au bout.\n\n## Créer un conteneur\n\nUn conteneur est l'équivalent d'un dossier de premier niveau dans un compte de stockage : c'est lui qui reçoit les blobs (les fichiers). Depuis la fiche du compte de stockage, la section « Conteneurs » (parfois rangée sous « Stockage de données ») propose un bouton pour en créer un.\n\n> Par défaut, un conteneur fraîchement créé a un niveau d'accès « Privé » : aucune requête anonyme ne peut lire son contenu, quel que soit le réglage activé à la création du compte.\n\nDéposez ensuite un fichier de test dans ce conteneur (l'action « Charger » dans la même section) pour avoir un blob à manipuler dans la leçon suivante.\n\n*Vérifié le 27 septembre 2026 sur https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure.*",
          "i18n": {
            "en": {
              "title": "Creating a storage account and a container",
              "body": "## One storage account, several services\n\nAn Azure storage account bundles several data services under one address and one bill: object storage (Blob), file shares (Files), queues (Queues) and tables. This lesson focuses on Blob Storage, built to store unstructured files: images, videos, backups, documents.\n\n## The trap: one checkbox that opens nothing by itself\n\nWhen creating a storage account, the \"Advanced\" tab of the form contains a setting along the lines of \"Allow enabling anonymous access on individual containers.\" This setting does not make anything public by itself: it only determines whether you will later have the option to make a specific container accessible without authentication. Without it, even a deliberate attempt to make a container public will fail. Turn it on if you plan to follow this lab through to the end.\n\n## Creating a container\n\nA container is the equivalent of a top-level folder inside a storage account: it is what receives blobs (the files). From the storage account's page, the \"Containers\" section (sometimes filed under \"Data storage\") offers a button to create one.\n\n> By default, a freshly created container has a \"Private\" access level: no anonymous request can read its content, whatever setting was enabled when the account was created.\n\nThen upload a test file into that container (the \"Upload\" action in the same section) so you have a blob to work with in the next lesson.\n\n*Checked on September 27, 2026 against https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure.*"
            },
            "ar": {
              "title": "إنشاء حساب تخزين وحاوية",
              "body": "## حساب تخزين واحد، خدمات متعددة\n\nيجمع حساب تخزين Azure عدة خدمات بيانات تحت عنوان واحد وفاتورة واحدة: تخزين الكائنات (Blob)، مشاركات الملفات (Files)، قوائم الانتظار (Queues)، والجداول (Tables). يركّز هذا الدرس على Blob Storage، المصمَّم لتخزين ملفات غير منظَّمة: صور، فيديوهات، نسخ احتياطية، مستندات.\n\n## الفخ: خانة واحدة لا تفتح شيئًا بمفردها\n\nعند إنشاء حساب تخزين، يحتوي تبويب \"Advanced\" في النموذج على إعداد بعنوان قريب من \"Allow enabling anonymous access on individual containers\". هذا الإعداد لا يجعل أي شيء عامًا بحد ذاته: هو فقط يحدد ما إذا كان سيكون بإمكانك لاحقًا جعل حاوية (container) معيّنة متاحة دون مصادقة. بدونه، حتى محاولة متعمدة لجعل حاوية عامة ستفشل. فعّله إذا كنت تنوي إكمال هذا التمرين حتى النهاية.\n\n## إنشاء حاوية (container)\n\nالحاوية تعادل مجلدًا من المستوى الأول داخل حساب التخزين: هي من يستقبل الـ blobs (الملفات). من صفحة حساب التخزين، يوفّر قسم \"Containers\" (يُصنَّف أحيانًا تحت \"Data storage\") زرًا لإنشاء واحدة.\n\n> افتراضيًا، تكون مستوى الوصول لأي حاوية حديثة الإنشاء \"Private\": لا يمكن لأي طلب مجهول قراءة محتواها، مهما كان الإعداد المفعَّل عند إنشاء الحساب.\n\nبعد ذلك، ارفع ملفًا تجريبيًا إلى تلك الحاوية (إجراء \"Upload\" في نفس القسم) لتحصل على blob تعمل عليه في الدرس التالي.\n\n*تم التحقق في 2026-09-27 على https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure.*"
            }
          }
        },
        {
          "id": "l8",
          "title": "Tester l'accès direct à un blob",
          "type": "text",
          "duration": "8 min",
          "body": "## Récupérer l'URL du blob\n\nChaque blob a une URL directe, construite ainsi : `https://NOM_DU_COMPTE.blob.core.windows.net/NOM_DU_CONTENEUR/NOM_DU_FICHIER`. Le portail l'affiche dans les propriétés du blob, avec un bouton pour la copier.\n\n## Tester cette URL dans le navigateur\n\nCollez l'URL dans un nouvel onglet. Avec un conteneur resté au niveau « Privé » (le réglage par défaut vu à la leçon précédente), la réponse n'est pas le fichier mais une erreur XML :\n\n```xml\n<Error>\n  <Code>ResourceNotFound</Code>\n  <Message>The specified resource does not exist.</Message>\n</Error>\n```\n\nCe message est trompeur si on le lit vite : le blob existe bel et bien, vous venez de le charger. « ResourceNotFound » ici signifie en réalité « cette requête anonyme n'a pas le droit de voir cette ressource », pas « le fichier n'existe pas ». Azure choisit volontairement de ne pas distinguer « ça n'existe pas » de « vous n'avez pas le droit de le voir » : donner cette information à une requête non authentifiée serait déjà une fuite.\n\nRetenez ce point : sur Azure, une erreur « introuvable » sur une ressource de stockage doit toujours être vérifiée sous deux angles, l'existence et le droit d'accès, avant de conclure quoi que ce soit.\n\n*Vérifié le 27 septembre 2026 sur learn.microsoft.com, page « Configure anonymous read access for containers and blobs ».*",
          "i18n": {
            "en": {
              "title": "Testing direct access to a blob",
              "body": "## Getting the blob's URL\n\nEvery blob has a direct URL, built like this: `https://ACCOUNT_NAME.blob.core.windows.net/CONTAINER_NAME/FILE_NAME`. The portal shows it in the blob's properties, with a button to copy it.\n\n## Testing that URL in the browser\n\nPaste the URL into a new tab. With a container still at the \"Private\" level (the default setting seen in the previous lesson), the response is not the file but an XML error:\n\n```xml\n<Error>\n  <Code>ResourceNotFound</Code>\n  <Message>The specified resource does not exist.</Message>\n</Error>\n```\n\nThis message is misleading if read too quickly: the blob does exist, you just uploaded it. Here, \"ResourceNotFound\" actually means \"this anonymous request is not allowed to see this resource,\" not \"the file does not exist.\" Azure deliberately chooses not to distinguish \"it does not exist\" from \"you're not allowed to see it\": giving that information to an unauthenticated request would already be a leak.\n\nKeep this in mind: on Azure, a \"not found\" error on a storage resource should always be checked from two angles, existence and access rights, before drawing any conclusion.\n\n*Verified on September 27, 2026 on learn.microsoft.com, \"Configure anonymous read access for containers and blobs.\"*"
            },
            "ar": {
              "title": "اختبار الوصول المباشر لـ blob",
              "body": "## الحصول على رابط الـ blob\n\nلكل blob رابط مباشر، يُبنى هكذا: `https://ACCOUNT_NAME.blob.core.windows.net/CONTAINER_NAME/FILE_NAME`. تعرضه البوابة ضمن خصائص الـ blob، مع زر لنسخه.\n\n## اختبار هذا الرابط في المتصفح\n\nالصق الرابط في تبويب جديد. مع حاوية ما زالت بمستوى \"Private\" (الإعداد الافتراضي الذي رأيناه في الدرس السابق)، لا يكون الرد هو الملف بل خطأ بصيغة XML:\n\n```xml\n<Error>\n  <Code>ResourceNotFound</Code>\n  <Message>The specified resource does not exist.</Message>\n</Error>\n```\n\nهذه الرسالة مضلِّلة إن قُرئت بسرعة: الـ blob موجود فعلًا، لقد رفعته للتو. \"ResourceNotFound\" هنا تعني فعليًا \"هذا الطلب المجهول غير مسموح له برؤية هذا المورد\"، وليس \"الملف غير موجود\". تختار Azure عمدًا عدم التمييز بين \"غير موجود\" و\"غير مسموح لك برؤيته\": إعطاء هذه المعلومة لطلب غير موثّق يُعد تسريبًا بحد ذاته.\n\nاحتفظ بهذه الملاحظة: في Azure، أي خطأ \"not found\" على مورد تخزين يجب التحقق منه من زاويتين، الوجود وحق الوصول، قبل استخلاص أي استنتاج.\n\n*تم التحقق في 27 سبتمبر 2026 على learn.microsoft.com، صفحة \"Configure anonymous read access for containers and blobs\".*"
            }
          }
        },
        {
          "id": "l9",
          "title": "Rendre un conteneur accessible",
          "type": "text",
          "duration": "10 min",
          "body": "## Changer le niveau d'accès du conteneur\n\nLe niveau d'accès se règle par conteneur, pas par compte entier ni par fichier isolé. Depuis la fiche du conteneur, l'action « Modifier le niveau d'accès » propose trois options.\n\n| Niveau | Ce que ça autorise |\n| --- | --- |\n| Privé | aucun accès anonyme, la valeur par défaut |\n| Blob | lecture anonyme des blobs par URL exacte, sans liste du contenu |\n| Conteneur | lecture anonyme des blobs et liste du contenu |\n\nChoisissez « Blob » : c'est le niveau du cas d'usage le plus courant, afficher une image ou servir un fichier par URL connue, sans exposer la liste du conteneur.\n\n## Le piège : un réglage de compte peut tout bloquer\n\nCe changement ne suffit pas toujours. Le compte de stockage porte son propre interrupteur global, « Autoriser l'accès anonyme aux blobs » (Compte de stockage > Configuration). S'il est désactivé, impossible d'activer l'accès anonyme d'un conteneur : le sélecteur reste grisé, quel que soit le niveau choisi. Ce réglage de compte prime toujours sur celui du conteneur.\n\n## Revérifier\n\nRechargez l'URL directe testée à la leçon précédente. Le fichier s'affiche ou se télécharge normalement, sans authentification.\n\n## La bascule reste manuelle et réversible\n\n> Rendre un conteneur public est une décision de sécurité, pas un simple réglage technique. Ne l'activez que pour des fichiers destinés à être publics et repassez-le en « Privé » si le contenu change de nature. Un conteneur public oublié avec des documents sensibles dedans est une fuite de données silencieuse.\n\nUne fois l'atelier terminé, si ce compte de stockage ne sert à rien d'autre, supprimez le groupe de ressources qui le contient pour arrêter les frais qui s'accumulent tant que les données restent en place.\n\n> **À retenir**\n>\n> - Un conteneur fraîchement créé est en niveau Privé : aucune lecture anonyme.\n> - Sur un conteneur privé, l'erreur `ResourceNotFound` veut dire « vous n'avez pas le droit de voir », pas « le fichier n'existe pas ».\n> - Trois niveaux : Privé, Blob (lecture par URL exacte), Conteneur (lecture et liste du contenu).\n> - Le réglage du compte de stockage prime sur celui du conteneur.\n\n> **À vous de jouer**\n>\n> 1. Avec le blob chargé, ouvrez son URL dans un onglet : vous devez obtenir l'erreur XML.\n> 2. Passez le conteneur au niveau Blob et rechargez l'URL : le fichier doit s'afficher. Si le sélecteur est grisé, cherchez « Autoriser l'accès anonyme aux blobs » dans la configuration du compte.\n> 3. Repassez le conteneur en Privé et rechargez encore une fois pour constater que l'accès est fermé.\n\n*Vérifié le 27 septembre 2026 sur learn.microsoft.com, page « Configure anonymous read access for containers and blobs ».*",
          "i18n": {
            "en": {
              "title": "Making a container accessible",
              "body": "## Changing the container's access level\n\nThe access level is set per container, not for the whole account. From the container's page, the \"Change access level\" action offers three options.\n\n| Level | What it allows |\n| --- | --- |\n| Private | no anonymous access, the default |\n| Blob | anonymous read of blobs by exact URL, no listing of the contents |\n| Container | anonymous read of blobs and listing of the contents |\n\nChoose \"Blob\": it matches the most common use case, showing an image or serving a file from a known URL, without exposing the listing.\n\n## The catch: an account-level setting can block all of this\n\nThis change is not always enough. The storage account carries its own switch, \"Allow Blob anonymous access\" (Storage account > Configuration). If disabled, anonymous access cannot be turned on for any container: the selector stays greyed out, whatever level you pick. This setting always overrides the container-level one.\n\n## Re-checking\n\nReload the direct URL tested in the previous lesson. The file displays or downloads normally, without any authentication.\n\n## The switch stays manual and reversible\n\n> Making a container public is a security decision, not a plain technical setting. Only turn it on for files meant to be public and switch it back to \"Private\" if the content's nature changes. A forgotten public container holding sensitive documents is a silent data leak.\n\nOnce the lab is done, if this storage account serves no other purpose, delete the resource group that holds it to stop the charges that add up as long as the data stays in place.\n\n> **Key takeaways**\n>\n> - A freshly created container is at the Private level: no anonymous read.\n> - On a private container, the `ResourceNotFound` error means \"you are not allowed to see it\", not \"the file does not exist\".\n> - Three levels: Private, Blob (read by exact URL), Container (read plus listing of the content).\n> - The storage account setting overrides the container setting.\n\n> **Your turn**\n>\n> 1. With the blob uploaded, open its URL in a tab: you should get the XML error.\n> 2. Switch the container to the Blob level and reload the URL: the file should display. If the selector is greyed out, look for \"Allow anonymous access to blobs\" in the account configuration.\n> 3. Set the container back to Private and reload once more to see that access is closed.\n\n*Verified on September 27, 2026 on learn.microsoft.com, \"Configure anonymous read access for containers and blobs.\"*"
            },
            "ar": {
              "title": "جعل الحاوية قابلة للوصول",
              "body": "## تغيير مستوى وصول الحاوية\n\nيُضبط مستوى الوصول لكل حاوية على حدة، وليس للحساب كله. من صفحة الحاوية، يوفّر إجراء \"Change access level\" ثلاثة خيارات.\n\n| المستوى | ما يسمح به |\n| --- | --- |\n| Private | لا وصول مجهول، وهي القيمة الافتراضية |\n| Blob | قراءة مجهولة للـ blobs عبر الرابط الدقيق، دون عرض قائمة المحتوى |\n| Container | قراءة مجهولة للـ blobs وعرض قائمة المحتوى |\n\nاختر \"Blob\": وهو المستوى المناسب لأكثر الحالات شيوعًا، عرض صورة أو تقديم ملف من رابط معروف، دون كشف قائمة الحاوية.\n\n## الفخ: إعداد على مستوى الحساب قد يمنع كل هذا\n\nهذا التغيير لا يكفي دائمًا. يحمل حساب التخزين مفتاحه الخاص، \"Allow Blob anonymous access\" (Storage account > Configuration). إذا كان معطّلًا، يستحيل تفعيل الوصول المجهول لأي حاوية: يبقى المحدد رماديًا مهما كان المستوى المختار. هذا الإعداد يسبق دائمًا إعداد الحاوية.\n\n## إعادة التحقق\n\nأعد تحميل الرابط المباشر الذي جُرّب في الدرس السابق. سيُعرض الملف أو يُنزَّل بشكل طبيعي، دون المرور بأي مصادقة.\n\n## التبديل يبقى يدويًا وقابلًا للتراجع\n\n> جعل حاوية عامة قرار أمني، وليس مجرد إعداد تقني بسيط. فعّله فقط للملفات المخصصة لتكون عامة وأعده إلى \"Private\" إذا تغيّرت طبيعة المحتوى. حاوية عامة منسية تحتوي على مستندات حساسة تُعد تسريب بيانات صامتًا.\n\nبعد انتهاء التمرين، إذا لم يعد الحساب يخدم أي غرض آخر، احذف مجموعة الموارد التي تحتويه لإيقاف الرسوم المتراكمة.\n\n> **للتذكّر**\n>\n> - الحاوية المُنشأة حديثًا مستواها خاص (Private): لا قراءة مجهولة.\n> - على حاوية خاصة، الخطأ `ResourceNotFound` يعني «ليس لك حق رؤيتها» وليس «الملف غير موجود».\n> - ثلاثة مستويات: خاص، Blob (قراءة بالرابط الدقيق)، Container (قراءة مع عرض قائمة المحتوى).\n> - إعداد حساب التخزين يعلو إعداد الحاوية.\n\n> **دورك الآن**\n>\n> 1. بعد رفع الـ blob، افتح رابطه في تبويب: يجب أن يظهر خطأ XML.\n> 2. غيّر مستوى الحاوية إلى Blob وأعد تحميل الرابط: يجب أن يظهر الملف. إذا كان المحدِّد معطّلًا، فابحث عن خيار السماح بالوصول المجهول إلى الـ blobs في إعدادات الحساب.\n> 3. أعد الحاوية إلى خاص وأعد التحميل مرة أخرى لترى أن الوصول مغلق.\n\n*تم التحقق في 27 سبتمبر 2026 على learn.microsoft.com، صفحة \"Configure anonymous read access for containers and blobs\".*"
            }
          }
        },
        {
          "id": "l10",
          "title": "Quiz : le stockage Blob",
          "type": "quiz",
          "duration": "5 min",
          "questions": [
            {
              "id": "q5",
              "prompt": "Que doit contenir la réponse pour qu'un conteneur puisse un jour être rendu public ?",
              "options": [
                "Rien de spécial, tous les conteneurs sont publics par défaut",
                "L'activation de l'accès anonyme au niveau du compte de stockage, à la création",
                "Une clé API générée manuellement",
                "Un certificat SSL personnalisé"
              ],
              "correctIndex": 1,
              "explanation": "Sans activer l'accès anonyme au niveau du compte, aucun conteneur de ce compte ne pourra jamais être rendu public, quel que soit le réglage tenté ensuite."
            },
            {
              "id": "q6",
              "prompt": "Que signifie réellement l'erreur ResourceNotFound sur un blob privé ?",
              "options": [
                "Le fichier a été supprimé",
                "Le nom du fichier contient une faute de frappe",
                "La requête anonyme n'a pas le droit de voir la ressource, qui peut très bien exister",
                "Le compte de stockage a été désactivé"
              ],
              "correctIndex": 2,
              "explanation": "Azure ne distingue pas volontairement l'absence de ressource du refus d'accès, pour ne pas révéler d'information à une requête non authentifiée."
            },
            {
              "id": "q7",
              "prompt": "Quel niveau d'accès autorise la lecture d'un blob par URL directe sans permettre de lister le contenu du conteneur ?",
              "options": [
                "Privé",
                "Blob",
                "Conteneur",
                "Public total"
              ],
              "correctIndex": 1,
              "explanation": "Le niveau « Blob » autorise la lecture anonyme d'un blob si on connaît son URL exacte, sans exposer la liste des fichiers du conteneur."
            },
            {
              "id": "q8",
              "prompt": "Pourquoi rendre un conteneur public est-il présenté comme une décision de sécurité et pas un simple réglage ?",
              "options": [
                "Parce que ça coûte plus cher",
                "Parce qu'un contenu sensible oublié dans un conteneur public devient une fuite de données",
                "Parce que ça ralentit le compte de stockage",
                "Parce que Microsoft facture des frais additionnels pour l'accès anonyme"
              ],
              "correctIndex": 1,
              "explanation": "Le risque n'est pas technique mais lié aux données : un conteneur public oublié avec du contenu sensible expose ce contenu à quiconque devine ou trouve l'URL."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: Blob Storage",
              "questions": [
                {
                  "prompt": "What must be in place for a container to ever be made public?",
                  "options": [
                    "Nothing special, all containers are public by default",
                    "Anonymous access enabled at the storage account level, at creation",
                    "A manually generated API key",
                    "A custom SSL certificate"
                  ],
                  "explanation": "Without enabling anonymous access at the account level, no container in that account can ever be made public, whatever setting is tried afterward."
                },
                {
                  "prompt": "What does the ResourceNotFound error actually mean on a private blob?",
                  "options": [
                    "The file was deleted",
                    "The file name has a typo",
                    "The anonymous request is not allowed to see the resource, which may well exist",
                    "The storage account was disabled"
                  ],
                  "explanation": "Azure deliberately does not distinguish a missing resource from a refused access, to avoid leaking information to an unauthenticated request."
                },
                {
                  "prompt": "Which access level allows reading a blob via a direct URL without allowing the container's contents to be listed?",
                  "options": [
                    "Private",
                    "Blob",
                    "Container",
                    "Fully public"
                  ],
                  "explanation": "The \"Blob\" level allows anonymous reads of a blob if its exact URL is known, without exposing the container's file list."
                },
                {
                  "prompt": "Why is making a container public presented as a security decision rather than a plain setting?",
                  "options": [
                    "Because it costs more",
                    "Because sensitive content forgotten in a public container becomes a data leak",
                    "Because it slows down the storage account",
                    "Because Microsoft charges extra fees for anonymous access"
                  ],
                  "explanation": "The risk is not technical but data-related: a forgotten public container holding sensitive content exposes it to anyone who guesses or finds the URL."
                }
              ]
            },
            "ar": {
              "title": "اختبار: Blob Storage",
              "questions": [
                {
                  "prompt": "ما الذي يجب توفره حتى يمكن جعل حاوية عامة يومًا ما؟",
                  "options": [
                    "لا شيء خاص، كل الحاويات عامة افتراضيًا",
                    "تفعيل الوصول المجهول على مستوى حساب التخزين، عند الإنشاء",
                    "مفتاح API يُنشأ يدويًا",
                    "شهادة SSL مخصصة"
                  ],
                  "explanation": "بدون تفعيل الوصول المجهول على مستوى الحساب، لن يمكن أبدًا جعل أي حاوية في هذا الحساب عامة، مهما كان الإعداد المجرَّب لاحقًا."
                },
                {
                  "prompt": "ماذا تعني فعليًا رسالة الخطأ ResourceNotFound على blob خاص؟",
                  "options": [
                    "تم حذف الملف",
                    "اسم الملف يحتوي على خطأ إملائي",
                    "الطلب المجهول غير مسموح له برؤية المورد، الذي قد يكون موجودًا فعلًا",
                    "تم تعطيل حساب التخزين"
                  ],
                  "explanation": "لا تميّز Azure عمدًا بين غياب المورد ورفض الوصول، تجنبًا لتسريب معلومة لطلب غير موثّق."
                },
                {
                  "prompt": "أي مستوى وصول يسمح بقراءة blob عبر رابط مباشر دون السماح بعرض محتوى الحاوية؟",
                  "options": [
                    "Private",
                    "Blob",
                    "Container",
                    "عام بالكامل"
                  ],
                  "explanation": "مستوى \"Blob\" يسمح بالقراءة المجهولة لـ blob إذا عُرف رابطه بالضبط، دون كشف قائمة ملفات الحاوية."
                },
                {
                  "prompt": "لماذا يُعرض جعل حاوية عامة كقرار أمني وليس مجرد إعداد بسيط؟",
                  "options": [
                    "لأنه يكلف أكثر",
                    "لأن محتوى حساسًا منسيًا في حاوية عامة يصبح تسريب بيانات",
                    "لأنه يبطئ حساب التخزين",
                    "لأن Microsoft تفرض رسومًا إضافية على الوصول المجهول"
                  ],
                  "explanation": "الخطر ليس تقنيًا بل مرتبط بالبيانات: حاوية عامة منسية تحتوي على محتوى حساس تعرّضه لأي شخص يخمّن الرابط أو يعثر عليه."
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "p4",
      "title": "Estimer un coût avec la calculatrice",
      "lessons": [
        {
          "id": "l11",
          "title": "Découvrir la calculatrice de prix",
          "type": "text",
          "duration": "10 min",
          "body": "## Un simulateur, pas une facture\n\nLa calculatrice de prix Azure (azure.microsoft.com/pricing/calculator) permet d'estimer le coût d'une architecture avant de la construire. Ajouter un service à l'estimation ne le crée pas, et aucune carte bancaire n'est demandée. Vous pouvez composer et recomposer une architecture entière sans toucher à un abonnement réel.\n\n## Partir d'un besoin, pas d'une liste de services\n\nAvant d'ouvrir l'outil, il faut une idée claire de ce que l'architecture doit porter. Exemple utilisé ici : une application interne, pas ouverte au public, qui affiche des informations de stock et de prix, appuyée sur deux serveurs derrière un répartiteur de charge, avec une base de données qui stocke ces informations.\n\nTraduit en besoins mesurables :\n\n- l'application tourne en continu, 730 heures par mois (un mois complet)\n- le trafic réseau attendu tourne autour de 1 To par mois\n- la base de données n'a pas besoin de hautes performances et reste sous 32 Go\n\n## L'onglet Produits, et le piège du prix affiché\n\nL'outil a plusieurs onglets, dont « Produits » où vous ajoutez chaque service et le configurez.\n\nLe piège : sans connexion, le chiffre affiché reste le prix public, pas celui que votre organisation paiera. Un contrat EA, MCA ou CSP donne des tarifs négociés, visibles seulement après connexion via le sélecteur de programme de licence en bas de l'estimation. Pensez aussi au plan de support (Basic, Developer, Standard, Professional Direct), jamais inclus par défaut.\n\nCette leçon et la suivante se concentrent sur cet onglet, en partant d'une page vide.\n\n*Vérifié le 27 septembre 2026 sur learn.microsoft.com, page « Estimate costs with the Azure pricing calculator ».*",
          "i18n": {
            "en": {
              "title": "Discovering the pricing calculator",
              "body": "## A simulator, not a bill\n\nThe Azure pricing calculator (azure.microsoft.com/pricing/calculator) estimates the cost of an architecture before you build it. Adding a service to the estimate does not create it, and no payment card is requested. You can rebuild an entire architecture without touching a real subscription.\n\n## Start from a need, not a list of services\n\nBefore opening the tool, get a clear idea of what the architecture must support. Example used here: an internal, non-public application showing stock and pricing data, backed by two servers behind a load balancer, with a database storing that data.\n\nIn measurable terms:\n\n- the application runs continuously, 730 hours a month (a full month)\n- expected network traffic is around 1 TB a month\n- the database does not need high performance and stays under 32 GB\n\n## The Products tab, and the displayed-price trap\n\nThe tool has several tabs, including \"Products,\" where each service is added and configured.\n\nThe trap: signed out, the figure shown is the public retail price, not what your organization actually pays. An EA, MCA, or CSP agreement gives negotiated rates, visible only after signing in and picking a licensing program at the bottom of the estimate. Also budget for a support plan (Basic, Developer, Standard, Professional Direct), never included by default.\n\nThis lesson and the next focus on this tab, starting from a blank page.\n\n*Verified on September 27, 2026 on learn.microsoft.com, \"Estimate costs with the Azure pricing calculator.\"*"
            },
            "ar": {
              "title": "التعرف على حاسبة الأسعار",
              "body": "## محاكاة، لا فاتورة\n\nحاسبة أسعار Azure (azure.microsoft.com/pricing/calculator) تقدّر تكلفة معمارية قبل بنائها. إضافة خدمة لا تُنشئها فعليًا، ولا تُطلب بطاقة دفع. يمكنك بناء معمارية كاملة وإعادة بنائها دون المساس باشتراك حقيقي.\n\n## الانطلاق من حاجة، لا من قائمة خدمات\n\nقبل فتح الأداة، يلزم تصوّر واضح لما يجب أن تحمله المعمارية. المثال هنا: تطبيق داخلي غير عام، يعرض المخزون والأسعار، معتمدًا على خادمين خلف موزّع حِمل، مع قاعدة بيانات تخزّن هذه المعلومات.\n\nمترجمة إلى احتياجات قابلة للقياس:\n\n- التطبيق يعمل باستمرار، 730 ساعة شهريًا (شهر كامل)\n- حركة الشبكة المتوقعة نحو 1 تيرابايت شهريًا\n- قاعدة البيانات لا تحتاج أداءً عاليًا وتبقى دون 32 جيجابايت\n\n## علامة التبويب \"المنتجات\"، وفخ السعر المعروض\n\nتضم الأداة عدة علامات، منها \"Products\" حيث تُضاف كل خدمة وتُضبط.\n\nالفخ: دون تسجيل دخول، يبقى الرقم المعروض السعر العام، لا ما تدفعه مؤسستك فعليًا. عقد EA أو MCA أو CSP يمنح أسعارًا تفاوضية، تظهر فقط بعد الدخول واختيار برنامج ترخيص أسفل التقدير. احسب أيضًا خطة الدعم (Basic، Developer، Standard، Professional Direct)، غير مدرجة تلقائيًا أبدًا.\n\nيركّز هذا الدرس والذي يليه على هذه العلامة، انطلاقًا من صفحة فارغة.\n\n*تم التحقق في 27 سبتمبر 2026 على learn.microsoft.com، صفحة \"Estimate costs with the Azure pricing calculator\".*"
            }
          }
        },
        {
          "id": "l12",
          "title": "Estimer le coût d'une architecture",
          "type": "text",
          "duration": "15 min",
          "body": "## Ajouter les trois services\n\nDepuis l'onglet Produits, ajoutez ces trois services : Virtual Machines (Calcul), Azure SQL Database (Bases de données), Application Gateway (Réseau). Chacun apparaît en bas de page avec sa configuration par défaut, à ajuster.\n\n## Configurer chaque service\n\nPour Virtual Machines : région West US, Windows, type OS uniquement, niveau Standard, instance D2s v5, 2 machines à 730 heures chacune.\n\nPour Azure SQL Database : région West US, Base de données unique, sauvegarde RA-GRS, modèle vCore, niveau Usage général, calcul Provisionné, génération Gen 5, instance 8 vCore.\n\nPour Application Gateway : région West US, niveau v2 avec pare-feu d'applications web (WAF_v2), 2 passerelles à 730 heures chacune, 1 To traité, 5 Go de transfert sortant.\n\nLaissez les autres réglages à leur valeur par défaut : ils couvrent des besoins que ce scénario n'a pas.\n\n## Le piège : la version 1 d'Application Gateway est retirée\n\nUn guide qui parle d'un niveau « Pare-feu d'applications web » avec une taille Small, Medium ou Large décrit la version 1, retirée depuis le 28 avril 2026, sans support ni garantie restants. La version 2 (WAF_v2) facture à l'heure de passerelle plus des unités de capacité, sans taille Small/Medium/Large.\n\n## Lire et partager le résultat\n\n> Cette leçon ne donne volontairement aucun chiffre de prix : les tarifs Azure changent selon la période et la devise, et une valeur figée dans ce cours serait fausse au moment où vous la liriez. Ouvrez la calculatrice avec cette configuration pour voir le total actuel, en euros ou en dollars selon votre réglage de devise.\n\nTrois actions sont proposées en bas de page une fois l'estimation prête : Exporter (récupère un fichier Excel), Enregistrer ou Enregistrer sous (garde l'estimation dans l'espace des estimations enregistrées de votre compte), Partager (génère une URL à envoyer). Rien n'a été créé : aucune de ces actions ne facture ni ne demande de nettoyage.\n\n> **À retenir**\n>\n> - La calculatrice simule : ajouter un service à l'estimation ne le crée pas et ne demande aucune carte bancaire.\n> - Sans connexion, le prix affiché est le prix public, pas celui d'un contrat EA, MCA ou CSP. Le plan de support n'est jamais inclus par défaut.\n> - Application Gateway v1 est retirée : on estime avec WAF_v2.\n\n> **À vous de jouer**\n>\n> 1. Recréez l'estimation avec les trois services et les réglages de la leçon, puis notez le total affiché.\n> 2. Passez les Virtual Machines de 2 machines à 1, notez le nouveau total et comparez.\n> 3. Exportez l'estimation en fichier Excel, puis enregistrez-la sous un nom de votre choix.\n\n*Vérifié le 27 septembre 2026 sur learn.microsoft.com, page « Application Gateway V1 retirement and migration to V2 ».*",
          "i18n": {
            "en": {
              "title": "Estimating an architecture's cost",
              "body": "## Adding the three services\n\nFrom the Products tab, add these three services: Virtual Machines (Compute), Azure SQL Database (Databases), Application Gateway (Networking). Each appears below with its default configuration, ready to adjust.\n\n## Configuring each service\n\nFor Virtual Machines: region West US, Windows, OS-only type, Standard tier, D2s v5 instance, 2 machines at 730 hours each.\n\nFor Azure SQL Database: region West US, Single database, RA-GRS backup, vCore model, General Purpose tier, Provisioned compute, Gen 5 generation, 8 vCore instance.\n\nFor Application Gateway: region West US, v2 tier with Web Application Firewall (WAF_v2), 2 gateways at 730 hours each, 1 TB processed, 5 GB outbound transfer.\n\nLeave the other settings at their defaults: this scenario does not need them.\n\n## The trap: Application Gateway v1 is retired\n\nA guide with a \"Web Application Firewall\" tier sized Small, Medium, or Large describes v1, retired since April 28, 2026, with no support or guarantee left. V2 (WAF_v2) bills by gateway hour plus capacity units, with no Small/Medium/Large size.\n\n## Reading and sharing the result\n\n> This lesson deliberately gives no price figure: Azure rates change with time and currency, and a value frozen into this course would be wrong by the time you read it. Open the calculator with this configuration to see the current total, in euros or dollars depending on your currency setting.\n\nThree actions sit at the bottom of the page once the estimate is ready: Export (an Excel file), Save or Save as (keeps it among the saved estimates of your account), Share (a URL to send). Nothing was actually created: none of these actions bill anything or need cleanup.\n\n> **Key takeaways**\n>\n> - The calculator simulates: adding a service to the estimate does not create it and asks for no bank card.\n> - Without signing in, the displayed price is the public price, not the one from an EA, MCA or CSP contract. The support plan is never included by default.\n> - Application Gateway v1 is retired: estimate with WAF_v2.\n\n> **Your turn**\n>\n> 1. Rebuild the estimate with the three services and the settings from the lesson, then note the displayed total.\n> 2. Change the Virtual Machines from 2 machines to 1, note the new total and compare.\n> 3. Export the estimate as an Excel file, then save it under a name of your choice.\n\n*Verified on September 27, 2026 on learn.microsoft.com, \"Application Gateway V1 retirement and migration to V2.\"*"
            },
            "ar": {
              "title": "تقدير تكلفة بنية معينة",
              "body": "## إضافة الخدمات الثلاث\n\nمن علامة التبويب Products، أضيفوا هذه الخدمات الثلاث: Virtual Machines (Compute)، Azure SQL Database (Databases)، Application Gateway (Networking). تظهر كل واحدة أسفل الصفحة بإعدادها الافتراضي، جاهزة للتعديل.\n\n## ضبط كل خدمة\n\nمن أجل Virtual Machines: منطقة West US، Windows، نوع OS فقط، مستوى Standard، نسخة D2s v5، جهازان بـ730 ساعة لكل منهما.\n\nمن أجل Azure SQL Database: منطقة West US، Single database، نسخة احتياطية RA-GRS، نموذج vCore، مستوى General Purpose، حوسبة Provisioned، جيل Gen 5، نسخة 8 vCore.\n\nمن أجل Application Gateway: منطقة West US، مستوى v2 مع جدار حماية تطبيقات الويب (WAF_v2)، بوابتان بـ730 ساعة لكل منهما، 1 تيرابايت معالج، 5 جيجابايت نقل صادر.\n\nاتركوا الباقي على الافتراضي: لا يحتاجه هذا السيناريو.\n\n## الفخ: النسخة الأولى من Application Gateway متوقفة\n\nدليل يذكر مستوى \"Web Application Firewall\" بحجم Small أو Medium أو Large يصف النسخة الأولى، المتوقفة منذ 28 أبريل 2026، دون دعم أو ضمان متبقٍ. النسخة الثانية (WAF_v2) تُحتسب بساعة البوابة زائد وحدات سعة، دون حجم Small/Medium/Large.\n\n## قراءة النتيجة ومشاركتها\n\n> لا يقدّم هذا الدرس عمدًا أي رقم سعر: أسعار Azure تتغير حسب الفترة والعملة، وأي قيمة مثبتة في هذا المقرر ستكون خاطئة وقت قراءتها. افتحوا الحاسبة بهذا الإعداد لرؤية المجموع الحالي، باليورو أو الدولار حسب إعداد العملة لديكم.\n\nتُعرض ثلاثة إجراءات أسفل الصفحة بعد جهوز التقدير: Export (ملف Excel)، Save أو Save as (يحفظه ضمن التقديرات المحفوظة في حسابكم)، Share (رابط للإرسال). لم يُنشأ شيء فعليًا: لا فاتورة ولا تنظيف مطلوب.\n\n> **للتذكّر**\n>\n> - الحاسبة تحاكي فقط: إضافة خدمة إلى التقدير لا تنشئها ولا تطلب بطاقة مصرفية.\n> - دون تسجيل الدخول، السعر المعروض هو السعر العام، لا سعر عقد EA أو MCA أو CSP. وخطة الدعم لا تُضمَّن افتراضيًا.\n> - الإصدار 1 من Application Gateway أُلغي: قدّر بالإصدار WAF_v2.\n\n> **دورك الآن**\n>\n> 1. أعد بناء التقدير بالخدمات الثلاث والإعدادات الواردة في الدرس، ثم دوّن الإجمالي المعروض.\n> 2. غيّر الـ Virtual Machines من جهازين إلى جهاز واحد، ودوّن الإجمالي الجديد وقارن.\n> 3. صدّر التقدير إلى ملف Excel، ثم احفظه باسم تختاره.\n\n*تم التحقق في 27 سبتمبر 2026 على learn.microsoft.com، صفحة \"Application Gateway V1 retirement and migration to V2\".*"
            }
          }
        },
        {
          "id": "l13",
          "title": "Quiz : estimer un coût",
          "type": "quiz",
          "duration": "5 min",
          "questions": [
            {
              "id": "q9",
              "prompt": "Que se passe-t-il concrètement quand on ajoute un service à la calculatrice de prix ?",
              "options": [
                "Le service est créé dans un abonnement d'essai",
                "Rien n'est créé, c'est une estimation pure",
                "Une carte bancaire est débitée d'un petit montant",
                "Le service reste réservé pendant 24 heures"
              ],
              "correctIndex": 1,
              "explanation": "La calculatrice est un outil de simulation : ajouter un service à l'estimation ne crée aucune ressource réelle et ne demande aucun moyen de paiement."
            },
            {
              "id": "q10",
              "prompt": "Pourquoi ce cours ne donne-t-il pas de chiffre de prix pour l'exemple traité ?",
              "options": [
                "Parce que l'information est confidentielle",
                "Parce que les tarifs Azure varient dans le temps et selon la devise, un chiffre figé deviendrait faux",
                "Parce que la calculatrice ne donne jamais de total",
                "Parce que les prix dépendent du pays de l'utilisateur uniquement"
              ],
              "correctIndex": 1,
              "explanation": "Un prix imprimé dans le cours serait périmé dès que les tarifs Azure changeraient ; consulter la calculatrice donne toujours la valeur actuelle."
            },
            {
              "id": "q11",
              "prompt": "Quel onglet de la calculatrice propose des architectures de référence déjà assemblées ?",
              "options": [
                "Produits",
                "Estimations enregistrées",
                "Scénarios types",
                "FAQ"
              ],
              "correctIndex": 2,
              "explanation": "« Scénarios types » regroupe des architectures de référence prêtes à l'emploi, utilisables comme point de départ."
            },
            {
              "id": "q12",
              "prompt": "Dans le scénario de cet atelier, que représente le chiffre de 730 heures par mois ?",
              "options": [
                "Le temps maximal de garantie du support Azure",
                "Le fonctionnement continu des machines virtuelles sur un mois complet",
                "Le délai avant qu'une ressource inutilisée soit supprimée",
                "Le nombre d'heures gratuites offertes par Azure chaque mois"
              ],
              "correctIndex": 1,
              "explanation": "730 heures correspond à peu près à un mois complet ; l'utiliser signifie que les VM tournent en continu, sans interruption."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: estimating a cost",
              "questions": [
                {
                  "prompt": "What actually happens when you add a service to the pricing calculator?",
                  "options": [
                    "The service is created in a trial subscription",
                    "Nothing is created, it is a pure estimate",
                    "A payment card is charged a small amount",
                    "The service stays reserved for 24 hours"
                  ],
                  "explanation": "The calculator is a simulation tool: adding a service to the estimate creates no real resource and requests no payment method."
                },
                {
                  "prompt": "Why does this course not give a price figure for the example worked through?",
                  "options": [
                    "Because the information is confidential",
                    "Because Azure rates vary over time and by currency, a frozen figure would go stale",
                    "Because the calculator never gives a total",
                    "Because prices depend only on the user's country"
                  ],
                  "explanation": "A price printed in the course would be outdated as soon as Azure rates changed; checking the calculator always gives the current value."
                },
                {
                  "prompt": "Which tab of the calculator offers ready-made reference architectures?",
                  "options": [
                    "Products",
                    "Saved estimates",
                    "Example scenarios",
                    "FAQs"
                  ],
                  "explanation": "\"Example scenarios\" gathers ready-to-use reference architectures, usable as a starting point."
                },
                {
                  "prompt": "In this lab's scenario, what does the figure of 730 hours per month represent?",
                  "options": [
                    "The maximum guaranteed support response time",
                    "The virtual machines running continuously for a full month",
                    "The delay before an unused resource gets deleted",
                    "The number of free hours Azure grants each month"
                  ],
                  "explanation": "730 hours is roughly a full month; using it means the VMs run continuously, without interruption."
                }
              ]
            },
            "ar": {
              "title": "اختبار: تقدير التكلفة",
              "questions": [
                {
                  "prompt": "ماذا يحدث فعليًا عند إضافة خدمة إلى حاسبة الأسعار؟",
                  "options": [
                    "يتم إنشاء الخدمة في اشتراك تجريبي",
                    "لا يُنشأ شيء، إنه تقدير محض",
                    "تُخصم مبلغ صغير من بطاقة دفع",
                    "تبقى الخدمة محجوزة لمدة 24 ساعة"
                  ],
                  "explanation": "الحاسبة أداة محاكاة: إضافة خدمة للتقدير لا تُنشئ أي مورد حقيقي ولا تطلب أي وسيلة دفع."
                },
                {
                  "prompt": "لماذا لا يذكر هذا الكورس رقم سعر للمثال المعروض؟",
                  "options": [
                    "لأن المعلومة سرية",
                    "لأن أسعار Azure تتغير عبر الزمن وحسب العملة، وأي رقم ثابت سيصبح خاطئًا",
                    "لأن الحاسبة لا تعطي مجموعًا أبدًا",
                    "لأن الأسعار تعتمد فقط على بلد المستخدم"
                  ],
                  "explanation": "سعر مطبوع في الكورس سيصبح قديمًا بمجرد تغيّر أسعار Azure؛ مراجعة الحاسبة تعطي دائمًا القيمة الحالية."
                },
                {
                  "prompt": "أي تبويب في الحاسبة يوفّر بنيات مرجعية جاهزة؟",
                  "options": [
                    "Products",
                    "Saved estimates",
                    "Example scenarios",
                    "FAQs"
                  ],
                  "explanation": "\"Example scenarios\" يجمع بنيات مرجعية جاهزة للاستخدام، تصلح كنقطة انطلاق."
                },
                {
                  "prompt": "في سيناريو هذا التمرين، ماذا يمثّل رقم 730 ساعة شهريًا؟",
                  "options": [
                    "أقصى مدة ضمان للدعم في Azure",
                    "تشغيل الأجهزة الافتراضية باستمرار طوال شهر كامل",
                    "المهلة قبل حذف مورد غير مستخدَم",
                    "عدد الساعات المجانية التي تمنحها Azure كل شهر"
                  ],
                  "explanation": "730 ساعة تقارب شهرًا كاملًا؛ استخدامها يعني أن الأجهزة الافتراضية تعمل باستمرار، دون انقطاع."
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "p5",
      "title": "Protéger une ressource avec un verrou",
      "lessons": [
        {
          "id": "l14",
          "title": "Poser un verrou de ressource",
          "type": "text",
          "duration": "12 min",
          "body": "## Se protéger de soi-même\n\nUn verrou de ressource (« resource lock ») empêche une action précise sur une ressource ou un groupe de ressources, même pour quelqu'un qui a les droits nécessaires. Ce n'est pas un mécanisme de permission (qui peut agir) mais un mécanisme de protection (quelle action est bloquée, pour tout le monde, tant que le verrou reste posé). Il sert surtout à se protéger d'une suppression accidentelle sur une ressource importante.\n\n## Deux types de verrou\n\n| Type | Ce qu'il bloque |\n| --- | --- |\n| Lecture seule (Read-only) | toute modification ou suppression, y compris des opérations qui semblent inoffensives comme créer un élément à l'intérieur |\n| Suppression (Delete) | uniquement la suppression, les modifications restent possibles |\n\nUn verrou se pose depuis la section « Verrous » de la fiche d'une ressource ou d'un groupe de ressources, dans le portail. Il prend un nom, un type, et une note optionnelle qui explique pourquoi il est là (utile six mois plus tard, quand plus personne ne se souvient du contexte).\n\n## Poser un verrou en lecture seule\n\nPosez un verrou de type Lecture seule sur votre compte de stockage (celui créé dans la partie précédente, ou un groupe de ressources dédié nommé par exemple IntroAzureRG, selon ce que vous utilisez pour cet atelier). Puis tentez de créer un nouveau conteneur dans ce compte de stockage.\n\nL'opération échoue, avec un message du type « Failed to create storage container ». Un verrou en lecture seule bloque même une création, alors qu'on pourrait s'attendre à ce qu'il ne bloque que les modifications d'un élément déjà existant : c'est le piège le plus fréquent avec ce type de verrou.\n\n*Vérifié le 27 septembre 2026 sur learn.microsoft.com, page « Lock your Azure resources to protect your infrastructure ».*",
          "i18n": {
            "en": {
              "title": "Setting a resource lock",
              "body": "## Protecting yourself from yourself\n\nA resource lock prevents a specific action on a resource or resource group, even for someone who has the necessary permissions. It is not a permission mechanism (who can act) but a protection mechanism (which action is blocked, for everyone, as long as the lock stays in place). It is mainly used to guard against an accidental deletion of an important resource.\n\n## Two kinds of lock\n\n| Type | What it blocks |\n| --- | --- |\n| Read-only | any change or deletion, including operations that seem harmless like creating something inside it |\n| Delete | only deletion, changes remain possible |\n\nA lock is set from the \"Locks\" section of a resource's or resource group's page in the portal. It takes a name, a type, and an optional note explaining why it is there (useful six months later, when no one remembers the context anymore).\n\n## Setting a read-only lock\n\nSet a Read-only lock on your storage account (the one created in the previous part, or a dedicated resource group, for example named IntroAzureRG, depending on what you're using for this lab). Then try to create a new container in that storage account.\n\nThe operation fails, with a message like \"Failed to create storage container.\" A read-only lock blocks even a creation, whereas one might expect it to only block changes to something that already exists: that is the most common trap with this type of lock.\n\n*Verified on September 27, 2026 on learn.microsoft.com, \"Lock your Azure resources to protect your infrastructure.\"*"
            },
            "ar": {
              "title": "وضع قفل على مورد",
              "body": "## حماية نفسك من نفسك\n\nقفل المورد (Resource Lock) يمنع إجراءً محددًا على مورد أو مجموعة موارد، حتى بالنسبة لشخص يملك الصلاحيات اللازمة. إنه ليس آلية صلاحيات (من يستطيع التصرف) بل آلية حماية (أي إجراء محجوب، للجميع، طالما القفل موضوع). يُستخدم أساسًا للحماية من حذف عرضي لمورد مهم.\n\n## نوعان من الأقفال\n\n| النوع | ما يحجبه |\n| --- | --- |\n| Read-only | أي تعديل أو حذف، بما في ذلك عمليات تبدو غير ضارة مثل إنشاء عنصر بداخله |\n| Delete | الحذف فقط، تبقى التعديلات ممكنة |\n\nيُوضع القفل من قسم \"Locks\" في صفحة مورد أو مجموعة موارد، داخل البوابة. يأخذ اسمًا، ونوعًا، وملاحظة اختيارية تشرح سبب وجوده (مفيدة بعد ستة أشهر، حين لا يتذكر أحد السياق).\n\n## وضع قفل Read-only\n\nضع قفل Read-only على حساب التخزين الخاص بك (الذي أنشأته في الجزء السابق، أو مجموعة موارد مخصصة، مثلًا باسم IntroAzureRG، حسب ما تستخدمه لهذا التمرين). ثم حاول إنشاء حاوية جديدة في حساب التخزين هذا.\n\nتفشل العملية، برسالة شبيهة بـ \"Failed to create storage container\". قفل Read-only يحجب حتى الإنشاء، بينما قد يتوقع المرء أنه يحجب فقط تعديلات عنصر موجود مسبقًا: هذا هو الفخ الأكثر شيوعًا مع هذا النوع من الأقفال.\n\n*تم التحقق في 27 سبتمبر 2026 على learn.microsoft.com، صفحة \"Lock your Azure resources to protect your infrastructure\".*"
            }
          }
        },
        {
          "id": "l15",
          "title": "Changer de verrou et nettoyer",
          "type": "text",
          "duration": "12 min",
          "body": "## Changer de verrou pour changer de comportement\n\nSupprimez le verrou en lecture seule posé à la leçon précédente, puis posez à la place un verrou de type Suppression sur la même ressource. Retentez la création du conteneur : elle réussit cette fois, parce qu'un verrou de suppression ne bloque que la suppression, pas la création ni la modification.\n\n## Tester le verrou de suppression\n\nEssayez maintenant de supprimer le compte de stockage lui-même. L'opération échoue à cause du verrou de suppression : c'est exactement le comportement attendu, la ressource est protégée contre un effacement accidentel tant que ce verrou reste en place.\n\n## Retirer le verrou avant de nettoyer\n\nPour finir cet atelier, retirez le verrou (section Verrous, bouton Supprimer sur le verrou lui-même, pas sur la ressource). Une fois le verrou parti, la suppression redevient possible.\n\n> Avant toute suppression de groupe de ressources, en fin de cours ou en fin d'atelier, vérifiez s'il porte un verrou. Une suppression de groupe de ressources qui échoue silencieusement à cause d'un verrou oublié laisse des ressources actives, et donc facturées, sans que ce soit visible au premier coup d'œil.\n\nTerminez en supprimant le groupe de ressources utilisé dans cette partie. Azure demande généralement de retaper le nom du groupe pour confirmer une suppression de cette ampleur : c'est volontaire, pour éviter une suppression déclenchée par erreur.\n\n```azurecli\naz group delete --name \"IntroAzureRG\" --yes --no-wait\n```\n\n> **À retenir**\n>\n> - Un verrou Lecture seule bloque même une création ; un verrou Suppression ne bloque que la suppression.\n> - Un verrou protège contre l'accident, il ne remplace pas les permissions.\n> - Avant de supprimer un groupe, vérifiez s'il porte un verrou : retirez-le d'abord, sur le verrou lui-même.\n\n> **À vous de jouer**\n>\n> 1. Avant de tester, écrivez vos prédictions : créer un conteneur sous verrou Lecture seule, créer un conteneur sous verrou Suppression, supprimer le compte sous verrou Suppression.\n> 2. Posez le verrou Lecture seule sur le compte de stockage et tentez de créer un conteneur.\n> 3. Remplacez-le par un verrou Suppression, recréez un conteneur, puis tentez de supprimer le compte.\n> 4. Comparez avec vos prédictions, retirez le verrou, puis supprimez le groupe `IntroAzureRG`.\n\n*Vérifié le 27 septembre 2026 sur learn.microsoft.com, page « Lock your Azure resources to protect your infrastructure ».*",
          "i18n": {
            "en": {
              "title": "Switching locks and cleaning up",
              "body": "## Switching locks to change behavior\n\nRemove the read-only lock set in the previous lesson, then set a Delete lock on the same resource instead. Try creating the container again: this time it succeeds, because a delete lock only blocks deletion, not creation or modification.\n\n## Testing the delete lock\n\nNow try deleting the storage account itself. The operation fails because of the delete lock: this is exactly the expected behavior, the resource is protected from accidental erasure as long as this lock stays in place.\n\n## Removing the lock before cleaning up\n\nTo finish this lab, remove the lock (Locks section, Delete button on the lock itself, not on the resource). Once the lock is gone, deletion becomes possible again.\n\n> Before deleting any resource group, at the end of this course or the end of a lab, check whether it carries a lock. A resource group deletion that fails silently because of a forgotten lock leaves resources active, and therefore billed, without it being obvious at a glance.\n\nFinish by deleting the resource group used in this part. Azure generally asks you to retype the group's name to confirm a deletion of this scale: that's deliberate, to prevent a deletion triggered by mistake.\n\n```azurecli\naz group delete --name \"IntroAzureRG\" --yes --no-wait\n```\n\n> **Key takeaways**\n>\n> - A Read-only lock blocks even a creation; a Delete lock blocks only deletion.\n> - A lock protects against accidents, it does not replace permissions.\n> - Before deleting a group, check whether it carries a lock: remove it first, on the lock itself.\n\n> **Your turn**\n>\n> 1. Before testing, write down your predictions: creating a container under a Read-only lock, creating a container under a Delete lock, deleting the account under a Delete lock.\n> 2. Set the Read-only lock on the storage account and try to create a container.\n> 3. Replace it with a Delete lock, create a container again, then try to delete the account.\n> 4. Compare with your predictions, remove the lock, then delete the `IntroAzureRG` group.\n\n*Verified on September 27, 2026 on learn.microsoft.com, \"Lock your Azure resources to protect your infrastructure.\"*"
            },
            "ar": {
              "title": "تبديل الأقفال والتنظيف",
              "body": "## تبديل نوع القفل لتغيير السلوك\n\nأزيلوا قفل Read-only الموضوع في الدرس السابق، ثم ضعوا بدلًا منه قفل Delete على نفس المورد. أعيدوا محاولة إنشاء الحاوية: ستنجح هذه المرة، لأن قفل Delete يحجب الحذف فقط، وليس الإنشاء أو التعديل.\n\n## اختبار قفل Delete\n\nحاولوا الآن حذف حساب التخزين نفسه. تفشل العملية بسبب قفل Delete: هذا هو السلوك المتوقع تمامًا، المورد محمي من محو عرضي طالما هذا القفل موضوع.\n\n## إزالة القفل قبل التنظيف\n\nلإنهاء هذا التمرين، أزيلوا القفل (قسم Locks، زر Delete على القفل نفسه، وليس على المورد). بمجرد زوال القفل، يصبح الحذف ممكنًا مجددًا.\n\n> قبل حذف أي مجموعة موارد، في نهاية هذا الكورس أو نهاية أي تمرين، تحققوا مما إذا كانت تحمل قفلًا. حذف مجموعة موارد يفشل بصمت بسبب قفل منسي يترك موارد نشطة، وبالتالي مُفوترة، دون أن يكون ذلك واضحًا للوهلة الأولى.\n\nأنهوا بحذف مجموعة الموارد المستخدمة في هذا الجزء. تطلب Azure عادة إعادة كتابة اسم المجموعة لتأكيد حذف بهذا الحجم: وهذا مقصود، لمنع حذف يقع عن طريق الخطأ.\n\n```azurecli\naz group delete --name \"IntroAzureRG\" --yes --no-wait\n```\n\n> **للتذكّر**\n>\n> - قفل القراءة فقط يمنع حتى الإنشاء؛ أما قفل الحذف فيمنع الحذف وحده.\n> - القفل يحمي من الحوادث ولا يحلّ محل الصلاحيات.\n> - قبل حذف مجموعة، تحقق هل عليها قفل: أزِله أولًا، من القفل نفسه.\n\n> **دورك الآن**\n>\n> 1. قبل الاختبار، دوّن توقعاتك: إنشاء حاوية تحت قفل القراءة فقط، إنشاء حاوية تحت قفل الحذف، حذف الحساب تحت قفل الحذف.\n> 2. ضع قفل القراءة فقط على حساب التخزين وحاول إنشاء حاوية.\n> 3. استبدله بقفل حذف، وأنشئ حاوية من جديد، ثم حاول حذف الحساب.\n> 4. قارن بتوقعاتك، وأزل القفل، ثم احذف المجموعة `IntroAzureRG`.\n\n*تم التحقق في 27 سبتمبر 2026 على learn.microsoft.com، صفحة \"Lock your Azure resources to protect your infrastructure\".*"
            }
          }
        },
        {
          "id": "l16",
          "title": "Quiz : verrous de ressources",
          "type": "quiz",
          "duration": "5 min",
          "questions": [
            {
              "id": "q13",
              "prompt": "Quelle est la différence entre un verrou et une permission ?",
              "options": [
                "Il n'y a aucune différence",
                "Le verrou bloque une action pour tout le monde, la permission détermine qui peut agir",
                "Le verrou coûte de l'argent, la permission est gratuite",
                "Le verrou s'applique uniquement aux VM"
              ],
              "correctIndex": 1,
              "explanation": "Une permission répond à « qui a le droit d'agir », un verrou répond à « quelle action est possible, pour tout le monde », indépendamment des droits de chacun."
            },
            {
              "id": "q14",
              "prompt": "Pourquoi la création d'un conteneur échoue-t-elle sous un verrou en lecture seule ?",
              "options": [
                "Parce que le compte de stockage est plein",
                "Parce que le verrou en lecture seule bloque aussi la création, pas seulement la modification",
                "Parce que le verrou en lecture seule bloque uniquement les VM",
                "Parce que le nom du conteneur est déjà pris"
              ],
              "correctIndex": 1,
              "explanation": "Le verrou en lecture seule bloque toute écriture, y compris la création d'un élément à l'intérieur de la ressource verrouillée : c'est plus large que ce à quoi on s'attend intuitivement."
            },
            {
              "id": "q15",
              "prompt": "Que faut-il vérifier avant de supprimer un groupe de ressources en fin d'atelier ?",
              "options": [
                "Le solde de l'abonnement",
                "S'il porte un verrou qui bloquerait la suppression",
                "La version du portail Azure",
                "Le nombre d'utilisateurs connectés"
              ],
              "correctIndex": 1,
              "explanation": "Un verrou oublié fait échouer silencieusement la suppression du groupe, laissant des ressources actives et facturées sans que ce soit évident."
            },
            {
              "id": "q16",
              "prompt": "Pourquoi Azure demande-t-il de retaper le nom du groupe de ressources avant de le supprimer ?",
              "options": [
                "Pour des raisons de facturation",
                "Pour éviter une suppression déclenchée par erreur, vu l'ampleur de l'action",
                "Parce que c'est obligatoire pour tous les mots de passe",
                "Pour vérifier que l'utilisateur est bien connecté"
              ],
              "correctIndex": 1,
              "explanation": "Supprimer un groupe de ressources supprime tout ce qu'il contient en une seule action irréversible ; la confirmation par nom sert de garde-fou volontaire."
            }
          ],
          "i18n": {
            "en": {
              "title": "Quiz: resource locks",
              "questions": [
                {
                  "prompt": "What is the difference between a lock and a permission?",
                  "options": [
                    "There is no difference",
                    "A lock blocks an action for everyone, a permission determines who can act",
                    "A lock costs money, a permission is free",
                    "A lock only applies to VMs"
                  ],
                  "explanation": "A permission answers \"who is allowed to act\", a lock answers \"which action is possible, for everyone\", regardless of anyone's rights."
                },
                {
                  "prompt": "Why does creating a container fail under a read-only lock?",
                  "options": [
                    "Because the storage account is full",
                    "Because the read-only lock also blocks creation, not just modification",
                    "Because the read-only lock only applies to VMs",
                    "Because the container's name is already taken"
                  ],
                  "explanation": "A read-only lock blocks any write, including creating something inside the locked resource: broader than what one would intuitively expect."
                },
                {
                  "prompt": "What should you check before deleting a resource group at the end of a lab?",
                  "options": [
                    "The subscription's balance",
                    "Whether it carries a lock that would block the deletion",
                    "The Azure portal's version",
                    "The number of connected users"
                  ],
                  "explanation": "A forgotten lock makes the group deletion fail silently, leaving active, billed resources without it being obvious."
                },
                {
                  "prompt": "Why does Azure ask you to retype the resource group's name before deleting it?",
                  "options": [
                    "For billing reasons",
                    "To prevent a deletion triggered by mistake, given the scale of the action",
                    "Because it is required for all passwords",
                    "To check that the user is properly logged in"
                  ],
                  "explanation": "Deleting a resource group deletes everything inside it in a single irreversible action; the name confirmation acts as a deliberate safeguard."
                }
              ]
            },
            "ar": {
              "title": "اختبار: أقفال الموارد",
              "questions": [
                {
                  "prompt": "ما الفرق بين القفل والصلاحية (permission)؟",
                  "options": [
                    "لا يوجد فرق",
                    "القفل يحجب إجراءً عن الجميع، الصلاحية تحدد من يستطيع التصرف",
                    "القفل يكلف مالًا، الصلاحية مجانية",
                    "القفل يُطبَّق فقط على أجهزة VM"
                  ],
                  "explanation": "الصلاحية تجيب عن \"من يحق له التصرف\"، والقفل يجيب عن \"أي إجراء ممكن، للجميع\"، بغض النظر عن حقوق كل شخص."
                },
                {
                  "prompt": "لماذا يفشل إنشاء حاوية تحت قفل Read-only؟",
                  "options": [
                    "لأن حساب التخزين ممتلئ",
                    "لأن قفل Read-only يحجب أيضًا الإنشاء، وليس فقط التعديل",
                    "لأن قفل Read-only يُطبَّق فقط على أجهزة VM",
                    "لأن اسم الحاوية مأخوذ مسبقًا"
                  ],
                  "explanation": "قفل Read-only يحجب أي كتابة، بما فيها إنشاء عنصر داخل المورد المقفل: أوسع مما قد يتوقعه المرء حدسيًا."
                },
                {
                  "prompt": "ما الذي يجب التحقق منه قبل حذف مجموعة موارد في نهاية التمرين؟",
                  "options": [
                    "رصيد الاشتراك",
                    "ما إذا كانت تحمل قفلًا يمنع الحذف",
                    "إصدار بوابة Azure",
                    "عدد المستخدمين المتصلين"
                  ],
                  "explanation": "قفل منسي يجعل حذف المجموعة يفشل بصمت، تاركًا موارد نشطة ومُفوترة دون أن يكون ذلك واضحًا."
                },
                {
                  "prompt": "لماذا تطلب Azure إعادة كتابة اسم مجموعة الموارد قبل حذفها؟",
                  "options": [
                    "لأسباب متعلقة بالفوترة",
                    "لمنع حذف يقع بالخطأ، نظرًا لحجم هذا الإجراء",
                    "لأن ذلك إلزامي لكل كلمات المرور",
                    "للتحقق من أن المستخدم مسجّل الدخول فعلًا"
                  ],
                  "explanation": "حذف مجموعة موارد يحذف كل ما بداخلها في إجراء واحد لا رجعة فيه؛ تأكيد الاسم هو إجراء وقائي متعمد."
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "i18n": {
    "en": {
      "title": "Azure Fundamentals: hands-on labs",
      "tagline": "Five guided labs to actually work with Azure: VMs, storage, cost and resource security.",
      "description": "This course adapts the hands-on labs from Microsoft's AZ-900 (Azure Fundamentals) path into a rewritten, reorganized version translated into three languages. You work in a real Azure console: create a virtual machine, expose it with a script, store a file in Blob Storage, estimate a cost without spending anything, and set a resource lock to guard against an accidental deletion. Every billable lab ends with an explicit cleanup step, so nothing is ever left running (and billing) for nothing.",
      "instructorBio": "Written by the OmniLearn instructor team, including a Microsoft Certified Trainer who also delivers Azure security (AZ-500) sessions. The labs build on Microsoft's open labs (MIT license), rewritten, checked in the Azure portal on the date shown in each lesson and translated into three languages.",
      "language": "English",
      "software": "A browser and an Azure account (free trial or student subscription)",
      "prerequisites": [
        "No prior Azure experience required",
        "A Microsoft account, to create a free Azure trial or use a student subscription",
        "Comfortable navigating a standard web interface"
      ],
      "summary": [
        "Part 1: the course's sources, the MIT license, and what the OmniLearn attestation confirms (and does not confirm)",
        "Part 2: creating a virtual machine, exposing it via a custom script, opening the needed port and cleaning up afterward",
        "Part 3: storing a file in Blob Storage and understanding why a private container returns a misleading error",
        "Part 4: estimating the cost of a three-service architecture with the official pricing calculator, without spending a cent",
        "Part 5: setting then removing a resource lock to protect yourself from an accidental deletion"
      ],
      "objectives": [
        "Create and configure an Azure virtual machine from the portal",
        "Install software on a VM without an SSH connection, via a custom script extension",
        "Create a storage account and a container, and correctly set their access level",
        "Estimate the cost of an Azure architecture with the official pricing calculator",
        "Set a resource lock to guard against an accidental deletion",
        "Make deleting created resources a habit, to avoid any unnecessary billing"
      ],
      "skills": [
        "Azure Virtual Machines",
        "Resource groups",
        "Azure Blob Storage",
        "Azure CLI",
        "Network Security Groups",
        "Azure pricing calculator",
        "Resource locks"
      ],
      "parts": [
        "Sources and portal basics",
        "Create and secure a virtual machine",
        "Store objects with Blob Storage",
        "Estimate a cost with the calculator",
        "Protect a resource with a lock"
      ],
      "lessons": {
        "l1": "Sources, license and attestation",
        "l2": "The portal, the subscription and the resource group",
        "l3": "Creating a virtual machine",
        "l4": "Configuring the VM with a custom script",
        "l5": "Opening network access and cleaning up",
        "l6": "Quiz: VM fundamentals",
        "l7": "Creating a storage account and a container",
        "l8": "Testing direct access to a blob",
        "l9": "Making a container accessible",
        "l10": "Quiz: Blob Storage",
        "l11": "Discovering the pricing calculator",
        "l12": "Estimating an architecture's cost",
        "l13": "Quiz: estimating a cost",
        "l14": "Setting a resource lock",
        "l15": "Switching locks and cleaning up",
        "l16": "Quiz: resource locks"
      }
    },
    "ar": {
      "title": "أساسيات Azure: تمارين عملية",
      "tagline": "خمسة تمارين موجَّهة للعمل فعليًا على Azure: أجهزة افتراضية، تخزين، تكلفة، وأمان الموارد.",
      "description": "يُكيّف هذا الكورس التمارين العملية من مسار Microsoft AZ-900 (Azure Fundamentals) في نسخة مُعاد كتابتها وتنظيمها ومترجمة إلى ثلاث لغات. تعمل على وحدة تحكم Azure حقيقية: إنشاء جهاز افتراضي، كشفه بسكربت، تخزين ملف في Blob Storage، تقدير تكلفة دون إنفاق أي شيء، ووضع قفل على مورد للحماية من حذف عرضي. ينتهي كل تمرين قابل للفوترة بخطوة تنظيف صريحة، حتى لا يبقى أي مورد يعمل (ويُكلّف) بلا داعٍ.",
      "instructorBio": "كتبه فريق مدرّبي OmniLearn، ومن بينهم مدرّب معتمد من Microsoft (MCT) يقدّم أيضًا جلسات أمن Azure (AZ-500). تعتمد التمارين على مختبرات Microsoft المفتوحة (ترخيص MIT)، وقد أُعيدت كتابتها ورُوجِعت في بوابة Azure في التاريخ المذكور داخل كل درس وتُرجمت إلى ثلاث لغات.",
      "language": "العربية",
      "software": "متصفح وحساب Azure (نسخة تجريبية مجانية أو اشتراك طلابي)",
      "prerequisites": [
        "لا حاجة لخبرة سابقة مع Azure",
        "حساب Microsoft، لإنشاء نسخة تجريبية مجانية من Azure أو استخدام اشتراك طلابي",
        "الارتياح في التنقل ضمن واجهة ويب عادية"
      ],
      "summary": [
        "الجزء 1: مصادر الكورس، ترخيص MIT، وما تؤكده (وما لا تؤكده) إفادة OmniLearn",
        "الجزء 2: إنشاء جهاز افتراضي، كشفه عبر سكربت مخصص، فتح المنفذ اللازم والتنظيف لاحقًا",
        "الجزء 3: تخزين ملف في Blob Storage وفهم سبب رجوع خطأ مضلِّل من حاوية خاصة",
        "الجزء 4: تقدير تكلفة بنية من ثلاث خدمات باستخدام حاسبة الأسعار الرسمية، دون إنفاق أي مبلغ",
        "الجزء 5: وضع قفل على مورد ثم إزالته لحماية نفسك من حذف عرضي"
      ],
      "objectives": [
        "إنشاء جهاز افتراضي في Azure وضبطه من البوابة",
        "تثبيت برنامج على VM دون اتصال SSH، عبر امتداد سكربت مخصص",
        "إنشاء حساب تخزين وحاوية، وضبط مستوى وصولها بشكل صحيح",
        "تقدير تكلفة بنية Azure باستخدام حاسبة الأسعار الرسمية",
        "وضع قفل على مورد للحماية من حذف عرضي",
        "جعل حذف الموارد المُنشأة عادة ثابتة لتجنب أي فوترة غير ضرورية"
      ],
      "skills": [
        "Azure Virtual Machines",
        "مجموعات الموارد (Resource groups)",
        "Azure Blob Storage",
        "Azure CLI",
        "Network Security Groups",
        "حاسبة أسعار Azure",
        "أقفال الموارد (Resource locks)"
      ],
      "parts": [
        "المصادر وأساسيات البوابة",
        "إنشاء جهاز افتراضي وتأمينه",
        "تخزين الكائنات باستخدام Blob Storage",
        "تقدير التكلفة باستخدام الحاسبة",
        "حماية مورد باستخدام قفل"
      ],
      "lessons": {
        "l1": "المصادر والترخيص والإفادة",
        "l2": "البوابة والاشتراك ومجموعة الموارد",
        "l3": "إنشاء جهاز افتراضي",
        "l4": "ضبط الـ VM بسكربت مخصص",
        "l5": "فتح الوصول الشبكي والتنظيف",
        "l6": "اختبار: أساسيات VM",
        "l7": "إنشاء حساب تخزين وحاوية",
        "l8": "اختبار الوصول المباشر لـ blob",
        "l9": "جعل الحاوية قابلة للوصول",
        "l10": "اختبار: Blob Storage",
        "l11": "التعرف على حاسبة الأسعار",
        "l12": "تقدير تكلفة بنية معينة",
        "l13": "اختبار: تقدير التكلفة",
        "l14": "وضع قفل على مورد",
        "l15": "تبديل الأقفال والتنظيف",
        "l16": "اختبار: أقفال الموارد"
      }
    }
  },
  "source": {
    "name": "AZ-900T0x Microsoft Azure Fundamentals (labs)",
    "url": "https://github.com/MicrosoftLearning/AZ-900T0x-MicrosoftAzureFundamentals",
    "license": "MIT",
    "version": "commit 12dfa4ac, 2026-08-13"
  }
};

export default azureFondamentauxLabs;
