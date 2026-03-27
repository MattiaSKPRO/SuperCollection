export default function BannerVenezia() {
  return (
    <section className="relative w-full overflow-hidden px-20 mt-5">
      {/* Container Immagine con angoli leggermente arrotondati come nello screen */}
      <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden px-4">
        <img 
          src="/images/venice/venezia.jpg" 
          alt="Venezia dall'alto" 
          className="absolute inset-0 w-full h-full object-cover rounded-b-[40px]"
        />

        {/* Overlay Testo */}
        <div className="absolute inset-0 flex flex-col justify-end pb-20 pl-12 md:pl-24 bg-black/10">
          <div className="max-w-4xl text-white">
            {/* Titolo con linea bianca sotto */}
            <h1 className="text-4xl md:text-[55px] font-bold leading-tight inline-block border-b-2 border-white pb-1 mb-2">
              Escursioni Giornaliere a Venezia,
            </h1>
            
            {/* Sottotitolo */}
            <p className="text-4xl md:text-[55px] font-light leading-tight">
              un incanto <br />
              sospeso sull’acqua.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}