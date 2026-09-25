"use client";
/* eslint-disable @next/next/no-img-element */
import { portfolioData } from "@/data/portfolio-info";
import { motion } from "framer-motion";
import { Hash } from "lucide-react";

import Link from "next/link";

export default function Projects() {
  return (
    <section id="projeler" className="py-[100px] bg-alternate w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center mx-auto justify-center mb-[40px] text-[2rem] font-bold text-[#ccd6f6] flex items-center whitespace-nowrap after:hidden">
            <Hash className="text-[#64ffda] mr-[15px]" size={28} /> Projelerim
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
            {portfolioData.projects.map((project) => (
              <Link href={`/project/${project.id}`} key={project.id} className="group">
                <div className="project-card h-full flex flex-col p-0 border border-transparent rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#64ffda] hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] bg-[#112240]">
                  {/* Kapak Fotoğrafı */}
                  <div className="w-full h-72 flex items-center justify-center bg-transparent relative border-b border-[#233554] p-2">
                    <img 
                      src={project.imageUrl || `https://placehold.co/600x400/112240/112240?text=%20`}
                      alt={project.title}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/600x400/112240/112240?text=%20`;
                      }}
                      className="w-full h-full object-contain transition-transform duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] drop-shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-[#0a192f]/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                  </div>
                  
                  {/* İçerik */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="project-title mb-4 group-hover:text-[#64ffda] transition-colors line-clamp-2">{project.title}</h3>
                    <p className="project-summary text-[#8892b0] mb-6 flex-grow leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
