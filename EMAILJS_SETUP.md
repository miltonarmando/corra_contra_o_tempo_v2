# Como Configurar o EmailJS para Formulário de Revendedor

## Passos para Configuração

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Confirme seu email

### 2. Configurar Serviço de Email
1. No dashboard, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Configure seguindo as instruções
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as seguintes variáveis:

```
Assunto: Novo Pedido de Cadastro de Revendedor - {{from_name}}

Corpo do Email:
Olá {{to_name}},

Recebeu um novo pedido de cadastro de revendedor:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Cidade: {{city}}
Endereço: {{address}}
Tipo de Negócio: {{business_type}}
Experiência: {{experience}}

Mensagem Completa:
{{message}}

Atenciosamente,
Sistema Corra Contra o Tempo
```

4. Salve o template e anote o **Template ID**

### 4. Obter Chave Pública
1. Vá para "Account" → "General"
2. Encontre a seção "Public Key"
3. Anote a **Public Key**

### 5. Configurar no Código
1. Abra o arquivo `src/config/email.ts`
2. Substitua os valores pelos seus:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'seu_service_id_aqui',
  TEMPLATE_ID: 'seu_template_id_aqui',
  PUBLIC_KEY: 'sua_public_key_aqui',
};
```

### 6. Configurar Email de Destino
No template do EmailJS, configure o email de destino para onde os formulários serão enviados.

## Teste
1. Execute o projeto: `npm run dev`
2. Acesse a página de e-commerce
3. Clique em "Cadastre-se como Revendedor"
4. Preencha o formulário
5. Verifique se o email foi recebido

## Limites da Conta Gratuita
- 200 emails por mês
- Para uso comercial, considere um plano pago

## Suporte
Para dúvidas sobre EmailJS, consulte a [documentação oficial](https://www.emailjs.com/docs/).
