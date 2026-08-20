// src/components/ArtPostCard.tsx
import React, { useState, useEffect } from 'react';
import type { Post } from '../data/posts';

interface ArtPostProps {
  post: Post;
  onBack?: () => void;
}

const ArtPostCard: React.FC<ArtPostProps> = ({ post, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // ÚNICAMENTE el cálculo del scroll (el historial ya lo gestiona App.tsx)
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-body selection:bg-tertiary/20 selection:text-tertiary relative">
      
      {/* Barra de progreso de scroll */}
      <div className="fixed top-0 left-0 w-full h-1 bg-surface-container-high z-[70]">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-40">
        
        {/* Cabecera con Botón Volver y Porcentaje */}
        {onBack && (
          <div className="px-0 md:px-20 mb-8 flex justify-between items-center border-b border-outline-variant/20 pb-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-label uppercase tracking-[0.2em] text-outline hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Volver a inicio
            </button>

            <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-primary bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/30">
              {Math.round(scrollProgress)}% LEÍDO
            </span>
          </div>
        )}

        {/* Contenido del Artículo */}
        <article className="space-y-10 md:space-y-16 px-0 md:px-20">
          <header className="space-y-4">
            <span className="text-xs font-label uppercase tracking-[0.2em] text-outline block">
              {post.date}
            </span>
            <h1 className="w-full font-headline text-3xl md:text-6xl text-primary tracking-tight font-normal leading-tight">
              {post.title}
            </h1>
            <p className="w-full font-headline italic text-lg md:text-xl text-secondary tracking-tight font-light leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="relative group">
            <div className="hidden md:flex absolute -left-20 top-0 flex-col items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span className="h-20 w-[1px] bg-outline-variant"></span>
            </div>

            <div className="bg-surface-container-low border-l-2 border-outline-variant/30 p-5 md:p-8 transition-colors hover:bg-surface-container-lowest">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold">
                  Curator Insight
                </span>
                <span className="material-symbols-outlined text-sm text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <p className="font-headline italic text-sm md:text-base text-on-surface-variant leading-relaxed">
                "{post.insight}"
              </p>
            </div>
          </div>

          {post.image && (
            <div className="py-2 md:py-6">
              <figure className="bg-surface-container-highest w-full aspect-[16/9] md:aspect-[16/7] relative flex items-center justify-center overflow-hidden rounded-sm">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-90"
                />
                {post.watermark && (
                  <figcaption className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-[9px] md:text-[10px] font-label uppercase tracking-widest text-white/80 bg-black/50 px-2.5 py-1 rounded-xs backdrop-blur-xs">
                    {post.watermark}
                  </figcaption>
                )}
              </figure>
            </div>
          )}

          <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed font-body font-light text-on-surface whitespace-pre-line">
            {post.content}
          </div>
        </article>

        <footer className="mt-16 md:mt-24 px-0 md:px-20 flex justify-between items-center border-t border-outline-variant/20 pt-8">
          <button 
            onClick={onBack}
            className="text-xs font-label uppercase tracking-[0.2em] text-primary hover:underline cursor-pointer"
          >
            ← Inicio
          </button>
          
          
        </footer>

      </main>
    </div>
  );
};

export default ArtPostCard;