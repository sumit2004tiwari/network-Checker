import { useState } from 'react'
import './App.css'
import NetworkStatus from "./NetworkStatus"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetworkStatus/>
    </>
  )
}

export default App
