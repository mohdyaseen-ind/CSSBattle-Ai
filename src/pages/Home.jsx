import React, { useState, useEffect } from 'react';
import { ChevronRight, Code2, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = '/home'; 
  } catch (error) {
    console.error('Google login failed:', error);
  }
};

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-950">
      {/* Hero Section - Pixel perfect copy */}
      <section className="relative overflow-hidden flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-violet-600/15 to-fuchsia-600/20 blur-3xl" />
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
          <div className="max-w-3xl w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight"
            >
              UI Throne<br />Where Designers Compete
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join our platform where top designers battle in weekly challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center space-x-4"
            >
              {!user ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/login'}
                    className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    Login <ChevronRight size={18} className="mt-0.5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/signup'}
                    className="border border-violet-600/50 hover:border-violet-600/80 text-violet-400 hover:text-violet-300 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Sign Up
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGoogleLogin}
                    className="border border-violet-600/50 hover:border-violet-600 text-violet-400 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Continue with Google
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/selectChallenge'}
                    className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    Start Challenge <ChevronRight size={18} className="mt-0.5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = '/leaderboard'}
                    className="border border-violet-600/50 hover:border-violet-600/80 text-violet-400 hover:text-violet-300 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Leaderboard
                  </motion.button>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Exact duplicate */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-violet-600/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-100">Real-world Challenges</h3>
              <p className="text-gray-400">Practice with carefully crafted design challenges.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-violet-600/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-100">AI Feedback</h3>
              <p className="text-gray-400">Get instant feedback from our AI system.</p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-violet-600/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-100">Global Leaderboard</h3>
              <p className="text-gray-400">Compete with designers worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;