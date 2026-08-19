import { useEffect, useState } from 'react';

interface TermsPageProps {
  onBack: () => void;
}

export default function TermsPage({ onBack }: TermsPageProps) {
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
            Términos y<br/>Aviso Legal
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light mb-24 max-w-3xl">
            Bienvenido a IMA (Innovation, Media & Art), un espacio de divulgación y archivo personal editado por Izaskun Monfort. Este sitio está dedicado a la reflexión, análisis y exploración crítica de la intersección entre la creación artística y la tecnología contemporánea.
          </p>

          <div className="space-y-24 max-w-3xl">
            <section>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8">1. Naturaleza del Sitio</h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose mb-6">
                IMA es un blog editorial y portafolio de investigación personal. No constituye una galería comercial, una plataforma de venta de arte ni una entidad de asesoramiento profesional.
              </p>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose">
                Todos los ensayos, reseñas de exposiciones, análisis de software y reflexiones publicadas representan exclusivamente las opiniones subjetivas y análisis de su autora y editora, Izaskun Monfort.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8">2. Propiedad Intelectual y Citas</h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose mb-6">
                Los textos originales y la línea gráfica publicados en IMA son propiedad intelectual de Izaskun Monfort. Se permite su cita o divulgación en otros medios siempre que se acredite adecuadamente la autoría y se incluya un enlace directo a la entrada original.
              </p>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose">
                Las imágenes, vídeos u obras de arte de terceros que se comentan o ilustran en los artículos pertenecen a sus respectivos creadores o instituciones. Su inclusión en esta plataforma se realiza bajo fines estrictamente educativos, culturales y de análisis crítico.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8">3. Privacidad y Cookies</h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose mb-6">
                IMA es un sitio web de acceso libre y lectura directa. Actualmente no utiliza cookies de seguimiento, herramientas analíticas invasivas ni formularios de recolección de datos personales.
              </p>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose">
                Puedes navegar por el archivo con total tranquilidad de que tu actividad no está siendo rastreada ni comercializada.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8">4. Enlaces y Volatilidad Tecnológica</h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-loose">
                Dado que el entorno del arte digital e inteligencia artificial cambia rápidamente, los enlaces externos, proyectos WebGL o herramientas citadas en los artículos pueden dejar de estar disponibles o alterar su funcionamiento. IMA no se responsabiliza de los contenidos o cambios en plataformas de terceros.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}