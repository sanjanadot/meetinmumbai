export interface Location {
  slug: string
  name: string
  city: string
  state: string
  region: string
  lat: string
  lng: string
  postalCode?: string
  image?: string
  featured?: boolean
}

export const locations: Location[] = [
  // Mumbai & MMR
  { slug: 'escorts-in-mumbai', name: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0760', lng: '72.8777', postalCode: '400001', image: '/images/mumbai/escorts-in-mumbai.webp', featured: true },
  { slug: 'escorts-in-thane', name: 'Thane', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.2183', lng: '72.9781', postalCode: '400601', image: '/images/mumbai/escorts-in-thane.webp', featured: true },
  { slug: 'escorts-in-navi-mumbai', name: 'Navi Mumbai', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0330', lng: '73.0297', postalCode: '400706', image: '/images/mumbai/escorts-in-navi-mumbai.webp', featured: true },
  { slug: 'escorts-in-andheri', name: 'Andheri', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1136', lng: '72.8697', postalCode: '400058', image: '/images/mumbai/escorts-in-andheri.webp' },
  { slug: 'escorts-in-bandra', name: 'Bandra', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0596', lng: '72.8295', postalCode: '400050', image: '/images/mumbai/escorts-in-bandra.webp' },
  { slug: 'escorts-in-borivali', name: 'Borivali', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.2307', lng: '72.8567', postalCode: '400066', image: '/images/mumbai/escorts-in-borivali.webp' },
  { slug: 'escorts-in-malad', name: 'Malad', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1867', lng: '72.8486', postalCode: '400064', image: '/images/mumbai/escorts-in-malad.webp' },
  { slug: 'escorts-in-goregaon', name: 'Goregaon', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1663', lng: '72.8526', postalCode: '400063', image: '/images/mumbai/escorts-in-goregaon.webp' },
  { slug: 'escorts-in-kandivali', name: 'Kandivali', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.2072', lng: '72.8564', postalCode: '400067', image: '/images/mumbai/escorts-in-kandivali.webp' },
  { slug: 'escorts-in-dadar', name: 'Dadar', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0178', lng: '72.8478', postalCode: '400014', image: '/images/mumbai/escorts-in-dadar.webp' },
  { slug: 'escorts-in-kurla', name: 'Kurla', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0726', lng: '72.8796', postalCode: '400070', image: '/images/mumbai/escorts-in-kurla.webp' },
  { slug: 'escorts-in-ghatkopar', name: 'Ghatkopar', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0863', lng: '72.9089', postalCode: '400075', image: '/images/mumbai/escorts-in-ghatkopar.webp' },
  { slug: 'escorts-in-mulund', name: 'Mulund', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1726', lng: '72.9563', postalCode: '400080', image: '/images/mumbai/escorts-in-mulund.webp' },
  { slug: 'escorts-in-bhandup', name: 'Bhandup', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1451', lng: '72.9491', postalCode: '400078', image: '/images/mumbai/escorts-in-bhandup.webp' },
  { slug: 'escorts-in-vikhroli', name: 'Vikhroli', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1112', lng: '72.9282', postalCode: '400079', image: '/images/mumbai/escorts-in-vikhroli.webp' },
  { slug: 'escorts-in-powai', name: 'Powai', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1176', lng: '72.9060', postalCode: '400076', image: '/images/mumbai/escorts-in-powai.webp' },
  { slug: 'escorts-in-juhu', name: 'Juhu', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1075', lng: '72.8263', postalCode: '400049', image: '/images/mumbai/escorts-in-juhu.webp' },
  { slug: 'escorts-in-santacruz', name: 'Santacruz', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0820', lng: '72.8397', postalCode: '400054', image: '/images/mumbai/escorts-in-santacruz.webp' },
  { slug: 'escorts-in-vile-parle', name: 'Vile Parle', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0993', lng: '72.8474', postalCode: '400056', image: '/images/mumbai/escorts-in-vile-parle.webp' },
  { slug: 'escorts-in-khar', name: 'Khar', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0681', lng: '72.8373', postalCode: '400052', image: '/images/mumbai/escorts-in-khar.webp' },
  { slug: 'escorts-in-mahim', name: 'Mahim', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0363', lng: '72.8416', postalCode: '400016', image: '/images/mumbai/escorts-in-mahim.webp' },
  { slug: 'escorts-in-matunga', name: 'Matunga', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0273', lng: '72.8632', postalCode: '400019', image: '/images/mumbai/escorts-in-matunga.webp' },
  { slug: 'escorts-in-lower-parel', name: 'Lower Parel', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9990', lng: '72.8296', postalCode: '400013', image: '/images/mumbai/escorts-in-lower-parel.webp' },
  { slug: 'escorts-in-prabhadevi', name: 'Prabhadevi', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0148', lng: '72.8282', postalCode: '400025', image: '/images/mumbai/escorts-in-prabhadevi.webp' },
  { slug: 'escorts-in-worli', name: 'Worli', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0130', lng: '72.8187', postalCode: '400018', image: '/images/mumbai/escorts-in-worli.webp' },
  { slug: 'escorts-in-chembur', name: 'Chembur', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0624', lng: '72.8993', postalCode: '400074', image: '/images/mumbai/escorts-in-chembur.webp' },
  { slug: 'escorts-in-sion', name: 'Sion', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0426', lng: '72.8659', postalCode: '400022', image: '/images/mumbai/escorts-in-sion.webp' },
  { slug: 'escorts-in-byculla', name: 'Byculla', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9789', lng: '72.8344', postalCode: '400027', image: '/images/mumbai/escorts-in-byculla.webp' },
  { slug: 'escorts-in-mumbai-central', name: 'Mumbai Central', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9692', lng: '72.8188', postalCode: '400008', image: '/images/mumbai/escorts-in-mumbai-central.webp' },
  { slug: 'escorts-in-grant-road', name: 'Grant Road', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9641', lng: '72.8192', postalCode: '400007', image: '/images/mumbai/escorts-in-grant-road.webp' },
  { slug: 'escorts-in-charni-road', name: 'Charni Road', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9548', lng: '72.8155', postalCode: '400004', image: '/images/mumbai/escorts-in-charni-road.webp' },
  { slug: 'escorts-in-marine-lines', name: 'Marine Lines', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9440', lng: '72.8230', postalCode: '400002', image: '/images/mumbai/escorts-in-marine-lines.webp' },
  { slug: 'escorts-in-churchgate', name: 'Churchgate', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9356', lng: '72.8258', postalCode: '400020', image: '/images/mumbai/escorts-in-churchgate.webp' },
  { slug: 'escorts-in-nariman-point', name: 'Nariman Point', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9256', lng: '72.8242', postalCode: '400021', image: '/images/mumbai/escorts-in-nariman-point.webp' },
  { slug: 'escorts-in-fort', name: 'Fort', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9349', lng: '72.8353', postalCode: '400001', image: '/images/mumbai/escorts-in-fort.webp' },
  { slug: 'escorts-in-cst', name: 'CST', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9400', lng: '72.8356', postalCode: '400001', image: '/images/mumbai/escorts-in-cst.webp' },
  { slug: 'escorts-in-masjid-bandar', name: 'Masjid Bandar', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9519', lng: '72.8387', postalCode: '400009', image: '/images/mumbai/escorts-in-masjid-bandar.webp' },
  { slug: 'escorts-in-chinchpokli', name: 'Chinchpokli', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9709', lng: '72.8378', postalCode: '400012', image: '/images/mumbai/escorts-in-chinchpokli.webp' },
  { slug: 'escorts-in-sakinaka', name: 'Sakinaka', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0969', lng: '72.8884', postalCode: '400072', image: '/images/mumbai/escorts-in-sakinaka.webp' },
  { slug: 'escorts-in-lokhandwala', name: 'Lokhandwala', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1368', lng: '72.8299', postalCode: '400053', image: '/images/mumbai/escorts-in-lokhandwala.webp' },
  { slug: 'escorts-in-jogeshwari', name: 'Jogeshwari', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1337', lng: '72.8495', postalCode: '400060', image: '/images/mumbai/escorts-in-jogeshwari.webp' },
  { slug: 'escorts-in-versova', name: 'Versova', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1323', lng: '72.8113', postalCode: '400061', image: '/images/mumbai/escorts-in-versova.webp' },
  { slug: 'escorts-in-vidyavihar', name: 'Vidyavihar', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0862', lng: '72.9007', postalCode: '400086', image: '/images/mumbai/escorts-in-vidyavihar.webp' },
  { slug: 'escorts-in-kanjurmarg', name: 'Kanjurmarg', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1326', lng: '72.9367', postalCode: '400042', image: '/images/mumbai/escorts-in-kanjurmarg.webp' },
  { slug: 'escorts-in-wadala', name: 'Wadala', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0185', lng: '72.8603', postalCode: '400031', image: '/images/mumbai/escorts-in-wadala.webp' },
  { slug: 'escorts-in-parel', name: 'Parel', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9983', lng: '72.8401', postalCode: '400012', image: '/images/mumbai/escorts-in-parel.webp' },
  { slug: 'escorts-in-govandi', name: 'Govandi', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0520', lng: '72.9220', postalCode: '400088', image: '/images/mumbai/escorts-in-govandi.webp' },
  { slug: 'escorts-in-airoli', name: 'Airoli', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1586', lng: '72.9998', postalCode: '400708', image: '/images/mumbai/escorts-in-airoli.webp' },
  { slug: 'escorts-in-vashi', name: 'Vashi', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0771', lng: '73.0068', postalCode: '400703', image: '/images/mumbai/escorts-in-vashi.webp' },
  { slug: 'escorts-in-belapur', name: 'Belapur', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0226', lng: '73.0390', postalCode: '400614', image: '/images/mumbai/escorts-in-belapur.webp' },
  { slug: 'escorts-in-panvel', name: 'Panvel', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9894', lng: '73.1175', postalCode: '410206', image: '/images/mumbai/escorts-in-panvel.webp' },
  { slug: 'escorts-in-nerul', name: 'Nerul', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0362', lng: '73.0172', postalCode: '400706', image: '/images/mumbai/escorts-in-nerul.webp' },
  { slug: 'escorts-in-ghansoli', name: 'Ghansoli', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1133', lng: '73.0138', postalCode: '400701', image: '/images/mumbai/escorts-in-ghansoli.webp' },
  { slug: 'escorts-in-kopar-khairane', name: 'Kopar Khairane', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1022', lng: '73.0069', postalCode: '400709', image: '/images/mumbai/escorts-in-kopar-khairane.webp' },
  { slug: 'escorts-in-seawood', name: 'Seawood', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0154', lng: '73.0270', postalCode: '400706', image: '/images/mumbai/escorts-in-seawood.webp' },
  { slug: 'escorts-in-sanpada', name: 'Sanpada', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0579', lng: '73.0120', postalCode: '400705', image: '/images/mumbai/escorts-in-sanpada.webp' },
  { slug: 'escorts-in-juinagar', name: 'Juinagar', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0438', lng: '73.0228', postalCode: '400706', image: '/images/mumbai/escorts-in-juinagar.webp' },
  { slug: 'escorts-in-ulwe', name: 'Ulwe', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '18.9750', lng: '73.0384', postalCode: '410206', image: '/images/mumbai/escorts-in-ulwe.webp' },
  { slug: 'escorts-in-kalamboli', name: 'Kalamboli', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0073', lng: '73.0889', postalCode: '410218', image: '/images/mumbai/escorts-in-kalamboli.webp' },
  { slug: 'escorts-in-rabale', name: 'Rabale', city: 'Navi Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1381', lng: '73.0094', postalCode: '400701', image: '/images/mumbai/escorts-in-rabale.webp' },
  { slug: 'escorts-in-dombivli', name: 'Dombivli', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.2183', lng: '73.0800', postalCode: '421201', image: '/images/mumbai/escorts-in-dombivli.webp' },
  { slug: 'escorts-in-kalyan', name: 'Kalyan', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.2403', lng: '73.1305', postalCode: '421301', image: '/images/mumbai/escorts-in-kalyan.webp' },
  { slug: 'escorts-in-ulhasnagar', name: 'Ulhasnagar', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.2168', lng: '73.1586', postalCode: '421003', image: '/images/mumbai/escorts-in-ulhasnagar.webp' },
  { slug: 'escorts-in-ambernath', name: 'Ambernath', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.1963', lng: '73.1938', postalCode: '421501', image: '/images/mumbai/escorts-in-ambernath.webp' },
  { slug: 'escorts-in-badlapur', name: 'Badlapur', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.1581', lng: '73.2663', postalCode: '421503', image: '/images/mumbai/escorts-in-badlapur.webp' },
  { slug: 'escorts-in-bhiwandi', name: 'Bhiwandi', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.2980', lng: '73.0632', postalCode: '421302', image: '/images/mumbai/escorts-in-bhiwandi.webp' },
  { slug: 'escorts-in-mumbra', name: 'Mumbra', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.1854', lng: '73.0235', postalCode: '400612', image: '/images/mumbai/escorts-in-mumbra.webp' },
  { slug: 'escorts-in-diva', name: 'Diva', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.1886', lng: '73.0508', postalCode: '400612', image: '/images/mumbai/escorts-in-diva.webp' },
  { slug: 'escorts-in-thakurli', name: 'Thakurli', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.2064', lng: '73.0912', postalCode: '421201', image: '/images/mumbai/escorts-in-thakurli.webp' },
  { slug: 'escorts-in-ambivali', name: 'Ambivali', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.1671', lng: '73.2219', postalCode: '421503', image: '/images/mumbai/escorts-in-ambivali.webp' },
  { slug: 'escorts-in-titwala', name: 'Titwala', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.2949', lng: '73.2065', postalCode: '421605', image: '/images/mumbai/escorts-in-titwala.webp' },
  { slug: 'escorts-in-kalwa', name: 'Kalwa', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.1780', lng: '73.0067', postalCode: '400605', image: '/images/mumbai/escorts-in-kalwa.webp' },
  { slug: 'escorts-in-kasara', name: 'Kasara', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.5868', lng: '73.4692', postalCode: '422402', image: '/images/mumbai/escorts-in-kasara.webp' },
  { slug: 'escorts-in-karjat', name: 'Karjat', city: 'Raigad', state: 'Maharashtra', region: 'IN-MH', lat: '18.9140', lng: '73.3232', postalCode: '410201', image: '/images/mumbai/escorts-in-karjat.webp' },
  { slug: 'escorts-in-roha', name: 'Roha', city: 'Raigad', state: 'Maharashtra', region: 'IN-MH', lat: '18.4411', lng: '73.1197', postalCode: '402109', image: '/images/mumbai/escorts-in-roha.webp' },
  { slug: 'escorts-in-khopoli', name: 'Khopoli', city: 'Raigad', state: 'Maharashtra', region: 'IN-MH', lat: '18.7875', lng: '73.3449', postalCode: '410203', image: '/images/mumbai/escorts-in-khopoli.webp' },
  { slug: 'escorts-in-mira-road', name: 'Mira Road', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.2812', lng: '72.8607', postalCode: '401107', image: '/images/mumbai/escorts-in-mira-road.webp' },
  { slug: 'escorts-in-bhayandar', name: 'Bhayandar', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.3122', lng: '72.8476', postalCode: '401101', image: '/images/mumbai/escorts-in-bhayandar.webp' },
  { slug: 'escorts-in-naigaon', name: 'Naigaon', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.3638', lng: '72.8517', postalCode: '401208', image: '/images/mumbai/escorts-in-naigaon.webp' },
  { slug: 'escorts-in-vasai', name: 'Vasai', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.3919', lng: '72.8397', postalCode: '401202', image: '/images/mumbai/escorts-in-vasai.webp' },
  { slug: 'escorts-in-nalasopara', name: 'Nalasopara', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.4180', lng: '72.7944', postalCode: '401209', image: '/images/mumbai/escorts-in-nalasopara.webp' },
  { slug: 'escorts-in-virar', name: 'Virar', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.4584', lng: '72.7936', postalCode: '401305', image: '/images/mumbai/escorts-in-virar.webp' },
  { slug: 'escorts-in-palghar', name: 'Palghar', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.6967', lng: '72.7659', postalCode: '401404', image: '/images/mumbai/escorts-in-palghar.webp' },
  { slug: 'escorts-in-boisar', name: 'Boisar', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.7963', lng: '72.7498', postalCode: '401501', image: '/images/mumbai/escorts-in-boisar.webp' },
  { slug: 'escorts-in-saphale', name: 'Saphale', city: 'Palghar', state: 'Maharashtra', region: 'IN-MH', lat: '19.5937', lng: '72.8027', postalCode: '401405', image: '/images/mumbai/escorts-in-saphale.webp' },
  { slug: 'escorts-in-asangaon', name: 'Asangaon', city: 'Thane', state: 'Maharashtra', region: 'IN-MH', lat: '19.5122', lng: '73.1886', postalCode: '421601', image: '/images/mumbai/escorts-in-asangaon.webp' },
  { slug: 'escorts-in-neral', name: 'Neral', city: 'Raigad', state: 'Maharashtra', region: 'IN-MH', lat: '18.8692', lng: '73.2788', postalCode: '410101', image: '/images/mumbai/escorts-in-neral.webp' },
  { slug: 'escorts-in-nahur', name: 'Nahur', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.1548', lng: '72.9489', postalCode: '400078', image: '/images/mumbai/escorts-in-nahur.webp' },
  { slug: 'escorts-in-mumbai-airport', name: 'Mumbai Airport', city: 'Mumbai', state: 'Maharashtra', region: 'IN-MH', lat: '19.0888', lng: '72.8679', postalCode: '400099', image: '/images/mumbai/escorts-in-mumbai-airport.webp' },
  // Other Cities
  { slug: 'escorts-in-pune', name: 'Pune', city: 'Pune', state: 'Maharashtra', region: 'IN-MH', lat: '18.5204', lng: '73.8567', postalCode: '411001', image: '/images/india/escorts-in-pune.webp', featured: true },
  { slug: 'escorts-in-indore', name: 'Indore', city: 'Indore', state: 'Madhya Pradesh', region: 'IN-MP', lat: '22.7196', lng: '75.8577', postalCode: '452001', image: '/images/india/escorts-in-indore.webp', featured: true },
  { slug: 'escorts-in-jaipur', name: 'Jaipur', city: 'Jaipur', state: 'Rajasthan', region: 'IN-RJ', lat: '26.9124', lng: '75.7873', postalCode: '302001', image: '/images/india/escorts-in-jaipur.webp', featured: true },
  { slug: 'escorts-in-lucknow', name: 'Lucknow', city: 'Lucknow', state: 'Uttar Pradesh', region: 'IN-UP', lat: '26.8467', lng: '80.9462', postalCode: '226001', image: '/images/india/escorts-in-lucknow.webp', featured: true },
  { slug: 'escorts-in-bangalore', name: 'Bangalore', city: 'Bangalore', state: 'Karnataka', region: 'IN-KA', lat: '12.9716', lng: '77.5946', postalCode: '560001', image: '/images/india/escorts-in-bangalore.webp', featured: true },
  { slug: 'escorts-in-bhopal', name: 'Bhopal', city: 'Bhopal', state: 'Madhya Pradesh', region: 'IN-MP', lat: '23.2599', lng: '77.4126', postalCode: '462001', image: '/images/india/escorts-in-bhopal.webp', featured: true },
  { slug: 'escorts-in-varanasi', name: 'Varanasi', city: 'Varanasi', state: 'Uttar Pradesh', region: 'IN-UP', lat: '25.3176', lng: '82.9739', postalCode: '221001', image: '/images/india/escorts-in-varanasi.webp', featured: true },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}

export function getFeaturedLocations(): Location[] {
  return locations.filter((l) => l.featured)
}

export function getAllSlugs(): string[] {
  return locations.map((l) => l.slug)
}
