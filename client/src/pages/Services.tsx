import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  MapPin, 
  CheckCircle,
  DollarSign,
  Car,
  Wrench,
  Phone,
  Star
} from 'lucide-react';

const Services = () => {

  const repairProcess = [
    {
      step: 1,
      title: "Assessment",
      description: "We examine the chip size, location, and type to determine if it's repairable"
    },
    {
      step: 2,
      title: "Preparation", 
      description: "Clean the damaged area and prepare the surface for optimal repair results"
    },
    {
      step: 3,
      title: "Injection",
      description: "Apply specialized resin to fill the chip and restore structural integrity"
    },
    {
      step: 4,
      title: "Curing",
      description: "UV light cures the resin for a permanent, nearly invisible repair"
    },
    {
      step: 5,
      title: "Finishing",
      description: "Polish and inspect to ensure the repair meets our quality standards"
    },
    {
      step: 6,
      title: "Quality Check",
      description: "Final inspection and customer approval to guarantee satisfaction with the completed repair"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Avoid Costly Replacement",
      description: "Rock chip repair costs a fraction of windshield replacement, saving you hundreds of dollars."
    },
    {
      icon: Shield,
      title: "No Insurance Deductible",
      description: "Most insurance companies cover chip repairs with no deductible, unlike replacements."
    },
    {
      icon: Clock,
      title: "Quick & Convenient",
      description: "Repairs take 15-30 minutes with no downtime. Keep your vehicle while we work."
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "We come to your location - home, office, or anywhere in Omaha. No shop visits required."
    },
    {
      icon: Car,
      title: "No ADAS Recalibration",
      description: "Unlike replacements, repairs don't require expensive advanced driver assistance system recalibration."
    },
    {
      icon: Wrench,
      title: "Preserves Original Seal",
      description: "Keep your factory windshield seal intact - no risk of leaks or wind noise from poor installation."
    }
  ];

  return (
    <div className="min-h-screen scroll-container">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/ChatGPT Image Jul 17, 2025, 04_03_56 PM.png" 
            alt="Background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Windshield Chip Repair Services
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional rock chip repair that saves you money and time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Chip Repair Over Replacement?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rock chip repair offers significant advantages over windshield replacement, 
              saving you money, time, and hassle while maintaining your vehicle's integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Repair Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven 6-step process ensures a professional, long-lasting repair that 
              restores your windshield's strength and clarity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {repairProcess.map((step, index) => (
                <div 
                  key={index} 
                  className="relative bg-gradient-to-r from-primary/5 to-transparent rounded-lg p-6 border border-primary/10 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Don't Let a Small Chip Become a Big Problem
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Temperature changes, road vibrations, and impacts can turn a small chip into a large crack. 
              Act fast to save hundreds of dollars and avoid the hassle of windshield replacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4"
                asChild
              >
                <a href="/quote" className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Get Free Quote</span>
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-black hover:text-white hover:bg-primary-foreground px-8 py-4 relative overflow-hidden group"
                asChild
              >
                <a href="tel:402-302-2284" className="flex items-center space-x-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  <Phone className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Call Now</span>
                </a>
              </Button>
            </div>
            <p className="text-primary-foreground/80 mt-6 text-sm">
              ⚡ Act Fast: Chips spread quickly in Nebraska weather
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;