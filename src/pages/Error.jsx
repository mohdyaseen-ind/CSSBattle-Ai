import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-black h-screen'>
        <h1 className='text-white'>Oops Page Not Found...</h1>
        <button className='text-white w-auto h-auto bg-fuchsia-900 rounded-2xl'><Link to="/">Go Back To Home</Link></button>
    </div>
  )
}

export default Error 