/**
 * Auto-translate using DeepL API (Premium Quality)
 * Free tier: 500,000 characters/month
 * API Key: Loaded from .env file (DEEPL_API_KEY)
 */

const fs = require('fs');
const path = require('path');
const deepl = require('deepl-node');
require('dotenv').config();

// DeepL API Configuration
const DEEPL_API_KEY = process.env.DEEPL_API_KEY;

if (!DEEPL_API_KEY) {
  console.error('❌ Error: DEEPL_API_KEY not found in environment variables');
  console.error('Please create a .env file with: DEEPL_API_KEY=your-key-here');
  process.exit(1);
}

const translator = new deepl.Translator(DEEPL_API_KEY);

// DeepL language code mapping (different from our codes)
const deeplLanguageMap = {
  'ar': 'ar',      // Arabic
  'de': 'de',      // German
  'fr': 'fr',      // French
  'hi': null,      // Hindi - Not supported by DeepL yet, use Google
  'ml': null,      // Malayalam - Not supported by DeepL, use Google
  'pl': 'pl',      // Polish
  'ta': null       // Tamil - Not supported by DeepL, use Google
};

// Google Translate fallback for unsupported languages
let googleTranslateFunction = null;

async function initGoogleTranslate() {
  if (!googleTranslateFunction) {
    const module = await import('@vitalets/google-translate-api');
    // Use the named export 'translate' function
    googleTranslateFunction = module.translate;
  }
  return googleTranslateFunction;
}

async function translateWithGoogle(text, targetLang) {
  try {
    const translate = await initGoogleTranslate();
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error(`   ⚠️  Google fallback failed, keeping English:`, error.message);
    return text;
  }
}

// Main translation function with DeepL
async function translateText(text, targetLang) {
  const deeplLang = deeplLanguageMap[targetLang];
  
  // Use Google Translate for unsupported languages
  if (!deeplLang) {
    console.log(`   ℹ️  Using Google Translate for ${targetLang} (DeepL doesn't support this language)`);
    return await translateWithGoogle(text, targetLang);
  }

  try {
    const result = await translator.translateText(text, null, deeplLang);
    return result.text;
  } catch (error) {
    if (error.message && error.message.includes('quota')) {
      console.error(`   ⚠️  DeepL quota exceeded! Falling back to Google Translate...`);
      return await translateWithGoogle(text, targetLang);
    }
    console.error(`   ❌ DeepL error:`, error.message);
    return text;
  }
}

// Check DeepL usage statistics
async function checkUsage() {
  try {
    const usage = await translator.getUsage();
    const used = usage.character?.count || 0;
    const limit = usage.character?.limit || 500000;
    const percentage = ((used / limit) * 100).toFixed(1);
    
    console.log(`\n📊 DeepL API Usage:`);
    console.log(`   ${used.toLocaleString()} / ${limit.toLocaleString()} characters (${percentage}%)`);
    console.log(`   ${(limit - used).toLocaleString()} characters remaining\n`);
    
    if (used / limit > 0.9) {
      console.log(`   ⚠️  WARNING: Over 90% of quota used!`);
    }
    
    return { used, limit, remaining: limit - used };
  } catch (error) {
    console.error(`   ❌ Could not check usage:`, error.message);
    return null;
  }
}

// Delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function translateFile(sourceFile, targetLang, langName) {
  const langDir = path.join(process.cwd(), 'lang');
  const sourceFilePath = path.join(langDir, sourceFile);
  const targetFileName = sourceFile.replace('_en.json', `_${targetLang}.json`);
  const targetFilePath = path.join(langDir, targetFileName);

  if (!fs.existsSync(sourceFilePath)) {
    console.log(`⚠️  Source file not found: ${sourceFile}`);
    console.log(`   Looking in: ${sourceFilePath}`);
    return;
  }

  const sourceContent = JSON.parse(fs.readFileSync(sourceFilePath, 'utf8'));
  console.log(`\n📝 Translating ${sourceFile} to ${langName} (${targetLang})...`);
  console.log(`   Found ${Object.keys(sourceContent).length} keys to translate`);

  let targetContent = {};
  if (fs.existsSync(targetFilePath)) {
    targetContent = JSON.parse(fs.readFileSync(targetFilePath, 'utf8'));
    console.log(`   Existing file has ${Object.keys(targetContent).length} keys`);
  }

  let translated = 0;
  let skipped = 0;
  let failed = 0;
  let totalChars = 0;

  for (const [key, value] of Object.entries(sourceContent)) {
    // CRITICAL: Skip if already translated and different from English
    if (targetContent[key]) {
      // Check if it's actually translated (not just copied English)
      const existingValue = targetContent[key];
      const isTranslated = existingValue !== value && existingValue.length > 0;
      
      if (isTranslated) {
        console.log(`   ⏭️  Skipping "${key}" - already translated`);
        skipped++;
        continue;
      }
    }

    // Skip empty, numbers, or technical content
    if (!value || typeof value === 'number' || /^\d+$/.test(value)) {
      targetContent[key] = value;
      skipped++;
      continue;
    }

    // Skip verse references and hadith citations (keep in English)
    if (/^(Quran|Sahih (Muslim|Bukhari)|Sunan|Musnad|Jami)/.test(value)) {
      targetContent[key] = value;
      skipped++;
      continue;
    }

    try {
      // Small delay to be respectful of API
      await delay(100);
      
      const translated_text = await translateText(value, targetLang);
      targetContent[key] = translated_text;
      totalChars += value.length;
      translated++;
      
      // Progress indicator every 10 translations
      if (translated % 10 === 0) {
        process.stdout.write('.');
      }
    } catch (error) {
      console.error(`\n   ❌ Failed to translate key "${key}":`, error.message);
      targetContent[key] = value;
      failed++;
    }
  }

  // Save translated file
  fs.writeFileSync(targetFilePath, JSON.stringify(targetContent, null, 2), 'utf8');
  
  console.log(`\n   ✅ Complete: ${translated} translated, ${skipped} skipped, ${failed} failed`);
  console.log(`   📊 Characters used: ${totalChars.toLocaleString()}`);
  console.log(`   📄 Saved: ${targetFileName}`);
}

async function main() {
  const args = process.argv.slice(2);
  
  // Show usage statistics if requested
  if (args[0] === 'usage' || args[0] === '--usage') {
    await checkUsage();
    process.exit(0);
  }
  
  if (args.length === 0) {
    console.log(`
🌍 DeepL Auto-Translation Tool (Premium Quality)
================================================

DeepL provides superior translation quality compared to Google Translate!

Usage:
  node scripts/translate-deepl.js <file> [language]
  node scripts/translate-deepl.js usage              # Check API usage

Examples:
  node scripts/translate-deepl.js antisemitism_en.json          # All languages
  node scripts/translate-deepl.js antisemitism_en.json de       # German only
  node scripts/translate-deepl.js jihad_en.json ar              # Arabic only

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

Supported by DeepL: ar, de, fr, hi, pl
Fallback to Google: ml, ta (not supported by DeepL)

Free Tier Limit: 500,000 characters/month
`);
    process.exit(0);
  }

  const sourceFile = args[0];
  const specificLang = args[1];

  // Check usage before starting
  await checkUsage();

  console.log('🚀 Starting DeepL auto-translation...');
  console.log(`📖 Source file: ${sourceFile}`);

  if (specificLang) {
    const languages = {
      'ar': 'Arabic',
      'de': 'German',
      'fr': 'French',
      'hi': 'Hindi',
      'ml': 'Malayalam',
      'pl': 'Polish',
      'ta': 'Tamil'
    };
    
    if (!languages[specificLang]) {
      console.error(`❌ Invalid language code: ${specificLang}`);
      console.log(`Available: ${Object.keys(languages).join(', ')}`);
      process.exit(1);
    }
    
    await translateFile(sourceFile, specificLang, languages[specificLang]);
  } else {
    // Translate to all languages
    const languages = {
      'ar': 'Arabic',
      'de': 'German',
      'fr': 'French',
      'hi': 'Hindi',
      'ml': 'Malayalam',
      'pl': 'Polish',
      'ta': 'Tamil'
    };
    
    for (const [langCode, langName] of Object.entries(languages)) {
      await translateFile(sourceFile, langCode, langName);
      await delay(500); // Pause between languages
    }
  }

  // Show final usage
  console.log('\n' + '='.repeat(60));
  await checkUsage();
  console.log('✅ All translations complete!');
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
