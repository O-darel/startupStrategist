import { GoogleGenAI } from "@google/genai";
import { GOOGLE_API_KEY } from "../config/env";


const ai=new GoogleGenAI({apiKey:GOOGLE_API_KEY})


export const askGemini = async (prompt: string) => {
  const result = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: prompt,
  });

  return result.text;
  
};

//for streaming
export const streamFromGemini = async (prompt: string) => {
  const response = await ai.models.generateContentStream({
    model: 'gemini-2.0-flash-001',
    contents: prompt,
  });

  let text = '';
  for await (const chunk of response) {
    text += chunk.text;
  }
  return text;
};
