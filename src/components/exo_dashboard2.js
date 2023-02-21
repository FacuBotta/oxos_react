import React, { useState, useEffect, useContext } from 'react'
import { dashContext } from './exo_dashBoard_main.js';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function DashBoard2() {

    const data = useContext(dashContext);

    const [subjects] = data;
    const colors = data[1].colors;

    return (
        <div style={{ width: "50%", height: 400 }}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={subjects}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 1" />
                    <XAxis dataKey="subject" />
                    <YAxis dataKey="level"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="time" fill={colors.dashColor1} fillOpacity={0.6}/>
                    <Bar dataKey="level" fill={colors.dashColor2} fillOpacity={0.6} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )

}

export default DashBoard2;