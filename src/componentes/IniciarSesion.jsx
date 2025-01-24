import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const IniciarSesion = () => {
  const initialStateErrors = {
    username: [],
    password: []
  }
const initialState = {username: '' , password: ''}
const [formularioDeLogeo , setformularioDeLogeo] = useState(initialState)
const [errors , seterrors] = useState(initialStateErrors)

const valideUsernameLength = (value) => {
  return value.length > 8 
}
const ERRORS = {
  USERNAME_LENGTH: {text:'tu nombre de usuario debe tener mas de 8 caracteres' , id: 1 , validate: valideUsernameLength} ,
  PASSWORD_LENGTH: {text: 'tu contraseña debe tener mas de 8 caracteres' , id: 2 , validate: valideUsernameLength}
}

const findError = (from, id_error) => {
return errors[from].find(error => error.id == id_error)
}


const validateError = (from , errorToValidate ) => {
  // si ya existe en el estado de errores
  if( findError([from] ,errorToValidate.id)){
 // si se dejo de cumplir el error 
    if (errorToValidate.validate(formularioDeLogeo[from])){
       // elimino el erorr porque se dejo de cumplir
      const newUsernameErrors = errors[from].filter(error => error.id != errorToValidate.id)
    seterrors({...errors ,[from] : newUsernameErrors})
  }

}
 // si no existe en el estado de errores
else{
   // verifico que no se cumpla la validacion
  if ( !errorToValidate.validate(formularioDeLogeo[from])){
     // agregamos el error al estado de errores
    seterrors({...errors, [from]: [...errors[from], errorToValidate]})
  }
}
}

const handleBlurInput = () => {
validateError('username' , ERRORS.USERNAME_LENGTH)
validateError('password' , ERRORS.PASSWORD_LENGTH)
}
const navigate = useNavigate()
const irParaElInicio = (e) => {
  e.preventDefault()
  valideUsernameLength(formularioDeLogeo.password) &&
valideUsernameLength(formularioDeLogeo.username) &&
    navigate('/inicio')
}

const handleChangleValue = (e) => {
  setformularioDeLogeo({...formularioDeLogeo, [e.target.name]: e.target.value })
  handleBlurInput()
}
  return (
    <form onSubmit={irParaElInicio} >
      <div>
        <h1 className='mensaje3'>Porfavor incia sesion para poder comunicarte</h1>
        <label  htmlFor="username"  > </label>
            <input 
            onChange={handleChangleValue}   
            id='username' 
            name='username' 
            type="text" 
            placeholder='Nombre de Usuario' 
            value={formularioDeLogeo.username}
            />
            {
              errors.username.length > 0 &&
              errors.username.map((error ) => (<span key={error.id}>{error.text}</span>))
            }
            </div>
            

          <label  htmlFor="username"  >Contraseña:</label>
              <input
                    onChange={handleChangleValue}
                    type="password" 
                    placeholder='Contraseña'
                    id='password'
                    name='password' 
                    value={formularioDeLogeo.password}
                    />
                                {
              errors.password.length > 0 &&
              errors.password.map((error ) => (<span key={error.id}>{error.text}</span>))
            }
          <button type='submit'>enviar</button>
   </form>
  )
}
export  {IniciarSesion}
