import { useState } from 'react';
import '../styles/components/navBar.css';
import logo from '../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const navbarClass = location.pathname === '/home' ? 'navbar home-page' : 'navbar';

    return (
        <header>
            <div className='cnt-navbarFlex'>
                <div
                    className={`overlay ${isOpen ? 'show' : ''}`}
                    onClick={() => setIsOpen(false)}
                ></div>
                <div className={navbarClass}>
                    <div className="nav_logo">
                        <Link to="/home">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className={`nav_items ${isOpen ? "open" : ""}`}>
                        {/* Botón de cerrar solo visible en tamaños pequeños */}
                        {isOpen && (
                            <button
                                className="close-btn"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                        )}
                        <div className='cnt-Border'>
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
                                <li className={location.pathname === '/ambassadors' ? 'active' : ''}>
                                    <Link to="/ambassadors" onClick={handleLinkClick}>AMBASSADORS</Link>
                                </li>
                                <li className={location.pathname === '/distributors' ? 'active' : ''}>
                                    <Link to="/distributors" onClick={handleLinkClick}>DISTRIBUTORS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
