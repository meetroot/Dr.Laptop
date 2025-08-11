import { Button } from "@/components/ui/button";
import { Wrench, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/50 to-accent/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Professional laptop repair workspace"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-primary">Expert Motherboard Repair Specialists</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Professional Laptop Repair
            <span className="block bg-gradient-tech bg-clip-text text-transparent">
              At Unbeatable Prices
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in cheap, reliable motherboard repairs with expert precision. 
            We also offer cloud services, web hosting, and comprehensive tech solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-tech hover:shadow-glow transition-all duration-300">
              <Wrench className="mr-2 h-5 w-5" />
              Get Free Diagnosis
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              View Services
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">24-48h</div>
              <div className="text-sm text-muted-foreground">Repair Time</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card border border-border/50">
              <Star className="w-8 h-8 text-accent mx-auto mb-3" fill="currentColor" />
              <div className="text-2xl font-bold text-foreground mb-1">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;