import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Need Your Device Fixed Fast?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                Contact us today for a free quote or to schedule a repair. Most repairs can be completed the same day!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Book a Repair
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="tel:12364660230" className="flex items-center">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Call +1 236-466-0230
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}