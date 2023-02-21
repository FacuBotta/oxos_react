import React, {useState} from "react";
import User_nom_mail from "./exo_props_b.js";


function ListeUser() {
    const [liste, setListe] = useState ([
        {nom:"pepe", mail:"pepe@gmail.com", tel:"06456248"},
        {nom:"pipo", mail:"pipo@gmail.com", tel:"04456624"},
        {nom:"papo", mail:"papo@gmail.com", tel:"06451248"},
        {nom:"pupo", mail:"pupo@gmail.com", tel:"07452238"}
    ]);

    return (
        <div>
            <User_nom_mail liste={liste}/>
        </div>
    )
}

export default ListeUser;