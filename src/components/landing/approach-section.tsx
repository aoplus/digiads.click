import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Laptop, BarChart, Paintbrush } from 'lucide-react';

export default function ApproachSection() {
  const pillars = [
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      headline: "Social + Digital",
      text: "We integrate Social Media Marketing with Search (Organic + Paid) and Performance Marketing for maximum reach and ROI."
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      headline: "Mobile + Web",
      text: "Any-time, any-where, any-device convenience. We create mobile-first campaigns that work across all platforms."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      headline: "Analytics",
      text: "No Data is Big Data. We generate actionable insights that impact ORM, lead generation, and campaign performance."
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      headline: "Creative",
      text: "Data-driven creativity. We blend compelling storytelling with performance marketing to drive conversions."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Our Approach</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline mt-2">
            SMAC: Social + Mobile + Analytics + Creative
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            We don't just run ads. We combine performance marketing (Google, Meta, LinkedIn) with creative storytelling and data analytics to deliver campaigns that actually convert.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-muted border-none shadow-sm text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">{pillar.icon}</div>
                <CardTitle className="text-xl font-bold mt-4">{pillar.headline}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{pillar.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
