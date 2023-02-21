import { Component } from "react";

class Personne extends Component {
    state = {
        nom: "",
        age: "",
    }

    render () {
        return (
            <>
            <input type="text" placeholder="Nom" value={this.state.nom} onChange={e => this.setState({nom: e.target.value})}/>
            <input type="text" placeholder="Age" value={this.state.age} onChange={e => this.setState({age: e.target.value})}/>
            <h1>Nom: {this.state.nom}</h1>
            <h1>Age: {this.state.age}</h1>
            </>
        )
    }
}

export default Personne;