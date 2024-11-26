import '../styles/components/ambassadorsGridOne.css';
import {
    image1AmbaGrid,
    image2AmbaGrid,
    image3AmbaGrid,
    image4AmbaGrid,
    image5AmbaGrid,
    image6AmbaGrid,
    image7AmbaGrid,
    image8AmbaGrid,
} from '../assets/imgAmbassadors';

const imageData = [
    { id: 1, background: image1AmbaGrid, alt: 'Ambassador 1' },
    { id: 2, background: image2AmbaGrid, alt: 'Ambassador 2' },
    { id: 3, background: image3AmbaGrid, alt: 'Ambassador 3' },
    { id: 4, background: image4AmbaGrid, alt: 'Ambassador 4' },
    { id: 5, background: image5AmbaGrid, alt: 'Ambassador 5' },
    { id: 6, background: image6AmbaGrid, alt: 'Ambassador 6' },
    { id: 7, background: image7AmbaGrid, alt: 'Ambassador 7' },
    { id: 8, background: image8AmbaGrid, alt: 'Ambassador 8' },
];

const AmbassadorsGrid = () => {
    return (
        <div className="ambassadors-grid">
            {imageData.map((item) => (
                <div
                    key={item.id}
                    className={`grid-item ${item.id === 7 || item.id === 8 ? 'special-item' : ''}`}
                    style={{ backgroundImage: `url(${item.background})` }}
                    aria-label={item.alt}
                ></div>
            ))}
        </div>
    );
};

export default AmbassadorsGrid;
