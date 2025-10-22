# README - Architecture du Projet

Bienvenue dans notre projet GuildOpenTech ! Ce document a pour but de vous donner une vue d’ensemble de l’architecture du projet et d’expliquer comment chaque partie est organisée. Prenez le temps de bien comprendre cette structure, car elle sera essentielle pour que nous travaillions de manière cohérente et efficace.


## Sommaire

- [README - Architecture du Projet](#readme---architecture-du-projet)
  - [Sommaire](#sommaire)
  - [Vue d’ensemble de l’architecture](#vue-densemble-de-larchitecture)
- [Structure du Projet](#structure-du-projet)
  - [Vue d’ensemble de l’architecture](#vue-densemble-de-larchitecture-1)
  - [Détails des dossiers](#détails-des-dossiers)
    - [/app](#app)
    - [/components](#components)
    - [/hooks](#hooks)
    - [/styles](#styles)
    - [/types](#types)
    - [/utils](#utils)
    - [/services](#services)
    - [/context](#context)
    - [/redux](#redux)
    - [/public](#public)
  - [**Bonnes pratiques et conventions**](#bonnes-pratiques-et-conventions)
- [Guide de collaboration - Workflow Git](#guide-de-collaboration---workflow-git)
  - [1. Structure des branches](#1-structure-des-branches)
  - [2. Créer une nouvelle branche](#2-créer-une-nouvelle-branche)
  - [Contributeurs](#contributeurs)
  - [Statut du projet](#statut-du-projet)



## Vue d’ensemble de l’architecture

Ce projet utilise **Next.js** avec la nouvelle architecture `app` introduite dans la version 13. Cela signifie que le routage est basé dans le dossier `app`, ce qui simplifie la structure et permet d’utiliser des fonctionnalités avancées comme des layouts imbriqués. Nous utilisons également **TypeScript** pour la sécurité des types et **Tailwind CSS** pour le style.

Voici notre structure de projet :

# Structure du Projet

## Vue d’ensemble de l’architecture

- `/app` # Dossier de routage principal
  - `page.tsx` # Page d'accueil

- `/components` # Composants réutilisables (UI)
  - `/common` # Composants de base (boutons, inputs, etc.)
  - `/layout` # Composants de layout (Header, Footer, etc.)
  - `/ui` # Composants spécifiques

- `/hooks` # Hooks personnalisés

- `/styles` # Styles globaux et Tailwind
  - `globals.css`
  - `tailwind.css`
  - `/themes` # Thèmes spécifiques (clair, sombre)

- `/types` # Types TypeScript globaux

- `/utils` # Fonctions utilitaires et constantes
  - `constants.ts`
  - `helpers.ts`
  - `validation.ts`

- `/services` # Services pour les appels API

- `/context` # Contexts globaux (auth, thème, etc.)

- `/redux` # Dossier pour Redux (ou Zustand pour la gestion d'état- avoir pour la suite lequel nous utiliserons)

- `/public` # Assets statiques (images, polices)

- `package.json`
- `tailwind.config.js`
- `tsconfig.json`


## Détails des dossiers

### /app
Ce dossier est le cœur du projet et gère le routage. Dans Next.js 13+, chaque sous-dossier de `app` représente une page ou une section de l’application :

- **page.tsx** : Définit une page (ex. `dashboard/page.tsx` pour la page dashboard).
- **layout.tsx** : Fichier de mise en page pour une section spécifique, appliqué à toutes les pages du sous-dossier.

**Par exemple :**
- `app/layout.tsx` est le layout global.
- `app/dashboard/layout.tsx` est un layout spécifique au dashboard, qui peut inclure un sidebar ou une navigation propre à cette section.

### /components
Ce dossier contient les composants réutilisables :

- **common** : Composants génériques (ex. boutons, modals, formulaires).
- **layout** : Composants liés à la mise en page, comme le Header et le Footer.
- **ui** : Composants spécifiques à certaines pages ou fonctionnalités, mais suffisamment réutilisables pour être partagés.
### /hooks
Dossier pour les hooks personnalisés. Les **hooks** sont des fonctions qui encapsulent de la logique et sont réutilisables dans différents composants.

### /styles
Tous les styles de l’application sont centralisés ici :
- **globals.css** : Contient les styles globaux pour toute l'application.
- **tailwind.css** : Fichier pour l’importation de Tailwind.
- **/themes** : Dossier pour les styles de thèmes (ex. clair, sombre).

### /types
Ce dossier contient les types globaux utilisés dans l’application, définis avec TypeScript. Cela nous aide à assurer la cohérence des types de données dans tout le projet.

### /utils
Ce dossier contient les fonctions utilitaires et constantes globales :
- **constants.ts** : Pour les constantes globales (ex. URL d’API).
- **helpers.ts** : Fonctions d’assistance générales.
- **validation.ts** : Logique de validation pour les formulaires et les champs.

### /services
Les **services** centralisent les appels API de l’application. Par exemple :
- **api.ts** : Contient la configuration pour interagir avec une API externe.
- **auth.ts** : Gère l’authentification.

### /context
Le dossier **context** contient les fichiers de contextes globaux, comme :
- **AuthContext.tsx** : Pour l’authentification.
- **ThemeContext.tsx** : Pour la gestion du thème.

Les contextes facilitent le partage de données dans l'application sans avoir à les passer dans les props.

### /redux
Ce dossier est destiné à la gestion de l'état global avec Redux (ou Zustand si vous préférez). Il contient :
- **slices** : Chaque "slice" représente une partie de l’état global (ex. `authSlice.ts` pour la gestion de l’authentification).
- **store.ts** : Configure le store Redux.
- **hooks.ts** : Définit des hooks personnalisés pour l’utilisation de Redux dans les composants.

### /public
Dossier contenant les assets statiques comme les images, les polices, et les icônes. Ces fichiers sont directement accessibles via des URL dans l’application.

---

## **Bonnes pratiques et conventions**

- **TypeScript strict** : Utilisez des types précis pour toutes les props et les états des composants. Cela rend le code plus sûr et compréhensible.
- **Petits composants** : Gardez les composants simples et centrés sur une seule responsabilité pour faciliter leur réutilisation et leur test.
- **Respect de la structure** : Organisez les fichiers comme décrit pour maintenir une cohérence et une lisibilité dans tout le projet.
- **Utilisation des hooks et contextes** : Les hooks et contextes permettent de garder le code logique et réutilisable.
- **Services pour les appels API** : Centralisez tous les appels API dans des services pour faciliter leur gestion et leur modification.
- **Alias `@` pour les imports** : Utilisez `@` pour simplifier les imports dans le projet, par exemple :
  ```typescript
  import { Button } from '@/components/common/Button';

---

  # Guide de collaboration - Workflow Git

Bienvenue à bord ! Pour garantir une collaboration efficace et éviter les conflits, nous suivrons un workflow Git organisé basé sur les branches. Voici les étapes à suivre.

---

## 1. Structure des branches

Nous utiliserons une structure de branches claire pour organiser notre travail :

- **`main`** : La branche principale. Elle doit toujours contenir du code stable et prêt à être déployé. Aucun travail direct ne doit être fait ici.
- **`develop`** : La branche de développement. Toutes les nouvelles fonctionnalités seront fusionnées ici avant d’être validées pour `main`.
- **Branches spécifiques aux fonctionnalités** : Chaque fonctionnalité ou tâche sera développée dans sa propre branche, créée à partir de `develop`. Le nom des branches doit suivre ce format :
  - `feature/<nom-de-la-fonctionnalite>` (pour une nouvelle fonctionnalité)
  - `fix/<nom-du-bug>` (pour corriger un bug)

---

## 2. Créer une nouvelle branche

1. Assurez-vous d’être à jour avec `develop` :
   ```bash
   git checkout develop
   git pull origin develop

2. **Créez une nouvelle branche pour votre tâche :**

   ```bash
   git checkout -b feature/<nom-de-la-fonctionnalite>

---

3. **Travailler sur votre branche**

   - Faites vos modifications localement.

   - Ajoutez vos changements :
     ```bash
     git add .
     ```

   - Faites un commit avec un message clair et descriptif :
     ```bash
     git commit -m "Ajout de la fonctionnalité de login"
     ```

---

4. **Pousser votre branche vers le dépôt distant**

   Une fois vos changements prêts à être partagés :
   ```bash
   git push origin feature/<nom-de-la-fonctionnalite>

---

5. **Créer une Pull Request (PR)**

   1. Rendez-vous sur GitHub.
   2. Ouvrez une **Pull Request** (PR) de votre branche vers `develop`.
   3. Ajoutez une description claire de ce que vous avez fait.
   4. Demandez une relecture (code review) à un autre membre de l’équipe ou au Tech Lead.

---

6. **Revue de code et fusion**

   - Une fois la PR approuvée et les commentaires résolus, le TechLead fusionnera votre branche dans `develop`.
   - Supprimez ensuite la branche une fois fusionnée pour garder le dépôt propre.

---

7. **Bonnes pratiques**

   - **Mettez à jour régulièrement votre branche** : Synchronisez souvent avec `develop` pour éviter les conflits :
     ```bash
     git pull origin develop
     ```

   - **Commits atomiques** : Faites de petits commits avec des messages clairs décrivant ce que vous avez fait.

   - **Résolution de conflits** : Si un conflit apparaît, résolvez-le localement, puis poussez à nouveau votre branche.

   - **Revue de code constructive** : Si vous relisez une PR, soyez précis et constructif dans vos retours.

---

8. **Branches spéciales**

   - `hotfix/<nom-du-fix>` : Pour corriger rapidement des problèmes critiques sur la branche `main`. Ces corrections sont ensuite fusionnées dans `main` et `develop`.

   - `release/<version>` : Utilisée pour préparer une version stable à partir de `develop`.

---

9. **Exemple d’un flux de travail typique**

   1. Créez une nouvelle branche `feature/ajout-login` à partir de `develop`.
   2. Développez la fonctionnalité de login.
   3. Faites plusieurs commits pendant le développement.
   4. Poussez votre branche et ouvrez une PR vers `develop`.
   5. Attendez la relecture, appliquez les changements si nécessaire.
   6. Une fois approuvée, fusionnez la branche dans `develop` et supprimez-la.

---



---

## Contributeurs

Merci à toutes les personnes qui participent à ce projet ! 😊

| [<img src="https://github.com/Fabulfab.png" width="100" height="100" alt="Fabulfab" />](https://github.com/Fabulfab) | [<img src="https://github.com/Tonyac-create.png" width="100" height="100" alt="Tonyac-create" />](https://github.com/Tonyac-create) | [<img src="https://github.com/foucsi.png" width="100" height="100" alt="foucsi" />](https://github.com/foucsi) | [<img src="https://github.com/nowii.png" width="100" height="100" alt="nowii" />](https://github.com/nowii) |
|:------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------:|
| [**Fabulfab**](https://github.com/Fabulfab) - Cheffe de projet/ui                                                    | [**Tonyac-create**](https://github.com/Tonyac-create) - Développeuse junior                                                     | [**foucsi**](https://github.com/foucsi) - Tech Lead                                                              | [**nowii**](https://github.com/nowii) - Designer UX                                                          |

---

## Statut du projet
🚧 Ce projet est en cours de développement. Certaines fonctionnalités sont encore en phase de conception ou d'implémentation. Nous vous remercions pour votre patience et votre compréhension pendant que nous travaillons à offrir une expérience optimale ! 🙏

