import{ useEffect, useRef } from 'react';
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
                domain: 'sumv3i-pn.myshopify.com',
                storefrontAccessToken: '25fb168a3fd455b3635baf7189cdaae6',
            });

            if (window.ShopifyBuy && window.ShopifyBuy.UI) {
                window.ShopifyBuy.UI.onReady(client).then((ui) => {
                    if (productComponentRef.current.hasChildNodes()) {
                        productComponentRef.current.innerHTML = '';
                    }
                    ui.createComponent('product', {
                        id: '8119855546564',
                        node: productComponentRef.current,
                        moneyFormat: '%24%7B%7Bamount_with_comma_separator%7D%7D',
                        options: {
                            product: {
                                styles: {
                                    product: {
                                        '@media (min-width: 601px)': {
                                            'max-width': '100%',
                                            'margin-left': '0',
                                            'margin-bottom': '50px'
                                        },
                                        'text-align': 'left'
                                    },
                                    title: {
                                        'font-family': 'Source Sans Pro, sans-serif',
                                        'font-size': '31px',
                                        'color': '#000000'
                                    },
                                    button: {
                                        'font-family': 'Montserrat, sans-serif',
                                        'font-weight': 'bold',
                                        ':hover': {
                                            'background-color': '#000000'
                                        },
                                        'background-color': '#000000',
                                        ':focus': {
                                            'background-color': '#000000'
                                        },
                                        'border-radius': '5px',
                                        'padding-left': '92px',
                                        'padding-right': '92px'
                                    },
                                    price: {
                                        'font-family': 'Source Sans Pro, sans-serif',
                                        'font-weight': 'bold',
                                        'font-size': '16px'
                                    },
                                    compareAt: {
                                        'font-family': 'Source Sans Pro, sans-serif',
                                        'font-weight': 'bold',
                                        'font-size': '13.6px'
                                    },
                                    unitPrice: {
                                        'font-family': 'Source Sans Pro, sans-serif',
                                        'font-weight': 'bold',
                                        'font-size': '13.6px'
                                    },
                                    description: {
                                        'font-family': 'Roboto, sans-serif',
                                        'font-weight': 'bold',
                                        'font-size': '15px'
                                    }
                                },
                                layout: 'horizontal',
                                contents: {
                                    img: false,
                                    imgWithCarousel: true,
                                    description: true
                                },
                                width: '100%',
                                text: {
                                    button: 'Add to cart'
                                },
                                googleFonts: [
                                    'Source Sans Pro',
                                    'Roboto',
                                    'Montserrat'
                                ]
                            },
                            productSet: {
                                styles: {
                                    products: {
                                        '@media (min-width: 601px)': {
                                            'margin-left': '-20px'
                                        }
                                    }
                                }
                            },
                            modalProduct: {
                                contents: {
                                    img: false,
                                    imgWithCarousel: true,
                                    button: false,
                                    buttonWithQuantity: true
                                },
                                styles: {
                                    product: {
                                        '@media (min-width: 601px)': {
                                            'max-width': '100%',
                                            'margin-left': '0px',
                                            'margin-bottom': '0px'
                                        }
                                    },
                                    button: {
                                        'font-family': 'Montserrat, sans-serif',
                                        'font-weight': 'bold',
                                        ':hover': {
                                            'background-color': '#000000'
                                        },
                                        'background-color': '#000000',
                                        ':focus': {
                                            'background-color': '#000000'
                                        },
                                        'border-radius': '5px',
                                        'padding-left': '92px',
                                        'padding-right': '92px'
                                    },
                                    title: {
                                        'font-family': 'Helvetica Neue, sans-serif',
                                        'font-weight': 'bold',
                                        'font-size': '26px',
                                        'color': '#4c4c4c'
                                    },
                                    price: {
                                        'font-family': 'Helvetica Neue, sans-serif',
                                        'font-weight': 'normal',
                                        'font-size': '18px',
                                        'color': '#4c4c4c'
                                    },
                                    compareAt: {
                                        'font-family': 'Helvetica Neue, sans-serif',
                                        'font-weight': 'normal',
                                        'font-size': '15.3px',
                                        'color': '#4c4c4c'
                                    },
                                    unitPrice: {
                                        'font-family': 'Helvetica Neue, sans-serif',
                                        'font-weight': 'normal',
                                        'font-size': '15.3px',
                                        'color': '#4c4c4c'
                                    },
                                    description: {
                                        'font-family': 'Helvetica Neue, sans-serif',
                                        'font-weight': 'normal',
                                        'font-size': '14px',
                                        'color': '#4c4c4c'
                                    }
                                },
                                googleFonts: [
                                    'Montserrat'
                                ],
                                text: {
                                    button: 'Add to cart'
                                }
                            },
                            cart: {
                                styles: {
                                    button: {
                                        'font-family': 'Montserrat, sans-serif',
                                        'font-weight': 'bold',
                                        ':hover': {
                                            'background-color': '#000000'
                                        },
                                        'background-color': '#000000',
                                        ':focus': {
                                            'background-color': '#000000'
                                        },
                                        'border-radius': '5px'
                                    },
                                    title: {
                                        'color': '#000000'
                                    },
                                    header: {
                                        'color': '#000000'
                                    },
                                    lineItems: {
                                        'color': '#000000'
                                    },
                                    subtotalText: {
                                        'color': '#000000'
                                    },
                                    subtotal: {
                                        'color': '#000000'
                                    },
                                    notice: {
                                        'color': '#000000'
                                    },
                                    currency: {
                                        'color': '#000000'
                                    },
                                    close: {
                                        'color': '#000000',
                                        ':hover': {
                                            'color': '#000000'
                                        }
                                    },
                                    empty: {
                                        'color': '#000000'
                                    },
                                    noteDescription: {
                                        'color': '#000000'
                                    },
                                    discountText: {
                                        'color': '#000000'
                                    },
                                    discountIcon: {
                                        'fill': '#000000'
                                    },
                                    discountAmount: {
                                        'color': '#000000'
                                    }
                                },
                                text: {
                                    total: 'Subtotal',
                                    button: 'Checkout'
                                },
                                googleFonts: [
                                    'Montserrat'
                                ]
                            },
                            toggle: {
                                styles: {
                                    toggle: {
                                        'font-family': 'Montserrat, sans-serif',
                                        'font-weight': 'bold',
                                        'background-color': '#000000',
                                        ':hover': {
                                            'background-color': '#000000'
                                        },
                                        ':focus': {
                                            'background-color': '#000000'
                                        }
                                    }
                                },
                                googleFonts: [
                                    'Montserrat'
                                ]
                            },
                            lineItem: {
                                styles: {
                                    variantTitle: {
                                        'color': '#000000'
                                    },
                                    title: {
                                        'color': '#000000'
                                    },
                                    price: {
                                        'color': '#000000'
                                    },
                                    fullPrice: {
                                        'color': '#000000'
                                    },
                                    discount: {
                                        'color': '#000000'
                                    },
                                    discountIcon: {
                                        'fill': '#000000'
                                    },
                                    quantity: {
                                        'color': '#000000'
                                    },
                                    quantityIncrement: {
                                        'color': '#000000',
                                        'border-color': '#000000'
                                    },
                                    quantityDecrement: {
                                        'color': '#000000',
                                        'border-color': '#000000'
                                    },
                                    quantityInput: {
                                        'color': '#000000',
                                        'border-color': '#000000'
                                    }
                                }
                            }
                        }
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

    return <div className="shopify-buy-button-container" ref={productComponentRef} id="product-component-1732771509579" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', background: '#fff', borderRadius: '10px' }}></div>;
};

export default ShopifyBuyButton;
