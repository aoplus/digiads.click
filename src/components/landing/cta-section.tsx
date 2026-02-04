import { ContactForm } from './contact-form';

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary to-orange-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
                <h2 className="text-4xl sm:text-5xl font-extrabold font-headline">
                    Ready to Stop Wasting Money on Marketing That Doesn't Work?
                </h2>
                <p className="mt-4 text-lg text-white/80">
                    Book a free digital audit. We'll show you exactly where you're losing money and how to fix it. No obligation. No sales pitch.
                </p>
            </div>
            <div className="flex items-center justify-center">
                <ContactForm />
            </div>
        </div>
      </div>
    </section>
  );
}
