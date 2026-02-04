"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import CountUp from './count-up';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { name: "Jan", total: Math.floor(Math.random() * 2000) + 500 },
  { name: "Feb", total: Math.floor(Math.random() * 2000) + 800 },
  { name: "Mar", total: Math.floor(Math.random() * 2000) + 1200 },
  { name: "Apr", total: Math.floor(Math.random() * 2000) + 1100 },
  { name: "May", total: Math.floor(Math.random() * 2000) + 1500 },
  { name: "Jun", total: Math.floor(Math.random() * 2000) + 1800 },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] pt-12 pb-20">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-headline">
              Stop Paying for 'Marketing.'
              <br />
              <span className="text-primary">Start Paying for Results.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              India's first performance marketing agency for MSMEs. Pay based on leads generated, not hours worked. Guaranteed ROI or your money back.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get Free Digital Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#results">See Our Results</Link>
              </Button>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-lg bg-background shadow-md">
                  <p className="text-3xl lg:text-4xl font-extrabold text-primary">
                    <CountUp end={3.5} suffix="X" />
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground/70">Average ROAS</p>
                </div>
                <div className="p-4 rounded-lg bg-background shadow-md">
                  <p className="text-3xl lg:text-4xl font-extrabold text-primary">
                    ₹<CountUp end={350} />
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground/70">Average Cost Per Lead</p>
                </div>
                <div className="p-4 rounded-lg bg-background shadow-md">
                  <p className="text-3xl lg:text-4xl font-extrabold text-primary">
                    <CountUp end={89} suffix="%" />
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground/70">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block animate-in fade-in zoom-in-95 duration-500">
            <Card className="shadow-2xl bg-background/80 backdrop-blur-sm transform transition-transform hover:scale-105 duration-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-6 w-6 text-accent" />
                  Your Growth Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <div className="p-2 bg-primary/20 text-primary rounded-md"><Users/></div>
                    <div>
                      <div className="font-bold text-lg"><CountUp end={1278} /></div>
                      <div className="text-foreground/70">Leads Generated</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <div className="p-2 bg-accent/20 text-accent rounded-md"><DollarSign/></div>
                    <div>
                      <div className="font-bold text-lg"><CountUp end={11.7} suffix="X"/></div>
                      <div className="text-foreground/70">Return on Ad Spend</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground/80 mb-2">Monthly Performance</p>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <XAxis
                      dataKey="name"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `₹${value}`}
                    />
                    <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
