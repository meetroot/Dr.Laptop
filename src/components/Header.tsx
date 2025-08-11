import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-tech rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TR</span>
          </div>
          <span className="text-xl font-bold text-foreground">TechRepair</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone size={16} />
            <span>+1 (555) 123-4567</span>
          </div>
          <Button variant="outline" size="sm">
            <Mail size={16} className="mr-2" />
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;