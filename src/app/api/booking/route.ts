import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, address, requirements } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeService = escapeHtml(service || 'Not specified')
    const safeAddress = escapeHtml(address || 'Not specified')
    const safeRequirements = escapeHtml(requirements || 'None')

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Meet in Mumbai Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'sanjanadotsingh@gmail.com',
      replyTo: email,
      subject: `NEW BOOKING REQUEST from ${safeName} - ${safePhone}`,
      html: `
        <h2 style="color:#c8102e">New Booking Request</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${safeName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${safeEmail}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${safePhone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${safeService}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Location/Address</td><td style="padding:8px;border:1px solid #ddd">${safeAddress}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Requirements</td><td style="padding:8px;border:1px solid #ddd">${safeRequirements}</td></tr>
        </table>
        <p style="margin-top:16px;color:#c8102e;font-weight:bold">Please contact the client within 30 minutes!</p>
      `,
      text: `BOOKING REQUEST\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nAddress: ${address}\nRequirements: ${requirements}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking form error:', error)
    return NextResponse.json({ error: 'Failed to send booking' }, { status: 500 })
  }
}
