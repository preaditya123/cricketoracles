
import React from "react";
import { Link } from "react-router-dom";
import { Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-cricket-green font-bold text-xl">SmartCricket</span>
            <div className="flex items-center ml-8 space-x-6">
              <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-cricket-green transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/past" className="flex items-center space-x-2 text-gray-700 hover:text-cricket-green transition-colors">
                <Clock className="h-4 w-4" />
                <span>Past Matches</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-cricket-green border-cricket-green hover:bg-cricket-green/10">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
