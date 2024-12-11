import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MensajesLista } from "../ListaDeMensajes";
import { obtenerMensajes, separarMensajesPorAutor } from "./funciones";





const Mensajes =  () => {


const [mensajesDe , setMensajesDe  ] = useState([])

const parametro = useParams()
const autor = parametro.autor

separarMensajesPorAutor(MensajesLista , mensajesDe , autor)

console.log(mensajesDe , autor )

const imagen = mensajesDe.find((imagen) => imagen)

const  [valorInput , setValorInput] = useState()

const  [valorClass , setValorClass] = useState("Enviar-Mensaje")







const  [contador , setContador] = useState(0)


const nuevoMensaje = {
    autor:'Yo',
    contenido: valorInput,
    hora: '4:04',
    estado: "bi bi-check2-all",
    id:   'mensaje-nuevo',
}



const objetoDeClasname = [valorClass]



const [cambiarAlEscribir , setCambiarAlEscribir] = useState('ahora no se puede mandar mensaje')


const pruebasubmit = (e) => {
    e.preventDefault()
    pruebasubmitdos()
    console.log('llegaste a' + contador)
    contador === 5 && setContenido('lol')
}



 const pruebasubmitdos = () => {
    setValorClass("Enviar-Mensaje")
        valorInput === '' ?
        ''
        :
        mensajesDe.push(nuevoMensaje)
        setValorInput('')
        setContador(contador + 1 )
}


const prueba = (e) => {
    return(
    console.log(e.target.value),
    setValorClass('clase-2'),
    setValorInput(e.target.value),
    setCambiarAlEscribir('ahora si se puede enviar')
)
}
const mensajesNuevos = []

obtenerMensajes(mensajesDe)

return(
    <>

    <div  className="Mensajes">
    <div className="Perfil">
                <Link to={'/'}>
                <button className="flecha" ><i class="bi bi-arrow-left"></i></button>
                </Link>
                <Link to={'/info/' + autor}>
                <img  className="imagen-emperador" src={imagen.imagen}  alt="" />
                </Link>
                <span className="El-Emperador" >{autor}</span>
                <span className="grabar"><i  className="bi bi-camera-video-fill"></i></span>
                <span className="llamar"><i class="bi bi-telephone-fill"></i></span>
                <span className="pintar"><i class="bi bi-grip-vertical"></i></span>
                
            </div>
            {mensajesNuevos}

        {mensajesDe.map((mensaje , index )  =>{
            return(
            mensaje.id === 'mensaje-nuevo' ?
            contador > 1 ?
            mensajesNuevos.unshift (
                <div className="mensajes-nuevos" > 
                <div className={mensaje.id} key={ index}>
                <p className={"contenido-" + mensaje.id }>{mensaje.contenido} </p>
                <span className={"hora-" + mensaje.id}>{mensaje.hora} </span>
                <span className={"estado-" + mensaje.id}>
                <i className={mensaje.estado}></i>
                </span>
                </div>
                </div>)
                :
            mensajesNuevos.push (
            <div className="mensajes-nuevos" > 
            <div className={mensaje.id} key={ index}>
            <p className={"contenido-" + mensaje.id}>{mensaje.contenido}</p>
            <span className={"hora-" + mensaje.id}>{mensaje.hora}</span>
            <span className={"estado-" + mensaje.id}>
            <i className={mensaje.estado}></i>
            </span>
            </div>
            </div>)
        :
        <div className="mensajes-viejos">
            <div className={mensaje.id} key={ index}>
                <p className={ "contenido" + mensaje.id}>{mensaje.contenido} lol</p>
                <span className={"hora-" + mensaje.id}>{mensaje.hora }</span>
                <span className={"estado-" + mensaje.id}>
                <i className={mensaje.estado}></i>
                </span>
            </div>
        </div>
            )
        }
        
)}
            {cambiarAlEscribir === 'ahora no se puede mandar mensaje' ?
            <form >
            <div  className="enviar">
            <label htmlFor="nuevos-mensajes" >
            <input onChange={prueba}  type="text" className={objetoDeClasname[0]} placeholder={'Enviar mensaje a '+ autor}  value={valorInput} />
            </label>
            
            </div>
            </form>
            :
            <form onSubmit={pruebasubmit}>
            <div  className="enviar">
            <label htmlFor="nuevos-mensajes" >
            <input onChange={prueba}  type="text" className={objetoDeClasname[0]} placeholder={'Enviar mensaje a '+ autor}  value={valorInput} />
            </label>
            
            </div>
            </form>}

    </div>
    </>
)
} 


export default Mensajes