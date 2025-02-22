import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Registrarse } from './Registrarse'
import { useGlobalContext } from './GlobalContext'



const RutaProtegida = () => {
    const { registrado , setRegistrado } = useGlobalContext()


    
  return (
    <>
    {    registrado ?
    <Outlet/>
    :
    <>
    <div>Primero vas a tener que Logearte para poder hablar con alguien!</div>
    <Link to={'/'}><Registrarse/></Link>
    </>
    }

    </>
  )
}

export default RutaProtegida