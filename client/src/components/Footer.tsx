import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Link } from 'wouter';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Star
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    'Omaha', 'Bellevue', 'Papillion', 'La Vista', 'Gretna',
    'Elkhorn', 'Millard', 'Ralston', 'Chalco', 'Bennington'
  ];

  const services = [
    'Rock Chip Repair Service',
    'Dealership Lot Services', 
    'Commercial Fleet Services'
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-2xl font-bold text-white">Zip Glass</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted local auto glass experts providing professional windshield 
              repair and replacement services throughout Omaha and surrounding areas.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white" />
                <a href="tel:402-302-2284" className="hover:text-white/80 transition-colors">
                  (402) 302-2284
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white" />
                <a href="mailto:info@zip.glass" className="hover:text-white/80 transition-colors">
                  info@zip.glass
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white" />
                <span>Serving Greater Omaha Area</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-white" />
                <span>Flexible Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Rock Chip Repair Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/dealership-services" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Dealership Lot Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/fleet-services" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Commercial Fleet Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-white/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-white/80 mb-3 text-sm">
                Get updates on special offers and auto glass tips
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-lg"
                />
                <Button 
                  size="sm" 
                  className="bg-white text-primary hover:bg-white/90 px-4 rounded-lg"
                >
                  Subscribe
                </Button>
              </div>
            </div>



            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/zipglass/#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-secondary text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Call Us for Urgent Service</span>
            </div>
            <Button 
              className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold"
              asChild
            >
              <a href="tel:402-302-2284" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call (402) 302-2284 Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="border-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-white/80 text-sm">
            © {currentYear} Zip Glass. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white text-white" />
              ))}
            </div>
            <span className="text-sm text-white/80 ml-2">
              4.9/5 on Google Reviews
            </span>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;