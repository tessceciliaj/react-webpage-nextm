import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Students from './pages/students'
import About from './pages/about'
import Internships from './pages/internships'
import Trailer from './pages/trailer'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/students" element={<Students/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/internships" element={<Internships/>} />
      <Route path="/trailer" element={<Trailer/>} />
    </Routes>
  )
}

export default App
