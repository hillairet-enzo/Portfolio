# IA.md — Déclaration d'usage de l'intelligence artificielle

> BROUILLON à relire ligne par ligne par Enzo. Tout ce qui est marqué **[À VÉRIFIER]** ou **[À COMPLÉTER]** doit être confirmé ou corrigé par lui avant le rendu. Ne rien laisser qui soit inexact.

## Outil déclaré : Claude (Anthropic)
Utilisé en conversation (claude.ai / Claude Code), avec accès à Figma et à Google Docs via des connecteurs.

### Étape 1 — Positionnement et cible
- **Ce que Claude a fait** : m'a posé des questions pour clarifier ma cible, mon message en 30 secondes et ce qui me distingue ; a proposé des formulations à choisir.
- **Ce que j'ai décidé / modifié / rejeté** : j'ai choisi la cible (agences de communication, ouverture à l'étranger), la phrase d'accroche (option C) et l'intitulé « Creative & project management student (BUT MMI) ». J'ai écarté une approche centrée sur le développement (« Enzo = dev : non »). **[À COMPLÉTER : avec tes mots]**

### Étape 2 — Structure du site et contenus
- **Ce que Claude a fait** : a analysé les retours de mes profs et mon ancien portfolio Figma, a proposé l'arborescence et un document de synthèse (Google Docs).
- **Ce que j'ai décidé** : site multi-pages ; 3 études de cas ; suppression de « ma méthode » ; contact sans Discord ni GitHub ; adresse e-mail neutre à créer ; photo ou avatar à choisir ; boutons de personnalité sur le profil. **[À VÉRIFIER]**

### Étape 3 — Wireframes
- **Ce que Claude a fait** : a généré dans Figma deux variantes d'accueil en gris, deux variantes de page projet, un profil.
- **Ce que j'ai décidé** : variante B de l'accueil, visuel 3D/animé ; option 2 de la page projet ; profil en une seule page.

### Étape 4 — Direction artistique
- **Ce que Claude a fait** : a proposé trois dosages de style (épuré, doux, éditorial), puis a réalisé des tests visuels dans Figma (grain/matière, titre géant, verre).
- **Ce que j'ai décidé / rejeté** : j'ai choisi noir/gris/blanc sans couleur vive ; j'ai voulu un style minimaliste avec du « liquid glass » ; j'ai demandé que les objets autour du globe représentent ce que je produis (pas mes projets) ; j'ai gardé mon nom lisible plutôt que de le remplacer par un logo, après que Claude m'a rappelé le retour de Xavier. J'ai rejeté les tests trop chargés. **[À COMPLÉTER : ce que tu as repris de tes références Pinterest]**

### Étape 5 — Textes (page Olyvia)
- **Ce que Claude a fait** : a rédigé des brouillons en français à partir de ce que je lui ai dit (rôle, contexte, commande).
- **Ce que j'ai modifié** : **[À COMPLÉTER : reformuler chaque texte avec tes mots et noter ici ce que tu as changé]**

### Étape 6 — Code
- **[À COMPLÉTER au fur et à mesure]** : pour chaque fichier ou composant, ce que Claude a écrit, ce que j'ai compris, modifié ou refait moi-même.

#### Étape 6.1 — Projet Astro + Tailwind
- **Ce que Claude a fait** : a généré le projet Astro « minimal » avec la commande officielle, installé Tailwind avec `astro add tailwind`, ajouté `site: 'https://enzoh.fr'` dans `astro.config.mjs`, relié `global.css` à la page `index.astro` (titre et `<h1>` laissés en `[à compléter]`), rédigé `README.md`. Un build de test a réussi. Le favicon et `AGENTS.md` fournis par Astro n'ont pas été gardés.
- **Ce que j'ai modifié** : j'ai remplacé le `[à compléter]` du `<title>` et du `<h1>` de `index.astro` par « Enzo Hillairet ».
- **Ce que j'ai compris** : **[À COMPLÉTER par Enzo : le rôle de `src/pages/` et de `package.json`, avec mes mots]**

#### Étape 6.2 — Thème clair/sombre, polices, bouton de bascule
- **Ce que Claude a fait** : a installé les polices Inter (400, 600) et Unbounded (900) via les paquets npm Fontsource (hébergées dans le projet) ; a écrit `src/styles/global.css` (variables de couleurs clair/sombre issues de CLAUDE.md, classe `.glass`, coupure des transitions si `prefers-reduced-motion`) ; a créé `src/layouts/Layout.astro` (structure commune + petit script qui applique le thème avant l'affichage), `src/components/ThemeToggle.astro` (bouton) et les fichiers de textes `src/i18n/en.json` et `fr.json` ; a mis `index.astro` en page de test ; a ajouté la section « Polices » du README. Le build a réussi.
- **Ce que j'ai fait / vérifié** : j'ai lancé le site en local et testé la bascule : le thème sombre s'affiche correctement (capture d'écran envoyée à Claude). J'ai demandé à Claude de rédiger les entrées de ce fichier au fil du projet pour gagner du temps ; Claude n'y écrit que ce qui s'est passé dans la conversation et laisse les lignes « compris » à compléter par moi.
- **Ce que j'ai modifié / corrigé / rejeté** : rien à signaler pour l'instant. **[À COMPLÉTER par Enzo si tu modifies quelque chose]**
- **Ce que j'ai compris** : **[À COMPLÉTER par Enzo]**

#### Étape 6.3 — Site bilingue EN/FR
- **Ce que Claude a fait** : a configuré `i18n` dans `astro.config.mjs` (anglais par défaut à `/`, français à `/fr/`) ; a créé `src/i18n/utils.ts` (détection de la langue dans l'adresse, accès aux textes, adresse de la même page dans l'autre langue) ; a complété `en.json` et `fr.json` ; a créé `LanguageSwitcher.astro` (lien vers l'autre langue) et `Home.astro` (contenu de l'accueil partagé par les deux langues) ; a fait lire la langue dans l'adresse à `ThemeToggle.astro` et `Layout.astro` ; a ajouté les balises `hreflang` dans `Layout.astro` ; a créé `src/pages/fr/index.astro`. Le build a réussi (2 pages, `lang` et `hreflang` vérifiés dans le HTML généré).
- **Ce que j'ai modifié / corrigé / rejeté** : **[À COMPLÉTER par Enzo]**
- **Ce que j'ai compris** : **[À COMPLÉTER par Enzo]**

#### Étape 6.4 — En-tête
- **Ce que Claude a fait** : a lu l'en-tête de la maquette Figma (accueil ordinateur 18:2, accueil mobile 23:2) ; a créé `src/components/Header.astro` (« © 2026 » à gauche, pilule en verre à droite ; sur mobile, bouton MENU qui ouvre un panneau, fermé aussi par Échap) ; a transformé le bouton de thème en interrupteur (`role="switch"`, `aria-checked`) ; a transformé le sélecteur de langue en « FR | EN » (langue actuelle en gras, l'autre en lien) ; a ajouté un contour de focus global dans `global.css` ; a ajouté la fonction `localePath` et les textes de l'en-tête dans les fichiers JSON ; a créé `ECARTS.md` avec les écarts avec le Figma. Les liens PROJETS, PROFIL, CONTACT pointent vers des pages ou sections qui n'existent pas encore. Le build a réussi.
- **Décision proposée par Claude, à confirmer par Enzo** : le contenu du menu mobile n'étant pas dessiné dans le Figma, Claude y a mis les liens et la langue.
- **Ce que j'ai fait / vérifié** : j'ai commité les étapes 2 à 4 ; j'ai testé l'en-tête dans le navigateur et jugé qu'il ressemble beaucoup à la maquette.
- **Ce que j'ai modifié / corrigé / rejeté** : **[À COMPLÉTER par Enzo]**
- **Ce que j'ai compris** : **[À COMPLÉTER par Enzo]**

