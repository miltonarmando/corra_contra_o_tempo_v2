// Configuração segura da API OpenRouter
// IMPORTANTE: A chave real deve estar APENAS em .env (nunca neste arquivo!)

export const OPENROUTER_CONFIG = {
  // Configuração do modelo
  MODEL: 'openai/gpt-3.5-turbo',
  
  // Parâmetros da API
  TEMPERATURE: 0.2,
  MAX_TOKENS: 200,
  
  // URLs e endpoints
  API_URL: 'https://openrouter.ai/api/v1/chat/completions',
  
  // Headers base (sem a chave!)
  BASE_HEADERS: {
    'Content-Type': 'application/json',
    'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173'
  },
  
  // Configuração de retry
  RETRY_CONFIG: {
    MAX_RETRIES: 3,
    BASE_DELAY: 1000,
    MAX_DELAY: 8000
  }
};

// Função segura para obter a API key
export const getApiKey = (): string | null => {
  // Verificar variável de ambiente
  const envKey = import.meta.env?.VITE_OPENROUTER_API_KEY;
  
  if (!envKey || envKey === 'undefined' || envKey === '') {
    console.error('❌ API Key não encontrada nas variáveis de ambiente');
    return null;
  }
  
  // Validar formato da chave
  if (!envKey.startsWith('sk-or-v1-')) {
    console.error('❌ Formato de API Key inválido');
    return null;
  }
  
  return envKey;
};

// Função para verificar se a API está configurada
export const isApiConfigured = (): boolean => {
  return getApiKey() !== null;
};
