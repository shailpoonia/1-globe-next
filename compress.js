const sharp = require('sharp');
const fs = require('fs');

async function compress() {
  const input = 'public/hero-poster.jpg';
  const output = 'public/hero-poster-opt.jpg';
  
  await sharp(input)
    .jpeg({ quality: 80, progressive: true })
    .toFile(output);
    
  console.log('Compressed hero-poster.jpg');
}

compress();
