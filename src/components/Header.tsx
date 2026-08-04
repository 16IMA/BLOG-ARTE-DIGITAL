import { useState } from 'react';

interface HeaderProps {
  onGoHome: () => void;
}

const Header = ({ onGoHome }: HeaderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <nav className="flex justify-between items-center w-full px-8 py-6">
          <div className="flex items-center gap-4">
            <span 
              className="material-symbols-outlined text-black dark:text-white cursor-pointer select-none"
              onClick={() => setIsDrawerOpen(true)}
            >
              menu
            </span>
          </div>
          <a className="text-2xl font-serif tracking-tighter text-black dark:text-white cursor-pointer" onClick={onGoHome}>
            IMA
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a onClick={onGoHome} className="text-black dark:text-white font-bold hover:underline decoration-1 underline-offset-4 cursor-pointer">
              Home
            </a>
            <a className="text-gray-500 dark:text-gray-400 hover:underline decoration-1 underline-offset-4">
              About Us
            </a>
            <a className="text-gray-500 dark:text-gray-400 hover:underline decoration-1 underline-offset-4">
              Contacto
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-black dark:text-white cursor-pointer select-none">
              search
            </span>
          </div>
        </nav>
      </header>

      {/* El Drawer/Menú lateral también se mueve aquí */}
      <aside className={`fixed inset-y-0 right-0 z-[60] flex flex-col bg-[#F9F9F9] dark:bg-[#121212] w-80 transition-transform duration-300 shadow-2xl ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="text-3xl font-serif text-black dark:text-white px-8 py-12 flex justify-between items-center">
          <span>IMA</span>
          <span className="material-symbols-outlined cursor-pointer" onClick={() => setIsDrawerOpen(false)}>close</span>
        </div>
        <div className="flex flex-col mt-8">
          <a onClick={() => { onGoHome(); setIsDrawerOpen(false); }} className="text-black dark:text-white font-semibold border-l-4 border-black pl-8 py-4 bg-gray-200 flex items-center gap-4 cursor-pointer">
            <span className="material-symbols-outlined">home</span>
            <span className="font-body uppercase tracking-widest text-sm">Home</span>
          </a>
          {/* Resto de enlaces del drawer */}
        </div>
      </aside>
    </>
  );
};

export default Header;