import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Eye, Calendar } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Tech Startup Commercial",
      category: "Commercial",
      description: "High-energy commercial for a tech startup featuring dynamic animations and modern transitions.",
      duration: "2:30",
      completedDate: "Dec 2024",
      views: "1.2M",
      tags: ["Motion Graphics", "Commercial", "Tech"],
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "YouTube Creator Series",
      category: "YouTube",
      description: "Complete editing package for a YouTube creator's weekly series with custom intros and outros.",
      duration: "15:45",
      completedDate: "Dec 2024",
      views: "850K",
      tags: ["YouTube", "Series", "Gaming"],
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Wedding Highlight Reel",
      category: "Wedding",
      description: "Emotional wedding highlight reel with cinematic color grading and seamless storytelling.",
      duration: "4:20",
      completedDate: "Nov 2024",
      views: "45K",
      tags: ["Wedding", "Cinematic", "Emotional"],
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Product Demo Video",
      category: "Product",
      description: "Clean and professional product demonstration with animated callouts and smooth transitions.",
      duration: "3:15",
      completedDate: "Nov 2024",
      views: "320K",
      tags: ["Product", "Demo", "Corporate"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Music Video Production",
      category: "Music",
      description: "Creative music video with synchronized effects, color grading, and dynamic cuts.",
      duration: "3:45",
      completedDate: "Oct 2024",
      views: "2.1M",
      tags: ["Music Video", "Creative", "Effects"],
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Corporate Training Video",
      category: "Corporate",
      description: "Professional training video series with clear explanations and engaging visual elements.",
      duration: "8:30",
      completedDate: "Oct 2024",
      views: "125K",
      tags: ["Corporate", "Training", "Professional"],
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&crop=center"
    }
  ];

  const categories = ["All", "Commercial", "YouTube", "Wedding", "Product", "Music", "Corporate"];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Our Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Portfolio Showcase
            <span className="block text-primary">Recent Projects & Success Stories</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our diverse portfolio of video projects across different industries and styles. 
            Each project represents our commitment to quality and creative excellence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground smooth-transition"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-gradient border-border hover:border-primary/50 smooth-transition group overflow-hidden animate-fade-in hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                {/* Thumbnail */}
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 smooth-transition" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 smooth-transition cursor-pointer">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {item.category}
                  </Badge>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-foreground">
                    {item.duration}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary smooth-transition">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.completedDate}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs px-2 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" size="sm" className="w-full group">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 smooth-transition" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-gradient border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your video project and bring your vision to life with our professional editing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
              </Button>
              <Button variant="outline" size="lg">
                View All Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;