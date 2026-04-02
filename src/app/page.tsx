import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, Star, Clock, Shield, Quote, MapPin } from 'lucide-react'
import { getMumbaiLocations } from '@/data/locations'
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

const testimonials = [
  {
    name: 'Rahul M.',
    location: 'Mumbai',
    rating: 5,
    text: 'Absolutely professional service. Quick response, genuine photos, and complete privacy maintained throughout. Will definitely book again.',
  },
  {
    name: 'Arjun S.',
    location: 'Pune',
    rating: 5,
    text: 'Best escort service I have used in India. The team was extremely courteous and the companion was exactly as described. Highly recommended.',
  },
  {
    name: 'Vikram P.',
    location: 'Bangalore',
    rating: 5,
    text: 'I was skeptical at first but the experience was 100% genuine. Arrived on time, no hidden charges, and total discretion. 5 stars.',
  },
]

export default function HomePage() {
  const mumbaiLocations = getMumbaiLocations()

  return (
    <>
      {/* ─── HERO ───────────────────────────────────── */}
      <section className="relative min-h-[660px] md:min-h-[740px] flex items-center overflow-hidden bg-black">
        <Image
          src="/images/escorts-banner.webp"
          alt="Escorts Services in Mumbai"
          fill
          className="object-cover opacity-25"
          priority
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        {/* Decorative glowing orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-yellow-600/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-28">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-sm text-yellow-400 text-sm font-semibold mb-7 hero-enter">
            <Star size={14} className="fill-yellow-400" />
            Mumbai&apos;s #1 Premium Escort Service
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-serif text-white leading-[1.05] hero-enter-delay-1">
            Escorts In Mumbai<br />
            <span className="bg-gradient-to-r from-primary via-rose-400 to-yellow-400 bg-clip-text text-transparent">
              Premium &amp; Discreet
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed hero-enter-delay-2">
            Premium verified escort services available 24/7 across Mumbai. Incall &amp; outcall — companions arrive in just 25 minutes.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 hero-enter-delay-3">
            <Link
              href="/book-now"
              className="px-9 py-4 bg-gradient-to-r from-primary to-rose-700 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(200,16,46,0.45)] hover:shadow-[0_0_50px_rgba(200,16,46,0.65)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now →
            </Link>
            <a
              href="tel:+919038976363"
              className="px-9 py-4 border-2 border-white/25 text-white font-bold text-lg rounded-xl backdrop-blur-sm hover:border-yellow-400/60 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={20} />
              +91-9038976363
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-1.5 text-gray-300"><CheckCircle size={14} className="text-green-400" /> 100% Verified Profiles</span>
            <span className="flex items-center gap-1.5 text-gray-300"><Shield size={14} className="text-blue-400" /> Fully Discreet</span>
            <span className="flex items-center gap-1.5 text-gray-300"><Clock size={14} className="text-yellow-400" /> 24/7 Available</span>
          </div>
        </div>
      </section>

      {/* ─── STATS ──────────────────────────────────── */}
      <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 py-12 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-extrabold font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs mt-2 uppercase tracking-widest font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ──────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="label-eyebrow">Our Locations</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-3">
              Escorts Available In Mumbai
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mx-auto mt-3" />
            <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm">Premium escort services across all Mumbai localities. Select your area to book instantly.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {mumbaiLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/escorts-in/${location.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              >
                <Image
                  src={location.image || '/images/escorts-banner.webp'}
                  alt={`${location.name} Escorts Service`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent group-hover:via-black/30 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-bold text-sm leading-tight drop-shadow">{location.name}</p>
                  <p className="text-yellow-400 text-xs font-medium mt-0.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Book Escorts →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────── */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="label-eyebrow">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-3">Why Choose Us?</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mx-auto" />
            <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm">We provide premium escort services with a focus on safety, privacy, and excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-500 group-hover:w-full transition-all duration-500 rounded-full" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-rose-900/20 flex items-center justify-center mb-5 group-hover:from-primary/50 transition-all duration-300">
                  <item.icon size={26} className="text-primary group-hover:text-rose-300 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-serif">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="label-eyebrow">Reviews</span>
            <h2 className="text-4xl font-bold font-serif text-white mb-3">What Our Clients Say</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mx-auto" />
            <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm">Real experiences from verified clients across India.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <span className="absolute top-3 right-5 text-8xl font-serif text-primary/15 leading-none select-none pointer-events-none">&ldquo;</span>
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─────────────────────────── */}
      <section className="py-20 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Explore</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Our Escort Services</h2>
            <div className="section-divider" />
            <p className="text-gray-400">Explore our wide range of premium escort services tailored to your preferences.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.shortName}
                    width={400}
                    height={560}
                    style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-white font-serif text-sm sm:text-base leading-tight group-hover:text-yellow-400 transition-colors">
                    {service.shortName}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────── */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[180px] font-serif font-bold text-gray-200 select-none pointer-events-none leading-none hidden lg:block">
          MIM
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-[4px] block mb-3">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-3">
                Escorts In Mumbai<br />
                <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
                  The Premium Choice
                </span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mb-7" />
              <p className="text-gray-600 mb-4 leading-relaxed">
                As the city attracts individuals from all walks of life—business professionals, tourists, and residents alike—there is a growing demand for professional and discreet escort services in Mumbai. These services have evolved over the years, offering more than just companionship.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Meet in Mumbai, we pride ourselves on offering a curated selection of premium escorts who are not only beautiful but also intelligent, well-spoken, and discreet. Whether you need a companion for a business event, dinner date, or private meeting, we have the perfect escort for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about-us" className="btn-primary">Learn More About Us</Link>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 to-yellow-500/15 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/escorts-banner.webp"
                  alt="Meet in Mumbai Escort Services"
                  fill
                  className="object-cover"
                />
                {/* Glass stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/55 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {stats.slice(0, 3).map((s) => (
                      <div key={s.label}>
                        <div className="text-white font-bold text-xl font-serif">{s.value}</div>
                        <div className="text-gray-400 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── METRO CITIES ──────────────────────────── */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Our Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Escorts Available Across India</h2>
            <div className="section-divider" />
            <p className="text-gray-400">Premium escort services in all major cities. Select your city to book instantly.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
            {([
              { name: 'Mumbai', slug: 'escorts-in-mumbai', image: '/images/mumbai/escorts-in-mumbai.webp' },
              { name: 'Delhi', slug: 'escorts-in-delhi', image: '/images/delhi/escorts-in-delhi.webp' },
              { name: 'Bangalore', slug: 'escorts-in-bangalore', image: '/images/bangalore/escorts-in-bangalore.webp' },
              { name: 'Pune', slug: 'escorts-in-pune', image: '/images/pune/escorts-in-pune.webp' },
              { name: 'Jaipur', slug: 'escorts-in-jaipur', image: '/images/jaipur/escorts-in-jaipur.webp' },
              { name: 'Lucknow', slug: 'escorts-in-lucknow', image: '/images/lucknow/escorts-in-lucknow.webp' },
              { name: 'Indore', slug: 'escorts-in-indore', image: '/images/indore/escorts-in-indore.webp' },
              { name: 'Bhopal', slug: 'escorts-in-bhopal', image: '/images/bhopal/escorts-in-bhopal.webp' },
              { name: 'Goa', slug: 'escorts-in-goa', image: '/images/goa/escorts-in-goa.webp' },
              { name: 'Ahmedabad', slug: 'escorts-in-ahmedabad', image: '/images/ahmedabad/escorts-in-ahmedabad.webp' },
            ] as { name: string; slug: string; image: string }[]).map((city) => (
              <Link
                key={city.slug}
                href={`/escorts-in/${city.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={city.image}
                    alt={`Escorts in ${city.name}`}
                    width={400}
                    height={560}
                    style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 flex items-center gap-2">
                  <MapPin size={13} className="text-primary shrink-0" />
                  <h3 className="font-bold text-white font-serif text-sm sm:text-base leading-tight group-hover:text-yellow-400 transition-colors">
                    {city.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/location" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
              View all locations across India <Phone size={0} className="hidden" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────── */}
      <section className="py-16 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Frequently Asked Questions</h2>
            <div className="section-divider" />
            <p className="text-gray-400">Everything you need to know about our escort services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { q: 'How do I book an escort?', a: 'Fill out our Book Now form or call us directly at +91-9038976363. Our team confirms your booking within 30 minutes.' },
              { q: 'Are your escorts verified?', a: 'Yes, all escorts are thoroughly verified with background checks and personal interviews before being listed.' },
              { q: 'What is the pricing?', a: 'Prices range from ₹8,000 to ₹50,000 based on the type of companion, duration, and service required.' },
              { q: 'Do you offer incall and outcall?', a: 'Yes, both incall and outcall services are available. Please specify your preference when booking.' },
              { q: 'How quickly can an escort reach me?', a: 'Within Mumbai, escorts typically arrive within 25–30 minutes. We provide an ETA at the time of confirmation.' },
              { q: 'Is my information kept confidential?', a: 'Absolutely. All personal details are strictly confidential and never shared with any third party.' },
              { q: 'Which cities do you serve?', a: 'We serve Mumbai, Pune, Delhi, Bangalore, Jaipur, Lucknow, Indore, Bhopal, Goa, Ahmedabad, and 100+ more cities.' },
              { q: 'What payment methods do you accept?', a: 'We accept cash payments only, made at the time of the booking. No advance transfer required.' },
              { q: 'Can I choose a specific escort?', a: 'Yes, browse our gallery and select your preferred escort. We arrange based on availability.' },
              { q: 'Are there age restrictions?', a: 'All escorts are 18+ and clients must also be at least 18 years old. We strictly follow all applicable laws.' },
              { q: 'What if I need to cancel?', a: 'Inform us as early as possible. Cancellations with less than 2 hours notice may incur a small fee.' },
              { q: 'Do you operate 24/7?', a: 'Yes, our services are available round the clock, every day of the year including late nights.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-primary/30 rounded-xl p-5 transition-all duration-200">
                <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-yellow-900/15" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-600/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="label-eyebrow">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">Ready to Book Your Escort?</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Contact us now for premium, discreet escort services across Mumbai and India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-now"
              className="px-10 py-4 bg-gradient-to-r from-primary to-rose-700 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:shadow-[0_0_50px_rgba(200,16,46,0.65)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
            <a
              href="tel:+919038976363"
              className="px-10 py-4 border-2 border-yellow-500/50 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
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
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '5000',
              bestRating: '5',
              worstRating: '1',
            },
            review: testimonials.map((t) => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: t.name },
              reviewRating: { '@type': 'Rating', ratingValue: String(t.rating), bestRating: '5' },
              reviewBody: t.text,
            })),
          }),
        }}
      />
    </>
  )
}
