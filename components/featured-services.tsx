import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Battery, Droplets, Cpu, Shield } from 'lucide-react';

export default function FeaturedServices() {
  const services = [
    {
      title: "Screen Repair",
      description: "Cracked or broken screen? We'll replace it with a high-quality screen to restore your device's functionality and appearance.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      image: "/images/screen-repair.jpg"
    },
    {
      title: "Battery Replacement",
      description: "Restore your phone's battery life with our professional battery replacement service using genuine parts.",
      icon: <Battery className="h-10 w-10 text-primary" />,
      image: "/images/battery-replacement.jpg"
    },
    {
      title: "Water Damage Repair",
      description: "Dropped your phone in water? Our specialized cleaning and repair process can save your device.",
      icon: <Droplets className="h-10 w-10 text-primary" />,
      image: "/images/water-damage-repair.jpg"
    },
    {
      title: "Motherboard Repair",
      description: "We diagnose and fix complex motherboard issues to get your device working properly again.",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      image: "/images/motherboard-repair.jpg"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of repair services for all major phone brands including Apple, Samsung, Google, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground h-24 overflow-hidden">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>

        <div className="mt-20 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Repair Guarantee</h3>
              <p className="text-muted-foreground mb-6">
                Every repair comes with our 90-day warranty. If there's any issue with our parts or workmanship, we'll fix it for free.
              </p>
              <ul className="space-y-3">
                {[
                  "Quality parts guaranteed",
                  "Expert technicians",
                  "90-day warranty on all repairs",
                  "Quick turnaround times"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/service-guarantee.png" 
                alt="Phone repair guarantee"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
