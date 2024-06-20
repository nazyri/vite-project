import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Inicio from './Inicio'
import Cerrar from './Cerrar'
import Mensaje from './Mensaje'


function App() {
  const [iniciar, setiniciar] = useState(false)
  const cambiarEstado = () => {
    setiniciar(true)
  }


  return (
    <>
      <Navbar iniciada={iniciar} />
      {iniciar ? "" : <Inicio text={cambiarEstado} />}
      {iniciar ? <Mensaje/>:""}
      {/* <Cerrar el={cambiarEstada}/> */}
    </>
    
  )
}

export default App
