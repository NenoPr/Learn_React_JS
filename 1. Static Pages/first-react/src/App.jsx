import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./Footer.jsx"


function App() {

  return (
    <>
    <Header/>
    <MainContent />
    <Footer />
    </>
  )
}

export default App;