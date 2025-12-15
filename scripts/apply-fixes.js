const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'pages', 'ComparativeResearch.jsx');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Applying fixes...\n');

// Fix 1: Replace HTML entities with actual characters
console.log('Fix 1: Replacing HTML entities...');
content = content.replace(/&quot;/g, '"');
content = content.replace(/&amp;/g, '&');

// Fix 2: Fix stats section that wasn't converted
console.log('Fix 2: Converting stats section...');
content = content.replace(
  /<div style=\{styles\.statsBox\}>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
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

// Fix 3: Replace remaining </div> that should be </ResearchItem>
console.log('Fix 3: Fixing ResearchItem closing tags...');
// Find all lines with </div> that come after ResearchItem content
const lines = content.split('\n');
const fixedLines = [];
let inResearchItem = false;
let detailRowDepth = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  if (trimmed.startsWith('<ResearchItem title=')) {
    inResearchItem = true;
    detailRowDepth = 0;
    fixedLines.push(line);
  } else if (inResearchItem && trimmed.startsWith('<DetailRow')) {
    detailRowDepth++;
    fixedLines.push(line);
  } else if (inResearchItem && trimmed === '</DetailRow>') {
    detailRowDepth--;
    fixedLines.push(line);
  } else if (inResearchItem && detailRowDepth === 0 && trimmed === '</div>') {
    // This </div> should be </ResearchItem>
    fixedLines.push(line.replace('</div>', '</ResearchItem>'));
    inResearchItem = false;
  } else {
    fixedLines.push(line);
  }
}

content = fixedLines.join('\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('\n✓ Fixes applied!');
console.log('Check for remaining errors.');
