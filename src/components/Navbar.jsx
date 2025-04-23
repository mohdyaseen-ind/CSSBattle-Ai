import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // adjust if needed

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    } flex items-center justify-between`}>
      <h1 className='flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors text-xl font-bold'>UI-THRONE 👑</h1>
      <ul className='hidden md:flex items-center space-x-8'>
        {!user ? (
          <>
            <li><Link to="/login" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md transition-colors font-medium">Login</Link></li>
            <li><Link to="/signup" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md transition-colors font-medium">Signup</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md transition-colors font-medium">Home</Link></li>
            <li><Link to="/selectChallenge" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md transition-colors font-medium">Challenge</Link></li>
            <li><Link to="/leaderboard" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md transition-colors font-medium">Leaderboard</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;