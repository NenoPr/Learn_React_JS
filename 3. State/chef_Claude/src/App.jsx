import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Tests from './components/tests'
import ClaudeRecipe from './components/ClaudeRecipe'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isShown, setIsShown] = useState(false)

  function handleShown() {
    setIsShown(prev => !prev)
}

  return (
    <>
      <Header />
      <Main handleShown={handleShown}/>
      <ClaudeRecipe isShow={isShown} />
      {/* <Tests /> */}
    </>
  )
}

export default App
