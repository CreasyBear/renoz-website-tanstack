import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const inputFile = 'public/images/optimized/logo-renoz.png';
const outputFile = 'public/images/optimized/logo-renoz.webp';

console.log('🖼️  Converting logo to WebP...\n');

try {
  // Get input file stats
  const inputStats = await stat(inputFile);
  const inputSize = inputStats.size;

  // Convert to WebP with high quality for logos
  // First resize to reasonable dimensions to avoid WebP size limits
  const metadata = await sharp(inputFile).metadata();
  const maxDimension = 2000; // Max width/height

  let resizeOptions = {};
  if (metadata.width > maxDimension || metadata.height > maxDimension) {
    resizeOptions = {
      width: metadata.width > metadata.height ? maxDimension : undefined,
      height: metadata.height > metadata.width ? maxDimension : undefined,
      fit: 'inside',
      withoutEnlargement: true
    };
  }

  const sharpInstance = sharp(inputFile);
  if (Object.keys(resizeOptions).length > 0) {
    sharpInstance.resize(resizeOptions);
  }

  await sharpInstance
    .webp({ quality: 95, lossless: false })
    .toFile(outputFile);

  // Get output file stats
  const outputStats = await stat(outputFile);
  const outputSize = outputStats.size;

  // Calculate savings
  const savings = inputSize - outputSize;
  const savingsPercent = ((savings / inputSize) * 100).toFixed(1);

  console.log(`✅ Logo converted successfully!`);
  console.log(`   Original (PNG): ${(inputSize / 1024).toFixed(2)} KB`);
  console.log(`   Optimized (WebP): ${(outputSize / 1024).toFixed(2)} KB`);
  console.log(`   Savings: ${(savings / 1024).toFixed(2)} KB (${savingsPercent}%)\n`);
} catch (error) {
  console.error('❌ Error converting logo:', error.message);
  process.exit(1);
}

