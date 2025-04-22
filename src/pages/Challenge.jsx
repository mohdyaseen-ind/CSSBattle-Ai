import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Sandpack } from '@codesandbox/sandpack-react';
import { useLocation } from 'react-router-dom';

const Challenge = () => {
    const [userHtml,setUserHtml] = useState('<div class="card">Hello</div>')
    const navigate  = useNavigate()

    const location = useLocation();
    const {aiHtml,name} = location.state

    function handleSubmit(){
        navigate('/submit',{
            state: {aiHtml:aiHtml,userHtml:userHtml,name:name}
        })
    }

  return (
    <div className='min-h-screen bg-black text-white p-6'>
      <div className='lg:ml-80'>
        <h2 className='text-3xl font-bold mb-4'>Clone the Design Below</h2>

        <iframe
          title={name}
          className='w-[30%] h-[250px] border border-gray-300 rounded-lg'
          sandbox=""
          srcDoc={aiHtml}
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
          code: userHtml,
          active: true,
        },
    },
  }}
  onCodeChange={(code) => {
    setUserHtml(code)
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