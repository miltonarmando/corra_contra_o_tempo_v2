const sharp = require('sharp');
const glob = require('glob');
const path = require('path');

// Configurações de otimização
const config = {
  jpeg: { quality: 80 },
  webp: { quality: 80 },
  png: { quality: 80 },
  svg: { multipass: true }
};

// Encontra todas as imagens
glob('src/assets/**/*.{jpg,jpeg,png}', {}, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  files.forEach(file => {
    const outputWebP = file.replace(/\.(jpg|jpeg|png)$/, '.webp');
    
    // Converte para WebP
    sharp(file)
      .webp(config.webp)
      .toFile(outputWebP)
      .then(() => console.log(`Converted ${file} to WebP`))
      .catch(err => console.error(`Error converting ${file}:`, err));

    // Otimiza o original
    sharp(file)
      .toFile(file.replace(/(\.[^.]+)$/, '.min$1'))
      .then(() => console.log(`Optimized ${file}`))
      .catch(err => console.error(`Error optimizing ${file}:`, err));
  });
});