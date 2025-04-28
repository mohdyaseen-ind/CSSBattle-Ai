import React, { useContext } from 'react';
import { Code2, Sparkles, Trophy } from 'lucide-react';
import FeatureCard from '../components/FeatureCard.jsx';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { UserContext } from '../UserContext.jsx';
import { Link } from 'react-router-dom';

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = '';
  } catch (error) {
    console.error('Google login failed:', error);
  }
};

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f0036] to-[#0d001a] text-white flex flex-col justify-center items-center px-6 py-16 gap-20">
      <section className="w-full max-w-4xl text-center mb-20 flex flex-col items-center gap-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-6">
          Master CSS with AI-Powered Challenges
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Test your CSS skills, compete with others, and get instant AI feedback on your solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {user ? (
            <Link to="selectChallenge">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-colors w-30.5 h-10.5 cursor-pointer">
                Start Challenge
              </button>
            </Link>
          ) : (
            <>
              <button
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={handleGoogleLogin}
              >
                Sign in with Google
              </button>
              <Link to="/login">
                <button className="border border-violet-500 hover:border-violet-600 text-violet-400 px-8 py-3 rounded-lg font-medium transition-all">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-violet-500 hover:border-violet-600 text-violet-400 px-8 py-3 rounded-lg font-medium transition-all">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </section>

      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FeatureCard
            icon={<Code2 className="h-10 w-10 text-violet-400 mx-auto" />}
            title="Real-world Challenges"
            description="Practice with carefully crafted CSS challenges that mirror real-world design scenarios."
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 text-violet-400 mx-auto" />}
            title="AI Feedback"
            description="Get instant, intelligent feedback on your solutions from our advanced AI system."
          />
          <FeatureCard
            icon={<Trophy className="h-10 w-10 text-violet-400 mx-auto" />}
            title="Global Leaderboard"
            description="Compete with developers worldwide and showcase your CSS mastery."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;