// src/pages/App.tsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import ArtPostCard from '../components/ArtPostCard';
import { POSTS } from '../data/posts';

function App() {
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  // Mapeamos los posts al formato ArtPost si es necesario o buscamos el id
  const selectedPost = POSTS.find((p) => p.id === currentPostId);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-surface-container-lowest text-on-surface">
      {/* Header global */}
      <Header onGoHome={() => setCurrentPostId(null)} />

      {/* Contenido dinámico */}
      <main className="flex-grow">
        {selectedPost ? (
          <ArtPostCard 
            post={selectedPost} 
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