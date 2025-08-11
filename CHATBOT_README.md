# ChatBot - Implementação Simplificada

## 🎯 Características

### ✅ Visual Limpo e Profissional
- Interface minimalista sem configurações técnicas para o usuário
- Design moderno com ícones Lucide React
- Animações suaves e responsivas
- Posicionamento fixo no canto inferior direito

### ✅ Integração Direta com OpenRouter
- API key configurada via arquivo `.env` (variável `VITE_OPENROUTER_API_KEY`)
- Uso do modelo `meta-llama/llama-3.1-8b-instruct:free` (gratuito)
- Fallback inteligente quando a API não está disponível
- Tratamento de erros robusto

### ✅ Especialização no Jogo "Corra Contra o Tempo"
- Prompt especializado para o contexto do jogo
- Respostas focadas em regras, vendas e informações do produto
- Fallback com respostas pré-programadas inteligentes
- Redirecionamento educado para tópicos relacionados ao jogo

### ✅ Funcionamento 100% Client-Side
- Sem necessidade de backend próprio
- Compatível com GitHub Pages
- Integração direta via fetch API
- Não depende de serviços serverless

## 🔧 Configuração

### Desenvolvimento Local
```bash
# No arquivo .env
VITE_OPENROUTER_API_KEY=sk-or-v1-sua-chave-aqui
```

### Produção (GitHub Pages)
- A API key será undefined no build de produção
- O ChatBot funcionará com fallback inteligente
- Para usar AI em produção, configure a chave via Vercel ou similar

## 📱 Como Usar

1. **Usuário clica no ícone flutuante** no canto inferior direito
2. **Interface limpa abre** com mensagem de boas-vindas automática
3. **Usuário digita pergunta** sobre o jogo
4. **ChatBot responde** usando AI (se disponível) ou fallback inteligente

## 🤖 Exemplos de Respostas

### Com API (OpenRouter)
- Respostas naturais e contextualizadas usando LLaMA 3.1
- Personalização baseada no prompt especializado
- Máximo de 500 tokens por resposta

### Com Fallback
- Respostas pré-programadas para palavras-chave
- Cobertura de tópicos: regras, vendas, versões, benefícios
- Redirecionamento para contato quando necessário

## 💡 Benefícios da Implementação

1. **Simplicidade**: Zero configuração para o usuário final
2. **Robustez**: Funciona com ou sem API key
3. **Especialização**: Focado no produto específico
4. **Compatibilidade**: 100% GitHub Pages
5. **Profissionalismo**: Visual limpo e moderno
6. **Performance**: Carregamento rápido e responsivo

## 🚀 Deploy

### GitHub Pages
```bash
npm run build
# Os arquivos em /dist podem ser deployados diretamente
```

### Vercel (com AI)
```bash
# Configure VITE_OPENROUTER_API_KEY nas environment variables
vercel deploy
```

O ChatBot está pronto para uso em produção! 🎉
