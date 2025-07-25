import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Globe, Users, Target, ChevronRight } from "lucide-react";

const GlobalMaritimeYouthSection = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Skills Development",
      description: "Practical training to build a competent and employable maritime youth."
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship & Community Innovation",
      description: "Nurturing ocean-based businesses and sustainable local impact."
    },
    {
      icon: Globe,
      title: "Global Exposure & Collaboration",
      description: "Connecting youth to international opportunities and real-world experience."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Impact & Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Global Maritime Youth
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The non-profit impact arm of Womaritime Experts, on a mission to ignite a love for 
            the ocean while closing the gap between maritime skills and industry needs.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-maritime transition-all duration-300 hover-scale"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Impact</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                GMY supports transformation, ESG, and inclusive growth through partnerships 
                with government, private sector, NGOs, and academia.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a trusted CSI partner, we help shape purpose-driven leaders who will 
                steer Africa's ocean economy forward.
              </p>
            </div>
            
            {/* Key Impact Areas */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Transformation</h4>
                  <p className="text-sm text-muted-foreground">Driving positive change in maritime practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">ESG Commitment</h4>
                  <p className="text-sm text-muted-foreground">Environmental, social, and governance excellence</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Inclusive Growth</h4>
                  <p className="text-sm text-muted-foreground">Creating opportunities for all communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-ocean rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Become Our CSI Partner</h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in shaping the next generation of maritime leaders and 
            driving sustainable ocean economy growth across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="group">
              Partner With Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-maritime" size="lg">
              Learn More About GMY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMaritimeYouthSection;