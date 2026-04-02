import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://meetinmumbai.com'),
  title: {
    default: 'Escorts In Mumbai | 100% Genuine Call Girls In Mumbai',
    template: '%s | Meet in Mumbai',
  },
  description: 'Mumbai Escorts Service at 8k to 50K with Cash by Payment Mumbai Call Girls 24/7 Available. Incall & outcall Girl will reach your location in 25 minutes.',
  keywords: ['escorts in mumbai', 'call girls in mumbai', 'mumbai escort service'],
  authors: [{ name: 'Meet in Mumbai' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Meet in Mumbai',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@meetinmumbai',
  },
  verification: {
    // Add google: 'your-verification-code' if needed
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-in">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NX9B242');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NX9B242"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <div id="wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Meet in Mumbai',
              url: 'https://meetinmumbai.com',
              logo: 'https://meetinmumbai.com/images/saumya-logo.webp',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9038976363',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi'],
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  opens: '00:00',
                  closes: '23:59',
                },
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Azad Nagar, Sakinaka',
                addressLocality: 'Mumbai',
                addressRegion: 'Maharashtra',
                postalCode: '400068',
                addressCountry: 'IN',
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  )
}
