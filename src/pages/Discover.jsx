import '../styles/pages/Discorver.css';
import frasco3 from '../assets/frasco3.png'
import FAQAccordion from '../components/FAQacordeon';


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
        </main>
    );
};

export default Discovers;
