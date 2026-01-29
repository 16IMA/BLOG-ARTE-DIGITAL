import styles from "./ArtPostCard.module.css";

export interface ArtPost {
    titulo: string;
    subtitulo: string;
    cuerpo: string
}

interface ArtPostProps {
    post: ArtPost;
    onSave?: (post: ArtPost) => void;
}

const ArtPostCard: React.FC<ArtPostProps> = ({ post, onSave }) => {
    return (
        <article className={styles.article}>
            <header>
                <h2 className={styles.title}>{post.titulo}</h2>
                <p className={styles.subtitle}>{post.subtitulo}</p>
            </header>

            <div className={styles.body}>
                {post.cuerpo}
            </div>

            {onSave && <button onClick={() => onSave(post)}>Publicar</button>}
        </article>
    );
};

export default ArtPostCard;

