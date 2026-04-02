'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { getLocationsByCityFolder, getLocationBySlug } from '@/data/locations'
import { getCityBySlug, cities } from '@/data/cities'

const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  Pinterest: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  ),
}

const footerServices = [
  { href: '/escorts/escorts-in-mumbai', label: 'Escorts In Mumbai' },
  { href: '/escorts/escorts-in-airoli', label: 'Escorts In Airoli' },
  { href: '/escorts/escorts-in-borivali', label: 'Escorts In Borivali' },
  { href: '/escorts/escorts-in-malad', label: 'Escorts In Malad' },
  { href: '/escorts/escorts-in-goregaon', label: 'Escorts In Goregaon' },
  { href: '/escorts/escorts-in-andheri', label: 'Escorts In Andheri' },
  { href: '/escorts/escorts-in-bandra', label: 'Escorts In Bandra' },
  { href: '/escorts/escorts-in-dadar', label: 'Escorts In Dadar' },
  { href: '/escorts/escorts-in-mumbai-central', label: 'Escorts In Mumbai Central' },
  { href: '/escorts/escorts-in-thane', label: 'Escorts In Thane' },
  { href: '/escorts/escorts-in-navi-mumbai', label: 'Escorts In Navi Mumbai' },
  { href: '/escorts/escorts-in-vashi', label: 'Escorts In Vashi' },
  { href: '/escorts/escorts-in-pune', label: 'Escorts In Pune' },
  { href: '/escorts/escorts-in-dombivli', label: 'Escorts In Dombivli' },
  { href: '/escorts/escorts-in-diva', label: 'Escorts In Diva' },
  { href: '/escorts/escorts-in-indore', label: 'Escorts In Indore' },
  { href: '/escorts/escorts-in-lucknow', label: 'Escorts In Lucknow' },
]

const moreServices = [
  { href: '/escorts/escorts-in-kalyan', label: 'Escorts In Kalyan' },
  { href: '/escorts/escorts-in-mulund', label: 'Escorts In Mulund' },
  { href: '/escorts/escorts-in-bhandup', label: 'Escorts In Bhandup' },
  { href: '/escorts/escorts-in-ghatkopar', label: 'Escorts In Ghatkopar' },
  { href: '/escorts/escorts-in-kurla', label: 'Escorts In Kurla' },
  { href: '/escorts/escorts-in-sion', label: 'Escorts In Sion' },
  { href: '/escorts/escorts-in-lower-parel', label: 'Escorts In Lower Parel' },
  { href: '/escorts/escorts-in-prabhadevi', label: 'Escorts In Prabhadevi' },
  { href: '/escorts/escorts-in-matunga', label: 'Escorts In Matunga' },
  { href: '/escorts/escorts-in-mahim', label: 'Escorts In Mahim' },
  { href: '/escorts/escorts-in-khar', label: 'Escorts In Khar' },
  { href: '/escorts/escorts-in-santacruz', label: 'Escorts In Santacruz' },
  { href: '/escorts/escorts-in-juhu', label: 'Escorts In Juhu' },
  { href: '/escorts/escorts-in-vile-parle', label: 'Escorts In Vile Parle' },
  { href: '/escorts/escorts-in-bangalore', label: 'Escorts In Bangalore' },
  { href: '/escorts/escorts-in-bhopal', label: 'Escorts In Bhopal' },
  { href: '/escorts/escorts-in-varanasi', label: 'Escorts In Varanasi' },
]

