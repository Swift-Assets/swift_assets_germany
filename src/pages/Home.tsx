import { useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Specialty } from "@/components/sections/Specialty";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Swift Assets UG — Vermögenswerte. Schnell. Sicher.";
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Specialty />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
