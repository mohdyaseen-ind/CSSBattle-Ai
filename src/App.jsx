import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { UserProvider } from './UserContext.jsx'

const App = () => {
  return (
    <UserProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </UserProvider>
  )
}

export default App