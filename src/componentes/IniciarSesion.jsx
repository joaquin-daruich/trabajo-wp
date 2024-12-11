import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const IniciarSesion = () => {

const SesionIniciada = (e) => {
    e.preventDefault()
}

const requerimentos = (e) => {

    e.target.value.length === 8 && 
    setSesionIniciada(
    <Link to={'/Inicio'}>
    <button type='submit'>Enviar</button>
    </Link>
)
}
const [sesionIniciada , setSesionIniciada] = useState()
  return (


    <form className='iniciarSesion' onSubmit={SesionIniciada}>
            <div>
                <h1>Porfavor incia sesion para poder comunicarte</h1>
                <h1>Su nombre de usuario debe tener al menos 8 letras para poder inciar sesion!</h1>
            <label  htmlFor="nuevos-mensajes" >
            
            <div>
            
            <input onChange={requerimentos}  type="text" required  placeholder={'Nombre de Usuario'} minLength={8}  />
            {sesionIniciada}
            </div> 
            
            </label>
            </div>
        
    </form>
    

  )
}

export  {IniciarSesion}
