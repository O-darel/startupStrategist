import { askGemini, streamFromGemini } from "../agents/strategist.agent";

export const brainstormIdeas = async (topic: string, stream: boolean) => {
  const prompt = `Brainstorm 5 innovative startup ideas around "${topic}". 
  Provide a brief description for each.`;
  return stream ? streamFromGemini(prompt) : askGemini(prompt);
};

export const generateBusinessPlan = async (idea: string, stream: boolean) => {
  const prompt = `Create a simple business plan for the startup idea: "${idea}".
   Include mission, product, market, and monetization.`;
  return stream ? streamFromGemini(prompt) : askGemini(prompt);
};

export const estimateMarketSize = async (industry: string, stream: boolean) => {
  const prompt = `Estimate the global market size for the industry: "${industry}".
   Provide a rough figure and brief reasoning.`;
  return stream ? streamFromGemini(prompt) : askGemini(prompt);
};

export const createPitchDeck = async (idea: string, stream: boolean) => {
  const prompt = `Generate a text-based pitch deck for: "${idea}". Include sections:
   Problem, Solution, Market, Business Model, and Ask.`;
  return stream ? streamFromGemini(prompt) : askGemini(prompt);
};

export const analyzeSWOT = async (idea: string, stream: boolean) => {
  const prompt = `Perform a SWOT analysis for: "${idea}". Format as Strengths, Weaknesses,
   Opportunities, and Threats.`;
  return stream ? streamFromGemini(prompt) : askGemini(prompt);
};
