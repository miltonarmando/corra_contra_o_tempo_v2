import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/corra_contra_o_tempo_v2/',
  define: {
    'import.meta.env.VITE_OPENROUTER_API_KEY': JSON.stringify(process.env.VITE_OPENROUTER_API_KEY)
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
