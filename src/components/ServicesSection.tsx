import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Banknote, 
  GraduationCap, 
  Factory, 
  Shield, 
  Zap,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Government Enterprises",
      description: "Comprehensive solutions for government organizations and public sector undertakings with GeM marketplace integration.",
      features: ["GeM Registered Seller", "Compliance Ready", "Bulk Procurement"]
    },
    {
      icon: Banknote,
      title: "Banking Solutions",
      description: "Specialized services for banks and financial institutions focusing on security, efficiency, and regulatory compliance.",
      features: ["Security Solutions", "Digital Infrastructure", "Compliance Support"]
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Tailored solutions for schools, colleges, and universities to enhance learning environments and operations.",
      features: ["Campus Solutions", "Digital Learning", "Infrastructure Support"]
    },
    {
      icon: Factory,
      title: "Manufacturing Facility",
      description: "State-of-the-art manufacturing facility in Pithampur, Madhya Pradesh with global quality standards.",
      features: ["ISO Certified", "Advanced Technology", "Quality Assurance"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Certified to global quality and environmental standards ensuring sustainable and reliable solutions.",
      features: ["ISO Certification", "Environmental Standards", "Quality Control"]
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "Cutting-edge solutions leveraging latest technology to enhance efficiency, safety, and sustainability.",
      features: ["Digital Solutions", "Smart Systems", "Future-Ready Technology"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to modern business needs across government, 
            corporate, and institutional sectors with over 65 years of proven excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-corporate hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="bg-gradient-corporate rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-corporate rounded-lg p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Partner with Methodex?
          </h3>
          <p className="text-xl mb-8 text-gray-100">
            Join 100,000+ satisfied customers who trust us for comprehensive business solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3 shadow-accent"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;