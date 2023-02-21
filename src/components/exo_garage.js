import React, {useState} from "react";
import Voiture from "./exo_voiture";

function Garage () {
    const [voitures, setVoitures] = useState([
        {name: "toto", marque: "Fiat"},
        {name:"pipo", marque:"Ford"},
        {name:"lolo", marque:"Ferrari"}
    ]);

    const addCar = (e) => {
        e.preventDefault();
        let model = e.target.children[0].value;
        let marque = e.target.children[1].value;
        let tempListe = {name: model, marque: marque};

        if (model != "" && marque != "") {
            setVoitures([...voitures, tempListe]);
        }

        e.target.children[0].value = "";
        e.target.children[1].value = "";
    }

    return (
        <div>
            <Voiture liste={voitures}/>
            <form onSubmit={addCar}>
                <input id="name" type="text" placeholder="nom" />
                <input id="marque" type="text" placeholder="marque" />
                <button type="submit">Ajouter Voiture</button>
            </form>
        </div>
    )
}

export default Garage;