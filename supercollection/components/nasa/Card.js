export default function Card({ dati }) {
  return (
    <div className="flex flex-col  xl:w-1/7 md:w-1/3">
      {/* Contenitore immagine: aspect-[3/2] la rende più bassa e larga, simile al mockup */}
      <div className="aspect-[1/1] overflow-hidden bg-gray-200 ">
        <img
          src={dati.image}
          alt={dati.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="mt-4">
        <h3 className="font-bold text-base md:text-lg leading-tight text-gray-900 uppercase tracking-tight">
          {dati.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-4 italic">
          {dati.role}
        </p>
        <a 
          href="#" 
          className="group inline-flex items-center font-bold text-sm text-gray-900 hover:opacity-70 transition-opacity"
        >
          {dati.bioLink}
          <span className="ml-2 flex items-center justify-center w-5 h-5 bg-red-600 text-white rounded-full text-[8px] group-hover:translate-x-1 transition-transform">
            ➔
          </span>
        </a>
      </div>
    </div>
  );
}