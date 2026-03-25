export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 font-sans ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* COLONNA 1: CORPORATE */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm">Corporate</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Chi siamo</li>
            <li>News</li>
            <li>Eventi</li>
            <li>Stampa</li>
            <li>Brochures</li>
            <li>Lavora con noi</li>
            <li className="leading-tight">Lavora presso una Concessionaria</li>
            <li>Diventa un rivenditore</li>
            <li>Diritti umani</li>
            <li>Sostenibilità</li>
          </ul>
        </div>

        {/* COLONNA 2: B2B */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm">B2B</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Soluzioni Business</li>
            <li>Sistemi eBike</li>
            <li>Autorità</li>
            <li>Campi da golf</li>
            <li>Scuole guida</li>
            <li>Robotics</li>
          </ul>
        </div>

        {/* COLONNA 3: PIÙ YAMAHA */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm">Più Yamaha</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>MyYamaha ↗</li>
            <li>Yamaha Music ↗</li>
            <li>Yamaha Racing ↗</li>
            <li>Yamaha Blog</li>
            <li>App mobili</li>
          </ul>
        </div>

        {/* COLONNA 4: SUPPORTO */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm">Supporto</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>FAQ ↗</li>
            <li>Supporto clienti</li>
            <li>Ricambi</li>
            <li>Manutenzione</li>
            <li>Concessionari</li>
          </ul>
        </div>

        {/* COLONNA 5: NEWSLETTER */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-bold mb-4 uppercase text-sm">Newsletter</h4>
          <p className="text-xs text-white mb-4">
            Ricevi in anteprima le ultime offerte e le nuove uscite.
          </p>
          <div className="flex h-10">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-3 text-white text-sm outline-none border-white"
            />
            <button className="bg-red-600 px-4 text-xs font-bold uppercase tracking-tighter ">
              Iscriviti
            </button>
          </div>
        
        </div>

      </div>
    </footer>
  );
}