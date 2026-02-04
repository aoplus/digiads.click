import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function IntegrationSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
            Complete Digital Business Suite
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            DigiAds.click works even better with AO+ Growth ERP. Bundle and save 15-20%.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">AO+ Growth</CardTitle>
              <CardDescription>ERP for MSMEs</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Manage your entire business (accounting, inventory, sales, HR) in one system. ERPNext implementation starting at ₹1.49L.</p>
              <p className="font-bold mt-4">Benefit for DigiAds Clients:</p>
              <p>Track marketing leads directly in your ERP. Closed-loop attribution. See which campaigns generate actual sales, not just leads.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="p-0 text-primary">
                <Link href="https://aoplus.in/growth" target="_blank">Learn More →</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Prodory</CardTitle>
              <CardDescription>Cloud FinOps for Enterprises</CardDescription>
            </CardHeader>
            <CardContent>
              <p>If you're a ₹10Cr+ company spending ₹10L+/month on cloud (AWS, Azure, GCP), Prodory helps you cut costs 30-40%.</p>
              <p className="font-bold mt-4">Benefit for Enterprise Clients:</p>
              <p>Enterprise clients can optimize cloud costs AND marketing spend with the AO+ family.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="p-0 text-primary">
                <Link href="https://prodory.com" target="_blank">Learn More →</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Bundle AO+ Growth ERP + DigiAds.click Growth Package: <span className="text-primary">₹85,000/month</span> (save 18%)</h3>
            <Button asChild className="mt-4">
                <Link href="#contact">Explore Bundle →</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
