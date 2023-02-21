/* import React from "react";

function Hello() {
    return <h1>HELLO WORD</h1>
}

export default Hello; */

import React, {Component} from "react";

class Hello extends Component {
    render() {
        return <h1>HELLO WORD {this.props.name}</h1>
    }
}

export default Hello;