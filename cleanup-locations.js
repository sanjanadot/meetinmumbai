const fs = require('fs');
const path = require('path');

const locFile = path.join(__dirname, 'src/data/locations.ts');
let content = fs.readFileSync(locFile, 'utf8');

// 1. Remove old india/ entries for cities that now have city-specific folder entries
// These lines have '/images/india/' in them
const indiaDups = [
  'escorts-in-pune', 'escorts-in-indore', 'escorts-in-jaipur',
  'escorts-in-lucknow', 'escorts-in-bangalore', 'escorts-in-bhopal', 'escorts-in-varanasi'
];

for (const slug of indiaDups) {
  // Remove the line with /images/india/ for this slug
  const regex = new RegExp(`  \\{ slug: '${slug}'[^\\n]+/images/india/[^\\n]+\\n`, 'g');
  content = content.replace(regex, '');
}

// 2. Handle area-level duplicates - make the second occurrence city-specific
// Find all duplicate slugs (excluding already-handled city-level ones)
const slugMatches = [...content.matchAll(/slug: '([^']+)'/g)];
const seen = {};
const dupTuples = []; // [slug, city] pairs for second occurrences

for (const match of slugMatches) {
  const slug = match[1];
  if (seen[slug]) {
    // This is a duplicate - find city from surrounding context
    const pos = match.index;
    const lineStart = content.lastIndexOf('\n', pos) + 1;
    const lineEnd = content.indexOf('\n', pos);
    const line = content.slice(lineStart, lineEnd);
    const cityMatch = line.match(/city: '([^']+)'/);
    if (cityMatch) {
      dupTuples.push({ slug, city: cityMatch[1], line });
    }
  } else {
    seen[slug] = true;
  }
}

console.log('Area duplicates to fix:', dupTuples.map(d => `${d.slug} in ${d.city}`).join(', '));

// For each duplicate, replace the slug with a city-specific version
for (const dup of dupTuples) {
  const citySlug = dup.city.toLowerCase().replace(/\s+/g, '-');
  const newSlug = `${dup.slug}-${citySlug}`;
  // Replace only in the specific line
  const escapedLine = dup.line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const newLine = dup.line
    .replace(`slug: '${dup.slug}'`, `slug: '${newSlug}'`)
    .replace(`/escorts-in/${dup.slug}` , `/escorts-in/${newSlug}`); // if any
  content = content.replace(dup.line, newLine);
}

fs.writeFileSync(locFile, content);
console.log('Cleanup done!');

// Verify no more duplicates
const slugs2 = [...content.matchAll(/slug: '([^']+)'/g)].map(m => m[1]);
const seen2 = {};
let dupCount = 0;
for (const s of slugs2) {
  if (seen2[s]) { console.log('Still dup:', s); dupCount++; }
  seen2[s] = true;
}
console.log(dupCount === 0 ? 'No duplicates remain' : `${dupCount} duplicates remain`);
console.log('Total entries:', slugs2.length);
