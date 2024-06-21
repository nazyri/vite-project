import { useRef } from "react"


alert('Bienvenid@')

const Iniciosesion = ({inicio}) => {
    const nombre = useRef('')
    const usuario = useRef ('')
    const clave = useRef ('')
    
    const espacios = () => {
   if (!nombre.current.value && !usuario.current.value && !clave.current.value) {
       alert ("hay espacios vacios")
    }else{
       inicio();
       
    }
    
    async function GetInicio() {
      
      try {
        let tarea = {
            nombre: nombre,
            correo: correo,
            clave: clave
        }
        const respuesta = await fetch('http://localhost:3000/api/task', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        })
        let agregar = await respuesta.json()
        console.log(agregar);
        console.log(`La tarea ${tarea.id} fue agregada`);
    } catch (error) {
        console.error(error);
    }
  }
    }

    return (
        <>
        <div>
  {/* modal */}
      <a id="myBtn" >Iniciar</a>
  
      {/* modal */}
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close"/>&times;
          <input class="inicio" type="text" id="nombre" placeholder="Ingrese su nombre" ref={nombre}/>
          <input class="inicio" type="text" id="correos" placeholder="Ingrese su correo" ref={usuario}/>
          <input class="inicio" type="password" id="password" placeholder="Ingrese su contraseña" ref={clave}/>
          <button class="boton" id="guardarclave"  onClick={espacios}>Guardar</button>
        </div>
  
      </div>
    </div>
        </>
    )
  }


  
export default Iniciosesion