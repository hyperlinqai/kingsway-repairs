import { Metadata } from 'next';
import ServicesList from '@/components/services-list';
import CTASection from '@/components/cta-section';
import { pageMetadata } from '@/lib/seo/metadata';
import { serviceSchema } from '@/lib/seo/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  ...pageMetadata.services
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Our Repair Services</h1>
          <p className="text-lg text-center mb-12 text-muted-foreground">
            We offer a wide range of professional repair services for all major phone brands and models.
            Our expert technicians use only high-quality parts to ensure your device works like new again.
          </p>
          
          <ServicesList />
          
          <div className="mt-20">
            <CTASection />
          </div>
        </div>
      </div>
    </>
  );
}