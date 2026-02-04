import Link from 'next/link';
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { icon: <Linkedin className="h-5 w-5" />, href: "#" },
        { icon: <Facebook className="h-5 w-5" />, href: "#" },
        { icon: <Instagram className="h-5 w-5" />, href: "#" },
        { icon: <Youtube className="h-5 w-5" />, href: "#" },
        { icon: <Twitter className="h-5 w-5" />, href: "#" },
    ];
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DigiAds.click</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-secondary-foreground/80 hover:text-primary">Home</Link></li>
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">Services</Link></li>
              <li><Link href="#pricing" className="text-secondary-foreground/80 hover:text-primary">Pricing</Link></li>
              <li><Link href="#results" className="text-secondary-foreground/80 hover:text-primary">Results</Link></li>
              <li><Link href="#about" className="text-secondary-foreground/80 hover:text-primary">About Us</Link></li>
              <li><Link href="#contact" className="text-secondary-foreground/80 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">Google Ads</Link></li>
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">Meta Ads</Link></li>
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">SEO</Link></li>
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">LinkedIn Ads</Link></li>
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">YouTube Ads</Link></li>
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">WhatsApp Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">AO+ Family</h3>
            <ul className="space-y-2">
              <li><a href="https://prodory.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary">Prodory.com</a></li>
              <li><a href="https://aoplus.in/growth" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-primary">AO+ Growth</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary">AO+ Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-secondary-foreground/80 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-secondary-foreground/80 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-secondary-foreground/80 hover:text-primary">Refund Policy</Link></li>
              <li className="pt-2"><a href="mailto:hello@digiads.click" className="text-secondary-foreground/80 hover:text-primary">hello@digiads.click</a></li>
              <li><a href="tel:+91-XXXX-XXXXXX" className="text-secondary-foreground/80 hover:text-primary">+91-XXXX-XXXXXX</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
            <div className="text-center md:text-left">
                <p>DigiAds.click is a division of AO+ Solutions Pvt Ltd</p>
                <p>CIN: U72900MH2019PTC330056 | GSTIN: 27AASCA6842P2ZQ</p>
                <p>© {new Date().getFullYear()} AO+ Solutions Pvt Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
                {socialLinks.map((link, i) => (
                    <a key={i} href={link.href} className="hover:text-primary">{link.icon}</a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
