import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ChipRepairBenefits from '@/components/ChipRepairBenefits';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scroll-container">
      <Header />
      <Hero />
      <ChipRepairBenefits />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;
