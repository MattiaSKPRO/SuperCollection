import Image from "next/image";
import Navbar from "@/components/Yamaha/Navbar";
import Bannerone from "@/components/Yamaha/Bannerone";
import Card from "@/components/Yamaha/Card";
import Esplora from "@/components/Yamaha/Esplora";
import Duce from "@/components/Yamaha/Duce";
import Tre from "@/components/Yamaha/Tre";
import Eventi from "@/components/Yamaha/Eventi";
import Destinazione from "@/components/Yamaha/Destinazione";
import About from "@/components/Yamaha/About";
export default function Home() {
  return (
    <>


      <Bannerone></Bannerone>

      <Card></Card>
      <h2 className=" xl:pl-80   text-xl font-bold mb-8 uppercase tracking-tighter ">
        Esplora Yamaha
      </h2>
      <div
        className="
        mt-0.5
  grid 
  grid-cols-2      
  md:grid-cols-4   
  xl:grid-cols-6   
  gap-x-4          
  gap-y-5        
  justify-items-center 
  max-w-7xl     
  mx-auto       
  px-6             
  my-12            
"
      >
        <Esplora titolo="moto"immagine="images/duke.jpg"/>
        <Esplora titolo="scooters"immagine="images/scooter.jpg"/>
        <Esplora titolo="motori fuoribordo"immagine="images/motore.jpg"/>
        <Esplora titolo="moto d'acqua"immagine="images/d'acqua.jpg"/>
        <Esplora titolo="package"immagine=" images/barca.jpg"/>
        <Esplora titolo="ATV & side by side "immagine="images/cuod.jpg"/>
        <Esplora titolo="veicoli leggeri "immagine="images/golf.jpg"/>
        <Esplora titolo="eccessori"immagine="images/scarico.jpg"/>
        <Esplora titolo="abbigliamento &merchandise "immagine="images/guanti.jpg"/>
        <Esplora titolo="oli per motori"immagine="images/olio.jpg"/>
        <Esplora titolo="pulizia e protezione"immagine="images/pulire.jpg"/>
       
      </div>
      <div className="xl:grid-cols-2">
      <Duce></Duce>
      </div>
      <h2 className=" xl:pl-80   text-xl font-bold mb-8 uppercase tracking-tighter ">
        Esplora Yamaha
      </h2>
      <div className="xl:flex flex-row justify-center gap-12 mt-2 md:flex sm:flex-row">
  
    <Tre scritta="insieme ad ogni avventura" immagine=" images/girl.webp"></Tre>
    <Tre scritta="partener tecnici"immagine=" images/lega.webp"></Tre>
    <Tre scritta="noleggia la tua yamaha "immagine="images/tizio.webp"></Tre>
    </div>
      <h2 className=" xl:pl-80   text-xl font-bold mb-8 uppercase tracking-tighter mt-10">
        Prossimi Eventi 
      </h2>
   <div className="flex flex-col md:flex-row justify-center gap-5 max-w-6xl mx-auto mt-10">
  <Eventi  data="28 – 29 Mar 2026Concessionarie Ufficiali Yamaha"titolo="OPEN WEEKEND"descrizione="Inauguriamo la stagione con un Open Weekend in tutta Italia. Sabato 28 e Domenica 29 Marzo le Concessionarie Ufficiali Yamaha resteranno aperte dalle 9:00 alle 19:00 per"immagine="images/evento3.jpg" />
  <Eventi  data="28 – 29 Mar 2026Alassio (SV), Campionato Italiano Motorally"titolo="TÉNÉRÉ CHALLENGE - 1° TAPPA"descrizione="Prima tappa per il Challenge riservato al Ténéré 700 all’interno del Campionato Italiano Motorally, patrocinato dalla Federazione Motociclistica Italiana (FMI). Per avere"immagine="images/evento2.jpg" />
  <Eventi  data="18 – 19 Apr 2026Bobbio (PC)"titolo="HAT SERIES ADVENTOURFEST - 1° TAPPA"descrizione="L'HAT Adventourfest è un evento dedicato agli appassionati di mototurismo-avventura. Una grande manifestazioni all'aperto durante la quale sarà possibile provare il nostro"immagine="images/raduno.png"/>
</div>
<div className="mt-10 ">
<Destinazione></Destinazione>
</div>
<About></About>
    </>
  );
}
