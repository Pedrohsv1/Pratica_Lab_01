import { useState } from 'react'
import './App.css'
import { AppNavBar } from './components/AppNavBar'
import { AppEntrada } from './components/AppEntrada'
import { AppCloneEntrada } from './components/AppCloneEntrada'


function App() {
  const [entrada, setEntrada] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis repellat assumenda nesciunt iusto atque sed, pariatur voluptate delectus ea placeat harum magni blanditiis sint cupiditate iste! Temporibus quasi totam minima?')

    const mudarEntrada = (e: any) => {
        setEntrada(e)
    }
  return (
    <>
      <div>
        <AppNavBar title={'Titulo'}/>
        <AppEntrada title={'Entrada'} func={mudarEntrada}/>
        <AppCloneEntrada title={entrada} />
      </div>
    </>
  )
}

export default App
