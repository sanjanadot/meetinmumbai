import { locations } from '@/data/locations'
import { cities } from '@/data/cities'
import { services } from '@/data/services'

const BASE_URL = 'https://meetinmumbai.com'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const entries: string[] = []

  // City pages with hero images
  for (const city of cities) {
    const pageUrl = `${BASE_URL}/city/${city.slug}`
    const imageUrl = `${BASE_URL}${city.heroImage}`
    const imageTitle = escapeXml(`Escorts in ${city.name} - Premium Escort Service`)
    const imageCaption = escapeXml(`Verified escorts in ${city.name}, ${city.state}. Book premium escort services 24/7.`)
    entries.push(`  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${imageTitle}</image:title>
      <image:caption>${imageCaption}</image:caption>
    </image:image>
  </url>`)
  }

  // Spa-center city pages
  for (const city of cities) {
    const pageUrl = `${BASE_URL}/spa-center/${city.slug}`
    const imageUrl = `${BASE_URL}${city.heroImage}`
    const imageTitle = escapeXml(`Spa Center in ${city.name} - Premium Body Massage`)
    const imageCaption = escapeXml(`Professional spa and massage services in ${city.name}, ${city.state}. Available 24/7.`)
    entries.push(`  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${imageTitle}</image:title>
      <image:caption>${imageCaption}</image:caption>
    </image:image>
  </url>`)
  }

  // Location pages — escorts
  for (const loc of locations) {
    if (!loc.image) continue
    const pageUrl = `${BASE_URL}/escorts/${loc.slug}`
    const imageUrl = `${BASE_URL}${loc.image}`
    const imageTitle = escapeXml(`Escorts in ${loc.name} - Call Girls in ${loc.name}`)
    const imageCaption = escapeXml(`Premium escorts and call girls in ${loc.name}, ${loc.city}, ${loc.state}. Verified & available 24/7.`)
    entries.push(`  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${imageTitle}</image:title>
      <image:caption>${imageCaption}</image:caption>
    </image:image>
  </url>`)
  }

  // Location pages — spa-center
  for (const loc of locations) {
    if (!loc.image) continue
    const pageUrl = `${BASE_URL}/spa-center/${loc.slug}`
    const imageUrl = `${BASE_URL}${loc.image}`
    const imageTitle = escapeXml(`Spa Center in ${loc.name} - Body Massage in ${loc.name}`)
    const imageCaption = escapeXml(`Professional spa and massage therapists in ${loc.name}, ${loc.city}, ${loc.state}. Available 24/7.`)
    entries.push(`  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${imageTitle}</image:title>
      <image:caption>${imageCaption}</image:caption>
    </image:image>
  </url>`)
  }

  // Service pages with images
  for (const svc of services) {
    const pageUrl = `${BASE_URL}/${svc.slug}`
    const imageUrl = `${BASE_URL}${svc.image}`
    const imageTitle = escapeXml(`${svc.name} - Meet in Mumbai`)
    const imageCaption = escapeXml(svc.description)
    entries.push(`  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${imageTitle}</image:title>
      <image:caption>${imageCaption}</image:caption>
    </image:image>
  </url>`)
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${entries.join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
