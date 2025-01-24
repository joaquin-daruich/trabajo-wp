import React, { useState } from 'react'
import './App.css'
import Mensajes from './componentes/Mensajes.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import {Inicio} from './componentes/Inicio'
import InformacionAutor from './componentes/InformacionAutor'
import {IniciarSesion} from './componentes/IniciarSesion'
import NuevaCarta from './componentes/NuevaCarta'
import Error404 from './componentes/Error404.jsx'
import CrearNuevaPersonaParaHablar from './componentes/CrearNuevaPersonaParaHablar.jsx'



function App() {



return (
<>

<Routes>
    <Route path='/'element={<IniciarSesion></IniciarSesion>}/>
    <Route path='/Inicio' element={<Inicio></Inicio>}/>
    <Route path='/perfiles/:autor' element={<Mensajes></Mensajes>}/>
    <Route path='/info/:autor' element={<InformacionAutor></InformacionAutor>}/>
    <Route path='/crearNuevaCarta' element={<NuevaCarta></NuevaCarta>}/>
    <Route path='/*' element={<Error404></Error404>} />
    <Route path='/NuevaPersona' element={<CrearNuevaPersonaParaHablar></CrearNuevaPersonaParaHablar>} />
</Routes>

 




</>
)}

export default App

