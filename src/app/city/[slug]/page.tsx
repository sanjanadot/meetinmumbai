import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, Star, Clock, Shield, Award, Users, Zap, MapPin } from 'lucide-react'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/cities'
import { services } from '@/data/services'
import { getLocationsByCityFolder } from '@/data/locations'

/* ─── Static params ─────────────────────────── */
export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }))
}

/* ─── Metadata ──────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.slug)
  if (!city) return {}
  const url = `https://meetinmumbai.com/city/${params.slug}`
  return {
    title: city.seoTitle,
    description: city.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      url,
      images: [{ url: `https://meetinmumbai.com${city.heroImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: city.seoTitle,
      description: city.seoDescription,
    },
  }
}

/* ─── Page ──────────────────────────────────── */
export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug)
  if (!city) notFound()

  const cityLocations = getLocationsByCityFolder(city.folder).filter((l) => l.image)

  return (
    <>
      {/* ─── HERO ───────────────────────────────── */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-black">
        <Image
          src={city.heroImage}
          alt={`Escorts in ${city.name}`}
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-yellow-600/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 py-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-sm text-yellow-400 text-sm font-semibold mb-7">
            <Star size={14} className="fill-yellow-400" />
            Premium Escorts in {city.name} — {city.state}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white leading-tight mb-6 max-w-3xl">
            Escorts In{' '}
            <span className="bg-gradient-to-r from-primary via-rose-400 to-yellow-400 bg-clip-text text-transparent">
              {city.name}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
            {city.description} Verified companions — fast, discreet, and professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-now"
              className="px-8 py-4 bg-gradient-to-r from-primary to-rose-700 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:shadow-[0_0_50px_rgba(200,16,46,0.65)] transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              Book Now
            </Link>
            <a
              href="tel:+919038976363"
              className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              +91-9038976363
            </a>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ────────────────────────── */}
      <section className="py-10 bg-gray-900 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '5000+', label: 'Satisfied Clients' },
              { value: '500+', label: 'Verified Escorts' },
              { value: '100+', label: 'Local Areas Covered' },
              { value: '24/7', label: 'Always Available' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL SERVICES ───────────────────────── */}
      <section className="py-20 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Explore</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
              Our Escort Services in {city.name}
            </h2>
            <div className="section-divider" />
            <p className="text-gray-400">
              Choose from our wide range of premium escort categories available in {city.name}.
            </p>
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

      {/* ─── CITY LOCATIONS ─────────────────────── */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Our Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
              Escorts Available Across {city.name}
            </h2>
            <div className="section-divider" />
            <p className="text-gray-400">
              Verified escorts serving all major areas and neighbourhoods in {city.name}.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
            {cityLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/escorts/${loc.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={loc.image!}
                    alt={`Escorts in ${loc.name}`}
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
                    {loc.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/location"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
            >
              View all locations in India →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SEO CONTENT ────────────────────────── */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="label-eyebrow">Escorts In {city.name}</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
                {city.name} Escorts Service — Premium Companionship
              </h2>
              <div className="section-divider" />
            </div>

            <div className="space-y-10 text-gray-400 leading-relaxed text-[15px]">

              {/* Intro */}
              <p>
                {city.seoContent.intro} At <strong className="text-white">Meet in Mumbai</strong>, we have built India&apos;s most trusted escort platform — one that connects genuine, verified companions with discerning clients who value quality, privacy, and professionalism above everything else. Our <strong className="text-white">escorts in {city.name}</strong> are available 24 hours a day, 7 days a week, for both incall and outcall arrangements across the city.
              </p>

              {/* Why Choose */}
              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Why Choose Our Escorts In {city.name}?
                </h3>
                <p>{city.seoContent.whyUs}</p>
                <p className="mt-4">
                  What sets our <strong className="text-white">{city.name} escort service</strong> apart from others is our rigorous verification process. Every companion on our platform has been personally interviewed, ID-verified, and photographed by our team — so you always get exactly what you see in the profile. We do not work with fake listings, recycled photographs, or unverified individuals. When you book with us, you can be confident that the experience will be genuine, satisfying, and completely discreet.
                </p>
                <p className="mt-4">
                  We also understand that different clients have different needs. Whether you are looking for a sophisticated companion for a corporate dinner, a charming plus-one for a social event, or a private meeting at your hotel or residence, our diverse roster of <strong className="text-white">escorts in {city.name}</strong> ensures we have the perfect match for every occasion.
                </p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Our {city.name} Escort Services
                </h3>
                <p>
                  Meet in Mumbai offers one of the widest selections of escort categories available anywhere in India. Our clients in {city.name} can choose from{' '}
                  <Link href="/actress-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Actress Escorts</Link>,{' '}
                  <Link href="/model-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Model Escorts</Link>,{' '}
                  <Link href="/independent-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Independent Escorts</Link>,{' '}
                  <Link href="/vip-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">VIP Escorts</Link>,{' '}
                  <Link href="/russian-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Russian Escorts</Link>,{' '}
                  <Link href="/air-hostess-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Air Hostess Escorts</Link>,{' '}
                  <Link href="/college-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">College Girl Escorts</Link>,{' '}
                  <Link href="/housewife-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Housewife Escorts</Link>,{' '}
                  <Link href="/punjabi-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Punjabi Escorts</Link>,{' '}
                  <Link href="/south-indian-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">South Indian Escorts</Link>,{' '}
                  <Link href="/north-indian-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">North Indian Escorts</Link>,{' '}
                  <Link href="/foreigner-escorts" className="text-yellow-400 hover:text-yellow-300 transition-colors">Foreigner Escorts</Link>, and many more.
                </p>
                <p className="mt-4">
                  Every profile on our platform includes verified recent photographs, a complete description of the companion, and accurate pricing information — so you can make a fully informed decision before confirming your booking. All our <strong className="text-white">{city.name} escorts</strong> are independent consenting adults aged 18 and above who have chosen to offer their companionship professionally.
                </p>
                <p className="mt-4">
                  We offer both <strong className="text-white">incall</strong> and <strong className="text-white">outcall escort services in {city.name}</strong>. For incall, you visit the companion at a private, comfortable location of her choice. For outcall, she travels to your hotel room, serviced apartment, or private residence. Our team coordinates everything seamlessly to ensure a smooth, stress-free experience from start to finish.
                </p>
              </div>

              {/* Areas */}
              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Areas We Cover in {city.name}
                </h3>
                <p>{city.seoContent.areas}</p>
                <p className="mt-4">
                  Our <strong className="text-white">escort service in {city.name}</strong> is designed to be as accessible as possible. Whether you are staying in a five-star hotel in the city centre, a business hotel near an industrial or IT zone, or a private residence in the suburbs, we send our companions directly to your location. There is no need to travel — simply call us, confirm your address, and we handle everything else.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {city.areaLinks.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/escorts/${area.slug}`}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs hover:bg-primary/15 hover:border-primary/40 hover:text-white transition-all duration-200"
                    >
                      Escorts in {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Booking */}
              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  How to Book a {city.name} Escort
                </h3>
                <p>{city.seoContent.booking}</p>
                <p className="mt-4">
                  Our booking process has been designed to be fast, simple, and completely discreet. You do not need to register an account or provide any sensitive personal information. Simply reach out via call or WhatsApp and tell us your requirements — city, preferred companion type, date, time, and location. Our team matches you with the best available companion and confirms your booking, typically within 30 minutes.
                </p>
                <p className="mt-4">
                  There is <strong className="text-white">no advance payment required</strong> under any circumstances. We accept <strong className="text-white">cash payment only</strong>, made directly after the companion arrives at your location and you are fully satisfied with the introduction. Our transparent pricing starts from <strong className="text-white">₹8,000</strong> and goes up to <strong className="text-white">₹50,000</strong> depending on the companion type, duration of companionship, and any specific requirements you may have. There are no hidden charges — the price quoted is the price you pay.
                </p>
              </div>

              {/* Types of clients */}
              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Who Uses Our {city.name} Escort Service?
                </h3>
                <p>
                  Our clients in {city.name} come from every walk of life. A significant portion are business professionals — executives, entrepreneurs, and senior managers who travel frequently and value discretion above all else. Others are tourists and visitors exploring {city.name} for the first time who want a knowledgeable, enjoyable companion to share their time with. We also serve a large base of local {city.name} residents who simply appreciate premium companionship delivered to their home or hotel.
                </p>
                <p className="mt-4">
                  Regardless of who you are or why you are seeking a companion, we treat every client with the same standard of respect, professionalism, and confidentiality. We never judge, never pry, and never compromise your privacy. All that matters to us is delivering an exceptional, memorable experience every single time.
                </p>
              </div>

              {/* Safety */}
              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-rose-700 rounded-full inline-block shrink-0" />
                  Safety, Privacy &amp; Discretion
                </h3>
                <p>{city.seoContent.safety}</p>
                <p className="mt-4">
                  We take the safety of both our clients and companions with absolute seriousness. Every companion is a consenting adult who has been personally verified by our team with government-issued ID and recent photo confirmation. We do not work with trafficked individuals, under-age persons, or anyone who has not freely and willingly chosen this profession. Our agency operates with a strict code of ethics that prioritises the wellbeing and autonomy of every companion on our platform.
                </p>
                <p className="mt-4">
                  From the client side, your identity and contact details are stored securely and never shared with any third party — including the companion herself, unless absolutely necessary for the booking logistics. All communication through our platform is end-to-end discreet. We do not send marketing messages to your number, do not appear on your bank statement, and do not leave any digital footprint that could compromise your privacy.
                </p>
                <p className="mt-4">
                  This commitment to integrity and safety is why over <strong className="text-white">5,000 clients</strong> across India continue to trust <strong className="text-white">Meet in Mumbai</strong> as their preferred escort service — not just in Mumbai, but now in {city.name} and across the country.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── E-E-A-T ────────────────────────────── */}
      <section className="py-14 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-yellow-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Why Trust Us</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mt-3 mb-3">
              {city.name}&apos;s Most Trusted Escort Agency
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
              { icon: Zap, value: '30 Min', label: 'Fast Arrival', desc: `Escorts reach most ${city.name} locations within 30 minutes` },
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

      {/* ─── FAQ ────────────────────────────────── */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/8 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
              Frequently Asked Questions
            </h2>
            <div className="section-divider" />
            <p className="text-gray-400">
              Everything you need to know about our escort services in {city.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {[
              {
                q: `How do I book an escort in ${city.name}?`,
                a: `Fill out our Book Now form or call us at +91-9038976363. Our team confirms your ${city.name} booking within 30 minutes.`,
              },
              {
                q: 'Are your escorts verified?',
                a: 'Yes, all escorts undergo thorough background checks and personal interviews before being listed on our platform.',
              },
              {
                q: 'What is the pricing?',
                a: 'Prices range from ₹8,000 to ₹50,000 based on the companion type, duration, and service required.',
              },
              {
                q: 'Do you offer incall and outcall?',
                a: `Yes, both incall and outcall services are available in ${city.name}. Please specify your preference when booking.`,
              },
              {
                q: `How fast can an escort reach me in ${city.name}?`,
                a: `Typically within 30 minutes. Exact ETA is confirmed at the time of booking depending on your locality.`,
              },
              {
                q: 'Is my information kept confidential?',
                a: 'Absolutely. All personal details are kept strictly confidential and never shared with any third party.',
              },
              {
                q: `Which areas of ${city.name} do you cover?`,
                a: `We cover all major areas and neighbourhoods in ${city.name} including hotels, residences, and commercial zones.`,
              },
              {
                q: 'What payment methods do you accept?',
                a: 'Cash only, paid at the time of the booking. No advance payment or bank transfer required.',
              },
              {
                q: 'Can I choose a specific escort?',
                a: 'Yes, browse our gallery and select your preferred companion. We confirm based on availability.',
              },
              {
                q: 'Are there age restrictions?',
                a: 'All escorts and clients must be at least 18 years old. We strictly adhere to all applicable laws.',
              },
              {
                q: 'What if I need to cancel?',
                a: 'Inform us as early as possible. Cancellations under 2 hours notice may incur a nominal inconvenience fee.',
              },
              {
                q: 'Do you operate 24/7?',
                a: 'Yes, our services are available round the clock, every day of the year including late nights and holidays.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="group flex gap-4 bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/8 rounded-2xl p-5 transition-all duration-200"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-rose-700 flex items-center justify-center text-white text-xs font-bold font-serif mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5 text-sm sm:text-base group-hover:text-yellow-400 transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── OTHER CITIES ───────────────────────── */}
      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">Other Cities</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-3 mb-3">
              Escorts Available Across India
            </h2>
            <div className="section-divider" />
            <p className="text-gray-400">Premium escort services in all major cities. Select your city to book instantly.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
            {cities
              .filter((c) => c.slug !== params.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/city/${c.slug}`}
                  className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white/5"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={c.heroImage}
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
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-yellow-900/15" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-600/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="label-eyebrow">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Ready to Book Your Escort in {city.name}?
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Contact us now for premium, discreet escort services in {city.name} and across India.
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

      {/* ─── JSON-LD ─────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `Meet in Mumbai - Escorts Service ${city.name}`,
            url: `https://meetinmumbai.com/city/${city.slug}`,
            description: city.seoDescription,
            telephone: '+919038976363',
            email: 'sanjanadotsingh@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: city.name,
              addressRegion: city.state,
              addressCountry: 'IN',
            },
            priceRange: '₹₹₹',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '5000',
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />
    </>
  )
}
