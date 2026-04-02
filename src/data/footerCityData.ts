/**
 * Pre-computed footer location columns for each metro city.
 * Sourced from cities.ts areaLinks — used by the Footer client component.
 */

type FooterLink = { href: string; label: string }

export const cityFooterData: Record<
  string,
  { col1: FooterLink[]; col2: FooterLink[]; col3: FooterLink[]; cityName: string }
> = {
  mumbai: {
    cityName: 'Mumbai',
    col1: [
      { href: '/escorts/escorts-in-andheri', label: 'Escorts In Andheri' },
      { href: '/escorts/escorts-in-bandra', label: 'Escorts In Bandra' },
      { href: '/escorts/escorts-in-juhu', label: 'Escorts In Juhu' },
      { href: '/escorts/escorts-in-powai', label: 'Escorts In Powai' },
      { href: '/escorts/escorts-in-worli', label: 'Escorts In Worli' },
      { href: '/escorts/escorts-in-lower-parel', label: 'Escorts In Lower Parel' },
    ],
    col2: [
      { href: '/escorts/escorts-in-malad', label: 'Escorts In Malad' },
      { href: '/escorts/escorts-in-borivali', label: 'Escorts In Borivali' },
      { href: '/escorts/escorts-in-goregaon', label: 'Escorts In Goregaon' },
      { href: '/escorts/escorts-in-dadar', label: 'Escorts In Dadar' },
      { href: '/escorts/escorts-in-kurla', label: 'Escorts In Kurla' },
      { href: '/escorts/escorts-in-ghatkopar', label: 'Escorts In Ghatkopar' },
    ],
    col3: [
      { href: '/escorts/escorts-in-thane', label: 'Escorts In Thane' },
      { href: '/escorts/escorts-in-navi-mumbai', label: 'Escorts In Navi Mumbai' },
      { href: '/escorts/escorts-in-nariman-point', label: 'Escorts In Nariman Point' },
      { href: '/escorts/escorts-in-churchgate', label: 'Escorts In Churchgate' },
      { href: '/escorts/escorts-in-santacruz', label: 'Escorts In Santacruz' },
      { href: '/escorts/escorts-in-vile-parle', label: 'Escorts In Vile Parle' },
    ],
  },
  delhi: {
    cityName: 'Delhi',
    col1: [
      { href: '/escorts/escorts-in-connaught-place', label: 'Escorts In Connaught Place' },
      { href: '/escorts/escorts-in-aerocity', label: 'Escorts In Aerocity' },
      { href: '/escorts/escorts-in-lajpat-nagar', label: 'Escorts In Lajpat Nagar' },
      { href: '/escorts/escorts-in-south-delhi', label: 'Escorts In South Delhi' },
    ],
    col2: [
      { href: '/escorts/escorts-in-dwarka', label: 'Escorts In Dwarka' },
      { href: '/escorts/escorts-in-rohini', label: 'Escorts In Rohini' },
      { href: '/escorts/escorts-in-karol-bagh', label: 'Escorts In Karol Bagh' },
      { href: '/escorts/escorts-in-saket', label: 'Escorts In Saket' },
    ],
    col3: [
      { href: '/escorts/escorts-in-paharganj', label: 'Escorts In Paharganj' },
      { href: '/escorts/escorts-in-greater-kailash', label: 'Escorts In Greater Kailash' },
      { href: '/escorts/escorts-in-pitampura', label: 'Escorts In Pitampura' },
      { href: '/escorts/escorts-in-janakpuri', label: 'Escorts In Janakpuri' },
    ],
  },
  bangalore: {
    cityName: 'Bangalore',
    col1: [
      { href: '/escorts/escorts-in-koramangala', label: 'Escorts In Koramangala' },
      { href: '/escorts/escorts-in-indiranagar', label: 'Escorts In Indiranagar' },
      { href: '/escorts/escorts-in-whitefield', label: 'Escorts In Whitefield' },
      { href: '/escorts/escorts-in-mg-road', label: 'Escorts In MG Road' },
    ],
    col2: [
      { href: '/escorts/escorts-in-marathahalli', label: 'Escorts In Marathahalli' },
      { href: '/escorts/escorts-in-electronic-city', label: 'Escorts In Electronic City' },
      { href: '/escorts/escorts-in-jayanagar', label: 'Escorts In Jayanagar' },
      { href: '/escorts/escorts-in-jp-nagar', label: 'Escorts In JP Nagar' },
    ],
    col3: [
      { href: '/escorts/escorts-in-hebbal', label: 'Escorts In Hebbal' },
      { href: '/escorts/escorts-in-brigade-road', label: 'Escorts In Brigade Road' },
      { href: '/escorts/escorts-in-banaswadi', label: 'Escorts In Banaswadi' },
      { href: '/escorts/escorts-in-yelahanka', label: 'Escorts In Yelahanka' },
    ],
  },
  pune: {
    cityName: 'Pune',
    col1: [
      { href: '/escorts/escorts-in-koregaon-park', label: 'Escorts In Koregaon Park' },
      { href: '/escorts/escorts-in-kalyani-nagar', label: 'Escorts In Kalyani Nagar' },
      { href: '/escorts/escorts-in-viman-nagar', label: 'Escorts In Viman Nagar' },
      { href: '/escorts/escorts-in-hinjewadi', label: 'Escorts In Hinjewadi' },
    ],
    col2: [
      { href: '/escorts/escorts-in-baner', label: 'Escorts In Baner' },
      { href: '/escorts/escorts-in-aundh', label: 'Escorts In Aundh' },
      { href: '/escorts/escorts-in-kothrud', label: 'Escorts In Kothrud' },
      { href: '/escorts/escorts-in-shivajinagar', label: 'Escorts In Shivajinagar' },
    ],
    col3: [
      { href: '/escorts/escorts-in-hadapsar', label: 'Escorts In Hadapsar' },
      { href: '/escorts/escorts-in-camp', label: 'Escorts In Camp' },
      { href: '/escorts/escorts-in-wakad', label: 'Escorts In Wakad' },
      { href: '/escorts/escorts-in-pimpri', label: 'Escorts In Pimpri' },
    ],
  },
  jaipur: {
    cityName: 'Jaipur',
    col1: [
      { href: '/escorts/escorts-in-c-scheme', label: 'Escorts In C-Scheme' },
      { href: '/escorts/escorts-in-vaishali-nagar', label: 'Escorts In Vaishali Nagar' },
      { href: '/escorts/escorts-in-malviya-nagar', label: 'Escorts In Malviya Nagar' },
      { href: '/escorts/escorts-in-tonk-road', label: 'Escorts In Tonk Road' },
    ],
    col2: [
      { href: '/escorts/escorts-in-mi-road', label: 'Escorts In MI Road' },
      { href: '/escorts/escorts-in-civil-lines-jaipur', label: 'Escorts In Civil Lines' },
      { href: '/escorts/escorts-in-mansarovar', label: 'Escorts In Mansarovar' },
      { href: '/escorts/escorts-in-raja-park', label: 'Escorts In Raja Park' },
    ],
    col3: [
      { href: '/escorts/escorts-in-jagatpura', label: 'Escorts In Jagatpura' },
      { href: '/escorts/escorts-in-bani-park', label: 'Escorts In Bani Park' },
      { href: '/escorts/escorts-in-sanganer', label: 'Escorts In Sanganer' },
      { href: '/escorts/escorts-in-shyam-nagar', label: 'Escorts In Shyam Nagar' },
    ],
  },
  lucknow: {
    cityName: 'Lucknow',
    col1: [
      { href: '/escorts/escorts-in-hazratganj', label: 'Escorts In Hazratganj' },
      { href: '/escorts/escorts-in-gomti-nagar', label: 'Escorts In Gomti Nagar' },
      { href: '/escorts/escorts-in-aliganj', label: 'Escorts In Aliganj' },
      { href: '/escorts/escorts-in-indira-nagar-lucknow', label: 'Escorts In Indira Nagar' },
    ],
    col2: [
      { href: '/escorts/escorts-in-alambagh', label: 'Escorts In Alambagh' },
      { href: '/escorts/escorts-in-mahanagar', label: 'Escorts In Mahanagar' },
      { href: '/escorts/escorts-in-chinhat', label: 'Escorts In Chinhat' },
      { href: '/escorts/escorts-in-vikas-nagar', label: 'Escorts In Vikas Nagar' },
    ],
    col3: [
      { href: '/escorts/escorts-in-rajajipuram', label: 'Escorts In Rajajipuram' },
      { href: '/escorts/escorts-in-aminabad', label: 'Escorts In Aminabad' },
      { href: '/escorts/escorts-in-charbagh', label: 'Escorts In Charbagh' },
      { href: '/escorts/escorts-in-husainabad', label: 'Escorts In Husainabad' },
    ],
  },
  indore: {
    cityName: 'Indore',
    col1: [
      { href: '/escorts/escorts-in-vijay-nagar-indore', label: 'Escorts In Vijay Nagar' },
      { href: '/escorts/escorts-in-mg-road-indore', label: 'Escorts In MG Road' },
      { href: '/escorts/escorts-in-palasia', label: 'Escorts In Palasia' },
      { href: '/escorts/escorts-in-ab-road', label: 'Escorts In AB Road' },
    ],
    col2: [
      { href: '/escorts/escorts-in-bhawarkua', label: 'Escorts In Bhawarkua' },
      { href: '/escorts/escorts-in-nipania', label: 'Escorts In Nipania' },
      { href: '/escorts/escorts-in-rau', label: 'Escorts In Rau' },
      { href: '/escorts/escorts-in-scheme-78', label: 'Escorts In Scheme 78' },
    ],
    col3: [
      { href: '/escorts/escorts-in-bengali-square', label: 'Escorts In Bengali Square' },
      { href: '/escorts/escorts-in-sudama-nagar', label: 'Escorts In Sudama Nagar' },
      { href: '/escorts/escorts-in-annapurna-road', label: 'Escorts In Annapurna Road' },
      { href: '/escorts/escorts-in-mahalaxmi-nagar', label: 'Escorts In Mahalaxmi Nagar' },
    ],
  },
  bhopal: {
    cityName: 'Bhopal',
    col1: [
      { href: '/escorts/escorts-in-mp-nagar', label: 'Escorts In MP Nagar' },
      { href: '/escorts/escorts-in-arera-colony', label: 'Escorts In Arera Colony' },
      { href: '/escorts/escorts-in-new-market-bhopal', label: 'Escorts In New Market' },
      { href: '/escorts/escorts-in-tt-nagar', label: 'Escorts In TT Nagar' },
    ],
    col2: [
      { href: '/escorts/escorts-in-kolar-road', label: 'Escorts In Kolar Road' },
      { href: '/escorts/escorts-in-shahpura', label: 'Escorts In Shahpura' },
      { href: '/escorts/escorts-in-ayodhya-nagar', label: 'Escorts In Ayodhya Nagar' },
      { href: '/escorts/escorts-in-hoshangabad-road', label: 'Escorts In Hoshangabad Road' },
    ],
    col3: [
      { href: '/escorts/escorts-in-awadhpuri', label: 'Escorts In Awadhpuri' },
      { href: '/escorts/escorts-in-bairagarh', label: 'Escorts In Bairagarh' },
      { href: '/escorts/escorts-in-misrod', label: 'Escorts In Misrod' },
      { href: '/escorts/escorts-in-berasia-road', label: 'Escorts In Berasia Road' },
    ],
  },
  goa: {
    cityName: 'Goa',
    col1: [
      { href: '/escorts/escorts-in-calangute', label: 'Escorts In Calangute' },
      { href: '/escorts/escorts-in-baga-beach', label: 'Escorts In Baga Beach' },
      { href: '/escorts/escorts-in-anjuna-beach', label: 'Escorts In Anjuna' },
      { href: '/escorts/escorts-in-candolim', label: 'Escorts In Candolim' },
    ],
    col2: [
      { href: '/escorts/escorts-in-panaji', label: 'Escorts In Panaji' },
      { href: '/escorts/escorts-in-vagator', label: 'Escorts In Vagator' },
      { href: '/escorts/escorts-in-morjim', label: 'Escorts In Morjim' },
      { href: '/escorts/escorts-in-colva', label: 'Escorts In Colva' },
    ],
    col3: [
      { href: '/escorts/escorts-in-margao', label: 'Escorts In Margao' },
      { href: '/escorts/escorts-in-aguada-beach', label: 'Escorts In Aguada' },
      { href: '/escorts/escorts-in-mapusa', label: 'Escorts In Mapusa' },
      { href: '/escorts/escorts-in-benaulim', label: 'Escorts In Benaulim' },
    ],
  },
  ahmedabad: {
    cityName: 'Ahmedabad',
    col1: [
      { href: '/escorts/escorts-in-sg-highway', label: 'Escorts In SG Highway' },
      { href: '/escorts/escorts-in-navrangpura', label: 'Escorts In Navrangpura' },
      { href: '/escorts/escorts-in-vastrapur', label: 'Escorts In Vastrapur' },
      { href: '/escorts/escorts-in-cg-road', label: 'Escorts In CG Road' },
    ],
    col2: [
      { href: '/escorts/escorts-in-satellite', label: 'Escorts In Satellite' },
      { href: '/escorts/escorts-in-bodakdev', label: 'Escorts In Bodakdev' },
      { href: '/escorts/escorts-in-prahlad-nagar', label: 'Escorts In Prahlad Nagar' },
      { href: '/escorts/escorts-in-thaltej', label: 'Escorts In Thaltej' },
    ],
    col3: [
      { href: '/escorts/escorts-in-bopal', label: 'Escorts In Bopal' },
      { href: '/escorts/escorts-in-maninagar', label: 'Escorts In Maninagar' },
      { href: '/escorts/escorts-in-naranpura', label: 'Escorts In Naranpura' },
      { href: '/escorts/escorts-in-chandkheda', label: 'Escorts In Chandkheda' },
    ],
  },
  surat: {
    cityName: 'Surat',
    col1: [
      { href: '/escorts/escorts-in-adajan', label: 'Escorts In Adajan' },
      { href: '/escorts/escorts-in-vesu', label: 'Escorts In Vesu' },
      { href: '/escorts/escorts-in-athwa', label: 'Escorts In Athwa' },
      { href: '/escorts/escorts-in-city-light', label: 'Escorts In City Light' },
    ],
    col2: [
      { href: '/escorts/escorts-in-piplod', label: 'Escorts In Piplod' },
      { href: '/escorts/escorts-in-ring-road-surat', label: 'Escorts In Ring Road' },
      { href: '/escorts/escorts-in-nanpura', label: 'Escorts In Nanpura' },
      { href: '/escorts/escorts-in-katargam', label: 'Escorts In Katargam' },
    ],
    col3: [
      { href: '/escorts/escorts-in-udhna', label: 'Escorts In Udhna' },
      { href: '/escorts/escorts-in-varachha', label: 'Escorts In Varachha' },
      { href: '/escorts/escorts-in-hazira', label: 'Escorts In Hazira' },
      { href: '/escorts/escorts-in-palanpur-surat', label: 'Escorts In Palanpur' },
    ],
  },
  vadodara: {
    cityName: 'Vadodara',
    col1: [
      { href: '/escorts/escorts-in-alkapuri', label: 'Escorts In Alkapuri' },
      { href: '/escorts/escorts-in-fatehgunj', label: 'Escorts In Fatehgunj' },
      { href: '/escorts/escorts-in-sayajigunj', label: 'Escorts In Sayajigunj' },
      { href: '/escorts/escorts-in-akota', label: 'Escorts In Akota' },
    ],
    col2: [
      { href: '/escorts/escorts-in-manjalpur', label: 'Escorts In Manjalpur' },
      { href: '/escorts/escorts-in-gotri', label: 'Escorts In Gotri' },
      { href: '/escorts/escorts-in-makarpura', label: 'Escorts In Makarpura' },
      { href: '/escorts/escorts-in-waghodia', label: 'Escorts In Waghodia' },
    ],
    col3: [
      { href: '/escorts/escorts-in-harni', label: 'Escorts In Harni' },
      { href: '/escorts/escorts-in-karelibaug', label: 'Escorts In Karelibaug' },
      { href: '/escorts/escorts-in-subhanpura', label: 'Escorts In Subhanpura' },
      { href: '/escorts/escorts-in-gorwa', label: 'Escorts In Gorwa' },
    ],
  },
  rajkot: {
    cityName: 'Rajkot',
    col1: [
      { href: '/escorts/escorts-in-kalawad-road', label: 'Escorts In Kalawad Road' },
      { href: '/escorts/escorts-in-yagnik-road', label: 'Escorts In Yagnik Road' },
    ],
    col2: [
      { href: '/escorts/escorts-in-gondal-road', label: 'Escorts In Gondal Road' },
      { href: '/escorts/escorts-in-race-course-rajkot', label: 'Escorts In Race Course' },
    ],
    col3: [
      { href: '/escorts/escorts-in-aji-industrial-area', label: 'Escorts In Aji Industrial' },
      { href: '/escorts/escorts-in-bhaktinagar', label: 'Escorts In Bhaktinagar' },
    ],
  },
  nashik: {
    cityName: 'Nashik',
    col1: [
      { href: '/escorts/escorts-in-gangapur-road', label: 'Escorts In Gangapur Road' },
      { href: '/escorts/escorts-in-college-road-nashik', label: 'Escorts In College Road' },
    ],
    col2: [
      { href: '/escorts/escorts-in-cidco', label: 'Escorts In Cidco' },
      { href: '/escorts/escorts-in-satpur', label: 'Escorts In Satpur' },
    ],
    col3: [
      { href: '/escorts/escorts-in-ambad', label: 'Escorts In Ambad' },
      { href: '/escorts/escorts-in-indira-nagar-nashik', label: 'Escorts In Indira Nagar' },
    ],
  },
  kanpur: {
    cityName: 'Kanpur',
    col1: [
      { href: '/escorts/escorts-in-civil-lines-kanpur', label: 'Escorts In Civil Lines' },
      { href: '/escorts/escorts-in-swaroop-nagar', label: 'Escorts In Swaroop Nagar' },
    ],
    col2: [
      { href: '/escorts/escorts-in-kidwai-nagar', label: 'Escorts In Kidwai Nagar' },
      { href: '/escorts/escorts-in-kakadeo', label: 'Escorts In Kakadeo' },
    ],
    col3: [
      { href: '/escorts/escorts-in-mall-road-kanpur', label: 'Escorts In Mall Road' },
      { href: '/escorts/escorts-in-parade', label: 'Escorts In Parade' },
    ],
  },
  varanasi: {
    cityName: 'Varanasi',
    col1: [
      { href: '/escorts/escorts-in-sigra', label: 'Escorts In Sigra' },
      { href: '/escorts/escorts-in-nadesar', label: 'Escorts In Nadesar' },
    ],
    col2: [
      { href: '/escorts/escorts-in-lanka-varanasi', label: 'Escorts In Lanka' },
      { href: '/escorts/escorts-in-assi', label: 'Escorts In Assi' },
    ],
    col3: [
      { href: '/escorts/escorts-in-varanasi-cant', label: 'Escorts In Cantonment' },
      { href: '/escorts/escorts-in-varanasi', label: 'Escorts In Varanasi' },
    ],
  },
}
