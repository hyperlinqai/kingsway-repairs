import { Metadata } from 'next'

const siteConfig = {
  name: 'Kingsway Phone Repairs',
  url: 'https://cellphonerepairkingsway.ca',
  ogImage: '/og-image.png'
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: 'Professional phone repair services in your area. Expert technicians, quality parts, and quick turnaround times.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: 'Professional phone repair services in your area. Expert technicians, quality parts, and quick turnaround times.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: 'Professional phone repair services in your area. Expert technicians, quality parts, and quick turnaround times.',
    images: [siteConfig.ogImage],
    creator: '@kingswayrepairs'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

// Page-specific metadata overrides
export const pageMetadata: Record<string, Partial<Metadata>> = {
  home: {
    title: 'Best Cell Phone Repair Kingsway | Fix 4 You Cellular',
    description: 'Cell Phone Repair Kingsway. Get Your Device Fixed At Unbeatable Low Cost Services Offered For - iphone, Samsung Galaxy, & Google Pixel, Computers & Laptop Repair.',
  },
  about: {
    title: 'About us | Fix 4 You Cellular Phone Repair ',
    description: 'Fix 4 You Cellular is a cell phone repair company based in Kingsway, Vancouver that is passionate about mobile repair services. We also repair game consoles and computers.',
  },
  services: {
    title: 'Phone Repair Services in Kingsway | Fix 4 You Cellular',
    description: 'Get fast, reliable phone repair services in Kingsway. Screen, battery, motherboard, and water damage repairs by expert technicians.',
  },
  contact: {
    title: 'Contact Us | Fix 4 You Cellular Mobile Cell Phones Repairs in Kingsway',
    description: 'For all your mobile cell phones repairing or unlocking Contact Us, Fix 4 You Cellular cellphones repairs in Kingsway, Vancouver.',
  },
}
