import { useState } from 'react';
import '../styles/components/navBar.css';
import logo from '../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Hook para obtener la ubicación actual

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
                        <li className={location.pathname === '/home' ? 'active' : ''}>
                            <Link to="/home" onClick={handleLinkClick}>HOME</Link>
                        </li>
                        <li className={location.pathname === '/discover' ? 'active' : ''}>
                            <Link to="/discover" onClick={handleLinkClick}>DISCOVER</Link>
                        </li>
                        <li className={location.pathname === '/shop' ? 'active' : ''}>
                            <Link to="/shop" onClick={handleLinkClick}>SHOP</Link>
                        </li>
                        <li className={location.pathname === '/find-full-ready' ? 'active' : ''}>
                            <Link to="/find-full-ready" onClick={handleLinkClick}>FIND FULL READY</Link>
                        </li>
                        <li className={location.pathname === '/explore-more' ? 'active' : ''}>
                            <Link to="/explore-more" onClick={handleLinkClick}>EXPLORE MORE</Link>
                        </li>
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
