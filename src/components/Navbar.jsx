import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-black text-white py-10 min-h-[64px]'>
        <h1>UI-THRONE 👑</h1>
        <ul className='flex justify-around w-100'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/selectChallenge">Challenge</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
        </ul>
    </div>
  )
}

export default Navbar