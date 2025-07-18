import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailContent = `
New Contact Message from Omaha Auto Glass Repair Website

Customer Information:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}

Submitted on: ${new Date().toLocaleString()}
    `;

    const subject = encodeURIComponent('New Contact Message - Omaha Auto Glass Repair');
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:info@autoglassomaha.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setFormData({ name: '', phone: '', email: '', message: '' });
    alert('Thank you! Your message has been prepared. Please send the email that just opened in your email client.');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/70"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get an expert opinion, estimate on your windshield, or send us a personal message
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Page Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send Us A Personal Message
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>Send Message</span>
                  </CardTitle>
                  <CardDescription>
                    Call us today at <a href="tel:402-302-2284" className="text-primary font-semibold hover:underline">(402) 302-2284</a> or send us a message here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        First & Last Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="(402) 555-0123"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Personal Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your windshield issue or ask us a question..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                    <CardDescription>
                      Ready to help with all your auto glass needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <a 
                          href="tel:402-302-2284" 
                          className="text-primary font-semibold text-lg hover:underline"
                        >
                          (402) 302-2284
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a 
                          href="mailto:info@autoglassomaha.com" 
                          className="text-primary font-semibold hover:underline"
                        >
                          info@autoglassomaha.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Service Area</h3>
                        <p className="text-muted-foreground">
                          Omaha, Bellevue, Papillion, La Vista, Gretna, Elkhorn, Bennington, and surrounding areas
                        </p>
                      </div>
                    </div>


                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="shadow-xl border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Emergency Service Available
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        For urgent windshield repairs, call us anytime
                      </p>
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                        asChild
                      >
                        <a href="tel:402-302-2284" className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>Call (402) 302-2284</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps */}
                <Card className="shadow-xl mt-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Our Service Area</CardTitle>
                    <CardDescription>
                      We serve Omaha and surrounding areas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full h-64 rounded-b-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.04670850273!2d-96.2094825!3d41.2524269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0x46424d4fae37b604!2sOmaha%2C%20NE!5e0!3m2!1sen!2sus!4v1734567890123!5m2!1sen!2sus"
                        width="100%"
                        height="256"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Omaha Service Area Map"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;