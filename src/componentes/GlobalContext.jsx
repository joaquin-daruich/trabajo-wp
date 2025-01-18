import { Children, createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
const [mostrarEmperador , setmostrarEmperador] = useState('')
const [mostrarEnamorado , setmostrarEnamorado] = useState('')
const ocultarCarta = (numero) => {
    mostrarEmperador === 'ocultar' ?
    setmostrarEmperador('') :
    Number(numero) === 4 ? 
    setmostrarEmperador('ocultar')
    :
    mostrarEnamorado === 'ocultar' ?
    setmostrarEnamorado('') :
    Number(numero) === 6 ?
    setmostrarEnamorado('ocultar')
    : 
    ''
}
    return (
        <GlobalContext.Provider value={
                {
                    mostrarEmperador:mostrarEmperador,
                    mostrarEnamorado:mostrarEnamorado,
                    ocultarCarta:ocultarCarta 
                }
            }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return (useContext(GlobalContext))
}