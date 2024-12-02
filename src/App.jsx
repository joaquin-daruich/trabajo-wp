import React, { useState } from 'react'
import './App.css'
import Mensajes from './componentes/mensajes'
import { listaDeMensajes } from './ListaDeMensajes'



function App() {

// const userData = {
//     isLogged: true,
//     isAdmin: true,
//     lang: 'en',
// }




return (
<>
{/* <Counter limit={3}/> */}
{/* <NavBar userData ={userData}/> */}

<Mensajes listaDeMensajes = {listaDeMensajes} ></Mensajes>

<video className='zora-domain'  src="../public/zora-domain.mp4"  autoPlay controls loop > </video>

</>
)}

export default App

