import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';

const Quote = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [chipCount, setChipCount] = useState<string>('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let damageType = '';
    if (selectedOption === 'large') {
      damageType = 'Large damage (larger than 6 inches)';
    } else if (selectedOption === 'small') {
      damageType = `Small damage (${chipCount} chip${chipCount !== '1' ? 's' : ''} or crack${chipCount !== '1' ? 's' : ''} smaller than 6 inches)`;
    }

    const emailContent = `
New Quote Request - Omaha Auto Glass Repair

Customer Information:
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Email: ${customerInfo.email}

Damage Details:
${damageType}

Additional Information:
${customerInfo.description}

Submitted on: ${new Date().toLocaleString()}
    `;

    const subject = encodeURIComponent('New Quote Request - Omaha Auto Glass Repair');
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:info@autoglassomaha.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setSelectedOption('');
    setChipCount('');
    setCustomerInfo({ name: '', phone: '', email: '', description: '' });
    alert('Thank you! Your quote request has been prepared. Please send the email that just opened in your email client.');
  };

  const canSubmit = selectedOption === 'small' && chipCount && 
    customerInfo.name && 
    customerInfo.phone && 
    customerInfo.email;

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
              Get Your Free Quote
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Tell us about your windshield damage and we'll provide you with a personalized quote
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Damage Selection */}
            <Card className="mb-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Step 1: Select Your Damage Type</CardTitle>
                <CardDescription>
                  Choose the option that best describes your windshield damage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                  <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Large Damage Option */}
                    <div className="relative">
                      <Label htmlFor="large" className="cursor-pointer">
                        <div className="flex items-center space-x-2 mb-4">
                          <RadioGroupItem value="large" id="large" />
                          <span className="text-lg font-semibold">Large Damage</span>
                          <Badge variant="destructive" className="ml-2">Replacement Needed</Badge>
                        </div>
                        <Card className={`cursor-pointer transition-all ${selectedOption === 'large' ? 'ring-2 ring-primary border-primary' : 'border-muted'}`}>
                          <CardContent className="p-6">
                            <div className="relative h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                              <img 
                                src="/newrwin.png" 
                                alt="Windshield with large damage" 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <h3 className="font-semibold mb-2">My damage is larger than 6 inches</h3>
                            <p className="text-sm text-muted-foreground">
                              Large cracks, extensive damage, or chips larger than 6 inches typically require windshield replacement.
                            </p>
                          </CardContent>
                        </Card>
                      </Label>
                    </div>

                    {/* Small Damage Option */}
                    <div className="relative">
                      <Label htmlFor="small" className="cursor-pointer">
                        <div className="flex items-center space-x-2 mb-4">
                          <RadioGroupItem value="small" id="small" />
                          <span className="text-lg font-semibold">Small Damage</span>
                          <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">Repairable</Badge>
                        </div>
                        <Card className={`cursor-pointer transition-all ${selectedOption === 'small' ? 'ring-2 ring-primary border-primary' : 'border-muted'}`}>
                          <CardContent className="p-6">
                            <div className="relative h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                              <img 
                                src="/newgwin.png" 
                                alt="Windshield with small chips and cracks" 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <h3 className="font-semibold mb-2">I have three or fewer chips/cracks smaller than 6 inches</h3>
                            <p className="text-sm text-muted-foreground">
                              Small chips and cracks can usually be repaired quickly and cost-effectively.
                            </p>
                          </CardContent>
                        </Card>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Chip Count Selection (only show if small damage selected) */}
            {selectedOption === 'small' && (
              <Card className="mb-8 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Step 2: How Many Chips or Cracks?</CardTitle>
                  <CardDescription>
                    Select the number of chips or cracks you have
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={chipCount} onValueChange={setChipCount}>
                    <div className="grid grid-cols-3 gap-4">
                      <Label htmlFor="one" className="cursor-pointer">
                        <Card className={`p-6 text-center transition-all ${chipCount === '1' ? 'ring-2 ring-primary border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}`}>
                          <RadioGroupItem value="1" id="one" className="mb-2" />
                          <div className="text-2xl font-bold text-primary">1</div>
                          <div className="text-sm text-muted-foreground">chip/crack</div>
                        </Card>
                      </Label>
                      <Label htmlFor="two" className="cursor-pointer">
                        <Card className={`p-6 text-center transition-all ${chipCount === '2' ? 'ring-2 ring-primary border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}`}>
                          <RadioGroupItem value="2" id="two" className="mb-2" />
                          <div className="text-2xl font-bold text-primary">2</div>
                          <div className="text-sm text-muted-foreground">chips/cracks</div>
                        </Card>
                      </Label>
                      <Label htmlFor="three" className="cursor-pointer">
                        <Card className={`p-6 text-center transition-all ${chipCount === '3' ? 'ring-2 ring-primary border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}`}>
                          <RadioGroupItem value="3" id="three" className="mb-2" />
                          <div className="text-2xl font-bold text-primary">3</div>
                          <div className="text-sm text-muted-foreground">chips/cracks</div>
                        </Card>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {/* Coming Soon Message for Large Damage */}
            {selectedOption === 'large' && (
              <Card className="mb-8 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <AlertCircle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-amber-600 mb-4">
                      Full Replacement Needed — Service Coming Soon
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                      The damage to your windshield appears to be beyond what can be safely repaired. While Omaha Auto Glass Repair currently focuses on chip and crack repairs, we're excited to share that full windshield replacement service is coming soon to our lineup of mobile offerings in the Omaha area.
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                      In the meantime, we're happy to refer you to a trusted local provider to handle the replacement. We truly appreciate your interest and hope to serve you soon with a full-service solution that's fast, local, and reliable. Here are two reliable local options:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
                      <div className="text-center p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Metro Glass Omaha</h4>
                      </div>
                      <div className="text-center p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Omaha Glass Pro</h4>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Customer Information and Description */}
            {(selectedOption === 'small' && chipCount) && (
              <Card className="mb-8 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Step 3: Your Information
                  </CardTitle>
                  <CardDescription>
                    Tell us about yourself and describe the damage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="(402) 555-0123"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      required
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="text-sm font-medium">
                      Describe the Damage or Additional Information
                    </Label>
                    <Textarea
                      id="description"
                      value={customerInfo.description}
                      onChange={(e) => setCustomerInfo({...customerInfo, description: e.target.value})}
                      className="mt-1 min-h-[100px]"
                      placeholder="Please describe the location and nature of the damage, your vehicle make/model, or any other relevant details..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                  >
                    Submit Quote Request
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">
                    Prefer to Talk Directly?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Call us for immediate assistance or answers to your questions
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3"
                      asChild
                    >
                      <a href="tel:402-302-2284" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Call (402) 302-2284</span>
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3"
                      asChild
                    >
                      <a href="mailto:info@autoglassomaha.com" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Us</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;