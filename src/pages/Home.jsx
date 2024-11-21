import "../styles/pages/Home.css";
import Slider from '../components/Slider';
import SliderComments from '../components/SliderComments'
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

            {/* Section OTwo */}

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
                    <div className="cntBtnOne ctnBtn1024">
                        <button className="btnSectiontwo">SHOP NOW</button>
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
                        <p>Amet pellentesque tellus velit risus. Semper habitant nulla ullamcorper.</p>
                    </div>
                </div>
                <Slider />
                <div className="cnt-SliderComments">
                    <div>
                        <h2 className="titleSliderComments">TESTIMONIALS</h2>
                        <p className="textSliderComments">Amet pellentesque tellus velit risus. Semper habitant nulla ullamcorper</p>
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
                        <p className="textStep">Amet pellentesque tellus velit risus. Semper habitant nulla ullamcorper</p>
                    </div>
                    <div className="cnt-FatherImgStep">
                        <div className="cnt-imgStepp">
                            <img src={step1}></img>
                            <h3 className="titileImgStep">Step 1</h3>
                            <p className="textImgStep">Nullam auctor dignissim pelntesque tristique quis.</p>
                            <a className="learMoreStep">LEAR MORE<i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cnt-imgStepp">
                            <img src={step2}></img>
                            <h3 className="titileImgStep">Step 2</h3>
                            <p className="textImgStep">Nullam auctor dignissim pelntesque tristique quis.</p>
                            <a className="learMoreStep">LEAR MORE<i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cnt-imgStepp">
                            <img src={step3}></img>
                            <h3 className="titileImgStep">Step 3</h3>
                            <p className="textImgStep">Nullam auctor dignissim pelntesque tristique quis.</p>
                            <a className="learMoreStep">LEAR MORE<i className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="cnt-imgStepp">
                            <img src={step4}></img>
                            <h3 className="titileImgStep">Step 4</h3>
                            <p className="textImgStep">Nullam auctor dignissim pelntesque tristique quis.</p>
                            <a className="learMoreStep">LEAR MORE<i className="bi bi-arrow-right-short"></i></a>
                        </div>
                    </div>
                    <div>
                        <button className="btn-step">BUY NOW</button>
                    </div>
                </div>
            </section>

            {/* Section Five */}

            <section>

                <div className="cnt-callToActionOne">
                    <h3 className="tittleCTAOne">DISCOVER HOW FULL READY HELPS EACH PERSON</h3>
                    <p className="textCTAOne">Amet pellentesque tellus velit risus. Semper habitant nulla ullamcorper</p>
                </div>

            </section>

            {/* Section Six */}

            <section className="cnt-mediaquery1440">
                <div className="cnt-callToActionTwo">
                    <div className="cnt-CTAmediaQuery">
                        <div className="cnt-titleCtaTwo">
                            <h3 className="titleCtaTwo">FEATURE HERE</h3>
                            <p className="textCtaTwo">Dignissim neque pulvinar vestibulum eu iaculis.Et sed enim et hendrerit nunc augue eleifend arcu lectus. Cursus cum sit feugiat at.</p>
                        </div>
                        <div className="cnt-imgCtaTwo">
                            <img src={ctaTwoOne}></img>
                            <img src={ctaTwoTwo}></img>
                            <img src={ctaTwoThree}></img>
                        </div>
                        <a className="learMcta">LEAR MORE<i className="bi bi-arrow-right-short"></i></a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
