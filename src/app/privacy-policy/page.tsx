import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy | Meet in Mumbai Escorts',
  description: 'Read the privacy policy of Meet in Mumbai. We are committed to protecting your personal data and ensuring complete confidentiality.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy - Meet in Mumbai',
    url: 'https://meetinmumbai.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-500 text-sm mb-8">Last updated: April 1, 2026</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Meet in Mumbai (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website <strong>meetinmumbai.com</strong>. We take your privacy very seriously and are committed to protecting any personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              By using our website or services, you agree to the practices described in this policy. If you do not agree, please discontinue use of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">We collect information in the following ways:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Information you provide directly</strong>: When you fill out our contact form or booking form, we collect your name, email address, phone number, and any message or service preferences you share.</li>
              <li><strong>Automatically collected data</strong>: When you browse our website, we may collect technical information such as your IP address, browser type, pages visited, and referring URL through cookies and analytics tools (e.g., Google Tag Manager).</li>
              <li><strong>Communication data</strong>: If you contact us via phone, WhatsApp, or email, we retain records of that communication to provide you with a consistent service.</li>
            </ul>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We do not collect sensitive personal data such as financial information, government ID numbers, or health records.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Your information is used solely for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>To respond to your enquiries and process bookings</li>
              <li>To communicate with you regarding your service requests</li>
              <li>To improve our website and services based on usage patterns</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We do <strong>not</strong> sell, rent, or trade your personal information to any third party for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Confidentiality &amp; Security</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We understand that clients using our services require absolute discretion. Your identity and personal details are kept strictly confidential. We do not disclose your information to any other client, third-party advertiser, or public entity.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All data transmitted through our contact and booking forms is sent over HTTPS (SSL/TLS encryption). We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or misuse.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Essential cookies</strong>: Necessary for the website to function properly.</li>
              <li><strong>Analytics cookies</strong>: Help us understand how visitors interact with our site (via Google Tag Manager / Google Analytics).</li>
            </ul>
            <p className="text-gray-600 mb-8 leading-relaxed">
              You can disable cookies via your browser settings. Note that disabling cookies may affect certain features of the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We use the following third-party services that may process data on our behalf:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Google Tag Manager / Google Analytics</strong>: For website analytics and performance tracking. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
              <li><strong>Email (SMTP)</strong>: We use email to deliver booking and contact form submissions to our internal team. Your data is not stored on any third-party CRM.</li>
              <li><strong>WhatsApp (Meta)</strong>: If you contact us via WhatsApp, your communication is subject to <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp&apos;s Privacy Policy</a>.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Booking and contact form data is retained for a maximum of 12 months, after which it is securely deleted.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="text-gray-600 mb-8 leading-relaxed">
              To exercise any of these rights, please contact us at <a href="mailto:sanjanadotsingh@gmail.com" className="text-primary hover:underline">sanjanadotsingh@gmail.com</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Age Restriction</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our services are intended strictly for adults aged 18 years and above. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that a minor has submitted personal information, we will delete it immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Any changes will be posted on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us:
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
