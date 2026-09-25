"use client";
import { portfolioData } from "@/data/portfolio-info";
import { motion } from "framer-motion";
import { Hash } from "lucide-react";

export default function Experience() {
  return (
    <section id="deneyim" className="py-[100px] bg-alternate w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-[2rem] font-bold text-[#ccd6f6] flex items-center mb-[40px] whitespace-nowrap">
            <Hash className="text-[#64ffda] mr-[15px]" size={28} /> İş Deneyimi
          </h2>

          <div className="timeline mt-[50px]">
            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} className="timeline-item group">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">
                    {exp.title} <span>@ {exp.company}</span>
                  </h3>
                  <p className="timeline-date mt-1 mb-4">{exp.date}</p>
                  <p className="timeline-desc">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
