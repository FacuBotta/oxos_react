import React, { useState, useEffect, useContext } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { dashContext } from './exo_dashBoard_main.js';

function Dashborad() {

    const data = useContext(dashContext)
    const subjects = data[0]
    const colors = data[1].colors

    const [color, setColor] = useState(colors.textColor1);
    const [dashColors, setDashColors] = useState(colors.dashColor1);
    const [btnColor, setBtnColor] = useState(colors.btnColor1);
    const [btnText, setBtnText] = useState("Dark Mode");


    useEffect(() => {
        document.querySelector(".App-header").style.backgroundColor = color;
    }, [color]);
    

    const changeColors = (e) => {
        e.preventDefault();
        if (color == colors.textColor1) {
            setColor(colors.textColor2);
            setDashColors(colors.dashColor2);
            setBtnColor(colors.btnColor2);
            setBtnText("Light Mode");
        } else if (color == colors.textColor2) {
            setColor(colors.textColor1);
            setDashColors(colors.dashColor1);
            setBtnColor(colors.btnColor1);
            setBtnText("Dark Mode");
        }
    };

    return (
        <div style={{ width: "50%", height: 500 }}>
            <ResponsiveContainer>
                <RadarChart cx="30%" cy="40%" outerRadius="60%" data={subjects}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey={"subject"} />
                    <PolarRadiusAxis />
                    <Radar dataKey={"level"} stroke={color} fill={dashColors} fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
            <button style={{ backgroundColor: btnColor, color: color}} onClick={changeColors} type="submit">{btnText}</button>

        </div>

    )

}

export default Dashborad;