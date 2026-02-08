/**
 * Translation Key Validation Script
 * 
 * This script validates that all translation keys used in JSX files exist in the
 * corresponding English translation files. This prevents runtime errors caused by
 * missing translation keys.
 * 
 * Usage:
 *   npm run validate:keys
 *   npm run validate:all (includes this + other validations)
 * 
 * How it works:
 * 1. Scans all .jsx files in src/pages/
 * 2. Extracts translation keys using regex patterns (translations.key or t.key)
 * 3. Maps JSX files to their corresponding *_en.json translation files
 * 4. Checks if all used keys exist in the translation file
 * 5. Reports missing keys and exits with error code 1 if any are found
 * 
 * Integration:
 * - Automatically runs during `npm run build` (via validate:keys)
 * - Prevents deployment of code with missing translation keys
 * - Add new page mappings to getTranslationFileName() function
 */

const fs = require('fs');
const path = require('path');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const langDir = path.join(__dirname, '..', 'public', 'lang');

let totalErrors = 0;
let totalWarnings = 0;
let autoCleanup = process.argv.includes('--cleanup') || process.env.BUILD_CLEANUP === 'true';

// Regex patterns to find translation key usage in JSX
const patterns = [
  // Pattern: translations.key or translations.key_with_underscore
  /translations\.([a-zA-Z_][a-zA-Z0-9_]*)/g,
  // Pattern: t.key or t.key_with_underscore (for abbreviated translations)
  /\bt\.([a-zA-Z_][a-zA-Z0-9_]*)/g
];

function findTranslationKeys(content) {
  const keys = new Set();
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      keys.add(match[1]);
    }
  });
  
  return Array.from(keys).sort();
}

function getTranslationFileName(jsxFileName) {
  // Map JSX file names to translation file names
  const mapping = {
    'Home.jsx': 'home_en.json',
    'ComparativeResearch.jsx': 'comparative_en.json',
    'ScientificErrors.jsx': 'scientific_en.json',
    'ExpansionHistory.jsx': 'expansion_en.json',
    'AntisemitismChristianity.jsx': 'antisemitism_en.json',
    'RealWorldHarm.jsx': 'harm_en.json',
    'MigrationImpact.jsx': 'migration_en.json',
    'ExMuslimResources.jsx': 'exmuslim_en.json',
    'MuhammadWomen.jsx': 'muhammad_women_en.json',
    'JihadStudy.jsx': 'jihad_en.json',
    'TerroristOrganizations.jsx': 'terrorist_en.json',
    'RecentAttacks.jsx': 'recent_attacks_en.json',
    'Solution.jsx': 'solution_en.json'
  };
  
  return mapping[jsxFileName] || null;
}

function loadTranslationFile(fileName) {
  const filePath = path.join(langDir, fileName);
  
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`${colors.red}❌ Error loading ${fileName}: ${error.message}${colors.reset}`);
    return null;
  }
}

function cleanupUnusedKeys(translationFile, unusedKeys) {
  const filePath = path.join(langDir, translationFile);
  const translations = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Remove unused keys
  unusedKeys.forEach(key => {
    delete translations[key];
  });
  
  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(translations, null, 2) + '\n', 'utf8');
  console.log(`${colors.green}   ✓ Removed ${unusedKeys.length} unused key(s) from ${translationFile}${colors.reset}`);
}

