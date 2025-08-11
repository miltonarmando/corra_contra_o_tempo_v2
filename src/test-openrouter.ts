// Teste direto da API OpenRouter
async function testOpenRouter() {
  const apiKey = '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';
  
  console.log('Testando OpenRouter diretamente...');
  
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Corra Contra o Tempo - Test'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: 'Olá, você funciona?'
          }
        ],
        max_tokens: 50
      })
    });

    console.log('Status:', response.status);
    console.log('OK:', response.ok);
    
    const data = await response.json();
    console.log('Response:', data);
    
    if (data.choices && data.choices[0]) {
      console.log('Resposta:', data.choices[0].message.content);
    }
  } catch (error) {
    console.error('Erro no teste:', error);
  }
}

// Executar teste após 2 segundos
setTimeout(testOpenRouter, 2000);

export {};
