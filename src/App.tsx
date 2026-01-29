import { useState } from "react";
import ArtPostCard, { type ArtPost } from "./components/ArtPostCard";
import EditorAsistente from "./components/EditorAsistente";

function App() {
  const [postActual, setPostActual] = useState<ArtPost>({
    titulo: "Mi primera publicación",
    subtitulo: "Explorando el arte digital",
    cuerpo: "Este es el contenido de mi primera publicación sobre arte digital.",
  });

  const handleCrearPost = (ideaSemilla: string) => {
     console.log("Enviada a la IA:", ideaSemilla);

     setPostActual({
        titulo: `Crítica "${ideaSemilla}"`,
        subtitulo: "Análisis generado por la IA",
        cuerpo: `Has enviado la idea: "${ideaSemilla}" y ha sido generada por la IA.`,

        });
    };

    return (

        /*VOLCAR LOS ESTILOS A UN FICHERO CSS*/
        
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontFamily: 'sans-serif' }}>Panel de Control - Blog de Arte</h1>
        </header>

        {/* FASE 2: El Editor (Zona de trabajo) */}
        <EditorAsistente onGenerar={handleCrearPost} />

        <hr style={{ margin: '50px 0', border: '0', borderTop: '1px solid #ccc' }} />

        {/* FASE 1: La Visualización (Resultado) */}
        <ArtPostCard post={postActual} />
        </div>
    )
}



export default App;