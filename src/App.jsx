import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    </div>
  )
}

export default App
