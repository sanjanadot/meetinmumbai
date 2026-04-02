import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/api/booking', '/api/contact'],
      },
    ],
    sitemap: [
      'https://meetinmumbai.com/sitemap.xml',
      'https://meetinmumbai.com/image-sitemap.xml',
    ],
    host: 'https://meetinmumbai.com',
  }
}
