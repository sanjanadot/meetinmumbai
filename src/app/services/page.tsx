import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, Star, Clock, Shield, Award, Users, Zap, MapPin } from 'lucide-react'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Our Escort Services | Premium Escort Services Across India',
  description: 'Explore our wide range of premium escort services — actress, model, Russian, VIP, air hostess, independent and more. Verified companions available 24/7 across India.',
  openGraph: {
    title: 'Our Escort Services — Meet in Mumbai',
    description: 'Browse all 24 premium escort categories. Verified, discreet, available 24/7 across India.',
    url: 'https://meetinmumbai.com/services',
  },
  alternates: { canonical: 'https://meetinmumbai.com/services' },
}

const stats = [
  { value: '5000+', label: 'Happy Clients' },
  { value: '500+', label: 'Premium Escorts' },
  { value: '24 Categories', label: 'Service Types' },
  { value: '24/7', label: 'Availability' },
]

const whyUs = [
  { icon: Shield, title: 'Verified & Safe', desc: '100% verified escorts with privacy guaranteed for all clients.' },
  { icon: Star, title: 'Premium Quality', desc: 'Only the best high-profile models selected for your pleasure.' },
  { icon: Clock, title: '24/7 Available', desc: 'Available round the clock for incall and outcall services.' },
  { icon: CheckCircle, title: 'Discreet Service', desc: 'Complete discretion and confidentiality is our top priority.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-center overflow-hidden bg-black">
        <Image
          src="/images/escorts-banner.webp"
          alt="Premium Escort Services"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-yellow-600/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Services</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 text-sm font-semibold mb-6">
            <Star size={14} className="fill-yellow-400" />
            India&apos;s #1 Premium Escort Service
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 font-serif text-white leading-tight">
            Our Escort Services<br />
            <span className="bg-gradient-to-r from-primary via-rose-400 to-yellow-400 bg-clip-text text-transparent">
              Premium &amp; Verified
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Browse all 24 escort categories — actress, model, Russian, VIP, air hostess, college girls, independent and more. All companions personally verified, available 24/7 across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book-now" className="px-9 py-4 bg-gradient-to-r from-primary to-rose-700 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(200,16,46,0.45)] hover:shadow-[0_0_50px_rgba(200,16,46,0.65)] transition-all duration-300 hover:-translate-y-0.5">
              Book Now →
            </Link>
            <a href="tel:+919038976363" className="px-9 py-4 border-2 border-white/25 text-white font-bold text-lg rounded-xl hover:border-yellow-400/60 hover:text-yellow-400 transition-all duration-300 flex items-center gap-2">
              <Phone size={20} />
              +91-9038976363
            </a>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────── */}
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

      {/* ─── SERVICES GRID ────────────────────── */}
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

      {/* ─── WHY CHOOSE US ────────────────────── */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
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
              <div key={item.title} className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 overflow-hidden">
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

      {/* ─── OUR LOCATIONS ────────────────────── */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Our Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Escorts Available Across India</h2>
            <div className="section-divider" />
            <p className="text-gray-400">Premium escort services in all major cities. Select your city to book instantly.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
            {([
              { name: 'Mumbai', slug: 'mumbai', image: '/images/mumbai/escorts-in-mumbai.webp' },
              { name: 'Delhi', slug: 'delhi', image: '/images/delhi/escorts-in-delhi.webp' },
              { name: 'Bangalore', slug: 'bangalore', image: '/images/bangalore/escorts-in-bangalore.webp' },
              { name: 'Pune', slug: 'pune', image: '/images/pune/escorts-in-pune.webp' },
              { name: 'Jaipur', slug: 'jaipur', image: '/images/jaipur/escorts-in-jaipur.webp' },
              { name: 'Lucknow', slug: 'lucknow', image: '/images/lucknow/escorts-in-lucknow.webp' },
              { name: 'Indore', slug: 'indore', image: '/images/indore/escorts-in-indore.webp' },
              { name: 'Bhopal', slug: 'bhopal', image: '/images/bhopal/escorts-in-bhopal.webp' },
              { name: 'Goa', slug: 'goa', image: '/images/goa/escorts-in-goa.webp' },
              { name: 'Ahmedabad', slug: 'ahmedabad', image: '/images/ahmedabad/escorts-in-ahmedabad.webp' },
              { name: 'Surat', slug: 'surat', image: '/images/surat/escorts-in-surat.webp' },
              { name: 'Vadodara', slug: 'vadodara', image: '/images/vadodara/escorts-in-vadodara.webp' },
              { name: 'Rajkot', slug: 'rajkot', image: '/images/rajkot/escorts-in-rajkot.webp' },
              { name: 'Nashik', slug: 'nashik', image: '/images/nashik/escorts-in-nashik.webp' },
              { name: 'Kanpur', slug: 'kanpur', image: '/images/kanpur/escorts-in-kanpur.webp' },
              { name: 'Varanasi', slug: 'varanasi', image: '/images/varanasi/escorts-in-varanasi.webp' },
            ] as { name: string; slug: string; image: string }[]).map((city) => (
              <Link
                key={city.slug}
                href={`/city/${city.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={city.image}
                    alt={`Escorts in ${city.name}`}
                    width={400}
                    height={560}
                    style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 640px) 50vw, 25vw"
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
              View all locations across India →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SEO CONTENT ──────────────────────── */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-eyebrow">About Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Premium Escort Services Across India</h2>
              <div className="section-divider" />
            </div>
            <div className="space-y-8 text-gray-400 leading-relaxed">
              <p>
                At Meet in Mumbai, we offer India&apos;s most comprehensive selection of premium escort services. With over 24 distinct categories and 500+ verified companions available across 100+ cities, we are the trusted name for discerning clients seeking high-class companionship. Whether you are looking for a sophisticated <strong className="text-white">model escort</strong>, an adventurous <strong className="text-white">Russian escort</strong>, or an elegant <strong className="text-white">VIP companion</strong>, our platform connects you with the perfect match within minutes.
              </p>

              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-3 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Our Complete Range of Escort Services
                </h3>
                <p>
                  Our escort service categories have been thoughtfully curated to meet the diverse preferences of our clientele. We offer <Link href="/actress-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Actress Escorts</Link>, <Link href="/model-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Model Escorts</Link>, <Link href="/air-hostess-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Air Hostess Escorts</Link>, <Link href="/vip-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">VIP Escorts</Link>, <Link href="/russian-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Russian Escorts</Link>, <Link href="/independent-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Independent Escorts</Link>, <Link href="/college-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">College Girl Escorts</Link>, <Link href="/housewife-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Housewife Escorts</Link>, <Link href="/hifi-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Hi-Fi Escorts</Link>, and many more. Every category features real, verified profiles with accurate photos and detailed descriptions so you always know exactly what to expect.
                </p>
                <p className="mt-3">
                  Each of our 24 service categories is updated regularly with fresh profiles, ensuring you always have access to new and exciting companions. Our in-house team manually reviews and approves every listing before it goes live, guaranteeing that every profile on our platform is genuine, current, and meets our strict quality standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-3 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Why Our Escort Services Stand Apart
                </h3>
                <p>
                  What separates Meet in Mumbai from other escort platforms is our uncompromising commitment to quality and client satisfaction. We do not aggregate unverified listings from random sources. Instead, we personally onboard every escort, conduct identity verification, and maintain ongoing quality checks. This rigorous approach means that when you book through us, you are guaranteed to meet a real, professional companion who matches their profile exactly — no surprises, no disappointments.
                </p>
                <p className="mt-3">
                  Our client support team is available 24 hours a day, 7 days a week to assist with bookings, answer queries, and ensure your experience is seamless from start to finish. From the moment you make first contact to the completion of your appointment, we are with you every step of the way. This level of attentive service is why over <strong className="text-white">5,000 clients</strong> across India choose us repeatedly for their companionship needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-3 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Incall and Outcall Services Across India
                </h3>
                <p>
                  We offer both <strong className="text-white">incall</strong> and <strong className="text-white">outcall</strong> escort services across all cities we operate in. For outcall bookings, your chosen companion will travel directly to your hotel, apartment, or private location — arriving within 25 to 30 minutes of booking confirmation in most cities. For incall services, you visit the companion at a comfortable, private location of her choice. Both options are available across all 24 service categories.
                </p>
                <p className="mt-3">
                  We currently serve clients in Mumbai, Delhi, Bangalore, Pune, Jaipur, Lucknow, Indore, Bhopal, Goa, Ahmedabad, Surat, Vadodara, Rajkot, Nashik, Kanpur, Varanasi, and 100+ additional cities and towns. If you are in a city not listed here, call us directly — we can often arrange services in smaller cities with advance notice of 2–3 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-3 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  How to Book Our Escort Services
                </h3>
                <p>
                  Booking is simple, fast, and completely discreet. Browse a service category above, choose your preferred companion, then either fill out our <Link href="/book-now" className="text-yellow-400 hover:text-yellow-300 transition-colors">online booking form</Link> or call us directly at <a href="tel:+919038976363" className="text-yellow-400 hover:text-yellow-300 transition-colors">+91-9038976363</a>. Let our team know your preference, location, date, and time — and we will confirm your appointment within 15 to 30 minutes.
                </p>
                <p className="mt-3">
                  There is <strong className="text-white">no advance online payment required</strong>. All payments are made in cash at the time of the booking, after you have met the companion and are fully satisfied with the introduction. Our transparent pricing starts from ₹8,000 and goes up to ₹50,000 depending on the category, duration, and specific service requested. Our team will give you an exact quote during the booking call.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-3 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Privacy and Safety Guaranteed
                </h3>
                <p>
                  We take the safety and privacy of every client with absolute seriousness. All client information — including your name, contact details, and booking history — is kept strictly confidential and never shared with any third party. Our communication channels are discreet, and we respect your need for anonymity at every stage of the process.
                </p>
                <p className="mt-3">
                  Every escort in our network has been personally verified by our team through ID checks and in-person interviews. We work exclusively with consenting adults who choose companionship as their profession. This ensures that every interaction is safe, respectful, and professional for both parties. Our long-standing reputation of over a decade in the industry is built entirely on this foundation of trust, integrity, and consistent excellence — and we intend to keep it that way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── E-E-A-T ──────────────────────────── */}
      <section className="py-14 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-yellow-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Why Trust Us</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mt-3 mb-3">India&apos;s Most Trusted Escort Agency</h2>
            <div className="section-divider" />
            <p className="text-gray-400 text-sm">Backed by a decade of experience, thousands of satisfied clients, and an uncompromising standard of quality and privacy.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Award, value: '10+ Years', label: 'Experience', desc: 'A decade of premium escort services across India' },
              { icon: Users, value: '5,000+', label: 'Happy Clients', desc: 'Thousands of verified, satisfied clients across India' },
              { icon: CheckCircle, value: '500+', label: 'Verified Escorts', desc: 'Hand-picked companions personally vetted by our team' },
              { icon: Shield, value: '100%', label: 'Confidential', desc: 'Your identity is never shared, disclosed, or stored' },
              { icon: Zap, value: '25 Min', label: 'Fast Arrival', desc: 'Escorts reach most locations within 25 minutes' },
              { icon: Star, value: '4.9 / 5', label: 'Client Rating', desc: 'Consistently top-rated escort service in India' },
              { icon: Clock, value: '24 / 7', label: 'Always Available', desc: 'Round the clock service, every day of the year' },
              { icon: MapPin, value: '100+', label: 'Cities Covered', desc: 'Serving Mumbai, Delhi, Bangalore, Pune and 100+ cities' },
            ].map(({ icon: Icon, value, label, desc }, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-yellow-500/30 rounded-2xl p-5 text-center transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-rose-900/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="text-lg font-bold font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">{value}</div>
                <div className="text-white text-sm font-semibold mt-1 mb-1.5">{label}</div>
                <p className="text-gray-500 text-xs leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────── */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/8 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Frequently Asked Questions</h2>
            <div className="section-divider" />
            <p className="text-gray-400">Everything you need to know about our premium escort services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {[
              { q: 'How do I book an escort?', a: 'Fill out our Book Now form or call us at +91-9038976363. Our team confirms your booking within 30 minutes.' },
              { q: 'Are your escorts verified?', a: 'Yes, all escorts undergo thorough background checks and personal interviews before being listed on our platform.' },
              { q: 'What is the pricing?', a: 'Prices range from ₹8,000 to ₹50,000 based on the companion type, duration, and service required.' },
              { q: 'Do you offer incall and outcall?', a: 'Yes, both incall and outcall services are available. Please specify your preference when booking.' },
              { q: 'How quickly can an escort reach me?', a: 'Escorts typically arrive within 25–30 minutes. ETA is confirmed at the time of booking.' },
              { q: 'Is my information kept confidential?', a: 'Absolutely. All personal details are kept strictly confidential and never shared with any third party.' },
              { q: 'Which cities do you serve?', a: 'We serve Mumbai, Pune, Delhi, Bangalore, Jaipur, Lucknow, Indore, Bhopal, Goa, Ahmedabad, and 100+ cities.' },
              { q: 'What payment methods do you accept?', a: 'Cash only, paid at the time of the booking. No advance payment or bank transfer required.' },
              { q: 'Can I choose a specific escort?', a: 'Yes, browse our gallery and select your preferred companion. We confirm based on availability.' },
              { q: 'Are there age restrictions?', a: 'All escorts and clients must be at least 18 years old. We strictly adhere to all applicable laws.' },
              { q: 'What if I need to cancel?', a: 'Inform us as early as possible. Cancellations under 2 hours notice may incur a nominal inconvenience fee.' },
              { q: 'Do you operate 24/7?', a: 'Yes, our services are available round the clock, every day of the year including late nights and holidays.' },
            ].map((faq, i) => (
              <div key={i} className="group flex gap-4 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/8 rounded-2xl p-5 transition-all duration-200">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-rose-700 flex items-center justify-center text-white text-xs font-bold font-serif mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5 text-sm sm:text-base group-hover:text-yellow-400 transition-colors">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="py-20 relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-yellow-900/15" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-600/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="label-eyebrow">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">Ready to Book Your Escort?</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Contact us now for premium, discreet escort services across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now" className="px-10 py-4 bg-gradient-to-r from-primary to-rose-700 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:shadow-[0_0_50px_rgba(200,16,46,0.65)] transition-all duration-300 hover:-translate-y-0.5">
              Book Now
            </Link>
            <a href="tel:+919038976363" className="px-10 py-4 border-2 border-yellow-500/50 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone size={20} />
              +91-9038976363
            </a>
          </div>
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


