import { Button } from '@/components/ui/button';
import { Phone, Star } from 'lucide-react';
import recreationImage from '@assets/recreation_1753837748382.png';
import zIcon from '@assets/zicon_1753838947122.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={recreationImage} 
          alt="Professional auto glass repair service"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
               <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium mb-6 border border-primary/30">
                 Mobile Rock Chip Repair Specialists in Omaha
               </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Local Care Makes the Difference
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
                Small chips spread fast in Omaha weather, turning into costly cracks requiring full replacement. What is an affordable fix today becomes $500+ tomorrow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                asChild
              >
                <a href="/quote">Get Free Quote - Save $300+</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-black bg-white hover:text-white hover:border-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 relative overflow-hidden group"
                asChild
              >
                <a href="tel:402-302-2284" className="flex items-center space-x-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  <Phone className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Call Us Today!</span>
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/80">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm">Trusted by Omaha Drivers</span>
            </div>
          </div>

          {/* Right Content - Service Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 bg-white rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg">
                  <img 
                    src={zIcon} 
                    alt="Zip Glass" 
                    className="h-28 w-28 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Mobile Rock Chip Repair
                </h3>
                <p className="text-white/80 mb-6">
                  Professional chip repair that comes to you. Save hundreds compared to replacement 
                  and avoid insurance deductibles. Most repairs done in 15-30 minutes!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Same-day service from trusted Omaha professionals</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Don't get pressured into unnecessary replacement</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Personal attention, not corporate call centers</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>15-30 minute repairs at your location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;