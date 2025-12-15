const fs = require('fs');
const path = require('path');

// Configuration
const LANG_DIR = path.join(__dirname, '../lang');

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

// Generate a summary report
function generateReport() {
  console.log('📋 Translation Status Report\n');
  console.log('=' .repeat(80));

  const files = fs.readdirSync(LANG_DIR).filter(f => f.endsWith('.json'));
  
  const issues = {
    invalidJSON: [],
    incomplete: []
  };

  const pageGroups = {};
  
  // Group files by page type
  files.forEach(file => {
    const parts = file.replace('.json', '').split('_');
    let pageType, lang;
    
    if (parts.length === 1) {
      pageType = 'home';
      lang = parts[0];
    } else {
      lang = parts[parts.length - 1];
      pageType = parts.slice(0, -1).join('_');
    }
    
    if (!pageGroups[pageType]) {
      pageGroups[pageType] = {};
    }
    
    pageGroups[pageType][lang] = file;
  });

  // Check each page type
  Object.entries(pageGroups).forEach(([pageType, langs]) => {
    const translations = {};
    
    // Load all translations
    Object.entries(langs).forEach(([lang, file]) => {
      const filePath = path.join(LANG_DIR, file);
      const data = loadJSON(filePath);
      
      if (!data) {
        issues.invalidJSON.push(file);
      } else {
        translations[lang] = {
          file,
          keys: getAllKeys(data),
          keyCount: getAllKeys(data).length
        };
      }
    });

    // Find reference (English)
    const refLang = translations['en'];
    if (!refLang) return;

    const refKeys = new Set(refLang.keys);
    
    console.log(`\n📄 ${pageType.toUpperCase()}`);
    console.log(`   Reference (en): ${refKeys.size} keys`);
    console.log('   ' + '-'.repeat(75));
    
    Object.entries(translations).forEach(([lang, trans]) => {
      if (lang === 'en') return;
      
      const transKeys = new Set(trans.keys);
      const missing = [...refKeys].filter(key => !transKeys.has(key));
      const completeness = ((transKeys.size / refKeys.size) * 100).toFixed(1);
      
      const status = missing.length === 0 ? '✅' : '❌';
      console.log(`   ${status} ${trans.file.padEnd(30)} ${trans.keyCount} keys (${completeness}% complete)`);
      
      if (missing.length > 0) {
        issues.incomplete.push({
          file: trans.file,
          missing: missing.length,
          total: refKeys.size
        });
      }
    });
  });

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY');
  console.log('='.repeat(80));
  
  if (issues.invalidJSON.length > 0) {
    console.log(`\n❌ Invalid JSON Files (${issues.invalidJSON.length}):`);
    issues.invalidJSON.forEach(file => console.log(`   - ${file}`));
  }
  
  if (issues.incomplete.length > 0) {
    console.log(`\n⚠️  Incomplete Translations (${issues.incomplete.length}):`);
    issues.incomplete.forEach(item => {
      const percent = ((item.total - item.missing) / item.total * 100).toFixed(1);
      console.log(`   - ${item.file}: Missing ${item.missing}/${item.total} keys (${percent}% complete)`);
    });
  }
  
  if (issues.invalidJSON.length === 0 && issues.incomplete.length === 0) {
    console.log('\n✅ All translations are complete!');
  } else {
    console.log(`\n❌ Total issues: ${issues.invalidJSON.length + issues.incomplete.length}`);
  }
  
  console.log('\n' + '='.repeat(80));
}

generateReport();
