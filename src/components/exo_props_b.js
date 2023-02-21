import React from "react";
import User_tel from "./exo_props_3.js";


function User_nom_mail(props) {
    const tab = props.liste;
    return (
        <div>
        {tab.map((item, index) => <p key={index}>Nom: {item.nom} Mail: {item.mail}</p>)}
        <User_tel liste={tab}/>
        </div>
    );
}

export default User_nom_mail;