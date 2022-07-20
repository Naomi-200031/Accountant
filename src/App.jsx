import { useState } from 'react'
import './App.css'
import GetIn from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GetIn/>
    <div className='photo'>
    <img className="I" src="./I.png" alt="perfil"></img>
    </div>
    <div className='name'>
      <h1>Naomi Itzel Ramos Rangel</h1>
    </div>
    <div className='information'>
      <p>Cuando termine mi carrera quiero, tener un poco más </p>
      <p>de experiencia para poder clases a nivel media y media superior.</p>
    </div>
      <div className="card">
        <span id="span1"></span>
        <button onClick={() => setCount((count) => count + 1)}>Contar Visita ></button>
      </div>
      <div className='visits'>
      <p>Contador de Visitas: {count}</p>
      </div>
      <div className='technology'>
        <p>Tecnologías que manejan</p>
       </div>
       <div className='Icons'>
       <img className="Icons" src="./Clickup.png" alt="imagen"></img>
       <img className="Icons" src="./Dropbox.png" alt="imagen"></img>
       <img className="Icons" src="./Paychex.png" alt="imagen"></img>
       <img className="Icons" src="./Elastic.png" alt="imagen"></img>
       <img className="Icons" src="./Stripe.png" alt="imagen"></img>
       </div>
    </div>

  )
}

export default App;