const additionalServices = [
  { href: '/escorts/escorts-in-jogeshwari', label: 'Escorts In Jogeshwari' },
  { href: '/escorts/escorts-in-kandivali', label: 'Escorts In Kandivali' },
  { href: '/escorts/escorts-in-mira-road', label: 'Escorts In Mira Road' },
  { href: '/escorts/escorts-in-bhayandar', label: 'Escorts In Bhayandar' },
  { href: '/escorts/escorts-in-naigaon', label: 'Escorts In Naigaon' },
  { href: '/escorts/escorts-in-vasai', label: 'Escorts In Vasai' },
  { href: '/escorts/escorts-in-nalasopara', label: 'Escorts In Nalasopara' },
  { href: '/escorts/escorts-in-virar', label: 'Escorts In Virar' },
  { href: '/escorts/escorts-in-nariman-point', label: 'Escorts In Nariman Point' },
  { href: '/escorts/escorts-in-churchgate', label: 'Escorts In Churchgate' },
  { href: '/escorts/escorts-in-ghansoli', label: 'Escorts In Ghansoli' },
  { href: '/escorts/escorts-in-airoli', label: 'Escorts In Airoli' },
  { href: '/escorts/escorts-in-worli', label: 'Escorts In Worli' },
  { href: '/escorts/escorts-in-jaipur', label: 'Escorts In Jaipur' },
  { href: '/escorts/escorts-in-wadala', label: 'Escorts In Wadala' },
  { href: '/escorts/escorts-in-parel', label: 'Escorts In Parel' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const pathname = usePathname()

  // Detect city page: /city/[slug]
  const cityMatch = pathname?.match(/^\/city\/([^/]+)$/)
  const citySlug = cityMatch?.[1] ?? null
  const cityInfo = citySlug ? getCityBySlug(citySlug) : null

  // Detect sublocation page: /escorts/[slug]
  const sublocMatch = pathname?.match(/^\/escorts\/([^/]+)$/)
  const sublocSlug = sublocMatch?.[1] ?? null
  const sublocCityInfo = sublocSlug
    ? (() => {
        const loc = getLocationBySlug(sublocSlug)
        return loc ? cities.find((c) => c.cityKey === loc.city) ?? null : null
      })()
    : null

  const activeCityInfo = cityInfo ?? sublocCityInfo

  // Build city-specific columns from ALL locations with images
  let col1 = footerServices
  let col2 = moreServices
  let col3 = additionalServices
  let col1Title = 'Our Services'
  let col2Title = 'More Services'
  let col3Title = 'Also Available In'

  if (activeCityInfo) {
    const allCityLocs = getLocationsByCityFolder(activeCityInfo.folder)
      .filter((l) => l.image)
      .map((l) => ({ href: `/escorts/${l.slug}`, label: `Escorts In ${l.name}` }))
    const third = Math.ceil(allCityLocs.length / 3)
    col1 = allCityLocs.slice(0, third)
    col2 = allCityLocs.slice(third, third * 2)
    col3 = allCityLocs.slice(third * 2)
    col1Title = `${activeCityInfo.name} Escorts`
    col2Title = `More In ${activeCityInfo.name}`
    col3Title = `Also In ${activeCityInfo.name}`
  }

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Gradient top accent */}
      <div className="h-[2px] bg-gradient-to-r from-primary via-yellow-500 to-primary" />

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919038976363"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-[0_0_25px_rgba(34,197,94,0.55)] transition-all duration-300"
        aria-label="WhatsApp us"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Call Widget */}
      <a
        href="tel:+919038976363"
        className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-primary-dark hover:shadow-[0_0_25px_rgba(200,16,46,0.55)] transition-all duration-300"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>

      <div className="container mx-auto px-4 pt-12 pb-8">
        {/* Social Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="text-sm text-gray-500 uppercase tracking-widest">Follow Us</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition-colors duration-200"><SocialIcons.Facebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition-colors duration-200"><SocialIcons.Twitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 transition-colors duration-200"><SocialIcons.Linkedin /></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition-colors duration-200"><SocialIcons.Instagram /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-yellow-400 transition-colors duration-200"><SocialIcons.Pinterest /></a>
          </div>
        </div>
        <hr className="border-white/10 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[3px] mb-5">Head Office</h4>
            <address className="not-italic space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                Azad Nagar, Sakinaka,<br />Andheri (E), Mumbai - 400068
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919038976363" className="hover:text-yellow-400 transition-colors">+91-9038976363</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:sanjanadotsingh@gmail.com" className="hover:text-yellow-400 transition-colors text-xs">sanjanadotsingh@gmail.com</a>
              </p>
            </address>
          </div>

          {/* Services Col 1 */}
          <div>
            <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[3px] mb-5">{col1Title}</h4>
            <ul className="space-y-1.5">
              {col1.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-1.5 text-sm hover:text-yellow-400 hover:translate-x-0.5 transition-all duration-200">
                    <ArrowRight size={11} className="text-primary shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col 2 */}
          <div>
            <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[3px] mb-5">{col2Title}</h4>
            <ul className="space-y-1.5">
              {col2.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-1.5 text-sm hover:text-yellow-400 hover:translate-x-0.5 transition-all duration-200">
                    <ArrowRight size={11} className="text-primary shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col 3 */}
          <div>
            <h4 className="text-yellow-400 font-bold text-xs uppercase tracking-[3px] mb-5">{col3Title}</h4>
            <ul className="space-y-1.5">
              {col3.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-1.5 text-sm hover:text-yellow-400 hover:translate-x-0.5 transition-all duration-200">
                    <ArrowRight size={11} className="text-primary shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-white/10 py-5">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-500">
          <p>Copyright &copy; {year} | Meet in Mumbai. All rights reserved!</p>
          <ul className="flex flex-wrap items-center gap-4">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-400 transition-colors">FAQs</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
