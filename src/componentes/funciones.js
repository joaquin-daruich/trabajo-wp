

const separarMensajesPorAutor = (array , mensajeDe , autor ) => {
    mensajeDe.find((buscadorDeAutor) => buscadorDeAutor.autor === autor) ?
    console.log('sisisi') :
   autor === 'El Emperador' ?
  mensajeDe.push ( array.find((buscador)=>buscador.autor === 'El Emperador')) && mensajeDe.push (array.find((buscador)=>buscador.autor === 'El Emperador' &&  buscador.ip === 1 + 1   ))  
   :
  mensajeDe.push ( array.find((buscador)=>buscador.autor === 'El Enamorado')) && mensajeDe.push  (array.find((buscador)=>buscador.autor === 'El Enamorado' && buscador.ip > 3 )) 
}

export {separarMensajesPorAutor}


const obtenerMensajes = (array) => {
  const mensajesGuardados = localStorage.getItem('mensajes')

  
  const mensajesJson = JSON.stringify(array)
  localStorage.setItem('mensajes' , mensajesJson)
  return mensajesJson , JSON.parse(mensajesGuardados) 

}

export {obtenerMensajes}