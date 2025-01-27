import React from 'react';
import { Link } from 'react-router-dom';
import { MensajesLista } from '../MensajesLista';
import { useGlobalContext } from './GlobalContext';





const Inicio = () => {
const enamorado = MensajesLista.find((imagen ) => imagen.autor === 'El Enamorado')
const emperador = MensajesLista.find((imagen ) => imagen.autor === 'El Emperador')
const {mostrarEmperador} = useGlobalContext()
const {mostrarEnamorado} = useGlobalContext()


  return (
    
    <>
    
    <div className='inicio'>
        
        <div className='h1sDeInicio'>
            <h1 className='elegir'>Con quien queres hablar? </h1>
            <h1 className='elegir'>Elegí mas!</h1>
        </div>
        <div className='imagenesAElegir'>
            <div className={mostrarEmperador} >
                <Link to={'/perfiles/' +  'El Emperador'}  >
                    <img className='emper' src={emperador.imagen} alt="" />
                </Link>
            </div>
            <div className={mostrarEnamorado}>
                <Link to={'/perfiles/' + 'El Enamorado'} >
                    <img className='enamo' src={enamorado.imagen} alt="" />
                </Link>
            </div>
                <Link to={'/crearNuevaCarta'}>
                    <img  className='tarot' src="/completo.jpg" alt="" />
                </Link>
        </div>    

    </div>
    </>
  )
}

export {Inicio }