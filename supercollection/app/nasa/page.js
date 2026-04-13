import Navbar from "@/components/nasa/Navbar";
import Video from "@/components/nasa/Video";
import Notizie from "@/components/nasa/Notizie";
import Card from "@/components/nasa/Card";
export default function Nasa() {
  return (
    <main >
      <Navbar />
      <Video />
      
      <Notizie />
      <div className="flex flex-wrap justify-center gap-20 mt-10 ">
            <Card dati={datiCard} />
            <Card dati={datiCard1}/>
            <Card  dati={datiCard2}/>
            <Card  dati={datiCard3}/>
            </div>
    </main>
  );
}


const datiCard = 
  {
    name: "Reid Wiseman",
    role: "Commander",
    bioLink: "Wiseman's Biography",
    image: "images/nasa/reid-wiseman.jpeg",
  }
  const datiCard1={
  
    name: "Victor Glover",
    role: "Pilot",
    bioLink: "Glover's Biography",
    image: "images/nasa/victor-glover.jpeg",
  }
  const datiCard2={
  
    name: "Christina Koch",
    role: "Mission Specialist",
    bioLink: "Koch's Biography",
    image: "images/nasa/christina-koch.jpeg",
  }
  const datiCard3={
  
    name: "Jeremy Hansen",
    role: "Mission Specialist",
    bioLink: "Hansen's Biography",
    image: "images/nasa/jeremy-hansen.jpeg",
  }
