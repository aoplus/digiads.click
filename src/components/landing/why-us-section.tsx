export default function WhyUsSection() {
    const reasons = [
        {
            number: "01",
            headline: "We're Built for MSMEs (Not Enterprises)",
            text: "Big agencies focus on ₹10Cr+ companies with ₹5L+/month budgets. We specialize in ₹50L-10Cr businesses with ₹25K-1L/month budgets. We understand your constraints and deliver ROI at your scale."
        },
        {
            number: "02",
            headline: "Performance Pricing (Skin in the Game)",
            text: "Other agencies charge fixed retainers whether you get results or not. We offer performance bonuses—we only make extra when you get qualified leads. That's how confident we are."
        },
        {
            number: "03",
            headline: "Part of AO+ Solutions Ecosystem",
            text: "DigiAds.click is part of AO+ Solutions, which also runs Prodory (enterprise cloud FinOps) and AO+ Growth (MSME ERP). We integrate with your business operations, not just throw ads at the wall."
        },
    ]
    return (
    <section id="about" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Why MSMEs Choose DigiAds.click
          </h2>
        </div>
        <div className="mt-16 max-w-4xl mx-auto space-y-12">
            {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                    <div className="text-7xl font-extrabold text-primary/20 leading-none">
                        {reason.number}
                    </div>
                    <div className="md:-mt-2">
                        <h3 className="text-2xl font-bold">{reason.headline}</h3>
                        <p className="mt-2 text-lg text-foreground/80">{reason.text}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
