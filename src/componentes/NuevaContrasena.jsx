import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const NuevaContrasena = () => {
    const parametros = useParams()
    const tokenDeContraseña = parametros.token
    const navigate = useNavigate()
    const meOlvideLaContrasena = async (contraseña) => {
        try {
          const response = await fetch('https://trabajo-wp-back-end.vercel.app/nuevaContrasena', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password,
                    token: tokenDeContraseña
                })
            });
       
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message || 'Algo salió mal'} `);
            }
       
            const data = await response.json();
            console.log('Contraseña enviada:', data);
            navigate('/login')
            
        } catch (error) {
            console.error('Error en el fetch:', error);
            alert('Hubo un problema con el logeo. Intenta nuevamente.');
        }
       };
    const mandarOlvideContrasena = (e) => {
        e.preventDefault()
        const registroHTML = e.target
        const valoresDelFormulario = new FormData(registroHTML)
        meOlvideLaContrasena(valoresDelFormulario.get('contraseña'))
      }
    
  return (
    <>
    <form onSubmit={mandarOlvideContrasena} >
    <div>
      <h1 className='mensaje3'>Porfavor escriba su nueva contraseña!</h1>
      <label htmlFor="password"  > </label>
      <input
        id='password'
        name='password'
        type="text"
        placeholder='Introduzca su contraseña'
      />
    </div>
    <button type='submit'>enviar</button>
  </form>
  <div>
    <h1>Te acordaste tu contraseña?</h1>
    <Link to={'/login'} >Logeate!</Link>
  </div>
  </>
  )
}

export default NuevaContrasena