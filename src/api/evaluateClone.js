import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const evaluateClone = async (userHtml) => {
  const prompt = `
You are an expert web design evaluator. A user attempted to clone a given design using HTML and CSS. 
Evaluate the quality of their clone and return:

- A short feedback paragraph (max 100 words)
- A score out of 100

User's code:
${userHtml}

Respond in this JSON format:
{
  "feedback": "...",
  "score": 90
}
`;

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  try {
    const json = JSON.parse(text);
    return json;
  } catch (error) {
    console.error("Invalid response from Gemini:", error);
    return {
      feedback: "Could not parse feedback. Try again.",
      score: 0
    };
  }
};