import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'FAQs | Frequently Asked Questions About Escort Services Mumbai',
  description: 'Find answers to frequently asked questions about escort services in Mumbai. Learn about booking, pricing, safety, and more.',
  openGraph: {
    title: 'FAQs - Meet in Mumbai Escort Services',
    url: 'https://meetinmumbai.com/faq',
  },
}

const faqs = [
  {
    q: 'How do I book an escort in Mumbai?',
    a: 'You can book an escort by filling out our Book Now form on the website or by calling us directly at +91-9038976363. Our team will confirm your booking and arrange the escort at your preferred time and location.',
  },
  {
    q: 'Are your escorts verified and safe?',
    a: 'Yes, all our escorts are thoroughly verified before being listed on our platform. We conduct background checks and personal interviews to ensure the safety and quality of every companion we offer.',
  },
  {
    q: 'What is the pricing for escort services?',
    a: 'Our escort services are priced based on the type of companion, duration, and service required. Prices typically range from ₹8,000 to ₹50,000. Please contact us for a specific quote based on your requirements.',
  },
  {
    q: 'Do you offer incall and outcall services?',
    a: 'Yes, we offer both incall (at our designated locations) and outcall (at your hotel, residence, or other location) services. Please specify your preference when booking.',
  },
  {
    q: 'How quickly can an escort reach me?',
    a: 'For locations within Mumbai, our escorts can typically reach you within 25-30 minutes. For other cities, timing may vary. We will provide an estimated arrival time when you confirm your booking.',
  },
  {
    q: 'Is my personal information kept confidential?',
    a: 'Absolutely. We take privacy very seriously. All personal information shared with us is kept strictly confidential and is never shared with third parties. Your identity and booking details are completely private.',
  },
  {
    q: 'What cities do you serve?',
    a: 'We primarily serve Mumbai and the Mumbai Metropolitan Region (MMR) including Thane, Navi Mumbai, Pune, and other nearby areas. We also have escorts available in Bangalore, Delhi, Jaipur, Lucknow, Indore, Bhopal, and other major cities.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash payments. Please arrange cash payment before the service begins. Our escorts will confirm payment details when you make your booking.',
  },
  {
    q: 'Can I choose a specific escort from your gallery?',
    a: 'Yes, you can browse our gallery and select a preferred escort. We will do our best to arrange your preferred companion. Availability may vary, and we will suggest similar alternatives if your first choice is not available.',
  },
  {
    q: 'Are there any age restrictions?',
    a: 'All our escorts are 18 years of age or older. Similarly, clients must be at least 18 years old to use our services. We strictly adhere to all applicable laws regarding adult services.',
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'We understand that plans can change. Please inform us as early as possible if you need to cancel or reschedule. We will do our best to accommodate your request, though cancellations with less than 2 hours notice may be subject to a fee.',
  },
  {
    q: 'Do you operate 24/7?',
    a: 'Yes, our services are available 24 hours a day, 7 days a week. You can book an escort at any time, including late nights and early mornings.',
  },
]

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Got Questions?</h2>
          <p className="text-gray-600 text-lg">Find answers to the most commonly asked questions about our escort services in Mumbai and India.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-primary list-none">
                  <span>{faq.q}</span>
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <section className="py-12 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-red-100 mb-6">Contact our team and we will be happy to help</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
