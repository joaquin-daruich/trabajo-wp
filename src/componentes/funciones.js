



const separarMensajesPorAutor = (array , mensajeDe , autor ) => {
    mensajeDe.find((buscadorDeAutor) => buscadorDeAutor.autor === autor) ?
    '' :
   autor === 'El Emperador' ?
  mensajeDe.push ( array.find((buscador)=>buscador.autor === 'El Emperador')) && mensajeDe.push (array.find((buscador)=>buscador.autor === 'El Emperador' &&  buscador.ip === 1 + 1   ))  
   :
   autor === 'El Enamorado' ?
  mensajeDe.push ( array.find((buscador)=>buscador.autor === 'El Enamorado')) && mensajeDe.push  (array.find((buscador)=>buscador.autor === 'El Enamorado' && buscador.ip > 3 )) 
  :
  mensajeDe.find((buscadorDeNumero) => buscadorDeNumero.imagen === "../../public/"+autor+".jpg") ?
  ''
  :
  mensajeDe.push (JSON.parse((localStorage.getItem(autor))))
}

export {separarMensajesPorAutor}



