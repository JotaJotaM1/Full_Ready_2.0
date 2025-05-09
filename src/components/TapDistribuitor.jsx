import { useState } from 'react';
import '../styles/pages/TapDistributors.css';
import PropTypes from 'prop-types';
import FlagVene from '../assets/FlagVenezuela.png';
import FlagUsa from '../assets/FlagUsa.png';

const TapDistributors = () => {
    const [activeTab, setActiveTab] = useState('venezuela');

    // Textos traducidos
    const translations = {
        venezuela: {
            title: "CONVIÉRTETE EN DISTRIBUIDOR",
            description: "Únete a nuestra red de distribuidores autorizados en Venezuela y accede a beneficios exclusivos, capacitación especializada y márgenes de ganancia competitivos.",
            contact: "ESCRÍBENOS",
            call: "LLÁMANOS",
            benefits: "BENEFICIOS EN VENEZUELA",
            benefitItems: [
                "Márgenes competitivos",
                "Material promocional",
                "Capacitación continua",
                "Logística nacional"
            ]
        },
        usa: {
            title: "BECOME A DISTRIBUTOR",
            description: "Join our network of authorized distributors in the USA and access exclusive benefits, specialized training, and competitive profit margins.",
            contact: "CONTACT US",
            call: "CALL US",
            benefits: "BENEFITS IN USA",
            benefitItems: [
                "Competitive margins",
                "Promotional materials",
                "Continuous training",
                "English/Spanish support"
            ]
        }
    };

    return (
        <section className="distributors-main">
            <div className="distributors-header">
                <h1 className='titleDistri'>{translations[activeTab].title}</h1>
            </div>

            {/* Navegación por pestañas personalizada */}
            <div className="custom-tabs-container">
                <button
                    className={`custom-tab ${activeTab === 'venezuela' ? 'active' : ''}`}
                    onClick={() => setActiveTab('venezuela')}
                >
                    VENEZUELA<img className='flag-icon' src={FlagVene} alt="Bandera Venezuela" />
                </button>
                <button
                    className={`custom-tab ${activeTab === 'usa' ? 'active' : ''}`}
                    onClick={() => setActiveTab('usa')}
                >
                    USA<img className='flag-icon' src={FlagUsa} alt="Bandera USA" />
                </button>
            </div>

            {/* Contenido de las pestañas */}
            <div className="tab-content">
                {activeTab === 'venezuela' && (
                    <DistributorCard
                        country="Venezuela"
                        email="distribuidores.ve@tudominio.com"
                        phone="+58 412-1234567"
                        translation={translations.venezuela}
                    />
                )}
                {activeTab === 'usa' && (
                    <DistributorCard
                        country="USA"
                        email="distributors.usa@tudomain.com"
                        phone="+1 305-1234567"
                        translation={translations.usa}
                    />
                )}
            </div>
        </section>
    );
};

// Componente de tarjeta de distribuidor
const DistributorCard = ({ email, phone, translation }) => {
    return (
        <div className='cnt-FatherDistri'>
            <div className='cnt-cardDistri'>
                <div className="distributor-card">
                    <div className="card-icon">
                        <i className="cardIconDistri bi bi-send-fill"></i>
                    </div>
                    <p className="card-description">
                        {translation.description}
                    </p>
                    <div className="contact-options">
                        <a href={`mailto:${email}`} className="contact-button email-button">
                            <p><i className="iconEmailDistri bi bi-envelope-at-fill"></i>{translation.contact}</p>
                        </a>
                        <a href={`tel:${phone}`} className="contact-button phone-button">
                            <i className="iconPhoneDistri bi bi-telephone-fill"></i>
                            <p>{translation.call}</p>
                        </a>
                    </div>
                    <div className="benefits-list">
                        <h3>{translation.benefits}</h3>
                        <ul>
                            {translation.benefitItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

DistributorCard.propTypes = {
    country: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    translation: PropTypes.shape({
        description: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
        call: PropTypes.string.isRequired,
        benefits: PropTypes.string.isRequired,
        benefitItems: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default TapDistributors;