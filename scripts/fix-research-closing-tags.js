const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'ComparativeResearch.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix 1: Replace </div> that should be </ResearchItem>
// These are the </div> that come right before another <ResearchItem or before </ContentCard>
console.log('Fix 1: Converting remaining ResearchItem closing tags...');
content = content.replace(
  /\s*<\/div>(\s+<ResearchItem)/g,
  '\n          </ResearchItem>$1'
);

content = content.replace(
  /\s*<\/div>(\s+<\/ContentCard>)/g,
  '\n          </ResearchItem>$1'
);

// Fix 2: Escape quotes in ResearchItem titles
console.log('Fix 2: Escaping quotes in titles...');
content = content.replace(
  /<ResearchItem title="([^"]*)"([^"]*)"([^"]*)"/g,
  '<ResearchItem title="$1\\"$2\\"$3"'
);

// Also handle single quote cases
content = content.replace(
  /<ResearchItem title="([^"]*)'([^"]*)"/g,
  '<ResearchItem title="$1\'$2"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Fixes applied!');
