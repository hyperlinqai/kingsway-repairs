import { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kingsway Repair',
  description: 'Privacy Policy for Kingsway Repair services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-primary/10 p-3 rounded-full">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-4 text-primary">Privacy Policy</h1>
        <p className="text-center text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-12">
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Kingsway Repair, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">We may collect the following types of information:</p>
            <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
              <li className="leading-relaxed">Personal identification information (Name, email address, phone number, etc.)</li>
              <li className="leading-relaxed">Device information related to repairs</li>
              <li className="leading-relaxed">Payment information</li>
              <li className="leading-relaxed">Website usage data</li>
            </ul>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">We use your information to:</p>
            <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
              <li className="leading-relaxed">Provide and improve our repair services</li>
              <li className="leading-relaxed">Process payments</li>
              <li className="leading-relaxed">Communicate with you about your repair</li>
              <li className="leading-relaxed">Send you promotional materials (with your consent)</li>
              <li className="leading-relaxed">Improve our website and services</li>
            </ul>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Third-Party Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties 
              except as necessary to provide our services or as required by law.
            </p>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">You have the right to:</p>
            <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
              <li className="leading-relaxed">Access your personal data</li>
              <li className="leading-relaxed">Correct inaccurate data</li>
              <li className="leading-relaxed">Request deletion of your data</li>
              <li className="leading-relaxed">Object to processing of your data</li>
              <li className="leading-relaxed">Data portability</li>
            </ul>
          </section>
          
          <section className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
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
