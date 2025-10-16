import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import methodexLogo from "@/assets/methodex-logo-final.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { 
      name: "About Us", 
      href: "#about",
      subItems: ["Our Story", "Leadership", "Certifications"]
    },
    { name: "Manufacturing Facility", href: "#manufacturing" },
    { 
      name: "What We Offer", 
      href: "#services",
      subItems: ["Government Solutions", "Corporate Services", "Institutional Support"]
    },
    { 
      name: "Resources", 
      href: "#resources",
      subItems: ["Case Studies", "White Papers", "Downloads"]
    },
    { name: "Contact Us", href: "#contact" },
    { name: "Careers", href: "#careers" }
  ];

  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={methodexLogo} 
              alt="Methodex Systems" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="text-foreground hover:text-primary hover:bg-corporate-gray"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border shadow-lg">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem}>
                        <a href="#" className="w-full text-foreground hover:text-primary">
                          {subItem}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search Product, Industry..."
                  className="pl-9 w-64 bg-muted border-border"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-corporate-gray rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;