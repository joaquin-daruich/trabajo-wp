import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  const cerrarSesion = () => {
    localStorage.setItem('estas logeado?' , false)
    navigate('/login')
}
  return (
    <div className='noencontrar'>
     <h1 className='notfound'>Ruta no encontrada {':('} </h1>
     <Link to={'/inicio'}>
     <h1 className='notfound2'>Volver al Inicio  </h1>
     </Link>
     <Link>
     <div onClick={cerrarSesion}>
                Cerrar sesion!
          </div>
          </Link>
     </div>
  )
}

export default Error404