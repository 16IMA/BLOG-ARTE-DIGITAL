// src/components/AboutPage.tsx
import { useState } from 'react';

interface AboutPageProps {
    onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
    const [lang, setLang] = useState<'es' | 'en'>('es');

    return (
        <div className="relative w-full bg-surface-container-lowest">
            <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-40">

                {/* Sidebar de Metadatos y Selector de Idioma */}
                <aside className="md:w-1/4 pt-8 md:pt-20 pb-12 md:pb-0 md:sticky md:top-24 h-max flex flex-col gap-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-primary font-body text-sm font-bold hover:opacity-70 transition-opacity self-start mb-4 cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
                        {lang === 'es' ? 'Volver' : 'Back'}
                    </button>

                    {/* Selector de idioma */}
                    <div className="flex gap-2 p-1 bg-surface-container-low w-fit border border-outline-variant/40">
                        <button
                            onClick={() => setLang('es')}
                            className={`px-3 py-1 font-body text-xs font-bold transition-colors cursor-pointer ${lang === 'es'
                                ? 'bg-primary text-on-primary'
                                : 'text-secondary hover:text-primary'
                                }`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`px-3 py-1 font-body text-xs font-bold transition-colors cursor-pointer ${lang === 'en'
                                ? 'bg-primary text-on-primary'
                                : 'text-secondary hover:text-primary'
                                }`}
                        >
                            EN
                        </button>
                    </div>

                    <div>
                        <p className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-1">
                            {lang === 'es' ? 'Proyecto' : 'Project'}
                        </p>
                        <p className="font-body text-sm text-on-surface-variant">IMA (Innovation, Media &amp; Art)</p>
                    </div>
                    <div>
                        <p className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-1">
                            {lang === 'es' ? 'Dirección' : 'Direction'}
                        </p>
                        <p className="font-body text-sm text-on-surface-variant">Izaskun Monfort</p>
                    </div>
                    <div>
                        <p className="font-body text-xs font-bold tracking-widest uppercase text-secondary mb-1">
                            {lang === 'es' ? 'Enfoque' : 'Focus'}
                        </p>
                        <p className="font-body text-sm text-on-surface-variant">
                            {lang === 'es' ? 'Arte, Cloud & IA' : 'Art, Cloud & AI'}
                        </p>
                    </div>
                </aside>

                {/* Contenido Principal */}
                <article className="md:w-3/4 md:pl-16 pt-8 md:pt-20">

                    {/* Título Principal */}
                    <div className="mb-16">
                        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-primary pb-6 border-b-2 border-primary max-w-4xl">
                            {lang === 'es' ? 'Sobre IMA' : 'About IMA'}
                        </h1>
                        <p className="font-body text-xs tracking-widest text-secondary uppercase mt-4 font-bold">
                            Innovation, Media &amp; Art
                        </p>
                    </div>

                    {/* Banner Editorial Minimalista */}
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface-container-highest relative overflow-hidden mb-16">
                        <img
                            src="./IMA-foto-aboutus.jpg"
                            alt="Izaskun Monfort"
                            className="w-full h-full object-cover object-top grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-30" />
                    </div>

                    {/* Declaración de la Plataforma */}
                    <section className="bg-surface-container-low p-8 md:p-12 mb-16 border-l-2 border-primary">
                        {lang === 'es' ? (
                            <div className="space-y-6 font-body text-secondary leading-relaxed text-base md:text-lg max-w-3xl">
                                <p className="text-primary font-medium text-lg md:text-xl">
                                    IMA es una plataforma de investigación y curaduría digital nacida en la intersección donde el arte contemporáneo, la arquitectura de datos y la inteligencia artificial se cruzan.
                                </p>
                                <p>
                                    En un ecosistema creativo cada vez más mediatizado por algoritmos y sistemas en la nube, analizamos las tripas de la tecnología para entender su impacto real en la práctica artística. No nos quedamos en la superficie estética: investigamos cómo se gestionan la autoría, la conservación digital y los límites del lenguaje cuando el artista plástico y el código trabajan mano a mano.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6 font-body text-secondary leading-relaxed text-base md:text-lg max-w-3xl">
                                <p className="text-primary font-medium text-lg md:text-xl">
                                    IMA is a digital research and curatorial platform born at the intersection of contemporary art, data architecture, and artificial intelligence.
                                </p>
                                <p>
                                    In a creative ecosystem increasingly shaped by algorithms and cloud infrastructure, we delve into the core of technology to understand its real impact on artistic practice. Going beyond surface aesthetics, we investigate how authorship, digital preservation, and the boundaries of language are navigated when visual artists and code work hand in hand.
                                </p>
                            </div>
                        )}
                    </section>

                    {/* Editora & Fundadora */}
                    <section className="mt-12">
                        <span className="font-body text-xs tracking-widest text-secondary uppercase mb-8 block font-bold">
                            {lang === 'es' ? 'Fundación & Edición' : 'Founder & Editor'}
                        </span>

                        <div className="bg-surface-container-low p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <h2 className="font-headline text-3xl text-primary mb-1">Izaskun Monfort</h2>
                                    <p className="font-body text-xs text-secondary mb-6 uppercase tracking-wider font-bold">
                                        {lang === 'es' ? 'Editora & Fundadora' : 'Editor & Founder'}
                                    </p>

                                    {lang === 'es' ? (
                                        <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
                                            Comisaria, gestora cultural, escritora y desarrolladora. Con una trayectoria de más de una década en la gestión de proyectos artísticos e instituciones culturales, combina su práctica curatorial y su labor investigadora con la especialización en arquitecturas Cloud y desarrollo tecnológico.
                                        </p>
                                    ) : (
                                        <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
                                            Curator, cultural manager, writer, and developer. With over a decade of experience in artistic project management and cultural institutions, she combines her curatorial and writing practice with specialization in Cloud architecture and software development.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Botón de retorno al inicio */}
                    <div className="mt-20 pt-12 flex items-center justify-between">
                        <button
                            onClick={onBack}
                            className="bg-primary text-on-primary font-body text-xs font-bold tracking-[0.1em] uppercase px-10 py-5 hover:opacity-80 transition-opacity cursor-pointer"
                        >
                            {lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}
                        </button>
                    </div>

                </article>
            </div>
        </div>
    );
}