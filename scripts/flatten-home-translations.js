const fs = require('fs');
const path = require('path');

const languages = ['ar', 'de', 'fr', 'hi', 'ml', 'pl', 'ta'];
const langDir = path.join(__dirname, '..', 'public', 'lang');

function flattenTranslations(obj, prefix = '') {
  const flattened = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}_${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Recursively flatten nested objects
      Object.assign(flattened, flattenTranslations(value, newKey));
    } else {
      flattened[newKey] = value;
    }
  }
  
  return flattened;
}

console.log('🔄 Flattening home translation files...\n');

languages.forEach(lang => {
  const filePath = path.join(langDir, `home_${lang}.json`);
  
  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    const translations = JSON.parse(content);
    
    // Flatten the structure
    const flattened = flattenTranslations(translations);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(flattened, null, 2), 'utf8');
    
    console.log(`✅ Flattened home_${lang}.json`);
  } catch (error) {
    console.error(`❌ Error processing home_${lang}.json:`, error.message);
  }
});

console.log('\n✨ All home translation files have been flattened!');
