"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Target, Phone, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      {isBannerVisible && (
        <div className="relative bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center text-sm font-medium">
            <Target className="inline-block h-4 w-4 mr-2" />
            Limited Offer: First 10 Clients Get 50% Off Month 1 -{' '}
            <Link href="#contact" className="underline font-bold hover:text-primary">
              Book Free Audit Now
            </Link>
          </div>
          <button
            onClick={() => setIsBannerVisible(false)}
            className="absolute top-1/2 right-4 -translate-y-1/2"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-2xl font-bold text-foreground">
              DigiAds<span className="text-primary">.click</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+91-XXXX-XXXXXX" className="flex items-center font-medium text-sm text-foreground/80 hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              +91-XXXX-XXXXXX
            </a>
            <Button asChild>
              <Link href="#contact">Get Free Digital Audit</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-10">
                  <Link href="#home" className="text-2xl font-bold text-foreground mb-4">
                    DigiAds<span className="text-primary">.click</span>
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-6 space-y-4 border-t">
                     <a href="tel:+91-XXXX-XXXXXX" className="flex items-center font-medium text-foreground/80 hover:text-primary">
                        <Phone className="h-4 w-4 mr-2" />
                        +91-XXXX-XXXXXX
                     </a>
                     <Button asChild className="w-full">
                       <Link href="#contact">Get Free Digital Audit</Link>
                     </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
