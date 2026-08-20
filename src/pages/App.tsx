// src/pages/App.tsx
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import ArtPostCard from '../components/ArtPostCard';
import TermsPage from '../components/TermsPage';
import PrivacyPage from '../components/PrivacyPage';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
import { POSTS } from '../data/posts';

function App() {
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [showTerms, setShowTerms] = useState<boolean>(false);
  const [showPrivacy, setShowPrivacy] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const selectedPost = POSTS.find((p) => p.id === currentPostId);

  // 1. Manejador global del botón "Atrás" del navegador / móvil
  useEffect(() => {
    const handlePopState = () => {
      // Si estamos en cualquier vista secundaria, al pulsar atrás regresamos a Home
      setCurrentPostId(null);
      setShowTerms(false);
      setShowPrivacy(false);
      setShowContact(false);
      setShowAbout(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Función para registrar la entrada a una vista secundaria en el historial
  const pushToHistory = () => {
    window.history.pushState({ view: 'subpage' }, '');
  };

  // Función global para volver al inicio
  const handleGoHome = () => {
    setCurrentPostId(null);
    setShowTerms(false);
    setShowPrivacy(false);
    setShowContact(false);
    setShowAbout(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para abrir Contacto
  const handleOpenContact = () => {
    pushToHistory();
    setShowContact(true);
    setShowAbout(false);
    setShowTerms(false);
    setShowPrivacy(false);
    setCurrentPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para abrir About Us / Nuestra Visión
  const handleOpenAbout = () => {
    pushToHistory();
    setShowAbout(true);
    setShowContact(false);
    setShowTerms(false);
    setShowPrivacy(false);
    setCurrentPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para seleccionar un artículo
  const handleSelectPost = (id: string) => {
    pushToHistory();
    setCurrentPostId(id);
    setShowTerms(false);
    setShowContact(false);
    setShowPrivacy(false);
    setShowAbout(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-surface-container-lowest text-on-surface">
      {/* Header global */}
      <Header 
        onGoHome={handleGoHome} 
        onOpenContact={handleOpenContact} 
        onOpenAbout={handleOpenAbout} 
      />

      {/* Contenido dinámico */}
      <main className="flex-grow">
        {showAbout ? (
          <AboutPage onBack={handleGoHome} />
        ) : showContact ? (
          <ContactPage onBack={handleGoHome} />
        ) : showPrivacy ? (
          <PrivacyPage onBack={handleGoHome} />
        ) : showTerms ? (
          <TermsPage onBack={handleGoHome} />
        ) : selectedPost ? (
          <ArtPostCard 
            post={selectedPost} 
            onBack={handleGoHome} 
          />
        ) : (
          <HomePage 
            onOpenAbout={handleOpenAbout}
            onSelectPost={handleSelectPost} 
          />
        )}
      </main>

      {/* Footer global */}
      <Footer 
        onGoHome={handleGoHome}
        onOpenTerms={() => {
          pushToHistory();
          setShowTerms(true);
          setShowPrivacy(false);
          setShowContact(false);
          setShowAbout(false);
          setCurrentPostId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onOpenPrivacy={() => {
          pushToHistory();
          setShowPrivacy(true);
          setShowTerms(false);
          setShowContact(false);
          setShowAbout(false);
          setCurrentPostId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;