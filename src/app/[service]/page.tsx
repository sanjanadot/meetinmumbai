import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { getServiceBySlug, services } from '@/data/services'
import { Phone, CheckCircle, Star, ArrowRight } from 'lucide-react'

interface Props {
  params: { service: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.service)
  if (!service) return {}

  const title = `${service.name} in Mumbai | Premium ${service.name} Services`
  const description = `Book premium ${service.name} in Mumbai. Verified, high-profile ${service.name.toLowerCase()} available 24/7 for companionship. Incall & outcall services.`
  const url = `https://meetinmumbai.com/${params.service}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: 'https://meetinmumbai.com/images/escorts-banner.webp' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

const locations = [
  'Mumbai', 'Thane', 'Navi Mumbai', 'Pune', 'Andheri', 'Bandra',
  'Borivali', 'Malad', 'Goregaon', 'Juhu', 'Vashi', 'Bangalore',
]

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service)
  if (!service) notFound()

  return (
    <>
      <PageHeader
        title={service.name}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      />

      {/* Hero */}
      <section className="py-16 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-yellow-900/5" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-eyebrow">Premium Service</span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-3">
                {service.name} in Mumbai
              </h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mb-6" />
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Looking for premium <strong className="text-white">{service.name}</strong> in Mumbai? Our exclusive selection of {service.name.toLowerCase()} are verified, professional, and available 24/7 for both incall and outcall services across Mumbai and India.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We pride ourselves on providing only the finest {service.name.toLowerCase()} who are not just beautiful but also sophisticated, intelligent, and discreet. Whether you need a companion for a social event, business meeting, or private encounter, our {service.name.toLowerCase()} will exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now" className="btn-primary text-center">
                  Book {service.shortName} Now
                </Link>
                <a href="tel:+919038976363" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-yellow-500/50 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-500/10 transition-colors">
                  <Phone size={18} />
                  +91-9038976363
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/15 to-yellow-500/10 rounded-3xl blur-2xl" />
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-white mb-8 text-center">
            Why Choose Our {service.name}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { title: 'Verified & Safe', desc: `All our ${service.name.toLowerCase()} are personally verified for safety and quality.` },
              { title: 'Premium Quality', desc: 'Hand-picked companions with beauty, intelligence, and professionalism.' },
              { title: 'Complete Discretion', desc: 'Your privacy is our top priority. All interactions are completely confidential.' },
              { title: '24/7 Availability', desc: `Book ${service.name.toLowerCase()} at any time, day or night, 365 days a year.` },
              { title: 'Quick Response', desc: 'Our team confirms bookings within 30 minutes of your request.' },
              { title: 'Incall & Outcall', desc: 'Services available at our locations or we can come to your hotel/residence.' },
            ].map((f) => (
              <div key={f.title} className="group bg-white/5 border border-white/10 hover:border-primary/40 rounded-xl p-5 flex items-start gap-3 transition-all duration-300">
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

      {/* Cities */}
      <section className="py-12 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-serif text-white mb-6 text-center">
            {service.name} Available In
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {locations.map((city) => (
              <div key={city} className="bg-white/5 border border-white/10 hover:border-primary/40 rounded-xl p-3 text-center transition-colors">
                <Star size={14} className="text-yellow-400 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-300">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-serif text-white mb-6">Other Escort Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {services.filter((s) => s.slug !== params.service).slice(0, 12).map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:text-yellow-400 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200"
              >
                <ArrowRight size={13} className="text-primary shrink-0" />
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-yellow-900/10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">Book {service.name} Now</h2>
          <p className="text-gray-400 mb-8">Premium {service.name.toLowerCase()} available 24/7 across Mumbai and India</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now" className="btn-primary">Book Now</Link>
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
