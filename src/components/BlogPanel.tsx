import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import EditorAsistente from "./EditorAsistente";
import ArtPostCard, { type ArtPost } from "./ArtPostCard";

// Componente principal del panel de control del blog, que integra el editor y la visualización del post generado

function BlogPanel() {

// Estado para la idea semilla, el post actual y el estado de carga
    const [ideaSemilla, setIdeaSemilla] = useState('');
    const [cargando, setCargando] = useState(false);

// Estado para el post generado, con un tipo definido para asegurar la estructura de los datos
    const [postActual, setPostActual] = useState<ArtPost>({
    titulo: "",
    subtitulo: "",
    cuerpo: "",
  });

// Recuperar el borrador del localStorage al cargar el componente

    useEffect(() => {
        const borrador = localStorage.getItem('draft_post');
        if (borrador) {
        setPostActual(JSON.parse(borrador));
        }
    }, []);

// Guardar el borrador en el localStorage cada vez que postActual cambie

    useEffect(() => {
        if (postActual.titulo || postActual.cuerpo) {
        localStorage.setItem('draft_post', JSON.stringify(postActual));
        }
    }, [postActual]);




    const handleGenerarConIA = async(ideaSemilla: string) => {

        if (!ideaSemilla.trim()) return alert("Por favor, ingresa la idea semilla primero.");
        
        setCargando(true);

        try{
            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
            const model = genAI.getGenerativeModel(
                { model: "gemini-3-flash-preview" });

           const miTonoEjemplo = `[Como un día cualquiera, en una calle sin nada en particular, decidimos doblar la esquina. El cambio de dirección nos recibe con un golpe de aire cargado de arena y olor a plástico quemado. Nuestros gesto se frunce. Un ruido ensordecedor precede nuestros pasos. Martillos neumáticos, pitidos de alarma, paladas rítmicas. Sí, otra zona en obras. Aceleramos el paso para huir cuanto antes del ruido y la suciedad, de un paisaje plagado de esqueletos de hormigón y hierro, del movimiento frenético que va hacia el futuro. 
            Esta situación, antes descrita, es una visión común y corriente, posible en cualquier solar abierto, sea urbano o no, en este país o en cualquier otro, una imagen totalmente admisible que forma parte del paisaje moderno. En este sentido, el paisaje, que viene a significar de forma literal “parte de un territorio que puede ser observada desde un determinado lugar”, es básicamente una construcción subjetiva, por tanto, depende en gran parte del observador. Un observador -cualquiera de nosotros- que lo recrea de forma activa y lo carga de contenido experiencial y valor estético.
            Belén Cobaleda García-Bernalt, despliega su mirada, al igual que nosotros, sobre el yermo territorio, sin embargo, logra encontrar esos destellos de belleza que se ocultan en la naturaleza de todas las cosas, una característica del buen arte. Es así como ese paisaje esteril y ruidoso se va transformando poco a poco, llenándose de color y conocimiento, desafiando los motívos tradicionales del género paisajístico y logrando un seductor equilibrio entre la línea y el gesto.
            Si bien, el paisaje urbano ha sido uno de los géneros que ha acompañado a Belén a lo largo de los años, esta introducción al motivo en construcción, a este estado circunstancial, no puede más que asombrarnos. La representación de edificios esqueléticos, obras sin terminar, sobre todo ruinas, ha sido muy común en la historia de la pintura, acentuándose durante los siglos XVIII y XIX con los artistas neoclásicos y románticos. Su predisposición a enaltecer los estilos arquitectónicos del pasado y la intención de plasmar ideas como la caducidad de la vida y el paso del tiempo, que todo lo devora, dejó tras de sí un legado cargado de profunda melancolía. Sin embargo, en esta serie, que se distribuye de manera impecable a lo largo de la sala, no encontramos ni una pincelada que nos lleve a ese estado de ineludible tristeza, más bien todo lo contrario, el color y la luz, como bien deja relucir el título de la muestra -“La luz como elemento constructivo”- se convierten en atractivos cimientos que disipan cualquier sensación negativa.
            Es así como a ojos de esta artista, una escena anodina se transforma en pintoresca. Eso sí, entendiendo que lo pintoresco retoma su sentido más básico, haciendo referencia a todo aquello que nos rodea que guarda la cualidad de ser pintado debido a su singularidad. Y es que en manos de Belén, el fino dibujo y el despliegue del estudio espacial se reúnen con una estructurada utilización del color, en la que los atrevidos tonos de diferentes gamas monocromáticas construyen el espacio y el tiempo. Si bien, el color impera en cada composición es este uso tonal el que establece la profundidad, crea campos de luz, reflejos envolventes y sombras macizas, claro ejemplo de que, en el hacer de esta artista, existe un profundo conocimiento -que roza maravillosamente lo intuitivo- de las fórmulas del color, la luz, la perspectiva y la línea.
            Asimismo, frente a esta rigurosa ejecución, Belén experimenta a lo largo de las diferentes composiciones con herramientas expresivas como las salpicaduras, las gruesas pinceladas, las delicadas aguadas y una caprichosa libertad gestual, imprimiendo un resultado estético claramente reconocible en todos sus trabajos, pero que en esta ocasión, convierte el solitario emplazamiento en un ente lleno de vida y movimiento contenido.
            Este movimiento tácito, sugerido a través de los pliegues efectistas de las telas protectoras que cuelgan de los andamios -un montaje casi escenográfico- y de los perfiles de las grúas torre, impregna a la obra de un sentido original, transmitiendo la sensación de frenesí, de un proyecto en proceso, de una idea que se ampara en el futuro para darnos a entender que todo está por hacer, que existen nuevas posibilidades y que éstas están en nuestras manos. Piezas construidas por capas, por pisos, por tiempos de acción, por la sublime idea del porvenir.]`;

            const prompt = `
            Actúa como una experta amena en arte digital y contemporáneo, con un tono sugerente, cercano y vibrante, evitando tecnicismos áridos. 
            Tu objetivo es escribir una crítica sobre: "${ideaSemilla}".

            DIRECTRICES DE ESTILO:
            1. TONO: Usa un lenguaje que invite a la reflexión, algo canalla pero profesional, muy humano.
            2. EXTENSIÓN: Máximo 700 palabras (ve al grano pero con alma).
            3. RIGOR: No alucines; si no conoces un dato específico, céntrate en la estética y el impacto conceptual.
            4. ESTRUCTURA: Título con gancho, subtítulo que sea una "frase para enmarcar" y un cuerpo fluido.

            ${miTonoEjemplo ? `REFERENCIA DE MI TONO: "${miTonoEjemplo}"` : ""}

            Responde EXCLUSIVAMENTE en este formato JSON: 
            {
                "titulo": "Un título corto, magnético y poco convencional", 
                "subtitulo": "Una frase destacada que resuma la esencia de la crítica", 
                "cuerpo": "El artículo completo, usando párrafos cortos y lenguaje sugerente"
            }
            `;


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

export default BlogPanel;