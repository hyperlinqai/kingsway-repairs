import { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Kingsway Repair',
  description: 'Terms of Service for Kingsway Repair services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-primary/10 p-3 rounded-full">
            <FileText className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-4 text-primary">Terms of Service</h1>
        <p className="text-center text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-12">
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Kingsway Repair services, you agree to be bound by these Terms of Service. 
              If you do not agree to all the terms and conditions, you should not use our services.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kingsway Repair provides cell phone and electronic device repair services. We offer screen repairs, 
              battery replacements, and other repair services for various device models.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Repair Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              All repairs come with a limited warranty as specified at the time of service. This warranty covers defects 
              in parts and workmanship but does not cover subsequent damage, water damage, or other issues unrelated to 
              the original repair.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data and Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we take precautions to protect your device data, we are not responsible for data loss that may occur 
              during the repair process. We recommend backing up your device before submitting it for repair.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment is due upon completion of repair services. We accept various payment methods as indicated at our 
              service locations. Prices are subject to change without notice.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Unclaimed Devices</h2>
            <p className="text-muted-foreground leading-relaxed">
              Devices left unclaimed for more than 30 days after repair completion may be considered abandoned and may 
              be disposed of or recycled.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kingsway Repair shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of our services.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Your continued use of our services following any changes 
              constitutes your acceptance of the revised terms.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-foreground">
                <span className="font-medium">Email:</span> hello@fixforyoucellular.com
              </p>
              <p className="text-foreground mt-2">
                <span className="font-medium">Phone:</span> +1 236-466-0230
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
