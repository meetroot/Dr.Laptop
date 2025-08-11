import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TR</span>
              </div>
              <span className="text-xl font-bold">TechRepair</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
              Your trusted partner for affordable laptop repairs, motherboard specialists, 
              and comprehensive tech solutions. Quality service at unbeatable prices.
            </p>
            <div className="flex space-x-3">
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                <Facebook size={16} />
              </div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                <Twitter size={16} />
              </div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                <Instagram size={16} />
              </div>
              <div className="p-2 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer transition-colors">
                <Linkedin size={16} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-accent cursor-pointer transition-colors">Motherboard Repair</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Screen Replacement</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Keyboard Repair</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Data Recovery</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Cloud Services</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Web Hosting</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-accent cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Services</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-accent cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Warranty</li>
              <li className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent" />
                <span>repair@techrepair.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>123 Tech Street<br />City, ST 12345</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={16} className="text-accent mt-0.5" />
                <div>
                  <div>Mon-Fri: 9AM-7PM</div>
                  <div>Sat: 10AM-5PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <div className="mb-4 md:mb-0">
            © 2024 TechRepair. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;