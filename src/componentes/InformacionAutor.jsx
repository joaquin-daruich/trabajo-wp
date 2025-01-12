import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MensajesLista } from '../ListaDeMensajes'

const InformacionAutor = () => {

const parametro = useParams()
const autor = parametro.autor  

const imagen = autor === 'El Emperador' ? 
'' :
 autor === 'El Enamorado'?
 ''
 :  JSON.parse((localStorage.getItem(autor)))

  return (
<div className='Mensajes'>
  <div className='Perfil'>
  <Link to={'/perfiles/' + autor }>
        <button className="flecha" ><i class="bi bi-arrow-left"></i></button>
    </Link>
  </div>

    
{autor === 'El Emperador' ? 
<div>
  <img className='imagenArcano2' src="../../public/LeEmpereur.jpg" alt='' />
  <h1 className='informacion-autor'>El Emperador representa el dominio total de la materia y la estabilidad material</h1> </div>:
  autor === 'El Enamorado'?
  <div>
  <img className='imagenArcano2' src="../../public/enamorado.jpg" alt="" />
<h1 className='informacion-autor'>El Enamorado es la bienaventuranza y el amor por el mundo</h1></div>: 
    <div>
    <img className='imagenArcano2' src={imagen.imagen} alt="" />
    <h1 className='informacion-autor'>{imagen.informacionDeAutor}</h1>
    </div>}

</div>
  )
}

export default InformacionAutor