import { useState } from 'react'
import './App.css'
import Particles from './components/Particles'
import SetUpMenu from './components/SetUpMenu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SetUpMenu />
      <Particles />
    </div>
  )
}

export default App
