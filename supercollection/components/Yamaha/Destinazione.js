export default function Destinazione() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Container principale: colonna su mobile, riga su desktop */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* PARTE TESTO (Sinistra) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
          <span className="text-[10px]  font-medium text-gray-500 mb-2">
            Un mondo di avventure per tutti
          </span>
          <h2 className="text-2xl md:text-3xl font-black  mb-4">
            Destination Yamaha Motor
          </h2>
          <p className="text-[12px] text-gray-600 mb-6 max-w-md ">
            Destination Yamaha Motor è una piattaforma di viaggio online rivolta a
            tutti coloro che hanno una passione per l’avventura e il desiderio di
            scoprire nuove ed emozionanti esperienze con i mezzi Yamaha.
          </p>
          <button className="bg-black text-white text-[10px] font-bold  px-8 py-3 rounded-full hover:bg-gray-800 ">
            Learn More
          </button>
        </div>

        {/* PARTE IMMAGINE (Destra) */}
        <div className="w-full md:w-1/2 rounded-sm order-1 lg:order-2">
          <img 
            src="images/destinazione.jpg" 
            alt="Destination Yamaha" 
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}