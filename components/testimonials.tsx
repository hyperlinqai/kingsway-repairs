import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "iPhone User",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content: "I cracked my iPhone screen and Kingsway Repair fixed it in just an hour! The quality of the replacement screen is excellent, and the service was friendly and professional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Samsung Galaxy Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content: "My Galaxy had serious water damage and I thought it was gone for good. The team at Kingsway not only saved my phone but also recovered all my data. Incredible service!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Google Pixel User",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      content: "The battery on my Pixel was dying so quickly. Kingsway replaced it with a genuine part and now it lasts all day again. Fair pricing and excellent customer service.",
      rating: 4
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground flex-grow mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              ].map((src, index) => (
                <div key={index} className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <Image 
                    src={src} 
                    alt="Customer" 
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">500+</span> satisfied customers this year
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}