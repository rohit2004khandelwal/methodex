import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight
} from "lucide-react";
import methodexLogo from "@/assets/methodex-logo.png";

const Footer = () => {
  return (
    <footer className="bg-corporate-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={methodexLogo} 
                alt="Methodex Systems" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold">methodex</h3>
                <p className="text-sm text-gray-300">Efficiency That Counts</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading diversified solutions provider serving Government Enterprises, 
              PSUs, Banks, and Corporates for over 65 years with a legacy of trust and excellence.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Manufacturing Facility", 
                "What We Offer",
                "Government Solutions",
                "Corporate Services",
                "Careers"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Government Enterprises",
                "Banking Solutions",
                "Educational Institutions",
                "Quality Assurance",
                "GeM Marketplace",
                "Bulk Procurement"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="text-sm">Manufacturing Facility:</p>
                  <p className="text-sm">Pithampur, Dist. Dhar, Madhya Pradesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 (xxx) xxx-xxxx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@methodexsystems.com</span>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Button size="icon" className="bg-accent hover:bg-accent-light">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} Methodex Systems Private Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">GeM Portal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;