'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="form-label">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Please enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Please enter your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Please enter your phone number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Please enter your query"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="form-label">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Please enter your message here"
          required
          value={formData.message}
          onChange={handleChange}
          className="form-input resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded px-4 py-3">
          Thank you! Your message has been sent. We will contact you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3">
          Something went wrong. Please try again or call us directly at +91-9038976363.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-rose-700 text-white font-semibold rounded-xl hover:shadow-glow-red transition-all disabled:opacity-60"
      >
        <Send size={16} />
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about-us' }, { label: 'Contact Us' }]}
      />

      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="label-eyebrow">Get In Touch</span>
              <h2 className="text-4xl font-bold font-serif text-white mb-3">Get in touch with us</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mb-6" />
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our team of Escorts professionals are always ready to answer your Escorts related questions. Fill out the form and an agent will contact you shortly.
              </p>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-gray-400">Azad Nagar, Rajesh Compound, Andheri East, Mumbai - 400068</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+919038976363" className="text-gray-400 hover:text-yellow-400 transition-colors">+91-9038976363</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:sanjanadotsingh@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">sanjanadotsingh@gmail.com</a>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-serif text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
