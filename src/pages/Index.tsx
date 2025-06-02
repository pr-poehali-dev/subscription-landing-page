import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubscriptionsGrid from "@/components/SubscriptionsGrid";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SubscriptionsGrid />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
