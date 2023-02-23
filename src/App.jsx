import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ClassComponent from '../components/ClassComponent'
import FunctionComponent from '../components/FunctionComponent'
import Card from '../components/Card'
import HellowComponent from '../components/HellowComponent'

function App() {
  const [count, setCount] = useState(0)
  const nombres = ["Juan","Sofia","Belén","Fer","Diego"]
  return (
    <>            
      <HellowComponent nombre = {nombres[0]}/>
      <HellowComponent nombre = {nombres[1]}/>
      <HellowComponent nombre = {nombres[2]}/>
      <HellowComponent nombre = {nombres[3]}/>      
    </>
  )
}

export default App
