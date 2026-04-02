import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-white/5 border border-white/10 hover:border-primary/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white mb-2 font-serif group-hover:text-yellow-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{service.description}</p>
                  <span className="flex items-center gap-1 text-primary text-sm font-medium">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
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
