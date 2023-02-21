import { Link } from 'react-router-dom';

function Links() {
    return (
        <nav className='nav-links'>
            <ul>
                <Link to="/"><button> Accueil </button></Link>
                <Link to="/Garage"><button> Exo Garage </button></Link>
                <Link to="/Calories"><button> Exo Calories </button></Link>
                <Link to="/DashBoards"><button> Exo Dash Boards </button></Link>
                <Link to="/ListePersonnes"><button> Exo Liste Persones </button></Link>
                <Link to="/Orologe"><button> Exo Orologe </button></Link>
                <Link to="/ListeTaches"><button> Exo Liste Taches </button></Link>
            </ul>
        </nav>
    )
}

export default Links;