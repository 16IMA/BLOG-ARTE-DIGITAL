interface Artista {
    nombre: string;
    estilo: string;
    seguidores: number;
    web?: string;
}

interface ArtistaProps {
    artista: Artista;
    onUpdate: (datos: Partial<Artista>) => void;
}

const ArtistaCard: React.FC<ArtistaProps> = ({ artista, onUpdate }) => {
    const handleUpdateNombre = () => {
        onUpdate({ nombre: "Nuevo Nombre editado"});
        };
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px'}}>
            <h3>{artista.nombre} ({artista.estilo})</h3>
            <p>Seguidores: {artista.seguidores.toLocaleString()}</p>
            {/* Muestra la web solo si existe*/}
            {artista.web && <p> Web: <a href={artista.web}>{artista.web}</a></p>}

            <button onClick={handleUpdateNombre}>
                Simular Actualización de Nombre
            </button>

            {/* Si intentaras pasar onUpdate({ otrocampoInexistente: 123}), TS te daría un error inmediato. */}
        </div>
    );
};

export default ArtistaCard;
