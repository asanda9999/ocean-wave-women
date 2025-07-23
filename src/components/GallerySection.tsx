import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ZoomIn, X } from "lucide-react";

import maritimeTraining from "@/assets/maritime-training.jpg";
import maritimePort from "@/assets/maritime-port.jpg";
import maritimeConsultation from "@/assets/maritime-consultation.jpg";
import maritimeWomenLeaders from "@/assets/maritime-women-leaders.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: maritimeTraining,
      title: "Professional Training Programs",
      category: "Training",
      description: "Comprehensive maritime education and certification programs"
    },
    {
      id: 2,
      image: maritimePort,
      title: "Port Operations Excellence",
      category: "Operations",
      description: "Efficient vessel management and port facility coordination"
    },
    {
      id: 3,
      image: maritimeConsultation,
      title: "Strategic Consultation",
      category: "Advisory",
      description: "Expert guidance for maritime business development"
    },
    {
      id: 4,
      image: maritimeWomenLeaders,
      title: "Women Maritime Leadership",
      category: "Leadership",
      description: "Pioneering women professionals driving industry change"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work in Action</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Gallery of
            <span className="block text-secondary">Maritime Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness our commitment to maritime excellence through comprehensive 
            services, professional training, and industry-leading operations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maritime-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-secondary font-medium bg-white/20 px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-maritime-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience Maritime Excellence?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the growing number of organizations that trust Womaritime Experts 
              for their maritime needs. Let's discuss how we can support your operations.
            </p>
            <Button variant="maritime" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;