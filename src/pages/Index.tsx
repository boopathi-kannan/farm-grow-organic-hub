
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FarmPlanner from "@/components/FarmPlanner";
import Chatbot from "@/components/Chatbot";
import Marketplace from "@/components/Marketplace";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FarmPlanner />
        <Chatbot />
        <Marketplace />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
