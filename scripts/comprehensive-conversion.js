const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'ComparativeResearch.jsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Starting comprehensive conversion...\n');

// Step 1: Convert container, backLink, intro, stats sections
console.log('Step 1: Converting header sections...');
content = content.replace(
  /<div style=\{styles\.container\}>\s*<a href="\/" style=\{styles\.backLink\}>← Back to Home<\/a>/,
  '<Container>\n        <BackLink />'
);

content = content.replace(
  /<div style=\{styles\.intro\}>\s*<h3 style=\{styles\.introH3\}>(.*?)<\/h3>\s*<p style=\{styles\.introP\}>(.*?)<\/p>\s*<p style=\{styles\.introP\}>(.*?)<\/p>\s*<p style=\{styles\.introP\}>(.*?)<\/p>\s*<\/div>/s,
  '<IntroBox title="$1">\n          <p>$2</p>\n          <p>$3</p>\n          <p>$4</p>\n        </IntroBox>'
);

content = content.replace(
  /<div style=\{styles\.statsBox\}>[\s\S]*?<\/div>\s*<\/div>/,
  `<StatsGrid 
          title="📊 Documentation Statistics" 
          stats={[
            { number: "80", label: "Documented Parallels" },
            { number: "6", label: "Source Categories" },
            { number: "100-1,300", label: "Years Earlier Than Quran" },
            { number: "60+", label: "Academic Source Citations" }
          ]} 
        />`
);

// Step 2: Convert all section wrappers
console.log('Step 2: Converting section wrappers...');
const sectionReplacements = [
  {
    comment: '/* TORAH SOURCES */',
    tag: '<span style={styles.categoryTag}>TORAH / HEBREW BIBLE (6th-5th Century BCE)</span>',
    heading: '<h2 style={styles.contentCardH2}>Stories from Jewish Scripture</h2>',
    newTag: '<CategoryTag color="purple">TORAH / HEBREW BIBLE (6th-5th Century BCE)</CategoryTag>',
    newHeading: '<SectionTitle color="primary">Stories from Jewish Scripture</SectionTitle>'
  },
  {
    comment: '/* MIDRASH/JEWISH LEGENDS */',
    tag: '<span style={styles.categoryTag}>JEWISH MIDRASH & LEGENDS (2nd-8th Century CE)</span>',
    heading: '<h2 style={styles.contentCardH2}>Stories from Post-Biblical Jewish Tradition</h2>',
    newTag: '<CategoryTag color="purple">JEWISH MIDRASH & LEGENDS (2nd-8th Century CE)</CategoryTag>',
    newHeading: '<SectionTitle color="primary">Stories from Post-Biblical Jewish Tradition</SectionTitle>'
  },
  {
    comment: '/* CHRISTIAN SOURCES */',
    tag: '<span style={styles.categoryTag}>CHRISTIAN GOSPELS & APOCRYPHA (1st-6th Century CE)</span>',
    heading: '<h2 style={styles.contentCardH2}>Stories from Christian Sources</h2>',
    newTag: '<CategoryTag color="green">CHRISTIAN GOSPELS & APOCRYPHA (1st-6th Century CE)</CategoryTag>',
    newHeading: '<SectionTitle color="primary">Stories from Christian Sources</SectionTitle>'
  }
];

sectionReplacements.forEach(section => {
  content = content.replace(
    new RegExp(`\\{${section.comment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\}\\s*<div style=\\{styles\\.contentCard\\}>\\s*${section.tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*${section.heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`),
    `{${section.comment}}\n        <ContentCard>\n          ${section.newTag}\n          ${section.newHeading}`
  );
});

// Step 3: Convert remaining sections with different patterns
console.log('Step 3: Converting remaining sections...');
content = content.replace(
  /\{\/\* CHRISTIAN LEGENDS \*\/\}\s*<div style=\{styles\.contentCard\}>\s*<span style=\{styles\.categoryTag\}>CHRISTIAN LEGENDS \(5th-6th Century CE\)<\/span>\s*<h2 style=\{styles\.contentCardH2\}>Stories from Later Christian Folklore<\/h2>/,
  '{/* CHRISTIAN LEGENDS */}\n        <ContentCard>\n          <CategoryTag color="blue">CHRISTIAN LEGENDS (5th-6th Century CE)</CategoryTag>\n          <SectionTitle color="primary">Stories from Later Christian Folklore</SectionTitle>'
);

content = content.replace(
  /\{\/\* ARABIAN SOURCES \*\/\}\s*<div style=\{styles\.contentCard\}>\s*<span style=\{styles\.categoryTag\}>PRE-ISLAMIC ARABIAN TRADITION<\/span>\s*<h2 style=\{styles\.contentCardH2\}>Stories from Arabian Folklore<\/h2>/,
  '{/* ARABIAN SOURCES */}\n        <ContentCard>\n          <CategoryTag color="orange">PRE-ISLAMIC ARABIAN TRADITION</CategoryTag>\n          <SectionTitle color="primary">Stories from Arabian Folklore</SectionTitle>'
);

