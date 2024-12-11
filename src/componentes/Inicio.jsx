import React, { useState } from 'react';
import { Link , Route, Routes} from 'react-router-dom';
 import { MensajesLista } from '../ListaDeMensajes';
import Mensajes from './mensajes';




const Inicio = () => {





  return (
    <>
    <div className='inicio'>
        
        <h1 className='quien'>Con quien queres hablar? </h1>
        <div >
            <Link to={'/perfiles/' +  'El Emperador'}  >
                <img className='emper' src="../../public/LeEmpereur.jpg" alt="" />
            </Link>
        </div>
        <div>
            <Link to={'/perfiles/' + 'El Enamorado'} >
                <img className='enamo' src="../../public/enamorado.jpg" alt="" />
            </Link>
        </div>
    </div>
    </>
  )
}

export {Inicio }