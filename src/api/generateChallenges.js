import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateChallenges = async () => {
  const prompt = `
  Generate 10 beginner-friendly HTML/CSS frontend clone challenges.
  Each challenge must include:
  - name: Short descriptive name
  - description: Clear objective (50-80 characters)
  - html: Valid HTML structure
  - css: CSS styles without external dependencies
  - imagePrompt: A visual description prompt to generate an image of the UI (e.g., "a clean minimal login form with two inputs and a submit button")
  Format requirements:
  - Use only plain text with valid JSON formatting
  - Escape double quotes inside strings
  - No markdown or code blocks
  - Ensure proper array formatting

  Example response:
  [{
    "name": "Social Media Icon Row",
    "description": "Create a row of 3 social media icons using Font Awesome",
    "html": "<div class=\\"icons\\">...</div>",
    "css": ".icons { display: flex; gap: 1rem; }",
    "imagePrompt": "a minimal white login form with two text fields and a blue submit button, centered on screen"
  }]

  Return only the JSON array with 10 challenges.
`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 1500
      }
    });

    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    const cleanText = text
  .replace(/```json/g, '') // remove ```json
  .replace(/```/g, '')     // remove ```
  .trim();
    const challenges = JSON.parse(cleanText);
    return challenges;
  } catch (error) {
    console.error("API Error Details:", {
      fullError: error,
    });
    return [];
  }
};