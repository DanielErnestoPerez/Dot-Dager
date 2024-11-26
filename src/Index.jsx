import { Inicio } from "./Inicio/Inicio"
import { AcercaDeMi } from "./Acerca_De_Mi/Acerca_De_Mi"
import { Filosofico } from "./Filosofico/Filosofico"
import './Index.css'

export function Index() {
    return(
            <div className="contenedor">
                <header>
                    <a href="#" className="logo">
                        <span contentEditable="true">Dot</span>
                        <span contentEditable="true">DAGER</span>
                    </a>
                    <input type="checkbox" name="" id="menu-bar" hidden="true"/>
                    <label htmlFor="menu-bar" className="fa fa-bars"></label>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <a href="#Inicio">Inicio</a>
                                <a href="#Acerca_De_Mi">Acerca De Mi</a>
                                <a href="#Mi_Contenido">Mi Contenido</a>
                                <a href="#Extra">Extra</a>
                                <a href="#Redes_Sociales">Redes sociales</a>
                            </li>
                        </ul>
                    </nav>          
                </header>
                
                
                <main>
                    <div className="banner">
                        <Inicio/>
                        <AcercaDeMi/>
                        <Filosofico/>
                    </div>
                </main>
                
                
                <footer>
                    <div className="footer-container" id="Redes_Sociales">
                        <div className="footer-container-inside">
                            <h3>Buscame en:</h3>
                            <a href="https://www.youtube.com/@DotDager" target="_blank" rel="noopener"><i className="fa-brands fa-youtube"></i> YouTube</a>
                            <a href="https://www.instagram.com/dager.32/" target="_blank" rel="noopener"><i className="fa-brands fa-instagram"></i> Instagram</a>
                            <a href="https://linktr.ee/DotDager" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"/></svg> Linktree</a>
                            <a href="https://github.com/MarianoVilla" target="_blank" rel="noopener"><i className="fa-brands fa-github"></i> GitHub</a>
                        </div>

                        <div className="footer-container-inside">
                            <h3>Mas Informacion</h3>
                            <a href="#"><i className="fa-solid fa-phone"></i> 123-456-789</a>
                            <a href="#"><i className="fa-solid fa-location-dot"></i> Argentina</a>
                            <a href="#"><i className="fa-solid fa-envelope"></i> portafoliosdesarrollador@gmail.com</a>
                        </div>
                </div>
                <p>© 2024 Dot Dager. Todos los derechos reservados.</p>
                </footer>
            </div>
    )
}