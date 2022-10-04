import React from 'react'
import './itens.css'

/* COMPONENTS */
import Triangle from './Components/Triangle/Triangle'
import Jokenpo from './Components/Jokenpo/Jokenpo'

function App() {


  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="bodyContainer">
        <Triangle />
        <Jokenpo />
      </div>
    </div>
  )
}

export default App
