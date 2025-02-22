import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Registrarse } from './Registrarse'
import { useGlobalContext } from './GlobalContext'
import Logearse from './Logearse'



const RutaProtegida = () => {
const logeado = localStorage.getItem('estas logeado?')

    
  return (
    <>
    {    logeado?
    <Outlet/>
    :
    <>
    <div>Primero vas a tener que Logearte para poder hablar con alguien!</div>
    <Link to={'/login'}><Logearse></Logearse></Link>
    </>
    }

    </>
  )
}

export default RutaProtegida