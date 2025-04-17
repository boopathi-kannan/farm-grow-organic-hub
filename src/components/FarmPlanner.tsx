
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const cropTypes = [
  { value: "tomatoes", label: "Tomatoes" },
  { value: "potatoes", label: "Potatoes" },
  { value: "lettuce", label: "Lettuce" },
  { value: "carrots", label: "Carrots" },
  { value: "spinach", label: "Spinach" },
  { value: "corn", label: "Corn" },
  { value: "wheat", label: "Wheat" },
  { value: "rice", label: "Rice" }
];

const FarmPlanner = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-white" id="farm-planner">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-farm-brown-500">Plan Your Farm</h2>
          <p className="text-xl max-w-2xl mx-auto text-farm-brown-400">
            Enter your land dimensions and preferred crop to receive a customized growing plan
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-farm-green-100 p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="length" className="text-farm-brown-500">Land Length (meters)</Label>
                  <Input
                    id="length"
                    placeholder="Enter length"
                    className="bg-white border-farm-green-200"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width" className="text-farm-brown-500">Land Width (meters)</Label>
                  <Input
                    id="width"
                    placeholder="Enter width"
                    className="bg-white border-farm-green-200"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="crop-type" className="text-farm-brown-500">Select Crop Type</Label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop} required>
                  <SelectTrigger className="bg-white border-farm-green-200">
                    <SelectValue placeholder="Choose a crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropTypes.map((crop) => (
                      <SelectItem key={crop.value} value={crop.value}>{crop.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-farm-green-500 hover:bg-farm-green-600">
                Generate Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div>
            {submitted ? (
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-farm-green-600">Your Farm Plan</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-farm-brown-500">Land Details</h4>
                      <p>Area: {Number(length) * Number(width)} square meters</p>
                      <p>Crop: {cropTypes.find(crop => crop.value === selectedCrop)?.label}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-farm-brown-500">Recommended Timeline</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Soil Preparation: 2 weeks</li>
                        <li>Planting: 1 week</li>
                        <li>Growth Period: 8-12 weeks</li>
                        <li>Harvesting: 2-3 weeks</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-farm-brown-500">Recommended Fertilizers</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Organic Compost: 5kg per 10 square meters</li>
                        <li>Natural Nitrogen Mix: 2kg per 10 square meters</li>
                        <li>Potassium-rich Organic Matter: 3kg per 10 square meters</li>
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="mt-4 border-farm-green-400 text-farm-green-600 hover:bg-farm-green-100">
                      Download Detailed Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img 
                  src="https://placehold.co/400x300/f8faf5/689f38?text=Farm+Layout" 
                  alt="Farm Planning Illustration" 
                  className="mb-4 rounded-lg shadow-md" 
                />
                <p className="text-farm-brown-400 text-center max-w-md">
                  Enter your land dimensions and crop preferences on the left to receive a customized growing plan and timeline.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmPlanner;
