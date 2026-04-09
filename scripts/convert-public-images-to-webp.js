/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

const SUPPORTED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

function walk(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

async function convertOne(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(ext)) return { skipped: true, reason: 'unsupported' };

  const outputPath = inputPath.slice(0, -ext.length) + '.webp';

  if (fs.existsSync(outputPath)) return { skipped: true, reason: 'exists' };

  await sharp(inputPath)
    .webp({ quality: 82 })
    .toFile(outputPath);

  return { skipped: false, outputPath };
}

async function main() {
  if (!fs.existsSync(publicDir)) {
    console.error('Public directory not found:', publicDir);
    process.exit(1);
  }

  const allFiles = walk(publicDir);
  const candidates = allFiles.filter((filePath) => SUPPORTED_EXTENSIONS.has(path.extname(filePath).toLowerCase()));

  console.log(`Found ${candidates.length} raster images in public/`);

  let converted = 0;
  let skipped = 0;

  for (const inputPath of candidates) {
    // Skip CRA icons/manifest images by default? We still convert them safely.
    try {
      const result = await convertOne(inputPath);
      if (result.skipped) {
        skipped += 1;
        continue;
      }
      converted += 1;
      console.log('✓', path.relative(projectRoot, result.outputPath));
    } catch (error) {
      console.error('Failed:', path.relative(projectRoot, inputPath));
      console.error(error);
      process.exitCode = 1;
    }
  }

  console.log(`Done. Converted: ${converted}. Skipped: ${skipped}.`);

  if (process.exitCode) process.exit(process.exitCode);
}

main();
