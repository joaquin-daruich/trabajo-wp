import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContextProvider, useGlobalContext } from './GlobalContext'


const Registrarse = () => {
  const initialStateErrors = {
    email: [],
    password: []
  }
  const initialState = { email: '', password: '' }
  const [tieneArrobaOCom, setTieneArrobaOCom] = useState([])
  const [noTieneArrobaNiCom, setNoTieneArrobaNiCom] = useState(true)
  const [formularioDeLogeo, setformularioDeLogeo] = useState(initialState)
  const [errors, seterrors] = useState(initialStateErrors)
  const { registrado, setRegistrado } = useGlobalContext()

  const valideemailLength = (value) => {
    return value.length > 8 && tieneArrobaOCom.includes('@') &&
      tieneArrobaOCom.includes('.')
  }
  const validePasswordLength = (value) => {
    return value.length > 8
  }
  const ERRORS = {
    email_LENGTH: { text: 'tu email debe tener mas de 8 caracteres , debe tener un "@" y un ".com"', id: 1, validate: valideemailLength },
    PASSWORD_LENGTH: { text: 'tu contraseña debe tener mas de 8 caracteres', id: 2, validate: validePasswordLength }
  }

  const findError = (from, id_error) => {
    return errors[from].find(error => error.id == id_error)
  }


  const validateError = (from, errorToValidate) => {
    // si ya existe en el estado de errores
    if (findError([from], errorToValidate.id)) {
      // si se dejo de cumplir el error 
      if (errorToValidate.validate(formularioDeLogeo[from])) {
        // elimino el erorr porque se dejo de cumplir
        const newemailErrors = errors[from].filter(error => error.id != errorToValidate.id)
        seterrors({ ...errors, [from]: newemailErrors })
      }

    }
    // si no existe en el estado de errores
    else {
      // verifico que no se cumpla la validacion
      if (!errorToValidate.validate(formularioDeLogeo[from])) {
        // agregamos el error al estado de errores
        seterrors({ ...errors, [from]: [...errors[from], errorToValidate] })
      }
    }
  }

  const handleBlurInput = () => {
    validateError('email', ERRORS.email_LENGTH)
    validateError('password', ERRORS.PASSWORD_LENGTH)
  }
  const navigate = useNavigate()
  const posteoDePrueba = async (email, contraseña) => {
    try {
        const response = await fetch('https://trabajo-wp-back-end.vercel.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: contraseña,
            })
        });
   
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message || 'Algo salió mal'} `);
        }
   
        const data = await response.json();
        console.log('Usuario registrado:', data);
    } catch (error) {
        console.error('Error en el fetch:', error);
        alert('Hubo un problema con el registro. Intenta nuevamente.');
    }
   };
   

const irParaElInicio = (e) => {
        e.preventDefault()
        valideemailLength(formularioDeLogeo.password) &&
          valideemailLength(formularioDeLogeo.email) &&
          setRegistrado(true)

        const registroHTML = e.target
        const valoresDelRegistro = new FormData(registroHTML)
        posteoDePrueba(valoresDelRegistro.get('email'), valoresDelRegistro.get('password'))

        // navigate('/inicio')
      }
      const handleChangleValue = (e) => {
        const value = e.target.value


        setformularioDeLogeo({ ...formularioDeLogeo, [e.target.name]: e.target.value })

        if (e.target.name === 'email') {
          const letras = value.split('')
          setTieneArrobaOCom(letras)
        }


        handleBlurInput()
      }
      return (
        <form onSubmit={irParaElInicio} >
          <div>
            <h1 className='mensaje3'>Porfavor Registrate para poder comunicarte</h1>
            <label htmlFor="email"  > </label>
            <input
              onChange={handleChangleValue}
              id='email'
              name='email'
              type="text"
              placeholder='Introduzca su email'
              value={formularioDeLogeo.email}
            />
            {
              errors.email.length > 0 &&
              errors.email.map((error) => (<span key={error.id}>{error.text}</span>))
            }
          </div>


          <label htmlFor="password"  >Contraseña:</label>
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
            errors.password.map((error) => (<span key={error.id}>{error.text}</span>))
          }
          <button type='submit'>enviar</button>
        </form>
      )
    }
export { Registrarse }
