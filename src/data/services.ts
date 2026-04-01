export interface Service {
  slug: string
  name: string
  shortName: string
  description: string
  image: string
}

export const services: Service[] = [
  { slug: 'actress-escorts', name: 'Actress Escorts', shortName: 'Actress', description: 'Premium actress escort services in Mumbai', image: '/images/services/actress-escorts.webp' },
  { slug: 'air-hostess-escorts', name: 'Air Hostess Escorts', shortName: 'Air Hostess', description: 'Glamorous air hostess escort services', image: '/images/services/air-hostess-escorts.webp' },
  { slug: 'bengali-escorts', name: 'Bengali Escorts', shortName: 'Bengali', description: 'Charming Bengali escort services', image: '/images/services/bengali-escorts.webp' },
  { slug: 'college-escorts', name: 'College Girl Escorts', shortName: 'College Girls', description: 'Young college girl escort services', image: '/images/services/college-escorts.webp' },
  { slug: 'foreigner-escorts', name: 'Foreigner Escorts', shortName: 'Foreigner', description: 'International foreigner escort services', image: '/images/services/foreigner-escorts.webp' },
  { slug: 'gujarati-escorts', name: 'Gujarati Escorts', shortName: 'Gujarati', description: 'Beautiful Gujarati escort services', image: '/images/services/gujarati-escorts.webp' },
  { slug: 'hifi-escorts', name: 'Hi-Fi Escorts', shortName: 'Hi-Fi', description: 'High-profile Hi-Fi escort services', image: '/images/services/hifi-escorts.webp' },
  { slug: 'hot-bhabhi', name: 'Hot Bhabhi Escorts', shortName: 'Hot Bhabhi', description: 'Sensual hot bhabhi escort services', image: '/images/services/hot-bhabhi.webp' },
  { slug: 'housewife-escorts', name: 'House Wife Escorts', shortName: 'Housewife', description: 'Sophisticated housewife escort services', image: '/images/services/housewife-escorts.webp' },
  { slug: 'independent-escorts', name: 'Independent Escorts', shortName: 'Independent', description: 'Independent escort services Mumbai', image: '/images/services/independent-escorts.webp' },
  { slug: 'jaat-escorts', name: 'Jaat Escorts', shortName: 'Jaat', description: 'Exclusive Jaat escort services', image: '/images/services/jaat-escorts.webp' },
  { slug: 'lesbian-escorts', name: 'Lesbian Escorts', shortName: 'Lesbian', description: 'Premium lesbian escort services', image: '/images/services/lesbian-escorts.webp' },
  { slug: 'marathi-escorts', name: 'Marathi Escorts', shortName: 'Marathi', description: 'Lovely Marathi escort services', image: '/images/services/marathi-escorts.webp' },
  { slug: 'marwadi-escorts', name: 'Marwadi Escorts', shortName: 'Marwadi', description: 'Elegant Marwadi escort services', image: '/images/services/marwadi-escorts.webp' },
  { slug: 'model-escorts', name: 'Model Escorts', shortName: 'Model', description: 'Stunning model escort services', image: '/images/services/model-escorts.webp' },
  { slug: 'muslim-escorts', name: 'Muslim Escorts', shortName: 'Muslim', description: 'Beautiful Muslim escort services', image: '/images/services/muslim-escorts.webp' },
  { slug: 'north-indian-escorts', name: 'North Indian Escorts', shortName: 'North Indian', description: 'Premium North Indian escort services', image: '/images/services/north-indian-escorts.webp' },
  { slug: 'punjabi-escorts', name: 'Punjabi Escorts', shortName: 'Punjabi', description: 'Vibrant Punjabi escort services', image: '/images/services/punjabi-escorts.webp' },
  { slug: 'russian-escorts', name: 'Russian Escorts', shortName: 'Russian', description: 'Exotic Russian escort services', image: '/images/services/russian-escorts.webp' },
  { slug: 'shemale-escorts', name: 'Shemale Escorts', shortName: 'Shemale', description: 'Premier shemale escort services', image: '/images/services/shemale-escorts.webp' },
  { slug: 'south-indian-escorts', name: 'South Indian Escorts', shortName: 'South Indian', description: 'Graceful South Indian escort services', image: '/images/services/south-indian-escorts.webp' },
  { slug: 'teen-escorts', name: 'Teen Escorts', shortName: 'Teen', description: 'Young teen escort services (18+)', image: '/images/services/teen-escorts.webp' },
  { slug: 'unsatisfied-escorts', name: 'Unsatisfied Escorts', shortName: 'Unsatisfied', description: 'Passionate unsatisfied escort services', image: '/images/services/unsatisfied-escorts.webp' },
  { slug: 'vip-escorts', name: 'VIP Escorts', shortName: 'VIP', description: 'Elite VIP escort services Mumbai', image: '/images/services/vip-escorts.webp' },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
