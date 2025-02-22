import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Logearse = () => {
    const navigate = useNavigate()
    const mandarLogeo = async (email, contraseña) => {
        try {
          const response = await fetch('https://trabajo-wp-back-end.vercel.app/logearse', {
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
            console.log('Usuario logeado:', data);
            navigate('/inicio')
        } catch (error) {
            console.error('Error en el fetch:', error);
            alert('Hubo un problema con el logeo. Intenta nuevamente.');
        }
       };
    const logear = (e) => {
        e.preventDefault()
          setRegistrado(true)
        const registroHTML = e.target
        const valoresDelLogeo = new FormData(registroHTML)
        mandarLogeo(valoresDelLogeo.get('email'), valoresDelLogeo.get('password'))
      }
    
  return (
    <>
    <form onSubmit={logear} >
    <div>
      <h1 className='mensaje3'>Porfavor Logeate para poder comunicarte</h1>
      <label htmlFor="email"  > </label>
      <input
        id='email'
        name='email'
        type="text"
        placeholder='Introduzca su email'
      />
    </div>


    <label htmlFor="password"  >Contraseña:</label>
    <input
      type="password"
      placeholder='Contraseña'
      id='password'
      name='password'
    />
    <button type='submit'>enviar</button>
  </form>
  <div>
    <h1>No estas registrado todavia?</h1>
    <Link to={'/registrarse'} >Registrate!</Link>
  </div>
  <div>
    <h1>Olvidaste tu contraseña?</h1>
    <Link to={'/olvidarContrasena'} >Olvide mi contraseña!</Link>
  </div>
  </>
  )
}

export default Logearse