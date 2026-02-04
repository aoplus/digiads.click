'use server';

/**
 * @fileOverview A flow for generating ad copy using AI, optimized for conversions.
 *
 * - generateAdCopy - A function that handles the ad copy generation process.
 * - GenerateAdCopyInput - The input type for the generateAdCopy function.
 * - GenerateAdCopyOutput - The return type for the generateAdCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdCopyInputSchema = z.object({
  productName: z.string().describe('The name of the product or service.'),
  targetAudience: z.string().describe('The target audience for the ad.'),
  keyFeatures: z.string().describe('Key features and benefits of the product or service.'),
  tone: z.string().describe('The desired tone of the ad copy (e.g., professional, humorous, urgent).'),
});
export type GenerateAdCopyInput = z.infer<typeof GenerateAdCopyInputSchema>;

const GenerateAdCopyOutputSchema = z.object({
  headline: z.string().describe('A compelling headline for the ad.'),
  body: z.string().describe('The main body text of the ad.'),
  callToAction: z.string().describe('A clear call to action for the ad.'),
});
export type GenerateAdCopyOutput = z.infer<typeof GenerateAdCopyOutputSchema>;

export async function generateAdCopy(input: GenerateAdCopyInput): Promise<GenerateAdCopyOutput> {
  return generateAdCopyFlow(input);
}

const generateAdCopyPrompt = ai.definePrompt({
  name: 'generateAdCopyPrompt',
  input: {schema: GenerateAdCopyInputSchema},
  output: {schema: GenerateAdCopyOutputSchema},
  prompt: `You are an expert advertising copywriter.

  Based on the information provided, generate compelling ad copy that is optimized for conversions.

  Product Name: {{{productName}}}
  Target Audience: {{{targetAudience}}}
  Key Features: {{{keyFeatures}}}
  Tone: {{{tone}}}

  Here's an example of well-written ad copy:

  Headline: "[Product Name] - Get [Benefit] Today!"
  Body: "Are you a [Target Audience] looking for [Problem]? [Product Name] is the perfect solution. [Key Features]."
  Call to Action: "Learn More & Get Started!"

  Now generate the ad copy based on the information provided.`,
});

const generateAdCopyFlow = ai.defineFlow(
  {
    name: 'generateAdCopyFlow',
    inputSchema: GenerateAdCopyInputSchema,
    outputSchema: GenerateAdCopyOutputSchema,
  },
  async input => {
    const {output} = await generateAdCopyPrompt(input);
    return output!;
  }
);
