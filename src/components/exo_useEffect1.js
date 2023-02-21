import React, { useEffect, useState } from "react";

function ChangeBgColor() {
    
    const [color, setColor] = useState("white", "#292727");

    useEffect(() => {
        document.querySelector(".App-header").style.backgroundColor = color;
    }, [color]);


    const changeColor = (e) => {
        e.preventDefault();
        if (color == "white") {
            setColor("#292727");
        } else if (color == "#292727") {
            setColor("white")
        }
    };

    return (
        <div>
                <button onClick={changeColor} type="submit">Dark Mode</button>
        </div>
    )
};

export default ChangeBgColor;