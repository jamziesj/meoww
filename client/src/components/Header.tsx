import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [location] = useLocation();

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  };
  return (
    <header className="bg-white text-foreground sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9ccc5ea8-9e5f-4dd2-a295-579bca72f167.png" 
              alt="Omaha Auto Glass Repair" 
              className="h-10 w-auto"
              loading="eager"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">
                Omaha Auto Glass Repair
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                location === '/' ? 'text-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                location === '/about' ? 'text-primary' : ''
              }`}
            >
              About Us
            </Link>
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <button className={`flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                location === '/services' || location === '/dealership-services' || location === '/fleet-services' ? 'text-primary' : ''
              }`}>
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-background border border-border shadow-lg rounded-lg p-3 min-w-[280px] z-50 pb-6"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link 
                    to="/services" 
                    className="block p-4 rounded-md hover:bg-primary/5 transition-colors relative"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800 text-sm">Rock Chip Repair Service</span>
                      <Badge className="bg-primary/10 text-primary text-xs ml-2">Most Popular</Badge>
                    </div>
                  </Link>
                  <Link 
                    to="/dealership-services" 
                    className="block p-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <span className="font-medium text-gray-800 text-sm">Dealership Lot Services</span>
                  </Link>
                  <Link 
                    to="/fleet-services" 
                    className="block p-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <span className="font-medium text-gray-800 text-sm">Commercial Fleet Services</span>
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-primary transition-colors duration-200 font-medium border-b-2 border-transparent hover:border-primary pb-1 ${
                location === '/contact' ? 'text-primary' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="sms:402-302-2284"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(402) 302-2284</span>
            </a>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium" asChild>
              <Link to="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <a
                href="/contact"
                className="text-foreground hover:text-primary transition-colors px-2 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:402-302-2284"
                  className="flex items-center space-x-2 text-foreground hover:text-primary mb-3 px-2 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">(402) 302-2284</span>
                </a>
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mx-2 rounded-full font-medium" asChild>
                  <a href="/quote">Get Quote</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;