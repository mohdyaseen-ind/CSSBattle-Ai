import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/challenge'); // or /login if you want them to log in after signup
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="bg-white/5 p-8 rounded-xl shadow-xl backdrop-blur-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-black border border-white/20 mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-black border border-white/20 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="bg-white text-black w-full py-3 rounded hover:bg-gray-300 transition"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Already have an account? <a href="/login" className="text-white underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;