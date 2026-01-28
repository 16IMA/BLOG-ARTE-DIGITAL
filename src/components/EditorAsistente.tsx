import React, { useState } from "react";
import styles from "./EditorAsistente.module.css";

interface EditorAsistenteProps {
    onGenerar: (prompt: string) => void;
}

const EditorAsistente: React.FC<EditorAsistenteProps> = ({ onGenerar }) => {
    const [entrada, setEntrada] = useState('');

    return (

    <div className={styles.panelControl}>
        <h2 className={styles.subtituloAdmin}>Asistente de Escritura</h2>
        <p className={styles.instrucciones}>
            Ingresa un tema o idea, y nuestro asistente generará un borrador inicial para tu publicación.
        </p>

        <textarea
            className={styles.areaTexto}
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            placeholder="Escribe tu idea aquí..."
        ></textarea>

        <button
            className={styles.botonGenerar}
            onClick={() => onGenerar(entrada)}
            disabled={!entrada.trim()}
        >Generar con IA</button>
        
    </div>

    );

};

export default EditorAsistente;
    