import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const IniciarSesion = () => {

const SesionIniciada = (e) => {
    e.preventDefault()
}

const requerimentos = (e) => {

    e.target.value.length >= 8 ?
    setSesionIniciada(
    <Link to={'/Inicio'}>
    <button type='submit'>Enviar</button>
    </Link>)
    :
    setSesionIniciada('')

}
const [sesionIniciada , setSesionIniciada] = useState()
  return (


    <form className='iniciarSesion' onSubmit={SesionIniciada}>
            <div>
                <h1 className='mensaje3'>Porfavor incia sesion para poder comunicarte</h1>

            <label  htmlFor="nuevos-mensajes" >
            
            <div>
            
            <input className='iniciar' onChange={requerimentos}  type="text" required  placeholder={'Nombre de Usuario'} minLength={8}  />
            <h1 className='mensaje3'>Su nombre de usuario debe tener al menos 8 letras para poder inciar sesion!</h1>
            {sesionIniciada}
            </div> 
            
            </label>
            </div>
        
    </form>
    

  )
}

export  {IniciarSesion}
