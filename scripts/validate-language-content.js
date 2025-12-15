const fs = require('fs');
const path = require('path');

// Configuration
const LANG_DIR = path.join(__dirname, '../lang');

// Language-specific character ranges for validation
const LANGUAGE_PATTERNS = {
  ml: {
    name: 'Malayalam',
    // Malayalam Unicode range: U+0D00 to U+0D7F
    pattern: /[\u0D00-\u0D7F]/,
    // Should have significant Malayalam content
    minPercentage: 60,
    // Common English words that are acceptable
    allowedEnglishWords: ['Quran', 'Islam', 'Muslim', 'Muhammad', 'Hadith', 'Allah', 'Sahih', 'Bukhari', 
                          'ISBN', 'URL', 'HTTP', 'HTTPS', 'PDF', 'Dr', 'Prof', 'CE', 'BCE', 
                          'Tafsir', 'Surah', 'Ayah', 'Jihad', 'Sharia', 'Quranic', 'Islamic']
  },
  hi: {
    name: 'Hindi',
    // Hindi/Devanagari Unicode range: U+0900 to U+097F
    pattern: /[\u0900-\u097F]/,
    minPercentage: 60,
    allowedEnglishWords: ['Quran', 'Islam', 'Muslim', 'Muhammad', 'Hadith', 'Allah', 'Sahih', 'Bukhari',
                          'ISBN', 'URL', 'HTTP', 'HTTPS', 'PDF', 'Dr', 'Prof', 'CE', 'BCE',
                          'Tafsir', 'Surah', 'Ayah', 'Jihad', 'Sharia', 'Quranic', 'Islamic']
  },
  ta: {
    name: 'Tamil',
    // Tamil Unicode range: U+0B80 to U+0BFF
    pattern: /[\u0B80-\u0BFF]/,
    minPercentage: 60,
    allowedEnglishWords: ['Quran', 'Islam', 'Muslim', 'Muhammad', 'Hadith', 'Allah', 'Sahih', 'Bukhari',
                          'ISBN', 'URL', 'HTTP', 'HTTPS', 'PDF', 'Dr', 'Prof', 'CE', 'BCE',
                          'Tafsir', 'Surah', 'Ayah', 'Jihad', 'Sharia', 'Quranic', 'Islamic']
  },
  ar: {
    name: 'Arabic',
    // Arabic Unicode range: U+0600 to U+06FF
    pattern: /[\u0600-\u06FF]/,
    minPercentage: 60,
    allowedEnglishWords: ['Quran', 'Islam', 'Muslim', 'Muhammad', 'Hadith', 'Allah', 'Sahih', 'Bukhari',
                          'ISBN', 'URL', 'HTTP', 'HTTPS', 'PDF', 'Dr', 'Prof', 'CE', 'BCE',
                          'Tafsir', 'Surah', 'Ayah', 'Jihad', 'Sharia', 'Quranic', 'Islamic']
  },
  // European languages can have English technical terms
  de: { name: 'German', pattern: /[äöüßÄÖÜ]/, minPercentage: 30, allowedEnglishWords: [] },
  fr: { name: 'French', pattern: /[àâäéèêëïîôùûüÿæœçÀÂÄÉÈÊËÏÎÔÙÛÜŸÆŒÇ]/, minPercentage: 30, allowedEnglishWords: [] },
  pl: { name: 'Polish', pattern: /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/, minPercentage: 30, allowedEnglishWords: [] },
  en: { name: 'English', pattern: /[a-zA-Z]/, minPercentage: 90, allowedEnglishWords: [] }
};

// Extract all text values from JSON
function extractAllText(obj, texts = []) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      texts.push(value);
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      extractAllText(value, texts);
    }
  }
  return texts;
}

// Check if text contains significant content in expected language
function validateLanguageContent(text, langCode) {
  const config = LANGUAGE_PATTERNS[langCode];
  if (!config) return { valid: true, reason: 'Language not configured for validation' };

  // Remove allowed English words
  let cleanText = text;
  config.allowedEnglishWords.forEach(word => {
    const regex = new RegExp(word, 'gi');
    cleanText = cleanText.replace(regex, '');
  });

  // Remove emojis (Unicode ranges for emojis)
  cleanText = cleanText.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');
  
  // Remove numbers, punctuation, and common symbols
  cleanText = cleanText.replace(/[0-9\s\.\,\;\:\!\?\-\—\–\'\"\(\)\[\]\{\}\/\\\|\@\#\$\%\^\&\*\+\=\<\>\~\`←→↑↓]/g, '');

  // Remove all ASCII characters (a-z, A-Z) for non-English languages
  if (langCode !== 'en') {
    cleanText = cleanText.replace(/[a-zA-Z]/g, '');
  }

  if (cleanText.length === 0) {
    // Only had numbers/punctuation/emojis
    return { valid: true, reason: 'Only contains numbers/punctuation/emojis' };
  }

  // Count characters in target language
  const matches = cleanText.match(config.pattern);
  const targetLangChars = matches ? matches.length : 0;
  const totalChars = cleanText.length;
  const percentage = totalChars > 0 ? (targetLangChars / totalChars) * 100 : 0;

  if (percentage < config.minPercentage) {
    return {
      valid: false,
      reason: `Only ${percentage.toFixed(1)}% ${config.name} characters (minimum: ${config.minPercentage}%). Content appears to be in wrong language.`,
      sample: text.substring(0, 100) + (text.length > 100 ? '...' : '')
    };
  }

  return { valid: true, percentage: percentage.toFixed(1) };
}

// Load JSON file safely
function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Check for UTF-8 BOM
    if (content.charCodeAt(0) === 0xFEFF) {
      console.log(`   ⚠️  UTF-8 BOM detected in ${path.basename(filePath)} - this may cause issues`);
      return { error: 'UTF-8 BOM detected', content: null };
    }
    return { content: JSON.parse(content), error: null };
  } catch (error) {
    return { error: error.message, content: null };
  }
}

