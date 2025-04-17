
import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-farm-green-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-bold text-xl">FarmGrow</span>
            </div>
            <p className="mb-6 text-farm-green-100">
              Empowering beginner farmers with tools and knowledge for sustainable organic farming success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-farm-green-500 p-2 rounded-full hover:bg-farm-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-farm-green-500 p-2 rounded-full hover:bg-farm-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-farm-green-500 p-2 rounded-full hover:bg-farm-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-farm-green-500 p-2 rounded-full hover:bg-farm-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Farm Planner</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Farming Guides</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Crop Database</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Weather Forecasts</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Community Forum</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-farm-green-200 transition-colors">Seasonal Calendar</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-farm-green-200" />
                <span>123 Green Valley Road, Farmville, CA 95678</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-farm-green-200" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-farm-green-200" />
                <span>contact@farmgrow.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-farm-green-500 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FarmGrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
