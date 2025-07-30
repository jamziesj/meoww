import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Clock, 
  MapPin,
  Phone,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Clock, number: "Flexible", label: "Emergency Service" },
    { icon: MapPin, number: "50+", label: "Mile Service Radius" }
  ];

  const certifications = [
    "Auto Glass Safety Council Certified",
    "Insurance Approved Contractor", 
    "Nebraska State Licensed",
    "OSHA Safety Compliant"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Zip Glass
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted local auto glass experts, committed to providing exceptional 
              service and quality repairs throughout the Omaha area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="mb-6">
                <Badge className="bg-primary/10 text-primary mb-4">
                  Locally Owned & Operated
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Professional Auto Glass Services You Can Trust
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Zip Glass, we understand that your vehicle's glass is crucial 
                  for your safety and visibility. That's why we're committed to providing fast, 
                  reliable, and professional auto glass services that exceed your expectations.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team of certified technicians brings years of experience and expertise to 
                  every job, whether it's a simple chip repair or a complete windshield replacement. 
                  We use only the highest quality materials and proven techniques to ensure your 
                  repair lasts.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "Mobile service - we come to you",
                  "Same-day appointments available",
                  "Lifetime warranty on windshield replacements",
                  "Direct insurance billing and claims assistance",
                  "OEM and OEM-equivalent glass options",
                  "Free estimates and competitive pricing"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary-dark" asChild>
                <a href="tel:402-555-0123" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now: 402-555-0123</span>
                </a>
              </Button>
            </div>

            {/* Right Content - Stats & Certifications */}
            <div className="space-y-8">
              {/* Stats */}
              <Card>
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                    Our Track Record
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                    Certifications & Credentials
                  </h4>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customer Reviews */}
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="flex justify-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                    <div className="text-sm text-muted-foreground">
                      Average rating from 200+ Google reviews
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To provide Omaha drivers with honest, reliable, and convenient auto glass services 
              that prioritize safety, quality, and customer satisfaction. We believe in building 
              lasting relationships with our customers through exceptional service and transparent 
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;