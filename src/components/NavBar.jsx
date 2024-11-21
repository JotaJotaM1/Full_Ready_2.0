import { useState } from 'react';
import '../styles/components/navBar.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="navbar">
                <div className="nav_logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className={`nav_items ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link to="/home" onClick={handleLinkClick}>HOME</Link></li>
                        <li><Link to="/discover" onClick={handleLinkClick}>DISCOVER</Link></li>
                        <li><Link to="/shop" onClick={handleLinkClick}>SHOP</Link></li>
                        <li><Link to="/find-full-ready" onClick={handleLinkClick}>FIND FULL READY</Link></li>
                        <li><Link to="/explore-more" onClick={handleLinkClick}>EXPLORE MORE</Link></li>
                        <li><Link to="/ambassadors" onClick={handleLinkClick}>AMBASSADORS</Link></li>
                    </ul>
                </div>
                <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default NavBar;




