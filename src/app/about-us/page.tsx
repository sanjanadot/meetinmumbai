import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { CheckCircle, Users, MapPin, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Know Everything About Saumya Basu Escorts In Mumbai',
  description: 'We Offer Best Escorts Services In Mumbai & Call Girls Service In Mumbai to Take Care of your Day Or Night Like No Other',
  openGraph: {
    title: 'About Us - Saumya Basu Escorts In Mumbai',
    description: 'We Offer Best Escorts Services In Mumbai & Call Girls Service In Mumbai to Take Care of your Day Or Night Like No Other',
    url: 'https://meetinmumbai.com/about-us',
    images: [{ url: '/images/escorts-banner.webp' }],
  },
}

const features = [
  { icon: CheckCircle, title: 'Verified Escorts', desc: 'All our escorts are 100% verified for your safety and peace of mind.' },
  { icon: Users, title: 'Professional Team', desc: 'Our team of professionals ensures a seamless booking experience.' },
  { icon: MapPin, title: 'Pan India Coverage', desc: 'Services available across all major cities in India.' },
  { icon: Star, title: 'Premium Quality', desc: 'We maintain the highest standards of quality and discretion.' },
]

const stats = [
  { value: '5000+', label: 'Happy Clients' },
  { value: '500+', label: 'Premium Escorts' },
  { value: '100+', label: 'Locations Covered' },
  { value: '10+', label: 'Years Experience' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Rise of Escort Services in Mumbai</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              As the city attracts individuals from all walks of life—business professionals, tourists, and residents alike—there is a growing demand for professional and discreet escort services in Mumbai. These services have evolved over the years, offering more than just companionship.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-50 text-primary mb-4">
                  <f.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image src="/images/escorts-banner.webp" alt="About Saumya Basu Escorts" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Meet in Mumbai is a premier escort services agency that has been serving clients across Mumbai and India for over a decade. We are committed to providing the highest quality companionship services with an emphasis on privacy, safety, and satisfaction.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our carefully curated selection of escorts includes models, actresses, college students, and professionals from all walks of life. Each escort is personally verified to ensure they meet our high standards of beauty, intelligence, and professionalism.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you need a companion for a corporate event, a dinner date, or a private encounter, we have the perfect match for you. Our services are available 24/7 across Mumbai, Pune, Delhi, Bangalore, and many other cities.
              </p>
              <Link href="/contact" className="btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold mb-2">{s.value}</div>
                <div className="text-red-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Safety First</h3>
              <p className="text-gray-600">Every escort in our network is thoroughly verified. Your safety and privacy are our top priorities, with all personal information kept strictly confidential.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Premium Experience</h3>
              <p className="text-gray-600">We curate only the finest companions to ensure every encounter exceeds expectations. Quality and satisfaction are guaranteed with every booking.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Discretion</h3>
              <p className="text-gray-600">Complete confidentiality for all clients. We never share your personal details and ensure every interaction remains private and professional.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is available round the clock to assist with bookings, answer queries, and ensure your experience is flawless.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
