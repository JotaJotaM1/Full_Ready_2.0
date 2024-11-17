// Importamos React y el hook useState para manejar el estado
import { useState } from 'react';
import '../styles/components/sliderComments.css';
import Camilo from '../assets/camilo.png'
import Stars from '../assets/Stars.png'

// Creamos un arreglo con los comentarios que queremos mostrar en el carrusel
const comentarios = [
    {
        id: 1,
        imagen: Camilo,
        descripcion:'A Front-end Developer ensures websites look great and work seamlessly, focusing on user experience and using coding languages like HTML and CSS.',
        Estrella: Stars,
        nombre: "James Mosquera",
        profesionEdad: "34, Developer Front-end"
    },
    {
        id: 1,
        imagen: Camilo,
        descripcion: 'A Back-end Developer builds and maintains the server-side logic and databases that power dynamic websites and ensure smooth data processing.',
        Estrella: Stars,
        nombre: "Juan Brand",
        profesionEdad: "30, Developer Back-end"
    },
    {
        id: 1,
        imagen: Camilo,
        descripcion: 'A UI/UX Designer crafts user-friendly interfaces and improves experiences by making websites intuitive, appealing, and easy to navigate',
        Estrella: Stars,
        nombre: "Camilo Brando",
        profesionEdad: "34, UI/UX"
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
                <div>
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