import React,{useState,useEffect} from 'react';
import { Code2, Sparkles, Trophy } from 'lucide-react';
import FeatureCard from '../components/FeatureCard.jsx';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { UserContext } from '../UserContext.jsx';
import { useContext } from 'react';

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = ''; 
  } catch (error) {
    console.error('Google login failed:', error);
  }
};

const Home = () => {
  const {user,setUser} = useContext(UserContext)

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center bg-gray-900 text-white">
      <section className="relative overflow-hidden bg-gray-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-3xl"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
          <div className="text-center max-w-3xl mx-auto p-6 bg-gray-800/50 rounded-xl shadow-lg backdrop-blur-md">  
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent inline-block">
              Master CSS with AI-Powered Challenges
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Test your CSS skills, compete with others, and get instant AI feedback on your solutions.
            </p>
            <div className="flex justify-center space-x-4">
          {user ? <>        
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg">
                Start Challenge
              </button>
              <button className="border border-violet-600/50 hover:border-violet-600 text-violet-400 px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button> 
              </> : <>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg" onClick={handleGoogleLogin}>
                SignIn with Google
              </button>
              </>}

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FeatureCard
              icon={<Code2 className="h-8 w-8 text-violet-400" />}
              title="Real-world Challenges"
              description="Practice with carefully crafted CSS challenges that mirror real-world design scenarios."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-violet-400" />}
              title="AI Feedback"
              description="Get instant, intelligent feedback on your solutions from our advanced AI system."
            />
            <FeatureCard
              icon={<Trophy className="h-8 w-8 text-violet-400" />}
              title="Global Leaderboard"
              description="Compete with developers worldwide and showcase your CSS mastery."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;