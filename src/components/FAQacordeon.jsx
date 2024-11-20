import { useState } from 'react';
import '../styles/components/acordeon.css';
import {
    image1Acordeon,
    image2Acordeon,
    image3Acordeon,
    image4Acordeon,
    image5Acordeon,
    image6Acordeon,
} from '../assets/imgDiscover';

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            icon: image1Acordeon,
            question: "What is Full Ready?",
            answer: "Full Ready is a unique product designed to boost your day.",
        },
        {
            icon: image2Acordeon,
            question: "What does Full Ready contain??",
            answer:
                "Full Ready is a water-based drink that contains ingredients such as vitamin B12, mangosteen, broccoli, artichoke, folic acid, and glycine. It is antioxidant and does not contain caffeine, taurine, or calories, which are typically found in energy drinks.",
        },
        {
            icon: image3Acordeon,
            question: "What benefits does taking Full Ready offer me??",
            answer: "It provides antioxidants and supports energy production naturally.",
        },
        {
            icon: image4Acordeon,
            question: "¿Lorem ipsum dolor et amet?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            icon: image5Acordeon,
            question: "¿Borosto niemes undel tikunu?",
            answer: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
        },
        {
            icon: image6Acordeon,
            question: "¿Auctor leo morbi faucibus pellentesque duis mollis nullam?",
            answer:
                "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        },
    ];

    return (
        <div className="accordion-container">
            {faqData.map((item, index) => (
                <div key={index} className="accordion-item">
                    {/* Pregunta */}
                    <div
                        className={`accordion-header ${activeIndex === index ? "active" : ""
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="accordion-header-content">
                            {/* Imagen como ícono */}
                            <img
                                src={item.icon}
                                alt="Icon"
                                className="accordion-icon-image"
                            />
                            <span className="accordion-question">{item.question}</span>
                        </div>
                        <i
                            className={`accordion-toggle bi ${activeIndex === index ? "bi-chevron-up active-icon" : "bi-chevron-down inactive-icon"
                                }`}
                        ></i>
                    </div>

                    {/* Respuesta */}
                    <div
                        className="accordion-content"
                        style={{
                            maxHeight: activeIndex === index ? "300px" : "0",
                        }}
                    >
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomAccordion;
