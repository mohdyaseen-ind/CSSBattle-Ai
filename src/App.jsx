import React from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

function App() {
  return (
    <>
    </>
  )
}

export default App
