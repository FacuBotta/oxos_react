import React, { Component } from "react";


class Orologe extends Component {

    state = {
        time: ""
    }

    TimeClok() {
        var today = new Date();
        let timer = setInterval(() => {
            this.setState({time: today.toLocaleTimeString()});
            clearInterval(timer);
        }, 1000)
    }

    render() {
        this.TimeClok();
        const time = this.state;
        return (
            <div>
                <h1>{time.time}</h1>
            </div>
        )
    }
}

export default Orologe;