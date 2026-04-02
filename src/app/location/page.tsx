import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { locations } from '@/data/locations'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Locations | Escort Services Across India',
  description: 'Find premium escort services at your location. We cover Mumbai, Pune, Delhi, Bangalore, Jaipur, Lucknow, and 100+ locations across India.',
  openGraph: {
    title: 'Service Locations - Meet in Mumbai',
    description: 'Escort services available across 100+ locations in India.',
    url: 'https://meetinmumbai.com/location',
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Escort Services Across India</h2>
          <p className="text-gray-600 text-lg">
            We provide premium escort services across {locations.length}+ locations in India. Find an escort near you.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {Object.entries(groupedLocations).map(([state, locs]) => (
            <div key={state} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary inline-block">
                {state}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {locs.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/escorts-in/${loc.slug}`}
                    className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:shadow-md transition-all border border-gray-100"
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

      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t See Your City?</h2>
          <p className="text-red-100 mb-6">Contact us and we will arrange services in your area</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
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
