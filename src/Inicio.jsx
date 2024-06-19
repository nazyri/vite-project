import { useRef } from "react"

const Inicio = ({ text }) => {
     const usuario = useRef ('')
     const clave = useRef ('')

const validar = () => {
    if (!usuario.current.value && !clave.current.value) {
        alert ("hay espacios vacios")
     }else{
        alert('Bienvenido')
        text();
        
     }

}

     
    return (

        <div>
            <input type="text" placeholder="correo" ref={usuario}/>
            <input type="clave" placeholder="clave" ref={clave}/>
            <button onClick={validar}>Iniciar</button>
        </div>
    )
}

export default Inicio