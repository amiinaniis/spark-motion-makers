import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 2 hours",
      contact: "hello@videocraft.com",
      action: "mailto:hello@videocraft.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri 9AM-6PM EST",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our creative studio",
      contact: "123 Creative Ave, NY 10001",
      action: "#"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "24-48 hour delivery",
      contact: "Rush orders available",
      action: "#"
    }
  ];

  const services = [
    "Video Editing",
    "Motion Graphics",
    "Color Grading",
    "Audio Production",
    "YouTube Content",
    "Commercial Videos",
    "Wedding Videos",
    "Corporate Training",
    "Social Media Content",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your Video Project
            <span className="block text-primary">Let's Create Something Amazing</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your raw footage into compelling visual stories? Get in touch with our team 
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Project Details</span>
                </CardTitle>
                <CardDescription>
                  Tell us about your video project and we'll get back to you with a custom quote.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="bg-background/50 border-border focus:border-primary smooth-transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="bg-background/50 border-border focus:border-primary smooth-transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background/50 border-border focus:border-primary smooth-transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-background/50 border-border focus:border-primary smooth-transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed *</Label>
                  <select 
                    id="service"
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground focus:border-primary smooth-transition focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <select 
                      id="budget"
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground focus:border-primary smooth-transition focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select budget...</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline</Label>
                    <select 
                      id="timeline"
                      className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground focus:border-primary smooth-transition focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select timeline...</option>
                      <option value="asap">ASAP (Rush)</option>
                      <option value="1-week">Within 1 week</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your video project, goals, style preferences, and any specific requirements..."
                    rows={4}
                    className="bg-background/50 border-border focus:border-primary smooth-transition resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 smooth-transition" />
                  Send Project Request
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 2 hours during business hours. All information is kept confidential.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient border-border hover:border-primary/50 smooth-transition group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
                        <IconComponent className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{info.description}</p>
                        <a 
                          href={info.action}
                          className="text-primary hover:text-primary/80 smooth-transition font-medium"
                        >
                          {info.contact}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Process Steps */}
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Our Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Project Discussion</h4>
                    <p className="text-xs text-muted-foreground">We'll discuss your vision, requirements, and timeline.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Custom Quote</h4>
                    <p className="text-xs text-muted-foreground">Receive a detailed quote tailored to your project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Production</h4>
                    <p className="text-xs text-muted-foreground">We start working on your project with regular updates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Final Delivery</h4>
                    <p className="text-xs text-muted-foreground">Get your polished video in all required formats.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="card-gradient border-border border-primary/20">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Need Rush Delivery?</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  We offer 24-hour rush services for urgent projects.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Call for Rush Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;