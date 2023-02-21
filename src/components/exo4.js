import React, {Component} from "react";

class ListePersonnes extends Component {
    state = {
        liste: [{nom: "toton", mail: "estjaja@gmail.com"}, {nom:"pepe", mail:"lalala@gmail.com.com"}],
        
        newListe: {nom:"", mail:""}
    }

    ChangeNewListe = (e) => {
            e.preventDefault();
            const liste = this.state.newListe;
            
            liste[e.target.id] = e.target.value;
            liste[e.target.id] = e.target.value;
            
            const newListe = [...liste];

            this.setState({newListe: newListe});
    }

    ChangeListe = (e) => {
        e.preventDefault();
        const liste = this.state.liste;
        const newListe = [...liste, this.state.newListe];
        this.setState({liste: newListe, newListe: {nom:"", mail:""}});
        }

    render() {
        const liste = this.state.liste;
        return (
            <div>
            <form onSubmit={this.ChangeListe}>
                <input placeholder="Name" id="nom" type="text" onChange={this.ChangeNewListe} />
                <input placeholder="Mail" id="mail" type="text" onChange={this.ChangeNewListe} />
                <button type="submit">Ajouter</button>
            </form>
            <ul>
                {   
                    liste.map((item, index) => {
                        return (<li key={index}>Nom: {item.nom} Mail: {item.mail} </li>);
                    })
                }
            </ul>
            </div>
        )
    }
}

export default ListePersonnes;