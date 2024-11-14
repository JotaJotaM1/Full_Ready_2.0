import "../styles/pages/Home.css";
import frasco3 from '../assets/frasco3.png';
import image7 from '../assets/image7.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import group2 from '../assets/group2.png';
import SliderSlick from '../components/SliderSlick'
// import Spline from '@splinetool/react-spline';

const Home = () => {
    return (
        <main>
            <section className="sectionOne">
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
            </section>
            <section>
                <div className="cnt-Two">
                    <div className="cnt-h2">
                        <h2>THE NATURAL, EFFECTIVE, AND CERTIFIED BENEFITS OF FULL READY</h2>
                        <p>Amet pellentesque tellus velit risus. Semper habitant nulla ullamcorper accumsan convallis habitasse eget. Aliquet tincidunt donec sed nibh.</p>
                    </div>
                    <div className="cnt-fatherImgCard">
                        <div className="cntImgCard">
                            <img className="image3" src={image3} alt="image3"></img>
                            <p className="p3">LOREM IPSUM DOLOR ET</p>
                        </div>
                        <div className="cntImgCard">
                            <img className="image4" src={image4} alt="image4"></img>
                            <p className="p4">LOREM IPSUM DOLOR ET</p>

                        </div>
                        <div className="cntImgCard">
                            <img className="image5" src={image5} alt="image5"></img>
                            <p className="p5">100% LOREM</p>
                        </div>
                        <div className="cntImgCard">
                            <img className="image6" src={image6} alt="image6"></img>
                            <p className="p6">LOREM IPSUM DOLOR ET</p>
                        </div>
                    </div>
                    <div className="cntBtnOne">
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="cnt-Three">
                    <div className="cntGroup2">
                        <img src={group2}></img>
                    </div>
                    <div className="cnt-h2Exclu">
                        <h2>EXCLUSIVE PROMOTIONS AND DISCOUNTS</h2>
                        <p>Amet pellentesque tellus velit risus. Semper habitant nulla ullamcorper.</p>
                    </div>
                </div>
                <div>
                    <SliderSlick />
                </div>
            </section>
        </main>
    );
};

export default Home;
