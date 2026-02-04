import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import TrustSignals from '@/components/landing/trust-signals';
import ApproachSection from '@/components/landing/approach-section';
import ProblemSection from '@/components/landing/problem-section';
import ServicesOverview from '@/components/landing/services-overview';
import PricingSection from '@/components/landing/pricing-section';
import ResultsSection from '@/components/landing/results-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import ProcessSection from '@/components/landing/process-section';
import WhyUsSection from '@/components/landing/why-us-section';
import IntegrationSection from '@/components/landing/integration-section';
import ClientsSection from '@/components/landing/clients-section';
import FaqSection from '@/components/landing/faq-section';
import CtaSection from '@/components/landing/cta-section';
import Footer from '@/components/landing/footer';
import SolutionSection from '@/components/landing/solution-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrustSignals />
        <ApproachSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesOverview />
        <PricingSection />
        <ResultsSection />
        <TestimonialsSection />
        <ProcessSection />
        <WhyUsSection />
        <IntegrationSection />
        <ClientsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
