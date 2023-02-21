import React, { useState } from "react";


function Fruits() {
    const [tab, setTab] = useState(["ananas", "bananas", "tomates", "oranges"]);
    const [newTab, setNewTab] = useState([]);

    const addNewFruit = (e) => {
        // e.preventDefault();
        const newFruit = e.target.value;
        setNewTab([newFruit]);
    }

    const submitFruit = (e) => {
        e.preventDefault();
        if (newTab.length > 0) {
            setTab([...tab, newTab]);
            setNewTab([]);
        }
    }

    return (
        <div>
            <h1>Qu’est-ce que j’ai dans mon panier</h1>
            <ul>
                {
                    tab.map((fruit, index) => <li key={index}> {fruit} </li>)
                }
            </ul>
            <form onSubmit={submitFruit} >
            <input type="text" value={newTab} onChange={addNewFruit} />
            <button type="submit">Ajouter Fruit</button>
            </form>
        </div>
    )
}

export default Fruits;