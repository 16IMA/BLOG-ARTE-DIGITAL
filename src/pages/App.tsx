// src/pages/App.tsx
import { useState } from 'react';
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
    setShowContact(true);
    setShowAbout(false);
    setShowTerms(false);
    setShowPrivacy(false);
    setCurrentPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para abrir About Us / Nuestra Visión
  const handleOpenAbout = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowTerms(false);
    setShowPrivacy(false);
    setCurrentPostId(null);
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
            onBack={() => setCurrentPostId(null)} 
          />
        ) : (
          <HomePage 
            onOpenAbout={handleOpenAbout}
            onSelectPost={(id) => {
              setCurrentPostId(id);
              setShowTerms(false);
              setShowContact(false);
              setShowPrivacy(false);
              setShowAbout(false);
            }} 
          />
        )}
      </main>

      {/* Footer global */}
      <Footer 
        onGoHome={handleGoHome}
        onOpenTerms={() => {
          setShowTerms(true);
          setShowPrivacy(false);
          setShowContact(false);
          setShowAbout(false);
          setCurrentPostId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onOpenPrivacy={() => {
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