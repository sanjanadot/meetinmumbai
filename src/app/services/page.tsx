import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { services } from '@/data/services'
import { Star, ArrowRight } from 'lucide-react'

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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Escort Services in Mumbai</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer a diverse selection of premium escort services to cater to every taste and preference. All our escorts are verified, professional, and dedicated to providing an unforgettable experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all group border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                    <Star size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
              <div className="text-gray-700 font-medium">Verified Escorts</div>
              <p className="text-gray-500 text-sm mt-2">Hand-picked and verified for quality</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-extrabold text-primary mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Available</div>
              <p className="text-gray-500 text-sm mt-2">Round the clock service for your convenience</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
              <div className="text-gray-700 font-medium">Discreet</div>
              <p className="text-gray-500 text-sm mt-2">Your privacy is always guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-red-100 mb-6">Contact us now to book your perfect companion</p>
          <Link href="/book-now" className="inline-block px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}
