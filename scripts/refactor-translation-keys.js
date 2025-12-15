#!/usr/bin/env node

/**
 * Translation Key Refactoring Script
 * 
 * This script intelligently renames numbered translation keys to semantic names.
 * It processes all language files and updates corresponding JSX files.
 * 
 * Usage: node scripts/refactor-translation-keys.js [--dry-run] [--file=filename]
 */

const fs = require('fs');
const path = require('path');

const LANG_DIR = path.join(__dirname, '../public/lang');
const SRC_DIR = path.join(__dirname, '../src');
const LANGUAGES = ['en', 'ar', 'de', 'fr', 'hi', 'ml', 'pl', 'ta'];

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const fileFilter = args.find(arg => arg.startsWith('--file='))?.split('=')[1];

console.log('🔧 Translation Key Refactoring Tool');
console.log('=====================================\n');

if (isDryRun) {
  console.log('🔍 DRY RUN MODE - No files will be modified\n');
}

/**
 * Intelligent key mapping based on content analysis
 */
const contentBasedMappings = {
  // Terrorist organizations - map based on organization names
  terrorist_en: (key, value, allData) => {
    // Mapping of org numbers to semantic names (from actual data)
    const orgNameMap = {
      '1': 'isis',
      '2': 'alqaeda',
      '3': 'bokoharam',
      '4': 'taliban',
      '5': 'hamas',
      '6': 'hezbollah',
      '7': 'alshabaab',
      '8': 'aqap',
      '9': 'aqim',
      '10': 'pfi',
      '11': 'hts',
      '12': 'ttp',
      '13': 'let'
    };
    
    // Extract org number from keys like "org1Name", "org2Aka", etc.
    const orgMatch = key.match(/^org(\d+)(.+)$/);
    if (orgMatch) {
      const orgNum = orgMatch[1];
      const suffix = orgMatch[2]; // Name, Aka, Status, Location, Desc, Crimes, CrimesTitle
      
      const semanticPrefix = orgNameMap[orgNum];
      if (semanticPrefix) {
        return `${semanticPrefix}${suffix}`;
      }
    }
    
    // Stats - keep descriptive names
    if (key.match(/^stat(\d+)Label$/)) {
      const statNum = parseInt(key.match(/\d+/)[0]);
      const statLabels = ['statActiveGroupsLabel', 'statCountriesAffectedLabel', 'statAnnualDeathsLabel', 'statEconomicDamageLabel'];
      return statLabels[statNum - 1] || key;
    }
    
    // Categories
    if (key.match(/^category(\d+)Title$/)) {
      const catNum = parseInt(key.match(/\d+/)[0]);
      const catNames = ['categoryBannedTitle', 'categoryActiveTitle', 'categoryRegionalTitle'];
      return catNames[catNum - 1] || key;
    }
    
    // Generic intro paragraphs
    if (key.match(/^introPara(\d+)$/)) {
      const paraNum = parseInt(key.match(/\d+/)[0]);
      const paraNames = ['introParaOverview', 'introParaCommonTactics', 'introParaScope'];
      return paraNames[paraNum - 1] || key;
    }
    
    return key; // No mapping found
  },
  
  // Muhammad & Women - map based on section topics
  muhammad_women_en: (key, value, allData) => {
    // Section mappings based on actual content
    const sectionMap = {
      '1': 'Marriages',
      '2': 'SexualRelations', 
      '3': 'Slavery',
      '4': 'ChildMarriage',
      '5': 'ModernImpact',
      '6': 'LegalStatus',
      '7': 'Conclusion'
    };
    
    // Reference mappings (will be generated from content)
    const refMatch = key.match(/^ref(\d+)(.+)$/);
    if (refMatch) {
      const refNum = refMatch[1];
      const suffix = refMatch[2]; // Title or Text
      return `ref${refNum.padStart(2, '0')}${suffix}`; // ref01Title, ref02Title, etc.
    }
    
    // Section mappings
    const sectionMatch = key.match(/^section(\d+)(.+)$/);
    if (sectionMatch) {
      const sectionNum = sectionMatch[1];
      const suffix = sectionMatch[2]; // Title, Intro, Subtitle, List
      const sectionName = sectionMap[sectionNum] || sectionNum;
      return `section${sectionName}${suffix}`;
    }
    
    // Country mappings
    const countryMatch = key.match(/^country(\d+)(.+)$/);
    if (countryMatch) {
      const countryNum = countryMatch[1];
      const suffix = countryMatch[2];
      const countryNames = ['iran', 'yemen', 'afghanistan'];
      const countryName = countryNames[countryNum - 1] || `country${countryNum}`;
      return `${countryName}${suffix}`;
    }
    
    // Generic intro paragraphs
    if (key.match(/^introPara(\d+)$/)) {
      const paraNum = parseInt(key.match(/\d+/)[0]);
      const paraNames = ['opening', 'historical'];
      return `introPara${paraNames[paraNum - 1] ? paraNames[paraNum - 1].charAt(0).toUpperCase() + paraNames[paraNum - 1].slice(1) : paraNum}`;
    }
    
    return key;
  },
  
  // Harm - map reasons to descriptive names
  harm_en: (key, value, allData) => {
    const reasonMap = {
      '2': 'Divisive',
      '3': 'AntiScience',
      '4': 'WomenRights',
      '5': 'Violence',
      '6': 'Intolerance',
      '7': 'FreedomOfSpeech',
      '8': 'Apostasy'
    };
    
    const reasonMatch = key.match(/^reason(\d+)(.+)$/);
    if (reasonMatch) {
      const reasonNum = reasonMatch[1];
      const suffix = reasonMatch[2]; // Title or Text
      const reasonName = reasonMap[reasonNum] || reasonNum;
      return `reason${reasonName}${suffix}`;
    }
    
    // Final paragraphs
    if (key.match(/^finalPara(\d+)$/)) {
      const paraNum = parseInt(key.match(/\d+/)[0]);
      const paraNames = ['summary', 'action', 'hope'];
      return `finalPara${paraNames[paraNum - 1] ? paraNames[paraNum - 1].charAt(0).toUpperCase() + paraNames[paraNum - 1].slice(1) : paraNum}`;
    }
    
    return key;
  },
  
  // Migration - warning texts
  migration_en: (key, value, allData) => {
    if (key.match(/^warningText(\d+)$/)) {
      const warningNum = parseInt(key.match(/\d+/)[0]);
      const warningNames = ['cultural', 'demographic', 'security'];
      return `warningText${warningNames[warningNum - 1] ? warningNames[warningNum - 1].charAt(0).toUpperCase() + warningNames[warningNum - 1].slice(1) : warningNum}`;
    }
    return key;
  },
  
  // Recent attacks - year-based mappings
  recent_attacks_en: (key, value, allData) => {
    // Keep year numbers as they are semantic (attacks2024, attacks2023)
    // But change format to be more consistent
    if (key === 'recent2024_2025Title') return 'recentAttacks2024To2025Title';
    if (key === 'recent2024_2025Intro') return 'recentAttacks2024To2025Intro';
    if (key === 'attacks2024_2025') return 'attacksList2024To2025';
    if (key === 'attacks2023Title') return 'attacks2023SectionTitle';
    if (key === 'attacks2023Intro') return 'attacks2023SectionIntro';
    if (key === 'attacks2023') return 'attacksList2023';
    
    return key;
  },
  
  // Comparative research
  comparative_en: (key, value, allData) => {
    // Handle introText1, introText2, etc.
    if (key.match(/^introText(\d+)$/)) {
      const num = parseInt(key.match(/\d+/)[0]);
      const names = ['introTextOverview', 'introTextPurpose'];
      return names[num - 1] || key;
    }
    return key;
  },
  
  // Ex-Muslim resources
  exmuslim_en: (key, value, allData) => {
    // Handle channel1Desc, channel2Desc, etc.
    if (key.match(/^channel(\d+)(.+)$/)) {
      const match = key.match(/^channel(\d+)(.+)$/);
      const num = match[1];
      const suffix = match[2];
      // Pad with zeros for better sorting: channel01, channel02, etc.
      return `channel${num.padStart(2, '0')}${suffix}`;
    }
    return key;
  },
  
  // Expansion history
  expansion_en: (key, value, allData) => {
    if (key.match(/^warningText(\d+)$/)) {
      const num = parseInt(key.match(/\d+/)[0]);
      const names = ['warningTextHistorical', 'warningTextConquest', 'warningTextModern'];
      return names[num - 1] || key;
    }
    return key;
  },
  
  // Harm
  harm_en: (key, value, allData) => {
    if (key.match(/^warningText(\d+)$/)) {
      const num = parseInt(key.match(/\d+/)[0]);
      const names = ['warningTextContext', 'warningTextEvidence', 'warningTextFacts'];
      return names[num - 1] || key;
    }
    return key;
  },
  
  // Jihad study
  jihad_en: (key, value, allData) => {
    if (key.match(/^introPara(\d+)$/)) {
      const num = parseInt(key.match(/\d+/)[0]);
      const names = ['introParaDefinition', 'introParaDebate', 'introParaEvidence'];
      return names[num - 1] || key;
    }
    return key;
  }
};

