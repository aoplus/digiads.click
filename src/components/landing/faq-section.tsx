import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "How is DigiAds.click different from other digital marketing agencies?",
      answer: "Three key differences: (1) Performance-based pricing option—we only earn extra when you get results. (2) Built for MSMEs (₹50L-10Cr revenue), not enterprises. (3) AI-powered automation means better results at 40% lower cost.",
    },
    {
      question: "What is 'performance pricing' and how does it work?",
      answer: "You pay a base retainer (e.g., ₹60,000) that covers our costs. Then, you add a performance bonus: 10-15% of the value of qualified leads we generate. Example: If we generate 100 leads worth ₹5L to you, we get a ₹50K-75K bonus. We only make more when you make more.",
    },
    {
      question: "Can I just pay the base retainer (no performance bonus)?",
      answer: "Yes! Performance pricing is optional. Many clients start with a fixed retainer, then switch to the performance model once they trust us.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Realistic timeline: 30-60 days for paid ads (Google, Meta), 90-120 days for SEO. We set KPIs together and track weekly. If we're not on track by day 60, we course-correct aggressively.",
    },
    {
      question: "What if I've tried digital marketing before and it didn't work?",
      answer: "You're not alone. Most MSMEs have been burned by agencies overpromising and underdelivering. Key differences with us: (1) We focus on leads/sales, not vanity metrics. (2) Transparent reporting (you see everything). (3) We specialize in your segment (MSMEs), not trying to serve everyone."
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No. We offer month-to-month agreements. We earn your business every month by delivering results. (We do recommend 3-6 months to see the full potential, but you can cancel anytime with 30 days notice.)"
    },
    {
      question: "What industries do you work with?",
      answer: "Our sweet spot: Manufacturing, B2B services (consulting, legal, accounting), Healthcare/wellness, Retail/D2C, Education. We avoid: Highly regulated industries (pharma, financial products), businesses with <₹30K marketing budget."
    },
    {
      question: "Can you guarantee X number of leads or Y ROI?",
      answer: "We don't make guarantees because too many variables are outside our control (your sales team's closing rate, product-market fit, etc.). What we DO guarantee: Transparent reporting, best-in-class execution, and our 90-day money-back policy if we don't hit agreed-upon KPIs."
    },
    {
        question: "How do you measure ROI?",
        answer: "We track: (1) Leads generated, (2) Cost per lead, (3) Lead-to-customer conversion rate (you tell us), (4) Customer lifetime value (you tell us). Then: (Revenue from new customers - Marketing cost) / Marketing cost = ROI. We show this in your real-time dashboard."
    },
    {
        question: "Do you work with companies outside India?",
        answer: "We focus on Indian MSMEs primarily. For international companies with India operations, please contact us to discuss."
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
