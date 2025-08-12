import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // FORÇA modo development sempre (para OpenRouter considerar como dev, não prod)
  const forceDevMode = 'development'
  const env = loadEnv(forceDevMode, process.cwd(), 'VITE_')
  
  // Debug para verificar se a variável está sendo carregada
  console.log('🔍 Original Mode:', mode, '→ Forced Mode:', forceDevMode)
  console.log('🔍 VITE_OPENROUTER_API_KEY loaded:', env.VITE_OPENROUTER_API_KEY ? 'YES' : 'NO')
  
  return {
    base: command === 'serve' ? '/' : '/corra_contra_o_tempo_v2/',
    server: {
      host: '0.0.0.0',
      port: Number(process.env.PORT) || 5173,
      // Proxy para APIs serverless em desenvolvimento
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
        }
      }
    },
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    // Garantir que variáveis VITE_ sejam expostas no build
    // FORÇA modo development para o OpenRouter
    define: {
      'import.meta.env.VITE_OPENROUTER_API_KEY': JSON.stringify(env.VITE_OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY),
      'import.meta.env.MODE': JSON.stringify('development'), // FORÇA development sempre
      'import.meta.env.DEV': true, // FORÇA DEV sempre
      'import.meta.env.PROD': false // FORÇA PROD = false sempre
    }
  }
});
