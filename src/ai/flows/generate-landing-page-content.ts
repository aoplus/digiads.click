'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating landing page content based on industry insights.
 *
 * It includes the `generateLandingPageContent` function, which takes an industry as input and returns generated landing page content.
 * The file also defines the input and output schemas for the flow.
 *
 * - generateLandingPageContent - A function that handles the landing page content generation process.
 * - GenerateLandingPageContentInput - The input type for the generateLandingPageContent function.
 * - GenerateLandingPageContentOutput - The return type for the generateLandingPageContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLandingPageContentInputSchema = z.object({
  industry: z
    .string()
    .describe('The industry for which to generate landing page content.'),
});
export type GenerateLandingPageContentInput = z.infer<
  typeof GenerateLandingPageContentInputSchema
>;

const GenerateLandingPageContentOutputSchema = z.object({
  content: z
    .string()
    .describe('The generated landing page content based on the industry.'),
});
export type GenerateLandingPageContentOutput = z.infer<
  typeof GenerateLandingPageContentOutputSchema
>;

export async function generateLandingPageContent(
  input: GenerateLandingPageContentInput
): Promise<GenerateLandingPageContentOutput> {
  return generateLandingPageContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLandingPageContentPrompt',
  input: {schema: GenerateLandingPageContentInputSchema},
  output: {schema: GenerateLandingPageContentOutputSchema},
  prompt: `You are an expert copywriter specializing in creating high-converting landing page content for various industries.

  Based on the provided industry, generate compelling and engaging content for a landing page that highlights the key benefits and value propositions for potential customers.

  Industry: {{{industry}}}

  Content:`,
});

const generateLandingPageContentFlow = ai.defineFlow(
  {
    name: 'generateLandingPageContentFlow',
    inputSchema: GenerateLandingPageContentInputSchema,
    outputSchema: GenerateLandingPageContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
