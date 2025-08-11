// ============================================================================
// TESTE DE API - Endpoint para verificar se OpenRouter está funcionando
// ============================================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  // Configuração CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'API funcionando',
      timestamp: new Date().toISOString(),
      environment: {
        hasApiKey: !!process.env.OPENAI_API_KEY,
        apiKeyPrefix: process.env.OPENAI_API_KEY?.substring(0, 10) || 'não definida',
        nodeEnv: process.env.NODE_ENV || 'development'
      }
    });
  }

  // Teste simples de conexão com OpenRouter
  if (req.method === 'POST') {
    try {
      const OpenAI = (await import('openai')).default;
      
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        baseURL: "https://openrouter.ai/api/v1",
        defaultHeaders: {
          "HTTP-Referer": "https://corra-contra-o-tempo-v2.vercel.app",
          "X-Title": "Corra Contra o Tempo ChatBot Test",
        },
      });

      const completion = await openai.chat.completions.create({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Você é um assistente de teste. Responda apenas "Teste OK!"' },
          { role: 'user', content: 'teste' }
        ],
        max_tokens: 10,
        temperature: 0.1,
      });

      const response = completion.choices[0]?.message?.content || 'Sem resposta';

      return res.status(200).json({
        status: 'Sucesso',
        response,
        model: 'openai/gpt-3.5-turbo',
        provider: 'OpenRouter',
        timestamp: new Date().toISOString()
      });

    } catch (error: unknown) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const apiError = error as any;
      
      return res.status(500).json({
        status: 'Erro',
        error: apiError?.message || 'Erro desconhecido',
        errorCode: apiError?.code,
        errorStatus: apiError?.status,
        errorType: apiError?.type,
        timestamp: new Date().toISOString()
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
