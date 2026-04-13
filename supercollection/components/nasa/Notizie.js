import Image from 'next/image';

export default function Notizie() {
  return (
    // Rimosso max-w-5xl per permettere all'immagine di espandersi
    // h-[50vh] su mobile, h-[70vh] su tablet, h-[85vh] su desktop grandi
    <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden shadow-2xl group font-sans">
      
      {/* Immagine di Sfondo ottimizzata con Next.js Image */}
      <Image
        src="/images/nasa/4.jpg" 
        alt="Artemis II Mission Crew"
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        priority
      />

      {/* Overlay Gradiente - leggermente più scuro per leggibilità su schermi grandi */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Contenuto posizionato dinamicamente */}
      <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-20 w-full lg:w-2/3 text-white">
        
        {/* Testo che scala di dimensione con lo schermo */}
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight">
          Forging New <br className="hidden md:block" /> Frontiers
        </h2>
        
        <p className="text-sm sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl text-gray-200">
          The first crewed Artemis flight marks a key step toward long-term return to 
          the Moon and future missions to Mars.
        </p>

        {/* Link Biografia */}
        <a 
          href="#" 
          className="inline-flex items-center gap-3 text-base sm:text-xl font-bold hover:gap-5 transition-all duration-300"
        >
          Artemis II Mission 
          <span className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-full text-[8px] sm:text-[12px] text-white">
            ▶
          </span>
        </a>
      </div>
    </div>
  );
}