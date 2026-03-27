export default function Navbar() {
  return (
    <header className="w-full font-sans border-b border-gray-100">
      {/* 1. BARRA SUPERIORE VIOLA (Info e Lingue) */}
      <div className="bg-[#8b005d] text-white py-1 px-4 md:px-10 flex justify-between items-center text-[15px] tracking-tight">
        
        {/* Lingue sulla sinistra */}
        <div className="flex gap-1.5 opacity-90">
          <span>IT</span> / <span>EN</span> / <span>DE</span> / <span>FR</span> / <span>ES</span> / <span>PL</span>
        </div>

        {/* Info centrali (Email e Tel) */}
        <div className="hidden lg:flex gap-8 items-center text-[9.5px]">
          <p>
            Servizi Professionali: <span className="font-medium">info@dogedivenezia.it - +39 041 530 23 63</span>
          </p>
          <p>
            Escursioni Giornaliere: <span className="font-medium">apt@dogedivenezia.it - +39 041 530 23 63</span>
          </p>
        </div>

        {/* Social sulla destra */}
        <div className="flex items-center gap-2">
          <span className="text-[9px]">Social:</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center text-[8px]">f</div>
            <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center text-[8px]">i</div>
            <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center text-[8px]">X</div>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR PRINCIPALE BIANCA */}
      <nav className="bg-white px-4 md:px-10 py-5 flex justify-between items-center">
        
        {/* Logo - Dimensione fedele all'originale */}
        <div className="">
          <img 
            src="images/venice/logo.png" 
            alt="Il Doge di Venezia" 
            className="h-[90px] w-auto" 
          />
        </div>

        {/* Menu di Navigazione - Testi piccoli e grigio scuro */}
        <div className="hidden md:flex items-center space-x-8 text-[15.5px] text-[#444]">
          <a href="#" className="text-[#8b005d] font-bold border-b-2 border-[#8b005d] pb-0.5">Home Page</a>
          <a href="#" className="hover:text-[#8b005d] transition-all">Escursioni Giornaliere</a>
          <a href="#" className="hover:text-[#8b005d] transition-all">Servizi Professionali</a>
          <a href="#" className="hover:text-[#8b005d] transition-all">Chi Siamo</a>
          <a href="#" className="hover:text-[#8b005d] transition-all">La Flotta</a>
          <a href="#" className="hover:text-[#8b005d] transition-all">News e documenti</a>
        </div>

        {/* Icona Menu Mobile (Semplice div senza logica) */}
        <div className="md:hidden text-[#8b005d] text-2xl">
          ☰
        </div>
      </nav>
    </header>
  );
}