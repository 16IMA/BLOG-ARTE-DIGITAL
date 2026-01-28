interface ArtPost {
    título: string;
    subtitulo: string;
    cuerpo: number;
    fecha: string;
}

interface ArtPostProps {
    post: ArtPost;
    onSave?: (post: ArtPost) => void;
}

const ArtPostCard: React.FC<ArtPostProps> = ({ post, onSave }) => {
    return (
        <article className={styles.article}>
            <header>
                <h2 className={styles.title}>{post.título}</h2>
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
