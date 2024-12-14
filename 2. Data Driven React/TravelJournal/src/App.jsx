import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data/data.jsx'


function App() {

  return (
    <>
      <Header />
      {[...data].map((x, i) =>
        <Entry {...x} key={i} />
      )}
    </>
  )
}

export default App
