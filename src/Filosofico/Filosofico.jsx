import filosoficoImage1 from '../assets/img/dager-instagram.png';
import filosoficoImage2 from '../assets/img/dager-instagram2.png';
import gatoImage from '../assets/img/gato.png';
import './Filosofico.css';

export function Filosofico() {
    const frases = [
        {
            imgSrc: filosoficoImage1,
            text: 'La vida es un mundo de constantes cambios y desafíos, pero también de progreso y crecimiento. Nuestro trabajo es comunicar esto a los demás, ayudarlos a entender su propósito y a seguir adelante.',
        },
        {
            imgSrc: filosoficoImage2,
            text: 'La filosofía es un silencioso diálogo del alma consigo misma en torno al ser.',
        },
        {
            imgSrc: gatoImage,
            text: 'El tiempo y los cambios son inevitables; resistirnos solo genera sufrimiento. La sabiduría radica en adaptarnos y encontrar belleza incluso en el caos.',
        },
    ];

    return (
        <section className="filosofico">
            {frases.map((frase, index) => (
                <div className="caja-filosofico" key={index}>
                    <img src={frase.imgSrc} alt={`Imagen filosófica ${index + 1}`} />
                    <p>{frase.text}</p>
                </div>
            ))}
        </section>
    );
}
