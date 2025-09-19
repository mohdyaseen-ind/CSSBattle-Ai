import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const generateChallenges = async () => {
  const prompt = `
  Generate 10 beginner-friendly HTML/CSS frontend clone challenges.
  Each challenge must include:
  - name
  - description (50-80 characters)
  - html (ALL double quotes must be escaped as \\")
  - make the html like cssbattle , include shapes and various designs and make it colourful
  - make the battles moderate to very hard
  -return the html with inline css 
  
  Example:
  [
    {
      "name": "Simple Login Page",
      "description": "Design a login page with two inputs and a button",
      "html": "<h1 style="color">Hello</h1>",
      "imagePrompt": "a clean login form with white background and blue submit button"
    }
  ]
  Return ONLY the JSON array with 10 challenges.
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    const cleanText = text
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();


    let parsed;
    try {
      parsed = JSON.parse(cleanText);
    } catch (err) {
      console.error("❌ JSON parse error:", err.message);
      return [];
    }

    if (Array.isArray(parsed)) {
      return parsed;
    } else {
      console.warn("⚠️ AI returned something that's not an array:", parsed);
      return [];
    }
  } catch (err) {
    console.error("🔥 Error from Gemini:", err.message);
    return [];
  }
};