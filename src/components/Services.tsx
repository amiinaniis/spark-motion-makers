import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Film, 
  Scissors, 
  Palette, 
  Music, 
  Monitor, 
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Professional video editing with seamless transitions, color correction, and audio synchronization.",
      features: ["Color Grading", "Audio Enhancement", "Seamless Transitions", "Format Optimization"],
      price: "Starting at $299"
    },
    {
      icon: Scissors,
      title: "Post-Production",
      description: "Complete post-production workflow from raw footage to final delivery across all platforms.",
      features: ["Multi-Camera Editing", "Visual Effects", "Audio Mixing", "Final Delivery"],
      price: "Starting at $499"
    },
    {
      icon: Palette,
      title: "Motion Graphics",
      description: "Eye-catching motion graphics, animations, and visual effects that enhance your storytelling.",
      features: ["2D/3D Animations", "Logo Animations", "Text Effects", "Custom Graphics"],
      price: "Starting at $399"
    },
    {
      icon: Music,
      title: "Audio Production",
      description: "Professional audio editing, mixing, and mastering for crystal-clear sound quality.",
      features: ["Audio Cleanup", "Voice Enhancement", "Music Integration", "Sound Design"],
      price: "Starting at $199"
    },
    {
      icon: Monitor,
      title: "YouTube Optimization",
      description: "Specialized editing for YouTube content with engagement-focused techniques and thumbnails.",
      features: ["Engagement Editing", "Thumbnail Design", "SEO Optimization", "Analytics Setup"],
      price: "Starting at $249"
    },
    {
      icon: Sparkles,
      title: "Premium Package",
      description: "Complete video production service from concept to final delivery with unlimited revisions.",
      features: ["Full Production", "Unlimited Revisions", "Priority Support", "Rush Delivery"],
      price: "Starting at $999"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Video Services
            <span className="block text-primary">Tailored for Your Success</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From basic editing to complete post-production workflows, we offer comprehensive video services 
            that transform your raw footage into compelling visual stories.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-border hover:border-primary/50 smooth-transition group hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                    <IconComponent className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-gradient border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored package that fits your needs and budget.
            </p>
            <Button variant="hero" size="lg" className="group">
              Get Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;