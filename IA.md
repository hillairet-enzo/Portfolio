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
- **Ce que j'ai modifié / corrigé / rejeté** : **[À COMPLÉTER par Enzo]**
- **Ce que j'ai compris** : **[À COMPLÉTER par Enzo]**

## Autres outils
- **[À COMPLÉTER]** : Pinterest (références, pas d'IA) ; tout autre outil d'IA utilisé (images, textes, code) doit être listé ici.

## Limites et erreurs corrigées
- **[À COMPLÉTER]** : exemples d'erreurs ou de choix de Claude que j'ai corrigés.
