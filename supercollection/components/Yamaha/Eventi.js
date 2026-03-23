export default function Eventi(props) {
  return (
    <div className="flex flex-col w-full md:w-[31%] cursor-pointer group">
      {/* Immagine con altezza contenuta */}
      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
        <img 
          src={props.immagine} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          alt="immagine"
        />
      </div>

      {/* Testo compatto */}
      <div className="flex flex-col pt-3">
        {/* Data e Luogo - Font molto piccolo */}
        <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wider">
          {props.data}  <span className="mx-1">•</span>  {props.luogo}
        </p>

        {/* Titolo - Bold ma compatto */}
        <h3 className="text-[13px] font-black uppercase leading-tight mt-1 mb-1.5">
          {props.titolo}
        </h3>

        {/* Descrizione - Testo piccolo e grigio */}
        <p className="text-[11px] text-gray-600 leading-snug line-clamp-3 mb-2">
          {props.descrizione}
        </p>

        {/* Link Scopri di più */}
        <div className="flex items-center">
          <span className="text-[10px] font-bold uppercase border-b border-transparent group-hover:border-black transition-all">
            Scopri di più →
          </span>
        </div>
      </div>
    </div>
  );
}