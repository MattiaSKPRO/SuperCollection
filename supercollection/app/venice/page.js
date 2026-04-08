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
        <Card dati={datiCard} />
        <Card dati={datiCard1}/>
        <Card  dati={datiCard2}/>
      </div>

<Tour></Tour>
<Banner></Banner>
<Footer></Footer>
    </>
  );
}

  const datiCard ={
    testo:"Tour giornaliero in barca da Venezia-Murano, Burano e Torcello con guida a bordo e tempo libero",
    immagine:"images/venice/card1.jpg",
    elenco:"Partenza:Venezia",
    elenco2:"Disponibilità dal: Disponibile tutto l'anno",
    elenco3:"Durata:6h 30min",
    prenota:"Prenota",
    soldi:"30,00€"
}
 const datiCard1 ={
    testo:"Tour in barca da Venezia: Murano e Burano con dimostrazione del vetro e tempo libero",
    immagine:"images/venice/card2.jpg",
    elenco:"Partenza:Venezia",
    elenco2:"Disponibilità dal: Disponibile ",
    elenco3:"Durata:4h 50min",
    prenota:"Prenota",
    soldi:"25,00€"
}
 const datiCard2 ={
    testo:"BURANO SPECIAL: escursione a Burano da Venezia con tempo libero per esplorare l'isola",
    immagine:"images/venice/card3.jpg",
    elenco:"Partenza:Venezia",
    elenco2:"Disponibilità dal: Disponibile ",
    elenco3:"Durata:6h 45min",
    prenota:"Prenota",
    soldi:"25,00€"
}

