export default function Tour() {
  return (
    <main className=" mx-auto px-5 py-12 font-sans text-center ">
      
      {/* --- TESTI IN ALTO --- */}
      <div className="mb-12">
        <p className="text-gray-500 text-sm mb-2">
          Esplora <span className="font-bold text-gray-900">Venezia</span> con servizi di alto livello.
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          Qualità e Professionalità per il tuo <br />
          <span className="text-[#99006E] font-bold">Tour a Venezia</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I nostri tour offrono un'esperienza unica alla scoperta dei tesori nascosti della Serenissima.
        </p>
      </div>

      {/* --- GRIGLIA DELLE CARD --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:grid-cols-4 ">
        
        {/* Card 1 */}
        <div className="bg-white border border-gray-100 rounded-[30px] p-10 shadow-sm">
          <img 
            src="images/venice/telefono.png" 
            alt="Prenotazione" 
            className="w-16 h-16 mx-auto mb-5 object-contain" 
          />
          <h3 className="text-[#99006E] text-xl font-bold mb-3">Prenotazione Istantanea</h3>
          <p className="text-gray-500 text-sm">Prenota il tuo tour a Venezia in pochi click, senza attese.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-100 rounded-[30px] p-10 shadow-sm">
          <img 
            src="images/venice/soldi.png" 
            alt="Prezzo" 
            className="w-16 h-16 mx-auto mb-5 object-contain" 
          />
          <h3 className="text-[#99006E] text-xl font-bold mb-3">Miglior Prezzo Garantito</h3>
          <p className="text-gray-500 text-sm">Offriamo i migliori prezzi per un'esperienza indimenticabile.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-100 rounded-[30px] p-10 shadow-sm">
          <img 
            src="images/venice/carta.png" 
            alt="Sicurezza" 
            className="w-16 h-16 mx-auto mb-5 object-contain" 
          />
          <h3 className="text-[#99006E] text-xl font-bold mb-3">Pagamenti 100% Sicuri</h3>
          <p className="text-gray-500 text-sm">Goditi il tuo tour con pagamenti sicuri e affidabili.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-gray-100 rounded-[30px] p-10 shadow-sm">
          <img 
            src="images/venice/ponte.png" 
            alt="Territorio" 
            className="w-16 h-16 mx-auto mb-5 object-contain" 
          />
          <h3 className="text-[#99006E] text-xl font-bold mb-3">Del Territorio</h3>
          <p className="text-gray-500 text-sm">Veneziani da generazioni: passione e amore per la città.</p>
        </div>

      </div>
    </main>
  );
}