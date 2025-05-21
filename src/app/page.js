import Image from "next/image";
import Hero from "@/landingpage/Hero";
import Features from "./landingpage/Features";
import Contact from "./landingpage/Contact";


export default function Home() {
  return (
   <>
   <div className="">


        <Hero />
        <Features />
        <Contact />


   </div>
   </>
  );
}
