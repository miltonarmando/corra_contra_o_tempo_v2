import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/corra_contra_o_tempo_v2/',
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'serve' ? 'development' : 'production'),
    // Garantir que as variáveis de ambiente sejam expostas
    __VITE_OPENROUTER_API_KEY__: JSON.stringify(process.env.VITE_OPENROUTER_API_KEY || '')
  },
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
  },  resolve: {
    alias: {
      '@': '/src',
    },
  },
}));
