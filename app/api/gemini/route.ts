import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { apiKey, prompt, model = 'gemini-pro' } = await request.json();

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Clé API requise' },
        { status: 400 }
      );
    }

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt requis' },
        { status: 400 }
      );
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Erreur inconnue' }));
      console.error('Erreur API Gemini:', response.status, errorData);
      
      // Messages d'erreur plus spécifiques
      let errorMessage = `Erreur API Gemini (${response.status})`;
      if (response.status === 401) {
        errorMessage = 'Clé API Gemini invalide ou expirée';
      } else if (response.status === 403) {
        errorMessage = 'Accès refusé - Vérifiez vos permissions ou quotas Gemini';
      } else if (response.status === 429) {
        errorMessage = 'Limite de taux dépassée - Réessayez plus tard';
      }
      
      return NextResponse.json(
        { error: errorMessage, details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Réponse Gemini reçue:', data);
    
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!responseText) {
      console.error('Aucune réponse dans les données:', data);
      return NextResponse.json(
        { error: 'Format de réponse invalide', details: data },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      response: responseText
    });

  } catch (error) {
    console.error('Erreur API Gemini:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

