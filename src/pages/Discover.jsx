import '../styles/pages/Discorver.css';
import frasco3 from '../assets/frasco3.png'
import FAQAccordion from '../components/FAQacordeon';
import { Link } from "react-router-dom";
import {
    step1,
    step2,
    step3,
    step4,
    BolasGrupo1,
    BolasGrupo2,
} from '../assets/imgHome';


const Discovers = () => {
    return (
        <main>
            <section>
                <div className="parallax-container">
                    <h1 className="magic-text">THE MAGIC<br></br>FORMULA</h1>
                    <div className="parallax-layer">
                        <img className="imgBannderOne" src={frasco3} alt="Full Ready" />
                    </div>
                    <div className="parallax-layer spheres">
                        <img src={BolasGrupo2} className="shepereOne" />
                        <img src={BolasGrupo1} className="shepereTwo" />
                    </div>
                </div>
                <FAQAccordion />
            </section>
            <section>
                <div className="cnt-stp">
                    <div>
                        <h2 className="titlleStep">FOLLOW THESE SIMPLE STEPS FOR THE BEST RESULTS</h2>
                        <p className="textStep">With Full Ready, you don&apos;t have to choose between a great night and a productive morning. Follow these simple steps to enjoy every moment.</p>
                    </div>
                    <div className="cnt-FatherImgStep">
                        <div className="cnt-imgStepp">
                            <img src={step1}></img>
                            <h3 className="titileImgStep">STEP 1</h3>
                            <p className="textImgStep">Take Full Ready before drinking to protect your liver and prep for the night.</p>
                        </div>
                        <div className="cnt-imgStepp">
                            <img src={step2}></img>
                            <h3 className="titileImgStep">STEP 2</h3>
                            <p className="textImgStep">Stay energized and hydrated while you party—Full Ready&apos;s got you.</p>
                        </div>
                        <div className="cnt-imgStepp">
                            <img src={step3}></img>
                            <h3 className="titileImgStep">STEP 3</h3>
                            <p className="textImgStep">Enjoy every moment without worry. Full Ready keeps you going strong.</p>
                        </div>
                        <div className="cnt-imgStepp">
                            <img src={step4}></img>
                            <h3 className="titileImgStep">STEP 4</h3>
                            <p className="textImgStep">Wake up fresh and unstoppable. Full Ready makes mornings easy.</p>
                        </div>
                    </div>
                    <div className='cnt-titleTwoDisco'>
                        <h2 className='titleTwoDisco'>OWN THE NIGHT, RULE THE MORNING</h2>
                    </div>
                    <div>
                        <Link to="/shop" className="btn-Discover">
                            SHOP FULL READY<i className="arrowDiscover bi-arrow-bar-right"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Discovers;
