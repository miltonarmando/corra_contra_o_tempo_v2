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
  const [messages, setMessages] = useState<Message[]>(() => {
    // Recuperar mensagens do sessionStorage ao inicializar
    try {
      const stored = sessionStorage.getItem('chatbot-messages');
      return stored ? JSON.parse(stored).map((msg: Omit<Message, 'timestamp'> & { timestamp: string }) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })) : [];
    } catch {
      return [];
    }
  });
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // API Key do ambiente (durante build será undefined para GitHub Pages)
  // Usando nova API key válida
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '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';

  // Salvar mensagens no sessionStorage sempre que mudarem
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem('chatbot-messages', JSON.stringify(messages));
      } catch {
        // Ignorar erros de storage
      }
    }
  }, [messages]);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mensagem de boas-vindas
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Debug em produção para verificar se API key está sendo carregada
      console.log('ChatBot - API Key length:', apiKey?.length || 0);
      console.log('ChatBot - API Key preview:', apiKey?.substring(0, 30) + '...' || 'undefined');
      console.log('ChatBot - Environment:', import.meta.env.MODE);
      console.log('ChatBot - All env vars:', Object.keys(import.meta.env));
      
      // Testar se a API key tem o formato correto
      const isValidFormat = apiKey?.startsWith('sk-or-v1-');
      console.log('ChatBot - API Key format valid:', isValidFormat);
      
      const welcomeText = apiKey && apiKey.length > 10 
        ? 'Olá! 👋 Sou o assistente oficial do "Corra Contra o Tempo" - o jogo onde cada segundo conta! Posso explicar as regras oficiais, pontuação, penalidades, componentes, preços e como comprar.\n\nQue informação precisa sobre o jogo?'
        : 'Olá! 👋 Sou o assistente do jogo "Corra Contra o Tempo", mas estou temporariamente indisponível. Entre em contato conosco para suporte.';
        
      setMessages([{
        id: 'welcome',
        text: welcomeText,
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length, apiKey]);

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

    // Debug logs
    if (import.meta.env.DEV) {
      console.log('ChatBot - Enviando mensagem');
      console.log('ChatBot - API Key disponível:', !!apiKey);
    }

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
      console.error('ChatBot - Erro crítico:', error);
      
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Desculpe, tive um problema temporário. Pode tentar novamente ou perguntar de forma diferente?',
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const callOpenRouterAPI = async (userMessage: string): Promise<string> => {
    // Sistema de fallback: respostas locais se API não funcionar
    const localResponses = {
      regras: "As regras oficiais: 1) Forme equipas, 2) Narrador descreve palavras em 30 segundos, 3) Cartas normais = 1 ponto, mímicas = 2 pontos, 4) Primeira equipa a alcançar o fim do tabuleiro vence!",
      como_jogar: "Como jogar: Posicione o tabuleiro, forme equipas, baralhe as cartas, escolha o narrador (10s para começar), vire a ampulheta (30s) e descreva/adivinhe palavras!",
      pontuacao: "Pontuação: Cartas normais = 1 ponto cada palavra. Cartas de mímica = 2 pontos cada, mas perdem 1 se errarem. Acertando 2 palavras normais ou 1 mímica, a equipa avança!",
      componentes: "Componentes oficiais: Tabuleiro de pontuação, cartas normais, cartas especiais de mímicas, ampulheta de 30 segundos, peões e brochura de regras.",
      precos: "Preços promocionais: KIDS = 1.500 MT (antes 1.800), ADULTO = 1.500 MT (antes 1.900). Ambas versões para 2-6 jogadores com entrega em todo Moçambique.",
      contato: "Contactos: Telefone +258 84 312 4567, Email info@corracontraotempo.co.mz, WhatsApp para resposta imediata.",
      penalidades: "Penalidades (-1 ponto): Dizer parte da palavra, fazer gestos em cartas normais, usar sons ou apontar objectos nas mímicas.",
      dicas: "Dicas estratégicas: Narradores usem sinónimos e descrições criativas. Equipas trabalhem juntas - boa cooperação aumenta as hipóteses de sucesso!"
    };

    // Detectar tipo de pergunta
    const msg = userMessage.toLowerCase();
    let response = "";

    if (msg.includes('regra') || msg.includes('como jogar') || msg.includes('como funciona')) {
      response = localResponses.regras;
    } else if (msg.includes('pontua') || msg.includes('ponto') || msg.includes('score')) {
      response = localResponses.pontuacao;
    } else if (msg.includes('componen') || msg.includes('o que vem') || msg.includes('inclui')) {
      response = localResponses.componentes;
    } else if (msg.includes('preço') || msg.includes('preco') || msg.includes('custa') || msg.includes('comprar')) {
      response = localResponses.precos;
    } else if (msg.includes('contato') || msg.includes('contacto') || msg.includes('telefone') || msg.includes('email')) {
      response = localResponses.contato;
    } else if (msg.includes('penalida') || msg.includes('perder ponto') || msg.includes('erro')) {
      response = localResponses.penalidades;
    } else if (msg.includes('dica') || msg.includes('estrateg') || msg.includes('como ganhar')) {
      response = localResponses.dicas;
    } else if (msg.includes('olá') || msg.includes('ola') || msg.includes('hi') || msg.includes('hello')) {
      response = "Olá! Sou especializado no jogo 'Corra Contra o Tempo'. Posso explicar regras, pontuação, preços ou como comprar. O que gostaria de saber?";
    } else {
      // Pergunta não relacionada ao jogo
      response = "Desculpe, sou especializado apenas no jogo 'Corra Contra o Tempo'. Posso ajudar com regras, pontuação, preços, componentes ou contactos para compra. O que gostaria de saber sobre o jogo?";
    }

    // Tentar API primeiro, usar resposta local como fallback
    try {
      // Criar histórico das últimas 6 mensagens (3 pares pergunta-resposta) para contexto
      const conversationHistory = messages
        .slice(-6) // Últimas 6 mensagens
        .map(msg => ({
          role: msg.isBot ? 'assistant' : 'user',
          content: msg.text
        }));

      const requestBody = {
        model: 'microsoft/phi-3-mini-128k-instruct:free',
        messages: [
          {
            role: 'system',
            content: `Você é um assistente especializado EXCLUSIVAMENTE no jogo de tabuleiro "Corra Contra o Tempo" vendido em Moçambique.

REGRA FUNDAMENTAL: Só responda perguntas relacionadas ao jogo "Corra Contra o Tempo". Para qualquer pergunta fora deste tópico, responda educadamente que você é especializado apenas no jogo e redirecione a conversa de volta ao jogo.

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

SUAS FUNÇÕES:
- Explicar regras oficiais detalhadas
- Esclarecer pontuação e penalidades
- Ajudar com dúvidas sobre como jogar
- Fornecer dicas estratégicas do manual
- Informar preços e como comprar
- Manter conversação contextual
- SEMPRE redirecionar perguntas fora do tópico educadamente

DIRETRIZES:
- APENAS responda sobre o jogo "Corra Contra o Tempo"
- Para perguntas fora do tópico: "Desculpe, sou especializado apenas no jogo 'Corra Contra o Tempo'. Posso ajudar com [mencione algo relacionado ao jogo]?"
- Use informações oficiais do manual
- Seja entusiasmado sobre o jogo
- Máximo 90 palavras por resposta
- Mantenha contexto da conversa sobre o jogo
- Cite regras específicas quando relevante

EXEMPLOS DE REDIRECIONAMENTO:
- Pergunta sobre filmes/outros jogos: "Desculpe, sou especializado apenas no jogo 'Corra Contra o Tempo'. Que tal falarmos sobre as regras ou estratégias do jogo?"
- Pergunta sobre outros tópicos: "Minha especialidade é o jogo 'Corra Contra o Tempo'. Posso ajudar com informações sobre como jogar, preços ou componentes?"`
          },
          ...conversationHistory, // Incluir histórico para contexto
          {
            role: 'user',
            content: userMessage
          }
        ],
        temperature: 0.4,
        max_tokens: 150
      };

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Corra Contra o Tempo - ChatBot'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        console.warn('API falhou, usando resposta local:', response.status);
        throw new Error('API_FAILED');
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      
      if (content) {
        return content.trim();
      } else {
        throw new Error('API_FAILED');
      }
      
    } catch {
      console.log('Usando resposta local para:', userMessage);
      return response; // Retorna resposta local como fallback
    }
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
        {/* Header - ChatBot Fix */}
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
