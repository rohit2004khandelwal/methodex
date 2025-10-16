import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional corporate environment showcasing Methodex excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-dark/95 via-corporate-primary/90 to-corporate-accent/85"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Leading Solutions Provider for{" "}
              <span className="text-accent">65+ Years</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              Methodex Systems Private Limited delivers high-quality, sustainable solutions to 
              Government Enterprises, PSUs, Banks, and Corporates nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 shadow-accent"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
              >
                View Company Profile
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">65+</div>
                <div className="text-sm text-gray-200">Years of Excellence</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">100,000+</div>
                <div className="text-sm text-gray-200">Satisfied Customers</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold">32</div>
                <div className="text-sm text-gray-200">Regional Offices</div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Methodex?</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Government Registered:</strong> Certified seller on Government e-Marketplace (GeM)
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>ISO Certified:</strong> Global quality and environmental standards compliance
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Manufacturing Excellence:</strong> State-of-the-art facility in Madhya Pradesh
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Nationwide Presence:</strong> End-to-end solutions across India
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;