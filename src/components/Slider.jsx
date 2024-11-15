import '../styles/components/slider.css';
import sliderPorcenta from '../assets/sliderPorcenta.png';
import sliderHuman from '../assets/sliderHuman.png';
import sliderTime from '../assets/sliderTime.png';

const data = [
    {
        img: sliderPorcenta,
        title: 'BEST SELLER',
        description: 'Nullam auctor dignissim pellentesque tristique quis.',
        button: 'SHOP NOW'
    },
    {
        img: sliderTime,
        title: 'LIMITED TIME DISCOUNTS',
        description: 'Nullam auctor dignissim pellentesque tristique quis.',
        button: 'SHOP NOW'
    },
    {
        img: sliderHuman,
        title: 'CUSTOMER FAVORITE',
        description: 'Nullam auctor dignissim pellentesque tristique quis.',
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
                        <button className="btn-shop-nowCardSlider">{item.button}</button>
                    </div>
                ))}
            </div>  

        </div>
    );
};

export default Slider;
