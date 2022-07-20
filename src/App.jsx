import { useState } from 'react'
import './App.css'
import GetIn from './components/navbar'
import { useTranslation } from 'react-i18next'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <div className="App">
      <GetIn/>
    <div className='photo'>
    <img className="I" src="./I.png" alt="perfil"></img>
    </div>
    <div className='name'>
      <h1>{t("name")}</h1>
    </div>
    <div className='information'>
      <p>{t("information1")} </p>
      <p>{t("information2")}</p>
    </div>
      <div className="card">
        <span id="span1"></span>
        <button onClick={() => setCount((count) => count + 1)}>{t("buttonOne")}</button>
      </div>
      <div className='visits'>
      <p>{t("buttonTwo")}{count}</p>
      </div>
      <div className='technology'>
        <p>{t("techonology")}</p>
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
