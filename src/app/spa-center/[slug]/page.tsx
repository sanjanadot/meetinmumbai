import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getLocationBySlug, getAllSlugs, locations } from '@/data/locations'
import { getCityBySlug, cities } from '@/data/cities'
import { services } from '@/data/services'
import { Phone, CheckCircle, MapPin, Star, ArrowRight, Shield, Clock, Award, Users, Zap } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const citySlugs = cities.map((c) => ({ slug: c.slug }))
  const locationSlugs = getAllSlugs().map((slug) => ({ slug }))
  return [...citySlugs, ...locationSlugs]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.slug)
  const location = city ? undefined : getLocationBySlug(params.slug)
  if (!city && !location) return {}

  const displayName = city ? city.name : location!.name
  const displayState = city ? city.state : location!.state
  const heroImage = city ? city.heroImage : (location?.image ?? '/images/mumbai/escorts-in-mumbai.webp')

  const title = `Spa Center in ${displayName} | Premium Body Massage & Spa Services`
  const description = `Best spa center in ${displayName}. Book verified, professional massage therapists for body massage, relaxation & wellness services in ${displayName}. 24/7 available, discreet & private.`
  const url = `https://meetinmumbai.com/spa-center/${params.slug}`

  return {
    title,
    description,
    keywords: [
      `spa center in ${displayName}`,
      `body massage ${displayName}`,
      `massage in ${displayName}`,
      `${displayName} spa services`,
      `spa therapist ${displayName}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: `https://meetinmumbai.com${heroImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    ...(location
      ? {
          other: {
            'geo.region': location.region,
            'geo.placename': `${location.name}, ${location.city}`,
            'geo.position': `${location.lat};${location.lng}`,
            ICBM: `${location.lat}, ${location.lng}`,
          },
        }
      : {}),
  }
}

