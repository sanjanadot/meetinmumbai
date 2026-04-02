/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'meetinmumbai.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Static pages
      { source: '/about-us.php', destination: '/about-us', permanent: true },
      { source: '/booknow.php', destination: '/book-now', permanent: true },
      { source: '/clients.php', destination: '/gallery', permanent: true },
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/escorts-faq.php', destination: '/faq', permanent: true },
      { source: '/gallery.php', destination: '/gallery', permanent: true },
      { source: '/location.php', destination: '/location', permanent: true },
      { source: '/services.php', destination: '/services', permanent: true },

      // Service pages (24)
      { source: '/actress-escorts.php', destination: '/actress-escorts', permanent: true },
      { source: '/air-hostess-escorts.php', destination: '/air-hostess-escorts', permanent: true },
      { source: '/bengali-escorts.php', destination: '/bengali-escorts', permanent: true },
      { source: '/college-escorts.php', destination: '/college-escorts', permanent: true },
      { source: '/foreigner-escorts.php', destination: '/foreigner-escorts', permanent: true },
      { source: '/gujarati-escorts.php', destination: '/gujarati-escorts', permanent: true },
      { source: '/hifi-escorts.php', destination: '/hifi-escorts', permanent: true },
      { source: '/hot-bhabhi.php', destination: '/hot-bhabhi', permanent: true },
      { source: '/housewife-escorts.php', destination: '/housewife-escorts', permanent: true },
      { source: '/independent-escorts.php', destination: '/independent-escorts', permanent: true },
      { source: '/jaat-escorts.php', destination: '/jaat-escorts', permanent: true },
      { source: '/lesbian-escorts.php', destination: '/lesbian-escorts', permanent: true },
      { source: '/marathi-escorts.php', destination: '/marathi-escorts', permanent: true },
      { source: '/marwadi-escorts.php', destination: '/marwadi-escorts', permanent: true },
      { source: '/model-escorts.php', destination: '/model-escorts', permanent: true },
      { source: '/muslim-escorts.php', destination: '/muslim-escorts', permanent: true },
      { source: '/north-indian-escorts.php', destination: '/north-indian-escorts', permanent: true },
      { source: '/punjabi-escorts.php', destination: '/punjabi-escorts', permanent: true },
      { source: '/russian-escorts.php', destination: '/russian-escorts', permanent: true },
      { source: '/shemale-escorts.php', destination: '/shemale-escorts', permanent: true },
      { source: '/south-indian-escorts.php', destination: '/south-indian-escorts', permanent: true },
      { source: '/teen-escorts.php', destination: '/teen-escorts', permanent: true },
      { source: '/unsatisfied-escorts.php', destination: '/unsatisfied-escorts', permanent: true },
      { source: '/vip-escorts.php', destination: '/vip-escorts', permanent: true },

      // City pages — specific redirects BEFORE the wildcard
      { source: '/escorts-in-mumbai.php', destination: '/city/mumbai', permanent: true },
      { source: '/escorts-in-delhi.php', destination: '/city/delhi', permanent: true },
      { source: '/escorts-in-bangalore.php', destination: '/city/bangalore', permanent: true },
      { source: '/escorts-in-pune.php', destination: '/city/pune', permanent: true },
      { source: '/escorts-in-jaipur.php', destination: '/city/jaipur', permanent: true },
      { source: '/escorts-in-lucknow.php', destination: '/city/lucknow', permanent: true },
      { source: '/escorts-in-indore.php', destination: '/city/indore', permanent: true },
      { source: '/escorts-in-bhopal.php', destination: '/city/bhopal', permanent: true },
      { source: '/escorts-in-goa.php', destination: '/city/goa', permanent: true },
      { source: '/escorts-in-ahmedabad.php', destination: '/city/ahmedabad', permanent: true },
      { source: '/escorts-in-surat.php', destination: '/city/surat', permanent: true },
      { source: '/escorts-in-vadodara.php', destination: '/city/vadodara', permanent: true },
      { source: '/escorts-in-rajkot.php', destination: '/city/rajkot', permanent: true },
      { source: '/escorts-in-nashik.php', destination: '/city/nashik', permanent: true },
      { source: '/escorts-in-kanpur.php', destination: '/city/kanpur', permanent: true },
      { source: '/escorts-in-varanasi.php', destination: '/city/varanasi', permanent: true },

      // All other location pages — wildcard (must come last)
      { source: '/escorts-in-:slug.php', destination: '/escorts/escorts-in-:slug', permanent: true },
    ]
  },
}

export default nextConfig
