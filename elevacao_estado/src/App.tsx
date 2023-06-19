import { useState } from 'react'
import './App.css'
import { AppNavBar } from './components/AppNavBar'


function App() {
  const [AppEntrada, setAppEntrada] = useState('Input')
  const [AppCloneEntrada, setAppCloneEntrada] = useState('Entrada')

  function handleAppEntrada(e: any) {
    setAppEntrada(e.target.value)
  }

  return (
    <>
      <div>
        <AppNavBar title={'Titulo'}/>
        <AppEntrada title={AppCloneEntrada} func={handleAppEntrada}/>
        {AppEntrada.length > 0 &&
          <p>{AppEntrada}</p>
        }

      </div>
    </>
  )
}

export default App
