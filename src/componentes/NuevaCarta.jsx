import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './GlobalContext'


const NuevaCarta = () => {
const   [numerosBloqueados , setNumerosBloqueados] = useState([])

const [mensajeDeClick , setmensajeDeClick] = useState('Hace click en el Arcano para hablar con él!')
const [valor , setValor] = useState('')
const [valor2 , setValor2] = useState('')
const {ocultarCarta} = useGlobalContext()
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
    imagen:valor === '' ? "../../public/"+valor2+".jpg" : "../../public/"+valor+".jpg" ,
    ip: 1,
    informacionDeAutor: mostrarInformacionDependiendoElAutor(Number(valor))
}


    
    
const hablarConElNuevoArcano = () => {
    localStorage.setItem(valor , JSON.stringify(nuevoArcanoMayor))
}
const capturarValor = (e ) => {
 setValor(e.target.value)
 setValor2('')
}

const capturarValor2 = (e ) => {
    setValor2(e.target.value)
    setValor(''),
     numerosBloqueados.includes(e.target.value) ?
setBloquear('Hace click para desbloquearlo!') : 
setBloquear('Hace click en el Arcano para bloquearlo!')
   }






const seleccionarArcano = (e) => {
e.preventDefault()
}

const [mostrar , setMostrar] = useState('')
const [mostrarMano , setmostrarMano] = useState('')
const [mostrar2 , setMostrar2] = useState('')
const [mostrarMano2 , setmostrarMano2] = useState('')
const [bloquear, setBloquear] = useState('Hace click en el Arcano para bloquearlo!')
const alEscribirSeMuestra = (valor) => {

    numerosBloqueados.includes(valor) ?
    mostrar === 'ocultar' ?
    ''
    :
    mostrar === 'imagenArcano' ?
    setMostrar('ocultar')
    :
    ''
    :
    valor === '' ?
    mostrar === 'ocultar' ?
    mensajeDeClick === 'Arcano Bloqueado!!' ?
    ''
    :
    setmensajeDeClick('Arcano Bloqueado!!')
    :
    setMostrar('ocultar') 
    :
    mostrar === 'imagenArcano'
    ?
    mensajeDeClick === 'Hace click en el Arcano para hablar con él!' ?
    ''
    :
    setmensajeDeClick('Hace click en el Arcano para hablar con él!')
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


const soloPoderUsarNumerosDel1al22 = () => {
    return(
        Number(valor) < Number(23) ?
        ''
        :
        setValor('') ,
        Number(valor) > -1 ?
        ''
        :
        Number(valor2) < Number(23) ?
        ''
        :
        setValor2(''),
                Number(valor2) > Number(-1) ?
        ''
        :
        setValor2(''),
        numerosBloqueados === null ?
        '' 
        :
        Number(valor2) < Number(23) ?
        ''
        :
        setValor2('')
    )
    }
     soloPoderUsarNumerosDel1al22()

const  [contenedorDeHolas , setcontenedorDeHolas] = useState([])

const buscarNumerosBloqueados = () => {
     
    const numerosGuardados = JSON.parse(localStorage.getItem('numerosBloqueados'))
numerosGuardados === null ?
''
:
contenedorDeHolas.includes('hola') ?
'':
setNumerosBloqueados(numerosGuardados)

numerosGuardados !== null &&
 contenedorDeHolas.push ( 'hola')



}


const alEscribirSeMuestra2 = (valor) => {
    valor === '' ?
    mostrar2 === 'ocultar' ?
    ''
    :
    setMostrar2('ocultar') 
    :
    mostrar2 === 'imagenArcano'
    ?
    ''
    :
    setMostrar2('imagenArcano'),
    valor === '' ?
    mostrarMano2 === 'ocultar' ?
    ''
    :
    setmostrarMano2('ocultar') 
    :
    mostrarMano2 === 'apuntar'
    ?
    ''
    :
    setmostrarMano2('apuntar')
    
}

alEscribirSeMuestra(valor)
alEscribirSeMuestra2(valor2)

const DesbloquearNumero = (valor2) => {
    numerosBloqueados.includes(valor2) ?
setNumerosBloqueados(numerosBloqueados.filter((numero)  => numero !== valor2))
 :
numerosBloqueados.push(valor2), 
setValor2(''),

localStorage.setItem('numerosBloqueados' , JSON.stringify(numerosBloqueados))
}






const bloquearCarta = () => {
    Number(valor2) === 4 ? ocultarCarta(Number(4))
: Number(valor2) === 6 ? ocultarCarta(Number(6)) : ''
DesbloquearNumero(valor2)
}
buscarNumerosBloqueados()
  return (
    <form className='seleccionar' onSubmit={seleccionarArcano}>
        <div className='contenedor-msj'>
        <h1 className='mensaje3'>Escribí un numero del 1 al 22</h1>
        <h2 className='mensaje3'>El numero que eligas va a corresponder a su respectivo arcano mayor</h2>
        <h3 className='mensaje3'>Ejemplo: si elegis el 7, va a ser el carro y ahora vas a poder hablar con el carro!</h3>
        </div>
        <input className='input'  onChange={capturarValor} value={valor} type="number" placeholder=     'Escribí del 1 al 22 para hablar'  />
        <div className={mostrarMano}>
        {mensajeDeClick}
        </div>
        <div className='contenedor-msj2'>
        <h1 className='mensaje2'>Si hay alguna carta que no te gusta escribi su numero  y bloqueala!</h1>
        <input className='input2'  onChange={capturarValor2} value={valor2} type="number" placeholder=     'Escribí alguna carta que quieras bloquear'  />
        </div>
        <div className={mostrarMano2}>
        {bloquear}
        </div>
        <button  onClick={bloquearCarta} className={mostrar2}><img src={Number(valor2) === 4 ? "../../public/LeEmpereur.jpg" : Number(valor2) === 6 ? "../../public/enamorado.jpg" : nuevoArcanoMayor.imagen} alt="" /></button>
        {Number(valor) === 4         ?   <Link to={'/perfiles/' +  'El Emperador'}  >
                        <img className={mostrar} src={"../../public/LeEmpereur.jpg"} alt="" />
                    </Link> : Number(valor) === 6         ?             <Link to={'/perfiles/' + 'El Enamorado'} >
                                    <img className={mostrar} src={"../../public/enamorado.jpg"} alt="" />
                                </Link> :
        <Link onClick={hablarConElNuevoArcano} to={'/perfiles/' + valor}><img className={mostrar} src={nuevoArcanoMayor.imagen}></img></Link>
    }
    </form>
  )
}

export default NuevaCarta