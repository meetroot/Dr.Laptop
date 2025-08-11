import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Cloud, 
  Globe, 
  HardDrive, 
  Laptop, 
  Server,
  Zap,
  Shield,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Motherboard Repair",
      description: "Expert repair of laptop motherboards at unbeatable prices. We fix power issues, charging problems, and component failures.",
      price: "From $49",
      features: ["Component-level repair", "Power jack replacement", "IC chip replacement", "90-day warranty"],
      popular: true
    },
    {
      icon: Laptop,
      title: "General Laptop Repair",
      description: "Complete laptop repair services including screen replacement, keyboard repair, and hardware upgrades.",
      price: "From $29",
      features: ["Screen replacement", "Keyboard repair", "RAM upgrades", "SSD installation"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Reliable cloud hosting and storage solutions for businesses and individuals.",
      price: "From $9/mo",
      features: ["99.9% uptime", "Daily backups", "24/7 support", "Scalable solutions"]
    },
    {
      icon: Globe,
      title: "Web Hosting",
      description: "Fast, secure web hosting with excellent customer support and competitive pricing.",
      price: "From $5/mo",
      features: ["Free SSL certificate", "Daily backups", "One-click installs", "Email hosting"]
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Professional data recovery services for hard drives, SSDs, and other storage devices.",
      price: "From $99",
      features: ["Free diagnosis", "No data, no charge", "Secure process", "Quick turnaround"]
    },
    {
      icon: Server,
      title: "IT Support",
      description: "Comprehensive IT support and maintenance for businesses and home users.",
      price: "From $79/hr",
      features: ["Remote support", "On-site visits", "Network setup", "System maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Tech Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From motherboard repairs to cloud hosting, we provide comprehensive technology services 
            at competitive prices with expert quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-card transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm ${
                  service.popular ? 'ring-2 ring-accent/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-tech text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;