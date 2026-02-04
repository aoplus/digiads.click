import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
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
    <section className="py-16 sm:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold font-headline">
                    What Our Clients Say
                </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, i) => (
                    <Card key={i} className="bg-secondary-foreground/5 border-secondary-foreground/20 text-secondary-foreground">
                        <CardContent className="pt-6">
                            <p className="text-lg italic">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4 mt-6">
                                {testimonial.image && (
                                    <Avatar>
                                        <Image
                                            src={testimonial.image.imageUrl}
                                            alt={testimonial.image.description}
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                            data-ai-hint={testimonial.image.imageHint}
                                        />
                                        <AvatarFallback>{testimonial.attribution.charAt(2)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <p className="text-sm font-medium">{testimonial.attribution}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
