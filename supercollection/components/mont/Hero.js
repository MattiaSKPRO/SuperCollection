export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden group">
      {/* Immagine di Sfondo */}
      <img
        src="images/mont/2.webp" 
        alt="Selezione Primavera"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Sfumato (Gradient nero dal basso) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Contenuto Testuale e Pulsanti */}
      <div className="absolute bottom-12 left-12 text-white">
        <h2 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-2">
          Selezione Primaverile
        </h2>
        <p className="text-xs md:text-sm font-light mb-6 opacity-90">
          Celebriamo la nuova stagione
        </p>

        {/* Pulsanti */}
        <div className="flex gap-4">
          <button className="px-8 py-3 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Scopri la collezione
          </button>
          <button className="px-8 py-3 border border-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Esplora borse
          </button>
        </div>
      </div>

      {/* Icone in basso a destra (Mute e Play) */}
      <div className="absolute bottom-12 right-12 flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 12c0 3.12-2.01 5.75-4.8 6.7l.73 1.9c3.67-1.22 6.37-4.66 6.37-8.6s-2.7-7.38-6.37-8.6l-.73 1.9c2.79.95 4.8 3.58 4.8 6.7zM3 9v6h4l5 5V4L7 9H3z" />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors text-black">
          <svg className="w-3 h-3 translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </section>
  );
}