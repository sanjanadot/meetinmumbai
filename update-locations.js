const fs = require('fs');
const path = require('path');

// Read existing locations.ts up to the last entry
const locFile = path.join(__dirname, 'src/data/locations.ts');
const content = fs.readFileSync(locFile, 'utf8');

// Read generated locations
const generated = fs.readFileSync(path.join(__dirname, 'generated-locations.txt'), 'utf8');

// Find the closing bracket of the locations array
const insertPoint = content.lastIndexOf("  { slug: 'escorts-in-varanasi',");
const endOfLastEntry = content.indexOf('\n', insertPoint) + 1;
// Find the closing of array
const closingBracket = content.indexOf(']', endOfLastEntry);

const newContent =
  content.slice(0, closingBracket) +
  generated + '\n' +
  content.slice(closingBracket);

fs.writeFileSync(locFile, newContent);
console.log('Done! Updated locations.ts');
// Count total location entries
const matches = newContent.match(/slug: '/g);
console.log('Total location entries:', matches ? matches.length : 0);
