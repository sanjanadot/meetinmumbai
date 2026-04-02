import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { locations } from '@/data/locations'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Locations | Escort Services Across India',
  description: 'Find premium escort services at your location. We cover Mumbai, Pune, Delhi, Bangalore, Jaipur, Lucknow, and 100+ locations across India.',
  alternates: { canonical: 'https://meetinmumbai.com/location' },
  openGraph: {
    title: 'Service Locations - Meet in Mumbai',
    description: 'Escort services available across 100+ locations in India.',
    url: 'https://meetinmumbai.com/location',
    images: [{ url: '/images/escorts-banner.webp', width: 1200, height: 630 }],
  },
}

const groupByCity = () => {
  const grouped: Record<string, typeof locations> = {}
  locations.forEach((loc) => {
    const key = loc.state
    if (!grouped[key]) grouped[key] = []
    grouped[key].push(loc)
  })
  return grouped
}

export default function LocationPage() {
  const groupedLocations = groupByCity()

  return (
    <>
      <PageHeader
        title="Service Locations"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
      />

      <section className="py-14 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="label-eyebrow">Coverage</span>
          <h2 className="text-4xl font-bold font-serif text-white mb-3">Escort Services Across India</h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg">
            We provide premium escort services across {locations.length}+ locations in India. Find an escort near you.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          {Object.entries(groupedLocations).map(([state, locs]) => (
            <div key={state} className="mb-12">
              <h2 className="text-xl font-bold font-serif text-white mb-5 pb-2 border-b border-primary/30 inline-block">
                <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">{state}</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {locs.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/escorts/${loc.slug}`}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:text-yellow-400 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-white/10"
                  >
                    <MapPin size={14} className="text-primary shrink-0" />
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-yellow-900/10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">Don&apos;t See Your City?</h2>
          <p className="text-gray-400 mb-8">Contact us and we will arrange services in your area</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://meetinmumbai.com' },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://meetinmumbai.com/location' },
            ],
          }),
        }}
      />
    </>
  )
}
