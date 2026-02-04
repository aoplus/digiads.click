"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/actions";
import { contactFormSchema } from "@/lib/schemas";

export function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      phone: "",
      email: "",
      challenge: "",
      monthlyRevenue: "",
      marketingBudget: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const result = await submitForm(values);
    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

  return (
    <div className="w-full max-w-3xl bg-background p-8 rounded-lg shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground">Incentive</h3>
        <p className="text-muted-foreground mt-2">
          First 10 Businesses Get: Free competitor analysis + 50% off Month 1 (₹12.5K-62.5K savings)
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Rajesh Kumar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Industries" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monthlyRevenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Revenue</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="<₹50L">&lt; ₹50L</SelectItem>
                      <SelectItem value="₹50L-1Cr">₹50L - ₹1Cr</SelectItem>
                      <SelectItem value="₹1-5Cr">₹1Cr - ₹5Cr</SelectItem>
                      <SelectItem value="₹5-10Cr">₹5Cr - ₹10Cr</SelectItem>
                      <SelectItem value="₹10Cr+">₹10Cr+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketingBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Marketing Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="<₹25K">&lt; ₹25K</SelectItem>
                      <SelectItem value="₹25-50K">₹25K - ₹50K</SelectItem>
                      <SelectItem value="₹50K-1L">₹50K - ₹1L</SelectItem>
                      <SelectItem value="₹1-2L">₹1L - ₹2L</SelectItem>
                      <SelectItem value="₹2L+">₹2L+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="challenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Biggest Challenge</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Not getting enough leads, leads are low quality, don't know if marketing is working..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full text-lg !bg-white !text-primary hover:!bg-gray-200">
            Book Free Audit
          </Button>
        </form>
      </Form>
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">Prefer to talk first? Call/WhatsApp:
          <a href="tel:+91-XXXX-XXXXXX" className="font-semibold text-foreground underline ml-1">
            +91-XXXX-XXXXXX
          </a>
        </p>
      </div>
    </div>
  );
}
