import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { pageMetadata } from '@/lib/seo/metadata';
import { ShieldCheck, Eye, GraduationCap, Heart, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  ...pageMetadata.about
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">About Us</h1>
        
        <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
          <Image 
            src="/images/motherboard-repair.jpg" 
            alt="Kingsway Repair team at work"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              At Kingsway Repair, our mission is to provide fast, reliable, and affordable cell phone repair services to customers across Canada. 
              We understand how essential your devices are to your daily life, which is why we strive to offer quick turnaround times without 
              compromising on quality.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2015, Kingsway Repair began as a small repair shop in downtown Toronto. Our founder, Michael Chen, 
              started the business with a simple goal: to provide honest, high-quality repair services at fair prices.
            </p>
            <p className="text-muted-foreground">
              Over the years, we've grown to multiple locations across Canada, but our commitment to quality and customer 
              satisfaction remains unchanged. We've repaired over 50,000 devices and counting, building a reputation for 
              excellence in the industry.
            </p>
          </section>



          <section className="py-8">
            <h2 className="text-2xl font-semibold mb-8">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                  title: "Quality",
                  description: "We use only premium parts and rigorous testing procedures to ensure lasting repairs."
                },
                {
                  icon: <Eye className="h-10 w-10 text-primary" />,
                  title: "Transparency",
                  description: "No hidden fees or unnecessary repairs. We provide honest assessments and upfront pricing."
                },
                {
                  icon: <GraduationCap className="h-10 w-10 text-primary" />,
                  title: "Expertise",
                  description: "Our technicians are certified and continuously trained on the latest repair techniques."
                },
                {
                  icon: <Heart className="h-10 w-10 text-primary" />,
                  title: "Customer Service",
                  description: "We treat every customer and device with care and respect, ensuring satisfaction."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="absolute -top-5 left-6 p-3 rounded-lg bg-background/80 border border-border/50 shadow-sm group-hover:border-primary/50 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-medium mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-primary/70 w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Store Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Fix 4 You Cellular - Fraser St",
                  address: "6338 Fraser St, Vancouver, BC V5W 3A4, Canada",
                  phone: "+1 778-713-2443",
                  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.7661541373!2d-123.09060492351444!3d49.22398457138694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674f5ee5b9c7d%3A0x7c97f9c1e7c4c1a0!2s6338%20Fraser%20St%2C%20Vancouver%2C%20BC%20V5W%203A4%2C%20Canada!5e0!3m2!1sen!2sus!4v1742458741234!5m2!1sen!2sus",
                  googleMapsUrl: "https://g.co/kgs/ohpZgGk"
                },
                {
                  name: "Fix 4 You Cellular - Broadway",
                  address: "707 W Broadway, Vancouver, BC V5Y 1P5, Canada",
                  phone: "+1 778-800-8808",
                  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.2344532356!2d-123.12149492351177!3d49.26334557137823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673c7d687b199%3A0x9f3c0b3a1c8b5a9e!2s707%20W%20Broadway%2C%20Vancouver%2C%20BC%20V5Z%201J5%2C%20Canada!5e0!3m2!1sen!2sus!4v1742458741235!5m2!1sen!2sus",
                  googleMapsUrl: "https://www.google.co.in/maps/place/Fix+for+You+Cellular+%7C+Cell+phone+Repair+%7C+Mobile+Phone+Service+Broadway/@49.2634809,-123.1201092,14z/data=!4m6!3m5!1s0x54867336da56c7f7:0x6a93acdeb7ee76e0!8m2!3d49.2634809!4d-123.1201092!16s%2Fg%2F11kpzqy8sy?hl=en-in&entry=ttu"
                }
              ].map((location, index) => (
                <Card key={index} className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{location.name}</h3>
                    <p className="text-muted-foreground mb-1">{location.address}</p>
                    <p className="text-muted-foreground mb-4">Phone: {location.phone}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <Button size="sm" className="flex items-center justify-center" asChild>
                        <Link href={`tel:${location.phone.replace(/\D/g, '')}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center justify-center" asChild>
                        <Link href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          <MapPin className="mr-2 h-4 w-4" />
                          Get Directions
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="h-64 w-full rounded-md overflow-hidden border border-border/50 mt-4">
                      <iframe 
                        src={location.mapUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy"
                        title={`Map to ${location.name}`}
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          
        </div>
      </div>
    </div>
  );
}
