import { useState } from 'react';
import '../styles/components/navBar.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import frasco3 from '../assets/frasco3.png';
import image7 from '../assets/image7.png';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
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
            <section className="sectionOne">
                <div className='cnt-mq1024'>
                    <div className="cnt-One">
                        <p className="pOne">WELCOME TO</p>
                        <h1 className="titleOne">FULL READY</h1>
                        <p className="pTwo">YOUR PARTY PARTNER</p>
                        <p className="pThree">Discover how Full Ready transforms your night and morning.</p>
                        <div className="cntBtnOne">
                            <button>SHOP NOW<i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="cnt-FrasImage">
                        <div className="cnt-Frasco3">
                            <img src={frasco3} alt="frasco3"></img>
                        </div>
                        <div>
                            <img className="image7" src={image7} alt="image7"></img>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default NavBar;



