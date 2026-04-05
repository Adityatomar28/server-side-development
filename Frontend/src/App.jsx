import React from 'react'
//we uses react-router-dom so that we can see diffrent component in diffrent diffrent url
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/about" element={<h1>About Us</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App