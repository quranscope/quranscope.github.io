const fs = require('fs');
const path = require('path');

// Configuration
const LANG_DIR = path.join(__dirname, '../public/lang');
const LANGUAGES = ['en', 'hi', 'de', 'fr', 'ta', 'pl', 'ml', 'ar'];

// Page configuration with their translation files
const PAGE_CONFIGS = [
  { name: 'home', base: 'en.json', pattern: '{lang}.json' },
  { name: 'comparative', base: 'comparative_en.json', pattern: 'comparative_{lang}.json' },
  { name: 'scientific', base: 'scientific_en.json', pattern: 'scientific_{lang}.json' },
  { name: 'expansion', base: 'expansion_en.json', pattern: 'expansion_{lang}.json' },
  { name: 'antisemitism', base: 'antisemitism_en.json', pattern: 'antisemitism_{lang}.json' },
  { name: 'harm', base: 'harm_en.json', pattern: 'harm_{lang}.json' },
  { name: 'migration', base: 'migration_en.json', pattern: 'migration_{lang}.json' },
  { name: 'exmuslim', base: 'exmuslim_en.json', pattern: 'exmuslim_{lang}.json' },
  { name: 'muhammad_women', base: 'muhammad_women_en.json', pattern: 'muhammad_women_{lang}.json' },
  { name: 'jihad', base: 'jihad_en.json', pattern: 'jihad_{lang}.json' },
  { name: 'terrorist', base: 'terrorist_en.json', pattern: 'terrorist_{lang}.json' },
  { name: 'recent_attacks', base: 'recent_attacks_en.json', pattern: 'recent_attacks_{lang}.json' },
  { name: 'solution', base: 'solution_en.json', pattern: 'solution_{lang}.json' }
];

// Deep merge function - keeps existing translations, adds missing keys from English
function deepMerge(target, source) {
  const result = { ...target };
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
        // Recursively merge nested objects
        result[key] = deepMerge(result[key] || {}, source[key]);
      } else if (!result.hasOwnProperty(key)) {
        // Add missing key with English value
        result[key] = source[key];
      }
      // If key exists in target, keep target's value (don't overwrite existing translations)
    }
  }
  
  return result;
}

// Sync translations for a page
function syncPageTranslations(config) {
  console.log(`\n📄 Syncing ${config.name.toUpperCase()} translations...`);
  
  const baseFilePath = path.join(LANG_DIR, config.base);
  
  if (!fs.existsSync(baseFilePath)) {
    console.log(`   ⚠️  Base file not found: ${config.base}`);
    return;
  }
  
  // Load English (reference) translation
  const englishData = JSON.parse(fs.readFileSync(baseFilePath, 'utf8'));
  const englishKeys = Object.keys(englishData);
  console.log(`   ✓ English reference: ${englishKeys.length} keys`);
  
  // Process each language
  LANGUAGES.forEach(lang => {
    if (lang === 'en') return; // Skip English
    
    const targetFileName = config.pattern.replace('{lang}', lang);
    const targetFilePath = path.join(LANG_DIR, targetFileName);
    
    let targetData = {};
    let existingKeys = 0;
    let addedKeys = 0;
    
    // Load existing translation if it exists
    if (fs.existsSync(targetFilePath)) {
      try {
        targetData = JSON.parse(fs.readFileSync(targetFilePath, 'utf8'));
        existingKeys = Object.keys(targetData).length;
      } catch (error) {
        console.log(`   ⚠️  ${targetFileName}: Invalid JSON, recreating...`);
      }
    }
    
    // Merge: keep existing translations, add missing keys from English
    const mergedData = deepMerge(targetData, englishData);
    const finalKeys = Object.keys(mergedData).length;
    addedKeys = finalKeys - existingKeys;
    
    // Write the merged translation file
    fs.writeFileSync(targetFilePath, JSON.stringify(mergedData, null, 2), 'utf8');
    
    if (existingKeys === 0) {
      console.log(`   ✨ ${targetFileName}: Created with ${finalKeys} keys (English defaults)`);
    } else if (addedKeys > 0) {
      console.log(`   ✓ ${targetFileName}: ${existingKeys} existing + ${addedKeys} new = ${finalKeys} total`);
    } else {
      console.log(`   ✓ ${targetFileName}: ${finalKeys} keys (up to date)`);
    }
  });
}

// Main execution
function main() {
  console.log('🚀 Starting Translation Sync...');
  console.log(`📁 Language directory: ${LANG_DIR}`);
  console.log(`🌍 Languages: ${LANGUAGES.join(', ')}\n`);
  
  // Ensure lang directory exists
  if (!fs.existsSync(LANG_DIR)) {
    console.error(`❌ Language directory not found: ${LANG_DIR}`);
    process.exit(1);
  }
  
  // Sync all page translations
  PAGE_CONFIGS.forEach(config => {
    syncPageTranslations(config);
  });
  
  console.log('\n✅ Translation sync complete!');
  console.log('📝 All language files now have complete key sets.');
  console.log('🔤 Missing translations filled with English defaults.\n');
}

main();
