import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MensajesLista } from '../ListaDeMensajes'

const InformacionAutor = () => {

const parametro = useParams()
const autor = parametro.autor  

const imagen = MensajesLista.find((imagen) => imagen.autor === autor)

  return (
<div>
    <img src={imagen.imagen} alt="" />
    <div>Esta es la informacion de {autor}</div>
    <Link to={'/perfiles/' + autor }>
        <button className="flecha" ><i class="bi bi-arrow-left"></i></button>
    </Link>
</div>
  )
}

export default InformacionAutor