# ============================================================================
# CONFIGURAÇÃO PRODUÇÃO - VERCEL ENVIRONMENT VARIABLES
# ============================================================================

## 🚀 COMO CONFIGURAR NO VERCEL:

### 1. Acesse o Vercel Dashboard:
   - https://vercel.com/dashboard
   - Selecione seu projeto

### 2. Vá para Settings:
   - Project Settings > Environment Variables

### 3. Adicione a variável:
   - Name: OPENAI_API_KEY
   - Value: sk-proj-sua_chave_aqui
   - Environment: Production, Preview, Development

### 4. Redeploy:
   - Deployments > Latest > Redeploy

# ============================================================================
# ESTRUTURA FINAL NO VERCEL:
# ============================================================================

NAME: OPENAI_API_KEY
VALUE: sk-proj-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
ENVIRONMENTS: ✅ Production ✅ Preview ✅ Development

# ============================================================================
# VERIFICAÇÃO:
# ============================================================================
# O código já está preparado para usar:
# process.env.OPENAI_API_KEY

# Se configurado corretamente, você verá nos logs:
# ✅ ChatBot response generated
# 
# Se não configurado, verá:
# ❌ OpenAI API key not configured
