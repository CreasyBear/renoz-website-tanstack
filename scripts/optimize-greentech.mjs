import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// GreenTech Hub files to optimize
const files = [
  {
    input: 'public/images/Greentech Hub/Jason McFarlane GreenTech Hub Joel Chan RENOZ Sandra Draper DEED.jpg',
    output: 'public/images/about/greentech-finalist-ceremony.webp'
  },
  {
    input: 'public/images/Greentech Hub/20251210 - GreenTech Hub Pitch Day - Mid Res-89.jpg',
    output: 'public/images/about/greentech-panel-discussion.webp'
  },
  {
    input: 'public/images/Greentech Hub/20251210 - GreenTech Hub Pitch Day - Mid Res-69.jpg',
    output: 'public/images/about/greentech-pitch-day.webp'
  },
  {
    input: 'public/images/Greentech Hub/20251209 - GreenTech Hub Event - Web Res-139.jpg',
    output: 'public/images/about/greentech-event.webp'
  },
  {
    input: 'public/images/Greentech Hub/20251209 - GreenTech Hub Event - Joel Chan.jpg',
    output: 'public/images/about/joel-greentech-finalist.webp'
  },
];

async function optimizeImages() {
  console.log('🔧 Optimizing GreenTech Hub images...\n');

  let totalOriginal = 0;
  let totalOptimized = 0;

  // Ensure output directory exists
  const outputDir = 'public/images/about';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
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

      // Get image metadata
      const metadata = await sharp(file.input).metadata();

      // Determine max dimension
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

