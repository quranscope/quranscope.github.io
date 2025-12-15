/**
 * Auto-translate English JSON files to all supported languages
 * Uses @vitalets/google-translate-api (free, no API key needed)
 */

const fs = require('fs');
const path = require('path');

// Free translation function using Google Translate
let translateFunction = null;

async function initTranslate() {
  if (!translateFunction) {
    const module = await import('@vitalets/google-translate-api');
    // Use the named export 'translate' function
    translateFunction = module.translate;
  }
  return translateFunction;
}

async function translateText(text, targetLang) {
  try {
    const translate = await initTranslate();
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error(`Error translating to ${targetLang}:`, error.message);
    return text; // Fallback to original text
  }
}

// Language mappings
const languages = {
  'ar': 'Arabic',
  'de': 'German', 
  'fr': 'French',
  'hi': 'Hindi',
  'ml': 'Malayalam',
  'pl': 'Polish',
  'ta': 'Tamil'
};

// Delay function to avoid rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateFile(sourceFile, targetLang, langName) {
  const langDir = path.join(process.cwd(), 'lang');
  const sourceFilePath = path.join(langDir, sourceFile);
  const targetFileName = sourceFile.replace('_en.json', `_${targetLang}.json`);
  const targetFilePath = path.join(langDir, targetFileName);

  // Read source English file
  if (!fs.existsSync(sourceFilePath)) {
    console.log(`⚠️  Source file not found: ${sourceFile}`);
    console.log(`   Looking in: ${sourceFilePath}`);
    return;
  }

  const sourceContent = JSON.parse(fs.readFileSync(sourceFilePath, 'utf8'));
  console.log(`\n📝 Translating ${sourceFile} to ${langName} (${targetLang})...`);
  console.log(`   Found ${Object.keys(sourceContent).length} keys to translate`);

  // Check if target file exists
  let targetContent = {};
  if (fs.existsSync(targetFilePath)) {
    targetContent = JSON.parse(fs.readFileSync(targetFilePath, 'utf8'));
    console.log(`   Existing file has ${Object.keys(targetContent).length} keys`);
  }

  let translated = 0;
  let skipped = 0;
  let failed = 0;

  // Translate each key
  for (const [key, value] of Object.entries(sourceContent)) {
    // CRITICAL: Skip if already translated and different from English
    if (targetContent[key]) {
      // Check if it's actually translated (not just copied English)
      const existingValue = targetContent[key];
      const isTranslated = existingValue !== value && existingValue.length > 0;
      
      if (isTranslated) {
        skipped++;
        continue;
      }
    }

    // Skip if value is empty or just a number
    if (!value || typeof value === 'number' || /^\d+$/.test(value)) {
      targetContent[key] = value;
      skipped++;
      continue;
    }

    // Skip verse references and technical terms (keep in English)
    if (/^Quran \d+:\d+/.test(value) || /^Sahih (Muslim|Bukhari)/.test(value)) {
      targetContent[key] = value;
      skipped++;
      continue;
    }

    try {
      // Add delay to avoid rate limiting (500ms between requests)
      await delay(500);
      
      targetContent[key] = await translateText(value, targetLang);
      translated++;
      
      // Progress indicator
      if (translated % 10 === 0) {
        process.stdout.write('.');
      }
    } catch (error) {
      console.error(`\n   ❌ Failed to translate key "${key}":`, error.message);
      targetContent[key] = value; // Keep English as fallback
      failed++;
    }
  }

  // Write translated file
  fs.writeFileSync(targetFilePath, JSON.stringify(targetContent, null, 2), 'utf8');
  
  console.log(`\n   ✅ Complete: ${translated} translated, ${skipped} skipped, ${failed} failed`);
  console.log(`   📄 Saved: ${targetFileName}`);
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🌍 Auto-Translation Tool for Quran Scope
=========================================

Usage:
  node scripts/auto-translate.js <file> [language]

Examples:
  node scripts/auto-translate.js antisemitism_en.json          # Translate to all languages
  node scripts/auto-translate.js antisemitism_en.json ml       # Translate to Malayalam only
  node scripts/auto-translate.js jihad_en.json ar              # Translate to Arabic only

Available files:
  - antisemitism_en.json
  - jihad_en.json
  - exmuslim_en.json
  - comparative_en.json
  - scientific_en.json
  - expansion_en.json
  - harm_en.json
  - migration_en.json
  - solution_en.json

Available languages: ${Object.keys(languages).join(', ')}
`);
    process.exit(0);
  }

  const sourceFile = args[0];
  const specificLang = args[1];

  console.log('🚀 Starting auto-translation...');
  console.log(`📖 Source file: ${sourceFile}`);

  if (specificLang) {
    if (!languages[specificLang]) {
      console.error(`❌ Invalid language code: ${specificLang}`);
      console.log(`Available languages: ${Object.keys(languages).join(', ')}`);
      process.exit(1);
    }
    await translateFile(sourceFile, specificLang, languages[specificLang]);
  } else {
    // Translate to all languages
    for (const [langCode, langName] of Object.entries(languages)) {
      await translateFile(sourceFile, langCode, langName);
      await delay(1000); // Extra delay between languages
    }
  }

  console.log('\n✅ All translations complete!');
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
