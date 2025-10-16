import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Heart, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Main About Content */}    
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Methodex Systems Private Limited is a leading diversified solutions provider, 
              serving Government Enterprises, PSUs, Banks, Corporates, and Institutions for 
              over 65 years. With a legacy of trust and a base of 100,000+ satisfied customers, 
              we deliver high-quality, sustainable solutions tailored to modern business needs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our nationwide presence includes 32 regional offices and state-of-the-art 
              manufacturing facility in Pithampur, Dist. Dhar, Madhya Pradesh. Certified to 
              global quality and environmental standards, we are also a registered seller on 
              the Government e-Marketplace (GeM), enabling seamless procurement for public sector clients.
            </p>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 py-3">
              View More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-corporate rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To enhance efficiency, safety, and sustainability through innovative solutions 
                that drive business growth and social impact. Where innovation meets reliability—
                Methodex is your trusted partner for comprehensive business solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-corporate hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Vision Statement</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative solutions provider, 
                setting industry standards for quality and sustainability.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-corporate hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Profile</h3>
              <p className="text-muted-foreground">
                65+ years of excellence, ISO certified, government registered, 
                with nationwide presence and cutting-edge manufacturing capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-corporate hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Pratidaan - CSR Initiative</h3>
              <p className="text-muted-foreground">
                Committed to social responsibility through our Pratidaan initiative, 
                making positive impacts in communities across India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;