import { Button } from "@/components/ui/button";
import { GraduationCap, Lightbulb, Globe, Users, Target, ChevronRight } from "lucide-react";
import YOUTHLOGO from "@/assets/YOUTH-LOGO-removebg-preview.png";
import YOUTHIMG from "@/assets/YOUTH-IMG.png";

const GlobalMaritimeYouthSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header at the top */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Global Maritime Youth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The non-profit impact arm of Womaritime Experts, on a mission to ignite a love for 
            the ocean while closing the gap between maritime skills and industry needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column - Text and Logo */}
          <div className="bg-gray-50 p-8 md:p-12">
            {/* Logo */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto">
                  <img 
                    src={YOUTHLOGO} 
                    alt="Global Maritime Youth Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Three Pillars */}
            <div className="space-y-4 mb-8">
              <div className="bg-white border rounded-xl p-4 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#024b31' }}>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#024b31' }}></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Skills Development</h4>
                    <p className="text-sm text-gray-600">Practical training to build a competent and employable maritime youth.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border rounded-xl p-4 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#024b31' }}>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#024b31' }}></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Entrepreneurship & Community Innovation</h4>
                    <p className="text-sm text-gray-600">Nurturing ocean-based businesses and sustainable local impact.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border rounded-xl p-4 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#024b31' }}>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: '#024b31' }}></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Global Exposure & Collaboration</h4>
                    <p className="text-sm text-gray-600">Connecting youth to international opportunities and real-world experience.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Impact Statement */}
            <div className="bg-white border rounded-xl p-6 mb-8 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#024b31' }}>
              <div className="text-gray-800">
                <p className="text-lg leading-relaxed mb-4">
                  GMY supports transformation, ESG, and inclusive growth through partnerships 
                  with government, private sector, NGOs, and academia.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  As a trusted CSI partner, we help shape purpose-driven leaders who will 
                  steer Africa's ocean economy forward.
                </p>
                <div className="text-lg font-semibold" style={{ color: '#024b31' }}>Become our CSI Partner.</div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-xs text-gray-600">
              <p>WWW.WOMARITIME.COM</p>
              <p>INFO@GLOBALMARITIMEYOUTH.COM</p>
              <p>+27(0) 71 879 5034</p>
              <p>SOUTH AFRICA</p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="bg-gray-50 p-8 md:p-12">
            <div className="w-full h-full">
              <img 
                src={YOUTHIMG} 
                alt="Global Maritime Youth Team" 
                className="w-full h-full object-cover rounded-lg shadow-lg border-2"
                style={{ borderColor: '#024b31' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMaritimeYouthSection;