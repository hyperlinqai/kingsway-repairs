import Link from 'next/link';
import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/30 backdrop-blur-md border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Kingsway Repair</span>
            </div>
            <p className="text-muted-foreground">
              Fast and reliable cell phone repair services across Canada. Quality parts, expert technicians, and quick turnaround times.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary mt-0.5" />
                <span className="text-muted-foreground">3351 Kingsway, <br/> Vancouver, BC V5R 5K6, Canada</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 236-466-0230</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">hello@fixforyoucellular.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/fixforyoucellular/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
             
              <a href="https://www.instagram.com/fixforyou_cellular/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Monday - Saturday: 11:00am - 7:30pm</li>
                <li>Sunday: 11:00am - 7:00pm</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kingsway Repair. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}