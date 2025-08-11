# GitHub Pages Deploy com ChatBot

## Configuração Required

Para que o ChatBot funcione corretamente no GitHub Pages, você precisa configurar a API key como um **secret** no repositório GitHub.

### Passos para Configurar:

1. **Acesse seu repositório no GitHub**
2. **Vá para Settings** (Configurações)
3. **Clique em "Secrets and variables"** no menu lateral
4. **Clique em "Actions"**
5. **Clique em "New repository secret"**
6. **Configure o secret:**
   - **Name:** `VITE_OPENROUTER_API_KEY`
   - **Value:** `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`

### Deploy Automático

Após configurar o secret:

1. **Push para o branch main/master** irá automaticamente:
   - Fazer build do projeto com a API key
   - Deploy para GitHub Pages
   - ChatBot funcionará corretamente

### Deploy Manual (Alternativo)

Se preferir deploy manual com `gh-pages`:

```bash
# Definir a variável antes do build
set VITE_OPENROUTER_API_KEY=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

# Fazer build e deploy
npm run build
npm run deploy
```

### Verificação

Após o deploy, o ChatBot deve:
- ✅ Mostrar mensagem de boas-vindas completa
- ✅ Responder perguntas sobre o jogo
- ✅ Redirecionar perguntas fora do escopo
- ❌ **NÃO** mostrar erro de autenticação

### Solução de Problemas

Se ainda mostrar erro de autenticação:
1. Verifique se o secret foi criado corretamente
2. Verifique se o nome é exatamente `VITE_OPENROUTER_API_KEY`
3. Faça um novo push para trigger o workflow
4. Aguarde alguns minutos para o deploy completar

### URL do Site

Após deploy: https://miltonarmando.github.io/corra_contra_o_tempo_v2
