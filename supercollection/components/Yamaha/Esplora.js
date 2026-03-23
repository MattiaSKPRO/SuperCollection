export default function Esplora(props) {
  return (
    // Singolo elemento della griglia
    <div className="flex flex-col items-center group cursor-pointer">
      {/* Contenitore Immagine: h-32 o h-40 per dare spazio */}
      <div className="h-32 w-full flex items-center justify-center mb-4">
        <img 
          src={props.immagine} 
          alt={props.titolo} 
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Testo: centrato, font sottile, tutto minuscolo */}
      <span className="text-[13px] font-medium leading-tight text-center max-w-[100px] lowercase">
        {props.titolo}
      </span>
    </div>
  );
}