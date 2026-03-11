import Image from "next/image";
import Navbar from "@/components/Yamaha/Navbar";
import Bannerone from "@/components/Yamaha/Bannerone";
import Card from "@/components/Yamaha/Card";
import Esplora from "@/components/Yamaha/Esplora";
export default function Home() {
  return (
    
    <>
    
    <Navbar></Navbar>
   
    <Bannerone></Bannerone>
   
    <Card></Card>
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
    <Esplora></Esplora>
</div>
    </>
  );
}
