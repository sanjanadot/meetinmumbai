'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Phone, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    requirements: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', address: '', requirements: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Request Received!</h3>
        <p className="text-gray-600 mb-6">Thank you for your booking request. Our team will contact you within 30 minutes to confirm your booking.</p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    )
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
          <label htmlFor="service" className="form-label">Service Required</label>
          <input
            id="service"
            name="service"
            type="text"
            placeholder="Please enter service name"
            value={formData.service}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      <div>
        <label htmlFor="address" className="form-label">Your Location / Address</label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Hotel name, area, city"
          value={formData.address}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="requirements" className="form-label">Additional Requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          rows={4}
          placeholder="Please enter your address and requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="form-input resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3">
          Something went wrong. Please try again or call us at +91-9038976363.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-rose-700 text-white font-semibold rounded-xl hover:shadow-glow-red transition-all disabled:opacity-60 w-full justify-center"
      >
        <Send size={16} />
        {status === 'loading' ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  )
}

export default function BookNowPage() {
  return (
    <>
      <PageHeader
        title="Book Now"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about-us' }, { label: 'Book Now' }]}
      />

      <section className="py-16 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <span className="label-eyebrow">Booking</span>
              <h2 className="text-4xl font-bold font-serif text-white mb-2">Book Your Escort</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full mb-6" />
              <p className="text-gray-400 mb-8">Fill in the form below and our team will contact you within 30 minutes to confirm your booking.</p>
              <BookingForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-3 text-lg font-serif">Quick Contact</h3>
                <p className="text-gray-400 text-sm mb-4">For instant booking, call or WhatsApp us directly:</p>
                <a
                  href="tel:+919038976363"
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-rose-700 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-glow-red transition-all mb-3 justify-center"
                >
                  <Phone size={18} />
                  +91-9038976363
                </a>
                <a
                  href="https://wa.me/919038976363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-xl font-semibold transition-all justify-center"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-3 text-lg font-serif">Booking Process</h3>
                <ol className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-rose-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    Fill the booking form with your requirements
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-rose-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    Our team will call you within 30 minutes to confirm
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-rose-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    Escort arrives at your location within 25 minutes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-rose-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                    Payment by cash at the time of service
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-rose-900/20 border border-primary/30 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2 font-serif">Available 24/7</h3>
                <p className="text-gray-400 text-sm">Our services are available round the clock, every day of the year. Book anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
