import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);


  return (
    <nav
     className='bg-black text-white shadow-md transition-all duration-300' 
    >
      <div className="flex items-center justify-between min-w-full mx-auto">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-white py-4 px-6"
        >
          CSSBattle AI
        </Link>

        <ul className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium shadow-md transition-all"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="px-5 py-2 rounded-full border border-violet-500 text-violet-300 hover:bg-violet-600 hover:text-white font-medium transition-all"
                >
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  className="px-5 py-2 rounded-full bg-violet-700 hover:bg-violet-800 text-white font-medium transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/selectChallenge"
                  className="px-5 py-2 rounded-full bg-violet-700 hover:bg-violet-800 text-white font-medium transition-all"
                >
                  Challenge
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="px-5 py-2 rounded-full bg-violet-700 hover:bg-violet-800 text-white font-medium transition-all"
                >
                  Leaderboard
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;