/**
 * Generate rename mapping for a file
 */
function generateRenameMapping(filename, data) {
  const baseName = filename.replace(/_en\.json$/, '');
  const mapper = contentBasedMappings[filename.replace('.json', '')];
  
  if (!mapper) {
    console.log(`⚠️  No custom mapping defined for ${filename}`);
    return {};
  }
  
  const renameMap = {};
  
  for (const [key, value] of Object.entries(data)) {
    const newKey = mapper(key, value, data);
    if (newKey !== key) {
      renameMap[key] = newKey;
    }
  }
  
  return renameMap;
}

/**
 * Apply rename mapping to translation file
 */
function applyRenameMapping(filePath, renameMap) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const newData = {};
  
  for (const [key, value] of Object.entries(data)) {
    const newKey = renameMap[key] || key;
    newData[newKey] = value;
  }
  
  return newData;
}

/**
 * Find all JSX files that might reference translation keys
 */
function findJsxFiles() {
  const jsxFiles = [];
  
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        scanDir(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
        jsxFiles.push(fullPath);
      }
    }
  }
  
  scanDir(SRC_DIR);
  return jsxFiles;
}

/**
 * Update JSX file references
 */
function updateJsxFile(filePath, renameMap) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changeCount = 0;
  
  for (const [oldKey, newKey] of Object.entries(renameMap)) {
    // Match patterns like: t.oldKey, t?.oldKey, translations.oldKey, translations?.oldKey
    const patterns = [
      new RegExp(`\\bt\\.${oldKey}\\b`, 'g'),
      new RegExp(`\\bt\\?\\.${oldKey}\\b`, 'g'),
      new RegExp(`\\btranslations\\.${oldKey}\\b`, 'g'),
      new RegExp(`\\btranslations\\?\\.${oldKey}\\b`, 'g')
    ];
    
    for (const pattern of patterns) {
      const matches = content.match(pattern);
      if (matches) {
        const replacement = pattern.source.includes('translations') 
          ? `translations.${newKey}` 
          : `t.${newKey}`;
        content = content.replace(pattern, replacement);
        changeCount += matches.length;
      }
    }
  }
  
  return { content, changeCount };
}

