export default function Duce() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Contenitore Flex: colonna su mobile, riga su tablet/desktop */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        
        {/* CARD 1 */}
        <div className="relative h-80 w-full md:w-1/2 overflow-hidden cursor-pointer group">
          <img 
            src="images/canion.webp" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            alt="Moto" 
          />
          {/* Overlay scuro per leggibilità */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          
          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-1">TO THE NEXT HORIZON</p>
            <h2 className="text-3xl font-black uppercase italic leading-none">TÉNÉRÉ SPIRIT</h2>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="relative h-80 w-full md:w-1/2 overflow-hidden cursor-pointer group">
          <img 
            src="images/casco.webp" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            alt="Casco" 
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-1">CASCO AIROH LIMITED EDITION</p>
            <h2 className="text-3xl font-black uppercase italic leading-none">INDOSSA LA STORIA</h2>
          </div>
        </div>

      </div>
    </section>
  );
}