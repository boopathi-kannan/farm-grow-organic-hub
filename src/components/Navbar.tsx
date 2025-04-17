
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-farm-green-500" />
          <span className="font-bold text-xl text-farm-green-600">FarmGrow</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-farm-brown-500 hover:text-farm-green-500 font-medium">
            Home
          </Link>
          <Link to="/" className="text-farm-brown-500 hover:text-farm-green-500 font-medium">
            Farm Planner
          </Link>
          <Link to="/" className="text-farm-brown-500 hover:text-farm-green-500 font-medium">
            Marketplace
          </Link>
          <Link to="/" className="text-farm-brown-500 hover:text-farm-green-500 font-medium">
            Resources
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="outline" className="border-farm-green-400 text-farm-green-600 hover:bg-farm-green-100">
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button className="bg-farm-green-500 hover:bg-farm-green-600 text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
