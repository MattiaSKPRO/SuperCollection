export default function Bannerone() {
  return (
    <main className="w-full bg-black">
      
     
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden">
        
        
        <img 
          src="/images/moto.jpg" 
          alt="Tracer 9 GT+" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 sm:p-8 md:p-12">
          
          <p className="text-white text-[8px] sm:text-xs tracking-[0.2em] font-bold uppercase mb-1">
            Ingrana la marcia verso il futuro
          </p>
          
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-black italic mb-3">
            TRACER 9 GT+
          </h1>
          
          <button className="bg-white text-black px-5 py-2 md:px-8 md:py-3 rounded-full font-bold text-[10px] md:text-sm w-fit">
            SCOPRILO ORA →
          </button>

        </div>
      </div>
    </main>
  )
}