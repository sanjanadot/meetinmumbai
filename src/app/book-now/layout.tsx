import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Now | Book Premium Escort Services in Mumbai',
  description: 'Book verified premium escort services in Mumbai online. Fill out our quick booking form or call +91-9038976363. Incall & outcall available 24/7.',
  alternates: { canonical: 'https://meetinmumbai.com/book-now' },
  openGraph: {
    title: 'Book Now - Meet in Mumbai Escorts',
    description: 'Book verified premium escort services in Mumbai. Quick booking form, instant confirmation, 24/7 availability.',
    url: 'https://meetinmumbai.com/book-now',
    images: [{ url: '/images/escorts-banner.webp', width: 1200, height: 630 }],
  },
}

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
