import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield } from 'lucide-react';

const PackageFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <Check className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
    <span className="text-foreground/80">{children}</span>
  </li>
);

export default function PricingSection() {
  const packages = [
    {
      name: "Starter",
      badge: "Best for New Businesses",
      price: "₹25,000",
      billing: "₹2,25,000/year (10% discount)",
      features: [
        "Local SEO (10 keywords)",
        "Google Business Profile optimization",
        "12 social media posts (2 platforms)",
        "Google Ads (up to ₹10K budget managed)",
        "2 blog posts/month",
        "Monthly performance report",
        "30-min strategy call/month",
      ],
      expected: "50-100 qualified leads/month",
      bestFor: "Local businesses, service providers, ₹50L-1Cr revenue",
      cta: { text: "Get Started", href: "#contact" },
      isHighlighted: false,
    },
    {
      name: "Growth",
      badge: "⭐ Most Popular",
      price: "₹60,000",
      billing: "₹6,00,000/year (17% discount)",
      features: [
        "Everything in Starter, PLUS:",
        "SEO (25 keywords) + technical optimization",
        "Google Ads (up to ₹30K budget)",
        "Facebook/Instagram Ads management",
        "20 social posts (3 platforms) + 4 blog posts",
        "Email marketing (2 campaigns/month)",
        "Bi-weekly strategy calls",
        "Real-time analytics dashboard",
      ],
      expected: "150-300 qualified leads/month",
      bestFor: "Growing SMBs, D2C brands, ₹1Cr-5Cr revenue",
      cta: { text: "Choose Growth", href: "#contact" },
      isHighlighted: true,
    },
    {
      name: "Pro",
      badge: "Best for Scaling Businesses",
      price: "₹1,25,000",
      billing: "₹12,50,000/year (17% discount)",
      features: [
        "Everything in Growth, PLUS:",
        "Comprehensive SEO (50+ keywords)",
        "Multi-platform ads (Google, Meta, LinkedIn)",
        "Full social media management (5 platforms)",
        "Content marketing (8 articles, 2 videos/mo)",
        "Micro-influencer outreach",
        "Marketing automation + CRM integration",
        "Dedicated account manager",
      ],
      expected: "400-800 qualified leads/month",
      bestFor: "Established businesses, ₹5Cr-10Cr revenue",
      cta: { text: "Contact Us", href: "#contact" },
      isHighlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Transparent Pricing (No Hidden Fees)
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Choose your package. Add performance bonus if you want skin-in-the-game pricing.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <Card key={pkg.name} className={`flex flex-col ${pkg.isHighlighted ? 'border-2 border-primary shadow-2xl relative' : ''}`}>
              {pkg.isHighlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">{pkg.badge}</div>
              )}
              <CardHeader className="pt-12">
                {!pkg.isHighlighted && <div className="text-sm font-semibold text-primary">{pkg.badge}</div>}
                <CardTitle className="text-3xl font-bold">{pkg.name}</CardTitle>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold">{pkg.price}</span>
                    <span className="text-foreground/70">/month</span>
                </div>
                <CardDescription>{pkg.billing}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => <PackageFeature key={i}>{feature}</PackageFeature>)}
                </ul>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                  <div className="w-full">
                    <p className="font-bold">Expected Results:</p>
                    <p className="text-sm text-foreground/80">{pkg.expected}</p>
                  </div>
                  <div className="w-full">
                    <p className="font-bold">Best For:</p>
                    <p className="text-sm text-foreground/80">{pkg.bestFor}</p>
                  </div>
                <Button asChild size="lg" className="w-full" variant={pkg.isHighlighted ? 'default' : 'outline'}>
                  <Link href={pkg.cta.href}>{pkg.cta.text}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border-2 border-primary border-dashed rounded-lg p-8 text-center md:text-left">
                <h3 className="text-2xl font-bold">Performance Pricing Available</h3>
                <p className="mt-2 text-foreground/80">Add 10-15% of qualified lead value to any package. We only earn extra when you get results. Ask about it!</p>
                <Button variant="link" asChild className="p-0 mt-4 h-auto text-primary text-base">
                    <Link href="#contact">Learn About Performance Pricing →</Link>
                </Button>
            </div>
            <div className="bg-secondary text-secondary-foreground rounded-lg p-8 text-center md:text-left">
                <h3 className="text-2xl font-bold flex items-center gap-2 justify-center md:justify-start">
                    <Shield className="text-accent"/> Money-Back Guarantee
                </h3>
                <p className="mt-2 text-secondary-foreground/80">If we don't hit agreed-upon KPIs in 90 days, we refund 50% of fees. No questions asked.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
