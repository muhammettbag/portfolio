"use client";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio-info";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project
  const project = portfolioData.projects.find((p) => p.id.toString() === params.id);

  useEffect(() => {
    if (!project || !project.images || project.images.length === 0) return;

    // Otomatik 5 saniyede bir fotoğrafı kaydır
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [project]);

  if (!project) {
    return notFound();
  }

  const images = project.images || [project.imageUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative bg-navy selection:bg-teal/30">
      <ParticlesBackground />
      
      {/* Basit Navbar */}
      <header className="w-full h-[100px] flex items-center bg-transparent relative z-50">
        <div className="max-w-[1000px] w-full mx-auto px-4">
          <Link href="/#projeler" className="inline-flex items-center gap-2 text-[#8892b0] font-['Fira_Code',monospace] hover:text-[#64ffda] transition-colors text-sm">
            <ArrowLeft size={18} /> Geri Dön
          </Link>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-4 pb-20">
        {/* Başlık ve Tagler */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] mb-8 leading-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="font-['Fira_Code',monospace] text-[13px] bg-[#112240] text-[#ccd6f6] border border-[#233554] px-4 py-2 rounded-md shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Resim Galerisi (Carousel) */}
        {images.length > 0 && (
          <div className="relative w-full h-[50vh] md:h-[70vh] max-h-[750px] min-h-[400px] flex items-center justify-center bg-[#0a192f]/40 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(2,12,27,0.7)] group border border-[#233554] mb-16 p-4 md:p-8">
            <img 
              src={images[currentImageIndex]} 
              alt={`${project.title} - Fotoğraf ${currentImageIndex + 1}`}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://placehold.co/1000x550/0a192f/0a192f?text=%20`;
              }}
              className="max-w-full max-h-full object-contain transition-opacity duration-700 ease-in-out drop-shadow-xl"
            />

            {/* Carousel Kontrolleri */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  aria-label="Önceki Görsel"
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#112240]/80 text-[#ccd6f6] rounded border border-[#233554] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#233554] hover:text-[#64ffda] backdrop-blur-sm"
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <button 
                  onClick={nextImage}
                  aria-label="Sonraki Görsel"
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#112240]/80 text-[#ccd6f6] rounded border border-[#233554] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#233554] hover:text-[#64ffda] backdrop-blur-sm"
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-2 rounded-full bg-[#0a192f]/50 backdrop-blur-md" role="tablist">
                  {images.map((_, idx) => (
                    <button 
                      key={idx}
                      role="tab"
                      aria-selected={idx === currentImageIndex}
                      aria-label={`Görsel ${idx + 1} göster`}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-[#64ffda] w-6" : "bg-[#8892b0]/60 hover:bg-[#ccd6f6]"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Genişletilmiş Açıklama (Alt Metin) */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-[#ccd6f6] mb-6 font-['Fira_Code',monospace] flex items-center gap-3">
            <span className="text-[#64ffda]">01.</span> Proje Detayları
          </h2>
          <div className="text-[#8892b0] text-[17px] leading-[1.8] whitespace-pre-line">
            {project.fullDescription || project.summary}
          </div>
        </div>
      </main>
      
      <footer className="text-center py-8 mt-12 border-t border-[#233554]">
        <p className="text-[#8892b0] font-['Fira_Code',monospace] text-[13px]">
          &copy; {new Date().getFullYear()} Muhammet Bağ. Tüm Hakları Saklıdır.
        </p>
      </footer>
    </div>
  );
}
