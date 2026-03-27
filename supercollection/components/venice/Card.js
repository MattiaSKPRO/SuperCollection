export default function Card(props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white max-w-sm">
      {/* Immagine */}
      <div className="relative">
        <img 
          src={props.images }
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
          Tour Murano, Burano e Torcello
        </h3>
        
        <div className="text-sm text-gray-600 mb-4">
          <p>📍 Partenza: <strong>Venezia</strong></p>
          <p>⏱️ Durata: 6h 30min</p>
          <p className="text-green-600">Disponibile oggi</p>
        </div>

        {/* Prezzo e Bottone */}
        <div className="flex justify-between items-center pt-3 border-t">
          <div>
            <p className="text-xs text-gray-400">Da</p>
            <p className="text-xl font-bold text-blue-600">€30,00</p>
          </div>
          <button className="bg-[#99006E] text-white px-4 py-2 rounded text-sm font-medium">
            Vedi tour
          </button>
        </div>
      </div>
    </div>
  );
}