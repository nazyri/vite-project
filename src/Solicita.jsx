import { useRef } from "react"

const Solicita = ({info}) => {
    const usuario = useRef ('')
    const clave = useRef ('')

const vacios = () => {
   if (!usuario.current.value && !clave.current.value) {
       alert ("hay espacios vacios")
    }else{
       info();
       
    }
    return (
        <>
        <div>
            <input type="correo" placeholder="Ingrese su correo" ref={usuario}/>
            <input type="clave" placeholder="Ingrese su clave" ref={clave}/>
            <button onClick={vacios}>Iniciar</button>
        </div>
        </>
    )
}
}

export default Solicita