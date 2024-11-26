import './Acerca_De_Mi.css'
import guitarrasImage from '../assets/img/guitarra.jpg';
import programacionImage from '../assets/img/freepik__expand__46552.png';
import gatosImage from '../assets/img/bongo-cat.gif';

export function AcercaDeMi() {
return (
    <section className="Acerca_De_Mi" id="Acerca_De_Mi">  
    <div className="caja-padre">
        <div className="caja">
            <img src={guitarrasImage} alt="Guitarras" />
            <h3>Guitarras</h3>
            <p>
            `` La guitarra no es solo un instrumento, es una voz que expresa lo que las palabras no pueden. Cada acorde cuenta una historia, y cada melodía conecta el alma con la música. Aquí, celebramos su magia.``
            </p>
            <a href="#" className="btn">
            VER MÁS
            </a>
        </div>
        <div className="caja">
            <img src={programacionImage} alt="Programación" />
            <h3>Programación</h3>
            <p>
            `` Programar es crear mundos desde cero, un proceso fascinante en el que la imaginación se convierte en código. Al igual que un arquitecto diseña estructuras que luego cobran vida, el programador construye sistemas que cambian la forma en que vivimos.``
            </p>
            <a href="#" className="btn">
            VER MÁS
            </a>
        </div>
        <div className="caja">
            <img src={gatosImage} alt="Gatos" />
            <h3>Gatos</h3>
            <p>
            `` Los gatos son criaturas enigmáticas y fascinantes que combinan independencia con ternura de una manera única. Su gracia y curiosidad los convierten en excelentes amigos, siempre dispuestos a descubrir el mundo con nosotros.``
            </p>
            <a href="#" className="btn">
            VER MÁS
            </a>
        </div>
    </div>
    </section>
);
}