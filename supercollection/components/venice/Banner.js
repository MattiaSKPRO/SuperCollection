export default function Bannerone() {
  return (
    <section className="flex flex-col md:flex-row gap-4 p-4">
      
      {/* Prima Card */}
      <div className="relative w-full md:w-1/2 h-[450px] rounded-3xl overflow-hidden">
        <img 
          src="images/venice/matrimonio.jpg" 
          alt="Matrimonio" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end text-white">
          <h2 className="text-3xl font-bold">Matrimonio <span className="font-light italic">a Bordo</span></h2>
          <p className="text-sm my-4">Scopri il fascino di Venezia in un modo unico e romantico.</p>
          <button className="bg-white text-black px-6 py-2 rounded-full w-fit font-bold uppercase text-[10px]">
            Scopri di più
          </button>
        </div>
      </div>

      {/* Seconda Card */}
      <div className="relative w-full md:w-1/2 h-[450px] rounded-3xl overflow-hidden">
        <img 
          src="images/venice/festa.jpg" 
          alt="Festa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end text-white">
          <h2 className="text-3xl font-bold">Giorno di <span className="font-light italic">Festa</span></h2>
          <p className="text-sm my-4">Organizza una festa indimenticabile con il nostro servizio.</p>
          <button className="bg-white text-black px-6 py-2 rounded-full w-fit font-bold uppercase text-[10px]">
            Scopri di più
          </button>
        </div>
      </div>

    </section>
  );
}