/**
 * Main refactoring process
 */
async function refactorTranslationKeys() {
  const allRenameMaps = {};
  const stats = {
    filesProcessed: 0,
    keysRenamed: 0,
    jsxFilesUpdated: 0,
    jsxReferencesUpdated: 0
  };
  
  // Step 1: Generate rename mappings from English files
  console.log('📋 Step 1: Analyzing English translation files...\n');
  
  const enFiles = fs.readdirSync(LANG_DIR)
    .filter(f => f.endsWith('_en.json'))
    .filter(f => !fileFilter || f === fileFilter);
  
  for (const filename of enFiles) {
    const filePath = path.join(LANG_DIR, filename);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const renameMap = generateRenameMapping(filename, data);
    
    if (Object.keys(renameMap).length > 0) {
      allRenameMaps[filename.replace('_en.json', '')] = renameMap;
      console.log(`✓ ${filename}: ${Object.keys(renameMap).length} keys to rename`);
      
      // Show sample mappings
      const samples = Object.entries(renameMap).slice(0, 3);
      samples.forEach(([old, newKey]) => {
        console.log(`    ${old} → ${newKey}`);
      });
      if (Object.keys(renameMap).length > 3) {
        console.log(`    ... and ${Object.keys(renameMap).length - 3} more`);
      }
      console.log();
    }
  }
  
  // Step 2: Apply rename mappings to all language files
  console.log('\n📝 Step 2: Updating translation files...\n');
  
  for (const [baseName, renameMap] of Object.entries(allRenameMaps)) {
    for (const lang of LANGUAGES) {
      const filename = `${baseName}_${lang}.json`;
      const filePath = path.join(LANG_DIR, filename);
      
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} not found, skipping`);
        continue;
      }
      
      const newData = applyRenameMapping(filePath, renameMap);
      
      if (!isDryRun) {
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2) + '\n', 'utf8');
      }
      
      console.log(`✓ Updated ${filename}`);
      stats.filesProcessed++;
      stats.keysRenamed += Object.keys(renameMap).length;
    }
  }
  
  // Step 3: Update JSX file references
  console.log('\n📦 Step 3: Updating JSX file references...\n');
  
  const jsxFiles = findJsxFiles();
  
  for (const jsxPath of jsxFiles) {
    let totalChanges = 0;
    let content = fs.readFileSync(jsxPath, 'utf8');
    
    // Apply all rename maps to this file
    for (const [baseName, renameMap] of Object.entries(allRenameMaps)) {
      const result = updateJsxFile(jsxPath, renameMap);
      content = result.content;
      totalChanges += result.changeCount;
    }
    
    if (totalChanges > 0) {
      if (!isDryRun) {
        fs.writeFileSync(jsxPath, content, 'utf8');
      }
      
      const relativePath = path.relative(process.cwd(), jsxPath);
      console.log(`✓ ${relativePath}: ${totalChanges} reference(s) updated`);
      stats.jsxFilesUpdated++;
      stats.jsxReferencesUpdated += totalChanges;
    }
  }
  
  // Step 4: Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Refactoring Summary');
  console.log('='.repeat(60));
  console.log(`Translation files processed: ${stats.filesProcessed}`);
  console.log(`Total keys renamed: ${stats.keysRenamed}`);
  console.log(`JSX files updated: ${stats.jsxFilesUpdated}`);
  console.log(`JSX references updated: ${stats.jsxReferencesUpdated}`);
  
  if (isDryRun) {
    console.log('\n⚠️  DRY RUN - No files were actually modified');
    console.log('   Run without --dry-run to apply changes');
  } else {
    console.log('\n✅ Refactoring complete!');
    console.log('\n📝 Next steps:');
    console.log('   1. Run: npm run validate:key-format');
    console.log('   2. Run: npm run validate:translation-keys');
    console.log('   3. Test the application');
    console.log('   4. Commit changes');
  }
  
  console.log('\n');
}

// Run the script
refactorTranslationKeys().catch(error => {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
});
