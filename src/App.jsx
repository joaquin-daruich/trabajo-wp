import React, { useState } from 'react'
import './App.css'
import Mensajes from './componentes/mensajes'
import { MensajesLista } from './ListaDeMensajes'
import { Link, Route, Routes } from 'react-router-dom'
import {Inicio} from './componentes/Inicio'
import InformacionAutor from './componentes/InformacionAutor'
import {IniciarSesion} from './componentes/IniciarSesion'
import NuevaCarta from './componentes/NuevaCarta'



function App() {



return (
<>

<Routes>
    <Route path='/'element={<IniciarSesion></IniciarSesion>}/>
    <Route path='/Inicio' element={<Inicio></Inicio>}/>
    <Route path='/perfiles/:autor' element={<Mensajes></Mensajes>}/>
    <Route path='/info/:autor' element={<InformacionAutor></InformacionAutor>}/>
    <Route path='/crearNuevaCarta' element={<NuevaCarta></NuevaCarta>}/>
</Routes>

 




</>
)}

export default App

