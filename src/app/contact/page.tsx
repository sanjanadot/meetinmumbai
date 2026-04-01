'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

// Note: metadata can't be exported from a 'use client' component
// Move metadata to a separate layout or use a server component wrapper

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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
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
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
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
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
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
        className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors disabled:opacity-60"
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in touch with us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of Escorts professionals are always ready to answer your Escorts related questions. Fill out the form and an agent will contact you shortly.
              </p>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">Azad Nagar, Rajesh Compound, Andheri East, Mumbai - 400068</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+919038976363" className="text-gray-600 hover:text-primary transition-colors">+91-9038976363</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:sanjanadotsingh@gmail.com" className="text-gray-600 hover:text-primary transition-colors">sanjanadotsingh@gmail.com</a>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