// Extract language code from filename
function getLangCode(fileName) {
  const parts = fileName.replace('.json', '').split('_');
  return parts[parts.length - 1];
}

// Main validation function
function validateAllLanguageFiles() {
  let hasErrors = false;
  const errors = [];
  const warnings = [];

  console.log('🔍 Validating Language-Specific Content...\n');
  console.log('=' .repeat(80));

  const files = fs.readdirSync(LANG_DIR)
    .filter(f => f.endsWith('.json') && !f.includes('_test'))
    .sort();

  files.forEach(fileName => {
    const filePath = path.join(LANG_DIR, fileName);
    const langCode = getLangCode(fileName);
    
    // Skip if language not configured
    if (!LANGUAGE_PATTERNS[langCode]) {
      return;
    }

    const langName = LANGUAGE_PATTERNS[langCode].name;
    console.log(`\n📄 ${fileName} (${langName})`);

    // Load and parse JSON
    const { content, error } = loadJSON(filePath);
    
    if (error) {
      console.log(`   ❌ FAILED: ${error}`);
      errors.push({ file: fileName, issue: 'INVALID_JSON', details: error });
      hasErrors = true;
      return;
    }

    // Extract all text values
    const texts = extractAllText(content);
    const totalTexts = texts.length;
    
    if (totalTexts === 0) {
      console.log(`   ⚠️  WARNING: No text content found`);
      warnings.push({ file: fileName, issue: 'NO_CONTENT' });
      return;
    }

    // Validate each text entry
    const issues = [];
    texts.forEach((text, index) => {
      const validation = validateLanguageContent(text, langCode);
      if (!validation.valid) {
        issues.push({
          index,
          text: validation.sample || text.substring(0, 100),
          reason: validation.reason
        });
      }
    });

    if (issues.length > 0) {
      const errorPercentage = ((issues.length / totalTexts) * 100).toFixed(1);
      console.log(`   ❌ FAILED: ${issues.length}/${totalTexts} entries (${errorPercentage}%) contain wrong language content`);
      
      // Show first 3 examples
      console.log(`\n   Examples of problematic content:`);
      issues.slice(0, 3).forEach((issue, idx) => {
        console.log(`\n   ${idx + 1}. Entry #${issue.index + 1}:`);
        console.log(`      Text: "${issue.text}"`);
        console.log(`      Issue: ${issue.reason}`);
      });

      if (issues.length > 3) {
        console.log(`\n   ... and ${issues.length - 3} more issue(s)`);
      }

      errors.push({
        file: fileName,
        issue: 'WRONG_LANGUAGE',
        count: issues.length,
        total: totalTexts,
        examples: issues.slice(0, 3)
      });
      hasErrors = true;
    } else {
      console.log(`   ✅ PASSED: All ${totalTexts} entries contain valid ${langName} content`);
    }
  });

  // Summary
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 LANGUAGE CONTENT VALIDATION SUMMARY');
  console.log('='.repeat(80));

  if (errors.length > 0) {
    console.log(`\n❌ ERRORS (${errors.length}):`);
    errors.forEach(err => {
      if (err.issue === 'INVALID_JSON') {
        console.log(`   - ${err.file}: ${err.details}`);
      } else if (err.issue === 'WRONG_LANGUAGE') {
        console.log(`   - ${err.file}: ${err.count}/${err.total} entries have wrong language content`);
      }
    });
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${warnings.length}):`);
    warnings.forEach(warn => {
      console.log(`   - ${warn.file}: ${warn.issue}`);
    });
  }

  console.log('\n' + '='.repeat(80));

  if (hasErrors) {
    console.log('\n❌ LANGUAGE CONTENT VALIDATION FAILED');
    console.log('\nPlease ensure:');
    console.log('  1. Malayalam files contain Malayalam text (not English)');
    console.log('  2. Hindi files contain Hindi/Devanagari text');
    console.log('  3. Arabic files contain Arabic script');
    console.log('  4. All JSON files are valid (no BOM, proper syntax)');
    console.log('\nBuild aborted to prevent deploying incorrect translations.');
    console.log('='.repeat(80));
    process.exit(1);
  } else {
    console.log('\n✅ All language content validation passed!');
    console.log('='.repeat(80));
    process.exit(0);
  }
}

// Run validation
validateAllLanguageFiles();
