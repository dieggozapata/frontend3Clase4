import React from 'react'
import Card from './Card'
import { homeStyle } from './HomeStyle'
import NavBar from './NavBar'

const pizzas = [
    {id:1, tipo:'Especial',precio:'123',img:'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/640x640sq70/photo.webp'},
    {id:2, tipo:'Mozzarella',precio:'123',img:'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/640x640sq70/photo.webp'}
]
const Home = () => {
  return (
    <div style={homeStyle}>
        <NavBar />  
        <h1>Bienvenidos a la pizzeria de C3 Don Jediondo</h1>  
        {pizzas.map( pizza => <Card pizza = {pizza} />)}            
    </div>
  )
}

export default Home