#### Étape 6.5 — Hero de l'accueil
- **Ce que Claude a fait** : a mesuré la largeur du texte « ENZO HILLAIRET » en Unbounded Black avec un petit script Node (hors du dépôt) pour calculer la taille du titre ; a créé `src/components/Hero.astro` (nom sur une ligne sur ordinateur, sur deux lignes sur mobile, taille calculée d'après la largeur disponible avec `@container` et `cqw` ; zone libre pour le globe ; ligne du bas avec la présentation et le stage) ; a ajouté les textes dans `en.json` et `fr.json` ; a simplifié `Home.astro` (la page de test a été retirée). Le build a réussi.
- **Textes** : la présentation en français vient de la maquette ; la version anglaise « Creative & project management student (BUT MMI) » reprend l'intitulé choisi par Enzo à l'étape 1 ; « Internship · 29 March – 4 June » est une traduction proposée par Claude. **[À VÉRIFIER / reformuler par Enzo]**
- **Ce que j'ai fait / vérifié** : j'ai testé le hero dans le navigateur (capture envoyée à Claude) et jugé le rendu « encore trop simple » : je veux un rendu 3D.
- **Ce que j'ai modifié / corrigé / rejeté** : **[À COMPLÉTER par Enzo]**
- **Ce que j'ai compris** : **[À COMPLÉTER par Enzo]**

#### Étape 6.6 — Globe en verre et cinq mots
- **Ce que j'ai demandé** : un rendu 3D plus riche pour le hero. J'ai aussi envoyé la commande `npx skills add Leonxlnx/taste-skill` (un skill externe de design). Claude ne l'a pas lancée et m'a posé la question ; j'ai demandé à voir d'abord son contenu.
- **Ce que Claude a fait pour le skill** : a fait lire le dépôt en ligne par un sous-agent (sans rien installer) et m'a résumé le résultat : le skill interdit notamment le verre, le flou d'arrière-plan, les pilules de navigation, les dégradés, les ombres, les petits libellés majuscules, la numérotation et les filets fins, c'est-à-dire plusieurs éléments de ma direction artistique ; il impose aussi un déroulé de travail et le téléchargement d'images depuis des banques externes. Claude a recommandé de ne pas l'installer. J'ai ensuite demandé à Claude de l'installer malgré tout (je trouvais le rendu « fade »). La première tentative de Claude a été bloquée par le système de permissions de Claude Code (code tiers téléchargé depuis internet). J'ai répété ma demande explicitement (« tu installes le skill ») et Claude a relancé la commande `npx skills add Leonxlnx/taste-skill` le 18/10/2026 : l'installation a réussi.
- **Ce qui a été ajouté au projet** : le dossier `.agents/skills/` (16 skills du dépôt Leonxlnx/taste-skill, environ 2,2 Mo, 43 fichiers, dont des scripts `.mjs` et des bibliothèques de données), des liens dans `.claude/skills/` et un fichier `skills-lock.json`. Aucun fichier du site (`src/`, `package.json`…) n'a été modifié par cette commande. Licence du skill : MIT (© 2026 Leonxlnx).
- **Règle d'utilisation (acceptée par moi)** : ma direction artistique (CLAUDE.md et maquette Figma) gagne toujours ; le skill ne sert que de source d'idées (profondeur, mouvement, retour visuel), et ses interdits qui contredisent ma maquette sont ignorés.
- **Propositions de Claude après lecture du skill `design-taste-frontend`** (rien n'a encore été codé à partir d'elles) : ① remonter le globe pour qu'il chevauche le nom comme sur la maquette ; ② le nom se lève ligne par ligne au chargement ; ③ mots en apparition décalée et retour au survol ; ④ reflet du globe qui suit le pointeur ; ⑤ liste de projets avec aperçu au survol ; ⑥ nom qui grossit au défilement (optionnel). Rejetées par Claude car elles contredisent la maquette ou la consigne : l'interdiction du verre, des pilules, des petits libellés en majuscules, de la numérotation, des filets, des ombres et des dégradés ; les photos téléchargées depuis des banques d'images ; le tirage aléatoire d'une direction ; le bandeau défilant.
- **Mes choix parmi ces propositions** : **[À COMPLÉTER par Enzo]**
- **Choix pour la 3D** : parmi trois options proposées par Claude (verre CSS puis vraie 3D / vraie 3D tout de suite / modèle externe), j'ai choisi « verre CSS d'abord, puis 3D » (la vraie 3D sera une étape 6b).
- **Ce que Claude a fait (code)** : a créé `src/components/HeroStage.astro` (globe en verre en CSS, cinq mots en boutons positionnés d'après la maquette sur ordinateur et en liste sous le globe sur mobile ; survol, focus clavier et clic/toucher activent un mot) ; a ajouté dans `global.css` les classes `.globe`, `.globe-highlight`, `.word-pill`, une animation de flottement coupée par `prefers-reduced-motion` et la variable `--glass-highlight` pour les deux thèmes ; a ajouté les libellés des mots dans `en.json` et `fr.json`. Un bug a été trouvé et corrigé par Claude avant la livraison (le flottement et le centrage du globe utilisaient la même propriété CSS `translate` : ils ont été séparés sur deux éléments). Les objets qui apparaissent au survol n'existent pas encore : pour l'instant, le mot actif change d'aspect et le globe grossit légèrement.
- **Textes** : « What I make » / « Ce que je fabrique » (étiquette du groupe de mots, lue par les lecteurs d'écran) et les libellés anglais des cinq mots sont des propositions de Claude. **[À VÉRIFIER / reformuler par Enzo]**
- **Ce que j'ai modifié / corrigé / rejeté** : **[À COMPLÉTER par Enzo]**
- **Ce que j'ai compris** : **[À COMPLÉTER par Enzo]**

## Autres outils
- **[À COMPLÉTER]** : Pinterest (références, pas d'IA) ; tout autre outil d'IA utilisé (images, textes, code) doit être listé ici.

## Limites et erreurs corrigées
- **[À COMPLÉTER]** : exemples d'erreurs ou de choix de Claude que j'ai corrigés.
