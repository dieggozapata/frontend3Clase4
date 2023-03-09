import {Component} from 'react'
export default class ClassComponent extends Component{
    constructor(){
        super()
        this.state = {
            name:'Diego',
            country: 'Colombia'
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName(){
        this.setState({name:'Leo'})
    }
    render(){
        return(
            <div>
                <h1>Componente de Clase</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Cambiar Nombre</button>
            </div>
        )
    }
}