const fs = require('fs');
const path = require('path');

// Configuration
const PAGES_DIR = path.join(__dirname, '../src/pages');

// Pages that should use translations
const TRANSLATABLE_PAGES = [
  'Home.jsx',
  'ComparativeResearch.jsx',
  'ScientificErrors.jsx',
  'ExpansionHistory.jsx',
  'AntisemitismChristianity.jsx',
  'RealWorldHarm.jsx',
  'MigrationImpact.jsx',
  'ExMuslimResources.jsx',
  'MuhammadWomen.jsx',
  'JihadStudy.jsx',
  'Solution.jsx'
];

// Check if component uses translation prop
function checkTranslationUsage(filePath, fileName) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  const issues = [];
  
  // Check if component receives translations prop
  const hasTranslationsProp = /translations:\s*t/.test(content) || /\{translations/.test(content);
  
  if (!hasTranslationsProp) {
    issues.push({
      type: 'CRITICAL',
      message: 'Component does not receive translations prop'
    });
  }
  
  // Check if component actually USES translations
  const usesTranslations = /\bt\.[a-zA-Z]/.test(content) || /translations\.[a-zA-Z]/.test(content);
  
  if (hasTranslationsProp && !usesTranslations) {
    issues.push({
      type: 'CRITICAL',
      message: 'Component receives translations prop but NEVER uses it (all text is hardcoded)'
    });
  }
  
  // Check for hardcoded text in JSX (excluding JSX tags, props, and short words)
  const jsxMatches = content.match(/>([^<>{}]+)</g);
  if (jsxMatches) {
    const hardcodedText = jsxMatches
      .map(m => m.replace(/^>|<$/g, '').trim())
      .filter(text => {
        // Filter out: empty, numbers, single chars, HTML entities, symbols
        return text.length > 5 && 
               !/^[\d\s.,;:!?()[\]{}\-–—'"]+$/.test(text) &&
               !/^&[a-z]+;$/.test(text) &&
               !/^[←→↑↓✓✗©®™]+$/.test(text);
      });
    
    if (hardcodedText.length > 3) {
      // Sample first 3 hardcoded texts
      issues.push({
        type: 'WARNING',
        message: `Found ${hardcodedText.length} instances of hardcoded English text`,
        samples: hardcodedText.slice(0, 3)
      });
    }
  }
  
  return { fileName, issues, hasTranslationsProp, usesTranslations };
}

// Main validation
function validateComponentTranslations() {
  let hasErrors = false;
  const results = [];
  
  console.log('🔍 Validating Translation Usage in React Components...\n');
  console.log('=' .repeat(80));
  
  TRANSLATABLE_PAGES.forEach(fileName => {
    const filePath = path.join(PAGES_DIR, fileName);
    
    if (!fs.existsSync(filePath)) {
      console.log(`\n📄 ${fileName}`);
      console.log(`   ⚠️  File not found`);
      return;
    }
    
    console.log(`\n📄 ${fileName}`);
    
    const result = checkTranslationUsage(filePath, fileName);
    
    if (result.issues.length === 0) {
      console.log(`   ✅ PASSED: Component properly uses translations`);
    } else {
      result.issues.forEach(issue => {
        if (issue.type === 'CRITICAL') {
          console.log(`   ❌ ${issue.type}: ${issue.message}`);
          hasErrors = true;
        } else {
          console.log(`   ⚠️  ${issue.type}: ${issue.message}`);
          if (issue.samples) {
            console.log(`      Examples:`);
            issue.samples.forEach((sample, idx) => {
              console.log(`      ${idx + 1}. "${sample.substring(0, 80)}${sample.length > 80 ? '...' : ''}"`);
            });
          }
        }
      });
    }
    
    results.push(result);
  });
  
  // Summary
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 COMPONENT TRANSLATION USAGE SUMMARY');
  console.log('='.repeat(80));
  
  const criticalIssues = results.filter(r => 
    r.issues.some(i => i.type === 'CRITICAL')
  );
  
  const warningIssues = results.filter(r => 
    r.issues.some(i => i.type === 'WARNING') && 
    !r.issues.some(i => i.type === 'CRITICAL')
  );
  
  if (criticalIssues.length > 0) {
    console.log(`\n❌ CRITICAL ISSUES (${criticalIssues.length} files):`);
    criticalIssues.forEach(r => {
      console.log(`   - ${r.fileName}: Component does NOT use translations properly`);
    });
  }
  
  if (warningIssues.length > 0) {
    console.log(`\n⚠️  WARNINGS (${warningIssues.length} files):`);
    warningIssues.forEach(r => {
      console.log(`   - ${r.fileName}: Has hardcoded text that should use translations`);
    });
  }
  
  const passedCount = results.length - criticalIssues.length - warningIssues.length;
  console.log(`\n✅ PASSED: ${passedCount}/${results.length} components`);
  
  console.log('\n' + '='.repeat(80));
  
  if (hasErrors) {
    console.log('\n❌ COMPONENT TRANSLATION VALIDATION FAILED');
    console.log('\nCritical Issue Detected:');
    console.log('  Some page components receive translation props but DO NOT use them.');
    console.log('  This means pages show English text even when Malayalam/Hindi translations exist.\n');
    console.log('Solution:');
    console.log('  Replace hardcoded English text with translation keys like {t.pageTitle}\n');
    console.log('Example:');
    console.log('  ❌ <h1>Comparative Research</h1>');
    console.log('  ✅ <h1>{t.pageTitle}</h1>\n');
    console.log('Build aborted to prevent deploying non-translated pages.');
    console.log('='.repeat(80));
    process.exit(1);
  } else if (warningIssues.length > 0) {
    console.log('\n⚠️  Warning: Some components have hardcoded text');
    console.log('Consider replacing with translation keys for full multilingual support.');
    process.exit(0);
  } else {
    console.log('\n✅ All components properly use translation system!');
    process.exit(0);
  }
}

// Run validation
validateComponentTranslations();
