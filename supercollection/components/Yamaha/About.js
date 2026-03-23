export default function AboutUs() {
  return (
    
      
   
      <div className="relative max-w-5xl mx-auto h-[350px] md:h-[450px] overflow-hidden rounded-sm shadow-lg">
        
        {/* L'immagine ora è dentro un contenitore limitato */}
        <img 
          src="images/us.webp" 
          alt="About Yamaha" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        

        {/* Testo sopra l'immagine */}
        <div className="relative  h-full flex flex-col justify-end items-start p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-2">
            About Us
          </h2>
          
          <p className="text-[11px] md:text-[13px] max-w-md mb-6 leading-snug font-bold">
            Che tu voglia CORRERE più velocemente, SENTIRE la passione della guida 
            o trovare la soluzione migliore per MUOVERSI in modo più intelligente, 
            i nostri prodotti e servizi sono gli unici che possono offrirti 
            l'esperienza Kando.
          </p>

          <button className="bg-white text-black text-[10px] font-bold uppercase px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
            Scopri Yamaha
          </button>
        </div>
      </div>
    
  );
}