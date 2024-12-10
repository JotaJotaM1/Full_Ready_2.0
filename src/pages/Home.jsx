import "../styles/pages/Home.css";
import Slider from '../components/Slider';
import SliderComments from '../components/SliderComments';
import { Link } from 'react-router-dom';
import {
    image3,
    image4,
    image5,
    image6,
    group2,
    step1,
    step2,
    step3,
    step4,
    ctaTwoOne,
    ctaTwoTwo,
    ctaTwoThree,
    frasco3,
    image7,
} from '../assets/imgHome';

const Home = () => {
    return (
        <main>
            <section className="sectionOne">
                <div className='cnt-mq1024'>
                    <div className="cnt-One">
                        <p className="pOne">WELCOME TO</p>
                        <h1 className="titleOne">FULL READY</h1>
                        <p className="pTwo">YOUR PARTY PARTNER</p>
                        <h2 className="pThree">Discover how Full Ready transforms your night and morning.</h2>
                        <div className="cntBtnOne btnH1">
                            <Link to="/shop" className="shop-link">
                                <button>
                                    SHOP NOW<i className="bi bi-arrow-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="cnt-FrasImage">
                        <div className="cnt-Frasco3">
                            <img src={frasco3} alt="frasco3"></img>
                        </div>
                        <div>
                            <img className="image7" src={image7} alt="image7"></img>
                            {/* <img className="bolaHome" src={BolaHome} alt="imge prueba"></img> */}

                        </div>
                    </div>
                </div>
            </section>

            {/* Section OTwo */}

            <section className="cnt-ballHome">
                <div className="cnt-Two">
                    <div className="cnt-h2">
                        <h2>THE NATURAL, EFFECTIVE, AND CERTIFIED BENEFITS OF FULL READY</h2>
                        <p>Discover the powerful benefits of Full Ready, crafted with 100% natural ingredients to keep you energized, balanced, and ready to conquer your day.</p>
                    </div>
                    <div className="cnt-fatherImgCard">
                        <div className="cntImgCard">
                            <img className="image3" src={image3} alt="image3"></img>
                            <p className="p3">LIVER PROTECTION</p>
                        </div>
                        <div className="cntImgCard">
                            <img className="image4" src={image4} alt="image4"></img>
                            <p className="p4">ENERGY BOOSTER</p>

                        </div>
                        <div className="cntImgCard">
                            <img className="image5" src={image5} alt="image5"></img>
                            <p className="p5">100% NATURAL</p>
                        </div>
                        <div className="cntImgCard">
                            <img className="image6" src={image6} alt="image6"></img>
                            <p className="p6">ANTIOXIDANT POWER</p>
                        </div>
                    </div>
                    <div className="cntBtnOne ctnBtn1024">
                        <Link to="/shop" className="btnSectiontwo">
                            <button className="shop-link">
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section Three*/}

            <section>
                <div className="cnt-Three">
                    <div className="cntGroup2">
                        <img src={group2}></img>
                    </div>
                    <div className="cnt-h2Exclu">
                        <h2>EXCLUSIVE PROMOTIONS AND DISCOUNTS</h2>
                        <p>Take advantage of these limited-time offers to get the most out of Full Ready. Don&apos;t miss out!</p>
                    </div>
                </div>
                <Slider />
                <div className="cnt-SliderComments">
                    <div>
                        <h2 className="titleSliderComments">WHAT PEOPLE ARE SAYING ABOUT FULL READY</h2>
                        <p className="textSliderComments">See how Full Ready is helping others enjoy their nights and conquer their mornings with ease.</p>
                    </div>
                    <div>
                        <div className="cnt-SliderBackPurple">
                            <SliderComments />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Four */}

            <section>
                <div className="cnt-stp">
                    <div>
                        <h2 className="titlleStep">FOLLOW THESE SIMPLE STEPS FOR THE BEST RESULTS</h2>
                        <p className="textStep">With Full Ready, you don&apos;t have to choose between a great night and a productive morning. Follow these simple steps to enjoy every moment</p>
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
                    <Link to="/discover" className="anchorBTNstep">
                        <button className="btn-HomeGetDisco">
                            GET FULL READY <i className=" iconRowgetDisco bi bi-arrow-right-short"></i>
                        </button>
                    </Link>
                </div>
            </section>

            {/* Section Five */}

            <section>

                <div className="cnt-callToActionOne">
                    <h3 className="tittleCTAOne">DISCOVER HOW FULL READY FITS YOUR LIFESTYLE</h3>
                    <p className="textCTAOne">From nightlife hacks to wellness tips, explore articles designed just for you. Whatever your vibe, Full Ready has insights to keep you energized and balanced.</p>
                </div>

            </section>

            {/* Section Six */}

            <section className="cnt-mediaquery1440">
                <div className="cnt-callToActionTwo">
                    <div className="cnt-CTAmediaQuery">
                        <div className="cnt-titleCtaTwo">
                            <h3 className="titleCtaTwo">WHAT SETS FULL READY APART</h3>
                            <p className="textCtaTwo">Crafted for those who give it all at night and still want to own the morning. Full Ready is the smarter, natural way to recover.</p>
                        </div>
                        <div className="cnt-imgCtaTwo">
                            <img src={ctaTwoOne}></img>
                            <img src={ctaTwoTwo}></img>
                            <img src={ctaTwoThree}></img>
                        </div>
                        <Link to="/shop" className="learMcta">
                            SHOP NOW<i className="bi bi-arrow-right-short"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
