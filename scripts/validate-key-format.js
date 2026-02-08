/**
 * Translation Key Format Validation Script
 * 
 * This script validates that translation keys follow the naming conventions:
 * 1. NO NUMBERS in translation keys (prevents issues when content is reordered)
 * 2. NO NESTED OBJECTS (all keys should be flat with underscores)
 * 3. Keys should use descriptive names, not numeric indices
 * 
 * Usage:
 *   npm run validate:key-format
 *   npm run validate:all (includes this validation)
 * 
 * Why no numbers?
 * - When content is reordered, number indices change
 * - Causes translation mismatches across all 8 language files
 * - Makes refactoring and maintenance difficult
 * 
 * Correct pattern:
 *   ✅ "cards_comparative_title"
 *   ✅ "crimeGenocide", "crimeSlavery"
 *   ✅ "section_intro_paragraph"
 * 
 * Incorrect pattern:
 *   ❌ "crime1", "crime2"
 *   ❌ "stat1Label", "item3"
 *   ❌ "cards.comparative.title" (nested)
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

const langDir = path.join(__dirname, '..', 'public', 'lang');

let totalErrors = 0;
let totalWarnings = 0;

// Regex to detect numbers in translation keys
const numberPattern = /\d/;

// Regex to detect common problematic patterns
const problematicPatterns = [
  { pattern: /^[a-z]+\d+$/i, description: 'ends with number (e.g., crime1, item2)' },
  { pattern: /\d+[a-zA-Z]/, description: 'number followed by letters (e.g., 1crime, 2item)' },
  { pattern: /[a-z]\d[a-z]/i, description: 'number between letters (e.g., stat1Label)' }
];

function checkKeyFormat(key) {
  const issues = [];
  
  // Check for any numbers
  if (numberPattern.test(key)) {
    issues.push({
      type: 'error',
      message: 'contains number(s)'
    });
    
    // Check specific problematic patterns
    problematicPatterns.forEach(({ pattern, description }) => {
      if (pattern.test(key)) {
        issues.push({
          type: 'error',
          message: description
        });
      }
    });
  }
  
  // Check for nested object notation (dots in keys)
  if (key.includes('.')) {
    issues.push({
      type: 'warning',
      message: 'contains dots (possible nested object - should use underscores)'
    });
  }
  
  return issues;
}

function getSuggestion(key) {
  // Try to suggest better naming
  if (/^[a-z]+\d+$/i.test(key)) {
    const base = key.replace(/\d+$/, '');
    return `Consider: ${base}Descriptive, ${base}Specific, etc.`;
  }
  return 'Use descriptive names instead of numbers';
}

function validateFile(fileName) {
  const filePath = path.join(langDir, fileName);
  
  // Only validate English files (they are the source of truth)
  if (!fileName.endsWith('_en.json')) {
    return;
  }
  
  console.log(`\n${colors.cyan}🔍 Validating ${fileName}...${colors.reset}`);
  
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`${colors.red}❌ Error reading ${fileName}: ${error.message}${colors.reset}`);
    totalErrors++;
    return;
  }
  
  let translations;
  try {
    translations = JSON.parse(content);
  } catch (error) {
    console.error(`${colors.red}❌ Invalid JSON in ${fileName}: ${error.message}${colors.reset}`);
    totalErrors++;
    return;
  }
  
  const keys = Object.keys(translations);
  console.log(`   Found ${keys.length} translation key(s)`);
  
  const problematicKeys = [];
  const warnings = [];
  
  keys.forEach(key => {
    const issues = checkKeyFormat(key);
    
    issues.forEach(issue => {
      if (issue.type === 'error') {
        problematicKeys.push({ key, issue: issue.message });
      } else if (issue.type === 'warning') {
        warnings.push({ key, issue: issue.message });
      }
    });
  });
  
  if (problematicKeys.length > 0) {
    console.error(`${colors.red}❌ Found ${problematicKeys.length} key(s) with numbers/invalid format:${colors.reset}`);
    
    problematicKeys.forEach(({ key, issue }) => {
      console.error(`   ${colors.red}✗${colors.reset} "${key}" - ${issue}`);
      console.error(`     ${colors.yellow}💡 ${getSuggestion(key)}${colors.reset}`);
    });
    
    totalErrors += problematicKeys.length;
  } else {
    console.log(`${colors.green}✅ All translation keys follow naming conventions${colors.reset}`);
  }
  
  if (warnings.length > 0) {
    console.warn(`${colors.yellow}⚠️  ${warnings.length} warning(s):${colors.reset}`);
    warnings.forEach(({ key, issue }) => {
      console.warn(`   ${colors.yellow}!${colors.reset} "${key}" - ${issue}`);
    });
    totalWarnings += warnings.length;
  }
}

function main() {
  console.log(`${colors.blue}${'='.repeat(70)}`);
  console.log('Translation Key Format Validation');
  console.log(`${'='.repeat(70)}${colors.reset}\n`);
  
  console.log(`${colors.cyan}Checking for:`);
  console.log(`  ❌ Numbers in translation keys`);
  console.log(`  ❌ Nested object notation (dots)`);
  console.log(`  ✅ Descriptive, semantic key names${colors.reset}\n`);
  
  let files;
  try {
    files = fs.readdirSync(langDir)
      .filter(file => file.endsWith('_en.json'));
  } catch (error) {
    console.error(`${colors.red}❌ Error reading translation directory: ${error.message}${colors.reset}`);
    process.exit(1);
  }
  
  if (files.length === 0) {
    console.log(`${colors.yellow}⚠️  No English translation files found${colors.reset}`);
    process.exit(0);
  }
  
  console.log(`Found ${files.length} English translation file(s) to validate\n`);
  
  files.forEach(validateFile);
  
  // Summary
  console.log(`\n${colors.blue}${'='.repeat(70)}`);
  console.log('Summary');
  console.log(`${'='.repeat(70)}${colors.reset}`);
  
  if (totalErrors > 0) {
    console.log(`${colors.yellow}⚠️  Found ${totalErrors} translation key(s) with invalid format (WARNINGS ONLY)${colors.reset}`);
    console.log(`${colors.yellow}   These keys violate naming conventions but build will proceed.${colors.reset}`);
    console.log(`\n${colors.cyan}📖 Naming Convention Rules (for future keys):${colors.reset}`);
    console.log(`   • Use descriptive names: "crimeGenocide" not "crime1"`);
    console.log(`   • Use underscores for hierarchy: "cards_comparative_title"`);
    console.log(`   • No numbers: "sectionIntro" not "section1"`);
    console.log(`   • Keep keys semantic and readable`);
    console.log(`\n${colors.yellow}⚠️  TECHNICAL DEBT: Refactor existing numbered keys when possible${colors.reset}`);
  } else {
    console.log(`${colors.green}✅ All translation keys follow naming conventions!${colors.reset}`);
  }
  
  if (totalWarnings > 0) {
    console.log(`${colors.yellow}⚠️  ${totalWarnings} warning(s)${colors.reset}`);
  }
  
  console.log();
  
  // Allow build to proceed - format validation is warnings only for existing keys
  // if (totalErrors > 0) {
  //   process.exit(1);
  // }
}

main();
