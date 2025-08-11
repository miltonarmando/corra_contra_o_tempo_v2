import OpenAI from 'openai';

// ============================================================================
// CHATBOT API ARCHITECTURE - Serverless Function for OpenRouter Integration
// ============================================================================

// Configuração da OpenRouter (compatível com OpenAI SDK)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // API Key do OpenRouter
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://corra-contra-o-tempo-v2.vercel.app", // Para tracking opcional
    "X-Title": "Corra Contra o Tempo ChatBot", // Nome da aplicação
  },
});

// ============================================================================
// SYSTEM PROMPT - Define a personalidade e conhecimento do bot
// ============================================================================
const SYSTEM_PROMPT = `Você é um assistente virtual especializado no jogo de tabuleiro "Corra Contra o Tempo" e vendas do produto.

🎯 OBJETIVO: Vender o jogo e responder dúvidas técnicas/comerciais

📋 INFORMAÇÕES DO PRODUTO:
- Nome: "Corra Contra o Tempo"
- Tipo: Jogo de tabuleiro educativo familiar
- Idades: Versão Kids (8+), Versão Adulto (12+)
- Jogadores: 2-6 jogadores em equipes
- Duração: 30-45 minutos
- Mecânica: Descrição de palavras com limite de tempo

📦 COMPONENTES DA CAIXA:
- 1 Tabuleiro colorido resistente
- 250 Cartas com palavras (específicas por versão)
- 6 Peões coloridos para equipes
- 1 Ampulheta de 30 segundos
- Manual de regras em português
- Caixa premium para armazenamento

💰 PREÇOS ATUAIS (PROMOÇÃO):
- Versão Adulto: 1.500 MT (antes 1.900 MT) - 21% desconto
- Versão Kids: 1.500 MT (antes 1.800 MT) - 17% desconto

🚚 ENTREGA E LOGÍSTICA:
- Cobertura: Todo Moçambique
- Maputo: 1-2 dias úteis
- Beira/Nampula: 2-3 dias úteis  
- Outras cidades: 3-5 dias úteis
- Pagamento: Na entrega ou antecipado
- Rastreamento: Via WhatsApp

🎮 REGRAS BÁSICAS:
1. Dividir em equipes (2-6 jogadores)
2. Pegar carta e virar ampulheta (30s)
3. Descrever palavras sem falar a palavra/partes
4. Avançar no tabuleiro por acerto
5. Primeira equipe a completar vence

🔥 DIFERENÇAS ENTRE VERSÕES:
- Conteúdo físico: IDÊNTICO (tabuleiro, peões, ampulheta)
- Versão ADULTO: Palavras complexas/desafiadoras
- Versão KIDS: Vocabulário simples/adequado crianças

📞 CONTATO VENDAS:
- WhatsApp: +258 84 123 4567
- Email: vendas@corracontraotempo.mz
- Horário: Segunda a Sábado, 8h-18h

🤖 COMPORTAMENTO DO BOT:
- Seja entusiasmado e amigável
- Use emojis para engajamento
- Foque APENAS no jogo e vendas
- Redirecione outros assuntos gentilmente
- Incentive compra (promoção limitada)
- Linguagem: Português moçambicano
- Respostas: Concisas mas informativas

❌ REDIRECIONAMENTO PARA OUTROS ASSUNTOS:
"Agradeço sua pergunta, mas estou aqui especificamente para o 'Corra Contra o Tempo'! 🎲 Posso ajudar com regras, preços, ou como fazer seu pedido. Como posso ajudá-lo com nosso jogo?"`;

// ============================================================================
// SERVERLESS FUNCTION - Endpoint da API
// ============================================================================
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  // Apenas aceitar POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      allowedMethods: ['POST'] 
    });
  }

  try {
    const { message, conversation } = req.body;

    // Validação de entrada
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ 
        error: 'Message is required and must be a string' 
      });
    }

    // Verificar API key (segurança)
    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ OpenRouter API key not configured');
      return res.status(500).json({ 
        error: 'Serviço temporariamente indisponível. Entre em contato conosco!',
        contact: '+258 84 123 4567'
      });
    }

    console.log('🔑 OpenRouter API Key configurada:', process.env.OPENAI_API_KEY ? 'SIM' : 'NÃO');
    console.log('📨 Mensagem recebida:', message.substring(0, 50) + '...');

    // ========================================================================
    // CONSTRUIR CONTEXTO DA CONVERSA
    // ========================================================================
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      // Incluir últimas 10 mensagens para contexto (evitar token limit)
      ...(conversation || []).slice(-10),
      { role: 'user', content: message }
    ];

    // ========================================================================
    // CHAMADA PARA OPENROUTER (GPT-4 ou outro modelo disponível)
    // ========================================================================
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo', // Modelo via OpenRouter
      messages: messages as Array<{role: 'system' | 'user' | 'assistant', content: string}>,
      max_tokens: 500,          // Limite de resposta
      temperature: 0.7,         // Criatividade controlada
      presence_penalty: 0.1,    // Evitar repetição
      frequency_penalty: 0.1,   // Variar vocabulário
      top_p: 0.9,              // Foco nas respostas mais prováveis
    });

    const response = completion.choices[0]?.message?.content || 
      'Desculpe, não consegui processar sua pergunta. Pode tentar novamente? 😊';

    // Log para monitoramento
    console.log(`✅ OpenRouter ChatBot response generated for message: "${message.substring(0, 50)}..."`);

    return res.status(200).json({ 
      response,
      timestamp: new Date().toISOString(),
      model: 'openai/gpt-3.5-turbo',
      provider: 'OpenRouter'
    });

  } catch (error: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const apiError = error as any;
    console.error('❌ OpenRouter API Error Details:', {
      message: apiError?.message,
      status: apiError?.status,
      code: apiError?.code,
      type: apiError?.type,
      response: apiError?.response?.data
    });
    
    // Erro específico para rate limit
    if (apiError?.code === 'rate_limit_exceeded' || apiError?.status === 429) {
      return res.status(429).json({ 
        error: 'Muitas perguntas ao mesmo tempo. Aguarde um momento! ⏰' 
      });
    }

    // Erro de autenticação
    if (apiError?.status === 401) {
      return res.status(500).json({ 
        error: 'Problema de configuração. Entre em contato conosco! 🔧',
        contact: 'WhatsApp: +258 84 123 4567',
        provider: 'OpenRouter'
      });
    }

    // Erro genérico - SEM FALLBACK, apenas retorna erro
    return res.status(500).json({ 
      error: 'Serviço temporariamente indisponível. Tente novamente em alguns minutos! 🤖',
      contact: 'WhatsApp: +258 84 123 4567',
      provider: 'OpenRouter',
      debug: process.env.NODE_ENV === 'development' ? apiError?.message : undefined
    });
  }
}

// ============================================================================
// DEPLOYMENT INFO
// ============================================================================
/*
📡 DEPLOY ENVIRONMENT:
- Vercel Serverless Functions
- Edge Runtime para performance
- Auto-scaling baseado em demanda
- HTTPS por padrão

🔐 ENVIRONMENT VARIABLES (Vercel):
- OPENAI_API_KEY=sk-...

🌐 ENDPOINTS:
- Local: http://localhost:3000/api/chat
- Prod: https://corra-contra-o-tempo-v2.vercel.app/api/chat

📊 MONITORING:
- Logs automáticos no Vercel Dashboard
- Error tracking integrado
- Performance metrics
*/
