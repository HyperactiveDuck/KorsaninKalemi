import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getBusinessInsight = async (query: string): Promise<string> => {
  try {
    const ai = getAiClient();
    
    // Using gemini-2.5-flash for speed and efficiency for this specific task
    const modelId = "gemini-2.5-flash";

    const systemInstruction = `
      You are Cyllene, a high-end, exclusive, and slightly ruthless business coach.
      Your tone is elegant, direct, authoritative, and sophisticated.
      You do not use fluff. You give actionable, sharp advice.
      Keep responses under 100 words.
      The user is a business owner seeking control and elevation.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Focus on your core value proposition. Simplicity scales.";
  } catch (error) {
    console.error("Error fetching business insight:", error);
    return "The path to success is currently obscured. Please try again later.";
  }
};
