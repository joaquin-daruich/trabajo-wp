import React from 'react'
import { useNavigate } from 'react-router-dom'

const CrearNuevaPersonaParaHablar = () => {
const estado = "bi bi-check2-all"
const navegar = useNavigate()
const     guardarFormulario = (e) => {
    e.preventDefault()
const formulario = e.target
const   valoresFormulario = new FormData(formulario)
 const objetoDeNuevaPersona = {
    autor: valoresFormulario.get('nombreAutor'),
    contenido: valoresFormulario.get('primerMensaje'),
    hora: valoresFormulario.get('hora'),
    estado: estado,
    id:   'uno',
    imagen:valoresFormulario.get('imagen'),
    ip: 1 ,
    nuevoautor: valoresFormulario.get('nombreAutor'),
    informacionDeAutor: valoresFormulario.get('descripcion')
}

const nuevoAutor = objetoDeNuevaPersona.nuevoautor
localStorage.setItem(nuevoAutor , JSON.stringify(objetoDeNuevaPersona))
navegar('/perfiles/' + nuevoAutor)
console.log(nuevoAutor)
}

  return (
    <form className='formCrear' onSubmit={guardarFormulario}>
        <h2 className='formh2' > Indique la hora establecida
         <input className='forminput' type="text" name='hora'/> 
        </h2>
        <h2 className='formh2'  > Indique el primer mensaje que se va a mostrar de la nueva persona creada
         <input className='forminput' type="text" name='primerMensaje'/> 
        </h2>
        <h2  className='formh2' > Indique la imagen que llevara esta persona
         <input className='forminput' type="text" name='imagen'/> 
        </h2>
        <h2  className='formh2' > Indique el nombre de esta persona
         <input className='forminput' type="text" name='nombreAutor'/> 
        </h2>
        <h2  className='formh2' > Indique la descripcion de esta persona
         <input className='forminput' type="text" name='descripcion'/> 
        </h2>
        <button className='btn-enviar' type='submit'> Enviar</button>
    </form>
  )
}

export default CrearNuevaPersonaParaHablar