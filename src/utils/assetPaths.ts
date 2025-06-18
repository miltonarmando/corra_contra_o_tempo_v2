// Utilitário para gerenciar caminhos de assets em diferentes ambientes
const isDevelopment = import.meta.env.DEV;
const basePath = isDevelopment ? '' : '/corra_contra_o_tempo_v2';

/**
 * Gera o caminho correto para assets baseado no ambiente
 * @param path - Caminho relativo do asset (ex: 'assets/img/logo.png')
 * @returns Caminho completo para o asset
 */
export function getAssetPath(path: string): string {
  // Remove barra inicial se presente
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Em desenvolvimento, usa caminho direto
  if (isDevelopment) {
    return `/${cleanPath}`;
  }
  
  // Em produção (GitHub Pages), adiciona o base path
  return `${basePath}/${cleanPath}`;
}

/**
 * Atalho específico para imagens
 * @param imageName - Nome da imagem (ex: 'logo.png' ou 'kids box.png')
 * @returns Caminho completo para a imagem
 */
export function getImagePath(imageName: string): string {
  // Codifica o nome do arquivo para URL (converte espaços em %20)
  const encodedImageName = encodeURIComponent(imageName);
  return getAssetPath(`assets/img/${encodedImageName}`);
}

/**
 * Atalho para logo
 * @returns Caminho para o logo principal
 */
export function getLogoPath(): string {
  return getImagePath('logo.png');
}

/**
 * Caminho para o favicon SVG
 * @returns Caminho para o favicon
 */
export function getFaviconPath(): string {
  return getAssetPath('logo.svg');
}

/**
 * Caminhos para tabuleiros
 */
export const getBoardPath = {
  kids: () => getImagePath('Tabuleiro kids.png'),
  adult: () => getImagePath('tabuleiro adulto.png'),
  simple: () => getImagePath('tabuleiro simple.png'),
};

/**
 * Caminhos para caixas do jogo
 */
export const getBoxPath = {
  kids: () => getImagePath('kids box.png'),
  adult: () => getImagePath('adulto box.png'),
};

/**
 * Caminhos para avatares
 */
export const getAvatarPath = {
  man: () => getImagePath('man.png'),
  woman: () => getImagePath('woman.png'),
};

/**
 * Caminhos para cartas
 */
export const getCardPath = {
  front: () => getImagePath('card-front.jpg'),
  rear: () => getImagePath('card-rear.jpg'),
};

/**
 * Caminho para o manual PDF
 */
export function getManualPath(): string {
  return getAssetPath('assets/Manual - Corra Contra o Tempo.pdf');
}
