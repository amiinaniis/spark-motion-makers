import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Play } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">VideoCraft</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary smooth-transition">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary smooth-transition">
              Services
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary smooth-transition">
              Portfolio
            </a>
            <a href="#about" className="text-foreground hover:text-primary smooth-transition">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary smooth-transition">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="hero" size="default">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary smooth-transition py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-primary smooth-transition py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="text-foreground hover:text-primary smooth-transition py-2"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary smooth-transition py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary smooth-transition py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button variant="hero" size="default" className="mt-4 w-full">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;