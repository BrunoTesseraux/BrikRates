import { Link } from 'react-router-dom';
import './Sidebar.scss';
import DarkMode from '../DarkMode/DarkMode';


const Sidebar = () => {
    return (     
    <div className="sidebar">
        <div className="greeting">
        <h1>Hallo</h1>
        <h2>Peter</h2>
        </div>
        <DarkMode/>
        <div className="links">
        <Link to="/dashboard">
            <img src="./dashboard.png" alt="" />
            Dashboard
        </Link>
        <Link to="/tables">
            <img src="./table.png" alt="" />
            Tables
        </Link>
        <Link to="/charts">
            <img src="./line-chart.png" alt="" />
            Charts
        </Link>
        </div>
        <h2>Support</h2>
        <div className="links">
        <Link to="/faq">
            <img src="./question.png" alt="" />
            Faq
        </Link>
        <Link to="/appointment">
            <img src="./calendar.png" alt="" />
            Make an appointment
        </Link>
        <Link to="/settings">
            <img src="./settings.png" alt="" />
            Settings
        </Link>
        </div>
        <div className="profile">
        <img src="./briktech2.webp" alt="Logo" />
        <p>founded 2024</p>
        </div>
        <button>
        <img src="./logout.svg" alt="" />
        Logout
        </button>
    </div> );
}

export default Sidebar;