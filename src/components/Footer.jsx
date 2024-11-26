import { Link } from 'react-router-dom';
import "../styles/components/footer.css";
import logoFooter from '../assets/logoFooter.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer_nav">
                <ul className='cnt-ul-Footer'>
                    <li className='li-Footer'><Link to="/home">HOME</Link></li>
                    <li className='li-Footer'><Link to="/discover">DISCOVER</Link></li>
                    <li className='li-Footer'><Link to="/shop">SHOP</Link></li>
                    <li className='li-Footer'><Link to="/find-full-ready">FIND FULL READY</Link></li>
                    <li className='li-Footer'><Link to="/explore-more">EXPLORE MORE</Link></li>
                    <li className='li-Footer'><Link to="/ambassadors">AMBASSADORS</Link></li>
                </ul>
            </div>
            <div className='cnt-mediaQuery1024'>
                <div className='cnt-SocialIcons'>
                    <div className='cnt-imgLogoFooter'>
                        <img src={logoFooter} alt='logoFooter'></img>
                        <p className='textFooter'>Amet pellentesque tellus velit risus. Semper habitant nulla ullamcorper.</p>
                    </div>
                    <div className='cnt-UlSocialFooter'>
                        <ul>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-twitter-x"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-linkedin"></i></li>
                            <li><i className="bi bi-tiktok"></i></li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                </div>
                <div className='cnt-legalTerm'>
                    <div className='cnt-Copyright'>
                        <p className='textCopy'>Copyright @ 2024 Full Ready. All right reserved.</p>
                    </div>
                    <div className='cnt-TerminConditions'>
                        <p className='textTerm'>Terms & Conditions </p>
                        <p className='textTerm'>.</p>
                        <p className='textTerm'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;