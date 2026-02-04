export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Free Digital Audit",
      description: "30-minute call + analysis of your current marketing. We identify 3-5 quick wins and estimate ROI potential.",
      timeline: "Week 0 (Free)",
    },
    {
      number: "02",
      title: "Strategy + Proposal",
      description: "Custom strategy based on your business, budget, goals. Fixed pricing, clear KPIs, performance bonus structure (optional).",
      timeline: "Day 2-3",
    },
    {
      number: "03",
      title: "Onboarding + Setup",
      description: "We set up campaigns, tracking, dashboards. You approve creatives before anything goes live. No surprises.",
      timeline: "Week 1",
    },
    {
      number: "04",
      title: "Launch + Optimize",
      description: "Campaigns go live. We monitor daily, optimize weekly. AI handles budget allocation. You get real-time dashboard access.",
      timeline: "Weeks 2-12",
    },
    {
      number: "05",
      title: "Scale What Works",
      description: "We double down on winning campaigns, cut losing ones. Monthly strategy calls to plan next phase.",
      timeline: "Month 4+",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Simple, Transparent Process (No BS)
          </h2>
        </div>
        <div className="mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                    <div className="absolute -top-11 w-16 h-16 bg-background border-4 border-border rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="pt-8">
                        <p className="text-sm font-semibold text-primary">{step.timeline}</p>
                        <h3 className="text-xl font-bold mt-2">{step.title}</h3>
                        <p className="mt-2 text-foreground/80 text-sm">{step.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
