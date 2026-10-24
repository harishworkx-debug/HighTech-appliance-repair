import fs from 'fs';

const services = [
  'refrigerator-repair',
  'freezer-repair',
  'washer-repair',
  'dryer-repair',
  'dishwasher-repair',
  'oven-repair',
  'stove-and-range-repair',
  'microwave-repair',
  'ice-maker-repair',
  'general-appliance-troubleshooting'
];

const locations = [
  'san-diego-ca',
  'chula-vista-ca',
  'la-mesa-ca',
  'el-cajon-ca',
  'santee-ca',
  'poway-ca',
  'national-city-ca',
  'la-jolla-ca',
  'escondido-ca',
  'encinitas-ca'
];

const domain = 'https://www.refrigeratorrepair.pro';
const today = new Date().toISOString().split('T')[0];

const urls = [];

// 1. Core pages
urls.push({ loc: `${domain}/`, priority: '1.0', changefreq: 'daily' });
urls.push({ loc: `${domain}/services`, priority: '0.9', changefreq: 'weekly' });
urls.push({ loc: `${domain}/service-areas`, priority: '0.9', changefreq: 'weekly' });
urls.push({ loc: `${domain}/about`, priority: '0.7', changefreq: 'monthly' });
urls.push({ loc: `${domain}/reviews`, priority: '0.7', changefreq: 'weekly' });
urls.push({ loc: `${domain}/contact`, priority: '0.8', changefreq: 'monthly' });

// 2. 10 Service Pages
for (const s of services) {
  urls.push({ loc: `${domain}/${s}`, priority: '0.85', changefreq: 'weekly' });
}

// 3. 10 Service Area Pages
for (const l of locations) {
  urls.push({ loc: `${domain}/appliance-repair-${l}`, priority: '0.80', changefreq: 'weekly' });
}

// 4. 100 Service-Location combinations
for (const s of services) {
  for (const l of locations) {
    urls.push({ loc: `${domain}/${s}-${l}`, priority: '0.75', changefreq: 'weekly' });
  }
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const u of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync('./public/sitemap.xml', xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${urls.length} URLs`);
