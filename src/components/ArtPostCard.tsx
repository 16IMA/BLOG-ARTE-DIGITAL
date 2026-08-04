import styles from "../styles/ArtPostCard.module.css";

export interface ArtPost {
  id?: string;
  titulo: string;
  subtitulo: string;
  cuerpo: string;
  imagen?: string;
}

interface ArtPostProps {
  post: ArtPost;
  onBack?: () => void; // <-- Agregamos esta prop opcional para navegar hacia atrás
  onSave?: (post: ArtPost) => void;
}

const ArtPostCard: React.FC<ArtPostProps> = ({ post, onBack, onSave }) => {
  return (
    <article className={`${styles.article} max-w-4xl mx-auto px-6 py-12`}>
      {/* Botón para volver a la portada */}
      {onBack && (
        <button 
          onClick={onBack}
          className="flex items-center gap-2 mb-8 text-sm tracking-widest uppercase hover:underline cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver a inicio
        </button>
      )}

      <header className="mb-8">
        <h2 className={styles.title}>{post.titulo}</h2>
        <p className={styles.subtitle}>{post.subtitulo}</p>
      </header>

      {post.imagen && (
        <div className="mb-8">
          <img src={post.imagen} alt={post.titulo} className="w-full h-auto object-cover" />
        </div>
      )}

      <div className={styles.body}>
        {post.cuerpo}
      </div>

      {onSave && (
        <button onClick={() => onSave(post)} className="mt-6 px-6 py-2 bg-primary text-white">
          Publicar
        </button>
      )}
    </article>
  );
};

export default ArtPostCard;