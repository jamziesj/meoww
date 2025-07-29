import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Terms and conditions for our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <p className="text-sm text-muted-foreground mb-8">
                <strong>Effective Date:</strong> January 1, 2025
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>



              <h2 className="text-2xl font-bold text-foreground mb-6">Service Agreements</h2>
              <p className="text-muted-foreground mb-6">
                All services are subject to a written estimate and service agreement. Prices may vary based on vehicle type, glass specifications, and service location. We reserve the right to refuse service if deemed unsafe or impractical.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Payment Terms</h2>
              <p className="text-muted-foreground mb-6">
                Payment is due upon completion of service unless other arrangements have been made. We accept cash, credit cards, and direct insurance billing. For commercial accounts, Net 15 or Net 30 terms may be available upon approval.
              </p>



              <h2 className="text-2xl font-bold text-foreground mb-6">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                Our liability is limited to the cost of the services provided. We are not responsible for any incidental, consequential, or punitive damages. Some states do not allow these limitations, so they may not apply to you.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Scheduling and Cancellation</h2>
              <p className="text-muted-foreground mb-6">
                We make every effort to arrive within the scheduled time window. Weather conditions, traffic, and other factors may cause delays. Please provide at least 2 hours notice for cancellations to avoid potential fees.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Insurance Claims</h2>
              <p className="text-muted-foreground mb-6">
                We work with most insurance companies and can assist with claims processing. However, coverage decisions are made by your insurance company. You are responsible for any deductibles or non-covered amounts.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Omaha Auto Glass Repair LLC</p>
                <p>Phone: (402) 302-2284</p>
                <p>Email: info@zip.glass</p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-6">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;