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
      state: { aiHtml: aiHtml, userHtml: userHtml, name: name },
    });
  }

  console.log(aiHtml);


  return (
    <div className="min-h-screen bg-[#1d1e20] text-white flex flex-col items-center justify-start pt-20 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        Clone the Target
      </h1>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        {/* Editor Section */}
        <div className="w-full md:w-1/2 bg-[#0b2e37] rounded-xl shadow-lg border border-gray-700 overflow-hidden">
          <div className="bg-[#134e4a] text-white p-2 text-sm font-mono border-b border-gray-700">
            &lt;index.html&gt;
          </div>
          <MonacoEditor
        width="100%"
        height="400px"
        language="html"
        theme="vs-dark"
        value={userHtml}
        onChange={(value)=>setUserHtml(value)}
      />
      <iframe
          srcDoc={userHtml}
          title="preview"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
        </div>

        {/* Preview Section */}
        <div className="w-full md:w-1/2 bg-[#0b2e37] rounded-xl shadow-lg border border-gray-700 flex items-center justify-center overflow-hidden">
           <div className="bg-[#134e4a] text-white p-2 text-sm font-mono border-b border-gray-700 w-full text-center">
              Target
            </div>
          <iframe
            title={name}
            sandbox=""
            srcDoc={aiHtml}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
      <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
        >
          Submit Clone 👑
        </button>
      </div>
       <p className="mt-4 text-gray-400 text-center text-sm">
        Recreate the target preview using HTML and CSS.  Edit the code in the editor.
      </p>
    </div>
  );
};

export default Challenge;
