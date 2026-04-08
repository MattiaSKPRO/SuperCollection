export default function Card({dati}) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white max-w-sm md:w-1/4">
      {/* Immagine */}
      <div className="relative">
        <img 
          src={dati.immagine}
          alt="Tour" 
          className="w-full h-48 object-cover" 
        />
        <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase">
          PRENOTA SUBITO
        </span>
      </div>

      {/* Contenuto */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 leading-tight">
          {dati.testo}
        </h3>
        
        <div className="text-sm text-gray-600 mb-4">
          <p>📍 {dati.elenco}</p>
          <p>⏱️ {dati.elenco3}</p>
          <p className="text-green-600">{dati.elenco2}</p>
        </div>

        {/* Prezzo e Bottone */}
        <div className="flex justify-between items-center pt-3 border-t">
          <div>
            <p className="text-xs text-gray-400">Da</p>
            <p className="text-xl font-bold text-blue-600">{dati.soldi}</p>
          </div>
          <button className="bg-[#99006E] text-white px-4 py-2 rounded text-sm font-medium">
            {dati.prenota}
          </button>
        </div>
      </div>
    </div>
  );
}