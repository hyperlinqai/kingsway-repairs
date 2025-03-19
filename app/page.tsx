import Hero from '@/components/hero';
import FeaturedServices from '@/components/featured-services';
import Testimonials from '@/components/testimonials';
import CTASection from '@/components/cta-section';
import { pageMetadata } from '@/lib/seo/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...pageMetadata.home,
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturedServices />
      <Testimonials />
      <CTASection />
    </div>
  );
}