# 🎮 Corra Contra o Tempo

Uma aplicação web interativa para o jogo de tabuleiro educativo "Corra Contra o Tempo", desenvolvida com React, TypeScript e animações modernas. O projeto apresenta um e-commerce completo para venda do jogo físico e uma versão jogável online.

![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-blue.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0+-purple.svg)
![Vite](https://img.shields.io/badge/Vite-6.0+-yellow.svg)

## 🎯 Sobre o Projeto

"Corra Contra o Tempo" é um jogo de tabuleiro educativo projetado para todas as idades, promovendo aprendizado através de diversão. Este projeto web oferece:

- **E-commerce completo** para venda do jogo físico
- **Versão jogável online** do jogo de tabuleiro
- **Interface moderna e responsiva** com animações fluidas
- **Experiência mobile-first** otimizada para todos os dispositivos

## ✨ Características Principais

### 🛒 **E-commerce Integrado**
- **Catálogo de Produtos**: Diferentes versões do jogo (Kids, Adulto, Simples)
- **Sistema de Carrinho**: Adicionar/remover produtos com persistência
- **Checkout Completo**: Processo de compra simplificado
- **Depoimentos**: Avaliações reais de clientes
- **FAQ Avançado**: Sistema de perguntas e respostas com busca

### 🎮 **Jogo Online**
- **Versão Digital**: Jogo de tabuleiro completamente funcional
- **Timer Interativo**: Cronômetro com controles de pausa/retomar
- **Sistema de Pontuação**: Tracking de pontos e conquistas
- **Múltiplos Modos**: Adaptação para diferentes idades

### 🎨 **Interface Moderna**
- **Design Responsivo**: Perfeito em mobile, tablet e desktop
- **Animações Fluidas**: Powered by Framer Motion
- **Tema Adaptativo**: Sistema de tema claro/escuro
- **Microinterações**: Feedback visual em todas as ações

### 📱 **Mobile-First Experience**
- **Navegação Touch-Friendly**: Otimizada para dispositivos móveis
- **Menu Mobile Intuitivo**: Sistema de navegação hamburger
- **Scroll Otimizado**: Animações adaptativas baseadas na velocidade do scroll
- **Performance**: Carregamento rápido e suave

## 🛠️ Stack Tecnológica

- **Frontend**: React 18 com Hooks e padrões modernos
- **Linguagem**: TypeScript com tipagem estrita
- **Styling**: Tailwind CSS com sistema de design customizado
- **Animações**: Framer Motion para animações performáticas
- **Build**: Vite para desenvolvimento rápido e builds otimizados
- **State Management**: React Context + Zustand para gerenciamento de estado
- **Ícones**: Phosphor Icons
- **UI Components**: Radix UI para componentes acessíveis

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Início Rápido

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/corra_contra_o_tempo.git
cd corra_contra_o_tempo

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🎮 Páginas e Funcionalidades

### 🏠 **Página Principal (E-commerce)**
- **Hero Section**: Apresentação impactante do jogo
- **Catálogo de Produtos**: Cards interativos com as versões do jogo
- **Seção "Como Funciona"**: Explicação detalhada das regras
- **Depoimentos**: Avaliações de clientes com sistema de estrelas
- **FAQ Moderno**: Sistema de busca e filtros por categoria
- **Contato**: Formulário e informações de contato

### 🎯 **Página do Jogo**
- **Interface de Jogo**: Tabuleiro digital interativo
- **Timer**: Cronômetro com controles avançados
- **Placar**: Sistema de pontuação em tempo real
- **Controles**: Botões intuitivos para todas as ações do jogo

### 📚 **Componentes Reutilizáveis**
- **Header Responsivo**: Navegação desktop e mobile
- **Footer Moderno**: Links organizados e informações da empresa
- **Cards de Produto**: Animações hover e estados interativos
- **Modais e Overlays**: Sistema de feedback visual
- **Loading States**: Skeletons e animações de carregamento

## 🎨 Sistema de Design

### 🎨 **Paleta de Cores**
- **Primárias**: Gradientes roxo/azul para ações principais
- **Secundárias**: Tons neutros para background e textos
- **Accent**: Cores vibrantes para destaques e CTAs
- **Estado**: Verde (sucesso), vermelho (erro), amarelo (aviso)

### 📐 **Layout Responsivo**
```css
/* Breakpoints */
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */
```

### ✨ **Animações**
- **Micro-interações**: Hover states em todos os elementos clicáveis
- **Page Transitions**: Transições suaves entre páginas
- **Scroll Animations**: Elementos animam conforme entram na viewport
- **Loading Animations**: Estados de carregamento fluidos

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                     # Componentes base (Button, Input, etc.)
│   ├── common/                 # Componentes compartilhados
│   ├── advanced/               # Componentes avançados (scroll, animações)
│   ├── Header.tsx              # Cabeçalho responsivo
│   ├── Footer.tsx              # Rodapé moderno
│   └── FAQ.tsx                 # Sistema de FAQ avançado
├── pages/
│   ├── EcommercePage.tsx       # Página principal do e-commerce
│   ├── GamePage.tsx            # Página do jogo online
│   └── HomePage.tsx            # Página de entrada
├── hooks/
│   ├── useTheme.ts             # Hook de tema
│   ├── useScrollToTop.ts       # Hook de scroll to top
│   └── useSmartScrollAnimation.ts # Animações inteligentes de scroll
├── providers/
│   ├── ThemeProvider.tsx       # Contexto de tema
│   └── AnimationProvider.tsx   # Contexto de animações
├── stores/
│   └── useAppStore.ts          # Estado global da aplicação
├── styles/
│   ├── responsive.css          # Estilos responsivos
│   └── scroll-optimization.css # Otimizações de scroll
└── utils/
    └── index.ts                # Utilitários gerais
```

## 🚀 Funcionalidades Avançadas

### 📱 **Responsividade Extrema**
- **Mobile-First**: Design pensado primeiro para mobile
- **Touch Optimized**: Alvos de toque de 44px mínimo
- **Viewport Adaptive**: Ajuste automático para diferentes telas
- **Orientation Support**: Suporte a landscape e portrait

### ⚡ **Performance**
- **Lazy Loading**: Carregamento sob demanda de componentes
- **Image Optimization**: Imagens otimizadas para web
- **Code Splitting**: Divisão inteligente do código
- **Bundle Analysis**: Análise de tamanho dos bundles

### ♿ **Acessibilidade**
- **WCAG 2.1**: Conformidade com padrões de acessibilidade
- **Keyboard Navigation**: Navegação completa por teclado
- **Screen Readers**: Suporte a leitores de tela
- **Focus Management**: Gerenciamento inteligente de foco

### 🎯 **SEO e Performance**
- **Meta Tags**: Tags otimizadas para SEO
- **Open Graph**: Compartilhamento social otimizado
- **Core Web Vitals**: Métricas de performance otimizadas
- **Lighthouse Score**: Score 90+ em todas as categorias

## 🎮 Como Jogar Online

1. **Acesse a Página do Jogo**: Clique em "Jogar Online" no menu
2. **Escolha o Modo**: Selecione Kids, Adulto ou Simples
3. **Configure o Timer**: Defina o tempo de jogo
4. **Inicie a Partida**: Clique em "Começar" e divirta-se!

## 📈 Roadmap

### 🔄 **Próximas Versões**
- [ ] Sistema de autenticação de usuários
- [ ] Multiplayer online em tempo real
- [ ] Rankings e leaderboards
- [ ] Sistema de conquistas
- [ ] Chat integrado para jogadores
- [ ] Modo offline PWA

### 🛠️ **Melhorias Técnicas**
- [ ] Testes automatizados (Jest + Testing Library)
- [ ] Storybook para documentação de componentes
- [ ] CI/CD pipeline automatizado
- [ ] Monitoramento de performance (Sentry)
- [ ] Analytics integrado (Google Analytics)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Convenção de Commits
Este projeto usa [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - Novas funcionalidades
- `fix:` - Correções de bugs
- `docs:` - Alterações na documentação
- `style:` - Mudanças de estilo de código
- `refactor:` - Refatoração de código
- `test:` - Adições/modificações de testes
- `chore:` - Tarefas de manutenção

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Equipe

- **Desenvolvedor Principal**: Milton Armando
- **Email**: tekinova.inc@icloud.com
- **Empresa**: Tekinova Inc.

## 🙏 Agradecimentos

- [React](https://reactjs.org/) - Framework web
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Phosphor Icons](https://phosphoricons.com/) - Biblioteca de ícones
- [Radix UI](https://www.radix-ui.com/) - Componentes acessíveis

## 📞 Suporte

Para dúvidas ou suporte:
- Abra uma issue no GitHub
- Entre em contato via email: tekinova.inc@icloud.com
- Visite nossa seção de FAQ no site

---

🎮 **Desenvolvido com ❤️ para promover educação através da diversão** 🎲
