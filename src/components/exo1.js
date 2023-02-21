import React, {Component} from "react";

class Exo1 extends Component {

    state = {
        name: "",
    };
    
    render() {
        return(
            <>
            <input type="text" value={this.state.name} onChange={e => this.setState({name:e.target.value})}/>
            <h1>Hello {this.state.name}</h1>
            </>
        )
    }
}

export default Exo1;