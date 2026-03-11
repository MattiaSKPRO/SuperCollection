export default function Esplora() {
  return (
    <div className="max-w-7xl mx-auto p-6">
     

     
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-4 gap-y-10">
        
        {/* Componente "Stampino" - Copia questo blocco per ogni voce */}
        <a href="#" className="flex flex-col items-center group">
          <div className="h-16 flex items-center justify-center">
            <img 
              src="/images/barca.jpg" 
              alt="Moto" 
              className="max-h-full object-contain transition-transform group-hover:scale-110" 
            />
          </div>
          <p className="mt-3 font-bold uppercase text-[10px] md:text-xs text-center leading-tight">Moto</p>
        </a>

        
        
      </div>
    </div>
  );
}