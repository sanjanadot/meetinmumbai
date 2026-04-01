import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { getLocationBySlug, getAllSlugs, locations } from '@/data/locations'
import { Phone, CheckCircle, MapPin, Star, ArrowRight } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.slug)
  if (!location) return {}

  const title = `Escorts in ${location.name} | Premium Call Girls in ${location.name}`
  const description = `Best escorts in ${location.name} offering premium call girls services. Book verified, high-profile escorts in ${location.name} for companionship. 24/7 available, discreet.`
  const url = `https://meetinmumbai.com/escorts-in/${params.slug}`

  return {
    title,
    description,
    keywords: [`escorts in ${location.name}`, `call girls in ${location.name}`, `${location.name} escort service`],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: location.image ? [{ url: `https://meetinmumbai.com${location.image}`, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    other: {
      'geo.region': location.region,
      'geo.placename': `${location.name}, ${location.city}`,
      'geo.position': `${location.lat};${location.lng}`,
      ICBM: `${location.lat}, ${location.lng}`,
    },
  }
}

const serviceCategories = [
  'Celebrity Escorts', 'Air Hostess', 'College Girls', 'Model Escorts',
  'VIP Escorts', 'Independent', 'Russian Escorts', 'Housewife',
]

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.slug)
  if (!location) notFound()

  const relatedLocations = locations
    .filter((l) => l.state === location.state && l.slug !== params.slug)
    .slice(0, 8)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Escorts in ${location.name}`,
    alternateName: [`Call Girls in ${location.name}`, `${location.name} Escort Service`],
    url: `https://meetinmumbai.com/escorts-in/${params.slug}`,
    description: `Premium escorts in ${location.name} offering professional companionship services. Verified call girls available 24/7.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.state,
      addressCountry: 'IN',
      postalCode: location.postalCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    telephone: '+919038976363',
    priceRange: '₹₹₹',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: location.lat, longitude: location.lng },
      geoRadius: '50000',
    },
  }

  return (
    <>
      <PageHeader
        title={`Escorts in ${location.name}`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/location' },
          { label: `Escorts in ${location.name}` },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Escorts in {location.name}
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Looking for high-class <strong>Escorts in {location.name}</strong>? Our services offer the best in glamour and elegance, providing you with a unique experience. Discover the most beautiful and VIP escorts in {location.name}, where discretion and satisfaction are guaranteed.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Choose from our exclusive selection of {location.name}&apos;s finest escort models for a memorable, high-quality service. Experience unmatched premium companionship with Escorts in {location.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now" className="btn-primary text-center">
                  Book {location.name} Escorts
                </Link>
                <a href="tel:+919038976363" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors">
                  <Phone size={18} />
                  +91-9038976363
                </a>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={location.image || '/images/escorts-banner.webp'}
                alt={`Escorts in ${location.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Services Available in {location.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {serviceCategories.map((cat) => (
              <div key={cat} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
                <Star size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Book Escorts in {location.name} With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '100% Verified', desc: 'All escorts in our network are personally verified for safety and quality.' },
              { title: 'Discreet Service', desc: 'Complete privacy and confidentiality guaranteed for every client.' },
              { title: '24/7 Available', desc: 'Book escorts in ' + location.name + ' at any time, day or night.' },
              { title: 'Fast Delivery', desc: 'Escort reaches your location within 25-30 minutes of confirmation.' },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About Escort Services in {location.name}
          </h2>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              {location.name} is one of the most vibrant cities where the demand for premium escort services has grown significantly. Whether you are a business traveler, tourist, or local resident, our escort services in {location.name} are designed to provide you with the finest companionship experience.
            </p>
            <p>
              Our <strong>call girls in {location.name}</strong> are hand-picked for their beauty, intelligence, and professionalism. Each escort undergoes a thorough verification process to ensure your safety and satisfaction. We offer both incall and outcall services in {location.name}, {location.state}.
            </p>
            <p>
              Whether you need an escort for a business dinner, a social event, a hotel stay, or a private meeting, we have the perfect companion for every occasion. Our escorts in {location.name} are available 24/7 and can reach your location within 25-30 minutes of booking confirmation.
            </p>
            <p>
              To book an escort in {location.name}, simply fill out our booking form or call us at +91-9038976363. Our team will assist you in selecting the right companion and confirm your booking promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-6 flex flex-wrap items-center gap-4">
            <MapPin size={20} className="text-primary shrink-0" />
            <div>
              <p className="font-medium text-gray-900">Service Area</p>
              <p className="text-gray-600 text-sm">{location.name}, {location.city}, {location.state}, India {location.postalCode}</p>
            </div>
            <div className="ml-auto">
              <Link href="/book-now" className="btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      {relatedLocations.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Also Available Nearby
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/escorts-in/${loc.slug}`}
                  className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:shadow-md transition-all border border-gray-100"
                >
                  <ArrowRight size={14} className="text-primary shrink-0" />
                  Escorts in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Escorts in {location.name} Now
          </h2>
          <p className="text-red-100 mb-6 max-w-xl mx-auto">
            Call us or fill the booking form. Our team will confirm your booking within 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now" className="px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
              Book Online
            </Link>
            <a href="tel:+919038976363" className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
              <Phone size={18} />
              +91-9038976363
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
