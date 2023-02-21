import React, { useState, useEffect, Component } from "react";

function CalcCalories() {

    const [result, setResult] = useState(0);

    const calculer = (e) => {
        e.preventDefault();
        const genre = e.target.children[0].value
        let poid = e.target.children[2].value;
        let taille = e.target.children[4].value
        let age = e.target.children[6].value
        let tempAct = e.target.children[8].value
        const sedentaire = e.target.children[10].checked
        const physique = e.target.children[13].checked

        poid = parseInt(poid);
        taille = parseInt(taille);
        age = parseInt(age);
        tempAct = parseInt(tempAct);

/* console.log(genre);
console.log(typeof (poid));
console.log(taille);
console.log(age);
console.log(tempAct);
console.log(sedentaire);
console.log(physique); */

        let coef;

        if (tempAct >= 3) {
            coef = 2;
        } else if (tempAct >= 1.5 && tempAct < 3 && physique == true && sedentaire == false) {
            coef = 1.9;
        } else if (tempAct >= 1.5 && tempAct < 3 && sedentaire == true && physique == false) {
            coef = 1.7;
        } else if (tempAct >= 1 && tempAct < 1.5) {
            coef = 1.6;
        } else if (tempAct >= 0.5 && tempAct < 1) {
            coef = 1.4;
        } else if (tempAct < 0.5) {
            coef = 1.2;
        } else if (tempAct < 0.5) {
            coef = 1;
        }

// console.log("coef", coef);
        
        let result;
        if (genre == "homme") {
            result = Math.floor((66.5+(13.75*poid)+(5*taille)-(6.77*age)) * coef);
        }

        if (genre == "famme") {
            result = Math.floor((655.1 + (9.56*poid)+(1.85*taille)-(4.67*age)) * coef);
        }

// console.log("result", result);

        return setResult(result);
    }


    console.log(result)
    return (
        <div>
            <h3>Vos besoins caloriques!</h3>
            <form onSubmit={calculer}>
                <input type="text" placeholder="votre genre" /><br></br>
                <input type="text" placeholder="votre poid" /><br></br>
                <input type="text" placeholder="votre taille" /><br></br>
                <input type="text" placeholder="votre age" /><br></br>
                <input type="text" placeholder="temp de activite" /><br></br>
                <input id="sedentaire" type="checkbox" value="true" />
                <label id="sedentaire">Travail Sédentaire</label><br></br>
                <input id="physique" type="checkbox" />
                <label id="physique">Travail Physique</label><br></br>
                <button type="submit">Calculer!</button>
            </form>
            <h4>Résultat!</h4>
            <h1>{result} Calories</h1>
        </div>
    )
}

export default CalcCalories;