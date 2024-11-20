import { useState } from 'react';
import '../styles/pages/Shop.css';
import BoxShop from '../assets/boxShopOne.png';
import StarShop from '../assets/starShop.png';

const Shop = () => {
    // Estado para manejar la cantidad de cajas y el precio por caja
    const [quantity, setQuantity] = useState(1);
    const pricePerBox = 16; // Cambia este valor por el precio real de tu caja

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
            <div className="product-card">
                <img src={BoxShop} alt="Product Box" className="productBox-image" />
                <div className='cnt-mediaqueryShop'>
                    <h1 className='titleH1Shop'>FULL READY NEXT PARTY</h1>
                    <img src={StarShop}></img>
                    <h3 className="price">{`$${totalPrice}.00 USD`}</h3>
                    <p className="product-description">
                        Ridiculus lorem egestas nisl turpis penatibus semper diam tellus. Quisque faucibus nec vitae tempor lacinia sed etiam tempus.<br /><br />
                        Gravida sed sociis arcu dui. Purus in tristique risus quis amet dolor. Eu vitae amet enim hac mi. Augue eget aliquam et elementum.
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
