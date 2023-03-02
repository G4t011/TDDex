import React from 'react'
import Accordion from './components/Accordion'

const App = () => {
  return (
    <div>
      <Accordion
        title = "Que hace esto?">
        <h3>Mi componente</h3>
        <p>Hola Mundo</p>
      </Accordion>
    </div>
  )
}

export default App