export default function Slide() {
  return (
    <section className="bg-[#f6f5f3] py-16 px-6 md:px-12">
      {/* Titolo Sezione */}
      <div className="max-w-[1440px] mx-auto mb-10">
        <h2 className="text-[13px] font-bold tracking-[0.2em] uppercase text-black">
          Look di tendenza per la nuova stagione
        </h2>
      </div>

      {/* Griglia Prodotti */}
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-12">
          
          {/* Card Prodotto 1 */}
          <div className="min-w-[280px] flex-1 group cursor-pointer">
            <div className="aspect-square bg-white flex items-center justify-center p-8 mb-6">
              <img src="https://placehold.co/400x400/png?text=Borsa+Tote" alt="Tote" className="object-contain" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2">Tote Montblanc Envelope</h3>
            <p className="text-[11px] font-medium">€ 1,600.00</p>
          </div>

          {/* Card Prodotto 2 */}
          <div className="min-w-[280px] flex-1 group cursor-pointer">
            <div className="aspect-square bg-white flex items-center justify-center p-8 mb-6">
              <img src="https://placehold.co/400x400/png?text=Astuccio" alt="Astuccio" className="object-contain" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2">Astuccio per 1 Strumento da Scrittura</h3>
            <p className="text-[11px] font-medium">€ 160.00</p>
          </div>

          {/* Card Prodotto 3 */}
          <div className="min-w-[280px] flex-1 group cursor-pointer">
            <div className="aspect-square bg-white flex items-center justify-center p-8 mb-6 relative">
               <img src="https://placehold.co/400x400/png?text=Stilo" alt="Stilo" className="object-contain" />
               <span className="absolute bottom-4 left-4 bg-black/70 text-white text-[9px] px-2 py-1 uppercase">Stilografica Meisterstück</span>
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2">Stilografica Meisterstück Classique</h3>
            <p className="text-[11px] font-medium">€ 850.00</p>
          </div>

          {/* Card Prodotto 4 */}
          <div className="min-w-[280px] flex-1 group cursor-pointer">
            <div className="aspect-square bg-white flex items-center justify-center p-8 mb-6">
              <img src="https://placehold.co/400x400/png?text=Weekender" alt="Weekender" className="object-contain" />
            </div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2">Borsa Weekender 43 in Denim</h3>
            <p className="text-[11px] font-medium">€ 2,100.00</p>
          </div>

        </div>

        {/* Bottone Freccia (Slide) */}
        <button className="absolute right-0 top-[40%] translate-x-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 z-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Barra di scorrimento (Scrollbar custom) */}
        <div className="w-full h-[2px] bg-gray-200 mt-4 relative max-w-[400px] mx-auto">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-black"></div>
        </div>
      </div>
    </section>
  );
}