import '../styles/components/slider.css';
import sliderPorcenta from '../assets/sliderPorcenta.png';
import sliderHuman from '../assets/sliderHuman.png';
import sliderTime from '../assets/sliderTime.png';
import { Link } from 'react-router-dom';

const data = [
    {
        img: sliderPorcenta,
        title: 'BEST SELLER',
        description: 'Join our communitys favorite pick. Energize and recover with Full Ready!',
        button: 'SHOP NOW'
    },
    {
        img: sliderTime,
        title: 'LIMITED TIME DISCOUNTS',
        description: 'Save big on our exclusive deals. Stock up before they re gone!',
        button: 'SHOP NOW'
    },
    {
        img: sliderHuman,
        title: 'CUSTOMER FAVORITE',
        description: 'Chosen by users for ultimate recovery and energy. Try it today!',
        button: 'SHOP NOW'
    },
];

const Slider = () => {


    return (
        <div className="cnt-principal">
            <div className='carousel'>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.img} alt="imgCardSlider" className="imgIcon" />
                        <h2 className="titleCardSlider">{item.title}</h2>
                        <p className="descriptionCardSlider">{item.description}</p>
                        <button className="btn-shop-nowCardSlider">
                            <Link to="/shop" className="shop-link">
                                {item.button}
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
