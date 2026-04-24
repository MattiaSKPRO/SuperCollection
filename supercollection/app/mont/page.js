import Navbar from "@/components/mont/Navbar";
import Hero from "@/components/mont/Hero";
import Slide from "@/components/mont/Slide";

export default function Mont() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-[#f6f5f3] space-y-2"> {/* Contenitore grigio per tutti gli slide */}
        <Slide  />
      
      </div>
    </>
  );
}

// Dati (definiti fuori o in un file separato)
const datiSlide1 = {
  id: 1,
  title: "Tote Montblanc Envelope",
  price: "€ 1,600.00",
  image: "images/mont/bag.webp",
};

const datiSlide2 = {
  id: 2,
  title: "Astuccio per 1 Strumento da Scrittura",
  price: "€ 160.00",
  image: "images/mont/case.webp",
};

const datiSlide3 = {
  id: 3,
  title: "Stilografica Meisterstück Classique",
  price: "€ 850.00",
  image: "images/mont/pen.webp",
  label: "Stilografica Meisterstück"
};

const datiSlide4 = {
  id: 4,
  title: "Borsa Weekender 43 in Denim",
  price: "€ 2,100.00",
  image: "images/mont/weekender.webp",
};

const datiSlide5 = {
  id: 5,
  title: "Occhiali da Sole Quadrati",
  price: "€ 390.00",
  image: "images/mont/glasses.webp",
};

const datiSlide6 = {
  id: 6,
  title: "Bracciale Regolabile",
  price: "€ 260.00",
  image: "images/mont/bracelet.webp",
};