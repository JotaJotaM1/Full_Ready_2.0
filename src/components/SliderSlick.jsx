import '../styles/components/slider.css';
import sliderPorcenta from '../assets/sliderPorcenta.png';
import sliderHuman from '../assets/sliderHuman.png';
import sliderTime from '../assets/sliderTime.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="Cnt-card">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.img} alt="imgporce" className="imgIcon" />
                        <h2 className="titleCard">{item.title}</h2>
                        <p className="descriptionCard">{item.description}</p>
                        <button className="btn-shop-nowCard">{item.button}</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slider;
