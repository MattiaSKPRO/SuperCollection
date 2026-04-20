export default function Topics({dati}) {
  return (
    <div className="w-90 mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-black uppercase tracking-tight">
     
      </h2>

      <div className="">
        {/* Card 1 */}
        <div className="relative w-full overflow-hidden cursor-pointer h-[450px]">
          <img
            src={dati.image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt=""
          />
          <div className="absolute inset-0 from-black/80 " />
          <div className="absolute bottom-5 left-5 flex items-center gap-2">
            <span className="text-white font-bold text-xl uppercase">
              {dati.bioLink}
            </span>
            <div className="w-5 h-5 rounded-full bg-[#eb3c27] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                className="w-3 h-3"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
