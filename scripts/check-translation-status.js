/**
 * Check translation status without using any quota
 * Shows which keys are translated vs need translation
 */

const fs = require('fs');
const path = require('path');

const languages = {
  'ar': 'Arabic',
  'de': 'German',
  'fr': 'French',
  'hi': 'Hindi',
  'ml': 'Malayalam',
  'pl': 'Polish',
  'ta': 'Tamil'
};

function checkTranslationStatus(sourceFile) {
  const langDir = path.join(process.cwd(), 'lang');
  const sourceFilePath = path.join(langDir, sourceFile);

  if (!fs.existsSync(sourceFilePath)) {
    console.log(`❌ Source file not found: ${sourceFile}`);
    return;
  }

  const sourceContent = JSON.parse(fs.readFileSync(sourceFilePath, 'utf8'));
  const totalKeys = Object.keys(sourceContent).length;

  console.log(`\n📊 Translation Status for: ${sourceFile}`);
  console.log(`   Total keys in English: ${totalKeys}\n`);

  let totalNeedTranslation = 0;
  let totalAlreadyTranslated = 0;

  for (const [langCode, langName] of Object.entries(languages)) {
    const targetFileName = sourceFile.replace('_en.json', `_${langCode}.json`);
    const targetFilePath = path.join(langDir, targetFileName);

    if (!fs.existsSync(targetFilePath)) {
      console.log(`   ⚠️  ${langName} (${langCode}): NO FILE - needs ${totalKeys} translations`);
      totalNeedTranslation += totalKeys;
      continue;
    }

    const targetContent = JSON.parse(fs.readFileSync(targetFilePath, 'utf8'));
    
    let translated = 0;
    let needTranslation = 0;

    for (const [key, value] of Object.entries(sourceContent)) {
      const targetValue = targetContent[key];
      
      // Check if it's actually translated (not just copied English or missing)
      if (targetValue && targetValue !== value && targetValue.length > 0) {
        translated++;
      } else {
        needTranslation++;
      }
    }

    totalAlreadyTranslated += translated;
    totalNeedTranslation += needTranslation;

    const percentage = ((translated / totalKeys) * 100).toFixed(1);
    const status = translated === totalKeys ? '✅' : needTranslation > 0 ? '⚠️' : '❌';
    
    console.log(`   ${status} ${langName} (${langCode}): ${translated}/${totalKeys} translated (${percentage}%) - ${needTranslation} need translation`);
  }

  console.log(`\n📈 Summary:`);
  console.log(`   Already translated: ${totalAlreadyTranslated} keys`);
  console.log(`   Need translation: ${totalNeedTranslation} keys`);
  console.log(`   Total work: ${totalKeys * Object.keys(languages).length} keys (100%)`);
  console.log(`   Progress: ${((totalAlreadyTranslated / (totalKeys * Object.keys(languages).length)) * 100).toFixed(1)}%`);
  
  // Estimate character count for remaining translations
  let estimatedChars = 0;
  for (const [key, value] of Object.entries(sourceContent)) {
    if (typeof value === 'string' && value.length > 0) {
      estimatedChars += value.length;
    }
  }
  
  const remainingChars = estimatedChars * (totalNeedTranslation / totalKeys);
  console.log(`\n💰 Estimated DeepL characters needed: ${Math.round(remainingChars).toLocaleString()}`);
  
  return {
    totalKeys,
    translated: totalAlreadyTranslated,
    needed: totalNeedTranslation,
    estimatedChars: Math.round(remainingChars)
  };
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🔍 Translation Status Checker (Zero Quota Used!)
=================================================

This tool shows what's already translated vs what needs translation.
NO API calls are made - completely free!

Usage:
  node scripts/check-translation-status.js <file>

Examples:
  node scripts/check-translation-status.js antisemitism_en.json
  node scripts/check-translation-status.js jihad_en.json
  node scripts/check-translation-status.js exmuslim_en.json

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
`);
    return;
  }

  const sourceFile = args[0];
  const result = checkTranslationStatus(sourceFile);
  
  if (result && result.needed > 0) {
    console.log(`\n💡 Recommendation:`);
    console.log(`   Run: npm run translate ${sourceFile}`);
    console.log(`   This will only translate the ${result.needed} missing keys`);
    console.log(`   Already translated keys will be skipped (saves quota!)`);
  } else if (result && result.needed === 0) {
    console.log(`\n✅ All translations complete for ${sourceFile}!`);
  }
}

main();
