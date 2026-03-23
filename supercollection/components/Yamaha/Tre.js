export default function Tre(props) {
  return (
    <div className="relative h-80 w-full md:w-[30%] bg-gray-100 flex flex-col p-6 overflow-hidden rounded-sm mt-10">
      {/* Immagine di sfondo */}
      <img 
        src={props.immagine} 
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Background" 
      />
      
      {/* Testo: 'mt-auto' lo spinge in fondo, lasciando spazio sopra */}
      <div className="relative z-10 text-white mt-auto">
        <h2 className="text-xl font-black italic uppercase mb-2">
          {props.scritta}
        </h2>
        <button className="bg-white text-black px-4 py-2 rounded-full text-[10px] font-bold">
          SCOPRI ORA →
        </button>
      </div>
    </div>
  );
}