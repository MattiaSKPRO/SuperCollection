export default function Card() {
  return (
    /* flex-wrap: permette di andare a capo */
    /* justify-between: distribuisce lo spazio in modo uguale tra le card */
    /* max-w: evita che le card diventino giganti su schermi enormi */
    <div className="flex flex-wrap justify-between  p-4  max-w-6xl mx-auto">

      {/* CARD 1 - w-full su mobile, w-[48%] su schermi medi (così ne stanno 2 perfette) */}
      <div className="relative h-72 w-full md:w-[48%] bg-gray-300 flex items-end p-8 overflow-hidden rounded-sm mt-10">
        <img src="images/le moto.webp" className="absolute inset-0 w-full h-full object-cover" alt="Moto" />
        <div className="relative z-10 text-white">
          <p className="text-xs font-bold uppercase tracking-tight">La rata su misura</p>
          <h2 className="text-2xl font-black italic">VANTAGGI MOTO</h2>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative h-72 w-full md:w-[48%] bg-blue-900 flex flex-col justify-end p-8 overflow-hidden rounded-sm mt-10">
        <img src="images/mare.webp" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Mare" />
        <div className="relative z-10 text-white">
          <p className="text-xs font-bold uppercase tracking-tight">Vento in poppa</p>
          <h2 className="text-2xl font-black italic mb-3">INCENTIVI SEA</h2>
          <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase w-fit tracking-tighter">
            SCOPRI ORA →
          </button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative h-72 w-full md:w-[48%] bg-gray-300 flex items-end p-8 overflow-hidden rounded-sm mt-10">
        <img src="images/evento.png" className="absolute inset-0 w-full h-full object-cover" alt="Evento" />
        <div className="relative z-10 text-white">
          <p className="text-xs font-bold uppercase tracking-tight">Evento</p>
          <h2 className="text-2xl font-black italic">FATHER & SON</h2>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="relative h-72 w-full md:w-[48%] bg-black flex items-end p-8 overflow-hidden rounded-sm mt-10">
        <img src="images/casco.webp" className="absolute inset-0 w-full h-full object-cover" alt="Casco" />
        <div className="relative z-10 text-white">
          <p className="text-xs font-bold uppercase tracking-tight">Airoh Limited</p>
          <h2 className="text-2xl font-black italic">INDOSSA LA STORIA</h2>
        </div>
      </div>

    </div>
  );
}