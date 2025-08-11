import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  Target,
  Wrench,
  Shield
} from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, label: "5000+", subtitle: "Satisfied Customers" },
    { icon: Clock, label: "5+ Years", subtitle: "Experience" },
    { icon: Award, label: "98%", subtitle: "Success Rate" },
    { icon: Target, label: "24/7", subtitle: "Support" }
  ];

  const expertise = [
    "Component-level motherboard repair",
    "Power management issues",
    "Charging port replacement", 
    "IC chip replacement",
    "BGA reworking",
    "Short circuit diagnosis"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About TechRepair</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Masters of Motherboard Repair
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in component-level laptop motherboard repair, offering the most 
            affordable solutions without compromising on quality. Our expertise extends beyond 
            hardware repair to comprehensive digital services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Choose TechRepair?
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg mt-1">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Technicians</h4>
                  <p className="text-muted-foreground text-sm">
                    Our certified technicians have years of experience in motherboard repair 
                    and component-level troubleshooting.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg mt-1">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Unbeatable Prices</h4>
                  <p className="text-muted-foreground text-sm">
                    We offer the most competitive pricing in the market while maintaining 
                    the highest quality standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent/10 rounded-lg mt-1">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fast Turnaround</h4>
                  <p className="text-muted-foreground text-sm">
                    Most repairs completed within 24-48 hours with a 90-day warranty 
                    on all work performed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Our Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-accent/10 text-accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center p-6 bg-gradient-to-br from-card to-accent/5 border-border/50">
                  <CardContent className="p-0">
                    <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.subtitle}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;