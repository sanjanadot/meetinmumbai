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
      <section className="py-12 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-yellow-900/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="label-eyebrow">{location.state}</span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-3">
                Premium Escorts in {location.name}
              </h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mb-5" />
              <p className="text-gray-400 mb-4 leading-relaxed">
                Looking for high-class <strong className="text-white">Escorts in {location.name}</strong>? Our services offer the best in glamour and elegance, providing you with a unique experience. Discover the most beautiful and VIP escorts in {location.name}, where discretion and satisfaction are guaranteed.
              </p>
              <p className="text-gray-400 mb-7 leading-relaxed">
                Choose from our exclusive selection of {location.name}&apos;s finest escort models for a memorable, high-quality service. Experience unmatched premium companionship with Escorts in {location.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now" className="btn-primary text-center">
                  Book {location.name} Escorts
                </Link>
                <a href="tel:+919038976363" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-yellow-500/50 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-500/10 transition-colors">
                  <Phone size={18} />
                  +91-9038976363
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-yellow-500/10 rounded-3xl blur-2xl" />
              <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
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
        </div>
      </section>

      {/* Services Available */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-serif text-white mb-8 text-center">
            Services Available in {location.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {serviceCategories.map((cat) => (
              <div key={cat} className="group bg-white/5 border border-white/10 hover:border-primary/40 rounded-xl p-4 text-center transition-colors">
                <Star size={22} className="text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-300">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-serif text-white mb-8 text-center">
            Why Book Escorts in {location.name} With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: '100% Verified', desc: 'All escorts in our network are personally verified for safety and quality.' },
              { title: 'Discreet Service', desc: 'Complete privacy and confidentiality guaranteed for every client.' },
              { title: '24/7 Available', desc: 'Book escorts in ' + location.name + ' at any time, day or night.' },
              { title: 'Fast Delivery', desc: 'Escort reaches your location within 25-30 minutes of confirmation.' },
            ].map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 hover:border-primary/30 rounded-xl p-5 flex items-start gap-3 transition-colors">
                <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold font-serif text-white mb-6">
            About Escort Services in {location.name}
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              {location.name} is one of the most vibrant cities where the demand for premium escort services has grown significantly. Whether you are a business traveler, tourist, or local resident, our escort services in {location.name} are designed to provide you with the finest companionship experience.
            </p>
            <p>
              Our <strong className="text-white">call girls in {location.name}</strong> are hand-picked for their beauty, intelligence, and professionalism. Each escort undergoes a thorough verification process to ensure your safety and satisfaction. We offer both incall and outcall services in {location.name}, {location.state}.
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
      <section className="py-8 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-wrap items-center gap-4">
            <MapPin size={20} className="text-primary shrink-0" />
            <div>
              <p className="font-medium text-white">Service Area</p>
              <p className="text-gray-400 text-sm">{location.name}, {location.city}, {location.state}, India {location.postalCode}</p>
            </div>
            <div className="ml-auto">
              <Link href="/book-now" className="btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      {relatedLocations.length > 0 && (
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold font-serif text-white mb-6">
              Also Available Nearby
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/escorts-in/${loc.slug}`}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:text-yellow-400 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200"
                >
                  <ArrowRight size={13} className="text-primary shrink-0" />
                  Escorts in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 bg-gray-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-yellow-900/10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            Book Escorts in {location.name} Now
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Call us or fill the booking form. Our team will confirm your booking within 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now" className="btn-primary">Book Online</Link>
            <a href="tel:+919038976363" className="px-8 py-3 border-2 border-yellow-500/50 text-yellow-400 font-bold rounded-xl hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2">
              <Phone size={18} />
              +91-9038976363
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
