import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Ship, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Heart,
  CheckCircle
} from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Ship,
      title: "Vessel Support",
      description: "Comprehensive technical and operational support for maritime vessels"
    },
    {
      icon: TrendingUp,
      title: "Strategic Advisory",
      description: "Expert guidance for maritime business development and optimization"
    },
    {
      icon: BookOpen,
      title: "Specialized Training",
      description: "Professional development programs for maritime industry excellence"
    }
  ];

  const values = [
    "Technical Excellence",
    "Safety First",
    "Sustainable Practices",
    "Women Leadership",
    "Global Standards",
    "Innovation Focus"
  ];

  return (
    <section id="about" className="py-20 bg-maritime-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Womaritime Experts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Integrated Maritime Services
            <span className="block text-secondary">for Africa's Ocean Economy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine deep industry insight with global standards to keep fleets and 
            organisations operating safely, efficiently, and sustainably.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Womaritime Experts (PTY) LTD stands at the forefront of Africa's maritime 
                transformation. As a proudly women-led organization, we bring fresh perspectives 
                and innovative solutions to traditional maritime challenges.
              </p>
              <p>
                Our integrated approach combines vessel support services, strategic advisory, 
                and specialized training to create a comprehensive maritime ecosystem that 
                drives growth, ensures safety, and promotes sustainability.
              </p>
              <p>
                With a steadfast commitment to excellence and a deep understanding of both 
                local and global maritime requirements, we're building the future of 
                Africa's ocean economy.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Core Values</h4>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Services */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Services</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-ocean rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="maritime" size="lg" className="w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Women-Led Excellence in Maritime
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognized for bringing innovative perspectives and technical excellence 
              to Africa's maritime industry, setting new standards for inclusive 
              leadership and sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;