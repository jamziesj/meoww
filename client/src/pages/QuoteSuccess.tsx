import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'wouter';

const QuoteSuccess = () => {
  return (
    <div className="min-h-screen scroll-container">
      <Header />
      
      {/* Success Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Prepare for a nearly new windshield in no time.
            </p>
            
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <p className="text-foreground mb-4">
                We've received your quote request and will contact you shortly to schedule your mobile repair service.
              </p>
              <p className="text-sm text-muted-foreground">
                Most repairs are completed in 15-30 minutes at your location.
              </p>
            </div>
            
            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
                asChild
              >
                <a href="tel:402-302-2284" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call (402) 302-2284</span>
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
                  <span>Email Us</span>
                </a>
              </Button>
            </div>
            
            <div className="text-center">
              <Link to="/">
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default QuoteSuccess;