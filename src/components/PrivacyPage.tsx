import { useEffect, useState } from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPos = window.scrollY;
      if (docHeight > 0) {
        setReadProgress((scrollPos / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-surface-container-lowest">
      {/* Barra de progreso de lectura */}
      <div className="fixed top-0 left-0 w-full h-1 bg-surface-container z-50">
        <div 
          className="h-full bg-tertiary transition-all duration-150 ease-out" 
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-40">
        {/* Sidebar con Metadatos */}
        <aside className="md:w-1/4 pt-8 md:pt-20 pb-12 md:pb-0 md:sticky md:top-24 h-max flex flex-col gap-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-primary font-body text-sm font-bold hover:opacity-70 transition-opacity self-start mb-4 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
            Volver
          </button>
          <div>
            <p className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-1">Proyecto</p>
            <p className="font-body text-sm text-on-surface-variant">IMA Blog Personal</p>
          </div>
          <div>
            <p className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-1">Editora</p>
            <p className="font-body text-sm text-on-surface-variant">Izaskun Monfort</p>
          </div>
          <div>
            <p className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-1">Última Revisión</p>
            <p className="font-body text-sm text-on-surface-variant">Agosto, 2026</p>
          </div>
        </aside>

        {/* Contenido Principal */}
        <article className="md:w-3/4 md:pl-16 pt-8 md:pt-20">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight mb-16 text-primary max-w-4xl">
            Política de<br/>Privacidad
          </h1>

          <div className="space-y-12 max-w-3xl">
            <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light mb-12">
              Esta es una página web estática que no solicita, recopila ni almacena datos personales de sus visitantes, ni utiliza cookies de seguimiento.
            </p>
            
            <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose">
              El sitio está alojado en GitHub Pages; puedes consultar cómo esta plataforma procesa información técnica básica por motivos de seguridad en la{" "}
              <a 
                href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline font-medium hover:opacity-70 transition-opacity"
              >
                Declaración de Privacidad de GitHub
              </a>.
            </p>
          </div>
        
        </article>
      </div>
    </div>
  );
}