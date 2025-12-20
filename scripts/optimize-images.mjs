/**
 * Image Optimization Script for RENOZ Energy Website
 * Converts images to WebP and resizes for web use
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SOURCE_DIR = './public/images/Stock Images';
const OUTPUT_DIR = './public/images/stock';
const MAX_WIDTH = 1920; // Max width for hero images
const QUALITY = 82; // WebP quality (80-85 is optimal for web)

async function optimizeImages() {
  console.log('🖼️  RENOZ Image Optimizer');
  console.log('========================\n');

  // Create output directory if it doesn't exist
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`📁 Output directory: ${OUTPUT_DIR}\n`);
  } catch (err) {
    // Directory exists, that's fine
  }

  // Read all files from source directory
  const files = await fs.readdir(SOURCE_DIR);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to process:\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(SOURCE_DIR, file);

    // Create a clean filename (lowercase, no spaces, kebab-case)
    const cleanName = file
      .replace(/\.(jpg|jpeg|png|webp)$/i, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const outputPath = path.join(OUTPUT_DIR, `${cleanName}.webp`);

    try {
      // Get original file size
      const stats = await fs.stat(inputPath);
      const originalSize = stats.size;
      totalOriginalSize += originalSize;

      // Process image
      await sharp(inputPath)
        .resize({
          width: MAX_WIDTH,
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      // Get optimized file size
      const outputStats = await fs.stat(outputPath);
      const optimizedSize = outputStats.size;
      totalOptimizedSize += optimizedSize;

      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      console.log(`✅ ${file}`);
      console.log(`   → ${cleanName}.webp`);
      console.log(`   ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% smaller)\n`);

    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  console.log('========================');
  console.log('📊 Summary:');
  console.log(`   Total original: ${formatBytes(totalOriginalSize)}`);
  console.log(`   Total optimized: ${formatBytes(totalOptimizedSize)}`);
  console.log(`   Total savings: ${formatBytes(totalOriginalSize - totalOptimizedSize)} (${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%)`);
  console.log('\n✨ Done! Optimized images saved to:', OUTPUT_DIR);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

optimizeImages().catch(console.error);

