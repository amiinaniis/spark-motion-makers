import { Button } from "@/components/ui/button";
import { Waves } from "@/components/ui/waves-background";
import { GlowEffect } from "@/components/ui/glow-effect";
import { Play, ArrowRight, Film, Edit3, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80" />
      
      {/* Interactive Waves Background */}
      <Waves 
        lineColor="hsl(180 100% 50% / 0.6)"
        backgroundColor="transparent"
        waveSpeedX={0.015}
        waveSpeedY={0.008}
        waveAmpX={25}
        waveAmpY={15}
        friction={0.92}
        tension={0.008}
        maxCursorMove={80}
        xGap={15}
        yGap={40}
        className="opacity-60"
      />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow-pulse" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/30 rounded-full blur-lg animate-glow-pulse animation-delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-glow-pulse animation-delay-2000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Professional Video Editing Agency</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Transform Your
            <span className="block accent-gradient bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Video Content
            </span>
            Into Masterpieces
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We specialize in professional video editing, motion graphics, and post-production services that bring your vision to life. From YouTube content to corporate videos, we make every frame count.
          </p>

          {/* Glow Effect Box */}
          <div className="relative w-[1920px] h-[1080px] max-w-full mx-auto mb-12 rounded-lg overflow-hidden">
            <GlowEffect
              colors={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary))', 'hsl(var(--accent))']}
              mode="rotate"
              blur="medium"
              duration={8}
            />
            <div className="relative w-full h-full bg-background/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Premium Video Editing</h2>
                <p className="text-muted-foreground">Experience the magic of professional video transformation</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Average Turnaround</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 smooth-transition" />
              Watch Our Work
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center space-x-3 card-gradient border border-border rounded-lg p-4 hover:border-primary/50 smooth-transition group">
              <Film className="w-6 h-6 text-primary group-hover:scale-110 smooth-transition" />
              <span className="text-sm font-medium">Professional Editing</span>
            </div>
            <div className="flex items-center justify-center space-x-3 card-gradient border border-border rounded-lg p-4 hover:border-primary/50 smooth-transition group">
              <Edit3 className="w-6 h-6 text-primary group-hover:scale-110 smooth-transition" />
              <span className="text-sm font-medium">Motion Graphics</span>
            </div>
            <div className="flex items-center justify-center space-x-3 card-gradient border border-border rounded-lg p-4 hover:border-primary/50 smooth-transition group">
              <Zap className="w-6 h-6 text-primary group-hover:scale-110 smooth-transition" />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;