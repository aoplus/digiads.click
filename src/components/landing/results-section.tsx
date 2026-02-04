import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ResultsSection() {
    const caseStudies = [
    {
      industry: "Manufacturing (Auto Components)",
      companySize: "₹3.5 Cr revenue, 25 employees",
      challenge: "Zero online leads, relying 100% on referrals and trade shows",
      solution: "Google Ads (Search + Display) + SEO for 10 high-intent keywords",
      results: [
        { value: "127", label: "qualified leads" },
        { value: "18", label: "new customers" },
        { value: "₹42L", label: "in new sales" },
        { value: "11.7X", label: "ROI" },
      ],
    },
    {
      industry: "Healthcare (Dental Clinic Chain)",
      companySize: "₹1.8 Cr revenue, 3 locations",
      challenge: "High cost-per-acquisition (₹1,200 per patient), low show-up rate",
      solution: "Facebook/Instagram Ads + Google Local Ads + WhatsApp automation for reminders",
      results: [
        { value: "₹450", label: "cost per patient" },
        { value: "340", label: "new patients" },
        { value: "85%", label: "show-up rate" },
        { value: "8.5X", label: "ROI" },
      ],
    },
    {
      industry: "B2B Services (HR Consulting)",
      companySize: "₹5 Cr revenue, 12 consultants",
      challenge: "Long sales cycles, struggling to generate qualified B2B leads",
      solution: "LinkedIn Ads + Content marketing + Email nurture sequences",
      results: [
        { value: "89", label: "qualified leads" },
        { value: "12", label: "new clients" },
        { value: "₹1.2Cr", label: "in new contracts" },
        { value: "18.75X", label: "ROI" },
      ],
    },
  ];

  const testimonials = [
      {
          quote: "We spent ₹50K/month with another agency for a year and got nothing. DigiAds.click delivered more leads in 3 months than we got in 12 months before. Finally, marketing that works.",
          attribution: "— Rajesh Kumar, Founder, Auto Components Manufacturing",
          image: PlaceHolderImages.find(p => p.id === 'testimonial-1')
      },
      {
          quote: "The performance pricing model was a game-changer. They literally only made more money when we made more money. That's the kind of partnership we needed.",
          attribution: "— Dr. Priya Shah, Owner, Dental Clinic Chain",
          image: PlaceHolderImages.find(p => p.id === 'testimonial-2')
      },
      {
          quote: "As a B2B company, we thought digital marketing wouldn't work. DigiAds.click proved us wrong. LinkedIn Ads brought us ₹1.2Cr in new business in 8 months.",
          attribution: "— Amit Desai, CEO, HR Consulting Firm",
          image: PlaceHolderImages.find(p => p.id === 'testimonial-3')
      }
  ]

  return (
    <section id="results" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Real Results. Real ROI. Real MSMEs.
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            We let our work speak for itself. Here are results from clients just like you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardDescription className="font-semibold text-primary">{study.industry}</CardDescription>
                <CardTitle>{study.companySize}</CardTitle>
                <p className="text-sm text-foreground/80 !mt-2"><span className="font-bold">Challenge:</span> {study.challenge}</p>
                <p className="text-sm text-foreground/80"><span className="font-bold">Solution:</span> {study.solution}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-muted p-4 rounded-lg">
                      <p className="text-2xl font-extrabold text-primary">{result.value}</p>
                      <p className="text-sm text-foreground/80">{result.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read Full Case Study →</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
                <Card key={i} className="bg-muted border-0">
                    <CardContent className="pt-6">
                        <p className="italic text-foreground/90">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 mt-4">
                            {testimonial.image && (
                                <Avatar>
                                    <Image
                                        src={testimonial.image.imageUrl}
                                        alt={testimonial.image.description}
                                        width={40}
                                        height={40}
                                        data-ai-hint={testimonial.image.imageHint}
                                    />
                                    <AvatarFallback>{testimonial.attribution.charAt(2)}</AvatarFallback>
                                </Avatar>
                            )}
                            <p className="text-sm font-medium text-foreground">{testimonial.attribution}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
