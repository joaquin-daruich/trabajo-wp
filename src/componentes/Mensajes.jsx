import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {  separarMensajesPorAutor } from "./funciones";
import { MensajesLista } from "../MensajesLista";





const Mensajes =  () => {

const [mensajesDe , setMensajesDe  ] = useState([{}])



const parametro = useParams()
const autor = parametro.autor

separarMensajesPorAutor(MensajesLista , mensajesDe , autor)


const imagen = mensajesDe.find((imagen) => imagen.imagen)


const  [valorInput , setValorInput] = useState()






const  [contador , setContador] = useState(1)


const nuevoMensaje = {
    autor:'Yo',
    contenido: valorInput,
    hora: '4:04',
    estado: "bi bi-check2-all",
    id:   'mensaje-nuevo',
}





const [cambiarAlEscribir , setCambiarAlEscribir] = useState('ahora no se puede mandar mensaje')

const pruebasubmit = (e) => {
    e.preventDefault()
    pruebasubmitdos()
}

const buscarMensajesNuevos = (mensajesDes , set , mensajini) => {
 (mensajesDes.find((autor) => autor.autor === 'Yo')) ?
'' :
    localStorage.getItem(mensajini + imagen.autor) === null
    ?
    ''
    :
    set((JSON.parse((localStorage.getItem(mensajini + imagen.autor)))))
}



buscarMensajesNuevos(mensajesDe, setMensajesDe , 'mensajes De ' )
buscarMensajesNuevos(mensajesDe, setContador , 'contador de ' )

 const pruebasubmitdos = () => {
        valorInput === '' ?
        ''
        :
        mensajesDe.push(nuevoMensaje)
        
        
        localStorage.setItem( 'mensajes De ' + imagen.autor ,JSON.stringify(mensajesDe))
        setValorInput(''),
        setContador(contador + 1 )
        localStorage.setItem('contador de ' + imagen.autor , JSON.stringify(contador))
}


const prueba = (e) => {
    return(
    setValorInput(e.target.value),
    setCambiarAlEscribir('ahora si se puede enviar') )

}
const mensajesNuevos = []

const mapeo =   mensajesDe.map((mensaje , index )  =>{
    
    return (
    mensaje.id ===  'mensaje-nuevo'?
    
    contador > 1 ?
    mensajesNuevos.unshift (
        <div   className="mensajes-nuevos" > 
        <div  className={mensaje.id} >
        <p  className={"contenido-" + mensaje.id }>{mensaje.contenido} </p>
        <span  className={"hora-" + mensaje.id}>{mensaje.hora} </span>
        <span  className={"estado-" + mensaje.id}>
        <i  className={mensaje.estado}></i>
        </span>
        </div>
        </div>)
        :
    mensajesNuevos.push (
    <div  className="mensajes-nuevos" > 
    <div className={mensaje.id}>
    <p  className={"contenido-" + mensaje.id}>{mensaje.contenido}</p>
    <span className={"hora-" + mensaje.id}>{mensaje.hora}</span>
    <span  className={"estado-" + mensaje.id}>
    <i   className={mensaje.estado}></i>
    </span>
    </div>
    </div>)
:
<div className="mensajes-viejos">
    <div  className={mensaje.id} >
        <p  className={ "contenido" + mensaje.id}>{mensaje.contenido} </p>
        <span  className={"hora-" + mensaje.id}>{mensaje.hora }</span>
        <span  className={"estado-" + mensaje.id}>
        <i className={mensaje.estado}></i>
        </span>
    </div>
</div>
    )
}
)

return(
    <>
    
    
    <div   className="Mensajes">
    <div className="Perfil">
                <Link to={'/Inicio'}>
                <button  className="flecha" ><i className="bi bi-arrow-left"></i></button>
                </Link>
                <Link to={'/info/' + autor}>
                <div className="imagen-emperador">
                <img   src={imagen.imagen}  alt="" />
                </div>
                </Link>
                <span className="El-Emperador" >{imagen.autor}</span>
                <span className="grabar"><i  className="bi bi-camera-video-fill"></i></span>
                <span className="llamar"><i className="bi bi-telephone-fill"></i></span>
                <span className="pintar"><i className="bi bi-grip-vertical"></i></span>
                
            </div>
            {mensajesNuevos}

      {mapeo}

            {cambiarAlEscribir === 'ahora no se puede mandar mensaje' ?
            <form >
            <div  className="enviar">
            <label htmlFor="nuevos-mensajes" >
            <input onChange={prueba}  type="text" className='Enviar-Mensaje' placeholder={'Enviar mensaje a '+ imagen.autor}  value={valorInput} />
            </label>
            
            </div>
            </form>
            :
            <form onSubmit={pruebasubmit}>
            <div  className="enviar">
            <label htmlFor="nuevos-mensajes" >
            <input onChange={prueba}  type="text" className='Enviar-Mensaje' placeholder={'Enviar mensaje a '+ imagen.autor}  value={valorInput} />
            </label>
            
            </div>
            </form>}

    </div>
    </>
)
} 


export default Mensajes