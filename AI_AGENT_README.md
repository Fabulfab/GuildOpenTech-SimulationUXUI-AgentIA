# Agent IA - Simulation Key Users

## 🚀 Fonctionnalités

Cet agent IA simule différents profils d'utilisateurs (personas) pour analyser des interfaces utilisateur. Il supporte plusieurs fournisseurs d'IA: **OpenAI**, **Google Gemini**, **Mistral**, **Grok** via des routes API Next.js.

### Personas disponibles :
- **P1_Spécialiste_UI** : Analyse basée sur Dribbble, Behance, Awwwards, Mobbin
- **P2_Spécialiste_UX** : Analyse selon le Baymard Institute et références UX
- **P3_Développeur_junior_homme** : Point de vue junior (<2 ans XP)
- **P4_Développeur_reconversion_expertise** : Profil mixte reconversion
- **P5_Développeur_senior_homme** : Expert senior (>10 ans XP)
- **P6_Développeur_confirmé_femme** : Confirmé (3-7 ans XP)
- **P7_Développeur_junior_femme_reconversion** : Junior reconversion
- **P8_Développeur_junior_homme_BTS** : Junior BTS

## 📋 Prérequis

1. Au moins une **clé API** parmi: OpenAI, Gemini, Mistral, Grok (voir `ENV_CONFIG.md`)
2. **Node.js** 18+
3. **npm** ou **yarn**

## 🛠️ Installation et démarrage

### 1. Installer les dépendances
```bash
npm install
```

### 2. (Optionnel) Configurer les variables d'environnement
Reportez-vous à `ENV_CONFIG.md`. Exemple minimal:
```env
# Choisir au moins un provider
OPENAI_API_KEY=...
GEMINI_API_KEY=...
MISTRAL_API_KEY=...
GROK_API_KEY=...

NEXT_PUBLIC_APP_NAME=GuildOpenTech UX/UI Agent
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 3. Démarrer le serveur de développement
```bash
npm run dev
```

### 4. Accéder à l'agent IA
Ouvrez `http://localhost:3000/ai-agent`. Cette page embarque l'interface HTML `public/SimulationKeyUsers_test UI.html` via un iframe.

## 🎯 Utilisation

### Étape 1 : Configuration
1. Sélectionnez un persona
2. Choisissez un fournisseur d'IA (OpenAI recommandé)
3. Entrez votre clé API du provider choisi
4. (Optionnel) Importez une image UI à analyser

### Étape 2 : Créer des questions
1. Cliquez sur "Ajouter une question"
2. Renseignez votre question
3. Répétez si nécessaire

### Étape 3 : Générer des réponses
1. **Réponses manuelles** : Saisissez directement vos réponses
2. **Réponses IA** : "Générer via IA" pour obtenir une réponse automatique adaptée au persona

### Étape 4 : Sauvegarder et exporter
1. "Enregistrer mes réponses" pour sauvegarder localement
2. "Exporter" pour télécharger un fichier Excel

## 🔧 Configuration avancée

### Variables d'environnement
Voir `ENV_CONFIG.md` pour les détails et liens d'obtention des clés (OpenAI, Gemini, Mistral, Grok).

### Personnalisation des personas
Modifiez `utils/ai-config.ts` pour ajouter/éditer les personas et les modèles par provider.

## 📁 Structure du projet

```
├── app/
│   ├── ai-agent/
│   │   └── page.tsx                 # Page Next.js embarquant l'interface HTML
│   ├── api/
│   │   ├── openai/route.ts          # Route API OpenAI
│   │   ├── gemini/route.ts          # Route API Google Gemini
│   │   ├── mistral/route.ts         # Route API Mistral
│   │   └── grok/route.ts            # Route API Grok (xAI)
│   └── page.tsx                     # Page d'accueil
├── public/
│   ├── SimulationKeyUsers_test UI.html   # Interface HTML/CSS/JS principale
│   └── test-*.html                      # Pages de test des APIs
├── utils/
│   └── ai-config.ts                 # Configuration des providers & personas
├── dist-standalone/                 # Build de la version standalone (HTML)
├── Agent-IA-Standalone/             # Paquet standalone prêt à l'emploi
└── AI_AGENT_README.md               # Ce fichier
```

## 🔒 Sécurité

- Côté app Next.js: les clés sont utilisées via des routes serveur dédiées (`app/api/*/route.ts`). Aucune clé n'est stockée en dur.
- Version standalone: tout fonctionne côté navigateur; vos clés saisies ne sont pas stockées ni envoyées à notre serveur.

## 🐛 Dépannage

### Erreur "Clé API requise"
- Vérifiez la saisie de la clé du provider choisi
- Assurez-vous que la clé est active et valide

### Erreur API (OpenAI/Gemini/Mistral/Grok)
- Vérifiez votre connexion internet
- Vérifiez les quotas/crédits de votre compte
- Consultez la console du navigateur (onglet Réseau) pour le détail

### L'agent ne répond pas
- Assurez-vous que le serveur Next.js est démarré (`npm run dev`)
- Vérifiez l'URL `http://localhost:3000/ai-agent`
- Videz le cache du navigateur si besoin

## 📊 Export des données

Export Excel avec les colonnes :
- **Date** : Date/heure de la session
- **User** : Persona sélectionné
- **Question** : Question posée
- **Réponse** : Réponse générée (manuelle ou IA)

## 🤝 Contribution

Pour améliorer l'agent IA :
1. Modifiez les personas dans `utils/ai-config.ts`
2. Améliorez l'interface dans `public/SimulationKeyUsers_test UI.html`
3. Ajoutez des fonctionnalités côté Next.js (`app/ai-agent/page.tsx`, routes `app/api/*`)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.