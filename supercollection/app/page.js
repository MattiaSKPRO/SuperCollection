import Image from "next/image";
import Navbar from "@/components/Yamaha/Navbar";
import Bannerone from "@/components/Yamaha/Bannerone";
import Card from "@/components/Yamaha/Card";
import Esplora from "@/components/Yamaha/Esplora";
import Duce from "@/components/Duce";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <Bannerone></Bannerone>

      <Card></Card>
      <h2 className=" pl-80   text-xl font-bold mb-8 uppercase tracking-tighter">
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
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
        <Esplora />
       
      </div>
      <div className="xl:grid-cols-2">
      <Duce></Duce>
      </div>
    </>
  );
}
