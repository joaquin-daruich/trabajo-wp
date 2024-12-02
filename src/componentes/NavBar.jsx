
import React from 'react'

const NavBar = (props) => {

const isLogged = props.userData.isLogged
const isAdmin = props.userData.isAdmin
const lang = props.userData.lang

const españolIsAdmin = isAdmin ?
<button>
    Crear Producto
</button>
:
'no sos admin'

const españolIsLogged = isLogged ?
'estas logeado lol'
:
<button>
    Logearse
</button> 

const inglesIsAdmin = isAdmin ?
<button>
    Create Product
</button>
:
'you are not admin'

const inglesIsLogged = isLogged ?
'you are fokin loged'
:
<button>
    Login
</button>

const idiomaespañol = 'es'
const idiomaingles = 'en'

return (


  lang === idiomaespañol ?
  [españolIsAdmin , españolIsLogged]
  :
  lang === idiomaingles ?
  [inglesIsAdmin , inglesIsLogged]
  :
  <h2>Idioma no disponible</h2>
  
  
  
  
    )
  }

export default NavBar