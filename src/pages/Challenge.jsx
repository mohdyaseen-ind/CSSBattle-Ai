import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Sandpack } from '@codesandbox/sandpack-react';

const Challenge = () => {
    const [html,setHtml] = useState('<div class="card">Hello</div>')
    const navigate  = useNavigate()

    function handleSubmit(){
        navigate('/submit',{
            state: {html}
        })
    }

  return (
    <div className='min-h-screen bg-black text-white p-6'>
        <h2 className='text-3xl font-bold mb-4'>Clone the Design Below</h2>

        <div className="flex justify-center mb-6">
        <img
          src="/challenge.png"
          alt="Challenge Design"
          className="max-w-full w-[600px] rounded-md shadow-lg border border-gray-700"
        />
      </div>

      <Sandpack
  template="static"
  theme="dark"
  options={{
    showLineNumbers: true,
    showTabs: true,
    wrapContent: true,
    editorHeight: 400,
  }}
  customSetup={{
    files: {
        "/index.html": {
          code: html,
        },
    },
  }}
  onCodeChange={(code) => {
    setHtml(code)
  }}
/>

    <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold text-white"
        >
          Submit Clone 👑
        </button>
    </div>
    </div>
  )
}

export default Challenge