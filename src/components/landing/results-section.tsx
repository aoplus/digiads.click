import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResultsSection() {
    const caseStudies = [
    {
      industry: "Manufacturing (Auto Components)",
      companySize: "₹3.5 Cr revenue, 25 employees",
      challenge: "Zero online leads, relying 100% on referrals and trade shows.",
      solution: "Google Ads (Search + Display) + SEO for 10 high-intent keywords.",
      duration: "6 months",
      investment: "₹60K/month (₹3.6L total)",
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
      challenge: "High cost-per-acquisition (₹1,200 per patient), low show-up rate.",
      solution: "Facebook/Instagram Ads + Google Local Ads + WhatsApp automation for reminders.",
       duration: "6 months",
      investment: "₹60K/month (₹3.6L total)",
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
      challenge: "Long sales cycles, struggling to generate qualified B2B leads.",
      solution: "LinkedIn Ads + Content marketing + Email nurture sequences.",
      duration: "8 months",
      investment: "₹1.25L/month (₹10L total)",
      results: [
        { value: "89", label: "qualified leads" },
        { value: "12", label: "new clients" },
        { value: "₹1.2Cr", label: "in new contracts" },
        { value: "18.75X", label: "ROI" },
      ],
    },
  ];

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
            <Card key={index} className="flex flex-col bg-muted transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <CardHeader>
                <CardDescription className="font-semibold text-primary">{study.industry}</CardDescription>
                <CardTitle>{study.companySize}</CardTitle>
                <p className="text-sm text-foreground/80 !mt-2"><span className="font-bold">Challenge:</span> {study.challenge}</p>
                <p className="text-sm text-foreground/80"><span className="font-bold">Solution:</span> {study.solution}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                 <div className="text-sm text-foreground/80 mb-4">
                    <p><span className="font-bold">Duration:</span> {study.duration}</p>
                    <p><span className="font-bold">Investment:</span> {study.investment}</p>
                 </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {study.results.map((result, i) => (
                    <div key={i} className="bg-background p-4 rounded-lg">
                      <p className="text-3xl font-extrabold text-primary">{result.value}</p>
                      <p className="text-sm text-foreground/80 mt-1">{result.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="w-full text-primary p-0">Read Full Case Study →</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
