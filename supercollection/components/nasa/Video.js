export default function Video() {
  return (
    <section className="bg-[#0b0b0b] text-white py-12 px-6 font-sans mt-10">
      {/* Etichetta LIVE e Titolo */}
      <div className="text-center mb-10">
        <span className="bg-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
          Live
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight uppercase">
          NASA's Artemis II Mission Around the Moon
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        {/* 1. Colonna Sinistra */}
        <div className="md:col-span-1 space-y-4 text-[13px] leading-relaxed text-gray-300">
          <p>Join us for continuing live coverage of NASA's Artemis II, the first crewed mission of the Artemis program.</p>
          <p>Four astronauts aboard the agency's Artemis II test flight around the Moon made history at 1:56 p.m. EDT on Monday, April 6, when they reached 248,655 miles from Earth — surpassing the farthest distance ever traveled by humans...</p>
          <div className="pt-4">
             <a href="#" className="text-white font-bold hover:underline flex items-center gap-2">
              Artemis II Images <span className="bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">→</span>
             </a>
          </div>
        </div>

        {/* 2. Colonna Centrale (Immagine con scritte interne) */}
        <div className="md:col-span-2 relative group">
          {/* Scritte sovrapposte all'immagine */}
          <div className="absolute top-4 left-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest z-10">
            Visualization
          </div>
          <div className="absolute top-4 right-4 z-10 opacity-80">
            <span className="text-[10px] font-bold border border-white/20 px-1 py-0.5 rounded">NASA</span>
          </div>

          <img 
            src="images/nasa/razzo.avif" 
            alt="Orion Spacecraft" 
            className="w-full aspect-video object-cover rounded-sm border border-white/10"
          />

          {/* Label in basso a destra dell'immagine */}
          <div className="absolute bottom-4 right-4 text-[11px] font-bold flex items-center gap-2">
             Live Views From Orion 
             <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">↗</span>
          </div>
        </div>

        {/* 3. Colonna Destra */}
        <div className="md:col-span-1">
          <h3 className="flex items-center gap-2 text-[13px] font-bold mb-6">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            Live Mission Updates
          </h3>
          
          <div className="space-y-8 border-l border-gray-800 pl-5 text-[12px] relative">
            {/* Elemento Timeline 1 */}
            <div className="relative">
              <div className="absolute -left-[24.5px] top-1 w-2 h-2 bg-gray-500 rounded-full border border-black"></div>
              <span className="text-gray-500 uppercase font-bold block mb-1 tracking-tighter">4 Hours Ago</span>
              <p className="text-gray-200 leading-snug">Artemis II Flight Day 9: Second Return Correction Burn Complete</p>
            </div>
            
            {/* Elemento Timeline 2 */}
            <div className="relative">
              <div className="absolute -left-[24.5px] top-1 w-2 h-2 bg-gray-500 rounded-full border border-black"></div>
              <span className="text-gray-500 uppercase font-bold block mb-1 tracking-tighter">17 Hours Ago</span>
              <p className="text-gray-200 leading-snug">Artemis II Flight Day 9: Crew Prepares to Come Home</p>
            </div>

            {/* Elemento Timeline 3 */}
            <div className="relative">
              <div className="absolute -left-[24.5px] top-1 w-2 h-2 bg-gray-500 rounded-full border border-black"></div>
              <span className="text-gray-500 uppercase font-bold block mb-1 tracking-tighter">1 Day Ago</span>
              <p className="text-gray-200 leading-snug">Artemis II Flight Day 8: Crew Conducts Key Tests on Return to Earth</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}