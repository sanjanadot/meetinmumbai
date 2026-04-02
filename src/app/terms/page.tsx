import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Meet in Mumbai Escorts',
  description: 'Read the terms and conditions for using Meet in Mumbai escort services. Understand our booking policy, cancellation policy, and user responsibilities.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms & Conditions - Meet in Mumbai',
    url: 'https://meetinmumbai.com/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]}
      />

      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <span className="label-eyebrow">Legal Information</span>
            <h2 className="text-3xl font-bold font-serif text-white mt-3 mb-2">Terms &amp; Conditions</h2>
            <div className="section-divider" />
          </div>
          <div className="max-w-none [&_h2]:!text-white [&_p]:!text-gray-400 [&_li]:!text-gray-400 [&_address]:!text-gray-400 [&_strong]:!text-white [&_a]:!text-yellow-400">
            <p className="text-gray-500 text-sm mb-8">Last updated: April 1, 2026</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              By accessing or using the website <strong>meetinmumbai.com</strong> or any of the services provided by Meet in Mumbai, you confirm that you are at least 18 years of age and that you agree to be bound by these Terms &amp; Conditions. If you do not agree, you must not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Nature of Services</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Meet in Mumbai is a companionship and escort services agency. All escorts listed on our platform are independent adults aged 18 years or older. Our services are provided for companionship purposes. Clients are required to treat all companions with respect and dignity at all times.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All activities conducted between clients and companions are subject to mutual consent. Meet in Mumbai acts solely as an introduction agency and does not direct or control the personal interactions between clients and companions beyond the scope of the booking introduction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">To use our services, you must:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Be at least 18 years of age (proof of age may be requested)</li>
              <li>Be a consenting adult capable of entering into a legally binding agreement</li>
              <li>Not be accessing our services from a jurisdiction where such services are prohibited</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking Policy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Bookings are confirmed upon verbal or written agreement between the client and our team.  Our standard booking process is as follows:
            </p>
            <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-2">
              <li>Submit your booking request via our form, phone, or WhatsApp</li>
              <li>Our team will confirm availability and match you with a suitable companion</li>
              <li>You will receive confirmation details within 30 minutes</li>
              <li>Payment is to be made in cash at the time of the booking</li>
            </ol>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All pricing is discussed transparently at the time of booking. Our rates range from ₹8,000 to ₹50,000 depending on the service, duration, and companion selected.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We accept cash payments only. No advance payment is required until the companion has arrived and the client is satisfied with the introduction. We do not accept online transfers, credit cards, or cryptocurrency. Meet in Mumbai will never ask for upfront payment via bank transfer or digital wallets before service delivery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cancellation Policy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We understand that plans change. Our cancellation policy is as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Cancellations made more than 1 hour before the scheduled booking incur no charge.</li>
              <li>Late cancellations (within 1 hour of the booking) may incur a nominal inconvenience fee at the discretion of the team.</li>
              <li>No-shows may be subject to future booking restrictions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Client Conduct</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Clients are expected to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Treat all companions with respect and courtesy</li>
              <li>Not engage in any illegal activities during or in connection with the booking</li>
              <li>Not attempt to coerce, pressure, or force a companion into any activity they are not comfortable with</li>
              <li>Maintain personal hygiene and arrive at agreed meeting locations on time</li>
              <li>Not disclose the identity or contact details of any companion to third parties</li>
            </ul>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Meet in Mumbai reserves the right to refuse or terminate service to any client who violates these conduct standards, without refund.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Verification &amp; Safety</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All companions listed on our platform have been personally verified by our team. We confirm that every companion is a consenting adult aged 18 or above. We maintain strict ID verification records in compliance with applicable law. Clients may be asked to provide a form of identification at the discretion of the companion or our team for safety purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Confidentiality</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All bookings, client identities, and companion identities are kept strictly confidential. We do not share client data with third parties and expect clients to similarly maintain the privacy of companions. Any photographs or recordings of companions are strictly prohibited without explicit written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Meet in Mumbai acts as an introduction agency. We are not liable for the personal conduct of companions or clients once an introduction has been made. We are not responsible for any disputes, injuries, losses, or damages arising from interactions between clients and companions. Our maximum liability in connection with any booking shall not exceed the fee paid for that booking.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Intellectual Property</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All content on meetinmumbai.com — including text, images, logos, and design — is the property of Meet in Mumbai and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use any content from this website without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to These Terms</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We reserve the right to amend these Terms &amp; Conditions at any time. Updated terms will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Your continued use of our website or services after changes are posted constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For any questions or concerns about these Terms &amp; Conditions, please contact us:
            </p>
            <address className="not-italic text-gray-600 space-y-1">
              <p><strong>Meet in Mumbai</strong></p>
              <p>Azad Nagar, Sakinaka, Andheri East, Mumbai - 400068</p>
              <p>Phone: <a href="tel:+919038976363" className="text-primary hover:underline">+91-9038976363</a></p>
              <p>Email: <a href="mailto:sanjanadotsingh@gmail.com" className="text-primary hover:underline">sanjanadotsingh@gmail.com</a></p>
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
