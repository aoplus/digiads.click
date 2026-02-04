"use server";

import type { z } from "zod";
import { contactFormSchema } from "@/lib/schemas";

export async function submitForm(data: z.infer<typeof contactFormSchema>) {
  console.log("New audit request:", data);
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and return success.
  return { success: true, message: "Your audit request has been submitted successfully!" };
}
