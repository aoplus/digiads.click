import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Bot, TrendingUp } from 'lucide-react';

export default function SolutionSection() {
  const pillars = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      headline: "Outcome-Based Pricing",
      paragraph: "You pay a base retainer (covering costs) + performance bonus based on qualified leads generated. If we don't deliver, you don't pay extra. Industry first.",
      stat: "Pay for results, not promises",
      cta: {
        text: "See Pricing Model →",
        href: "#pricing"
      }
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      headline: "AI-Powered Automation",
      paragraph: "We use AI to create ad copy, optimize budgets, score leads, and generate reports. This means better results at 40% lower cost than traditional agencies.",
      stat: "40% lower delivery cost",
      cta: {
        text: "Learn Our Process →",
        href: "#process"
      }
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      headline: "Transparent ROI Tracking",
      paragraph: "Real-time dashboard showing every rupee spent and every lead generated. No PDFs. No hiding. You see exactly what's working (and what's not).",
      stat: "100% transparent reporting",
      cta: {
        text: "See Sample Dashboard →",
        href: "#results"
      }
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Performance Marketing That Actually Performs
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            We don't do 'brand awareness' or 'engagement.' We deliver qualified leads and sales. Period.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">{pillar.icon}</div>
                <CardTitle className="text-2xl font-bold">{pillar.headline}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{pillar.paragraph}</p>
              </CardContent>
              <CardFooter className="flex-col items-start space-y-4">
                <div className="bg-accent/20 text-accent-foreground font-bold py-1 px-3 rounded-full text-sm">
                  {pillar.stat}
                </div>
                <Button variant="link" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                  <Link href={pillar.cta.href}>{pillar.cta.text}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
