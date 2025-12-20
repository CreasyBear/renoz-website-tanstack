import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Files to optimize
const files = [
  {
    input: 'public/images/about/Unpacking RENOZ Container.jpeg',
    output: 'public/images/about/unpacking-container.webp'
  },
  {
    input: 'public/images/about/Simon Video.png',
    output: 'public/images/about/simon-ioniq.webp'
  },
  {
    input: 'public/images/about/Moving Pallete.jpeg',
    output: 'public/images/about/team-warehouse.webp'
  },
  {
    input: 'public/images/products/Commercial/Brill Commercial System.jpeg',
    output: 'public/images/products/commercial/brill-power-system.webp'
  },
  {
    input: 'public/images/products/Commercial/Brill Commercial System - 1.jpeg',
    output: 'public/images/products/commercial/brill-power-system-detail.webp'
  },
  {
    input: 'public/images/products/Commercial/IMG_1993.JPEG',
    output: 'public/images/products/commercial/cell-production-line.webp'
  },
];

async function optimizeImages() {
  console.log('🔧 Optimizing authentic RENOZ images...\n');

  let totalOriginal = 0;
  let totalOptimized = 0;

  // Ensure output directories exist
  const outputDirs = [...new Set(files.map(f => path.dirname(f.output)))];
  for (const dir of outputDirs) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  for (const file of files) {
    try {
      if (!fs.existsSync(file.input)) {
        console.log(`⚠️  Skipping (not found): ${file.input}`);
        continue;
      }

      const originalStats = fs.statSync(file.input);
      const originalSize = originalStats.size;
      totalOriginal += originalSize;

      // Get image metadata to determine orientation
      const metadata = await sharp(file.input).metadata();

      // Determine max dimension (landscape vs portrait)
      const maxWidth = metadata.width > metadata.height ? 1920 : 1280;

      await sharp(file.input)
        .resize(maxWidth, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(file.output);

      const optimizedStats = fs.statSync(file.output);
      const optimizedSize = optimizedStats.size;
      totalOptimized += optimizedSize;

      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      console.log(`✅ ${path.basename(file.input)}`);
      console.log(`   → ${path.basename(file.output)}`);
      console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(optimizedSize / 1024).toFixed(0)} KB (${savings}% saved)\n`);

    } catch (err) {
      console.error(`❌ Error processing ${file.input}:`, err.message);
    }
  }

  console.log('═══════════════════════════════════════');
  console.log(`📊 Total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
}

optimizeImages();