export default function SpaCenterPage({ params }: Props) {
  const city = getCityBySlug(params.slug)
  const location = city ? undefined : getLocationBySlug(params.slug)
  if (!city && !location) notFound()

  const displayName = city ? city.name : location!.name
  const displayState = city ? city.state : location!.state
  const displayCity = city ? city.name : location!.city
  const heroImage = city ? city.heroImage : (location?.image ?? '/images/mumbai/escorts-in-mumbai.webp')
  const postalCode = location?.postalCode ?? ''
  const lat = location?.lat ?? '20.5937'
  const lng = location?.lng ?? '78.9629'

  const subLocations = city
    ? locations.filter((l) => l.city === city.cityKey && l.image).slice(0, 16)
    : locations.filter((l) => l.city === location!.city && l.image && l.slug !== params.slug).slice(0, 16)

  const relatedLocations = !city
    ? locations.filter((l) => l.state === location!.state && l.slug !== params.slug).slice(0, 12)
    : []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://meetinmumbai.com/spa-center/${params.slug}`,
    name: `Spa Center in ${displayName}`,
    alternateName: [`Body Massage in ${displayName}`, `${displayName} Spa Service`],
    url: `https://meetinmumbai.com/spa-center/${params.slug}`,
    description: `Premium spa center in ${displayName} offering professional massage and wellness services. Available 24/7.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: displayName,
      addressRegion: displayState,
      addressCountry: 'IN',
      ...(postalCode ? { postalCode } : {}),
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng,
    },
    telephone: '+919038976363',
    priceRange: '₹₹₹',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
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
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/location" className="hover:text-yellow-400 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-gray-300">{displayName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-end">
            {/* Left content */}
            <div className="pb-10 lg:pb-16">
              <span className="label-eyebrow mb-3 inline-block">Spa Center in {displayName}</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight mb-4">
                Premium Spa &amp; Massage
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-400 leading-tight py-1">
                  in {displayName}
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Relax, rejuvenate, and unwind with our premium spa and massage services in {displayName}. Professional, discreet, and available 24/7.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { value: '500+', label: 'Spa Therapists' },
                  { value: '24/7', label: 'Availability' },
                  { value: '30 Min', label: 'Arrival Time' },
                  { value: '100%', label: 'Discreet' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 font-serif">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-now" className="btn-primary">Book Spa Session</Link>
                <a
                  href="tel:+919038976363"
                  className="px-6 py-3 border-2 border-yellow-500/40 text-yellow-400 font-bold rounded-xl hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={16} />
                  +91-9038976363
                </a>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="flex justify-end items-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src={heroImage}
                  alt={`Spa Center in ${displayName}`}
                  width={400}
                  height={560}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                  className="rounded-t-3xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
              Spa &amp; Massage Services in {displayName}
            </h2>
            <div className="section-divider" />
            <p className="text-gray-400">Choose from our wide range of relaxation and wellness services tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}`}
                className="group flex flex-col items-center gap-2 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/40 transition-all">
                  <Image
                    src={svc.image}
                    alt={svc.name}
                    width={48}
                    height={48}
                    style={{ width: '100%', height: 'auto' }}
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-medium text-gray-300 group-hover:text-yellow-400 text-center transition-colors leading-tight">
                  {svc.shortName}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/6 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
              Why Our Spa in {displayName}?
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <CheckCircle size={24} className="text-yellow-400" />, title: 'Verified Therapists', desc: 'All spa therapists are personally verified, trained, and professional.' },
              { icon: <Shield size={24} className="text-yellow-400" />, title: '100% Discreet', desc: 'Your privacy is our top priority. Completely confidential bookings.' },
              { icon: <Clock size={24} className="text-yellow-400" />, title: '24/7 Available', desc: 'Round-the-clock availability. Book any time — day or night.' },
              { icon: <Star size={24} className="text-yellow-400" />, title: 'Premium Experience', desc: 'Luxury spa services that cater to every relaxation and wellness need.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/8 rounded-2xl p-6 transition-all duration-200 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                <h3 className="font-bold text-white mb-2 font-serif">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / E-E-A-T ── */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
              Trusted Spa Center in {displayName}
            </h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { icon: <Award size={20} />, title: '5+ Years Experience', desc: 'Serving clients across India' },
              { icon: <Users size={20} />, title: '10,000+ Clients', desc: 'Happy clients across India' },
              { icon: <CheckCircle size={20} />, title: 'Verified Profiles', desc: 'Every therapist is screened' },
              { icon: <Shield size={20} />, title: 'Privacy Protected', desc: 'Zero data sharing policy' },
              { icon: <Star size={20} />, title: '4.9★ Rating', desc: 'Top-rated spa service' },
              { icon: <Clock size={20} />, title: 'Express Arrival', desc: 'Therapist in 25–30 min' },
              { icon: <Zap size={20} />, title: 'Instant Booking', desc: 'Confirmed in 15 minutes' },
              { icon: <MapPin size={20} />, title: 'Pan India Service', desc: 'Available in 100+ cities' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/8 rounded-xl p-4 transition-all duration-200 flex gap-3 items-start"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-rose-700 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-0.5">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY AREAS ── */}
      {subLocations.length > 0 && (
        <section className="py-16 bg-gray-950 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="label-eyebrow">Nearby Areas</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
                Spa Centers in {displayCity}
              </h2>
              <div className="section-divider" />
              <p className="text-gray-400">Explore our premium spa services in nearby areas across {displayCity}.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {subLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/spa-center/${loc.slug}`}
                  className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={loc.image!}
                      alt={`Spa Center in ${loc.name}`}
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
                      Spa Center in {loc.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── OUR SPA LOCATIONS ── */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Our Spa Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">Spa Centers Across India</h2>
            <div className="section-divider" />
            <p className="text-gray-400">Premium spa and massage services across all major Indian cities.</p>
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
                href={`/spa-center/${c.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`Spa Center in ${c.name}`}
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
                  Spa Center in {displayName} — Premium Massage You Can Trust
                </h2>
              </div>
              <p className="mb-4">
                {displayName} is a vibrant and thriving area in {displayState}, India, and has become one of the most sought-after destinations for premium spa and massage services. Whether you are a visitor, a business traveller, or a local resident, our professional spa center in {displayName} brings world-class relaxation directly to your doorstep. Our platform connects you with the finest, most experienced <strong className="text-white">spa therapists in {displayName}</strong>, making it effortless to book a therapist who matches your exact wellness needs.
              </p>
              <p className="mb-4">
                We are a full-service spa booking platform with years of experience helping clients across India access top-tier massage and wellness services. Our network of verified <strong className="text-white">spa therapists in {displayName}</strong> includes trained massage professionals, holistic wellness practitioners, and body spa specialists — all thoroughly screened for authenticity and professional conduct. Every profile comes with accurate service descriptions and availability schedules so you always know exactly who you are booking.
              </p>
              <p>
                What sets our spa center apart is our unwavering commitment to client satisfaction and privacy. Every interaction — from your first inquiry to the therapist&apos;s arrival — is managed by our dedicated care team with complete discretion. Your privacy is protected at every step, from the initial call to the moment your therapist arrives at your location in {displayName}.
              </p>
            </div>

            {/* Section 2 — Services */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Our Spa Services in {displayName}
                </h3>
              </div>
              <p className="mb-4">
                We provide one of the widest selections of massage and spa categories available anywhere in {displayState}. Whether you are looking for a gentle relaxation session or a deep therapeutic experience, our roster has you covered. Here is a glimpse of what our spa center offers clients in {displayName}:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {[
                  'Body to Body Massage',
                  'Swedish Massage',
                  'Deep Tissue Massage',
                  'Hot Stone Massage',
                  'Balinese Massage',
                  'Thai Massage',
                  'Aromatherapy Massage',
                  'Happy Ending Massage',
                  'Nuru Massage',
                  'Sensual Massage',
                  'Full Body Massage',
                  'Couples Spa Package',
                ].map((label) => (
                  <li key={label}>
                    <Link href="/book-now" className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                      <ArrowRight size={13} className="text-primary shrink-0" />
                      {label} in {displayName}
                    </Link>
                  </li>
                ))}
              </ul>
              <p>
                Each category is continuously updated with fresh therapist profiles. We work only with professionals who maintain high hygiene standards, are trained in their respective massage techniques, and understand client comfort. Whether you need a relaxation session after a long day in {displayName}, stress relief at your hotel, or a couples spa package, we have the perfect therapist waiting.
              </p>
            </div>

            {/* Section 3 — Coverage */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Spa Coverage Across {displayCity}
                </h3>
              </div>
              <p className="mb-4">
                Our spa services are not limited to {displayName} alone. We cover the entire {displayCity} metropolitan area and neighbouring regions in {displayState}. If you are staying at a hotel, a guesthouse, or your own residence anywhere in {displayCity}, our therapists can reach you within 25 to 30 minutes of booking confirmation. This rapid delivery is possible because we maintain a large pool of available therapists positioned across key areas of the city.
              </p>
              <p className="mb-4">
                Clients frequently book our spa services from prominent hotels, business parks, and residential neighbourhoods in and around {displayName}. We cover five-star hotel zones, corporate corridors, and upscale residential areas without any additional travel charges. Our therapists are punctual, professionally presented, and arrive fully equipped with all necessary spa supplies.
              </p>
              <p>
                No matter where you are in {displayState} — whether in {displayName}, a nearby suburb, or a city centre hotel — our service team will match you with the best available therapist and arrange a seamless, stress-free session. We also offer inter-city bookings for clients who want a therapist to accompany them from {displayName} to other major Indian cities.
              </p>
            </div>

            {/* Section 4 — Booking */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  How to Book a Spa Session in {displayName}
                </h3>
              </div>
              <p className="mb-4">
                Booking a spa session in {displayName} is fast, simple, and completely confidential. Initiate a booking through our online form at{' '}
                <Link href="/book-now" className="text-yellow-400 hover:underline">Book Now</Link> or call us at{' '}
                <a href="tel:+919038976363" className="text-yellow-400 hover:underline">+91-9038976363</a>. Our booking agents are available around the clock and typically confirm your appointment within 15 to 30 minutes. For same-day bookings, we recommend calling directly to minimise any wait time.
              </p>
              <p className="mb-4">
                Once you contact us, simply tell our representative your preferred massage type, date and time, your location in {displayName}, and any special preferences. We will match you with the most suitable available therapist and share a profile preview for your approval. There is no pressure — if the first suggestion does not feel right, we will offer alternatives until you are completely satisfied.
              </p>
              <p>
                Our pricing for <strong className="text-white">spa services in {displayName}</strong> is transparent and competitive. We offer hourly, multi-hour, and full package deals with no hidden fees. Payment is collected only after your booking is confirmed, and we accept multiple secure payment methods.
              </p>
            </div>

            {/* Section 5 — Who Uses */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Who Books Spa Services in {displayName}?
                </h3>
              </div>
              <p className="mb-4">
                Our client base in {displayName} is diverse. Business executives travelling through {displayCity} frequently book spa sessions to unwind after long corporate meetings or conferences. Tourists visiting {displayName} for leisure seek relaxation and rejuvenation during their stay. Local professionals, entrepreneurs, and wellness-conscious individuals also regularly book our premium spa services for personal self-care.
              </p>
              <p className="mb-4">
                We serve clients from all walks of life without judgment. Whether you are booking for the first time or are a returning client, we treat every booking with the same level of professionalism, warmth, and respect. Our therapists in {displayName} are trained to adapt to a wide range of client needs — from a gentle relaxation massage to a deep tissue therapeutic session.
              </p>
              <p>
                Many of our long-term clients in {displayName} mention that what keeps them returning is not just the quality of the massage but the complete experience — prompt communication, reliable arrival times, genuine warmth of our therapists, and absolute peace of mind knowing their privacy is always protected.
              </p>
            </div>

            {/* Section 6 — Privacy */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Privacy &amp; Safety at Our Spa in {displayName}
                </h3>
              </div>
              <p className="mb-4">
                Safety is non-negotiable at our spa center. Every therapist in our network undergoes a multi-step verification process before being listed on our platform. This includes identity verification, hygiene checks, and a personal screening by our management team. We maintain strict quality control and regularly review therapist profiles. Clients can book with complete confidence.
              </p>
              <p className="mb-4">
                We understand that many clients in {displayName} have concerns about privacy. Our agency has robust data protection policies in place. We never share client information with third parties, never store unnecessary personal data, and train our team to handle all client interactions with the highest level of confidentiality. Your name, contact details, and booking history are never disclosed.
              </p>
              <p>
                We recommend booking through our official channels, meeting in secure private locations such as reputed hotels in {displayName}, and always using our verified contact numbers. If at any point you have a concern, our 24/7 support line is always available to assist you. Your safety and peace of mind are our ultimate commitments.
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
            <p className="text-gray-400">Everything you need to know about our spa services in {displayName}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {[
              { q: `How do I book a spa session in ${displayName}?`, a: `Fill out our Book Now form or call us at +91-9038976363. Our team confirms your ${displayName} spa booking within 30 minutes.` },
              { q: 'Are your therapists verified?', a: 'Yes, all spa therapists undergo thorough background checks and personal screenings before being listed on our platform.' },
              { q: 'What is the pricing?', a: 'Prices range from ₹2,000 to ₹15,000 based on the massage type, duration, and package selected.' },
              { q: 'Do you offer in-home and hotel service?', a: `Yes, both in-home and hotel spa services are available in ${displayName}. Specify your preference when booking.` },
              { q: `How quickly can a therapist reach me in ${displayName}?`, a: `Therapists typically arrive within 25–30 minutes in ${displayName}. ETA is confirmed at the time of booking.` },
              { q: 'Is my information kept confidential?', a: 'Absolutely. All personal details are kept strictly confidential and never shared with any third party.' },
              { q: 'Which cities do you serve?', a: 'We serve Mumbai, Pune, Delhi, Bangalore, Jaipur, Lucknow, Indore, Bhopal, Goa, Ahmedabad, Surat, and 100+ cities.' },
              { q: 'What payment methods do you accept?', a: 'Cash only, paid at the time of the session. No advance payment or bank transfer required.' },
              { q: 'Can I choose a specific therapist?', a: 'Yes, you can browse and request your preferred therapist. We confirm based on availability.' },
              { q: 'What types of massages are available?', a: 'We offer Swedish, deep tissue, body to body, Thai, Balinese, aromatherapy, sensual, nuru, and more.' },
              { q: 'What if I need to cancel?', a: 'Inform us as early as possible. Cancellations under 2 hours notice may incur a nominal inconvenience fee.' },
              { q: 'Do you operate 24/7?', a: 'Yes, our spa services are available round the clock, every day of the year including late nights and holidays.' },
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
                {displayName}, {displayState}, India{postalCode ? ` ${postalCode}` : ''}
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
                Spa Centers Also Available in {displayState}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {relatedLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/spa-center/${loc.slug}`}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-primary/40 hover:text-yellow-400 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200"
                >
                  <ArrowRight size={13} className="text-primary shrink-0" />
                  Spa Center in {loc.name}
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
            Book Your Spa Session in {displayName} Today
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
