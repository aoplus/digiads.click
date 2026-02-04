"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#clients' },
    { name: 'Case Studies', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-3xl font-bold text-foreground">
              DigiAds<span className="text-primary">.click</span>
            </Link>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
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
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+917977875818" className="flex items-center font-medium text-sm text-foreground/80 hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              +917977875818
            </a>
            <Button asChild>
              <Link href="#contact">Free Consultation</Link>
            </Button>
          </div>
          <div className="lg:hidden">
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
                     <a href="tel:+917977875818" className="flex items-center font-medium text-foreground/80 hover:text-primary">
                        <Phone className="h-4 w-4 mr-2" />
                        +917977875818
                     </a>
                     <Button asChild className="w-full">
                       <Link href="#contact">Free Consultation</Link>
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
