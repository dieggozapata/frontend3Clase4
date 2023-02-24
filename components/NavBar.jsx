import React from 'react'
const titulos = ['Home','Catalogo','About US','Contacto']
const NavBar = () => {
  return (
    <div style={{display: 'flex', justifyContent:'space-around'}}>
        <ul>
            {titulos.map( x => <p>{x}</p>)}
        </ul>
    </div>
  )
}

export default NavBar