import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <header className="w-full bg-white text-black border-b border-gray-100 sticky top-0 z-50 font-sans">
        {/* Top Bar: Lingua, Logo, Icone */}
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Sinistra: Localizzazione */}
          <div className="flex-1 flex items-center">
            <button className="text-[10px] font-bold underline underline-offset-4 tracking-tight">
              IT
            </button>
          </div>

          {/* Centro: Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-bold tracking-[0.25em] uppercase cursor-pointer">
                Montblanc
              </h1>
            </Link>
          </div>

          {/* Destra: Icone SVG (Cerca, Account, Wishlist, Carrello) */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <svg className="w-[22px] h-[22px] cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.3">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg className="w-[22px] h-[22px] cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.3">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <svg className="w-[22px] h-[22px] cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.3">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg className="w-[22px] h-[22px] cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.3">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>

        {/* Navigazione Secondaria */}
        <nav className="max-w-[1440px] mx-auto px-4 pb-6">
          <div className="flex items-center justify-center gap-8 overflow-x-auto no-scrollbar text-[11px] font-bold tracking-[0.12em] uppercase whitespace-nowrap">
            <Link href="#" className="hover:opacity-50 transition-opacity">Novità</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Regali</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Penne di Lusso</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Ricariche e Cancelleria</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Borse</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Bagagli da Viaggio</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Accessori</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Orologi</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Cuffie</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Fragranze</Link>
            <Link href="#" className="hover:opacity-50 transition-opacity">Scopri</Link>
          </div>
        </nav>
      </header>
    </>
  );
}