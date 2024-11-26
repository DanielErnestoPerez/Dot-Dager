import './Inicio.css'
import dagerImage from '../assets/img/dager.jpg';
import computadoraImage from '../assets/img/computadora.png';
import lumberjackImage from '../assets/img/lumber-jack.webp'
import { WritingContainer } from './WritingContainer.jsx';

export function Inicio() {
    return(
            <section className="Inicio">
                <img src={dagerImage} alt="" />
                <div className="contenido_inicio">
                    <h1>Dot Dager`s landing page</h1>
                    <p>
                    Hola, soy Dager. Full-Stack con unos 8 años de experiencia y
                    contador serial de chistes de mierda.
                    <br />
                    <br />
                    Desarrollador full-stack/líder con pasión por el código SÓLIDO y
                    los productos sorprendentes.
                    </p>
                    <WritingContainer />
                    <div className="inicio-imagen">
                    <img src={computadoraImage} alt="" />
                    </div>
                    <div className="iconos">
                    <a
                        href="https://www.youtube.com/@DotDager"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/dager.32/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.dg.lumberjackbattle"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={lumberjackImage} alt="" />
                    </a>
                    <a
                        href="https://linktr.ee/DotDager"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="currentColor"
                            d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                        />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/MarianoVilla"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    </div>
                </div>
            </section>
    )
}