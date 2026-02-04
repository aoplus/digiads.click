'use server';

/**
 * @fileOverview A lead scoring AI agent.
 *
 * - automatedLeadScoring - A function that handles the lead scoring process.
 * - AutomatedLeadScoringInput - The input type for the automatedLeadScoring function.
 * - AutomatedLeadScoringOutput - The return type for the automatedLeadScoring function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedLeadScoringInputSchema = z.object({
  leadData: z
    .string()
    .describe('Data about the lead, including contact information, company details, and interaction history.'),
  scoringCriteria: z
    .string()
    .describe(
      'The criteria to use for scoring the lead, including factors such as industry, company size, and engagement level.'
    ),
});
export type AutomatedLeadScoringInput = z.infer<typeof AutomatedLeadScoringInputSchema>;

const AutomatedLeadScoringOutputSchema = z.object({
  leadScore: z.number().describe('The score of the lead, ranging from 0 to 100.'),
  scoreExplanation: z
    .string()
    .describe('An explanation of why the lead received the given score, including the factors that contributed to the score.'),
  priority: z
    .string()
    .describe('The priority of the lead (high, medium, low) based on the score.'),
});
export type AutomatedLeadScoringOutput = z.infer<typeof AutomatedLeadScoringOutputSchema>;

export async function automatedLeadScoring(input: AutomatedLeadScoringInput): Promise<AutomatedLeadScoringOutput> {
  return automateLeadScoringFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automatedLeadScoringPrompt',
  input: {schema: AutomatedLeadScoringInputSchema},
  output: {schema: AutomatedLeadScoringOutputSchema},
  prompt: `You are an AI-powered lead scoring system. Your task is to score leads based on their likelihood to convert into customers.

Use the following lead data:
{{{leadData}}}

Use the following scoring criteria:
{{{scoringCriteria}}}

Based on the lead data and scoring criteria, provide a lead score (0-100), an explanation of the score, and a priority (high, medium, or low).

Ensure that the scoreExplanation clearly articulates how the leadScore and priority were determined.

Output: {{{outputFormat schema=AutomatedLeadScoringOutputSchema}}}`,
});

const automateLeadScoringFlow = ai.defineFlow(
  {
    name: 'automateLeadScoringFlow',
    inputSchema: AutomatedLeadScoringInputSchema,
    outputSchema: AutomatedLeadScoringOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
