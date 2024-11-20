import '../styles/pages/Discorver.css';
import frasco3 from '../assets/frasco3.png'
import FAQAccordion from '../components/FAQacordeon';
import {
    step1,
    step2,
    step3,
    step4,
} from '../assets/imgHome';


const Discovers = () => {
    return (
        <main>
            <section>
                <div className='cnt-fatherSectionOne'>
                    <h1>DISCOVER FULL READY</h1>
                    <div className='cnt-bannerImgOne'>
                        <img className='imgBannderOne' src={frasco3}></img>
                    </div>
                    <FAQAccordion />
                </div>
            </section>
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
                        <h2 className='titleTwoDisco'>DO YOU HAVE QUESTIONS?</h2>
                    </div>
                    <div>
                        <button className="btn-Discover">CONTAC US<i className="arrowDiscover bi-arrow-bar-right"></i></button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Discovers;
