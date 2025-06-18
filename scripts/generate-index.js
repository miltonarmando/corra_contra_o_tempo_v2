// Script para gerar index.html com caminhos corretos
import fs from 'fs';
import path from 'path';

// Determina se é desenvolvimento ou produção
// Verifica argumentos da linha de comando ou NODE_ENV
const args = process.argv.slice(2);
const isDevelopment = args.includes('--dev') || process.env.NODE_ENV === 'development';
const basePath = isDevelopment ? '' : '/corra_contra_o_tempo_v2';

// Função para gerar caminho de asset
function getAssetPath(assetPath) {
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  if (isDevelopment) {
    return `/${cleanPath}`;
  }
  return `${basePath}/${cleanPath}`;
}

// Função para favicon
function getFaviconPath() {
  return getAssetPath('favicon.svg');
}

// Template do index.html
const indexHtmlTemplate = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="${getFaviconPath()}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#8B5CF6" />
    <title>Corra Contra o Tempo - Jogo de Tabuleiro</title>
    <meta name="description" content="Jogo de tabuleiro educativo para todas as idades. Diversão garantida para família e amigos!" />
    <style>
      /* Prevent scroll restoration and ensure top position */
      html, body {
        scroll-behavior: auto !important;
        overflow-anchor: none;
      }
      /* Hide content until JS loads to prevent scroll jumps */
      #root:empty {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      // Force scroll to top before React loads
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
      // Disable scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    </script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

// Escreve o arquivo
fs.writeFileSync('index.html', indexHtmlTemplate);
console.log(`✅ index.html gerado com sucesso!`);
console.log(`📁 Favicon path: ${getFaviconPath()}`);
console.log(`🌍 Ambiente: ${isDevelopment ? 'Desenvolvimento' : 'Produção'}`);
