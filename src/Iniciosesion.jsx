const { useRef } = require("react")

const Iniciosesion = ({inicio}) => {
    alert('Bienvenido')
    const nombre = useRef ('')
    const usuario = useRef ('')
    const clave = useRef ('')

const espacios = () => {
   if (!nombre.current.value && !usuario.current.value && !clave.current.value) {
       alert ("hay espacios vacios")
    }else{
       inicio();
       
    }
    return (
        <>
        <div>
            <input type="text" placeholder="Ingrese su nombre" ref={nombre}/>
            <input type="correo" placeholder="Ingrese su correo" ref={usuario}/>
            <input type="clave" placeholder="Ingrese su clave" ref={clave}/>
            <button onClick={espacios}>Iniciar</button>
        </div>
        </>
    )
}
}

export default Iniciosesion