
import { Calendar, Droplet, MapPin, MessageCircle, Leaf, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-farm-green-500" />,
    title: "Land Planning",
    description: "Input your land dimensions and receive tailored crop recommendations based on your soil and climate."
  },
  {
    icon: <Calendar className="h-8 w-8 text-farm-green-500" />,
    title: "Growing Timeline",
    description: "Get detailed timelines for planting, maintenance, and harvesting cycles for your chosen crops."
  },
  {
    icon: <Droplet className="h-8 w-8 text-farm-green-500" />,
    title: "Fertilizer Guide",
    description: "Access personalized fertilizer recommendations to maximize your crop yield naturally."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-farm-green-500" />,
    title: "Farming Assistant",
    description: "Get answers to your questions and receive guidance through our AI-powered chat assistant."
  },
  {
    icon: <Leaf className="h-8 w-8 text-farm-green-500" />,
    title: "Organic Methods",
    description: "Learn sustainable and organic farming practices suitable for your crop selection."
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-farm-green-500" />,
    title: "Organic Marketplace",
    description: "Buy supplies or sell your organic produce directly to consumers and businesses."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-farm-brown-500">Everything You Need to Succeed</h2>
          <p className="text-xl max-w-2xl mx-auto text-farm-brown-400">
            From planning your first seeds to selling your harvest, we provide the tools and knowledge for your farming journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-4 p-3 bg-farm-green-100 inline-block rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-farm-brown-500">{feature.title}</h3>
              <p className="text-farm-brown-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
