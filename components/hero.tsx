"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with modern overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cellphone repair.webp"
          alt="Phone repair background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Darker black overlay */}
        
        {/* Modern dot pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Column - Takes 7/12 on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-white text-sm font-medium w-fit"
            >
              <span className="mr-1">⚡</span> Same-Day Repairs Available
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Expert Phone Repair<br />
              <span className="text-primary">When You Need It Most</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Professional technicians, genuine parts, and a satisfaction guarantee.
              We fix all major brands with quick turnaround times.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="group" asChild>
                <Link href="/contact" className="flex items-center">
                  Book a Repair
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm font-medium text-white">90-Day Warranty</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm font-medium text-white">Quick Turnaround</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm font-medium text-white">Certified Experts</div>
              </div>
            </div>
          </motion.div>
          
          {/* Image Column - Takes 5/12 on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              
              {/* Main image */}
              <div className="glass-card rounded-2xl overflow-hidden h-full shadow-xl relative z-10">
                <Image
                  src="/images/hero-technician.png"
                  alt="Phone repair technician"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 md:bottom-6 md:left-6 bg-background rounded-lg p-3 shadow-lg z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">✓</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">4.9/5 Rating</div>
                    <div className="text-xs text-muted-foreground">500+ Reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Business hours bar */}
      <div className="relative z-10 border-t border-white/20 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="font-medium text-white">Open Today</span>
              </div>
              <div className="text-white/80">11:00 AM - 7:30 PM</div>
            </div>
            <div className="text-sm text-white/80">
              <span className="font-medium text-white">Call us:</span> +1 236-466-0230
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
