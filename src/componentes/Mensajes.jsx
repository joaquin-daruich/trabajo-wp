import React, { useState } from "react";


const Mensajes =  ({listaDeMensajes}) => {
// const listaDeMensajes = props.listaDeMensajes
// const [emperador , setEmperador] = useState("../../public/LeEmpereur.jpg")
// const cambiarFoto = () => {
//     setEmperador("../../public/enamorado.jpg")
//     emperador === "../../public/enamorado.jpg" && setEmperador("../../public/LeEmpereur.jpg")
// }
// onDoubleClick={cambiarFoto}
const  [valorInput , setValorInput] = useState()

const  [valorClass , setValorClass] = useState("Enviar-Mensaje")

const  [guarro, setContenido] = useState('')

const  [contador , setContador] = useState(0)


const nuevoMensaje = {
    autor:'ElEnamorado',
    contenido: valorInput,
    hora: '4:04',
    estado: "bi bi-check2-all",
    id:   'mensaje-nuevo',
}



const objetoDeClasname = [valorClass]






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
        listaDeMensajes.push(nuevoMensaje)
        setValorInput('')
        console.log('hola')
        setContador(contador + 1)
}


const prueba = (e) => {
    return(
    console.log(e.target.value),

    setValorClass('clase-2'),
    setValorInput(e.target.value)
)
}
const mensajesNuevos = []

console.log('aver')
return(
    <>

    <div className="Mensajes">
    <div className="Perfil">
                <span className="flecha"><i class="bi bi-arrow-left"></i></span>
                <img  className="imagen-emperador" src={"../../public/LeEmpereur.jpg"}  alt="" />
                <span className="El-Emperador">El Emperador</span>
                <span className="grabar"><i  className="bi bi-camera-video-fill"></i></span>
                <span className="llamar"><i class="bi bi-telephone-fill"></i></span>
                <span className="pintar"><i class="bi bi-grip-vertical"></i></span>
            </div>
            {mensajesNuevos}

        {listaDeMensajes.map((mensaje , index) =>{
            return(
            mensaje.id === 'mensaje-nuevo' ?
            contador >  1 ?
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

            <form onSubmit={pruebasubmit}>
            <div  className="enviar">
            <label htmlFor="nuevos-mensajes" >
            <input onChange={prueba}  type="text" className={objetoDeClasname[0]} placeholder="Enviar mensaje al Emperador" value={valorInput} />
            </label>
            <button  className="btn-enviar" type="submit">enviar</button>
            </div>
            </form>

    </div>
    </>
)
} 

export default Mensajes