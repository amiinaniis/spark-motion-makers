import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The video editing quality exceeded our expectations. They transformed our raw footage into a masterpiece that perfectly captured our brand story.",
      name: "Sarah Johnson",
      designation: "Marketing Director at TechFlow",
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Fast turnaround, professional quality, and incredible attention to detail. Our YouTube channel has never looked better!",
      name: "Michael Rodriguez",
      designation: "Content Creator & Influencer",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Their motion graphics and visual effects brought our corporate videos to life. The team is creative, responsive, and delivers on time.",
      name: "Emily Watson",
      designation: "Creative Director at BrandWorks",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Working with this video editing agency was a game-changer for our startup. They helped us create compelling video content that drove real results.",
      name: "James Kim",
      designation: "Founder at StartupVision",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Professional, creative, and reliable. Their video editing expertise helped us launch successful ad campaigns that increased our ROI by 200%.",
      name: "Lisa Thompson",
      designation: "Head of Digital Marketing at GrowthCo",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          <span className="text-sm text-muted-foreground">Client Success Stories</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          What Our <span className="accent-gradient bg-clip-text text-transparent">Clients Say</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it. See what our satisfied clients have to say about our video editing services.
        </p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
};

export default Testimonials;