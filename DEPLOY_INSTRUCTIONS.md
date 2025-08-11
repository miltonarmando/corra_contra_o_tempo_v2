# ✅ Deploy ChatBot OpenRouter no GitHub Pages

## 🔑 1. Configurar Secret da API Key no GitHub

**⚠️ IMPORTANTE:** Configure o secret ANTES de fazer o commit/push

### Passos:

1. **Acesse seu repositório no GitHub**
   - Vá para: `https://github.com/SEU_USUARIO/corra_contra_o_tempo_v2`

2. **Vá para Settings**
   - Clique na aba "Settings" do repositório

3. **Acesse Secrets and Variables**
   - No menu lateral esquerdo, clique em "Secrets and variables" > "Actions"

4. **Adicione um novo Repository Secret**
   - Clique em "New repository secret"
   - **Name:** `VITE_OPENROUTER_API_KEY`
   - **Secret:** `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`
   - Clique em "Add secret"

## 🚀 2. Fazer Deploy

```bash
# Adicionar todas as alterações
git add .

# Commit das mudanças
git commit -m "Deploy ChatBot com OpenRouter API configurado"

# Push para triggerar o deploy automático
git push origin main
```

## 🔍 3. Verificar o Deploy

1. **Acompanhar o workflow**
   - Vá para a aba "Actions" do repositório
   - Verifique se o workflow "Deploy to GitHub Pages" está executando sem erros

2. **Testar o site**
   - Acesse: `https://SEU_USUARIO.github.io/corra_contra_o_tempo_v2/`
   - Abra o ChatBot (botão azul no canto inferior direito)
   - Teste uma mensagem simples como "oi" ou "olá"

## 🛠️ 4. Troubleshooting

### ❌ ChatBot não responde
- Verifique se o secret `VITE_OPENROUTER_API_KEY` foi criado corretamente
- Abra o DevTools (F12) e veja se há erros no console
- Verifique se a API key do OpenRouter está válida

### ❌ Deploy falha
- Verifique se o workflow na aba "Actions" mostra erros
- Certifique-se de que o repositório tem permissões para GitHub Pages
- Verifique se a branch principal é `main` ou `master`

### ❌ Site não carrega
- Verifique se GitHub Pages está habilitado nas configurações do repositório
- Certifique-se de que a fonte está configurada para "GitHub Actions"

## 📋 5. Configuração Técnica

### Arquivos importantes:
- `.github/workflows/deploy.yml` - Workflow de deploy automático
- `vite.config.ts` - Configuração que injeta a API key no build
- `src/components/ChatBot.tsx` - Componente do ChatBot
- `DEPLOY_INSTRUCTIONS.md` - Este arquivo

### Como funciona:
1. **GitHub Actions** pega o secret `VITE_OPENROUTER_API_KEY`
2. **Vite** injeta a variável de ambiente no build de produção
3. **ChatBot** acessa via `import.meta.env.VITE_OPENROUTER_API_KEY`
4. **GitHub Pages** serve o site com a API key embutida

### Modelo usado:
- **OpenRouter**: `meta-llama/llama-3.2-3b-instruct` (gratuito)
- **Rate limiting**: Sem limitações locais, apenas da API
- **Histórico**: Últimas 2 mensagens para contexto

## ✅ 6. Status Atual

- ✅ ChatBot funcional com OpenRouter API
- ✅ Deploy automático configurado
- ✅ API key segura via GitHub Secrets
- ✅ Sem fallbacks ou limitações locais
- ✅ Build de produção testado e funcionando
- ✅ Prompt otimizado para o jogo "Corra Contra o Tempo"

## 🎯 Próximos passos:

1. Configure o secret no GitHub
2. Faça o commit e push
3. Aguarde o deploy (3-5 minutos)
4. Teste o ChatBot no site publicado
5. 🎉 Pronto para uso!

---

**Nota:** A API key será visível no JavaScript final, mas isso é normal para aplicações client-side. Use apenas chaves com permissões apropriadas.
