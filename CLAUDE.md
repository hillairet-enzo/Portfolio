# Portfolio d'Enzo Hillairet — consignes pour Claude Code

## Qui, quoi, pourquoi
- Enzo Hillairet, BUT MMI année 2, parcours Com & UX. Il cherche un stage de 8–10 semaines (29 mars – 4 juin) dans une agence de communication, ouvert à l'étranger.
- Ce portfolio est un **rendu noté**. Il doit être compris en 30 secondes : étudiant créatif + gestion de projet, qui conçoit et mène des projets jusqu'au bout.
- Public : un jury de profs et des recruteurs d'agence.

## Règles de travail (prioritaires)
1. **Enzo doit pouvoir expliquer, justifier et modifier tout le code et tous les textes devant un jury.** Avance par petites étapes. Après chaque étape, explique en français simple ce que fait le code et pourquoi, et demande à Enzo de reformuler ou de modifier quelque chose lui-même.
2. Ne génère pas le site complet d'un coup. Une page ou un composant à la fois.
3. **Tiens `IA.md` à jour** (à la racine) : pour chaque étape où tu interviens, note ce que tu as fait, et ce qu'Enzo a modifié, corrigé ou rejeté. Ne note rien d'inexact. Rappel de la consigne : l'absence de `IA.md` est traitée comme une déclaration mensongère.
4. Aucun thème ou template prédéfini. Tailwind est autorisé mais doit être déclaré (README) et substantiellement adapté à la direction artistique.
5. Les textes sont à Enzo : propose, mais il reformule avec ses mots. Ne rien inventer (chiffres, rôles, dates). Si une information manque, laisse un emplacement `[à compléter]`.
6. Le dépôt doit être **public** sur GitHub. Ne mets jamais de mot de passe, de clé ou de donnée personnelle dans le dépôt (pas d'adresse perso ni de numéro de téléphone).

## Pile technique
- Astro + Tailwind (Enzo connaît Astro, il l'a utilisé pour Opensigne).
- Site bilingue : **anglais par défaut, français en option**. Les textes sont dans des fichiers à part (un par langue), jamais en dur dans les composants.
- Thème **clair / sombre** avec un bouton de bascule (variables CSS).
- Déploiement : nom de domaine à lui, hébergement configuré par lui.

## Maquette de référence (Figma, en français)
- Fichier : https://www.figma.com/design/57OjJcj8gVeSxVOiAa02rZ (page « Home – wireframes »).
- Pages à coder : accueil complet (nœuds 18:2 clair, 18:87 sombre), page projet Olyvia (20:2 / 20:105), profil (22:2 / 22:103), mobile accueil (23:2 / 23:81) et page projet (23:160 / 23:251).
- Les « tests de style » 1 à 5 sont des explorations : ne pas les coder. Le test 6 (minimal + verre) est la direction retenue.
- **La maquette est en français uniquement** (demande du prof). Le site, lui, est en anglais par défaut.
- Si le code s'écarte du Figma, note l'écart dans `ECARTS.md` : le Figma sera remis à jour avant le rendu.

## Direction artistique (retenue)
- **Noir, gris, blanc uniquement.** Pas de couleur vive.
- Polices : **Inter** pour les textes, **Unbounded (graisse Black)** pour les gros titres, en majuscules.
- Couleurs (variables) : clair → fond `#FFFFFF`, texte `#111111`, atténué `#6B6B6B`, surface `#F2F2F2` ; sombre → fond `#0D0D0D`, texte `#F5F5F5`, atténué `#A0A0A0`, surface `#1B1B1B`.
- « Liquid glass » pour la navigation, les pilules et le globe : fond = couleur du texte à 6 % d'opacité, contour = couleur du texte à ~28 %, flou d'arrière-plan 18 px, ombre douce.
- Grands titres, beaucoup d'espace, très peu d'éléments (minimalisme). Marges latérales : 80 px sur ordinateur (1440), 20 px sur mobile (390).
- Accueil : le nom d'Enzo bien lisible sur une ligne (en deux lignes sur mobile), un globe en verre (objet 3D animé à venir), cinq mots autour (Identité visuelle, Affiches, Applis & sites web, Vidéo, Gestion de projet) ; au survol d'un mot, l'objet correspondant apparaît. Puis liste des projets (Affiches, Olyvia au milieu / en premier sur mobile, Opensigne), puis contact.
- Profil : bloc interactif « Moi & mes inspirations » (globe + 6 points : manga, football, culture internet, sport, mode, voyage ; carte au survol avec photo et court texte).
- Accessibilité : chaque point ou mot interactif doit aussi fonctionner au clavier et au toucher, pas seulement au survol. Vérifier les contrastes.
- Pas de logo ni de monogramme pour l'instant (le prof Xavier le déconseillait). Le nom en gros fait office de signature.

## Contenu
- Trois études de cas : Affiches (office de tourisme de Montbéliard, exercice fictif), Olyvia (SAE sur la ménopause, rendu pour les enseignants, site en ligne), Opensigne (appli de langue des signes). Chaque page : contexte et commande, mon rôle (Concevoir / Organiser / Livrer), processus en 3 étapes avec captures, résultat avec une limite honnête, liens (site, dossier PDF).
- Les compétences et les outils sont **séparés** (cartes de compétences ; outils en icônes).
- Mentions légales et politique de confidentialité obligatoires.
- Contact : formulaire (nom, e-mail, objet, message), LinkedIn, adresse e-mail neutre. Pas d'adresse personnelle.

## Qualité technique : `QUALITE.md` (obligatoire, noté)
Le site est contrôlé par sondage, sans préavis, sur quatre domaines : **accessibilité**, **sobriété et performance**, **référencement**, **conformité juridique**.
- Enzo doit **lui-même déduire les critères applicables à SON site**, choisir les outils de vérification, et consigner dans `QUALITE.md` : pour chaque critère, ce qu'il a vérifié, comment, et ce qu'il a corrigé. Une grille générique recopiée ne vaut rien.
- **Ne remplis pas `QUALITE.md` à sa place.** Pose-lui des questions pour qu'il identifie ce qui compte dans son cas, explique ce que fait un outil (Lighthouse, axe, WAVE, validateur HTML, etc.), puis fais-lui lancer les vérifications et interpréter les résultats. Note ce qu'il corrige.
- Points propres à ce projet à lui faire examiner (à lui de décider quoi en tirer) :
  - **Accessibilité** : interactions au survol (globe, mots, points du profil) utilisables aussi au clavier et au toucher ; contraste du texte sur les éléments en verre ; bascule clair/sombre ; textes alternatifs ; ordre de tabulation ; animations réduites (`prefers-reduced-motion`).
  - **Sobriété et performance** : coût du flou d'arrière-plan et des effets de verre, de l'objet 3D animé, de la police Unbounded, des images (formats, poids, chargement différé) ; nombre de requêtes ; ce que le site pèse au chargement.
  - **Référencement** : balises `title` et `description`, titres hiérarchisés, HTML sémantique, site bilingue (`lang`, `hreflang`), liens et images décrits, plan du site.
  - **Conformité juridique** : mentions légales, politique de confidentialité, formulaire de contact (données personnelles, RGPD), droits sur les images et les contenus de tiers (aucune image de référence Pinterest en ligne sans droit), mention des outils d'IA, cookies éventuels, crédits.

## Avant de commencer
Pose à Enzo les questions qui manquent (nom de domaine, hébergeur, nom du dépôt) avant de scaffolder. Commence par : projet Astro + Tailwind, thème clair/sombre, en-tête, puis le hero de l'accueil.
