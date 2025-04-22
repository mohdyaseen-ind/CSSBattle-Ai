import React,{useState, useEffect} from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { auth, provider } from '../firebase'; // adjust path if needed
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
  
    return () => unsubscribe(); // clean up listener on unmount
  }, []);
  
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-t from-indigo-50 to-transparent rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4"
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 md:max-w-[55%]"
          >
            <h5 className="text-blue-600 font-medium tracking-widest uppercase text-sm md:text-base mb-4">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block h-px bg-blue-400 mr-3 align-middle"
              />
              Design Challenges
            </h5>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight mb-6">
              <span className="font-medium text-blue-800">UI Throne</span> - 
              <br className="hidden md:block" /> Where Designers Compete
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Join our platform where top designers battle in weekly challenges, receive AI-powered evaluations, and climb the leaderboard to claim the throne.
            </p>
            
            {!user ? <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/login'}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium tracking-wide shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 flex items-center gap-2"
            >
              Login
              <ChevronRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/signup'}
              className="px-8 py-4 rounded-full border border-gray-300 text-gray-800 bg-white font-medium tracking-wide hover:bg-gray-50 transition-all duration-300"
            >
              Sign Up
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleLogin}
              className="px-8 py-4 rounded-full bg-black text-white border border-white/10 font-medium tracking-wide hover:bg-gray-900 transition-all duration-300"
            >
              Continue with Google
            </motion.button>
          </div> 
          
          : 
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/selectChallenge'}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium tracking-wide shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 flex items-center gap-2"
            >
              Start Challenge
              <ChevronRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/leaderboard'}
              className="px-8 py-4 rounded-full border border-gray-300 text-gray-800 bg-white font-medium tracking-wide hover:bg-gray-50 transition-all duration-300"
            >
              Leaderboard
            </motion.button>
          </div>}
            
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-2xl blur-xl opacity-60 transform rotate-3"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center p-8">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                    <motion.div
                      initial={{ rotate: -5, scale: 0.9 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="text-6xl md:text-7xl"
                    >
                      🏆
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-800 text-xl font-medium mb-2">Featured Challenge</h3>
                  <p className="text-gray-600 mb-4">Redesign a banking dashboard for mobile</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium">48 participants</span>
                    <span className="text-gray-500 text-sm">2 days remaining</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;