// Importamos React y el hook useState para manejar el estado
import { useState } from 'react';
import '../styles/components/sliderComments.css';
import Camilo from '../assets/camilo.png';
import Camila from '../assets/Camila.jpg';
import John from '../assets/John.jpg';
import Michael from '../assets/Michael.jpg'
import Stars from '../assets/Stars.png';

// Creamos un arreglo con los comentarios que queremos mostrar en el carrusel
const comentarios = [
    {
        id: 1,
        imagen: Michael,
        descripcion:'Full Ready has completely transformed my mornings. I wake up feeling refreshed and ready to tackle the day!',
        Estrella: Stars,
        nombre: "Michael Murillo",
        profesionEdad: "34, SEO"
    },
    {
        id: 2,
        imagen: Camila,
        descripcion: 'I love how natural it is. No weird chemicals, just pure energy and recovery in a bottle',
        Estrella: Stars,
        nombre: "Camila L",
        profesionEdad: "29, Fitness Enthusiast"
    },
    {
        id: 3,
        imagen: Camilo,
        descripcion: 'The perfect solution for long nights and busy mornings. Full Ready is my new go-to!',
        Estrella: Stars,
        nombre: "Jorge M",
        profesionEdad: "40, Marketing Manager"
    },
    {
        id: 4,
        imagen: John,
        descripcion: 'The perfect solution for long nights and busy mornings. Full Ready is my new go-to!',
        Estrella: Stars,
        nombre: "John M",
        profesionEdad: "40, Marketing Manager"
    }
];

// Componente principal CarruselComentarios
const CarruselComentarios = () => {
    // Estado para controlar el comentario que se está mostrando actualmente
    const [indexActual, setIndexActual] = useState(0);

    // Función para ir al siguiente comentario
    const siguienteComentario = () => {
        setIndexActual((prevIndex) => (prevIndex + 1) % comentarios.length);
    };

    // Función para ir al comentario anterior
    const anteriorComentario = () => {
        setIndexActual((prevIndex) =>
            prevIndex === 0 ? comentarios.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="contenedor">
            {/* Botón para ir al comentario anterior */}
            <button onClick={anteriorComentario} className="btnSliderComments">
                <i className="bi bi-arrow-left"></i>
            </button>

            {/* Sección que muestra el comentario actual */}
            <div className="comentario">
                <div className='cnt-ImgaAvatarCommets'>
                    <img src={comentarios[indexActual].imagen} alt={comentarios[indexActual].nombre} className="imagen" />
                </div>
                <div className='cnt-limitCommets'>
                    <p className="texto">{comentarios[indexActual].descripcion}</p>
                    <img src={comentarios[indexActual].Estrella} alt={comentarios[indexActual].Estrella} className="Estrella" />
                </div>
                <div className='cnt-CommetNameProfe'>
                    <div>
                        <p className="nombre">{comentarios[indexActual].nombre}</p>
                    </div>
                    <div>
                        <p className="profesionEdad">{comentarios[indexActual].profesionEdad}</p>
                    </div>
                </div>
            </div>

            {/* Botón para ir al siguiente comentario */}
            <button onClick={siguienteComentario} className="btnSliderComments">
                <i className="bi bi-arrow-right custom-icon2"></i>
            </button>
        </div>
    );
};

export default CarruselComentarios;