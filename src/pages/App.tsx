// src/pages/App.tsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import ArtPostCard from '../components/ArtPostCard';
import { POSTS } from '../data/posts'; // Asegúrate de importar tus datos

function App() {
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-surface-container-lowest text-on-surface">
      {/* Header global */}
      <Header onGoHome={() => setCurrentPostId(null)} />

      {/* Contenido dinámico */}
      <main className="flex-grow">
        {currentPostId ? (
          <ArtPostCard 
            postId={currentPostId} 
            onBack={() => setCurrentPostId(null)} 
          />
        ) : (
          <HomePage 
            onSelectPost={(id) => setCurrentPostId(id)} 
          />
        )}
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  );
}

export default App;