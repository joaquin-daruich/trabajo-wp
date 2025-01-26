import React from 'react'
import { Link, useParams } from 'react-router-dom'


const InformacionAutor = () => {

const parametro = useParams()
const autor = parametro.autor  

const imagen = autor === 'El Emperador' ? 
'' :
 autor === 'El Enamorado'?
 ''
 :  JSON.parse((localStorage.getItem(autor)))
const eliminarHistorial = () => {
  localStorage.removeItem('mensajes De ' + imagen.autor),
  localStorage.removeItem('contador de ' + imagen.autor)
}
  return (
<div className='Mensajes'>
  <div className='Perfil'>
  <Link to={'/perfiles/' + autor }>
        <button className="flecha" ><i className="bi bi-arrow-left"></i></button>
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
            <button onClick={eliminarHistorial} className='eliminarHistorial'>Hace Click aca para eliminar el historial de Mensajes de {imagen.autor}</button>
    </div>}

</div>
  )
}

export default InformacionAutor