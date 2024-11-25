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
            answer: "It’s more than a drink—it’s your go-to solution for living life to the fullest. Packed with 100% natural ingredients, Full Ready helps you enjoy your nights and still wake up ready to conquer your day. It’s not just a product; it’s the balance you’ve been looking for.",
        },
        {
            icon: image2Acordeon,
            question: "What’s Inside Full Ready?",
            answer:
                "A powerhouse blend of aloe vera, artichoke, vitamin C, and superfruits like papaya, banana, and apple. No caffeine, no taurine, no artificial junk—just clean, natural ingredients that work together to keep you feeling great.",
        },
        {
            icon: image3Acordeon,
            question: "How Do I Take Full Ready?",
            answer: "Step 1: Drink it before you go out—it prepares your liver and digestive system to handle the night. Step 2: Keep it close during the fun—it hydrates, energizes, and keeps you balanced. With Full Ready, you don’t just survive the night—you own it.",
        },
        {
            icon: image4Acordeon,
            question: "Why Should I Choose Full Ready?",
            answer: "Because you deserve a product that works as hard as you play. Full Ready is scientifically designed to help your body recover while you enjoy yourself. No more sacrificing your mornings for your nights.",
        },
        {
            icon: image5Acordeon,
            question: "Are There Any Side Effects?",
            answer: "Full Ready is safe and made with natural ingredients, but if you have allergies or sensitivities, check the label or consult your doctor. It’s all about keeping you in balance, without the unnecessary risks.",
        },
        {
            icon: image6Acordeon,
            question: "Is Full Ready Right for Me?",
            answer:
                "Whether you’re an adventurer, a social butterfly, or someone who values balance, Full Ready is for you. It’s perfect for anyone who wants to enjoy life without feeling the aftereffects.",
        },
    ];

    return (
        <div className="accordion-container">
            {faqData.map((item, index) => {
                const formattedAnswer =
                    item.question === "How Do I Take Full Ready?"
                        ? item.answer
                            .replace("Step 1:", "<strong>Step 1:</strong>")
                            .replace("Step 2:", "<strong>Step 2:</strong>")
                        : item.answer;

                return (
                    <div key={index} className="accordion-item">
                        {/* Pregunta */}
                        <div
                            className={`accordion-header ${activeIndex === index ? "active" : ""}`}
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
                                className={`accordion-toggle bi ${activeIndex === index ? "bi-chevron-up active-icon" : "bi-chevron-down inactive-icon"}`}
                            ></i>
                        </div>

                        {/* Respuesta */}
                        <div
                            className="accordion-content"
                            style={{
                                maxHeight: activeIndex === index ? "300px" : "0",
                            }}
                        >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: formattedAnswer,
                                }}
                            ></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CustomAccordion;