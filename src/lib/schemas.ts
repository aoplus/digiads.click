import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name is required." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  monthlyRevenue: z.string({ required_error: "Please select your monthly revenue." }).min(1, { message: "Please select your monthly revenue." }),
  marketingBudget: z.string({ required_error: "Please select your marketing budget." }).min(1, { message: "Please select your marketing budget." }),
  challenge: z.string().min(10, { message: "Please describe your challenge (min. 10 characters)." }),
});
