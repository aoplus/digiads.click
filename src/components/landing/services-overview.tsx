import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Smartphone, BarChart, Briefcase, Video, MessageCircle } from 'lucide-react';
import { Button } from "../ui/button";

export default function ServicesOverview() {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Google Search Ads",
      description: "Capture high-intent buyers actively searching for your product/service. Avg ROAS: 3.5X"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Meta Ads (FB + Insta)",
      description: "Reach your audience where they spend time. Perfect for D2C, local businesses. Avg CPL: ₹250"
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Search Engine Optimization",
      description: "Rank on Google for keywords your customers search. Long-term organic traffic machine."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "LinkedIn Ads (B2B)",
      description: "Target decision-makers at specific companies/industries. Ideal for B2B services, SaaS."
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "YouTube Advertising",
      description: "Video ads before, during, and after videos. Strong for brand + performance combo."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "WhatsApp Automation",
      description: "Automated lead nurturing, customer support, and sales via WhatsApp Business API."
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Our Services (All Focused on One Thing: Leads & Sales)
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 text-primary w-full justify-center">
                    <Link href="#">Learn More →</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80">
            Don't need all of these? No problem. We customize based on your business, budget, and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
