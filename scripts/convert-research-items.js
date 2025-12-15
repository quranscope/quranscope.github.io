const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'ComparativeResearch.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Step 1: Convert research item wrappers
// Pattern: <div style={styles.researchItem}> → <ResearchItem title="X">
console.log('Step 1: Converting research item wrappers...');
content = content.replace(
  /<div style=\{styles\.researchItem\}>\s*<h3 style=\{styles\.researchItemH3\}>([^<]+)<\/h3>/g,
  '<ResearchItem title="$1">'
);

// Step 2: Convert detail rows with label
// Pattern: <div style={styles.detailRow}><span style={styles.detailLabel}>Label:</span>{' '}
console.log('Step 2: Converting detail row openings...');
content = content.replace(
  /<div style=\{styles\.detailRow\}>\s*<span style=\{styles\.detailLabel\}>([^<]+):<\/span>\{' '\}/g,
  '<DetailRow label="$1:">'
);

// Step 3: Convert verse references
// Pattern: <span style={styles.verseRef}>X:Y</span> → <VerseReference>X:Y</VerseReference>
console.log('Step 3: Converting verse references...');
content = content.replace(
  /<span style=\{styles\.verseRef\}>([^<]+)<\/span>/g,
  '<VerseReference>$1</VerseReference>'
);

// Step 4: Convert source dates
// Pattern: <span style={styles.sourceDate}>DATE</span> → <SourceDate>DATE</SourceDate>
console.log('Step 4: Converting source dates...');
content = content.replace(
  /<span style=\{styles\.sourceDate\}>([^<]+)<\/span>/g,
  '<SourceDate>$1</SourceDate>'
);

// Step 5: Remove detailValue spans (just use text directly)
// Pattern: <span style={styles.detailValue}>TEXT</span> → TEXT
console.log('Step 5: Removing detailValue wrapper spans...');
content = content.replace(
  /<span style=\{styles\.detailValue\}>([^<]+)<\/span>/g,
  '$1'
);

// Step 6: Close DetailRow components properly
// Replace </div> that comes after DetailRow content with </DetailRow>
console.log('Step 6: Converting DetailRow closing tags...');
// This is tricky - we need to find </div> that closes a DetailRow
// Look for pattern: (DetailRow content)</div> where the div closes the DetailRow
content = content.replace(
  /(<DetailRow label="[^"]+">[\s\S]*?)\s*<\/div>/g,
  function(match, detailRowContent) {
    // Check if this div closes a DetailRow by seeing if it's at the end of a line
    // and the next line starts with another DetailRow or ResearchItem closing
    return detailRowContent + '\n            </DetailRow>';
  }
);

// Step 7: Close ResearchItem components properly
// Pattern: (ResearchItem content)</div> → (ResearchItem content)</ResearchItem>
console.log('Step 7: Converting ResearchItem closing tags...');
content = content.replace(
  /(<ResearchItem title="[^"]+">[\s\S]*?)\s*<\/div>(\s*<\/ContentCard>|\s*<ResearchItem|\s*<\/div>)/g,
  function(match, researchContent, after) {
    return researchContent + '\n          </ResearchItem>' + after;
  }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Conversion complete!');
console.log('Please check for any remaining errors.');
