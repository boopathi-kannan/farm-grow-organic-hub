
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-farm-green-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-farm-brown-500 mb-4">
            Grow Better, <span className="text-farm-green-500">Farm Smarter</span>
          </h1>
          <p className="text-xl mb-8 text-farm-brown-400">
            The complete platform for beginner farmers to plan, grow, and sell organic produce
            with confidence and success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-farm-green-500 hover:bg-farm-green-600 text-white px-6 py-6 text-lg">
              Start Planning Your Farm
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-farm-green-400 text-farm-brown-500 hover:bg-farm-green-100 px-6 py-6 text-lg">
              Explore Marketplace
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="hidden md:block absolute top-20 right-10 w-64 h-64 bg-farm-green-200 rounded-full opacity-20"></div>
      <div className="hidden md:block absolute bottom-10 right-40 w-32 h-32 bg-farm-accent rounded-full opacity-10"></div>
    </div>
  );
};

export default HeroSection;
