export interface MistralConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
}

export interface GrokConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
}

export interface OpenAIConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
}

export interface GeminiConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
}

export const DEFAULT_MISTRAL_CONFIG: MistralConfig = {
  apiKey: '',
  model: 'mistral-small-latest',
  maxTokens: 1000,
  temperature: 0.7
};

export const DEFAULT_GROK_CONFIG: GrokConfig = {
  apiKey: '',
  model: 'grok-beta',
  maxTokens: 1000,
  temperature: 0.7
};

export const DEFAULT_OPENAI_CONFIG: OpenAIConfig = {
  apiKey: '',
  model: 'gpt-3.5-turbo',
  maxTokens: 1000,
  temperature: 0.7
};

export const DEFAULT_GEMINI_CONFIG: GeminiConfig = {
  apiKey: '',
  model: 'gemini-pro',
  maxTokens: 1000,
  temperature: 0.7
};

export const MISTRAL_MODELS = {
  'mistral-small-latest': 'Mistral Small (recommandé)',
  'mistral-medium-latest': 'Mistral Medium',
  'mistral-large-latest': 'Mistral Large'
};

export const GROK_MODELS = {
  'grok-beta': 'Grok Beta (recommandé)',
  'grok-vision-beta': 'Grok Vision Beta'
};

export const OPENAI_MODELS = {
  'gpt-3.5-turbo': 'GPT-3.5 Turbo (recommandé, gratuit)',
  'gpt-4': 'GPT-4 (payant)',
  'gpt-4-turbo': 'GPT-4 Turbo (payant)'
};

export const GEMINI_MODELS = {
  'gemini-pro': 'Gemini Pro (recommandé, gratuit)',
  'gemini-pro-vision': 'Gemini Pro Vision (gratuit)'
};

export const PERSONAS = {
  "P1_Spécialiste_UI": {
    desc: "Spécialiste UI, cherche plusieurs sites références UI avant de répondre. Sources : Dribbble, Behance, Awwwards, Mobbin.",
    instructions: "Analyse l'UI en te basant sur Dribbble, Behance, Awwwards, Mobbin et cite tes sources."
  },
  "P2_Spécialiste_UX": {
    desc: "Spécialiste UX, se réfère au Baymard Institute, complète par d'autres références UX. Sources : Baymard Institute, UX Collective, Awwwards.",
    instructions: "Analyse l'expérience utilisateur selon le Baymard Institute et complète par d'autres sites UX reconnus. Cite tes sources."
  },
  "P3_Développeur_junior_homme": {
    desc: "Développeur junior, homme, <2 ans XP, master/bts, sans alternance, bénévole.",
    instructions: "Donne ton ressenti de développeur junior sur l'UI, sans expertise forte, en te basant sur ce que tu as appris en BTS/master. Reste synthétique."
  },
  "P4_Développeur_reconversion_expertise": {
    desc: "Dév junior/senior/confirmé, reconversion, connaît règles UX Baymard et UI, bénévole.",
    instructions: "Analyse l'UI en mobilisant tes connaissances des règles Baymard et UI, selon ton profil mixte reconversion et niveaux d'expérience. Cite tes références."
  },
  "P5_Développeur_senior_homme": {
    desc: "Dév. senior, homme, >10 ans XP, mentor bénévolat.",
    instructions: "Donne ton avis basé sur ta longue expérience, en comparant l'UI/UX à des projets similaires pro. Cite des standards ou best practices utilisées en entreprise."
  },
  "P6_Développeur_confirmé_femme": {
    desc: "Dév. confirmé, femme, 3-7 ans XP, bénévole pour progresser en UI/UX.",
    instructions: "Exprime ton ressenti sur la simplicité et l'apport UX de l'UI, en t'appuyant sur quelques règles et sur ton expérience pratique."
  },
  "P7_Développeur_junior_femme_reconversion": {
    desc: "Dév. junior, femme, <2 ans XP, Master, alternance, reconversion, bénévole.",
    instructions: "Réponds sur l'accessibilité de l'UI et la prise en main facile, en te référant à tes expériences en alternance ou recommandations vues sur Behance."
  },
  "P8_Développeur_junior_homme_BTS": {
    desc: "Dév. junior, homme, <2 ans XP, BTS sans alternance, bénévole.",
    instructions: "Donne ton sentiment sur l'UI en te focalisant sur la lisibilité et la simplicité, style BTS débutant, sans expertise approfondie mais curieux."
  }
}; 