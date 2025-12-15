const fs = require('fs');
const path = require('path');

// Revert and start fresh from backup
const filePath = path.join(__dirname, '..', 'src', 'pages', 'ComparativeResearch.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix all </div> that should be </DetailRow> within DetailRow contexts
content = content.replace(
  /(<DetailRow label="[^"]+">[\s\S]*?)<\/div>/g,
  '$1</DetailRow>'
);

// Fix quotes in titles
content = content.replace(
  /<ResearchItem title="([^"]*)"([^"]*)"([^"]*)"/g,
  '<ResearchItem title="$1\'$2\'$3"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Fixed DetailRow closing tags!');
