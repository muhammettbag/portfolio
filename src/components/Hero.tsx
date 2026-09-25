"use client";
import { portfolioData } from "@/data/portfolio-info";
import { motion } from "framer-motion";
import { FaPaperPlane, FaBriefcase, FaReact, FaUserAstronaut } from "react-icons/fa";
import { DiDotnet, DiDocker } from "react-icons/di";

export default function Hero() {
  const { name, role, description } = portfolioData.personalInfo;

  return (
    <section id="hakkimda" className="min-h-screen flex items-center relative pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Yazı Alanı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 z-10"
        >
          <p className="hero-greeting">Merhaba, ben</p>
          <h1 className="hero-name">
            <span className="text-white">{name}</span>
          </h1>
          
          <div className="hero-role">
            <span className="text-[#ccd6f6] border-r-2 border-[#ccd6f6] pr-1 animate-pulse">{role}</span>
          </div>
          
          <p className="hero-description mt-5">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#iletisim" className="custom-btn flex items-center gap-2 bg-transparent text-[#64ffda] border border-[#64ffda] px-6 py-3 rounded text-[14px] font-['Fira_Code',monospace] hover:bg-[rgba(100,255,218,0.1)] transition-all">
              <FaPaperPlane /> İletişime Geç
            </a>
            <a href="#projeler" className="custom-btn-outline flex items-center gap-2 bg-transparent text-[#ccd6f6] border border-[#8892b0] px-6 py-3 rounded text-[14px] font-['Fira_Code',monospace] hover:border-[#ccd6f6] hover:bg-[rgba(204,214,246,0.1)] transition-all">
              <FaBriefcase /> Projelerim
            </a>
          </div>
        </motion.div>
        
        {/* Profil ve Badge Alanı */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 hidden md:flex justify-center relative mt-12 md:mt-0"
        >
          <div className="relative w-[300px] h-[300px]">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(100,255,218,0.2)_0%,rgba(10,25,47,0)_70%)] z-[1]"></div>
            
            {/* Placeholder */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#233554] border-2 border-[#64ffda] rounded-xl z-[2] flex items-center justify-center transition-all duration-250 hover:-translate-x-[10px] hover:-translate-y-[10px] hover:shadow-[10px_10px_0_0_#64ffda]">
               <FaUserAstronaut size={80} className="text-white" />
            </div>

            {/* Floating Badges */}
            <div className="absolute w-[50px] h-[50px] bg-[#112240] border border-[#233554] rounded-full flex items-center justify-center text-[24px] z-[3] -top-[20px] right-[20px] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] animate-[float_6s_ease-in-out_infinite]">
              <FaReact className="text-[#64ffda]" />
            </div>
            <div className="absolute w-[50px] h-[50px] bg-[#112240] border border-[#233554] rounded-full flex items-center justify-center text-[24px] z-[3] bottom-[40px] -left-[20px] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] animate-[float_6s_ease-in-out_infinite_2s]">
              <DiDotnet className="text-[#64ffda]" />
            </div>
            <div className="absolute w-[50px] h-[50px] bg-[#112240] border border-[#233554] rounded-full flex items-center justify-center text-[24px] z-[3] -bottom-[20px] right-[40px] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] animate-[float_6s_ease-in-out_infinite_4s]">
              <DiDocker className="text-[#64ffda]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <a href="#deneyim" className="scroll-indicator">
        <div className="mouse">
            <div className="wheel"></div>
        </div>
        <span>Aşağı Kaydır</span>
      </a>
    </section>
  );
}
