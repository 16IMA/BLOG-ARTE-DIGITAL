// src/pages/App.tsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import ArtPostCard from '../components/ArtPostCard';
import TermsPage from '../components/TermsPage';
import PrivacyPage from '../components/PrivacyPage';
import { POSTS } from '../data/posts';

function App() {
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [showTerms, setShowTerms] = useState<boolean>(false);
  const [showPrivacy, setShowPrivacy] = useState<boolean>(false);

  // Mapeamos los posts al formato ArtPost si es necesario o buscamos el id
  const selectedPost = POSTS.find((p) => p.id === currentPostId);

  // Función global para volver al inicio y resetear estados de vista
  const handleGoHome = () => {
    setCurrentPostId(null);
    setShowTerms(false);
    setShowPrivacy(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-surface-container-lowest text-on-surface">
      {/* Header global */}
      <Header onGoHome={handleGoHome} />

      {/* Contenido dinámico */}
      <main className="flex-grow">
        {showPrivacy ? (
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
            onSelectPost={(id) => {
              setCurrentPostId(id);
              setShowTerms(false);
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
          setCurrentPostId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onOpenPrivacy={() => {
          setShowPrivacy(true);
          setShowTerms(false);
          setCurrentPostId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;