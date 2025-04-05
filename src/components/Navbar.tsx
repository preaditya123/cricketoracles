
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Calendar, List, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-cricket-green font-bold text-xl">CricketOracles</span>
            <div className="hidden md:flex items-center ml-8 space-x-6">
              <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-cricket-green transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/matches" className="flex items-center space-x-2 text-gray-700 hover:text-cricket-green transition-colors">
                <Calendar className="h-4 w-4" />
                <span>Fixtures</span>
              </Link>
              <Link to="/past" className="flex items-center space-x-2 text-gray-700 hover:text-cricket-green transition-colors">
                <Clock className="h-4 w-4" />
                <span>Results</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="ghost" className="text-cricket-green border-cricket-green hover:bg-cricket-green/10">
              Sign In
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="sm">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </div>
            </Link>
            <Link
              to="/matches"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Fixtures</span>
              </div>
            </Link>
            <Link
              to="/past"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Results</span>
              </div>
            </Link>
            <div className="px-4 pt-2">
              <Button variant="outline" className="w-full text-cricket-green border-cricket-green hover:bg-cricket-green/10">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
