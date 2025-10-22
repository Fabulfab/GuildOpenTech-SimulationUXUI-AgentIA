const fs = require('fs');
const path = require('path');

// Créer le dossier de distribution
const distDir = './dist-standalone';
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copier le fichier principal
fs.copyFileSync('./public/agent-standalone.html', './dist-standalone/agent-standalone.html');

// Copier le README
fs.copyFileSync('./README_STANDALONE.md', './dist-standalone/README.md');

// Créer un fichier index.html qui redirige vers le fichier principal
const indexContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agent IA - Simulation Key Users</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #071520 0%, #0D2D45 100%);
            color: #F6A316;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            background: rgba(13, 45, 69, 0.9);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        .btn {
            background: linear-gradient(45deg, #F6A316, #FFD700);
            color: #071520;
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            font-size: 1.1em;
            font-weight: bold;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(246, 163, 22, 0.4);
        }
        .features {
            margin-top: 30px;
            text-align: left;
            display: inline-block;
        }
        .features ul {
            list-style: none;
            padding: 0;
        }
        .features li {
            margin: 10px 0;
            padding-left: 25px;
            position: relative;
        }
        .features li:before {
            content: "✅";
            position: absolute;
            left: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🤖 Agent IA - Simulation Key Users</h1>
        <p>Analysez vos interfaces utilisateur avec l'intelligence artificielle</p>
        
        <a href="agent-standalone.html" class="btn">🚀 Lancer l'Agent IA</a>
        
        <div class="features">
            <h3>✨ Fonctionnalités :</h3>
            <ul>
                <li>8 personas spécialisés</li>
                <li>Support multi-APIs (OpenAI, Gemini, Mistral)</li>
                <li>Upload d'images UI</li>
                <li>Export Excel</li>
                <li>Sauvegarde locale</li>
                <li>Aucune installation requise</li>
            </ul>
        </div>
        
        <p style="margin-top: 30px; font-size: 0.9em; opacity: 0.8;">
            💡 <strong>Conseil :</strong> Utilisez OpenAI (gratuit avec $5 de crédits) pour de meilleurs résultats
        </p>
    </div>
</body>
</html>`;

fs.writeFileSync('./dist-standalone/index.html', indexContent);

// Créer un fichier de configuration simple
const configContent = `# Configuration Agent IA Standalone

## APIs recommandées (gratuites) :

### OpenAI (Recommandé)
- URL: https://platform.openai.com/api-keys
- Crédits: $5 gratuits pour nouveaux comptes
- Format clé: sk-...

### Google Gemini
- URL: https://makersuite.google.com/app/apikey
- Crédits: Quotas gratuits généreux
- Format clé: alphanumérique

### Mistral AI
- URL: https://console.mistral.ai/
- Crédits: Crédits gratuits généreux
- Format clé: alphanumérique

## Instructions d'utilisation :
1. Ouvrez index.html dans votre navigateur
2. Cliquez sur "Lancer l'Agent IA"
3. Sélectionnez un persona
4. Choisissez une API (OpenAI recommandé)
5. Entrez votre clé API
6. Commencez à analyser vos interfaces !

## Support :
- Aucune installation requise
- Fonctionne sur tous les navigateurs
- Compatible mobile et desktop
- Données sauvegardées localement
`;

fs.writeFileSync('./dist-standalone/CONFIG.txt', configContent);

console.log('✅ Package standalone créé avec succès !');
console.log('📁 Dossier: ./dist-standalone/');
console.log('📄 Fichiers créés:');
console.log('   - index.html (page d\'accueil)');
console.log('   - agent-standalone.html (application principale)');
console.log('   - README.md (documentation)');
console.log('   - CONFIG.txt (configuration)');
console.log('');
console.log('🎯 Pour créer un ZIP :');
console.log('   1. Compressez le dossier dist-standalone/');
console.log('   2. Partagez le fichier ZIP');
console.log('   3. Les utilisateurs n\'ont qu\'à décompresser et ouvrir index.html');

