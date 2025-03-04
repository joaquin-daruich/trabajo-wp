import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContextProvider } from './componentes/GlobalContext.jsx'
import RutaProtegida from './componentes/RutaProtegida.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<GlobalContextProvider>
    <App />
</GlobalContextProvider>
</BrowserRouter>

)
