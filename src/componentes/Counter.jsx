import React, { useState } from 'react'




const Counter = (props) => {

const [contador , setcontador] = useState(0)
const aumentar = () => {
    setcontador (contador + 1)
}
const decrementar = () => {
    contador>0 &&
    setcontador (contador - 1) }

  return (
    <>
    {contador<props.limit ?
        <button onClick={aumentar}>+</button>
    :
    <span>No se puede aumentar mas de </span>}
    <span>{contador}</span>
    <button  onClick={ decrementar }>-</button>
    </>
  )
}

export default Counter