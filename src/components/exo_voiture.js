import React from "react";

function Voiture(props) {
    const tab = props.liste
    return (tab.map((item, index) => <h1 key={index}>Je suis une: {item.name} de la marque {item.marque}</h1>))
}

export default Voiture;