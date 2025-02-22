
import './App.css'
import Mensajes from './componentes/Mensajes.jsx'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './componentes/Inicio'
import InformacionAutor from './componentes/InformacionAutor'
import { Registrarse } from './componentes/Registrarse'
import NuevaCarta from './componentes/NuevaCarta'
import Error404 from './componentes/Error404.jsx'
import CrearNuevaPersonaParaHablar from './componentes/CrearNuevaPersonaParaHablar.jsx'
import RutaProtegida from './componentes/RutaProtegida.jsx'
import Logearse from './componentes/Logearse.jsx'
import OlvidarContrasena from './componentes/OlvidarContrasena.jsx'
import NuevaContrasena from './componentes/NuevaContrasena.jsx'


function App() {



    return (
        <>
            <Routes>
            <Route path='/registrarse' element={<Registrarse></Registrarse>} />
                    <Route path='/login' element={<Logearse></Logearse>} />
                    <Route path='/olvidarContrasena' element={<OlvidarContrasena></OlvidarContrasena>} />
                    <Route path="/nuevaContrasena/:token" element={<NuevaContrasena />} />

                <Route  element={<RutaProtegida/>} >
                    <Route path='/*' element={<Error404></Error404>} />


                    <Route path='/Inicio' element={<Inicio></Inicio>} />
                    <Route path='/perfiles/:autor' element={<Mensajes></Mensajes>} />
                    <Route path='/info/:autor' element={<InformacionAutor></InformacionAutor>} />
                    <Route path='/crearNuevaCarta' element={<NuevaCarta></NuevaCarta>} />
                    <Route path='/NuevaPersona' element={<CrearNuevaPersonaParaHablar></CrearNuevaPersonaParaHablar>} />
                </Route>

            </Routes >







        </>
    )
}

export default App

