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
    <section id="process" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Simple, Transparent Process (No BS)
          </h2>
        </div>
        <div className="mt-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative flex md:items-center mb-12 md:mb-0 group">
              <div className={`flex items-center w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 justify-end' : 'md:pl-8 justify-start'}`}>
                <div className={`p-6 rounded-lg bg-background shadow-md w-full md:max-w-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <p className="text-sm font-semibold text-primary">{step.timeline}</p>
                    <h3 className="text-2xl font-bold mt-1">{step.title}</h3>
                    <p className="mt-2 text-foreground/80">{step.description}</p>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 h-16 bg-background border-4 border-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>
              <div className="w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
