import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, useLocation } from "wouter";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FleetServices from "./pages/FleetServices";
import DealershipServices from "./pages/DealershipServices";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import QuoteSuccess from "./pages/QuoteSuccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <ScrollToTop />
        <Route path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/fleet-services" component={FleetServices} />
        <Route path="/dealership-services" component={DealershipServices} />
        <Route path="/contact" component={Contact} />
        <Route path="/quote" component={Quote} />
        <Route path="/quote-success" component={QuoteSuccess} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
