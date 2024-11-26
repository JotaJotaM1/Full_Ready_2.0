import { useState } from 'react';
import '../styles/pages/Shop.css';
import BoxShop from '../assets/boxShopOne.png';
import StarShop from '../assets/starShop.png';

const Shop = () => {
    // Estado para manejar la cantidad de cajas y el precio por caja
    const [quantity, setQuantity] = useState(1);
    const pricePerBox = 7; // Cambia este valor por el precio real de tu caja

    // Función para cambiar la cantidad
    const handleQuantityChange = (operation) => {
        if (operation === 'increase') {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (operation === 'decrease' && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // Precio total calculado
    const totalPrice = quantity * pricePerBox;

    return (
        <section className="shop-container">
            <div className='cntH1Shop'>
                <h1 className='titleH1Shop'>FUEL YOUR NIGHT,<br></br> RULE YOUR MORNING.</h1>
            </div>
            <div className="product-card">
                <img src={BoxShop} alt="Product Box" className="productBox-image" />
                <div className='cnt-mediaqueryShop'>
                    <h2 className='titleH2Shop'>FULL READY SIX PACK</h2>
                    <img src={StarShop}></img>
                    <h3 className="price">{`$${totalPrice}.00 USD`}</h3>
                    <p className="product-description">
                        Say goodbye to sluggish mornings and hello to unstoppable energy. Full Ready Next Party is a 100% natural recovery drink that prepares your body for a night of celebration and ensures you wake up feeling fresh, hydrated, and ready to conquer the day. With no caffeine, no artificial junk, and no compromises, Full Ready is your new party essential.
                    </p>
                    <div className="quantity-controls">
                        <h3 className='quantyShop'>Quantity:</h3>
                        <div className='cnt-quantity'>
                            <button onClick={() => handleQuantityChange('decrease')} className="quantity-btn">-</button>
                            <span className="quantity-display">{quantity}</span>
                            <button onClick={() => handleQuantityChange('increase')} className="quantity-btn">+</button>
                        </div>
                    </div>
                    <button className="order-now-btn">
                        ADD TO CART <i className="rowShopNow bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Shop;
