interface FooterProps {
  onOpenTerms?: () => void;
  onGoHome?: () => void;
}

const Footer = ({ onOpenTerms, onGoHome }: FooterProps) => {
  return (
    <footer className="w-full py-20 px-8 bg-[#F3F3F3] dark:bg-[#0A0A0A] flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="flex flex-col gap-6">
        <button 
          type="button"
          onClick={onGoHome}
          className="font-serif text-xl text-black dark:text-white hover:opacity-70 transition-opacity text-left cursor-pointer"
        >
          IMA
        </button>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 dark:text-gray-400 font-body text-xs tracking-widest uppercase">
            © 2026 IMA - Innovation, Media &amp; Art
          </p>
          <p className="text-gray-500 dark:text-gray-400 font-body text-xs tracking-widest">
            Diseñado y desarrollado por{" "}
            <a 
              href="https://www.instagram.com/kakun_dev/" // <-- Reemplaza por tu enlace de Instagram
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white underline hover:opacity-70 transition-opacity"
            >
              Izaskun Monfort
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-12 gap-y-6">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.2em] text-outline uppercase font-bold">
            Explorar
          </span>
          <button 
            type="button"
            onClick={onGoHome}
            className="text-gray-500 text-sm tracking-widest hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
          >
            Archive
          </button>
          <a 
            className="text-gray-500 text-sm tracking-widest hover:text-black dark:hover:text-white transition-colors" 
            href="#"
          >
            Privacy
          </a>
          <button 
            type="button"
            onClick={onOpenTerms}
            className="text-gray-500 text-sm tracking-widest hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
          >
            Terms
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.2em] text-outline uppercase font-bold">
            Social
          </span>
          <a 
            className="text-gray-500 text-sm tracking-widest hover:text-black dark:hover:text-white transition-colors" 
            href="https://www.instagram.com/izaskunmonfort/" // <-- Reemplaza por tu URL de Instagram
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            className="text-gray-500 text-sm tracking-widest hover:text-black dark:hover:text-white transition-colors" 
            href="https://www.linkedin.com/in/izaskun-monfort-aurteneche-33539b83/" // <-- Reemplaza por tu URL de LinkedIn
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;