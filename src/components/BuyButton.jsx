import { useEffect, useRef } from 'react';
import Client from 'shopify-buy';

const ShopifyBuyButton = () => {
    const productComponentRef = useRef(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        if (initializedRef.current) return;
        initializedRef.current = true;

        const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        const scriptId = 'shopify-buy-button-script';

        const loadScript = () => {
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.async = true;
                script.src = scriptURL;
                document.body.appendChild(script);
                script.onload = () => ShopifyBuyInit();
            } else {
                ShopifyBuyInit();
            }
        };

        const ShopifyBuyInit = () => {
            const client = Client.buildClient({
                domain: 'dftbwf-16.myshopify.com', // Nuevo dominio
                storefrontAccessToken: '00688922017476acf1a9cb6fc763d4ec', // Nuevo token
            });

            if (window.ShopifyBuy && window.ShopifyBuy.UI) {
                window.ShopifyBuy.UI.onReady(client).then((ui) => {
                    if (productComponentRef.current.hasChildNodes()) {
                        productComponentRef.current.innerHTML = '';
                    }
                    ui.createComponent('product', {
                        id: '8831350243567', // Nuevo ID de producto
                        node: productComponentRef.current,
                        moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
                        options: {
                            product: {
                                styles: {
                                    product: {
                                        '@media (min-width: 601px)': {
                                            'max-width': '100%',
                                            'margin-left': '0',
                                            'margin-bottom': '50px',
                                        },
                                        'text-align': 'left',
                                    },
                                    title: {
                                        'font-size': '26px',
                                        color: '#000000',
                                    },
                                    button: {
                                        ':hover': {
                                            'background-color': '#000000',
                                        },
                                        'background-color': '#000000',
                                        ':focus': {
                                            'background-color': '#000000',
                                        },
                                        'border-radius': '4px',
                                    },
                                    price: {
                                        'font-size': '18px',
                                        color: '#000000',
                                    },
                                    compareAt: {
                                        'font-size': '15.3px',
                                        color: '#000000',
                                    },
                                    unitPrice: {
                                        'font-size': '15.3px',
                                        color: '#000000',
                                    },
                                },
                                layout: 'horizontal',
                                contents: {
                                    img: false,
                                    imgWithCarousel: true,
                                    description: true,
                                },
                                width: '100%',
                                text: {
                                    button: 'Add to cart',
                                },
                            },
                            cart: {
                                styles: {
                                    button: {
                                        ':hover': {
                                            'background-color': '#000000',
                                        },
                                        'background-color': '#000000',
                                        ':focus': {
                                            'background-color': '#000000',
                                        },
                                        'border-radius': '4px',
                                    },
                                },
                                text: {
                                    total: 'Subtotal',
                                    button: 'Checkout',
                                },
                            },
                            toggle: {
                                styles: {
                                    toggle: {
                                        'background-color': '#000000',
                                        ':hover': {
                                            'background-color': '#000000',
                                        },
                                        ':focus': {
                                            'background-color': '#000000',
                                        },
                                    },
                                },
                            },
                        },
                    });
                });
            }
        };

        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }
    }, []);

    return (
        <div
            className="shopify-buy-button-container"
            ref={productComponentRef}
            id="product-component-1733165895053"
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px',
                background: '#fff',
                borderRadius: '10px',
            }}
        ></div>
    );
};

export default ShopifyBuyButton;

