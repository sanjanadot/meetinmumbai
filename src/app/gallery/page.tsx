import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Gallery | Premium Escorts Photo Gallery Mumbai',
  description: 'Browse our gallery of premium escorts in Mumbai. View photos of our verified call girls and select the perfect companion for your needs.',
  alternates: { canonical: 'https://meetinmumbai.com/gallery' },
  openGraph: {
    title: 'Escorts Gallery - Meet in Mumbai',
    description: 'Browse our gallery of premium escorts in Mumbai.',
    url: 'https://meetinmumbai.com/gallery',
    images: [{ url: '/images/escorts-banner.webp', width: 1200, height: 630 }],
  },
}

// Gallery images from various city folders
const galleryImages = [
  { src: '/images/mumbai/escorts-in-mumbai.webp', alt: 'Escorts in Mumbai', label: 'Mumbai' },
  { src: '/images/mumbai/escorts-in-andheri.webp', alt: 'Escorts in Andheri', label: 'Andheri' },
  { src: '/images/mumbai/escorts-in-bandra.webp', alt: 'Escorts in Bandra', label: 'Bandra' },
  { src: '/images/mumbai/escorts-in-thane.webp', alt: 'Escorts in Thane', label: 'Thane' },
  { src: '/images/mumbai/escorts-in-navi-mumbai.webp', alt: 'Escorts in Navi Mumbai', label: 'Navi Mumbai' },
  { src: '/images/mumbai/escorts-in-juhu.webp', alt: 'Escorts in Juhu', label: 'Juhu' },
  { src: '/images/india/escorts-in-pune.webp', alt: 'Escorts in Pune', label: 'Pune' },
  { src: '/images/india/escorts-in-indore.webp', alt: 'Escorts in Indore', label: 'Indore' },
  { src: '/images/india/escorts-in-jaipur.webp', alt: 'Escorts in Jaipur', label: 'Jaipur' },
  { src: '/images/india/escorts-in-lucknow.webp', alt: 'Escorts in Lucknow', label: 'Lucknow' },
  { src: '/images/india/escorts-in-bangalore.webp', alt: 'Escorts in Bangalore', label: 'Bangalore' },
  { src: '/images/india/escorts-in-bhopal.webp', alt: 'Escorts in Bhopal', label: 'Bhopal' },
]

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Photo Gallery"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />

      <section className="py-14 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="label-eyebrow">Gallery</span>
          <h2 className="text-4xl font-bold font-serif text-white mb-3">Our Escorts Gallery</h2>
          <div className="section-divider" />
          <p className="text-gray-400 text-lg">
            Browse our exclusive gallery of premium escorts available across India. All escorts are verified and available 24/7.
          </p>
        </div>
      </section>

      <section className="pb-16 bg-gray-900 pt-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold font-serif text-yellow-400">{img.label} Escorts</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">View more escorts in your city</p>
            <Link href="/location" className="btn-primary">Browse All Locations</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-yellow-900/10" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold font-serif text-white mb-4">Like What You See?</h2>
          <p className="text-gray-400 mb-8">Book your preferred escort now for an unforgettable experience</p>
          <Link href="/book-now" className="btn-primary">Book Now</Link>
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
              { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://meetinmumbai.com/gallery' },
            ],
          }),
        }}
      />
    </>
  )
}
