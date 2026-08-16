import styles from "../styles/ArtPostCard.module.css";
import type { Post } from "../data/posts";

interface ArtPostProps {
  post: Post;
  onBack?: () => void;
  onSave?: (post: Post) => void;
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
        <span className="text-xs text-gray-400 block mb-2">{post.date}</span>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.subtitle}>{post.excerpt}</p>
      </header>

      {post.image && (
        <div className="mb-8">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>
      )}

      <div className={`${styles.body} whitespace-pre-line`}>
        {post.content}
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