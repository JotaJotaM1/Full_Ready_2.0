import '../styles/components/SliderComponent.css';
import sliderPorcenta from '../assets/sliderPorcenta.png';
// import sliderHuman from '../assets/sliderHuman.png';
// import sliderTime from '../assets/sliderTime.png';

const data = [
    {
        img: sliderPorcenta,
        title: 'BEST SELLER',
        description: 'Nullam auctor dignissim pellentesque tristique quis.',
        button: 'SHOP NOW'
    },
    // {
    //     img: sliderTime,
    //     title: 'LIMITED TIME DISCOUNTS',
    //     description: 'Nullam auctor dignissim pellentesque tristique quis.',
    //     button: 'SHOP NOW'
    // },
    // {
    //     img: sliderHuman,
    //     title: 'CUSTOMER FAVORITE',
    //     description: 'Nullam auctor dignissim pellentesque tristique quis.',
    //     button: 'SHOP NOW'
    // },
];

const SliderCard = () => {
    return (
        <div className="Cnt-card">
            {data.map((item, index) => (
                <div key={index} className="card">
                    <img src={item.img} alt='imgporce' className="imgIcon" />
                    <h2 className="titleCard">{item.title}</h2>
                    <p className="descriptionCard">{item.description}</p>
                    <button className="btn-shop-nowCard">{item.button}</button>
                </div>
            ))}
        </div>
    );
};

export default SliderCard;
