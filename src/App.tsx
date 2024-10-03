import { useState } from 'react'
import './App.css'
import PokemonScreen from './pages/pokemon-screen/pokemon-screen'
import MainScreen from './pages/main-screen/main-screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainScreen />
    </div>
  )
}

export default App
