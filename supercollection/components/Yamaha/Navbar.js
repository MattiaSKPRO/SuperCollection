import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/images/yamaha.png" alt="Logo" className="h-10" />
          <img src="/images/70th.jpg" alt="70th" className="h-10" />
        </div>

        <div className="hidden lg:flex flex-1 justify-center space-x-8 text-black font-bold text-sm">
          <Link href="#">I NOSTRI MODELLI</Link>
          <Link href="#">ACCESSORI</Link>
          <Link href="#">ABBIGLIAMENTO & MERCHANDISE</Link>
          <Link href="#">EVENTI & EXPIRIENCE</Link>
          <Link href="#">SERVIZI & MANUTENZIONI</Link>
        </div>

        <div className="flex items-center space-x-3 text-lg">
          <span>🔍</span>
          <span>📍</span>
          <span>🛒</span>
          <span>👤</span>
          <div className="w-px h-6 bg-gray-300"></div>

          <span>🇮🇹</span>
        </div>
      </div>
    </nav>
  );
}
