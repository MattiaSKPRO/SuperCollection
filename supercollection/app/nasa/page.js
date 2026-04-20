import Navbar from "@/components/nasa/Navbar";
import Video from "@/components/nasa/Video";
import Notizie from "@/components/nasa/Notizie";
import Card from "@/components/nasa/Card";
import Topics from "@/components/nasa/Topics";
import Footer from "@/components/nasa/Footer";
export default function Nasa() {
  return (
    <>
      <main>
        <Navbar />
        <Video />

        <Notizie />
        <div className="flex flex-wrap justify-center gap-20 mt-10 ">
          <Card dati={datiCard} />
          <Card dati={datiCard1} />
          <Card dati={datiCard2} />
          <Card dati={datiCard3} />
        </div>
        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Topics dati={datiTopics1} />
          <Topics dati={datiTopics2} />
          <Topics dati={datiTopics3} />
          <Topics dati={datiTopics4} />
          <Topics dati={datiTopics5} />
          <Topics dati={datiTopics6} />
          <Topics dati={datiTopics7} />
          <Topics dati={datiTopics8} />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

const datiCard = {
  name: "Reid Wiseman",
  role: "Commander",
  bioLink: "Wiseman's Biography",
  image: "images/nasa/reid-wiseman.jpeg",
};
const datiCard1 = {
  name: "Victor Glover",
  role: "Pilot",
  bioLink: "Glover's Biography",
  image: "images/nasa/victor-glover.jpeg",
};
const datiCard2 = {
  name: "Christina Koch",
  role: "Mission Specialist",
  bioLink: "Koch's Biography",
  image: "images/nasa/christina-koch.jpeg",
};
const datiCard3 = {
  name: "Jeremy Hansen",
  role: "Mission Specialist",
  bioLink: "Hansen's Biography",
  image: "images/nasa/jeremy-hansen.jpeg",
};



const datiTopics1 = {
  bioLink: "Missions",
  image: "images/nasa/Missions.jpg",
};
const datiTopics2 = {
  bioLink: "Humans in Space ",
  image: "images/nasa/human.jpg",
};
const datiTopics3 = {
  bioLink: "Earth",
  image: "images/nasa/terra.jpg",
};
const datiTopics4 = {
  bioLink: "Our solar System ",
  image: "images/nasa/sistema.jpg",
};
const datiTopics5 = {
  bioLink: "Universe ",
  image: "images/nasa/universo.jpg",
};
const datiTopics6 = {
  bioLink: "Science Missions ",
  image: "images/nasa/science.jpeg",
};
const datiTopics7 = {
  bioLink: "Aeronautics",
  image: "images/nasa/aereo.jpg",
};
const datiTopics8= {
  bioLink: "Tecnology ",
  image: "images/nasa/tencology.png",
};

