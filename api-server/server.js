import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurar dotenv para ler .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

dotenv.config({ path: path.join(rootDir, '.env.local') });

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Importar e servir as APIs do diretório /api
app.post('/api/chat', async (req, res) => {
  try {
    // Importar dinamicamente a função da API
    const { default: chatHandler } = await import('../api/chat.ts');
    await chatHandler(req, res);
  } catch (error) {
    console.error('Erro ao importar API chat:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/api/test', async (req, res) => {
  try {
    const { default: testHandler } = await import('../api/test.ts');
    await testHandler(req, res);
  } catch (error) {
    console.error('Erro ao importar API test:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.post('/api/test', async (req, res) => {
  try {
    const { default: testHandler } = await import('../api/test.ts');
    await testHandler(req, res);
  } catch (error) {
    console.error('Erro ao importar API test:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    env: {
      hasApiKey: !!process.env.OPENAI_API_KEY,
      nodeEnv: process.env.NODE_ENV
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API Server rodando em http://localhost:${PORT}`);
  console.log(`🔑 API Key configurada: ${process.env.OPENAI_API_KEY ? 'SIM' : 'NÃO'}`);
  console.log(`📡 Endpoints disponíveis:`);
  console.log(`   - POST http://localhost:${PORT}/api/chat`);
  console.log(`   - GET/POST http://localhost:${PORT}/api/test`);
  console.log(`   - GET http://localhost:${PORT}/health`);
});