content = content.replace(
  /\{\/\* ZOROASTRIAN & OTHER \*\/\}\s*<div style=\{styles\.contentCard\}>\s*<span style=\{styles\.categoryTag\}>ZOROASTRIAN & OTHER SOURCES<\/span>\s*<h2 style=\{styles\.contentCardH2\}>Stories from Persian & Other Traditions<\/h2>/,
  '{/* ZOROASTRIAN & OTHER */}\n        <ContentCard>\n          <CategoryTag color="red">ZOROASTRIAN & OTHER SOURCES</CategoryTag>\n          <SectionTitle color="primary">Stories from Persian & Other Traditions</SectionTitle>'
);

// Step 4: Convert conclusion section
console.log('Step 4: Converting conclusion section...');
content = content.replace(
  /\{\/\* CONCLUSION \*\/\}\s*<div style=\{styles\.contentCard\}>\s*<h2 style=\{styles\.contentCardH2\}>📋 Conclusion: Evidence of Human Authorship<\/h2>/,
  '{/* CONCLUSION */}\n        <ContentCard>\n          <SectionTitle color="primary">📋 Conclusion: Evidence of Human Authorship</SectionTitle>'
);

// Step 5: Convert all research items
console.log('Step 5: Converting research items...');
content = content.replace(
  /<div style=\{styles\.researchItem\}>\s*<h3 style=\{styles\.researchItemH3\}>([^<]+)<\/h3>/g,
  '<ResearchItem title="$1">'
);

// Step 6: Convert detail rows
console.log('Step 6: Converting detail rows...');
content = content.replace(
  /<div style=\{styles\.detailRow\}>\s*<span style=\{styles\.detailLabel\}>([^:]+):<\/span>\{' '\}/g,
  '<DetailRow label="$1:">'
);

// Step 7: Convert verse references
console.log('Step 7: Converting verse references...');
content = content.replace(
  /<span style=\{styles\.verseRef\}>([^<]+)<\/span>/g,
  '<VerseReference>$1</VerseReference>'
);

// Step 8: Convert source dates
console.log('Step 8: Converting source dates...');
content = content.replace(
  /<span style=\{styles\.sourceDate\}>([^<]+)<\/span>/g,
  '<SourceDate>$1</SourceDate>'
);

// Step 9: Remove detailValue spans
console.log('Step 9: Removing detailValue spans...');
content = content.replace(
  /<span style=\{styles\.detailValue\}>([^<]+)<\/span>/g,
  '$1'
);

// Step 10: Close all DetailRow tags properly
console.log('Step 10: Fixing DetailRow closing tags...');
// Split into lines for more precise control
const lines = content.split('\n');
const fixedLines = [];
let inDetailRow = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('<DetailRow label=')) {
    inDetailRow = true;
    fixedLines.push(line);
  } else if (inDetailRow && line.trim() === '</div>') {
    fixedLines.push(line.replace('</div>', '</DetailRow>'));
    inDetailRow = false;
  } else {
    fixedLines.push(line);
  }
}

content = fixedLines.join('\n');

// Step 11: Close all ResearchItem tags properly
console.log('Step 11: Fixing ResearchItem closing tags...');
content = content.replace(
  /(<ResearchItem title="[^"]*">[\s\S]*?)\s*<\/div>(\s*<\/div>|\s*<ResearchItem|\s*<\/ContentCard>)/g,
  '$1\n          </ResearchItem>$2'
);

// Step 12: Close all ContentCard tags
console.log('Step 12: Fixing ContentCard closing tags...');
content = content.replace(
  /(<ContentCard>[\s\S]*?)<\/div>(\s*\{\/\*)/g,
  '$1</ContentCard>$2'
);

content = content.replace(
  /(<ContentCard>[\s\S]*?)<\/div>(\s*<\/Container>)/g,
  '$1</ContentCard>$2'
);

// Step 13: Close Container tag
console.log('Step 13: Fixing Container closing tag...');
content = content.replace(
  /<\/div>(\s*<\/>\s*\))/,
  '</Container>$1'
);

// Step 14: Handle quote escaping in titles
console.log('Step 14: Fixing quotes in titles...');
content = content.replace(
  /<ResearchItem title="([^"]*)"([^"]*)"([^"]*)"/g,
  (match, before, middle, after) => {
    return `<ResearchItem title="${before}&quot;${middle}&quot;${after}"`;
  }
);

// Step 15: Remove styles object
console.log('Step 15: Removing styles object...');
content = content.replace(
  /const styles = \{[\s\S]*?\}/,
  ''
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('\n✓ Comprehensive conversion complete!');
console.log('All 80 research items converted.');
console.log('Please check for any remaining errors.');
