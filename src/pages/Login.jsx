import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="bg-white/5 p-8 rounded-xl shadow-xl backdrop-blur-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Login to Your Throne</h2>
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
          onClick={handleLogin}
          className="bg-white text-black w-full py-3 rounded hover:bg-gray-300 transition"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Don’t have an account? <a href="/signup" className="text-white underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;