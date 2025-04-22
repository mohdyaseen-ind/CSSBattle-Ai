import React,{useState,useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { GoogleGenerativeAI } from '@google/generative-ai';
 
const Submit = () => {
  const location = useLocation()
  const {aiHtml,userHtml,name} = location.state
  const navigate = useNavigate()

  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(true);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  useEffect(() => {
    if (!userHtml) return;

    const getScoreFromAI = async () => {
      const prompt = `
You are an expert frontend evaluator.

I will give you two HTML snippets that include inline CSS:
1. "original" – the reference design
2. "user" – the user’s attempt to clone it

Compare them VISUALLY based on:
- Layout accuracy
- Positioning of elements
- Colors and styles
- Size and spacing

If they are identical or nearly identical, give a score close to 100.
If they are completely different, give a low score.

Respond ONLY with a JSON object in this exact format:
{
  "score": number,
  "feedback": "short and helpful comment"
}

--- original ---
${aiHtml}

--- user ---
${userHtml}
`;

      try {
        const result = await model.generateContent(prompt);
        const text = await result.response.text();
        const clean = text.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(clean);
        setScore(parsed.score);
        setFeedback(parsed.feedback);

      } catch (err) {
        console.error("❌ Error scoring submission:", err.message);
        setFeedback("Something went wrong while scoring. Try again.");
      } finally {
        setLoading(false);
      }
    };

    getScoreFromAI();
  }, [userHtml]);

  if (!userHtml) {
    return <div className="text-white p-10">Invalid submission. Please try again.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">AI Score Evaluation</h1>

      {loading ? (
        <p className="text-lg">Evaluating your clone... ✨</p>
      ) : (
        <>
          <h2 className="text-2xl mb-4">Challenge: {name}</h2>
          <p className="text-2xl mb-2">Score: <span className="font-bold text-purple-500">{score}/100</span></p>
          <p className="mb-6 text-gray-300 italic">"{feedback}"</p>
          <button
            onClick={() => navigate('/leaderboard')}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-semibold"
          >
            View Leaderboard 📊
          </button>
        </>
      )}
    </div>
  );
}

export default Submit