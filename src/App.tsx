import { useState } from "react";
import ArtPostCard, { type ArtPost } from "./components/ArtPostCard";
import EditorAsistente from "./components/EditorAsistente";
import { GoogleGenerativeAI } from "@google/generative-ai";


function App() {
  const [postActual, setPostActual] = useState<ArtPost>({
    titulo: "Mi primera publicación",
    subtitulo: "Explorando el arte digital",
    cuerpo: "Este es el contenido de mi primera publicación sobre arte digital.",
  });

  const handleCrearPost = async(ideaSemilla: string) => {
     console.log("Enviada a la IA:", ideaSemilla);

     try{
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Eres una experta en arte digital. Escribe una crítica corta y profesional sobre: ${ideaSemilla}. Devuelve el resultado con este formato: Título: [título] Cuerpo: [contenido]`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const textoIA = response.text();
     

     setPostActual({
        titulo: `Crítica "${ideaSemilla}"`,
        subtitulo: "Análisis generado por la IA",
        cuerpo: textoIA

        });

        } catch (error) {
            console.error("Error al generar el post:", error);
    }
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

        
    );

}



export default App;
