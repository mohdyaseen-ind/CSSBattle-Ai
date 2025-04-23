import './index.css'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import App from './App.jsx'
import React from 'react'
import Challenge from './pages/Challenge.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Submit from './pages/Submit.jsx'
import SelectChallenge from './pages/SelectChallenge.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'
import { UserProvider } from './UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/selectChallenge',
        element: <SelectChallenge/>
      },
      {
        path: '/leaderboard',
        element: <Leaderboard/>
      },
      {
        path: '/submit',
        element: <Submit/>
      },
      {
        path: '/challenge',
        element: <Challenge/>
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  }
])

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router}/>
</UserProvider>,
)
