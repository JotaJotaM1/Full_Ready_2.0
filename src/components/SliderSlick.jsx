import sliderPorcenta from '../assets/sliderPorcenta.png';
// import sliderTime from '../assets/sliderTime.png';
// import sliderHuman from '../assets/sliderHuman.png';
import '../styles/components/slider.css';



const data = [
    {
        image: sliderPorcenta,
        title: 'BEST SELLER',
        description: 'Nullam auctor dignissim pellentesque tristique quis.',
        button: 'SHOP NOW',
    },
    // {
    //     image: sliderTime,
    //     title: 'Limited Time Discounts',
    //     description: 'Nullam auctor dignissim pellentesque tristique quis.',
    //     button: 'SHOP NOW',
    // },
    // {
    //     image: sliderHuman,
    //     title: 'Customer Favorite',
    //     description: 'Nullam auctor dignissim pellentesque tristique quis.',
    //     button: 'SHOP NOW',
    // },

]

const SliderSlick = () => {

    return (

        <div className='cnt-fatherCardSlider'>
            <div className='cnt-CardSlider'>
                {data.map((item, index) => (
                    <div className='cnt-Pcard' key={index}>
                        <div>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <button>{item.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SliderSlick;