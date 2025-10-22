# Configuration des Variables d'Environnement

## Variables d'environnement optionnelles

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Clé API Mistral (optionnel - peut être saisie dans l'interface)
MISTRAL_API_KEY=your_mistral_api_key_here

# Clé API OpenAI (optionnel - peut être saisie dans l'interface)
OPENAI_API_KEY=your_openai_api_key_here

# Clé API Google Gemini (optionnel - peut être saisie dans l'interface)
GEMINI_API_KEY=your_gemini_api_key_here

# Clé API Grok (optionnel - peut être saisie dans l'interface)
GROK_API_KEY=your_grok_api_key_here

# Configuration de l'application
NEXT_PUBLIC_APP_NAME=GuildOpenTech UX/UI Agent
NEXT_PUBLIC_APP_VERSION=1.0.0
```

## Obtenir vos clés API

### Mistral AI (Gratuit)
1. Visitez [https://console.mistral.ai/](https://console.mistral.ai/)
2. Créez un compte
3. Générez votre clé API
4. Crédits gratuits généreux

### OpenAI (Gratuit avec $5 de crédits)
1. Visitez [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Créez un compte
3. Générez votre clé API (commence par sk-)
4. $5 de crédits gratuits pour nouveaux comptes

### Google Gemini (Gratuit)
1. Visitez [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Connectez-vous avec votre compte Google
3. Générez votre clé API
4. Quotas gratuits généreux

### Grok (xAI) (Payant)
1. Visitez [https://console.x.ai/](https://console.x.ai/)
2. Créez un compte
3. Générez votre clé API (commence par xai-)
4. Ajoutez des crédits pour utiliser l'API

## Note de sécurité

Les clés API peuvent également être saisies directement dans l'interface utilisateur. Elles ne sont pas stockées côté serveur et sont utilisées uniquement pour les appels API.
