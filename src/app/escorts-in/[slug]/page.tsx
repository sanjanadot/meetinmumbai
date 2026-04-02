import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getLocationBySlug, getAllSlugs, locations } from '@/data/locations'
import { services } from '@/data/services'
import { Phone, CheckCircle, MapPin, Star, ArrowRight, Shield, Clock, Award, Users, Zap } from 'lucide-react'

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

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.slug)
  if (!location) notFound()

  const relatedLocations = locations
    .filter((l) => l.state === location.state && l.slug !== params.slug)
    .slice(0, 12)

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="bg-gray-950 relative overflow-hidden pt-10 pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-yellow-900/5" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/location" className="hover:text-yellow-400 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-gray-300">Escorts in {location.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            {/* Left — text */}
            <div className="pb-12">
              <span className="label-eyebrow">{location.city} · {location.state}</span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mt-3 mb-3 leading-tight">
                Premium Escorts<br />in {location.name}
              </h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mb-5" />
              <p className="text-gray-400 mb-4 leading-relaxed">
                Discover India&apos;s most sought-after <strong className="text-white">escorts in {location.name}</strong> — verified, discreet, and available 24/7. Whether you are visiting for business or pleasure, our VIP companions deliver an unmatched experience tailored to your desires.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                From model escorts and air hostesses to independent and celebrity companions, every profile on our platform is personally screened. Enjoy total privacy with{' '}
                <strong className="text-white">call girls in {location.name}</strong> who represent the pinnacle of elegance and sophistication.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '500+', label: 'Verified Escorts' },
                  { value: '24/7', label: 'Available' },
                  { value: '25 Min', label: 'Arrival Time' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <p className="text-xl font-bold text-yellow-400">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now" className="btn-primary text-center">
                  Book Escort in {location.name}
                </Link>
                <a
                  href="tel:+919038976363"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-yellow-500/50 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-500/10 transition-colors"
                >
                  <Phone size={18} />
                  +91-9038976363
                </a>
              </div>
            </div>

            {/* Right — portrait image (full, uncropped) */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-6 bg-gradient-to-t from-primary/20 to-yellow-500/10 rounded-3xl blur-3xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs w-full">
                <Image
                  src={location.image || '/images/escorts-banner.webp'}
                  alt={`Escorts in ${location.name}`}
                  width={400}
                  height={560}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                  className="block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="label-eyebrow">Explore</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-2">
              Services Available in {location.name}
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Browse our full range of premium escort categories — each profile verified and ready to meet you in {location.name}.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-gray-900 hover:ring-2 hover:ring-primary/60 transition-all duration-300 shadow-lg"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={560}
                  style={{ width: '100%', height: 'auto' }}
                  className="block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base leading-tight group-hover:text-yellow-400 transition-colors">
                    {service.shortName}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="label-eyebrow">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-2">
              Why Book Escorts in {location.name} With Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Shield size={28} className="text-primary" />,
                title: '100% Verified',
                desc: `Every escort in ${location.name} is personally verified — real photos, real profiles, zero fake listings.`,
              },
              {
                icon: <Star size={28} className="text-yellow-400" />,
                title: 'Premium Quality',
                desc: `We hand-select only the best companions in ${location.name} — models, celebrities, air hostesses & more.`,
              },
              {
                icon: <Clock size={28} className="text-primary" />,
                title: '24/7 Available',
                desc: `Book escorts in ${location.name} round the clock. Day or night, our team is always ready to assist you.`,
              },
              {
                icon: <CheckCircle size={28} className="text-yellow-400" />,
                title: 'Fully Discreet',
                desc: `Your privacy is our top priority. All bookings and client information are kept strictly confidential.`,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/5 border border-white/10 hover:border-primary/40 rounded-2xl p-6 flex flex-col gap-4 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-E-A-T ── */}
      <section className="py-14 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-yellow-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Why Trust Us</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mt-3 mb-3">
              {location.city}&apos;s Most Trusted Escort Agency
            </h2>
            <div className="section-divider" />
            <p className="text-gray-400 text-sm">
              Backed by a decade of experience, thousands of satisfied clients, and an uncompromising standard of quality and privacy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Award, value: '10+ Years', label: 'Experience', desc: 'A decade of premium escort services across India' },
              { icon: Users, value: '5,000+', label: 'Happy Clients', desc: 'Thousands of verified, satisfied clients across India' },
              { icon: CheckCircle, value: '500+', label: 'Verified Escorts', desc: 'Hand-picked companions personally vetted by our team' },
              { icon: Shield, value: '100%', label: 'Confidential', desc: 'Your identity is never shared, disclosed, or stored' },
              { icon: Zap, value: '30 Min', label: 'Fast Arrival', desc: `Escorts reach ${location.name} within 30 minutes` },
              { icon: Star, value: '4.9 / 5', label: 'Client Rating', desc: 'Consistently top-rated escort service in India' },
              { icon: Clock, value: '24 / 7', label: 'Always Available', desc: 'Round the clock service, every day of the year' },
              { icon: MapPin, value: '100+', label: 'Cities Covered', desc: 'Serving Mumbai, Delhi, Bangalore, Pune and 100+ cities' },
            ].map(({ icon: Icon, value, label, desc }, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 hover:border-yellow-500/30 rounded-2xl p-5 text-center transition-all duration-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-rose-900/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="text-lg font-bold font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-white text-sm font-semibold mt-1 mb-1.5">{label}</div>
                <p className="text-gray-500 text-xs leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR LOCATIONS ── */}
      <section className="py-16 bg-gray-900 relative">
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
            ] as { name: string; slug: string; image: string }[]).map((c) => (
              <Link
                key={c.slug}
                href={`/city/${c.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`Escorts in ${c.name}`}
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
                    {c.name}
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

      {/* ── SEO CONTENT ── */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12 text-gray-400 leading-relaxed">

            {/* Section 1 — Intro */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h2 className="text-2xl font-bold font-serif text-white">
                  Escorts in {location.name} — Premium Companionship You Can Trust
                </h2>
              </div>
              <p className="mb-4">
                {location.name} is a vibrant and fast-growing locality in {location.city}, {location.state}, and it has become one of the most popular destinations for premium escort services in India. Whether you are a first-time visitor or a regular resident, finding the right companionship here used to be a challenge — until now. Our platform brings together the most elegant, educated, and entertaining <strong className="text-white">escorts in {location.name}</strong>, making it effortless to find a companion who matches your exact preferences.
              </p>
              <p className="mb-4">
                We are not just another online listing platform. We are a full-service agency with years of experience connecting discerning clients across India with top-tier companions. Our database of verified <strong className="text-white">call girls in {location.name}</strong> includes models, college graduates, air hostesses, housewives, and celebrity look-alikes — all screened for authenticity and professionalism. Every profile comes with accurate photos, detailed descriptions, and availability schedules so you always know exactly who you are booking.
              </p>
              <p>
                What sets us apart is our unwavering commitment to client satisfaction and safety. Every interaction — from first inquiry to final confirmation — is handled by our trained customer care team with complete discretion. Your privacy is protected at every step, from the initial call to the moment your companion arrives at your preferred location in {location.name}.
              </p>
            </div>

            {/* Section 2 — Services */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Our Escort Services in {location.name}
                </h3>
              </div>
              <p className="mb-4">
                We provide one of the widest selections of escort categories available anywhere in {location.city}. Whether you are looking for a local companion or someone exotic and international, our roster has you covered. Here is a glimpse of what is available for clients in {location.name}:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {[
                  ['Model Escorts', '/model-escorts'],
                  ['VIP Escorts', '/vip-escorts'],
                  ['Russian Escorts', '/russian-escorts'],
                  ['Air Hostess Escorts', '/air-hostess-escorts'],
                  ['College Girl Escorts', '/college-escorts'],
                  ['Independent Escorts', '/independent-escorts'],
                  ['Housewife Escorts', '/housewife-escorts'],
                  ['North Indian Escorts', '/north-indian-escorts'],
                  ['South Indian Escorts', '/south-indian-escorts'],
                  ['Bengali Escorts', '/bengali-escorts'],
                  ['Actress Escorts', '/actress-escorts'],
                  ['Hi-Fi Escorts', '/hifi-escorts'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                      <ArrowRight size={13} className="text-primary shrink-0" />
                      {label} in {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p>
                Each category is continuously updated with fresh profiles. We work only with companions who maintain high grooming standards, speak fluent English or Hindi, and understand client etiquette. Whether you need someone for a business dinner in {location.name}, a hotel weekend, or a late-night social event, we have the perfect match waiting for your call.
              </p>
            </div>

            {/* Section 3 — Areas */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Service Coverage Across {location.city}
                </h3>
              </div>
              <p className="mb-4">
                Our escort services are not limited to {location.name} alone. We cover the entire {location.city} metropolitan area and neighbouring regions in {location.state}. If you are staying at a hotel, a guest house, or your own residence anywhere in {location.city}, our companions can reach you within 25 to 30 minutes of booking confirmation. This rapid delivery time is possible because we maintain a large pool of available escorts stationed across key areas of the city.
              </p>
              <p className="mb-4">
                Clients frequently book our services from prominent hotels, business parks, and residential neighbourhoods in and around {location.name}. We cover five-star hotel zones, airport corridors, IT hubs, and upscale residential areas without any additional travel charges. Our companions are familiar with local geography and always arrive on time, professionally dressed, and ready to make your evening memorable.
              </p>
              <p>
                No matter where you are in {location.state} — whether in {location.name}, a nearby suburb, or a city centre hotel — our service team will find you the best available companion and arrange a seamless, stress-free meeting. We also offer inter-city bookings for clients who want a companion to accompany them on travel from {location.name} to other major Indian cities.
              </p>
            </div>

            {/* Section 4 — Booking */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  How to Book Escorts in {location.name}
                </h3>
              </div>
              <p className="mb-4">
                Booking a companion in {location.name} is fast, simple, and completely confidential. You can initiate a booking through our online form at{' '}
                <Link href="/book-now" className="text-yellow-400 hover:underline">Book Now</Link> or call us directly at <a href="tel:+919038976363" className="text-yellow-400 hover:underline">+91-9038976363</a>. Our booking agents are available around the clock and typically confirm your appointment within 15 to 30 minutes. For same-day bookings, we recommend calling rather than filling the form to reduce any wait time.
              </p>
              <p className="mb-4">
                Once you contact us, simply tell our representative your preferred profile type, date and time, location in {location.name}, and any special preferences you may have. We will then match you with the most suitable available companion from our roster and share a profile preview for your approval. There is no pressure — if the first suggestion does not feel right, we will offer alternatives until you are completely satisfied.
              </p>
              <p>
                Our pricing for <strong className="text-white">escort services in {location.name}</strong> is transparent and competitive. We offer hourly, multi-hour, and overnight packages with no hidden fees. Payment is collected only after your booking is confirmed, and we accept multiple secure payment methods. The exact pricing is discussed privately with our team during the booking call.
              </p>
            </div>

            {/* Section 5 — Who Uses */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Who Books Escort Services in {location.name}?
                </h3>
              </div>
              <p className="mb-4">
                Our client base in {location.name} is diverse. Business executives traveling through {location.city} frequently use our services to unwind after long corporate meetings or conferences. Tourists visiting {location.name} for leisure often seek a knowledgeable local companion who can make their stay more enjoyable. Local professionals, entrepreneurs, and high-net-worth individuals also regularly book our VIP escort services for private social events and personal entertainment.
              </p>
              <p className="mb-4">
                We serve clients from all walks of life without judgment. Whether you are in your 20s or your 60s, whether you are booking for the first time or returning for the tenth visit, we treat every client with the same level of professionalism, warmth, and respect. Our escorts in {location.name} are trained to adapt to a wide range of social settings — from a quiet dinner date to a lively private party.
              </p>
              <p>
                Many of our long-term clients in {location.name} mention that what keeps them returning is not just the quality of our escorts but the overall experience — the prompt communication, the reliable delivery, the genuine warmth of our companions, and the absolute peace of mind that comes from knowing that their privacy is always protected. We take immense pride in these repeat relationships and strive to maintain them by continuously improving the quality of our service.
              </p>
            </div>

            {/* Section 6 — Safety */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Safety, Privacy & Discretion in {location.name}
                </h3>
              </div>
              <p className="mb-4">
                Safety is non-negotiable at our agency. Every escort in our network undergoes a multi-step verification process before they are listed on our platform. This includes identity verification, health checks, and a personal interview by our management team. We maintain strict quality control and regularly review escort profiles to ensure they meet our standards. Clients can book with full confidence knowing that they are meeting a genuine, verified companion.
              </p>
              <p className="mb-4">
                We understand that many clients in {location.name} have concerns about privacy — especially those who are well-known in their professional or social circles. Our agency has robust data protection policies in place. We never share client information with third parties, never store unnecessary personal data, and train our team to handle all client interactions with the highest level of confidentiality. Your name, contact details, and booking history are never disclosed.
              </p>
              <p>
                Beyond our internal safeguards, we also educate our clients on how to ensure a safe meeting experience. We recommend booking through official channels, meeting in secure private locations such as reputed hotels in {location.name}, and always using our verified contact numbers. If at any point you feel uncomfortable or have a concern, our 24/7 support line is always available to assist you. Your safety and peace of mind are our ultimate commitments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/8 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Frequently Asked Questions</h2>
            <div className="section-divider" />
            <p className="text-gray-400">Everything you need to know about escort services in {location.name}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {[
              { q: `How do I book an escort in ${location.name}?`, a: `Fill out our Book Now form or call us at +91-9038976363. Our team confirms your ${location.name} booking within 30 minutes.` },
              { q: 'Are your escorts verified?', a: 'Yes, all escorts undergo thorough background checks and personal interviews before being listed on our platform.' },
              { q: 'What is the pricing?', a: 'Prices range from ₹8,000 to ₹50,000 based on the companion type, duration, and service required.' },
              { q: 'Do you offer incall and outcall?', a: `Yes, both incall and outcall services are available in ${location.name}. Please specify your preference when booking.` },
              { q: `How quickly can an escort reach me in ${location.name}?`, a: `Escorts typically arrive within 25–30 minutes in ${location.name}. ETA is confirmed at the time of booking.` },
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

      {/* ── LOCATION INFO STRIP ── */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-wrap items-center gap-4">
            <MapPin size={20} className="text-primary shrink-0" />
            <div>
              <p className="font-medium text-white">Service Area</p>
              <p className="text-gray-400 text-sm">
                {location.name}, {location.city}, {location.state}, India {location.postalCode}
              </p>
            </div>
            <div className="ml-auto">
              <Link href="/book-now" className="btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED LOCATIONS ── */}
      {relatedLocations.length > 0 && (
        <section className="py-14 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <span className="label-eyebrow">Nearby</span>
              <h2 className="text-2xl font-bold font-serif text-white mt-2">
                Also Available in {location.state}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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

      {/* ── FINAL CTA ── */}
      <section className="py-16 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-yellow-900/10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">
            Book Escorts in {location.name} Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Call us or fill the booking form. Our team confirms your appointment in under 30 minutes with total discretion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-now" className="btn-primary">Book Online</Link>
            <a
              href="tel:+919038976363"
              className="px-8 py-3 border-2 border-yellow-500/50 text-yellow-400 font-bold rounded-xl hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              +91-9038976363
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
