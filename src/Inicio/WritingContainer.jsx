import { useEffect, useState } from 'react';
import './WritingContainer.css'

export function WritingContainer() {
    const [text, setText] = useState("");
    const fullText = "M ariano Villa";

    useEffect(() => {
        let index = 0;

        function typeWriter() {
        if (index < fullText.length) {
            setText((prev) => prev + fullText.charAt(index));
            index++;
            setTimeout(typeWriter, 300); // Controla la velocidad de escritura
        }
        }

        const delay = setTimeout(typeWriter, 500); // Inicia el efecto tras 500ms
        return () => clearTimeout(delay); // Limpia el timeout al desmontar el componente
    }, [fullText]);

    return (
        <section className="section">
        <div className="writing-container">
            <span>{text}</span>
        </div>
        </section>
    );
}