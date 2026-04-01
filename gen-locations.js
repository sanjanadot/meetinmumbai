const fs = require('fs');
const path = require('path');

const cityConfig = {
  ahmedabad: { city: 'Ahmedabad', state: 'Gujarat', region: 'IN-GJ', lat: '23.0225', lng: '72.5714', postalCode: '380001' },
  bangalore: { city: 'Bangalore', state: 'Karnataka', region: 'IN-KA', lat: '12.9716', lng: '77.5946', postalCode: '560001' },
  bhopal: { city: 'Bhopal', state: 'Madhya Pradesh', region: 'IN-MP', lat: '23.2599', lng: '77.4126', postalCode: '462001' },
  delhi: { city: 'Delhi', state: 'Delhi', region: 'IN-DL', lat: '28.6139', lng: '77.2090', postalCode: '110001' },
  goa: { city: 'Goa', state: 'Goa', region: 'IN-GA', lat: '15.2993', lng: '74.1240', postalCode: '403001' },
  indore: { city: 'Indore', state: 'Madhya Pradesh', region: 'IN-MP', lat: '22.7196', lng: '75.8577', postalCode: '452001' },
  jaipur: { city: 'Jaipur', state: 'Rajasthan', region: 'IN-RJ', lat: '26.9124', lng: '75.7873', postalCode: '302001' },
  kanpur: { city: 'Kanpur', state: 'Uttar Pradesh', region: 'IN-UP', lat: '26.4499', lng: '80.3319', postalCode: '208001' },
  lucknow: { city: 'Lucknow', state: 'Uttar Pradesh', region: 'IN-UP', lat: '26.8467', lng: '80.9462', postalCode: '226001' },
  nashik: { city: 'Nashik', state: 'Maharashtra', region: 'IN-MH', lat: '19.9975', lng: '73.7898', postalCode: '422001' },
  noida: { city: 'Noida', state: 'Uttar Pradesh', region: 'IN-UP', lat: '28.5355', lng: '77.3910', postalCode: '201301' },
  pune: { city: 'Pune', state: 'Maharashtra', region: 'IN-MH', lat: '18.5204', lng: '73.8567', postalCode: '411001' },
  rajkot: { city: 'Rajkot', state: 'Gujarat', region: 'IN-GJ', lat: '22.3039', lng: '70.8022', postalCode: '360001' },
  surat: { city: 'Surat', state: 'Gujarat', region: 'IN-GJ', lat: '21.1702', lng: '72.8311', postalCode: '395001' },
  vadodara: { city: 'Vadodara', state: 'Gujarat', region: 'IN-GJ', lat: '22.3072', lng: '73.1812', postalCode: '390001' },
  varanasi: { city: 'Varanasi', state: 'Uttar Pradesh', region: 'IN-UP', lat: '25.3176', lng: '82.9739', postalCode: '221001' },
};

// Extra Mumbai sub-locations present in image folder but missing from locations.ts
const extraMumbai = [
  'escorts-in-colaba',
  'escorts-in-ghodbunder-road',
  'escorts-in-kharghar',
];

function toName(slug) {
  return slug.replace(/^escorts-in-/, '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const imgBase = path.join(__dirname, 'public/images');
const lines = [];

// Generate extra Mumbai entries
for (const slug of extraMumbai) {
  const name = toName(slug);
  lines.push(`  { slug: '${slug}', name: '${name}', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0760', lng: '72.8777', postalCode: '400001', image: '/images/mumbai/${slug}.webp' },`);
}

for (const [folder, cfg] of Object.entries(cityConfig)) {
  const dir = path.join(imgBase, folder);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.webp') && f.startsWith('escorts-in-'))
    .sort();
  lines.push(`  // ${cfg.city}`);
  for (const file of files) {
    const slug = file.replace('.webp', '');
    const name = toName(slug);
    lines.push(`  { slug: '${slug}', name: '${name}', city: '${cfg.city}', state: '${cfg.state}', region: '${cfg.region}', lat: '${cfg.lat}', lng: '${cfg.lng}', postalCode: '${cfg.postalCode}', image: '/images/${folder}/${file}' },`);
  }
}

fs.writeFileSync(path.join(__dirname, 'generated-locations.txt'), lines.join('\n'));
console.log('Generated', lines.filter(l => !l.startsWith('  //')).length, 'entries');
console.log('Saved to generated-locations.txt');