function validateFile(jsxFile) {
  const jsxPath = path.join(pagesDir, jsxFile);
  const translationFile = getTranslationFileName(jsxFile);
  
  if (!translationFile) {
    console.error(`\n${colors.red}❌ CRITICAL: ${jsxFile} has no translation mapping!${colors.reset}`);
    console.error(`   This page will not be translatable. Add mapping to getTranslationFileName().`);
    totalErrors++;
    return;
  }
  
  console.log(`\n${colors.cyan}🔍 Validating ${jsxFile}...${colors.reset}`);
  
  // Read JSX file
  let jsxContent;
  try {
    jsxContent = fs.readFileSync(jsxPath, 'utf8');
  } catch (error) {
    console.error(`${colors.red}❌ Error reading ${jsxFile}: ${error.message}${colors.reset}`);
    totalErrors++;
    return;
  }
  
  // Find translation keys used in JSX
  const usedKeys = findTranslationKeys(jsxContent);
  
  if (usedKeys.length === 0) {
    console.error(`${colors.red}❌ CRITICAL: ${jsxFile} uses no translation keys!${colors.reset}`);
    console.error(`   Page has hardcoded strings. Refactor to use translations.`);
    totalErrors++;
    return;
  }
  
  console.log(`   Found ${usedKeys.length} translation key(s) used`);
  
  // Load English translation file
  const translations = loadTranslationFile(translationFile);
  
  if (!translations) {
    console.error(`${colors.red}❌ Translation file ${translationFile} not found or invalid${colors.reset}`);
    totalErrors++;
    return;
  }
  
  const availableKeys = Object.keys(translations);
  console.log(`   Translation file has ${availableKeys.length} key(s)`);
  
  // Find missing keys
  const missingKeys = usedKeys.filter(key => !translations.hasOwnProperty(key));
  
  if (missingKeys.length > 0) {
    console.error(`${colors.red}❌ Missing ${missingKeys.length} translation key(s) in ${translationFile}:${colors.reset}`);
    missingKeys.forEach(key => {
      console.error(`   - ${key}`);
    });
    totalErrors += missingKeys.length;
  } else {
    console.log(`${colors.green}✅ All translation keys are available${colors.reset}`);
  }
  
  // Find unused keys - now treated as ERROR
  const unusedKeys = availableKeys.filter(key => !usedKeys.includes(key));
  if (unusedKeys.length > 0) {
    if (autoCleanup) {
      console.log(`${colors.yellow}🧹 Found ${unusedKeys.length} unused key(s) - cleaning up...${colors.reset}`);
      try {
        cleanupUnusedKeys(translationFile, unusedKeys);
      } catch (error) {
        console.error(`${colors.red}❌ Failed to cleanup ${translationFile}: ${error.message}${colors.reset}`);
        totalErrors++;
      }
    } else {
      console.error(`${colors.red}❌ CRITICAL: ${unusedKeys.length} unused translation key(s) in ${translationFile}:${colors.reset}`);
      unusedKeys.forEach(key => console.error(`   - ${key}`));
      console.error(`${colors.yellow}   Run with --cleanup flag to auto-remove unused keys${colors.reset}`);
      totalErrors += unusedKeys.length;
    }
  }
}

function main() {
  console.log(`${colors.blue}${'='.repeat(70)}`);
  console.log('Translation Key Validation');
  console.log(`${'='.repeat(70)}${colors.reset}\n`);
  
  // Get all JSX files in pages directory
  let jsxFiles;
  try {
    jsxFiles = fs.readdirSync(pagesDir)
      .filter(file => file.endsWith('.jsx'));
  } catch (error) {
    console.error(`${colors.red}❌ Error reading pages directory: ${error.message}${colors.reset}`);
    process.exit(1);
  }
  
  if (jsxFiles.length === 0) {
    console.log(`${colors.yellow}⚠️  No JSX files found in ${pagesDir}${colors.reset}`);
    process.exit(0);
  }
  
  console.log(`Found ${jsxFiles.length} JSX file(s) to validate\n`);
  
  // Validate each file
  jsxFiles.forEach(validateFile);
  
  // Summary
  console.log(`\n${colors.blue}${'='.repeat(70)}`);
  console.log('Summary');
  console.log(`${'='.repeat(70)}${colors.reset}`);
  
  if (totalErrors > 0) {
    console.log(`${colors.red}❌ VALIDATION FAILED: ${totalErrors} error(s) found${colors.reset}`);
    console.log(`${colors.red}   Build cannot proceed with translation errors.${colors.reset}`);
    if (!autoCleanup) {
      console.log(`${colors.yellow}   TIP: Run 'npm run validate:keys -- --cleanup' to auto-fix unused keys${colors.reset}`);
    }
  } else {
    console.log(`${colors.green}✅ All translation keys are valid!${colors.reset}`);
    console.log(`${colors.green}   ✓ All pages use translations${colors.reset}`);
    console.log(`${colors.green}   ✓ No missing keys${colors.reset}`);
    console.log(`${colors.green}   ✓ No unused keys${colors.reset}`);
  }
  
  console.log();
  
  // Exit with error code if there are errors (no warnings allowed)
  if (totalErrors > 0) {
    process.exit(1);
  }
}

main();
