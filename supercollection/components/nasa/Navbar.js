export default function Navbar () {
    return(
<>
  <nav className="flex items-center justify-between bg-black text-white h-25 px-6 border-b border-white/10">
    
    {/* Sinistra: Explore e Search */}
    <div className="flex items-center gap-6">
      <button className="flex items-center gap-2 hover:text-gray-400 transition-colors">
        <span className="text-sm font-medium">Explore</span>
        <span className="text-xs">▼</span>
      </button>
      
      <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-700 rounded px-2 py-1">
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent outline-none text-sm w-24 md:w-40"
        />
        <span className="text-xs">🔍</span>
      </div>
    </div>

    {/* Centro: Logo (Immagine) */}
    <div className="absolute left-1/2 -translate-x-1/2">
      <img 
        src="/images/nasa/logo.png" 
        alt="Logo" 
        className="h-20 w-auto object-contain"
      />
    </div>

    {/* Destra: Link e Live */}
    <div className="flex items-center gap-5 text-[20px] font-bold ">
      <span className="hidden md:block cursor-pointer hover:text-gray-400">News</span>
      <div className="flex items-center gap-1 border border-red-600 text-red-600 px-2 py-0.5 rounded text-[20px] font-bold">
        NASA+ <span>LIVE</span>
      </div>
    </div>

  </nav>
</>
    )
}