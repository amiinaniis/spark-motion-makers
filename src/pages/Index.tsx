import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VSL from "@/components/VSL";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative z-10">
      <Navigation />
      <Hero />
      <VSL />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
