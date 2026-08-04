const Footer = () => {
  return (
    <footer className="w-full py-20 px-8 bg-[#F3F3F3] dark:bg-[#0A0A0A] flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="flex flex-col gap-6">
        <span className="font-serif text-xl text-black dark:text-white">IMA</span>
        <p className="text-gray-500 dark:text-gray-400 font-body text-xs tracking-widest uppercase">© 2026 IMA - Innovation, Media &amp; Art</p>
      </div>
      <div className="flex flex-wrap gap-x-12 gap-y-6">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.2em] text-outline uppercase font-bold">Explorar</span>
          <a className="text-gray-500 text-sm tracking-widest hover:text-black" href="#">Archive</a>
          <a className="text-gray-500 text-sm tracking-widest hover:text-black" href="#">Privacy</a>
          <a className="text-gray-500 text-sm tracking-widest hover:text-black" href="#">Terms</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.2em] text-outline uppercase font-bold">Social</span>
          <a className="text-gray-500 text-sm tracking-widest hover:text-black" href="#">Instagram</a>
          <a className="text-gray-500 text-sm tracking-widest hover:text-black" href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
