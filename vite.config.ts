import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/corra_contra_o_tempo_v2/',
  define: {
    'process.env.NODE_ENV': JSON.stringify(command === 'serve' ? 'development' : 'production')
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173,
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
