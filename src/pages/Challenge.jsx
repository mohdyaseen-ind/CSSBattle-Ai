import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MonacoEditor from 'react-monaco-editor';

const Challenge = () => {
  const [userHtml, setUserHtml] = useState('<div class="card">Hello</div>');
  const navigate = useNavigate();
  const location = useLocation();
  const { aiHtml, name } = location.state;

  function handleSubmit() {
    navigate('/submit', {
      state: { aiHtml, userHtml, name },
    });
  }

  console.log(aiHtml)

  return (
    <div className="min-h-screen bg-[#121212] text-white font-mono flex flex-col items-center px-4 py-6 ">
      <div className="w-full max-w-[90%]">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
          CSS Clone Challenge - {name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex flex-col bg-[#1e1e1e] border border-[#333] rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#2b2b2b] px-4 py-2 text-xs text-[#00ffff] border-b border-[#444]">
              YOUR CODE
            </div>
            <div style={{ height: '380px' }}>
              <MonacoEditor
                width="100%"
                height="100%"
                language="html"
                theme="vs-dark"
                value={userHtml}
                onChange={(val) => setUserHtml(val)}
                options={{ fontSize: 14 }}
              />
            </div>
            <div className="bg-[#2b2b2b] px-4 py-2 text-xs text-[#00ffff] border-t border-[#444]">
              PREVIEW
            </div>
            <div className="bg-white">
              <iframe
                srcDoc={userHtml}
                title="User Preview"
                className="w-full h-[260px] border-none"
              />
            </div>
          </div>

          {/* Target Panel */}
          <div className="flex flex-col bg-[#1e1e1e] border border-[#333] rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#2b2b2b] px-4 py-2 text-xs text-[#ff00a6] border-b border-[#444] text-center">
              TARGET
            </div>
            <div className="bg-white">
              <iframe
                srcDoc={aiHtml}
                title="Target Preview"
                className="w-full h-[655px] border-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-[#00ffff] to-[#0077ff] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 hover:opacity-90 transition-all shadow-md"
          >
            🔥 Submit Your Clone
          </button>
          <p className="text-sm text-gray-400 mt-3">
            Try to match the target layout using HTML & CSS only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenge;