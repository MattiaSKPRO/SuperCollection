export default function Footer() {
  return (
    <footer className="bg-black text-white p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Parte Superiore: Logo e Colonne */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
          
          {/* Logo e Descrizione */}
          <div className="md:col-span-4">
            <img src="images/nasa/logo.png" alt="NASA Logo" className="w-16 mb-6" />
            <h2 className="text-xl font-bold mb-4 leading-tight">
              National Aeronautics and Space Administration
            </h2>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
            </p>
            <a href="#" className="text-sm font-bold hover:underline block mb-2">About NASA's Mission</a>
            <div className="flex items-center gap-2 font-bold cursor-pointer group">
              <span>Join Us</span>
              <div className="bg-[#eb3c27] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          {/* Colonne Link (Nascoste su mobile o impilate) */}
          <div className="md:col-span-2 space-y-3 text-sm">
            <a href="#" className="block hover:underline">Home</a>
            <a href="#" className="block hover:underline">News & Events</a>
            <a href="#" className="block hover:underline">Multimedia</a>
            <div className="flex items-center gap-1">
              <a href="#" className="hover:underline">NASA+</a>
              <span className="text-[10px] border border-white px-1 rounded-sm uppercase font-bold">Live</span>
            </div>
            <a href="#" className="block hover:underline">Missions</a>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <a href="#" className="block hover:underline">Humans in Space</a>
            <a href="#" className="block hover:underline">Earth</a>
            <a href="#" className="block hover:underline">The Solar System</a>
            <a href="#" className="block hover:underline">The Universe</a>
            <a href="#" className="block hover:underline">Science</a>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <a href="#" className="block hover:underline">Aeronautics</a>
            <a href="#" className="block hover:underline">Technology</a>
            <a href="#" className="block hover:underline">Learning Resources</a>
            <a href="#" className="block hover:underline">About NASA</a>
            <a href="#" className="block hover:underline">NASA en Español</a>
          </div>

          {/* Social e Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold mb-4">Follow NASA</h3>
            <div className="flex gap-4 mb-6">
              {/* Icone semplificate come cerchi grigi */}
          
            </div>
            <a href="#" className="text-sm block hover:underline mb-2">More NASA Social Accounts</a>
            <a href="#" className="text-sm block hover:underline">NASA Newsletters</a>
          </div>
        </div>

        {/* Linea di separazione */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400 mb-6">
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">For Media</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">FOIA</a>
            <a href="#" className="hover:text-white">No FEAR Act</a>
            <a href="#" className="hover:text-white">Office of the IG</a>
            <a href="#" className="hover:text-white">Agency Financial Reports</a>
            <a href="#" className="hover:text-white">Contact NASA</a>
          </div>
          
          <div className="text-[11px] text-gray-500 space-y-1">
            <p>Page Last Updated: <span className="text-gray-300 font-bold">Apr 17, 2026</span></p>
            <p>Page Editor: <span className="text-gray-300 font-bold">Dacia Massengill</span></p>
            <p>Responsible NASA Official: <span className="text-gray-300 font-bold">Abigail Bowman</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
}