import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <ParticlesBackground />
      <Navbar />
      <div className="main-content-wrapper">
        <main role="main">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      
      <footer className="text-center py-4 mt-5">
        <div className="container mx-auto px-4">
          <p className="text-[#8892b0] mb-0 font-['Fira_Code',monospace] text-[13px]">
            &copy; 2026 Muhammet Bağ. Tüm Hakları Saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
