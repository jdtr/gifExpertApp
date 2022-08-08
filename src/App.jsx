import { useState } from 'react'
import { GifExpertApp } from './GifExpertApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GifExpertApp />
    </div>
  )
}

export default App
