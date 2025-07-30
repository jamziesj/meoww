import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Your privacy is important to us
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

              <h2 className="text-2xl font-bold text-foreground mb-6">Information We Collect</h2>
              <p className="text-muted-foreground mb-6">
                We collect information you provide directly to us, such as when you request a quote, schedule a service, or contact us. This may include your name, phone number, email address, vehicle information, and service location.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Provide auto glass repair and replacement services</li>
                <li>Communicate with you about your service requests</li>
                <li>Schedule appointments and provide service updates</li>
                <li>Process payments and maintain records</li>
                <li>Improve our services and customer experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6">Information Sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Service providers who assist in our business operations</li>
                <li>Insurance companies when processing claims</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6">Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information below.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Zip Glass LLC</p>
                <p>Phone: (402) 302-2284</p>
                <p>Email: info@zip.glass</p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-6">Policy Updates</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;