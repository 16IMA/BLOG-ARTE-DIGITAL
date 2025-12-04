interface Artista {
    nombre: string;
    estilo: string;
    seguidores: number;
    web?: string;
}

interface ArtuistaProps {
    artista: Artista;
    onUpdate: (datos: Partial<Artista>) => void;
}

const ArtistaCard: React.FC<ArtistaProps> = ({ artista, onUpdate }) => {
    
}
