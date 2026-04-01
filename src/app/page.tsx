import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, Star, Clock, Shield } from 'lucide-react'
import { getFeaturedLocations } from '@/data/locations'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Escorts In Mumbai | 100% Genuine Call Girls In Mumbai',
  description: 'Mumbai Escorts Service at 8k to 50K with Cash by Payment Mumbai Call Girls 24/7 Available. Incall & outcall Girl will reach your location in 25 minutes.',
  openGraph: {
    title: 'Escorts In Mumbai | 100% Genuine Call Girls In Mumbai',
    description: 'Mumbai Escorts Service at 8k to 50K with Cash by Payment Mumbai Call Girls 24/7 Available.',
    url: 'https://meetinmumbai.com',
    images: [{ url: '/images/escorts-banner.webp', width: 1200, height: 630 }],
  },
}

const stats = [
  { value: '5000+', label: 'Happy Clients' },
  { value: '500+', label: 'Premium Escorts' },
  { value: '100+', label: 'Locations' },
  { value: '24/7', label: 'Availability' },
]

const whyUs = [
  { icon: Shield, title: 'Verified & Safe', desc: '100% verified escorts with privacy guaranteed for all clients.' },
  { icon: Star, title: 'Premium Quality', desc: 'Only the best high-profile models selected for your pleasure.' },
  { icon: Clock, title: '24/7 Available', desc: 'Available round the clock for incall and outcall services.' },
  { icon: CheckCircle, title: 'Discreet Service', desc: 'Complete discretion and confidentiality is our top priority.' },
]

export default function HomePage() {
  const featuredLocations = getFeaturedLocations()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center bg-gray-900">
        <Image
          src="/images/escorts-banner.webp"
          alt="Escorts Services in Mumbai"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <p className="text-lg font-medium mb-2 uppercase tracking-widest text-primary">Welcome to Meet in Mumbai</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight font-serif">
            Get Escorts In Mumbai<br />
            <span className="text-primary">Independent Mumbai Escorts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            When hiring an escort service in Mumbai, ensure that your safety and privacy are prioritized. Premium call girls available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now" className="px-8 py-4 bg-primary text-white font-bold text-lg rounded hover:bg-primary-dark transition-colors">
              Book Now
            </Link>
            <a href="tel:+919038976363" className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} />
              +91-9038976363
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="text-sm mt-1 text-red-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Famous Escorts Service By Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Premium escort services available across major cities in India. Discreet, safe and verified companions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLocations.map((location) => (
              <div key={location.slug} className="service-card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={location.image || '/images/escorts-banner.webp'}
                    alt={`${location.name} Escorts Service`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/escorts-in/${location.slug}`} className="text-gray-900 hover:text-primary transition-colors">
                      Escorts In {location.name}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Looking for high-class Escorts in {location.name}? Our services offer the best in glamour and elegance, providing you with a unique experience. Discover the most beautiful and VIP escorts, where discretion and satisfaction are guaranteed.
                  </p>
                  <Link
                    href={`/escorts-in/${location.slug}`}
                    className="inline-block px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors text-sm"
                  >
                    Book {location.name} Escorts
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We provide premium escort services with a focus on safety, privacy, and excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-primary mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Escort Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Explore our wide range of premium escort services tailored to your preferences.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.shortName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs font-semibold text-gray-700 group-hover:text-primary leading-tight text-center px-2 py-2">{service.shortName}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Rise of Escort Services in Mumbai</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As the city attracts individuals from all walks of life—business professionals, tourists, and residents alike—there is a growing demand for professional and discreet escort services in Mumbai. These services have evolved over the years, offering more than just companionship.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Meet in Mumbai, we pride ourselves on offering a curated selection of premium escorts who are not only beautiful but also intelligent, well-spoken, and discreet. Whether you need a companion for a business event, dinner date, or private meeting, we have the perfect escort for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about-us" className="btn-primary">Learn More About Us</Link>
                <Link href="/contact" className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors inline-block text-center">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/escorts-banner.webp"
                alt="Meet in Mumbai Escort Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Escort?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-xl mx-auto">
            Contact us now for premium, discreet escort services across Mumbai and India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now" className="px-8 py-4 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
              Book Now
            </Link>
            <a href="tel:+919038976363" className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
              <Phone size={20} />
              +91-9038976363
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Meet in Mumbai - Escorts Service',
            url: 'https://meetinmumbai.com',
            description: 'Premium escort services in Mumbai. Book verified call girls 24/7.',
            telephone: '+919038976363',
            email: 'sanjanadotsingh@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Azad Nagar, Sakinaka',
              addressLocality: 'Mumbai',
              addressRegion: 'Maharashtra',
              postalCode: '400068',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '19.0760',
              longitude: '72.8777',
            },
            priceRange: '₹₹₹',
          }),
        }}
      />
    </>
  )
}
