import React, { useState } from "react";

function ListeTaches() {

    const [tabAfaire, setTabAfaire] = useState(["tacheAfaire"])
    const [tabCours, setTabCours] = useState(["tacheEnCours"])
    const [tabFaites, setTabFaites] = useState(["tachesFaites"])

    const [taches, setTaches] = useState([tabAfaire, tabCours, tabFaites]);


    // taches.map(item => console.log(item))

    console.log(taches);
    console.log('====================================');
    // console.log(taches[1]);


    const moveTacheRight = (e) => {
        e.preventDefault();
        // setTabCours(...tabCours, tabAfaire)
        console.log(taches);

    }

    /* const addTache = (e) => {
        e.preventDefault();
        let input = e.target.children[0].value;
        const newTache = {aFaire: input};
        setTaches(...taches, newTache);
        console.log(taches)
    } */

    return (
        <div>
            <h1>Liste de Taches</h1>
            <h1>Cette page n'est pas encore terminée</h1>
            <div className="containerListeTaches">
                <div className="aFraire">
                    <h4>Á Fiare</h4>
                    {
                        tabAfaire.map((tache, index) => {
                            return (
                                <div className="tache">
                                    <button>..</button>
                                    <h6 key={index}>{tache}</h6>
                                    <button onClick={moveTacheRight}>...</button>
                                </div>
                            )
                        })
                    }
                    {/* <form onSubmit={addTache}>
                        <input type="text" />
                        <button type="submit">Add</button>
                    </form> */}
                </div>

                <div className="enCours">
                    <h4>En cours</h4>
                    { 
                        tabCours.map((tache, index) => {
                            return (
                                <div className="tache">
                                    <button>..</button>
                                    <h6 key={index}>{tache}</h6>
                                    <button>...</button>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="faites">
                    <h4>Faites</h4>
                    { 
                        tabFaites.map((tache, index) => {
                            return (
                                <div className="tache">
                                    <button>..</button>
                                    <h6 key={index}>{tache}</h6>
                                    <button>...</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )

}

export default ListeTaches;