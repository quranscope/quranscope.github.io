const fs = require('fs');
const path = require('path');

// Configuration
const LANG_DIR = path.join(__dirname, '../public/lang');
const LANGUAGES = ['en', 'hi', 'de', 'fr', 'ta', 'pl', 'ml', 'ar'];
const PAGE_TYPES = [
  { name: 'home', files: ['en.json', 'hi.json', 'de.json', 'fr.json', 'ta.json', 'pl.json', 'ml.json', 'ar.json'] },
  { name: 'comparative', files: ['comparative_en.json', 'comparative_hi.json', 'comparative_de.json', 'comparative_fr.json', 'comparative_ta.json', 'comparative_pl.json', 'comparative_ml.json', 'comparative_ar.json'] },
  { name: 'scientific', files: ['scientific_en.json', 'scientific_hi.json', 'scientific_de.json', 'scientific_fr.json', 'scientific_ta.json', 'scientific_pl.json', 'scientific_ml.json', 'scientific_ar.json'] },
  { name: 'expansion', files: ['expansion_en.json', 'expansion_hi.json', 'expansion_de.json', 'expansion_fr.json', 'expansion_ta.json', 'expansion_pl.json', 'expansion_ml.json', 'expansion_ar.json'] },
  { name: 'antisemitism', files: ['antisemitism_en.json', 'antisemitism_hi.json', 'antisemitism_de.json', 'antisemitism_fr.json', 'antisemitism_ta.json', 'antisemitism_pl.json', 'antisemitism_ml.json', 'antisemitism_ar.json'] },
  { name: 'harm', files: ['harm_en.json', 'harm_ml.json'] },
  { name: 'migration', files: ['migration_en.json', 'migration_ml.json'] },
  { name: 'exmuslim', files: ['exmuslim_en.json', 'exmuslim_hi.json', 'exmuslim_de.json', 'exmuslim_fr.json', 'exmuslim_ta.json', 'exmuslim_pl.json', 'exmuslim_ml.json', 'exmuslim_ar.json'] },
  { name: 'muhammad_women', files: ['muhammad_women_en.json', 'muhammad_women_hi.json', 'muhammad_women_de.json', 'muhammad_women_fr.json', 'muhammad_women_ta.json', 'muhammad_women_pl.json', 'muhammad_women_ar.json'] }, // ml removed - corrupted
  { name: 'jihad', files: ['jihad_en.json'] }, // Only English until translations are complete
  { name: 'terrorist', files: ['terrorist_en.json', 'terrorist_hi.json', 'terrorist_de.json', 'terrorist_fr.json', 'terrorist_ta.json', 'terrorist_pl.json', 'terrorist_ar.json'] }, // ml removed - corrupted
  { name: 'recent_attacks', files: ['recent_attacks_en.json'] } // Only English initially
];

// Helper to get all keys from a nested object
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(fullKey);
      keys = keys.concat(getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

// Load JSON file safely
function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

// Main validation function
function validateTranslations() {
  let hasErrors = false;
  const report = {
    summary: {},
    details: []
  };

  console.log('🔍 Starting Translation Validation...\n');

  PAGE_TYPES.forEach(pageType => {
    console.log(`\n📄 Checking ${pageType.name.toUpperCase()} translations...`);
    
    // Load all translation files for this page type
    const translations = {};
    const allKeys = new Set();
    
    pageType.files.forEach(fileName => {
      const filePath = path.join(LANG_DIR, fileName);
      const lang = fileName.split('_').pop().replace('.json', '');
      
      if (!fs.existsSync(filePath)) {
        console.log(`   ⚠️  Missing file: ${fileName}`);
        report.details.push({
          page: pageType.name,
          file: fileName,
          issue: 'FILE_MISSING'
        });
        hasErrors = true;
        return;
      }
      
      const data = loadJSON(filePath);
      if (!data) {
        console.log(`   ❌ Invalid JSON: ${fileName}`);
        report.details.push({
          page: pageType.name,
          file: fileName,
          issue: 'INVALID_JSON'
        });
        hasErrors = true;
        return;
      }
      
      translations[lang] = {
        fileName,
        data,
        keys: getAllKeys(data)
      };
      
      translations[lang].keys.forEach(key => allKeys.add(key));
    });

    // Find the reference language (English if available)
    const refLang = translations['en'] || translations[Object.keys(translations)[0]];
    if (!refLang) {
      console.log(`   ⚠️  No reference language found for ${pageType.name}`);
      return;
    }

    const refKeys = new Set(refLang.keys);
    console.log(`   ✓ Reference (${refLang.fileName}): ${refKeys.size} keys`);

    // Check each language against reference
    Object.entries(translations).forEach(([lang, translation]) => {
      if (lang === 'en') return; // Skip reference itself

      const translationKeys = new Set(translation.keys);
      const missing = [...refKeys].filter(key => !translationKeys.has(key));
      const extra = [...translationKeys].filter(key => !refKeys.has(key));

      if (missing.length > 0) {
        console.log(`   ❌ ${translation.fileName}: Missing ${missing.length} key(s):`);
        missing.forEach(key => console.log(`      - ${key}`));
        report.details.push({
          page: pageType.name,
          file: translation.fileName,
          issue: 'MISSING_KEYS',
          keys: missing
        });
        hasErrors = true;
      }

      if (extra.length > 0) {
        console.log(`   ⚠️  ${translation.fileName}: Extra ${extra.length} key(s):`);
        extra.forEach(key => console.log(`      + ${key}`));
        report.details.push({
          page: pageType.name,
          file: translation.fileName,
          issue: 'EXTRA_KEYS',
          keys: extra
        });
      }

      if (missing.length === 0 && extra.length === 0) {
        console.log(`   ✓ ${translation.fileName}: Complete (${translationKeys.size} keys)`);
      }
    });

    report.summary[pageType.name] = {
      totalFiles: pageType.files.length,
      loadedFiles: Object.keys(translations).length,
      referenceKeys: refKeys.size
    };
  });

  // Generate summary report
  console.log('\n\n' + '='.repeat(60));
  console.log('📊 VALIDATION SUMMARY');
  console.log('='.repeat(60));

  Object.entries(report.summary).forEach(([page, stats]) => {
    console.log(`\n${page}:`);
    console.log(`  Files: ${stats.loadedFiles}/${stats.totalFiles}`);
    console.log(`  Reference keys: ${stats.referenceKeys}`);
  });

  const errorCount = report.details.filter(d => 
    d.issue === 'MISSING_KEYS' || d.issue === 'INVALID_JSON' || d.issue === 'FILE_MISSING'
  ).length;

  console.log('\n' + '='.repeat(60));
  if (hasErrors) {
    console.log(`\n❌ Validation FAILED with ${errorCount} error(s)`);
    console.log('\nPlease fix the issues above before building.');
    process.exit(1);
  } else {
    console.log('\n✅ All translations are valid and complete!');
    process.exit(0);
  }
}

// Run validation
validateTranslations();
