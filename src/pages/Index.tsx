import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppPreview from '@/components/AppPreview';
import Features from '@/components/Features';
import Games from '@/components/Games';
import HowItWorks from '@/components/HowItWorks';
import WeeklyJackpot from '@/components/WeeklyJackpot';
import BalancesInventory from '@/components/BalancesInventory';
import Roadmap from '@/components/Roadmap';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="vignette relative min-h-screen bg-space">
      {/* Stars background */}
      <div className="stars fixed inset-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AppPreview />
        <Features />
        <Games />
        <HowItWorks />
        <WeeklyJackpot />
        <BalancesInventory />
        <Roadmap />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
