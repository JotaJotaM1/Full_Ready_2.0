import { useState } from 'react';
import '../styles/components/navBar.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="navbar">
            <div className="nav_logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`nav_items ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/discover">DISCOVER</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/find-full-ready">FIND FULL READY</Link></li>
                    <li><Link to="/explore-more">EXPLORE MORE</Link></li>
                    <li><Link to="/ambassadors">AMBASSADORS</Link></li>
                </ul>
            </div>
            <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default NavBar;



