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
import founderImage from "@/assets/founder-image.jpg";

const AboutSection = () => {
  const services = [
    {
      icon: Ship,
      title: "Vessel Support & Technical Services",
      description: "Comprehensive technical and operational support for maritime vessels",
      capabilities: [
        "Successful coordination of dry docking and repair projects for highly operational vessels at South African ports",
        "Ship medical supplies and certification",
        "Ship chandling services with 48 hr turnaround",
        "Crew changeover transportation and welfare support for regional shipping companies during peak season",
        "Bunker fuel arrangements and port clearances for time-sensitive voyages",
        "FFA & LSA servicing",
        "Delivered tank cleaning and steelwork, and related ship repair services in line with SOLAS regulations"
      ]
    },
    {
      icon: TrendingUp,
      title: "Strategic Maritime Advisory",
      description: "Expert guidance for maritime business development and optimization",
      capabilities: [
        "Full SOLAS (MLC, ISM, ISPS) Compliance accreditation project for 5 vessels from scratch",
        "Inland Port readiness assessment and operational risk audit for regional logistics hub",
        "WPS classification society compliance for steelwork companies",
        "Classification society changeover to more reasonable, local, and reliable class",
        "SMME services integration to client vendor databases to cut costs on larger service providers",
        "Oceans economy strategy project for the KZN Government",
        "Vessel Gross Management compliance"
      ]
    },
    {
      icon: BookOpen,
      title: "Specialised Maritime Training",
      description: "Professional development programs for maritime industry excellence",
      capabilities: [
        "Solved a non-accreditation failed maritime project of over 105 students",
        "Full maritime courses SAMSA accreditations for a maritime college",
        "Designed a Maritime New Venture Creation program for SMMEs",
        "SOLAS Training for shipping companies (both crew and shore-based staff)",
        "STCW training program facilitation",
        "Work Readiness Program facilitation",
        "Designed soft skills and leadership series tailored for shipping companies",
        "Designed women in scarce skills training program",
        "Boat manufacturing training"
      ]
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

        {/* Story Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Founder Image */}
            <div className="md:col-span-1">
              <div className="relative">
                <img 
                  src={founderImage} 
                  alt="Londy Ngcobo - Founder of Womaritime Experts" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-semibold text-foreground">Londy Ngcobo</h4>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
                <p className="text-xs text-muted-foreground mt-1">Africa's First Female Dredge Master</p>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="md:col-span-2">
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Womaritime Experts was born out of a deep understanding of both the operational 
                  and strategic needs of the maritime industry. After years at sea including making 
                  history as Africa's first female dredge master and later serving as Maritime 
                  Compliance Manager and Designated Person Ashore (DPA) for one of South Africa's 
                  largest state-owned entities, our founder, Londy Ngcobo, identified a crucial gap: 
                  the need for stronger alignment between onboard operations and shore-based strategy, 
                  and the visible underrepresentation of women in technical and advisory roles across 
                  the ocean economy.
                </p>
                <p>
                  In response to the reality that women make up less than 2% of the maritime workforce, 
                  Womaritime Experts was founded not as a movement, but as a high-impact service company 
                  that delivers tangible results while championing greater representation.
                </p>
                <p>
                  Today, our team of maritime professionals, consultants, and sector leaders reflects 
                  the strength, excellence, and diversity that continues to drive Africa's ocean economy 
                  forward. From boardrooms to shipyards, and from training rooms to global stages, we 
                  lead with purpose and the bold belief that transformation is not a side agenda—it is 
                  a strategic advantage.
                </p>
              </div>
            </div>
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

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Our Services</h3>
          <div className="space-y-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gradient-ocean rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Proven Capabilities */}
                <div className="ml-16">
                  <h5 className="text-sm font-semibold text-foreground mb-2">Proven Capabilities:</h5>
                  <ul className="space-y-1">
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground leading-relaxed">{capability}</span>
                      </li>
                    ))}
                  </ul>
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

        {/* Awards & Recognition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Maritime Professionals at Our Core
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At our core, we are maritime professionals and we look forward to bringing our 
              expertise to your organization. One that the broader maritime ecosystem should 
              not only recognize but take pride in supporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;