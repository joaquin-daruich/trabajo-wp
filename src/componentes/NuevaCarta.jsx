import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NuevaCarta = () => {
const [valor , setValor] = useState('')

const estado = "bi bi-check2-all"
const mostrarAutorDependiendoElNumero = (valor) =>{
return(
    valor === 1 ? 'El Mago'
    : valor === 2 ? 'La Sacerdotisa'
    : valor === 3 ? 'La Emperatriz'
    : valor === 5 ? 'El Papa'
    : valor === 7 ? 'El Carro'
    : valor === 8 ? 'La Justicia'
    : valor === 9 ? 'El Hermitaño'
    : valor === 10 ? 'La Rueda de la Fortuna'
    : valor === 11 ? 'La Fuerza'
    : valor === 12 ? 'El Colgado'
    : valor === 13 ? ''
    : valor === 14 ? 'La Templanza'
    : valor === 15 ? 'El Diablo'
    : valor === 16 ? 'La Torre'
    : valor === 17 ? 'La Estrella'
    : valor === 18 ? 'La Luna'
    : valor === 19 ? 'El Sol'
    : valor === 20 ? 'El Juicio'
    : valor === 21 ? 'El Mundo'
    : valor === 22 ? 'El Loco'
    :
    ''
)
}

const mostrarInformacionDependiendoElAutor = (valor) =>{
    return(
        valor === 1 ? 'Bueno este es el Mago, su numero es el 1 y en su mesa tiene toda la disponibilidad de los elementos, como numero iniciador tiene la potencialidad de todo el infito universo en su tablero'
        : valor === 2 ? 'La Sacerdotisa es el numero 2, numero que simboliza la dualidad, la reconciliación y el reposo, esta en la acumulacion de algo nuevo'
        : valor === 3 ? 'La Emperatriz representa el numero 3 y ya es una primera energia formada y liberada caoticamente'
        : valor === 5 ? 'El Papa representa abandonar los principios mas mundanos o materiales para ir en busca de algo mas, algo arriba'
        : valor === 7 ? 'El Carro ya representa un numero perfecto y muy utilizado, el numero 7, el espiritu(3) sobre la materia (4)'
        : valor === 8 ? 'La Justicia representa poner las cartas sobre la mesa y mirarse de frente para ver realmente quien sos, como se puede observar es una justicia tramposa, pero solo la de Dios puede serla'
        : valor === 9 ? 'El Hermitaño tiene la H al principio por Hermes, 3 veces sabio'
        : valor === 10 ? 'La Rueda de la Fortuna, un primer punto de vacio absoluto que esta a la espera de alguna Fuerza que lo pueda mover'
        : valor === 11 ? 'La Fuerza, el dominio total de los instintos mas salvajes, pero no con violencia como se puede observar'
        : valor === 12 ? 'El Colgado, el cambio de perspectiva absoluto, la no-accion y el reposo'
        : valor === 13 ? 'El arcano sin nombre, tiene un paralelo con el Loco que no tiene numero, representa una muerte simbolica no siempre negativa pero seguramente dolorosa'
        : valor === 14 ? 'La Templanza, el equilibrio absoluto, entre la materia y el espiritu, entre el vino y el agua'
        : valor === 15 ? 'El Diablo, un descenso hacia las profundidades mas ocultas del inconsiente, lleva una mueca infantil, podes tenerle miedo pero es ignorancia'
        : valor === 16 ? 'La Torre, la destruccion o explosion, positivo o negativo'
        : valor === 17 ? 'La Estrella, una carta con señal de muy buen augurio'
        : valor === 18 ? 'La Luna, el espejo reducido de una mirada muy poderosa, las relaciones con lo profundo'
        : valor === 19 ? 'El Sol, lo ultimo antes de lo ultimo, la iluminacion'
        : valor === 20 ? 'El Juicio, se llama a todo lo que parecia dormido o muerto, es un vacio muy poderoso que va a llevar a algo muy grande'
        : valor === 21 ? 'El Mundo, la realización absoluta de todo, la inteligencia, lo emocional, lo terrenal y lo sexual'
        : valor === 22 ? 'El Loco, una carta que podria estar ubicada en cualquier lugar, no tiene destino fijo, es la libertad en su maxima expresion'
        :
        ''
    )
    }

const nuevoArcanoMayor = {      
    autor:mostrarAutorDependiendoElNumero(Number(valor)),
    contenido: 'Yo soy  '+mostrarAutorDependiendoElNumero(Number(valor)),
    hora: valor+':0'+valor,
    estado: estado,
    id:   'uno',
    imagen:"../../public/"+valor+".jpg",
    ip: 1,
    informacionDeAutor: mostrarInformacionDependiendoElAutor(Number(valor))
}

const soloPoderUsarNumerosDel1al22 = () => {
    return(
        Number(valor) < Number(23) ?
        ''
        :
        setValor('') ,
        Number(valor) > -1 ?
        ''
        :
        setValor(''),
        Number(valor) === 4 ?
        setValor('') 
        :
        '',
        Number(valor) === 6 ?
        setValor('') 
        :
        ''
    )
    }
    soloPoderUsarNumerosDel1al22()
    
const hablarConElNuevoArcano = () => {
    localStorage.setItem(valor , JSON.stringify(nuevoArcanoMayor))
}
const capturarValor = (e) => {
 setValor(e.target.value)
}
console.log(valor)

const seleccionarArcano = (e) => {
e.preventDefault()
}

const [mostrar , setMostrar] = useState('')
const [mostrarMano , setmostrarMano] = useState('')
const alEscribirSeMuestra = () => {
    valor === '' ?
    mostrar === 'ocultar' ?
    ''
    :
    setMostrar('ocultar') 
    :
    mostrar === 'imagenArcano'
    ?
    ''
    :
    setMostrar('imagenArcano'),
    valor === '' ?
    mostrarMano === 'ocultar' ?
    ''
    :
    setmostrarMano('ocultar') 
    :
    mostrarMano === 'apuntar'
    ?
    ''
    :
    setmostrarMano('apuntar')
}
alEscribirSeMuestra()
  return (
    <form className='seleccionar' onSubmit={seleccionarArcano}>
        <div className='contenedor-msj'>
        <h1 className='mensaje3'>Elegí un numero del 1 al 22</h1>
        <h2 className='mensaje3'>El numero que eligas va a corresponder a su respectivo arcano mayor</h2>
        <h3 className='mensaje3'>Ejemplo: si elegis el 7, va a ser el carro y ahora vas a poder hablar con el carro!</h3>
        </div>
        <h4 className='mensaje4'>El 4 y el 6 ya estan!</h4>
        <input className='input'  onChange={capturarValor} value={valor} type="number" placeholder=     '1 al 22'  />
        <div className={mostrarMano}>
        Hace click en el Arcano para hablar con él!
        </div>
        <Link onClick={hablarConElNuevoArcano} to={'/perfiles/' + valor}><img className={mostrar} src={nuevoArcanoMayor.imagen}></img></Link>
        
    </form>
  )
}

export default NuevaCarta