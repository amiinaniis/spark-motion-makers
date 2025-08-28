import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/ui/glow-effect";

const VSL = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Watch Our Process in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we transform raw footage into compelling visual stories that captivate audiences and drive results.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative group cursor-pointer">
            {/* VSL Video Placeholder - 1920x1080 aspect ratio */}
            <div 
              className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl"
              style={{ 
                width: 'min(90vw, 960px)', 
                aspectRatio: '16/9' 
              }}
            >
              {/* Glow Effect Background */}
              <GlowEffect
                colors={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary))']}
                mode="pulse"
                blur="strongest"
                duration={4}
                scale={0.8}
                className="opacity-30"
              />
              
              {/* Video Placeholder Content */}
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8">
                {/* Play Button */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Pulse rings */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-primary/30 animate-ping" />
                  <div className="absolute inset-0 w-20 h-20 rounded-full border border-primary/20 animate-ping animation-delay-1000" />
                </div>
                
                {/* Video Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Behind the Scenes: Professional Video Editing
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    A 5-minute showcase of our editing process, tools, and the magic that happens in post-production.
                  </p>
                  
                  {/* Video Stats */}
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      5:24 Duration
                    </span>
                    <span>1920x1080 HD</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="mt-8 bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300"
                >
                  Watch Full Process
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/30">
                HD Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSL;