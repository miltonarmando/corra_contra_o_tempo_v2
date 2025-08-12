import React, { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // API Key OpenRouter - SOMENTE via variável de ambiente (SEGURANÇA)
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  // Debug para verificar se a API key está sendo carregada (apenas em dev)
  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      if (!apiKey) {
        console.error('❌ API Key não encontrada!');
        console.log('Variáveis disponíveis:', Object.keys(import.meta.env));
        console.log('Mode:', import.meta.env.MODE);
      } else {
        console.log('✅ API Key carregada:', apiKey.substring(0, 20) + '...');
      }
    }
  }, [apiKey]);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mensagem de boas-vindas
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeText = 'Olá! 👋 Sou o assistente do "Corra Contra o Tempo" - o jogo onde cada segundo conta! \n\nPosso ajudar com regras, preços, componentes e tudo sobre o jogo. Em que posso ajudar?';
        
      setMessages([{
        id: 'welcome',
        text: welcomeText,
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    try {
      const botResponse = await callOpenRouterAPI(userMessage.text);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('ChatBot - Erro:', error);
      
      let errorMessage = '🤖 Algo deu errado. Tente novamente!';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessage,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const callOpenRouterAPI = async (userMessage: string, retryCount = 0): Promise<string> => {
    // Verificação crítica da API key
    if (!apiKey || apiKey === 'undefined' || apiKey === '') {
      console.error('❌ API Key inválida:', { apiKey, env: import.meta.env.MODE });
      throw new Error('🔑 Configuração da API pendente. Entre em contato conosco.');
    }

    // Retry automático com backoff exponencial para resolver 429
    if (retryCount > 0) {
      const delay = Math.min(1000 * Math.pow(2, retryCount), 8000); // Max 8s
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Criar histórico completo da sessão (não apenas 2 mensagens)
    const conversationHistory = messages
      .filter(msg => msg.id !== 'welcome') // Remove apenas a mensagem de boas-vindas
      .map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text
      }));

    const requestBody = {
      model: 'openai/gpt-3.5-turbo', // Modelo gratuito
      messages: [
        {
          role: 'system',
          content: `Você é um assistente especializado no jogo de tabuleiro "Corra Contra o Tempo" vendido em Moçambique.

PERSONALIDADE: Seja natural, conversacional e entusiasmado sobre o jogo! Evite respostas robotizadas e seja genuinamente útil.

REGRA PRINCIPAL: Responda sobre o jogo de forma amigável. Para perguntas fora do tópico, redirecione educadamente mas sem soar robótico. Não converse assuntos fora do contexto do jogo e dados fornecidos.

INFORMAÇÕES OFICIAIS DO JOGO (baseadas no manual oficial):

SOBRE O JOGO:
"Corra Contra o Tempo - O jogo onde cada segundo conta"
- Jogo onde o tempo é o maior adversário
- Experiência cheia de desafios e diversão
- Amigos e familiares competem numa corrida contra o relógio
- Cada rodada traz novas surpresas e gargalhadas
- Atmosfera vibrante e cheia de adrenalina

OBJETIVO OFICIAL:
Cada equipa deve acertar o maior número possível de palavras dentro de um tempo limitado, ganhando pontos e avançando no tabuleiro. A equipa que alcançar a linha de chegada primeiro é a grande vencedora!

COMPONENTES OFICIAIS:
- Tabuleiro de Pontuação (para controlar progresso das equipas)
- Cartas Normais (narrador descreve palavras para equipa adivinhar)
- Cartas Especiais de Mímicas (adivinha palavra apenas com gestos)
- Ampulheta de 30 segundos (cronometrar cada rodada)
- Peões (marcam posição das equipas no tabuleiro)
- Brochura de Regras completa

REGRAS DAS CARTAS:
• CARTAS NORMAIS: Narrador descreve palavra sem usar partes da palavra, gestos ou sons. Criatividade e velocidade são a chave!
• CARTAS ESPECIAIS DE MÍMICAS: Apenas gestos permitidos. Sem palavras, sons ou apontar objectos.

COMO JOGAR (passo-a-passo oficial):
1. POSICIONAMENTO: Coloca tabuleiro no centro e posiciona peões no ponto inicial
2. FORMAÇÃO DAS EQUIPAS: Divide jogadores em equipas (nomes criativos encorajados!)
3. PREPARAÇÃO: Baralha bem as cartas
4. ESCOLHA DO NARRADOR: Narrador tem 10 segundos para começar descrição
5. RODADA: Narrador pega carta, vira ampulheta, tem 30 segundos para descrever palavras

PONTUAÇÃO OFICIAL:
• CARTAS NORMAIS: Cada palavra correta = 1 ponto. Acertando 2 palavras, equipa avança no tabuleiro
• CARTAS ESPECIAIS DE MÍMICAS: Cada palavra correta = 2 pontos. Se errar, perde 1 ponto. Acertando 1 palavra, equipa avança

CONDIÇÕES DE VITÓRIA:
- Uma equipa alcança fim do tabuleiro; OU
- Número pré-definido de rodadas termina
- Equipa com mais pontos vence!
- Em empate: rodada extra para decidir vencedor

PENALIDADES OFICIAIS:
- Dizer parte da palavra: perde 1 ponto
- Fazer gestos em cartas normais: perde 1 ponto
- Usar sons ou apontar objectos nas mímicas: perde 1 ponto

DICAS ESTRATÉGICAS (do manual):
• Para Narrador: Use sinónimos, descrições criativas e imaginação
• Para Equipa: Trabalhem juntos! Bom trabalho em equipa aumenta hipóteses de sucesso

VERSÕES DISPONÍVEIS:
- KIDS: 1.500 MT (promo, antes 1.800 MT) - palavras mais simples
- ADULTO: 1.500 MT (promo, antes 1.900 MT) - palavras mais desafiadoras
- Ambas: 2-6 jogadores, entrega para todo Moçambique

CONTATOS PARA COMPRA:
- Telefone: +258 84 312 4567
- Email: info@corracontraotempo.co.mz
- WhatsApp: Resposta imediata

COMO SER NATURAL NAS RESPOSTAS:
- Para cumprimentos (oi, olá): responda amigavelmente e pergunte como pode ajudar
- Para perguntas sobre loja física/endereço: "Não tenho essa informação específica, mas pode contactar pelos números acima para saber onde encontrar!"
- Para dúvidas do jogo: use as informações oficiais de forma conversacional
- Para assuntos totalmente fora do jogo: "Minha especialidade é o 'Corra Contra o Tempo'! Que tal falarmos sobre [algo do jogo]?"
- Seja entusiasmado e útil, não formal demais

EXEMPLOS DE RESPOSTAS NATURAIS:
- "Oi" → "Olá! Tudo bem? Como posso ajudar com o jogo?"
- "Como jogar?" → Explique as regras de forma amigável e clara
- "Preço?" → "Temos promoção! KIDS e ADULTO por 1.500 MT cada. Quer saber mais detalhes?"

Mantenha máximo 200 palavras por resposta e seja genuinamente útil!`
        },
        ...conversationHistory,
        {
          role: 'user',
          content: userMessage
        }
      ],
      temperature: 0.2,
      max_tokens: 200
    };

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5173' // FORÇA localhost para indicar desenvolvimento
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      console.error('ChatBot API Error:', response.status);
      
      if (response.status === 429 && retryCount < 3) {
        // Retry automático para 429 (até 3 tentativas)
        return callOpenRouterAPI(userMessage, retryCount + 1);
      } else if (response.status === 401) {
        throw new Error('🔑 Problema temporário de autenticação. Tente novamente.');
      } else if (response.status === 429) {
        throw new Error('⚡ Aguarde um momento e tente novamente...');
      } else if (response.status >= 500) {
        throw new Error('🔧 Serviço temporariamente indisponível. Tente novamente em alguns minutos.');
      } else {
        throw new Error('🤖 Erro temporário. Tente novamente.');
      }
    }

    const data = await response.json();
    
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error('🤖 Resposta vazia. Tente reformular sua pergunta.');
    }
    
    return content.trim();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-20 right-6 z-50 ${className}`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Abrir chat"
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-20 right-6 z-50 ${className}`}>
      <div 
        className="bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
        style={{ width: '21rem', height: 'min(calc(100vh - 12rem), 32rem)', minHeight: '20rem' }}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <div>
              <h3 className="font-semibold text-sm">Assistente do Jogo</h3>
              <p className="text-xs text-blue-100">Corra Contra o Tempo</p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-blue-700 p-1"
            aria-label="Fechar chat"
          >
            <X size={16} />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              {message.isBot && (
                <div className="bg-blue-100 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0">
                  <Bot size={12} className="text-blue-600" />
                </div>
              )}
              <div
                className={`max-w-[70%] p-2 rounded-lg text-sm whitespace-pre-wrap ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0">
                  <User size={12} className="text-white" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-2 justify-start">
              <div className="bg-blue-100 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0">
                <Bot size={12} className="text-blue-600" />
              </div>
              <div className="bg-gray-100 p-2 rounded-lg text-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua pergunta sobre o jogo..."
              disabled={isLoading}
              className="flex-1 text-sm"
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              size="sm"
              className="px-3"
              aria-label="Enviar mensagem"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;