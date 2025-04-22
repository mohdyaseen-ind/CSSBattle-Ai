import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // adjust if needed

const Navbar = () => {
  const [user, setUser] = useState(null);

  // ✅ This effect tracks the login state
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
    <div className='flex items-center justify-between bg-black text-white py-10 min-h-[64px] px-6'>
      <h1 className='text-xl font-bold'>UI-THRONE 👑</h1>
      <ul className='flex items-center gap-6'>
        {!user ? (
          <>
            <li><Link to="/login" className="hover:text-gray-400 transition">Login</Link></li>
            <li><Link to="/signup" className="hover:text-gray-400 transition">Signup</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/" className="hover:text-gray-400 transition">Home</Link></li>
            <li><Link to="/selectChallenge" className="hover:text-gray-400 transition">Challenge</Link></li>
            <li><Link to="/leaderboard" className="hover:text-gray-400 transition">Leaderboard</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;