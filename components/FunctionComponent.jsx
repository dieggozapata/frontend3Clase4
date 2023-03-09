import { useState } from "react"

const FunctionComponent = () => {
    //const [name, setName] = useState('Diego')
    const [contador, setContador] = useState(1)
    const [estudiante, setEstudiante] = useState({
        name : 'Diego',
        country : 'Colombia'
    })
    const changeName = () => {
        setEstudiante({...estudiante, name: 'Leo'})
    }
    return(
        <div>
            <h1>Componente de Función</h1>
            <h1>{estudiante.name}</h1>
            <button onClick={changeName}>Cambiar Nombre</button>
            <h1>Ejemplo Contador</h1>
            <button onClick={() => setContador( contador + 1)}>+</button>
            <h1>{contador}</h1>
            <button onClick={() => setContador( contador - 1)}>-</button>

        </div>
    )
}

export default FunctionComponent