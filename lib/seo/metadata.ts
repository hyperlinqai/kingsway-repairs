import { Metadata } from 'next'

const siteConfig = {
  name: 'Kingsway Phone Repairs',
  url: 'https://kingsway.com',
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
    title: 'Best Cell Phone Repair Services',
    description: 'Best cell phone repair services with quality parts and quick turnaround times. Screen repairs, battery replacements, and more.',
  },
  about: {
    title: 'About Us',
    description: 'Learn about our experienced team of phone repair technicians and our commitment to quality service.',
  },
  services: {
    title: 'Our Services',
    description: 'Comprehensive phone repair services including screen repairs, battery replacements, water damage repair, and more.',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with our phone repair experts. Book a repair or ask about our services.',
  },
}
