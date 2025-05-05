import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { doc, setDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { collection } from "firebase/firestore";

const Submit = () => {
  const location = useLocation();
  const { aiHtml, userHtml, name, user } = location.state;
  const navigate = useNavigate();

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
        if (user && parsed.score) {
          await setDoc(doc(db, "users", user.uid), {
            name: user.displayName || "Anonymous",
            avatar: user.photoURL || "",
            score: parsed.score,
            email: user.email,
          });
        }
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

  const handleLeaderboardClick = async () => {
    try {
      await addDoc(collection(db, "leaderboard"), {
        name: name || "Anonymous",
        score: score,
        timestamp: serverTimestamp(),
      });
      console.log('Leaderboard updated ✅');
      navigate('/leaderboard');
    } catch (error) {
      console.error('Error saving to leaderboard: ', error);
    }
  };

  if (!userHtml) {
    return <div className="text-white p-10">Invalid submission. Please try again.</div>;
  }

  return (
<div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-4 py-12 font-mono">
  <div className="w-full max-w-2xl bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-xl p-8 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 animate-pulse"></div>

    <h1 className="text-4xl font-extrabold text-center mb-4 text-white tracking-wide">
      <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
        Challenge: {name}
      </span>
    </h1>

    {loading ? (
      <p className="text-lg text-center text-gray-400 animate-pulse">Scoring your clone... 🧠</p>
    ) : (
      <>
        <div className="text-center mt-6">
          <p className="text-xl mb-1 text-gray-400">Your Score</p>
          <div className="text-6xl font-bold text-purple-400 drop-shadow-md tracking-wider">
            {score}/100
          </div>
        </div>

        <p className="mt-6 text-center text-md italic text-gray-300 w-full max-w-2xl px-4">
          “{feedback}”
        </p>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLeaderboardClick}
            className="px-6 py-3 bg-black border border-purple-500 hover:bg-purple-600 hover:text-white text-purple-400 rounded-full transition duration-200 tracking-wide shadow-lg"
          >
            🚀 View Leaderboard
          </button>
        </div>
      </>
    )}
  </div>
</div>
  );
};

export default Submit;