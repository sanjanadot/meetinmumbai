import Link from 'next/link'
import { Home, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist. It may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors">
            <Home size={18} />
            Back to Home
          </Link>
          <a href="tel:+919038976363" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors">
            <Phone size={18} />
            Call Us
          </a>
        </div>
      </div>
    </div>
  )
}
