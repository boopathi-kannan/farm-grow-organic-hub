
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Filter } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  unit: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 4.99,
    image: "https://placehold.co/300x200/f8f8f8/ff6347?text=Tomatoes",
    category: "produce",
    seller: "Green Valley Farm",
    unit: "per kg"
  },
  {
    id: 2,
    name: "Fresh Lettuce",
    price: 2.49,
    image: "https://placehold.co/300x200/f8f8f8/90ee90?text=Lettuce",
    category: "produce",
    seller: "Sunshine Organics",
    unit: "per head"
  },
  {
    id: 3,
    name: "Organic Eggs",
    price: 5.99,
    image: "https://placehold.co/300x200/f8f8f8/f5deb3?text=Eggs",
    category: "dairy",
    seller: "Happy Hen Farm",
    unit: "dozen"
  },
  {
    id: 4,
    name: "Organic Fertilizer",
    price: 19.99,
    image: "https://placehold.co/300x200/f8f8f8/8b4513?text=Fertilizer",
    category: "supplies",
    seller: "EcoGrow",
    unit: "5kg bag"
  },
  {
    id: 5,
    name: "Heirloom Seeds",
    price: 3.49,
    image: "https://placehold.co/300x200/f8f8f8/a0522d?text=Seeds",
    category: "supplies",
    seller: "Heritage Seeds Co.",
    unit: "packet"
  },
  {
    id: 6,
    name: "Organic Potatoes",
    price: 3.99,
    image: "https://placehold.co/300x200/f8f8f8/cd853f?text=Potatoes",
    category: "produce",
    seller: "Earth Bounty Farms",
    unit: "per kg"
  }
];

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(product => product.category === activeTab);

  // Helper function to render product cards
  const renderProductCards = (products: Product[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-farm-brown-500">{product.name}</h3>
              <span className="font-bold text-farm-green-600">${product.price} <span className="text-xs font-normal text-farm-brown-400">{product.unit}</span></span>
            </div>
            <p className="text-sm text-farm-brown-400 mb-4">Seller: {product.seller}</p>
            <Button className="w-full bg-farm-green-500 hover:bg-farm-green-600">
              <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section className="py-16" id="marketplace">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-farm-brown-500">Organic Marketplace</h2>
          <p className="text-xl max-w-2xl mx-auto text-farm-brown-400">
            Buy and sell fresh organic produce, seeds, and farming supplies
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-farm-green-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-farm-green-500 data-[state=active]:text-white">
                All Items
              </TabsTrigger>
              <TabsTrigger value="produce" className="data-[state=active]:bg-farm-green-500 data-[state=active]:text-white">
                Produce
              </TabsTrigger>
              <TabsTrigger value="supplies" className="data-[state=active]:bg-farm-green-500 data-[state=active]:text-white">
                Farming Supplies
              </TabsTrigger>
              <TabsTrigger value="dairy" className="data-[state=active]:bg-farm-green-500 data-[state=active]:text-white">
                Dairy & Eggs
              </TabsTrigger>
            </TabsList>
            
            <Button variant="outline" className="flex items-center gap-2 border-farm-green-300">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
          
          <TabsContent value="all" className="m-0">
            {renderProductCards(filteredProducts)}
          </TabsContent>
          
          <TabsContent value="produce" className="m-0">
            {renderProductCards(filteredProducts)}
          </TabsContent>
          
          <TabsContent value="supplies" className="m-0">
            {renderProductCards(filteredProducts)}
          </TabsContent>
          
          <TabsContent value="dairy" className="m-0">
            {renderProductCards(filteredProducts)}
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8">
          <p className="mb-4 text-farm-brown-400">Ready to sell your organic products?</p>
          <Button className="bg-farm-accent hover:bg-farm-accent/90 text-white">
            List Your Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
