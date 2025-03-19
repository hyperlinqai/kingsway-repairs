"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Send form data to API endpoint
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        return response.json();
      })
      .then(() => {
        form.reset();
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        toast({
          title: "Error sending message",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Contact Us</h1>
        <p className="text-lg text-center mb-12 text-muted-foreground">
          Have questions or need to book a repair? Reach out to us and we'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground">3351 Kingsway,<br/>
                      Vancouver, BC V5R 5K6, Canada</p>
                    </div>
                  </div>                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 236-466-0230</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">hello@fixforyoucellular.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 11:00 am - 7:30 pm<br />
                       Sunday: 11:00 am - 7:00 pm
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 h-64 w-full rounded-md overflow-hidden border border-border/50">

                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.2640032782715!2d-123.03678522351393!3d49.233483671385386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548675cfe587f71d%3A0xe94aaa2e83a77c6f!2sFix%204%20You%20Cellular%20Phone%20Repair%20Kingsway%20-%20iphone%20repairs%20%7C%20cracked%20phone%20service!5e0!3m2!1sen!2sin!4v1742368460994!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
