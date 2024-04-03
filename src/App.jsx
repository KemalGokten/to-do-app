import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navigation/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import MainContent from './MainContent/MainContent.jsx'
import DetailedTask from './components/DetailedTask.jsx'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
   <div className='app'>
    <Navbar />

    <div className='content-container'>
      <Sidebar />
      <Routes>
        <Route path="/tasks" element={<MainContent />}></Route>
        <Route path="/tasks/:taskId" element={<DetailedTask/>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </div>
    <Footer />
   </div>
  )
}

export default App
