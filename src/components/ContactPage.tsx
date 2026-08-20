import { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [copied, setCopied] = useState(false);

  // Reconstrucción ofuscada del email para evitar scraping
  const getEmail = () => {
    const user = "imaeditorial.contact"; // <-- Modifica por la parte anterior al @
    const domain = "gmail.com"; // <-- Modifica por tu dominio real
    return `${user}@${domain}`;
  };

  const handleMailTo = () => {
    window.location.href = `mailto:${getEmail()}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(getEmail());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-40">
              
        {/* Contenido Principal */}
        <article className="md:w-3/4 md:pl-16 pt-8 md:pt-20">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight mb-12 text-primary max-w-4xl">
            Conectemos
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light mb-16 max-w-3xl">
            Espacio abierto a colaboraciones, curaduría de proyectos, consultoría sobre arte y tecnología o intercambio de ideas alrededor de la innovación digital.
          </p>

          {/* Imagen Editorial */}
          <div className="w-full max-w-3xl h-64 md:h-96 overflow-hidden bg-surface-container-low mb-16 relative">
            <img 
              src="./contact_image.jpg" 
              alt="IMA - Digital Art & Technology" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
            />
          </div>

          {/* Secciones de Contacto y Canales */}
          <div className="space-y-16 max-w-3xl">
            
            {/* Direct Email (Protegido) */}
            <section className="bg-surface-container-low p-8 md:p-12">
              <h2 className="font-headline text-2xl md:text-3xl text-primary mb-4">Escríbeme un Correo</h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
                Para propuestas formales, consultas de proyectos o análisis de contenido.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={handleMailTo}
                  className="bg-primary text-on-primary font-body text-xs font-bold tracking-[0.1em] uppercase px-8 py-4 hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  Enviar Email
                </button>
                <button 
                  onClick={handleCopyEmail}
                  className="border border-outline text-primary font-body text-xs font-bold tracking-[0.1em] uppercase px-8 py-4 hover:bg-surface-container transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  {copied ? "¡Copiado!" : "Copiar Dirección"}
                </button>
              </div>
            </section>

            {/* Redes y Plataformas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/izaskun-monfort-aurteneche-33539b83/" // <-- Reemplaza por tu LinkedIn
                target="_blank" 
                rel="noopener noreferrer"
                className="group border border-outline-variant p-8 flex flex-col justify-between hover:border-primary transition-colors"
              >
                <div>
                  <span className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-2 block">Profesional</span>
                  <h3 className="font-headline text-2xl text-primary group-hover:underline">LinkedIn</h3>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-6">
                  Para oportunidades laborales, colaboraciones y red profesional.
                </p>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/izaskunmonfort/" // <-- Reemplaza por tu Instagram
                target="_blank" 
                rel="noopener noreferrer"
                className="group border border-outline-variant p-8 flex flex-col justify-between hover:border-primary transition-colors"
              >
                <div>
                  <span className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-2 block">Proyectos & Procesos</span>
                  <h3 className="font-headline text-2xl text-primary group-hover:underline">Instagram</h3>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-6">
                  Explora las exposiciones, proyectos y publicaciones que realizo.
                </p>
              </a>

            </div>
          </div>

          {/* Botón inferior de retorno */}
          <div className="mt-24 pt-12 flex items-center justify-between">
            <button 
              onClick={onBack}
              className="bg-primary text-on-primary font-body text-sm font-bold tracking-[0.1em] uppercase px-10 py-5 hover:opacity-80 transition-opacity cursor-pointer"
            >
              Volver al Inicio
            </button>
          </div>

        </article>
      </div>
    </div>
  );
}