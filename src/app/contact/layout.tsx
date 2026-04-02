import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Reach Meet in Mumbai Escort Services',
  description: 'Get in touch with Meet in Mumbai escort services. Call or WhatsApp +91-9038976363. Located at Azad Nagar, Andheri East, Mumbai. Available 24/7.',
  openGraph: {
    title: 'Contact Meet in Mumbai Escorts',
    description: 'Reach out to Meet in Mumbai for premium escort services. 24/7 support via call, WhatsApp, or contact form.',
    url: 'https://meetinmumbai.com/contact',
    images: [{ url: '/images/escorts-banner.webp', width: 1200, height: 630 }],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
