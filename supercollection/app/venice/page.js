import Navbar from "@/components/venice/Navbar";
import Bannerone from "@/components/venice/Bannerone";
import Card from "@/components/venice/Card";
import Tour from "@/components/venice/Tour";
import Banner from "@/components/venice/Banner";
import Footer from "@/components/venice/Footer";
export default function Venice() {
  return (
    <>
      <Navbar />
      <Bannerone />

      {/* Sezione Testi Descrittivi */}
      <div className="max-w-6xl mx-auto px-6 mt-12 mb-8">
        <span className="bg-white text-gray-700 px-2 py-1 text-sm uppercase tracking-wide">
          Escursioni Giornaliere in barca con guida a bordo
        </span>

        <h2 className="text-4xl md:text-6xl font-light text-gray-800 mt-4 mb-6">
          Nessuno ti mostrerà{" "}
          <span className="text-[#99006E] font-bold">Venezia</span> come noi
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl border-l-4 border-white pl-4">
          Lasciati trasportare da una brezza marina mentre ammiri i palazzi
          storici, i ponti iconici e i tesori nascosti della città. Vivi
          l'emozione di vedere{" "}
          <span className="text-[#99006E] font-semibold">Venezia</span> dal suo
          elemento più autentico: l'acqua.
        </p>
      </div>

      {/* Sezione delle Card */}
      <div className="flex justify-center gap-7 mt-5 mb-20 flex-wrap ">
        <Card images="images/venice/card1.jpg" />
        <Card images="images/venice/card2.jpg" />
        <Card images="images/venice/card3.jpg" />
      </div>

<Tour></Tour>
<Banner></Banner>
<Footer></Footer>
    </>
  );
}
