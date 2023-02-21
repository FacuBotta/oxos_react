import React, {Component} from "react";

class Compteur extends Component {
    state = {
        compt: 0,
    };

    plus = () => {
        this.setState(prevNum => ({compt: prevNum.compt +1,
        }));
    };
    moins = () => {
        this.setState(prevNum => ({compt: prevNum.compt -1,
        }));
    };


    render() {
        return(
            <>
            <button onClick={this.state.compt <= 5? this.plus : (alert("trop grand"), this.state.compt = 5)}> + </button>
            <button onClick={this.state.compt >= 0? this.moins : (alert("trop petit"), this.state.compt = 0)}> - </button>
            <h1> {this.state.compt} </h1>
            </>
        )
    }
}

export default Compteur;