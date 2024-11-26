import '../styles/components/ambassadorsGridTwo.css';
import {
    image9AmbaGrid,
    image10AmbaGrid,
    image11AmbaGrid,
    image12AmbaGrid,
    image13AmbaGrid,
    image14AmbaGrid,
    image15AmbaGrid,
    image16AmbaGrid,
} from '../assets/imgAmbassadorsTwo';

const imageData = [
    { id: 1, background: image9AmbaGrid, alt: 'Ambassador 1' },
    { id: 2, background: image10AmbaGrid, alt: 'Ambassador 2' },
    { id: 3, background: image11AmbaGrid, alt: 'Ambassador 3' },
    { id: 4, background: image12AmbaGrid, alt: 'Ambassador 4' },
    { id: 5, background: image13AmbaGrid, alt: 'Ambassador 5' },
    { id: 6, background: image14AmbaGrid, alt: 'Ambassador 6' },
    { id: 7, background: image15AmbaGrid, alt: 'Ambassador 7' },
    { id: 8, background: image16AmbaGrid, alt: 'Ambassador 8' },
];

const AmbassadorsGridTwo = () => {
    return (
        <div className="ambassadors-gridTwo">
            {imageData.map((item) => (
                <div
                    key={item.id}
                    className="grid-itemTwo"
                    style={{ backgroundImage: `url(${item.background})` }}
                    aria-label={item.alt}
                ></div>
            ))}
        </div>
    );
};

export default AmbassadorsGridTwo;