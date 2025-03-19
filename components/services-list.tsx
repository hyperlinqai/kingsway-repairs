import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Smartphone, Battery, Droplets, Cpu, Wifi, Headphones, Lock, Camera } from 'lucide-react';

export default function ServicesList() {
  const services = [
    {
      title: "Screen Replacement",
      description: "Fix cracked or broken screens with high-quality replacement parts for all major phone brands.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      pricing: "From $79.99",
      popular: true
    },
    {
      title: "Battery Replacement",
      description: "Restore your phone's battery life with our professional battery replacement service.",
      icon: <Battery className="h-8 w-8 text-primary" />,
      pricing: "From $49.99",
      popular: false
    },
    {
      title: "Water Damage Repair",
      description: "Specialized cleaning and repair process to save water-damaged devices.",
      icon: <Droplets className="h-8 w-8 text-primary" />,
      pricing: "From $89.99",
      popular: false
    },
    {
      title: "Motherboard Repair",
      description: "Diagnose and fix complex motherboard issues to restore functionality.",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      pricing: "From $129.99",
      popular: false
    },
    {
      title: "Charging Port Repair",
      description: "Fix charging issues with professional charging port replacement or cleaning.",
      icon: <Wifi className="h-8 w-8 text-primary" />,
      pricing: "From $59.99",
      popular: false
    },
    {
      title: "Speaker & Microphone Repair",
      description: "Resolve audio issues with speaker or microphone replacement.",
      icon: <Headphones className="h-8 w-8 text-primary" />,
      pricing: "From $69.99",
      popular: false
    },
    {
      title: "Button & Lock Repair",
      description: "Fix unresponsive power buttons, volume controls, or home buttons.",
      icon: <Lock className="h-8 w-8 text-primary" />,
      pricing: "From $49.99",
      popular: false
    },
    {
      title: "Camera Repair",
      description: "Replace or repair malfunctioning front or rear cameras.",
      icon: <Camera className="h-8 w-8 text-primary" />,
      pricing: "From $79.99",
      popular: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <Card key={index} className={`bg-card/50 backdrop-blur-sm border ${service.popular ? 'border-primary' : 'border-border/50'} overflow-hidden transition-all duration-300 hover:shadow-md`}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-md bg-primary/10">
                  {service.icon}
                </div>
                <div>
                  <CardTitle>{service.title}</CardTitle>
                  {service.popular && (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-primary text-primary-foreground mt-1">
                      Popular
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="font-semibold">{service.pricing}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              {service.description}
            </CardDescription>
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}