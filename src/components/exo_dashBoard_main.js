import '../stiles/App.css';
import { createContext, useState } from "react";
import Dashboard from './exo_dashboard';
import DashBoard2 from './exo_dashboard2';

export const dashContext = createContext("");

function DashBoardMain() {

    const [subjects, setSubjects] = useState([
        { subject: 'Java Script', level: 5, time: 2 },
        { subject: 'CSS', level: 7, time: 3 },
        { subject: 'HTML', level: 6, time: 4 },
    ]);

    const data = [
        subjects,

        {
            colors: {
                dashColor1: "#d36b16db",
                dashColor2: "#10b30a",
                btnColor1: "#4d4d4d",
                btnColor2: "#bababa",
                textColor1: "white",
                textColor2: "#373737"
            }
        }
    ];



    const AddSubject = (e) => {
        e.preventDefault();
        let subject = e.target.children[0].value;
        let level = e.target.children[1].value;
        let time = e.target.children[2].value;
        if (subject != "" && level != "" && time != "") {
            let newDate = { subject: subject, level: level, time: time };
            setSubjects([...subjects, newDate]);
            e.target.children[0].value = "";
            e.target.children[1].value = "";
            e.target.children[2].value = "";
        }
    }

    return (
        <div>
            <header className="App-header-dashPage">
                <form className='form_dataDash' onSubmit={AddSubject}>
                    <input type="text" placeholder='Skill' />
                    <input type="text" placeholder='Level (0 - 10)' />
                    <input type="text" placeholder='How Time? (months)' />
                    <button type='submit'>Add Skill</button>
                </form>
                <div className='containerDash'>
                    <dashContext.Provider value={data}>
                        <Dashboard />
                        <DashBoard2 />
                    </dashContext.Provider>
                </div>
            </header>
        </div>
    );
}

export default DashBoardMain;