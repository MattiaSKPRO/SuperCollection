export default function Esplora() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      

      {/* Griglia con le proporzioni richieste */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-10 gap-x-4">
        
        {/* Elemento 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-100 flex items-center justify-center mb-2">
            <img src="images/cuod.jpg" alt="Moto" className="max-h-full object-contain" />
          </div>
          <span className="text-sm font-semibold">Moto</span>
        </div>

      </div>
    </section>
  );
}