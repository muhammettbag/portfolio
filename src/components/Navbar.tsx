"use client";
import { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio-info";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cvUrl } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımda", href: "#hakkimda" },
    { name: "İş Deneyimi", href: "#deneyim" },
    { name: "Kullandığım Teknolojiler", href: "#yetenekler" },
    { name: "Projeler", href: "#projeler" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a192f]/90 backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ height: "100px", display: "flex", alignItems: "center" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        
        {/* Sol Taraf: CV Butonu (Birebir orijinal) */}
        <div className="cv-btn-wrapper">
          <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="cv-btn-inner">
            <FileText size={18} /> CV'mi Görüntüle
          </a>
        </div>

        {/* Sağ Taraf: Linkler (Masaüstü) */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link hover:text-[#64ffda] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-[#64ffda]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-[#112240] px-4 py-4 shadow-xl">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="nav-link hover:text-[#64ffda] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
