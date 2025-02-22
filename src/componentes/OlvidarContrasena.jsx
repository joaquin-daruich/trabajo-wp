import React from 'react'

const OlvidarContrasena = () => {
    const meOlvideLaContrasena = async (email) => {
        try {
          const response = await fetch('https://trabajo-wp-back-end.vercel.app/olvidarContrasena', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                })
            });
       
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message || 'Algo salió mal'} `);
            }
       
            const data = await response.json();
            console.log('Usuario logeado:', data);
        } catch (error) {
            console.error('Error en el fetch:', error);
            alert('Hubo un problema con el logeo. Intenta nuevamente.');
        }
       };
    const mandarOlvideContrasena = (e) => {
        e.preventDefault()
        const registroHTML = e.target
        const valoresDelFormulario = new FormData(registroHTML)
        meOlvideLaContrasena(valoresDelFormulario.get('email'))
      }
    
  return (
    <>
    <form onSubmit={mandarOlvideContrasena} >
    <div>
      <h1 className='mensaje3'>Porfavor escriba su mail para mandarle un mail para recuperar su contraseña!</h1>
      <label htmlFor="email"  > </label>
      <input
        id='email'
        name='email'
        type="text"
        placeholder='Introduzca su email'
      />
    </div>
    <button type='submit'>enviar</button>
  </form>
  <div>
    <h1>No estas registrado todavia?</h1>
    <Link to={'/registrarse'} >Registrate!</Link>
  </div>
  <div>
    <h1>Te acordaste tu contraseña?</h1>
    <Link to={'/login'} >Logeate!</Link>
  </div>
  </>
  )
}

export default OlvidarContrasena