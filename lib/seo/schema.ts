export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kingsway Phone Repairs',
  image: '/og-image.png',
  '@id': 'https://kingsway.com',
  url: 'https://kingsway.com',
  telephone: '+1-234-567-8900',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Repair Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7128,
    longitude: -74.0060
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00'
    }
  ],
  sameAs: [
    'https://www.facebook.com/kingswayrepairs',
    'https://twitter.com/kingswayrepairs',
    'https://www.instagram.com/kingswayrepairs'
  ]
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Phone Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Kingsway Phone Repairs',
    '@id': 'https://kingsway.com'
  },
  areaServed: {
    '@type': 'City',
    name: 'City'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Phone Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Screen Repair',
          description: 'Professional screen replacement service for all phone models'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Battery Replacement',
          description: 'Expert battery replacement service with quality parts'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Damage Repair',
          description: 'Specialized water damage repair and recovery service'
        }
      }
    ]
  }
}
