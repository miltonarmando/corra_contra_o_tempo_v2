// Teste simples das variáveis de ambiente
console.log('=== TESTE VARIÁVEIS DE AMBIENTE ===');
console.log('VITE_OPENROUTER_API_KEY:', import.meta.env.VITE_OPENROUTER_API_KEY ? 'DEFINIDA' : 'NÃO DEFINIDA');
console.log('Primeiro 10 chars:', import.meta.env.VITE_OPENROUTER_API_KEY?.substring(0, 10) || 'N/A');
console.log('Comprimento:', import.meta.env.VITE_OPENROUTER_API_KEY?.length || 0);
console.log('Todas as env vars VITE_:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
