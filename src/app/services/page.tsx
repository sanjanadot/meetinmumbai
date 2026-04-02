import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Escort Services | Saumya Basu Escorts Mumbai',
  description: 'Explore our wide range of premium escort services in Mumbai. From actress escorts to VIP companions - we have the perfect match for every preference.',
  openGraph: {
    title: 'Our Escort Services - Meet in Mumbai',
    description: 'Explore premium escort services including actress, model, Russian, independent, and more.',
    url: 'https://meetinmumbai.com/services',
  },
}

export default function ServicesPage() {
  const mumbaiLocations = locations.filter((l) => l.city === 'Mumbai' || l.state === 'Maharashtra' && (l.city === 'Thane' || l.city === 'Navi Mumbai'))

  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Intro */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="label-eyebrow">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-3">Premium Escort Services in Mumbai</h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg leading-relaxed">
            We offer a diverse selection of premium escort services to cater to every taste and preference. All our escorts are verified, professional, and dedicated to providing an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Permanent subtle gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Text at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="font-bold text-white font-serif text-sm sm:text-base leading-tight group-hover:text-yellow-400 transition-colors">
                      {service.name}
                    </h3>
                    <span className="flex items-center gap-1 text-primary text-xs font-medium mt-1 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Details <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Our Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Escorts Available In Mumbai</h2>
            <div className="section-divider" />
            <p className="text-gray-400">
              Premium escort services across all Mumbai localities. Select your area to book instantly.
            </p>
          </div>
          {/* Location grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
            {mumbaiLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/escorts-in/${loc.slug}`}
                className="group flex items-center gap-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 rounded-xl px-3 py-2.5 transition-all duration-200"
              >
                <MapPin size={13} className="text-primary shrink-0" />
                <span className="text-gray-300 group-hover:text-yellow-400 text-sm font-medium transition-colors truncate">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/location" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
              View all locations across India <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-extrabold font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-white font-medium">Verified Escorts</div>
              <p className="text-gray-500 text-sm mt-2">Hand-picked and verified for quality</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-extrabold font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-white font-medium">Available</div>
              <p className="text-gray-500 text-sm mt-2">Round the clock service for your convenience</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-extrabold font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-white font-medium">Discreet</div>
              <p className="text-gray-500 text-sm mt-2">Your privacy is always guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">Ready to Book?</h2>
          <p className="text-gray-400 mb-8">Contact us now to book your perfect companion</p>
          <Link href="/book-now" className="btn-primary">Book Now</Link>
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
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://meetinmumbai.com/services' },
            ],
          }),
        }}
      />
    </>
  )
}
