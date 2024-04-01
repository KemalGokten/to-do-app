import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navigation/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import MainContent from './MainContent/MainContent.jsx'

function App() {

  return (
   <div className='app'>
    <Navbar />

    <div className='content-container'>
      <Sidebar />
      <MainContent />
    </div>
    <Footer />
   </div>
  )
}

export default App
