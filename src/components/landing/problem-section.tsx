import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandCoins, BarChartHorizontalBig, Handshake, Target } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <HandCoins className="h-10 w-10 text-primary" />,
      headline: "Paying ₹50K-1L/Month. No Idea If It's Working.",
      text: "Traditional agencies charge fat retainers for 'brand awareness' and 'engagement.' You get nice-looking reports but zero sales."
    },
    {
      icon: <BarChartHorizontalBig className="h-10 w-10 text-primary" />,
      headline: "Vanity Metrics, Zero Sales",
      text: "'We got you 10,000 impressions!' Great. How many actually bought? Agencies hide behind likes and shares because they can't deliver real leads."
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      headline: "Long Contracts. No Accountability.",
      text: "6-month contracts, 3-month notice periods. You're locked in even when results suck. They get paid regardless of performance."
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      headline: "One-Size-Fits-All Packages",
      text: "Cookie-cutter strategies that worked for someone else. No customization for your industry, audience, or budget. You deserve better."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Tired of Marketing Agencies That Overpromise and Underdeliver?
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            We hear this every day from MSME owners who've been burned by agencies.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-background border-none shadow-lg transform transition-transform hover:-translate-y-2 duration-300">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">{problem.icon}</div>
                <div>
                  <CardTitle className="text-xl font-bold mt-2">{problem.headline}</CardTitle>
                  <p className="text-foreground/80 mt-2">{problem.text}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <p className="text-xl font-bold text-foreground max-w-3xl mx-auto border-l-4 border-primary pl-6 italic">
              DigiAds.click is different. We eat our own dog food. If we don't deliver, we don't get paid.
            </p>
        </div>
      </div>
    </section>
  );
}
