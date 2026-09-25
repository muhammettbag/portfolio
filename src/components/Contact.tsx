"use client";
import { portfolioData } from "@/data/portfolio-info";
import { motion } from "framer-motion";
import { Hash } from "lucide-react";

export default function Contact() {
  const { email, github, linkedin } = portfolioData.personalInfo;

  return (
    <section id="iletisim" className="py-[100px] text-center w-full">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="section-title text-[2rem] font-bold text-[#ccd6f6] flex items-center justify-center mb-[40px] whitespace-nowrap after:hidden">
            <Hash className="text-[#64ffda] mr-[15px]" size={28} /> İletişim Bilgilerim
          </h2>
          
          <div className="contact-card mt-[50px] p-[50px] mx-auto w-full">
            <p className="text-[#8892b0] mb-[50px] text-[1.25rem]">
              Benimle projeleriniz hakkında konuşmak veya iletişime geçmek isterseniz sosyal medya hesaplarımdan ulaşabilirsiniz.
            </p>
            
            <div className="flex justify-center gap-6 flex-wrap">
              <a href={github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub Profilim">
                <i className="fab fa-github fa-2x mb-[10px]" aria-hidden="true"></i> <br/>GitHub
              </a>

              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn Profilim">
                <i className="fab fa-linkedin fa-2x mb-[10px]" aria-hidden="true"></i> <br/>LinkedIn
              </a>

              <a href={`mailto:${email}`} className="social-btn" aria-label="Bana E-Posta Gönder">
                <i className="fas fa-envelope fa-2x mb-[10px]" aria-hidden="true"></i> <br/>E-Posta
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
