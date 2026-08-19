import React from 'react';
import type { Post } from '../data/posts';

interface ArtPostProps {
  post: Post;
  onBack?: () => void;
  
}

const ArtPostCard: React.FC<ArtPostProps> = ({ post, onBack }) => {
  return (
    <div className="font-body selection:bg-tertiary/20 selection:text-tertiary">
      <main className="max-w-5xl mx-auto px-8 pt-12 pb-40">
        
        {/* Botón de navegación Volver */}
        {onBack && (
          <div className="px-20 mb-8">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-label uppercase tracking-[0.2em] text-outline hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Volver a inicio
            </button>
          </div>
        )}

        {/* Estructura Principal del Artículo */}
        <article className="space-y-16 px-20">
          
          {/* Header */}
          <header className="space-y-4">
            <span className="text-xs font-label uppercase tracking-[0.2em] text-outline block">
              {post.date}
            </span>
            <h1 className="w-full font-headline text-5xl md:text-6xl text-primary tracking-tight font-normal leading-tight">
              {post.title}
            </h1>
            <p className="w-full font-headline italic text-xl text-secondary tracking-tight font-light">
              {post.excerpt}
            </p>
          </header>

          {/* Bloque Destacado / Cita Generada */}
          <div className="relative group">
            <div className="absolute -left-20 top-0 flex flex-col items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span className="h-20 w-[1px] bg-outline-variant"></span>
            </div>

            <div className="bg-surface-container-low border-l border-outline-variant/30 p-8 transition-colors hover:bg-surface-container-lowest">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold">
                  Curator Insight
                </span>
                <span className="material-symbols-outlined text-sm text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <p className="font-headline italic text-on-surface-variant leading-relaxed">
                "{post.insight}"
              </p>
            </div>
          </div>

          {/* Imagen Principal del Post */}
          {post.image && (
            <div className="py-6">
              <figure className="bg-surface-container-highest w-full aspect-[16/7] relative flex items-center justify-center overflow-hidden rounded-sm">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                <figcaption className="absolute bottom-6 left-6 text-[10px] font-label uppercase tracking-widest text-white/80 bg-black/40 px-3 py-1 rounded-xs backdrop-blur-xs">
                  {post.watermark}
                </figcaption>
              </figure>
            </div>
          )}

          {/* Cuerpo / Contenido Extenso */}
          <div className="space-y-8 text-lg leading-relaxed font-body font-light text-on-surface whitespace-pre-line">
            {post.content}
          </div>
         
        </article>

        {/* Indicador inferior */}
        <footer className="mt-24 px-20 flex justify-end">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
            <span className="text-[10px] font-label uppercase tracking-[0.2em]">Curated Article View</span>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default ArtPostCard;