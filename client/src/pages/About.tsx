import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { useEffect } from 'react';
import zIconLarge from '@assets/ziconlarge_1753905825908.png';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen scroll-container">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/ChatGPT Image Jul 17, 2025, 04_03_56 PM copy.png" 
            alt="Background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src={zIconLarge} 
                    alt="Zip Glass Logo" 
                    className="h-32 w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                About Zip Glass
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Passion-driven service with a commitment to excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Our Story
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Passion fuels everything we do at Zip Glass – from the repairs we perform to the relationships we build. As a newer entrepreneur, I've learned the importance of serving people, cultivating strong customer relationships, and standing up for what's right. I genuinely love the work we do, and providing a quality service that benefits others is an absolute honor.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  If you have any questions, concerns, or just need advice about your windshield, I'm here for you. Give us a call, or send us a windshield repair request.
                </p>

                {/* Contact CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
                    asChild
                  >
                    <a href="tel:402-302-2284" className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>Call Us Today</span>
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4"
                    asChild
                  >
                    <a href="mailto:info@zip.glass" className="flex items-center space-x-2">
                      <Mail className="h-5 w-5" />
                      <span>Send Us a Message</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;