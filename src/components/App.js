import '../stiles/App.css';
import { Route, Routes } from 'react-router-dom';
import DashBoardMain from './exo_dashBoard_main.js';
import Garage from "./exo_garage.js"
import CalcCalories from './exo_colories.js';
import Hello from './hello.js';
import Links from './links.js';
import ListePersonnes from './exo4';
import Orologe from './exo5';
import ListeTaches from './exo_listeTaches';

function App() {
return (
    <div className="App">
      <header className="App-header">
        <Links/>
        <Routes>
          <Route path="/" element={<Hello/>}/>
          <Route path="/Garage" element={<Garage/>}/>
          <Route path="/Calories" element={<CalcCalories/>}/>
          <Route path="/DashBoards" element={<DashBoardMain/>}/>
          <Route path="/ListePersonnes" element={<ListePersonnes/>}/>
          <Route path="/Orologe" element={<Orologe/>}/>
          <Route path="/ListeTaches" element={<ListeTaches/>}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
